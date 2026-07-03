"use strict";var hi=Object.create;var Ls=Object.defineProperty;var ui=Object.getOwnPropertyDescriptor;var fi=Object.getOwnPropertyNames;var gi=Object.getPrototypeOf,mi=Object.prototype.hasOwnProperty;var vi=(t,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of fi(e))!mi.call(t,r)&&r!==s&&Ls(t,r,{get:()=>e[r],enumerable:!(i=ui(e,r))||i.enumerable});return t};var bi=(t,e,s)=>(s=t!=null?hi(gi(t)):{},vi(e||!t||!t.__esModule?Ls(s,"default",{value:t,enumerable:!0}):s,t));const a=require("lit"),c=require("lit/decorators.js"),Ks=require("@scaleflex/dam-ui/i18n"),Is=require("@scaleflex/dam-ui/controllers"),P=require("@scaleflex/dam-core"),xi=require("@scaleflex/dam-ui/theme"),m=require("@scaleflex/dam-ui");require("@scaleflex/dam-ui/primitives");class _i{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function yi(){return new _i({t:(t,e,s)=>{const i=(r,o)=>r.replace(/\{\{(\w+)\}\}/g,(l,n)=>String(o[n]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const r=e,o=r.count;if(o!==void 0){const l=String((o===1?r.defaultValue_one:r.defaultValue_other)??r.defaultValue??t);return i(l,r)}return i(String(r.defaultValue??t),r)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const Bs="a656ff82-0270-46dc-8de8-c734318d841d",$i="https://i18n-fastly.ultrafast.io",wi="https://neo.wordplex.io",Vs="asset-picker",qs=Ks.createI18n({gridUuid:Bs,namespace:Vs,cdnUrl:$i}),ki=qs.initI18n;qs.getInstance;const Si=Ks.createMissingKeysHelper({lsKey:"apTranslationsMissingKeysEnabled",namespace:Vs,gridUuid:Bs,prodUrl:wi,logPrefix:"[asset-picker]"});class Ci{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Fi(t){return"extension"in t&&!("path"in t)}class Ai{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,s,i,r){const o=this.store.getState(),l=this._getCombinedList();for(let n=e;n<=s;n++){const d=l[n];d&&(Fi(d)?o.disabledAssetIds.has(d.uuid)||i.set(d.uuid,d):o.disabledFolderIds.has(d.uuid)||r.set(d.uuid,d))}}handleSelect(e,s,i){var n,d,h,u;const r=this.store.getState();if(r.disabledAssetIds.has(e.uuid))return;const o=new Map(r.selectedAssets);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const f=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=new Map(r.selectedFolders);this._applyRangeSelection(f,p,o,g);const v=(d=r.config)==null?void 0:d.maxSelections;if(v&&o.size+g.size>v)return;this.store.setState({selectedAssets:o,selectedFolders:g})}else{const f=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=r.assets;for(let w=f;w<=p;w++)g[w]&&!r.disabledAssetIds.has(g[w].uuid)&&o.set(g[w].uuid,g[w]);const v=(h=r.config)==null?void 0:h.maxSelections;if(v&&o.size>v)return;this.store.setState({selectedAssets:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const f=(u=r.config)==null?void 0:u.maxSelections,p=o.size+(this._folderSelectionEnabled?r.selectedFolders.size:0);if(f&&p>f)return;this.store.setState({selectedAssets:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map});this.lastClickedIndex=s}handleFolderSelect(e,s,i){var n,d,h;if(!this._folderSelectionEnabled)return;const r=this.store.getState();if(r.disabledFolderIds.has(e.uuid))return;const o=new Map(r.selectedFolders);if(!(((n=r.config)==null?void 0:n.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const u=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),p=new Map(r.selectedAssets);this._applyRangeSelection(u,f,p,o);const g=(d=r.config)==null?void 0:d.maxSelections;if(g&&p.size+o.size>g)return;this.store.setState({selectedAssets:p,selectedFolders:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const u=(h=r.config)==null?void 0:h.maxSelections,f=o.size+r.selectedAssets.size;if(u&&f>u)return;this.store.setState({selectedFolders:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var d;const s=this.store.getState(),i=(d=s.config)==null?void 0:d.maxSelections,r=this._folderSelectionEnabled?s.selectedFolders.size:0,o=e.filter(h=>!s.disabledAssetIds.has(h.uuid)),l=new Map,n=i?Math.max(0,Math.min(o.length,i-r)):o.length;for(let h=0;h<n;h++)l.set(o[h].uuid,o[h]);return this.store.setState({selectedAssets:l}),this.lastClickedIndex=-1,l.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,r=e.filter(d=>!s.disabledFolderIds.has(d.uuid)),o=new Map,l=i?Math.max(0,Math.min(r.length,i-s.selectedAssets.size)):r.length;for(let d=0;d<l;d++)o.set(r[d].uuid,r[d]);this.store.setState({selectedFolders:o})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}async function Ei(t){return t.get("/collections")}async function Ti(t,e){return t.get(`/collections/${e}/folders`)}function Gs(t){return t.filter(e=>!!e.name).map(e=>({...e,children:Gs(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function Li(t){return((await t.get("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,r)=>i.label.localeCompare(r.label))}const Ii=3e4;async function Oi(t,e){const s=`${e}/key/${t.securityTemplateKey}`,i=new AbortController,r=setTimeout(()=>i.abort(),Ii);try{const o=await fetch(s,{headers:{"X-Filerobot-Key":t.securityTemplateKey},signal:i.signal});if(clearTimeout(r),!o.ok){let n=`API error: ${o.status} ${o.statusText}`;try{const d=await o.json();d.msg&&(n=`API error: ${o.status} - ${d.msg}`)}catch{}throw new Error(n)}const l=await o.json();if(l.status==="error")throw new Error(`API error: ${l.msg||"Unknown error"}`);return{key:l.key,permissions:l.permissions??[]}}catch(o){throw clearTimeout(r),o instanceof DOMException&&o.name==="AbortError"?new Error("API request timed out"):o}}function Pi(t,e){return t?t.includes(e):!1}const Di={FOLDER_CREATE:"DIR_CREATE"};function Jt(t){var r,o;const e=(r=t.info)==null?void 0:r.playlists;if(!(e!=null&&e.length))return null;const s=(o=e[0])==null?void 0:o.playlists;return s!=null&&s.length&&s[0]||null}function Xe(t){return(t.type??"").startsWith("image")}function zi(t){return(t.type??"").startsWith("video")}function Mi(t){return(t.type??"").startsWith("audio")}function Qs(t){var e,s;return((e=t.url)==null?void 0:e.cdn)??((s=t.url)==null?void 0:s.public)??""}function Ri(t,e){const{meta:s,name:i}=t;if(s!=null&&s.alt)return s.alt;const r=s==null?void 0:s.title;if(typeof r=="string"&&r)return r;if(r&&typeof r=="object"){if(e){const l=r[e];if(l)return l}const o=Object.keys(r)[0];if(o){const l=r[o];if(l)return l}}return i.split(".")[0]}function Qt(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Ht(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}function Ni(t){return{width:Qt(t),height:Ht(t)}}function Ui(t){return Jt(t)!==null}function ji(t){return Jt(t)}function Ki(t){return Jt(t)??Qs(t)}const Bi={excellent:90,good:75,fair:60},Vi=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],qi=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],Gi=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],Qi={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},Hi=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),Yi=new Set([...Hi,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function nt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function Hs(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Yi.has(e)}function es(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const Wi=new Set(["png","svg","webp","gif","avif"]);function fs(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return Wi.has(e)}const Xi=new Set(["svg","svg+xml","png","pdf"]);function Ys(t){return Xi.has(es(t).toLowerCase())}let ps=null;function Zi(t){ps=t??null}function Ee(t,e){if(!t||!ps)return t;try{return ps(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function Yt(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return Ee(Je(s),{source:"asset",asset:t})}function Ws(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?Ee(Je(s),{source:"video",asset:t}):""}function gs(t){var s,i;let e=Je(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),Ee(Te(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:t})):""}function Te(t,e){try{const s=new URL(t);for(const[i,r]of Object.entries(e))s.searchParams.set(i,r);return s.toString()}catch{return t}}const Os=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\/(?:v\d+\/)?/i;function Je(t,e){if(!t)return"";const s=r=>r.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(Os);if(i){const r=i[2],o=t.replace(Os,`$1assets.filerobot.com/${r}/`);return s(o)}if(e)try{const r=new URL(t);return s(`https://assets.filerobot.com/${e}${r.pathname}${r.search}`)}catch{}return t}function Xs(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=Je(s);const r=nt(t.file_type),o=String(window.devicePixelRatio||1);let l;return r==="video"?l=Te(i,{w:e,dpr:o,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||es(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),l=Te(i,{w:e,dpr:o,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):l=Te(i,{w:e,dpr:o}),Ee(l,{source:"folder"})}function ms(t,e){const s={};return t.format&&(s.force_format=Qi[t.format]),t.quality&&t.format!=="png"&&(s.q=String(Bi[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}function Ji(t,e,s){const i=Je(t);if(!i)return t;const r=ms(e,s);return Object.keys(r).length>0?Te(i,r):i}const b={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},S={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},A={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},er={AND:"AND"},$={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},ts={[$.DATE]:"date_",[$.BOOLEAN]:"bool_",[$.NUMERIC]:"num_",[$.DECIMAL2]:"dec_",[$.ATTACHMENTS_ASSETS]:"attach_",[$.ATTACHMENT_URI]:"uri_",[$.SELECT_ONE]:"one_",[$.MULTI_SELECT]:"multi_",[$.SUPERTAGS]:"tags_",[$.TEXT]:"text_",[$.TEXT_AREA]:"area_",[$.GEO_POINT]:"geo_",[$.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(ts).map(([t,e])=>[e,t]));const Zs=Object.values(ts),be={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Ps={EMPTY:"empty",NOT_EMPTY:"non-empty"},ce="empty",de="non-empty",Ye="specific",rs=10,Ft=10,Kt=10,Js="filters:pinned:",ei="metadata:pinned:",Ds=[b.DATE,b.TYPE,b.SIZE],ti=A.IS,Vt="20",qt="1",tr=0,sr=[{key:b.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:b.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:b.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:b.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:b.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:b.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:b.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:b.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:b.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],ir={key:b.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},rr={key:b.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},Et=[ir,...sr,rr],lt={[b.TYPE]:"Format",[b.DATE]:"Date",[b.SIZE]:"Size",[b.LICENSE_EXPIRY]:"License expiry",[b.TAGS]:"Tags",[b.LABELS]:"Labels",[b.PRODUCT_REF]:"Products",[b.IMAGE]:"Image",[b.COLOR]:"Color",[b.METADATA]:"Metadata",[b.APPROVAL]:"Approval",[S.STATUS]:"Approval",[S.APPROVER]:"Approval",[S.REQUESTOR]:"Approval",[S.DUE_DATE]:"Approval"},At={...Object.fromEntries(Et.map(t=>[t.key,t.labelKey])),[S.STATUS]:"filterApproval",[S.APPROVER]:"filterApproval",[S.REQUESTOR]:"filterApproval",[S.DUE_DATE]:"filterApproval"},se={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},Wt=[{value:se.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:se.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:se.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:se.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:se.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:se.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:se.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:se.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],or={[se.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[se.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[se.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[se.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[se.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[se.FONTS]:["ttf","otf","woff","woff2","eot"]},os={RESOLUTION:0,ORIENTATION:1,FACES:2},ar=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],lr=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],nr=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],si=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],vs=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],ii=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],ri=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],cr=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],dr=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],as=[{label:"Is",value:A.IS,labelKey:"operatorIs"},{label:"Contains",value:A.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],Ne=[{label:"Is",value:A.IS,labelKey:"operatorIs"},{label:"Is not",value:A.IS_NOT,labelKey:"operatorIsNot"}],ls=[{label:"Is",value:A.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:A.IS,labelKey:"operatorContains"},{label:"Does not contain",value:A.IS_NOT,labelKey:"operatorDoesNotContain"}],ns=[{label:"Is",value:A.IS,labelKey:"operatorIs"},{label:"Greater than",value:A.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:A.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:A.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:A.RANGE,labelKey:"operatorBetween"}],zs=[{label:"Is",value:A.IS_EXACT,labelKey:"operatorIs"},{label:"Is not",value:A.IS_NOT,labelKey:"operatorIsNot"}],pr=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--sfx-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--sfx-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--sfx-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"}],Xt=[{label:"Empty",value:ce,labelKey:"empty"},{label:"Not empty",value:de,labelKey:"notEmpty"}],hr=[...Xt,{label:"Specific",value:Ye,labelKey:"specific"}],ur=[{label:"Empty",value:ce,labelKey:"empty"},{label:"Not empty",value:de,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],Gt={[$.DATE]:"calendar",[$.BOOLEAN]:"toggle-left",[$.NUMERIC]:"file-digit",[$.DECIMAL2]:"decimals-arrow-right",[$.ATTACHMENTS_ASSETS]:"paperclip",[$.ATTACHMENT_URI]:"link-2",[$.SELECT_ONE]:"circle-dot",[$.MULTI_SELECT]:"square-check",[$.SUPERTAGS]:"hash",[$.TEXT]:"text-initial",[$.TEXT_AREA]:"text-align-justify",[$.GEO_POINT]:"locate",[$.INTEGER_LIST]:"list-ordered"},fr={[$.TEXT]:"text",[$.TEXT_AREA]:"text",[$.NUMERIC]:"number",[$.DECIMAL2]:"number",[$.BOOLEAN]:"boolean",[$.SELECT_ONE]:"select-one",[$.MULTI_SELECT]:"multi-select",[$.SUPERTAGS]:"tags",[$.DATE]:"date",[$.GEO_POINT]:"geo",[$.ATTACHMENTS_ASSETS]:"attachment",[$.ATTACHMENT_URI]:"attachment",[$.INTEGER_LIST]:"attachment"};async function gr(t){var i;return(((i=(await t.get("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(r=>({name:r.name,value:r.value,count:r.count,category:r.category??r.value.split("_")[0],label:mr(r.name)}))}function mr(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function vr(t){var v,w;const e=await t.get("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,o=((i==null?void 0:i.model)??[])[tr],l=i==null?void 0:i.store,d=((l==null?void 0:l.regional_variants_groups)??[]).map(x=>({uuid:x.uuid,label:x.label??x.name??"",variants:(x.variants??[]).map(y=>({api_value:y.api_value??y.value??"",internal_unique_value:y.internal_unique_value??y.api_value??"",label:y.label??y.name??""}))})).filter(x=>x.variants.length>1),h={};for(const x of d)h[x.uuid]=((v=x.variants[0])==null?void 0:v.api_value)??"";const u=(s==null?void 0:s.project_branding)??((w=e.settings)==null?void 0:w.project_branding),f=u==null?void 0:u.brandColor;if(!o)return{fields:[],regionalVariantGroups:d,regionalFilters:h,brandColor:f};const p=o.groups??[],g=[];for(const x of p){const y=x.name||"";for(const _ of x.fields??[]){const E=_.possible_values,D=E==null?void 0:E.map(C=>({api_value:C.api_value??C.value??"",internal_unique_value:C.internal_unique_value??C.api_value??"",label:C.label??C.name??C.api_value??""}));g.push({key:_.key??_.ckey,label:_.title??_.label??_.key??"",type:_.type??"text",slug:_.slug,ckey:_.ckey,possible_values:D,group:y,regionalVariantsGroupUuid:_.regional_variants_group_uuid})}}return{fields:g,regionalVariantGroups:d,regionalFilters:h,brandColor:f}}function We(t){return t.toLocaleDateString("en-CA")}function Bt(){return We(new Date)}function bs(t){const e=new Date;switch(t){case"today":return{from:Bt(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:We(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:Bt(),to:We(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:We(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:Bt(),to:We(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:We(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:Bt(),to:We(s)}}default:return null}}function Ms(t,e){return e?e.type==="date"?br(e):e.type==="string"?xr(e):!0:!1}function br(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function xr(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function _r(t,e={}){const s=[];for(const[i,r]of Object.entries(t)){if(!r||!Ms(i,r))continue;const o=$r(i,r);s.push(...o)}for(const[i,r]of Object.entries(e)){if(!r||!Ms(i,r))continue;const o=Er(i,r);s.push(...o)}return yr(s)}function yr(t){const e=[],s=[],i=[];for(const r of t)r.startsWith("type:")||r.startsWith("type=")?e.push(r):r.startsWith("mimetype:")||r.startsWith("mimetype=")?s.push(r):i.push(r);if(e.length>0&&s.length>0){const r=[...e,...s].join(" , ");i.push(r)}else i.push(...e,...s);return i}function $r(t,e){if(e.type==="date")return oi(t,e);if(t===b.IMAGE)return Ar(e);const s=e,{operator:i=ti,values:r=[],logic:o}=s;if(r.length===0)return[];switch(t){case b.SIZE:return wr(t,r,"..");case b.FACES:return kr(t,i,r);case b.TAGS:return Ze(t,i,Rs(r),",",o);case b.LABELS:return Ze(t,i,Rs(r),",",o);case b.COLOR:return Sr(i,r,o);case b.TYPE:return Cr(r,i);case b.MIME_TYPE:return Fr(t,r,i);case b.PRODUCT_REF:return Ze(t,"=%",r,",",o);default:return Ze(t,i,r,",",o)}}function oi(t,e){const s=e.field||"created";if(e.kind===be.PRESET&&e.preset){if(e.preset===Ps.EMPTY)return[`${s}:"empty"`];if(e.preset===Ps.NOT_EMPTY)return[`${s}:"non-empty"`];const i=bs(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===be.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===be.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===be.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===be.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function wr(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function kr(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function Ze(t,e,s,i,r){if(s.length===0)return[];if(r===er.AND)return s.map(l=>`${t}${e}"${l}"`);const o=s.map(l=>`"${l}"`).join(i);return[`${t}${e}${o}`]}function Sr(t,e,s){const i=[],r=Ze("color_search",t,e,",",s);return i.push(...r),i.push('color_operator:"AND"'),i}function Cr(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const o of t){const l=or[o];if(l)for(const n of l){const d=`${o}_${n}`;s.has(d)||(s.add(d),i.push(d))}else s.has(o)||(s.add(o),i.push(o))}const r=i.map(o=>`"${o}"`).join(",");return[`type${e}${r}`]}function Fr(t,e,s,i){if(e.length===0)return[];const r=e.map(o=>`"${o}"`).join(",");return[`${t}${s}${r}`]}function Ar(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const l=t,n=l.resolution,d=l.orientation,h=l.faces;return n!=null&&n.length&&e.push(`resolution:"${n.join(",")}"`),d!=null&&d.length&&e.push(`orientation:"${d.join(",")}"`),h!=null&&h.length&&e.push(`faces:"${h.join(",")}"`),e}const s=t,i=s[os.RESOLUTION],r=s[os.ORIENTATION],o=s[os.FACES];return i&&e.push(`resolution:"${i}"`),r&&e.push(`orientation:"${r}"`),o&&e.push(`faces:"${o}"`),e}function Er(t,e){const s=Ir(t),i=Lr(t);if(e.type==="date")return Tr(s,e,i);const r=e,{operator:o=ti,values:l=[],logic:n,metadataType:d}=r;if(l.length===0)return[];if(l.length===1&&(l[0]===ce||l[0]===de)){const h=d===$.GEO_POINT?A.IS+"~":A.IS;return[`${s}${h}"${l[0]}"`]}if((d===$.NUMERIC||d===$.DECIMAL2)&&o===A.RANGE)return[`${s}${A.IS}"${l.join('","')}"`];if(d===$.GEO_POINT){const h=l.map(u=>{const f=u.indexOf("..");if(f===-1)return`(${u})`;const p=u.slice(0,f),g=u.slice(f);return`(${p})${g}`});return Ze(s,o+"~",h,",",n)}return Ze(s,o,l,",",n)}function Tr(t,e,s){const i=oi(t,e);return!s||i.length===0?i:i.map(r=>{const o=r.search(/[^a-zA-Z0-9_]/);if(o===-1)return`"${r}"`;const l=r.slice(0,o),d=r.slice(o).replace(/"/g,"");return`"${l}${d}"`})}function Lr(t){return t.startsWith("date_")}function Ir(t){for(const e of Zs)if(t.startsWith(e))return t.slice(e.length);return t}function Rs(t){return t.map(e=>e.replace(/#/g,""))}const Or=new Set([b.DATE,b.LICENSE_EXPIRY,S.DUE_DATE]),Pr={[b.DATE]:"created",[b.LICENSE_EXPIRY]:b.LICENSE_EXPIRY,[S.DUE_DATE]:S.DUE_DATE};function hs(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=Dr(s,i));return e}function Dr(t,e){return e.type==="string"||e.type==="date"?e:Or.has(t)?{type:"date",field:e.field??Pr[t]??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function zr(t){const e=localStorage.getItem(Js+t),s=localStorage.getItem(ei+t);let i;try{i=e?JSON.parse(e):[...Ds]}catch{i=[...Ds]}let r;try{r=s?JSON.parse(s):[]}catch{r=[]}return{pinnedFilters:i,pinnedMetadata:r}}function Mr(t,e){localStorage.setItem(Js+t,JSON.stringify(e))}function Rr(t,e){localStorage.setItem(ei+t,JSON.stringify(e))}const ai="sort-by",li="sort-order";function Ns(t,e){try{localStorage.setItem(ai,t),localStorage.setItem(li,e)}catch{}}function Nr(){try{const t=localStorage.getItem(ai),e=localStorage.getItem(li);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const ni="ap-last-folder",ci="ap-last-view",di="ap-last-tab";function ct(t,e){return e?`${t}:${e}`:t}function Us(t,e){try{localStorage.setItem(ct(ni,e),t)}catch{}}function Ur(t){try{return localStorage.getItem(ct(ni,t))}catch{return null}}function jr(t,e){try{localStorage.setItem(ct(ci,e),t)}catch{}}function Kr(t){try{return localStorage.getItem(ct(ci,t))}catch{return null}}function Br(t,e){try{localStorage.setItem(ct(di,e),t)}catch{}}function Vr(t){try{const e=localStorage.getItem(ct(di,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}const xs=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],qr=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...xs],Gr=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],Qr=[{value:"name",labelKey:"sortName",label:"Name"}],Hr=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],Yr=[{value:"name",labelKey:"sortName",label:"Name"}];var Wr=Object.defineProperty,Xr=Object.getOwnPropertyDescriptor,_s=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xr(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Wr(e,s,r),r};let Tt=class extends a.LitElement{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return a.html`
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
    `}};Tt.styles=a.css`
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
  `;_s([c.property({type:Boolean})],Tt.prototype,"open",2);_s([c.query("dialog")],Tt.prototype,"dialog",2);Tt=_s([m.customElement("ap-modal")],Tt);const ge=a.css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;var Zr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Nt=(t,e,s,i)=>{for(var r=i>1?void 0:i?Jr(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Zr(e,s,r),r};let et=class extends a.LitElement{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return a.html`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t("regionalSettings","Regional settings")}
        title=${this.t("regionalSettings","Regional settings")}
      >
        <sfx-icon name="globe" .size=${18}></sfx-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${t?a.nothing:a.html`
              <div class="empty-msg">
                ${this.t("noRegionalSettings","No regional settings configured")}
              </div>
            `}
        ${this.groups.map(e=>a.html`
            <div class="group">
              <div class="group-label">${e.label}</div>
              ${e.variants.map(s=>{const i=this.selectedFilters[e.uuid]===s.api_value;return a.html`
                  <button
                    class="variant-option"
                    ?data-selected=${i}
                    @click=${()=>this._selectVariant(e.uuid,s.api_value)}
                  >
                    <span class="variant-label">${s.label}</span>
                    <span class="check-mark"
                      >${i?a.html`<sfx-icon name="check" .size=${14}></sfx-icon>`:""}</span
                    >
                  </button>
                `})}
            </div>
          `)}
      </div>
    `}};et.styles=a.css`
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
  `;Nt([c.property({type:Array})],et.prototype,"groups",2);Nt([c.property({type:Object})],et.prototype,"selectedFilters",2);Nt([c.property({attribute:!1})],et.prototype,"t",2);Nt([c.state()],et.prototype,"_open",2);et=Nt([m.customElement("ap-regional-settings")],et);var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,Z=(t,e,s,i)=>{for(var r=i>1?void 0:i?to(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&eo(e,s,r),r};const so=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let V=class extends a.LitElement{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=P.debounce(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=so.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return a.html`
      <div class="header-row">
        ${e.length>1?a.html`<sfx-dropdown
              .value=${this.activeTab}
              .options=${e}
              @sfx-change=${this._handleTabChange}
            ></sfx-dropdown>`:a.nothing}
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${16}></sfx-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab==="folders"?t("aiSearchFoldersPlaceholder","AI search folders and assets"):t("aiSearchAssetsPlaceholder","AI search assets"):this.activeTab==="labels"&&!this.isInsideLabel?t("searchLabelsPlaceholder","Search labels"):this.activeTab==="collections"&&!this.isInsideCollection?t("searchCollectionsPlaceholder","Search collections"):this.activeTab==="collections"&&this.isInsideCollection&&!this.isInsideCollectionLeaf?t("searchCollectionFoldersPlaceholder","Search collection folders"):this.activeTab==="folders"?t("searchFoldersPlaceholder","Search folders and assets"):t("searchAssetsPlaceholder","Search assets")}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?a.html`
                  <button
                    class="clear-btn"
                    @click=${this._clearSearch}
                    aria-label=${t("clearSearch","Clear search")}
                  >
                    <sfx-icon name="close" .size=${14}></sfx-icon>
                  </button>
                `:""}
            ${this.enableAISearch?a.html`
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
          ${this.hideClose?a.nothing:a.html`
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
    `}};V.styles=[ge,a.css`
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
    `];Z([c.property()],V.prototype,"activeTab",2);Z([c.property({type:Array})],V.prototype,"tabs",2);Z([c.property({type:Boolean})],V.prototype,"isInsideLabel",2);Z([c.property({type:Boolean})],V.prototype,"isInsideCollection",2);Z([c.property({type:Boolean})],V.prototype,"isInsideCollectionLeaf",2);Z([c.property()],V.prototype,"viewMode",2);Z([c.property()],V.prototype,"searchQuery",2);Z([c.property({type:Array})],V.prototype,"regionalGroups",2);Z([c.property({type:Object})],V.prototype,"regionalFilters",2);Z([c.property({type:Boolean})],V.prototype,"hideClose",2);Z([c.property({type:Boolean,reflect:!0,attribute:"ai-search"})],V.prototype,"enableAISearch",2);Z([c.property({type:Boolean})],V.prototype,"isAISearchActive",2);Z([c.property({attribute:!1})],V.prototype,"t",2);Z([c.state()],V.prototype,"_localSearch",2);V=Z([m.customElement("ap-header")],V);var io=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,ys=(t,e,s,i)=>{for(var r=i>1?void 0:i?ro(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&io(e,s,r),r};let Lt=class extends a.LitElement{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?a.html`
      <div class="popover">
        ${this.title?a.html`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:a.html``}};Lt.styles=a.css`
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
  `;ys([c.property()],Lt.prototype,"title",2);ys([c.property({type:Boolean})],Lt.prototype,"open",2);Lt=ys([m.customElement("ap-filter-popover")],Lt);var oo=Object.defineProperty,ao=Object.getOwnPropertyDescriptor,dt=(t,e,s,i)=>{for(var r=i>1?void 0:i?ao(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&oo(e,s,r),r};function js(t){var i;const e=new Map;for(const r of t){const o=r.category||r.value.split("_")[0];if(!e.has(o)){const n=Wt.find(d=>d.value===o);e.set(o,{key:o,labelKey:(n==null?void 0:n.labelKey)||o,label:(n==null?void 0:n.label)||o.charAt(0).toUpperCase()+o.slice(1),icon:(n==null?void 0:n.icon)||"file",extensions:[],totalCount:0})}const l=e.get(o);l.extensions.push({value:r.value,label:r.label||((i=r.value.split("_").pop())==null?void 0:i.toUpperCase())||r.value,count:r.count}),l.totalCount+=r.count}const s=Wt.map(r=>r.value);return[...e.values()].sort((r,o)=>{const l=s.indexOf(r.key),n=s.indexOf(o.key);return(l===-1?999:l)-(n===-1?999:n)})}let Ue=class extends a.LitElement{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const r=new Set([t.key,...e]);i=this.selected.filter(o=>!r.has(o))}else{const r=new Set(e);i=this.selected.filter(o=>!r.has(o)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(r=>r!==e.key),i.push(...s)),i.includes(t)?i=i.filter(r=>r!==t):(i.push(t),s.every(r=>i.includes(r))&&(i=i.filter(r=>!s.includes(r)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.TYPE,values:t,operator:A.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const r=s.extensions.filter(o=>o.label.toLowerCase().includes(e)||o.value.toLowerCase().includes(e));return r.length===0?null:{...s,extensions:r}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=js(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=js(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return a.html`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t("searchFormatsPlaceholder","Search formats...")}
        .value=${this._search}
        @input=${i=>{this._search=i.target.value}}
      />
      <div class="header-row">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${s?a.html`<button class="clear-btn" @click=${this._clearAll}>
              ${this.t("clearAll","Clear all")}
            </button>`:a.nothing}
      </div>
      <div class="groups">
        ${e.length===0&&this._search.trim()?a.html`<div class="no-results">${this.t("noFormatsFound","No formats found")}</div>`:e.map(i=>this._renderGroup(i))}
      </div>
    `}_renderGroup(t){const e=this._expanded.has(t.key)||this._search.trim().length>0,s=this._isGroupFullySelected(t),i=this._isGroupPartial(t);return a.html`
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
      ${e?a.html`
            <div class="extensions">
              ${t.extensions.map(r=>a.html`
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
          `:a.nothing}
    `}_renderFallback(){return a.html`
      <div class="options">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${Wt.map(t=>a.html`
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
    `}};Ue.styles=a.css`
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
  `;dt([c.property({type:Array})],Ue.prototype,"selected",2);dt([c.property({type:Array})],Ue.prototype,"fileTypes",2);dt([c.property({attribute:!1})],Ue.prototype,"t",2);dt([c.state()],Ue.prototype,"_search",2);dt([c.state()],Ue.prototype,"_expanded",2);Ue=dt([m.customElement("ap-filter-type")],Ue);const Pe=a.css`
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

  /* ── Date input: Lucide calendar icon ── */
  .filter-input[type='date']::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .filter-input[type='date'] {
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px 16px;
    padding-right: 32px;
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
`;var lo=Object.defineProperty,no=Object.getOwnPropertyDescriptor,Be=(t,e,s,i)=>{for(var r=i>1?void 0:i?no(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&lo(e,s,r),r};function cs(t){return t.toISOString().split("T")[0]}let $e=class extends a.LitElement{constructor(){super(...arguments),this.filterKey=b.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===b.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?ii:vs).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return si.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return cs(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=bs(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const r=new Date(s+"T23:59:59");this.to=r.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?a.nothing:a.html`
      <div class="filter-section">
        <span class="section-label">${this.t("dateType","Date type")}</span>
        <sfx-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @sfx-change=${t=>this._selectField(t.detail.value)}
        ></sfx-radio-group>
      </div>
    `}_renderRangeSection(){return a.html`
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
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return a.nothing;const e=this.from?cs(new Date(this.from)):"",s=this.to?cs(new Date(this.to)):"",i=this._todayStr;return t==="specific"?a.html`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date","Date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            />
          </div>
        </div>
      `:t==="before"?a.html`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${s}
              @change=${r=>this._handleDateInput("to",r)}
            />
          </div>
        </div>
      `:t==="after"?a.html`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            />
          </div>
        </div>
      `:a.html`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${s||i}
              .value=${e}
              @change=${r=>this._handleDateInput("from",r)}
            />
          </div>
          <div>
            <span class="input-label">${this.t("endDate","End date")}</span>
            <input
              type="date"
              class="filter-input"
              min=${e}
              max=${i}
              .value=${s}
              @change=${r=>this._handleDateInput("to",r)}
            />
          </div>
        </div>
      </div>
    `}render(){return a.html`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${()=>this._clearAll()}>
          ${this.t("clearAll","Clear all")}
        </button>
        ${this._renderDateTypeSection()} ${this._renderRangeSection()} ${this._renderDateInputs()}
      </div>
    `}};$e.styles=[Pe,a.css`
      .date-inputs {
        margin-top: 4px;
      }
    `];Be([c.property()],$e.prototype,"filterKey",2);Be([c.property({attribute:!1})],$e.prototype,"t",2);Be([c.property()],$e.prototype,"field",2);Be([c.property()],$e.prototype,"kind",2);Be([c.property()],$e.prototype,"preset",2);Be([c.property()],$e.prototype,"from",2);Be([c.property()],$e.prototype,"to",2);$e=Be([m.customElement("ap-filter-date")],$e);var co=Object.defineProperty,po=Object.getOwnPropertyDescriptor,it=(t,e,s,i)=>{for(var r=i>1?void 0:i?po(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&co(e,s,r),r};let Le=class extends a.LitElement{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=b.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=rs}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:A.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:A.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:A.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return a.html`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${rs} tags`:a.nothing}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return a.html`
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
          ${this._search?a.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:a.nothing}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?a.html`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button class="clear-btn" @click=${this._clearAll}>Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{const s=this._getTagBySid(e);return s?a.html`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `:a.nothing})}
                </div>
              </div>
            `:a.nothing}
        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?a.html`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span>You can select up to ${rs} tags.</span>
              </div>
            `:a.nothing}
      </div>
    `}_renderSearchResults(t){const e=r=>r.toLowerCase().includes(t),s=this._suggestedTags.filter(r=>e(r.label)).slice(0,50),i=this._otherTags.filter(r=>e(r.label)).slice(0,50);return s.length===0&&i.length===0?a.html`<div class="no-results">${this.t("noTagsFound","No tags found")}</div>`:a.html`
      ${s.length>0?a.html`
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
          `:a.nothing}
      ${i.length>0?a.html`
            <div class="filter-section">
              <div class="section-header">
                ${s.length===0?a.html`<span class="section-label">${this.t("allTags","All tags")}</span>
                      <button
                        class="clear-btn"
                        ?disabled=${this.selected.length===0}
                        @click=${this._clearAll}
                      >
                        ${this.t("clearAll","Clear all")}
                      </button>`:a.html`<span class="section-label">${this.t("allTags","All tags")}</span>`}
              </div>
              <div class="options-list">
                ${i.map(r=>this._renderTagItem(r))}
              </div>
            </div>
          `:a.nothing}
    `}_renderSections(){if(this.tags.length===0)return a.html`<div class="no-results">${this.t("noTagsAvailable","No tags available")}</div>`;const t=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return a.html`
      <div class="filter-section">
        ${t.length>0?a.html`<span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>`:a.nothing}
        ${t.length>0?a.html`
              <div class="options-list short">
                ${t.map(e=>this._renderTagItem(e))}
              </div>
            `:a.nothing}
      </div>

      ${t.length>0?a.html`<div class="separator"></div>`:a.nothing}

      <div class="hint-message">
        ${this.t("findMoreTagsBySearch","Find more tags by using search")}
      </div>
    `}};Le.styles=[ge,Pe,a.css`
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
    `];it([c.property({type:Array})],Le.prototype,"tags",2);it([c.property({type:Array})],Le.prototype,"selected",2);it([c.property()],Le.prototype,"filterKey",2);it([c.property({attribute:!1})],Le.prototype,"t",2);it([c.query(".tag-search")],Le.prototype,"_searchInput",2);it([c.state()],Le.prototype,"_search",2);Le=it([m.customElement("ap-filter-tags")],Le);var ho=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,pt=(t,e,s,i)=>{for(var r=i>1?void 0:i?uo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&ho(e,s,r),r};let je=class extends a.LitElement{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=Ft}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.LABELS,values:s,operator:A.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.LABELS,values:e,operator:A.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.LABELS,values:[],operator:A.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return a.html`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${Ft} labels`,{count:Ft}):a.nothing}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="label-icon" ${m.cspStyle({color:t.color||"#94a3b8"})}>
          <sfx-icon name="tag" .size=${16}></sfx-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count??0}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return a.html`
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
          ${this._search?a.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:a.nothing}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?a.html`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelBySid(s);return i?a.html`
                      <div class="chip">
                        <span class="chip-icon" ${m.cspStyle({color:i.color||"#94a3b8"})}>
                          <sfx-icon name="tag" .size=${12}></sfx-icon>
                        </span>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(s)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `:a.nothing})}
                </div>
              </div>
            `:a.nothing}

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
            ${e.length===0?a.html`<div class="no-results">${this.t("noLabelsFound","No labels found")}</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?a.html`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t("labelsLimitAlert",`You can select up to ${Ft} labels.`,{count:Ft})}</span
                >
              </div>
            `:a.nothing}
      </div>
    `}};je.styles=[Pe,a.css`
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
    `];pt([c.property({type:Array})],je.prototype,"labels",2);pt([c.property({type:Array})],je.prototype,"selected",2);pt([c.property({attribute:!1})],je.prototype,"t",2);pt([c.query(".search-input")],je.prototype,"_searchInput",2);pt([c.state()],je.prototype,"_search",2);je=pt([m.customElement("ap-filter-labels")],je);var fo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,rt=(t,e,s,i)=>{for(var r=i>1?void 0:i?go(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&fo(e,s,r),r};const ds=3,us=/^#[0-9A-Fa-f]{6}$/;function mo(t){const e=t.trim().split(/\s+/);return e.length<1||!us.test(e[0])?null:{hex:e[0],tolerance:e[1]||qt,coverage:e[3]||Vt}}let Ie=class extends a.LitElement{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=mo(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==qt||s.coverage!==Vt)),this._initialized=!0)}}_selectColor(t){if(!us.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=ds||(this._colors=[...this._colors,{hex:t,tolerance:qt,coverage:Vt}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!us.test(i)||this._colors.some((l,n)=>n!==t&&l.hex.toLowerCase()===i.toLowerCase()))return;const o=[...this._colors];o[t]={...o[t],hex:i},this._colors=o,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const r=[...this._colors];r[t]={...r[t],coverage:String(i)},this._colors=r,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:qt,i=this._advanced?e.coverage:Vt;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=ds;return a.html`
      <div class="palette">
        ${cr.map(s=>{const i=t.has(s),r=e&&!i;return a.html`
            <button
              class="swatch ${i?"selected":""} ${r?"disabled":""}"
              ${m.cspStyle({background:s,...s==="#ffffff"?{border:"1px solid #e4e4e7"}:{}})}
              @click=${()=>!r&&this._selectColor(s)}
              title=${s}
              ?disabled=${r}
            ></button>
          `})}
      </div>
    `}_renderColorEntry(t,e){return this._advanced?a.html`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t("colorLabel","Color")}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${m.cspStyle({background:t.hex})}></div>
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
            .options=${dr.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
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
    `:a.html`
        <div class="color-row">
          <div class="color-swatch-small" ${m.cspStyle({background:t.hex})}></div>
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
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<ds&&!this._showPalette;return a.html`
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

        <div class="filter-section">${t?this._renderPalette():a.nothing}</div>

        ${this._colors.length>0?a.html`
              <div class="filter-section">
                <div class="selected-colors">
                  ${this._colors.map((s,i)=>this._renderColorEntry(s,i))}
                </div>
              </div>
            `:a.nothing}
        ${e?a.html`
              <div class="filter-section">
                <button class="add-color-btn" @click=${this._showAddPalette}>
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
                  ${this.t("addColor","Add color")}
                </button>
              </div>
            `:a.nothing}

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t("requiresImageProcessing","Requires image processing to be enabled.")}</span
          >
        </div>
      </div>
    `}};Ie.styles=[ge,Pe,a.css`
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
    `];rt([c.property({type:Array})],Ie.prototype,"values",2);rt([c.property({attribute:!1})],Ie.prototype,"t",2);rt([c.state()],Ie.prototype,"_colors",2);rt([c.state()],Ie.prototype,"_advanced",2);rt([c.state()],Ie.prototype,"_showPalette",2);rt([c.state()],Ie.prototype,"_initialized",2);Ie=rt([m.customElement("ap-filter-color")],Ie);var vo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,Ve=(t,e,s,i)=>{for(var r=i>1?void 0:i?bo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&vo(e,s,r),r};const xo={KB:1/1e3,MB:1,GB:1e3},_o=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let we=class extends a.LitElement{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=xo[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.SIZE,values:[],operator:A.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.SIZE,values:[i],operator:A.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return a.html`
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
              .options=${_o}
              .value=${this._unit}
              @sfx-change=${this._setUnit}
            ></sfx-dropdown>
          </div>
        </div>
      </div>
    `}};we.styles=[Pe,a.css`
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
    `];Ve([c.property({type:Number})],we.prototype,"min",2);Ve([c.property({type:Number})],we.prototype,"max",2);Ve([c.property({attribute:!1})],we.prototype,"t",2);Ve([c.state()],we.prototype,"_minVal",2);Ve([c.state()],we.prototype,"_maxVal",2);Ve([c.state()],we.prototype,"_unit",2);Ve([c.state()],we.prototype,"_initialized",2);we=Ve([m.customElement("ap-filter-size")],we);var yo=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,Ut=(t,e,s,i)=>{for(var r=i>1?void 0:i?$o(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&yo(e,s,r),r};const wo=a.svg`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,ko=a.svg`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,So=a.svg`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,Co=a.svg`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,Fo={portrait:wo,landscape:ko,square:So,panorama:Co};let tt=class extends a.LitElement{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return a.html`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${ar.map(t=>a.html`
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
            ${lr.map(t=>a.html`
                <sfx-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @sfx-toggle=${()=>{this._toggleOrientation(t.value)}}
                  ><span class="orientation-label"
                    >${Fo[t.value]}${this.t(t.labelKey,t.label)}</span
                  ></sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${nr.map(t=>a.html`
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
    `}};tt.styles=[Pe,a.css`
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
    `];Ut([c.property({type:Array})],tt.prototype,"selectedResolution",2);Ut([c.property({type:Array})],tt.prototype,"selectedOrientation",2);Ut([c.property({type:Array})],tt.prototype,"selectedFaces",2);Ut([c.property({attribute:!1})],tt.prototype,"t",2);tt=Ut([m.customElement("ap-filter-image")],tt);var Ao=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,R=(t,e,s,i)=>{for(var r=i>1?void 0:i?Eo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Ao(e,s,r),r};function T(t){return`${ts[t.type]||""}${t.key}`}let M=class extends a.LitElement{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}get _tTextOperatorOptions(){return as.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return ns.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return Ne.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return ls.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return ur.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return Xt.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return hr.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}get _atFieldLimit(){return this.visibleFields.length>=Kt}_getField(t){return this.fields.find(e=>T(e)===t)}_getUIType(t){return fr[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===ce||t[0]===de}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===ce?ce:((i=e.values)==null?void 0:i[0])===de?de:this._specificModeFields.has(t)||e.values&&e.values.length>0?Ye:""}_emitFilterChange(t,e,s){const i=T(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=T(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=T(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=T(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(T(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=T(t);if(e===Ye){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const r=this._getApplied(s);this._isSpecialValue(r.values)&&this._emitFilterChange(t,r.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator,[])}}}_clearFieldFilter(t){const e=T(t);if(this._specificModeFields.has(e)){const p=new Set(this._specificModeFields);p.delete(e),this._specificModeFields=p}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:r,...o}=this._dateFroms;this._dateFroms=o;const{[e]:l,...n}=this._dateTos;this._dateTos=n;const{[e]:d,...h}=this._selectSearches;this._selectSearches=h;const{[e]:u,...f}=this._tagInputs;this._tagInputs=f,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,r=this._getApplied(T(t)).operator||as[0].value;this._emitFilterChange(t,r,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,r=T(t),o=this._getApplied(r),l=o.operator||ns[0].value,n=[...o.values||[]];s===0?n[0]=i:n[1]=i;const d=n.filter(h=>h!==""&&h!==void 0);if(d.length>0){const h=t.type===$.DECIMAL2;if(!d.every(f=>h?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,l,n)}_onBooleanSelect(t,e){var r;const s=this._getApplied(T(t)),i=(r=s.values)==null?void 0:r[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=T(t),i=this._getApplied(s),r=i.operator||Ne[0].value,o=i.values||[];o.length===1&&o[0]===e?this._emitFilterChange(t,r,[]):this._emitFilterChange(t,r,[e])}_onMultiSelectToggle(t,e){const s=T(t),i=this._getApplied(s),r=i.operator||ls[0].value,o=i.values||[],l=o.includes(e)?o.filter(n=>n!==e):[...o,e];this._emitFilterChange(t,r,l)}_onTagKeydown(t,e){const s=T(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const r=i.replace(/,/g,"").trim();r&&(this._tagInputs={...this._tagInputs,[e]:r},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=T(t),i=this._getApplied(s),r=i.operator||Ne[0].value,o=i.values||[];o.includes(e)||this._emitFilterChange(t,r,[...o,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,r=await this.apiClient.get("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(r.tags||[]).map(o=>o.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),r=i.operator||Ne[0].value,o=i.values||[];o.includes(s)||this._emitFilterChange(t,r,[...o,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=T(t),i=this._getApplied(s),r=i.operator||Ne[0].value,o=i.values||[];this._emitFilterChange(t,r,o.filter(l=>l!==e))}_onTagOperatorChange(t,e){const s=T(t),r=this._getApplied(s).values||[];this._emitFilterChange(t,e,r)}_onDatePreset(t,e){const s=T(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let r="",o="";switch(e){case"today":{const l=new Date(i);l.setHours(0,0,0,0),r=l.toISOString(),o=i.toISOString();break}case"last_week":{const l=new Date(i),n=l.getDay();l.setDate(l.getDate()-(n===0?6:n-1)),l.setHours(0,0,0,0);const d=new Date(l);d.setDate(d.getDate()-7),r=d.toISOString(),o=l.toISOString();break}case"last_month":{const l=new Date(i.getFullYear(),i.getMonth(),1),n=new Date(l);n.setMonth(n.getMonth()-1),r=n.toISOString(),o=l.toISOString();break}case"last_year":{const l=new Date(i.getFullYear(),0,1),n=new Date(l);n.setFullYear(n.getFullYear()-1),r=n.toISOString(),o=l.toISOString();break}}r&&o&&(this._dateFroms={...this._dateFroms,[s]:r},this._dateTos={...this._dateTos,[s]:o},this._emitFilterChange(t,"..",[r,o]))}_onDateInput(t,e,s){const i=s.target.value,r=T(t),o=this._datePresets[r]||"",l=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[r]:l}:this._dateTos={...this._dateTos,[r]:l};let n=this._dateFroms[r]||"",d=this._dateTos[r]||"";o==="after"&&n&&(d=new Date().toISOString(),this._dateTos={...this._dateTos,[r]:d}),o==="before"&&d&&(n=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[r]:n}),n&&d&&this._emitFilterChange(t,"..",[n,d])}_onGeoLocationInput(t,e){var f;const s=e.target.value.trim(),i=T(t),r=(f=this.shadowRoot)==null?void 0:f.querySelector(`[data-geo-radius="${i}"]`),o=(r==null?void 0:r.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const l=s.split(",").map(p=>p.trim());if(l.length!==2||l.some(p=>isNaN(Number(p))||p===""))return;const[n,d]=l;let u=`${n},${d}..${o||"0"}`;this._emitFilterChange(t,A.IS,[u])}_onGeoRadiusInput(t,e){var d;const s=e.target.value,i=T(t),r=this._getApplied(i);if(!((d=r.values)!=null&&d[0]))return;const o=r.values[0],[l]=o.split("..");let n=l;s&&(n+=`..${s}`),this._emitFilterChange(t,A.IS,[n])}_onEmptyOption(t,e){var r;const s=this._getApplied(T(t)),i=(r=s.values)==null?void 0:r[0];!e||i===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,o)=>o.length===0?a.nothing:a.html`
        <div class="field-group-label">${r}</div>
        ${o.map(l=>{const n=T(l),d=this.visibleFields.includes(n),h=!d&&this._atFieldLimit;return a.html`
            <div
              class="field-item ${d?"selected":""} ${h?"disabled":""}"
              @click=${()=>!h&&!d&&this._addField(l)}
            >
              ${d?a.html`<sfx-icon name="check" .size=${14}></sfx-icon>`:a.html`<sfx-icon
                    name=${Gt[l.type]||"file-text"}
                    .size=${14}
                    ${m.cspStyle({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
                  ></sfx-icon>`}
              <span>${l.label}</span>
            </div>
          `})}
      `;return a.html`
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
          ${e.length===0?a.html`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:a.html`${[...s.entries()].map(([r,o])=>i(r,o))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var h,u;const e=T(t),s=this._getApplied(e),r=this._isSpecialValue(s.values)?"":((h=s.values)==null?void 0:h[0])||"",o=this._getContentMode(e),l=o===ce||o===de,n=s.operator||as[0].value,d=t.type===$.TEXT_AREA;return a.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((u=s.values)!=null&&u.length)&&!s.operator}
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
            ?disabled=${l}
            @sfx-change=${f=>this._onOperatorChange(t,f.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${f=>this._onContentModeChange(t,f.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o===Ye?a.html`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${d?a.html`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${f=>this._onTextInput(t,f)}
                      ></textarea>
                    `:a.html`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${r}
                        @change=${f=>this._onTextInput(t,f)}
                        @keydown=${f=>{f.key==="Enter"&&f.preventDefault()}}
                      />
                    `}
              </div>
            `:a.nothing}
      </div>
    `}_renderNumberFilter(t){var _,E,D;const e=T(t),s=this._getApplied(e),i=s.operator||ns[0].value,r=this._isSpecialValue(s.values),o=this._getContentMode(e),l=o===ce||o===de,n=i===A.RANGE,d=i===A.GREATER_THAN_OR_EQUAL,h=i===A.LESS_THAN_OR_EQUAL,u=t.type===$.DECIMAL2,f=u?"0.01":"1",p=u?"0.00":"0",g=r?"":((_=s.values)==null?void 0:_[0])||"",v=r?"":((E=s.values)==null?void 0:E[1])||"",w=n||d||h,x=n||d||h?this.t("min","Min"):this.t("value","Value"),y=this.t("max","Max");return a.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((D=s.values)!=null&&D.length)&&!s.operator}
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
            ?disabled=${l}
            @sfx-change=${C=>this._onOperatorChange(t,C.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${C=>this._onContentModeChange(t,C.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o===Ye?a.html`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${h?"true":a.nothing}
                      >${x}</span
                    >
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${p}
                      .value=${g}
                      ?disabled=${h}
                      @change=${C=>this._onNumberInput(t,C,0)}
                    />
                  </div>
                  ${w?a.html`
                        <div>
                          <span
                            class="input-label"
                            aria-disabled=${d?"true":a.nothing}
                            >${y}</span
                          >
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${p}
                            .value=${v}
                            ?disabled=${d}
                            @change=${C=>this._onNumberInput(t,C,1)}
                          />
                        </div>
                      `:a.nothing}
                </div>
              </div>
            `:a.nothing}
      </div>
    `}_renderBooleanFilter(t){var i,r;const e=this._getApplied(T(t)),s=((i=e.values)==null?void 0:i[0])||"";return a.html`
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
    `}_renderSelectOneFilter(t){const e=T(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],o=t.possible_values||[],l=s.operator||Ne[0].value,n=(this._selectSearches[e]||"").toLowerCase(),d=n.length>0,h=r.length>0||i,u=n?o.filter(p=>p.label.toLowerCase().includes(n)):o,f=r.length>=Kt;return a.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${d?a.html`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:a.nothing}
        </div>

        ${d?a.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:a.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${l}
                  @sfx-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?a.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(p=>{const g=o.find(v=>v.api_value===p);return a.html`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onSelectOneToggle(t,p)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:a.nothing}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(p=>{var g;return a.html`
                <div class="option-item" @click=${()=>this._onEmptyOption(t,p.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></sfx-checkbox>
                  <span>${p.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length===0?a.html`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:u.map(p=>{const g=r.includes(p.api_value),v=!g&&f;return a.html`
                    <div
                      class="option-item ${v?"disabled":""}"
                      @click=${()=>!v&&this._onSelectOneToggle(t,p.api_value)}
                    >
                      <sfx-checkbox ?checked=${g}></sfx-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=T(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],o=t.possible_values||[],l=s.operator||ls[0].value,n=(this._selectSearches[e]||"").toLowerCase(),d=n.length>0,h=r.length>0||i,u=n?o.filter(p=>p.label.toLowerCase().includes(n)):o,f=r.length>=Kt;return a.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${d?a.html`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:a.nothing}
        </div>

        ${d?a.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:a.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${l}
                  @sfx-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?a.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(p=>{const g=o.find(v=>v.api_value===p);return a.html`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onMultiSelectToggle(t,p)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:a.nothing}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(p=>{var g;return a.html`
                <div class="option-item" @click=${()=>this._onEmptyOption(t,p.value)}>
                  <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></sfx-checkbox>
                  <span>${p.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length===0?a.html`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:u.map(p=>{const g=r.includes(p.api_value),v=!g&&f;return a.html`
                    <div
                      class="option-item ${v?"disabled":""}"
                      @click=${()=>!v&&this._onMultiSelectToggle(t,p.api_value)}
                    >
                      <sfx-checkbox ?checked=${g}></sfx-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=T(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=i?[]:s.values||[],o=this._tagInputs[e]||"",l=s.operator||Ne[0].value,n=r.length>0||i,d=this._tagSuggestions[e]||[],h=this._tagLoading[e]||!1,u=o.trim().length>0,f=r.length>=Kt;return a.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${o}
            @input=${p=>this._onTagInput(t,e,p)}
            @keydown=${p=>this._onTagKeydown(t,p)}
          />
          ${u?a.html`
                <button
                  class="search-clear"
                  @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:a.nothing}
        </div>

        ${u?a.html`
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
            `:a.html`
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
                  .value=${l}
                  ?disabled=${i}
                  @sfx-change=${p=>this._onTagOperatorChange(t,p.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${r.length>0?a.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(t)}>
                          ${this.t("clearAll","Clear all")}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${r.map(p=>a.html`
                            <div class="chip">
                              <span class="chip-label">${p}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._removeTag(t,p)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:a.nothing}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">${this.t("allOptions","All options")}</span>
                <div class="options-list short">
                  ${this._tEmptyOptions.map(p=>{var g;return a.html`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,p.value)}
                      >
                        <sfx-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></sfx-checkbox>
                        <span>${p.label}</span>
                      </div>
                    `})}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${u?a.html`
              <div class="filter-section">
                <div class="options-list">
                  ${h?a.html`<div class="option-item disabled">
                        <span>${this.t("loading","Loading...")}</span>
                      </div>`:d.length>0?d.map(p=>{const g=r.includes(p),v=!g&&f;return a.html`
                            <div
                              class="option-item ${v?"disabled":""}"
                              @click=${()=>!v&&(g?this._removeTag(t,p):this._selectTagSuggestion(t,p))}
                            >
                              <sfx-checkbox ?checked=${g}></sfx-checkbox>
                              <span>${p}</span>
                            </div>
                          `}):a.html`<div class="option-item disabled">
                          <span>${this.t("noResults","No results")}</span>
                        </div>`}
                </div>
              </div>
            `:a.nothing}
      </div>
    `}_renderDateFilter(t){var u,f;const e=T(t),s=this._datePresets[e]||"",i=this._getApplied(e),o=this._isSpecialValue(i.values)?((u=i.values)==null?void 0:u[0])||"":s,l=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],n=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",d=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",h=["before","after","between"].includes(o);return a.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!o&&!((f=i.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >
          ${this.t("clearAll","Clear all")}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${l}
            .value=${o==="empty"||o==="non-empty"?o:""}
            @sfx-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></sfx-radio-group>

          <div class="separator"></div>

          <sfx-radio-group
            clearable
            columns="2"
            .options=${vs.map(p=>({...p,label:this.t(p.labelKey,p.label)}))}
            .value=${o!=="empty"&&o!=="non-empty"?o:""}
            @sfx-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></sfx-radio-group>
        </div>

        ${h?a.html`
              <div class="filter-section">
                <div class="grid-2">
                  ${o==="before"?a.html`
                        <div>
                          <span class="input-label">${this.t("endDate","End date")}</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${d}
                            @change=${p=>this._onDateInput(t,"to",p)}
                          />
                        </div>
                      `:o==="after"?a.html`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                        `:a.html`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${n}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate","End date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${d}
                              @change=${p=>this._onDateInput(t,"to",p)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `:a.nothing}
      </div>
    `}_renderGeoFilter(t){var u,f;const e=T(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),r=this._getContentMode(e);let o="",l="";if(!i&&((u=s.values)!=null&&u[0])){const p=s.values[0],[g,v]=p.split("..");o=g||"",l=v||""}const n=o.length>0,d=o.split(",").map(p=>p.trim()),h=!n||d.length===2&&d.every(p=>!isNaN(Number(p))&&p!=="");return a.html`
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
            @sfx-change=${p=>this._onContentModeChange(t,p.detail.value)}
          ></sfx-radio-group>
        </div>

        ${r===Ye?a.html`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${o}
                      @change=${p=>this._onGeoLocationInput(t,p)}
                    />
                    ${n&&!h?a.html`<div class="error-text">
                          ${this.t("geoCoordinatesError",'Enter coordinates as "latitude, longitude"')}
                        </div>`:a.nothing}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t("maxRadius","Max radius")} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${l}
                      @change=${p=>this._onGeoRadiusInput(t,p)}
                    />
                  </div>
                </div>
              </div>
            `:a.nothing}
      </div>
    `}_renderAttachmentFilter(t){var i,r;const e=this._getApplied(T(t)),s=((i=e.values)==null?void 0:i[0])||"";return a.html`
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
    `}_renderFaceMatcherFilter(t){const e=T(t),s=this._getApplied(e),i=s.values||[],r=s.operator||A.IS;return a.html`
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
            .options=${Ne}
            .value=${r}
            @sfx-change=${o=>this._emitFilterChange(t,o.detail.value,i)}
          ></sfx-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t("searchFacesPlaceholder","Search faces")}
            .value=${i.join(", ")}
            @change=${o=>{const n=o.target.value.split(",").map(d=>d.trim()).filter(Boolean);this._emitFilterChange(t,r,n)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===$.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return a.nothing}}_renderFieldSection(t){const e=this._getField(t);if(!e)return a.nothing;const s=this._collapsedFields.has(t);return a.html`
      <div class="field-section">
        <div class="field-header" @click=${()=>this._toggleCollapse(t)}>
          <div class="field-header-left">
            <sfx-icon
              class="chevron ${s?"":"expanded"}"
              name="chevron-right"
              .size=${14}
            ></sfx-icon>
            <sfx-icon
              name=${Gt[e.type]||"file-text"}
              .size=${14}
              ${m.cspStyle({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
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
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(r=>r.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(r,o)=>o.length===0?a.nothing:a.html`
        <div class="field-group-label">${r}</div>
        ${o.map(l=>{const n=T(l),d=this.visibleFields.includes(n),h=!!this.appliedMetadata[n]||!!this.appliedFilters[n],u=this.pinnedFields.includes(n),f=!d&&this._atFieldLimit;return a.html`
            <div
              class="field-item ${h?"has-filter":""} ${f?"disabled":""}"
              @click=${()=>!f&&this._emitFieldSelect(l)}
            >
              <sfx-icon
                name=${Gt[l.type]||"file-text"}
                .size=${14}
                ${m.cspStyle({color:"var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))"})}
              ></sfx-icon>
              <span class="field-item-label">${l.label}</span>
              <button
                class="field-item-pin ${u?"pinned":""}"
                @click=${p=>{p.stopPropagation(),this._emitPin(n,!u)}}
                title=${u?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${h?a.html`<sfx-icon name="check" .size=${14}></sfx-icon>`:a.nothing}
            </div>
          `})}
      `;return a.html`
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
          ${e.length===0?a.html`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:a.html`${[...s.entries()].map(([r,o])=>i(r,o))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return t?this._renderFieldControl(t):a.html`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return a.html`
      ${this._showFieldSelection||!t?this._renderFieldSelection():a.nothing}
      ${t?a.html`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?a.html`
                  <button class="add-field-btn" @click=${this._openFieldSelection}>
                    <sfx-icon name="filter" .size=${14}></sfx-icon>
                    ${this.t("addField","Add field")}
                  </button>
                `:a.nothing}
          `:a.nothing}
    `}};M.styles=[ge,Pe,a.css`
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
    `];R([c.property({type:Array})],M.prototype,"fields",2);R([c.property({type:Object})],M.prototype,"appliedFilters",2);R([c.property({type:Array})],M.prototype,"visibleFields",2);R([c.property()],M.prototype,"mode",2);R([c.property()],M.prototype,"activeFieldKey",2);R([c.property({type:Array})],M.prototype,"pinnedFields",2);R([c.property({type:Object})],M.prototype,"appliedMetadata",2);R([c.property({attribute:!1})],M.prototype,"apiClient",2);R([c.property({attribute:!1})],M.prototype,"t",2);R([c.state()],M.prototype,"_showFieldSelection",2);R([c.state()],M.prototype,"_fieldSearch",2);R([c.state()],M.prototype,"_collapsedFields",2);R([c.state()],M.prototype,"_tagInputs",2);R([c.state()],M.prototype,"_tagSuggestions",2);R([c.state()],M.prototype,"_tagLoading",2);R([c.state()],M.prototype,"_datePresets",2);R([c.state()],M.prototype,"_dateFroms",2);R([c.state()],M.prototype,"_dateTos",2);R([c.state()],M.prototype,"_specificModeFields",2);R([c.state()],M.prototype,"_selectSearches",2);M=R([m.customElement("ap-filter-metadata")],M);var To=Object.defineProperty,Lo=Object.getOwnPropertyDescriptor,H=(t,e,s,i)=>{for(var r=i>1?void 0:i?Lo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&To(e,s,r),r};let j=class extends a.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.selectedStatus=[],this.statusOperator=":=",this.approverValues=[],this.approverOperator=A.IS_EXACT,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=A.IS_EXACT,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch=""}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===ce||t===de)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _showApproverSection(){return this.approverUsers.length>0}get _showRequesterSection(){return this.requesterUsers.length>0}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(S.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(S.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(S.STATUS,[],this.statusOperator)}_toggleApprover(t){const e=this.approverValues.includes(t)?this.approverValues.filter(s=>s!==t):[...this.approverValues,t];this._emitChange(S.APPROVER,e,this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(S.APPROVER,this.approverValues,e)}_clearApprover(){this._emitChange(S.APPROVER,[],this.approverOperator)}_onApproverSearchInput(t){this._approverSearch=t.target.value}_clearApproverSearch(){this._approverSearch=""}_toggleRequester(t){const e=this.requesterValues.includes(t)?this.requesterValues.filter(s=>s!==t):[...this.requesterValues,t];this._emitChange(S.REQUESTOR,e,this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(S.REQUESTOR,this.requesterValues,e)}_clearRequester(){this._emitChange(S.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(t){this._requesterSearch=t.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(t){return t===be.BEFORE||t===be.AFTER||t===be.BETWEEN||t===be.SPECIFIC?t:be.PRESET}_handleDueDatePreset(t){const e=t.detail.value;if(!e||this.dueDatePreset===e){this._clearDueDate();return}const s=this._kindFromDuedateValue(e);let i="",r="";if(s===be.PRESET){const o=bs(e);o&&(i=o.from,r=o.to??"")}this._emitDuedate({kind:s,preset:e,from:i,to:r})}_handleDueDateFrom(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:e,to:this.dueDateTo})}_handleDueDateTo(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:e})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:S.DUE_DATE,values:{field:S.DUE_DATE,kind:t.kind,preset:t.preset||null,from:t.from,to:t.to}},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_filterUsers(t,e){const s=e.trim().toLowerCase();return s?t.filter(i=>{var r;return i.name.toLowerCase().includes(s)||(((r=i.email)==null?void 0:r.toLowerCase().includes(s))??!1)}):t}_getInitials(t){const e=t.name||t.email||"";if(!e)return"?";const s=e.split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}_renderStatusSection(){const t=this.selectedStatus.length>0;return a.html`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearStatus}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${zs.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @sfx-change=${this._handleStatusOperator}
        ></sfx-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${Xt.map(e=>a.html`
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
          ${pr.map(e=>a.html`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @sfx-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <sfx-icon
                    name=${e.icon}
                    .size=${16}
                    ${m.cspStyle({color:e.iconColor})}
                  ></sfx-icon>
                  ${this.t(e.labelKey,e.label)}
                </span>
              </sfx-checkbox>
            `)}
        </div>
      </div>
    `}_renderUserItem(t,e,s){return a.html`
      <div class="user-item" @click=${s}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="user-avatar">
          ${t.avatarUrl?a.html`<img src=${t.avatarUrl} alt="" />`:a.html`<span>${this._getInitials(t)}</span>`}
        </span>
        <span class="user-text">
          <span class="user-name">${t.name}</span>
          ${t.email?a.html`<span class="user-email">${t.email}</span>`:a.nothing}
        </span>
      </div>
    `}_renderUserSelectedChips(t,e,s){return e.length===0?a.nothing:a.html`
      <div class="chips-wrap">
        ${e.map(i=>{const r=t.find(o=>o.uuid===i);return r?a.html`
            <div class="chip">
              <span class="user-chip-avatar">
                ${r.avatarUrl?a.html`<img src=${r.avatarUrl} alt="" />`:a.html`<span>${this._getInitials(r)}</span>`}
              </span>
              <span class="chip-label">${r.name}</span>
              <button class="chip-remove" @click=${()=>s(i)}>
                <sfx-icon name="close" .size=${10}></sfx-icon>
              </button>
            </div>
          `:a.nothing})}
      </div>
    `}_renderUserPickerSection(t){const e=t.selectedValues.length>0,s=this._filterUsers(t.users,t.search);return a.html`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${t.onClear}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${t.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${zs.map(i=>({...i,label:this.t(i.labelKey,i.label)}))}
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
          ${t.search?a.html`
                <button class="search-clear" @click=${t.onSearchClear}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:a.nothing}
        </div>

        <div class="options-list users-list">
          ${s.length===0?a.html`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:s.map(i=>this._renderUserItem(i,t.selectedValues.includes(i.uuid),()=>t.onToggle(i.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this.approverOperator,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:t=>this._handleApproverOperator(t),onSearchInput:t=>this._onApproverSearchInput(t),onSearchClear:()=>this._clearApproverSearch(),onToggle:t=>this._toggleApprover(t)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this.requesterOperator,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:t=>this._handleRequesterOperator(t),onSearchInput:t=>this._onRequesterSearchInput(t),onSearchClear:()=>this._clearRequesterSearch(),onToggle:t=>this._toggleRequester(t)})}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return a.html`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${this._clearDueDate}>
          ${this.t("clearAll","Clear all")}
        </button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <sfx-radio-group
          clearable
          .options=${Xt.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===ce||this.dueDatePreset===de?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <sfx-radio-group
          clearable
          columns="2"
          .options=${ri.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==ce&&this.dueDatePreset!==de?this.dueDatePreset:""}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?a.html`
              <div class="grid-2 mt-12">
                ${this.dueDatePreset!=="before"?a.html`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("startDate","Start date")}</span>
                        <input
                          class="filter-input"
                          type="date"
                          .value=${this.dueDateFrom}
                          @change=${this._handleDueDateFrom}
                        />
                      </div>
                    `:a.nothing}
                ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?a.html`
                      <div class="date-input-col">
                        <span class="input-label">${this.t("endDate","End date")}</span>
                        <input
                          class="filter-input"
                          type="date"
                          .value=${this.dueDateTo}
                          @change=${this._handleDueDateTo}
                        />
                      </div>
                    `:a.nothing}
              </div>
            `:a.nothing}
      </div>
    `}render(){return a.html`
      <div class="filter-content">
        ${this._renderStatusSection()}
        ${this._showApproverSection?a.html`<div class="separator"></div>
              ${this._renderApproverSection()}`:a.nothing}
        ${this._showRequesterSection?a.html`<div class="separator"></div>
              ${this._renderRequesterSection()}`:a.nothing}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};j.styles=[ge,Pe,a.css`
      .options-list.short {
        max-height: none;
      }
      .date-input-col {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .date-input-col input[type='date'] {
        width: 100%;
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
    `];H([c.property({attribute:!1})],j.prototype,"t",2);H([c.property({type:Array})],j.prototype,"selectedStatus",2);H([c.property()],j.prototype,"statusOperator",2);H([c.property({type:Array})],j.prototype,"approverValues",2);H([c.property()],j.prototype,"approverOperator",2);H([c.property({type:Array})],j.prototype,"approverUsers",2);H([c.property({type:Array})],j.prototype,"requesterValues",2);H([c.property()],j.prototype,"requesterOperator",2);H([c.property({type:Array})],j.prototype,"requesterUsers",2);H([c.property()],j.prototype,"dueDateKind",2);H([c.property()],j.prototype,"dueDatePreset",2);H([c.property()],j.prototype,"dueDateFrom",2);H([c.property()],j.prototype,"dueDateTo",2);H([c.state()],j.prototype,"_approverSearch",2);H([c.state()],j.prototype,"_requesterSearch",2);j=H([m.customElement("ap-filter-approval")],j);var Io=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,ye=(t,e,s,i)=>{for(var r=i>1?void 0:i?Oo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Io(e,s,r),r};const Po=300;function Do(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let pe=class extends a.LitElement{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=Do(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.PRODUCT_REF,values:e,operator:A.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},Po)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.get("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!=="");if(t.length>0){const e=new Set(this.selected),s=[...this.selected,...t.filter(i=>!e.has(i))];this._emit(s)}this._closeAddList()}_renderProductItem(t){const e=this.selected.includes(t);return a.html`
      <div class="product-item" @click=${()=>this._toggle(t)}>
        <sfx-checkbox ?checked=${e}></sfx-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `}render(){const t=this.selected.length===0;return a.html`
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
          ${this._search?a.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:a.nothing}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?a.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button class="clear-btn" @click=${this._clearAll}>
                  ${this.t("clearAll","Clear all")}
                </button>
              </div>
            `:a.nothing}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?a.html`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t("clearAll","Clear all")}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>a.html`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:a.nothing}

        <!-- Search results -->
        ${this._isSearching?a.html`
              <div class="filter-section">
                <span class="section-label"
                  >${this.t("productReferences","Product references")}</span
                >
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):a.nothing}
                  ${this._products.map(({ref:e})=>this._renderProductItem(e))}
                </div>
              </div>
            `:a.nothing}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?a.nothing:a.html`
              <div class="placeholder">
                ${t?a.html`<sfx-icon
                      name="box"
                      .size=${40}
                      ${m.cspStyle({color:"var(--sfx-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}
                    ></sfx-icon>`:a.nothing}
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
        ${this._isLoading?a.html`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:a.nothing}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?a.html`<div class="no-results">${this.t("noResultsFound","No results found")}</div>`:a.nothing}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?a.html`
            <div
              class="dialog-overlay"
              @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}
            >
              <div class="dialog">
                <div class="dialog-header">
                  ${this.t("addProductRefsList","Add products references list")}
                </div>
                <div class="dialog-body">
                  <div class="info-alert" ${m.cspStyle({"margin-top":"0"})}>
                    <sfx-icon name="info" .size=${14}></sfx-icon>
                    <span
                      >${this.t("wildcardInfo",'Use "*" to select all references starting with your text.')}</span
                    >
                  </div>
                  <label
                    class="input-label"
                    ${m.cspStyle({"margin-bottom":"0","font-weight":"400",color:"var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89))"})}
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
          `:a.nothing}
    `}};pe.styles=[ge,Pe,a.css`
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
    `];ye([c.property({type:Array})],pe.prototype,"selected",2);ye([c.property({attribute:!1})],pe.prototype,"apiClient",2);ye([c.property({attribute:!1})],pe.prototype,"t",2);ye([c.query(".product-search")],pe.prototype,"_searchInput",2);ye([c.state()],pe.prototype,"_search",2);ye([c.state()],pe.prototype,"_debouncedSearch",2);ye([c.state()],pe.prototype,"_products",2);ye([c.state()],pe.prototype,"_isLoading",2);ye([c.state()],pe.prototype,"_showAddList",2);ye([c.state()],pe.prototype,"_addListText",2);pe=ye([m.customElement("ap-filter-product-ref")],pe);var zo=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,O=(t,e,s,i)=>{for(var r=i>1?void 0:i?Mo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&zo(e,s,r),r};let I=class extends a.LitElement{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=xs,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.approverUsers=[],this.requesterUsers=[],this.t=(t,e)=>typeof e=="string"?e:t,this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(o=>{var l;return o instanceof HTMLElement&&o.classList.contains("chip")&&((l=o.closest)==null?void 0:l.call(o,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(r=>r instanceof HTMLElement?r.classList.contains("popover-anchor")||r.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector)&&e.some(r=>r instanceof HTMLElement&&(r.classList.contains("dropdown-menu")||r.classList.contains("filter-dropdown")||r.classList.contains("metadata-selector-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,r=e.offsetWidth;this._externalLeft+r>i-8&&(e.style.left=`${Math.max(8,i-r-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}const r=t==="approval"&&this._isApprovalActive();if(!e&&!this._isFilterActive(t)&&!r){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_isApprovalActive(){const t=this.filters.applied;return S.STATUS in t||S.APPROVER in t||S.REQUESTOR in t||S.DUE_DATE in t}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${ts[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Et.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var o;const{t:e}=this,s=this.filters.applied,i=t;switch(i===S.STATUS||i===S.APPROVER||i===S.REQUESTOR||i===S.DUE_DATE?"approval":t){case"type":{const l=s.type;return a.html`<ap-filter-type
          .selected=${(l==null?void 0:l.values)||[]}
          .fileTypes=${this.fileTypes}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const l=s.tags;return a.html`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(l==null?void 0:l.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const l=s.labels;return a.html`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(l==null?void 0:l.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const l=s.color;return a.html`<ap-filter-color
          .values=${(l==null?void 0:l.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const l=s.date;return a.html`<ap-filter-date
          .filterKey=${"date"}
          .field=${(l==null?void 0:l.field)||"created"}
          .kind=${(l==null?void 0:l.kind)||null}
          .from=${(l==null?void 0:l.from)||""}
          .to=${(l==null?void 0:l.to)||""}
          .preset=${(l==null?void 0:l.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const l=s.asset_expiration;return a.html`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(l==null?void 0:l.kind)||null}
          .from=${(l==null?void 0:l.from)||""}
          .to=${(l==null?void 0:l.to)||""}
          .preset=${(l==null?void 0:l.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const l=s.size,n=((o=l==null?void 0:l.values)==null?void 0:o[0])||"",[d,h]=n.split(".."),u=d?parseFloat(d)/1e6:0,f=h?parseFloat(h)/1e6:0;return a.html`<ap-filter-size
          .min=${u}
          .max=${f}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const l=s.image,n=l&&"resolution"in l?l:null;return a.html`<ap-filter-image
          .selectedResolution=${(n==null?void 0:n.resolution)||[]}
          .selectedOrientation=${(n==null?void 0:n.orientation)||[]}
          .selectedFaces=${(n==null?void 0:n.faces)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const l=s.approval_status,n=s.task_approver,d=s.task_requester,h=s.task_duedate;return a.html`<ap-filter-approval
          .selectedStatus=${(l==null?void 0:l.values)||[]}
          .statusOperator=${(l==null?void 0:l.operator)||":="}
          .approverValues=${(n==null?void 0:n.values)||[]}
          .approverOperator=${(n==null?void 0:n.operator)||":="}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(d==null?void 0:d.values)||[]}
          .requesterOperator=${(d==null?void 0:d.operator)||":="}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(h==null?void 0:h.kind)??null}
          .dueDatePreset=${(h==null?void 0:h.preset)||""}
          .dueDateFrom=${(h==null?void 0:h.from)||""}
          .dueDateTo=${(h==null?void 0:h.to)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?a.html`<ap-filter-metadata
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
          ></ap-filter-metadata>`:a.html`<ap-filter-metadata
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
        ></ap-filter-metadata>`;case"product_ref":{const l=s.product_ref;return a.html`<ap-filter-product-ref
          .selected=${(l==null?void 0:l.values)||[]}
          .apiClient=${this.apiClient}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return a.nothing}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=t.key==="approval",r=s?Object.keys(this.filters.metadata.applied).length>0:i?this._isApprovalActive():this._isFilterActive(t.key),o=this.pinnedFilters.includes(t.key),l=a.html`
      <button
        class="filter-btn ${r?"active":""} ${o?"pinned":""}"
        @click=${()=>s?this._toggleMetadataSelector():this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <sfx-icon name=${t.icon} .size=${18}></sfx-icon>
        </span>
        <span class="filter-btn-label"> ${e(t.labelKey,t.label)} </span>
        ${s?a.html`<span class="submenu-chevron"
              ><sfx-icon name="chevron-right" .size=${14}></sfx-icon
            ></span>`:a.html`
              <span
                class="pin-btn ${o?"pinned":""}"
                title=${o?e("unpinFilter","Unpin filter"):e("pinFilter","Pin filter")}
                @click=${n=>this._togglePin(t.key,n)}
              >
                <sfx-icon name="pin" .size=${14}></sfx-icon>
              </span>
            `}
      </button>
    `;return s?a.html`
      <div class="filter-btn-wrapper">
        ${l}
        ${this._showMetadataSelector?a.html`
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
            `:a.nothing}
      </div>
    `:l}render(){const{t}=this,e=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return a.html`
      <div class="toolbar-row">
        ${this.isLoading?a.html`<span class="count-skeleton"></span>`:a.html`<span class="count"
              >${this.countLabel||[this.totalFolderCount>0?t("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||this.totalFolderCount===0?t("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span
            >`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters?a.html`
                <div class="filter-dropdown">
                  <button
                    class="add-btn ${this._showDropdown?"open":""}"
                    @click=${this._toggleDropdown}
                  >
                    <sfx-icon name="filter" .size=${16}></sfx-icon>
                    ${t("filters","Filters")}
                    ${e>0?a.html`<span class="filter-count">${e}</span>`:a.html`<sfx-icon name="chevron-down" .size=${16}></sfx-icon>`}
                  </button>
                  ${this._showDropdown?a.html`
                        <div class="dropdown-menu">
                          ${Et.filter(s=>!this.forcedFilterKeys.includes(s.key)).map(s=>this._renderFilterButton(s))}
                        </div>
                      `:a.nothing}
                </div>
              `:a.nothing}
          <sfx-dropdown
            variant="borderless"
            .label=${t("sort","Sort")}
            .value=${this.sortBy}
            .options=${this.sortOptions.map(s=>({...s,label:t(s.labelKey,s.label)}))}
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
          ${this.showCreateFolder?a.html`
                <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
                  <sfx-icon name="folder-plus" .size=${16}></sfx-icon>
                  New folder
                </button>
              `:a.nothing}
          ${this.showUpload?a.html`
                <button class="upload-btn" @click=${this._handleUploadClick}>
                  <sfx-icon name="upload" .size=${16}></sfx-icon>
                  ${t("upload","Upload")}
                </button>
              `:a.nothing}
        </div>
      </div>
      ${this._openFilter?a.html`
            <div
              class="popover-anchor ${this._externalTrigger?"external":""}"
              ${m.cspStyle(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}
            >
              ${this._externalTrigger?a.nothing:a.html`
                    <div class="anchor-tab">
                      ${this._openFilter==="metadata"&&this._openMetadataField?a.html`
                            <button
                              class="anchor-back"
                              @click=${s=>{s.stopPropagation(),this._openMetadataField=null}}
                              title="Back to fields"
                            >
                              <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                            </button>
                            ${this._getMetadataFieldLabel(this._openMetadataField)}
                          `:a.html`
                            <sfx-icon
                              name=${this._getFilterIcon(this._openFilter)}
                              .size=${16}
                            ></sfx-icon>
                            ${t(At[this._openFilter]??this._openFilter,lt[this._openFilter]||this._openFilter)}
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
                ${m.cspStyle(this._externalTrigger&&this._externalLeft!=null?{left:`${this._externalLeft}px`}:null)}
              >
                ${this._renderFilterContent(this._openFilter)}
              </div>
            </div>
          `:a.nothing}
    `}};I.styles=a.css`
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
  `;O([c.property({type:Number})],I.prototype,"totalCount",2);O([c.property({type:Number})],I.prototype,"totalFolderCount",2);O([c.property({type:Boolean})],I.prototype,"isLoading",2);O([c.property({type:Boolean})],I.prototype,"showUpload",2);O([c.property({type:Boolean})],I.prototype,"showCreateFolder",2);O([c.property({type:Boolean})],I.prototype,"showFilters",2);O([c.property()],I.prototype,"countLabel",2);O([c.property()],I.prototype,"sortBy",2);O([c.property()],I.prototype,"sortDirection",2);O([c.property({type:Array})],I.prototype,"sortOptions",2);O([c.property({type:Object})],I.prototype,"filters",2);O([c.property({type:Array})],I.prototype,"labels",2);O([c.property({type:Array})],I.prototype,"tags",2);O([c.property({type:Array})],I.prototype,"fileTypes",2);O([c.property({type:Array})],I.prototype,"metadataFields",2);O([c.property({type:Array})],I.prototype,"pinnedFilters",2);O([c.property({type:Array})],I.prototype,"forcedFilterKeys",2);O([c.property({type:Array})],I.prototype,"approverUsers",2);O([c.property({type:Array})],I.prototype,"requesterUsers",2);O([c.property({attribute:!1})],I.prototype,"apiClient",2);O([c.property({attribute:!1})],I.prototype,"t",2);O([c.query("sfx-dropdown")],I.prototype,"_sortDropdown",2);O([c.state()],I.prototype,"_showDropdown",2);O([c.state()],I.prototype,"_showMetadataSelector",2);O([c.state()],I.prototype,"_openFilter",2);O([c.state()],I.prototype,"_openMetadataField",2);O([c.state()],I.prototype,"_externalTrigger",2);O([c.state()],I.prototype,"_externalLeft",2);O([c.state()],I.prototype,"_externalTop",2);I=O([m.customElement("ap-content-toolbar")],I);var Ro=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Y=(t,e,s,i)=>{for(var r=i>1?void 0:i?No(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Ro(e,s,r),r};let K=class extends a.LitElement{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t}_mapTypeLabel(t){var i;const e=(i=Wt.find(r=>r.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),r=s?parseFloat(s):null,o=i?parseFloat(i):null,l=n=>n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)} GB`:`${n} MB`;return r!==null&&o!==null?`${l(r)} – ${l(o)}`:r!==null?`> ${l(r)}`:o!==null?`< ${l(o)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===b.SIZE)return this._getSizeSummary(s);if(e===b.COLOR){const o=s.values.map(l=>l.split(" ")[0]).filter(Boolean);return o.length===0?"":o.length===1?o[0]:`${o[0]} +${o.length-1}`}const i=o=>o===ce?this.t("empty","Empty"):o===de?this.t("notEmpty","Not empty"):null,r=e===b.TYPE?o=>i(o)??this._mapTypeLabel(o):e===b.TAGS?o=>{var l;return i(o)??(((l=this.tags.find(n=>n.sid===o))==null?void 0:l.label)||o)}:e===b.LABELS?o=>{var l;return i(o)??(((l=this.labels.find(n=>n.sid===o))==null?void 0:l.name)||o)}:e===S.APPROVER?o=>{var l;return i(o)??(((l=this.approverUsers.find(n=>n.uuid===o))==null?void 0:l.name)||o)}:e===S.REQUESTOR?o=>{var l;return i(o)??(((l=this.requesterUsers.find(n=>n.uuid===o))==null?void 0:l.name)||o)}:o=>i(o)??o;return s.values.length===1?r(s.values[0]):`${r(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return e===S.DUE_DATE?this._getDuedateSummary(t):this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(t){const e=i=>i.split("T")[0],s=t.preset||"";if(s===ce)return this.t("empty","Empty");if(s===de)return this.t("notEmpty","Not empty");if(t.kind==="preset"){const i=ri.find(r=>r.value===s);return i?this.t(i.labelKey,i.label):s}if(t.kind==="between"){if(t.from&&t.to)return`${e(t.from)} – ${e(t.to)}`;if(t.from)return`${this.t("afterDate","After date")}: ${e(t.from)}`;if(t.to)return`${this.t("beforeDate","Before date")}: ${e(t.to)}`}return t.kind==="after"&&t.from?`${this.t("afterDate","After date")}: ${e(t.from)}`:t.kind==="before"&&t.to?`${this.t("beforeDate","Before date")}: ${e(t.to)}`:t.kind==="specific"&&t.from?e(t.from):""}_getDateSummary(t){const e=si.find(d=>d.value===t.field),s=e?this.t(e.labelKey,e.label):"",i=[...vs,...ii],r=t.preset?i.find(d=>d.value===t.preset):null,o=r?this.t(r.labelKey,r.label):t.preset||"",l=d=>{try{return d.split("T")[0]}catch{return d}};let n="";switch(t.kind){case"preset":n=o;break;case"before":n=t.to?`${this.t("beforeDate","Before date")}: ${l(t.to)}`:o;break;case"after":n=t.from?`${this.t("afterDate","After date")}: ${l(t.from)}`:o;break;case"between":t.from&&t.to?n=`${l(t.from)} – ${l(t.to)}`:t.from?n=`${this.t("afterDate","After date")}: ${l(t.from)}`:t.to&&(n=`${this.t("beforeDate","Before date")}: ${l(t.to)}`);break;case"specific":n=t.from?l(t.from):"";break;default:n=o}return n?s?`${s}: ${n}`:n:""}_getFilterIcon(t){var e,s;return t===S.STATUS||t===S.APPROVER||t===S.REQUESTOR||t===S.DUE_DATE?((e=Et.find(i=>i.key===b.APPROVAL))==null?void 0:e.icon)||"filter":((s=Et.find(i=>i.key===t))==null?void 0:s.icon)||"filter"}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return s&&Gt[s.type]||"file-text"}_stripMetadataPrefix(t){for(const e of Zs)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const{t:s}=this,i=this._getFilterSummary(e,t),r=e.type==="date";return a.html`
      <span class="chip forced">
        ${(r||t===b.TYPE||t===b.SIZE)&&i?a.html`<span class="chip-label">${i}</span>`:a.html`
              <span class="chip-label"
                >${s(At[t]??t,lt[t]||t)}</span
              >
              ${i?a.html`<span class="chip-summary">${i}</span>`:a.nothing}
            `}
        <span class="chip-lock">
          <sfx-icon name="lock" .size=${12}></sfx-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){const{t:s}=this;if(!e)return a.html`
        <span
          class="chip pinned-empty ${t===this.activeFilter?"active":""}"
          @click=${o=>this._openFilter(t,o)}
        >
          <span class="chip-icon"
            ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
          ></span>
          <span class="chip-label"
            >${s(At[t]??t,lt[t]||t)}</span
          >
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `;const i=this._getFilterSummary(e,t),r=e.type==="date";return a.html`
      <span
        class="chip ${t===this.activeFilter?"active":""}"
        @click=${o=>this._openFilter(t,o)}
      >
        ${(r||t===b.TYPE||t===b.SIZE)&&i?a.html` <span class="chip-icon"
                ><sfx-icon name=${this._getFilterIcon(t)} .size=${16}></sfx-icon
              ></span>
              <span class="chip-label">${i}</span>`:a.html`
              <span class="chip-label"
                >${s(At[t]??t,lt[t]||t)}</span
              >
              ${i?a.html`<span class="chip-summary">${i}</span>`:a.nothing}
            `}
        <button
          class="chip-remove"
          @click=${o=>{o.stopPropagation(),this._removeFilter(t)}}
          title=${s("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const o=this._getMetadataLabel(t),l=this._getMetadataIcon(t);return a.html`
        <span
          class="chip pinned-empty ${t===this.activeMetadataField?"active":""}"
          @click=${n=>this._openMetadataFilter(t,n)}
        >
          <span class="chip-icon"><sfx-icon name=${l} .size=${16}></sfx-icon></span>
          <span class="chip-label">${o}</span>
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),r=this._getMetadataIcon(t);return a.html`
      <span
        class="chip ${t===this.activeMetadataField?"active":""}"
        @click=${o=>this._openMetadataFilter(t,o)}
      >
        <span class="chip-icon"><sfx-icon name=${r} .size=${16}></sfx-icon></span>
        <span class="chip-label">${i}</span>
        ${s?a.html`<span class="chip-summary">${s}</span>`:a.nothing}
        <button
          class="chip-remove"
          @click=${o=>{o.stopPropagation(),this._removeMetadataFilter(t)}}
          title=${this.t("removeFilter","Remove filter")}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}render(){const t=hs(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(g=>!e.has(g)),i=Object.keys(this.appliedMetadata),r=new Set(this.pinnedFilters),o=new Set(this.pinnedMetadataFields),l=this.pinnedFilters.filter(g=>!e.has(g)),n=s.filter(g=>!r.has(g)),d=i.filter(g=>!o.has(g)),h=this.pendingFilter&&!r.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),u=this.pendingMetadataField&&!o.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),f=s.length+i.length>0;return e.size+l.length+this.pinnedMetadataFields.length+n.length+d.length+(h?1:0)+(u?1:0)===0?a.nothing:a.html`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(g=>this._renderForcedChip(g,t[g]))}
          ${l.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${this.pinnedMetadataFields.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${n.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${h?a.html`
                <span
                  class="chip pinned-empty active pending"
                  @click=${g=>this._openFilter(this.pendingFilter,g)}
                >
                  <span class="chip-icon"
                    ><sfx-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this.t(At[this.pendingFilter]??this.pendingFilter,lt[this.pendingFilter]||this.pendingFilter)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              `:a.nothing}
          ${d.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${u?a.html`
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
              `:a.nothing}
          ${f?a.html`<button class="clear-all" @click=${this._clearAll}>
                ${this.t("clearFilters","Clear filters")}
              </button>`:a.nothing}
        </div>
      </div>
    `}};K.styles=a.css`
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
  `;Y([c.property({type:Object})],K.prototype,"appliedFilters",2);Y([c.property({type:Object})],K.prototype,"appliedMetadata",2);Y([c.property({type:Object})],K.prototype,"forcedFilters",2);Y([c.property({type:Array})],K.prototype,"metadataFields",2);Y([c.property({type:Array})],K.prototype,"pinnedFilters",2);Y([c.property({type:Array})],K.prototype,"pinnedMetadataFields",2);Y([c.property({type:Array})],K.prototype,"tags",2);Y([c.property({type:Array})],K.prototype,"labels",2);Y([c.property({type:Array})],K.prototype,"approverUsers",2);Y([c.property({type:Array})],K.prototype,"requesterUsers",2);Y([c.property()],K.prototype,"activeFilter",2);Y([c.property()],K.prototype,"activeMetadataField",2);Y([c.property()],K.prototype,"pendingFilter",2);Y([c.property()],K.prototype,"pendingMetadataField",2);Y([c.property({attribute:!1})],K.prototype,"t",2);K=Y([m.customElement("ap-filters-bar")],K);var Uo=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,he=(t,e,s,i)=>{for(var r=i>1?void 0:i?jo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Uo(e,s,r),r};const Ko=6;let X=class extends a.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return a.html`
      <div
        class="grid"
        role="list"
        aria-label="Assets"
        ${m.cspStyle({"--sfx-grid-min-col":String(t)})}
      >
        ${this.folders.map((e,s)=>a.html`
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
        ${this.assets.map((e,s)=>{const i=s>=this._prevCount?Math.min(s-this._prevCount,20):Math.min(s,20);return a.html`
            <ap-asset-card
              .asset=${e}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+s:s}
              ?selected=${this.selectedIds.includes(e.uuid)}
              ?disabled=${this.disabledAssetIds.includes(e.uuid)}
              .multiSelect=${this.multiSelect}
              ${m.cspStyle({"--sfx-stagger-index":String(i)})}
              data-asset-uuid=${e.uuid}
              @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-card>
          `})}
        ${this.isLoading?Array.from({length:Ko},()=>a.html`<div class="ghost-card">
                  <div class="ghost-thumb"></div>
                  <div class="ghost-info">
                    <div class="ghost-line ghost-name"></div>
                    <div class="ghost-line ghost-meta"></div>
                  </div>
                </div>`):a.nothing}
      </div>
    `}};X.styles=a.css`
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
  `;he([c.property({attribute:!1})],X.prototype,"t",2);he([c.property({type:Array})],X.prototype,"assets",2);he([c.property({type:Array})],X.prototype,"folders",2);he([c.property({type:Object})],X.prototype,"folderPreviews",2);he([c.property({type:Array})],X.prototype,"selectedIds",2);he([c.property({type:Array})],X.prototype,"selectedFolderIds",2);he([c.property({type:Array})],X.prototype,"disabledAssetIds",2);he([c.property({type:Array})],X.prototype,"disabledFolderIds",2);he([c.property({type:Boolean})],X.prototype,"isLoading",2);he([c.property({type:Boolean})],X.prototype,"multiSelect",2);he([c.property({type:Boolean})],X.prototype,"folderSelectable",2);he([c.property({type:String})],X.prototype,"gridSize",2);X=he([m.customElement("ap-grid-view")],X);var Bo=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,J=(t,e,s,i)=>{for(var r=i>1?void 0:i?Vo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Bo(e,s,r),r};const qo=5;let q=class extends a.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];return t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(r=>t.has(r.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(r=>s.has(r.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return a.html`
      <div
        class="list-header"
        ${m.cspStyle({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
        role="row"
        aria-label="Column headers"
      >
        ${this.multiSelect?a.html`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
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
            </span>`:a.nothing}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        ${this._compactLevel<2?a.html`<span>${this.t("size","Size")}</span>`:a.nothing}
        ${this._compactLevel<1?a.html`<span>${this.t("date","Date")}</span>`:a.nothing}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map((i,r)=>a.html`
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
        ${this.assets.map((i,r)=>a.html`
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
        ${this.isLoading?Array.from({length:qo},(i,r)=>{const o=["70%","55%","80%","45%","65%"];return a.html`
                <div
                  class="ghost-row"
                  ${m.cspStyle({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
                >
                  ${this.multiSelect?a.html`<div class="ghost-el ghost-check"></div>`:a.nothing}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${m.cspStyle({width:o[r]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?a.html`<div class="ghost-el ghost-size"></div>`:a.nothing}
                  ${this._compactLevel<1?a.html`<div class="ghost-el ghost-date"></div>`:a.nothing}
                  <div></div>
                </div>
              `}):a.nothing}
      </div>
    `}};q.styles=a.css`
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
  `;J([c.property({attribute:!1})],q.prototype,"t",2);J([c.property({type:Array})],q.prototype,"assets",2);J([c.property({type:Array})],q.prototype,"folders",2);J([c.property({type:Array})],q.prototype,"selectedIds",2);J([c.property({type:Array})],q.prototype,"selectedFolderIds",2);J([c.property({type:Array})],q.prototype,"disabledAssetIds",2);J([c.property({type:Array})],q.prototype,"disabledFolderIds",2);J([c.property({type:Boolean})],q.prototype,"isLoading",2);J([c.property({type:Boolean})],q.prototype,"multiSelect",2);J([c.property({type:Boolean})],q.prototype,"folderSelectable",2);J([c.property({type:Number})],q.prototype,"totalCount",2);J([c.property({type:Boolean})],q.prototype,"isSelectingAll",2);J([c.property({type:Object})],q.prototype,"folderPreviews",2);J([c.state()],q.prototype,"_compactLevel",2);q=J([m.customElement("ap-list-view")],q);function $s(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function Zt(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function pi(t,e){return!t||!e?"":`${t} x ${e}`}var Go=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,ot=(t,e,s,i)=>{for(var r=i>1?void 0:i?Qo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Go(e,s,r),r};let Oe=class extends a.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),r=o=>String(o).padStart(2,"0");return e>0?`${e}:${r(s)}:${r(i)}`:`${r(s)}:${r(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var h,u,f,p,g,v,w,x;const t=this.asset;if(!t)return a.html``;const s=nt(t.type)==="video",i=((h=t.extension)==null?void 0:h.toLowerCase())==="pdf",r=!!((u=t.info)!=null&&u.thumbnail||(f=t.info)!=null&&f.image_thumbnail||(p=t.info)!=null&&p.preview),o=Hs(t.extension||"")||r;let l="";s?l=Ws(t):i?l=gs(t):o&&(l=Yt(t));const n=P.getFileTypeIconUrl(t.extension||""),d=fs(t.extension||"");return a.html`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${d&&l?"chess":""}">
          ${l?a.html`<img
                src=${l}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${d?"transparent-asset":""}"
                @error=${y=>{const _=y.target,E=P.getDefaultFileTypeIconUrl();_.src!==n&&_.src!==E?(_.src=n,_.classList.add("icon-fallback")):_.src!==E&&(_.src=E)}}
              />`:a.html`<img
                src=${n}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${y=>{const _=y.target,E=P.getDefaultFileTypeIconUrl();_.src!==E&&(_.src=E)}}
              />`}
          ${s&&(((g=t.info)==null?void 0:g.video_duration)??((v=t.info)==null?void 0:v.duration))!=null?a.html`<span class="duration"
                >${this._formatDuration(t.info.video_duration??t.info.duration)}</span
              >`:a.nothing}
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
          ${this.multiSelect?a.html`
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
              `:a.nothing}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="meta">
            ${(w=t.extension)==null?void 0:w.toUpperCase()}${(()=>{var D,C,B,F;const y=((D=t.info)==null?void 0:D.img_w)||((C=t.info)==null?void 0:C.video_w),_=((B=t.info)==null?void 0:B.img_h)||((F=t.info)==null?void 0:F.video_h),E=pi(y,_);return E?` · ${E}`:""})()}
            · ${$s(((x=t.size)==null?void 0:x.bytes)||0)}
          </div>
        </div>
      </div>
    `}};Oe.styles=a.css`
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
  `;ot([c.property({attribute:!1})],Oe.prototype,"t",2);ot([c.property({type:Object})],Oe.prototype,"asset",2);ot([c.property({type:Number})],Oe.prototype,"index",2);ot([c.property({type:Boolean,reflect:!0})],Oe.prototype,"selected",2);ot([c.property({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);ot([c.property({type:Boolean})],Oe.prototype,"multiSelect",2);Oe=ot([m.customElement("ap-asset-card")],Oe);var Ho=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,qe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Yo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Ho(e,s,r),r};let ke=class extends a.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var h,u,f,p,g,v;const t=this.asset;if(!t)return a.html``;const s=nt(t.type)==="video",i=((h=t.extension)==null?void 0:h.toLowerCase())==="pdf",r=!!((u=t.info)!=null&&u.thumbnail||(f=t.info)!=null&&f.image_thumbnail||(p=t.info)!=null&&p.preview),o=Hs(t.extension||"")||r;let l="";s?l=Ws(t):i?l=gs(t):o&&(l=Yt(t));const n=P.getFileTypeIconUrl(t.extension||""),d=fs(t.extension||"");return a.html`
      <div
        class="row"
        ${m.cspStyle({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleSelect}
      >
        ${this.multiSelect?a.html`
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
            `:a.nothing}
        <div class="thumb ${d&&l?"chess":""}">
          ${l?a.html`<img
                src=${l}
                alt=${t.name}
                class="${d?"transparent-asset":""}"
                loading="lazy"
                @error=${w=>{const x=w.target,y=P.getDefaultFileTypeIconUrl();x.src!==n&&x.src!==y?(x.src=n,x.classList.add("icon-fallback")):x.src!==y&&(x.src=y)}}
              />`:a.html`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${w=>{const x=w.target,y=P.getDefaultFileTypeIconUrl();x.src!==y&&(x.src=y)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(g=t.extension)==null?void 0:g.toUpperCase()}</div>
        ${this.compactLevel<2?a.html`<div class="desc">${$s(((v=t.size)==null?void 0:v.bytes)||0)}</div>`:a.nothing}
        ${this.compactLevel<1?a.html`<div class="date">${Zt(t.created_at||"")}</div>`:a.nothing}
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
    `}};ke.styles=a.css`
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
  `;qe([c.property({attribute:!1})],ke.prototype,"t",2);qe([c.property({type:Object})],ke.prototype,"asset",2);qe([c.property({type:Number})],ke.prototype,"index",2);qe([c.property({type:Boolean,reflect:!0})],ke.prototype,"selected",2);qe([c.property({type:Boolean,reflect:!0})],ke.prototype,"disabled",2);qe([c.property({type:Boolean})],ke.prototype,"multiSelect",2);qe([c.property({type:Number})],ke.prototype,"compactLevel",2);ke=qe([m.customElement("ap-asset-row")],ke);var Wo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Ge=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Wo(e,s,r),r};let Se=class extends a.LitElement{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return Xs(t,"200")}_renderPreviewImg(t){const e=Ys(t.file_type),s=this._getPreviewUrl(t),i=P.getFileTypeIconUrl(es(t.file_type)),r=P.getDefaultFileTypeIconUrl();return a.html`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${o=>{const l=o.target,n=l.parentElement;l.src!==i&&l.src!==r?(l.src=i,l.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):l.src!==r&&(l.src=r,l.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
        @load=${o=>{const l=o.target,n=l.parentElement;l.src.includes("assets/file-types")&&(l.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return a.html`<div class="empty-preview"><sfx-icon name="inbox" .size=${64}></sfx-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?a.html`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:a.html`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?a.html`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:a.nothing}
        </div>
      </div>
    `}render(){var r,o;const t=this.folder;if(!t)return a.html``;const e=((r=t.count)==null?void 0:r.files_direct)??0,i=(((o=t.count)==null?void 0:o.files_recursive)??0)-e;return a.html`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
            rx="3"
            ry="3"
          />
        </svg>
        ${this.selectable&&this.multiSelect?a.html`
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
            `:a.nothing}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${t.name}>${t.name}</div>
            <div class="counts">
              <span>${e} asset${e!==1?"s":""}</span>
              ${i>0?a.html`<span>${i} sub-asset${i!==1?"s":""}</span>`:a.nothing}
            </div>
          </div>
        </div>
      </div>
    `}};Se.styles=[ge,a.css`
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
    `];Ge([c.property({type:Object})],Se.prototype,"folder",2);Ge([c.property({type:Array})],Se.prototype,"previews",2);Ge([c.property({type:Boolean,reflect:!0})],Se.prototype,"selected",2);Ge([c.property({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);Ge([c.property({type:Boolean})],Se.prototype,"selectable",2);Ge([c.property({type:Boolean})],Se.prototype,"multiSelect",2);Ge([c.property({type:Number})],Se.prototype,"index",2);Se=Ge([m.customElement("ap-folder-card")],Se);var Zo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,De=(t,e,s,i)=>{for(var r=i>1?void 0:i?Jo(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Zo(e,s,r),r};let xe=class extends a.LitElement{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=Ys(t.file_type),s=Xs(t,"80"),i=P.getFileTypeIconUrl(es(t.file_type)),r=P.getDefaultFileTypeIconUrl();return a.html`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${o=>{const l=o.target,n=l.parentElement;l.src!==i&&l.src!==r?(l.src=i,l.classList.add("icon-mode"),n==null||n.classList.add("icon-bg")):l.src!==r&&(l.src=r,l.classList.add("icon-mode"),n==null||n.classList.add("icon-bg"))}}
      />
    </div>`}_renderThumb(){const t=a.html`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
        />
      </svg>
    `,e=this.previews.slice(0,2);return a.html`
      ${t}
      <div class="preview-area">
        ${e.length>0?e.map(s=>this._renderPreviewImg(s)):a.html`<div class="empty-preview">
              <sfx-icon name="inbox" .size=${14}></sfx-icon>
            </div>`}
      </div>
    `}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?a.html`
      <div
        class="row"
        ${m.cspStyle({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleClick}
      >
        ${this.multiSelect?this.selectable?a.html` <div class="check">
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
              </div>`:a.html`<div></div>`:a.nothing}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?a.html`<div class="meta">
              ${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items
            </div>`:a.nothing}
        ${this.compactLevel<1?a.html`<div class="meta">${Zt(t.modified_at||t.updated_at||"")}</div>`:a.nothing}
        <div></div>
      </div>
    `:a.html``}};xe.styles=a.css`
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
  `;De([c.property({type:Object})],xe.prototype,"folder",2);De([c.property({type:Array})],xe.prototype,"previews",2);De([c.property({type:Boolean,reflect:!0})],xe.prototype,"selected",2);De([c.property({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);De([c.property({type:Boolean})],xe.prototype,"selectable",2);De([c.property({type:Boolean})],xe.prototype,"multiSelect",2);De([c.property({type:Number})],xe.prototype,"index",2);De([c.property({type:Number})],xe.prototype,"compactLevel",2);xe=De([m.customElement("ap-folder-row")],xe);var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,ws=(t,e,s,i)=>{for(var r=i>1?void 0:i?ta(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&ea(e,s,r),r};let It=class extends a.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return a.html``;const e=t.assets_count??0,s=t.color||"#94a3b8";return a.html`
      <div class="card" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${m.cspStyle({background:`color-mix(in srgb, ${s} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${18} ${m.cspStyle({color:s})}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};It.styles=[ge,a.css`
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
    `];ws([c.property({type:Object})],It.prototype,"label",2);ws([c.property({type:Number})],It.prototype,"index",2);It=ws([m.customElement("ap-label-card")],It);var sa=Object.defineProperty,ia=Object.getOwnPropertyDescriptor,ks=(t,e,s,i)=>{for(var r=i>1?void 0:i?ia(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&sa(e,s,r),r};let Ot=class extends a.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return a.html``;const e=t.assets_count??0,s=t.color||"#94a3b8";return a.html`
      <div class="row" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${m.cspStyle({background:`color-mix(in srgb, ${s} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${16} ${m.cspStyle({color:s})}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};Ot.styles=a.css`
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
  `;ks([c.property({type:Object})],Ot.prototype,"label",2);ks([c.property({type:Number})],Ot.prototype,"index",2);Ot=ks([m.customElement("ap-label-row")],Ot);var ra=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,Ss=(t,e,s,i)=>{for(var r=i>1?void 0:i?oa(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&ra(e,s,r),r};let Pt=class extends a.LitElement{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?a.html`
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
    `:a.html``}};Pt.styles=[ge,a.css`
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
    `];Ss([c.property({type:Object})],Pt.prototype,"collection",2);Ss([c.property({type:Number})],Pt.prototype,"index",2);Pt=Ss([m.customElement("ap-collection-card")],Pt);var aa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Cs=(t,e,s,i)=>{for(var r=i>1?void 0:i?la(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&aa(e,s,r),r};let Dt=class extends a.LitElement{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?a.html`
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
    `:a.html``}};Dt.styles=a.css`
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
  `;Cs([c.property({type:Object})],Dt.prototype,"collection",2);Cs([c.property({type:Number})],Dt.prototype,"index",2);Dt=Cs([m.customElement("ap-collection-row")],Dt);var na=Object.defineProperty,ca=Object.getOwnPropertyDescriptor,Fs=(t,e,s,i)=>{for(var r=i>1?void 0:i?ca(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&na(e,s,r),r};let zt=class extends a.LitElement{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--sfx-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--sfx-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?a.html`
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
    `:a.html``}};zt.styles=[ge,a.css`
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
    `];Fs([c.property({type:Object})],zt.prototype,"folder",2);Fs([c.property({type:Number})],zt.prototype,"index",2);zt=Fs([m.customElement("ap-collection-folder-card")],zt);var da=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,As=(t,e,s,i)=>{for(var r=i>1?void 0:i?pa(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&da(e,s,r),r};let Mt=class extends a.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?a.html`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:a.html``}};Mt.styles=a.css`
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
  `;As([c.property({type:Object})],Mt.prototype,"folder",2);As([c.property({type:Number})],Mt.prototype,"index",2);Mt=As([m.customElement("ap-collection-folder-row")],Mt);var ha=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,ht=(t,e,s,i)=>{for(var r=i>1?void 0:i?ua(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&ha(e,s,r),r};let Ke=class extends a.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const l=this.gridSize==="large"?"280px":"220px";return a.html`
        <div class="grid-skeleton" ${m.cspStyle({"--sfx-grid-min-col":String(l)})}>
          ${Array.from({length:18},()=>a.html`<div class="card-skel">
                <div class="skeleton card-skel-thumb"></div>
                <div class="card-skel-info">
                  <div class="skeleton card-skel-name"></div>
                  <div class="skeleton card-skel-meta"></div>
                </div>
              </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=a.html`
      <div class="row-skel" ${m.cspStyle({"grid-template-columns":e})}>
        ${this.multiSelect?a.html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
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
    `,i=l=>a.html`
      <div class="row-skel" ${m.cspStyle({"grid-template-columns":e})}>
        ${this.multiSelect?a.html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${m.cspStyle({width:l})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,r=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],o=12-this.folderCount;return a.html`
      <div class="list-header" ${m.cspStyle({"grid-template-columns":e})}>
        ${this.multiSelect?a.html`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        <span>${this.t("size","Size")}</span>
        <span>${this.t("date","Date")}</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>s)}
      ${Array.from({length:o},(l,n)=>i(r[n%r.length]))}
    `}};Ke.styles=a.css`
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
  `;ht([c.property({attribute:!1})],Ke.prototype,"t",2);ht([c.property({reflect:!0})],Ke.prototype,"variant",2);ht([c.property({type:String})],Ke.prototype,"gridSize",2);ht([c.property({type:Boolean})],Ke.prototype,"multiSelect",2);ht([c.property({type:Number})],Ke.prototype,"folderCount",2);Ke=ht([m.customElement("ap-skeleton")],Ke);var fa=Object.defineProperty,ga=Object.getOwnPropertyDescriptor,G=(t,e,s,i)=>{for(var r=i>1?void 0:i?ga(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&fa(e,s,r),r};let N=class extends a.LitElement{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.t=(t,e)=>typeof e=="string"?e:t,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=nt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,r;const e=Jt(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:o}=await Promise.resolve().then(()=>require("./hls.light-C_HifFVQ.cjs"));if(!o.isSupported()||((r=this.asset)==null?void 0:r.uuid)!==t.uuid||!this.isConnected)return;const l=new o;this._hls=l,l.loadSource(e),l.attachMedia(s),l.on(o.Events.ERROR,(n,d)=>{var h;d.fatal&&(this._destroyHls(),s.src=((h=t.url)==null?void 0:h.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,r,o,l;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((r=(i=this.asset)==null?void 0:i.url)!=null&&r.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(l=(o=this.previewArea)==null?void 0:o.requestFullscreen)==null||l.call(o)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=nt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var r,o;const e=(r=t.url)==null?void 0:r.cdn;if(!e)return Yt(t)||"";const s={source:"asset",asset:t};if(((o=t.extension)==null?void 0:o.toLowerCase())==="svg")return Ee(e,s);const i=Je(e,this.containerToken);return Ee(Te(i,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),s)}_getBlurDimensions(t){var l,n;const e=(l=t.info)==null?void 0:l.img_w,s=(n=t.info)==null?void 0:n.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,r=window.innerHeight,o=Math.min(i/e,r/s,1);return{width:`${Math.round(e*o)}px`,height:`${Math.round(s*o)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(r=>!r.label||i.has(r.sid)?!1:(i.add(r.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:b.TAGS,values:[t],operator:A.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:b.LABELS,values:[t],operator:A.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return a.nothing;const s=this._openSections.has("file-info");return a.html`
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
          ${e.map(i=>a.html`
              <div class="meta-row">
                <span class="meta-label" title=${i.label}>${i.label}</span>
                <span class="meta-value" title=${i.value}>${i.value}</span>
              </div>
            `)}
          ${this._renderTagsRow(t)} ${this._renderLabelsRow(t)}
        </div>
      </div>
    `}_renderAccordion(t,e,s){if(s.length===0)return a.nothing;const i=this._openSections.has(t);return a.html`
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
          ${s.map(r=>a.html`
              <div class="meta-row">
                <span class="meta-label" title=${r.label}>${r.label}</span>
                <span class="meta-value" title=${r.value}>${r.value}</span>
              </div>
            `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,r,o,l,n;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:$s(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:pi(t.info.img_w,t.info.img_h)}),(r=t.info)!=null&&r.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((o=t.info)==null?void 0:o.video_duration)??((l=t.info)==null?void 0:l.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(n=t.info)!=null&&n.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:Zt(t.created_at)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:Zt(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(r=>r.internal_unique_value===t||r.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const r=t[i];if(r!=null&&r!=="")return this._resolveFieldValue(r,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(r=>this._resolveSlug(String(r),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var o,l,n,d;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const h=t;for(const u of this.metadataFields){const f=h[u.key]??((l=(o=t.info)==null?void 0:o.metadata)==null?void 0:l[u.key])??((n=t.meta)==null?void 0:n[u.key]),p=this._resolveFieldValue(f,u);if(!p)continue;i.add(u.key),u.slug&&i.add(u.slug);const g=p.length>50;e.push({label:u.label,value:p,wrap:g})}}if(t.meta)for(const[h,u]of Object.entries(t.meta)){if(i.has(h)||u==null||u==="")continue;const f=s.get(h);if(f){const p=this._resolveFieldValue(u,f);if(!p)continue;i.add(h);const g=p.length>50;e.push({label:f.label,value:p,wrap:g})}else{const p=typeof u=="object"?JSON.stringify(u):String(u);if(!p||p==="{}"||p==="[]")continue;i.add(h);const g=h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),v=p.length>50;e.push({label:g,value:p,wrap:v})}}const r=(d=t.info)==null?void 0:d.metadata;if(r&&typeof r=="object")for(const[h,u]of Object.entries(r)){if(i.has(h)||u==null||u==="")continue;const f=s.get(h);if(f){const p=this._resolveFieldValue(u,f);if(!p)continue;i.add(h);const g=p.length>50;e.push({label:f.label,value:p,wrap:g})}else{const p=typeof u=="object"?JSON.stringify(u):String(u);if(!p||p==="{}"||p==="[]")continue;i.add(h);const g=h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),v=p.length>50;e.push({label:g,value:p,wrap:v})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?a.nothing:a.html`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels","Labels")}</span>
        <div class="tags-list">
          ${e.map(s=>a.html`
              <sfx-badge
                class="tag-link"
                ${m.cspStyle({"--sfx-muted":`${s.color||"#94a3b8"}22`,"--sfx-muted-foreground":s.color||"#94a3b8"})}
                @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}
              >
                <span class="label-content">
                  <sfx-icon name="tag" .size=${12} ${m.cspStyle({color:s.color||"#94a3b8"})}></sfx-icon>
                  ${s.name}
                </span>
              </sfx-badge>
            `)}
        </div>
      </div>
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?a.nothing:a.html`
      <div class="meta-row">
        <span class="meta-label">${this.t("tags","Tags")}</span>
        <div class="tags-list">
          ${e.map(s=>a.html`
              <sfx-badge class="tag-link" @click=${()=>this._applyTagFilter(s.sid)}
                >${s.label}</sfx-badge
              >
            `)}
        </div>
      </div>
    `}render(){var D,C,B,F,z,L,k,re;const t=this.asset;if(!t)return a.nothing;const e=nt(t.type),s=e==="image",i=e==="video",r=e==="audio",o=((D=t.extension)==null?void 0:D.toLowerCase())==="pdf",l=P.getFileTypeIconUrl(t.extension||""),n=fs(t.extension||""),d=((C=t.extension)==null?void 0:C.toLowerCase())==="svg",h=Yt(t),u=s?d?Ee(((B=t.url)==null?void 0:B.cdn)||"",{source:"asset",asset:t}):h||Ee(Je(((F=t.url)==null?void 0:F.cdn)||"",this.containerToken),{source:"asset",asset:t}):"",f=s?this._getFullscreenImageUrl(t):"",p=s&&!d?this._getBlurDimensions(t):null,g=i&&((z=t.url)==null?void 0:z.cdn)||"",v=i?Ee(((L=t.info)==null?void 0:L.video_thumbnail)||((k=t.info)==null?void 0:k.preview)||"",{source:"video",asset:t}):"",w=o&&!s?gs(t):"",x=this._getCurrentIndex(),y=x>0&&this._findNavTarget(x,-1)>=0,_=x>=0&&this._findNavTarget(x,1)>=0,E=this.assets.length>1;return a.html`
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
          ${E?a.html`
                <button
                  class="nav-btn prev"
                  @click=${this._prev}
                  ?disabled=${!y}
                  aria-label=${this.t("previous","Previous")}
                >
                  <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
                </button>
                <button
                  class="nav-btn next"
                  @click=${this._next}
                  ?disabled=${!_}
                  aria-label=${this.t("next","Next")}
                >
                  <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
                </button>
              `:a.nothing}
          ${this._isFullscreen?a.html`
                <button
                  class="fs-close-btn"
                  @click=${this._exitFullscreen}
                  aria-label=${this.t("exitFullscreen","Exit fullscreen")}
                >
                  <sfx-icon name="close" .size=${16}></sfx-icon>
                </button>
              `:a.nothing}
          ${this._previewLoading?a.html`<div class="preview-loading"><div class="spinner"></div></div>`:a.nothing}
          ${s?a.html`
                <img
                  src=${u}
                  alt=${t.name}
                  @load=${oe=>{oe.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
                  @error=${oe=>{const U=oe.target;this._previewLoading=!1,U.src!==l&&(U.src=l,U.classList.add("icon-fallback"))}}
                />
                <div class="fs-wrapper">
                  ${d?a.nothing:a.html`
                        <img
                          class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                          src=${u}
                          alt=""
                          ${m.cspStyle({width:p.width,height:p.height})}
                        />
                      `}
                  <img
                    class="fs-full ${d||this._fsImageLoaded?"loaded":""}"
                    src=${this._isFullscreen?f:""}
                    alt=${t.name}
                    ${m.cspStyle(d?{width:"100vw",height:"100vh"}:null)}
                    @load=${this._onFsImageLoad}
                  />
                </div>
              `:a.nothing}
          ${i?a.html`<video
                src=${g}
                poster=${v||a.nothing}
                controls
                controlsList="nofullscreen"
                @loadeddata=${()=>{this._previewLoading=!1}}
                @error=${()=>{this._previewLoading=!1}}
              ></video>`:a.nothing}
          ${r?a.html`<audio src=${((re=t.url)==null?void 0:re.cdn)||""} controls></audio>`:a.nothing}
          ${o&&!s?a.html`
                <img
                  src=${w||l}
                  alt=${t.name}
                  class=${w?"":"icon-fallback"}
                  @error=${oe=>{const U=oe.target;U.src!==l&&(U.src=l,U.classList.add("icon-fallback"))}}
                />
              `:a.nothing}
          ${!s&&!i&&!r&&!o?a.html`<img src=${l} alt=${t.name} class="icon-fallback" />`:a.nothing}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?a.html`
              ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(t))}
            `:a.nothing}
      </div>
    `}};N.styles=a.css`
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
  `;G([c.property({type:Object})],N.prototype,"asset",2);G([c.property({type:Array})],N.prototype,"assets",2);G([c.property({type:Array})],N.prototype,"selectedIds",2);G([c.property()],N.prototype,"containerToken",2);G([c.property({type:Boolean})],N.prototype,"showMetadata",2);G([c.property({type:Array})],N.prototype,"metadataFields",2);G([c.property({type:Array})],N.prototype,"labels",2);G([c.property({type:Object})],N.prototype,"regionalFilters",2);G([c.property({type:Boolean})],N.prototype,"multiSelect",2);G([c.property({attribute:!1})],N.prototype,"t",2);G([c.query(".preview-area")],N.prototype,"previewArea",2);G([c.query("video")],N.prototype,"_videoEl",2);G([c.state()],N.prototype,"_isFullscreen",2);G([c.state()],N.prototype,"_fsImageLoaded",2);G([c.state()],N.prototype,"_previewLoading",2);G([c.state()],N.prototype,"_openSections",2);N=G([m.customElement("ap-preview-panel")],N);var ma=Object.defineProperty,va=Object.getOwnPropertyDescriptor,Fe=(t,e,s,i)=>{for(var r=i>1?void 0:i?va(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&ma(e,s,r),r};let fe=class extends a.LitElement{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),r=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:r})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?a.nothing:a.html`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?a.html`
              <span class="divider"></span>
              <span class="select-label">${this.t("selectColon","Select:")}</span>
              ${this._canSelectMore()?a.html`<button
                    class="bar-btn"
                    ?disabled=${this.isSelectingAll}
                    @click=${this._selectAll}
                  >
                    <sfx-icon name="check-check" .size=${14}></sfx-icon>${this.isSelectingAll?this.t("selecting","Selecting..."):this.maxSelections&&this.maxSelections<this._scopeTotal?this.t("selectFirst",`First ${this.maxSelections}`,{count:this.maxSelections}):this._selectScope==="assets"?this.t("selectAllAssets","Select all assets"):this._selectScope==="folders"?this.t("selectAllFolders","Select all folders"):this.t("selectAll","Select all")}
                  </button>`:a.nothing}
              <button class="bar-btn" @click=${this._clear}>
                <sfx-icon name="close" .size=${14}></sfx-icon>${this.t("deselectAll","Deselect all")}
              </button>
              ${this.maxSelections&&this._totalSelected>=this.maxSelections?a.html`<span class="limit-notice"
                    >${this.t("maxSelectionsAllowed",`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span
                  >`:a.nothing}
            `:a.nothing}
        <div class="spacer"></div>
        ${this.showTransform?a.html`
              <button class="btn-confirm btn-transform" @click=${this._transform}>
                ${this.t("transform","Transform")}
              </button>
            `:a.nothing}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm","Confirm")}</button>
      </div>
    `}};fe.styles=a.css`
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
  `;Fe([c.property({type:Array})],fe.prototype,"selectedAssets",2);Fe([c.property({type:Array})],fe.prototype,"selectedFolders",2);Fe([c.property({type:Number})],fe.prototype,"totalCount",2);Fe([c.property({type:Number})],fe.prototype,"totalFolderCount",2);Fe([c.property({type:Boolean})],fe.prototype,"isSelectingAll",2);Fe([c.property({type:Boolean})],fe.prototype,"multiSelect",2);Fe([c.property({type:Number})],fe.prototype,"maxSelections",2);Fe([c.property({type:Boolean})],fe.prototype,"showTransform",2);Fe([c.property({attribute:!1})],fe.prototype,"t",2);fe=Fe([m.customElement("ap-selection-bar")],fe);var ba=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,Es=(t,e,s,i)=>{for(var r=i>1?void 0:i?xa(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&ba(e,s,r),r};let Rt=class extends a.LitElement{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?a.nothing:a.html`
      <div
        class="marquee"
        ${m.cspStyle({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};Rt.styles=a.css`
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
  `;Es([c.property({type:Boolean})],Rt.prototype,"active",2);Es([c.property({type:Object})],Rt.prototype,"rect",2);Rt=Es([m.customElement("ap-marquee-overlay")],Rt);var _a=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,jt=(t,e,s,i)=>{for(var r=i>1?void 0:i?ya(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&_a(e,s,r),r};let st=class extends a.LitElement{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return a.html`
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
              ${this.loading?a.html`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.t("loading","Loading...")}</span
                  >`:this.t("addAssets","Add assets")}
            </button>
          </div>
        </div>
      </div>
    `}};st.styles=[ge,a.css`
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
    `];jt([c.property({type:Array})],st.prototype,"folders",2);jt([c.property({type:Boolean})],st.prototype,"loading",2);jt([c.property({attribute:!1})],st.prototype,"t",2);jt([c.state()],st.prototype,"_mode",2);st=jt([m.customElement("ap-folder-resolve-dialog")],st);var $a=Object.defineProperty,wa=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var r=i>1?void 0:i?wa(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&$a(e,s,r),r};const ka=["webp","jpeg","png","gif"];function Sa(t){const e=(t??"").toLowerCase();return ka.includes(e)?e:"jpeg"}let ie=class extends a.LitElement{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>Xe(i));if(!t)return 1.5;const e=Qt(t),s=Ht(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>Xe(e));if(this._defaultFormat=Sa(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=Qt(t),s=Ht(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return a.html`
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
              .options=${Vi}
              @sfx-change=${this._handleFormatChange}
            ></sfx-radio-group>
          </div>

          ${t?a.nothing:a.html`
                <div class="section">
                  <span class="section-label">${this.t("quality","Quality")}</span>
                  <sfx-dropdown
                    .value=${this._quality}
                    .options=${qi}
                    @sfx-change=${this._handleQualityChange}
                  ></sfx-dropdown>
                </div>
              `}

          <div class="section">
            <span class="section-label">${this.t("size","Size")}</span>
            ${this.isMultiSelect?a.html`
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
                `:a.html`
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
              ${Gi.map(e=>a.html`
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
    `}};ie.styles=[ge,a.css`
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
    `];me([c.property({type:Array})],ie.prototype,"assets",2);me([c.property({type:Boolean})],ie.prototype,"isMultiSelect",2);me([c.property({attribute:!1})],ie.prototype,"t",2);me([c.property({attribute:!1})],ie.prototype,"exportOriginalLabel",2);me([c.property({attribute:!1})],ie.prototype,"applyExportLabel",2);me([c.state()],ie.prototype,"_format",2);me([c.state()],ie.prototype,"_quality",2);me([c.state()],ie.prototype,"_width",2);me([c.state()],ie.prototype,"_height",2);me([c.state()],ie.prototype,"_lockAspect",2);me([c.state()],ie.prototype,"_activePreset",2);ie=me([m.customElement("ap-transformation-dialog")],ie);var Ca=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,Qe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Fa(e,s):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=(i?l(e,s,r):l(r))||r);return i&&r&&Ca(e,s,r),r};const Aa=/[/\\\x00-\x1f]/;let Ce=class extends a.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_onInput(t){this._name=t.detail.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_validateName(t){return Aa.test(t)?this.t("folderNameInvalidChars",`Folder name can't contain "/" or "\\".`):t==="."||t===".."?this.t("folderNameReserved",`Folder name can't be "." or "..".`):null}_onConfirm(t){if(this.loading)return;const e=t.detail.value.trim();if(!e)return;const s=this._validateName(e);if(s){this._localError=s;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:e},bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}render(){const t=this._localError??(this._apiErrorDismissed?null:this.error);return a.html`
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
    `}};Ce.styles=a.css`
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
  `;Qe([c.property({attribute:!1})],Ce.prototype,"t",2);Qe([c.property()],Ce.prototype,"currentFolderPath",2);Qe([c.property({type:Boolean})],Ce.prototype,"loading",2);Qe([c.property()],Ce.prototype,"error",2);Qe([c.state()],Ce.prototype,"_name",2);Qe([c.state()],Ce.prototype,"_localError",2);Qe([c.state()],Ce.prototype,"_apiErrorDismissed",2);Ce=Qe([m.customElement("ap-create-folder-dialog")],Ce);var Ea=Object.defineProperty,He=(t,e,s,i)=>{for(var r=void 0,o=t.length-1,l;o>=0;o--)(l=t[o])&&(r=l(e,s,r)||r);return r&&Ea(e,s,r),r};const Ts=class Ts extends a.LitElement{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,r;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((r=e.dataTransfer)==null?void 0:r.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=yi(),this.storeCtrl=new Ci(this,this.store),this.selectionCtrl=new Ai(this,this.store),this.infiniteScrollCtrl=new Is.InfiniteScrollController(this,()=>this._loadMore()),this.marqueeCtrl=new Is.MarqueeController(this,{queryCards:e=>{const s=[],i=(o,l,n)=>o.querySelectorAll(`[${l}]`).forEach(d=>{const h=d.dataset[n];h&&s.push({uuid:h,el:d})});let r=!1;for(const o of Array.from(e.children))o.shadowRoot&&(i(o.shadowRoot,"data-asset-uuid","assetUuid"),i(o.shadowRoot,"data-folder-uuid","folderUuid"),r=!0);return(!r||s.length===0)&&(i(e,"data-asset-uuid","assetUuid"),i(e,"data-folder-uuid","folderUuid")),s},getSelection:()=>{const e=this.store.getState();return[...e.selectedAssets.keys(),...e.selectedFolders.keys()]},setSelection:e=>{var h,u;const s=this.store.getState(),i=((h=s.config)==null?void 0:h.folderSelection)===!0,r=new Map,o=new Map;for(const f of e){const p=s.selectedAssets.get(f);if(p){r.set(f,p);continue}const g=s.selectedFolders.get(f);if(i&&g){o.set(f,g);continue}if(!s.disabledAssetIds.has(f)){const v=s.assets.find(w=>w.uuid===f);if(v){r.set(f,v);continue}}if(i&&!s.disabledFolderIds.has(f)){const v=s.folders.find(w=>w.uuid===f);v&&o.set(f,v)}}const l=(u=s.config)==null?void 0:u.maxSelections,n=r.size+(i?o.size:0),d=l&&n>l?new Map(Array.from(r.entries()).slice(0,Math.max(0,l-o.size))):r;this.store.setState({selectedAssets:d,...i?{selectedFolders:o}:{}})},isInteractiveTarget:e=>{var s;return(((s=this.store.getState().config)==null?void 0:s.multiSelect)??!0)===!1?!0:e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const r=i.tagName.toLowerCase();return r.startsWith("ap-asset-")||r.startsWith("ap-folder-")?!0:i.classList.contains("check")||i.classList.contains("check-box")})}})}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const r=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,r)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){const s={folderSelection:!0,...e};this._initFailed=!1,this.store.setState({disabledAssetIds:new Set(s.disabledAssetIds??[]),disabledFolderIds:new Set(s.disabledFolderIds??[])}),Zi(s.transformRemoteThumbnail),this._normalizedForcedFilters=hs(s.forcedFilters),this._initPromise=this._doInit(s).catch(()=>{this._initFailed=!0}),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}async _initI18n(e){try{const{i18n:s,isNew:i}=await ki(e||"en");i&&s.on("missingKey",(o,l,n,d,h,u)=>{const f=n.match(/_(?:zero|one|two|few|many|other)$/),p=f&&(u!=null&&u[`defaultValue${f[0]}`])?String(u[`defaultValue${f[0]}`]):d;Si.handleMissingKey(n,p,l)});const r=(o,l,n)=>typeof l=="string"?s.t(o,l,n??{}):s.t(o,l??{});this.store.setState({t:r})}catch{}}async _doInit(e){const s=Nr(),i=s.sortBy??e.defaultSortBy??"created_at",r=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&Kr(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:r});const o=e.apiBase||`https://api.filerobot.com/${e.auth.projectToken}/v5`;let l;if(e.auth.mode==="securityTemplate"){const{key:n,permissions:d}=await Oi(e.auth,o);l=n,this.store.setState({sassKey:n,permissions:d})}else l=e.auth.sassKey;this.apiClient=new P.DamClient({apiBase:o.replace(/\/v5$/,""),headers:{"X-Filerobot-Key":l}});try{const[n,d,h,u,f]=await Promise.allSettled([vr(this.apiClient),P.getLabels(this.apiClient),Li(this.apiClient),gr(this.apiClient),Ei(this.apiClient)]),p={};if(n.status==="fulfilled"){const{fields:y,regionalVariantGroups:_,regionalFilters:E,brandColor:D}=n.value;p.metadataFields=y,p.regionalVariantGroups=_,p.regionalFilters=E,D&&(p.brandColor=D)}d.status==="fulfilled"&&(p.labels=d.value||[]),h.status==="fulfilled"&&(p.tags=h.value),f.status==="fulfilled"&&(p.collections=f.value.collections||[]),u.status==="fulfilled"&&(p.fileTypes=u.value);const{pinnedFilters:g,pinnedMetadata:v}=zr(e.auth.projectToken??null),w=this.store.getState().filters;p.filters={...w,pinned:g,visible:[...g],metadata:{...w.metadata,pinned:v,visible:[...v]}},this.store.setState(p);const x=e.brandColor||p.brandColor||this.store.getState().brandColor;x&&(p.brandColor||this.store.setState({brandColor:x}),xi.applyBrandColor(this,x))}catch(n){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:n,context:"init"},bubbles:!0,composed:!0})),n}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=import("@scaleflex/uploader/define").then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let r;return e.auth.mode==="securityTemplate"?r={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:r={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:r,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(r){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r instanceof Error?r:new Error(String(r)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var h,u,f,p,g,v,w,x;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},r=hs((h=this.config)==null?void 0:h.defaultFilters);for(const[y,_]of Object.entries(r))s.has(y)||(i[y]=_);const o=Object.keys(i),l=((u=this.config)==null?void 0:u.tabs)??["assets","folders"],n=(f=this.config)!=null&&f.rememberLastTab?Vr(this.config.auth.projectToken):null,d=(n&&l.includes(n)?n:null)??((p=this.config)!=null&&p.defaultTab&&l.includes(this.config.defaultTab)?this.config.defaultTab:null)??((g=this.config)!=null&&g.initialFolderPath&&l.includes("folders")?"folders":null)??l[0]??"assets";this.store.setState({isOpen:!0,activeTab:d,searchQuery:"",isAISearchActive:!!((v=this.config)!=null&&v.enableAISearch&&((w=this.config)!=null&&w.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...new Set([...e.filters.pinned,...o])],applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(d),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(d),((x=this.config)==null?void 0:x.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,r,o,l,n,d,h,u,f,p,g,v,w,x,y,_,E,D,C,B,F,z,L,k,re,oe,U,ze,Me,ut,ft,gt,mt,vt,bt,xt,_t,yt,$t,wt,kt,St,Ct;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const Ae=s.activeTab;if(Ae==="assets"){const ee=this._buildSearchNotation(),Re=s.currentFolderPath||"/",ve=s.isAISearchActive&&!!s.searchQuery,ue=P.getFilesRaw(this.apiClient,{fields:(i=this.config)==null?void 0:i.apiFields,folder:Re,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ee||void 0,recursive:1,...ve&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((r=s.config)==null?void 0:r.locale)??"en"}}),te=P.getFilesStats(this.apiClient,{folder:Re,q:ee||void 0,search:s.searchQuery||void 0,recursive:1,...ve&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((o=s.config)==null?void 0:o.locale)??"en"}}).catch(()=>null),[W,ae]=await Promise.all([ue,te]);if(e!==this._loadId)return;const le=((l=W.files)==null?void 0:l.length)??0,Q=le>=s.limit,ne=((n=ae==null?void 0:ae.stats)==null?void 0:n.approx_files_count)??((d=ae==null?void 0:ae.info)==null?void 0:d.total_files_count)??((h=W.info)==null?void 0:h.total_files_count)??((f=(u=W.base)==null?void 0:u.count)==null?void 0:f.files_recursive)??((g=(p=W.base)==null?void 0:p.count)==null?void 0:g.files_direct)??le;this.store.setState({assets:W.files||[],folders:[],totalCount:ne,totalFolderCount:0,offset:0,hasMore:Q,isLoading:!1})}else if(Ae==="folders"){const ee=this._buildSearchNotation(),Re=s.currentFolderPath||"/",[ve,ue,te]=await Promise.all([P.getFoldersRaw(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),P.getFilesRaw(this.apiClient,{fields:(v=this.config)==null?void 0:v.apiFields,folder:Re,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ee||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((w=s.config)==null?void 0:w.locale)??"en"}}),P.getFilesStats(this.apiClient,{folder:Re,q:ee||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((x=s.config)==null?void 0:x.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const W=ve.folders||[];let ae={};if(W.length>0)try{ae=await P.getFolderPreviews(this.apiClient,W.map(at=>at.uuid))}catch{}if(e!==this._loadId)return;const le=((y=ue.files)==null?void 0:y.length)??0,Q=le>=s.limit,ne=((_=te==null?void 0:te.stats)==null?void 0:_.approx_files_count)??((E=te==null?void 0:te.info)==null?void 0:E.total_files_count)??((D=ue.info)==null?void 0:D.total_files_count)??((B=(C=ue.base)==null?void 0:C.count)==null?void 0:B.files_direct)??le;this.store.setState({assets:ue.files||[],folders:W,folderPreviews:ae,totalCount:ne,totalFolderCount:ve.total??W.length,offset:0,hasMore:Q,isLoading:!1})}else if(Ae==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ee=s.labels.find(is=>is.uuid===s.activeLabelUuid);if(!ee){this.store.setState({isLoading:!1});return}const Re=ee.sid.replace("#",""),ve=this._buildSearchNotation(),ue=`labels:${Re}${ve?" "+ve:""}`,te=s.isAISearchActive&&!!s.searchQuery,W=P.getFilesRaw(this.apiClient,{fields:(F=this.config)==null?void 0:F.apiFields,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ue,recursive:1,...te&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((z=s.config)==null?void 0:z.locale)??"en"}}),ae=P.getFilesStats(this.apiClient,{folder:"/",q:ue,search:s.searchQuery||void 0,recursive:1,...te&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((L=s.config)==null?void 0:L.locale)??"en"}}).catch(()=>null),[le,Q]=await Promise.all([W,ae]);if(e!==this._loadId)return;const ne=((k=le.files)==null?void 0:k.length)??0,at=ne>=s.limit,ss=((re=Q==null?void 0:Q.stats)==null?void 0:re.approx_files_count)??((oe=Q==null?void 0:Q.info)==null?void 0:oe.total_files_count)??((U=le.info)==null?void 0:U.total_files_count)??((Me=(ze=le.base)==null?void 0:ze.count)==null?void 0:Me.files_recursive)??((ft=(ut=le.base)==null?void 0:ut.count)==null?void 0:ft.files_direct)??ne;this.store.setState({assets:le.files||[],folders:[],totalCount:ss,totalFolderCount:0,offset:0,hasMore:at,isLoading:!1})}else if(Ae==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ee=s.activeCollectionFolder;if(!(ee&&!((gt=ee.children)!=null&&gt.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ve=s.activeCollectionUuid,ue=ee.filters||void 0,te=this._buildSearchNotation(),W=s.isAISearchActive&&!!s.searchQuery,ae=P.getFilesRaw(this.apiClient,{fields:(mt=this.config)==null?void 0:mt.apiFields,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:te||void 0,recursive:1,collection_uuid:ve,f64:ue,...W&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((vt=s.config)==null?void 0:vt.locale)??"en"}}),le=P.getFilesStats(this.apiClient,{q:te||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:ve,f64:ue,...W&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((bt=s.config)==null?void 0:bt.locale)??"en"}}).catch(()=>null),[Q,ne]=await Promise.all([ae,le]);if(e!==this._loadId)return;const at=((xt=Q.files)==null?void 0:xt.length)??0,ss=at>=s.limit,is=((_t=ne==null?void 0:ne.stats)==null?void 0:_t.approx_files_count)??((yt=ne==null?void 0:ne.info)==null?void 0:yt.total_files_count)??(($t=Q.info)==null?void 0:$t.total_files_count)??((kt=(wt=Q.base)==null?void 0:wt.count)==null?void 0:kt.files_recursive)??((Ct=(St=Q.base)==null?void 0:St.count)==null?void 0:Ct.files_direct)??at;this.store.setState({assets:Q.files||[],folders:[],totalCount:is,totalFolderCount:0,offset:0,hasMore:ss,isLoading:!1})}}catch(Ae){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:Ae,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var r,o,l;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((r=e.activeCollectionFolder.children)!=null&&r.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let d=n||void 0,h=e.currentFolderPath||"/",u=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const _=e.labels.find(E=>E.uuid===e.activeLabelUuid);_&&(d=`labels:${_.sid.replace("#","")}${n?" "+n:""}`),h="/",u=1}let f,p;e.activeTab==="collections"&&e.activeCollectionFolder&&(f=e.activeCollectionUuid||void 0,p=e.activeCollectionFolder.filters||void 0,h="",u=1);const g=await P.getFilesRaw(this.apiClient,{fields:(o=this.config)==null?void 0:o.apiFields,...h?{folder:h}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:d,recursive:u,...f&&{collection_uuid:f},...p&&{f64:p},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((l=e.config)==null?void 0:l.locale)??"en"}});if(s!==this._loadMoreId)return;const v=this.store.getState().assets,w=g.files||[],x=w.length>=e.limit,y=[...v,...w];this.store.setState({assets:y,offset:i,hasMore:x,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var r;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((r=s.activeCollectionFolder.children)!=null&&r.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var o;const s=e.detail.active,i=this.store.getState(),r={isAISearchActive:s};i.searchQuery&&(s?r.sortBy="relevance":i.sortBy==="relevance"&&(r.sortBy=((o=this.config)==null?void 0:o.defaultSortBy)??"created_at"),r.offset=0,r.assets=[],r.folders=[],r.isLoading=!0),this.store.setState(r),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&jr(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,r=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...r,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),Ns(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),Ns(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,r;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&Br(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((r=this.config)==null?void 0:r.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&Xe(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var r,o;const i={assets:e};s!=null&&s.length&&(i.folders=s),(o=(r=this.config)==null?void 0:r.onSelect)==null||o.call(r,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var o;const s=e.detail.folder,i=this.store.getState(),r=s.path||`${i.currentFolderPath}${s.name}/`;(o=this.config)!=null&&o.rememberLastFolder&&Us(r,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:r,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:r}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var n,d;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const h=this._findCollectionFolder(i.activeCollectionFolders,s);if(h){const u=i.breadcrumb.findIndex(p=>p.uuid===s),f=i.breadcrumb.slice(0,u+1);this.store.setState({activeCollectionFolder:h,breadcrumb:f,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const r=s?i.breadcrumb.findIndex(h=>h.uuid===s):-1,o=s?i.breadcrumb.slice(0,r+1):[],l=o.length>0?o[o.length-1].path:((n=this.config)==null?void 0:n.rootFolderPath)||"/";(d=this.config)!=null&&d.rememberLastFolder&&Us(l,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:l,breadcrumb:o,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await Ti(this.apiClient,s.uuid),r=Gs(i.folders||[]);this.store.setState({activeCollectionFolders:r,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var n;const s=e.detail.folder,i=this.store.getState(),r=s.path.split(" -> ").filter(Boolean),o=[{uuid:i.activeCollectionUuid,name:((n=i.breadcrumb[0])==null?void 0:n.name)||"Collection",path:""}];let l="";for(const d of r)l=l?`${l} -> ${d}`:d,o.push({uuid:l,name:d,path:l});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:o,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const r=this._findCollectionFolder(i.children,s);if(r)return r}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i,r;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&Ur(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||((r=this.config)==null?void 0:r.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const r=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),o=[];let l=s.endsWith("/")?s:s+"/";for(const n of r)l+=n+"/",o.push({uuid:l,name:n,path:l});return o}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var r,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var o,l;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((o=this.config)==null?void 0:o.folderSelection)!==!1&&((l=this.config)==null?void 0:l.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(Xe).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var o;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),r=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const l=await Promise.all(i.map(p=>{var g;return P.getFilesRaw(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,folder:p.path,recursive:s==="recursive"?1:0,limit:1e4})})),n=[];for(const p of l)n.push(...p.files);const d=[...r],h=new Set(d.map(p=>p.uuid));for(const p of n)h.has(p.uuid)||(d.push(p),h.add(p.uuid));const u=(o=this.config)==null?void 0:o.maxSelections,f=u?d.slice(0,u):d;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=f,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(f)}catch(l){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:l,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,r=this._transformAssets,o=this._transformFolders,l=r.length>1,n=ms(s,{isMultiSelect:l,isAspectLocked:i}),d=r.map(h=>{var g,v;if(!Xe(h))return h;const u=(g=h.url)==null?void 0:g.cdn,f=(v=h.url)==null?void 0:v.permalink,p={cdn:u?Te(u,n):""};return f&&(p.permalink_cdn=Te(f,n)),{...h,transformation:{params:s,url:p}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(d,o.length?o:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await P.createFolder(this.apiClient,s,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(r){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(r))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var d,h,u;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((d=s.config)==null?void 0:d.multiSelect)??!0))return;const r=((h=e==null?void 0:e.detail)==null?void 0:h.scope)??"all",o=r!=="assets"&&((u=this.config)==null?void 0:u.folderSelection)!==!1&&s.folders.length>0;if(!(r!=="folders")){o&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const n=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const f=this._buildSearchNotation();let p=s.currentFolderPath||"/";const g=s.limit,v=s.assets,w=s.totalCount;let x=s.activeTab==="folders"?0:1,y=f||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const k=s.labels.find(re=>re.uuid===s.activeLabelUuid);k&&(y=`labels:${k.sid.replace("#","")}${f?" "+f:""}`),p="/",x=1}let _,E;s.activeTab==="collections"&&s.activeCollectionFolder&&(_=s.activeCollectionUuid||void 0,E=s.activeCollectionFolder.filters||void 0,p="",x=1);const D=[];for(let k=v.length;k<w;k+=g)D.push(k);const C=4,B=[];for(let k=0;k<D.length;k+=C){if(n!==this._selectAllId)return;const re=D.slice(k,k+C),oe=await Promise.all(re.map(U=>{var ze,Me;return P.getFilesRaw(this.apiClient,{fields:(ze=this.config)==null?void 0:ze.apiFields,...p?{folder:p}:{},offset:U,limit:g,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:y,recursive:x,..._&&{collection_uuid:_},...E&&{f64:E},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Me=s.config)==null?void 0:Me.locale)??"en"}})}));if(n!==this._selectAllId)return;for(const U of oe)U.files&&B.push(...U.files)}if(n!==this._selectAllId)return;const F=new Set(v.map(k=>k.uuid)),z=B.filter(k=>F.has(k.uuid)?!1:(F.add(k.uuid),!0)),L=[...v,...z];this.store.setState({assets:L,offset:Math.max(0,L.length-g),hasMore:!1,isSelectingAll:!1}),o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(L)}catch(f){if(n!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:f,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===b.DATE||e===b.LICENSE_EXPIRY||e===S.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:r}=e.detail,l={...this.store.getState().filters};let n=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(h=>h==null||h===""||Array.isArray(h)&&h.length===0);if(!n&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:h,preset:u,from:f,to:p}=i;n=!h&&!u&&!f&&!p}if(n){const h={...l.applied};delete h[s],l.applied=h,l.pinned.includes(s)||(l.visible=l.visible.filter(u=>u!==s))}else{const h={...l.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?h[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===b.IMAGE&&typeof i=="object"&&!Array.isArray(i)?h[s]=i:h[s]={type:"string",values:Array.isArray(i)?i:[i],operator:r||":"},l.applied=h,l.visible.includes(s)||(l.visible=[...l.visible,s])}this.store.setState({filters:l,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData();const d=s===S.STATUS||s===S.APPROVER||s===S.REQUESTOR||s===S.DUE_DATE;if(this._pendingFilter===s||this._pendingFilter===b.APPROVAL&&d){this._pendingFilter=null;const h=this.renderRoot.querySelector("ap-filters-bar");h&&(h.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,r=this.renderRoot.querySelector("ap-content-toolbar");let o,l;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const d=n.getBoundingClientRect();o=i.left-d.left,l=i.bottom-d.top}}r==null||r.openFilterPanel(s,!0,o,l)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,r=this.renderRoot.querySelector("ap-content-toolbar");let o,l;if(i){const n=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(n){const d=n.getBoundingClientRect();o=i.left-d.left,l=i.bottom-d.top}}r==null||r.openMetadataFieldPanel(s,!0,o,l)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var p,g,v;const{key:s,metadataFieldKey:i}=e.detail,r=this.renderRoot.querySelector("ap-filters-bar"),o=this.renderRoot.querySelector("ap-content-toolbar");if(!r||!o)return;i?(this._pendingMetadataField=i,r.pendingMetadataField=i):s&&(this._pendingFilter=s,r.pendingFilter=s),await r.updateComplete;let l=r.renderRoot.querySelector(".chip.pending");if(!l){const w=r.renderRoot.querySelectorAll(".chip.pinned-empty"),x=i?(p=r._getMetadataLabel)==null?void 0:p.call(r,i):void 0;for(const y of w){const _=(v=(g=y.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:v.trim();if(i&&_===x){l=y;break}if(s&&_===(lt[s]||s)){l=y;break}}}if(!l)return;const n=l.getBoundingClientRect(),d=this.renderRoot.querySelector(".toolbar-filters-wrapper"),h=d==null?void 0:d.getBoundingClientRect(),u=h?n.left-h.left:n.left,f=h?n.bottom-h.top:void 0;i?o.openMetadataFieldPanel(i,!0,u,f):s&&o.openFilterPanel(s,!0,u,f)}_handleFilterRemove(e){var l;const s=e.detail.key;if(s in(((l=this.config)==null?void 0:l.forcedFilters)??{}))return;const r={...this.store.getState().filters},o={...r.applied};delete o[s],r.applied=o,r.pinned.includes(s)||(r.visible=r.visible.filter(n=>n!==s)),this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:r,metadataType:o}=e.detail,n={...this.store.getState().filters},d={...n.metadata},h={...d.applied};if(!r||Array.isArray(r)&&r.length===0?(delete h[s],d.applied=h,d.pinned.includes(s)||(d.visible=d.visible.filter(f=>f!==s))):(h[s]={type:"string",values:Array.isArray(r)?r:[r],operator:i||":",metadataType:o},d.applied=h,d.visible.includes(s)||(d.visible=[...d.visible,s])),n.metadata=d,this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const f=this.renderRoot.querySelector("ap-filters-bar");f&&(f.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,o={...this.store.getState().filters},l={...o.metadata};i?l.visible.includes(s)||(l.visible=[...l.visible,s]):l.visible=l.visible.filter(n=>n!==s),o.metadata=l,this.store.setState({filters:o})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,r={...this.store.getState().filters},o={...r.metadata},l={...o.applied};delete l[s],o.applied=l,o.pinned.includes(s)||(o.visible=o.visible.filter(n=>n!==s)),r.metadata=o,this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var n,d;const{key:s,pinned:i}=e.detail,o={...this.store.getState().filters};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(h=>h!==s),s in o.applied||(o.visible=o.visible.filter(h=>h!==s))),this.store.setState({filters:o});const l=((d=(n=this.store.getState().config)==null?void 0:n.auth)==null?void 0:d.projectToken)??null;Mr(l,o.pinned)}_handleMetadataPin(e){var d,h;const{fieldKey:s,pinned:i}=e.detail,o={...this.store.getState().filters},l={...o.metadata};i?l.pinned.includes(s)||(l.pinned=[...l.pinned,s]):(l.pinned=l.pinned.filter(u=>u!==s),s in l.applied||(l.visible=l.visible.filter(u=>u!==s))),o.metadata=l,this.store.setState({filters:o});const n=((h=(d=this.store.getState().config)==null?void 0:d.auth)==null?void 0:h.projectToken)??null;Rr(n,l.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const s=e.detail.key,r={...this.store.getState().filters};r.visible=r.visible.filter(o=>o!==s),this.store.setState({filters:r})}_handleMetadataFieldDeactivate(e){const{fieldKey:s}=e.detail,r={...this.store.getState().filters},o={...r.metadata};o.visible=o.visible.filter(l=>l!==s),r.metadata=o,this.store.setState({filters:r})}_handleFiltersSet(e){var h;const{applied:s,metadata:i}=e.detail,o={...this.store.getState().filters},l=new Set(Object.keys(((h=this.config)==null?void 0:h.forcedFilters)??{})),n={...s};for(const u of l)delete n[u];o.applied=n;const d=Object.keys(s);if(o.visible=[...new Set([...o.pinned,...d])],i){const u={...o.metadata};u.applied=i.applied;const f=Object.keys(i.applied);u.visible=[...new Set([...u.pinned,...f])],o.metadata=u}this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return Qr;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return Hr;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return Yr}return e.searchQuery?qr:e.activeTab==="folders"?Gr:xs}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return _r(s,e.filters.metadata.applied).join(" ")}render(){var E,D,C,B,F,z,L,k,re,oe,U,ze,Me,ut,ft,gt,mt,vt,bt,xt,_t,yt,$t,wt,kt,St,Ct,Ae;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),r=Array.from(e.selectedFolders.keys()),o=((E=this.config)==null?void 0:E.disabledAssetIds)??[],l=((D=this.config)==null?void 0:D.disabledFolderIds)??[],n=this.selectionCtrl.getSelectedAssets(),d=this.selectionCtrl.getSelectedFolders(),h=((C=this.config)==null?void 0:C.folderSelection)!==!1,u=a.html`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((B=this.config)==null?void 0:B.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((F=e.activeCollectionFolder.children)!=null&&F.length)}
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
    `,f=!!((L=this.config)!=null&&L.uploader),p=((k=this.config)==null?void 0:k.folderCreation)===!0,g=((re=this.config)==null?void 0:re.auth.mode)==="sassKey",v=e.activeTab==="folders",w=p&&v&&(g||Pi(e.permissions,Di.FOLDER_CREATE)),x=a.html`
      <div
        class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?a.html`
              <div class="drop-zone-overlay">
                <div class="drop-zone-label">
                  <sfx-icon name="upload" .size=${32}></sfx-icon>
                  ${s("dropFilesToUpload","Drop files to upload")}
                </div>
              </div>
            `:a.nothing}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(oe=this.config)!=null&&oe.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${f}
              .showCreateFolder=${w}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((U=e.activeCollectionFolder.children)!=null&&U.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?s("labelCount",{count:e.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"}):e.activeTab==="collections"&&!e.activeCollectionUuid?s("collectionCount",{count:e.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((ze=e.activeCollectionFolder.children)!=null&&ze.length))?s("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):""}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${e.metadataFields}
              .pinnedFilters=${e.filters.pinned}
              .apiClient=${this.apiClient}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .approverUsers=${((Me=this.config)==null?void 0:Me.approverUsers)??[]}
              .requesterUsers=${((ut=this.config)==null?void 0:ut.requesterUsers)??[]}
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

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((ft=e.activeCollectionFolder.children)!=null&&ft.length))?a.nothing:a.html`
                  <ap-filters-bar
                    .appliedFilters=${e.filters.applied}
                    .appliedMetadata=${e.filters.metadata.applied}
                    .metadataFields=${e.metadataFields}
                    .tags=${e.tags}
                    .labels=${e.labels}
                    .approverUsers=${((gt=this.config)==null?void 0:gt.approverUsers)??[]}
                    .requesterUsers=${((mt=this.config)==null?void 0:mt.requesterUsers)??[]}
                    .pinnedFilters=${e.filters.pinned}
                    .pinnedMetadataFields=${e.filters.metadata.pinned}
                    .forcedFilters=${((vt=this.config)==null?void 0:vt.forcedFilters)??{}}
                    .t=${s}
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
                `}
            ${e.breadcrumb.length>0?a.html`<sfx-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab==="labels"?s("tabLabels","Labels"):e.activeTab==="collections"?s("tabCollections","Collections"):s("rootFolder","Root")}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></sfx-breadcrumb>`:a.nothing}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((bt=e.activeCollectionFolder.children)!=null&&bt.length)))?a.html`<ap-skeleton
                .variant=${e.viewMode}
                .gridSize=${((xt=this.config)==null?void 0:xt.gridSize)??"normal"}
                .multiSelect=${((_t=this.config)==null?void 0:_t.multiSelect)!==!1}
                .folderCount=${2}
                .t=${s}
              ></ap-skeleton>`:this._renderContent(e,i,r,h,o,l)}

          <ap-marquee-overlay
            .active=${this.marqueeCtrl.isActive}
            .rect=${this.marqueeCtrl.rect}
          ></ap-marquee-overlay>
          ${this._folderResolveOpen?a.html`
                <ap-folder-resolve-dialog
                  .folders=${d}
                  .loading=${e.isResolvingFolders}
                  .t=${s}
                  @folder-resolve-confirm=${this._handleFolderResolveConfirm}
                  @folder-resolve-cancel=${this._handleFolderResolveCancel}
                ></ap-folder-resolve-dialog>
              `:a.nothing}
          ${this._transformOpen?a.html`
                <ap-transformation-dialog
                  .assets=${this._transformAssets}
                  .isMultiSelect=${this._transformAssets.length>1}
                  .t=${s}
                  .exportOriginalLabel=${(yt=this._transformationsConfig)==null?void 0:yt.exportOriginalLabel}
                  .applyExportLabel=${($t=this._transformationsConfig)==null?void 0:$t.applyExportLabel}
                  @transform-confirm=${this._handleTransformConfirm}
                  @transform-skip=${this._handleTransformSkip}
                  @transform-cancel=${this._handleTransformCancel}
                ></ap-transformation-dialog>
              `:a.nothing}
          ${this._createFolderOpen?a.html`
                <ap-create-folder-dialog
                  .t=${e.t}
                  .currentFolderPath=${e.currentFolderPath}
                  .loading=${this._isCreatingFolder}
                  .error=${this._createFolderError}
                  @create-folder-confirm=${this._handleCreateFolderConfirm}
                  @create-folder-cancel=${this._handleCreateFolderCancel}
                ></ap-create-folder-dialog>
              `:a.nothing}
        </div>

        ${e.isPreviewOpen&&e.previewAsset?a.html`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${i}
              .containerToken=${e.projectToken}
              .showMetadata=${((wt=this.config)==null?void 0:wt.showMetadata)!==!1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((kt=this.config)==null?void 0:kt.multiSelect)??!0}
              .t=${s}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:a.nothing}
      </div>
    `,y=a.html`
      <ap-selection-bar
        .selectedAssets=${n}
        .selectedFolders=${d}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((St=this.config)==null?void 0:St.multiSelect)??!0}
        .maxSelections=${(Ct=this.config)==null?void 0:Ct.maxSelections}
        .showTransform=${!!((Ae=this.config)!=null&&Ae.transformations)&&n.some(Xe)}
        .t=${s}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,_=this._isUploaderOpen?a.html`
          <div class="uploader-overlay">
            <div class="uploader-body">${this._uploaderEl}</div>
          </div>
        `:a.nothing;return this._isInline?e.isOpen?a.html`
        <div class="ap-inline">
          ${this._isUploaderOpen?_:a.html`
                <div class="inline-header">${u}</div>
                <div class="inline-content">${x}</div>
                <div class="inline-footer">${y}</div>
              `}
        </div>
      `:a.nothing:a.html`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${ee=>this._handleCancel(ee.detail.reason)}
      >
        ${this._isUploaderOpen?_:a.html`
              <div slot="header">${u}</div>
              ${x}
              <div slot="footer">${y}</div>
            `}
      </ap-modal>
    `}_renderContent(e,s,i=[],r=!1,o=[],l=[]){var d,h,u,f,p,g,v,w,x,y,_,E,D;const n=e.t;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?a.html`
          <div class="empty-state">
            <sfx-icon name="search" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsFound","No assets found")}</div>
            <div class="empty-desc">
              ${n("noAssetsFoundDesc","Try adjusting your search or filters")}
            </div>
          </div>
        `:e.viewMode==="grid"?a.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${l}
            .isLoading=${e.isLoading}
            .multiSelect=${((d=this.config)==null?void 0:d.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((h=this.config)==null?void 0:h.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${l}
          .isLoading=${e.isLoading}
          .multiSelect=${((u=this.config)==null?void 0:u.multiSelect)??!0}
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
      `;if(e.activeTab==="folders")return!e.isLoading&&e.folders.length===0&&e.assets.length===0?a.html`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">${n("emptyFolder","This folder is empty")}</div>
            <div class="empty-desc">${n("emptyFolderDesc","No folders or files found here")}</div>
          </div>
        `:e.viewMode==="grid"?a.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${l}
            .isLoading=${e.isLoading}
            .multiSelect=${((f=this.config)==null?void 0:f.multiSelect)??!0}
            .folderSelectable=${r}
            .gridSize=${((p=this.config)==null?void 0:p.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${l}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let C=e.labels;if(e.searchQuery){const F=e.searchQuery.toLowerCase();C=e.labels.filter(z=>z.name.toLowerCase().includes(F))}const B=e.sortDirection==="asc"?1:-1;return C=[...C].sort((F,z)=>B*F.name.localeCompare(z.name)),C.length===0?a.html`
            <div class="empty-state">
              <sfx-icon name="tag" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noLabelsMatchSearch","No labels match your search"):n("noLabelsFound","No labels found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("labelsWillAppear","Labels will appear here once created")}
              </div>
            </div>
          `:e.viewMode==="grid"?a.html`
            <div class="labels-grid">
              ${C.map((F,z)=>a.html`
                  <ap-label-card
                    .label=${F}
                    .index=${z}
                    @label-open=${this._handleLabelOpen}
                  ></ap-label-card>
                `)}
            </div>
          `:a.html`
          <div class="labels-list">
            ${C.map((F,z)=>a.html`
                <ap-label-row
                  .label=${F}
                  .index=${z}
                  @label-open=${this._handleLabelOpen}
                ></ap-label-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?a.html`
          <div class="empty-state">
            <sfx-icon name="tag" .size=${48}></sfx-icon>
            <div class="empty-title">${n("noAssetsInLabel","No assets in this label")}</div>
            <div class="empty-desc">
              ${n("noAssetsInLabelDesc","Assets added to this label will appear here")}
            </div>
          </div>
        `:e.viewMode==="grid"?a.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${l}
            .isLoading=${e.isLoading}
            .multiSelect=${((v=this.config)==null?void 0:v.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((w=this.config)==null?void 0:w.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${l}
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
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let F=e.collections;if(e.searchQuery){const L=e.searchQuery.toLowerCase();F=e.collections.filter(k=>k.title.toLowerCase().includes(L))}const z=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?F=[...F].sort((L,k)=>z*(new Date(L.created_at).getTime()-new Date(k.created_at).getTime())):e.sortBy==="updated_at"?F=[...F].sort((L,k)=>z*(new Date(L.updated_at).getTime()-new Date(k.updated_at).getTime())):F=[...F].sort((L,k)=>z*L.title.localeCompare(k.title)),F.length===0?a.html`
            <div class="empty-state">
              <sfx-icon name="layout-grid" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noCollectionsMatchSearch","No collections match your search"):n("noCollectionsFound","No collections found")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionsWillAppear","Collections will appear here once created")}
              </div>
            </div>
          `:e.viewMode==="grid"?a.html`
            <div class="collections-grid">
              ${F.map((L,k)=>a.html`
                  <ap-collection-card
                    .collection=${L}
                    .index=${k}
                    @collection-open=${this._handleCollectionOpen}
                  ></ap-collection-card>
                `)}
            </div>
          `:a.html`
          <div class="collections-list">
            ${F.map((L,k)=>a.html`
                <ap-collection-row
                  .collection=${L}
                  .index=${k}
                  @collection-open=${this._handleCollectionOpen}
                ></ap-collection-row>
              `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return a.html`<div class="loading-center"><sfx-spinner></sfx-spinner></div>`;const C=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((y=e.activeCollectionFolder.children)==null?void 0:y.length)??0)>0){let F=C;if(e.searchQuery){const L=e.searchQuery.toLowerCase();F=C.filter(k=>k.name.toLowerCase().includes(L))}const z=e.sortDirection==="asc"?1:-1;return F=[...F].sort((L,k)=>z*L.name.localeCompare(k.name)),F.length===0?a.html`
            <div class="empty-state">
              <sfx-icon name="folder" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?n("noFoldersMatchSearch","No folders match your search"):n("noFoldersInCollection","No folders in this collection")}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?n("tryDifferentSearch","Try a different search term"):n("collectionFoldersWillAppear","Collection folders will appear here")}
              </div>
            </div>
          `:e.viewMode==="grid"?a.html`
            <div class="collection-folders-grid">
              ${F.map((L,k)=>a.html`
                  <ap-collection-folder-card
                    .folder=${L}
                    .index=${k}
                    @collection-folder-open=${this._handleCollectionFolderOpen}
                  ></ap-collection-folder-card>
                `)}
            </div>
          `:a.html`
          <div class="collection-folders-list">
            ${F.map((L,k)=>a.html`
                <ap-collection-folder-row
                  .folder=${L}
                  .index=${k}
                  @collection-folder-open=${this._handleCollectionFolderOpen}
                ></ap-collection-folder-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?a.html`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">
              ${n("noAssetsInCollectionFolder","No assets in this collection folder")}
            </div>
            <div class="empty-desc">
              ${n("noAssetsInCollectionFolderDesc","Assets matching this collection's criteria will appear here")}
            </div>
          </div>
        `:e.viewMode==="grid"?a.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${n}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${o}
            .disabledFolderIds=${l}
            .isLoading=${e.isLoading}
            .multiSelect=${((_=this.config)==null?void 0:_.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((E=this.config)==null?void 0:E.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${n}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${o}
          .disabledFolderIds=${l}
          .isLoading=${e.isLoading}
          .multiSelect=${((D=this.config)==null?void 0:D.multiSelect)??!0}
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
      `}return a.nothing}};Ts.styles=[a.css`
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
    `];let _e=Ts;He([c.state()],_e.prototype,"_isDragOver");He([c.state()],_e.prototype,"_isUploaderOpen");He([c.state()],_e.prototype,"_folderResolveOpen");He([c.state()],_e.prototype,"_transformOpen");He([c.state()],_e.prototype,"_createFolderOpen");He([c.state()],_e.prototype,"_isCreatingFolder");He([c.state()],_e.prototype,"_createFolderError");He([c.property({type:Object})],_e.prototype,"config");exports.AssetPicker=_e;exports.addCdnParams=Te;exports.buildTransformCdnParams=ms;exports.buildTransformedUrl=Ji;exports.getAltText=Ri;exports.getAssetDimensions=Ni;exports.getAssetHeight=Ht;exports.getAssetWidth=Qt;exports.getBestVideoUrl=Ki;exports.getCdnUrl=Qs;exports.getTranscodedUrl=ji;exports.isAudio=Mi;exports.isImage=Xe;exports.isTranscoded=Ui;exports.isVideo=zi;
