const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-provider-browser-CCgVfvJZ-m2e-x3iH.js","assets/index-BqysEWZn.js","assets/index-CLkMPxQv.css","assets/provider-browser-DP0dkm4h-DINpcLHa.js","assets/index-BKzvd_io-R6_tt_-w.js"])))=>i.map(i=>d[i]);
import{A as C,E as oo,i as V,n as R,r as j,e as vr,a as G,w as pe,c as u,D as fe,_ as dt}from"./index-BqysEWZn.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const io={CHILD:2},xr=t=>(...e)=>({_$litDirective$:t,values:e});class no{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt extends no{constructor(e){if(super(e),this.it=C,e.type!==io.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===oo)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}rt.directiveName="unsafeHTML",rt.resultType=1;const ue=xr(rt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ft extends rt{}ft.directiveName="unsafeSVG",ft.resultType=2;const ae=xr(ft);class so{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const r=this.state;this.state={...r,...e},this._notifying=!0;try{this.listeners.forEach(o=>o(this.state,r))}finally{this._notifying=!1}if(this._pendingState){const o=this._pendingState;this._pendingState=null,this.setState(o)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function q(t,e,r){const o=t.getState().files,i=o.get(e);if(!i)return;const n=new Map(o);n.set(e,{...i,...r}),t.setState({files:n})}function me(t,e){const r=new Map(t.getState().files);r.set(e.id,e),t.setState({files:r})}function Bt(t,e){const r=t.getState().files;if(!r.has(e))return;const o=new Map(r);o.delete(e),t.setState({files:o})}function ao(){return new so({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1})}class lo{constructor(e,r){this.host=e,this.store=r,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function co(t,e){const r=new XMLHttpRequest;let o=!1;const i=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;r.open("POST",i);for(const[s,a]of Object.entries(e.authHeaders))r.setRequestHeader(s,a);r.upload.addEventListener("progress",s=>{s.lengthComputable&&!o&&e.onProgress(s.loaded,s.total)}),r.addEventListener("load",()=>{if(o)return;let s;try{s=JSON.parse(r.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${r.status})`));return}r.status>=200&&r.status<300&&s.status==="success"?e.onComplete(s):e.onError(new Error(s.hint||s.msg||`Upload failed (HTTP ${r.status})`))}),r.addEventListener("error",()=>{o||e.onError(new Error("Network error — check your connection"))}),r.addEventListener("timeout",()=>{o||e.onError(new Error("Upload timed out"))});const n=new FormData;if(t.file){const s={name:t.name,type:t.type};n.append("info[files[]]",JSON.stringify(s)),Object.keys(t.meta).length>0&&n.append("meta[files[]]",JSON.stringify(t.meta)),t.tags.length>0&&n.append("tags[files[]]",JSON.stringify(t.tags)),n.append("files[]",t.file,t.name)}return r.timeout=6e4,r.send(n),{abort(){o=!0,r.abort()}}}function po(t,e){const r=new XMLHttpRequest;let o=!1;const i=`${e.apiBase.replace(/\/+$/,"")}/v4/files/upload_url`;r.open("POST",i);for(const[s,a]of Object.entries(e.authHeaders))r.setRequestHeader(s,a);if(r.setRequestHeader("Content-Type","application/json"),r.addEventListener("load",()=>{if(o)return;let s;try{s=JSON.parse(r.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${r.status})`));return}r.status>=200&&r.status<300&&s.status==="success"?e.onComplete(s):e.onError(new Error(s.hint||s.msg||`Upload failed (HTTP ${r.status})`))}),r.addEventListener("error",()=>{o||e.onError(new Error("Network error — check your connection"))}),r.addEventListener("timeout",()=>{o||e.onError(new Error("Upload timed out"))}),!t.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const n={files_urls:[{url:t.remoteUrl,name:t.name}],dir:e.folder};return r.timeout=6e4,r.send(JSON.stringify(n)),{abort(){o=!0,r.abort()}}}function st(t){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":t}}function Ue(t){return t.replace(/\/+$/,"")}const uo={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function Ne(t){return uo[t]??t}function Vn(t,e){const r=Ue(t),o=btoa(JSON.stringify({origin:window.location.origin})),i=Ne(e);return`${r}/${i}/connect?state=${encodeURIComponent(o)}`}async function Xn(t,e,r,o=""){const i=Ue(t),n=o?`/${o}`:"",s=Ne(e),a=await fetch(`${i}/${s}/list${n}`,{method:"GET",headers:st(r),credentials:"same-origin"});if(a.status===401)throw new Et;if(!a.ok){const c=await a.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Companion list failed (HTTP ${a.status})`)}return a.json()}async function Wn(t,e,r){const o=Ue(t),i=await fetch(`${o}/${r}`,{method:"GET",headers:st(e),credentials:"same-origin"});if(i.status===401)throw new Et;if(!i.ok){const n=await i.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${i.status})`)}return i.json()}async function Gn(t,e,r,o){const i=Ue(t),n=Ne(e),s=o?`q=${encodeURIComponent(r)}&${o}`:`q=${encodeURIComponent(r)}`,a=await fetch(`${i}/search/${n}/list?${s}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const c=await a.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function fo(t,e,r,o,i,n=!1){const s=Ue(t),a=Ne(e),c=n?`${s}/search/${a}/get/${o}`:`${s}/${a}/get/${o}`,f=n?{Accept:"application/json","Content-Type":"application/json"}:st(r),h=await fetch(c,{method:"POST",headers:f,credentials:"same-origin",body:JSON.stringify({...i,httpMethod:i.httpMethod??"POST",useFormData:i.useFormData??!0,fieldname:i.fieldname??"files[]"})});if(h.status===401)throw new Et;if(!h.ok){const w=await h.json().catch(()=>null);throw new Error((w==null?void 0:w.message)||`Companion upload failed (HTTP ${h.status})`)}return h.json()}async function Kn(t,e,r){const o=Ue(t),i=Ne(e),n=await fetch(`${o}/${i}/logout`,{method:"GET",headers:st(r),credentials:"same-origin"});return n.ok?n.json():{ok:!1,revoked:!1}}function ho(t){var e;const r=((e=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(t))==null?void 0:e[1])??t;return`${/^https:\/\//i.test(t)?"wss":"ws"}://${r}`}class Et extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function go(t,e){const r=t.remoteInfo;if(!r)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let o=!1,i=null;const n=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`,s={};t.meta&&Object.keys(t.meta).length>0&&Object.assign(s,t.meta),t.tags&&t.tags.length>0&&(s.tags=t.tags);const a=!r.token;return fo(r.companionUrl,r.provider,r.token,r.requestPath,{fileId:r.fileId,endpoint:n,headers:e.authHeaders,size:r.size,metadata:Object.keys(s).length>0?s:void 0},a).then(c=>{if(o)return;const f=`${ho(r.companionUrl)}/api/${c.token}`;try{i=new WebSocket(f)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}i.onmessage=h=>{var w,m,z;if(!o)try{const $=JSON.parse(h.data);switch($.action){case"progress":{const _=$.payload,k=_.bytesUploaded??0,L=_.bytesTotal??(r.size||1);e.onProgress(k,L);break}case"success":{const _=$.payload;if(i==null||i.close(),(w=_.response)!=null&&w.responseText)try{const k=JSON.parse(_.response.responseText);if(k.status==="success"){e.onComplete(k);return}e.onError(new Error(k.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{i==null||i.close();const _=$.payload;let k=((m=_.error)==null?void 0:m.message)||"Upload failed";if((z=_.response)!=null&&z.responseText)try{const L=JSON.parse(_.response.responseText);k=L.hint||L.msg||L.message||k}catch{}e.onError(new Error(k));break}}}catch{}},i.onerror=()=>{o||e.onError(new Error("Upload progress connection failed"))},i.onclose=()=>{i=null}}).catch(c=>{o||e.onError(c instanceof Error?c:new Error(String(c)))}),{abort(){if(o=!0,i){try{i.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}i.close(),i=null}}}}function ht(t){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ht(t)}function vo(t,e,r){return Object.defineProperty(t,"prototype",{writable:!1}),t}function xo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bo(t,e,r){return e=Be(e),mo(t,Pt()?Reflect.construct(e,r||[],Be(t).constructor):e.apply(t,r))}function mo(t,e){if(e&&(ht(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yo(t)}function yo(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function wo(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Fe(t,e)}function gt(t){var e=typeof Map=="function"?new Map:void 0;return gt=function(r){if(r===null||!ko(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,o)}function o(){return _o(r,arguments,Be(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Fe(o,r)},gt(t)}function _o(t,e,r){if(Pt())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var i=new(t.bind.apply(t,o));return r&&Fe(i,r.prototype),i}function Pt(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Pt=function(){return!!t})()}function ko(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function Fe(t,e){return Fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Fe(t,e)}function Be(t){return Be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Be(t)}var Re=(function(t){function e(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(xo(this,e),o=bo(this,e,[r]),o.originalRequest=n,o.originalResponse=s,o.causingError=i,i!=null&&(r+=", caused by ".concat(i.toString())),n!=null){var a=n.getHeader("X-Request-ID")||"n/a",c=n.getMethod(),f=n.getURL(),h=s?s.getStatus():"n/a",w=s?s.getBody()||"":"n/a";r+=", originated from request (method: ".concat(c,", url: ").concat(f,", response code: ").concat(h,", response text: ").concat(w,", request id: ").concat(a,")")}return o.message=r,o}return wo(e,t),vo(e)})(gt(Error));function Ae(t){"@babel/helpers - typeof";return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ae(t)}function Co(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function So(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Uo(o.key),o)}}function $o(t,e,r){return e&&So(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Uo(t){var e=Eo(t,"string");return Ae(e)=="symbol"?e:e+""}function Eo(t,e){if(Ae(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Ae(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Po=(function(){function t(){Co(this,t)}return $o(t,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(e){return Promise.resolve([])}},{key:"removeUpload",value:function(e){return Promise.resolve()}},{key:"addUpload",value:function(e,r){return Promise.resolve(null)}}])})();const br="3.7.8",zo=br,Ee=typeof Buffer=="function",At=typeof TextDecoder=="function"?new TextDecoder:void 0,It=typeof TextEncoder=="function"?new TextEncoder:void 0,Oo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Te=Array.prototype.slice.call(Oo),Ke=(t=>{let e={};return t.forEach((r,o)=>e[r]=o),e})(Te),jo=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,N=String.fromCharCode.bind(String),Mt=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),mr=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),yr=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),wr=t=>{let e,r,o,i,n="";const s=t.length%3;for(let a=0;a<t.length;){if((r=t.charCodeAt(a++))>255||(o=t.charCodeAt(a++))>255||(i=t.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=r<<16|o<<8|i,n+=Te[e>>18&63]+Te[e>>12&63]+Te[e>>6&63]+Te[e&63]}return s?n.slice(0,s-3)+"===".substring(s):n},zt=typeof btoa=="function"?t=>btoa(t):Ee?t=>Buffer.from(t,"binary").toString("base64"):wr,vt=Ee?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let r=0,o=t.length;r<o;r+=4096)e.push(N.apply(null,t.subarray(r,r+4096)));return zt(e.join(""))},Qe=(t,e=!1)=>e?mr(vt(t)):vt(t),Ro=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?N(192|e>>>6)+N(128|e&63):N(224|e>>>12&15)+N(128|e>>>6&63)+N(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return N(240|e>>>18&7)+N(128|e>>>12&63)+N(128|e>>>6&63)+N(128|e&63)}},To=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,_r=t=>t.replace(To,Ro),Ht=Ee?t=>Buffer.from(t,"utf8").toString("base64"):It?t=>vt(It.encode(t)):t=>zt(_r(t)),Se=(t,e=!1)=>e?mr(Ht(t)):Ht(t),qt=t=>Se(t,!0),Do=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Lo=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return N((r>>>10)+55296)+N((r&1023)+56320);case 3:return N((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return N((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},kr=t=>t.replace(Do,Lo),Cr=t=>{if(t=t.replace(/\s+/g,""),!jo.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,r,o,i=[];for(let n=0;n<t.length;)e=Ke[t.charAt(n++)]<<18|Ke[t.charAt(n++)]<<12|(r=Ke[t.charAt(n++)])<<6|(o=Ke[t.charAt(n++)]),r===64?i.push(N(e>>16&255)):o===64?i.push(N(e>>16&255,e>>8&255)):i.push(N(e>>16&255,e>>8&255,e&255));return i.join("")},Ot=typeof atob=="function"?t=>atob(yr(t)):Ee?t=>Buffer.from(t,"base64").toString("binary"):Cr,Sr=Ee?t=>Mt(Buffer.from(t,"base64")):t=>Mt(Ot(t).split("").map(e=>e.charCodeAt(0))),$r=t=>Sr(Ur(t)),Fo=Ee?t=>Buffer.from(t,"base64").toString("utf8"):At?t=>At.decode(Sr(t)):t=>kr(Ot(t)),Ur=t=>yr(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),xt=t=>Fo(Ur(t)),Bo=t=>{if(typeof t!="string")return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Er=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),Pr=function(){const t=(e,r)=>Object.defineProperty(String.prototype,e,Er(r));t("fromBase64",function(){return xt(this)}),t("toBase64",function(e){return Se(this,e)}),t("toBase64URI",function(){return Se(this,!0)}),t("toBase64URL",function(){return Se(this,!0)}),t("toUint8Array",function(){return $r(this)})},zr=function(){const t=(e,r)=>Object.defineProperty(Uint8Array.prototype,e,Er(r));t("toBase64",function(e){return Qe(this,e)}),t("toBase64URI",function(){return Qe(this,!0)}),t("toBase64URL",function(){return Qe(this,!0)})},Ao=()=>{Pr(),zr()},Io={version:br,VERSION:zo,atob:Ot,atobPolyfill:Cr,btoa:zt,btoaPolyfill:wr,fromBase64:xt,toBase64:Se,encode:Se,encodeURI:qt,encodeURL:qt,utob:_r,btou:kr,decode:xt,isValid:Bo,fromUint8Array:Qe,toUint8Array:$r,extendString:Pr,extendUint8Array:zr,extendBuiltins:Ao};var Nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yt,Vt;function Ho(){return Vt||(Vt=1,Yt=function(t,e){if(e=e.split(":")[0],t=+t,!t)return!1;switch(e){case"http":case"ws":return t!==80;case"https":case"wss":return t!==443;case"ftp":return t!==21;case"gopher":return t!==70;case"file":return!1}return t!==0}),Yt}var Ze={},Xt;function qo(){if(Xt)return Ze;Xt=1;var t=Object.prototype.hasOwnProperty,e;function r(s){try{return decodeURIComponent(s.replace(/\+/g," "))}catch{return null}}function o(s){try{return encodeURIComponent(s)}catch{return null}}function i(s){for(var a=/([^=?#&]+)=?([^&]*)/g,c={},f;f=a.exec(s);){var h=r(f[1]),w=r(f[2]);h===null||w===null||h in c||(c[h]=w)}return c}function n(s,a){a=a||"";var c=[],f,h;typeof a!="string"&&(a="?");for(h in s)if(t.call(s,h)){if(f=s[h],!f&&(f===null||f===e||isNaN(f))&&(f=""),h=o(h),f=o(f),h===null||f===null)continue;c.push(h+"="+f)}return c.length?a+c.join("&"):""}return Ze.stringify=n,Ze.parse=i,Ze}var ct,Wt;function No(){if(Wt)return ct;Wt=1;var t=Ho(),e=qo(),r=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,o=/[\n\r\t]/g,i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,n=/:\d+$/,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function c(x){return(x||"").toString().replace(r,"")}var f=[["#","hash"],["?","query"],function(x,y){return m(y.protocol)?x.replace(/\\/g,"/"):x},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};function w(x){var y;typeof window<"u"?y=window:typeof Nt<"u"?y=Nt:typeof self<"u"?y=self:y={};var v=y.location||{};x=x||v;var b={},O=typeof x,E;if(x.protocol==="blob:")b=new _(unescape(x.pathname),{});else if(O==="string"){b=new _(x,{});for(E in h)delete b[E]}else if(O==="object"){for(E in x)E in h||(b[E]=x[E]);b.slashes===void 0&&(b.slashes=i.test(x.href))}return b}function m(x){return x==="file:"||x==="ftp:"||x==="http:"||x==="https:"||x==="ws:"||x==="wss:"}function z(x,y){x=c(x),x=x.replace(o,""),y=y||{};var v=s.exec(x),b=v[1]?v[1].toLowerCase():"",O=!!v[2],E=!!v[3],F=0,T;return O?E?(T=v[2]+v[3]+v[4],F=v[2].length+v[3].length):(T=v[2]+v[4],F=v[2].length):E?(T=v[3]+v[4],F=v[3].length):T=v[4],b==="file:"?F>=2&&(T=T.slice(2)):m(b)?T=v[4]:b?O&&(T=T.slice(2)):F>=2&&m(y.protocol)&&(T=v[4]),{protocol:b,slashes:O||m(b),slashesCount:F,rest:T}}function $(x,y){if(x==="")return y;for(var v=(y||"/").split("/").slice(0,-1).concat(x.split("/")),b=v.length,O=v[b-1],E=!1,F=0;b--;)v[b]==="."?v.splice(b,1):v[b]===".."?(v.splice(b,1),F++):F&&(b===0&&(E=!0),v.splice(b,1),F--);return E&&v.unshift(""),(O==="."||O==="..")&&v.push(""),v.join("/")}function _(x,y,v){if(x=c(x),x=x.replace(o,""),!(this instanceof _))return new _(x,y,v);var b,O,E,F,T,X,ne=f.slice(),be=typeof y,U=this,Z=0;for(be!=="object"&&be!=="string"&&(v=y,y=null),v&&typeof v!="function"&&(v=e.parse),y=w(y),O=z(x||"",y),b=!O.protocol&&!O.slashes,U.slashes=O.slashes||b&&y.slashes,U.protocol=O.protocol||y.protocol||"",x=O.rest,(O.protocol==="file:"&&(O.slashesCount!==2||a.test(x))||!O.slashes&&(O.protocol||O.slashesCount<2||!m(U.protocol)))&&(ne[3]=[/(.*)/,"pathname"]);Z<ne.length;Z++){if(F=ne[Z],typeof F=="function"){x=F(x,U);continue}E=F[0],X=F[1],E!==E?U[X]=x:typeof E=="string"?(T=E==="@"?x.lastIndexOf(E):x.indexOf(E),~T&&(typeof F[2]=="number"?(U[X]=x.slice(0,T),x=x.slice(T+F[2])):(U[X]=x.slice(T),x=x.slice(0,T)))):(T=E.exec(x))&&(U[X]=T[1],x=x.slice(0,T.index)),U[X]=U[X]||b&&F[3]&&y[X]||"",F[4]&&(U[X]=U[X].toLowerCase())}v&&(U.query=v(U.query)),b&&y.slashes&&U.pathname.charAt(0)!=="/"&&(U.pathname!==""||y.pathname!=="")&&(U.pathname=$(U.pathname,y.pathname)),U.pathname.charAt(0)!=="/"&&m(U.protocol)&&(U.pathname="/"+U.pathname),t(U.port,U.protocol)||(U.host=U.hostname,U.port=""),U.username=U.password="",U.auth&&(T=U.auth.indexOf(":"),~T?(U.username=U.auth.slice(0,T),U.username=encodeURIComponent(decodeURIComponent(U.username)),U.password=U.auth.slice(T+1),U.password=encodeURIComponent(decodeURIComponent(U.password))):U.username=encodeURIComponent(decodeURIComponent(U.auth)),U.auth=U.password?U.username+":"+U.password:U.username),U.origin=U.protocol!=="file:"&&m(U.protocol)&&U.host?U.protocol+"//"+U.host:"null",U.href=U.toString()}function k(x,y,v){var b=this;switch(x){case"query":typeof y=="string"&&y.length&&(y=(v||e.parse)(y)),b[x]=y;break;case"port":b[x]=y,t(y,b.protocol)?y&&(b.host=b.hostname+":"+y):(b.host=b.hostname,b[x]="");break;case"hostname":b[x]=y,b.port&&(y+=":"+b.port),b.host=y;break;case"host":b[x]=y,n.test(y)?(y=y.split(":"),b.port=y.pop(),b.hostname=y.join(":")):(b.hostname=y,b.port="");break;case"protocol":b.protocol=y.toLowerCase(),b.slashes=!v;break;case"pathname":case"hash":if(y){var O=x==="pathname"?"/":"#";b[x]=y.charAt(0)!==O?O+y:y}else b[x]=y;break;case"username":case"password":b[x]=encodeURIComponent(y);break;case"auth":var E=y.indexOf(":");~E?(b.username=y.slice(0,E),b.username=encodeURIComponent(decodeURIComponent(b.username)),b.password=y.slice(E+1),b.password=encodeURIComponent(decodeURIComponent(b.password))):b.username=encodeURIComponent(decodeURIComponent(y))}for(var F=0;F<f.length;F++){var T=f[F];T[4]&&(b[T[1]]=b[T[1]].toLowerCase())}return b.auth=b.password?b.username+":"+b.password:b.username,b.origin=b.protocol!=="file:"&&m(b.protocol)&&b.host?b.protocol+"//"+b.host:"null",b.href=b.toString(),b}function L(x){(!x||typeof x!="function")&&(x=e.stringify);var y,v=this,b=v.host,O=v.protocol;O&&O.charAt(O.length-1)!==":"&&(O+=":");var E=O+(v.protocol&&v.slashes||m(v.protocol)?"//":"");return v.username?(E+=v.username,v.password&&(E+=":"+v.password),E+="@"):v.password?(E+=":"+v.password,E+="@"):v.protocol!=="file:"&&m(v.protocol)&&!b&&v.pathname!=="/"&&(E+="@"),(b[b.length-1]===":"||n.test(v.hostname)&&!v.port)&&(b+=":"),E+=b+v.pathname,y=typeof v.query=="object"?x(v.query):v.query,y&&(E+=y.charAt(0)!=="?"?"?"+y:y),v.hash&&(E+=v.hash),E}return _.prototype={set:k,toString:L},_.extractProtocol=z,_.location=w,_.trimLeft=c,_.qs=e,ct=_,ct}var Yo=No();const Vo=Mo(Yo);function Xo(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t==="x"?e:e&3|8;return r.toString(16)})}function bt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */bt=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(d,l,p){d[l]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function f(d,l,p){return Object.defineProperty(d,l,{value:p,enumerable:!0,configurable:!0,writable:!0}),d[l]}try{f({},"")}catch{f=function(d,l,p){return d[l]=p}}function h(d,l,p,S){var g=l&&l.prototype instanceof L?l:L,P=Object.create(g.prototype),D=new Z(S||[]);return i(P,"_invoke",{value:X(d,p,D)}),P}function w(d,l,p){try{return{type:"normal",arg:d.call(l,p)}}catch(S){return{type:"throw",arg:S}}}e.wrap=h;var m="suspendedStart",z="suspendedYield",$="executing",_="completed",k={};function L(){}function x(){}function y(){}var v={};f(v,s,function(){return this});var b=Object.getPrototypeOf,O=b&&b(b(de([])));O&&O!==r&&o.call(O,s)&&(v=O);var E=y.prototype=L.prototype=Object.create(v);function F(d){["next","throw","return"].forEach(function(l){f(d,l,function(p){return this._invoke(l,p)})})}function T(d,l){function p(g,P,D,A){var I=w(d[g],d,P);if(I.type!=="throw"){var W=I.arg,J=W.value;return J&&he(J)=="object"&&o.call(J,"__await")?l.resolve(J.__await).then(function(Y){p("next",Y,D,A)},function(Y){p("throw",Y,D,A)}):l.resolve(J).then(function(Y){W.value=Y,D(W)},function(Y){return p("throw",Y,D,A)})}A(I.arg)}var S;i(this,"_invoke",{value:function(g,P){function D(){return new l(function(A,I){p(g,P,A,I)})}return S=S?S.then(D,D):D()}})}function X(d,l,p){var S=m;return function(g,P){if(S===$)throw Error("Generator is already running");if(S===_){if(g==="throw")throw P;return{value:t,done:!0}}for(p.method=g,p.arg=P;;){var D=p.delegate;if(D){var A=ne(D,p);if(A){if(A===k)continue;return A}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(S===m)throw S=_,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);S=$;var I=w(d,l,p);if(I.type==="normal"){if(S=p.done?_:z,I.arg===k)continue;return{value:I.arg,done:p.done}}I.type==="throw"&&(S=_,p.method="throw",p.arg=I.arg)}}}function ne(d,l){var p=l.method,S=d.iterator[p];if(S===t)return l.delegate=null,p==="throw"&&d.iterator.return&&(l.method="return",l.arg=t,ne(d,l),l.method==="throw")||p!=="return"&&(l.method="throw",l.arg=new TypeError("The iterator does not provide a '"+p+"' method")),k;var g=w(S,d.iterator,l.arg);if(g.type==="throw")return l.method="throw",l.arg=g.arg,l.delegate=null,k;var P=g.arg;return P?P.done?(l[d.resultName]=P.value,l.next=d.nextLoc,l.method!=="return"&&(l.method="next",l.arg=t),l.delegate=null,k):P:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,k)}function be(d){var l={tryLoc:d[0]};1 in d&&(l.catchLoc=d[1]),2 in d&&(l.finallyLoc=d[2],l.afterLoc=d[3]),this.tryEntries.push(l)}function U(d){var l=d.completion||{};l.type="normal",delete l.arg,d.completion=l}function Z(d){this.tryEntries=[{tryLoc:"root"}],d.forEach(be,this),this.reset(!0)}function de(d){if(d||d===""){var l=d[s];if(l)return l.call(d);if(typeof d.next=="function")return d;if(!isNaN(d.length)){var p=-1,S=function g(){for(;++p<d.length;)if(o.call(d,p))return g.value=d[p],g.done=!1,g;return g.value=t,g.done=!0,g};return S.next=S}}throw new TypeError(he(d)+" is not iterable")}return x.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:x,configurable:!0}),x.displayName=f(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(d){var l=typeof d=="function"&&d.constructor;return!!l&&(l===x||(l.displayName||l.name)==="GeneratorFunction")},e.mark=function(d){return Object.setPrototypeOf?Object.setPrototypeOf(d,y):(d.__proto__=y,f(d,c,"GeneratorFunction")),d.prototype=Object.create(E),d},e.awrap=function(d){return{__await:d}},F(T.prototype),f(T.prototype,a,function(){return this}),e.AsyncIterator=T,e.async=function(d,l,p,S,g){g===void 0&&(g=Promise);var P=new T(h(d,l,p,S),g);return e.isGeneratorFunction(l)?P:P.next().then(function(D){return D.done?D.value:P.next()})},F(E),f(E,c,"Generator"),f(E,s,function(){return this}),f(E,"toString",function(){return"[object Generator]"}),e.keys=function(d){var l=Object(d),p=[];for(var S in l)p.push(S);return p.reverse(),function g(){for(;p.length;){var P=p.pop();if(P in l)return g.value=P,g.done=!1,g}return g.done=!0,g}},e.values=de,Z.prototype={constructor:Z,reset:function(d){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!d)for(var l in this)l.charAt(0)==="t"&&o.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=t)},stop:function(){this.done=!0;var d=this.tryEntries[0].completion;if(d.type==="throw")throw d.arg;return this.rval},dispatchException:function(d){if(this.done)throw d;var l=this;function p(I,W){return P.type="throw",P.arg=d,l.next=I,W&&(l.method="next",l.arg=t),!!W}for(var S=this.tryEntries.length-1;S>=0;--S){var g=this.tryEntries[S],P=g.completion;if(g.tryLoc==="root")return p("end");if(g.tryLoc<=this.prev){var D=o.call(g,"catchLoc"),A=o.call(g,"finallyLoc");if(D&&A){if(this.prev<g.catchLoc)return p(g.catchLoc,!0);if(this.prev<g.finallyLoc)return p(g.finallyLoc)}else if(D){if(this.prev<g.catchLoc)return p(g.catchLoc,!0)}else{if(!A)throw Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return p(g.finallyLoc)}}}},abrupt:function(d,l){for(var p=this.tryEntries.length-1;p>=0;--p){var S=this.tryEntries[p];if(S.tryLoc<=this.prev&&o.call(S,"finallyLoc")&&this.prev<S.finallyLoc){var g=S;break}}g&&(d==="break"||d==="continue")&&g.tryLoc<=l&&l<=g.finallyLoc&&(g=null);var P=g?g.completion:{};return P.type=d,P.arg=l,g?(this.method="next",this.next=g.finallyLoc,k):this.complete(P)},complete:function(d,l){if(d.type==="throw")throw d.arg;return d.type==="break"||d.type==="continue"?this.next=d.arg:d.type==="return"?(this.rval=this.arg=d.arg,this.method="return",this.next="end"):d.type==="normal"&&l&&(this.next=l),k},finish:function(d){for(var l=this.tryEntries.length-1;l>=0;--l){var p=this.tryEntries[l];if(p.finallyLoc===d)return this.complete(p.completion,p.afterLoc),U(p),k}},catch:function(d){for(var l=this.tryEntries.length-1;l>=0;--l){var p=this.tryEntries[l];if(p.tryLoc===d){var S=p.completion;if(S.type==="throw"){var g=S.arg;U(p)}return g}}throw Error("illegal catch attempt")},delegateYield:function(d,l,p){return this.delegate={iterator:de(d),resultName:l,nextLoc:p},this.method==="next"&&(this.arg=t),k}},e}function Gt(t,e,r,o,i,n,s){try{var a=t[n](s),c=a.value}catch(f){r(f);return}a.done?e(c):Promise.resolve(c).then(o,i)}function Wo(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var n=t.apply(e,r);function s(c){Gt(n,o,i,s,a,"next",c)}function a(c){Gt(n,o,i,s,a,"throw",c)}s(void 0)})}}function Or(t,e){return Zo(t)||Ko(t,e)||jr(t,e)||Go()}function Go(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ko(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,i,n,s,a=[],c=!0,f=!1;try{if(n=(r=r.call(t)).next,e!==0)for(;!(c=(o=n.call(r)).done)&&(a.push(o.value),a.length!==e);c=!0);}catch(h){f=!0,i=h}finally{try{if(!c&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(f)throw i}}return a}}function Zo(t){if(Array.isArray(t))return t}function he(t){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(t)}function Jo(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=jr(t))||e){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,s=!1,a;return{s:function(){r=r.call(t)},n:function(){var c=r.next();return n=c.done,c},e:function(c){s=!0,a=c},f:function(){try{!n&&r.return!=null&&r.return()}finally{if(s)throw a}}}}function jr(t,e){if(t){if(typeof t=="string")return Kt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Kt(t,e)}}function Kt(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function Zt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function ye(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Zt(Object(r),!0).forEach(function(o){Qo(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Zt(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Qo(t,e,r){return e=Rr(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ei(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jt(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Rr(o.key),o)}}function ti(t,e,r){return e&&Jt(t.prototype,e),r&&Jt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Rr(t){var e=ri(t,"string");return he(e)=="symbol"?e:e+""}function ri(t,e){if(he(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(he(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var et="tus-v1",tt="ietf-draft-03",De="ietf-draft-05",oi={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Tr,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:et},ot=(function(){function t(e,r){ei(this,t),"resume"in r&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=r,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return ti(t,[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then(function(r){return e._urlStorage.findUploadsByFingerprint(r)})}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e=this,r=this.file;if(!r){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![et,tt,De].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var i=0,n=["uploadUrl","uploadSize","uploadLengthDeferred"];i<n.length;i++){var s=n[i];if(this.options[s]){this._emitError(new Error("tus: cannot use the ".concat(s," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(r,this.options).then(function(a){return e._fingerprint=a,e._source?e._source:e.options.fileReader.openFile(r,e.options.chunkSize)}).then(function(a){if(e._source=a,e.options.uploadLengthDeferred)e._size=null;else if(e.options.uploadSize!=null){if(e._size=Number(e.options.uploadSize),Number.isNaN(e._size)){e._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(e._size=e._source.size,e._size==null){e._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}e.options.parallelUploads>1||e._parallelUploadUrls!=null?e._startParallelUpload():e._startSingleUpload()}).catch(function(a){e._emitError(a)})}},{key:"_startParallelUpload",value:function(){var e,r=this,o=this._size,i=0;this._parallelUploads=[];var n=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,s=(e=this.options.parallelUploadBoundaries)!==null&&e!==void 0?e:ni(this._source.size,n);this._parallelUploadUrls&&s.forEach(function(f,h){f.uploadUrl=r._parallelUploadUrls[h]||null}),this._parallelUploadUrls=new Array(s.length);var a=s.map(function(f,h){var w=0;return r._source.slice(f.start,f.end).then(function(m){var z=m.value;return new Promise(function($,_){var k=ye(ye({},r.options),{},{uploadUrl:f.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:r.options.metadataForPartialUploads,headers:ye(ye({},r.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:$,onError:_,onProgress:function(x){i=i-w+x,w=x,r._emitProgress(i,o)},onUploadUrlAvailable:function(){r._parallelUploadUrls[h]=L.url,r._parallelUploadUrls.filter(function(x){return!!x}).length===s.length&&r._saveUploadInUrlStorage()}}),L=new t(z,k);L.start(),r._parallelUploads.push(L)})})}),c;Promise.all(a).then(function(){c=r._openRequest("POST",r.options.endpoint),c.setHeader("Upload-Concat","final;".concat(r._parallelUploadUrls.join(" ")));var f=Qt(r.options.metadata);return f!==""&&c.setHeader("Upload-Metadata",f),r._sendRequest(c,null)}).then(function(f){if(!ke(f.getStatus(),200)){r._emitHttpError(c,f,"tus: unexpected response while creating upload");return}var h=f.getHeader("Location");if(h==null){r._emitHttpError(c,f,"tus: invalid or missing Location header");return}r.url=or(r.options.endpoint,h),"Created upload at ".concat(r.url),r._emitSuccess(f)}).catch(function(f){r._emitError(f)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(e){var r=this;if(this._parallelUploads!=null){var o=Jo(this._parallelUploads),i;try{for(o.s();!(i=o.n()).done;){var n=i.value;n.abort(e)}}catch(s){o.e(s)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!e||this.url==null?Promise.resolve():t.terminate(this.url,this.options).then(function(){return r._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(e,r,o,i){this._emitError(new Re(o,i,e,r))}},{key:"_emitError",value:function(e){var r=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),rr(e,this._retryAttempt,this.options)){var i=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){r.start()},i);return}}if(typeof this.options.onError=="function")this.options.onError(e);else throw e}}},{key:"_emitSuccess",value:function(e){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:e})}},{key:"_emitProgress",value:function(e,r){typeof this.options.onProgress=="function"&&this.options.onProgress(e,r)}},{key:"_emitChunkComplete",value:function(e,r,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(e,r,o)}},{key:"_createUpload",value:function(){var e=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var r=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?r.setHeader("Upload-Defer-Length","1"):r.setHeader("Upload-Length","".concat(this._size));var o=Qt(this.options.metadata);o!==""&&r.setHeader("Upload-Metadata",o);var i;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,i=this._addChunkToRequest(r)):((this.options.protocol===tt||this.options.protocol===De)&&r.setHeader("Upload-Complete","?0"),i=this._sendRequest(r,null)),i.then(function(n){if(!ke(n.getStatus(),200)){e._emitHttpError(r,n,"tus: unexpected response while creating upload");return}var s=n.getHeader("Location");if(s==null){e._emitHttpError(r,n,"tus: invalid or missing Location header");return}if(e.url=or(e.options.endpoint,s),"Created upload at ".concat(e.url),typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._size===0){e._emitSuccess(n),e._source.close();return}e._saveUploadInUrlStorage().then(function(){e.options.uploadDataDuringCreation?e._handleUploadResponse(r,n):(e._offset=0,e._performUpload())})}).catch(function(n){e._emitHttpError(r,null,"tus: failed to create upload",n)})}},{key:"_resumeUpload",value:function(){var e=this,r=this._openRequest("HEAD",this.url),o=this._sendRequest(r,null);o.then(function(i){var n=i.getStatus();if(!ke(n,200)){if(n===423){e._emitHttpError(r,i,"tus: upload is currently locked; retry later");return}if(ke(n,400)&&e._removeFromUrlStorage(),!e.options.endpoint){e._emitHttpError(r,i,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}e.url=null,e._createUpload();return}var s=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(s)){e._emitHttpError(r,i,"tus: invalid or missing offset value");return}var a=Number.parseInt(i.getHeader("Upload-Length"),10);if(Number.isNaN(a)&&!e.options.uploadLengthDeferred&&e.options.protocol===et){e._emitHttpError(r,i,"tus: invalid or missing length value");return}typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._saveUploadInUrlStorage().then(function(){if(s===a){e._emitProgress(a,a),e._emitSuccess(i);return}e._offset=s,e._performUpload()})}).catch(function(i){e._emitHttpError(r,null,"tus: failed to resume upload",i)})}},{key:"_performUpload",value:function(){var e=this;if(!this._aborted){var r;this.options.overridePatchMethod?(r=this._openRequest("POST",this.url),r.setHeader("X-HTTP-Method-Override","PATCH")):r=this._openRequest("PATCH",this.url),r.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(r);o.then(function(i){if(!ke(i.getStatus(),200)){e._emitHttpError(r,i,"tus: unexpected response while uploading chunk");return}e._handleUploadResponse(r,i)}).catch(function(i){e._aborted||e._emitHttpError(r,null,"tus: failed to upload chunk at offset ".concat(e._offset),i)})}}},{key:"_addChunkToRequest",value:function(e){var r=this,o=this._offset,i=this._offset+this.options.chunkSize;return e.setProgressHandler(function(n){r._emitProgress(o+n,r._size)}),this.options.protocol===et?e.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===De&&e.setHeader("Content-Type","application/partial-upload"),(i===Number.POSITIVE_INFINITY||i>this._size)&&!this.options.uploadLengthDeferred&&(i=this._size),this._source.slice(o,i).then(function(n){var s=n.value,a=n.done,c=s!=null&&s.size?s.size:0;r.options.uploadLengthDeferred&&a&&(r._size=r._offset+c,e.setHeader("Upload-Length","".concat(r._size)));var f=r._offset+c;return!r.options.uploadLengthDeferred&&a&&f!==r._size?Promise.reject(new Error("upload was configured with a size of ".concat(r._size," bytes, but the source is done after ").concat(f," bytes"))):s===null?r._sendRequest(e):((r.options.protocol===tt||r.options.protocol===De)&&e.setHeader("Upload-Complete",a?"?1":"?0"),r._emitProgress(r._offset,r._size),r._sendRequest(e,s))})}},{key:"_handleUploadResponse",value:function(e,r){var o=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(e,r,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(r),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(e,r){var o=er(e,r,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(r){e._emitError(r)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var r={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?r.parallelUploadUrls=this._parallelUploadUrls:r.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,r).then(function(o){e._urlStorageKey=o})}},{key:"_sendRequest",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return tr(e,r,this.options)}}],[{key:"terminate",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=er("DELETE",e,r);return tr(o,null,r).then(function(i){if(i.getStatus()!==204)throw new Re("tus: unexpected response while terminating upload",null,o,i)}).catch(function(i){if(i instanceof Re||(i=new Re("tus: failed to terminate upload",i,o,null)),!rr(i,0,r))throw i;var n=r.retryDelays[0],s=r.retryDelays.slice(1),a=ye(ye({},r),{},{retryDelays:s});return new Promise(function(c){return setTimeout(c,n)}).then(function(){return t.terminate(e,a)})})}}])})();function Qt(t){return Object.entries(t).map(function(e){var r=Or(e,2),o=r[0],i=r[1];return"".concat(o," ").concat(Io.encode(String(i)))}).join(",")}function ke(t,e){return t>=e&&t<e+100}function er(t,e,r){var o=r.httpStack.createRequest(t,e);r.protocol===tt?o.setHeader("Upload-Draft-Interop-Version","5"):r.protocol===De?o.setHeader("Upload-Draft-Interop-Version","6"):o.setHeader("Tus-Resumable","1.0.0");for(var i=r.headers||{},n=0,s=Object.entries(i);n<s.length;n++){var a=Or(s[n],2),c=a[0],f=a[1];o.setHeader(c,f)}if(r.addRequestId){var h=Xo();o.setHeader("X-Request-ID",h)}return o}function tr(t,e,r){return mt.apply(this,arguments)}function mt(){return mt=Wo(bt().mark(function t(e,r,o){var i;return bt().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(typeof o.onBeforeRequest!="function"){n.next=3;break}return n.next=3,o.onBeforeRequest(e);case 3:return n.next=5,e.send(r);case 5:if(i=n.sent,typeof o.onAfterResponse!="function"){n.next=9;break}return n.next=9,o.onAfterResponse(e,i);case 9:return n.abrupt("return",i);case 10:case"end":return n.stop()}},t)})),mt.apply(this,arguments)}function ii(){var t=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(t=!1),t}function rr(t,e,r){return r.retryDelays==null||e>=r.retryDelays.length||t.originalRequest==null?!1:r&&typeof r.onShouldRetry=="function"?r.onShouldRetry(t,e,r):Tr(t)}function Tr(t){var e=t.originalResponse?t.originalResponse.getStatus():0;return(!ke(e,400)||e===409||e===423)&&ii()}function or(t,e){return new Vo(e,t).toString()}function ni(t,e){for(var r=Math.floor(t/e),o=[],i=0;i<e;i++)o.push({start:r*i,end:r*(i+1)});return o[e-1].end=t,o}ot.defaultOptions=oi;var Dr=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function si(t){return new Promise(function(e,r){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var i=o.response;e(i)},o.onerror=function(i){r(i)},o.open("GET",t),o.send()})}var ai=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function li(t){return new Promise(function(e,r){var o=new FileReader;o.onload=function(){var i=new Uint8Array(o.result);e({value:i})},o.onerror=function(i){r(i)},o.readAsArrayBuffer(t)})}function Ie(t){"@babel/helpers - typeof";return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ie(t)}function di(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ci(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ui(o.key),o)}}function pi(t,e,r){return e&&ci(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ui(t){var e=fi(t,"string");return Ie(e)=="symbol"?e:e+""}function fi(t,e){if(Ie(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Ie(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var ir=(function(){function t(e){di(this,t),this._file=e,this.size=e.size}return pi(t,[{key:"slice",value:function(e,r){if(ai())return li(this._file.slice(e,r));var o=this._file.slice(e,r),i=r>=this.size;return Promise.resolve({value:o,done:i})}},{key:"close",value:function(){}}])})();function Me(t){"@babel/helpers - typeof";return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Me(t)}function hi(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gi(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,xi(o.key),o)}}function vi(t,e,r){return e&&gi(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function xi(t){var e=bi(t,"string");return Me(e)=="symbol"?e:e+""}function bi(t,e){if(Me(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Me(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function nr(t){return t===void 0?0:t.size!==void 0?t.size:t.length}function mi(t,e){if(t.concat)return t.concat(e);if(t instanceof Blob)return new Blob([t,e],{type:t.type});if(t.set){var r=new t.constructor(t.length+e.length);return r.set(t),r.set(e,t.length),r}throw new Error("Unknown data type")}var yi=(function(){function t(e){hi(this,t),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return vi(t,[{key:"slice",value:function(e,r){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,r)}},{key:"_readUntilEnoughDataOrDone",value:function(e,r){var o=this,i=r<=this._bufferOffset+nr(this._buffer);if(this._done||i){var n=this._getDataFromBuffer(e,r),s=n==null?this._done:!1;return Promise.resolve({value:n,done:s})}return this._reader.read().then(function(a){var c=a.value,f=a.done;return f?o._done=!0:o._buffer===void 0?o._buffer=c:o._buffer=mi(o._buffer,c),o._readUntilEnoughDataOrDone(e,r)})}},{key:"_getDataFromBuffer",value:function(e,r){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var o=nr(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,r-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function ge(t){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ge(t)}function yt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */yt=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(d,l,p){d[l]=p.value},n=typeof Symbol=="function"?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function f(d,l,p){return Object.defineProperty(d,l,{value:p,enumerable:!0,configurable:!0,writable:!0}),d[l]}try{f({},"")}catch{f=function(d,l,p){return d[l]=p}}function h(d,l,p,S){var g=l&&l.prototype instanceof L?l:L,P=Object.create(g.prototype),D=new Z(S||[]);return i(P,"_invoke",{value:X(d,p,D)}),P}function w(d,l,p){try{return{type:"normal",arg:d.call(l,p)}}catch(S){return{type:"throw",arg:S}}}e.wrap=h;var m="suspendedStart",z="suspendedYield",$="executing",_="completed",k={};function L(){}function x(){}function y(){}var v={};f(v,s,function(){return this});var b=Object.getPrototypeOf,O=b&&b(b(de([])));O&&O!==r&&o.call(O,s)&&(v=O);var E=y.prototype=L.prototype=Object.create(v);function F(d){["next","throw","return"].forEach(function(l){f(d,l,function(p){return this._invoke(l,p)})})}function T(d,l){function p(g,P,D,A){var I=w(d[g],d,P);if(I.type!=="throw"){var W=I.arg,J=W.value;return J&&ge(J)=="object"&&o.call(J,"__await")?l.resolve(J.__await).then(function(Y){p("next",Y,D,A)},function(Y){p("throw",Y,D,A)}):l.resolve(J).then(function(Y){W.value=Y,D(W)},function(Y){return p("throw",Y,D,A)})}A(I.arg)}var S;i(this,"_invoke",{value:function(g,P){function D(){return new l(function(A,I){p(g,P,A,I)})}return S=S?S.then(D,D):D()}})}function X(d,l,p){var S=m;return function(g,P){if(S===$)throw Error("Generator is already running");if(S===_){if(g==="throw")throw P;return{value:t,done:!0}}for(p.method=g,p.arg=P;;){var D=p.delegate;if(D){var A=ne(D,p);if(A){if(A===k)continue;return A}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(S===m)throw S=_,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);S=$;var I=w(d,l,p);if(I.type==="normal"){if(S=p.done?_:z,I.arg===k)continue;return{value:I.arg,done:p.done}}I.type==="throw"&&(S=_,p.method="throw",p.arg=I.arg)}}}function ne(d,l){var p=l.method,S=d.iterator[p];if(S===t)return l.delegate=null,p==="throw"&&d.iterator.return&&(l.method="return",l.arg=t,ne(d,l),l.method==="throw")||p!=="return"&&(l.method="throw",l.arg=new TypeError("The iterator does not provide a '"+p+"' method")),k;var g=w(S,d.iterator,l.arg);if(g.type==="throw")return l.method="throw",l.arg=g.arg,l.delegate=null,k;var P=g.arg;return P?P.done?(l[d.resultName]=P.value,l.next=d.nextLoc,l.method!=="return"&&(l.method="next",l.arg=t),l.delegate=null,k):P:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,k)}function be(d){var l={tryLoc:d[0]};1 in d&&(l.catchLoc=d[1]),2 in d&&(l.finallyLoc=d[2],l.afterLoc=d[3]),this.tryEntries.push(l)}function U(d){var l=d.completion||{};l.type="normal",delete l.arg,d.completion=l}function Z(d){this.tryEntries=[{tryLoc:"root"}],d.forEach(be,this),this.reset(!0)}function de(d){if(d||d===""){var l=d[s];if(l)return l.call(d);if(typeof d.next=="function")return d;if(!isNaN(d.length)){var p=-1,S=function g(){for(;++p<d.length;)if(o.call(d,p))return g.value=d[p],g.done=!1,g;return g.value=t,g.done=!0,g};return S.next=S}}throw new TypeError(ge(d)+" is not iterable")}return x.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:x,configurable:!0}),x.displayName=f(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(d){var l=typeof d=="function"&&d.constructor;return!!l&&(l===x||(l.displayName||l.name)==="GeneratorFunction")},e.mark=function(d){return Object.setPrototypeOf?Object.setPrototypeOf(d,y):(d.__proto__=y,f(d,c,"GeneratorFunction")),d.prototype=Object.create(E),d},e.awrap=function(d){return{__await:d}},F(T.prototype),f(T.prototype,a,function(){return this}),e.AsyncIterator=T,e.async=function(d,l,p,S,g){g===void 0&&(g=Promise);var P=new T(h(d,l,p,S),g);return e.isGeneratorFunction(l)?P:P.next().then(function(D){return D.done?D.value:P.next()})},F(E),f(E,c,"Generator"),f(E,s,function(){return this}),f(E,"toString",function(){return"[object Generator]"}),e.keys=function(d){var l=Object(d),p=[];for(var S in l)p.push(S);return p.reverse(),function g(){for(;p.length;){var P=p.pop();if(P in l)return g.value=P,g.done=!1,g}return g.done=!0,g}},e.values=de,Z.prototype={constructor:Z,reset:function(d){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!d)for(var l in this)l.charAt(0)==="t"&&o.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=t)},stop:function(){this.done=!0;var d=this.tryEntries[0].completion;if(d.type==="throw")throw d.arg;return this.rval},dispatchException:function(d){if(this.done)throw d;var l=this;function p(I,W){return P.type="throw",P.arg=d,l.next=I,W&&(l.method="next",l.arg=t),!!W}for(var S=this.tryEntries.length-1;S>=0;--S){var g=this.tryEntries[S],P=g.completion;if(g.tryLoc==="root")return p("end");if(g.tryLoc<=this.prev){var D=o.call(g,"catchLoc"),A=o.call(g,"finallyLoc");if(D&&A){if(this.prev<g.catchLoc)return p(g.catchLoc,!0);if(this.prev<g.finallyLoc)return p(g.finallyLoc)}else if(D){if(this.prev<g.catchLoc)return p(g.catchLoc,!0)}else{if(!A)throw Error("try statement without catch or finally");if(this.prev<g.finallyLoc)return p(g.finallyLoc)}}}},abrupt:function(d,l){for(var p=this.tryEntries.length-1;p>=0;--p){var S=this.tryEntries[p];if(S.tryLoc<=this.prev&&o.call(S,"finallyLoc")&&this.prev<S.finallyLoc){var g=S;break}}g&&(d==="break"||d==="continue")&&g.tryLoc<=l&&l<=g.finallyLoc&&(g=null);var P=g?g.completion:{};return P.type=d,P.arg=l,g?(this.method="next",this.next=g.finallyLoc,k):this.complete(P)},complete:function(d,l){if(d.type==="throw")throw d.arg;return d.type==="break"||d.type==="continue"?this.next=d.arg:d.type==="return"?(this.rval=this.arg=d.arg,this.method="return",this.next="end"):d.type==="normal"&&l&&(this.next=l),k},finish:function(d){for(var l=this.tryEntries.length-1;l>=0;--l){var p=this.tryEntries[l];if(p.finallyLoc===d)return this.complete(p.completion,p.afterLoc),U(p),k}},catch:function(d){for(var l=this.tryEntries.length-1;l>=0;--l){var p=this.tryEntries[l];if(p.tryLoc===d){var S=p.completion;if(S.type==="throw"){var g=S.arg;U(p)}return g}}throw Error("illegal catch attempt")},delegateYield:function(d,l,p){return this.delegate={iterator:de(d),resultName:l,nextLoc:p},this.method==="next"&&(this.arg=t),k}},e}function sr(t,e,r,o,i,n,s){try{var a=t[n](s),c=a.value}catch(f){r(f);return}a.done?e(c):Promise.resolve(c).then(o,i)}function wi(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var n=t.apply(e,r);function s(c){sr(n,o,i,s,a,"next",c)}function a(c){sr(n,o,i,s,a,"throw",c)}s(void 0)})}}function _i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ki(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Si(o.key),o)}}function Ci(t,e,r){return e&&ki(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Si(t){var e=$i(t,"string");return ge(e)=="symbol"?e:e+""}function $i(t,e){if(ge(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(ge(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Ui=(function(){function t(){_i(this,t)}return Ci(t,[{key:"openFile",value:(function(){var e=wi(yt().mark(function o(i,n){var s;return yt().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(Dr()&&i&&typeof i.uri<"u")){a.next=11;break}return a.prev=1,a.next=4,si(i.uri);case 4:return s=a.sent,a.abrupt("return",new ir(s));case 8:throw a.prev=8,a.t0=a.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(a.t0));case 11:if(!(typeof i.slice=="function"&&typeof i.size<"u")){a.next=13;break}return a.abrupt("return",Promise.resolve(new ir(i)));case 13:if(typeof i.read!="function"){a.next=18;break}if(n=Number(n),Number.isFinite(n)){a.next=17;break}return a.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return a.abrupt("return",Promise.resolve(new yi(i,n)));case 18:return a.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return a.stop()}},o,null,[[1,8]])}));function r(o,i){return e.apply(this,arguments)}return r})()}])})();function Ei(t,e){return Dr()?Promise.resolve(Pi(t,e)):Promise.resolve(["tus-br",t.name,t.type,t.size,t.lastModified,e.endpoint].join("-"))}function Pi(t,e){var r=t.exif?zi(JSON.stringify(t.exif)):"noexif";return["tus-rn",t.name||"noname",t.size||"nosize",r,e.endpoint].join("/")}function zi(t){var e=0;if(t.length===0)return e;for(var r=0;r<t.length;r++){var o=t.charCodeAt(r);e=(e<<5)-e+o,e&=e}return e}function He(t){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(t)}function jt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Oi(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ji(o.key),o)}}function Rt(t,e,r){return e&&Oi(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ji(t){var e=Ri(t,"string");return He(e)=="symbol"?e:e+""}function Ri(t,e){if(He(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(He(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Ti=(function(){function t(){jt(this,t)}return Rt(t,[{key:"createRequest",value:function(e,r){return new Di(e,r)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),Di=(function(){function t(e,r){jt(this,t),this._xhr=new XMLHttpRequest,this._xhr.open(e,r,!0),this._method=e,this._url=r,this._headers={}}return Rt(t,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,r){this._xhr.setRequestHeader(e,r),this._headers[e]=r}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(r){r.lengthComputable&&e(r.loaded)})}},{key:"send",value:function(){var e=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,i){e._xhr.onload=function(){o(new Li(e._xhr))},e._xhr.onerror=function(n){i(n)},e._xhr.send(r)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Li=(function(){function t(e){jt(this,t),this._xhr=e}return Rt(t,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function qe(t){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qe(t)}function Fi(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bi(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Ii(o.key),o)}}function Ai(t,e,r){return e&&Bi(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ii(t){var e=Mi(t,"string");return qe(e)=="symbol"?e:e+""}function Mi(t,e){if(qe(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(qe(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var wt=!1;try{wt="localStorage"in window;var pt="tusSupport",ar=localStorage.getItem(pt);localStorage.setItem(pt,ar),ar===null&&localStorage.removeItem(pt)}catch(t){if(t.code===t.SECURITY_ERR||t.code===t.QUOTA_EXCEEDED_ERR)wt=!1;else throw t}var Hi=wt,qi=(function(){function t(){Fi(this,t)}return Ai(t,[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var r=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(r)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,r){var o=Math.round(Math.random()*1e12),i="tus::".concat(e,"::").concat(o);return localStorage.setItem(i,JSON.stringify(r)),Promise.resolve(i)}},{key:"_findEntries",value:function(e){for(var r=[],o=0;o<localStorage.length;o++){var i=localStorage.key(o);if(i.indexOf(e)===0)try{var n=JSON.parse(localStorage.getItem(i));n.urlStorageKey=i,r.push(n)}catch{}}return r}}])})();function $e(t){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$e(t)}function Ni(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yi(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Fr(o.key),o)}}function Vi(t,e,r){return r&&Yi(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Xi(t,e,r){return e=it(e),Wi(t,Lr()?Reflect.construct(e,r||[],it(t).constructor):e.apply(t,r))}function Wi(t,e){if(e&&($e(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gi(t)}function Gi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Lr(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Lr=function(){return!!t})()}function it(t){return it=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},it(t)}function Ki(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_t(t,e)}function _t(t,e){return _t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},_t(t,e)}function lr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,o)}return r}function Ce(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?lr(Object(r),!0).forEach(function(o){Zi(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):lr(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Zi(t,e,r){return e=Fr(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Fr(t){var e=Ji(t,"string");return $e(e)=="symbol"?e:e+""}function Ji(t,e){if($e(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if($e(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var dr=Ce(Ce({},ot.defaultOptions),{},{httpStack:new Ti,fileReader:new Ui,urlStorage:Hi?new qi:new Po,fingerprint:Ei}),Qi=(function(t){function e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ni(this,e),o=Ce(Ce({},dr),o),Xi(this,e,[r,o])}return Ki(e,t),Vi(e,null,[{key:"terminate",value:function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=Ce(Ce({},dr),o),ot.terminate(r,o)}}])})(ot);const en=10*1024*1024,tn=5*1024*1024,rn="https://eu-on-24001.connector.filerobot.com/files",on="https://eu-on-24001.connector.filerobot.com/json";function nn(t,e){if(!e||!t.file)return!1;const r=e.sizeThreshold??en;return t.size>=r}function sn(t,e){const{tusConfig:r}=e,o=e.apiBase.replace(/\/+$/,""),i=r.endpoint||rn,n=r.chunkSize??tn,s=r.resumable!==!1,a=r.parallelChunks??1,c=r.retryDelays??[0,1e3,3e3,5e3],f=o.split("/").pop()||"";let h=!1,w=!1,m=!1;const z={name:t.name,type:t.type,"filerobot-folder":e.folder},$=async()=>`tus-${t.id}-${i}`,_=new Qi(t.file,{endpoint:i,chunkSize:n,retryDelays:c,parallelUploads:a,storeFingerprintForResuming:s,removeFingerprintOnSuccess:!0,headers:{},metadata:z,fingerprint:$,onBeforeRequest(v){const b=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[O,E]of Object.entries(b))v.setHeader(O,E);v.setHeader("X-Filerobot-Token",f)},onUploadUrlAvailable(){_.url&&e.onUploadUrlAvailable&&!m&&(m=!0,e.onUploadUrlAvailable(_.url))},onProgress(v,b){!w&&!h&&e.onProgress(v,b)},onSuccess(){var v;if(w)return;x();const b=_.url||"",O=(v=b.match(/files\/([^/?]+)/))==null?void 0:v[1];O?ln(O,t.size).then(E=>{w||e.onComplete(E)}).catch(E=>{w||e.onError(E)}):e.onComplete({status:"success",file:{uuid:"",name:t.name,extension:t.name.split(".").pop()||"",type:t.type,size:t.size,url:{public:b,cdn:b},meta:t.meta,tags:t.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(v){w||(x(),an(v)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(v instanceof Error?v:new Error(String(v))))},onShouldRetry(v,b,O){var E;const F=(E=v.originalResponse)==null?void 0:E.getStatus();return F===429?!0:!(F&&F>400&&F<500&&F!==409)}});let k=null,L=null;typeof window<"u"&&(k=()=>{var v;!h&&!w&&(h=!0,_.abort(!1),(v=e.onPause)==null||v.call(e))},L=()=>{var v;h&&!w&&(h=!1,_.start(),(v=e.onResume)==null||v.call(e))},window.addEventListener("offline",k),window.addEventListener("online",L));const x=()=>{k&&window.removeEventListener("offline",k),L&&window.removeEventListener("online",L)},y=()=>{try{_.start()}catch(v){x(),e.onError(v instanceof Error?v:new Error(String(v)))}};return s?_.findPreviousUploads().then(v=>{v.length>0&&!w&&_.resumeFromPreviousUpload(v[0]),w||y()}):y(),{abort(){w=!0,h=!1,x(),_.abort(!0)},pause(){!h&&!w&&(h=!0,_.abort(!1))},resume(){h&&!w&&(h=!1,_.start())},isPaused(){return h}}}function an(t){var e;if(t instanceof Re){const r=(e=t.originalRequest)==null?void 0:e.getUnderlyingObject();return r&&typeof r.readyState=="number"&&typeof r.status=="number"?r.readyState!==0&&r.readyState!==4||r.status===0:t.originalResponse==null&&t.causingError!=null}return!1}async function ln(t,e){const r=`${on}/${t}`,o=e>1e8?13e3:6e3,i=3;for(let n=0;n<=i;n++){n>0&&await new Promise(c=>setTimeout(c,o));const s=await fetch(r);if(s.status===404&&n<i)continue;if(!s.ok)throw new Error(`Failed to fetch file record (HTTP ${s.status})`);const a=await s.json();if(a.file)return{status:"success",file:a.file};if(a.status==="success")return a;if(!(n<i))throw new Error(a.msg||"File record not available after upload")}throw new Error("File record not available after upload")}class dn{constructor(e,r){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=r}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let r=!1;for(const o of e.values())o.status==="idle"?(q(this.store,o.id,{status:"queued"}),r=!0):o.status==="queued"&&(r=!0);r&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const r=this.store.getState().files.get(e);!r||r.status!=="error"&&r.status!=="failed"||(q(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const r of e.values())(r.status==="error"||r.status==="failed")&&q(this.store,r.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const r=this.activeUploads.get(e);r&&"pause"in r&&(r.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,r),q(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const r=this.pausedUploads.get(e);if(!r)return;const{concurrency:o}=this.store.getState().queueConfig;this.activeUploads.size<o?(this.pausedUploads.delete(e),r.resume(),this.activeUploads.set(e,r),q(this.store,e,{status:"uploading"})):q(this.store,e,{status:"queued"})}cancelFile(e){const r=this.store.getState().files.get(e);!r||!cr(r.status)||(this.abortPausedUpload(e),this.abortUpload(e),q(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const r of e.values())cr(r.status)&&(this.abortPausedUpload(r.id),this.abortUpload(r.id),q(this.store,r.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const r of this.activeUploads.keys())this.abortUpload(r);for(const r of[...this.pausedUploads.keys()])this.abortPausedUpload(r);for(const r of this.retryTimers.values())clearTimeout(r);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:r}=e.queueConfig,o=this.activeUploads.size,i=r-o;if(i<=0)return;const n=[...e.files.values()].filter(s=>s.status==="queued").sort((s,a)=>s.retryCount!==a.retryCount?a.retryCount-s.retryCount:s.addedAt-a.addedAt).slice(0,i);for(const s of n){const a=this.pausedUploads.get(s.id);a?(this.pausedUploads.delete(s.id),a.resume(),this.activeUploads.set(s.id,a),q(this.store,s.id,{status:"uploading"})):this.startUpload(s)}}startUpload(e){const r=!e.remoteInfo&&!e.remoteUrl&&nn(e,this.config.tusConfig);q(this.store,e.id,{status:"uploading",error:null,isTus:r});let o=0,i=Date.now(),n=0;const s={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,onComplete:f=>this.handleComplete(e.id,f),onError:f=>this.handleError(e.id,f)},a=(f,h)=>{const w=Date.now(),m=(w-i)/1e3;if(m>0){const $=(f-o)/m;n=n===0?$:.3*$+.7*n}o=f,i=w;const z=h>0?Math.min(f/h*100,100):0;q(this.store,e.id,{progress:z,bytesUploaded:f,speed:n}),this.updateTotalProgress()};let c;if(e.remoteInfo)c=go(e,{...s,onProgress:a});else if(e.remoteUrl)c=po(e,s);else if(r){const f=sn(e,{...s,onProgress:a,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:h=>{q(this.store,e.id,{tusUploadUrl:h})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,f),q(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,f),q(this.store,e.id,{status:"uploading"})}});c=f}else c=co(e,{...s,onProgress:a});this.activeUploads.set(e.id,c)}handleComplete(e,r){this.activeUploads.delete(e),q(this.store,e,{status:"complete",progress:100,response:r}),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,r){this.activeUploads.delete(e);const o=this.store.getState().files.get(e);if(!o)return;const{retryConfig:i}=this.store.getState().queueConfig,n=o.retryCount+1;if(n<=i.maxRetries){const s=Math.min(i.baseDelay*Math.pow(i.backoffFactor,o.retryCount),i.maxDelay);q(this.store,e,{status:"retrying",error:r.message,retryCount:n});const a=setTimeout(()=>{this.retryTimers.delete(e),q(this.store,e,{status:"queued"}),this.processQueue()},s);this.retryTimers.set(e,a)}else q(this.store,e,{status:"failed",error:r.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const r=this.pausedUploads.get(e);r&&(r.abort(),this.pausedUploads.delete(e))}abortUpload(e){var r;(r=this.activeUploads.get(e))==null||r.abort(),this.activeUploads.delete(e);const o=this.retryTimers.get(e);o&&(clearTimeout(o),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let r=0,o=0,i=0;for(const n of e.values())(n.status==="queued"||n.status==="uploading"||n.status==="paused"||n.status==="retrying"||n.status==="complete"||n.status==="failed")&&(r+=n.size,o+=n.status==="complete"?n.size:n.bytesUploaded),n.status==="uploading"&&(i+=n.speed);this.store.setState({totalBytes:r,totalBytesUploaded:o,totalSpeed:i,totalProgress:r>0?Math.min(o/r*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(r=>r.status==="queued"||r.status==="uploading"||r.status==="retrying"||r.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function cr(t){return t==="queued"||t==="uploading"||t==="retrying"||t==="paused"}function Tt(t){return`https://api.filerobot.com/${t}`}async function cn(t,e){const r=`${Tt(t)}/key/${encodeURIComponent(e)}`,o=new AbortController,i=setTimeout(()=>o.abort(),3e4);try{const n=await fetch(r,{signal:o.signal});if(clearTimeout(i),!n.ok)throw new Error(`SASS key exchange failed (HTTP ${n.status})`);const s=await n.json();if(s.status==="error")throw new Error(`SASS key exchange failed: ${s.msg||"Unknown error"}`);return s.key}catch(n){throw clearTimeout(i),n instanceof DOMException&&n.name==="AbortError"?new Error("SASS key exchange timed out"):n}}function kt(t,e){const r={};switch(t.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");r["X-Filerobot-Key"]=e;break;case"sass-key":r["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(r["X-Filerobot-Airbox-Puid"]=t.airboxPuid),r}async function pn(t){const e=Tt(t.container);if(t.mode==="security-template"){const r=await cn(t.container,t.securityTemplateId);return{apiBase:e,headers:kt(t,r),sassKey:r}}return{apiBase:e,headers:kt(t)}}const nt="sfx-uploader:last-upload:",Br=1;function un(t){var e,r,o;const{file:i,previewUrl:n,...s}=t,a=t.status==="complete"&&(o=(r=(e=t.response)==null?void 0:e.file)==null?void 0:r.url)!=null&&o.cdn?t.response.file.url.cdn:null;return{...s,previewUrl:a}}function fn(t){try{const e=sessionStorage.getItem(nt+t);if(!e)return null;const r=JSON.parse(e);return(r==null?void 0:r.__schemaVersion)!==Br?null:r}catch{return null}}function hn(t,e){try{sessionStorage.setItem(nt+t,JSON.stringify(e))}catch{}}const Je={save(t,e){if(e.length===0){this.clear(t);return}const r={__schemaVersion:Br,savedAt:Date.now(),files:e.map(un)};hn(t,r)},load(t){const e=fn(t);return e?e.files.map(r=>({...r,file:null,previewUrl:r.previewUrl??null})):null},exists(t){try{return sessionStorage.getItem(nt+t)!=null}catch{return!1}},clear(t){try{sessionStorage.removeItem(nt+t)}catch{}}},B={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let gn=0;function we(){return`file-${Date.now()}-${++gn}`}function ce(t){if(t<=0)return"0 B";const e=["B","KB","MB","GB"],r=Math.min(Math.floor(Math.log(t)/Math.log(1024)),e.length-1),o=t/Math.pow(1024,r);return`${r===0?o:o.toFixed(1)} ${e[r]}`}function ut(t){if(!isFinite(t)||t<=0)return"0s";const e=Math.round(t);if(e<60)return`${e}s`;const r=Math.floor(e/60),o=e%60;return o>0?`${r}m ${o}s`:`${r}m`}function Ar(t){var e;const r=((e=t.name.split(".").pop())==null?void 0:e.toLowerCase())??"";return t.type.startsWith("image/")?"image":t.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(r)?"vid":t.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(r)?"audio":t.type==="application/pdf"||r==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(r)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(r)?"doc":["ppt","pptx","key","odp"].includes(r)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(r)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(r)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(r)?"markup":["ttf","otf","woff","woff2","eot"].includes(r)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(r)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(r)?"binary":["sql","db","sqlite","mdb"].includes(r)?"data":"gen"}function vn(t){const e=t.lastIndexOf(".");return e>=0?t.slice(e+1).toUpperCase():""}const xn="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Ir={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function Ct(t){const e=t==="_default"?"GENERIC":t.toUpperCase();return`${xn}${e}.svg?vh=${Ir[t]}`}function Mr(t){const e=(t==null?void 0:t.toLowerCase().replaceAll(".",""))||"";return e in Ir?Ct(e):Ct("_default")}function Hr(){return Ct("_default")}const bn={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function mn(t){var e;const r=((e=t.split(".").pop())==null?void 0:e.toLowerCase())??"";return bn[r]||""}function yn(t){return new Promise(e=>{const r=document.createElement("video");r.preload="metadata",r.muted=!0,r.playsInline=!0;const o=URL.createObjectURL(t);let i=!1;const n=()=>{i||(i=!0,e(null)),r.removeAttribute("src"),r.load(),URL.revokeObjectURL(o)};r.addEventListener("seeked",()=>{try{const s=document.createElement("canvas");s.width=r.videoWidth||320,s.height=r.videoHeight||240;const a=s.getContext("2d");if(a){a.drawImage(r,0,0,s.width,s.height),s.toBlob(c=>{i||(i=!0,e(c?URL.createObjectURL(c):null),r.removeAttribute("src"),r.load(),URL.revokeObjectURL(o))},"image/jpeg",.7);return}}catch{}n()},{once:!0}),r.addEventListener("error",()=>n(),{once:!0}),setTimeout(()=>n(),5e3),r.src=o,r.addEventListener("loadeddata",()=>{r.currentTime=.1},{once:!0})})}function St(t,e,r){var o,i;if(e.maxFileSize!=null&&t.size>0&&t.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&t.size>0){let n=t.size;for(const s of r.values())s.status!=="rejected"&&s.status!=="cancelled"&&(n+=s.size);if(n>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let n=0;for(const s of r.values())s.status!=="rejected"&&s.status!=="cancelled"&&n++;if(n>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const n=e.allowedFileTypes,s="."+(((o=t.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(!n.some(a=>a.startsWith(".")?s===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return"File type not allowed"}if(e.blockedFileTypes!=null){const n=e.blockedFileTypes,s="."+(((i=t.name.split(".").pop())==null?void 0:i.toLowerCase())??"");if(n.some(a=>a.startsWith(".")?s===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return"File type is blocked"}return null}function wn(t,e,r){return St(t,e,r)}function pr(t){return t.allowedFileTypes?t.allowedFileTypes.join(","):""}const ur={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:transparent"><svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg></span>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0061ff"><svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg></span>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0078d4"><svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg></span>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#0e50a0;font-size:9px;font-weight:800;color:#fff">box</span>'},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></span>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#1877f2"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg></span>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandHtml:'<span class="brand-ico" style="background:#111"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg></span>'}};function _n(t){return t.filter(e=>e in ur).map(e=>ur[e])}var kn=Object.defineProperty,Cn=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&kn(e,r,i),i};const Sn='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',$n='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Un='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',En='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Le=[{id:"device",label:"My Device",icon:Sn,iconColor:"#2563eb"},{id:"url",label:"URL link",icon:$n,iconColor:"#16a34a"},{id:"camera",label:"Camera",icon:Un,iconColor:"#7c3aed"},{id:"screen-cast",label:"Screen capture",icon:En,iconColor:"#ea580c"}],qr=class extends G{constructor(){super(...arguments),this.sources=Le}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return u`
      ${this.sources.map(e=>u`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?ue(e.brandHtml):pe`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ae(e.icon)}</svg>`}
            ${e.label}
          </button>
        `)}
    `}};qr.styles=V`
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
  `;let Nr=qr;Cn([R({type:Array})],Nr.prototype,"sources");function Yr(t){let e=t;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const r=e.shadowRoot.querySelector("dialog[open]");if(r instanceof HTMLDialogElement)return r}e=e.parentNode}return document.body}var Pn=Object.defineProperty,Q=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Pn(e,r,i),i};const fr=3,$t=new CSSStyleSheet;$t.replaceSync(`
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
`);var je;const K=(je=class extends G{constructor(){super(...arguments),this.compact=!1,this.externalDragOver=!1,this.accept="",this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=fr,this._dragCounter=0,this._onDragEnter=t=>{t.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=t=>{t.preventDefault()},this._onDragLeave=t=>{t.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=t=>{var e;t.preventDefault(),t.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const r=Array.from(((e=t.dataTransfer)==null?void 0:e.files)??[]);r.length>0&&this._emitFiles(r)},this._onClick=t=>{const e=this.shadowRoot.querySelector(".drop-zone");if(e&&this._rippleEl){const r=e.getBoundingClientRect();this._rippleEl.style.left=`${t.clientX-r.left}px`,this._rippleEl.style.top=`${t.clientY-r.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.browse())},this._onFileChange=t=>{const e=t.target,r=Array.from(e.files??[]);r.length>0&&this._emitFiles(r),e.value=""},this._onPaste=t=>{var e;if(!this.isConnected||this.offsetWidth===0)return;const r=(e=t.clipboardData)==null?void 0:e.items;if(!r)return;const o=[];for(const i of r)if(i.kind==="file"){const n=i.getAsFile();n&&o.push(n)}o.length>0&&(t.preventDefault(),this._emitFiles(o))},this._portalContainer=null,this._onDocClick=t=>{var e;this._moreOpen&&((e=this._portalContainer)!=null&&e.contains(t.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=t=>{t.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var t;(t=this.fileInput)==null||t.click()}_onSourceIconClick(t){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t.id},bubbles:!0,composed:!0}))}_emitFiles(t){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:t},bubbles:!0,composed:!0}))}_toggleMore(t){t.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const t=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Yr(this).appendChild(this._portalContainer),this._injectDropdownStyles()),fe(u`<div class="sfx-more-dropdown open">
          ${t.map(e=>u`
              <button
                class="sfx-more-item"
                @click=${r=>this._onMoreItemClick(e,r)}
              >
                <div class="sfx-more-item-ico">
                  ${e.brandHtml?ue(e.brandHtml):e.iconColor?u`<svg
                        viewBox="0 0 24 24"
                        style="color:${e.iconColor}"
                      >
                        ${ae(e.icon)}
                      </svg>`:pe`<svg viewBox="0 0 24 24">${ae(e.icon)}</svg>`}
                </div>
                ${e.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(fe(C,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes($t)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,$t]))}_positionDropdown(){var t,e;const r=(t=this.shadowRoot)==null?void 0:t.querySelector(".more-wrap > button"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-dropdown");if(!r||!o)return;const i=r.getBoundingClientRect(),n=8,s=o.scrollHeight,a=o.offsetWidth,c=i.top,f=window.innerHeight-i.bottom;c>=s+n||c>f?o.style.top=`${i.top-s-n}px`:o.style.top=`${i.bottom+n}px`;let h=i.right-a;h=Math.max(8,Math.min(h,window.innerWidth-a-8)),o.style.left=`${h}px`}_onMoreItemClick(t,e){e.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(t)}_updateVisiblePills(){const t=window.innerWidth;this.sourcesLayout==="cards"?t<=480?this._visiblePills=2:t<=768?this._visiblePills=3:this._visiblePills=5:t<=768?this._visiblePills=1:this._visiblePills=fr}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>{var e;const r=(((e=t[0])==null?void 0:e.contentRect.width)??this.getBoundingClientRect().width)>=je._WIDE_THRESHOLD_PX;r&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!r&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(t){t.has("sourcesLayout")&&this._updateVisiblePills()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(fe(C,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(t){return u`
      <button
        class="src-pill"
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?ue(t.brandHtml):u`<span
              class="pill-ico"
              style=${t.iconColor?`color:${t.iconColor}`:""}
            >
              ${pe`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ae(t.icon)}</svg>`}
            </span>`}
        ${t.label}
      </button>
    `}_renderCard(t){return u`
      <button
        class="src-card"
        aria-label=${t.label}
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?u`<span class="card-ico">${ue(t.brandHtml)}</span>`:u`<span
              class="card-ico"
              style=${t.iconColor?`color:${t.iconColor}`:""}
            >
              ${pe`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ae(t.icon)}</svg>`}
            </span>`}
        <span class="card-label">${t.label}</span>
      </button>
    `}_renderMoreCard(){return u`
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
    `}_renderMoreDropdown(){return u`
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
    `}render(){const t=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),e=this.sources.slice(0,this._visiblePills),r=this.sources.slice(this._visiblePills);return u`
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
        ${this.compact?C:u`<div class="subtitle">Drop files anywhere on this page</div>`}
        ${!this.compact&&this.sources.length>0?u`
              <div class="import-divider"><span>or import from</span></div>
              ${this.sourcesLayout==="cards"?u`
                    <div class="sources-cards">
                      ${e.map(o=>this._renderCard(o))}
                      ${r.length>0?this._renderMoreCard():C}
                    </div>
                  `:u`
                    <div class="sources-grid">
                      ${e.map(o=>this._renderPill(o))}
                      ${r.length>0?this._renderMoreDropdown():C}
                    </div>
                  `}
            `:C}
        ${this.compact&&this.sources.length>0?u`
              <div class="sources-row">
                ${this.sources.map(o=>u`
                    <button
                      class="src-ico"
                      style=${o.iconColor&&!o.brandHtml?`color:${o.iconColor}`:""}
                      data-tip=${o.label}
                      aria-label=${o.label}
                      @click=${i=>{i.stopPropagation(),this._onSourceIconClick(o)}}
                    >
                      ${o.brandHtml?ue(o.brandHtml):pe`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${ae(o.icon)}</svg>`}
                    </button>
                  `)}
              </div>
            `:C}

        <div class="ripple"></div>
        <input
          type="file"
          multiple
          accept=${this.accept||C}
          @change=${this._onFileChange}
        />
      </div>
    `}},je.styles=V`
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

    :host([mode="inline"]) .drop-zone {
      height: 100%;
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
      overflow: hidden;
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
  `,je._WIDE_THRESHOLD_PX=1200,je);Q([R({type:Boolean,reflect:!0})],K.prototype,"compact");Q([R({type:Boolean,attribute:"external-drag-over"})],K.prototype,"externalDragOver");Q([R({type:String})],K.prototype,"accept");Q([R({type:Array})],K.prototype,"sources");Q([R({type:String,attribute:"sources-layout"})],K.prototype,"sourcesLayout");Q([R({type:String,reflect:!0})],K.prototype,"mode");Q([j()],K.prototype,"_dragOver");Q([j()],K.prototype,"_moreOpen");Q([j()],K.prototype,"_visiblePills");Q([vr(".ripple")],K.prototype,"_rippleEl");Q([vr('input[type="file"]')],K.prototype,"fileInput");let zn=K;const Vr=class extends G{render(){return u`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};Vr.styles=V`
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
  `;let On=Vr;var jn=Object.defineProperty,oe=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&jn(e,r,i),i};const Ut=new CSSStyleSheet;Ut.replaceSync(`
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
`);const Xr=class extends G{constructor(){super(...arguments),this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var r;if((r=this._portalContainer)!=null&&r.contains(e.target))return;const o=this.renderRoot.querySelector(".drop-tile-more-wrap"),i=e.composedPath();o&&i.includes(o)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector('input[type="file"]');e==null||e.click()}_onFileInput(e){const r=e.target,o=Array.from(r.files??[]);o.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:o},bubbles:!0,composed:!0})),r.value=""}_onSourceClick(e,r){if(e.stopPropagation(),r.id==="device"){const o=this.renderRoot.querySelector('input[type="file"]');o==null||o.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:r},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Yr(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),fe(u`<div class="sfx-tile-dropdown">
        ${e.map(r=>u`
          <button
            class="sfx-tile-dropdown-item"
            @click=${o=>this._onMoreSourceClick(o,r)}
          >
            <span class="sfx-tile-dropdown-ico" style=${r.iconColor&&!r.brandHtml?`color:${r.iconColor}`:""}>
              ${r.brandHtml?ue(r.brandHtml):pe`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${ae(r.icon)}</svg>`}
            </span>
            ${r.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var e;const r=this.renderRoot.querySelector(".drop-tile-more"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-tile-dropdown");if(!r||!o)return;const i=r.getBoundingClientRect(),n=6,s=o.scrollHeight,a=o.offsetWidth,c=i.top,f=window.innerHeight-i.bottom;c>=s+n||c>f?o.style.top=`${i.top-s-n}px`:o.style.top=`${i.bottom+n}px`;let h=i.right-a;h=Math.max(8,Math.min(h,window.innerWidth-a-8)),o.style.left=`${h}px`}_closePortal(){this._portalContainer&&(fe(C,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var e;const r=(e=this._portalContainer)==null?void 0:e.getRootNode();r&&(r.adoptedStyleSheets.includes(Ut)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,Ut]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,r){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,r)}_renderDropTile(){const e=this._dropTileMaxVisible,r=this.sources.slice(0,e),o=this.sources.slice(e);return u`
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
          ${r.length>0?u`
            <div class="drop-tile-sources">
              ${r.map(i=>u`
                <button
                  class="drop-tile-src"
                  style=${i.iconColor&&!i.brandHtml?`color:${i.iconColor}`:""}
                  title=${i.label}
                  @click=${n=>this._onSourceClick(n,i)}
                >
                  ${i.brandHtml?ue(i.brandHtml):pe`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${ae(i.icon)}</svg>`}
                </button>
              `)}
              ${o.length>0?u`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title="More sources" @click=${i=>this._toggleMore(i)}>···</button>
                </div>
              `:C}
            </div>
          `:C}
        </div>
        <input type="file" multiple accept=${this.accept||C} @change=${this._onFileInput} />
      </div>
    `}render(){return u`
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():C}
        ${this.files.map((e,r)=>u`<sfx-file-item .file=${e} .mode=${this.mode} .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} style="--tile-index:${r}"></sfx-file-item>`)}
      </div>
    `}};Xr.styles=V`
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
  `;let ee=Xr;oe([R({attribute:!1})],ee.prototype,"files");oe([R({type:Boolean})],ee.prototype,"showDropTile");oe([R({attribute:!1})],ee.prototype,"sources");oe([R({type:String})],ee.prototype,"accept");oe([R({type:String})],ee.prototype,"mode");oe([R({attribute:!1})],ee.prototype,"getLocateUrl");oe([R({type:Boolean})],ee.prototype,"showLocateButton");oe([R({type:Boolean})],ee.prototype,"showCopyCdnButton");oe([j()],ee.prototype,"_moreOpen");oe([j()],ee.prototype,"_dropTileMaxVisible");var Rn=Object.defineProperty,ve=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Rn(e,r,i),i};const Wr=class extends G{constructor(){super(...arguments),this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._dims="",this._copied=!1,this._copiedTimer=null}updated(e){var r,o,i,n,s;if(e.has("file")){if(this._dims="",(o=(r=this.file)==null?void 0:r.previewUrl)!=null&&o.startsWith("blob:")){const a=this.file.previewUrl,c=new Image;c.onload=()=>{var f;((f=this.file)==null?void 0:f.previewUrl)===a&&(this._dims=`${c.naturalWidth}×${c.naturalHeight}`)},c.src=a}else if((s=(n=(i=this.file)==null?void 0:i.response)==null?void 0:n.file)!=null&&s.info){const a=this.file.response.file.info;a.img_w&&a.img_h&&(this._dims=`${a.img_w}×${a.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,r){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...r},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const r=e.target.value.trim();r&&this._emit("file-rename",{name:r})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var r,o,i,n;e.stopPropagation();const s=(n=(i=(o=(r=this.file)==null?void 0:r.response)==null?void 0:o.file)==null?void 0:i.url)==null?void 0:n.cdn;if(s){try{await navigator.clipboard.writeText(s)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:s}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var e,r;const o=this.file;if(!o)return C;const i=Ar(o),n=o.status==="complete",s=o.status==="uploading",a=o.status==="paused",c=o.status==="error"||o.status==="failed",f=o.status==="rejected",h=this.mode==="review",w=vn(o.name),m=["tile",n?"done":"",s?"uploading":"",a?"paused":"",f?"rejected":"",h?"review":""].filter(Boolean).join(" ");return u`
      <div class=${m} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${o.previewUrl?u`<img class="preview-img" src=${o.previewUrl} alt="" />`:u`
                <div class="preview-bg ${i}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Mr(w)}
                    alt="${w?`${w} file`:"File"}"
                    @error=${z=>{const $=z.target,_=Hr();!$.dataset.fallback&&$.src!==_&&($.dataset.fallback="1",$.src=_)}}
                  />
                </div>
              `}

          <!-- Preview button (not in review mode — review uses its own
               stacked Locate / Copy CDN actions instead) -->
          ${!h&&!n&&!s&&!a&&!c&&o.status!=="rejected"?u`
                <button class="preview-btn" @click=${this._preview} aria-label="Details">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Details
                </button>
              `:C}

          <!-- Review-mode hover actions: Locate (open in storage) +
               Copy CDN (copy CDN URL to clipboard). Both buttons fade
               in on tile hover, only for completed files (failed files
               have no response.file.url). -->
          ${h&&n&&(r=(e=o.response)==null?void 0:e.file)!=null&&r.url&&(this.showLocateButton||this.showCopyCdnButton)?u`
                <div class="review-actions">
                  ${this.showLocateButton?u`<button class="review-action secondary" @click=${this._locate} aria-label="Locate file in storage">
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        Locate
                      </button>`:C}
                  ${this.showCopyCdnButton&&o.response.file.url.cdn?u`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title="Copy CDN link" aria-label="Copy CDN link to clipboard">
                        ${this._copied?u`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:u`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?"Copied":"Copy CDN"}
                      </button>`:C}
                </div>
              `:C}

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
          ${n?u`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:C}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${h&&c?u`<div class="failed-badge" title=${o.error||"Upload failed"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:C}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!h&&(o.status==="uploading"||o.status==="paused")?u`
                <div class="progress">
                  <div class="progress-fill" style="transform:scaleX(${Math.min(o.progress,100)/100})"></div>
                </div>
              `:C}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(c||f)&&o.error&&!h?u`<div class="error-badge" title=${o.error}>${o.error}</div>`:C}

          <!-- Video duration badge (hidden when error badge is shown to avoid overlap) -->
          ${!(c||f)&&o.duration!=null&&o.duration>0?u`<div class="duration-badge">${this._formatDuration(o.duration)}</div>`:C}
        </div>

        <!-- Action buttons (hidden in review mode — files are read-only) -->
        ${h?C:u`
        <div class="actions">
          ${s&&o.isTus?u`
                <button class="act-btn pause" @click=${this._pause} title="Pause" aria-label="Pause upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:C}
          ${a?u`
                <button class="act-btn resume" @click=${this._resume} title="Resume" aria-label="Resume upload">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:C}
          ${c?u`
                <button class="act-btn retry" @click=${this._retry} title="Retry" aria-label="Retry upload">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:C}
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
            @change=${h?C:this._rename} @click=${z=>z.stopPropagation()} />
          <div class="meta">${w||""}${o.size?` · ${ce(o.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const r=Math.floor(e/60),o=Math.floor(e%60);return`${r}:${o.toString().padStart(2,"0")}`}};Wr.styles=V`
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
      padding-left: 5px;
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
  `;let le=Wr;ve([R({attribute:!1})],le.prototype,"file");ve([R({type:String})],le.prototype,"mode");ve([R({attribute:!1})],le.prototype,"getLocateUrl");ve([R({type:Boolean})],le.prototype,"showLocateButton");ve([R({type:Boolean})],le.prototype,"showCopyCdnButton");ve([j()],le.prototype,"_dims");ve([j()],le.prototype,"_copied");const Ye=V`
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
`,Ve=V`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Tn=Object.defineProperty,Pe=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Tn(e,r,i),i};const hr=7,Dn=4,Gr=class extends G{constructor(){super(...arguments),this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this._maxThumbs=hr,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?Dn:hr;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),r=this.thumbnails.length-this._maxThumbs,o=this.fileCount>0,i=this.failedFiles.length>0,n=i&&!o;return u`
      <button class="close-btn" title="Close" @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${n?"error":i?"warning":""}">
          ${n?u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:i?u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${n?"Upload failed":i?"Partially uploaded":"Uploaded successfully!"}</div>
        <div class="subtitle">${n?`${this.failedFiles.length===1?"File":"Files"} could not be uploaded`:i?`${this.fileCount} ${this.fileCount===1?"file":"files"} uploaded, ${this.failedFiles.length} failed`:"All files are ready for use"}</div>

        ${e.length>0?u`
              <div class="thumbs">
                ${e.map(s=>u`<img class="thumb" src=${s} alt="" />`)}
                ${r>0?u`<div class="thumb-more">+${r}</div>`:C}
              </div>
            `:C}

        ${o?u`<div class="summary">${this.fileCount} ${this.fileCount===1?"file":"files"} · ${ce(this.totalSize)} uploaded</div>`:C}

        ${i?u`
            <div class="failed-list">
              ${this.failedFiles.map(s=>u`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${s.name}</div>
                    <div class="failed-reason">${s.error}</div>
                  </div>
                  <button class="failed-retry" title="Retry" @click=${()=>this._retryFile(s.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          `:C}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>Upload more</button>
          ${o||i?u`<button class="btn-ghost" @click=${this._reviewFiles}>Review files (${this.fileCount+this.failedFiles.length})</button>`:C}
          ${i?u`<button class="btn-retry-all" @click=${this._retryAll}>Retry all (${this.failedFiles.length})</button>`:C}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};Gr.styles=[Ye,Ve,V`
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
  `];let xe=Gr;Pe([R({type:Number})],xe.prototype,"fileCount");Pe([R({type:Number})],xe.prototype,"totalSize");Pe([R({type:Array})],xe.prototype,"thumbnails");Pe([R({type:String})],xe.prototype,"primaryLabel");Pe([R({type:Array})],xe.prototype,"failedFiles");Pe([j()],xe.prototype,"_maxThumbs");var Ln=Object.defineProperty,Xe=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Ln(e,r,i),i};const Kr=class extends G{constructor(){super(...arguments),this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,r=this.files.length;return u`
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
          ${this._failedCount>0?u`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ Failed (${this._failedCount})
              </button>`:C}
          <button class="clear-btn" @click=${this._onClear} title="Clear last upload from this browser">Clear</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?u`<div class="empty">No files match this filter.</div>`:u`<sfx-file-list .files=${e} mode="review" .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};Kr.styles=V`
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
  `;let ze=Kr;Xe([R({attribute:!1})],ze.prototype,"files");Xe([R({attribute:!1})],ze.prototype,"getLocateUrl");Xe([R({type:Boolean})],ze.prototype,"showLocateButton");Xe([R({type:Boolean})],ze.prototype,"showCopyCdnButton");Xe([j()],ze.prototype,"_filter");customElements.define("sfx-last-upload-review",ze);var Fn=Object.defineProperty,se=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Fn(e,r,i),i};const Zr=class extends G{constructor(){super(...arguments),this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.uploadDisabled=!1,this.uploadDisabledReason="",this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return u`
      ${e?u`
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
          `:C}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?u`
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
              `:C}
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
          ${this.failedCount>0?u`
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
              `:C}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",r=this.uploadState==="done",o=["btn-primary",r?"done-state":""].filter(Boolean).join(" "),i=e?"Uploading":r?"Done":"Upload";return u`
      <button
        class=${o}
        @click=${this._upload}
        ?disabled=${e||this.uploadDisabled}
        title=${this.uploadDisabled?this.uploadDisabledReason:""}
        aria-label=${i}
      >
        ${e?u`<span class="btn-spin"></span
              ><span class="btn-label">Uploading…</span>`:r?u`
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
            `:u`
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
    `}};Zr.styles=[Ye,Ve,V`
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
        max-width: var(--sfx-up-content-max-width, 1600px);
        margin-inline: auto;
        box-sizing: border-box;
        width: 100%;
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
    `];let ie=Zr;se([R({type:String})],ie.prototype,"uploadState");se([R({type:Number})],ie.prototype,"fileCount");se([R({type:Number})],ie.prototype,"totalSize");se([R({type:Number})],ie.prototype,"failedCount");se([R({type:Boolean})],ie.prototype,"showFillMetadata");se([R({type:Boolean})],ie.prototype,"uploadDisabled");se([R({type:String})],ie.prototype,"uploadDisabledReason");se([R({type:Number})],ie.prototype,"completedCount");se([R({type:Number})],ie.prototype,"uploadProgress");const Bn='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function Dt(t,e){return r=>{if(r.key!=="Tab")return;const o=t();if(!o)return;const i=o.querySelector(e);if(!i)return;const n=Array.from(i.querySelectorAll(Bn));if(n.length===0)return;const s=n[0],a=n[n.length-1],c=o.activeElement;r.shiftKey?(c===s||!i.contains(c))&&(r.preventDefault(),a.focus()):(c===a||!i.contains(c))&&(r.preventDefault(),s.focus())}}var An=Object.defineProperty,Lt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&An(e,r,i),i};const Jr=class extends G{constructor(){super(...arguments),this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=Dt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var r;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((r=e.target)==null?void 0:r.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const r=new URL(this._url).pathname.split("/"),o=r[r.length-1];if(o){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");i&&(i.placeholder=o)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error="Please enter a URL";return}try{new URL(e)}catch{this._error="Please enter a valid URL";return}this._error="";let r=this._name.trim();if(!r)try{const o=new URL(e).pathname.split("/");r=o[o.length-1]||"imported-file"}catch{r="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:r},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,r;(r=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||r.focus()})}render(){return u`
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
            ${this._error?u`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>Cancel</button>
              <button class="btn btn-primary" @click=${this._submit}>
                Import file
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};Jr.styles=[Ye,Ve,V`
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

  `];let at=Jr;Lt([j()],at.prototype,"_url");Lt([j()],at.prototype,"_name");Lt([j()],at.prototype,"_error");var In=Object.defineProperty,lt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&In(e,r,i),i};const Qr=class extends G{constructor(){super(...arguments),this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Dt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var e,r;const o=(e=this.shadowRoot)==null?void 0:e.querySelector("video"),i=(r=this.shadowRoot)==null?void 0:r.querySelector("canvas");!o||!i||(i.width=o.videoWidth,i.height=o.videoHeight,i.getContext("2d").drawImage(o,0,0),i.toBlob(n=>{n&&(this._captured=n,this._previewUrl=URL.createObjectURL(n),this._stopStream())},"image/jpeg",.92))},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),r=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:r},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("video");r&&(r.srcObject=this._stream)}catch{this._error="Could not access camera. Please check your permissions."}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(r=>r.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
            ${this._error?u`<div class="error">${this._error}</div>`:this._captured?u`
                    <img class="preview-img" src=${this._previewUrl} alt="Captured photo" />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>Retake</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>Use photo</button>
                    </div>
                  `:u`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Qr.styles=[Ye,Ve,V`
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
  `];let We=Qr;lt([j()],We.prototype,"_stream");lt([j()],We.prototype,"_error");lt([j()],We.prototype,"_captured");lt([j()],We.prototype,"_previewUrl");var Mn=Object.defineProperty,Ge=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Mn(e,r,i),i};const eo=class extends G{constructor(){super(...arguments),this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Dt(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const r=(e=this.shadowRoot)==null?void 0:e.querySelector("video");r&&(r.srcObject=this._stream),this._chunks=[];const o=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:o}),this._recorder.ondataavailable=i=>{i.data.size>0&&this._chunks.push(i.data)},this._recorder.onstop=()=>{var i;const n=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=n,this._previewUrl=URL.createObjectURL(n),(i=this._stream)==null||i.getTracks().forEach(s=>s.stop()),this._stream=null},this._recorder.start()}catch{this._error="Could not start screen capture. Please check your permissions."}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),r=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:r},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,r;(e=this._recorder)==null||e.stop(),this._recorder=null,(r=this._stream)==null||r.getTracks().forEach(o=>o.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return u`
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
            ${this._error?u`<div class="error">${this._error}</div>`:this._recordedBlob?u`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>Discard</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>Use recording</button>
                    </div>
                  `:this._recording?u`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> Recording...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>Stop recording</button>
                      </div>
                    `:u`
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
    `}};eo.styles=[Ye,Ve,V`
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
  `];let Oe=eo;Ge([j()],Oe.prototype,"_stream");Ge([j()],Oe.prototype,"_recording");Ge([j()],Oe.prototype,"_error");Ge([j()],Oe.prototype,"_recordedBlob");Ge([j()],Oe.prototype,"_previewUrl");var Hn=Object.defineProperty,to=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Hn(e,r,i),i};const ro=class extends G{constructor(){super(...arguments),this.duration=6e3,this._toasts=[],this._nextId=0}show(e,r="error"){const o=++this._nextId;this._toasts=[...this._toasts,{id:o,message:e,type:r,leaving:!1}],setTimeout(()=>this._dismiss(o),this.duration)}_dismiss(e){const r=this._toasts.findIndex(i=>i.id===e);if(r===-1)return;const o=[...this._toasts];o[r]={...o[r],leaving:!0},this._toasts=o,setTimeout(()=>{this._toasts=this._toasts.filter(i=>i.id!==e)},200)}_iconForType(e){return e==="error"?u`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?u`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:u`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?u``:u`
      <div class="toast-stack">
        ${this._toasts.map(e=>u`
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
    `}};ro.styles=V`
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
  `;let Ft=ro;to([R({type:Number})],Ft.prototype,"duration");to([j()],Ft.prototype,"_toasts");customElements.define("sfx-toast",Ft);var qn=Object.defineProperty,H=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&qn(e,r,i),i};const gr=new Set(["unsplash"]),_e={isTus:!1,tusUploadUrl:null};var re;const M=(re=class extends G{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Le,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._onFileRename=t=>{this._onPreviewRename(t.detail.fileId,t.detail.name)},this._onPreviewMetadataBlur=t=>{const e=this._previewFileId;if(!e)return;const{key:r,value:o}=t.detail,i=this._store.getState().files.get(e);if(!i)return;const n=new Map(this._store.getState().files);n.set(e,{...i,meta:{...i.meta,[r]:o}}),this._store.setState({files:n})},this._onFilesSelected=t=>{this._processIncomingFiles(t.detail.files)},this._onDropTileSourceClick=t=>{t.stopPropagation(),this._handleSourceActivation(t.detail.source.id)},this._onSourceClick=async t=>{this._handleSourceActivation(t.detail.source)},this._handleSourceActivation=async t=>{var e,r;const o=this._mergedSources.find(i=>i.id===t);if(o!=null&&o.onActivate){try{o.onActivate(this)}catch(i){console.error(`[sfx-uploader] onActivate for custom source "${t}" threw:`,i)}return}if(t==="device"){const i=this.shadowRoot.querySelector("sfx-drop-zone");i==null||i.browse();return}if(t==="url"){this._showUrlDialog=!0;return}if(t==="camera"){this._showCameraDialog=!0;return}if(t==="screen-cast"){this._showScreenCastDialog=!0;return}if((((r=(e=this.config)==null?void 0:e.connectors)==null?void 0:r.providers)??[]).includes(t)){if(gr.has(t)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:i}=await dt(async()=>{const{SfxSearchProviderBrowser:n}=await import("./search-provider-browser-CCgVfvJZ-m2e-x3iH.js");return{SfxSearchProviderBrowser:n}},__vite__mapDeps([0,1,2]));customElements.define("sfx-search-provider-browser",i)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:i}=await dt(async()=>{const{SfxProviderBrowser:n}=await import("./provider-browser-DP0dkm4h-DINpcLHa.js");return{SfxProviderBrowser:n}},__vite__mapDeps([3,1,2]));customElements.define("sfx-provider-browser",i)}this._activeConnector=t}},this._onUrlSubmit=t=>{var e,r,o;this._showUrlDialog=!1;const{url:i,name:n}=t.detail,s=(e=this.config)==null?void 0:e.callbacks,a=mn(n),c=a.startsWith("image/"),f=this._store.getState();if([...f.files.values()].some(m=>m.name===n&&m.status!=="rejected"&&m.status!=="cancelled"))return;const h=St({name:n,size:0,type:a},f.restrictions,f.files);if(h){const m={id:we(),status:"rejected",file:null,remoteUrl:i,name:n,size:0,type:a,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:h,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,..._e};me(this._store,m),this._dispatchPublic(B.FILE_REJECTED,{file:m,reason:h}),(r=s==null?void 0:s.onFileRejected)==null||r.call(s,m,h);return}const w={id:we(),status:"idle",file:null,remoteUrl:i,name:n,size:0,type:a,previewUrl:c?i:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,..._e};me(this._store,w),this._dispatchPublic(B.FILE_ADDED,{file:w}),(o=s==null?void 0:s.onFileAdded)==null||o.call(s,w),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=t=>{this._showCameraDialog=!1,this._processIncomingFiles([t.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=t=>{this._showScreenCastDialog=!1,this._processIncomingFiles([t.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=t=>{this._removeFile(t.detail.fileId)},this._onFilePreview=t=>{var e,r,o;const i=this._store.getState().files.get(t.detail.fileId);i&&(this._previewFileId=i.id,this._dispatchPublic(B.FILE_PREVIEW,{file:i}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onFilePreview)==null||o.call(r,i))},this._onFillMetadata=()=>{var t,e,r,o;const i=[...this._store.getState().files.values()].filter(n=>re._MODIFIABLE_STATUSES.has(n.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataOpen=!0),this._dispatchPublic(B.FILL_METADATA,{files:i}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onFillMetadata)==null||o.call(r,i)},this._onFileLocate=t=>{var e,r,o;const i=t.detail.file;i&&(this._dispatchPublic(B.FILE_LOCATE,{file:i}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onFileLocate)==null||o.call(r,i))},this._onFileCopyCdn=t=>{var e,r,o;const i=t.detail.file,n=t.detail.cdnUrl;!i||!n||(this._dispatchPublic(B.FILE_COPY_CDN,{file:i,cdnUrl:n}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onFileCopyCdn)==null||o.call(r,i,n))},this._onBulkMetadataSaveBatch=t=>{const{changes:e}=t.detail;if(!e.length)return;const r=new Map(this._store.getState().files);for(const{fileId:o,meta:i}of e){const n=r.get(o);n&&r.set(o,{...n,meta:{...n.meta,...i}})}this._store.setState({files:r})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1},this._onFileRetry=t=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryFile(t.detail.fileId)},this._onFilePause=t=>{var e;(e=this._engine)==null||e.pauseFile(t.detail.fileId)},this._onFileResume=t=>{var e;(e=this._engine)==null||e.resumeFile(t.detail.fileId)},this._onRetryAll=()=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryAll()},this._onClearAll=()=>{var t,e,r;const o=(t=this.config)==null?void 0:t.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(e=this._engine)==null||e.cancelAll();const i=[...this._store.getState().files.values()];for(const n of i)n.previewUrl&&URL.revokeObjectURL(n.previewUrl),this._dispatchPublic(B.FILE_REMOVED,{file:n}),(r=o==null?void 0:o.onFileRemoved)==null||r.call(o,n);this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var t;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const r=this.shadowRoot.querySelector("sfx-file-list"),o=(t=r==null?void 0:r.shadowRoot)==null?void 0:t.querySelector('input[type="file"]');o==null||o.click()},this._onUploadStart=()=>{var t;if(this._phase==="complete"){((t=this.config)==null?void 0:t.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const t=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(t.length>0){this._reviewFiles=t,this._isReviewing=!0;return}const e=this._lastUploadId;if(e==null)return;const r=Je.load(e);!r||r.length===0||(this._reviewFiles=r,this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const t=this._lastUploadId;t!=null&&Je.clear(t),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=t=>{var e,r,o;const i=(e=this.config)==null?void 0:e.callbacks;for(const n of t.detail.files){const s=this._store.getState();if([...s.files.values()].some(f=>f.name===n.name&&f.size===n.size&&f.status!=="rejected"&&f.status!=="cancelled"))continue;const a=St({name:n.name,size:n.size,type:n.mimeType},s.restrictions,s.files);if(a){const f={id:we(),status:"rejected",file:null,remoteUrl:null,name:n.name,size:n.size,type:n.mimeType,previewUrl:n.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:a,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:n,..._e};me(this._store,f),this._dispatchPublic(B.FILE_REJECTED,{file:f,reason:a}),(r=i==null?void 0:i.onFileRejected)==null||r.call(i,f,a);continue}const c={id:we(),status:"idle",file:null,remoteUrl:null,name:n.name,size:n.size,type:n.mimeType,previewUrl:n.thumbnail,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:n,..._e};me(this._store,c),this._dispatchPublic(B.FILE_ADDED,{file:c}),(o=i==null?void 0:i.onFileAdded)==null||o.call(i,c)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=t=>{t.target===t.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,e,r,o,i;this._dispatchPublic(B.COMPLETE_ACTION,{}),(r=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCompleteAction)==null||r.call(e),((o=this.config)==null?void 0:o.mode)==="modal"?this.close():((i=this.config)==null?void 0:i.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var t,e,r;(r=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCancel)==null||r.call(e),this._dispatchPublic(B.CANCEL,{})},this._onSuccessCardClose=()=>{var t,e,r,o;((t=this.config)==null?void 0:t.mode)==="inline"?(this._dispatchPublic(B.COMPLETE_ACTION,{}),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onCompleteAction)==null||o.call(r),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var t,e,r,o;this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll()),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(B.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var t,e,r,o;(t=this._engine)==null||t.cancelAll(),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(B.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.requestUpdate()},this._onPillDismiss=()=>{var t,e,r,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll()),(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onCancel)==null||o.call(r),this._dispatchPublic(B.CANCEL,{}),this.close()},this._onModalBackdropClick=t=>{t.target===t.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=t=>{t.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=t=>{var e;t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const r=Array.from(((e=t.dataTransfer)==null?void 0:e.files)??[]);r.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:r}}))},this._onKeyDown=t=>{var e,r;if(t.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}const o=((e=this.config)==null?void 0:e.mode)??"modal",i=((r=this.config)==null?void 0:r.header)??(o==="modal"?"close":!0);(i==="close"||i==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=t=>{var e;t.preventDefault(),this._isResizing=!0;const r=(e=this.shadowRoot)==null?void 0:e.querySelector(".preview-layout");r==null||r.classList.add("resizing"),t.target.setPointerCapture(t.pointerId)},this._onSplitPointerMove=t=>{if(!this._isResizing||this._splitRafId)return;const e=t.clientX;this._splitRafId=requestAnimationFrame(()=>{var r;this._splitRafId=0;const o=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-layout");if(!o)return;const i=o.getBoundingClientRect(),n=(e-i.left)/i.width*100;this._splitPct=Math.max(25,Math.min(75,n))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=t=>{t==null||t.stopPropagation(),this._fullscreenZoomed=!this._fullscreenZoomed,this._fullscreenZoomed||(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=t=>{this._fsDragDidMove||this._onFsToggleZoom(t)},this._fsDragDidMove=!1,this._onFsPanStart=t=>{this._fullscreenZoomed&&(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,t.preventDefault())},this._onFsPanMove=t=>{if(!this._fsDragging)return;const e=t.clientX-this._fsDragStartX,r=t.clientY-this._fsDragStartY;(Math.abs(e)>3||Math.abs(r)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+e,this._fsPanY=this._fsPanStartY+r,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=t=>{if(!this._fullscreenZoomed||t.touches.length!==1)return;const e=t.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=t=>{if(!this._fsDragging||t.touches.length!==1)return;const e=t.touches[0],r=e.clientX-this._fsDragStartX,o=e.clientY-this._fsDragStartY;(Math.abs(r)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+r,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),t.preventDefault()},this._onFsClose=t=>{t==null||t.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0},this._store=ao(),this._storeCtrl=new lo(this,this._store)}get _lastUploadId(){var t,e;const r=(t=this.config)==null?void 0:t.lastUploadReview;if(!r)return null;if(typeof r=="string")return r;const o=(e=this.config)==null?void 0:e.auth;return o?o.airboxPuid?`${o.container}:${o.airboxPuid}`:o.container:null}open(){var t,e,r;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),!this._isOpen&&(this._isOpen=!0,(r=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onOpen)==null||r.call(e),this._dispatchPublic(B.OPEN,{}),this.requestUpdate())}close(){var t,e,r,o;this._isOpen&&(this._isOpen=!1,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((t=this.config)==null?void 0:t.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(o=(r=(e=this.config)==null?void 0:e.callbacks)==null?void 0:r.onClose)==null||o.call(r),this._dispatchPublic(B.CLOSE,{}),this.requestUpdate())}upload(){var t,e,r,o,i,n,s;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const a=[...this._store.getState().files.values()].filter(f=>f.status==="idle"||f.status==="queued");if((e=(t=this.config)==null?void 0:t.callbacks)!=null&&e.onBeforeUpload&&this.config.callbacks.onBeforeUpload(a)===!1)return;const c=new CustomEvent(B.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:a}});this.dispatchEvent(c)&&(this._dispatchPublic(B.UPLOAD_STARTED,{files:a}),(i=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onUploadStarted)==null||i.call(o,a),this._engine.uploadAll(),(n=this.config)!=null&&n.minimizeOnUpload&&((s=this.config)==null?void 0:s.mode)!=="inline"&&(this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()))}addFiles(t){this._processIncomingFiles(t)}resumeUpload(t){var e;if(t&&t.length>0){const r=this._store.getState().files,o=new Map(r);let i=!1;for(const n of t){const s=r.get(n.id);s&&(o.set(n.id,{...s,...n}),i=!0)}i&&this._store.setState({files:o})}this._ensureEngine(),(e=this._engine)==null||e.uploadAll()}cancelUpload(){var t;(t=this._engine)==null||t.cancelAll()}pauseFile(t){var e;(e=this._engine)==null||e.pauseFile(t)}resumeFile(t){var e;(e=this._engine)==null||e.resumeFile(t)}getFiles(){return[...this._store.getState().files.values()]}getFile(t){return this._store.getState().files.get(t)}updateFileMeta(t,e,r){const o=this._store.getState().files,i=o.get(t);if(!i||!re._MODIFIABLE_STATUSES.has(i.status))return;const n=new Map(o);n.set(t,{...i,meta:e!=null?{...i.meta,...e}:i.meta,tags:r??i.tags}),this._store.setState({files:n})}updateFilesMeta(t){const e=this._store.getState().files,r=new Map(e);let o=!1;for(const{fileId:i,meta:n,tags:s}of t){const a=e.get(i);!a||!re._MODIFIABLE_STATUSES.has(a.status)||(r.set(i,{...a,meta:n!=null?{...a.meta,...n}:a.meta,tags:s??a.tags}),o=!0)}o&&this._store.setState({files:r})}updated(t){if(t.has("config")&&this.config&&this._applyConfig(this.config),t.has("_previewFileId")&&this._previewFileId){const e=this._previewFileId,r=this._store.getState().files.get(e);r?this._getImageDimensions(r).then(o=>{this._previewFileId===e&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._applyDefaultPreviewWidth(),this._updateFloatingPortal()}_applyDefaultPreviewWidth(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");if(!e){this._previewDefaultApplied=!1;return}this._previewDefaultApplied||e.getBoundingClientRect().width<=0||(this._splitPct=62.5,this._previewDefaultApplied=!0)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const t=document.createElement("style");t.setAttribute("data-sfx-upload-float-styles",""),t.textContent=`
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
    `,document.head.appendChild(t)}_updateFloatingPortal(){const t=[...this._storeCtrl.state.files.values()];this._isMinimized&&t.length>0?(this._injectFloatStyles(),this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),fe(this._renderFloatingPill(t),this._portalContainer)):this._portalContainer&&(fe(C,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const t=this._lastUploadId;this._hasStoredReview=t!=null&&Je.exists(t)}disconnectedCallback(){var t,e,r,o;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(e=this._portalContainer)==null||e.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(r=document.querySelector("style[data-sfx-upload-float-styles]"))==null||r.remove(),this._revokeVideoBlobUrls();for(const i of this._rejectedTimers.values())clearTimeout(i);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const i of this._store.getState().files.values())i.previewUrl&&URL.revokeObjectURL(i.previewUrl);(o=this._engine)==null||o.destroy(),this._engine=null}_applyConfig(t){const e={};if(t.targetFolder&&(e.targetFolder=t.targetFolder),t.restrictions&&(e.restrictions={...this._store.getState().restrictions,...t.restrictions}),t.concurrency!=null){const r=this._store.getState().queueConfig;e.queueConfig={...r,concurrency:t.concurrency}}if(t.autoProceed!=null){const r=e.queueConfig??this._store.getState().queueConfig;e.queueConfig={...r,autoProceed:t.autoProceed}}Object.keys(e).length>0&&this._store.setState(e),this._resolveAuthAndEngine(t),(t.mode==="inline"||!t.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(t){var e,r;const o=t.auth;if(o.mode==="sass-key"){this._apiBase=Tt(o.container),this._authHeaders=kt(o),this._ensureEngine(),(e=this._engine)==null||e.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(t);return}const i=++this._authResolveId;try{const n=await pn(o);if(i!==this._authResolveId)return;this._apiBase=n.apiBase,this._authHeaders=n.headers,this._ensureEngine(),(r=this._engine)==null||r.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._preloadMetadataSchema(t)}catch(n){if(i!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",n),this._showToast(this._formatAuthError(n))}}_formatAuthError(t){var e,r;const o=t instanceof Error?t.message:String(t);return(r=(e=this.config)==null?void 0:e.auth)!=null&&r.container?o.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:o.includes("HTTP 401")||o.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":o.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":o.includes("Failed to fetch")||o.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${o}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(t,e="error"){var r;const o=(r=this.shadowRoot)==null?void 0:r.querySelector("sfx-toast");o==null||o.show(t,e)}_normalizeTusConfig(){var t;const e=(t=this.config)==null?void 0:t.tusConfig;return e===!0?{}:e||void 0}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new dn(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig()}),this._engine.start())}async _preloadMetadataSchema(t){const e=t.metadataConfig;if(!(!e||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:r,createTagsAutocomplete:o}=await dt(async()=>{const{fetchMetadataSchema:i,createTagsAutocomplete:n}=await import("./index-BKzvd_io-R6_tt_-w.js");return{fetchMetadataSchema:i,createTagsAutocomplete:n}},__vite__mapDeps([4,1,2]));this._metadataSchema=await r(this._apiBase,this._authHeaders,e.projectUuid,e),this._metadataAutocomplete=o(this._apiBase,this._authHeaders)}catch(r){console.error("[sfx-uploader] Failed to load metadata schema:",r),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(t,e){const r=e.trim();if(!r)return;const o=this._store.getState().files.get(t);if(!o||o.name===r)return;const i=new Map(this._store.getState().files);i.set(t,{...o,name:r}),this._store.setState({files:i})}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:e.enforceRequiredBeforeUpload===!0?!0:e.enforceRequiredBeforeUpload==="auto"?this._metadataSchema.forceFillingOnUpload:!1}get _hasUnfilledRequiredMetadata(){if(!this._metadataEnforcing||!this._metadataSchema)return!1;const t=this._metadataSchema.fields.filter(r=>{var o;const i=(o=this.config)==null?void 0:o.metadataConfig;return i!=null&&i.requiredFields?i.requiredFields.includes(r.ckey):r.required===1});if(t.length===0)return!1;const e=[...this._store.getState().files.values()].filter(r=>r.status==="idle"||r.status==="queued"||r.status==="rejected");return t.some(r=>e.some(o=>{const i=o.meta[r.key];return i==null?!0:Array.isArray(i)||typeof i=="string"?i.length===0:!i}))}_dispatchPublic(t,e){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}_onStoreChange(){var t,e,r,o,i,n,s,a,c,f;const h=this._store.getState(),w=this._prevStoreState;if(this._prevStoreState=h,!w)return;h.isUploading&&!w.isUploading&&(this._lastEta=0);const m=(t=this.config)==null?void 0:t.callbacks;for(const[z,$]of h.files){const _=w.files.get(z);if(_){if(_.status!==$.status)switch($.status){case"uploading":_.status==="paused"&&(this._dispatchPublic(B.UPLOAD_RESUMED,{file:$}),(e=m==null?void 0:m.onUploadResumed)==null||e.call(m,$));break;case"complete":$.response&&(this._dispatchPublic(B.UPLOAD_COMPLETE,{file:$,response:$.response}),(r=m==null?void 0:m.onUploadComplete)==null||r.call(m,$,$.response));break;case"error":case"failed":{const k=new Error($.error??"Upload failed");this._dispatchPublic(B.UPLOAD_ERROR,{file:$,error:k}),(o=m==null?void 0:m.onUploadError)==null||o.call(m,$,k);break}case"retrying":this._dispatchPublic(B.UPLOAD_RETRY,{file:$,attempt:$.retryCount}),(i=m==null?void 0:m.onUploadRetry)==null||i.call(m,$,$.retryCount);break;case"paused":this._dispatchPublic(B.UPLOAD_PAUSED,{file:$}),(n=m==null?void 0:m.onUploadPaused)==null||n.call(m,$);break}$.status==="uploading"&&_.progress!==$.progress&&(this._dispatchPublic(B.UPLOAD_PROGRESS,{file:$,progress:$.progress,speed:$.speed}),(s=m==null?void 0:m.onUploadProgress)==null||s.call(m,$,$.progress,$.speed))}}if(h.totalProgress!==w.totalProgress||h.totalSpeed!==w.totalSpeed){const z=h.totalSpeed>0?(h.totalBytes-h.totalBytesUploaded)/h.totalSpeed:h.isUploading?this._lastEta:0;h.totalSpeed>0&&(this._lastEta=z),this._dispatchPublic(B.TOTAL_PROGRESS,{percentage:h.totalProgress,speed:h.totalSpeed,eta:z}),(a=m==null?void 0:m.onTotalProgress)==null||a.call(m,h.totalProgress,h.totalSpeed,z)}if(w.isUploading&&!h.isUploading){const z=[...h.files.values()];if(!z.some($=>$.status==="cancelled")){const $=z.filter(x=>x.status==="complete"),_=z.filter(x=>x.status==="failed"||x.status==="error"),k=this._lastUploadId;if(k!=null){const x=[...$,..._];Je.save(k,x),this._hasStoredReview=x.length>0}this._dispatchPublic(B.ALL_COMPLETE,{successful:$,failed:_}),(c=m==null?void 0:m.onAllComplete)==null||c.call(m,$,_);const L=(f=this.config)==null?void 0:f.closeOnComplete;if(L){const x=typeof L=="number"?L:1500;this._closeOnCompleteTimer=setTimeout(()=>{var y,v,b;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(B.COMPLETE_ACTION,{}),(b=(v=(y=this.config)==null?void 0:y.callbacks)==null?void 0:v.onCompleteAction)==null||b.call(v),this.close())},x)}}}}get _mergedSources(){var t;const e=(t=this.config)==null?void 0:t.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=Le,this._cachedSources;const r=e.providers.length>0?_n(e.providers):[],o=e.customSources??[],i=Le.filter(c=>c.id==="device"||c.id==="url"),n=Le.filter(c=>c.id!=="device"&&c.id!=="url"),s=new Set,a=[];for(const c of[...i,...r,...n,...o])if(!s.has(c.id)){if(re._RESERVED_IDS.has(c.id)&&c.onActivate){console.warn(`[sfx-uploader] Custom source id "${c.id}" conflicts with a built-in source and was skipped.`);continue}s.add(c.id),a.push(c)}return this._cachedSources=a,this._cachedSources}get _phase(){const t=this._storeCtrl.state,e=[...t.files.values()];if(e.length===0)return"empty";if(t.isUploading)return"uploading";const r=new Set(["complete","rejected","cancelled","failed"]);return e.every(o=>r.has(o.status))&&e.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(t){var e,r,o,i;const n=(e=this.config)==null?void 0:e.callbacks;this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);for(const s of t){const a=this._store.getState();if([...a.files.values()].some(w=>w.name===s.name&&w.size===s.size&&w.status!=="rejected"&&w.status!=="cancelled"))continue;const c=wn(s,a.restrictions,a.files);if(c){const w=s.type.startsWith("image/")?URL.createObjectURL(s):null,m={id:we(),status:"rejected",file:s,remoteUrl:null,name:s.name,size:s.size,type:s.type,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,..._e};me(this._store,m),this._dispatchPublic(B.FILE_REJECTED,{file:m,reason:c}),(r=n==null?void 0:n.onFileRejected)==null||r.call(n,m,c);const z=(o=this.config)==null?void 0:o.rejectedFileAutoRemoveDelay,$=z===!1||z===0||z===void 0?0:z;if($>0){const _=m.id,k=setTimeout(()=>{this._rejectedTimers.delete(_);const L=this._store.getState().files.get(_);L&&L.status==="rejected"&&Bt(this._store,_)},$);this._rejectedTimers.set(_,k)}continue}let f=null;s.type.startsWith("image/")&&(f=URL.createObjectURL(s));const h={id:we(),status:"idle",file:s,remoteUrl:null,name:s.name,size:s.size,type:s.type,previewUrl:f,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,..._e};if(me(this._store,h),this._dispatchPublic(B.FILE_ADDED,{file:h}),(i=n==null?void 0:n.onFileAdded)==null||i.call(n,h),s.type.startsWith("video/")){yn(s).then(m=>{if(!m)return;const z=this._store.getState(),$=z.files.get(h.id);if($){const _=new Map(z.files);_.set(h.id,{...$,previewUrl:m}),this._store.setState({files:_})}else URL.revokeObjectURL(m)});const w=document.createElement("video");w.preload="metadata",w.src=URL.createObjectURL(s),w.onerror=()=>{URL.revokeObjectURL(w.src)},w.onloadedmetadata=()=>{const m=w.duration;if(URL.revokeObjectURL(w.src),!isFinite(m))return;const z=this._store.getState(),$=z.files.get(h.id);if($){const _=new Map(z.files);_.set(h.id,{...$,duration:m}),this._store.setState({files:_})}}}}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(t){var e,r,o,i;const n=this._store.getState().files.get(t);if(!n)return;const s={...n};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===n.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===n.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),n.previewUrl&&URL.revokeObjectURL(n.previewUrl),n.file){const c=this._videoBlobUrls.get(n.file);c&&(URL.revokeObjectURL(c),this._videoBlobUrls.delete(n.file))}(n.status==="uploading"||n.status==="queued"||n.status==="retrying"||n.status==="paused")&&((e=this._engine)==null||e.cancelFile(t)),Bt(this._store,t),this._dimCache.delete(t);const a=this._rejectedTimers.get(t);if(a&&(clearTimeout(a),this._rejectedTimers.delete(t)),this._previewFileId===t){const c=[...this._store.getState().files.values()];this._previewFileId=c.length>0?c[0].id:null}this._dispatchPublic(B.FILE_REMOVED,{file:s}),(i=(o=(r=this.config)==null?void 0:r.callbacks)==null?void 0:o.onFileRemoved)==null||i.call(o,s)}render(){var t;const e=((t=this.config)==null?void 0:t.mode)??"modal",r=[...this._storeCtrl.state.files.values()];return e==="modal"?u`
        ${this._isOpen&&!this._isMinimized?u`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast></sfx-toast>
                </div>
              </div>
            `:C}
        ${this._renderFsOverlay()}
      `:u`
      <div class="inline ${r.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
        <sfx-toast></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return C;const t=[...this._store.getState().files.values()].filter(r=>r.previewUrl||r.type.startsWith("video/")&&r.file),e=t.findIndex(r=>r.id===this._previewFileId);return u`
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
        ${this._fullscreenVideoFile?u`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${r=>r.stopPropagation()}></video>`:u`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" style=${this._fullscreenZoomed?`transform: scale(2) translate(${this._fsPanX}px, ${this._fsPanY}px)`:""} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${r=>r.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title="${this._fullscreenZoomed?"Zoom out":"Zoom in"}">
          ${this._fullscreenZoomed?u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:u`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
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
    `}_renderInlineHeader(t){return u`
      <div class="inline-header">
        <div class="inline-header-top">
          ${t.accent?u`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${t.accent}</span>
                </div>
              `:C}
          ${t.title?u`<h2 class="inline-header-title">${t.title}</h2>`:C}
        </div>
        ${t.description?u`<div class="inline-header-desc">${t.description}</div>`:C}
      </div>
    `}_renderHeader(){var t,e,r;if(this._phase==="complete")return C;const o=((t=this.config)==null?void 0:t.mode)??"modal";if(this._phase==="uploading"){const c=[...this._storeCtrl.state.files.values()],f=c.filter(h=>h.status==="complete").length;return u`
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
                Uploading ${c.length}
                ${c.length===1?"file":"files"}
              </div>
              <div class="float-subtitle">
                ${f} of
                ${c.length}${this._lastEta>0?` · ~${ut(this._lastEta)} left`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(o==="inline"&&(e=this.config)!=null&&e.inlineHeader)return C;const i=((r=this.config)==null?void 0:r.header)??(o==="modal"?"close":!0);if(i===!1)return C;const n=o==="modal"?this._onModalDismiss:this._onInlineDismiss,s=i==="back"?u`<button
            class="header-btn header-btn-back"
            aria-label="Back to Asset Picker"
            @click=${n}
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
          </button>`:C,a=i==="close"?u`<button
            class="header-btn header-btn-close"
            aria-label="Close"
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
          </button>`:C;return u`
      <div class="header">
        ${s}
        ${i!=="back"?u` <div class="header-icon">
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
            </div>`:C}
        <div class="header-title">Upload Files</div>
        ${a}
      </div>
    `}_getImageDimensions(t){return t.previewUrl?this._dimCache.has(t.id)?Promise.resolve(this._dimCache.get(t.id)):new Promise(e=>{const r=new Image;r.onload=()=>{const o={w:r.naturalWidth,h:r.naturalHeight};this._dimCache.set(t.id,o),e(o)},r.onerror=()=>{this._dimCache.set(t.id,null),e(null)},r.src=t.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(t){var e;const r=this._storeCtrl.state,o=Math.round(r.totalProgress??0),i=t.filter(n=>n.status==="complete").length;return u`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${o}%</div>
        <div class="upload-overlay-title">
          Uploading ${t.length} ${t.length===1?"file":"files"}
        </div>
        <div class="upload-overlay-subtitle">
          ${i} of ${t.length}
          complete${this._lastEta>0?u` · ~${ut(this._lastEta)} left`:C}
        </div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" style="width:${o}%"></div>
        </div>
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            Cancel upload
          </button>
          ${(e=this.config)!=null&&e.minimizeOnUpload?u`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                Minimize & continue in background
              </button>`:C}
        </div>
      </div>
    `}_renderFloatingPill(t){const e=this._storeCtrl.state,r=Math.round(e.totalProgress??0),o=this._phase==="complete",i=t.filter(s=>s.status==="complete").length,n=t.filter(s=>s.status==="failed").length;return this._isPillExpanded===!1?u`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${o?n>0?i>0?u`<div class="float-collapsed-icon warn">
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
                    </div>`:u`<div class="float-collapsed-icon error">
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
                    </div>`:u`<div class="float-collapsed-icon done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>`:u`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${o?n>0?i>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${t.length} ${t.length===1?"file":"files"}`}</span
            >
            ${o?C:u`<span class="float-collapsed-pct">${r}%</span>`}
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
      `:u`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${o?n>0?i>0?"warn":"error":"done":""}"
            >
              ${o?n>0?i>0?u`<svg
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
                      </svg>`:u`<svg
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
                      </svg>`:u`<svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>`:u`<svg
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
                ${o?n>0?i>0?"Partially uploaded":"Upload failed":"Upload complete":`Uploading ${t.length} ${t.length===1?"file":"files"}`}
              </div>
              <div class="float-subtitle">
                ${o?`${i} ${i===1?"file":"files"} uploaded${n>0?`, ${n} failed`:""}`:`${i} of ${t.length}${this._lastEta>0?` · ~${ut(this._lastEta)} left`:""}`}
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
              class="float-progress-pct ${o?n>0?i>0?"warn":"error":"done":""}"
              >${o?"Done":`${r}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${o?n>0?i>0?"warn":"error":"done":""}"
              style="width:${o?100:r}%"
            ></div>
          </div>
        </div>
        <div class="float-items">
          ${t.map(s=>{const a=s.status==="failed"||s.status==="error";return u`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  style=${s.previewUrl?`background-image:url(${s.previewUrl});background-size:cover;background-position:center`:""}
                >
                  ${s.previewUrl?C:u`<svg
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
                  <div class="float-item-name">${s.name}</div>
                  <div class="float-item-size">${ce(s.size)}</div>
                </div>
                <div class="float-item-status">
                  ${s.status==="complete"?u`<div class="float-item-done">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>`:a?u` <div class="float-item-error-wrap">
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
                            >${s.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var c;this._ensureEngine(),(c=this._engine)==null||c.retryFile(s.id)}}
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
                        </button>`:s.status==="paused"?u`<svg
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
                      </svg>`:u`<div class="float-item-spinner"></div>`}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(t){var e,r,o,i,n;if(t.length===0)return C;const s=t.find(f=>f.id===this._previewFileId)??t[0],a=((e=s.name.split(".").pop())==null?void 0:e.toUpperCase())||"";new Date(s.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const c=t.reduce((f,h)=>f+(h.size||0),0);return u`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" style="flex:${this._splitPct}">
          ${((r=this.config)==null?void 0:r.mode)==="inline"&&(o=this.config)!=null&&o.inlineHeader?this._renderInlineHeader(this.config.inlineHeader):C}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${t.length} ${t.length===1?"asset":"assets"} ·
              ${ce(c)}</span
            >
          </div>
          <sfx-file-list
            .files=${t}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${pr(this._storeCtrl.state.restrictions)}
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
            <span class="preview-header-name" title=${s.name}
              >${s.name}</span
            >
            <div class="preview-header-actions">
              ${s.previewUrl||s.type.startsWith("video/")&&s.file?u`
                    <button
                      @click=${()=>{this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._fullscreenZoomed=!1,requestAnimationFrame(()=>this.requestUpdate())}}
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
                  `:C}
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
          ${s.type.startsWith("video/")&&s.file?u`
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
                    ?disabled=${t.indexOf(s)===0}
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
                    ?disabled=${t.indexOf(s)===t.length-1}
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
              `:s.previewUrl?u`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${s.previewUrl}
                      alt=${s.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(s)===0}
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
                    ?disabled=${t.indexOf(s)===t.length-1}
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
              `:u`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${Ar(s)}">
                    <img
                      class="preview-doc-type-img"
                      src=${Mr(a)}
                      alt="${a?`${a} file`:"File"}"
                      @error=${f=>{const h=f.target,w=Hr();!h.dataset.fallback&&h.src!==w&&(h.dataset.fallback="1",h.src=w)}}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(s)===0}
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
                    ?disabled=${t.indexOf(s)===t.length-1}
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
          ${this._metadataSchema&&(i=this.config)!=null&&i.metadataConfig?u`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${a}${s.size?` · ${ce(s.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:C}
          ${this._metadataSchema&&(n=this.config)!=null&&n.metadataConfig?u`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${s.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:u`
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
                        ${s.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">Type</div>
                      <div class="preview-file-info-val">${a}</div>
                    </div>
                    ${s.size?u`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Size</div>
                            <div class="preview-file-info-val">
                              ${ce(s.size)}
                            </div>
                          </div>
                        `:C}
                    ${this._previewDims!=="—"?u`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">Dimensions</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:C}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}_navigatePreview(t,e){var r;const o=t.findIndex(i=>i.id===this._previewFileId)+e;if(o>=0&&o<t.length){const i=(r=this.shadowRoot)==null?void 0:r.querySelector(".preview-image[controls]");i&&(i.pause(),i.removeAttribute("src"),i.load()),this._previewFileId=t[o].id}}_renderBody(){var t,e,r,o,i,n,s,a,c,f,h;const w=this._storeCtrl.state,m=[...w.files.values()],z=this._phase,$=pr(w.restrictions),_=m.length>0;return u`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
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
          class="body ${_?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId?"has-preview":""}"
          @dragenter=${_?this._onBodyDragEnter:C}
          @dragover=${_?this._onBodyDragOver:C}
          @dragleave=${_?this._onBodyDragLeave:C}
          @drop=${_?this._onBodyDrop:C}
        >
          ${((t=this.config)==null?void 0:t.mode)==="inline"&&(e=this.config)!=null&&e.inlineHeader&&!this._previewFileId&&z!=="uploading"&&z!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):C}
          ${this._isReviewing?u`
                <sfx-last-upload-review
                  .files=${this._reviewFiles}
                  .getLocateUrl=${(r=this.config)==null?void 0:r.getLocateUrl}
                  .showLocateButton=${((o=this.config)==null?void 0:o.showLocateButton)??!1}
                  .showCopyCdnButton=${((i=this.config)==null?void 0:i.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:z==="complete"?u`
                <sfx-success-card
                  .fileCount=${m.filter(k=>k.status==="complete").length}
                  .totalSize=${m.filter(k=>k.status==="complete").reduce((k,L)=>k+(L.size||0),0)}
                  .thumbnails=${m.filter(k=>k.status==="complete"&&k.previewUrl).map(k=>k.previewUrl)}
                  .failedFiles=${m.filter(k=>k.status==="failed").map(k=>({id:k.id,name:k.name,error:k.error||"Upload failed"}))}
                  @close-uploader=${this._onSuccessCardClose}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:z==="uploading"?this._renderUploadOverlay(m):u`
                ${_?C:u`<sfx-drop-zone
                        .compact=${_}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${$}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((n=this.config)==null?void 0:n.sourcesLayout)??"pills"}
                        .mode=${((s=this.config)==null?void 0:s.mode)??"modal"}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?u`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title="View last upload batch"
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            View last upload
                          </button>`:C}`}
                ${_?this._previewFileId?this._renderPreviewLayout(m):u`
                        <div class="asset-count">
                          ${m.length}
                          ${m.length===1?"file":"files"} ·
                          ${ce(m.reduce((k,L)=>k+(L.size||0),0))}
                        </div>
                        <sfx-file-list
                          .files=${m}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${$}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:C}
              `}
        </div>

        ${_&&z!=="complete"&&z!=="uploading"?u`
              <sfx-actions-bar
                .uploadState=${"idle"}
                .fileCount=${m.length}
                .totalSize=${m.reduce((k,L)=>k+(L.size||0),0)}
                .failedCount=${m.filter(k=>k.status==="failed"||k.status==="error").length}
                .completedCount=${m.filter(k=>k.status==="complete").length}
                .uploadProgress=${w.totalProgress??0}
                .showFillMetadata=${!!(((a=this.config)==null?void 0:a.showFillMetadata)??((c=this.config)==null?void 0:c.metadataConfig))}
                .uploadDisabled=${this._hasUnfilledRequiredMetadata}
                .uploadDisabledReason=${this._hasUnfilledRequiredMetadata?"Fill required metadata first":""}
              ></sfx-actions-bar>
            `:C}
        ${this._showUrlDialog?u`<sfx-url-dialog></sfx-url-dialog>`:C}
        ${this._showCameraDialog?u`<sfx-camera-dialog></sfx-camera-dialog>`:C}
        ${this._showScreenCastDialog?u`<sfx-screen-cast-dialog></sfx-screen-cast-dialog>`:C}
        ${this._activeConnector&&(f=this.config)!=null&&f.connectors?u`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${gr.has(this._activeConnector)?u`
                        <sfx-search-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-search-provider-browser>
                      `:u`
                        <sfx-provider-browser
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `:C}
        ${this._bulkMetadataOpen&&this._metadataSchema?u`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(k=>re._MODIFIABLE_STATUSES.has(k.status))}
                .config=${((h=this.config)==null?void 0:h.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:C}
      </div>
    `}_navigateFs(t){const e=[...this._store.getState().files.values()].filter(i=>i.previewUrl||i.type.startsWith("video/")&&i.file),r=e.findIndex(i=>i.id===this._previewFileId);if(r===-1)return;const o=r+t;if(o>=0&&o<e.length){const i=e[o];this._fullscreenPreviewUrl=i.previewUrl,this._fullscreenVideoFile=i.type.startsWith("video/")&&i.file?i.file:null,this._previewFileId=i.id,this._fullscreenZoomed=!1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(t){let e=this._videoBlobUrls.get(t);return e||(e=URL.createObjectURL(t),this._videoBlobUrls.set(t,e)),e}_revokeVideoBlobUrls(){for(const t of this._videoBlobUrls.values())URL.revokeObjectURL(t);this._videoBlobUrls.clear()}},re.styles=V`
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
      max-width: 1100px;
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

    .upload-overlay-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .upload-overlay-cancel {
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

    .upload-overlay-cancel:hover {
      border-color: var(--sfx-up-error, #dc2626);
      color: var(--sfx-up-error, #dc2626);
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
         looked tiny; relying on max-width/max-height lets the wrap
         fill whatever vertical space the layout gives it. */
      .preview-img-wrap {
        width: auto;
        height: auto;
        max-width: min(420px, 60vw);
        max-height: min(280px, 55vh);
      }
    }
  `,re._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),re._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),re);H([R({attribute:!1})],M.prototype,"config");H([j()],M.prototype,"_isOpen");H([j()],M.prototype,"_activeConnector");H([j()],M.prototype,"_showUrlDialog");H([j()],M.prototype,"_showCameraDialog");H([j()],M.prototype,"_showScreenCastDialog");H([j()],M.prototype,"_previewFileId");H([j()],M.prototype,"_previewDims");H([j()],M.prototype,"_fileInfoOpen");H([j()],M.prototype,"_splitPct");H([j()],M.prototype,"_fullscreenPreviewUrl");H([j()],M.prototype,"_fullscreenVideoFile");H([j()],M.prototype,"_fullscreenZoomed");H([j()],M.prototype,"_bodyDragOver");H([j()],M.prototype,"_isMinimized");H([j()],M.prototype,"_isPillExpanded");H([j()],M.prototype,"_metadataSchema");H([j()],M.prototype,"_bulkMetadataOpen");H([j()],M.prototype,"_isReviewing");H([j()],M.prototype,"_reviewFiles");H([j()],M.prototype,"_hasStoredReview");let Nn=M;const te=(t,e)=>{typeof customElements<"u"&&!customElements.get(t)&&customElements.define(t,e)};te("sfx-uploader",Nn);te("sfx-drop-zone",zn);te("sfx-import-divider",On);te("sfx-source-pills",Nr);te("sfx-file-list",ee);te("sfx-file-item",le);te("sfx-success-card",xe);te("sfx-actions-bar",ie);te("sfx-url-dialog",at);te("sfx-camera-dialog",We);te("sfx-screen-cast-dialog",Oe);const ls=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Vn as B,Gn as H,Xn as I,Hr as K,Wn as M,Et as U,Mr as X,ls as d,ce as f,_n as g,ue as o,Kn as q};
