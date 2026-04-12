"use strict";var ki=Object.create;var Bs=Object.defineProperty;var Si=Object.getOwnPropertyDescriptor;var Ci=Object.getOwnPropertyNames;var Fi=Object.getPrototypeOf,Ei=Object.prototype.hasOwnProperty;var Ai=(t,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Ci(e))!Ei.call(t,a)&&a!==s&&Bs(t,a,{get:()=>e[a],enumerable:!(i=Si(e,a))||i.enumerable});return t};var Ti=(t,e,s)=>(s=t!=null?ki(Fi(t)):{},Ai(e||!t||!t.__esModule?Bs(s,"default",{value:t,enumerable:!0}):s,t));const r=require("lit"),l=require("lit/decorators.js");class Li{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function Oi(){return new Li({config:null,projectToken:"",sassKey:"",brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1})}class Mi{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Ii(t){return"extension"in t&&!("path"in t)}class Pi{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,s,i,a){const o=this._getCombinedList();for(let n=e;n<=s;n++){const c=o[n];c&&(Ii(c)?i.set(c.uuid,c):a.set(c.uuid,c))}}handleSelect(e,s,i){var c,d,h,u;const a=this.store.getState(),o=new Map(a.selectedAssets);if(!(((c=a.config)==null?void 0:c.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const f=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=new Map(a.selectedFolders);this._applyRangeSelection(f,p,o,g);const m=(d=a.config)==null?void 0:d.maxSelections;if(m&&o.size+g.size>m)return;this.store.setState({selectedAssets:o,selectedFolders:g})}else{const f=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=a.assets;for(let _=f;_<=p;_++)g[_]&&o.set(g[_].uuid,g[_]);const m=(h=a.config)==null?void 0:h.maxSelections;if(m&&o.size>m)return;this.store.setState({selectedAssets:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const f=(u=a.config)==null?void 0:u.maxSelections,p=o.size+(this._folderSelectionEnabled?a.selectedFolders.size:0);if(f&&p>f)return;this.store.setState({selectedAssets:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedAssets:o,selectedFolders:new Map});this.lastClickedIndex=s}handleFolderSelect(e,s,i){var c,d,h;if(!this._folderSelectionEnabled)return;const a=this.store.getState(),o=new Map(a.selectedFolders);if(!(((c=a.config)==null?void 0:c.multiSelect)??!0)){o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const u=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),p=new Map(a.selectedAssets);this._applyRangeSelection(u,f,p,o);const g=(d=a.config)==null?void 0:d.maxSelections;if(g&&p.size+o.size>g)return;this.store.setState({selectedAssets:p,selectedFolders:o})}else if(i.metaKey||i.ctrlKey){o.has(e.uuid)?o.delete(e.uuid):o.set(e.uuid,e);const u=(h=a.config)==null?void 0:h.maxSelections,f=o.size+a.selectedAssets.size;if(u&&f>u)return;this.store.setState({selectedFolders:o})}else o.clear(),o.set(e.uuid,e),this.store.setState({selectedFolders:o,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var c;const s=this.store.getState(),i=(c=s.config)==null?void 0:c.maxSelections,a=this._folderSelectionEnabled?s.selectedFolders.size:0,o=new Map,n=i?Math.max(0,Math.min(e.length,i-a)):e.length;for(let d=0;d<n;d++)o.set(e[d].uuid,e[d]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var n;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(n=s.config)==null?void 0:n.maxSelections,a=new Map,o=i?Math.max(0,Math.min(e.length,i-s.selectedAssets.size)):e.length;for(let c=0;c<o;c++)a.set(e[c].uuid,e[c]);this.store.setState({selectedFolders:a})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}class Di{constructor(e,s){this.host=e,this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(i=>{var a;(a=i[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const qs=5,Je=40,Vs=15;class zi{constructor(e,s){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this.preMarqueeFolderSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const a=i.tagName.toLowerCase();return!!(a.startsWith("ap-asset-")||a.startsWith("ap-folder-")||i.classList.contains("check")||i.classList.contains("check-box"))})}onMouseDown(e){var a;if(e.button!==0||this.isInteractiveTarget(e)||!(((a=this.store.getState().config)==null?void 0:a.multiSelect)??!0))return;const i=this.container.getBoundingClientRect();this.startX=e.clientX-i.left+this.container.scrollLeft,this.startY=e.clientY-i.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this._dragging){const i=Math.abs(e.clientX-this.startClientX),a=Math.abs(e.clientY-this.startClientY);if(i<qs&&a<qs)return;this._dragging=!0,this.isActive=!0,document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.preMarqueeSelection=new Map(this.store.getState().selectedAssets),this.preMarqueeFolderSelection=new Map(this.store.getState().selectedFolders)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,a=e.clientY-s.top+this.container.scrollTop;let o=Math.min(this.startX,i),n=Math.min(this.startY,a),c=Math.abs(i-this.startX),d=Math.abs(a-this.startY);const h=this.container.scrollWidth,u=this.container.scrollHeight;o+c>h&&(c=h-o),n+d>u&&(d=u-n),o<0&&(c+=o,o=0),n<0&&(d+=n,n=0),this.rect={x:o,y:n,width:c,height:d},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;if(this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top,a=s.bottom-e.clientY,o=i<Je||a<Je;o&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):o||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this._lastMouseEvent,i=s.clientY-e.top,a=e.bottom-s.clientY;let o=0;i<Je?o=-Vs*(1-i/Je):a<Je&&(o=Vs*(1-a/Je)),o!==0&&(this.container.scrollTop+=o,this.updateMarqueeRect(s),this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}querySelectableElements(){const e=[],s=[];for(const i of Array.from(this.container.children))if(i.shadowRoot){const a=i.shadowRoot.querySelectorAll("[data-asset-uuid]");a.length>0&&e.push(...Array.from(a));const o=i.shadowRoot.querySelectorAll("[data-folder-uuid]");o.length>0&&s.push(...Array.from(o))}return e.length===0&&e.push(...Array.from(this.container.querySelectorAll("[data-asset-uuid]"))),s.length===0&&s.push(...Array.from(this.container.querySelectorAll("[data-folder-uuid]"))),{assetCards:e,folderCards:s}}getCardRelativeRect(e){const s=e.getBoundingClientRect(),i=this.container.getBoundingClientRect();return{x:s.left-i.left+this.container.scrollLeft,y:s.top-i.top+this.container.scrollTop,width:s.width,height:s.height}}intersectsMarquee(e){return this.rect.x<e.x+e.width&&this.rect.x+this.rect.width>e.x&&this.rect.y<e.y+e.height&&this.rect.y+this.rect.height>e.y}selectIntersecting(){var h,u;if(!this.container)return;const e=this.store.getState(),s=((h=e.config)==null?void 0:h.folderSelection)===!0,{assetCards:i,folderCards:a}=this.querySelectableElements(),o=new Map(this.preMarqueeSelection),n=s?new Map(this.preMarqueeFolderSelection):e.selectedFolders;i.forEach(f=>{const p=this.getCardRelativeRect(f),g=f.dataset.assetUuid;if(this.intersectsMarquee(p)){const m=e.assets.find(_=>_.uuid===g);m&&o.set(g,m)}}),s&&a.forEach(f=>{const p=this.getCardRelativeRect(f),g=f.dataset.folderUuid;if(this.intersectsMarquee(p)){const m=e.folders.find(_=>_.uuid===g);m&&n.set(g,m)}});const c=(u=e.config)==null?void 0:u.maxSelections,d=o.size+(s?n.size:0);if(c&&d>c){const f=Array.from(o.entries()).slice(0,Math.max(0,c-n.size));this.store.setState({selectedAssets:new Map(f),...s?{selectedFolders:n}:{}})}else this.store.setState({selectedAssets:o,...s?{selectedFolders:n}:{}})}}class Ri{constructor(e,s){this.auth=e;const i=e.projectToken;this.baseUrl=s||`https://api.filerobot.com/${i}/v5`,e.mode==="sassKey"&&(this.sassKey=e.sassKey)}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if(this.auth.mode==="securityTemplate")return this.auth.securityTemplateKey}_applyAuthHeaders(e){this.sassKey?e["X-Filerobot-Key"]=this.sassKey:this.auth.mode==="securityTemplate"&&(e["X-Filerobot-Key"]=this.auth.securityTemplateKey)}async request(e,s){const i=new URL(`${this.baseUrl}${e}`);s&&Object.entries(s).forEach(([c,d])=>{d!=null&&(Array.isArray(d)?i.searchParams.set(c,d.join(",")):i.searchParams.set(c,String(d)))});const a={};this._applyAuthHeaders(a);const o=new AbortController,n=setTimeout(()=>o.abort(),3e4);try{const c=await fetch(i.toString(),{headers:a,signal:o.signal});if(clearTimeout(n),!c.ok){let h=`API error: ${c.status} ${c.statusText}`;try{const u=await c.json();u.msg&&(h=`API error: ${c.status} - ${u.msg}`)}catch{}throw new Error(h)}const d=await c.json();if(d.status==="error")throw new Error(`API error: ${d.msg||"Unknown error"}`);return d}catch(c){throw clearTimeout(n),c instanceof DOMException&&c.name==="AbortError"?new Error("API request timed out"):c}}async post(e,s){const i=new URL(`${this.baseUrl}${e}`),a={"Content-Type":"application/json"};this._applyAuthHeaders(a);const o=new AbortController,n=setTimeout(()=>o.abort(),3e4);try{const c=await fetch(i.toString(),{method:"POST",headers:a,body:JSON.stringify(s),signal:o.signal});if(clearTimeout(n),!c.ok){let h=`API error: ${c.status} ${c.statusText}`;try{const u=await c.json();u.msg&&(h=`API error: ${c.status} - ${u.msg}`)}catch{}throw new Error(h)}const d=await c.json();if(d.status==="error")throw new Error(`API error: ${d.msg||"Unknown error"}`);return d}catch(c){throw clearTimeout(n),c instanceof DOMException&&c.name==="AbortError"?new Error("API request timed out"):c}}}function ji(t){const e={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1},s=t.sort_by??"created_at",i=t.sort_direction??"desc",a={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};e.sort=`${a[s]||s}:${i}`,t.folder&&(e.folder=t.folder);const o=[];return t.search&&!t.with_ai&&o.push(t.search),t.q&&o.push(t.q),o.length>0&&(e.q=o.join(" ")),t.with_ai&&(e.with_ai=!0,t.ai_query&&(e.ai_query=t.ai_query),t.ai_lang&&(e.ai_lang=t.ai_lang)),t.collection_uuid&&(e.collection_uuid=t.collection_uuid),t.f64&&(e.f64=t.f64),e}async function De(t,e){const s=ji(e);return t.request("/files",s)}async function At(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.request("/files/stats",s)}async function Ni(t,e){const s={recursive:(e==null?void 0:e.recursive)??0,folder:(e==null?void 0:e.folderPath)??"/",limit:(e==null?void 0:e.limit)??1e3,offset:(e==null?void 0:e.offset)??0};e!=null&&e.q&&(s.q=e.q);const i=(e==null?void 0:e.sort_by)??"created_at",a=(e==null?void 0:e.sort_direction)??"asc",o={created_at:"created_at",modified_at:"modified_at",name:"name"};return s.sort=`${o[i]||i}:${a}`,await t.request("/folders",s)}async function Ui(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}async function Bi(t){return await t.request("/labels")}async function qi(t){return t.request("/collections")}async function Vi(t,e){return t.request(`/collections/${e}/folders`)}function ei(t){return t.filter(e=>!!e.name).map(e=>({...e,children:ei(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function Hi(t){return((await t.request("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,a)=>i.label.localeCompare(a.label))}async function Gi(t){const e=t.getSecurityTemplateKey();if(!e)throw new Error("Security template key is required for SASS key exchange");return(await t.request(`/key/${e}`)).key}function Vt(t){var a,o;const e=(a=t.info)==null?void 0:a.playlists;if(!(e!=null&&e.length))return null;const s=(o=e[0])==null?void 0:o.playlists;return s!=null&&s.length&&s[0]||null}function je(t){return(t.type??"").startsWith("image")}function Ki(t){return(t.type??"").startsWith("video")}function Qi(t){return(t.type??"").startsWith("audio")}function ti(t){var e,s;return((e=t.url)==null?void 0:e.cdn)??((s=t.url)==null?void 0:s.public)??""}function Yi(t,e){const{meta:s,name:i}=t;if(s!=null&&s.alt)return s.alt;const a=s==null?void 0:s.title;if(typeof a=="string"&&a)return a;if(a&&typeof a=="object"){if(e){const n=a[e];if(n)return n}const o=Object.keys(a)[0];if(o){const n=a[o];if(n)return n}}return i.split(".")[0]}function Pt(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Dt(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}function Wi(t){return{width:Pt(t),height:Dt(t)}}function Xi(t){return Vt(t)!==null}function Zi(t){return Vt(t)}function Ji(t){return Vt(t)??ti(t)}const ea={excellent:90,good:75,fair:60},ta=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],sa=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],ia=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],aa={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},oa=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),ra=new Set([...oa,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function tt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function si(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return ra.has(e)}const v="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",cs={_default:v+"GENERIC.svg?vh=9a518a",png:v+"PNG.svg?vh=96cd9a",jpg:v+"JPG.svg?vh=06e819",jpg2:v+"JPG2.svg?vh=f0eb7f",jpeg:v+"JPEG.svg?vh=6a65e9",gif:v+"GIF.svg?vh=c3c2c3",bmp:v+"BMP.svg?vh=d2243a",webp:v+"WEBP.svg?vh=fedd74",svg:v+"SVG.svg?vh=a15e46",tiff:v+"TIFF.svg?vh=1f30c3",tif:v+"TIF.svg?vh=b383c9",heic:v+"HEIC.svg?vh=84adfe",avif:v+"AVIF.svg?vh=536b30",ico:v+"ICO.svg?vh=79063d",psd:v+"PSD.svg?vh=be6140",psb:v+"PSB.svg?vh=678646",ai:v+"AI.svg?vh=84b254",dwg:v+"DWG.svg?vh=971fb3",mp4:v+"MP4.svg?vh=42f175",webm:v+"WEBM.svg?vh=26a84a",avi:v+"AVI.svg?vh=d22ba8",mpeg:v+"MPEG.svg?vh=ba93bb",ogv:v+"OGV.svg?vh=74d453","3gp":v+"3GP.svg?vh=f0d388","3g2":v+"3G2.svg?vh=04c652",swf:v+"SWF.svg?vh=3955e2",fla:v+"FLA.svg?vh=daf585",m3u8:v+"M3U8.svg?vh=7d5e62",mp3:v+"MP3.svg?vh=66bbef",wav:v+"WAV.svg?vh=d7a7d5",aac:v+"AAC.svg?vh=07f3f9",oga:v+"OGA.svg?vh=a5c622",opus:v+"OPUS.svg?vh=9548b1",weba:v+"WEBA.svg?vh=4dcf70",mid:v+"MID.svg?vh=3f0e29",midi:v+"MIDI.svg?vh=9fedec",cda:v+"CDA.svg?vh=85b83b",pdf:v+"PDF.svg?vh=18c5f7",doc:v+"DOC.svg?vh=d1b47c",docx:v+"DOCX.svg?vh=1eb6b0",txt:v+"TXT.svg?vh=307979",rtf:v+"RTF.svg?vh=978c5f",xls:v+"XLS.svg?vh=13b5f7",xlsx:v+"XLSX.svg?vh=79d64a",ppt:v+"PPT.svg?vh=4ee29b",pptx:v+"PPTX.svg?vh=8b1568",csv:v+"CSV.svg?vh=4add78",odt:v+"ODT.svg?vh=940781",ods:v+"ODS.svg?vh=9fbe9a",odp:v+"ODP.svg?vh=bf892d",dbf:v+"DBF.svg?vh=457bd4",vsd:v+"VSD.svg?vh=8a9ccb",abw:v+"ABW.svg?vh=313dc7",epub:v+"EPUB.svg?vh=15263d",azw:v+"AZW.svg?vh=a018b1",ics:v+"ICS.svg?vh=909f63",ogx:v+"OGX.svg?vh=f694d2",zip:v+"ZIP.svg?vh=84f98b",rar:v+"RAR.svg?vh=1d6423","7z":v+"7Z.svg?vh=e007e5",tar:v+"TAR.svg?vh=603aed",gz:v+"GZ.svg?vh=de13f7",bz:v+"BZ.svg?vh=0374ff",bz2:v+"BZ2.svg?vh=e14294",arc:v+"ARC.svg?vh=942fad",jar:v+"JAR.svg?vh=149796",mpkg:v+"MPKG.svg?vh=dea655",ttf:v+"TTF.svg?vh=d2e2c1",otf:v+"OTF.svg?vh=c904fd",woff:v+"WOFF.svg?vh=4b8177",woff2:v+"WOFF2.svg?vh=b532d3",eot:v+"EOT.svg?vh=a54980",js:v+"JS.svg?vh=524691",mjs:v+"MJS.svg?vh=d57921",ts:v+"TS.svg?vh=9af3ae",css:v+"CSS.svg?vh=287863",html:v+"HTML.svg?vh=fa7a87",htm:v+"HTM.svg?vh=21323d",xhtml:v+"XHTML.svg?vh=e6d6a9",xul:v+"XUL.svg?vh=6c9c71",json:v+"JSON.svg?vh=104c9e",jsonld:v+"JSONLD.svg?vh=f30c0f",xml:v+"XML.svg?vh=7f7194",php:v+"PHP.svg?vh=503e36",sh:v+"SH.svg?vh=3b820e",csh:v+"CSH.svg?vh=08c0cc",exe:v+"EXE.svg?vh=ccca53",iso:v+"ISO.svg?vh=064b8f",bin:v+"BIN.svg?vh=1e9618"};function $t(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return cs[e]||cs._default}function st(){return cs._default}function Ht(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const na=new Set(["png","svg","webp","gif","avif"]);function us(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return na.has(e)}const la=new Set(["svg","svg+xml","png","pdf"]);function ii(t){return la.has(Ht(t).toLowerCase())}function zt(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return Be(s)}function ai(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?Be(s):""}function gs(t){var s,i;let e=Be(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),xe(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):""}function xe(t,e){try{const s=new URL(t);for(const[i,a]of Object.entries(e))s.searchParams.set(i,a);return s.toString()}catch{return t}}const Hs=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function Be(t,e){if(!t)return"";const s=a=>a.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(Hs);if(i){const a=i[2],o=t.replace(Hs,`$1assets.filerobot.com/${a}/`);return s(o)}if(e)try{const a=new URL(t);return s(`https://assets.filerobot.com/${e}${a.pathname}${a.search}`)}catch{}return t}function oi(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=Be(s);const a=tt(t.file_type),o=String(window.devicePixelRatio||1);return a==="video"?xe(i,{w:e,dpr:o,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||Ht(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),xe(i,{w:e,dpr:o,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):xe(i,{w:e,dpr:o})}function fs(t,e){const s={};return t.format&&(s.force_format=aa[t.format]),t.quality&&t.format!=="png"&&(s.q=String(ea[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}function ca(t,e,s){const i=Be(t);if(!i)return t;const a=fs(e,s);return Object.keys(a).length>0?xe(i,a):i}const b={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},G={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},S={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS:"~",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},da={AND:"AND"},w={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},Gt={[w.DATE]:"date_",[w.BOOLEAN]:"bool_",[w.NUMERIC]:"num_",[w.DECIMAL2]:"dec_",[w.ATTACHMENTS_ASSETS]:"attach_",[w.ATTACHMENT_URI]:"uri_",[w.SELECT_ONE]:"one_",[w.MULTI_SELECT]:"multi_",[w.SUPERTAGS]:"tags_",[w.TEXT]:"text_",[w.TEXT_AREA]:"area_",[w.GEO_POINT]:"geo_",[w.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(Gt).map(([t,e])=>[e,t]));const ri=Object.values(Gt),pt={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Gs={EMPTY:"empty",NOT_EMPTY:"non-empty"},re="empty",ne="non-empty",ze="specific",Jt=10,es=10,Tt=10,ni="filters:pinned:",li="metadata:pinned:",Ks=[b.DATE,b.TYPE,b.SIZE],ci=S.IS,Ot="20",Mt="1",pa=0,ha=[{key:b.DATE,label:"Date",icon:"calendar",type:"date"},{key:b.TYPE,label:"Format",icon:"file-type",type:"string"},{key:b.SIZE,label:"Size",icon:"scaling",type:"string"},{key:b.LICENSE_EXPIRY,label:"License expiry",icon:"history",type:"date"},{key:b.TAGS,label:"Tags",icon:"hash",type:"string"},{key:b.LABELS,label:"Labels",icon:"tag",type:"string"},{key:b.PRODUCT_REF,label:"Products",icon:"box",type:"string"},{key:b.IMAGE,label:"Image",icon:"image",type:"string"},{key:b.COLOR,label:"Color",icon:"swatch-book",type:"string"}],ua={key:b.METADATA,label:"Metadata",icon:"file-text",type:"string"},ga={key:b.APPROVAL,label:"Approval",icon:"badge-check",type:"string"},ds=[ua,...ha,ga],et={[b.TYPE]:"Format",[b.DATE]:"Date",[b.SIZE]:"Size",[b.LICENSE_EXPIRY]:"License expiry",[b.TAGS]:"Tags",[b.LABELS]:"Labels",[b.PRODUCT_REF]:"Products",[b.IMAGE]:"Image",[b.COLOR]:"Color",[b.METADATA]:"Metadata",[b.APPROVAL]:"Approval"},K={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},Rt=[{value:K.IMAGE,label:"Image",icon:"image"},{value:K.VIDEO,label:"Video",icon:"clapperboard"},{value:K.AUDIO,label:"Audio",icon:"music"},{value:K.DOCUMENT,label:"Document",icon:"document"},{value:K.ARCHIVE,label:"Archive",icon:"archive"},{value:K.DESIGN_TEMPLATE,label:"Design template",icon:"layout-template"},{value:K.FONTS,label:"Fonts",icon:"text"},{value:K.OTHER,label:"Other",icon:"layout-grid"}],fa={[K.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[K.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[K.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[K.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[K.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[K.FONTS]:["ttf","otf","woff","woff2","eot"]},ts={RESOLUTION:0,ORIENTATION:1,FACES:2},va=[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}],ma=[{value:"portrait",label:"Portrait"},{value:"landscape",label:"Landscape"},{value:"square",label:"Square"},{value:"panorama",label:"Panorama"}],ba=[{value:"none",label:"None"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],di=[{value:"created",label:"Created at"},{value:"updated",label:"Updated at"}],vs=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"last_week",label:"Last week"},{value:"after",label:"After date"},{value:"last_month",label:"Last month"},{value:"between",label:"Between dates"},{value:"last_year",label:"Last year"}],pi=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"within_week",label:"Within week"},{value:"after",label:"After date"},{value:"within_month",label:"Within month"},{value:"between",label:"Between dates"},{value:"within_year",label:"Within year"},{value:"specific",label:"Specific date"}],_a=[{value:"today",label:"Today"},{value:"before",label:"Before date"},{value:"within_week",label:"Within week"},{value:"after",label:"After date"},{value:"within_month",label:"Within month"},{value:"between",label:"Between dates"},{value:"within_year",label:"Within year"},{value:"specific",label:"Specific date"}],ya=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],xa=[{label:"None (Exact)",value:"0"},{label:"Small",value:"1"},{label:"Medium",value:"2"},{label:"Large",value:"4"}],ss=[{label:"Is",value:S.IS},{label:"Contains",value:S.CONTAINS_IN_TEXT}],ye=[{label:"Is",value:S.IS},{label:"Is not",value:S.IS_NOT}],is=[{label:"Is",value:S.IS_EXACT},{label:"Contains",value:S.IS},{label:"Does not contain",value:S.IS_NOT}],as=[{label:"Is",value:S.IS},{label:"Greater than",value:S.GREATER_THAN_OR_EQUAL},{label:"Is not",value:S.IS_NOT},{label:"Less than",value:S.LESS_THAN_OR_EQUAL},{label:"Between",value:S.RANGE}],wa=[{label:"Is",value:S.IS_EXACT},{label:"Is not",value:S.IS_NOT}],Qs=[{label:"Contains",value:S.CONTAINS},{label:"Does not contain",value:S.IS_NOT}],$a=[{value:"APPROVED",label:"Approved",icon:"circle-check-big",iconColor:"var(--ap-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",icon:"clock",iconColor:"var(--ap-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",icon:"x-circle",iconColor:"var(--ap-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",icon:"ban",iconColor:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"}],Ne=[{label:"Empty",value:re},{label:"Not empty",value:ne}],os=[...Ne,{label:"Specific",value:ze}],ka=[{label:"Empty",value:re},{label:"Not empty",value:ne},{label:"True",value:"true"},{label:"False",value:"false"}],It={[w.DATE]:"calendar",[w.BOOLEAN]:"toggle-left",[w.NUMERIC]:"file-digit",[w.DECIMAL2]:"decimals-arrow-right",[w.ATTACHMENTS_ASSETS]:"paperclip",[w.ATTACHMENT_URI]:"link-2",[w.SELECT_ONE]:"circle-dot",[w.MULTI_SELECT]:"square-check",[w.SUPERTAGS]:"hash",[w.TEXT]:"text-initial",[w.TEXT_AREA]:"text-align-justify",[w.GEO_POINT]:"locate",[w.INTEGER_LIST]:"list-ordered"},Sa={[w.TEXT]:"text",[w.TEXT_AREA]:"text",[w.NUMERIC]:"number",[w.DECIMAL2]:"number",[w.BOOLEAN]:"boolean",[w.SELECT_ONE]:"select-one",[w.MULTI_SELECT]:"multi-select",[w.SUPERTAGS]:"tags",[w.DATE]:"date",[w.GEO_POINT]:"geo",[w.ATTACHMENTS_ASSETS]:"attachment",[w.ATTACHMENT_URI]:"attachment",[w.INTEGER_LIST]:"attachment"};async function Ca(t){var i;return(((i=(await t.request("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(a=>({name:a.name,value:a.value,count:a.count,category:a.category??a.value.split("_")[0],label:Fa(a.name)}))}function Fa(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function Ea(t){var m,_;const e=await t.request("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,o=((i==null?void 0:i.model)??[])[pa],n=i==null?void 0:i.store,d=((n==null?void 0:n.regional_variants_groups)??[]).map(y=>({uuid:y.uuid,label:y.label??y.name??"",variants:(y.variants??[]).map(C=>({api_value:C.api_value??C.value??"",internal_unique_value:C.internal_unique_value??C.api_value??"",label:C.label??C.name??""}))})).filter(y=>y.variants.length>1),h={};for(const y of d)h[y.uuid]=((m=y.variants[0])==null?void 0:m.api_value)??"";const u=(s==null?void 0:s.project_branding)??((_=e.settings)==null?void 0:_.project_branding),f=u==null?void 0:u.brandColor;if(!o)return{fields:[],regionalVariantGroups:d,regionalFilters:h,brandColor:f};const p=o.groups??[],g=[];for(const y of p){const C=y.name||"Root fields";for(const x of y.fields??[]){const M=x.possible_values,$=M==null?void 0:M.map(k=>({api_value:k.api_value??k.value??"",internal_unique_value:k.internal_unique_value??k.api_value??"",label:k.label??k.name??k.api_value??""}));g.push({key:x.key??x.ckey,label:x.title??x.label??x.key??"",type:x.type??"text",slug:x.slug,ckey:x.ckey,possible_values:$,group:C,regionalVariantsGroupUuid:x.regional_variants_group_uuid})}}return{fields:g,regionalVariantGroups:d,regionalFilters:h,brandColor:f}}function Re(t){return t.toLocaleDateString("en-CA")}function Lt(){return Re(new Date)}function hi(t){const e=new Date;switch(t){case"today":return{from:Lt(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:Re(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:Lt(),to:Re(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:Re(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:Lt(),to:Re(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:Re(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:Lt(),to:Re(s)}}default:return null}}function Ys(t,e){return e?e.type==="date"?Aa(e):e.type==="string"?Ta(e):!0:!1}function Aa(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function Ta(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function La(t,e={}){const s=[];for(const[i,a]of Object.entries(t)){if(!a||!Ys(i,a))continue;const o=Ma(i,a);s.push(...o)}for(const[i,a]of Object.entries(e)){if(!a||!Ys(i,a))continue;const o=Na(i,a);s.push(...o)}return Oa(s)}function Oa(t){const e=[],s=[],i=[];for(const a of t)a.startsWith("type:")||a.startsWith("type=")?e.push(a):a.startsWith("mimetype:")||a.startsWith("mimetype=")?s.push(a):i.push(a);if(e.length>0&&s.length>0){const a=[...e,...s].join(" , ");i.push(a)}else i.push(...e,...s);return i}function Ma(t,e){if(e.type==="date")return ui(t,e);if(t===b.IMAGE)return ja(e);const s=e,{operator:i=ci,values:a=[],logic:o}=s;if(a.length===0)return[];switch(t){case b.SIZE:return Ia(t,a,"..");case b.FACES:return Pa(t,i,a);case b.TAGS:return Ue(t,i,Ws(a),",",o);case b.LABELS:return Ue(t,i,Ws(a),",",o);case b.COLOR:return Da(i,a,o);case b.TYPE:return za(a,i);case b.MIME_TYPE:return Ra(t,a,i);case b.PRODUCT_REF:return Ue(t,"=%",a,",",o);default:return Ue(t,i,a,",",o)}}function ui(t,e){const s=e.field||"created";if(e.kind===pt.PRESET&&e.preset){if(e.preset===Gs.EMPTY)return[`${s}:"empty"`];if(e.preset===Gs.NOT_EMPTY)return[`${s}:"non-empty"`];const i=hi(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===pt.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===pt.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===pt.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===pt.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function Ia(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Pa(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function Ue(t,e,s,i,a){if(s.length===0)return[];if(a===da.AND)return s.map(n=>`${t}${e}"${n}"`);const o=s.map(n=>`"${n}"`).join(i);return[`${t}${e}${o}`]}function Da(t,e,s){const i=[],a=Ue("color_search",t,e,",",s);return i.push(...a),i.push('color_operator:"AND"'),i}function za(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const o of t){const n=fa[o];if(n)for(const c of n){const d=`${o}_${c}`;s.has(d)||(s.add(d),i.push(d))}else s.has(o)||(s.add(o),i.push(o))}const a=i.map(o=>`"${o}"`).join(",");return[`type${e}${a}`]}function Ra(t,e,s,i){if(e.length===0)return[];const a=e.map(o=>`"${o}"`).join(",");return[`${t}${s}${a}`]}function ja(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const n=t,c=n.resolution,d=n.orientation,h=n.faces;return c!=null&&c.length&&e.push(`resolution:"${c.join(",")}"`),d!=null&&d.length&&e.push(`orientation:"${d.join(",")}"`),h!=null&&h.length&&e.push(`faces:"${h.join(",")}"`),e}const s=t,i=s[ts.RESOLUTION],a=s[ts.ORIENTATION],o=s[ts.FACES];return i&&e.push(`resolution:"${i}"`),a&&e.push(`orientation:"${a}"`),o&&e.push(`faces:"${o}"`),e}function Na(t,e){const s=qa(t),i=Ba(t);if(e.type==="date")return Ua(s,e,i);const a=e,{operator:o=ci,values:n=[],logic:c,metadataType:d}=a;if(n.length===0)return[];if(n.length===1&&(n[0]===re||n[0]===ne)){const h=d===w.GEO_POINT?S.IS+"~":S.IS;return[`${s}${h}"${n[0]}"`]}if((d===w.NUMERIC||d===w.DECIMAL2)&&o===S.RANGE)return[`${s}${S.IS}"${n.join('","')}"`];if(d===w.GEO_POINT){const h=n.map(u=>{const f=u.indexOf("..");if(f===-1)return`(${u})`;const p=u.slice(0,f),g=u.slice(f);return`(${p})${g}`});return Ue(s,o+"~",h,",",c)}return Ue(s,o,n,",",c)}function Ua(t,e,s){const i=ui(t,e);return!s||i.length===0?i:i.map(a=>{const o=a.search(/[^a-zA-Z0-9_]/);if(o===-1)return`"${a}"`;const n=a.slice(0,o),d=a.slice(o).replace(/"/g,"");return`"${n}${d}"`})}function Ba(t){return t.startsWith("date_")}function qa(t){for(const e of ri)if(t.startsWith(e))return t.slice(e.length);return t}function Ws(t){return t.map(e=>e.replace(/#/g,""))}const Va=new Set([b.DATE,b.LICENSE_EXPIRY,G.DUE_DATE]);function ps(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=Ha(s,i));return e}function Ha(t,e){return e.type==="string"||e.type==="date"?e:Va.has(t)?{type:"date",field:e.field??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function Ga(t){const e=localStorage.getItem(ni+t),s=localStorage.getItem(li+t);let i;try{i=e?JSON.parse(e):[...Ks]}catch{i=[...Ks]}let a;try{a=s?JSON.parse(s):[]}catch{a=[]}return{pinnedFilters:i,pinnedMetadata:a}}function Ka(t,e){localStorage.setItem(ni+t,JSON.stringify(e))}function Qa(t,e){localStorage.setItem(li+t,JSON.stringify(e))}const gi="sort-by",fi="sort-order";function Xs(t,e){try{localStorage.setItem(gi,t),localStorage.setItem(fi,e)}catch{}}function Ya(){try{const t=localStorage.getItem(gi),e=localStorage.getItem(fi);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const vi="ap-last-folder",mi="ap-last-view",bi="ap-last-tab";function nt(t,e){return e?`${t}:${e}`:t}function Zs(t,e){try{localStorage.setItem(nt(vi,e),t)}catch{}}function Wa(t){try{return localStorage.getItem(nt(vi,t))}catch{return null}}function Xa(t,e){try{localStorage.setItem(nt(mi,e),t)}catch{}}function Za(t){try{return localStorage.getItem(nt(mi,t))}catch{return null}}function Ja(t,e){try{localStorage.setItem(nt(bi,e),t)}catch{}}function eo(t){try{const e=localStorage.getItem(nt(bi,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function to(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,a=parseInt(s.slice(2,4),16)/255,o=parseInt(s.slice(4,6),16)/255;return[i,a,o]}function rs(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function so(t,e,s){const i=rs(t),a=rs(e),o=rs(s),n=.4122214708*i+.5363325363*a+.0514459929*o,c=.2119034982*i+.6806995451*a+.1073969566*o,d=.0883024619*i+.2817188376*a+.6299787005*o,h=Math.cbrt(n),u=Math.cbrt(c),f=Math.cbrt(d),p=.2104542553*h+.793617785*u-.0040720468*f,g=1.9779984951*h-2.428592205*u+.4505937099*f,m=.0259040371*h+.7827717662*u-.808675766*f,_=Math.sqrt(g*g+m*m);let y=Math.atan2(m,g)*(180/Math.PI);return y<0&&(y+=360),[p,_,y]}function io(t){return t>.7}function ao(t,e){const s=["--ap-primary","--ap-primary-foreground","--ap-primary-10","--ap-primary-20","--ap-accent","--ap-accent-foreground","--ap-ring","--ap-selection-bg"];if(!e){for(const f of s)t.style.removeProperty(f);return}const[i,a,o]=to(e),[n,c,d]=so(i,a,o),h=`oklch(${n.toFixed(3)} ${c.toFixed(3)} ${d.toFixed(1)})`,u=io(n)?"#000":"#fff";t.style.setProperty("--ap-primary",h),t.style.setProperty("--ap-primary-foreground",u),t.style.setProperty("--ap-primary-10",`oklch(${n.toFixed(3)} ${c.toFixed(3)} ${d.toFixed(1)} / 0.1)`),t.style.setProperty("--ap-primary-20",`oklch(${n.toFixed(3)} ${c.toFixed(3)} ${d.toFixed(1)} / 0.2)`),t.style.setProperty("--ap-accent",`oklch(${n.toFixed(3)} ${c.toFixed(3)} ${d.toFixed(1)} / 0.07)`),t.style.setProperty("--ap-accent-foreground",h),t.style.setProperty("--ap-ring",`oklch(${n.toFixed(3)} ${c.toFixed(3)} ${d.toFixed(1)} / 0.7)`),t.style.setProperty("--ap-selection-bg",`oklch(${n.toFixed(3)} ${c.toFixed(3)} ${d.toFixed(1)} / 0.08)`)}const ms=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"modified_at",label:"Modified"},{value:"size",label:"Size"},{value:"type",label:"Format"}],oo=[{value:"relevance",label:"Relevance"},...ms],ro=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"modified_at",label:"Modified"},{value:"files_count_recursive",label:"Assets count"},{value:"files_size_recursive",label:"Assets size"}],no=[{value:"name",label:"Name"}],lo=[{value:"name",label:"Name"},{value:"created_at",label:"Uploaded"},{value:"updated_at",label:"Modified"}],co=[{value:"name",label:"Name"}];var po=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,bs=(t,e,s,i)=>{for(var a=i>1?void 0:i?ho(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&po(e,s,a),a};let ht=class extends r.LitElement{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return r.html`
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
    `}};ht.styles=r.css`
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
      background: var(--ap-background, oklch(1 0 0));
      overflow: hidden;
      display: flex;
      flex-direction: column;
      font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
  `;bs([l.property({type:Boolean})],ht.prototype,"open",2);bs([l.query("dialog")],ht.prototype,"dialog",2);ht=bs([l.customElement("ap-modal")],ht);function uo(t,e){let s;const i=((...a)=>{clearTimeout(s),s=setTimeout(()=>t(...a),e)});return i.cancel=()=>clearTimeout(s),i}const Y=r.css`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;var go=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,Kt=(t,e,s,i)=>{for(var a=i>1?void 0:i?fo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&go(e,s,a),a};let it=class extends r.LitElement{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return r.html`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label="Regional settings"
        title="Regional settings"
      >
        <ap-icon name="globe" .size=${18}></ap-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${t?r.nothing:r.html`
          <div style="padding: 12px 12px; font-size: 0.8125rem; color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));">
            No regional settings configured
          </div>
        `}
        ${this.groups.map(e=>r.html`
          <div class="group">
            <div class="group-label">${e.label}</div>
            ${e.variants.map(s=>{const i=this.selectedFilters[e.uuid]===s.api_value;return r.html`
                <button
                  class="variant-option"
                  ?data-selected=${i}
                  @click=${()=>this._selectVariant(e.uuid,s.api_value)}
                >
                  <span class="variant-label">${s.label}</span>
                  <span class="check-mark">${i?r.html`<ap-icon name="check" .size=${14}></ap-icon>`:""}</span>
                </button>
              `})}
          </div>
        `)}
      </div>
    `}};it.styles=r.css`
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
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .trigger.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
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
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .group-label {
      padding: 6px 12px 8px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-label {
      flex: 1;
    }
    .variant-option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .variant-option[data-selected] {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      font-weight: 400;
    }
    .check-mark {
      width: 16px;
      flex-shrink: 0;
    }
  `;Kt([l.property({type:Array})],it.prototype,"groups",2);Kt([l.property({type:Object})],it.prototype,"selectedFilters",2);Kt([l.state()],it.prototype,"_open",2);it=Kt([l.customElement("ap-regional-settings")],it);var vo=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,W=(t,e,s,i)=>{for(var a=i>1?void 0:i?mo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&vo(e,s,a),a};const bo=[{value:"assets",label:"Assets",icon:"gallery-vertical-end"},{value:"folders",label:"Folders",icon:"folder-open"},{value:"labels",label:"Labels",icon:"tag"},{value:"collections",label:"Collections",icon:"layout-grid"}];let N=class extends r.LitElement{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this._localSearch="",this._debouncedSearch=uo(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){var e,s;const t=bo.filter(i=>this.tabs.includes(i.value));return((e=t.find(i=>i.value===this.activeTab))==null?void 0:e.label)??((s=t[0])==null||s.label),r.html`
      <div class="header-row">
        ${t.length>1?r.html`<ap-dropdown
              .value=${this.activeTab}
              .options=${t}
              @ap-change=${this._handleTabChange}
            ></ap-dropdown>`:r.nothing}
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab==="folders"?"AI search folders and assets":"AI search assets":this.activeTab==="labels"&&!this.isInsideLabel?"Search labels":this.activeTab==="collections"&&!this.isInsideCollection?"Search collections":this.activeTab==="collections"&&this.isInsideCollection&&!this.isInsideCollectionLeaf?"Search collection folders":this.activeTab==="folders"?"Search folders and assets":"Search assets"}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?r.html`
              <button class="clear-btn" @click=${this._clearSearch} aria-label="Clear search">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            `:""}
            ${this.enableAISearch?r.html`
              <button
                class="ai-toggle ${this.isAISearchActive?"active":""}"
                @click=${this._toggleAISearch}
                aria-label=${this.isAISearchActive?"Disable AI search":"Enable AI search"}
                title=${this.isAISearchActive?"AI search on":"AI search off"}
              >
                <ap-icon name="sparkles" .size=${12}></ap-icon>
                <span>AI</span>
              </button>
            `:""}
          </div>
        </div>
        <div class="actions">
          <ap-regional-settings
            .groups=${this.regionalGroups}
            .selectedFilters=${this.regionalFilters}
            @regional-change=${this._handleRegionalChange}
          ></ap-regional-settings>
          <button
            class="icon-btn"
            @click=${this._toggleView}
            aria-label=${this.viewMode==="grid"?"Switch to list view":"Switch to grid view"}
            title=${this.viewMode==="grid"?"List view":"Grid view"}
          >
            <ap-icon name=${this.viewMode==="grid"?"list":"layout-grid"} .size=${18}></ap-icon>
          </button>
          ${this.hideClose?r.nothing:r.html`
            <div class="divider"></div>
            <button class="icon-btn" style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))" @click=${this._handleClose} aria-label="Close">
              <ap-icon name="close" .size=${18}></ap-icon>
            </button>
          `}
        </div>
      </div>
    `}};N.styles=[Y,r.css`
    :host {
      display: block;
      padding: 16px 20px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }
    input {
      width: 100%;
      height: 36px;
      box-sizing: border-box;
      padding: 0 34px 0 38px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    input:hover {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    input:focus-visible {
      outline: none; /* already has focus ring via border-color + box-shadow */
    }
    input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 0;
    }
    .clear-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .ai-toggle {
      display: flex;
      align-items: center;
      gap: 4px;
      height: 26px;
      padding: 0 8px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-size: 12px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      cursor: pointer;
      white-space: nowrap;
    }
    .ai-toggle:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .ai-toggle.active {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: white;
      border-color: transparent;
    }
    .ai-toggle.active:hover {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .tab-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }
  `];W([l.property()],N.prototype,"activeTab",2);W([l.property({type:Array})],N.prototype,"tabs",2);W([l.property({type:Boolean})],N.prototype,"isInsideLabel",2);W([l.property({type:Boolean})],N.prototype,"isInsideCollection",2);W([l.property({type:Boolean})],N.prototype,"isInsideCollectionLeaf",2);W([l.property()],N.prototype,"viewMode",2);W([l.property()],N.prototype,"searchQuery",2);W([l.property({type:Array})],N.prototype,"regionalGroups",2);W([l.property({type:Object})],N.prototype,"regionalFilters",2);W([l.property({type:Boolean})],N.prototype,"hideClose",2);W([l.property({type:Boolean,reflect:!0,attribute:"ai-search"})],N.prototype,"enableAISearch",2);W([l.property({type:Boolean})],N.prototype,"isAISearchActive",2);W([l.state()],N.prototype,"_localSearch",2);N=W([l.customElement("ap-header")],N);var _o=Object.defineProperty,yo=Object.getOwnPropertyDescriptor,_s=(t,e,s,i)=>{for(var a=i>1?void 0:i?yo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&_o(e,s,a),a};let ut=class extends r.LitElement{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?r.html``:r.html`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>r.html`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${e<this.items.length-1?r.html`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:r.html`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};ut.styles=r.css`
    :host {
      display: block;
      padding: 4px 20px 12px;
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button:first-child {
      margin-left: -6px;
    }
    button:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .current {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-weight: 500;
      padding: 4px 6px;
    }
    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;_s([l.property({type:Array})],ut.prototype,"items",2);_s([l.property()],ut.prototype,"rootLabel",2);ut=_s([l.customElement("ap-breadcrumb")],ut);var xo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,ys=(t,e,s,i)=>{for(var a=i>1?void 0:i?wo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&xo(e,s,a),a};let gt=class extends r.LitElement{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?r.html`
      <div class="popover">
        ${this.title?r.html`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:r.html``}};gt.styles=r.css`
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
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      padding: 12px;
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 12px;
    }
  `;ys([l.property()],gt.prototype,"title",2);ys([l.property({type:Boolean})],gt.prototype,"open",2);gt=ys([l.customElement("ap-filter-popover")],gt);var $o=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,kt=(t,e,s,i)=>{for(var a=i>1?void 0:i?ko(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&$o(e,s,a),a};function Js(t){var i;const e=new Map;for(const a of t){const o=a.category||a.value.split("_")[0];if(!e.has(o)){const c=Rt.find(d=>d.value===o);e.set(o,{key:o,label:(c==null?void 0:c.label)||o.charAt(0).toUpperCase()+o.slice(1),icon:(c==null?void 0:c.icon)||"file",extensions:[],totalCount:0})}const n=e.get(o);n.extensions.push({value:a.value,label:a.label||((i=a.value.split("_").pop())==null?void 0:i.toUpperCase())||a.value,count:a.count}),n.totalCount+=a.count}const s=Rt.map(a=>a.value);return[...e.values()].sort((a,o)=>{const n=s.indexOf(a.key),c=s.indexOf(o.key);return(n===-1?999:n)-(c===-1?999:c)})}let qe=class extends r.LitElement{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const a=new Set([t.key,...e]);i=this.selected.filter(o=>!a.has(o))}else{const a=new Set(e);i=this.selected.filter(o=>!a.has(o)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(a=>a!==e.key),i.push(...s)),i.includes(t)?i=i.filter(a=>a!==t):(i.push(t),s.every(a=>i.includes(a))&&(i=i.filter(a=>!s.includes(a)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.TYPE,values:t,operator:S.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const a=s.extensions.filter(o=>o.label.toLowerCase().includes(e)||o.value.toLowerCase().includes(e));return a.length===0?null:{...s,extensions:a}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=Js(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=Js(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return r.html`
      <input
        class="search-input"
        type="text"
        placeholder="Search formats..."
        .value=${this._search}
        @input=${i=>{this._search=i.target.value}}
      />
      <div class="header-row">
        <span class="section-label">Formats</span>
        ${s?r.html`<button class="clear-btn" @click=${this._clearAll}>Clear all</button>`:r.nothing}
      </div>
      <div class="groups">
        ${e.length===0&&this._search.trim()?r.html`<div class="no-results">No formats found</div>`:e.map(i=>this._renderGroup(i))}
      </div>
    `}_renderGroup(t){const e=this._expanded.has(t.key)||this._search.trim().length>0,s=this._isGroupFullySelected(t),i=this._isGroupPartial(t);return r.html`
      <div
        class="group-header ${s||i?"selected":""}"
        @click=${()=>this._toggleExpand(t.key)}
      >
        <svg class="group-chevron ${e?"expanded":""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <ap-icon name=${t.icon} size="16"></ap-icon>
        <span class="group-label">${t.label}</span>
        <ap-checkbox
          ?checked=${s}
          ?indeterminate=${i}
          @click=${a=>a.stopPropagation()}
          @ap-toggle=${()=>this._toggleGroup(t)}
        ></ap-checkbox>
      </div>
      ${e?r.html`
          <div class="extensions">
            ${t.extensions.map(a=>r.html`
              <div
                class="ext-row"
                @click=${()=>this._toggleExt(a.value,t)}
              >
                <ap-checkbox
                  ?checked=${this._isExtSelected(a.value,t.key)}
                  @click=${o=>o.stopPropagation()}
                  @ap-toggle=${()=>this._toggleExt(a.value,t)}
                ></ap-checkbox>
                <span class="ext-label">${a.label}</span>
              </div>
            `)}
          </div>
        `:r.nothing}
    `}_renderFallback(){return r.html`
      <div class="options">
        <span class="section-label">Formats</span>
        ${Rt.map(t=>r.html`
            <div
              class="option ${this.selected.includes(t.value)?"selected":""}"
              @click=${()=>this._toggleCategory(t.value)}
            >
              <ap-checkbox ?checked=${this.selected.includes(t.value)}></ap-checkbox>
              <ap-icon name=${t.icon} size="16"></ap-icon>
              <span class="option-label">${t.label}</span>
            </div>
          `)}
      </div>
    `}};qe.styles=r.css`
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: default;
    }

    .clear-btn {
      background: none;
      border: none;
      font-size: 0.75rem;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      padding: 2px 4px;
      border-radius: var(--ap-radius-sm, 6px);
    }
    .clear-btn:hover {
      text-decoration: underline;
    }

    .search-input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 10px;
      margin-bottom: 8px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    .search-input:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .search-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
      user-select: none;
    }
    .group-header:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .group-chevron {
      flex-shrink: 0;
      width: 14px;
      height: 14px;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 150ms;
    }
    .group-chevron.expanded {
      transform: rotate(90deg);
    }

    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .group-header.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .group-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .ext-row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .ext-label {
      flex: 1;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .option-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .option.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .no-results {
      padding: 12px;
      text-align: center;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;kt([l.property({type:Array})],qe.prototype,"selected",2);kt([l.property({type:Array})],qe.prototype,"fileTypes",2);kt([l.state()],qe.prototype,"_search",2);kt([l.state()],qe.prototype,"_expanded",2);qe=kt([l.customElement("ap-filter-type")],qe);const Ce=r.css`
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
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
    font-weight: 400;
    color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
    background: var(--ap-border, oklch(92.86% 0.009 247.92));
    margin: 16px 0;
  }

  /* ── Info alert ── */
  .info-alert {
    display: flex;
    gap: 8px;
    padding: 10px 12px;
    background: oklch(0.97 0.01 245);
    border: 1px solid oklch(0.92 0.015 245);
    border-radius: var(--ap-radius-sm, 6px);
    font-size: 0.8125rem;
    color: var(--ap-info-foreground, oklch(0.391 0.091 241.289));
    line-height: 1.4;
    margin-top: 16px;
  }
  .info-alert ap-icon {
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--ap-info, oklch(0.632 0.161 245.564));
  }

  /* ── Text/Number inputs ── */
  .filter-input {
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
    border-radius: var(--ap-radius-sm, 6px);
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: var(--ap-background, oklch(1 0 0));
    outline: none;
    transition: border-color 150ms;
  }
  .filter-input:focus {
    border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
  }
  .filter-input:disabled {
    opacity: 0.5;
    cursor: default;
  }
  .filter-input::placeholder {
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    font-weight: 400;
  }

  /* ── Date input: Lucide calendar icon ── */
  .filter-input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .filter-input[type="date"] {
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
    color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
    border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    border-radius: 9999px;
    font-size: 0.8125rem;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: var(--ap-background, oklch(1 0 0));
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
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
    flex-shrink: 0;
  }
  .chip-remove:hover {
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
  }
  .chips-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  /* ── Error text ── */
  .error-text {
    font-size: 0.8125rem;
    color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    margin-top: 4px;
  }

  /* ── Search input (flush with popover edges, like tags) ── */
  .search-wrapper {
    position: sticky;
    top: -10px;
    z-index: 2;
    background: var(--ap-card, oklch(1 0 0));
    margin: -10px -8px 10px;
  }
  .search-wrapper .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    pointer-events: none;
  }
  .search-input {
    width: 100%;
    padding: 8px 32px 8px 32px;
    border: none;
    border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    border-radius: 0;
    font-size: var(--ap-font-size-sm, 0.875rem);
    font-family: inherit;
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    background: transparent;
    outline: none;
  }
  .search-input::placeholder {
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    cursor: pointer;
    padding: 0;
  }
  .search-clear:hover {
    color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
    font-size: var(--ap-font-size-sm, 0.875rem);
    color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
  }
`;var So=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,Ke=(t,e,s,i)=>{for(var a=i>1?void 0:i?Co(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&So(e,s,a),a};function ns(t){return t.toISOString().split("T")[0]}let we=class extends r.LitElement{constructor(){super(...arguments),this.filterKey=b.DATE,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===b.LICENSE_EXPIRY}get _rangeOptions(){return this._isLicenseExpiry?pi:vs}get _todayStr(){return ns(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=hi(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const a=new Date(s+"T23:59:59");this.to=a.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?r.nothing:r.html`
      <div class="filter-section">
        <span class="section-label">Date type</span>
        <ap-radio-group
          .options=${di}
          .value=${this.field}
          @ap-change=${t=>this._selectField(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderRangeSection(){return r.html`
      <div class="filter-section">
        <span class="section-label">Range</span>
        <ap-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @ap-change=${t=>this._selectPreset(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return r.nothing;const e=this.from?ns(new Date(this.from)):"",s=this.to?ns(new Date(this.to)):"",i=this._todayStr;return t==="specific"?r.html`
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
      `:t==="before"?r.html`
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
      `:t==="after"?r.html`
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
      `:r.html`
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
    `}render(){return r.html`
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
    `}};we.styles=[Ce,r.css`
    .date-inputs {
      margin-top: 4px;
    }
  `];Ke([l.property()],we.prototype,"filterKey",2);Ke([l.property()],we.prototype,"field",2);Ke([l.property()],we.prototype,"kind",2);Ke([l.property()],we.prototype,"preset",2);Ke([l.property()],we.prototype,"from",2);Ke([l.property()],we.prototype,"to",2);we=Ke([l.customElement("ap-filter-date")],we);var Fo=Object.defineProperty,Eo=Object.getOwnPropertyDescriptor,lt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Eo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Fo(e,s,a),a};let Te=class extends r.LitElement{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=b.TAGS,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=Jt}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:S.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:S.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:S.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return r.html`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${Jt} tags`:r.nothing}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return r.html`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="tag-search"
            type="text"
            placeholder="Search tags"
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?r.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:r.nothing}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?r.html`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{const s=this._getTagBySid(e);return s?r.html`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:r.nothing})}
                </div>
              </div>
            `:r.nothing}

        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?r.html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${Jt} tags.</span>
              </div>
            `:r.nothing}
      </div>
    `}_renderSearchResults(t){const e=a=>a.toLowerCase().includes(t),s=this._suggestedTags.filter(a=>e(a.label)).slice(0,50),i=this._otherTags.filter(a=>e(a.label)).slice(0,50);return s.length===0&&i.length===0?r.html`<div class="no-results">No tags found</div>`:r.html`
      ${s.length>0?r.html`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">Suggested tags</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length===0}
                  @click=${this._clearAll}
                >Clear all</button>
              </div>
              <div class="options-list short">
                ${s.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:r.nothing}

      ${i.length>0?r.html`
            <div class="filter-section">
              <div class="section-header">
                ${s.length===0?r.html`<span class="section-label">All tags</span>
                    <button
                      class="clear-btn"
                      ?disabled=${this.selected.length===0}
                      @click=${this._clearAll}
                    >Clear all</button>`:r.html`<span class="section-label">All tags</span>`}
              </div>
              <div class="options-list">
                ${i.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:r.nothing}
    `}_renderSections(){if(this.tags.length===0)return r.html`<div class="no-results">No tags available</div>`;const t=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return r.html`
      <div class="filter-section">
        ${t.length>0?r.html`<span class="section-label">Suggested tags</span>`:r.nothing}
        ${t.length>0?r.html`
              <div class="options-list short">
                ${t.map(e=>this._renderTagItem(e))}
              </div>
            `:r.nothing}
      </div>

      ${t.length>0?r.html`<div class="separator"></div>`:r.nothing}

      <div class="hint-message">Find more tags by using search</div>
    `}};Te.styles=[Y,Ce,r.css`
    .tag-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .tag-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .hint-message {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 8px 0;
    }

    /* Sticky search within popover scroll */
    .filter-header {
      position: sticky;
      top: -10px;
      z-index: 1;
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .filter-header .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .tag-search {
      width: 100%;
      padding: 8px 32px 8px 32px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
  `];lt([l.property({type:Array})],Te.prototype,"tags",2);lt([l.property({type:Array})],Te.prototype,"selected",2);lt([l.property()],Te.prototype,"filterKey",2);lt([l.query(".tag-search")],Te.prototype,"_searchInput",2);lt([l.state()],Te.prototype,"_search",2);Te=lt([l.customElement("ap-filter-tags")],Te);var Ao=Object.defineProperty,To=Object.getOwnPropertyDescriptor,St=(t,e,s,i)=>{for(var a=i>1?void 0:i?To(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Ao(e,s,a),a};let Ve=class extends r.LitElement{constructor(){super(...arguments),this.labels=[],this.selected=[],this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=es}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.LABELS,values:s,operator:S.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.LABELS,values:e,operator:S.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.LABELS,values:[],operator:S.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return r.html`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?`You can select up to ${es} labels`:r.nothing}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="label-icon" style="color: ${t.color}">
          <ap-icon name="tag" .size=${16}></ap-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return r.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search labels"
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?r.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:r.nothing}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?r.html`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelBySid(s);return i?r.html`
                      <div class="chip">
                        <span class="chip-icon" style="color: ${i.color}">
                          <ap-icon name="tag" .size=${12}></ap-icon>
                        </span>
                        <span class="chip-label">${i.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(s)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:r.nothing})}
                </div>
              </div>
            `:r.nothing}

        <!-- Labels list -->
        <div class="filter-section">
          <div class="section-header">
            <span class="section-label">All labels</span>
            <button
              class="clear-btn"
              ?disabled=${this.selected.length===0}
              @click=${this._clearAll}
            >Clear all</button>
          </div>
          <div class="options-list">
            ${e.length===0?r.html`<div class="no-results">No labels found</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?r.html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${es} labels.</span>
              </div>
            `:r.nothing}
      </div>
    `}};Ve.styles=[Ce,r.css`
    .label-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .count {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }

    .chip-icon {
      flex-shrink: 0;
      line-height: 0;
    }
  `];St([l.property({type:Array})],Ve.prototype,"labels",2);St([l.property({type:Array})],Ve.prototype,"selected",2);St([l.query(".search-input")],Ve.prototype,"_searchInput",2);St([l.state()],Ve.prototype,"_search",2);Ve=St([l.customElement("ap-filter-labels")],Ve);var Lo=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,ct=(t,e,s,i)=>{for(var a=i>1?void 0:i?Oo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Lo(e,s,a),a};const ls=3,hs=/^#[0-9A-Fa-f]{6}$/;function Mo(t){const e=t.trim().split(/\s+/);return e.length<1||!hs.test(e[0])?null:{hex:e[0],tolerance:e[1]||Mt,coverage:e[3]||Ot}}let Le=class extends r.LitElement{constructor(){super(...arguments),this.values=[],this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=Mo(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==Mt||s.coverage!==Ot)),this._initialized=!0)}}_selectColor(t){if(!hs.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=ls||(this._colors=[...this._colors,{hex:t,tolerance:Mt,coverage:Ot}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!hs.test(i)||this._colors.some((n,c)=>c!==t&&n.hex.toLowerCase()===i.toLowerCase()))return;const o=[...this._colors];o[t]={...o[t],hex:i},this._colors=o,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const a=[...this._colors];a[t]={...a[t],coverage:String(i)},this._colors=a,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:Mt,i=this._advanced?e.coverage:Ot;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=ls;return r.html`
      <div class="palette">
        ${ya.map(s=>{const i=t.has(s),a=e&&!i;return r.html`
              <button
                class="swatch ${i?"selected":""} ${a?"disabled":""}"
                style="background:${s};${s==="#ffffff"?" border: 1px solid #e4e4e7;":""}"
                @click=${()=>!a&&this._selectColor(s)}
                title=${s}
                ?disabled=${a}
              ></button>
            `})}
      </div>
    `}_renderColorEntry(t,e){return this._advanced?r.html`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">Color</span>
          <div class="color-row" style="gap: 6px;">
            <div class="color-swatch-small" style="background:${t.hex}"></div>
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
          <span class="adv-field-label">Difference</span>
          <ap-dropdown
            .value=${t.tolerance}
            .options=${xa}
            @ap-change=${s=>this._handleToleranceChange(e,s)}
          ></ap-dropdown>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">Coverage</span>
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
        <button class="remove-btn" style="align-self: end; margin-bottom: 8px;" title="Remove color" @click=${()=>this._removeColor(e)}>
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `:r.html`
        <div class="color-row">
          <div class="color-swatch-small" style="background:${t.hex}"></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${t.hex}
            maxlength="7"
            @change=${s=>this._handleHexInput(e,s)}
          />
          <button class="remove-btn" title="Remove color" @click=${()=>this._removeColor(e)}>
            <ap-icon name="close" .size=${14}></ap-icon>
          </button>
        </div>
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<ls&&!this._showPalette;return r.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <span class="section-label">Color</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced?"on":""}">
              <span class="toggle-thumb"></span>
            </span>
            Advanced
          </label>
        </div>

        <div class="filter-section">
          ${t?this._renderPalette():r.nothing}
        </div>

        ${this._colors.length>0?r.html`
          <div class="filter-section">
            <div class="selected-colors">
              ${this._colors.map((s,i)=>this._renderColorEntry(s,i))}
            </div>
          </div>
        `:r.nothing}

        ${e?r.html`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              Add color
            </button>
          </div>
        `:r.nothing}

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Requires image processing to be enabled.</span>
        </div>
      </div>
    `}};Le.styles=[Y,Ce,r.css`
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
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      user-select: none;
    }

    .toggle-track {
      position: relative;
      width: 32px;
      height: 18px;
      border-radius: 9px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
      transition: background 150ms;
      flex-shrink: 0;
    }

    .toggle-track.on {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      border-radius: var(--ap-radius-sm, 6px);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      flex-shrink: 0;
    }

    .color-hex-input {
      height: 36px;
      padding: 0 8px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, oklch(1 0 0));
      min-width: 0;
    }

    .color-hex-input:focus {
      outline: none;
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 0;
      flex-shrink: 0;
      border-radius: 4px;
    }

    .remove-btn:hover {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    /* ── Advanced layout: full-width grid ── */
    .color-row.advanced {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr auto;
      align-items: end;
      gap: 8px;
    }

    .adv-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
    }

    .adv-field ap-dropdown {
      display: block;
      width: 100%;
    }

    .adv-field-label {
      font-size: 0.6875rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      line-height: 1;
    }

    .coverage-wrap {
      display: flex;
      align-items: center;
      height: 36px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, oklch(1 0 0));
      overflow: hidden;
    }

    .coverage-wrap:focus-within {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .coverage-unit {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-family: var(--ap-font-family, system-ui, sans-serif);
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      transition: opacity 150ms;
    }

    .add-color-btn:hover {
      opacity: 0.8;
    }
  `];ct([l.property({type:Array})],Le.prototype,"values",2);ct([l.state()],Le.prototype,"_colors",2);ct([l.state()],Le.prototype,"_advanced",2);ct([l.state()],Le.prototype,"_showPalette",2);ct([l.state()],Le.prototype,"_initialized",2);Le=ct([l.customElement("ap-filter-color")],Le);var Io=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Qe=(t,e,s,i)=>{for(var a=i>1?void 0:i?Po(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Io(e,s,a),a};const Do={KB:1/1e3,MB:1,GB:1e3},zo=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let $e=class extends r.LitElement{constructor(){super(...arguments),this.min=0,this.max=0,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=Do[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.SIZE,values:[],operator:S.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.SIZE,values:[i],operator:S.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return r.html`
      <div class="filter-content">
        <span class="section-label">Size</span>
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="size-grid">
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
              .options=${zo}
              .value=${this._unit}
              @ap-change=${this._setUnit}
            ></ap-dropdown>
          </div>
        </div>
      </div>
    `}};$e.styles=[Ce,r.css`
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
      .size-grid ap-dropdown {
        display: block;
        width: 100%;
      }
    `];Qe([l.property({type:Number})],$e.prototype,"min",2);Qe([l.property({type:Number})],$e.prototype,"max",2);Qe([l.state()],$e.prototype,"_minVal",2);Qe([l.state()],$e.prototype,"_maxVal",2);Qe([l.state()],$e.prototype,"_unit",2);Qe([l.state()],$e.prototype,"_initialized",2);$e=Qe([l.customElement("ap-filter-size")],$e);var Ro=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,Qt=(t,e,s,i)=>{for(var a=i>1?void 0:i?jo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Ro(e,s,a),a};const No=r.svg`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,Uo=r.svg`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,Bo=r.svg`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,qo=r.svg`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,Vo={portrait:No,landscape:Uo,square:Bo,panorama:qo};let at=class extends r.LitElement{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[]}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return r.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Resolution</span>
          <div class="options-horizontal">
            ${va.map(t=>r.html`
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
            ${ma.map(t=>r.html`
                <ap-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleOrientation(t.value)}}
                ><span class="orientation-label">${Vo[t.value]}${t.label}</span></ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">Faces</span>
          <div class="options-horizontal">
            ${ba.map(t=>r.html`
                <ap-checkbox
                  ?checked=${this.selectedFaces.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleFaces(t.value)}}
                >${t.label}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Some images might not have been processed, so they won't be displayed.</span>
        </div>
      </div>
    `}};at.styles=[Ce,r.css`
    .options-horizontal {
      display: flex;
      gap: 28px;
    }
    .options-vertical {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .options-vertical ap-checkbox {
      --ap-checkbox-gap: 12px;
    }
    .orientation-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .orientation-label svg {
      flex-shrink: 0;
    }
  `];Qt([l.property({type:Array})],at.prototype,"selectedResolution",2);Qt([l.property({type:Array})],at.prototype,"selectedOrientation",2);Qt([l.property({type:Array})],at.prototype,"selectedFaces",2);at=Qt([l.customElement("ap-filter-image")],at);var Ho=Object.defineProperty,Go=Object.getOwnPropertyDescriptor,P=(t,e,s,i)=>{for(var a=i>1?void 0:i?Go(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Ho(e,s,a),a};function F(t){return`${Gt[t.type]||""}${t.key}`}let I=class extends r.LitElement{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}get _atFieldLimit(){return this.visibleFields.length>=Tt}_getField(t){return this.fields.find(e=>F(e)===t)}_getUIType(t){return Sa[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===re||t[0]===ne}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===re?re:((i=e.values)==null?void 0:i[0])===ne?ne:this._specificModeFields.has(t)||e.values&&e.values.length>0?ze:""}_emitFilterChange(t,e,s){const i=F(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=F(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=F(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=F(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(F(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=F(t);if(e===ze){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const a=this._getApplied(s);this._isSpecialValue(a.values)&&this._emitFilterChange(t,a.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator,[])}}}_clearFieldFilter(t){const e=F(t);if(this._specificModeFields.has(e)){const p=new Set(this._specificModeFields);p.delete(e),this._specificModeFields=p}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:a,...o}=this._dateFroms;this._dateFroms=o;const{[e]:n,...c}=this._dateTos;this._dateTos=c;const{[e]:d,...h}=this._selectSearches;this._selectSearches=h;const{[e]:u,...f}=this._tagInputs;this._tagInputs=f,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,a=this._getApplied(F(t)).operator||ss[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,a=F(t),o=this._getApplied(a),n=o.operator||as[0].value,c=[...o.values||[]];s===0?c[0]=i:c[1]=i;const d=c.filter(h=>h!==""&&h!==void 0);if(d.length>0){const h=t.type===w.DECIMAL2;if(!d.every(f=>h?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,n,c)}_onBooleanSelect(t,e){var a;const s=this._getApplied(F(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=F(t),i=this._getApplied(s),a=i.operator||ye[0].value,o=i.values||[];o.length===1&&o[0]===e?this._emitFilterChange(t,a,[]):this._emitFilterChange(t,a,[e])}_onMultiSelectToggle(t,e){const s=F(t),i=this._getApplied(s),a=i.operator||is[0].value,o=i.values||[],n=o.includes(e)?o.filter(c=>c!==e):[...o,e];this._emitFilterChange(t,a,n)}_onTagKeydown(t,e){const s=F(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const a=i.replace(/,/g,"").trim();a&&(this._tagInputs={...this._tagInputs,[e]:a},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=F(t),i=this._getApplied(s),a=i.operator||ye[0].value,o=i.values||[];o.includes(e)||this._emitFilterChange(t,a,[...o,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,a=await this.apiClient.request("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(a.tags||[]).map(o=>o.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),a=i.operator||ye[0].value,o=i.values||[];o.includes(s)||this._emitFilterChange(t,a,[...o,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=F(t),i=this._getApplied(s),a=i.operator||ye[0].value,o=i.values||[];this._emitFilterChange(t,a,o.filter(n=>n!==e))}_onTagOperatorChange(t,e){const s=F(t),a=this._getApplied(s).values||[];this._emitFilterChange(t,e,a)}_onDatePreset(t,e){const s=F(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let a="",o="";switch(e){case"today":{const n=new Date(i);n.setHours(0,0,0,0),a=n.toISOString(),o=i.toISOString();break}case"last_week":{const n=new Date(i),c=n.getDay();n.setDate(n.getDate()-(c===0?6:c-1)),n.setHours(0,0,0,0);const d=new Date(n);d.setDate(d.getDate()-7),a=d.toISOString(),o=n.toISOString();break}case"last_month":{const n=new Date(i.getFullYear(),i.getMonth(),1),c=new Date(n);c.setMonth(c.getMonth()-1),a=c.toISOString(),o=n.toISOString();break}case"last_year":{const n=new Date(i.getFullYear(),0,1),c=new Date(n);c.setFullYear(c.getFullYear()-1),a=c.toISOString(),o=n.toISOString();break}}a&&o&&(this._dateFroms={...this._dateFroms,[s]:a},this._dateTos={...this._dateTos,[s]:o},this._emitFilterChange(t,"..",[a,o]))}_onDateInput(t,e,s){const i=s.target.value,a=F(t),o=this._datePresets[a]||"",n=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[a]:n}:this._dateTos={...this._dateTos,[a]:n};let c=this._dateFroms[a]||"",d=this._dateTos[a]||"";o==="after"&&c&&(d=new Date().toISOString(),this._dateTos={...this._dateTos,[a]:d}),o==="before"&&d&&(c=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:c}),c&&d&&this._emitFilterChange(t,"..",[c,d])}_onGeoLocationInput(t,e){var f;const s=e.target.value.trim(),i=F(t),a=(f=this.shadowRoot)==null?void 0:f.querySelector(`[data-geo-radius="${i}"]`),o=(a==null?void 0:a.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const n=s.split(",").map(p=>p.trim());if(n.length!==2||n.some(p=>isNaN(Number(p))||p===""))return;const[c,d]=n;let u=`${c},${d}..${o||"0"}`;this._emitFilterChange(t,S.IS,[u])}_onGeoRadiusInput(t,e){var d;const s=e.target.value,i=F(t),a=this._getApplied(i);if(!((d=a.values)!=null&&d[0]))return;const o=a.values[0],[n]=o.split("..");let c=n;s&&(c+=`..${s}`),this._emitFilterChange(t,S.IS,[c])}_onEmptyOption(t,e){var a;const s=this._getApplied(F(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||"Root fields";e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,o)=>o.length===0?r.nothing:r.html`
        <div class="field-group-label">${a}</div>
        ${o.map(n=>{const c=F(n),d=this.visibleFields.includes(c),h=!d&&this._atFieldLimit;return r.html`
            <div
              class="field-item ${d?"selected":""} ${h?"disabled":""}"
              @click=${()=>!h&&!d&&this._addField(n)}
            >
              ${d?r.html`<ap-icon name="check" .size=${14}></ap-icon>`:r.html`<ap-icon name=${It[n.type]||"file-text"} .size=${14} style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"></ap-icon>`}
              <span>${n.label}</span>
            </div>
          `})}
      `;return r.html`
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
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            placeholder="Search fields"
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?r.html`<div class="empty-msg">No fields found</div>`:r.html`${[...s.entries()].map(([a,o])=>i(a,o))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var h,u;const e=F(t),s=this._getApplied(e),a=this._isSpecialValue(s.values)?"":((h=s.values)==null?void 0:h[0])||"",o=this._getContentMode(e),n=o===re||o===ne,c=s.operator||ss[0].value,d=t.type===w.TEXT_AREA;return r.html`
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
            .options=${ss}
            .value=${c}
            ?disabled=${n}
            @ap-change=${f=>this._onOperatorChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            clearable
            .options=${os}
            .value=${o}
            @ap-change=${f=>this._onContentModeChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        ${o===ze?r.html`
              <div class="filter-section">
                <span class="section-label">Value</span>
                ${d?r.html`
                      <textarea
                        class="filter-input"
                        placeholder="Enter value"
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                      ></textarea>
                    `:r.html`
                      <input
                        class="filter-input"
                        type="text"
                        placeholder="Enter value"
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                        @keydown=${f=>{f.key==="Enter"&&f.preventDefault()}}
                      />
                    `}
              </div>
            `:r.nothing}
      </div>
    `}_renderNumberFilter(t){var x,M,$;const e=F(t),s=this._getApplied(e),i=s.operator||as[0].value,a=this._isSpecialValue(s.values),o=this._getContentMode(e),n=o===re||o===ne,c=i===S.RANGE,d=i===S.GREATER_THAN_OR_EQUAL,h=i===S.LESS_THAN_OR_EQUAL,u=t.type===w.DECIMAL2,f=u?"0.01":"1",p=u?"0.00":"0",g=a?"":((x=s.values)==null?void 0:x[0])||"",m=a?"":((M=s.values)==null?void 0:M[1])||"",_=c||d||h,y=c||d||h?"Min":"Value";return r.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!(($=s.values)!=null&&$.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Condition</span>
          <ap-radio-group
            columns="2"
            .options=${as}
            .value=${i}
            ?disabled=${n}
            @ap-change=${k=>this._onOperatorChange(t,k.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            clearable
            .options=${os}
            .value=${o}
            @ap-change=${k=>this._onContentModeChange(t,k.detail.value)}
          ></ap-radio-group>
        </div>

        ${o===ze?r.html`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${h?"true":r.nothing}>${y}</span>
                    <input
                      class="filter-input"
                      type="number"
                      step=${f}
                      placeholder=${p}
                      .value=${g}
                      ?disabled=${h}
                      @change=${k=>this._onNumberInput(t,k,0)}
                    />
                  </div>
                  ${_?r.html`
                        <div>
                          <span class="input-label" aria-disabled=${d?"true":r.nothing}>${"Max"}</span>
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${p}
                            .value=${m}
                            ?disabled=${d}
                            @change=${k=>this._onNumberInput(t,k,1)}
                          />
                        </div>
                      `:r.nothing}
                </div>
              </div>
            `:r.nothing}
      </div>
    `}_renderBooleanFilter(t){var i,a;const e=this._getApplied(F(t)),s=((i=e.values)==null?void 0:i[0])||"";return r.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Value</span>
          <ap-radio-group
            clearable
            .options=${ka}
            .value=${s}
            @ap-change=${o=>this._onBooleanSelect(t,o.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(t){const e=F(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],o=t.possible_values||[],n=s.operator||ye[0].value,c=(this._selectSearches[e]||"").toLowerCase(),d=c.length>0,h=a.length>0||i,u=c?o.filter(p=>p.label.toLowerCase().includes(c)):o,f=a.length>=Tt;return r.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search options"
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${d?r.html`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:r.nothing}
        </div>

        ${d?r.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >Clear all</button>
              </div>
            `:r.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Operator</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${ye}
                  .value=${n}
                  @ap-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?r.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">Selected</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >Clear all</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>{const g=o.find(m=>m.api_value===p);return r.html`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button class="chip-remove" @click=${()=>this._onSelectOneToggle(t,p)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:r.nothing}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${Ne.map(p=>{var g;return r.html`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,p.value)}
                >
                  <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></ap-checkbox>
                  <span>${p.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length===0?r.html`<div class="no-results">No options found</div>`:u.map(p=>{const g=a.includes(p.api_value),m=!g&&f;return r.html`
                    <div
                      class="option-item ${m?"disabled":""}"
                      @click=${()=>!m&&this._onSelectOneToggle(t,p.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=F(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],o=t.possible_values||[],n=s.operator||is[0].value,c=(this._selectSearches[e]||"").toLowerCase(),d=c.length>0,h=a.length>0||i,u=c?o.filter(p=>p.label.toLowerCase().includes(c)):o,f=a.length>=Tt;return r.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search options"
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${d?r.html`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:r.nothing}
        </div>

        ${d?r.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >Clear all</button>
              </div>
            `:r.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Operator</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${is}
                  .value=${n}
                  @ap-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?r.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">Selected</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >Clear all</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>{const g=o.find(m=>m.api_value===p);return r.html`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button class="chip-remove" @click=${()=>this._onMultiSelectToggle(t,p)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:r.nothing}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">All options</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${Ne.map(p=>{var g;return r.html`
                <div
                  class="option-item"
                  @click=${()=>this._onEmptyOption(t,p.value)}
                >
                  <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></ap-checkbox>
                  <span>${p.label}</span>
                </div>
              `})}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${u.length===0?r.html`<div class="no-results">No options found</div>`:u.map(p=>{const g=a.includes(p.api_value),m=!g&&f;return r.html`
                    <div
                      class="option-item ${m?"disabled":""}"
                      @click=${()=>!m&&this._onMultiSelectToggle(t,p.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=F(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],o=this._tagInputs[e]||"",n=s.operator||ye[0].value,c=a.length>0||i,d=this._tagSuggestions[e]||[],h=this._tagLoading[e]||!1,u=o.trim().length>0,f=a.length>=Tt;return r.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search tags"
            .value=${o}
            @input=${p=>this._onTagInput(t,e,p)}
            @keydown=${p=>this._onTagKeydown(t,p)}
          />
          ${u?r.html`
                <button class="search-clear" @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:r.nothing}
        </div>

        ${u?r.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!c&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >Clear all</button>
              </div>
            `:r.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Condition</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!c&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >Clear all</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${ye}
                  .value=${n}
                  ?disabled=${i}
                  @ap-change=${p=>this._onTagOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?r.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">Selected</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >Clear all</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>r.html`
                            <div class="chip">
                              <span class="chip-label">${p}</span>
                              <button class="chip-remove" @click=${()=>this._removeTag(t,p)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:r.nothing}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">All options</span>
                <div class="options-list short">
                  ${Ne.map(p=>{var g;return r.html`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(t,p.value)}
                      >
                        <ap-checkbox ?checked=${((g=s.values)==null?void 0:g[0])===p.value}></ap-checkbox>
                        <span>${p.label}</span>
                      </div>
                    `})}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${u?r.html`
              <div class="filter-section">
                <div class="options-list">
                  ${h?r.html`<div class="option-item disabled"><span>Loading...</span></div>`:d.length>0?d.map(p=>{const g=a.includes(p),m=!g&&f;return r.html`
                              <div
                                class="option-item ${m?"disabled":""}"
                                @click=${()=>!m&&(g?this._removeTag(t,p):this._selectTagSuggestion(t,p))}
                              >
                                <ap-checkbox ?checked=${g}></ap-checkbox>
                                <span>${p}</span>
                              </div>
                            `}):r.html`<div class="option-item disabled"><span>No results</span></div>`}
                </div>
              </div>
            `:r.nothing}
      </div>
    `}_renderDateFilter(t){var u,f;const e=F(t),s=this._datePresets[e]||"",i=this._getApplied(e),o=this._isSpecialValue(i.values)?((u=i.values)==null?void 0:u[0])||"":s,n=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],c=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",d=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",h=["before","after","between"].includes(o);return r.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!o&&!((f=i.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${n}
            .value=${o==="empty"||o==="non-empty"?o:""}
            @ap-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            clearable
            columns="2"
            .options=${vs}
            .value=${o!=="empty"&&o!=="non-empty"?o:""}
            @ap-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></ap-radio-group>
        </div>

        ${h?r.html`
              <div class="filter-section">
                <div class="grid-2">
                  ${o==="before"?r.html`
                        <div>
                          <span class="input-label">End date</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${d}
                            @change=${p=>this._onDateInput(t,"to",p)}
                          />
                        </div>
                      `:o==="after"?r.html`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${c}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                        `:r.html`
                          <div>
                            <span class="input-label">Start date</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${c}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                          <div>
                            <span class="input-label">End date</span>
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
            `:r.nothing}
      </div>
    `}_renderGeoFilter(t){var u,f;const e=F(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=this._getContentMode(e);let o="",n="";if(!i&&((u=s.values)!=null&&u[0])){const p=s.values[0],[g,m]=p.split("..");o=g||"",n=m||""}const c=o.length>0,d=o.split(",").map(p=>p.trim()),h=!c||d.length===2&&d.every(p=>!isNaN(Number(p))&&p!=="");return r.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((f=s.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Content</span>
          <ap-radio-group
            clearable
            .options=${os}
            .value=${a}
            @ap-change=${p=>this._onContentModeChange(t,p.detail.value)}
          ></ap-radio-group>
        </div>

        ${a===ze?r.html`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">Location</span>
                    <input
                      class="filter-input"
                      type="text"
                      placeholder="Latitude, longitude"
                      .value=${o}
                      @change=${p=>this._onGeoLocationInput(t,p)}
                    />
                    ${c&&!h?r.html`<div class="error-text">Enter coordinates as "latitude, longitude"</div>`:r.nothing}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">Max radius (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${n}
                      @change=${p=>this._onGeoRadiusInput(t,p)}
                    />
                  </div>
                </div>
              </div>
            `:r.nothing}
      </div>
    `}_renderAttachmentFilter(t){var i,a;const e=this._getApplied(F(t)),s=((i=e.values)==null?void 0:i[0])||"";return r.html`
      <div class="filter-content" style="position: relative;">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >Clear all</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${Ne}
            .value=${s}
            @ap-change=${o=>this._onEmptyOption(t,o.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(t){const e=F(t),s=this._getApplied(e),i=s.values||[],a=s.operator||S.IS;return r.html`
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
            .options=${ye}
            .value=${a}
            @ap-change=${o=>this._emitFilterChange(t,o.detail.value,i)}
          ></ap-radio-group>
          <input
            class="filter-input"
            type="text"
            placeholder="Search faces"
            .value=${i.join(", ")}
            @change=${o=>{const c=o.target.value.split(",").map(d=>d.trim()).filter(Boolean);this._emitFilterChange(t,a,c)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===w.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return r.nothing}}_renderFieldSection(t){const e=this._getField(t);if(!e)return r.nothing;const s=this._collapsedFields.has(t);return r.html`
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
            <ap-icon name=${It[e.type]||"file-text"} .size=${14} style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"></ap-icon>
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
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,o)=>o.length===0?r.nothing:r.html`
        <div class="field-group-label">${a}</div>
        ${o.map(n=>{const c=F(n),d=this.visibleFields.includes(c),h=!!this.appliedMetadata[c]||!!this.appliedFilters[c],u=this.pinnedFields.includes(c),f=!d&&this._atFieldLimit;return r.html`
            <div
              class="field-item ${h?"has-filter":""} ${f?"disabled":""}"
              @click=${()=>!f&&this._emitFieldSelect(n)}
            >
              <ap-icon name=${It[n.type]||"file-text"} .size=${14} style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"></ap-icon>
              <span class="field-item-label">${n.label}</span>
              <button
                class="field-item-pin ${u?"pinned":""}"
                @click=${p=>{p.stopPropagation(),this._emitPin(c,!u)}}
                title=${u?"Unpin field":"Pin field"}
              >
                <ap-icon name="pin" .size=${12}></ap-icon>
              </button>
              ${h?r.html`<ap-icon name="check" .size=${14}></ap-icon>`:r.nothing}
            </div>
          `})}
      `;return r.html`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            placeholder="Search fields"
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?r.html`<div class="empty-msg">No fields found</div>`:r.html`${[...s.entries()].map(([a,o])=>i(a,o))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return t?this._renderFieldControl(t):r.html`<div class="empty-msg">Field not found</div>`}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return r.html`
      ${this._showFieldSelection||!t?this._renderFieldSelection():r.nothing}

      ${t?r.html`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?r.html`
                  <button
                    class="add-field-btn"
                    style="margin-top: 8px"
                    @click=${this._openFieldSelection}
                  >
                    <ap-icon name="filter" .size=${14}></ap-icon>
                    Add field
                  </button>
                `:r.nothing}
          `:r.nothing}
    `}};I.styles=[Y,Ce,r.css`
    /* ── Field selection panel ─────────────────────────────── */

    .add-field-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px dashed var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      width: 100%;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: all 150ms;
    }

    .add-field-btn:hover {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-selection {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      background: var(--ap-background, oklch(1 0 0));
      margin-bottom: 12px;
    }

    .field-selection-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .field-selection-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .field-selection-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
    }

    .field-selection-close:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .field-search {
      width: 100%;
      height: 34px;
      padding: 0 20px 0 32px;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-card, oklch(1 0 0));
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .field-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .field-list {
      padding: 12px 0;
    }

    .field-group-label {
      padding: 6px 12px 4px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px 6px 24px;
      cursor: pointer;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 100ms;
    }

    .field-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .field-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .field-item.selected {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .limit-note {
      padding: 8px 16px 8px 24px;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    .limit-note.at-limit {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
    }

    .empty-msg {
      padding: 16px 16px 16px 24px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      text-align: center;
    }

    /* ── Per-field filter sections ─────────────────────────── */

    .field-filters {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .field-section {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
    }

    .field-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      cursor: pointer;
      user-select: none;
    }

    .field-header-left {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 2px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      transition: all 100ms;
    }

    .icon-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .icon-btn.remove:hover {
      color: var(--ap-destructive, oklch(0.577 0.215 27.325));
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
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      transition: background 150ms;
    }

    .option-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }

    .field-item-pin.pinned {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .field-item.has-filter {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
  `];P([l.property({type:Array})],I.prototype,"fields",2);P([l.property({type:Object})],I.prototype,"appliedFilters",2);P([l.property({type:Array})],I.prototype,"visibleFields",2);P([l.property()],I.prototype,"mode",2);P([l.property()],I.prototype,"activeFieldKey",2);P([l.property({type:Array})],I.prototype,"pinnedFields",2);P([l.property({type:Object})],I.prototype,"appliedMetadata",2);P([l.property({attribute:!1})],I.prototype,"apiClient",2);P([l.state()],I.prototype,"_showFieldSelection",2);P([l.state()],I.prototype,"_fieldSearch",2);P([l.state()],I.prototype,"_collapsedFields",2);P([l.state()],I.prototype,"_tagInputs",2);P([l.state()],I.prototype,"_tagSuggestions",2);P([l.state()],I.prototype,"_tagLoading",2);P([l.state()],I.prototype,"_datePresets",2);P([l.state()],I.prototype,"_dateFroms",2);P([l.state()],I.prototype,"_dateTos",2);P([l.state()],I.prototype,"_specificModeFields",2);P([l.state()],I.prototype,"_selectSearches",2);I=P([l.customElement("ap-filter-metadata")],I);var Ko=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var a=i>1?void 0:i?Qo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Ko(e,s,a),a};let le=class extends r.LitElement{constructor(){super(...arguments),this.selectedStatus=[],this.statusOperator=":=",this.approverValue="",this.approverOperator="~",this.requesterValue="",this.requesterOperator="~",this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo=""}get _hasAnySelection(){return this.selectedStatus.length>0||!!this.approverValue||!!this.requesterValue||!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo}get _statusHasEmptyValue(){return this.selectedStatus.includes(re)||this.selectedStatus.includes(ne)}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===re||t===ne)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(G.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(G.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(G.STATUS,[],this.statusOperator)}_handleApproverInput(t){const e=t.target.value;this._emitChange(G.APPROVER,e?[e]:[],this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(G.APPROVER,this.approverValue?[this.approverValue]:[],e)}_clearApprover(){this._emitChange(G.APPROVER,[],this.approverOperator)}_handleRequesterInput(t){const e=t.target.value;this._emitChange(G.REQUESTOR,e?[e]:[],this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(G.REQUESTOR,this.requesterValue?[this.requesterValue]:[],e)}_clearRequester(){this._emitChange(G.REQUESTOR,[],this.requesterOperator)}_handleDueDatePreset(t){const e=t.detail.value,s=this.dueDatePreset===e?"":e;this._emitChange(G.DUE_DATE,s?[s]:[],":")}_handleDueDateFrom(t){const e=t.target.value;this._emitDateChange(e,this.dueDateTo)}_handleDueDateTo(t){const e=t.target.value;this._emitDateChange(this.dueDateFrom,e)}_clearDueDate(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:G.DUE_DATE,values:[],operator:":"},bubbles:!0,composed:!0}))}_emitDateChange(t,e){const s=[];t&&s.push(t),e&&s.push(e),this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:G.DUE_DATE,values:s,operator:t&&e?"..":t?">=":"<="},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_renderStatusSection(){const t=this.selectedStatus.length>0;return r.html`
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
          .options=${wa}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${Ne.map(e=>r.html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${e.label}</ap-checkbox>
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${$a.map(e=>r.html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span style="display:inline-flex;align-items:center;gap:6px">
                  <ap-icon name=${e.icon} .size=${16} style="color:${e.iconColor}"></ap-icon>
                  ${e.label}
                </span>
              </ap-checkbox>
            `)}
        </div>
      </div>
    `}_renderApproverSection(){const t=!!this.approverValue;return r.html`
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
          .options=${Qs}
          .value=${this.approverOperator}
          @ap-change=${this._handleApproverOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter approver name"
          .value=${this.approverValue}
          @input=${this._handleApproverInput}
        />
      </div>
    `}_renderRequesterSection(){const t=!!this.requesterValue;return r.html`
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
          .options=${Qs}
          .value=${this.requesterOperator}
          @ap-change=${this._handleRequesterOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter requester name"
          .value=${this.requesterValue}
          @input=${this._handleRequesterInput}
        />
      </div>
    `}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return r.html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearDueDate}
        >Clear all</button>

        <span class="section-label">Due date</span>

        <!-- Empty / Not empty radio buttons -->
        <ap-radio-group
          clearable
          .options=${Ne}
          .value=${this.dueDatePreset===re||this.dueDatePreset===ne?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          clearable
          columns="2"
          .options=${_a}
          .value=${this.dueDatePreset!==re&&this.dueDatePreset!==ne?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?r.html`
            <div class="grid-2 mt-12">
              ${this.dueDatePreset!=="before"?r.html`
                  <div class="date-input-col">
                    <span class="input-label">Start date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateFrom}
                      @change=${this._handleDueDateFrom}
                    />
                  </div>
                `:r.nothing}
              ${this.dueDatePreset!=="after"&&this.dueDatePreset!=="specific"?r.html`
                  <div class="date-input-col">
                    <span class="input-label">End date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateTo}
                      @change=${this._handleDueDateTo}
                    />
                  </div>
                `:r.nothing}
            </div>
          `:r.nothing}
      </div>
    `}render(){return r.html`
      <div class="filter-content">
        ${this._renderStatusSection()}
        <div class="separator"></div>
        ${this._renderApproverSection()}
        <div class="separator"></div>
        ${this._renderRequesterSection()}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};le.styles=[Y,Ce,r.css`
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
    }
    .condition-label {
      font-weight: 500;
      margin-bottom: 8px;
    }
    .mt-12 {
      margin-top: 12px;
    }
  `];me([l.property({type:Array})],le.prototype,"selectedStatus",2);me([l.property()],le.prototype,"statusOperator",2);me([l.property()],le.prototype,"approverValue",2);me([l.property()],le.prototype,"approverOperator",2);me([l.property()],le.prototype,"requesterValue",2);me([l.property()],le.prototype,"requesterOperator",2);me([l.property()],le.prototype,"dueDatePreset",2);me([l.property()],le.prototype,"dueDateFrom",2);me([l.property()],le.prototype,"dueDateTo",2);le=me([l.customElement("ap-filter-approval")],le);var Yo=Object.defineProperty,Wo=Object.getOwnPropertyDescriptor,be=(t,e,s,i)=>{for(var a=i>1?void 0:i?Wo(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Yo(e,s,a),a};const Xo=300;function Zo(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let ce=class extends r.LitElement{constructor(){super(...arguments),this.selected=[],this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=Zo(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:b.PRODUCT_REF,values:e,operator:S.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},Xo)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.request("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!=="");if(t.length>0){const e=new Set(this.selected),s=[...this.selected,...t.filter(i=>!e.has(i))];this._emit(s)}this._closeAddList()}_renderProductItem(t){const e=this.selected.includes(t);return r.html`
      <div
        class="product-item"
        @click=${()=>this._toggle(t)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `}render(){const t=this.selected.length===0;return r.html`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="product-search"
            type="text"
            placeholder="Search product references"
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?r.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:r.nothing}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?r.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  style="position: static"
                  @click=${this._clearAll}
                >Clear all</button>
              </div>
            `:r.nothing}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?r.html`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>r.html`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:r.nothing}

        <!-- Search results -->
        ${this._isSearching?r.html`
              <div class="filter-section">
                <span class="section-label">Product references</span>
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):r.nothing}
                  ${this._products.map(({ref:e})=>this._renderProductItem(e))}
                </div>
              </div>
            `:r.nothing}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?r.nothing:r.html`
              <div class="placeholder">
                ${t?r.html`<ap-icon name="box" .size=${40} style="color: var(--ap-border, oklch(92.86% 0.009 247.92)); margin-bottom: 4px;"></ap-icon>`:r.nothing}
                <div class="placeholder-title">Find product reference</div>
                <div class="placeholder-text">By using the search or pressing the button below to import the product references list.</div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <ap-icon name="plus" .size=${14}></ap-icon>
                  Add list
                </button>
              </div>
            `}

        <!-- Loading skeleton -->
        ${this._isLoading?r.html`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:r.nothing}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?r.html`<div class="no-results">No results found</div>`:r.nothing}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?r.html`
            <div class="dialog-overlay" @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}>
              <div class="dialog">
                <div class="dialog-header">Add products references list</div>
                <div class="dialog-body">
                  <div class="info-alert" style="margin-top: 0;">
                    <ap-icon name="info" .size=${14}></ap-icon>
                    <span>Use "*" to select all references starting with your text.</span>
                  </div>
                  <label class="input-label" style="margin-bottom: 0; font-weight: 400; color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));">Product references</label>
                  <textarea
                    class="dialog-textarea"
                    placeholder="Enter product references separated by new lines"
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>Cancel</button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>Continue</button>
                </div>
              </div>
            </div>
          `:r.nothing}
    `}};ce.styles=[Y,Ce,r.css`
    .product-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .product-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .product-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .filter-header .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .product-search {
      width: 100%;
      padding: 8px 32px 8px 32px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .product-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .placeholder-text {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .add-list-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      padding: 6px 14px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      background: none;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      transition: background 150ms;
    }

    .add-list-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
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
      background: var(--ap-card, oklch(1 0 0));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      width: 420px;
      max-width: 90vw;
      padding: 0;
    }

    .dialog-header {
      padding: 16px 20px;
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      resize: vertical;
      outline: none;
    }

    .dialog-textarea:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .dialog-textarea::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .dialog-footer {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 20px;
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .dialog-btn {
      padding: 8px 16px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      cursor: pointer;
      transition: background 150ms;
    }

    .dialog-btn-cancel {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .dialog-btn-cancel:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .dialog-btn-primary {
      border: none;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
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
      border-radius: var(--ap-radius-sm, 6px);
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .skeleton-item { animation: none; }
    }

    .wildcard-tooltip {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: 4px;
    }
  `];be([l.property({type:Array})],ce.prototype,"selected",2);be([l.property({attribute:!1})],ce.prototype,"apiClient",2);be([l.query(".product-search")],ce.prototype,"_searchInput",2);be([l.state()],ce.prototype,"_search",2);be([l.state()],ce.prototype,"_debouncedSearch",2);be([l.state()],ce.prototype,"_products",2);be([l.state()],ce.prototype,"_isLoading",2);be([l.state()],ce.prototype,"_showAddList",2);be([l.state()],ce.prototype,"_addListText",2);ce=be([l.customElement("ap-filter-product-ref")],ce);var Jo=Object.defineProperty,er=Object.getOwnPropertyDescriptor,L=(t,e,s,i)=>{for(var a=i>1?void 0:i?er(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Jo(e,s,a),a};let T=class extends r.LitElement{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=ms,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(o=>{var n;return o instanceof HTMLElement&&o.classList.contains("chip")&&((n=o.closest)==null?void 0:n.call(o,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(a=>a instanceof HTMLElement?a.classList.contains("popover-anchor")||a.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector)&&e.some(a=>a instanceof HTMLElement&&(a.classList.contains("dropdown-menu")||a.classList.contains("filter-dropdown")||a.classList.contains("metadata-selector-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,a=e.offsetWidth;this._externalLeft+a>i-8&&(e.style.left=`${Math.max(8,i-a-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}if(!e&&!this._isFilterActive(t)){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${Gt[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=ds.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var s,i,a;const e=this.filters.applied;switch(t){case"type":{const o=e.type;return r.html`<ap-filter-type
          .selected=${(o==null?void 0:o.values)||[]}
          .fileTypes=${this.fileTypes}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const o=e.tags;return r.html`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const o=e.labels;return r.html`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const o=e.color;return r.html`<ap-filter-color
          .values=${(o==null?void 0:o.values)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const o=e.date;return r.html`<ap-filter-date
          .filterKey=${"date"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const o=e.asset_expiration;return r.html`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const o=e.size,n=((s=o==null?void 0:o.values)==null?void 0:s[0])||"",[c,d]=n.split(".."),h=c?parseFloat(c)/1e6:0,u=d?parseFloat(d)/1e6:0;return r.html`<ap-filter-size
          .min=${h}
          .max=${u}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const o=e.image,n=o&&"resolution"in o?o:null;return r.html`<ap-filter-image
          .selectedResolution=${(n==null?void 0:n.resolution)||[]}
          .selectedOrientation=${(n==null?void 0:n.orientation)||[]}
          .selectedFaces=${(n==null?void 0:n.faces)||[]}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const o=e.approval_status,n=e.task_approver,c=e.task_requester,d=e.task_duedate;return r.html`<ap-filter-approval
          .selectedStatus=${(o==null?void 0:o.values)||[]}
          .statusOperator=${(o==null?void 0:o.operator)||":"}
          .approverValue=${((i=n==null?void 0:n.values)==null?void 0:i[0])||""}
          .approverOperator=${(n==null?void 0:n.operator)||":"}
          .requesterValue=${((a=c==null?void 0:c.values)==null?void 0:a[0])||""}
          .requesterOperator=${(c==null?void 0:c.operator)||":"}
          .dueDatePreset=${(d==null?void 0:d.preset)||""}
          .dueDateFrom=${(d==null?void 0:d.from)||""}
          .dueDateTo=${(d==null?void 0:d.to)||""}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?r.html`<ap-filter-metadata
            mode="field"
            .activeFieldKey=${this._openMetadataField}
            .fields=${this.metadataFields}
            .appliedMetadata=${this.filters.metadata.applied}
            .visibleFields=${this.filters.metadata.visible}
            .pinnedFields=${this.filters.metadata.pinned}
            .apiClient=${this.apiClient}
            @metadata-filter-change=${this._handleMetadataFilterChange}
            @metadata-field-toggle=${this._handleMetadataFieldToggle}
          ></ap-filter-metadata>`:r.html`<ap-filter-metadata
          mode="selector"
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          .pinnedFields=${this.filters.metadata.pinned}
          .apiClient=${this.apiClient}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case"product_ref":{const o=e.product_ref;return r.html`<ap-filter-product-ref
          .selected=${(o==null?void 0:o.values)||[]}
          .apiClient=${this.apiClient}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return r.nothing}}_renderFilterButton(t){const e=t.key==="metadata",s=e?Object.keys(this.filters.metadata.applied).length>0:this._isFilterActive(t.key),i=this.pinnedFilters.includes(t.key),a=r.html`
      <button
        class="filter-btn ${s?"active":""} ${i?"pinned":""}"
        @click=${()=>e?this._toggleMetadataSelector():this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${t.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${t.label}
        </span>
        ${e?r.html`<span class="submenu-chevron"><ap-icon name="chevron-right" .size=${14}></ap-icon></span>`:r.html`
              <span
                class="pin-btn ${i?"pinned":""}"
                title=${i?"Unpin filter":"Pin filter"}
                @click=${o=>this._togglePin(t.key,o)}
              >
                <ap-icon name="pin" .size=${14}></ap-icon>
              </span>
            `}
      </button>
    `;return e?r.html`
      <div class="filter-btn-wrapper">
        ${a}
        ${this._showMetadataSelector?r.html`
          <div class="metadata-selector-overlay">
            <ap-filter-metadata
              mode="selector"
              .fields=${this.metadataFields}
              .appliedMetadata=${this.filters.metadata.applied}
              .visibleFields=${this.filters.metadata.visible}
              .pinnedFields=${this.filters.metadata.pinned}
              @metadata-field-select=${this._handleMetadataSelectorFieldSelect}
              @metadata-field-toggle=${this._handleMetadataFieldToggle}
              @metadata-pin=${this._handleMetadataPin}
            ></ap-filter-metadata>
          </div>
        `:r.nothing}
      </div>
    `:a}render(){const t=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return r.html`
      <div class="toolbar-row">
        ${this.isLoading?r.html`<span class="count-skeleton"></span>`:r.html`<span class="count">${this.countLabel||[this.totalFolderCount>0?`${this.totalFolderCount.toLocaleString()} folder${this.totalFolderCount!==1?"s":""}`:"",this.totalCount>0||this.totalFolderCount===0?`${this.totalCount.toLocaleString()} asset${this.totalCount!==1?"s":""}`:""].filter(Boolean).join(", ")}</span>`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters?r.html`
          <div class="filter-dropdown">
            <button class="add-btn ${this._showDropdown?"open":""}" @click=${this._toggleDropdown}>
              <ap-icon name="filter" .size=${16}></ap-icon>
              Filters
              ${t>0?r.html`<span class="filter-count">${t}</span>`:r.html`<ap-icon name="chevron-down" .size=${16}></ap-icon>`}
            </button>
            ${this._showDropdown?r.html`
              <div class="dropdown-menu">
                ${ds.filter(e=>!this.forcedFilterKeys.includes(e.key)).map(e=>this._renderFilterButton(e))}
              </div>
            `:r.nothing}
          </div>
          `:r.nothing}
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
          ${this.showUpload?r.html`
            <button class="upload-btn" @click=${this._handleUploadClick}>
              <ap-icon name="upload" .size=${16}></ap-icon>
              Upload
            </button>
          `:r.nothing}
        </div>
      </div>
      ${this._openFilter?r.html`
        <div class="popover-anchor ${this._externalTrigger?"external":""}" style=${this._externalTrigger&&this._externalTop!=null?`top: ${this._externalTop+4}px`:""}>
          ${this._externalTrigger?r.nothing:r.html`
            <div class="anchor-tab">
              ${this._openFilter==="metadata"&&this._openMetadataField?r.html`
                    <button class="anchor-back" @click=${e=>{e.stopPropagation(),this._openMetadataField=null}} title="Back to fields">
                      <ap-icon name="chevron-left" .size=${14}></ap-icon>
                    </button>
                    ${this._getMetadataFieldLabel(this._openMetadataField)}
                  `:r.html`
                    <ap-icon name=${this._getFilterIcon(this._openFilter)} .size=${16}></ap-icon>
                    ${et[this._openFilter]||this._openFilter}
                  `}
              <button class="anchor-close" @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}} title="Close">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            </div>
          `}
          <div class="popover-panel" style=${this._externalTrigger&&this._externalLeft!=null?`left: ${this._externalLeft}px`:""}>
            ${this._renderFilterContent(this._openFilter)}
          </div>
        </div>
      `:r.nothing}
    `}};T.styles=r.css`
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
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
    }
    .count-skeleton {
      display: inline-block;
      width: 80px;
      height: 14px;
      border-radius: 4px;
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
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
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .add-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
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
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
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
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
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
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    /* Filter button in dropdown */
    .filter-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.9375rem;
      cursor: pointer;
      transition: all 150ms;
      min-height: 40px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn.active {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .filter-btn.active:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn.pinned {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .filter-btn.pinned:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.12));
    }
    .filter-btn-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }
    .filter-btn.active .filter-btn-icon,
    .filter-btn.pinned .filter-btn-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .filter-btn-label {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }
    .filter-btn-label ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .pin-btn.pinned {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .submenu-chevron {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: auto;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
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
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
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
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
      cursor: pointer;
      white-space: nowrap;
      transition: opacity 150ms;
    }
    .upload-btn:hover {
      opacity: 0.9;
    }
    .upload-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
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
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-bottom: 1px solid var(--ap-card, oklch(1 0 0));
      border-radius: 8px 8px 0 0;
      background: var(--ap-card, oklch(1 0 0));
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-close:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .anchor-back {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 150ms;
    }
    .anchor-back:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
  `;L([l.property({type:Number})],T.prototype,"totalCount",2);L([l.property({type:Number})],T.prototype,"totalFolderCount",2);L([l.property({type:Boolean})],T.prototype,"isLoading",2);L([l.property({type:Boolean})],T.prototype,"showUpload",2);L([l.property({type:Boolean})],T.prototype,"showFilters",2);L([l.property()],T.prototype,"countLabel",2);L([l.property()],T.prototype,"sortBy",2);L([l.property()],T.prototype,"sortDirection",2);L([l.property({type:Array})],T.prototype,"sortOptions",2);L([l.property({type:Object})],T.prototype,"filters",2);L([l.property({type:Array})],T.prototype,"labels",2);L([l.property({type:Array})],T.prototype,"tags",2);L([l.property({type:Array})],T.prototype,"fileTypes",2);L([l.property({type:Array})],T.prototype,"metadataFields",2);L([l.property({type:Array})],T.prototype,"pinnedFilters",2);L([l.property({type:Array})],T.prototype,"forcedFilterKeys",2);L([l.property({attribute:!1})],T.prototype,"apiClient",2);L([l.query("ap-dropdown")],T.prototype,"_sortDropdown",2);L([l.state()],T.prototype,"_showDropdown",2);L([l.state()],T.prototype,"_showMetadataSelector",2);L([l.state()],T.prototype,"_openFilter",2);L([l.state()],T.prototype,"_openMetadataField",2);L([l.state()],T.prototype,"_externalTrigger",2);L([l.state()],T.prototype,"_externalLeft",2);L([l.state()],T.prototype,"_externalTop",2);T=L([l.customElement("ap-content-toolbar")],T);var tr=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,se=(t,e,s,i)=>{for(var a=i>1?void 0:i?sr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&tr(e,s,a),a};let q=class extends r.LitElement{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null}_mapTypeLabel(t){var i;const e=(i=Rt.find(a=>a.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),a=s?parseFloat(s):null,o=i?parseFloat(i):null,n=c=>c>=1e3?`${(c/1e3).toFixed(c%1e3===0?0:1)} GB`:`${c} MB`;return a!==null&&o!==null?`${n(a)} – ${n(o)}`:a!==null?`> ${n(a)}`:o!==null?`< ${n(o)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===b.SIZE)return this._getSizeSummary(s);if(e===b.COLOR){const a=s.values.map(o=>o.split(" ")[0]).filter(Boolean);return a.length===0?"":a.length===1?a[0]:`${a[0]} +${a.length-1}`}const i=e===b.TYPE?a=>this._mapTypeLabel(a):e===b.TAGS?a=>{var o;return((o=this.tags.find(n=>n.sid===a))==null?void 0:o.label)||a}:e===b.LABELS?a=>{var o;return((o=this.labels.find(n=>n.sid===a))==null?void 0:o.name)||a}:a=>a;return s.values.length===1?i(s.values[0]):`${i(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDateSummary(t){var n,c;const e=((n=di.find(d=>d.value===t.field))==null?void 0:n.label)||t.field,s=[...vs,...pi],i=t.preset?((c=s.find(d=>d.value===t.preset))==null?void 0:c.label)||t.preset:"",a=d=>{try{return d.split("T")[0]}catch{return d}};let o="";switch(t.kind){case"preset":o=i;break;case"before":o=t.to?`Before ${a(t.to)}`:i;break;case"after":o=t.from?`After ${a(t.from)}`:i;break;case"between":t.from&&t.to?o=`${a(t.from)} – ${a(t.to)}`:t.from?o=`After ${a(t.from)}`:t.to&&(o=`Before ${a(t.to)}`);break;case"specific":o=t.from?a(t.from):"";break;default:o=i}return o?`${e}: ${o}`:""}_getFilterIcon(t){var e;return((e=ds.find(s=>s.key===t))==null?void 0:e.icon)||"filter"}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return s&&It[s.type]||"file-text"}_stripMetadataPrefix(t){for(const e of ri)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const s=this._getFilterSummary(e,t),i=e.type==="date";return r.html`
      <span class="chip forced">
        ${(i||t===b.TYPE||t===b.SIZE)&&s?r.html`<span class="chip-label">${s}</span>`:r.html`
              <span class="chip-label">${et[t]||t}</span>
              ${s?r.html`<span class="chip-summary">${s}</span>`:r.nothing}
            `}
        <span class="chip-lock">
          <ap-icon name="lock" .size=${12}></ap-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){if(!e)return r.html`
        <span class="chip pinned-empty ${t===this.activeFilter?"active":""}" @click=${a=>this._openFilter(t,a)}>
          <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
          <span class="chip-label">${et[t]||t}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;const s=this._getFilterSummary(e,t),i=e.type==="date";return r.html`
      <span class="chip ${t===this.activeFilter?"active":""}" @click=${a=>this._openFilter(t,a)}>
        ${(i||t===b.TYPE||t===b.SIZE)&&s?r.html`
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
              <span class="chip-label">${s}</span>`:r.html`
              <span class="chip-label">${et[t]||t}</span>
              ${s?r.html`<span class="chip-summary">${s}</span>`:r.nothing}
            `}
        <button class="chip-remove" @click=${a=>{a.stopPropagation(),this._removeFilter(t)}} title="Remove filter">
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const o=this._getMetadataLabel(t),n=this._getMetadataIcon(t);return r.html`
        <span class="chip pinned-empty ${t===this.activeMetadataField?"active":""}" @click=${c=>this._openMetadataFilter(t,c)}>
          <span class="chip-icon"><ap-icon name=${n} .size=${16}></ap-icon></span>
          <span class="chip-label">${o}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),a=this._getMetadataIcon(t);return r.html`
      <span class="chip ${t===this.activeMetadataField?"active":""}" @click=${o=>this._openMetadataFilter(t,o)}>
        <span class="chip-icon"><ap-icon name=${a} .size=${16}></ap-icon></span>
        <span class="chip-label">${i}</span>
        ${s?r.html`<span class="chip-summary">${s}</span>`:r.nothing}
        <button class="chip-remove" @click=${o=>{o.stopPropagation(),this._removeMetadataFilter(t)}} title="Remove filter">
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}render(){const t=ps(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(g=>!e.has(g)),i=Object.keys(this.appliedMetadata),a=new Set(this.pinnedFilters),o=new Set(this.pinnedMetadataFields),n=this.pinnedFilters.filter(g=>!e.has(g)),c=s.filter(g=>!a.has(g)),d=i.filter(g=>!o.has(g)),h=this.pendingFilter&&!a.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),u=this.pendingMetadataField&&!o.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),f=s.length+i.length>0;return e.size+n.length+this.pinnedMetadataFields.length+c.length+d.length+(h?1:0)+(u?1:0)===0?r.nothing:r.html`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(g=>this._renderForcedChip(g,t[g]))}
          ${n.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${this.pinnedMetadataFields.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${c.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${h?r.html`
            <span class="chip pinned-empty active pending" @click=${g=>this._openFilter(this.pendingFilter,g)}>
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></ap-icon></span>
              <span class="chip-label">${et[this.pendingFilter]||this.pendingFilter}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:r.nothing}
          ${d.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${u?r.html`
            <span class="chip pinned-empty active pending" @click=${g=>this._openMetadataFilter(this.pendingMetadataField,g)}>
              <span class="chip-icon"><ap-icon name=${this._getMetadataIcon(this.pendingMetadataField)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this._getMetadataLabel(this.pendingMetadataField)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:r.nothing}
          ${f?r.html`<button class="clear-all" @click=${this._clearAll}>Clear filters</button>`:r.nothing}
        </div>
      </div>
    `}};q.styles=r.css`
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
      border: 1px solid var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
      border-radius: 6px;
      font-size: 0.8125rem;
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .chip:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.15));
    }
    .chip.active {
      background: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
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
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      white-space: nowrap;
      transition: all 150ms;
    }
    .clear-all:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .chip.forced {
      cursor: default;
      opacity: 0.85;
    }
    .chip.forced:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
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
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
      font-weight: 400;
    }
    .chip .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip.pinned-empty .chip-icon {
      display: flex;
      align-items: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .chip.pinned-empty:hover .chip-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .chip.pinned-empty.active {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2));
    }
    .chip.pinned-empty.active .chip-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .chip-chevron {
      display: flex;
      align-items: center;
      opacity: 0.6;
    }
  `;se([l.property({type:Object})],q.prototype,"appliedFilters",2);se([l.property({type:Object})],q.prototype,"appliedMetadata",2);se([l.property({type:Object})],q.prototype,"forcedFilters",2);se([l.property({type:Array})],q.prototype,"metadataFields",2);se([l.property({type:Array})],q.prototype,"pinnedFilters",2);se([l.property({type:Array})],q.prototype,"pinnedMetadataFields",2);se([l.property({type:Array})],q.prototype,"tags",2);se([l.property({type:Array})],q.prototype,"labels",2);se([l.property()],q.prototype,"activeFilter",2);se([l.property()],q.prototype,"activeMetadataField",2);se([l.property()],q.prototype,"pendingFilter",2);se([l.property()],q.prototype,"pendingMetadataField",2);q=se([l.customElement("ap-filters-bar")],q);var ir=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,_e=(t,e,s,i)=>{for(var a=i>1?void 0:i?ar(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&ir(e,s,a),a};const or=6;let de=class extends r.LitElement{constructor(){super(...arguments),this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return r.html`
      <div class="grid" role="list" aria-label="Assets" style="--ap-grid-min-col: ${t}">
        ${this.folders.map((e,s)=>r.html`
            <ap-folder-card
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              .index=${s}
              data-folder-uuid=${e.uuid}
              @folder-open=${i=>{i.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:i.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${i=>{i.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:i.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-card>
          `)}
        ${this.assets.map((e,s)=>{const i=s>=this._prevCount?Math.min(s-this._prevCount,20):Math.min(s,20);return r.html`
              <ap-asset-card
                .asset=${e}
                .index=${this.folderSelectable?this.folders.length+s:s}
                ?selected=${this.selectedIds.includes(e.uuid)}
                .multiSelect=${this.multiSelect}
                style="--ap-stagger-index: ${i}"
                data-asset-uuid=${e.uuid}
                @asset-select=${a=>this.dispatchEvent(new CustomEvent("asset-select",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${a=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${a=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:a.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `})}
        ${this.isLoading?Array.from({length:or},()=>r.html`<div class="ghost-card">
                <div class="ghost-thumb"></div>
                <div class="ghost-info">
                  <div class="ghost-line ghost-name"></div>
                  <div class="ghost-line ghost-meta"></div>
                </div>
              </div>`):r.nothing}
      </div>
    `}};de.styles=r.css`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .ghost-card {
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
    }
    .ghost-thumb {
      aspect-ratio: 6/4;
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
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
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
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
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-thumb, .ghost-line { animation: none; }
    }
  `;_e([l.property({type:Array})],de.prototype,"assets",2);_e([l.property({type:Array})],de.prototype,"folders",2);_e([l.property({type:Object})],de.prototype,"folderPreviews",2);_e([l.property({type:Array})],de.prototype,"selectedIds",2);_e([l.property({type:Array})],de.prototype,"selectedFolderIds",2);_e([l.property({type:Boolean})],de.prototype,"isLoading",2);_e([l.property({type:Boolean})],de.prototype,"multiSelect",2);_e([l.property({type:Boolean})],de.prototype,"folderSelectable",2);_e([l.property({type:String})],de.prototype,"gridSize",2);de=_e([l.customElement("ap-grid-view")],de);var rr=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,pe=(t,e,s,i)=>{for(var a=i>1?void 0:i?nr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&rr(e,s,a),a};const lr=5;let Q=class extends r.LitElement{constructor(){super(...arguments),this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];return t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(a=>t.has(a.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(a=>s.has(a.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return r.html`
      <div class="list-header" style="grid-template-columns: ${this._getGridColumns(this.multiSelect)}" role="row" aria-label="Column headers">
        ${this.multiSelect?r.html`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div class="header-check-box ${s?"checked":e>0?"indeterminate":""}">
                <svg class="header-check-icon check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg class="header-check-icon dash" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>`:r.nothing}
        <span></span>
        <span>Name</span>
        <span>Type</span>
        ${this._compactLevel<2?r.html`<span>Size</span>`:r.nothing}
        ${this._compactLevel<1?r.html`<span>Date</span>`:r.nothing}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map((i,a)=>r.html`
            <ap-folder-row
              .folder=${i}
              .previews=${this.folderPreviews[i.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              .index=${a}
              data-folder-uuid=${i.uuid}
              @folder-open=${o=>{o.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:o.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${o=>{o.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:o.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((i,a)=>r.html`
            <ap-asset-row
              .asset=${i}
              .index=${this.folderSelectable?this.folders.length+a:a}
              ?selected=${this.selectedIds.includes(i.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${i.uuid}
              @asset-select=${o=>this.dispatchEvent(new CustomEvent("asset-select",{detail:o.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${o=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:o.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${o=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:o.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:lr},(i,a)=>{const o=["70%","55%","80%","45%","65%"];return r.html`
                <div class="ghost-row" style="grid-template-columns: ${this._getGridColumns(this.multiSelect)}">
                  ${this.multiSelect?r.html`<div class="ghost-el ghost-check"></div>`:r.nothing}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" style="width: ${o[a]}"></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?r.html`<div class="ghost-el ghost-size"></div>`:r.nothing}
                  ${this._compactLevel<1?r.html`<div class="ghost-el ghost-date"></div>`:r.nothing}
                  <div></div>
                </div>
              `}):r.nothing}
      </div>
    `}};Q.styles=r.css`
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .header-check-box.checked,
    .header-check-box.indeterminate {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .header-check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
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
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .ghost-el {
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
    }
    .ghost-check { width: 22px; height: 22px; }
    .ghost-thumb { width: 40px; height: 40px; }
    .ghost-name { height: 14px; border-radius: 4px; }
    .ghost-type { height: 12px; width: 40px; }
    .ghost-size { height: 12px; width: 48px; }
    .ghost-date { height: 12px; width: 72px; }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-el { animation: none; }
    }
  `;pe([l.property({type:Array})],Q.prototype,"assets",2);pe([l.property({type:Array})],Q.prototype,"folders",2);pe([l.property({type:Array})],Q.prototype,"selectedIds",2);pe([l.property({type:Array})],Q.prototype,"selectedFolderIds",2);pe([l.property({type:Boolean})],Q.prototype,"isLoading",2);pe([l.property({type:Boolean})],Q.prototype,"multiSelect",2);pe([l.property({type:Boolean})],Q.prototype,"folderSelectable",2);pe([l.property({type:Number})],Q.prototype,"totalCount",2);pe([l.property({type:Boolean})],Q.prototype,"isSelectingAll",2);pe([l.property({type:Object})],Q.prototype,"folderPreviews",2);pe([l.state()],Q.prototype,"_compactLevel",2);Q=pe([l.customElement("ap-list-view")],Q);function xs(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function jt(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function _i(t,e){return!t||!e?"":`${t} x ${e}`}var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,Ct=(t,e,s,i)=>{for(var a=i>1?void 0:i?dr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&cr(e,s,a),a};let He=class extends r.LitElement{constructor(){super(...arguments),this.index=0,this.selected=!1,this.multiSelect=!0}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),a=o=>String(o).padStart(2,"0");return e>0?`${e}:${a(s)}:${a(i)}`:`${a(s)}:${a(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var d,h,u,f,p;const t=this.asset;if(!t)return r.html``;const s=tt(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",a=si(t.extension||"");let o="";s?o=ai(t):i?o=gs(t):a&&(o=zt(t));const n=$t(t.extension||""),c=us(t.extension||"");return r.html`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${c&&o?"chess":""}">
          ${o?r.html`<img
                src=${o}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${c?"transparent-asset":""}"
                @error=${g=>{const m=g.target,_=st();m.src!==n&&m.src!==_?(m.src=n,m.classList.add("icon-fallback")):m.src!==_&&(m.src=_)}}
              />`:r.html`<img
                src=${n}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${g=>{const m=g.target,_=st();m.src!==_&&(m.src=_)}}
              />`}
          ${s&&(((h=t.info)==null?void 0:h.video_duration)??((u=t.info)==null?void 0:u.duration))!=null?r.html`<span class="duration">${this._formatDuration(t.info.video_duration??t.info.duration)}</span>`:r.nothing}
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
          ${this.multiSelect?r.html`
            <div class="check">
              <div class="check-box">
                <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
            </div>
          `:r.nothing}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="meta">${(f=t.extension)==null?void 0:f.toUpperCase()}${(()=>{var y,C,x,M;const g=((y=t.info)==null?void 0:y.img_w)||((C=t.info)==null?void 0:C.video_w),m=((x=t.info)==null?void 0:x.img_h)||((M=t.info)==null?void 0:M.video_h),_=_i(g,m);return _?` · ${_}`:""})()} · ${xs(((p=t.size)==null?void 0:p.bytes)||0)}</div>
        </div>
      </div>
    `}};He.styles=r.css`
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
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 2px;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
    }
    :host([selected]) .card {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    .thumbnail {
      aspect-ratio: 6/4;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      background: var(--ap-card, rgba(255, 255, 255, 0.9));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border: 1px solid var(--ap-border, transparent);
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
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .info {
      padding: 10px 12px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      :host { animation: none; }
      .overlay { transition: none; }
    }
  `;Ct([l.property({type:Object})],He.prototype,"asset",2);Ct([l.property({type:Number})],He.prototype,"index",2);Ct([l.property({type:Boolean,reflect:!0})],He.prototype,"selected",2);Ct([l.property({type:Boolean})],He.prototype,"multiSelect",2);He=Ct([l.customElement("ap-asset-card")],He);var pr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,dt=(t,e,s,i)=>{for(var a=i>1?void 0:i?hr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&pr(e,s,a),a};let Oe=class extends r.LitElement{constructor(){super(...arguments),this.index=0,this.selected=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var d,h,u;const t=this.asset;if(!t)return r.html``;const s=tt(t.type)==="video",i=((d=t.extension)==null?void 0:d.toLowerCase())==="pdf",a=si(t.extension||"");let o="";s?o=ai(t):i?o=gs(t):a&&(o=zt(t));const n=$t(t.extension||""),c=us(t.extension||"");return r.html`
      <div class="row" style="grid-template-columns: ${this._getGridColumns()}" @click=${this._handleSelect}>
        ${this.multiSelect?r.html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:r.nothing}
        <div class="thumb ${c&&o?"chess":""}">
          ${o?r.html`<img
                src=${o}
                alt=${t.name}
                class="${c?"transparent-asset":""}"
                loading="lazy"
                @error=${f=>{const p=f.target,g=st();p.src!==n&&p.src!==g?(p.src=n,p.classList.add("icon-fallback")):p.src!==g&&(p.src=g)}}
              />`:r.html`<img
                src=${n}
                alt=${t.name}
                class="icon-fallback"
                @error=${f=>{const p=f.target,g=st();p.src!==g&&(p.src=g)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(h=t.extension)==null?void 0:h.toUpperCase()}</div>
        ${this.compactLevel<2?r.html`<div class="desc">${xs(((u=t.size)==null?void 0:u.bytes)||0)}</div>`:r.nothing}
        ${this.compactLevel<1?r.html`<div class="date">${jt(t.created_at||"")}</div>`:r.nothing}
        <div class="actions">
          <button class="icon-btn select-btn" @click=${this._handleQuickSelect} aria-label="Select" title="Select">
            <ap-icon name="select" .size=${16}></ap-icon>
          </button>
          <button class="icon-btn" @click=${this._handlePreview} aria-label="Preview" title="Preview">
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};Oe.styles=r.css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc, .date {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn.select-btn {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;dt([l.property({type:Object})],Oe.prototype,"asset",2);dt([l.property({type:Number})],Oe.prototype,"index",2);dt([l.property({type:Boolean,reflect:!0})],Oe.prototype,"selected",2);dt([l.property({type:Boolean})],Oe.prototype,"multiSelect",2);dt([l.property({type:Number})],Oe.prototype,"compactLevel",2);Oe=dt([l.customElement("ap-asset-row")],Oe);var ur=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,Ye=(t,e,s,i)=>{for(var a=i>1?void 0:i?gr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&ur(e,s,a),a};let ke=class extends r.LitElement{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return oi(t,"200")}_renderPreviewImg(t){const e=ii(t.file_type),s=this._getPreviewUrl(t),i=$t(Ht(t.file_type)),a=st();return r.html`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${o=>{const n=o.target,c=n.parentElement;n.src!==i&&n.src!==a?(n.src=i,n.classList.add("icon-mode"),c==null||c.classList.add("icon-bg")):n.src!==a&&(n.src=a,n.classList.add("icon-mode"),c==null||c.classList.add("icon-bg"))}}
        @load=${o=>{const n=o.target,c=n.parentElement;n.src.includes("assets/file-types")&&(n.classList.add("icon-mode"),c==null||c.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return r.html`<div class="empty-preview"><ap-icon name="inbox" .size=${64}></ap-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?r.html`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:r.html`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?r.html`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:r.nothing}
        </div>
      </div>
    `}render(){var a,o;const t=this.folder;if(!t)return r.html``;const e=((a=t.count)==null?void 0:a.files_direct)??0,i=(((o=t.count)==null?void 0:o.files_recursive)??0)-e;return r.html`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                rx="3" ry="3" />
        </svg>
        ${this.selectable&&this.multiSelect?r.html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:r.nothing}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${t.name}>${t.name}</div>
            <div class="counts">
              <span>${e} asset${e!==1?"s":""}</span>
              ${i>0?r.html`<span>${i} sub-asset${i!==1?"s":""}</span>`:r.nothing}
            </div>
          </div>
        </div>
      </div>
    `}};ke.styles=[Y,r.css`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      transition: filter 150ms;
    }
    :host([selected]) .card {
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)));
    }
    /* Folder shape SVG fills card */
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
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
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
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
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
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
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-radius: 4px;
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .info {
      flex-shrink: 0;
      padding-top: 8px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counts {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `];Ye([l.property({type:Object})],ke.prototype,"folder",2);Ye([l.property({type:Array})],ke.prototype,"previews",2);Ye([l.property({type:Boolean,reflect:!0})],ke.prototype,"selected",2);Ye([l.property({type:Boolean})],ke.prototype,"selectable",2);Ye([l.property({type:Boolean})],ke.prototype,"multiSelect",2);Ye([l.property({type:Number})],ke.prototype,"index",2);ke=Ye([l.customElement("ap-folder-card")],ke);var fr=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Ie=(t,e,s,i)=>{for(var a=i>1?void 0:i?vr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&fr(e,s,a),a};let ve=class extends r.LitElement{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=ii(t.file_type),s=oi(t,"80"),i=$t(Ht(t.file_type)),a=st();return r.html`<div class="preview-slot ${e?"icon-bg":""}"><img
      class="preview-img ${e?"icon-mode":""}"
      src="${s||i}"
      alt=""
      loading="lazy"
      @error=${o=>{const n=o.target,c=n.parentElement;n.src!==i&&n.src!==a?(n.src=i,n.classList.add("icon-mode"),c==null||c.classList.add("icon-bg")):n.src!==a&&(n.src=a,n.classList.add("icon-mode"),c==null||c.classList.add("icon-bg"))}}
    /></div>`}_renderThumb(){const t=r.html`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
              />
      </svg>
    `,e=this.previews.slice(0,2);return r.html`
      ${t}
      <div class="preview-area">
        ${e.length>0?e.map(s=>this._renderPreviewImg(s)):r.html`<div class="empty-preview">
              <ap-icon name="inbox" .size=${14}></ap-icon>
            </div>`}
      </div>
    `}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?r.html`
      <div class="row" style="grid-template-columns: ${this._getGridColumns()}" @click=${this._handleClick}>
        ${this.multiSelect?this.selectable?r.html`
              <div class="check">
                <div class="check-box">
                  <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>`:r.html`<div></div>`:r.nothing}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?r.html`<div class="meta">${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items</div>`:r.nothing}
        ${this.compactLevel<1?r.html`<div class="meta">${jt(t.modified_at||t.updated_at||"")}</div>`:r.nothing}
        <div></div>
      </div>
    `:r.html``}};ve.styles=r.css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
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
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 150ms;
      background: var(--ap-background, oklch(1 0 0));
    }
    .check:hover .check-box {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    :host([selected]) .check-box {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    :host([selected]) .check-icon {
      display: block;
    }
  `;Ie([l.property({type:Object})],ve.prototype,"folder",2);Ie([l.property({type:Array})],ve.prototype,"previews",2);Ie([l.property({type:Boolean,reflect:!0})],ve.prototype,"selected",2);Ie([l.property({type:Boolean})],ve.prototype,"selectable",2);Ie([l.property({type:Boolean})],ve.prototype,"multiSelect",2);Ie([l.property({type:Number})],ve.prototype,"index",2);Ie([l.property({type:Number})],ve.prototype,"compactLevel",2);ve=Ie([l.customElement("ap-folder-row")],ve);var mr=Object.defineProperty,br=Object.getOwnPropertyDescriptor,ws=(t,e,s,i)=>{for(var a=i>1?void 0:i?br(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&mr(e,s,a),a};let ft=class extends r.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return r.html``;const e=t.assets_count??0,s=t.color||"#94a3b8";return r.html`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper" style="background: color-mix(in srgb, ${s} 10%, transparent)">
          <ap-icon name="tag" .size=${18} style="color: ${s}"></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};ft.styles=[Y,r.css`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: box-shadow 150ms, border-color 150ms, background 150ms;
      background: var(--ap-card, oklch(1 0 0));
      overflow: hidden;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-top: 2px;
    }
  `];ws([l.property({type:Object})],ft.prototype,"label",2);ws([l.property({type:Number})],ft.prototype,"index",2);ft=ws([l.customElement("ap-label-card")],ft);var _r=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,$s=(t,e,s,i)=>{for(var a=i>1?void 0:i?yr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&_r(e,s,a),a};let vt=class extends r.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return r.html``;const e=t.assets_count??0,s=t.color||"#94a3b8";return r.html`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper" style="background: color-mix(in srgb, ${s} 10%, transparent)">
          <ap-icon name="tag" .size=${16} style="color: ${s}"></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};vt.styles=r.css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      text-align: right;
    }
  `;$s([l.property({type:Object})],vt.prototype,"label",2);$s([l.property({type:Number})],vt.prototype,"index",2);vt=$s([l.customElement("ap-label-row")],vt);var xr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,ks=(t,e,s,i)=>{for(var a=i>1?void 0:i?wr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&xr(e,s,a),a};let mt=class extends r.LitElement{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?r.html`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="layout-grid" .size=${22}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.title}>${t.title}</div>
        </div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:r.html``}};mt.styles=[Y,r.css`
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
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
        var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--ap-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      flex-shrink: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `];ks([l.property({type:Object})],mt.prototype,"collection",2);ks([l.property({type:Number})],mt.prototype,"index",2);mt=ks([l.customElement("ap-collection-card")],mt);var $r=Object.defineProperty,kr=Object.getOwnPropertyDescriptor,Ss=(t,e,s,i)=>{for(var a=i>1?void 0:i?kr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&$r(e,s,a),a};let bt=class extends r.LitElement{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?r.html`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="layout-grid" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${t.title}>${t.title}</div>
        <div class="date">${this._formatDate(t.updated_at)}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:r.html``}};bt.styles=r.css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
        var(--ap-primary-20, oklch(0.578 0.198 268.129 / 0.2)),
        var(--ap-accent, oklch(0.578 0.198 268.129 / 0.07))
      );
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .date {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      white-space: nowrap;
      text-align: right;
    }
    .chevron {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;Ss([l.property({type:Object})],bt.prototype,"collection",2);Ss([l.property({type:Number})],bt.prototype,"index",2);bt=Ss([l.customElement("ap-collection-row")],bt);var Sr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Cs=(t,e,s,i)=>{for(var a=i>1?void 0:i?Cr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Sr(e,s,a),a};let _t=class extends r.LitElement{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?r.html`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${22}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
        </div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:r.html``}};_t.styles=[Y,r.css`
    @keyframes ap-card-in {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    :host {
      display: block;
      animation: ap-card-in 300ms ease-out both;
      animation-delay: calc(var(--ap-stagger-index, 0) * 50ms);
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 14px;
      transition: box-shadow 150ms, border-color 150ms;
      background: var(--ap-card, oklch(1 0 0));
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .card:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      flex-shrink: 0;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `];Cs([l.property({type:Object})],_t.prototype,"folder",2);Cs([l.property({type:Number})],_t.prototype,"index",2);_t=Cs([l.customElement("ap-collection-folder-card")],_t);var Fr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Fs=(t,e,s,i)=>{for(var a=i>1?void 0:i?Er(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Fr(e,s,a),a};let yt=class extends r.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?r.html`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:r.html``}};yt.styles=r.css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 24px;
      gap: 12px;
      padding: 10px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .row:hover .chevron {
      opacity: 1;
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .chevron {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      justify-self: end;
      opacity: 0.5;
      transition: opacity 150ms;
    }
  `;Fs([l.property({type:Object})],yt.prototype,"folder",2);Fs([l.property({type:Number})],yt.prototype,"index",2);yt=Fs([l.customElement("ap-collection-folder-row")],yt);var Ar=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Ft=(t,e,s,i)=>{for(var a=i>1?void 0:i?Tr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Ar(e,s,a),a};let Ge=class extends r.LitElement{constructor(){super(...arguments),this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const n=this.gridSize==="large"?"280px":"220px";return r.html`
        <div class="grid-skeleton" style="--ap-grid-min-col: ${n}">
          ${Array.from({length:18},()=>r.html`<div class="card-skel">
            <div class="skeleton card-skel-thumb"></div>
            <div class="card-skel-info">
              <div class="skeleton card-skel-name"></div>
              <div class="skeleton card-skel-meta"></div>
            </div>
          </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=r.html`
      <div class="row-skel" style="grid-template-columns: ${e}">
        ${this.multiSelect?r.html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z" />
          </svg>
        </div>
        <div class="skeleton row-skel-name" style="width: 55%"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,i=n=>r.html`
      <div class="row-skel" style="grid-template-columns: ${e}">
        ${this.multiSelect?r.html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" style="width: ${n}"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,a=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],o=12-this.folderCount;return r.html`
      <div class="list-header" style="grid-template-columns: ${e}">
        ${this.multiSelect?r.html`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>Name</span>
        <span>Type</span>
        <span>Size</span>
        <span>Date</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>s)}
      ${Array.from({length:o},(n,c)=>i(a[c%a.length]))}
    `}};Ge.styles=r.css`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .skeleton {
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
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
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .card-skel {
      border-radius: var(--ap-radius, 8px);
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
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      fill: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .list-header {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      background: var(--ap-background, oklch(1 0 0));
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton { animation: none; }
    }
  `;Ft([l.property({reflect:!0})],Ge.prototype,"variant",2);Ft([l.property({type:String})],Ge.prototype,"gridSize",2);Ft([l.property({type:Boolean})],Ge.prototype,"multiSelect",2);Ft([l.property({type:Number})],Ge.prototype,"folderCount",2);Ge=Ft([l.customElement("ap-skeleton")],Ge);var Lr=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,U=(t,e,s,i)=>{for(var a=i>1?void 0:i?Or(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Lr(e,s,a),a};let z=class extends r.LitElement{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=tt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,a;const e=Vt(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:o}=await Promise.resolve().then(()=>require("./hls.light-C3NKRmfw.cjs"));if(!o.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const n=new o;this._hls=n,n.loadSource(e),n.attachMedia(s),n.on(o.Events.ERROR,(c,d)=>{var h;d.fatal&&(this._destroyHls(),s.src=((h=t.url)==null?void 0:h.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,a,o,n;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((a=(i=this.asset)==null?void 0:i.url)!=null&&a.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(n=(o=this.previewArea)==null?void 0:o.requestFullscreen)==null||n.call(o)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=tt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var i,a;const e=(i=t.url)==null?void 0:i.cdn;if(!e)return zt(t)||"";if(((a=t.extension)==null?void 0:a.toLowerCase())==="svg")return e;const s=Be(e,this.containerToken);return xe(s,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"})}_getBlurDimensions(t){var n,c;const e=(n=t.info)==null?void 0:n.img_w,s=(c=t.info)==null?void 0:c.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,a=window.innerHeight,o=Math.min(i/e,a/s,1);return{width:`${Math.round(e*o)}px`,height:`${Math.round(s*o)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(a=>!a.label||i.has(a.sid)?!1:(i.add(a.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:b.TAGS,values:[t],operator:S.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:b.LABELS,values:[t],operator:S.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return r.nothing;const s=this._openSections.has("file-info");return r.html`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${s?"true":"false"}
          @click=${()=>this._toggleSection("file-info")}
        >
          <span>File info</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${s?"open":""}">
          ${e.map(i=>r.html`
            <div class="meta-row">
              <span class="meta-label" title=${i.label}>${i.label}</span>
              <span class="meta-value" title=${i.value}>${i.value}</span>
            </div>
          `)}
          ${this._renderTagsRow(t)}
          ${this._renderLabelsRow(t)}
        </div>
      </div>
    `}_renderAccordion(t,e,s){if(s.length===0)return r.nothing;const i=this._openSections.has(t);return r.html`
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
          ${s.map(a=>r.html`
            <div class="meta-row">
              <span class="meta-label" title=${a.label}>${a.label}</span>
              <span class="meta-value" title=${a.value}>${a.value}</span>
            </div>
          `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,a,o,n,c;const e=[];return e.push({label:"File name",value:t.name}),t.extension&&e.push({label:"Type",value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:"Size",value:xs(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:"Dimensions",value:_i(t.info.img_w,t.info.img_h)}),(a=t.info)!=null&&a.video_w&&e.push({label:"Video resolution",value:`${t.info.video_w} x ${t.info.video_h}`}),(((o=t.info)==null?void 0:o.video_duration)??((n=t.info)==null?void 0:n.duration))!=null&&e.push({label:"Duration",value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(c=t.info)!=null&&c.color_space&&e.push({label:"Color space",value:t.info.color_space}),t.created_at&&e.push({label:"Created",value:jt(t.created_at)}),t.modified_at&&e.push({label:"Modified",value:jt(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(a=>a.internal_unique_value===t||a.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const a=t[i];if(a!=null&&a!=="")return this._resolveFieldValue(a,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(a=>this._resolveSlug(String(a),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var o,n,c,d;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const h=t;for(const u of this.metadataFields){const f=h[u.key]??((n=(o=t.info)==null?void 0:o.metadata)==null?void 0:n[u.key])??((c=t.meta)==null?void 0:c[u.key]),p=this._resolveFieldValue(f,u);if(!p)continue;i.add(u.key),u.slug&&i.add(u.slug);const g=p.length>50;e.push({label:u.label,value:p,wrap:g})}}if(t.meta)for(const[h,u]of Object.entries(t.meta)){if(i.has(h)||u==null||u==="")continue;const f=s.get(h);if(f){const p=this._resolveFieldValue(u,f);if(!p)continue;i.add(h);const g=p.length>50;e.push({label:f.label,value:p,wrap:g})}else{const p=typeof u=="object"?JSON.stringify(u):String(u);if(!p||p==="{}"||p==="[]")continue;i.add(h);const g=h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),m=p.length>50;e.push({label:g,value:p,wrap:m})}}const a=(d=t.info)==null?void 0:d.metadata;if(a&&typeof a=="object")for(const[h,u]of Object.entries(a)){if(i.has(h)||u==null||u==="")continue;const f=s.get(h);if(f){const p=this._resolveFieldValue(u,f);if(!p)continue;i.add(h);const g=p.length>50;e.push({label:f.label,value:p,wrap:g})}else{const p=typeof u=="object"?JSON.stringify(u):String(u);if(!p||p==="{}"||p==="[]")continue;i.add(h);const g=h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),m=p.length>50;e.push({label:g,value:p,wrap:m})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?r.nothing:r.html`
      <div class="meta-row" style="flex-direction:column;gap:6px">
        <span class="meta-label">Labels</span>
        <div class="tags-list">
          ${e.map(s=>r.html`
            <ap-badge class="tag-link" style="--ap-muted: ${s.color}22; --ap-muted-foreground: ${s.color}" @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}>
              <span style="display:inline-flex;align-items:center;gap:4px">
                <ap-icon name="tag" .size=${12} style="color:${s.color}"></ap-icon>
                ${s.name}
              </span>
            </ap-badge>
          `)}
        </div>
      </div>
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?r.nothing:r.html`
      <div class="meta-row">
        <span class="meta-label">Tags</span>
        <div class="tags-list">
          ${e.map(s=>r.html`
            <ap-badge class="tag-link" @click=${()=>this._applyTagFilter(s.sid)}>${s.label}</ap-badge>
          `)}
        </div>
      </div>
    `}render(){var $,k,E,A,fe,ie,O,X;const t=this.asset;if(!t)return r.nothing;const e=tt(t.type),s=e==="image",i=e==="video",a=e==="audio",o=(($=t.extension)==null?void 0:$.toLowerCase())==="pdf",n=$t(t.extension||""),c=us(t.extension||""),d=((k=t.extension)==null?void 0:k.toLowerCase())==="svg",h=zt(t),u=s?d?((E=t.url)==null?void 0:E.cdn)||"":h||Be(((A=t.url)==null?void 0:A.cdn)||"",this.containerToken):"",f=s?this._getFullscreenImageUrl(t):"",p=s&&!d?this._getBlurDimensions(t):null,g=i&&((fe=t.url)==null?void 0:fe.cdn)||"",m=i&&(((ie=t.info)==null?void 0:ie.video_thumbnail)||((O=t.info)==null?void 0:O.preview))||"",_=o&&!s?gs(t):"",y=this._getCurrentIndex(),C=y>0&&this._findNavTarget(y,-1)>=0,x=y>=0&&this._findNavTarget(y,1)>=0,M=this.assets.length>1;return r.html`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!s&&!i&&!a&&!o} aria-label="Fullscreen" title="Full screen">
              <ap-icon name="fullscreen" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?"selected":""}" @click=${this._select} aria-label="Select" title="Select the asset">
              <ap-icon name="select" .size=${16}></ap-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${s&&c?"chess":""}">
          ${M?r.html`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!C} aria-label="Previous">
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!x} aria-label="Next">
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          `:r.nothing}
          ${this._isFullscreen?r.html`
            <button class="fs-close-btn" @click=${this._exitFullscreen} aria-label="Exit fullscreen">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          `:r.nothing}
          ${this._previewLoading?r.html`<div class="preview-loading"><div class="spinner"></div></div>`:r.nothing}
          ${s?r.html`
            <img
              src=${u}
              alt=${t.name}
              @load=${Z=>{Z.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
              @error=${Z=>{const D=Z.target;this._previewLoading=!1,D.src!==n&&(D.src=n,D.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              ${d?r.nothing:r.html`
                <img
                  class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                  src=${u}
                  alt=""
                  style="width:${p.width};height:${p.height}"
                />
              `}
              <img
                class="fs-full ${d||this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?f:""}
                alt=${t.name}
                style=${d?"width:100vw;height:100vh":""}
                @load=${this._onFsImageLoad}
              />
            </div>
          `:r.nothing}
          ${i?r.html`<video src=${g} poster=${m||r.nothing} controls controlsList="nofullscreen" @loadeddata=${()=>{this._previewLoading=!1}} @error=${()=>{this._previewLoading=!1}}></video>`:r.nothing}
          ${a?r.html`<audio src=${((X=t.url)==null?void 0:X.cdn)||""} controls></audio>`:r.nothing}
          ${o&&!s?r.html`
            <img
              src=${_||n}
              alt=${t.name}
              class=${_?"":"icon-fallback"}
              @error=${Z=>{const D=Z.target;D.src!==n&&(D.src=n,D.classList.add("icon-fallback"))}}
            />
          `:r.nothing}
          ${!s&&!i&&!a&&!o?r.html`<img src=${n} alt=${t.name} class="icon-fallback" />`:r.nothing}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?r.html`
          ${this._renderAccordion("metadata","Metadata",this._getAllMetadataRows(t))}
        `:r.nothing}
      </div>
    `}};z.styles=r.css`
    :host {
      display: block;
    }
    .panel {
      width: 420px;
      min-width: 420px;
      max-width: 100%;
      height: 100%;
      background: var(--ap-background, oklch(1 0 0));
      border-left: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
      gap: 12px;
      height: 50px;
      min-height: 50px;
      padding: 0 16px;
    }
    .panel-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
      margin: 0 2px;
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover:not(:disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .icon-btn.selected {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: #fff;
    }
    .icon-btn.selected:hover {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: #fff;
      opacity: 0.9;
    }
    .preview-area {
      position: relative;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      z-index: 3;
    }
    .preview-loading .spinner {
      width: 24px;
      height: 24px;
      border: 2.5px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-top-color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      background: rgba(0,0,0,0.5);
      color: #fff;
      cursor: pointer;
      z-index: 3;
    }
    .fs-close-btn:hover {
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
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      z-index: 2;
    }
    .nav-btn:hover:not(:disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      gap: 8px;
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
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      text-align: left;
    }
    .accordion-trigger:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .accordion-chevron {
      transition: transform 200ms;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      gap: 12px;
      padding: 6px 0;
    }
    .meta-label {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta-value {
      font-size: 0.8125rem;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      min-width: 0;
      user-select: text;
      word-break: break-word;
    }
    @media (prefers-reduced-motion: reduce) {
      .panel { animation: none; }
      .accordion-chevron { transition: none; }
    }
  `;U([l.property({type:Object})],z.prototype,"asset",2);U([l.property({type:Array})],z.prototype,"assets",2);U([l.property({type:Array})],z.prototype,"selectedIds",2);U([l.property()],z.prototype,"containerToken",2);U([l.property({type:Boolean})],z.prototype,"showMetadata",2);U([l.property({type:Array})],z.prototype,"metadataFields",2);U([l.property({type:Array})],z.prototype,"labels",2);U([l.property({type:Object})],z.prototype,"regionalFilters",2);U([l.property({type:Boolean})],z.prototype,"multiSelect",2);U([l.query(".preview-area")],z.prototype,"previewArea",2);U([l.query("video")],z.prototype,"_videoEl",2);U([l.state()],z.prototype,"_isFullscreen",2);U([l.state()],z.prototype,"_fsImageLoaded",2);U([l.state()],z.prototype,"_previewLoading",2);U([l.state()],z.prototype,"_openSections",2);z=U([l.customElement("ap-preview-panel")],z);var Mr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Es=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ir(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Mr(e,s,a),a};const Pr={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let xt=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=Pr[this.name];if(!t)return r.nothing;const e=typeof t=="string"?r.svg`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:a}=s;return i==="circle"?r.svg`<circle cx=${a.cx} cy=${a.cy} r=${a.r} fill=${a.fill??"none"}></circle>`:i==="rect"?r.svg`<rect width=${a.width} height=${a.height} x=${a.x} y=${a.y} rx=${a.rx??"0"} ry=${a.ry??"0"}></rect>`:r.svg`<path d=${a.d}></path>`});return r.html`
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
    `}};xt.styles=[r.css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];Es([l.property()],xt.prototype,"name",2);Es([l.property({type:Number})],xt.prototype,"size",2);xt=Es([l.customElement("ap-icon")],xt);var Dr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,Fe=(t,e,s,i)=>{for(var a=i>1?void 0:i?zr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Dr(e,s,a),a};let ue=class extends r.LitElement{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const t=this.selectedAssets.length,e=this.selectedFolders.length;if(e===0)return`${t} selected`;if(t===0)return`${e} folder${e!==1?"s":""} selected`;const s=`${e} folder${e!==1?"s":""}`,i=`${t} asset${t!==1?"s":""}`;return`${s} and ${i} selected`}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?r.nothing:r.html`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?r.html`
          <span class="divider"></span>
          <span class="select-label">Select:</span>
          ${this._canSelectMore()?r.html`<button
                class="bar-btn"
                ?disabled=${this.isSelectingAll}
                @click=${this._selectAll}
              ><ap-icon name="check-check" .size=${14}></ap-icon>${this.isSelectingAll?"Selecting...":this.maxSelections&&this.maxSelections<this._scopeTotal?`First ${this.maxSelections}`:this._selectScope==="assets"?"Select all assets":this._selectScope==="folders"?"Select all folders":"Select all"}</button>`:r.nothing}
          <button class="bar-btn" @click=${this._clear}><ap-icon name="close" .size=${14}></ap-icon>Deselect all</button>
          ${this.maxSelections&&this._totalSelected>=this.maxSelections?r.html`<span class="limit-notice">Max ${this.maxSelections} allowed</span>`:r.nothing}
        `:r.nothing}
        <div class="spacer"></div>
        ${this.showTransform?r.html`
          <button class="btn-confirm btn-transform" @click=${this._transform}>Transform</button>
        `:r.nothing}
        <button class="btn-confirm" @click=${this._confirm}>Confirm</button>
      </div>
    `}};ue.styles=r.css`
    :host {
      display: block;
      padding: 0 8px 8px;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: var(--ap-radius-lg, 12px);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .count {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-primary-foreground, oklch(1 0 0));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: oklch(1 0 0 / 0.7);
      white-space: nowrap;
    }
    .bar-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-primary-foreground, oklch(1 0 0));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 14px;
      margin-left: 8px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      white-space: nowrap;
      border-radius: var(--ap-radius-sm, 6px);
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
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: oklch(1 0 0 / 0.7);
      margin-left: 8px;
      white-space: nowrap;
    }
    .spacer {
      flex: 1;
    }
    .btn-confirm {
      padding: 8px 24px;
      border: 1.5px solid var(--ap-primary-foreground, oklch(1 0 0));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: transparent;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .btn-confirm:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .btn-transform {
      margin-right: 8px;
      border-color: oklch(1 0 0 / 0.5);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar { animation: none; }
    }
  `;Fe([l.property({type:Array})],ue.prototype,"selectedAssets",2);Fe([l.property({type:Array})],ue.prototype,"selectedFolders",2);Fe([l.property({type:Number})],ue.prototype,"totalCount",2);Fe([l.property({type:Number})],ue.prototype,"totalFolderCount",2);Fe([l.property({type:Boolean})],ue.prototype,"isSelectingAll",2);Fe([l.property({type:Boolean})],ue.prototype,"multiSelect",2);Fe([l.property({type:Number})],ue.prototype,"maxSelections",2);Fe([l.property({type:Boolean})],ue.prototype,"showTransform",2);ue=Fe([l.customElement("ap-selection-bar")],ue);var Rr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,As=(t,e,s,i)=>{for(var a=i>1?void 0:i?jr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Rr(e,s,a),a};let wt=class extends r.LitElement{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?r.nothing:r.html`
      <div
        class="marquee"
        style="left:${this.rect.x}px;top:${this.rect.y}px;width:${this.rect.width}px;height:${this.rect.height}px"
      ></div>
    `}};wt.styles=r.css`
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
      border: 2px solid var(--ap-primary, oklch(0.578 0.198 268.129));
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
      border-radius: 2px;
    }
  `;As([l.property({type:Boolean})],wt.prototype,"active",2);As([l.property({type:Object})],wt.prototype,"rect",2);wt=As([l.customElement("ap-marquee-overlay")],wt);var Nr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,We=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ur(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Nr(e,s,a),a};let Se=class extends r.LitElement{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(a=>!this.disabled&&!a.disabled);if(e.length===0)return;const s=e.findIndex(a=>a.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return r.html`
      ${this.options.map(t=>r.html`
          <div
            class="option"
            role="radio"
            aria-checked=${t.value===this.value}
            aria-disabled=${this.disabled||t.disabled?"true":r.nothing}
            @click=${()=>this._select(t)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${t.icon?r.html`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:r.nothing}
            <span class="label">${t.label}</span>
          </div>
        `)}
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:e},bubbles:!0,composed:!0}))}};Se.styles=[Y,r.css`
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
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 150ms;
        background: var(--ap-background, oklch(1 0 0));
      }
      .radio .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        transition: background 150ms;
      }
      .option:hover .radio {
        border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .option[aria-checked="true"] .radio {
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-checked="true"] .radio .dot {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .label {
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        user-select: none;
      }
    `];We([l.property()],Se.prototype,"value",2);We([l.property({type:Array})],Se.prototype,"options",2);We([l.property({type:Boolean})],Se.prototype,"disabled",2);We([l.property({type:Boolean})],Se.prototype,"clearable",2);We([l.property({reflect:!0})],Se.prototype,"direction",2);We([l.property({reflect:!0})],Se.prototype,"columns",2);Se=We([l.customElement("ap-radio-group")],Se);var Br=Object.defineProperty,qr=Object.getOwnPropertyDescriptor,yi=(t,e,s,i)=>{for(var a=i>1?void 0:i?qr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Br(e,s,a),a};let Nt=class extends r.LitElement{constructor(){super(...arguments),this.size=24}render(){return r.html`<div class="spinner" style="width:${this.size}px;height:${this.size}px"></div>`}};Nt.styles=[r.css`
      :host {
        display: inline-flex;
      }
      .spinner {
        border: 2px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-top-color: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `];yi([l.property({type:Number})],Nt.prototype,"size",2);Nt=yi([l.customElement("ap-spinner")],Nt);var Vr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Yt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Hr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Vr(e,s,a),a};let ot=class extends r.LitElement{constructor(){super(...arguments),this.folders=[],this.loading=!1,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return r.html`
      <div class="backdrop" @click=${e=>{e.target===e.currentTarget&&this._handleCancel()}}>
        <div class="dialog">
          <div class="title">Add folder contents</div>
          <div class="description">
            You selected ${t} folder${t!==1?"s":""}. How would you like to add the assets?
          </div>
          <div class="options">
            <ap-radio-group
              .value=${this._mode}
              .options=${[{value:"direct",label:"Direct assets only"},{value:"recursive",label:"All assets (including subfolders)"}]}
              @ap-change=${this._handleModeChange}
            ></ap-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>Cancel</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading?r.html`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> Loading...</span>`:"Add assets"}
            </button>
          </div>
        </div>
      </div>
    `}};ot.styles=[Y,r.css`
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
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 28px 32px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 8px;
    }
    .description {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
  `];Yt([l.property({type:Array})],ot.prototype,"folders",2);Yt([l.property({type:Boolean})],ot.prototype,"loading",2);Yt([l.state()],ot.prototype,"_mode",2);ot=Yt([l.customElement("ap-folder-resolve-dialog")],ot);var Gr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,V=(t,e,s,i)=>{for(var a=i>1?void 0:i?Kr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Gr(e,s,a),a};let R=class extends r.LitElement{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="ap-dropdown-menu";return r.html`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${e}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${t!=null&&t.icon?r.html`<ap-icon name=${t.icon} .size=${16}></ap-icon>`:r.nothing}
        ${this.label?r.html`<span class="label">${this.label}${t?": ":""}</span>`:r.nothing}${t?t.label:""}
        ${this.clearable&&t?r.html`<span class="clear-trigger" @click=${this._clear}><ap-icon name="close" .size=${12}></ap-icon></span>`:r.html`<ap-icon name="chevron-down" .size=${14}></ap-icon>`}
      </button>
      ${this._open?r.html`
        <div
          id=${e}
          class="menu ${this._menuPosition} ${this._menuAlign}"
          style="
            ${this._menuPosition==="below"?`top: ${this._menuTop}px`:`bottom: ${this._menuBottom}px`};
            ${this._menuAlign==="align-left"?`left: ${this._menuLeft}px`:`right: ${this._menuRight}px`};
            ${this._menuWidth?`min-width: ${this._menuWidth}px`:""};
          "
          role="listbox"
          @keydown=${this._handleMenuKeydown}
        >
          ${this.options.map((s,i)=>r.html`
              <button
                class="option ${i===this._focusedIndex?"focused":""}"
                role="option"
                aria-selected=${s.value===this.value}
                @click=${()=>this._select(s.value)}
                @mouseenter=${()=>{this._focusedIndex=i}}
              >
                <span class="option-label">
                  ${s.icon?r.html`<ap-icon name=${s.icon} .size=${16}></ap-icon>`:r.nothing}
                  ${s.label}
                </span>
                ${s.value===this.value?r.html`<ap-icon name="check" .size=${14}></ap-icon>`:r.nothing}
              </button>
            `)}
        </div>
      `:r.nothing}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const a=window.innerWidth-t.left;this._menuAlign=a<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,a;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(a=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||a.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};R.styles=[Y,r.css`
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
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: var(--ap-radius-sm, 6px);
        background: var(--ap-background, oklch(1 0 0));
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
      }
      .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      :host([variant="borderless"]) .trigger {
        border-color: transparent;
        background: none;
      }
      :host([variant="borderless"]) .trigger:hover {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .menu {
        position: fixed;
        z-index: 50;
        min-width: 160px;
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
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
        gap: 8px;
        width: 100%;
        padding: 6px 12px;
        justify-content: space-between;
        border: none;
        background: none;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--ap-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover, .option.focused {
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
      }
      .option-label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option[aria-selected="true"] {
        background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-selected="true"] > ap-icon {
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .trigger .label {
        color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      .clear-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0 -4px 0 auto;
        border: none;
        background: none;
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .clear-trigger:hover {
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      }
      .clear-trigger ap-icon {
        color: inherit;
      }
      .trigger ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        margin-left: auto;
      }
      .option ap-icon {
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .option[aria-selected="true"] ap-icon {
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
    `];V([l.property()],R.prototype,"value",2);V([l.property()],R.prototype,"label",2);V([l.property({reflect:!0})],R.prototype,"variant",2);V([l.property({type:Boolean})],R.prototype,"clearable",2);V([l.property({type:Array})],R.prototype,"options",2);V([l.state()],R.prototype,"_open",2);V([l.state()],R.prototype,"_focusedIndex",2);V([l.state()],R.prototype,"_menuPosition",2);V([l.state()],R.prototype,"_menuAlign",2);V([l.state()],R.prototype,"_menuTop",2);V([l.state()],R.prototype,"_menuBottom",2);V([l.state()],R.prototype,"_menuLeft",2);V([l.state()],R.prototype,"_menuRight",2);V([l.state()],R.prototype,"_menuWidth",2);R=V([l.customElement("ap-dropdown")],R);var Qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Ee=(t,e,s,i)=>{for(var a=i>1?void 0:i?Yr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Qr(e,s,a),a};const Wr=["webp","jpeg","png","gif"];function Xr(t){const e=(t??"").toLowerCase();return Wr.includes(e)?e:"jpeg"}let ge=class extends r.LitElement{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>je(i));if(!t)return 1.5;const e=Pt(t),s=Dt(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>je(e));if(this._defaultFormat=Xr(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=Pt(t),s=Dt(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return r.html`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">Export Options</div>
            <button class="close-btn" @click=${this._handleClose} title="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">Format</span>
            <ap-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${ta}
              @ap-change=${this._handleFormatChange}
            ></ap-radio-group>
          </div>

          ${t?r.nothing:r.html`
            <div class="section">
              <span class="section-label">Quality</span>
              <ap-dropdown
                .value=${this._quality}
                .options=${sa}
                @ap-change=${this._handleQualityChange}
              ></ap-dropdown>
            </div>
          `}

          <div class="section">
            <span class="section-label">Size</span>
            ${this.isMultiSelect?r.html`
              <div class="input-group half-width">
                <span class="input-label">Max Size</span>
                <div class="input-wrapper">
                  <input
                    type="number"
                    min="1"
                    .value=${this._width!=null?String(this._width):""}
                    placeholder="Original"
                    @input=${this._handleMaxSizeInput}
                  />
                  <span class="input-suffix">px</span>
                </div>
              </div>
            `:r.html`
              <div class="dimensions-row">
                <div class="input-group">
                  <span class="input-label">Width</span>
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
                  title=${this._lockAspect?"Unlock aspect ratio":"Lock aspect ratio"}
                >
                  <ap-icon name=${this._lockAspect?"lock":"link-2"} .size=${16}></ap-icon>
                </button>
                <div class="input-group">
                  <span class="input-label">Height</span>
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
              ${ia.map(e=>r.html`
                <button
                  class="preset-btn ${this._activePreset===e.value?"active":""}"
                  @click=${()=>this._handlePreset(e)}
                >${e.label}</button>
              `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>Export Original</button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>Apply & Export</button>
          </div>
        </div>
      </div>
    `}};ge.styles=[Y,r.css`
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
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
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
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      transition: color 100ms, background 100ms;
    }
    .close-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .section {
      margin-bottom: 16px;
    }
    .section-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 4px;
      display: block;
    }
    .input-wrapper {
      display: flex;
      align-items: center;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      overflow: hidden;
      background: var(--ap-background, oklch(1 0 0));
    }
    .input-wrapper input {
      flex: 1;
      min-width: 0;
      border: none;
      outline: none;
      padding: 8px 12px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      -moz-appearance: textfield;
    }
    .input-wrapper input::-webkit-inner-spin-button,
    .input-wrapper input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .input-wrapper input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .input-suffix {
      padding: 0 10px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      border-radius: var(--ap-radius-sm, 6px);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
      transition: color 100ms;
    }
    .lock-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .lock-btn.locked {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
      border-radius: var(--ap-radius-sm, 6px);
      transition: color 100ms, background 100ms;
    }
    .preset-btn:hover {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .preset-btn.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms, opacity 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    ap-dropdown {
      display: block;
      width: 100%;
    }
  `];Ee([l.property({type:Array})],ge.prototype,"assets",2);Ee([l.property({type:Boolean})],ge.prototype,"isMultiSelect",2);Ee([l.state()],ge.prototype,"_format",2);Ee([l.state()],ge.prototype,"_quality",2);Ee([l.state()],ge.prototype,"_width",2);Ee([l.state()],ge.prototype,"_height",2);Ee([l.state()],ge.prototype,"_lockAspect",2);Ee([l.state()],ge.prototype,"_activePreset",2);ge=Ee([l.customElement("ap-transformation-dialog")],ge);var Zr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Wt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Jr(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&Zr(e,s,a),a};let rt=class extends r.LitElement{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return r.html`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <svg class="dash" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </div>
      <span class="label" ?hidden=${!this._hasLabel}><slot @slotchange=${this._onSlotChange}></slot></span>
    `}};rt.styles=[r.css`
      :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .box {
        width: 16px;
        height: 16px;
        border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--ap-background, oklch(1 0 0));
      }
      :host(:hover) .box {
        border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      :host([checked]) .box {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .check {
        display: none;
        color: var(--ap-primary-foreground, oklch(1 0 0));
      }
      :host([checked]) .check {
        display: block;
      }
      :host([indeterminate]) .box {
        background: var(--ap-primary, oklch(0.578 0.198 268.129));
        border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
      .dash {
        display: none;
        color: var(--ap-primary-foreground, oklch(1 0 0));
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
        margin-left: var(--ap-checkbox-gap, 8px);
        font-size: var(--ap-font-size-sm, 0.875rem);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        display: inline-flex;
        align-items: center;
      }
      .label[hidden] {
        display: none;
      }
    `];Wt([l.property({type:Boolean,reflect:!0})],rt.prototype,"checked",2);Wt([l.property({type:Boolean,reflect:!0})],rt.prototype,"indeterminate",2);Wt([l.property({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);rt=Wt([l.customElement("ap-checkbox")],rt);var en=Object.defineProperty,tn=Object.getOwnPropertyDescriptor,xi=(t,e,s,i)=>{for(var a=i>1?void 0:i?tn(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&en(e,s,a),a};let Ut=class extends r.LitElement{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}render(){return r.html`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};Ut.styles=[r.css`
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
        background: var(--ap-card, oklch(1 0 0));
        border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--ap-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 8px;
      }
      .content.open {
        display: block;
      }
    `];xi([l.state()],Ut.prototype,"open",2);Ut=xi([l.customElement("ap-popover")],Ut);var sn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,wi=(t,e,s,i)=>{for(var a=i>1?void 0:i?an(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&sn(e,s,a),a};let Bt=class extends r.LitElement{constructor(){super(...arguments),this.variant="default"}render(){return r.html`<span class="badge"><slot></slot></span>`}};Bt.styles=[r.css`
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
        background: var(--ap-muted, oklch(0.974 0.006 239.819));
        color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      :host([variant="primary"]) .badge {
        background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
        color: var(--ap-primary, oklch(0.578 0.198 268.129));
      }
    `];wi([l.property({reflect:!0})],Bt.prototype,"variant",2);Bt=wi([l.customElement("ap-badge")],Bt);var on=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,$i=(t,e,s,i)=>{for(var a=i>1?void 0:i?rn(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=(i?n(e,s,a):n(a))||a);return i&&a&&on(e,s,a),a};let qt=class extends r.LitElement{constructor(){super(...arguments),this.text=""}render(){return r.html`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};qt.styles=[r.css`
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
        background: var(--ap-foreground, oklch(0.37 0.022 248.413));
        color: var(--ap-background, oklch(1 0 0));
        border-radius: 4px;
        pointer-events: none;
        z-index: 100;
      }
      :host(:hover) .tip {
        display: block;
      }
    `];$i([l.property()],qt.prototype,"text",2);qt=$i([l.customElement("ap-tooltip")],qt);var nn=Object.defineProperty,Et=(t,e,s,i)=>{for(var a=void 0,o=t.length-1,n;o>=0;o--)(n=t[o])&&(a=n(e,s,a)||a);return a&&nn(e,s,a),a};const Ts=class Ts extends r.LitElement{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,a;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((a=e.dataTransfer)==null?void 0:a.files)??[]);s.length>0&&this._openUploader(s)},this.store=Oi(),this.storeCtrl=new Mi(this,this.store),this.selectionCtrl=new Pi(this,this.store),this.infiniteScrollCtrl=new Di(this,()=>this._loadMore()),this.marqueeCtrl=new zi(this,this.store)}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){const s={folderSelection:!0,...e};this._initFailed=!1,this._normalizedForcedFilters=ps(s.forcedFilters),this._initPromise=this._doInit(s).catch(()=>{this._initFailed=!0}),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}async _doInit(e){const s=Ya(),i=s.sortBy??e.defaultSortBy??"created_at",a=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&Za(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:a}),this.apiClient=new Ri(e.auth,e.apiBase);try{if(e.auth.mode==="securityTemplate"){const _=await Gi(this.apiClient);this.apiClient.setSassKey(_),this.store.setState({sassKey:_})}const[o,n,c,d,h]=await Promise.allSettled([Ea(this.apiClient),Bi(this.apiClient),Hi(this.apiClient),Ca(this.apiClient),qi(this.apiClient)]),u={};if(o.status==="fulfilled"){const{fields:_,regionalVariantGroups:y,regionalFilters:C,brandColor:x}=o.value;u.metadataFields=_,u.regionalVariantGroups=y,u.regionalFilters=C,x&&(u.brandColor=x)}n.status==="fulfilled"&&(u.labels=n.value.labels||[]),c.status==="fulfilled"&&(u.tags=c.value),h.status==="fulfilled"&&(u.collections=h.value.collections||[]),d.status==="fulfilled"&&(u.fileTypes=d.value);const{pinnedFilters:f,pinnedMetadata:p}=Ga(e.auth.projectToken??null),g=this.store.getState().filters;u.filters={...g,pinned:f,visible:[...f],metadata:{...g.metadata,pinned:p,visible:[...p]}},this.store.setState(u);const m=e.brandColor||u.brandColor||this.store.getState().brandColor;m&&(u.brandColor||this.store.setState({brandColor:m}),ao(this,m))}catch(o){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"init"},bubbles:!0,composed:!0})),o}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=import("@scaleflex/uploader/define").then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let a;return e.auth.mode==="securityTemplate"?a={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:a={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:a,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(a){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:a instanceof Error?a:new Error(String(a)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var h,u,f,p,g,m,_;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},a=ps((h=this.config)==null?void 0:h.defaultFilters);for(const[y,C]of Object.entries(a))s.has(y)||(i[y]=C);const o=Object.keys(i),n=((u=this.config)==null?void 0:u.tabs)??["assets","folders"],c=(f=this.config)!=null&&f.rememberLastTab?eo(this.config.auth.projectToken):null,d=(c&&n.includes(c)?c:null)??((p=this.config)!=null&&p.defaultTab&&n.includes(this.config.defaultTab)?this.config.defaultTab:null)??n[0]??"assets";this.store.setState({isOpen:!0,activeTab:d,searchQuery:"",isAISearchActive:!!((g=this.config)!=null&&g.enableAISearch&&((m=this.config)!=null&&m.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...new Set([...e.filters.pinned,...o])],applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(d),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(d),((_=this.config)==null?void 0:_.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,a,o,n,c,d,h,u,f,p,g,m,_,y,C,x,M,$,k,E,A,fe,ie,O,X,Z,D,Pe,Ls,Os,Ms,Is,Ps,Ds,zs,Rs,js,Ns,Us;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const Xe=s.activeTab;if(Xe==="assets"){const ae=this._buildSearchNotation(),Ae=s.currentFolderPath||"/",he=s.isAISearchActive&&!!s.searchQuery,oe=De(this.apiClient,{folder:Ae,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ae||void 0,recursive:1,...he&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((i=s.config)==null?void 0:i.locale)??"en"}}),H=At(this.apiClient,{folder:Ae,q:ae||void 0,search:s.searchQuery||void 0,recursive:1,...he&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((a=s.config)==null?void 0:a.locale)??"en"}}).catch(()=>null),[B,J]=await Promise.all([oe,H]);if(e!==this._loadId)return;const ee=((o=B.files)==null?void 0:o.length)??0,j=ee>=s.limit,te=((n=J==null?void 0:J.stats)==null?void 0:n.approx_files_count)??((c=J==null?void 0:J.info)==null?void 0:c.total_files_count)??((d=B.info)==null?void 0:d.total_files_count)??((u=(h=B.base)==null?void 0:h.count)==null?void 0:u.files_recursive)??((p=(f=B.base)==null?void 0:f.count)==null?void 0:p.files_direct)??ee;this.store.setState({assets:B.files||[],folders:[],totalCount:te,totalFolderCount:0,offset:0,hasMore:j,isLoading:!1})}else if(Xe==="folders"){const ae=this._buildSearchNotation(),Ae=s.currentFolderPath||"/",[he,oe,H]=await Promise.all([Ni(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),De(this.apiClient,{folder:Ae,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ae||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((g=s.config)==null?void 0:g.locale)??"en"}}),At(this.apiClient,{folder:Ae,q:ae||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((m=s.config)==null?void 0:m.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const B=he.folders||[];let J={};if(B.length>0)try{J=await Ui(this.apiClient,B.map(Ze=>Ze.uuid))}catch{}if(e!==this._loadId)return;const ee=((_=oe.files)==null?void 0:_.length)??0,j=ee>=s.limit,te=((y=H==null?void 0:H.stats)==null?void 0:y.approx_files_count)??((C=H==null?void 0:H.info)==null?void 0:C.total_files_count)??((x=oe.info)==null?void 0:x.total_files_count)??(($=(M=oe.base)==null?void 0:M.count)==null?void 0:$.files_direct)??ee;this.store.setState({assets:oe.files||[],folders:B,folderPreviews:J,totalCount:te,totalFolderCount:he.total??B.length,offset:0,hasMore:j,isLoading:!1})}else if(Xe==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ae=s.labels.find(Zt=>Zt.uuid===s.activeLabelUuid);if(!ae){this.store.setState({isLoading:!1});return}const Ae=ae.sid.replace("#",""),he=this._buildSearchNotation(),oe=`labels:${Ae}${he?" "+he:""}`,H=s.isAISearchActive&&!!s.searchQuery,B=De(this.apiClient,{folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:oe,recursive:1,...H&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((k=s.config)==null?void 0:k.locale)??"en"}}),J=At(this.apiClient,{folder:"/",q:oe,search:s.searchQuery||void 0,recursive:1,...H&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((E=s.config)==null?void 0:E.locale)??"en"}}).catch(()=>null),[ee,j]=await Promise.all([B,J]);if(e!==this._loadId)return;const te=((A=ee.files)==null?void 0:A.length)??0,Ze=te>=s.limit,Xt=((fe=j==null?void 0:j.stats)==null?void 0:fe.approx_files_count)??((ie=j==null?void 0:j.info)==null?void 0:ie.total_files_count)??((O=ee.info)==null?void 0:O.total_files_count)??((Z=(X=ee.base)==null?void 0:X.count)==null?void 0:Z.files_recursive)??((Pe=(D=ee.base)==null?void 0:D.count)==null?void 0:Pe.files_direct)??te;this.store.setState({assets:ee.files||[],folders:[],totalCount:Xt,totalFolderCount:0,offset:0,hasMore:Ze,isLoading:!1})}else if(Xe==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ae=s.activeCollectionFolder;if(!(ae&&!((Ls=ae.children)!=null&&Ls.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const he=s.activeCollectionUuid,oe=ae.filters||void 0,H=this._buildSearchNotation(),B=s.isAISearchActive&&!!s.searchQuery,J=De(this.apiClient,{offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:H||void 0,recursive:1,collection_uuid:he,f64:oe,...B&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Os=s.config)==null?void 0:Os.locale)??"en"}}),ee=At(this.apiClient,{q:H||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:he,f64:oe,...B&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Ms=s.config)==null?void 0:Ms.locale)??"en"}}).catch(()=>null),[j,te]=await Promise.all([J,ee]);if(e!==this._loadId)return;const Ze=((Is=j.files)==null?void 0:Is.length)??0,Xt=Ze>=s.limit,Zt=((Ps=te==null?void 0:te.stats)==null?void 0:Ps.approx_files_count)??((Ds=te==null?void 0:te.info)==null?void 0:Ds.total_files_count)??((zs=j.info)==null?void 0:zs.total_files_count)??((js=(Rs=j.base)==null?void 0:Rs.count)==null?void 0:js.files_recursive)??((Us=(Ns=j.base)==null?void 0:Ns.count)==null?void 0:Us.files_direct)??Ze;this.store.setState({assets:j.files||[],folders:[],totalCount:Zt,totalFolderCount:0,offset:0,hasMore:Xt,isLoading:!1})}}catch(Xe){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:Xe,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var a,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((a=e.activeCollectionFolder.children)!=null&&a.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const n=this._buildSearchNotation();let c=n||void 0,d=e.currentFolderPath||"/",h=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const C=e.labels.find(x=>x.uuid===e.activeLabelUuid);C&&(c=`labels:${C.sid.replace("#","")}${n?" "+n:""}`),d="/",h=1}let u,f;e.activeTab==="collections"&&e.activeCollectionFolder&&(u=e.activeCollectionUuid||void 0,f=e.activeCollectionFolder.filters||void 0,d="",h=1);const p=await De(this.apiClient,{...d?{folder:d}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:c,recursive:h,...u&&{collection_uuid:u},...f&&{f64:f},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const g=this.store.getState().assets,m=p.files||[],_=m.length>=e.limit,y=[...g,...m];this.store.setState({assets:y,offset:i,hasMore:_,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var a;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((a=s.activeCollectionFolder.children)!=null&&a.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var o;const s=e.detail.active,i=this.store.getState(),a={isAISearchActive:s};i.searchQuery&&(s?a.sortBy="relevance":i.sortBy==="relevance"&&(a.sortBy=((o=this.config)==null?void 0:o.defaultSortBy)??"created_at"),a.offset=0,a.assets=[],a.folders=[],a.isLoading=!0),this.store.setState(a),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&Xa(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,a=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...a,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),Xs(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),Xs(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,a;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&Ja(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((a=this.config)==null?void 0:a.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&je(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var a,o;const i={assets:e};s!=null&&s.length&&(i.folders=s),(o=(a=this.config)==null?void 0:a.onSelect)==null||o.call(a,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var o;const s=e.detail.folder,i=this.store.getState(),a=s.path||`${i.currentFolderPath}${s.name}/`;(o=this.config)!=null&&o.rememberLastFolder&&Zs(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:a,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:a}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var c,d;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const h=this._findCollectionFolder(i.activeCollectionFolders,s);if(h){const u=i.breadcrumb.findIndex(p=>p.uuid===s),f=i.breadcrumb.slice(0,u+1);this.store.setState({activeCollectionFolder:h,breadcrumb:f,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const a=s?i.breadcrumb.findIndex(h=>h.uuid===s):-1,o=s?i.breadcrumb.slice(0,a+1):[],n=o.length>0?o[o.length-1].path:((c=this.config)==null?void 0:c.rootFolderPath)||"/";(d=this.config)!=null&&d.rememberLastFolder&&Zs(n,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:n,breadcrumb:o,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await Vi(this.apiClient,s.uuid),a=ei(i.folders||[]);this.store.setState({activeCollectionFolders:a,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var c;const s=e.detail.folder,i=this.store.getState(),a=s.path.split(" -> ").filter(Boolean),o=[{uuid:i.activeCollectionUuid,name:((c=i.breadcrumb[0])==null?void 0:c.name)||"Collection",path:""}];let n="";for(const d of a)n=n?`${n} -> ${d}`:d,o.push({uuid:n,name:d,path:n});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:o,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const a=this._findCollectionFolder(i.children,s);if(a)return a}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&Wa(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const a=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),o=[];let n=s.endsWith("/")?s:s+"/";for(const c of a)n+=c+"/",o.push({uuid:n,name:c,path:n});return o}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var a,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var o,n;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((o=this.config)==null?void 0:o.folderSelection)!==!1&&((n=this.config)==null?void 0:n.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(je).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var o;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),a=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const n=await Promise.all(i.map(p=>De(this.apiClient,{folder:p.path,recursive:s==="recursive"?1:0,limit:1e4}))),c=[];for(const p of n)c.push(...p.files);const d=[...a],h=new Set(d.map(p=>p.uuid));for(const p of c)h.has(p.uuid)||(d.push(p),h.add(p.uuid));const u=(o=this.config)==null?void 0:o.maxSelections,f=u?d.slice(0,u):d;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=f,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(f)}catch(n){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:n,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,a=this._transformAssets,o=this._transformFolders,n=a.length>1,c=fs(s,{isMultiSelect:n,isAspectLocked:i}),d=a.map(h=>{var g,m;if(!je(h))return h;const u=(g=h.url)==null?void 0:g.cdn,f=(m=h.url)==null?void 0:m.permalink,p={cdn:u?xe(u,c):""};return f&&(p.permalink_cdn=xe(f,c)),{...h,transformation:{params:s,url:p}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(d,o.length?o:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}async _handleSelectAll(e){var d,h,u;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((d=s.config)==null?void 0:d.multiSelect)??!0))return;const a=((h=e==null?void 0:e.detail)==null?void 0:h.scope)??"all",o=a!=="assets"&&((u=this.config)==null?void 0:u.folderSelection)!==!1&&s.folders.length>0;if(!(a!=="folders")){o&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const c=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const f=this._buildSearchNotation();let p=s.currentFolderPath||"/";const g=s.limit,m=s.assets,_=s.totalCount;let y=s.activeTab==="folders"?0:1,C=f||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const O=s.labels.find(X=>X.uuid===s.activeLabelUuid);O&&(C=`labels:${O.sid.replace("#","")}${f?" "+f:""}`),p="/",y=1}let x,M;s.activeTab==="collections"&&s.activeCollectionFolder&&(x=s.activeCollectionUuid||void 0,M=s.activeCollectionFolder.filters||void 0,p="",y=1);const $=[];for(let O=m.length;O<_;O+=g)$.push(O);const k=4,E=[];for(let O=0;O<$.length;O+=k){if(c!==this._selectAllId)return;const X=$.slice(O,O+k),Z=await Promise.all(X.map(D=>{var Pe;return De(this.apiClient,{...p?{folder:p}:{},offset:D,limit:g,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:C,recursive:y,...x&&{collection_uuid:x},...M&&{f64:M},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((Pe=s.config)==null?void 0:Pe.locale)??"en"}})}));if(c!==this._selectAllId)return;for(const D of Z)D.files&&E.push(...D.files)}if(c!==this._selectAllId)return;const A=new Set(m.map(O=>O.uuid)),fe=E.filter(O=>A.has(O.uuid)?!1:(A.add(O.uuid),!0)),ie=[...m,...fe];this.store.setState({assets:ie,offset:Math.max(0,ie.length-g),hasMore:!1,isSelectingAll:!1}),o&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(ie)}catch(f){if(c!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:f,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===b.DATE||e===b.LICENSE_EXPIRY||e===G.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:a}=e.detail,n={...this.store.getState().filters};let c=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(d=>d==null||d===""||Array.isArray(d)&&d.length===0);if(!c&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:d,preset:h,from:u,to:f}=i;c=!d&&!h&&!u&&!f}if(c){const d={...n.applied};delete d[s],n.applied=d,n.pinned.includes(s)||(n.visible=n.visible.filter(h=>h!==s))}else{const d={...n.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?d[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===b.IMAGE&&typeof i=="object"&&!Array.isArray(i)?d[s]=i:d[s]={type:"string",values:Array.isArray(i)?i:[i],operator:a||":"},n.applied=d,n.visible.includes(s)||(n.visible=[...n.visible,s])}if(this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingFilter===s){this._pendingFilter=null;const d=this.renderRoot.querySelector("ap-filters-bar");d&&(d.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,a=this.renderRoot.querySelector("ap-content-toolbar");let o,n;if(i){const c=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(c){const d=c.getBoundingClientRect();o=i.left-d.left,n=i.bottom-d.top}}a==null||a.openFilterPanel(s,!0,o,n)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,a=this.renderRoot.querySelector("ap-content-toolbar");let o,n;if(i){const c=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(c){const d=c.getBoundingClientRect();o=i.left-d.left,n=i.bottom-d.top}}a==null||a.openMetadataFieldPanel(s,!0,o,n)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var p,g,m;const{key:s,metadataFieldKey:i}=e.detail,a=this.renderRoot.querySelector("ap-filters-bar"),o=this.renderRoot.querySelector("ap-content-toolbar");if(!a||!o)return;i?(this._pendingMetadataField=i,a.pendingMetadataField=i):s&&(this._pendingFilter=s,a.pendingFilter=s),await a.updateComplete;let n=a.renderRoot.querySelector(".chip.pending");if(!n){const _=a.renderRoot.querySelectorAll(".chip.pinned-empty"),y=i?(p=a._getMetadataLabel)==null?void 0:p.call(a,i):void 0;for(const C of _){const x=(m=(g=C.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:m.trim();if(i&&x===y){n=C;break}if(s&&x===(et[s]||s)){n=C;break}}}if(!n)return;const c=n.getBoundingClientRect(),d=this.renderRoot.querySelector(".toolbar-filters-wrapper"),h=d==null?void 0:d.getBoundingClientRect(),u=h?c.left-h.left:c.left,f=h?c.bottom-h.top:void 0;i?o.openMetadataFieldPanel(i,!0,u,f):s&&o.openFilterPanel(s,!0,u,f)}_handleFilterRemove(e){var n;const s=e.detail.key;if(s in(((n=this.config)==null?void 0:n.forcedFilters)??{}))return;const a={...this.store.getState().filters},o={...a.applied};delete o[s],a.applied=o,a.pinned.includes(s)||(a.visible=a.visible.filter(c=>c!==s)),this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:a,metadataType:o}=e.detail,c={...this.store.getState().filters},d={...c.metadata},h={...d.applied};if(!a||Array.isArray(a)&&a.length===0?(delete h[s],d.applied=h,d.pinned.includes(s)||(d.visible=d.visible.filter(f=>f!==s))):(h[s]={type:"string",values:Array.isArray(a)?a:[a],operator:i||":",metadataType:o},d.applied=h,d.visible.includes(s)||(d.visible=[...d.visible,s])),c.metadata=d,this.store.setState({filters:c,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const f=this.renderRoot.querySelector("ap-filters-bar");f&&(f.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,o={...this.store.getState().filters},n={...o.metadata};i?n.visible.includes(s)||(n.visible=[...n.visible,s]):n.visible=n.visible.filter(c=>c!==s),o.metadata=n,this.store.setState({filters:o})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},o={...a.metadata},n={...o.applied};delete n[s],o.applied=n,o.pinned.includes(s)||(o.visible=o.visible.filter(c=>c!==s)),a.metadata=o,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var c,d;const{key:s,pinned:i}=e.detail,o={...this.store.getState().filters};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(h=>h!==s),s in o.applied||(o.visible=o.visible.filter(h=>h!==s))),this.store.setState({filters:o});const n=((d=(c=this.store.getState().config)==null?void 0:c.auth)==null?void 0:d.projectToken)??null;Ka(n,o.pinned)}_handleMetadataPin(e){var d,h;const{fieldKey:s,pinned:i}=e.detail,o={...this.store.getState().filters},n={...o.metadata};i?n.pinned.includes(s)||(n.pinned=[...n.pinned,s]):(n.pinned=n.pinned.filter(u=>u!==s),s in n.applied||(n.visible=n.visible.filter(u=>u!==s))),o.metadata=n,this.store.setState({filters:o});const c=((h=(d=this.store.getState().config)==null?void 0:d.auth)==null?void 0:h.projectToken)??null;Qa(c,n.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const s=e.detail.key,a={...this.store.getState().filters};a.visible=a.visible.filter(o=>o!==s),this.store.setState({filters:a})}_handleMetadataFieldDeactivate(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},o={...a.metadata};o.visible=o.visible.filter(n=>n!==s),a.metadata=o,this.store.setState({filters:a})}_handleFiltersSet(e){var h;const{applied:s,metadata:i}=e.detail,o={...this.store.getState().filters},n=new Set(Object.keys(((h=this.config)==null?void 0:h.forcedFilters)??{})),c={...s};for(const u of n)delete c[u];o.applied=c;const d=Object.keys(s);if(o.visible=[...new Set([...o.pinned,...d])],i){const u={...o.metadata};u.applied=i.applied;const f=Object.keys(i.applied);u.visible=[...new Set([...u.pinned,...f])],o.metadata=u}this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return no;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return lo;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return co}return e.searchQuery?oo:e.activeTab==="folders"?ro:ms}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return La(s,e.filters.metadata.applied).join(" ")}render(){var p,g,m,_,y,C,x,M,$,k,E,A,fe,ie,O,X,Z,D;const e=this.storeCtrl.state,s=Array.from(e.selectedAssets.keys()),i=Array.from(e.selectedFolders.keys()),a=this.selectionCtrl.getSelectedAssets(),o=this.selectionCtrl.getSelectedFolders(),n=((p=this.config)==null?void 0:p.folderSelection)!==!1,c=r.html`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((g=this.config)==null?void 0:g.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((m=e.activeCollectionFolder.children)!=null&&m.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((_=this.config)!=null&&_.enableAISearch)}
        .isAISearchActive=${e.isAISearchActive}
        .regionalGroups=${e.regionalVariantGroups}
        .regionalFilters=${e.regionalFilters}
        .hideClose=${this._isInline}
        @tab-change=${this._handleTabChange}
        @search-change=${this._handleSearchChange}
        @ai-search-toggle=${this._handleAISearchToggle}
        @view-change=${this._handleViewChange}
        @regional-change=${this._handleRegionalChange}
        @ap-close=${()=>this._handleCancel("close-button")}
      ></ap-header>
    `,d=!!((y=this.config)!=null&&y.uploader),h=r.html`
      <div class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?r.html`
          <div class="drop-zone-overlay">
            <div class="drop-zone-label">
              <ap-icon name="upload" .size=${32}></ap-icon>
              Drop files to upload
            </div>
          </div>
        `:r.nothing}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(C=this.config)!=null&&C.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${d}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((x=e.activeCollectionFolder.children)!=null&&x.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?`${e.labels.length} label${e.labels.length!==1?"s":""}`:e.activeTab==="collections"&&!e.activeCollectionUuid?`${e.collections.length} collection${e.collections.length!==1?"s":""}`:e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((M=e.activeCollectionFolder.children)!=null&&M.length))?`${this._getVisibleCollectionFolders().length} folder${this._getVisibleCollectionFolders().length!==1?"s":""}`:""}
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
            ></ap-content-toolbar>

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!(($=e.activeCollectionFolder.children)!=null&&$.length))?r.nothing:r.html`
            <ap-filters-bar
              .appliedFilters=${e.filters.applied}
              .appliedMetadata=${e.filters.metadata.applied}
              .metadataFields=${e.metadataFields}
              .tags=${e.tags}
              .labels=${e.labels}
              .pinnedFilters=${e.filters.pinned}
              .pinnedMetadataFields=${e.filters.metadata.pinned}
              .forcedFilters=${((k=this.config)==null?void 0:k.forcedFilters)??{}}
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

            ${e.breadcrumb.length>0?r.html`<ap-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab==="labels"?"Labels":e.activeTab==="collections"?"Collections":"Root"}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`:r.nothing}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((E=e.activeCollectionFolder.children)!=null&&E.length)))?r.html`<ap-skeleton .variant=${e.viewMode} .gridSize=${((A=this.config)==null?void 0:A.gridSize)??"normal"} .multiSelect=${((fe=this.config)==null?void 0:fe.multiSelect)!==!1} .folderCount=${2}></ap-skeleton>`:this._renderContent(e,s,i,n)}

          <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          ${this._folderResolveOpen?r.html`
            <ap-folder-resolve-dialog
              .folders=${o}
              .loading=${e.isResolvingFolders}
              @folder-resolve-confirm=${this._handleFolderResolveConfirm}
              @folder-resolve-cancel=${this._handleFolderResolveCancel}
            ></ap-folder-resolve-dialog>
          `:r.nothing}
          ${this._transformOpen?r.html`
            <ap-transformation-dialog
              .assets=${this._transformAssets}
              .isMultiSelect=${this._transformAssets.length>1}
              @transform-confirm=${this._handleTransformConfirm}
              @transform-skip=${this._handleTransformSkip}
              @transform-cancel=${this._handleTransformCancel}
            ></ap-transformation-dialog>
          `:r.nothing}
        </div>

        ${e.isPreviewOpen&&e.previewAsset?r.html`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${s}
              .containerToken=${e.projectToken}
              .showMetadata=${((ie=this.config)==null?void 0:ie.showMetadata)!==!1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((O=this.config)==null?void 0:O.multiSelect)??!0}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:r.nothing}
      </div>
    `,u=r.html`
      <ap-selection-bar
        .selectedAssets=${a}
        .selectedFolders=${o}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((X=this.config)==null?void 0:X.multiSelect)??!0}
        .maxSelections=${(Z=this.config)==null?void 0:Z.maxSelections}
        .showTransform=${!!((D=this.config)!=null&&D.transformations)&&a.some(je)}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,f=this._isUploaderOpen?r.html`
      <div class="uploader-overlay">
        <div class="uploader-body">${this._uploaderEl}</div>
      </div>
    `:r.nothing;return this._isInline?e.isOpen?r.html`
        <div class="ap-inline">
          ${this._isUploaderOpen?f:r.html`
            <div class="inline-header">${c}</div>
            <div class="inline-content">${h}</div>
            <div class="inline-footer">${u}</div>
          `}
        </div>
      `:r.nothing:r.html`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${Pe=>this._handleCancel(Pe.detail.reason)}
      >
        ${this._isUploaderOpen?f:r.html`
          <div slot="header">${c}</div>
          ${h}
          <div slot="footer">${u}</div>
        `}
      </ap-modal>
    `}_renderContent(e,s,i=[],a=!1){var o,n,c,d,h,u,f,p,g,m,_,y,C;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?r.html`
          <div class="empty-state">
            <ap-icon name="search" .size=${48}></ap-icon>
            <div class="empty-title">No assets found</div>
            <div class="empty-desc">Try adjusting your search or filters</div>
          </div>
        `:e.viewMode==="grid"?r.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((o=this.config)==null?void 0:o.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((n=this.config)==null?void 0:n.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:r.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((c=this.config)==null?void 0:c.multiSelect)??!0}
          .folderSelectable=${a}
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
      `;if(e.activeTab==="folders")return!e.isLoading&&e.folders.length===0&&e.assets.length===0?r.html`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">This folder is empty</div>
            <div class="empty-desc">No folders or files found here</div>
          </div>
        `:e.viewMode==="grid"?r.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((d=this.config)==null?void 0:d.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((h=this.config)==null?void 0:h.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:r.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((u=this.config)==null?void 0:u.multiSelect)??!0}
          .folderSelectable=${a}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let x=e.labels;if(e.searchQuery){const $=e.searchQuery.toLowerCase();x=e.labels.filter(k=>k.name.toLowerCase().includes($))}const M=e.sortDirection==="asc"?1:-1;return x=[...x].sort(($,k)=>M*$.name.localeCompare(k.name)),x.length===0?r.html`
            <div class="empty-state">
              <ap-icon name="tag" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?"No labels match your search":"No labels found"}</div>
              <div class="empty-desc">${e.searchQuery?"Try a different search term":"Labels will appear here once created"}</div>
            </div>
          `:e.viewMode==="grid"?r.html`
            <div class="labels-grid">
              ${x.map(($,k)=>r.html`
                <ap-label-card .label=${$} .index=${k} @label-open=${this._handleLabelOpen}></ap-label-card>
              `)}
            </div>
          `:r.html`
          <div class="labels-list">
            ${x.map(($,k)=>r.html`
              <ap-label-row .label=${$} .index=${k} @label-open=${this._handleLabelOpen}></ap-label-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?r.html`
          <div class="empty-state">
            <ap-icon name="tag" .size=${48}></ap-icon>
            <div class="empty-title">No assets in this label</div>
            <div class="empty-desc">Assets added to this label will appear here</div>
          </div>
        `:e.viewMode==="grid"?r.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((f=this.config)==null?void 0:f.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((p=this.config)==null?void 0:p.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:r.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((g=this.config)==null?void 0:g.multiSelect)??!0}
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
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let $=e.collections;if(e.searchQuery){const E=e.searchQuery.toLowerCase();$=e.collections.filter(A=>A.title.toLowerCase().includes(E))}const k=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?$=[...$].sort((E,A)=>k*(new Date(E.created_at).getTime()-new Date(A.created_at).getTime())):e.sortBy==="updated_at"?$=[...$].sort((E,A)=>k*(new Date(E.updated_at).getTime()-new Date(A.updated_at).getTime())):$=[...$].sort((E,A)=>k*E.title.localeCompare(A.title)),$.length===0?r.html`
            <div class="empty-state">
              <ap-icon name="layout-grid" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?"No collections match your search":"No collections found"}</div>
              <div class="empty-desc">${e.searchQuery?"Try a different search term":"Collections will appear here once created"}</div>
            </div>
          `:e.viewMode==="grid"?r.html`
            <div class="collections-grid">
              ${$.map((E,A)=>r.html`
                <ap-collection-card .collection=${E} .index=${A} @collection-open=${this._handleCollectionOpen}></ap-collection-card>
              `)}
            </div>
          `:r.html`
          <div class="collections-list">
            ${$.map((E,A)=>r.html`
              <ap-collection-row .collection=${E} .index=${A} @collection-open=${this._handleCollectionOpen}></ap-collection-row>
            `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return r.html`<div class="loading-center"><ap-spinner></ap-spinner></div>`;const x=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(((m=e.activeCollectionFolder.children)==null?void 0:m.length)??0)>0){let $=x;if(e.searchQuery){const E=e.searchQuery.toLowerCase();$=x.filter(A=>A.name.toLowerCase().includes(E))}const k=e.sortDirection==="asc"?1:-1;return $=[...$].sort((E,A)=>k*E.name.localeCompare(A.name)),$.length===0?r.html`
            <div class="empty-state">
              <ap-icon name="folder" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?"No folders match your search":"No folders in this collection"}</div>
              <div class="empty-desc">${e.searchQuery?"Try a different search term":"Collection folders will appear here"}</div>
            </div>
          `:e.viewMode==="grid"?r.html`
            <div class="collection-folders-grid">
              ${$.map((E,A)=>r.html`
                <ap-collection-folder-card .folder=${E} .index=${A} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-card>
              `)}
            </div>
          `:r.html`
          <div class="collection-folders-list">
            ${$.map((E,A)=>r.html`
              <ap-collection-folder-row .folder=${E} .index=${A} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?r.html`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">No assets in this collection folder</div>
            <div class="empty-desc">Assets matching this collection's criteria will appear here</div>
          </div>
        `:e.viewMode==="grid"?r.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .isLoading=${e.isLoading}
            .multiSelect=${((_=this.config)==null?void 0:_.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((y=this.config)==null?void 0:y.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:r.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .isLoading=${e.isLoading}
          .multiSelect=${((C=this.config)==null?void 0:C.multiSelect)??!0}
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
      `}return r.nothing}};Ts.styles=[r.css`
      :host {
        display: contents;
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
      }
      :host([inline]) {
        display: block;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
        height: var(--ap-inline-height, 600px);
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
        background: var(--ap-background, oklch(1 0 0));
      }
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 20px;
        color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
        text-align: center;
      }
      .empty-state ap-icon {
        margin-bottom: 16px;
        opacity: 0.5;
      }
      .empty-title {
        font-size: var(--ap-font-size-base, 1rem);
        font-weight: 500;
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 4px;
      }
      .empty-desc {
        font-size: var(--ap-font-size-sm, 0.875rem);
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
        background: var(--ap-background, oklch(1 0 0));
        font-family: var(--ap-font-family, system-ui, -apple-system, sans-serif);
        color: var(--ap-foreground, oklch(0.37 0.022 248.413));
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
        background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.08));
        border: 2px dashed var(--ap-primary, oklch(0.65 0.19 258));
        border-radius: var(--ap-radius, 8px);
        pointer-events: none;
        animation: drop-zone-in 150ms ease-out;
      }
      .drop-zone-overlay .drop-zone-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        color: var(--ap-primary, oklch(0.65 0.19 258));
        font-size: 1rem;
        font-weight: 500;
      }
      @keyframes drop-zone-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        .drop-zone-overlay { animation: none; }
      }

      /* Uploader overlay panel — fills the entire modal/inline container */
      .uploader-overlay {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        background: var(--ap-background, oklch(1 0 0));
        animation: uploader-slide-in 250ms ease-out;
      }
      @keyframes uploader-slide-in {
        from { transform: translateX(100%); }
        to   { transform: translateX(0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .uploader-overlay { animation: none; }
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
    `];let Me=Ts;Et([l.state()],Me.prototype,"_isDragOver");Et([l.state()],Me.prototype,"_isUploaderOpen");Et([l.state()],Me.prototype,"_folderResolveOpen");Et([l.state()],Me.prototype,"_transformOpen");Et([l.property({type:Object})],Me.prototype,"config");exports.AssetPicker=Me;exports.addCdnParams=xe;exports.buildTransformCdnParams=fs;exports.buildTransformedUrl=ca;exports.getAltText=Yi;exports.getAssetDimensions=Wi;exports.getAssetHeight=Dt;exports.getAssetWidth=Pt;exports.getBestVideoUrl=Ji;exports.getCdnUrl=ti;exports.getTranscodedUrl=Zi;exports.isAudio=Qi;exports.isImage=je;exports.isTranscoded=Xi;exports.isVideo=Ki;
