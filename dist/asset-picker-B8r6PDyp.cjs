"use strict";var Na=Object.create;var Oi=Object.defineProperty;var Ua=Object.getOwnPropertyDescriptor;var Ka=Object.getOwnPropertyNames;var Ba=Object.getPrototypeOf,qa=Object.prototype.hasOwnProperty;var Va=(t,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Ka(e))!qa.call(t,a)&&a!==s&&Oi(t,a,{get:()=>e[a],enumerable:!(i=Ua(e,a))||i.enumerable});return t};var Ha=(t,e,s)=>(s=t!=null?Na(Ba(t)):{},Va(e||!t||!t.__esModule?Oi(s,"default",{value:t,enumerable:!0}):s,t));const n=require("lit"),d=require("lit/decorators.js"),si=require("lit/directive.js");function Ga(t,e){for(var s=0;s<e.length;s++){const i=e[s];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}class Qa{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const s=this.state;this.state={...s,...e},this._notifying=!0;try{this.listeners.forEach(i=>i(this.state,s))}finally{this._notifying=!1}if(this._pendingState){const i=this._pendingState;this._pendingState=null,this.setState(i)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function Ya(){return new Qa({t:(t,e,s)=>{const i=(a,r)=>a.replace(/\{\{(\w+)\}\}/g,(o,l)=>String(r[l]??""));if(typeof e=="string")return i(e,s??{});if(typeof e=="object"&&e!==null){const a=e,r=a.count;if(r!==void 0){const o=String((r===1?a.defaultValue_one:a.defaultValue_other)??a.defaultValue??t);return i(o,a)}return i(String(a.defaultValue??t),a)}return t},config:null,projectToken:"",sassKey:"",permissions:null,brandColor:"",isOpen:!1,activeTab:"assets",viewMode:"grid",searchQuery:"",isAISearchActive:!1,sortBy:"modified_at",sortDirection:"desc",previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:"/",breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}const T=t=>typeof t=="string",qt=()=>{let t,e;const s=new Promise((i,a)=>{t=i,e=a});return s.resolve=t,s.reject=e,s},Ti=t=>t==null?"":""+t,Wa=(t,e,s)=>{t.forEach(i=>{e[i]&&(s[i]=e[i])})},Xa=/###/g,Li=t=>t&&t.indexOf("###")>-1?t.replace(Xa,"."):t,Pi=t=>!t||T(t),Gt=(t,e,s)=>{const i=T(e)?e.split("."):e;let a=0;for(;a<i.length-1;){if(Pi(t))return{};const r=Li(i[a]);!t[r]&&s&&(t[r]=new s),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++a}return Pi(t)?{}:{obj:t,k:Li(i[a])}},Ii=(t,e,s)=>{const{obj:i,k:a}=Gt(t,e,Object);if(i!==void 0||e.length===1){i[a]=s;return}let r=e[e.length-1],o=e.slice(0,e.length-1),l=Gt(t,o,Object);for(;l.obj===void 0&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),l=Gt(t,o,Object),l&&l.obj&&typeof l.obj[`${l.k}.${r}`]<"u"&&(l.obj=void 0);l.obj[`${l.k}.${r}`]=s},Ja=(t,e,s,i)=>{const{obj:a,k:r}=Gt(t,e,Object);a[r]=a[r]||[],a[r].push(s)},ws=(t,e)=>{const{obj:s,k:i}=Gt(t,e);if(s)return s[i]},Za=(t,e,s)=>{const i=ws(t,s);return i!==void 0?i:ws(e,s)},na=(t,e,s)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?T(t[i])||t[i]instanceof String||T(e[i])||e[i]instanceof String?s&&(t[i]=e[i]):na(t[i],e[i],s):t[i]=e[i]);return t},At=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var er={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const tr=t=>T(t)?t.replace(/[&<>"'\/]/g,e=>er[e]):t;class sr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const s=this.regExpMap.get(e);if(s!==void 0)return s;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const ir=[" ",",","?","!",";"],ar=new sr(20),rr=(t,e,s)=>{e=e||"",s=s||"";const i=ir.filter(o=>e.indexOf(o)<0&&s.indexOf(o)<0);if(i.length===0)return!0;const a=ar.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let r=!a.test(t);if(!r){const o=t.indexOf(s);o>0&&!a.test(t.substring(0,o))&&(r=!0)}return r},ii=function(t,e){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(s);let a=t;for(let r=0;r<i.length;){if(!a||typeof a!="object")return;let o,l="";for(let c=r;c<i.length;++c)if(c!==r&&(l+=s),l+=i[c],o=a[l],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&c<i.length-1)continue;r+=c-r+1;break}a=o}return a},$s=t=>t&&t.replace("_","-"),or={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class ks{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,s)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=s.prefix||"i18next:",this.logger=e||or,this.options=s,this.debug=s.debug}log(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"log","",!0)}warn(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","",!0)}error(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"error","")}deprecate(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return this.forward(s,"warn","WARNING DEPRECATED: ",!0)}forward(e,s,i,a){return a&&!this.debug?null:(T(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[s](e))}create(e){return new ks(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new ks(this.logger,e)}}var De=new ks;class Rs{constructor(){this.observers={}}on(e,s){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const a=this.observers[i].get(s)||0;this.observers[i].set(s,a+1)}),this}off(e,s){if(this.observers[e]){if(!s){delete this.observers[e];return}this.observers[e].delete(s)}}emit(e){for(var s=arguments.length,i=new Array(s>1?s-1:0),a=1;a<s;a++)i[a-1]=arguments[a];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[l,c]=o;for(let h=0;h<c;h++)l(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[l,c]=o;for(let h=0;h<c;h++)l.apply(l,[e,...i])})}}class Mi extends Rs{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const s=this.options.ns.indexOf(e);s>-1&&this.options.ns.splice(s,1)}getResource(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,o=a.ignoreJSONStructure!==void 0?a.ignoreJSONStructure:this.options.ignoreJSONStructure;let l;e.indexOf(".")>-1?l=e.split("."):(l=[e,s],i&&(Array.isArray(i)?l.push(...i):T(i)&&r?l.push(...i.split(r)):l.push(i)));const c=ws(this.data,l);return!c&&!s&&!i&&e.indexOf(".")>-1&&(e=l[0],s=l[1],i=l.slice(2).join(".")),c||!o||!T(i)?c:ii(this.data&&this.data[e]&&this.data[e][s],i,r)}addResource(e,s,i,a){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let l=[e,s];i&&(l=l.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(l=e.split("."),a=s,s=l[1]),this.addNamespaces(s),Ii(this.data,l,a),r.silent||this.emit("added",e,s,i,a)}addResources(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const r in i)(T(i[r])||Array.isArray(i[r]))&&this.addResource(e,s,r,i[r],{silent:!0});a.silent||this.emit("added",e,s,i)}addResourceBundle(e,s,i,a,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},l=[e,s];e.indexOf(".")>-1&&(l=e.split("."),a=i,i=s,s=l[1]),this.addNamespaces(s);let c=ws(this.data,l)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),a?na(c,i,r):c={...c,...i},Ii(this.data,l,c),o.silent||this.emit("added",e,s,i)}removeResourceBundle(e,s){this.hasResourceBundle(e,s)&&delete this.data[e][s],this.removeNamespaces(s),this.emit("removed",e,s)}hasResourceBundle(e,s){return this.getResource(e,s)!==void 0}getResourceBundle(e,s){return s||(s=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,s)}:this.getResource(e,s)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const s=this.getDataByLanguage(e);return!!(s&&Object.keys(s)||[]).find(a=>s[a]&&Object.keys(s[a]).length>0)}toJSON(){return this.data}}var la={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,s,i,a){return t.forEach(r=>{this.processors[r]&&(e=this.processors[r].process(e,s,i,a))}),e}};const Di={};class Ss extends Rs{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Wa(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=s,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=De.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,s);return i&&i.res!==void 0}extractFromKey(e,s){let i=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let r=s.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,l=!this.options.userDefinedKeySeparator&&!s.keySeparator&&!this.options.userDefinedNsSeparator&&!s.nsSeparator&&!rr(e,i,a);if(o&&!l){const c=e.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:e,namespaces:T(r)?[r]:r};const h=e.split(i);(i!==a||i===a&&this.options.ns.indexOf(h[0])>-1)&&(r=h.shift()),e=h.join(a)}return{key:e,namespaces:T(r)?[r]:r}}translate(e,s,i){if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const a=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,r=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:o,namespaces:l}=this.extractFromKey(e[e.length-1],s),c=l[l.length-1],h=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(h&&h.toLowerCase()==="cimode"){if(u){const F=s.nsSeparator||this.options.nsSeparator;return a?{res:`${c}${F}${o}`,usedKey:o,exactUsedKey:o,usedLng:h,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:`${c}${F}${o}`}return a?{res:o,usedKey:o,exactUsedKey:o,usedLng:h,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:o}const f=this.resolve(e,s);let p=f&&f.res;const g=f&&f.usedKey||o,v=f&&f.exactUsedKey||o,b=Object.prototype.toString.apply(p),_=["[object Number]","[object Function]","[object RegExp]"],$=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,I=!T(p)&&typeof p!="boolean"&&typeof p!="number";if(w&&p&&I&&_.indexOf(b)<0&&!(T($)&&Array.isArray(p))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,p,{...s,ns:l}):`key '${o} (${this.language})' returned an object instead of string.`;return a?(f.res=F,f.usedParams=this.getUsedParamsDetails(s),f):F}if(r){const F=Array.isArray(p),C=F?[]:{},U=F?v:g;for(const S in p)if(Object.prototype.hasOwnProperty.call(p,S)){const B=`${U}${r}${S}`;C[S]=this.translate(B,{...s,joinArrays:!1,ns:l}),C[S]===B&&(C[S]=p[S])}p=C}}else if(w&&T($)&&Array.isArray(p))p=p.join($),p&&(p=this.extendTranslation(p,e,s,i));else{let F=!1,C=!1;const U=s.count!==void 0&&!T(s.count),S=Ss.hasDefaultValue(s),B=U?this.pluralResolver.getSuffix(h,s.count,s):"",P=s.ordinal&&U?this.pluralResolver.getSuffix(h,s.count,{ordinal:!1}):"",A=U&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),Q=A&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${B}`]||s[`defaultValue${P}`]||s.defaultValue;!this.isValidLookup(p)&&S&&(F=!0,p=Q),this.isValidLookup(p)||(C=!0,p=o);const G=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&C?void 0:p,X=S&&Q!==p&&this.options.updateMissing;if(C||F||X){if(this.logger.log(X?"updateKey":"missingKey",h,c,o,X?Q:p),r){const L=this.resolve(o,{...s,keySeparator:!1});L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let m=[];const y=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&y&&y[0])for(let L=0;L<y.length;L++)m.push(y[L]);else this.options.saveMissingTo==="all"?m=this.languageUtils.toResolveHierarchy(s.lng||this.language):m.push(s.lng||this.language);const E=(L,j,D)=>{const ye=S&&D!==p?D:G;this.options.missingKeyHandler?this.options.missingKeyHandler(L,c,j,ye,X,s):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(L,c,j,ye,X,s),this.emit("missingKey",L,c,j,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&U?m.forEach(L=>{const j=this.pluralResolver.getSuffixes(L,s);A&&s[`defaultValue${this.options.pluralSeparator}zero`]&&j.indexOf(`${this.options.pluralSeparator}zero`)<0&&j.push(`${this.options.pluralSeparator}zero`),j.forEach(D=>{E([L],o+D,s[`defaultValue${D}`]||Q)})}):E(m,o,Q))}p=this.extendTranslation(p,e,s,f,i),C&&p===o&&this.options.appendNamespaceToMissingKey&&(p=`${c}:${o}`),(C||F)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${o}`:o,F?p:void 0):p=this.options.parseMissingKeyHandler(p))}return a?(f.res=p,f.usedParams=this.getUsedParamsDetails(s),f):p}extendTranslation(e,s,i,a,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const h=T(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(h){const p=e.match(this.interpolator.nestingRegexp);u=p&&p.length}let f=i.replace&&!T(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||a.usedLng,i),h){const p=e.match(this.interpolator.nestingRegexp),g=p&&p.length;u<g&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&a&&a.res&&(i.lng=this.language||a.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var p=arguments.length,g=new Array(p),v=0;v<p;v++)g[v]=arguments[v];return r&&r[0]===g[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${s[0]}`),null):o.translate(...g,s)},i)),i.interpolation&&this.interpolator.reset()}const l=i.postProcess||this.options.postProcess,c=T(l)?[l]:l;return e!=null&&c&&c.length&&i.applyPostProcessor!==!1&&(e=la.handle(c,e,s,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...a,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,a,r,o,l;return T(e)&&(e=[e]),e.forEach(c=>{if(this.isValidLookup(i))return;const h=this.extractFromKey(c,s),u=h.key;a=u;let f=h.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const p=s.count!==void 0&&!T(s.count),g=p&&!s.ordinal&&s.count===0&&this.pluralResolver.shouldUseIntlApi(),v=s.context!==void 0&&(T(s.context)||typeof s.context=="number")&&s.context!=="",b=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);f.forEach(_=>{this.isValidLookup(i)||(l=_,!Di[`${b[0]}-${_}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(l)&&(Di[`${b[0]}-${_}`]=!0,this.logger.warn(`key "${a}" for languages "${b.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),b.forEach($=>{if(this.isValidLookup(i))return;o=$;const w=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(w,u,$,_,s);else{let F;p&&(F=this.pluralResolver.getSuffix($,s.count,s));const C=`${this.options.pluralSeparator}zero`,U=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(p&&(w.push(u+F),s.ordinal&&F.indexOf(U)===0&&w.push(u+F.replace(U,this.options.pluralSeparator)),g&&w.push(u+C)),v){const S=`${u}${this.options.contextSeparator}${s.context}`;w.push(S),p&&(w.push(S+F),s.ordinal&&F.indexOf(U)===0&&w.push(S+F.replace(U,this.options.pluralSeparator)),g&&w.push(S+C))}}let I;for(;I=w.pop();)this.isValidLookup(i)||(r=I,i=this.getResource($,_,I,s))}))})}),{res:i,usedKey:a,exactUsedKey:r,usedLng:o,usedNS:l}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,s,i,a):this.resourceStore.getResource(e,s,i,a)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!T(e.replace);let a=i?e.replace:e;if(i&&typeof e.count<"u"&&(a.count=e.count),this.options.interpolation.defaultVariables&&(a={...this.options.interpolation.defaultVariables,...a}),!i){a={...a};for(const r of s)delete a[r]}return a}static hasDefaultValue(e){const s="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&s===i.substring(0,s.length)&&e[i]!==void 0)return!0;return!1}}const qs=t=>t.charAt(0).toUpperCase()+t.slice(1);class Ri{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=De.create("languageUtils")}getScriptPartFromCode(e){if(e=$s(e),!e||e.indexOf("-")<0)return null;const s=e.split("-");return s.length===2||(s.pop(),s[s.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(s.join("-"))}getLanguagePartFromCode(e){if(e=$s(e),!e||e.indexOf("-")<0)return e;const s=e.split("-");return this.formatLanguageCode(s[0])}formatLanguageCode(e){if(T(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let a=Intl.getCanonicalLocales(e)[0];if(a&&this.options.lowerCaseLng&&(a=a.toLowerCase()),a)return a}catch{}const s=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(a=>a.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=qs(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),s.indexOf(i[1].toLowerCase())>-1&&(i[1]=qs(i[1].toLowerCase())),s.indexOf(i[2].toLowerCase())>-1&&(i[2]=qs(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let s;return e.forEach(i=>{if(s)return;const a=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(a))&&(s=a)}),!s&&this.options.supportedLngs&&e.forEach(i=>{if(s)return;const a=this.getLanguagePartFromCode(i);if(this.isSupportedCode(a))return s=a;s=this.options.supportedLngs.find(r=>{if(r===a)return r;if(!(r.indexOf("-")<0&&a.indexOf("-")<0)&&(r.indexOf("-")>0&&a.indexOf("-")<0&&r.substring(0,r.indexOf("-"))===a||r.indexOf(a)===0&&a.length>1))return r})}),s||(s=this.getFallbackCodes(this.options.fallbackLng)[0]),s}getFallbackCodes(e,s){if(!e)return[];if(typeof e=="function"&&(e=e(s)),T(e)&&(e=[e]),Array.isArray(e))return e;if(!s)return e.default||[];let i=e[s];return i||(i=e[this.getScriptPartFromCode(s)]),i||(i=e[this.formatLanguageCode(s)]),i||(i=e[this.getLanguagePartFromCode(s)]),i||(i=e.default),i||[]}toResolveHierarchy(e,s){const i=this.getFallbackCodes(s||this.options.fallbackLng||[],e),a=[],r=o=>{o&&(this.isSupportedCode(o)?a.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return T(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):T(e)&&r(this.formatLanguageCode(e)),i.forEach(o=>{a.indexOf(o)<0&&r(this.formatLanguageCode(o))}),a}}let nr=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],lr={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const cr=["v1","v2","v3"],dr=["v4"],zi={zero:0,one:1,two:2,few:3,many:4,other:5},pr=()=>{const t={};return nr.forEach(e=>{e.lngs.forEach(s=>{t[s]={numbers:e.nr,plurals:lr[e.fc]}})}),t};class hr{constructor(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=s,this.logger=De.create("pluralResolver"),(!this.options.compatibilityJSON||dr.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=pr(),this.pluralRulesCache={}}addRule(e,s){this.rules[e]=s}clearCache(){this.pluralRulesCache={}}getRule(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=$s(e==="dev"?"en":e),a=s.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:a});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let o;try{o=new Intl.PluralRules(i,{type:a})}catch{if(!e.match(/-|_/))return;const c=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(c,s)}return this.pluralRulesCache[r]=o,o}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(a=>`${s}${a}`)}getSuffixes(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,s);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((a,r)=>zi[a]-zi[r]).map(a=>`${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${a}`):i.numbers.map(a=>this.getSuffix(e,a,s)):[]}getSuffix(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const a=this.getRule(e,i);return a?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${a.select(s)}`:this.getSuffixRetroCompatible(a,s):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,s){const i=e.noAbs?e.plurals(s):e.plurals(Math.abs(s));let a=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(a===2?a="plural":a===1&&(a=""));const r=()=>this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString();return this.options.compatibilityJSON==="v1"?a===1?"":typeof a=="number"?`_plural_${a.toString()}`:r():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!cr.includes(this.options.compatibilityJSON)}}const ji=function(t,e,s){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,r=Za(t,e,s);return!r&&a&&T(s)&&(r=ii(t,s,i),r===void 0&&(r=ii(e,s,i))),r},Vs=t=>t.replace(/\$/g,"$$$$");class ur{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=De.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(s=>s),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:s,escapeValue:i,useRawValueToEscape:a,prefix:r,prefixEscaped:o,suffix:l,suffixEscaped:c,formatSeparator:h,unescapeSuffix:u,unescapePrefix:f,nestingPrefix:p,nestingPrefixEscaped:g,nestingSuffix:v,nestingSuffixEscaped:b,nestingOptionsSeparator:_,maxReplaces:$,alwaysFormat:w}=e.interpolation;this.escape=s!==void 0?s:tr,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=a!==void 0?a:!1,this.prefix=r?At(r):o||"{{",this.suffix=l?At(l):c||"}}",this.formatSeparator=h||",",this.unescapePrefix=u?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=p?At(p):g||At("$t("),this.nestingSuffix=v?At(v):b||At(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=$||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(s,i)=>s&&s.source===i?(s.lastIndex=0,s):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,s,i,a){let r,o,l;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=g=>{if(g.indexOf(this.formatSeparator)<0){const $=ji(s,c,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format($,void 0,i,{...a,...s,interpolationkey:g}):$}const v=g.split(this.formatSeparator),b=v.shift().trim(),_=v.join(this.formatSeparator).trim();return this.format(ji(s,c,b,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...a,...s,interpolationkey:b})};this.resetRegExp();const u=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,f=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>Vs(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?Vs(this.escape(g)):Vs(g)}].forEach(g=>{for(l=0;r=g.regex.exec(e);){const v=r[1].trim();if(o=h(v),o===void 0)if(typeof u=="function"){const _=u(e,r,a);o=T(_)?_:""}else if(a&&Object.prototype.hasOwnProperty.call(a,v))o="";else if(f){o=r[0];continue}else this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`),o="";else!T(o)&&!this.useRawValueToEscape&&(o=Ti(o));const b=g.safeValue(o);if(e=e.replace(r[0],b),f?(g.regex.lastIndex+=o.length,g.regex.lastIndex-=r[0].length):g.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a,r,o;const l=(c,h)=>{const u=this.nestingOptionsSeparator;if(c.indexOf(u)<0)return c;const f=c.split(new RegExp(`${u}[ ]*{`));let p=`{${f[1]}`;c=f[0],p=this.interpolate(p,o);const g=p.match(/'/g),v=p.match(/"/g);(g&&g.length%2===0&&!v||v.length%2!==0)&&(p=p.replace(/'/g,'"'));try{o=JSON.parse(p),h&&(o={...h,...o})}catch(b){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,b),`${c}${u}${p}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,c};for(;a=this.nestingRegexp.exec(e);){let c=[];o={...i},o=o.replace&&!T(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let h=!1;if(a[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(a[1])){const u=a[1].split(this.formatSeparator).map(f=>f.trim());a[1]=u.shift(),c=u,h=!0}if(r=s(l.call(this,a[1].trim(),o),o),r&&a[0]===e&&!T(r))return r;T(r)||(r=Ti(r)),r||(this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`),r=""),h&&(r=c.reduce((u,f)=>this.format(u,f,i.lng,{...i,interpolationkey:a[1].trim()}),r.trim())),e=e.replace(a[0],r),this.regexp.lastIndex=0}return e}}const fr=t=>{let e=t.toLowerCase().trim();const s={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const a=i[1].substring(0,i[1].length-1);e==="currency"&&a.indexOf(":")<0?s.currency||(s.currency=a.trim()):e==="relativetime"&&a.indexOf(":")<0?s.range||(s.range=a.trim()):a.split(";").forEach(o=>{if(o){const[l,...c]=o.split(":"),h=c.join(":").trim().replace(/^'+|'+$/g,""),u=l.trim();s[u]||(s[u]=h),h==="false"&&(s[u]=!1),h==="true"&&(s[u]=!0),isNaN(h)||(s[u]=parseInt(h,10))}})}return{formatName:e,formatOptions:s}},Ft=t=>{const e={};return(s,i,a)=>{let r=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(r={...r,[a.interpolationkey]:void 0});const o=i+JSON.stringify(r);let l=e[o];return l||(l=t($s(i),a),e[o]=l),l(s)}};class gr{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=De.create("formatter"),this.options=e,this.formats={number:Ft((s,i)=>{const a=new Intl.NumberFormat(s,{...i});return r=>a.format(r)}),currency:Ft((s,i)=>{const a=new Intl.NumberFormat(s,{...i,style:"currency"});return r=>a.format(r)}),datetime:Ft((s,i)=>{const a=new Intl.DateTimeFormat(s,{...i});return r=>a.format(r)}),relativetime:Ft((s,i)=>{const a=new Intl.RelativeTimeFormat(s,{...i});return r=>a.format(r,i.range||"day")}),list:Ft((s,i)=>{const a=new Intl.ListFormat(s,{...i});return r=>a.format(r)})},this.init(e)}init(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=s.interpolation.formatSeparator||","}add(e,s){this.formats[e.toLowerCase().trim()]=s}addCached(e,s){this.formats[e.toLowerCase().trim()]=Ft(s)}format(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const r=s.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find(l=>l.indexOf(")")>-1)){const l=r.findIndex(c=>c.indexOf(")")>-1);r[0]=[r[0],...r.splice(1,l)].join(this.formatSeparator)}return r.reduce((l,c)=>{const{formatName:h,formatOptions:u}=fr(c);if(this.formats[h]){let f=l;try{const p=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},g=p.locale||p.lng||a.locale||a.lng||i;f=this.formats[h](l,g,{...u,...a,...p})}catch(p){this.logger.warn(p)}return f}else this.logger.warn(`there was no format function for ${h}`);return l},e)}}const mr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class vr extends Rs{constructor(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=s,this.services=i,this.languageUtils=i.languageUtils,this.options=a,this.logger=De.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=a.maxParallelReads||10,this.readingCalls=0,this.maxRetries=a.maxRetries>=0?a.maxRetries:5,this.retryTimeout=a.retryTimeout>=1?a.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,a.backend,a)}queueLoad(e,s,i,a){const r={},o={},l={},c={};return e.forEach(h=>{let u=!0;s.forEach(f=>{const p=`${h}|${f}`;!i.reload&&this.store.hasResourceBundle(h,f)?this.state[p]=2:this.state[p]<0||(this.state[p]===1?o[p]===void 0&&(o[p]=!0):(this.state[p]=1,u=!1,o[p]===void 0&&(o[p]=!0),r[p]===void 0&&(r[p]=!0),c[f]===void 0&&(c[f]=!0)))}),u||(l[h]=!0)}),(Object.keys(r).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(r),pending:Object.keys(o),toLoadLanguages:Object.keys(l),toLoadNamespaces:Object.keys(c)}}loaded(e,s,i){const a=e.split("|"),r=a[0],o=a[1];s&&this.emit("failedLoading",r,o,s),!s&&i&&this.store.addResourceBundle(r,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=s?-1:2,s&&i&&(this.state[e]=0);const l={};this.queue.forEach(c=>{Ja(c.loaded,[r],o),mr(c,e),s&&c.errors.push(s),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(h=>{l[h]||(l[h]={});const u=c.loaded[h];u.length&&u.forEach(f=>{l[h][f]===void 0&&(l[h][f]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(c=>!c.done)}read(e,s,i){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:s,fcName:i,tried:a,wait:r,callback:o});return}this.readingCalls++;const l=(h,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(h&&u&&a<this.maxRetries){setTimeout(()=>{this.read.call(this,e,s,i,a+1,r*2,o)},r);return}o(h,u)},c=this.backend[i].bind(this.backend);if(c.length===2){try{const h=c(e,s);h&&typeof h.then=="function"?h.then(u=>l(null,u)).catch(l):l(null,h)}catch(h){l(h)}return}return c(e,s,l)}prepareLoading(e,s){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),a&&a();T(e)&&(e=this.languageUtils.toResolveHierarchy(e)),T(s)&&(s=[s]);const r=this.queueLoad(e,s,i,a);if(!r.toLoad.length)return r.pending.length||a(),null;r.toLoad.forEach(o=>{this.loadOne(o)})}load(e,s,i){this.prepareLoading(e,s,{},i)}reload(e,s,i){this.prepareLoading(e,s,{reload:!0},i)}loadOne(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),a=i[0],r=i[1];this.read(a,r,"read",void 0,void 0,(o,l)=>{o&&this.logger.warn(`${s}loading namespace ${r} for language ${a} failed`,o),!o&&l&&this.logger.log(`${s}loaded namespace ${r} for language ${a}`,l),this.loaded(e,o,l)})}saveMissing(e,s,i,a,r){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(s)){this.logger.warn(`did not save key "${i}" as the namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const c={...o,isUpdate:r},h=this.backend.create.bind(this.backend);if(h.length<6)try{let u;h.length===5?u=h(e,s,i,a,c):u=h(e,s,i,a),u&&typeof u.then=="function"?u.then(f=>l(null,f)).catch(l):l(null,u)}catch(u){l(u)}else h(e,s,i,a,l,c)}!e||!e[0]||this.store.addResource(e[0],s,i,a)}}}const Ni=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),T(t[1])&&(e.defaultValue=t[1]),T(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const s=t[3]||t[2];Object.keys(s).forEach(i=>{e[i]=s[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Ui=t=>(T(t.ns)&&(t.ns=[t.ns]),T(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),T(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),us=()=>{},br=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(s=>{typeof t[s]=="function"&&(t[s]=t[s].bind(t))})};class Yt extends Rs{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ui(e),this.services={},this.logger=De,this.modules={external:[]},br(this),s&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,s),this;setTimeout(()=>{this.init(e,s)},0)}}init(){var e=this;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof s=="function"&&(i=s,s={}),!s.defaultNS&&s.defaultNS!==!1&&s.ns&&(T(s.ns)?s.defaultNS=s.ns:s.ns.indexOf("translation")<0&&(s.defaultNS=s.ns[0]));const a=Ni();this.options={...a,...this.options,...Ui(s)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...a.interpolation,...this.options.interpolation}),s.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=s.keySeparator),s.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=s.nsSeparator);const r=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?De.init(r(this.modules.logger),this.options):De.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=gr);const f=new Ri(this.options);this.store=new Mi(this.options.resources,this.options);const p=this.services;p.logger=De,p.resourceStore=this.store,p.languageUtils=f,p.pluralResolver=new hr(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===a.interpolation.format)&&(p.formatter=r(u),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new ur(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new vr(r(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),_=1;_<v;_++)b[_-1]=arguments[_];e.emit(g,...b)}),this.modules.languageDetector&&(p.languageDetector=r(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=r(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new Ss(this.services,this.options),this.translator.on("*",function(g){for(var v=arguments.length,b=new Array(v>1?v-1:0),_=1;_<v;_++)b[_-1]=arguments[_];e.emit(g,...b)}),this.modules.external.forEach(g=>{g.init&&g.init(this)})}if(this.format=this.options.interpolation.format,i||(i=us),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const c=qt(),h=()=>{const u=(f,p)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),c.resolve(p),i(f,p)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?h():setTimeout(h,0),c}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:us;const a=T(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(a&&a.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const r=[],o=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(h=>{h!=="cimode"&&r.indexOf(h)<0&&r.push(h)})};a?o(a):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>o(c)),this.options.preload&&this.options.preload.forEach(l=>o(l)),this.services.backendConnector.load(r,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(l)})}else i(null)}reloadResources(e,s,i){const a=qt();return typeof e=="function"&&(i=e,e=void 0),typeof s=="function"&&(i=s,s=void 0),e||(e=this.languages),s||(s=this.options.ns),i||(i=us),this.services.backendConnector.reload(e,s,r=>{a.resolve(),i(r)}),a}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&la.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let s=0;s<this.languages.length;s++){const i=this.languages[s];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,s){var i=this;this.isLanguageChangingTo=e;const a=qt();this.emit("languageChanging",e);const r=c=>{this.language=c,this.languages=this.services.languageUtils.toResolveHierarchy(c),this.resolvedLanguage=void 0,this.setResolvedLanguage(c)},o=(c,h)=>{h?(r(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,a.resolve(function(){return i.t(...arguments)}),s&&s(c,function(){return i.t(...arguments)})},l=c=>{!e&&!c&&this.services.languageDetector&&(c=[]);const h=T(c)?c:this.services.languageUtils.getBestMatchFromCodes(c);h&&(this.language||r(h),this.translator.language||this.translator.changeLanguage(h),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(h)),this.loadResources(h,u=>{o(u,h)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?l(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(e),a}getFixedT(e,s,i){var a=this;const r=function(o,l){let c;if(typeof l!="object"){for(var h=arguments.length,u=new Array(h>2?h-2:0),f=2;f<h;f++)u[f-2]=arguments[f];c=a.options.overloadTranslationOptionHandler([o,l].concat(u))}else c={...l};c.lng=c.lng||r.lng,c.lngs=c.lngs||r.lngs,c.ns=c.ns||r.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||i||r.keyPrefix);const p=a.options.keySeparator||".";let g;return c.keyPrefix&&Array.isArray(o)?g=o.map(v=>`${c.keyPrefix}${p}${v}`):g=c.keyPrefix?`${c.keyPrefix}${p}${o}`:o,a.t(g,c)};return T(e)?r.lng=e:r.lngs=e,r.ns=s,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=s.lng||this.resolvedLanguage||this.languages[0],a=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(l,c)=>{const h=this.services.backendConnector.state[`${l}|${c}`];return h===-1||h===0||h===2};if(s.precheck){const l=s.precheck(this,o);if(l!==void 0)return l}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!a||o(r,e)))}loadNamespaces(e,s){const i=qt();return this.options.ns?(T(e)&&(e=[e]),e.forEach(a=>{this.options.ns.indexOf(a)<0&&this.options.ns.push(a)}),this.loadResources(a=>{i.resolve(),s&&s(a)}),i):(s&&s(),Promise.resolve())}loadLanguages(e,s){const i=qt();T(e)&&(e=[e]);const a=this.options.preload||[],r=e.filter(o=>a.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return r.length?(this.options.preload=a.concat(r),this.loadResources(o=>{i.resolve(),s&&s(o)}),i):(s&&s(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Ri(Ni());return s.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;return new Yt(e,s)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:us;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const a={...this.options,...e,isClone:!0},r=new Yt(a);return(e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(l=>{r[l]=this[l]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new Mi(this.store.data,a),r.services.resourceStore=r.store),r.translator=new Ss(r.services,a),r.translator.on("*",function(l){for(var c=arguments.length,h=new Array(c>1?c-1:0),u=1;u<c;u++)h[u-1]=arguments[u];r.emit(l,...h)}),r.init(a,s),r.translator.options=a,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const oe=Yt.createInstance();oe.createInstance=Yt.createInstance;oe.createInstance;oe.dir;oe.init;oe.loadResources;oe.reloadResources;oe.use;oe.changeLanguage;oe.getFixedT;oe.t;oe.exists;oe.setDefaultNamespace;oe.hasLoadedNamespace;oe.loadNamespaces;oe.loadLanguages;function ai(t){"@babel/helpers - typeof";return ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ai(t)}function ca(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":ai(XMLHttpRequest))==="object"}function yr(t){return!!t&&typeof t.then=="function"}function _r(t){return yr(t)?t:Promise.resolve(t)}var Qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function wr(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var fs={exports:{}},gs={exports:{}},Ki;function $r(){return Ki||(Ki=1,(function(t,e){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof Qt<"u"&&Qt,i=(function(){function r(){this.fetch=!1,this.DOMException=s.DOMException}return r.prototype=s,new r})();(function(r){(function(o){var l=typeof r<"u"&&r||typeof self<"u"&&self||typeof l<"u"&&l,c={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&(function(){try{return new Blob,!0}catch{return!1}})(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function h(m){return m&&DataView.prototype.isPrototypeOf(m)}if(c.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(m){return m&&u.indexOf(Object.prototype.toString.call(m))>-1};function p(m){if(typeof m!="string"&&(m=String(m)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(m)||m==="")throw new TypeError('Invalid character in header field name: "'+m+'"');return m.toLowerCase()}function g(m){return typeof m!="string"&&(m=String(m)),m}function v(m){var y={next:function(){var E=m.shift();return{done:E===void 0,value:E}}};return c.iterable&&(y[Symbol.iterator]=function(){return y}),y}function b(m){this.map={},m instanceof b?m.forEach(function(y,E){this.append(E,y)},this):Array.isArray(m)?m.forEach(function(y){this.append(y[0],y[1])},this):m&&Object.getOwnPropertyNames(m).forEach(function(y){this.append(y,m[y])},this)}b.prototype.append=function(m,y){m=p(m),y=g(y);var E=this.map[m];this.map[m]=E?E+", "+y:y},b.prototype.delete=function(m){delete this.map[p(m)]},b.prototype.get=function(m){return m=p(m),this.has(m)?this.map[m]:null},b.prototype.has=function(m){return this.map.hasOwnProperty(p(m))},b.prototype.set=function(m,y){this.map[p(m)]=g(y)},b.prototype.forEach=function(m,y){for(var E in this.map)this.map.hasOwnProperty(E)&&m.call(y,this.map[E],E,this)},b.prototype.keys=function(){var m=[];return this.forEach(function(y,E){m.push(E)}),v(m)},b.prototype.values=function(){var m=[];return this.forEach(function(y){m.push(y)}),v(m)},b.prototype.entries=function(){var m=[];return this.forEach(function(y,E){m.push([E,y])}),v(m)},c.iterable&&(b.prototype[Symbol.iterator]=b.prototype.entries);function _(m){if(m.bodyUsed)return Promise.reject(new TypeError("Already read"));m.bodyUsed=!0}function $(m){return new Promise(function(y,E){m.onload=function(){y(m.result)},m.onerror=function(){E(m.error)}})}function w(m){var y=new FileReader,E=$(y);return y.readAsArrayBuffer(m),E}function I(m){var y=new FileReader,E=$(y);return y.readAsText(m),E}function F(m){for(var y=new Uint8Array(m),E=new Array(y.length),L=0;L<y.length;L++)E[L]=String.fromCharCode(y[L]);return E.join("")}function C(m){if(m.slice)return m.slice(0);var y=new Uint8Array(m.byteLength);return y.set(new Uint8Array(m)),y.buffer}function U(){return this.bodyUsed=!1,this._initBody=function(m){this.bodyUsed=this.bodyUsed,this._bodyInit=m,m?typeof m=="string"?this._bodyText=m:c.blob&&Blob.prototype.isPrototypeOf(m)?this._bodyBlob=m:c.formData&&FormData.prototype.isPrototypeOf(m)?this._bodyFormData=m:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)?this._bodyText=m.toString():c.arrayBuffer&&c.blob&&h(m)?(this._bodyArrayBuffer=C(m.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(m)||f(m))?this._bodyArrayBuffer=C(m):this._bodyText=m=Object.prototype.toString.call(m):this._bodyText="",this.headers.get("content-type")||(typeof m=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(m)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var m=_(this);if(m)return m;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var m=_(this);return m||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(w)}),this.text=function(){var m=_(this);if(m)return m;if(this._bodyBlob)return I(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(F(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}var S=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function B(m){var y=m.toUpperCase();return S.indexOf(y)>-1?y:m}function P(m,y){if(!(this instanceof P))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');y=y||{};var E=y.body;if(m instanceof P){if(m.bodyUsed)throw new TypeError("Already read");this.url=m.url,this.credentials=m.credentials,y.headers||(this.headers=new b(m.headers)),this.method=m.method,this.mode=m.mode,this.signal=m.signal,!E&&m._bodyInit!=null&&(E=m._bodyInit,m.bodyUsed=!0)}else this.url=String(m);if(this.credentials=y.credentials||this.credentials||"same-origin",(y.headers||!this.headers)&&(this.headers=new b(y.headers)),this.method=B(y.method||this.method||"GET"),this.mode=y.mode||this.mode||null,this.signal=y.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&E)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(E),(this.method==="GET"||this.method==="HEAD")&&(y.cache==="no-store"||y.cache==="no-cache")){var L=/([?&])_=[^&]*/;if(L.test(this.url))this.url=this.url.replace(L,"$1_="+new Date().getTime());else{var j=/\?/;this.url+=(j.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}P.prototype.clone=function(){return new P(this,{body:this._bodyInit})};function A(m){var y=new FormData;return m.trim().split("&").forEach(function(E){if(E){var L=E.split("="),j=L.shift().replace(/\+/g," "),D=L.join("=").replace(/\+/g," ");y.append(decodeURIComponent(j),decodeURIComponent(D))}}),y}function Q(m){var y=new b,E=m.replace(/\r?\n[\t ]+/g," ");return E.split("\r").map(function(L){return L.indexOf(`
`)===0?L.substr(1,L.length):L}).forEach(function(L){var j=L.split(":"),D=j.shift().trim();if(D){var ye=j.join(":").trim();y.append(D,ye)}}),y}U.call(P.prototype);function V(m,y){if(!(this instanceof V))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');y||(y={}),this.type="default",this.status=y.status===void 0?200:y.status,this.ok=this.status>=200&&this.status<300,this.statusText=y.statusText===void 0?"":""+y.statusText,this.headers=new b(y.headers),this.url=y.url||"",this._initBody(m)}U.call(V.prototype),V.prototype.clone=function(){return new V(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new b(this.headers),url:this.url})},V.error=function(){var m=new V(null,{status:0,statusText:""});return m.type="error",m};var G=[301,302,303,307,308];V.redirect=function(m,y){if(G.indexOf(y)===-1)throw new RangeError("Invalid status code");return new V(null,{status:y,headers:{location:m}})},o.DOMException=l.DOMException;try{new o.DOMException}catch{o.DOMException=function(y,E){this.message=y,this.name=E;var L=Error(y);this.stack=L.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function X(m,y){return new Promise(function(E,L){var j=new P(m,y);if(j.signal&&j.signal.aborted)return L(new o.DOMException("Aborted","AbortError"));var D=new XMLHttpRequest;function ye(){D.abort()}D.onload=function(){var J={status:D.status,statusText:D.statusText,headers:Q(D.getAllResponseHeaders()||"")};J.url="responseURL"in D?D.responseURL:J.headers.get("X-Request-URL");var Me="response"in D?D.response:D.responseText;setTimeout(function(){E(new V(Me,J))},0)},D.onerror=function(){setTimeout(function(){L(new TypeError("Network request failed"))},0)},D.ontimeout=function(){setTimeout(function(){L(new TypeError("Network request failed"))},0)},D.onabort=function(){setTimeout(function(){L(new o.DOMException("Aborted","AbortError"))},0)};function dt(J){try{return J===""&&l.location.href?l.location.href:J}catch{return J}}D.open(j.method,dt(j.url),!0),j.credentials==="include"?D.withCredentials=!0:j.credentials==="omit"&&(D.withCredentials=!1),"responseType"in D&&(c.blob?D.responseType="blob":c.arrayBuffer&&j.headers.get("Content-Type")&&j.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(D.responseType="arraybuffer")),y&&typeof y.headers=="object"&&!(y.headers instanceof b)?Object.getOwnPropertyNames(y.headers).forEach(function(J){D.setRequestHeader(J,g(y.headers[J]))}):j.headers.forEach(function(J,Me){D.setRequestHeader(Me,J)}),j.signal&&(j.signal.addEventListener("abort",ye),D.onreadystatechange=function(){D.readyState===4&&j.signal.removeEventListener("abort",ye)}),D.send(typeof j._bodyInit>"u"?null:j._bodyInit)})}return X.polyfill=!0,l.fetch||(l.fetch=X,l.Headers=b,l.Request=P,l.Response=V),o.Headers=b,o.Request=P,o.Response=V,o.fetch=X,o})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var a=s.fetch?s:i;e=a.fetch,e.default=a.fetch,e.fetch=a.fetch,e.Headers=a.Headers,e.Request=a.Request,e.Response=a.Response,t.exports=e})(gs,gs.exports)),gs.exports}var Bi;function kr(){return Bi||(Bi=1,(function(t,e){var s=typeof fetch=="function"?fetch:void 0;if(typeof Qt<"u"&&Qt.fetch?s=Qt.fetch:typeof window<"u"&&window.fetch&&(s=window.fetch),typeof wr<"u"&&typeof window>"u"){var i=s||$r();i.default&&(i=i.default),e.default=i,t.exports=e.default}})(fs,fs.exports)),fs.exports}var da=kr();const pa=xr(da),qi=Ga({__proto__:null,default:pa},[da]);function Vi(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,i)}return s}function Hi(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Vi(Object(s),!0).forEach(function(i){Sr(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Vi(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function Sr(t,e,s){return(e=Cr(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Cr(t){var e=Ar(t,"string");return vt(e)=="symbol"?e:e+""}function Ar(t,e){if(vt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(vt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vt(t){"@babel/helpers - typeof";return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vt(t)}var et=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?et=global.fetch:typeof window<"u"&&window.fetch&&(et=window.fetch);var Wt;ca()&&(typeof global<"u"&&global.XMLHttpRequest?Wt=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(Wt=window.XMLHttpRequest));var Cs;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Cs=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Cs=window.ActiveXObject));!et&&qi&&!Wt&&!Cs&&(et=pa||qi);typeof et!="function"&&(et=void 0);var ri=function(e,s){if(s&&vt(s)==="object"){var i="";for(var a in s)i+="&"+encodeURIComponent(a)+"="+encodeURIComponent(s[a]);if(!i)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+i.slice(1)}return e},Gi=function(e,s,i,a){var r=function(c){if(!c.ok)return i(c.statusText||"Error",{status:c.status});c.text().then(function(h){i(null,{status:c.status,data:h})}).catch(i)};if(a){var o=a(e,s);if(o instanceof Promise){o.then(r).catch(i);return}}typeof fetch=="function"?fetch(e,s).then(r).catch(i):et(e,s).then(r).catch(i)},Qi=!1,Fr=function(e,s,i,a){e.queryStringParams&&(s=ri(s,e.queryStringParams));var r=Hi({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(r["Content-Type"]="application/json");var o=typeof e.requestOptions=="function"?e.requestOptions(i):e.requestOptions,l=Hi({method:i?"POST":"GET",body:i?e.stringify(i):void 0,headers:r},Qi?{}:o),c=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{Gi(s,l,a,c)}catch(h){if(!o||Object.keys(o).length===0||!h.message||h.message.indexOf("not implemented")<0)return a(h);try{Object.keys(o).forEach(function(u){delete l[u]}),Gi(s,l,a,c),Qi=!0}catch(u){a(u)}}},Er=function(e,s,i,a){i&&vt(i)==="object"&&(i=ri("",i).slice(1)),e.queryStringParams&&(s=ri(s,e.queryStringParams));try{var r;Wt?r=new Wt:r=new Cs("MSXML2.XMLHTTP.3.0"),r.open(i?"POST":"GET",s,1),e.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!e.withCredentials,i&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var o=e.customHeaders;if(o=typeof o=="function"?o():o,o)for(var l in o)r.setRequestHeader(l,o[l]);r.onreadystatechange=function(){r.readyState>3&&a(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(i)}catch(c){console&&console.log(c)}},Or=function(e,s,i,a){if(typeof i=="function"&&(a=i,i=void 0),a=a||function(){},et&&s.indexOf("file:")!==0)return Fr(e,s,i,a);if(ca()||typeof ActiveXObject=="function")return Er(e,s,i,a);a(new Error("No fetch and no xhr implementation found!"))};function Lt(t){"@babel/helpers - typeof";return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lt(t)}function Yi(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,i)}return s}function Hs(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Yi(Object(s),!0).forEach(function(i){ha(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Yi(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function Tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Lr(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ua(i.key),i)}}function Pr(t,e,s){return e&&Lr(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ha(t,e,s){return(e=ua(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function ua(t){var e=Ir(t,"string");return Lt(e)=="symbol"?e:e+""}function Ir(t,e){if(Lt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Lt(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Mr=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(s){return JSON.parse(s)},stringify:JSON.stringify,parsePayload:function(s,i,a){return ha({},i,a||"")},parseLoadPayload:function(s,i){},request:Or,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},fa=(function(){function t(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Tr(this,t),this.services=e,this.options=s,this.allOptions=i,this.type="backend",this.init(e,s,i)}return Pr(t,[{key:"init",value:function(s){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=s,this.options=Hs(Hs(Hs({},Mr()),this.options||{}),a),this.allOptions=r,this.services&&this.options.reloadInterval){var o=setInterval(function(){return i.reload()},this.options.reloadInterval);Lt(o)==="object"&&typeof o.unref=="function"&&o.unref()}}},{key:"readMulti",value:function(s,i,a){this._readAny(s,s,i,i,a)}},{key:"read",value:function(s,i,a){this._readAny([s],s,[i],i,a)}},{key:"_readAny",value:function(s,i,a,r,o){var l=this,c=this.options.loadPath;typeof this.options.loadPath=="function"&&(c=this.options.loadPath(s,a)),c=_r(c),c.then(function(h){if(!h)return o(null,{});var u=l.services.interpolator.interpolate(h,{lng:s.join("+"),ns:a.join("+")});l.loadUrl(u,o,i,r)})}},{key:"loadUrl",value:function(s,i,a,r){var o=this,l=typeof a=="string"?[a]:a,c=typeof r=="string"?[r]:r,h=this.options.parseLoadPayload(l,c);this.options.request(this.options,s,h,function(u,f){if(f&&(f.status>=500&&f.status<600||!f.status))return i("failed loading "+s+"; status code: "+f.status,!0);if(f&&f.status>=400&&f.status<500)return i("failed loading "+s+"; status code: "+f.status,!1);if(!f&&u&&u.message){var p=u.message.toLowerCase(),g=["failed","fetch","network","load"].find(function(_){return p.indexOf(_)>-1});if(g)return i("failed loading "+s+": "+u.message,!0)}if(u)return i(u,!1);var v,b;try{typeof f.data=="string"?v=o.options.parse(f.data,a,r):v=f.data}catch{b="failed parsing "+s+" to json"}if(b)return i(b,!1);i(null,v)})}},{key:"create",value:function(s,i,a,r,o){var l=this;if(this.options.addPath){typeof s=="string"&&(s=[s]);var c=this.options.parsePayload(i,a,r),h=0,u=[],f=[];s.forEach(function(p){var g=l.options.addPath;typeof l.options.addPath=="function"&&(g=l.options.addPath(p,i));var v=l.services.interpolator.interpolate(g,{lng:p,ns:i});l.options.request(l.options,v,c,function(b,_){h+=1,u.push(b),f.push(_),h===s.length&&typeof o=="function"&&o(u,f)})})}}},{key:"reload",value:function(){var s=this,i=this.services,a=i.backendConnector,r=i.languageUtils,o=i.logger,l=a.language;if(!(l&&l.toLowerCase()==="cimode")){var c=[],h=function(f){var p=r.toResolveHierarchy(f);p.forEach(function(g){c.indexOf(g)<0&&c.push(g)})};h(l),this.allOptions.preload&&this.allOptions.preload.forEach(function(u){return h(u)}),c.forEach(function(u){s.allOptions.ns.forEach(function(f){a.read(u,f,"read",null,null,function(p,g){p&&o.warn("loading namespace ".concat(f," for language ").concat(u," failed"),p),!p&&g&&o.log("loaded namespace ".concat(f," for language ").concat(u),g),a.loaded("".concat(u,"|").concat(f),p,g)})})})}}}])})();fa.type="backend";const ga="a656ff82-0270-46dc-8de8-c734318d841d",Dr="https://i18n-fastly.ultrafast.io",Rr="https://neo.wordplex.io",oi="asset-picker";let pt=null;async function zr(t="en"){return pt?(pt.language!==t&&await pt.changeLanguage(t),{i18n:pt,isNew:!1}):(pt=oe.createInstance(),await pt.use(fa).init({lng:t,fallbackLng:"en",ns:[oi],defaultNS:oi,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{loadPath:`${Dr}/api/export/grid/f2/${ga}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,s){var r;const i=JSON.parse(e),a=Array.isArray(s)?s[0]:s;return a&&((r=i[a])!=null&&r.__without_namespace)?i[a].__without_namespace:i}}}),{i18n:pt,isNew:!0})}const jr="apTranslationsMissingKeysEnabled";class Nr{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(jr)==="true",this.enabled&&console.log("%c[asset-picker] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,s,i,a)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,s,i,a))})}handleMissingKey(e,s="",i=oi){if(!this.enabled)return;const a=`${i}:${e}`;this._missingKeys[a]={value:s,ns:i}}_renderCurl(){console.group("[asset-picker] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${Rr}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${ga}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:s,ns:i}])=>({key:i&&e.startsWith(`${i}:`)?e.slice(i.length+1):e,lang:"en",default:s}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const Ur=new Nr;class Kr{constructor(e,s){this.host=e,this.store=s,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}function Br(t){return"extension"in t&&!("path"in t)}class qr{constructor(e,s){this.lastClickedIndex=-1,this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){var e;return((e=this.store.getState().config)==null?void 0:e.folderSelection)===!0}_getCombinedList(){const e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_applyRangeSelection(e,s,i,a){const r=this.store.getState(),o=this._getCombinedList();for(let l=e;l<=s;l++){const c=o[l];c&&(Br(c)?r.disabledAssetIds.has(c.uuid)||i.set(c.uuid,c):r.disabledFolderIds.has(c.uuid)||a.set(c.uuid,c))}}handleSelect(e,s,i){var l,c,h,u;const a=this.store.getState();if(a.disabledAssetIds.has(e.uuid))return;const r=new Map(a.selectedAssets);if(!(((l=a.config)==null?void 0:l.multiSelect)??!0)){r.clear(),r.set(e.uuid,e),this.store.setState({selectedAssets:r,selectedFolders:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){const f=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=new Map(a.selectedFolders);this._applyRangeSelection(f,p,r,g);const v=(c=a.config)==null?void 0:c.maxSelections;if(v&&r.size+g.size>v)return;this.store.setState({selectedAssets:r,selectedFolders:g})}else{const f=Math.min(this.lastClickedIndex,s),p=Math.max(this.lastClickedIndex,s),g=a.assets;for(let b=f;b<=p;b++)g[b]&&!a.disabledAssetIds.has(g[b].uuid)&&r.set(g[b].uuid,g[b]);const v=(h=a.config)==null?void 0:h.maxSelections;if(v&&r.size>v)return;this.store.setState({selectedAssets:r})}else if(i.metaKey||i.ctrlKey){r.has(e.uuid)?r.delete(e.uuid):r.set(e.uuid,e);const f=(u=a.config)==null?void 0:u.maxSelections,p=r.size+(this._folderSelectionEnabled?a.selectedFolders.size:0);if(f&&p>f)return;this.store.setState({selectedAssets:r})}else r.clear(),r.set(e.uuid,e),this.store.setState({selectedAssets:r,selectedFolders:new Map});this.lastClickedIndex=s}handleFolderSelect(e,s,i){var l,c,h;if(!this._folderSelectionEnabled)return;const a=this.store.getState();if(a.disabledFolderIds.has(e.uuid))return;const r=new Map(a.selectedFolders);if(!(((l=a.config)==null?void 0:l.multiSelect)??!0)){r.clear(),r.set(e.uuid,e),this.store.setState({selectedFolders:r,selectedAssets:new Map}),this.lastClickedIndex=s;return}if(i.shiftKey&&this.lastClickedIndex>=0){const u=Math.min(this.lastClickedIndex,s),f=Math.max(this.lastClickedIndex,s),p=new Map(a.selectedAssets);this._applyRangeSelection(u,f,p,r);const g=(c=a.config)==null?void 0:c.maxSelections;if(g&&p.size+r.size>g)return;this.store.setState({selectedAssets:p,selectedFolders:r})}else if(i.metaKey||i.ctrlKey){r.has(e.uuid)?r.delete(e.uuid):r.set(e.uuid,e);const u=(h=a.config)==null?void 0:h.maxSelections,f=r.size+a.selectedAssets.size;if(u&&f>u)return;this.store.setState({selectedFolders:r})}else r.clear(),r.set(e.uuid,e),this.store.setState({selectedFolders:r,selectedAssets:new Map});this.lastClickedIndex=s}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){var c;const s=this.store.getState(),i=(c=s.config)==null?void 0:c.maxSelections,a=this._folderSelectionEnabled?s.selectedFolders.size:0,r=e.filter(h=>!s.disabledAssetIds.has(h.uuid)),o=new Map,l=i?Math.max(0,Math.min(r.length,i-a)):r.length;for(let h=0;h<l;h++)o.set(r[h].uuid,r[h]);return this.store.setState({selectedAssets:o}),this.lastClickedIndex=-1,o.size}selectAllFolders(e){var l;if(!this._folderSelectionEnabled)return;const s=this.store.getState(),i=(l=s.config)==null?void 0:l.maxSelections,a=e.filter(c=>!s.disabledFolderIds.has(c.uuid)),r=new Map,o=i?Math.max(0,Math.min(a.length,i-s.selectedAssets.size)):a.length;for(let c=0;c<o;c++)r.set(a[c].uuid,a[c]);this.store.setState({selectedFolders:r})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}}class Vr{constructor(e,s){this.host=e,this.onLoadMore=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,s){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(i=>{var a;(a=i[0])!=null&&a.isIntersecting&&this.onLoadMore()},{root:s??null,rootMargin:"200px"}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}}const Wi=5,Et=40,Xi=15;class Hr{constructor(e,s){this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarqueeSelection=new Map,this.preMarqueeFolderSelection=new Map,this._dragging=!1,this._scrollRAF=null,this._lastMouseEvent=null,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.handleMouseDown=i=>this.onMouseDown(i),this.handleMouseMove=i=>this.onMouseMove(i),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=i=>i.preventDefault(),this.host=e,this.store=s,e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.detach(),this.container=e,e.addEventListener("mousedown",this.handleMouseDown)}detach(){this.container&&this.container.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null}isInteractiveTarget(e){return e.composedPath().some(i=>{if(!(i instanceof HTMLElement))return!1;if(i instanceof HTMLButtonElement||i instanceof HTMLInputElement)return!0;const a=i.tagName.toLowerCase();return!!(a.startsWith("ap-asset-")||a.startsWith("ap-folder-")||i.classList.contains("check")||i.classList.contains("check-box"))})}onMouseDown(e){var a;if(e.button!==0||this.isInteractiveTarget(e)||!(((a=this.store.getState().config)==null?void 0:a.multiSelect)??!0))return;const i=this.container.getBoundingClientRect();this.startX=e.clientX-i.left+this.container.scrollLeft,this.startY=e.clientY-i.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this._dragging=!1,this.isActive=!1,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}onMouseMove(e){var s;if(this.container){if(!this._dragging){const i=Math.abs(e.clientX-this.startClientX),a=Math.abs(e.clientY-this.startClientY);if(i<Wi&&a<Wi)return;this._dragging=!0,this.isActive=!0,document.addEventListener("selectstart",this.preventSelect),(s=window.getSelection())==null||s.removeAllRanges(),this.preMarqueeSelection=new Map(this.store.getState().selectedAssets),this.preMarqueeFolderSelection=new Map(this.store.getState().selectedFolders)}this._lastMouseEvent=e,this.updateMarqueeRect(e),this.startAutoScroll(e)}}updateMarqueeRect(e){if(!this.container)return;const s=this.container.getBoundingClientRect(),i=e.clientX-s.left+this.container.scrollLeft,a=e.clientY-s.top+this.container.scrollTop;let r=Math.min(this.startX,i),o=Math.min(this.startY,a),l=Math.abs(i-this.startX),c=Math.abs(a-this.startY);const h=this.container.scrollWidth,u=this.container.scrollHeight;r+l>h&&(l=h-r),o+c>u&&(c=u-o),r<0&&(l+=r,r=0),o<0&&(c+=o,o=0),this.rect={x:r,y:o,width:l,height:c},this.host.requestUpdate(),this.selectIntersecting()}startAutoScroll(e){if(!this.container)return;if(this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}const s=this.container.getBoundingClientRect(),i=e.clientY-s.top,a=s.bottom-e.clientY,r=i<Et||a<Et;r&&!this._scrollRAF?this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):r||this.stopAutoScroll()}autoScrollTick(){if(this._scrollRAF=null,!this.container||!this._dragging||!this._lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;const e=this.container.getBoundingClientRect(),s=this._lastMouseEvent,i=s.clientY-e.top,a=e.bottom-s.clientY;let r=0;i<Et?r=-Xi*(1-i/Et):a<Et&&(r=Xi*(1-a/Et)),r!==0&&(this.container.scrollTop+=r,this.updateMarqueeRect(s),this._scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this._scrollRAF&&(cancelAnimationFrame(this._scrollRAF),this._scrollRAF=null)}onMouseUp(){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("selectstart",this.preventSelect),this.stopAutoScroll(),this._lastMouseEvent=null,this._dragging&&(this.isActive=!1,this._dragging=!1,this.rect={x:0,y:0,width:0,height:0},this.host.requestUpdate())}querySelectableElements(){const e=[],s=[];for(const i of Array.from(this.container.children))if(i.shadowRoot){const a=i.shadowRoot.querySelectorAll("[data-asset-uuid]");a.length>0&&e.push(...Array.from(a));const r=i.shadowRoot.querySelectorAll("[data-folder-uuid]");r.length>0&&s.push(...Array.from(r))}return e.length===0&&e.push(...Array.from(this.container.querySelectorAll("[data-asset-uuid]"))),s.length===0&&s.push(...Array.from(this.container.querySelectorAll("[data-folder-uuid]"))),{assetCards:e,folderCards:s}}getCardRelativeRect(e){const s=e.getBoundingClientRect(),i=this.container.getBoundingClientRect();return{x:s.left-i.left+this.container.scrollLeft,y:s.top-i.top+this.container.scrollTop,width:s.width,height:s.height}}intersectsMarquee(e){return this.rect.x<e.x+e.width&&this.rect.x+this.rect.width>e.x&&this.rect.y<e.y+e.height&&this.rect.y+this.rect.height>e.y}selectIntersecting(){var h,u;if(!this.container)return;const e=this.store.getState(),s=((h=e.config)==null?void 0:h.folderSelection)===!0,{assetCards:i,folderCards:a}=this.querySelectableElements(),r=new Map(this.preMarqueeSelection),o=s?new Map(this.preMarqueeFolderSelection):e.selectedFolders;i.forEach(f=>{const p=this.getCardRelativeRect(f),g=f.dataset.assetUuid;if(this.intersectsMarquee(p)&&!e.disabledAssetIds.has(g)){const v=e.assets.find(b=>b.uuid===g);v&&r.set(g,v)}}),s&&a.forEach(f=>{const p=this.getCardRelativeRect(f),g=f.dataset.folderUuid;if(this.intersectsMarquee(p)&&!e.disabledFolderIds.has(g)){const v=e.folders.find(b=>b.uuid===g);v&&o.set(g,v)}});const l=(u=e.config)==null?void 0:u.maxSelections,c=r.size+(s?o.size:0);if(l&&c>l){const f=Array.from(r.entries()).slice(0,Math.max(0,l-o.size));this.store.setState({selectedAssets:new Map(f),...s?{selectedFolders:o}:{}})}else this.store.setState({selectedAssets:r,...s?{selectedFolders:o}:{}})}}class Gr{constructor(e,s){this.auth=e;const i=e.projectToken;this.baseUrl=s||`https://api.filerobot.com/${i}/v5`,e.mode==="sassKey"&&(this.sassKey=e.sassKey)}setSassKey(e){this.sassKey=e}getSecurityTemplateKey(){if(this.auth.mode==="securityTemplate")return this.auth.securityTemplateKey}_applyAuthHeaders(e){this.sassKey?e["X-Filerobot-Key"]=this.sassKey:this.auth.mode==="securityTemplate"&&(e["X-Filerobot-Key"]=this.auth.securityTemplateKey)}async request(e,s){const i=new URL(`${this.baseUrl}${e}`);s&&Object.entries(s).forEach(([l,c])=>{c!=null&&(Array.isArray(c)?i.searchParams.set(l,c.join(",")):i.searchParams.set(l,String(c)))});const a={};this._applyAuthHeaders(a);const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const l=await fetch(i.toString(),{headers:a,signal:r.signal});if(clearTimeout(o),!l.ok){let h=`API error: ${l.status} ${l.statusText}`;try{const u=await l.json();u.msg&&(h=`API error: ${l.status} - ${u.msg}`)}catch{}throw new Error(h)}const c=await l.json();if(c.status==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(l){throw clearTimeout(o),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}async post(e,s){const i=new URL(`${this.baseUrl}${e}`),a={"Content-Type":"application/json"};this._applyAuthHeaders(a);const r=new AbortController,o=setTimeout(()=>r.abort(),3e4);try{const l=await fetch(i.toString(),{method:"POST",headers:a,body:JSON.stringify(s),signal:r.signal});if(clearTimeout(o),!l.ok){let h=`API error: ${l.status} ${l.statusText}`;try{const u=await l.json();u.msg&&(h=`API error: ${l.status} - ${u.msg}`)}catch{}throw new Error(h)}const c=await l.json();if(c.status==="error")throw new Error(`API error: ${c.msg||"Unknown error"}`);return c}catch(l){throw clearTimeout(o),l instanceof DOMException&&l.name==="AbortError"?new Error("API request timed out"):l}}}const Qr=["cdn_permalink"];function Yr(t){const e=t.fields??Qr,s={offset:t.offset??0,limit:t.limit??100,format:"json,regvar:api,select:internal",preview:2301,recursive:t.recursive??1};e.length>0&&(s.fields=e);const i=t.sort_by??"created_at",a=t.sort_direction??"desc",r={created_at:"created_at",modified_at:"modified_at",name:"name",size:"size",type:"type"};s.sort=`${r[i]||i}:${a}`,t.folder&&(s.folder=t.folder);const o=[];return t.search&&!t.with_ai&&o.push(t.search),t.q&&o.push(t.q),o.length>0&&(s.q=o.join(" ")),t.with_ai&&(s.with_ai=!0,t.ai_query&&(s.ai_query=t.ai_query),t.ai_lang&&(s.ai_lang=t.ai_lang)),t.collection_uuid&&(s.collection_uuid=t.collection_uuid),t.f64&&(s.f64=t.f64),s}async function ht(t,e){const s=Yr(e);return t.request("/files",s)}async function ms(t,e){const s={recursive:e.recursive??1};e.folder&&(s.folder=e.folder);const i=[];return e.search&&!e.with_ai&&i.push(e.search),e.q&&i.push(e.q),i.length>0&&(s.q=i.join(" ")),e.with_ai&&(s.with_ai=!0,e.ai_query&&(s.ai_query=e.ai_query),e.ai_lang&&(s.ai_lang=e.ai_lang)),e.collection_uuid&&(s.collection_uuid=e.collection_uuid),e.f64&&(s.f64=e.f64),t.request("/files/stats",s)}async function Wr(t,e){const s={recursive:(e==null?void 0:e.recursive)??0,folder:(e==null?void 0:e.folderPath)??"/",limit:(e==null?void 0:e.limit)??1e3,offset:(e==null?void 0:e.offset)??0};e!=null&&e.q&&(s.q=e.q);const i=(e==null?void 0:e.sort_by)??"created_at",a=(e==null?void 0:e.sort_direction)??"asc",r={created_at:"created_at",modified_at:"modified_at",name:"name"};return s.sort=`${r[i]||i}:${a}`,await t.request("/folders",s)}async function Xr(t,e){return e.length===0?{}:(await t.post("/folders/previews",{folders:e})).folders||{}}async function Jr(t,e,s){const i=s.replace(/\/+$/,""),a=i?`${i}/${e}`:`/${e}`,r=await t.post("/folders",{name:a});if(r.status!=="success")throw new Error(r.msg||"Failed to create folder")}async function Zr(t){return await t.request("/labels")}async function eo(t){return t.request("/collections")}async function to(t,e){return t.request(`/collections/${e}/folders`)}function ma(t){return t.filter(e=>!!e.name).map(e=>({...e,children:ma(e.children??[])})).filter(e=>{var s;return!((((s=e.children)==null?void 0:s.length)??0)<1&&!e.filters)})}async function so(t){return((await t.request("/tags")).tags||[]).map(i=>({...i,label:i.names.en||Object.values(i.names)[0]||""})).filter(i=>i.label).sort((i,a)=>i.label.localeCompare(a.label))}async function io(t){const e=t.getSecurityTemplateKey();if(!e)throw new Error("Security template key is required for SASS key exchange");const s=await t.request(`/key/${e}`);return{key:s.key,permissions:s.permissions??[]}}function ao(t,e){return t?t.includes(e):!1}const ro={FOLDER_CREATE:"DIR_CREATE"};function zs(t){var a,r;const e=(a=t.info)==null?void 0:a.playlists;if(!(e!=null&&e.length))return null;const s=(r=e[0])==null?void 0:r.playlists;return s!=null&&s.length&&s[0]||null}function gt(t){return(t.type??"").startsWith("image")}function oo(t){return(t.type??"").startsWith("video")}function no(t){return(t.type??"").startsWith("audio")}function va(t){var e,s;return((e=t.url)==null?void 0:e.cdn)??((s=t.url)==null?void 0:s.public)??""}function lo(t,e){const{meta:s,name:i}=t;if(s!=null&&s.alt)return s.alt;const a=s==null?void 0:s.title;if(typeof a=="string"&&a)return a;if(a&&typeof a=="object"){if(e){const o=a[e];if(o)return o}const r=Object.keys(a)[0];if(r){const o=a[r];if(o)return o}}return i.split(".")[0]}function As(t){var e,s;return((e=t.info)==null?void 0:e.img_w)??((s=t.info)==null?void 0:s.video_w)??0}function Fs(t){var e,s;return((e=t.info)==null?void 0:e.img_h)??((s=t.info)==null?void 0:s.video_h)??0}function co(t){return{width:As(t),height:Fs(t)}}function po(t){return zs(t)!==null}function ho(t){return zs(t)}function uo(t){return zs(t)??va(t)}const fo={excellent:90,good:75,fair:60},go=[{label:"WEBP",value:"webp"},{label:"JPEG",value:"jpeg"},{label:"PNG",value:"png"},{label:"GIF",value:"gif"}],mo=[{label:"Excellent",value:"excellent"},{label:"Good",value:"good"},{label:"Fair",value:"fair"}],vo=[{label:"Original",value:"original"},{label:"Full HD",value:"full_hd",width:1920},{label:"Large",value:"large",width:1200},{label:"Medium",value:"medium",width:600},{label:"Small",value:"small",width:300}],bo={webp:"awebp,webp",jpeg:"jpeg",png:"png",gif:"agif,gif"},yo=new Set(["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"]),_o=new Set([...yo,"pdf","psd","eps","ai","ttf","otf","woff","woff2","eot"]);function Tt(t){if(!t)return"other";const e={image:"image",video:"video",audio:"audio",application:"document",font:"font",text:"document"};return e[t]?e[t]:t.startsWith("image/")?"image":t.startsWith("video/")?"video":t.startsWith("audio/")?"audio":t.startsWith("application/pdf")||t.startsWith("text/")||t.startsWith("application/msword")||t.startsWith("application/vnd.")?"document":t.startsWith("application/zip")||t.startsWith("application/x-rar")||t.startsWith("application/x-7z")||t.startsWith("application/gzip")?"archive":t.startsWith("font/")?"font":"other"}function ba(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return _o.has(e)}const x="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",ni={_default:x+"GENERIC.svg?vh=9a518a",png:x+"PNG.svg?vh=96cd9a",jpg:x+"JPG.svg?vh=06e819",jpg2:x+"JPG2.svg?vh=f0eb7f",jpeg:x+"JPEG.svg?vh=6a65e9",gif:x+"GIF.svg?vh=c3c2c3",bmp:x+"BMP.svg?vh=d2243a",webp:x+"WEBP.svg?vh=fedd74",svg:x+"SVG.svg?vh=a15e46",tiff:x+"TIFF.svg?vh=1f30c3",tif:x+"TIF.svg?vh=b383c9",heic:x+"HEIC.svg?vh=84adfe",avif:x+"AVIF.svg?vh=536b30",ico:x+"ICO.svg?vh=79063d",psd:x+"PSD.svg?vh=be6140",psb:x+"PSB.svg?vh=678646",ai:x+"AI.svg?vh=84b254",dwg:x+"DWG.svg?vh=971fb3",mp4:x+"MP4.svg?vh=42f175",webm:x+"WEBM.svg?vh=26a84a",avi:x+"AVI.svg?vh=d22ba8",mpeg:x+"MPEG.svg?vh=ba93bb",ogv:x+"OGV.svg?vh=74d453","3gp":x+"3GP.svg?vh=f0d388","3g2":x+"3G2.svg?vh=04c652",swf:x+"SWF.svg?vh=3955e2",fla:x+"FLA.svg?vh=daf585",m3u8:x+"M3U8.svg?vh=7d5e62",mp3:x+"MP3.svg?vh=66bbef",wav:x+"WAV.svg?vh=d7a7d5",aac:x+"AAC.svg?vh=07f3f9",oga:x+"OGA.svg?vh=a5c622",opus:x+"OPUS.svg?vh=9548b1",weba:x+"WEBA.svg?vh=4dcf70",mid:x+"MID.svg?vh=3f0e29",midi:x+"MIDI.svg?vh=9fedec",cda:x+"CDA.svg?vh=85b83b",pdf:x+"PDF.svg?vh=18c5f7",doc:x+"DOC.svg?vh=d1b47c",docx:x+"DOCX.svg?vh=1eb6b0",txt:x+"TXT.svg?vh=307979",rtf:x+"RTF.svg?vh=978c5f",xls:x+"XLS.svg?vh=13b5f7",xlsx:x+"XLSX.svg?vh=79d64a",ppt:x+"PPT.svg?vh=4ee29b",pptx:x+"PPTX.svg?vh=8b1568",csv:x+"CSV.svg?vh=4add78",odt:x+"ODT.svg?vh=940781",ods:x+"ODS.svg?vh=9fbe9a",odp:x+"ODP.svg?vh=bf892d",dbf:x+"DBF.svg?vh=457bd4",vsd:x+"VSD.svg?vh=8a9ccb",abw:x+"ABW.svg?vh=313dc7",epub:x+"EPUB.svg?vh=15263d",azw:x+"AZW.svg?vh=a018b1",ics:x+"ICS.svg?vh=909f63",ogx:x+"OGX.svg?vh=f694d2",zip:x+"ZIP.svg?vh=84f98b",rar:x+"RAR.svg?vh=1d6423","7z":x+"7Z.svg?vh=e007e5",tar:x+"TAR.svg?vh=603aed",gz:x+"GZ.svg?vh=de13f7",bz:x+"BZ.svg?vh=0374ff",bz2:x+"BZ2.svg?vh=e14294",arc:x+"ARC.svg?vh=942fad",jar:x+"JAR.svg?vh=149796",mpkg:x+"MPKG.svg?vh=dea655",ttf:x+"TTF.svg?vh=d2e2c1",otf:x+"OTF.svg?vh=c904fd",woff:x+"WOFF.svg?vh=4b8177",woff2:x+"WOFF2.svg?vh=b532d3",eot:x+"EOT.svg?vh=a54980",js:x+"JS.svg?vh=524691",mjs:x+"MJS.svg?vh=d57921",ts:x+"TS.svg?vh=9af3ae",css:x+"CSS.svg?vh=287863",html:x+"HTML.svg?vh=fa7a87",htm:x+"HTM.svg?vh=21323d",xhtml:x+"XHTML.svg?vh=e6d6a9",xul:x+"XUL.svg?vh=6c9c71",json:x+"JSON.svg?vh=104c9e",jsonld:x+"JSONLD.svg?vh=f30c0f",xml:x+"XML.svg?vh=7f7194",php:x+"PHP.svg?vh=503e36",sh:x+"SH.svg?vh=3b820e",csh:x+"CSH.svg?vh=08c0cc",exe:x+"EXE.svg?vh=ccca53",iso:x+"ISO.svg?vh=064b8f",bin:x+"BIN.svg?vh=1e9618"};function cs(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return ni[e]||ni._default}function Pt(){return ni._default}function js(t){if(!t)return"";const e=t.split("/");return e.length>1?e[1]:e[0]}const xo=new Set(["png","svg","webp","gif","avif"]);function pi(t){const e=(t==null?void 0:t.toLowerCase().replace(".",""))||"";return xo.has(e)}const wo=new Set(["svg","svg+xml","png","pdf"]);function ya(t){return wo.has(js(t).toLowerCase())}let li=null;function $o(t){li=t??null}function qe(t,e){if(!t||!li)return t;try{return li(t,e)||t}catch(s){return console.warn("[asset-picker] transformRemoteThumbnail threw:",s),t}}function Es(t){var i;const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.preview)||((i=t.url)==null?void 0:i.cdn)||"";return qe(bt(s),{source:"asset",asset:t})}function _a(t){const e=t.info,s=(e==null?void 0:e.video_thumbnail)||(e==null?void 0:e.image_thumbnail)||(e==null?void 0:e.thumbnail)||"";return s?qe(bt(s),{source:"video",asset:t}):""}function hi(t){var s,i;let e=bt(((s=t.url)==null?void 0:s.cdn)||((i=t.url)==null?void 0:i.public)||"");return e?(e=e.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),qe(Ve(e,{w:"200",force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"}),{source:"pdf",asset:t})):""}function Ve(t,e){try{const s=new URL(t);for(const[i,a]of Object.entries(e))s.searchParams.set(i,a);return s.toString()}catch{return t}}const Ji=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\//i;function bt(t,e){if(!t)return"";const s=a=>a.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,"$1/");if(t.includes("assets.filerobot.com"))return s(t);const i=t.match(Ji);if(i){const a=i[2],r=t.replace(Ji,`$1assets.filerobot.com/${a}/`);return s(r)}if(e)try{const a=new URL(t);return s(`https://assets.filerobot.com/${e}${a.pathname}${a.search}`)}catch{}return t}function xa(t,e){const s=t.file_uri_cdn;if(!s)return"";let i=bt(s);const a=Tt(t.file_type),r=String(window.devicePixelRatio||1);let o;return a==="video"?o=Ve(i,{w:e,dpr:r,force_format:"webp,jpeg"}):t.file_type==="application/pdf"||js(t.file_type).toLowerCase()==="pdf"?(i=i.replace(/([?&])func=proxy&?/,"$1").replace(/[?&]$/,""),o=Ve(i,{w:e,dpr:r,force_format:"webp,jpeg",doc_page:"1",bypass_process_proxy:"1"})):o=Ve(i,{w:e,dpr:r}),qe(o,{source:"folder"})}function ui(t,e){const s={};return t.format&&(s.force_format=bo[t.format]),t.quality&&t.format!=="png"&&(s.q=String(fo[t.quality])),t.width&&(s.w=String(t.width)),t.height&&(s.h=String(t.height)),(t.width||t.height)&&(s.org_if_sml="1",e!=null&&e.isMultiSelect?s.func="bound":(e==null?void 0:e.isAspectLocked)===!1&&(s.func="cover")),s}function ko(t,e,s){const i=bt(t);if(!i)return t;const a=ui(e,s);return Object.keys(a).length>0?Ve(i,a):i}const k={TYPE:"type",MIME_TYPE:"mimetype",METADATA:"metadata",DATE:"date",APPROVAL:"approval",SIZE:"size",LICENSE_EXPIRY:"asset_expiration",TAGS:"tags",IMAGE:"image",LABELS:"labels",PRODUCT_REF:"product_ref",FACES:"faces",COLOR:"color"},M={STATUS:"approval_status",APPROVER:"task_approver",REQUESTOR:"task_requester",DUE_DATE:"task_duedate"},R={IS:":",RANGE:"..",IS_NOT:":-",IS_EXACT:":=",CONTAINS_IN_TEXT:"~~~",GREATER_THAN_OR_EQUAL:">=",LESS_THAN_OR_EQUAL:"<="},So={AND:"AND"},O={NUMERIC:"numeric",SELECT_ONE:"select-one",MULTI_SELECT:"multi-select",TEXT_AREA:"textarea",TEXT:"text",SUPERTAGS:"tags",DATE:"date",BOOLEAN:"boolean",ATTACHMENTS_ASSETS:"attachments-assets",ATTACHMENT_URI:"attachment-uri",GEO_POINT:"geopoint",DECIMAL2:"decimal2",INTEGER_LIST:"integer-list"},Ns={[O.DATE]:"date_",[O.BOOLEAN]:"bool_",[O.NUMERIC]:"num_",[O.DECIMAL2]:"dec_",[O.ATTACHMENTS_ASSETS]:"attach_",[O.ATTACHMENT_URI]:"uri_",[O.SELECT_ONE]:"one_",[O.MULTI_SELECT]:"multi_",[O.SUPERTAGS]:"tags_",[O.TEXT]:"text_",[O.TEXT_AREA]:"area_",[O.GEO_POINT]:"geo_",[O.INTEGER_LIST]:"intlist_"};Object.fromEntries(Object.entries(Ns).map(([t,e])=>[e,t]));const wa=Object.values(Ns),Te={PRESET:"preset",AFTER:"after",BEFORE:"before",BETWEEN:"between",SPECIFIC:"specific"},Zi={EMPTY:"empty",NOT_EMPTY:"non-empty"},$e="empty",ke="non-empty",ut="specific",Gs=10,Vt=10,vs=10,$a="filters:pinned:",ka="metadata:pinned:",ea=[k.DATE,k.TYPE,k.SIZE],Sa=R.IS,ys="20",_s="1",Co=0,Ao=[{key:k.DATE,labelKey:"filterDate",label:"Date",icon:"calendar",type:"date"},{key:k.TYPE,labelKey:"filterFormat",label:"Format",icon:"file-type",type:"string"},{key:k.SIZE,labelKey:"filterSize",label:"Size",icon:"scaling",type:"string"},{key:k.LICENSE_EXPIRY,labelKey:"filterLicenseExpiry",label:"License expiry",icon:"history",type:"date"},{key:k.TAGS,labelKey:"filterTags",label:"Tags",icon:"hash",type:"string"},{key:k.LABELS,labelKey:"filterLabels",label:"Labels",icon:"tag",type:"string"},{key:k.PRODUCT_REF,labelKey:"filterProducts",label:"Products",icon:"box",type:"string"},{key:k.IMAGE,labelKey:"filterImage",label:"Image",icon:"image",type:"string"},{key:k.COLOR,labelKey:"filterColor",label:"Color",icon:"swatch-book",type:"string"}],Fo={key:k.METADATA,labelKey:"filterMetadata",label:"Metadata",icon:"file-text",type:"string"},Eo={key:k.APPROVAL,labelKey:"filterApproval",label:"Approval",icon:"badge-check",type:"string"},Xt=[Fo,...Ao,Eo],Ot={[k.TYPE]:"Format",[k.DATE]:"Date",[k.SIZE]:"Size",[k.LICENSE_EXPIRY]:"License expiry",[k.TAGS]:"Tags",[k.LABELS]:"Labels",[k.PRODUCT_REF]:"Products",[k.IMAGE]:"Image",[k.COLOR]:"Color",[k.METADATA]:"Metadata",[k.APPROVAL]:"Approval",[M.STATUS]:"Approval",[M.APPROVER]:"Approval",[M.REQUESTOR]:"Approval",[M.DUE_DATE]:"Approval"},Ht={...Object.fromEntries(Xt.map(t=>[t.key,t.labelKey])),[M.STATUS]:"filterApproval",[M.APPROVER]:"filterApproval",[M.REQUESTOR]:"filterApproval",[M.DUE_DATE]:"filterApproval"},ve={IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",ARCHIVE:"archive",DESIGN_TEMPLATE:"template_fdt",OTHER:"other",FONTS:"font"},Os=[{value:ve.IMAGE,labelKey:"assetTypeImage",label:"Image",icon:"image"},{value:ve.VIDEO,labelKey:"assetTypeVideo",label:"Video",icon:"clapperboard"},{value:ve.AUDIO,labelKey:"assetTypeAudio",label:"Audio",icon:"music"},{value:ve.DOCUMENT,labelKey:"assetTypeDocument",label:"Document",icon:"document"},{value:ve.ARCHIVE,labelKey:"assetTypeArchive",label:"Archive",icon:"archive"},{value:ve.DESIGN_TEMPLATE,labelKey:"assetTypeDesignTemplate",label:"Design template",icon:"layout-template"},{value:ve.FONTS,labelKey:"assetTypeFonts",label:"Fonts",icon:"text"},{value:ve.OTHER,labelKey:"assetTypeOther",label:"Other",icon:"layout-grid"}],Oo={[ve.IMAGE]:["jpg","jpeg","png","gif","webp","svg","bmp","ico","tiff","tif","avif","heic","heif","psd","eps"],[ve.VIDEO]:["mp4","webm","ogg","mov","avi","mkv","flv","wmv","m4v"],[ve.AUDIO]:["mp3","wav","ogg","flac","aac","wma","m4a","opus"],[ve.DOCUMENT]:["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","csv","rtf","odt","ods","odp","html"],[ve.ARCHIVE]:["zip","rar","7z","tar","gz","bz2","xz"],[ve.FONTS]:["ttf","otf","woff","woff2","eot"]},Qs={RESOLUTION:0,ORIENTATION:1,FACES:2},To=[{value:"small",label:"Small",labelKey:"resolutionSmall"},{value:"medium",label:"Medium",labelKey:"resolutionMedium"},{value:"large",label:"Large",labelKey:"resolutionLarge"}],Lo=[{value:"portrait",label:"Portrait",labelKey:"orientationPortrait"},{value:"landscape",label:"Landscape",labelKey:"orientationLandscape"},{value:"square",label:"Square",labelKey:"orientationSquare"},{value:"panorama",label:"Panorama",labelKey:"orientationPanorama"}],Po=[{value:"none",label:"None",labelKey:"facesNone"},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3..",label:"3+"}],Ca=[{value:"created",label:"Created at",labelKey:"createdAt"},{value:"updated",label:"Updated at",labelKey:"updatedAt"}],fi=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"last_week",label:"Last week",labelKey:"lastWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"last_month",label:"Last month",labelKey:"lastMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"last_year",label:"Last year",labelKey:"lastYear"}],Aa=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Fa=[{value:"today",label:"Today",labelKey:"today"},{value:"before",label:"Before date",labelKey:"beforeDate"},{value:"within_week",label:"Within week",labelKey:"withinWeek"},{value:"after",label:"After date",labelKey:"afterDate"},{value:"within_month",label:"Within month",labelKey:"withinMonth"},{value:"between",label:"Between dates",labelKey:"betweenDates"},{value:"within_year",label:"Within year",labelKey:"withinYear"},{value:"specific",label:"Specific date",labelKey:"specificDate"}],Io=["#ffffff","#99a1af","#000000","#894b00","#e7000b","#ff8904","#fdc700","#9ae600","#008236","#00bcff","#1447e6","#7f22fe","#e60076"],Mo=[{label:"None (Exact)",value:"0",labelKey:"colorDiffNone"},{label:"Small",value:"1",labelKey:"colorDiffSmall"},{label:"Medium",value:"2",labelKey:"colorDiffMedium"},{label:"Large",value:"4",labelKey:"colorDiffLarge"}],Ys=[{label:"Is",value:R.IS,labelKey:"operatorIs"},{label:"Contains",value:R.CONTAINS_IN_TEXT,labelKey:"operatorContains"}],Ze=[{label:"Is",value:R.IS,labelKey:"operatorIs"},{label:"Is not",value:R.IS_NOT,labelKey:"operatorIsNot"}],Ws=[{label:"Is",value:R.IS_EXACT,labelKey:"operatorIs"},{label:"Contains",value:R.IS,labelKey:"operatorContains"},{label:"Does not contain",value:R.IS_NOT,labelKey:"operatorDoesNotContain"}],Xs=[{label:"Is",value:R.IS,labelKey:"operatorIs"},{label:"Greater than",value:R.GREATER_THAN_OR_EQUAL,labelKey:"operatorGreaterThan"},{label:"Is not",value:R.IS_NOT,labelKey:"operatorIsNot"},{label:"Less than",value:R.LESS_THAN_OR_EQUAL,labelKey:"operatorLessThan"},{label:"Between",value:R.RANGE,labelKey:"operatorBetween"}],ta=[{label:"Is",value:R.IS_EXACT,labelKey:"operatorIs"},{label:"Is not",value:R.IS_NOT,labelKey:"operatorIsNot"}],Do=[{value:"APPROVED",label:"Approved",labelKey:"approved",icon:"circle-check-big",iconColor:"var(--ap-success, oklch(0.637 0.17 151.295))"},{value:"PENDING",label:"Pending",labelKey:"pending",icon:"clock",iconColor:"var(--ap-warning, oklch(0.734 0.157 69.419))"},{value:"REJECTED",label:"Rejected",labelKey:"rejected",icon:"x-circle",iconColor:"var(--ap-destructive, oklch(0.577 0.215 27.325))"},{value:"CANCELLED",label:"Cancelled",labelKey:"cancelled",icon:"ban",iconColor:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"}],Ts=[{label:"Empty",value:$e,labelKey:"empty"},{label:"Not empty",value:ke,labelKey:"notEmpty"}],Ro=[...Ts,{label:"Specific",value:ut,labelKey:"specific"}],zo=[{label:"Empty",value:$e,labelKey:"empty"},{label:"Not empty",value:ke,labelKey:"notEmpty"},{label:"True",value:"true",labelKey:"boolTrue"},{label:"False",value:"false",labelKey:"boolFalse"}],xs={[O.DATE]:"calendar",[O.BOOLEAN]:"toggle-left",[O.NUMERIC]:"file-digit",[O.DECIMAL2]:"decimals-arrow-right",[O.ATTACHMENTS_ASSETS]:"paperclip",[O.ATTACHMENT_URI]:"link-2",[O.SELECT_ONE]:"circle-dot",[O.MULTI_SELECT]:"square-check",[O.SUPERTAGS]:"hash",[O.TEXT]:"text-initial",[O.TEXT_AREA]:"text-align-justify",[O.GEO_POINT]:"locate",[O.INTEGER_LIST]:"list-ordered"},jo={[O.TEXT]:"text",[O.TEXT_AREA]:"text",[O.NUMERIC]:"number",[O.DECIMAL2]:"number",[O.BOOLEAN]:"boolean",[O.SELECT_ONE]:"select-one",[O.MULTI_SELECT]:"multi-select",[O.SUPERTAGS]:"tags",[O.DATE]:"date",[O.GEO_POINT]:"geo",[O.ATTACHMENTS_ASSETS]:"attachment",[O.ATTACHMENT_URI]:"attachment",[O.INTEGER_LIST]:"attachment"};async function No(t){var i;return(((i=(await t.request("/filters",{filter_by:"filetype",format:"list",limit:200})).filters)==null?void 0:i.file_types)??[]).map(a=>({name:a.name,value:a.value,count:a.count,category:a.category??a.value.split("_")[0],label:Uo(a.name)}))}function Uo(t){const e=t.indexOf("›");return(e!==-1?t.slice(e+1).trim():t).toUpperCase()}async function Ko(t){var v,b;const e=await t.request("/settings"),s=e.settings??e,i=(s==null?void 0:s.metadata)??e.metadata,r=((i==null?void 0:i.model)??[])[Co],o=i==null?void 0:i.store,c=((o==null?void 0:o.regional_variants_groups)??[]).map(_=>({uuid:_.uuid,label:_.label??_.name??"",variants:(_.variants??[]).map($=>({api_value:$.api_value??$.value??"",internal_unique_value:$.internal_unique_value??$.api_value??"",label:$.label??$.name??""}))})).filter(_=>_.variants.length>1),h={};for(const _ of c)h[_.uuid]=((v=_.variants[0])==null?void 0:v.api_value)??"";const u=(s==null?void 0:s.project_branding)??((b=e.settings)==null?void 0:b.project_branding),f=u==null?void 0:u.brandColor;if(!r)return{fields:[],regionalVariantGroups:c,regionalFilters:h,brandColor:f};const p=r.groups??[],g=[];for(const _ of p){const $=_.name||"";for(const w of _.fields??[]){const I=w.possible_values,F=I==null?void 0:I.map(C=>({api_value:C.api_value??C.value??"",internal_unique_value:C.internal_unique_value??C.api_value??"",label:C.label??C.name??C.api_value??""}));g.push({key:w.key??w.ckey,label:w.title??w.label??w.key??"",type:w.type??"text",slug:w.slug,ckey:w.ckey,possible_values:F,group:$,regionalVariantsGroupUuid:w.regional_variants_group_uuid})}}return{fields:g,regionalVariantGroups:c,regionalFilters:h,brandColor:f}}function ft(t){return t.toLocaleDateString("en-CA")}function bs(){return ft(new Date)}function gi(t){const e=new Date;switch(t){case"today":return{from:bs(),to:null};case"last_week":{const s=new Date(e);return s.setDate(s.getDate()-7),{from:ft(s),to:null}}case"within_week":{const s=new Date(e);return s.setDate(s.getDate()+7),{from:bs(),to:ft(s)}}case"last_month":{const s=new Date(e);return s.setDate(s.getDate()-30),{from:ft(s),to:null}}case"within_month":{const s=new Date(e);return s.setDate(s.getDate()+30),{from:bs(),to:ft(s)}}case"last_year":{const s=new Date(e);return s.setDate(s.getDate()-365),{from:ft(s),to:null}}case"within_year":{const s=new Date(e);return s.setDate(s.getDate()+365),{from:bs(),to:ft(s)}}default:return null}}function sa(t,e){return e?e.type==="date"?Bo(e):e.type==="string"?qo(e):!0:!1}function Bo(t){return!(!t.kind&&!t.preset||t.kind==="preset"&&!t.preset||t.kind==="between"&&!t.from&&!t.to||t.kind==="after"&&!t.from||t.kind==="before"&&!t.to||t.kind==="specific"&&!t.from||t.from&&t.to&&new Date(t.from)>new Date(t.to))}function qo(t){return!t.values||!Array.isArray(t.values)?!1:t.values.filter(Boolean).length>0}function Vo(t,e={}){const s=[];for(const[i,a]of Object.entries(t)){if(!a||!sa(i,a))continue;const r=Go(i,a);s.push(...r)}for(const[i,a]of Object.entries(e)){if(!a||!sa(i,a))continue;const r=en(i,a);s.push(...r)}return Ho(s)}function Ho(t){const e=[],s=[],i=[];for(const a of t)a.startsWith("type:")||a.startsWith("type=")?e.push(a):a.startsWith("mimetype:")||a.startsWith("mimetype=")?s.push(a):i.push(a);if(e.length>0&&s.length>0){const a=[...e,...s].join(" , ");i.push(a)}else i.push(...e,...s);return i}function Go(t,e){if(e.type==="date")return Ea(t,e);if(t===k.IMAGE)return Zo(e);const s=e,{operator:i=Sa,values:a=[],logic:r}=s;if(a.length===0)return[];switch(t){case k.SIZE:return Qo(t,a,"..");case k.FACES:return Yo(t,i,a);case k.TAGS:return mt(t,i,ia(a),",",r);case k.LABELS:return mt(t,i,ia(a),",",r);case k.COLOR:return Wo(i,a,r);case k.TYPE:return Xo(a,i);case k.MIME_TYPE:return Jo(t,a,i);case k.PRODUCT_REF:return mt(t,"=%",a,",",r);default:return mt(t,i,a,",",r)}}function Ea(t,e){const s=e.field||"created";if(e.kind===Te.PRESET&&e.preset){if(e.preset===Zi.EMPTY)return[`${s}:"empty"`];if(e.preset===Zi.NOT_EMPTY)return[`${s}:"non-empty"`];const i=gi(e.preset);return i?i.to===null?[`${s}>"${i.from}"`]:[`${s}:"${i.from}..${i.to}"`]:[]}if(e.kind===Te.AFTER&&e.from)return[`${s}:>"${e.from}"`];if(e.kind===Te.BEFORE&&e.to)return[`${s}:<"${e.to}"`];if(e.kind===Te.BETWEEN){if(e.from&&e.to)return[`${s}:"${e.from}..${e.to}"`];if(e.from&&!e.to)return[`${s}:>"${e.from}"`];if(!e.from&&e.to)return[`${s}:<"${e.to}"`]}return e.kind===Te.SPECIFIC&&e.from?[`${s}:"${e.from}"`]:[]}function Qo(t,e,s){return e.length===0?[]:[`${t}:"${e.join(s)}"`]}function Yo(t,e,s){return s.length===0?[]:[`${t}${e}"${s.join(",")}"`]}function mt(t,e,s,i,a){if(s.length===0)return[];if(a===So.AND)return s.map(o=>`${t}${e}"${o}"`);const r=s.map(o=>`"${o}"`).join(i);return[`${t}${e}${r}`]}function Wo(t,e,s){const i=[],a=mt("color_search",t,e,",",s);return i.push(...a),i.push('color_operator:"AND"'),i}function Xo(t,e){if(t.length===0)return[];const s=new Set,i=[];for(const r of t){const o=Oo[r];if(o)for(const l of o){const c=`${r}_${l}`;s.has(c)||(s.add(c),i.push(c))}else s.has(r)||(s.add(r),i.push(r))}const a=i.map(r=>`"${r}"`).join(",");return[`type${e}${a}`]}function Jo(t,e,s,i){if(e.length===0)return[];const a=e.map(r=>`"${r}"`).join(",");return[`${t}${s}${a}`]}function Zo(t){const e=[];if(typeof t=="object"&&t!==null&&!Array.isArray(t)){const o=t,l=o.resolution,c=o.orientation,h=o.faces;return l!=null&&l.length&&e.push(`resolution:"${l.join(",")}"`),c!=null&&c.length&&e.push(`orientation:"${c.join(",")}"`),h!=null&&h.length&&e.push(`faces:"${h.join(",")}"`),e}const s=t,i=s[Qs.RESOLUTION],a=s[Qs.ORIENTATION],r=s[Qs.FACES];return i&&e.push(`resolution:"${i}"`),a&&e.push(`orientation:"${a}"`),r&&e.push(`faces:"${r}"`),e}function en(t,e){const s=an(t),i=sn(t);if(e.type==="date")return tn(s,e,i);const a=e,{operator:r=Sa,values:o=[],logic:l,metadataType:c}=a;if(o.length===0)return[];if(o.length===1&&(o[0]===$e||o[0]===ke)){const h=c===O.GEO_POINT?R.IS+"~":R.IS;return[`${s}${h}"${o[0]}"`]}if((c===O.NUMERIC||c===O.DECIMAL2)&&r===R.RANGE)return[`${s}${R.IS}"${o.join('","')}"`];if(c===O.GEO_POINT){const h=o.map(u=>{const f=u.indexOf("..");if(f===-1)return`(${u})`;const p=u.slice(0,f),g=u.slice(f);return`(${p})${g}`});return mt(s,r+"~",h,",",l)}return mt(s,r,o,",",l)}function tn(t,e,s){const i=Ea(t,e);return!s||i.length===0?i:i.map(a=>{const r=a.search(/[^a-zA-Z0-9_]/);if(r===-1)return`"${a}"`;const o=a.slice(0,r),c=a.slice(r).replace(/"/g,"");return`"${o}${c}"`})}function sn(t){return t.startsWith("date_")}function an(t){for(const e of wa)if(t.startsWith(e))return t.slice(e.length);return t}function ia(t){return t.map(e=>e.replace(/#/g,""))}const rn=new Set([k.DATE,k.LICENSE_EXPIRY,M.DUE_DATE]),on={[k.DATE]:"created",[k.LICENSE_EXPIRY]:k.LICENSE_EXPIRY,[M.DUE_DATE]:M.DUE_DATE};function ci(t){if(!t)return{};const e={};for(const[s,i]of Object.entries(t))i&&(e[s]=nn(s,i));return e}function nn(t,e){return e.type==="string"||e.type==="date"?e:rn.has(t)?{type:"date",field:e.field??on[t]??"created",kind:e.kind??null,preset:e.preset??null,from:e.from??null,to:e.to??null}:{type:"string",values:e.values,...e.operator!==void 0&&{operator:e.operator},...e.logic!==void 0&&{logic:e.logic}}}function ln(t){const e=localStorage.getItem($a+t),s=localStorage.getItem(ka+t);let i;try{i=e?JSON.parse(e):[...ea]}catch{i=[...ea]}let a;try{a=s?JSON.parse(s):[]}catch{a=[]}return{pinnedFilters:i,pinnedMetadata:a}}function cn(t,e){localStorage.setItem($a+t,JSON.stringify(e))}function dn(t,e){localStorage.setItem(ka+t,JSON.stringify(e))}const Oa="sort-by",Ta="sort-order";function aa(t,e){try{localStorage.setItem(Oa,t),localStorage.setItem(Ta,e)}catch{}}function pn(){try{const t=localStorage.getItem(Oa),e=localStorage.getItem(Ta);return{sortBy:t,sortDirection:e}}catch{return{sortBy:null,sortDirection:null}}}const La="ap-last-folder",Pa="ap-last-view",Ia="ap-last-tab";function Mt(t,e){return e?`${t}:${e}`:t}function ra(t,e){try{localStorage.setItem(Mt(La,e),t)}catch{}}function hn(t){try{return localStorage.getItem(Mt(La,t))}catch{return null}}function un(t,e){try{localStorage.setItem(Mt(Pa,e),t)}catch{}}function fn(t){try{return localStorage.getItem(Mt(Pa,t))}catch{return null}}function gn(t,e){try{localStorage.setItem(Mt(Ia,e),t)}catch{}}function mn(t){try{const e=localStorage.getItem(Mt(Ia,t));return e==="assets"||e==="folders"||e==="labels"||e==="collections"?e:null}catch{return null}}function vn(t){const e=t.replace("#",""),s=e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e,i=parseInt(s.slice(0,2),16)/255,a=parseInt(s.slice(2,4),16)/255,r=parseInt(s.slice(4,6),16)/255;return[i,a,r]}function Js(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function bn(t,e,s){const i=Js(t),a=Js(e),r=Js(s),o=.4122214708*i+.5363325363*a+.0514459929*r,l=.2119034982*i+.6806995451*a+.1073969566*r,c=.0883024619*i+.2817188376*a+.6299787005*r,h=Math.cbrt(o),u=Math.cbrt(l),f=Math.cbrt(c),p=.2104542553*h+.793617785*u-.0040720468*f,g=1.9779984951*h-2.428592205*u+.4505937099*f,v=.0259040371*h+.7827717662*u-.808675766*f,b=Math.sqrt(g*g+v*v);let _=Math.atan2(v,g)*(180/Math.PI);return _<0&&(_+=360),[p,b,_]}function yn(t){return t>.7}function _n(t,e){const s=["--ap-primary","--ap-primary-foreground","--ap-primary-10","--ap-primary-20","--ap-accent","--ap-accent-foreground","--ap-ring","--ap-selection-bg"];if(!e){for(const f of s)t.style.removeProperty(f);return}const[i,a,r]=vn(e),[o,l,c]=bn(i,a,r),h=`oklch(${o.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)})`,u=yn(o)?"#000":"#fff";t.style.setProperty("--ap-primary",h),t.style.setProperty("--ap-primary-foreground",u),t.style.setProperty("--ap-primary-10",`oklch(${o.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.1)`),t.style.setProperty("--ap-primary-20",`oklch(${o.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.2)`),t.style.setProperty("--ap-accent",`oklch(${o.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.07)`),t.style.setProperty("--ap-accent-foreground",h),t.style.setProperty("--ap-ring",`oklch(${o.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.7)`),t.style.setProperty("--ap-selection-bg",`oklch(${o.toFixed(3)} ${l.toFixed(3)} ${c.toFixed(1)} / 0.08)`)}const mi=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"size",labelKey:"sortSize",label:"Size"},{value:"type",labelKey:"sortFormat",label:"Format"}],xn=[{value:"relevance",labelKey:"sortRelevance",label:"Relevance"},...mi],wn=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"modified_at",labelKey:"sortModified",label:"Modified"},{value:"files_count_recursive",labelKey:"sortAssetsCount",label:"Assets count"},{value:"files_size_recursive",labelKey:"sortAssetsSize",label:"Assets size"}],$n=[{value:"name",labelKey:"sortName",label:"Name"}],kn=[{value:"name",labelKey:"sortName",label:"Name"},{value:"created_at",labelKey:"sortUploaded",label:"Uploaded"},{value:"updated_at",labelKey:"sortModified",label:"Modified"}],Sn=[{value:"name",labelKey:"sortName",label:"Name"}];var Cn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,vi=(t,e,s,i)=>{for(var a=i>1?void 0:i?An(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Cn(e,s,a),a};let Jt=class extends n.LitElement{constructor(){super(...arguments),this.open=!1}updated(t){var e;super.updated(t),t.has("open")&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():(e=this.dialog)!=null&&e.open&&this._animateClose())}_animateClose(){const t=this.dialog;if(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.close();return}t.classList.add("closing"),t.addEventListener("animationend",()=>{t.classList.remove("closing"),t.close()},{once:!0})}}_handleBackdropClick(t){t.target===this.dialog&&this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"backdrop"},bubbles:!0,composed:!0}))}_handleCancel(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:"escape"},bubbles:!0,composed:!0}))}render(){return n.html`
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
    `}};Jt.styles=n.css`
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
      max-height: var(--ap-modal-max-height, 85vh);
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
      dialog[open], dialog::backdrop, dialog.closing {
        animation: none;
      }
    }
  `;vi([d.property({type:Boolean})],Jt.prototype,"open",2);vi([d.query("dialog")],Jt.prototype,"dialog",2);Jt=vi([d.customElement("ap-modal")],Jt);function Fn(t,e){let s;const i=((...a)=>{clearTimeout(s),s=setTimeout(()=>t(...a),e)});return i.cancel=()=>clearTimeout(s),i}const pe=n.css`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;var En=Object.defineProperty,On=Object.getOwnPropertyDescriptor,ds=(t,e,s,i)=>{for(var a=i>1?void 0:i?On(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&En(e,s,a),a};let yt=class extends n.LitElement{constructor(){super(...arguments),this.groups=[],this.selectedFilters={},this.t=(t,e)=>typeof e=="string"?e:t,this._open=!1,this._handleOutsideClick=t=>{this._open&&!t.composedPath().includes(this)&&(this._open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}_selectVariant(t,e){this.dispatchEvent(new CustomEvent("regional-change",{detail:{groupUuid:t,value:e},bubbles:!0,composed:!0}))}render(){const t=this.groups.length>0;return n.html`
      <button
        class="trigger ${this._open?"active":""}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t("regionalSettings","Regional settings")}
        title=${this.t("regionalSettings","Regional settings")}
      >
        <ap-icon name="globe" .size=${18}></ap-icon>
      </button>
      <div class="popover ${this._open?"open":""}">
        ${t?n.nothing:n.html`
          <div class="empty-msg">
            ${this.t("noRegionalSettings","No regional settings configured")}
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
                  <span class="variant-label">${s.label}</span>
                  <span class="check-mark">${i?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:""}</span>
                </button>
              `})}
          </div>
        `)}
      </div>
    `}};yt.styles=n.css`
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
    .empty-msg {
      padding: 12px;
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `;ds([d.property({type:Array})],yt.prototype,"groups",2);ds([d.property({type:Object})],yt.prototype,"selectedFilters",2);ds([d.property({attribute:!1})],yt.prototype,"t",2);ds([d.state()],yt.prototype,"_open",2);yt=ds([d.customElement("ap-regional-settings")],yt);var Tn=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,he=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ln(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Tn(e,s,a),a};const Pn=[{value:"assets",labelKey:"tabAssets",labelDefault:"Assets",icon:"gallery-vertical-end"},{value:"folders",labelKey:"tabFolders",labelDefault:"Folders",icon:"folder-open"},{value:"labels",labelKey:"tabLabels",labelDefault:"Labels",icon:"tag"},{value:"collections",labelKey:"tabCollections",labelDefault:"Collections",icon:"layout-grid"}];let te=class extends n.LitElement{constructor(){super(...arguments),this.activeTab="assets",this.tabs=["assets","folders"],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode="grid",this.searchQuery="",this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._localSearch="",this._debouncedSearch=Fn(t=>{(t.length===0||t.length>=3)&&this.dispatchEvent(new CustomEvent("search-change",{detail:{value:t},bubbles:!0,composed:!0}))},300)}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(t){t.has("searchQuery")&&(this._localSearch=this.searchQuery)}_handleInput(t){const e=t.target.value;this._localSearch=e,this._debouncedSearch(e)}_clearSearch(){this._localSearch="",this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent("search-change",{detail:{value:""},bubbles:!0,composed:!0}))}_toggleView(){const t=this.viewMode==="grid"?"list":"grid";this.dispatchEvent(new CustomEvent("view-change",{detail:{mode:t},bubbles:!0,composed:!0}))}_handleTabChange(t){this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:t.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(t){this.dispatchEvent(new CustomEvent("regional-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent("ai-search-toggle",{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("ap-close",{bubbles:!0,composed:!0}))}render(){const{t}=this,e=Pn.filter(s=>this.tabs.includes(s.value)).map(s=>({...s,label:t(s.labelKey,s.labelDefault)}));return n.html`
      <div class="header-row">
        ${e.length>1?n.html`<ap-dropdown
              .value=${this.activeTab}
              .options=${e}
              @ap-change=${this._handleTabChange}
            ></ap-dropdown>`:n.nothing}
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab==="folders"?t("aiSearchFoldersPlaceholder","AI search folders and assets"):t("aiSearchAssetsPlaceholder","AI search assets"):this.activeTab==="labels"&&!this.isInsideLabel?t("searchLabelsPlaceholder","Search labels"):this.activeTab==="collections"&&!this.isInsideCollection?t("searchCollectionsPlaceholder","Search collections"):this.activeTab==="collections"&&this.isInsideCollection&&!this.isInsideCollectionLeaf?t("searchCollectionFoldersPlaceholder","Search collection folders"):this.activeTab==="folders"?t("searchFoldersPlaceholder","Search folders and assets"):t("searchAssetsPlaceholder","Search assets")}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?n.html`
              <button class="clear-btn" @click=${this._clearSearch} aria-label=${t("clearSearch","Clear search")}>
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            `:""}
            ${this.enableAISearch?n.html`
              <button
                class="ai-toggle ${this.isAISearchActive?"active":""}"
                @click=${this._toggleAISearch}
                aria-label=${this.isAISearchActive?t("disableAISearch","Disable AI search"):t("enableAISearch","Enable AI search")}
                title=${this.isAISearchActive?t("aiSearchOn","AI search on"):t("aiSearchOff","AI search off")}
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
            .t=${t}
            @regional-change=${this._handleRegionalChange}
          ></ap-regional-settings>
          <button
            class="icon-btn"
            @click=${this._toggleView}
            aria-label=${this.viewMode==="grid"?t("switchToListView","Switch to list view"):t("switchToGridView","Switch to grid view")}
            title=${this.viewMode==="grid"?t("listView","List view"):t("gridView","Grid view")}
          >
            <ap-icon name=${this.viewMode==="grid"?"list":"layout-grid"} .size=${18}></ap-icon>
          </button>
          ${this.hideClose?n.nothing:n.html`
            <div class="divider"></div>
            <button class="icon-btn icon-btn--muted" @click=${this._handleClose} aria-label=${t("close","Close")}>
              <ap-icon name="close" .size=${18}></ap-icon>
            </button>
          `}
        </div>
      </div>
    `}};te.styles=[pe,n.css`
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
    .icon-btn--muted {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `];he([d.property()],te.prototype,"activeTab",2);he([d.property({type:Array})],te.prototype,"tabs",2);he([d.property({type:Boolean})],te.prototype,"isInsideLabel",2);he([d.property({type:Boolean})],te.prototype,"isInsideCollection",2);he([d.property({type:Boolean})],te.prototype,"isInsideCollectionLeaf",2);he([d.property()],te.prototype,"viewMode",2);he([d.property()],te.prototype,"searchQuery",2);he([d.property({type:Array})],te.prototype,"regionalGroups",2);he([d.property({type:Object})],te.prototype,"regionalFilters",2);he([d.property({type:Boolean})],te.prototype,"hideClose",2);he([d.property({type:Boolean,reflect:!0,attribute:"ai-search"})],te.prototype,"enableAISearch",2);he([d.property({type:Boolean})],te.prototype,"isAISearchActive",2);he([d.property({attribute:!1})],te.prototype,"t",2);he([d.state()],te.prototype,"_localSearch",2);te=he([d.customElement("ap-header")],te);var In=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,bi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Mn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&In(e,s,a),a};let Zt=class extends n.LitElement{constructor(){super(...arguments),this.items=[],this.rootLabel="Root"}_navigate(t){this.dispatchEvent(new CustomEvent("breadcrumb-navigate",{detail:{uuid:t},bubbles:!0,composed:!0}))}render(){return this.items.length===0?n.html``:n.html`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate("")}>${this.rootLabel}</button>
        ${this.items.map((t,e)=>n.html`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${e<this.items.length-1?n.html`<button @click=${()=>this._navigate(t.uuid)}>${t.name}</button>`:n.html`<span class="current">${t.name}</span>`}
          `)}
      </nav>
    `}};Zt.styles=n.css`
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
  `;bi([d.property({type:Array})],Zt.prototype,"items",2);bi([d.property()],Zt.prototype,"rootLabel",2);Zt=bi([d.customElement("ap-breadcrumb")],Zt);const Zs=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Dn extends si.Directive{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==si.PartType.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return n.noChange}update(e,[s]){if(s===this._lastStyles)return n.noChange;this._lastStyles=s;const{style:i}=e.element,a=s??{};for(const r of this._appliedProps)(!(r in a)||a[r]==null||a[r]==="")&&(i.removeProperty(Zs(r)),this._appliedProps.delete(r));for(const[r,o]of Object.entries(a))o!=null&&o!==""?(i.setProperty(Zs(r),o),this._appliedProps.add(r)):this._appliedProps.has(r)&&(i.removeProperty(Zs(r)),this._appliedProps.delete(r));return n.noChange}}const z=si.directive(Dn);var Rn=Object.defineProperty,zn=Object.getOwnPropertyDescriptor,yi=(t,e,s,i)=>{for(var a=i>1?void 0:i?zn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Rn(e,s,a),a};let es=class extends n.LitElement{constructor(){super(...arguments),this.title="",this.open=!1}render(){return this.open?n.html`
      <div class="popover">
        ${this.title?n.html`<div class="title">${this.title}</div>`:""}
        <slot></slot>
      </div>
    `:n.html``}};es.styles=n.css`
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
  `;yi([d.property()],es.prototype,"title",2);yi([d.property({type:Boolean})],es.prototype,"open",2);es=yi([d.customElement("ap-filter-popover")],es);var jn=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,Dt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Nn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&jn(e,s,a),a};function oa(t){var i;const e=new Map;for(const a of t){const r=a.category||a.value.split("_")[0];if(!e.has(r)){const l=Os.find(c=>c.value===r);e.set(r,{key:r,labelKey:(l==null?void 0:l.labelKey)||r,label:(l==null?void 0:l.label)||r.charAt(0).toUpperCase()+r.slice(1),icon:(l==null?void 0:l.icon)||"file",extensions:[],totalCount:0})}const o=e.get(r);o.extensions.push({value:a.value,label:a.label||((i=a.value.split("_").pop())==null?void 0:i.toUpperCase())||a.value,count:a.count}),o.totalCount+=a.count}const s=Os.map(a=>a.value);return[...e.values()].sort((a,r)=>{const o=s.indexOf(a.key),l=s.indexOf(r.key);return(o===-1?999:o)-(l===-1?999:l)})}let tt=class extends n.LitElement{constructor(){super(...arguments),this.selected=[],this.fileTypes=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._expanded=new Set}_extValues(t){return t.extensions.map(e=>e.value)}_isGroupFullySelected(t){if(this.selected.includes(t.key))return!0;const e=this._extValues(t);return e.length>0&&e.every(s=>this.selected.includes(s))}_isGroupPartial(t){if(this.selected.includes(t.key))return!1;const e=this._extValues(t),s=e.filter(i=>this.selected.includes(i)).length;return s>0&&s<e.length}_isExtSelected(t,e){return this.selected.includes(e)||this.selected.includes(t)}_toggleGroup(t){const e=this._extValues(t),s=this._isGroupFullySelected(t);let i;if(s){const a=new Set([t.key,...e]);i=this.selected.filter(r=>!a.has(r))}else{const a=new Set(e);i=this.selected.filter(r=>!a.has(r)),i.push(t.key)}this._emit(i)}_toggleExt(t,e){const s=this._extValues(e);let i=[...this.selected];i.includes(e.key)&&(i=i.filter(a=>a!==e.key),i.push(...s)),i.includes(t)?i=i.filter(a=>a!==t):(i.push(t),s.every(a=>i.includes(a))&&(i=i.filter(a=>!s.includes(a)),i.push(e.key))),this._emit(i)}_clearAll(){this._emit([])}_emit(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:k.TYPE,values:t,operator:R.IS},bubbles:!0,composed:!0}))}_toggleExpand(t){const e=new Set(this._expanded);e.has(t)?e.delete(t):e.add(t),this._expanded=e}_filteredGroups(t){const e=this._search.toLowerCase().trim();return e?t.map(s=>{if(s.label.toLowerCase().includes(e)||s.key.toLowerCase().includes(e))return s;const a=s.extensions.filter(r=>r.label.toLowerCase().includes(e)||r.value.toLowerCase().includes(e));return a.length===0?null:{...s,extensions:a}}).filter(s=>s!==null):t}_toggleCategory(t){const e=this.selected.includes(t)?this.selected.filter(s=>s!==t):[...this.selected,t];this._emit(e)}updated(t){if(t.has("fileTypes")&&this.fileTypes.length>0){const e=oa(this.fileTypes),s=new Set(this._expanded);for(const i of e)(this._isGroupFullySelected(i)||this._isGroupPartial(i))&&s.add(i.key);this._expanded=s}}render(){if(this.fileTypes.length===0)return this._renderFallback();const t=oa(this.fileTypes),e=this._filteredGroups(t),s=this.selected.length>0;return n.html`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t("searchFormatsPlaceholder","Search formats...")}
        .value=${this._search}
        @input=${i=>{this._search=i.target.value}}
      />
      <div class="header-row">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${s?n.html`<button class="clear-btn" @click=${this._clearAll}>${this.t("clearAll","Clear all")}</button>`:n.nothing}
      </div>
      <div class="groups">
        ${e.length===0&&this._search.trim()?n.html`<div class="no-results">${this.t("noFormatsFound","No formats found")}</div>`:e.map(i=>this._renderGroup(i))}
      </div>
    `}_renderGroup(t){const e=this._expanded.has(t.key)||this._search.trim().length>0,s=this._isGroupFullySelected(t),i=this._isGroupPartial(t);return n.html`
      <div
        class="group-header ${s||i?"selected":""}"
        @click=${()=>this._toggleExpand(t.key)}
      >
        <svg class="group-chevron ${e?"expanded":""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <ap-icon name=${t.icon} size="16"></ap-icon>
        <span class="group-label">${this.t(t.labelKey,t.label)}</span>
        <ap-checkbox
          ?checked=${s}
          ?indeterminate=${i}
          @click=${a=>a.stopPropagation()}
          @ap-toggle=${()=>this._toggleGroup(t)}
        ></ap-checkbox>
      </div>
      ${e?n.html`
          <div class="extensions">
            ${t.extensions.map(a=>n.html`
              <div
                class="ext-row"
                @click=${()=>this._toggleExt(a.value,t)}
              >
                <ap-checkbox
                  ?checked=${this._isExtSelected(a.value,t.key)}
                  @click=${r=>r.stopPropagation()}
                  @ap-toggle=${()=>this._toggleExt(a.value,t)}
                ></ap-checkbox>
                <span class="ext-label">${a.label}</span>
              </div>
            `)}
          </div>
        `:n.nothing}
    `}_renderFallback(){return n.html`
      <div class="options">
        <span class="section-label">${this.t("formats","Formats")}</span>
        ${Os.map(t=>n.html`
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
    `}};tt.styles=n.css`
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
  `;Dt([d.property({type:Array})],tt.prototype,"selected",2);Dt([d.property({type:Array})],tt.prototype,"fileTypes",2);Dt([d.property({attribute:!1})],tt.prototype,"t",2);Dt([d.state()],tt.prototype,"_search",2);Dt([d.state()],tt.prototype,"_expanded",2);tt=Dt([d.customElement("ap-filter-type")],tt);const We=n.css`
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
`;var Un=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,at=(t,e,s,i)=>{for(var a=i>1?void 0:i?Kn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Un(e,s,a),a};function ei(t){return t.toISOString().split("T")[0]}let Re=class extends n.LitElement{constructor(){super(...arguments),this.filterKey=k.DATE,this.t=(t,e)=>typeof e=="string"?e:t,this.field="created",this.kind=null,this.preset="",this.from="",this.to=""}get _isLicenseExpiry(){return this.filterKey===k.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?Aa:fi).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return Ca.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _todayStr(){return ei(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(t){return["before","after","between","specific"].includes(t)?t:"preset"}_selectField(t){this.field=t,this._dispatchChange()}_selectPreset(t){if(!t){this._clearAll();return}const e=this._kindFromValue(t);if(this.kind=e,this.preset=t,["before","after","between","specific"].includes(t)){this.from="",this.to="",this.requestUpdate();return}const s=gi(t);s&&(this.from=s.from,this.to=s.to??""),this._dispatchChange()}_clearAll(){this.field="created",this.kind=null,this.preset="",this.from="",this.to="",this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(t,e){const s=e.target.value,i=s?new Date(s+"T00:00:00").toISOString():"";if(t==="from"?this.from=i:this.to=i,this.preset==="specific"&&t==="from"&&i){const a=new Date(s+"T23:59:59");this.to=a.toISOString()}this.preset==="after"&&t==="from"&&i&&(this.to=new Date().toISOString()),this.preset==="before"&&t==="to"&&i&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?n.nothing:n.html`
      <div class="filter-section">
        <span class="section-label">${this.t("dateType","Date type")}</span>
        <ap-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @ap-change=${t=>this._selectField(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderRangeSection(){return n.html`
      <div class="filter-section">
        <span class="section-label">${this.t("dateRange","Range")}</span>
        <ap-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @ap-change=${t=>this._selectPreset(t.detail.value)}
        ></ap-radio-group>
      </div>
    `}_renderDateInputs(){const t=this.preset;if(!["before","after","between","specific"].includes(t))return n.nothing;const e=this.from?ei(new Date(this.from)):"",s=this.to?ei(new Date(this.to)):"",i=this._todayStr;return t==="specific"?n.html`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t("date","Date")}</span>
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
            <span class="input-label">${this.t("endDate","End date")}</span>
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
            <span class="input-label">${this.t("startDate","Start date")}</span>
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
            <span class="input-label">${this.t("startDate","Start date")}</span>
            <input
              type="date"
              class="filter-input"
              max=${s||i}
              .value=${e}
              @change=${a=>this._handleDateInput("from",a)}
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
        >${this.t("clearAll","Clear all")}</button>
        ${this._renderDateTypeSection()}
        ${this._renderRangeSection()}
        ${this._renderDateInputs()}
      </div>
    `}};Re.styles=[We,n.css`
    .date-inputs {
      margin-top: 4px;
    }
  `];at([d.property()],Re.prototype,"filterKey",2);at([d.property({attribute:!1})],Re.prototype,"t",2);at([d.property()],Re.prototype,"field",2);at([d.property()],Re.prototype,"kind",2);at([d.property()],Re.prototype,"preset",2);at([d.property()],Re.prototype,"from",2);at([d.property()],Re.prototype,"to",2);Re=at([d.customElement("ap-filter-date")],Re);var Bn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,wt=(t,e,s,i)=>{for(var a=i>1?void 0:i?qn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Bn(e,s,a),a};let He=class extends n.LitElement{constructor(){super(...arguments),this.tags=[],this.selected=[],this.filterKey=k.TAGS,this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _suggestedTags(){return this.tags.filter(t=>t.primary)}get _otherTags(){return this.tags.filter(t=>!t.primary)}get _atLimit(){return this.selected.length>=Gs}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:s,operator:R.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:e,operator:R.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:this.filterKey,values:[],operator:R.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getTagBySid(t){return this.tags.find(e=>e.sid===t)}_renderTagItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return n.html`
      <div
        class="tag-item ${s?"disabled":""}"
        title=${s?`You can select up to ${Gs} tags`:n.nothing}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="tag-name">${t.label}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim();return n.html`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="tag-search"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
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
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{const s=this._getTagBySid(e);return s?n.html`
                      <div class="chip">
                        <span class="chip-label">${s.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `:n.nothing})}
                </div>
              </div>
            `:n.nothing}

        ${this._isSearching?this._renderSearchResults(t):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?n.html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${Gs} tags.</span>
              </div>
            `:n.nothing}
      </div>
    `}_renderSearchResults(t){const e=a=>a.toLowerCase().includes(t),s=this._suggestedTags.filter(a=>e(a.label)).slice(0,50),i=this._otherTags.filter(a=>e(a.label)).slice(0,50);return s.length===0&&i.length===0?n.html`<div class="no-results">${this.t("noTagsFound","No tags found")}</div>`:n.html`
      ${s.length>0?n.html`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length===0}
                  @click=${this._clearAll}
                >${this.t("clearAll","Clear all")}</button>
              </div>
              <div class="options-list short">
                ${s.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:n.nothing}

      ${i.length>0?n.html`
            <div class="filter-section">
              <div class="section-header">
                ${s.length===0?n.html`<span class="section-label">${this.t("allTags","All tags")}</span>
                    <button
                      class="clear-btn"
                      ?disabled=${this.selected.length===0}
                      @click=${this._clearAll}
                    >${this.t("clearAll","Clear all")}</button>`:n.html`<span class="section-label">${this.t("allTags","All tags")}</span>`}
              </div>
              <div class="options-list">
                ${i.map(a=>this._renderTagItem(a))}
              </div>
            </div>
          `:n.nothing}
    `}_renderSections(){if(this.tags.length===0)return n.html`<div class="no-results">${this.t("noTagsAvailable","No tags available")}</div>`;const t=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return n.html`
      <div class="filter-section">
        ${t.length>0?n.html`<span class="section-label">${this.t("suggestedTags","Suggested tags")}</span>`:n.nothing}
        ${t.length>0?n.html`
              <div class="options-list short">
                ${t.map(e=>this._renderTagItem(e))}
              </div>
            `:n.nothing}
      </div>

      ${t.length>0?n.html`<div class="separator"></div>`:n.nothing}

      <div class="hint-message">${this.t("findMoreTagsBySearch","Find more tags by using search")}</div>
    `}};He.styles=[pe,We,n.css`
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
  `];wt([d.property({type:Array})],He.prototype,"tags",2);wt([d.property({type:Array})],He.prototype,"selected",2);wt([d.property()],He.prototype,"filterKey",2);wt([d.property({attribute:!1})],He.prototype,"t",2);wt([d.query(".tag-search")],He.prototype,"_searchInput",2);wt([d.state()],He.prototype,"_search",2);He=wt([d.customElement("ap-filter-tags")],He);var Vn=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,Rt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Hn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Vn(e,s,a),a};let st=class extends n.LitElement{constructor(){super(...arguments),this.labels=[],this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}get _atLimit(){return this.selected.length>=Vt}get _isSearching(){return this._search.trim().length>0}_toggle(t){const e=this.selected.includes(t);if(!e&&this._atLimit)return;const s=e?this.selected.filter(i=>i!==t):[...this.selected,t];this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:k.LABELS,values:s,operator:R.IS},bubbles:!0,composed:!0}))}_remove(t){const e=this.selected.filter(s=>s!==t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:k.LABELS,values:e,operator:R.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:k.LABELS,values:[],operator:R.IS},bubbles:!0,composed:!0}))}_onSearchInput(t){this._search=t.target.value}_clearSearch(){this._search=""}_getLabelBySid(t){return this.labels.find(e=>e.sid===t)}_renderLabelItem(t){const e=this.selected.includes(t.sid),s=!e&&this._atLimit;return n.html`
      <div
        class="label-item ${s?"disabled":""}"
        title=${s?this.t("labelsLimitTitle",`You can select up to ${Vt} labels`,{count:Vt}):n.nothing}
        @click=${()=>!s&&this._toggle(t.sid)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="label-icon" ${z({color:t.color})}>
          <ap-icon name="tag" .size=${16}></ap-icon>
        </span>
        <span class="label-name">${t.name}</span>
        <span class="count">${t.assets_count}</span>
      </div>
    `}render(){const t=this._search.toLowerCase().trim(),e=this.labels.filter(s=>s.name.toLowerCase().includes(t));return n.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchLabelsPlaceholder","Search labels")}
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
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(s=>{const i=this._getLabelBySid(s);return i?n.html`
                      <div class="chip">
                        <span class="chip-icon" ${z({color:i.color})}>
                          <ap-icon name="tag" .size=${12}></ap-icon>
                        </span>
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
          <div class="section-header">
            <span class="section-label">${this.t("allLabels","All labels")}</span>
            <button
              class="clear-btn"
              ?disabled=${this.selected.length===0}
              @click=${this._clearAll}
            >${this.t("clearAll","Clear all")}</button>
          </div>
          <div class="options-list">
            ${e.length===0?n.html`<div class="no-results">${this.t("noLabelsFound","No labels found")}</div>`:e.map(s=>this._renderLabelItem(s))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?n.html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>${this.t("labelsLimitAlert",`You can select up to ${Vt} labels.`,{count:Vt})}</span>
              </div>
            `:n.nothing}
      </div>
    `}};st.styles=[We,n.css`
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
  `];Rt([d.property({type:Array})],st.prototype,"labels",2);Rt([d.property({type:Array})],st.prototype,"selected",2);Rt([d.property({attribute:!1})],st.prototype,"t",2);Rt([d.query(".search-input")],st.prototype,"_searchInput",2);Rt([d.state()],st.prototype,"_search",2);st=Rt([d.customElement("ap-filter-labels")],st);var Gn=Object.defineProperty,Qn=Object.getOwnPropertyDescriptor,$t=(t,e,s,i)=>{for(var a=i>1?void 0:i?Qn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Gn(e,s,a),a};const ti=3,di=/^#[0-9A-Fa-f]{6}$/;function Yn(t){const e=t.trim().split(/\s+/);return e.length<1||!di.test(e[0])?null:{hex:e[0],tolerance:e[1]||_s,coverage:e[3]||ys}}let Ge=class extends n.LitElement{constructor(){super(...arguments),this.values=[],this.t=(t,e)=>typeof e=="string"?e:t,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(t=>t.hex))}willUpdate(t){if(t.has("values")){const e=[];for(const s of this.values){const i=Yn(s);i&&e.push(i)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(s=>s.tolerance!==_s||s.coverage!==ys)),this._initialized=!0)}}_selectColor(t){if(!di.test(t))return;const e=this._colors.findIndex(s=>s.hex.toLowerCase()===t.toLowerCase());if(e>=0){this._removeColor(e);return}this._colors.length>=ti||(this._colors=[...this._colors,{hex:t,tolerance:_s,coverage:ys}],this._showPalette=!1,this._dispatchChange())}_removeColor(t){this._colors=this._colors.filter((e,s)=>s!==t),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(t,e){let i=e.target.value.trim();if(i.startsWith("#")||(i="#"+i),!di.test(i)||this._colors.some((o,l)=>l!==t&&o.hex.toLowerCase()===i.toLowerCase()))return;const r=[...this._colors];r[t]={...r[t],hex:i},this._colors=r,this._dispatchChange()}_handleToleranceChange(t,e){const s=[...this._colors];s[t]={...s[t],tolerance:e.detail.value},this._colors=s,this._dispatchChange()}_handleCoverageInput(t,e){const s=e.target.value,i=parseInt(s,10);if(!isNaN(i)&&i>=1&&i<=100){const a=[...this._colors];a[t]={...a[t],coverage:String(i)},this._colors=a,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:"",operator:":"},bubbles:!0,composed:!0}));return}const t=this._colors.map(e=>{const s=this._advanced?e.tolerance:_s,i=this._advanced?e.coverage:ys;return`${e.hex} ${s} ${s} ${i}`});this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"color",values:t,operator:":"},bubbles:!0,composed:!0}))}_renderPalette(){const t=this._selectedHexes,e=this._colors.length>=ti;return n.html`
      <div class="palette">
        ${Io.map(s=>{const i=t.has(s),a=e&&!i;return n.html`
              <button
                class="swatch ${i?"selected":""} ${a?"disabled":""}"
                ${z({background:s,...s==="#ffffff"?{border:"1px solid #e4e4e7"}:{}})}
                @click=${()=>!a&&this._selectColor(s)}
                title=${s}
                ?disabled=${a}
              ></button>
            `})}
      </div>
    `}_renderColorEntry(t,e){return this._advanced?n.html`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t("colorLabel","Color")}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${z({background:t.hex})}></div>
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
          <ap-dropdown
            .value=${t.tolerance}
            .options=${Mo.map(s=>({...s,label:this.t(s.labelKey,s.label)}))}
            @ap-change=${s=>this._handleToleranceChange(e,s)}
          ></ap-dropdown>
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
        <button class="remove-btn" title=${this.t("removeColor","Remove color")} @click=${()=>this._removeColor(e)}>
          <ap-icon name="close" .size=${14}></ap-icon>
        </button>
      </div>
    `:n.html`
        <div class="color-row">
          <div class="color-swatch-small" ${z({background:t.hex})}></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${t.hex}
            maxlength="7"
            @change=${s=>this._handleHexInput(e,s)}
          />
          <button class="remove-btn" title=${this.t("removeColor","Remove color")} @click=${()=>this._removeColor(e)}>
            <ap-icon name="close" .size=${14}></ap-icon>
          </button>
        </div>
      `}render(){const t=this._colors.length===0||this._showPalette,e=this._colors.length<ti&&!this._showPalette;return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("colorLabel","Color")}</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced?"on":""}">
              <span class="toggle-thumb"></span>
            </span>
            ${this.t("advanced","Advanced")}
          </label>
        </div>

        <div class="filter-section">
          ${t?this._renderPalette():n.nothing}
        </div>

        ${this._colors.length>0?n.html`
          <div class="filter-section">
            <div class="selected-colors">
              ${this._colors.map((s,i)=>this._renderColorEntry(s,i))}
            </div>
          </div>
        `:n.nothing}

        ${e?n.html`
          <div class="filter-section">
            <button class="add-color-btn" @click=${this._showAddPalette}>
              <ap-icon name="plus" .size=${14}></ap-icon>
              ${this.t("addColor","Add color")}
            </button>
          </div>
        `:n.nothing}

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>${this.t("requiresImageProcessing","Requires image processing to be enabled.")}</span>
        </div>
      </div>
    `}};Ge.styles=[pe,We,n.css`
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
  `];$t([d.property({type:Array})],Ge.prototype,"values",2);$t([d.property({attribute:!1})],Ge.prototype,"t",2);$t([d.state()],Ge.prototype,"_colors",2);$t([d.state()],Ge.prototype,"_advanced",2);$t([d.state()],Ge.prototype,"_showPalette",2);$t([d.state()],Ge.prototype,"_initialized",2);Ge=$t([d.customElement("ap-filter-color")],Ge);var Wn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,rt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Xn(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Wn(e,s,a),a};const Jn={KB:1/1e3,MB:1,GB:1e3},Zn=[{value:"MB",label:"MB"},{value:"GB",label:"GB"}];let ze=class extends n.LitElement{constructor(){super(...arguments),this.min=0,this.max=0,this.t=(t,e)=>typeof e=="string"?e:t,this._minVal="",this._maxVal="",this._unit="MB",this._initialized=!1}willUpdate(t){!this._initialized&&(t.has("min")||t.has("max"))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==""||this._maxVal!==""}_clearAll(){this._minVal="",this._maxVal="",this._emitChange()}_setUnit(t){this._unit=t.detail.value,this._emitChange()}_emitChange(){const t=Jn[this._unit],e=this._minVal!==""?parseFloat((parseFloat(this._minVal)*t).toFixed(2)).toString():null,s=this._maxVal!==""?parseFloat((parseFloat(this._maxVal)*t).toFixed(2)).toString():null;let i;if(e!==null&&s!==null)i=`${e}..${s}`;else if(e!==null)i=`${e}..`;else if(s!==null)i=`..${s}`;else{this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:k.SIZE,values:[],operator:R.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:k.SIZE,values:[i],operator:R.RANGE},bubbles:!0,composed:!0}))}_onMinInput(t){this._minVal=t.target.value,this._emitChange()}_onMaxInput(t){this._maxVal=t.target.value,this._emitChange()}render(){return n.html`
      <div class="filter-content">
        <span class="section-label">${this.t("sizeLabel","Size")}</span>
        <button
          class="clear-btn"
          ?disabled=${!this._hasFilter}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

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
              placeholder="Any"
              min="0"
              step="0.1"
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t("sizeUnit","Unit")}</span>
            <ap-dropdown
              .options=${Zn}
              .value=${this._unit}
              @ap-change=${this._setUnit}
            ></ap-dropdown>
          </div>
        </div>
      </div>
    `}};ze.styles=[We,n.css`
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
    `];rt([d.property({type:Number})],ze.prototype,"min",2);rt([d.property({type:Number})],ze.prototype,"max",2);rt([d.property({attribute:!1})],ze.prototype,"t",2);rt([d.state()],ze.prototype,"_minVal",2);rt([d.state()],ze.prototype,"_maxVal",2);rt([d.state()],ze.prototype,"_unit",2);rt([d.state()],ze.prototype,"_initialized",2);ze=rt([d.customElement("ap-filter-size")],ze);var el=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,ps=(t,e,s,i)=>{for(var a=i>1?void 0:i?tl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&el(e,s,a),a};const sl=n.svg`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,il=n.svg`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,al=n.svg`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,rl=n.svg`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`,ol={portrait:sl,landscape:il,square:al,panorama:rl};let _t=class extends n.LitElement{constructor(){super(...arguments),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(t,e)=>typeof e=="string"?e:t}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(t,e){return t.includes(e)?t.filter(s=>s!==e):[...t,e]}_toggleResolution(t){this.selectedResolution=this._toggle(this.selectedResolution,t),this._dispatchChange()}_toggleOrientation(t){this.selectedOrientation=this._toggle(this.selectedOrientation,t),this._dispatchChange()}_toggleFaces(t){this.selectedFaces=this._toggle(this.selectedFaces,t),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:"image",values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("imageResolution","Resolution")}</span>
          <div class="options-horizontal">
            ${To.map(t=>n.html`
                <ap-checkbox
                  ?checked=${this.selectedResolution.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleResolution(t.value)}}
                >${this.t(t.labelKey,t.label)}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageOrientation","Orientation")}</span>
          <div class="options-vertical">
            ${Lo.map(t=>n.html`
                <ap-checkbox
                  ?checked=${this.selectedOrientation.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleOrientation(t.value)}}
                ><span class="orientation-label">${ol[t.value]}${this.t(t.labelKey,t.label)}</span></ap-checkbox>
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("imageFaces","Faces")}</span>
          <div class="options-horizontal">
            ${Po.map(t=>n.html`
                <ap-checkbox
                  ?checked=${this.selectedFaces.includes(t.value)}
                  @ap-toggle=${()=>{this._toggleFaces(t.value)}}
                >${t.labelKey?this.t(t.labelKey,t.label):t.label}</ap-checkbox>
              `)}
          </div>
        </div>

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>${this.t("imageProcessingNotice","Some images might not have been processed, so they won't be displayed.")}</span>
        </div>
      </div>
    `}};_t.styles=[We,n.css`
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
  `];ps([d.property({type:Array})],_t.prototype,"selectedResolution",2);ps([d.property({type:Array})],_t.prototype,"selectedOrientation",2);ps([d.property({type:Array})],_t.prototype,"selectedFaces",2);ps([d.property({attribute:!1})],_t.prototype,"t",2);_t=ps([d.customElement("ap-filter-image")],_t);var nl=Object.defineProperty,ll=Object.getOwnPropertyDescriptor,Y=(t,e,s,i)=>{for(var a=i>1?void 0:i?ll(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&nl(e,s,a),a};function N(t){return`${Ns[t.type]||""}${t.key}`}let H=class extends n.LitElement{constructor(){super(...arguments),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode="full",this.activeFieldKey="",this.pinnedFields=[],this.appliedMetadata={},this.t=(t,e)=>typeof e=="string"?e:t,this._showFieldSelection=!1,this._fieldSearch="",this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._tagDebounceTimers={}}get _tTextOperatorOptions(){return Ys.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tNumberOperatorOptions(){return Xs.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tSingleSelectOperatorOptions(){return Ze.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tMultiSelectOperatorOptions(){return Ws.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tBooleanOptions(){return zo.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyOptions(){return Ts.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}get _tEmptyAndSpecificOptions(){return Ro.map(t=>({...t,label:this.t(t.labelKey,t.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(const t of Object.values(this._tagDebounceTimers))clearTimeout(t)}_focusSearch(){const t=this.renderRoot.querySelector(".field-search, .search-input");t==null||t.focus()}get _atFieldLimit(){return this.visibleFields.length>=vs}_getField(t){return this.fields.find(e=>N(e)===t)}_getUIType(t){return jo[t.type]}_getApplied(t){return this.appliedMetadata[t]||this.appliedFilters[t]||{}}_isSpecialValue(t){return!t||t.length!==1?!1:t[0]===$e||t[0]===ke}_getContentMode(t){var s,i;const e=this._getApplied(t);return((s=e.values)==null?void 0:s[0])===$e?$e:((i=e.values)==null?void 0:i[0])===ke?ke:this._specificModeFields.has(t)||e.values&&e.values.length>0?ut:""}_emitFilterChange(t,e,s){const i=N(t);this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:{fieldKey:i,operator:e,values:s,metadataType:t.type},bubbles:!0,composed:!0}))}_emitFieldToggle(t,e){const s=N(t);this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:{fieldKey:s,visible:e},bubbles:!0,composed:!0}))}_emitFieldSelect(t){const e=N(t);!this.visibleFields.includes(e)&&this._atFieldLimit||(this.visibleFields.includes(e)||this._emitFieldToggle(t,!0),this.dispatchEvent(new CustomEvent("metadata-field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0})))}_emitPin(t,e){this.dispatchEvent(new CustomEvent("metadata-pin",{detail:{fieldKey:t,pinned:e},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=""}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=""}_addField(t){if(this._atFieldLimit)return;const e=N(t);this.visibleFields.includes(e)||this._emitFieldToggle(t,!0)}_removeField(t){this._emitFieldToggle(t,!1),this._emitFilterChange(t,void 0,[])}_toggleCollapse(t){const e=new Set(this._collapsedFields);e.has(t)?e.delete(t):e.add(t),this._collapsedFields=e}_onOperatorChange(t,e){const i=this._getApplied(N(t)).values||[];this._emitFilterChange(t,e,i)}_onContentModeChange(t,e){const s=N(t);if(e===ut){const i=new Set(this._specificModeFields);i.add(s),this._specificModeFields=i;const a=this._getApplied(s);this._isSpecialValue(a.values)&&this._emitFilterChange(t,a.operator,[])}else{if(this._specificModeFields.has(s)){const i=new Set(this._specificModeFields);i.delete(s),this._specificModeFields=i}if(e)this._onEmptyOption(t,e);else{const i=this._getApplied(s);this._emitFilterChange(t,i.operator,[])}}}_clearFieldFilter(t){const e=N(t);if(this._specificModeFields.has(e)){const p=new Set(this._specificModeFields);p.delete(e),this._specificModeFields=p}const{[e]:s,...i}=this._datePresets;this._datePresets=i;const{[e]:a,...r}=this._dateFroms;this._dateFroms=r;const{[e]:o,...l}=this._dateTos;this._dateTos=l;const{[e]:c,...h}=this._selectSearches;this._selectSearches=h;const{[e]:u,...f}=this._tagInputs;this._tagInputs=f,this._emitFilterChange(t,void 0,[])}_onTextInput(t,e){const s=e.target.value,a=this._getApplied(N(t)).operator||Ys[0].value;this._emitFilterChange(t,a,s?[s]:[])}_onNumberInput(t,e,s){const i=e.target.value,a=N(t),r=this._getApplied(a),o=r.operator||Xs[0].value,l=[...r.values||[]];s===0?l[0]=i:l[1]=i;const c=l.filter(h=>h!==""&&h!==void 0);if(c.length>0){const h=t.type===O.DECIMAL2;if(!c.every(f=>h?!isNaN(parseFloat(f)):/^-?\d+$/.test(f)))return}this._emitFilterChange(t,o,l)}_onBooleanSelect(t,e){var a;const s=this._getApplied(N(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,void 0,[]):this._emitFilterChange(t,s.operator,[e])}_onSelectOneToggle(t,e){const s=N(t),i=this._getApplied(s),a=i.operator||Ze[0].value,r=i.values||[];r.length===1&&r[0]===e?this._emitFilterChange(t,a,[]):this._emitFilterChange(t,a,[e])}_onMultiSelectToggle(t,e){const s=N(t),i=this._getApplied(s),a=i.operator||Ws[0].value,r=i.values||[],o=r.includes(e)?r.filter(l=>l!==e):[...r,e];this._emitFilterChange(t,a,o)}_onTagKeydown(t,e){const s=N(t);(e.key==="Enter"||e.key===",")&&(e.preventDefault(),this._commitTagInput(t,s))}_onTagInput(t,e,s){const i=s.target.value;if(i.includes(",")){const a=i.replace(/,/g,"").trim();a&&(this._tagInputs={...this._tagInputs,[e]:a},this._commitTagInput(t,e));return}this._tagInputs={...this._tagInputs,[e]:i},this._fetchTagSuggestions(t,e,i.trim())}_selectTagSuggestion(t,e){const s=N(t),i=this._getApplied(s),a=i.operator||Ze[0].value,r=i.values||[];r.includes(e)||this._emitFilterChange(t,a,[...r,e]),this._tagInputs={...this._tagInputs,[s]:""},this._tagSuggestions={...this._tagSuggestions,[s]:[]}}_fetchTagSuggestions(t,e,s){if(this._tagDebounceTimers[e]&&clearTimeout(this._tagDebounceTimers[e]),!s||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[e]:[]},this._tagLoading={...this._tagLoading,[e]:!1};return}this._tagDebounceTimers[e]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[e]:!0};try{const i=`_${t.ckey||t.key}`,a=await this.apiClient.request("/metadata/autocomplete",{q:s,meta_key:i});(this._tagInputs[e]||"").trim()===s&&(this._tagSuggestions={...this._tagSuggestions,[e]:(a.tags||[]).map(r=>r.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[e]:[]}}finally{this._tagLoading={...this._tagLoading,[e]:!1}}},300)}_commitTagInput(t,e){const s=(this._tagInputs[e]||"").trim();if(!s)return;const i=this._getApplied(e),a=i.operator||Ze[0].value,r=i.values||[];r.includes(s)||this._emitFilterChange(t,a,[...r,s]),this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}_removeTag(t,e){const s=N(t),i=this._getApplied(s),a=i.operator||Ze[0].value,r=i.values||[];this._emitFilterChange(t,a,r.filter(o=>o!==e))}_onTagOperatorChange(t,e){const s=N(t),a=this._getApplied(s).values||[];this._emitFilterChange(t,e,a)}_onDatePreset(t,e){const s=N(t);if(!e){this._clearFieldFilter(t);return}if(this._datePresets={...this._datePresets,[s]:e},["before","after","between"].includes(e)){this._dateFroms={...this._dateFroms,[s]:""},this._dateTos={...this._dateTos,[s]:""};return}if(e==="empty"||e==="non-empty"){this._emitFilterChange(t,void 0,[e]);return}const i=new Date;let a="",r="";switch(e){case"today":{const o=new Date(i);o.setHours(0,0,0,0),a=o.toISOString(),r=i.toISOString();break}case"last_week":{const o=new Date(i),l=o.getDay();o.setDate(o.getDate()-(l===0?6:l-1)),o.setHours(0,0,0,0);const c=new Date(o);c.setDate(c.getDate()-7),a=c.toISOString(),r=o.toISOString();break}case"last_month":{const o=new Date(i.getFullYear(),i.getMonth(),1),l=new Date(o);l.setMonth(l.getMonth()-1),a=l.toISOString(),r=o.toISOString();break}case"last_year":{const o=new Date(i.getFullYear(),0,1),l=new Date(o);l.setFullYear(l.getFullYear()-1),a=l.toISOString(),r=o.toISOString();break}}a&&r&&(this._dateFroms={...this._dateFroms,[s]:a},this._dateTos={...this._dateTos,[s]:r},this._emitFilterChange(t,"..",[a,r]))}_onDateInput(t,e,s){const i=s.target.value,a=N(t),r=this._datePresets[a]||"",o=i?new Date(i+"T00:00:00").toISOString():"";e==="from"?this._dateFroms={...this._dateFroms,[a]:o}:this._dateTos={...this._dateTos,[a]:o};let l=this._dateFroms[a]||"",c=this._dateTos[a]||"";r==="after"&&l&&(c=new Date().toISOString(),this._dateTos={...this._dateTos,[a]:c}),r==="before"&&c&&(l=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[a]:l}),l&&c&&this._emitFilterChange(t,"..",[l,c])}_onGeoLocationInput(t,e){var f;const s=e.target.value.trim(),i=N(t),a=(f=this.shadowRoot)==null?void 0:f.querySelector(`[data-geo-radius="${i}"]`),r=(a==null?void 0:a.value)||"";if(!s){this._emitFilterChange(t,void 0,[]);return}const o=s.split(",").map(p=>p.trim());if(o.length!==2||o.some(p=>isNaN(Number(p))||p===""))return;const[l,c]=o;let u=`${l},${c}..${r||"0"}`;this._emitFilterChange(t,R.IS,[u])}_onGeoRadiusInput(t,e){var c;const s=e.target.value,i=N(t),a=this._getApplied(i);if(!((c=a.values)!=null&&c[0]))return;const r=a.values[0],[o]=r.split("..");let l=o;s&&(l+=`..${s}`),this._emitFilterChange(t,R.IS,[l])}_onEmptyOption(t,e){var a;const s=this._getApplied(N(t)),i=(a=s.values)==null?void 0:a[0];!e||i===e?this._emitFilterChange(t,s.operator,[]):this._emitFilterChange(t,s.operator,[e])}_getGroupedFields(t){const e=new Map;for(const s of t){const i=s.group||this.t("rootFields","Root fields");e.has(i)||e.set(i,[]),e.get(i).push(s)}return e}_renderFieldSelection(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,r)=>r.length===0?n.nothing:n.html`
        <div class="field-group-label">${a}</div>
        ${r.map(o=>{const l=N(o),c=this.visibleFields.includes(l),h=!c&&this._atFieldLimit;return n.html`
            <div
              class="field-item ${c?"selected":""} ${h?"disabled":""}"
              @click=${()=>!h&&!c&&this._addField(o)}
            >
              ${c?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:n.html`<ap-icon name=${xs[o.type]||"file-text"} .size=${14} ${z({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>`}
              <span>${o.label}</span>
            </div>
          `})}
      `;return n.html`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title">${this.t("addMetadataField","Add metadata field")}</span>
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
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?n.html`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:n.html`${[...s.entries()].map(([a,r])=>i(a,r))}`}
        </div>
      </div>
    `}_renderTextFilter(t){var h,u;const e=N(t),s=this._getApplied(e),a=this._isSpecialValue(s.values)?"":((h=s.values)==null?void 0:h[0])||"",r=this._getContentMode(e),o=r===$e||r===ke,l=s.operator||Ys[0].value,c=t.type===O.TEXT_AREA;return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((u=s.values)!=null&&u.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("operator","Operator")}</span>
          <ap-radio-group
            direction="horizontal"
            .options=${this._tTextOperatorOptions}
            .value=${l}
            ?disabled=${o}
            @ap-change=${f=>this._onOperatorChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${r}
            @ap-change=${f=>this._onContentModeChange(t,f.detail.value)}
          ></ap-radio-group>
        </div>

        ${r===ut?n.html`
              <div class="filter-section">
                <span class="section-label">${this.t("value","Value")}</span>
                ${c?n.html`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                      ></textarea>
                    `:n.html`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t("enterValue","Enter value")}
                        .value=${a}
                        @change=${f=>this._onTextInput(t,f)}
                        @keydown=${f=>{f.key==="Enter"&&f.preventDefault()}}
                      />
                    `}
              </div>
            `:n.nothing}
      </div>
    `}_renderNumberFilter(t){var w,I,F;const e=N(t),s=this._getApplied(e),i=s.operator||Xs[0].value,a=this._isSpecialValue(s.values),r=this._getContentMode(e),o=r===$e||r===ke,l=i===R.RANGE,c=i===R.GREATER_THAN_OR_EQUAL,h=i===R.LESS_THAN_OR_EQUAL,u=t.type===O.DECIMAL2,f=u?"0.01":"1",p=u?"0.00":"0",g=a?"":((w=s.values)==null?void 0:w[0])||"",v=a?"":((I=s.values)==null?void 0:I[1])||"",b=l||c||h,_=l||c||h?this.t("min","Min"):this.t("value","Value"),$=this.t("max","Max");return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((F=s.values)!=null&&F.length)&&!s.operator}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <ap-radio-group
            columns="2"
            .options=${this._tNumberOperatorOptions}
            .value=${i}
            ?disabled=${o}
            @ap-change=${C=>this._onOperatorChange(t,C.detail.value)}
          ></ap-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${r}
            @ap-change=${C=>this._onContentModeChange(t,C.detail.value)}
          ></ap-radio-group>
        </div>

        ${r===ut?n.html`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${h?"true":n.nothing}>${_}</span>
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
                  ${b?n.html`
                        <div>
                          <span class="input-label" aria-disabled=${c?"true":n.nothing}>${$}</span>
                          <input
                            class="filter-input"
                            type="number"
                            step=${f}
                            placeholder=${p}
                            .value=${v}
                            ?disabled=${c}
                            @change=${C=>this._onNumberInput(t,C,1)}
                          />
                        </div>
                      `:n.nothing}
                </div>
              </div>
            `:n.nothing}
      </div>
    `}_renderBooleanFilter(t){var i,a;const e=this._getApplied(N(t)),s=((i=e.values)==null?void 0:i[0])||"";return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("value","Value")}</span>
          <ap-radio-group
            clearable
            .options=${this._tBooleanOptions}
            .value=${s}
            @ap-change=${r=>this._onBooleanSelect(t,r.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||Ze[0].value,l=(this._selectSearches[e]||"").toLowerCase(),c=l.length>0,h=a.length>0||i,u=l?r.filter(p=>p.label.toLowerCase().includes(l)):r,f=a.length>=vs;return n.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${c?n.html`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        ${c?n.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:n.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  @ap-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>{const g=r.find(v=>v.api_value===p);return n.html`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button class="chip-remove" @click=${()=>this._onSelectOneToggle(t,p)}>
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
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(p=>{var g;return n.html`
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
            ${u.length===0?n.html`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:u.map(p=>{const g=a.includes(p.api_value),v=!g&&f;return n.html`
                    <div
                      class="option-item ${v?"disabled":""}"
                      @click=${()=>!v&&this._onSelectOneToggle(t,p.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=t.possible_values||[],o=s.operator||Ws[0].value,l=(this._selectSearches[e]||"").toLowerCase(),c=l.length>0,h=a.length>0||i,u=l?r.filter(p=>p.label.toLowerCase().includes(l)):r,f=a.length>=vs;return n.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchOptionsPlaceholder","Search options")}
            .value=${this._selectSearches[e]||""}
            @input=${p=>{this._selectSearches={...this._selectSearches,[e]:p.target.value}}}
          />
          ${c?n.html`
                <button class="search-clear" @click=${()=>{this._selectSearches={...this._selectSearches,[e]:""}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        ${c?n.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!h&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:n.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("operator","Operator")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!h&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${o}
                  @ap-change=${p=>this._onOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>{const g=r.find(v=>v.api_value===p);return n.html`
                            <div class="chip">
                              <span class="chip-label">${(g==null?void 0:g.label)||p}</span>
                              <button class="chip-remove" @click=${()=>this._onMultiSelectToggle(t,p)}>
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
          <span class="section-label">${this.t("allOptions","All options")}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(p=>{var g;return n.html`
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
            ${u.length===0?n.html`<div class="no-results">${this.t("noOptionsFound","No options found")}</div>`:u.map(p=>{const g=a.includes(p.api_value),v=!g&&f;return n.html`
                    <div
                      class="option-item ${v?"disabled":""}"
                      @click=${()=>!v&&this._onMultiSelectToggle(t,p.api_value)}
                    >
                      <ap-checkbox ?checked=${g}></ap-checkbox>
                      <span>${p.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(t){const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=i?[]:s.values||[],r=this._tagInputs[e]||"",o=s.operator||Ze[0].value,l=a.length>0||i,c=this._tagSuggestions[e]||[],h=this._tagLoading[e]||!1,u=r.trim().length>0,f=a.length>=vs;return n.html`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t("searchTagsPlaceholder","Search tags")}
            .value=${r}
            @input=${p=>this._onTagInput(t,e,p)}
            @keydown=${p=>this._onTagKeydown(t,p)}
          />
          ${u?n.html`
                <button class="search-clear" @click=${()=>{this._tagInputs={...this._tagInputs,[e]:""},this._tagSuggestions={...this._tagSuggestions,[e]:[]}}}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        ${u?n.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!l&&!s.operator}
                  @click=${()=>this._clearFieldFilter(t)}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:n.html`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("condition","Condition")}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!l&&!s.operator}
                    @click=${()=>this._clearFieldFilter(t)}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
                <ap-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${o}
                  ?disabled=${i}
                  @ap-change=${p=>this._onTagOperatorChange(t,p.detail.value)}
                ></ap-radio-group>
              </div>

              <!-- Selected chips -->
              ${a.length>0?n.html`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t("selected","Selected")}</span>
                        <button
                          class="clear-btn"
                          @click=${()=>this._clearFieldFilter(t)}
                        >${this.t("clearAll","Clear all")}</button>
                      </div>
                      <div class="chips-wrap">
                        ${a.map(p=>n.html`
                            <div class="chip">
                              <span class="chip-label">${p}</span>
                              <button class="chip-remove" @click=${()=>this._removeTag(t,p)}>
                                <ap-icon name="close" .size=${10}></ap-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:n.nothing}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">${this.t("allOptions","All options")}</span>
                <div class="options-list short">
                  ${this._tEmptyOptions.map(p=>{var g;return n.html`
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
        ${u?n.html`
              <div class="filter-section">
                <div class="options-list">
                  ${h?n.html`<div class="option-item disabled"><span>${this.t("loading","Loading...")}</span></div>`:c.length>0?c.map(p=>{const g=a.includes(p),v=!g&&f;return n.html`
                              <div
                                class="option-item ${v?"disabled":""}"
                                @click=${()=>!v&&(g?this._removeTag(t,p):this._selectTagSuggestion(t,p))}
                              >
                                <ap-checkbox ?checked=${g}></ap-checkbox>
                                <span>${p}</span>
                              </div>
                            `}):n.html`<div class="option-item disabled"><span>${this.t("noResults","No results")}</span></div>`}
                </div>
              </div>
            `:n.nothing}
      </div>
    `}_renderDateFilter(t){var u,f;const e=N(t),s=this._datePresets[e]||"",i=this._getApplied(e),r=this._isSpecialValue(i.values)?((u=i.values)==null?void 0:u[0])||"":s,o=[{value:"empty",label:"Empty"},{value:"non-empty",label:"Not empty"}],l=this._dateFroms[e]?new Date(this._dateFroms[e]).toISOString().split("T")[0]:"",c=this._dateTos[e]?new Date(this._dateTos[e]).toISOString().split("T")[0]:"",h=["before","after","between"].includes(r);return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!r&&!((f=i.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${o}
            .value=${r==="empty"||r==="non-empty"?r:""}
            @ap-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></ap-radio-group>

          <div class="separator"></div>

          <ap-radio-group
            clearable
            columns="2"
            .options=${fi.map(p=>({...p,label:this.t(p.labelKey,p.label)}))}
            .value=${r!=="empty"&&r!=="non-empty"?r:""}
            @ap-change=${p=>this._onDatePreset(t,p.detail.value)}
          ></ap-radio-group>
        </div>

        ${h?n.html`
              <div class="filter-section">
                <div class="grid-2">
                  ${r==="before"?n.html`
                        <div>
                          <span class="input-label">${this.t("endDate","End date")}</span>
                          <input
                            type="date"
                            class="filter-input"
                            .value=${c}
                            @change=${p=>this._onDateInput(t,"to",p)}
                          />
                        </div>
                      `:r==="after"?n.html`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                        `:n.html`
                          <div>
                            <span class="input-label">${this.t("startDate","Start date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${l}
                              @change=${p=>this._onDateInput(t,"from",p)}
                            />
                          </div>
                          <div>
                            <span class="input-label">${this.t("endDate","End date")}</span>
                            <input
                              type="date"
                              class="filter-input"
                              .value=${c}
                              @change=${p=>this._onDateInput(t,"to",p)}
                            />
                          </div>
                        `}
                </div>
              </div>
            `:n.nothing}
      </div>
    `}_renderGeoFilter(t){var u,f;const e=N(t),s=this._getApplied(e),i=this._isSpecialValue(s.values),a=this._getContentMode(e);let r="",o="";if(!i&&((u=s.values)!=null&&u[0])){const p=s.values[0],[g,v]=p.split("..");r=g||"",o=v||""}const l=r.length>0,c=r.split(",").map(p=>p.trim()),h=!l||c.length===2&&c.every(p=>!isNaN(Number(p))&&p!=="");return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((f=s.values)!=null&&f.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("content","Content")}</span>
          <ap-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${a}
            @ap-change=${p=>this._onContentModeChange(t,p.detail.value)}
          ></ap-radio-group>
        </div>

        ${a===ut?n.html`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t("location","Location")}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t("latLngPlaceholder","Latitude, longitude")}
                      .value=${r}
                      @change=${p=>this._onGeoLocationInput(t,p)}
                    />
                    ${l&&!h?n.html`<div class="error-text">${this.t("geoCoordinatesError",'Enter coordinates as "latitude, longitude"')}</div>`:n.nothing}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t("maxRadius","Max radius")} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${e}
                      .value=${o}
                      @change=${p=>this._onGeoRadiusInput(t,p)}
                    />
                  </div>
                </div>
              </div>
            `:n.nothing}
      </div>
    `}_renderAttachmentFilter(t){var i,a;const e=this._getApplied(N(t)),s=((i=e.values)==null?void 0:i[0])||"";return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!((a=e.values)!=null&&a.length)}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <ap-radio-group
            clearable
            .options=${this._tEmptyOptions}
            .value=${s}
            @ap-change=${r=>this._onEmptyOption(t,r.detail.value)}
          ></ap-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(t){const e=N(t),s=this._getApplied(e),i=s.values||[],a=s.operator||R.IS;return n.html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${i.length===0}
          @click=${()=>this._clearFieldFilter(t)}
        >${this.t("clearAll","Clear all")}</button>

        <div class="filter-section">
          <span class="section-label">${this.t("condition","Condition")}</span>
          <ap-radio-group
            direction="horizontal"
            .options=${Ze}
            .value=${a}
            @ap-change=${r=>this._emitFilterChange(t,r.detail.value,i)}
          ></ap-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t("searchFacesPlaceholder","Search faces")}
            .value=${i.join(", ")}
            @change=${r=>{const l=r.target.value.split(",").map(c=>c.trim()).filter(Boolean);this._emitFilterChange(t,a,l)}}
          />
        </div>
      </div>
    `}_renderFieldControl(t){switch(this._getUIType(t)){case"text":return this._renderTextFilter(t);case"number":return this._renderNumberFilter(t);case"boolean":return this._renderBooleanFilter(t);case"select-one":return this._renderSelectOneFilter(t);case"multi-select":return this._renderMultiSelectFilter(t);case"tags":return this._renderTagsFilter(t);case"date":return this._renderDateFilter(t);case"geo":return this._renderGeoFilter(t);case"attachment":return t.type===O.INTEGER_LIST&&t.slug==="face_matcher"?this._renderFaceMatcherFilter(t):this._renderAttachmentFilter(t);default:return n.nothing}}_renderFieldSection(t){const e=this._getField(t);if(!e)return n.nothing;const s=this._collapsedFields.has(t);return n.html`
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
            <ap-icon name=${xs[e.type]||"file-text"} .size=${14} ${z({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
            <span>${e.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${i=>{i.stopPropagation(),this._removeField(e)}}
              title=${this.t("removeField","Remove field")}
            >
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${s?"collapsed":""}">
          ${this._renderFieldControl(e)}
        </div>
      </div>
    `}_renderSelectorMode(){const t=this._fieldSearch.toLowerCase(),e=this.fields.filter(a=>a.label.toLowerCase().includes(t)),s=this._getGroupedFields(e),i=(a,r)=>r.length===0?n.nothing:n.html`
        <div class="field-group-label">${a}</div>
        ${r.map(o=>{const l=N(o),c=this.visibleFields.includes(l),h=!!this.appliedMetadata[l]||!!this.appliedFilters[l],u=this.pinnedFields.includes(l),f=!c&&this._atFieldLimit;return n.html`
            <div
              class="field-item ${h?"has-filter":""} ${f?"disabled":""}"
              @click=${()=>!f&&this._emitFieldSelect(o)}
            >
              <ap-icon name=${xs[o.type]||"file-text"} .size=${14} ${z({color:"var(--ap-muted-foreground, oklch(0.685 0.033 249.82))"})}></ap-icon>
              <span class="field-item-label">${o.label}</span>
              <button
                class="field-item-pin ${u?"pinned":""}"
                @click=${p=>{p.stopPropagation(),this._emitPin(l,!u)}}
                title=${u?this.t("unpinField","Unpin field"):this.t("pinField","Pin field")}
              >
                <ap-icon name="pin" .size=${12}></ap-icon>
              </button>
              ${h?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:n.nothing}
            </div>
          `})}
      `;return n.html`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t("searchFieldsPlaceholder","Search fields")}
            .value=${this._fieldSearch}
            @input=${a=>{this._fieldSearch=a.target.value}}
          />
        </div>
        <div class="field-list">
          ${e.length===0?n.html`<div class="empty-msg">${this.t("noFieldsFound","No fields found")}</div>`:n.html`${[...s.entries()].map(([a,r])=>i(a,r))}`}
        </div>
      </div>
    `}_renderFieldMode(){const t=this._getField(this.activeFieldKey);return t?this._renderFieldControl(t):n.html`<div class="empty-msg">${this.t("fieldNotFound","Field not found")}</div>`}render(){if(this.mode==="selector")return this._renderSelectorMode();if(this.mode==="field")return this._renderFieldMode();const t=this.visibleFields.length>0;return n.html`
      ${this._showFieldSelection||!t?this._renderFieldSelection():n.nothing}

      ${t?n.html`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?n.html`
                  <button
                    class="add-field-btn"
                    @click=${this._openFieldSelection}
                  >
                    <ap-icon name="filter" .size=${14}></ap-icon>
                    ${this.t("addField","Add field")}
                  </button>
                `:n.nothing}
          `:n.nothing}
    `}};H.styles=[pe,We,n.css`
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
      margin-top: 8px;
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
  `];Y([d.property({type:Array})],H.prototype,"fields",2);Y([d.property({type:Object})],H.prototype,"appliedFilters",2);Y([d.property({type:Array})],H.prototype,"visibleFields",2);Y([d.property()],H.prototype,"mode",2);Y([d.property()],H.prototype,"activeFieldKey",2);Y([d.property({type:Array})],H.prototype,"pinnedFields",2);Y([d.property({type:Object})],H.prototype,"appliedMetadata",2);Y([d.property({attribute:!1})],H.prototype,"apiClient",2);Y([d.property({attribute:!1})],H.prototype,"t",2);Y([d.state()],H.prototype,"_showFieldSelection",2);Y([d.state()],H.prototype,"_fieldSearch",2);Y([d.state()],H.prototype,"_collapsedFields",2);Y([d.state()],H.prototype,"_tagInputs",2);Y([d.state()],H.prototype,"_tagSuggestions",2);Y([d.state()],H.prototype,"_tagLoading",2);Y([d.state()],H.prototype,"_datePresets",2);Y([d.state()],H.prototype,"_dateFroms",2);Y([d.state()],H.prototype,"_dateTos",2);Y([d.state()],H.prototype,"_specificModeFields",2);Y([d.state()],H.prototype,"_selectSearches",2);H=Y([d.customElement("ap-filter-metadata")],H);var cl=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,ne=(t,e,s,i)=>{for(var a=i>1?void 0:i?dl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&cl(e,s,a),a};let Z=class extends n.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.selectedStatus=[],this.statusOperator=":=",this.approverValues=[],this.approverOperator=R.IS_EXACT,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=R.IS_EXACT,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset="",this.dueDateFrom="",this.dueDateTo="",this._approverSearch="",this._requesterSearch=""}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(t=>t===$e||t===ke)}get _dueDateNeedsInputs(){return["before","after","between","specific"].includes(this.dueDatePreset)}get _showApproverSection(){return this.approverUsers.length>0}get _showRequesterSection(){return this.requesterUsers.length>0}_toggleStatus(t){const e=this.selectedStatus.includes(t)?this.selectedStatus.filter(s=>s!==t):[...this.selectedStatus,t];this._emitChange(M.STATUS,e,this.statusOperator)}_handleStatusOperator(t){const e=t.detail.value;this._emitChange(M.STATUS,this.selectedStatus,e)}_clearStatus(){this._emitChange(M.STATUS,[],this.statusOperator)}_toggleApprover(t){const e=this.approverValues.includes(t)?this.approverValues.filter(s=>s!==t):[...this.approverValues,t];this._emitChange(M.APPROVER,e,this.approverOperator)}_handleApproverOperator(t){const e=t.detail.value;this._emitChange(M.APPROVER,this.approverValues,e)}_clearApprover(){this._emitChange(M.APPROVER,[],this.approverOperator)}_onApproverSearchInput(t){this._approverSearch=t.target.value}_clearApproverSearch(){this._approverSearch=""}_toggleRequester(t){const e=this.requesterValues.includes(t)?this.requesterValues.filter(s=>s!==t):[...this.requesterValues,t];this._emitChange(M.REQUESTOR,e,this.requesterOperator)}_handleRequesterOperator(t){const e=t.detail.value;this._emitChange(M.REQUESTOR,this.requesterValues,e)}_clearRequester(){this._emitChange(M.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(t){this._requesterSearch=t.target.value}_clearRequesterSearch(){this._requesterSearch=""}_kindFromDuedateValue(t){return t===Te.BEFORE||t===Te.AFTER||t===Te.BETWEEN||t===Te.SPECIFIC?t:Te.PRESET}_handleDueDatePreset(t){const e=t.detail.value;if(!e||this.dueDatePreset===e){this._clearDueDate();return}const s=this._kindFromDuedateValue(e);let i="",a="";if(s===Te.PRESET){const r=gi(e);r&&(i=r.from,a=r.to??"")}this._emitDuedate({kind:s,preset:e,from:i,to:a})}_handleDueDateFrom(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:e,to:this.dueDateTo})}_handleDueDateTo(t){const e=t.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:e})}_clearDueDate(){this._emitDuedate({kind:null,preset:"",from:"",to:""})}_emitDuedate(t){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:M.DUE_DATE,values:{field:M.DUE_DATE,kind:t.kind,preset:t.preset||null,from:t.from,to:t.to}},bubbles:!0,composed:!0}))}_emitChange(t,e,s){this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:t,values:e,operator:s},bubbles:!0,composed:!0}))}_filterUsers(t,e){const s=e.trim().toLowerCase();return s?t.filter(i=>{var a;return i.name.toLowerCase().includes(s)||(((a=i.email)==null?void 0:a.toLowerCase().includes(s))??!1)}):t}_getInitials(t){const e=t.name||t.email||"";if(!e)return"?";const s=e.split(/\s+/).filter(Boolean);return s.length===0?"?":s.length===1?s[0].slice(0,2).toUpperCase():(s[0][0]+s[s.length-1][0]).toUpperCase()}_renderStatusSection(){const t=this.selectedStatus.length>0;return n.html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearStatus}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("approvalStatus","Status")}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${ta.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${Ts.map(e=>n.html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >${this.t(e.labelKey,e.label)}</ap-checkbox>
            `)}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${Do.map(e=>n.html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @ap-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <ap-icon name=${e.icon} .size=${16} ${z({color:e.iconColor})}></ap-icon>
                  ${this.t(e.labelKey,e.label)}
                </span>
              </ap-checkbox>
            `)}
        </div>
      </div>
    `}_renderUserItem(t,e,s){return n.html`
      <div class="user-item" @click=${s}>
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="user-avatar">
          ${t.avatarUrl?n.html`<img src=${t.avatarUrl} alt="" />`:n.html`<span>${this._getInitials(t)}</span>`}
        </span>
        <span class="user-text">
          <span class="user-name">${t.name}</span>
          ${t.email?n.html`<span class="user-email">${t.email}</span>`:n.nothing}
        </span>
      </div>
    `}_renderUserSelectedChips(t,e,s){return e.length===0?n.nothing:n.html`
      <div class="chips-wrap">
        ${e.map(i=>{const a=t.find(r=>r.uuid===i);return a?n.html`
            <div class="chip">
              <span class="user-chip-avatar">
                ${a.avatarUrl?n.html`<img src=${a.avatarUrl} alt="" />`:n.html`<span>${this._getInitials(a)}</span>`}
              </span>
              <span class="chip-label">${a.name}</span>
              <button class="chip-remove" @click=${()=>s(i)}>
                <ap-icon name="close" .size=${10}></ap-icon>
              </button>
            </div>
          `:n.nothing})}
      </div>
    `}_renderUserPickerSection(t){const e=t.selectedValues.length>0,s=this._filterUsers(t.users,t.search);return n.html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!e}
          @click=${t.onClear}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${t.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t("condition","Condition")}</span>
        <ap-radio-group
          direction="horizontal"
          .options=${ta.map(i=>({...i,label:this.t(i.labelKey,i.label)}))}
          .value=${t.operator}
          @ap-change=${t.onOperatorChange}
        ></ap-radio-group>

        ${this._renderUserSelectedChips(t.users,t.selectedValues,t.onToggle)}

        <div class="search-wrapper mt-12">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${t.searchPlaceholder}
            .value=${t.search}
            @input=${t.onSearchInput}
          />
          ${t.search?n.html`
                <button class="search-clear" @click=${t.onSearchClear}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        <div class="options-list users-list">
          ${s.length===0?n.html`<div class="no-results">${this.t("noUsersFound","No users found")}</div>`:s.map(i=>this._renderUserItem(i,t.selectedValues.includes(i.uuid),()=>t.onToggle(i.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t("approver","Approver"),searchPlaceholder:this.t("searchApproverPlaceholder","Search approvers"),users:this.approverUsers,selectedValues:this.approverValues,operator:this.approverOperator,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:t=>this._handleApproverOperator(t),onSearchInput:t=>this._onApproverSearchInput(t),onSearchClear:()=>this._clearApproverSearch(),onToggle:t=>this._toggleApprover(t)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t("requester","Requester"),searchPlaceholder:this.t("searchRequesterPlaceholder","Search requesters"),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this.requesterOperator,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:t=>this._handleRequesterOperator(t),onSearchInput:t=>this._onRequesterSearchInput(t),onSearchClear:()=>this._clearRequesterSearch(),onToggle:t=>this._toggleRequester(t)})}_renderDueDateSection(){const t=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return n.html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!t}
          @click=${this._clearDueDate}
        >${this.t("clearAll","Clear all")}</button>

        <span class="section-label">${this.t("dueDate","Due date")}</span>

        <!-- Empty / Not empty radio buttons -->
        <ap-radio-group
          clearable
          .options=${Ts.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===$e||this.dueDatePreset===ke?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          clearable
          columns="2"
          .options=${Fa.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==$e&&this.dueDatePreset!==ke?this.dueDatePreset:""}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?n.html`
            <div class="grid-2 mt-12">
              ${this.dueDatePreset!=="before"?n.html`
                  <div class="date-input-col">
                    <span class="input-label">${this.t("startDate","Start date")}</span>
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
                    <span class="input-label">${this.t("endDate","End date")}</span>
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
        ${this._showApproverSection?n.html`<div class="separator"></div>${this._renderApproverSection()}`:n.nothing}
        ${this._showRequesterSection?n.html`<div class="separator"></div>${this._renderRequesterSection()}`:n.nothing}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `}};Z.styles=[pe,We,n.css`
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
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }
    .user-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-email {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .user-chip-avatar {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      overflow: hidden;
      font-size: 0.625rem;
      font-weight: 500;
    }
    .user-chip-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `];ne([d.property({attribute:!1})],Z.prototype,"t",2);ne([d.property({type:Array})],Z.prototype,"selectedStatus",2);ne([d.property()],Z.prototype,"statusOperator",2);ne([d.property({type:Array})],Z.prototype,"approverValues",2);ne([d.property()],Z.prototype,"approverOperator",2);ne([d.property({type:Array})],Z.prototype,"approverUsers",2);ne([d.property({type:Array})],Z.prototype,"requesterValues",2);ne([d.property()],Z.prototype,"requesterOperator",2);ne([d.property({type:Array})],Z.prototype,"requesterUsers",2);ne([d.property()],Z.prototype,"dueDateKind",2);ne([d.property()],Z.prototype,"dueDatePreset",2);ne([d.property()],Z.prototype,"dueDateFrom",2);ne([d.property()],Z.prototype,"dueDateTo",2);ne([d.state()],Z.prototype,"_approverSearch",2);ne([d.state()],Z.prototype,"_requesterSearch",2);Z=ne([d.customElement("ap-filter-approval")],Z);var pl=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,Ie=(t,e,s,i)=>{for(var a=i>1?void 0:i?hl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&pl(e,s,a),a};const ul=300;function fl(t){return t.filter(e=>e.toLowerCase().includes("*")||!t.some(s=>s.toLowerCase().includes("*")&&e.toLowerCase().startsWith(s.slice(0,-1).toLowerCase())))}let Se=class extends n.LitElement{constructor(){super(...arguments),this.selected=[],this.t=(t,e)=>typeof e=="string"?e:t,this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=""}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var t;return(t=this._searchInput)==null?void 0:t.focus()})}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(t){const e=fl(t);this.dispatchEvent(new CustomEvent("filter-change",{detail:{key:k.PRODUCT_REF,values:e,operator:R.IS},bubbles:!0,composed:!0}))}_toggle(t){const s=this.selected.includes(t)?this.selected.filter(i=>i!==t):[...this.selected,t];this._emit(s)}_remove(t){this._emit(this.selected.filter(e=>e!==t))}_clearAll(){this._emit([]),this._search="",this._debouncedSearch="",this._products=[]}_onSearchInput(t){const e=t.target.value;this._search=e,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{const s=e.trim().toLowerCase();this._debouncedSearch=s,s?this._fetchProducts(s):(this._products=[],this._isLoading=!1)},ul)}_clearSearch(){this._search="",this._debouncedSearch="",this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(t){if(this.apiClient){this._isLoading=!0;try{const e=await this.apiClient.request("/products",{q:`reference~^${t}`});this._debouncedSearch===t&&(this._products=e.products??[])}catch{this._debouncedSearch===t&&(this._products=[])}finally{this._debouncedSearch===t&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=""}_closeAddList(){this._showAddList=!1,this._addListText=""}_onAddListInput(t){this._addListText=t.target.value}_onAddListKeydown(t){t.key==="Enter"&&!t.shiftKey&&t.stopPropagation()}_submitAddList(){const t=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!=="");if(t.length>0){const e=new Set(this.selected),s=[...this.selected,...t.filter(i=>!e.has(i))];this._emit(s)}this._closeAddList()}_renderProductItem(t){const e=this.selected.includes(t);return n.html`
      <div
        class="product-item"
        @click=${()=>this._toggle(t)}
      >
        <ap-checkbox ?checked=${e}></ap-checkbox>
        <span class="product-name">${t}</span>
      </div>
    `}render(){const t=this.selected.length===0;return n.html`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="product-search"
            type="text"
            .placeholder=${this.t("searchProductRefsPlaceholder","Search product references")}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?n.html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `:n.nothing}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!t?n.html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  @click=${this._clearAll}
                >${this.t("clearAll","Clear all")}</button>
              </div>
            `:n.nothing}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?n.html`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t("selected","Selected")}</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >${this.t("clearAll","Clear all")}</button>
                </div>
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

        <!-- Search results -->
        ${this._isSearching?n.html`
              <div class="filter-section">
                <span class="section-label">${this.t("productReferences","Product references")}</span>
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):n.nothing}
                  ${this._products.map(({ref:e})=>this._renderProductItem(e))}
                </div>
              </div>
            `:n.nothing}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?n.nothing:n.html`
              <div class="placeholder">
                ${t?n.html`<ap-icon name="box" .size=${40} ${z({color:"var(--ap-border, oklch(92.86% 0.009 247.92))","margin-bottom":"4px"})}></ap-icon>`:n.nothing}
                <div class="placeholder-title">${this.t("findProductRef","Find product reference")}</div>
                <div class="placeholder-text">${this.t("productRefSearchHint","By using the search or pressing the button below to import the product references list.")}</div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <ap-icon name="plus" .size=${14}></ap-icon>
                  ${this.t("addList","Add list")}
                </button>
              </div>
            `}

        <!-- Loading skeleton -->
        ${this._isLoading?n.html`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:n.nothing}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?n.html`<div class="no-results">${this.t("noResultsFound","No results found")}</div>`:n.nothing}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?n.html`
            <div class="dialog-overlay" @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}>
              <div class="dialog">
                <div class="dialog-header">${this.t("addProductRefsList","Add products references list")}</div>
                <div class="dialog-body">
                  <div class="info-alert" ${z({"margin-top":"0"})}>
                    <ap-icon name="info" .size=${14}></ap-icon>
                    <span>${this.t("wildcardInfo",'Use "*" to select all references starting with your text.')}</span>
                  </div>
                  <label class="input-label" ${z({"margin-bottom":"0","font-weight":"400",color:"var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89))"})}>${this.t("productReferences","Product references")}</label>
                  <textarea
                    class="dialog-textarea"
                    .placeholder=${this.t("productRefsTextareaPlaceholder","Enter product references separated by new lines")}
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>${this.t("cancel","Cancel")}</button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>${this.t("continue","Continue")}</button>
                </div>
              </div>
            </div>
          `:n.nothing}
    `}};Se.styles=[pe,We,n.css`
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
  `];Ie([d.property({type:Array})],Se.prototype,"selected",2);Ie([d.property({attribute:!1})],Se.prototype,"apiClient",2);Ie([d.property({attribute:!1})],Se.prototype,"t",2);Ie([d.query(".product-search")],Se.prototype,"_searchInput",2);Ie([d.state()],Se.prototype,"_search",2);Ie([d.state()],Se.prototype,"_debouncedSearch",2);Ie([d.state()],Se.prototype,"_products",2);Ie([d.state()],Se.prototype,"_isLoading",2);Ie([d.state()],Se.prototype,"_showAddList",2);Ie([d.state()],Se.prototype,"_addListText",2);Se=Ie([d.customElement("ap-filter-product-ref")],Se);var gl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,q=(t,e,s,i)=>{for(var a=i>1?void 0:i?ml(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&gl(e,s,a),a};let K=class extends n.LitElement{constructor(){super(...arguments),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel="",this.sortBy="created_at",this.sortDirection="desc",this.sortOptions=mi,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],visible:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.approverUsers=[],this.requesterUsers=[],this.t=(t,e)=>typeof e=="string"?e:t,this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=t=>{const e=t.composedPath();if(this._externalTrigger&&e.some(r=>{var o;return r instanceof HTMLElement&&r.classList.contains("chip")&&((o=r.closest)==null?void 0:o.call(r,"ap-filters-bar"))}))return;const s=this._openFilter&&e.some(a=>a instanceof HTMLElement?a.classList.contains("popover-anchor")||a.classList.contains("popover-panel"):!1),i=(this._showDropdown||this._showMetadataSelector)&&e.some(a=>a instanceof HTMLElement&&(a.classList.contains("dropdown-menu")||a.classList.contains("filter-dropdown")||a.classList.contains("metadata-selector-overlay")));s||i||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1))}}connectedCallback(){super.connectedCallback(),document.addEventListener("mousedown",this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._outsideClickHandler)}updated(t){if((t.has("_openFilter")||t.has("_externalTrigger")||t.has("_openMetadataField"))&&this.dispatchEvent(new CustomEvent("filter-panel-change",{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(t.has("_openFilter")||t.has("_externalLeft")||t.has("_openMetadataField"))){const e=this.renderRoot.querySelector(".popover-panel");if(e){const s=e.closest(".popover-anchor"),i=s?s.offsetWidth:this.offsetWidth,a=e.offsetWidth;this._externalLeft+a>i-8&&(e.style.left=`${Math.max(8,i-a-8)}px`)}}}_closeAllDropdowns(){var t;this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,(t=this._sortDropdown)==null||t.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-click",{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent("create-folder-click",{bubbles:!0,composed:!0}))}_toggleDropdown(){const t=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!t}_toggleMetadataSelector(){this._showMetadataSelector=!this._showMetadataSelector}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openFilter===t&&!this._openMetadataField){this.closeFilterPanel();return}const a=t==="approval"&&this._isApprovalActive();if(!e&&!this._isFilterActive(t)&&!a){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent("filter-pending",{detail:{key:t},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=t,this._openMetadataField=null,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(t){this.dispatchEvent(new CustomEvent("sort-change",{detail:t.detail,bubbles:!0,composed:!0}))}_toggleSortDirection(){const t=this.sortDirection==="asc"?"desc":"asc";this.dispatchEvent(new CustomEvent("sort-direction-change",{detail:{value:t},bubbles:!0,composed:!0}))}_isFilterActive(t){return t in this.filters.applied&&this.filters.applied[t]!==void 0}_isApprovalActive(){const t=this.filters.applied;return M.STATUS in t||M.APPROVER in t||M.REQUESTOR in t||M.DUE_DATE in t}_handleFilterChange(t){t.stopPropagation();const{key:e,values:s,operator:i}=t.detail;this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:e,values:s,operator:i},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-filter-change",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-field-toggle",{detail:t.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(t){t.stopPropagation(),this._openMetadataField=t.detail.fieldKey}_handleMetadataSelectorFieldSelect(t){var s;t.stopPropagation();const e=t.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(e in(((s=this.filters.metadata)==null?void 0:s.applied)||{}))){this.dispatchEvent(new CustomEvent("filter-pending",{detail:{metadataFieldKey:e},bubbles:!0,composed:!0}));return}this._openFilter="metadata",this._openMetadataField=e}_handleMetadataPin(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("metadata-pin",{detail:t.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(t,e=!1,s,i){if(e&&this._externalTrigger&&this._openMetadataField===t){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter="metadata",this._openMetadataField=t,this._externalTrigger=e,this._externalLeft=s??null,this._externalTop=i??null}_getMetadataFieldLabel(t){for(const e of this.metadataFields)if(`${Ns[e.type]||""}${e.key}`===t)return e.label;return t}_togglePin(t,e){e.stopPropagation();const s=this.pinnedFilters.includes(t);this.dispatchEvent(new CustomEvent("filter-pin",{detail:{key:t,pinned:!s},bubbles:!0,composed:!0}))}_getFilterIcon(t){const e=Xt.find(s=>s.key===t);return(e==null?void 0:e.icon)||"filter"}_renderFilterContent(t){var r;const{t:e}=this,s=this.filters.applied,i=t;switch(i===M.STATUS||i===M.APPROVER||i===M.REQUESTOR||i===M.DUE_DATE?"approval":t){case"type":{const o=s.type;return n.html`<ap-filter-type
          .selected=${(o==null?void 0:o.values)||[]}
          .fileTypes=${this.fileTypes}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case"tags":{const o=s.tags;return n.html`<ap-filter-tags
          .tags=${this.tags}
          .selected=${(o==null?void 0:o.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case"labels":{const o=s.labels;return n.html`<ap-filter-labels
          .labels=${this.labels}
          .selected=${(o==null?void 0:o.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case"color":{const o=s.color;return n.html`<ap-filter-color
          .values=${(o==null?void 0:o.values)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case"date":{const o=s.date;return n.html`<ap-filter-date
          .filterKey=${"date"}
          .field=${(o==null?void 0:o.field)||"created"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"asset_expiration":{const o=s.asset_expiration;return n.html`<ap-filter-date
          .filterKey=${"asset_expiration"}
          .field=${"asset_expiration"}
          .kind=${(o==null?void 0:o.kind)||null}
          .from=${(o==null?void 0:o.from)||""}
          .to=${(o==null?void 0:o.to)||""}
          .preset=${(o==null?void 0:o.preset)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case"size":{const o=s.size,l=((r=o==null?void 0:o.values)==null?void 0:r[0])||"",[c,h]=l.split(".."),u=c?parseFloat(c)/1e6:0,f=h?parseFloat(h)/1e6:0;return n.html`<ap-filter-size
          .min=${u}
          .max=${f}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case"image":{const o=s.image,l=o&&"resolution"in o?o:null;return n.html`<ap-filter-image
          .selectedResolution=${(l==null?void 0:l.resolution)||[]}
          .selectedOrientation=${(l==null?void 0:l.orientation)||[]}
          .selectedFaces=${(l==null?void 0:l.faces)||[]}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case"approval":{const o=s.approval_status,l=s.task_approver,c=s.task_requester,h=s.task_duedate;return n.html`<ap-filter-approval
          .selectedStatus=${(o==null?void 0:o.values)||[]}
          .statusOperator=${(o==null?void 0:o.operator)||":="}
          .approverValues=${(l==null?void 0:l.values)||[]}
          .approverOperator=${(l==null?void 0:l.operator)||":="}
          .approverUsers=${this.approverUsers}
          .requesterValues=${(c==null?void 0:c.values)||[]}
          .requesterOperator=${(c==null?void 0:c.operator)||":="}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${(h==null?void 0:h.kind)??null}
          .dueDatePreset=${(h==null?void 0:h.preset)||""}
          .dueDateFrom=${(h==null?void 0:h.from)||""}
          .dueDateTo=${(h==null?void 0:h.to)||""}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case"metadata":return this._openMetadataField?n.html`<ap-filter-metadata
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
          ></ap-filter-metadata>`:n.html`<ap-filter-metadata
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
        ></ap-filter-metadata>`;case"product_ref":{const o=s.product_ref;return n.html`<ap-filter-product-ref
          .selected=${(o==null?void 0:o.values)||[]}
          .apiClient=${this.apiClient}
          .t=${e}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return n.nothing}}_renderFilterButton(t){const{t:e}=this,s=t.key==="metadata",i=t.key==="approval",a=s?Object.keys(this.filters.metadata.applied).length>0:i?this._isApprovalActive():this._isFilterActive(t.key),r=this.pinnedFilters.includes(t.key),o=n.html`
      <button
        class="filter-btn ${a?"active":""} ${r?"pinned":""}"
        @click=${()=>s?this._toggleMetadataSelector():this.openFilterPanel(t.key)}
      >
        <span class="filter-btn-icon">
          <ap-icon name=${t.icon} .size=${18}></ap-icon>
        </span>
        <span class="filter-btn-label">
          ${e(t.labelKey,t.label)}
        </span>
        ${s?n.html`<span class="submenu-chevron"><ap-icon name="chevron-right" .size=${14}></ap-icon></span>`:n.html`
              <span
                class="pin-btn ${r?"pinned":""}"
                title=${r?e("unpinFilter","Unpin filter"):e("pinFilter","Pin filter")}
                @click=${l=>this._togglePin(t.key,l)}
              >
                <ap-icon name="pin" .size=${14}></ap-icon>
              </span>
            `}
      </button>
    `;return s?n.html`
      <div class="filter-btn-wrapper">
        ${o}
        ${this._showMetadataSelector?n.html`
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
        `:n.nothing}
      </div>
    `:o}render(){const{t}=this,e=Object.keys(this.filters.applied).length+Object.keys(this.filters.metadata.applied).length;return n.html`
      <div class="toolbar-row">
        ${this.isLoading?n.html`<span class="count-skeleton"></span>`:n.html`<span class="count">${this.countLabel||[this.totalFolderCount>0?t("folderCount",{count:this.totalFolderCount,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):"",this.totalCount>0||this.totalFolderCount===0?t("assetCount",{count:this.totalCount,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"}):""].filter(Boolean).join(", ")}</span>`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters?n.html`
          <div class="filter-dropdown">
            <button class="add-btn ${this._showDropdown?"open":""}" @click=${this._toggleDropdown}>
              <ap-icon name="filter" .size=${16}></ap-icon>
              ${t("filters","Filters")}
              ${e>0?n.html`<span class="filter-count">${e}</span>`:n.html`<ap-icon name="chevron-down" .size=${16}></ap-icon>`}
            </button>
            ${this._showDropdown?n.html`
              <div class="dropdown-menu">
                ${Xt.filter(s=>!this.forcedFilterKeys.includes(s.key)).map(s=>this._renderFilterButton(s))}
              </div>
            `:n.nothing}
          </div>
          `:n.nothing}
          <ap-dropdown
            variant="borderless"
            .label=${t("sort","Sort")}
            .value=${this.sortBy}
            .options=${this.sortOptions.map(s=>({...s,label:t(s.labelKey,s.label)}))}
            @ap-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></ap-dropdown>
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${this.sortDirection==="asc"?t("sortAscending","Sort ascending"):t("sortDescending","Sort descending")}
            title=${this.sortDirection==="asc"?t("ascending","Ascending"):t("descending","Descending")}
          >
            <ap-icon name=${this.sortDirection==="asc"?"sort-asc":"sort-desc"} .size=${18}></ap-icon>
          </button>
          ${this.showCreateFolder?n.html`
            <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
              <ap-icon name="folder-plus" .size=${16}></ap-icon>
              New folder
            </button>
          `:n.nothing}
          ${this.showUpload?n.html`
            <button class="upload-btn" @click=${this._handleUploadClick}>
              <ap-icon name="upload" .size=${16}></ap-icon>
              ${t("upload","Upload")}
            </button>
          `:n.nothing}
        </div>
      </div>
      ${this._openFilter?n.html`
        <div class="popover-anchor ${this._externalTrigger?"external":""}" ${z(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}>
          ${this._externalTrigger?n.nothing:n.html`
            <div class="anchor-tab">
              ${this._openFilter==="metadata"&&this._openMetadataField?n.html`
                    <button class="anchor-back" @click=${s=>{s.stopPropagation(),this._openMetadataField=null}} title="Back to fields">
                      <ap-icon name="chevron-left" .size=${14}></ap-icon>
                    </button>
                    ${this._getMetadataFieldLabel(this._openMetadataField)}
                  `:n.html`
                    <ap-icon name=${this._getFilterIcon(this._openFilter)} .size=${16}></ap-icon>
                    ${t(Ht[this._openFilter]??this._openFilter,Ot[this._openFilter]||this._openFilter)}
                  `}
              <button class="anchor-close" @click=${()=>{this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}} title="Close">
                <ap-icon name="close" .size=${14}></ap-icon>
              </button>
            </div>
          `}
          <div class="popover-panel" ${z(this._externalTrigger&&this._externalLeft!=null?{left:`${this._externalLeft}px`}:null)}>
            ${this._renderFilterContent(this._openFilter)}
          </div>
        </div>
      `:n.nothing}
    `}};K.styles=n.css`
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
      text-align: left;
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

    .new-folder-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
      padding: 6px 14px;
      border: 1px solid var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      white-space: nowrap;
      transition: background 150ms;
    }
    .new-folder-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }
    .new-folder-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
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
  `;q([d.property({type:Number})],K.prototype,"totalCount",2);q([d.property({type:Number})],K.prototype,"totalFolderCount",2);q([d.property({type:Boolean})],K.prototype,"isLoading",2);q([d.property({type:Boolean})],K.prototype,"showUpload",2);q([d.property({type:Boolean})],K.prototype,"showCreateFolder",2);q([d.property({type:Boolean})],K.prototype,"showFilters",2);q([d.property()],K.prototype,"countLabel",2);q([d.property()],K.prototype,"sortBy",2);q([d.property()],K.prototype,"sortDirection",2);q([d.property({type:Array})],K.prototype,"sortOptions",2);q([d.property({type:Object})],K.prototype,"filters",2);q([d.property({type:Array})],K.prototype,"labels",2);q([d.property({type:Array})],K.prototype,"tags",2);q([d.property({type:Array})],K.prototype,"fileTypes",2);q([d.property({type:Array})],K.prototype,"metadataFields",2);q([d.property({type:Array})],K.prototype,"pinnedFilters",2);q([d.property({type:Array})],K.prototype,"forcedFilterKeys",2);q([d.property({type:Array})],K.prototype,"approverUsers",2);q([d.property({type:Array})],K.prototype,"requesterUsers",2);q([d.property({attribute:!1})],K.prototype,"apiClient",2);q([d.property({attribute:!1})],K.prototype,"t",2);q([d.query("ap-dropdown")],K.prototype,"_sortDropdown",2);q([d.state()],K.prototype,"_showDropdown",2);q([d.state()],K.prototype,"_showMetadataSelector",2);q([d.state()],K.prototype,"_openFilter",2);q([d.state()],K.prototype,"_openMetadataField",2);q([d.state()],K.prototype,"_externalTrigger",2);q([d.state()],K.prototype,"_externalLeft",2);q([d.state()],K.prototype,"_externalTop",2);K=q([d.customElement("ap-content-toolbar")],K);var vl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,le=(t,e,s,i)=>{for(var a=i>1?void 0:i?bl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&vl(e,s,a),a};let ee=class extends n.LitElement{constructor(){super(...arguments),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(t,e)=>typeof e=="string"?e:t}_mapTypeLabel(t){var i;const e=(i=Os.find(a=>a.value===t))==null?void 0:i.label;if(e)return e;const s=t.indexOf("_");return s!==-1?t.slice(s+1).toUpperCase():t}_getSizeSummary(t){if(t.values.length===0)return"";const e=t.values[0],[s,i]=e.split(".."),a=s?parseFloat(s):null,r=i?parseFloat(i):null,o=l=>l>=1e3?`${(l/1e3).toFixed(l%1e3===0?0:1)} GB`:`${l} MB`;return a!==null&&r!==null?`${o(a)} – ${o(r)}`:a!==null?`> ${o(a)}`:r!==null?`< ${o(r)}`:""}_getFilterSummary(t,e){if(t.type==="string"){const s=t;if(s.values.length===0)return"";if(e===k.SIZE)return this._getSizeSummary(s);if(e===k.COLOR){const r=s.values.map(o=>o.split(" ")[0]).filter(Boolean);return r.length===0?"":r.length===1?r[0]:`${r[0]} +${r.length-1}`}const i=r=>r===$e?this.t("empty","Empty"):r===ke?this.t("notEmpty","Not empty"):null,a=e===k.TYPE?r=>i(r)??this._mapTypeLabel(r):e===k.TAGS?r=>{var o;return i(r)??(((o=this.tags.find(l=>l.sid===r))==null?void 0:o.label)||r)}:e===k.LABELS?r=>{var o;return i(r)??(((o=this.labels.find(l=>l.sid===r))==null?void 0:o.name)||r)}:e===M.APPROVER?r=>{var o;return i(r)??(((o=this.approverUsers.find(l=>l.uuid===r))==null?void 0:o.name)||r)}:e===M.REQUESTOR?r=>{var o;return i(r)??(((o=this.requesterUsers.find(l=>l.uuid===r))==null?void 0:o.name)||r)}:r=>i(r)??r;return s.values.length===1?a(s.values[0]):`${a(s.values[0])} +${s.values.length-1}`}if(t.type==="date")return e===M.DUE_DATE?this._getDuedateSummary(t):this._getDateSummary(t);if(typeof t=="object"&&"resolution"in t){const s=t,i=[...s.resolution,...s.orientation,...s.faces];return i.length===0?"":i.length===1?i[0]:`${i[0]} +${i.length-1}`}return""}_getDuedateSummary(t){const e=i=>i.split("T")[0],s=t.preset||"";if(s===$e)return this.t("empty","Empty");if(s===ke)return this.t("notEmpty","Not empty");if(t.kind==="preset"){const i=Fa.find(a=>a.value===s);return i?this.t(i.labelKey,i.label):s}if(t.kind==="between"){if(t.from&&t.to)return`${e(t.from)} – ${e(t.to)}`;if(t.from)return`${this.t("afterDate","After date")}: ${e(t.from)}`;if(t.to)return`${this.t("beforeDate","Before date")}: ${e(t.to)}`}return t.kind==="after"&&t.from?`${this.t("afterDate","After date")}: ${e(t.from)}`:t.kind==="before"&&t.to?`${this.t("beforeDate","Before date")}: ${e(t.to)}`:t.kind==="specific"&&t.from?e(t.from):""}_getDateSummary(t){const e=Ca.find(c=>c.value===t.field),s=e?this.t(e.labelKey,e.label):"",i=[...fi,...Aa],a=t.preset?i.find(c=>c.value===t.preset):null,r=a?this.t(a.labelKey,a.label):t.preset||"",o=c=>{try{return c.split("T")[0]}catch{return c}};let l="";switch(t.kind){case"preset":l=r;break;case"before":l=t.to?`${this.t("beforeDate","Before date")}: ${o(t.to)}`:r;break;case"after":l=t.from?`${this.t("afterDate","After date")}: ${o(t.from)}`:r;break;case"between":t.from&&t.to?l=`${o(t.from)} – ${o(t.to)}`:t.from?l=`${this.t("afterDate","After date")}: ${o(t.from)}`:t.to&&(l=`${this.t("beforeDate","Before date")}: ${o(t.to)}`);break;case"specific":l=t.from?o(t.from):"";break;default:l=r}return l?s?`${s}: ${l}`:l:""}_getFilterIcon(t){var e,s;return t===M.STATUS||t===M.APPROVER||t===M.REQUESTOR||t===M.DUE_DATE?((e=Xt.find(i=>i.key===k.APPROVAL))==null?void 0:e.icon)||"filter":((s=Xt.find(i=>i.key===t))==null?void 0:s.icon)||"filter"}_getMetadataLabel(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return(s==null?void 0:s.label)||e}_getMetadataIcon(t){const e=this._stripMetadataPrefix(t),s=this.metadataFields.find(i=>i.key===e);return s&&xs[s.type]||"file-text"}_stripMetadataPrefix(t){for(const e of wa)if(t.startsWith(e))return t.slice(e.length);return t}_removeFilter(t){this.dispatchEvent(new CustomEvent("filter-remove",{detail:{key:t},bubbles:!0,composed:!0}))}_removeMetadataFilter(t){this.dispatchEvent(new CustomEvent("metadata-filter-remove",{detail:{fieldKey:t},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent("filters-clear-all",{bubbles:!0,composed:!0}))}_openFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("filter-open",{detail:{key:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(t,e){const i=e.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent("metadata-filter-open",{detail:{fieldKey:t,chipRect:{left:i.left,right:i.right,bottom:i.bottom,width:i.width}},bubbles:!0,composed:!0}))}_renderForcedChip(t,e){const{t:s}=this,i=this._getFilterSummary(e,t),a=e.type==="date";return n.html`
      <span class="chip forced">
        ${(a||t===k.TYPE||t===k.SIZE)&&i?n.html`<span class="chip-label">${i}</span>`:n.html`
              <span class="chip-label">${s(Ht[t]??t,Ot[t]||t)}</span>
              ${i?n.html`<span class="chip-summary">${i}</span>`:n.nothing}
            `}
        <span class="chip-lock">
          <ap-icon name="lock" .size=${12}></ap-icon>
        </span>
      </span>
    `}_renderFilterChip(t,e){const{t:s}=this;if(!e)return n.html`
        <span class="chip pinned-empty ${t===this.activeFilter?"active":""}" @click=${r=>this._openFilter(t,r)}>
          <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
          <span class="chip-label">${s(Ht[t]??t,Ot[t]||t)}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `;const i=this._getFilterSummary(e,t),a=e.type==="date";return n.html`
      <span class="chip ${t===this.activeFilter?"active":""}" @click=${r=>this._openFilter(t,r)}>
        ${(a||t===k.TYPE||t===k.SIZE)&&i?n.html`
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(t)} .size=${16}></ap-icon></span>
              <span class="chip-label">${i}</span>`:n.html`
              <span class="chip-label">${s(Ht[t]??t,Ot[t]||t)}</span>
              ${i?n.html`<span class="chip-summary">${i}</span>`:n.nothing}
            `}
        <button class="chip-remove" @click=${r=>{r.stopPropagation(),this._removeFilter(t)}} title=${s("removeFilter","Remove filter")}>
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}_renderMetadataChip(t,e){if(!e){const r=this._getMetadataLabel(t),o=this._getMetadataIcon(t);return n.html`
        <span class="chip pinned-empty ${t===this.activeMetadataField?"active":""}" @click=${l=>this._openMetadataFilter(t,l)}>
          <span class="chip-icon"><ap-icon name=${o} .size=${16}></ap-icon></span>
          <span class="chip-label">${r}</span>
          <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
        </span>
      `}const s=this._getFilterSummary(e),i=this._getMetadataLabel(t),a=this._getMetadataIcon(t);return n.html`
      <span class="chip ${t===this.activeMetadataField?"active":""}" @click=${r=>this._openMetadataFilter(t,r)}>
        <span class="chip-icon"><ap-icon name=${a} .size=${16}></ap-icon></span>
        <span class="chip-label">${i}</span>
        ${s?n.html`<span class="chip-summary">${s}</span>`:n.nothing}
        <button class="chip-remove" @click=${r=>{r.stopPropagation(),this._removeMetadataFilter(t)}} title=${this.t("removeFilter","Remove filter")}>
          <ap-icon name="close" .size=${12}></ap-icon>
        </button>
      </span>
    `}render(){const t=ci(this.forcedFilters),e=new Set(Object.keys(t)),s=Object.keys(this.appliedFilters).filter(g=>!e.has(g)),i=Object.keys(this.appliedMetadata),a=new Set(this.pinnedFilters),r=new Set(this.pinnedMetadataFields),o=this.pinnedFilters.filter(g=>!e.has(g)),l=s.filter(g=>!a.has(g)),c=i.filter(g=>!r.has(g)),h=this.pendingFilter&&!a.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),u=this.pendingMetadataField&&!r.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),f=s.length+i.length>0;return e.size+o.length+this.pinnedMetadataFields.length+l.length+c.length+(h?1:0)+(u?1:0)===0?n.nothing:n.html`
      <div class="chips-row">
        <div class="chips">
          ${[...e].map(g=>this._renderForcedChip(g,t[g]))}
          ${o.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${this.pinnedMetadataFields.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${l.map(g=>this._renderFilterChip(g,this.appliedFilters[g]))}
          ${h?n.html`
            <span class="chip pinned-empty active pending" @click=${g=>this._openFilter(this.pendingFilter,g)}>
              <span class="chip-icon"><ap-icon name=${this._getFilterIcon(this.pendingFilter)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this.t(Ht[this.pendingFilter]??this.pendingFilter,Ot[this.pendingFilter]||this.pendingFilter)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:n.nothing}
          ${c.map(g=>this._renderMetadataChip(g,this.appliedMetadata[g]))}
          ${u?n.html`
            <span class="chip pinned-empty active pending" @click=${g=>this._openMetadataFilter(this.pendingMetadataField,g)}>
              <span class="chip-icon"><ap-icon name=${this._getMetadataIcon(this.pendingMetadataField)} .size=${16}></ap-icon></span>
              <span class="chip-label">${this._getMetadataLabel(this.pendingMetadataField)}</span>
              <span class="chip-chevron"><ap-icon name="chevron-down" .size=${14}></ap-icon></span>
            </span>
          `:n.nothing}
          ${f?n.html`<button class="clear-all" @click=${this._clearAll}>${this.t("clearFilters","Clear filters")}</button>`:n.nothing}
        </div>
      </div>
    `}};ee.styles=n.css`
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
  `;le([d.property({type:Object})],ee.prototype,"appliedFilters",2);le([d.property({type:Object})],ee.prototype,"appliedMetadata",2);le([d.property({type:Object})],ee.prototype,"forcedFilters",2);le([d.property({type:Array})],ee.prototype,"metadataFields",2);le([d.property({type:Array})],ee.prototype,"pinnedFilters",2);le([d.property({type:Array})],ee.prototype,"pinnedMetadataFields",2);le([d.property({type:Array})],ee.prototype,"tags",2);le([d.property({type:Array})],ee.prototype,"labels",2);le([d.property({type:Array})],ee.prototype,"approverUsers",2);le([d.property({type:Array})],ee.prototype,"requesterUsers",2);le([d.property()],ee.prototype,"activeFilter",2);le([d.property()],ee.prototype,"activeMetadataField",2);le([d.property()],ee.prototype,"pendingFilter",2);le([d.property()],ee.prototype,"pendingMetadataField",2);le([d.property({attribute:!1})],ee.prototype,"t",2);ee=le([d.customElement("ap-filters-bar")],ee);var yl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,Ce=(t,e,s,i)=>{for(var a=i>1?void 0:i?_l(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&yl(e,s,a),a};const xl=6;let de=class extends n.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize="normal",this._prevCount=0}willUpdate(t){if(t.has("assets")){const e=t.get("assets");e&&this.assets.length>e.length?this._prevCount=e.length:this._prevCount=0}}render(){const t=this.gridSize==="large"?"280px":"220px";return n.html`
      <div class="grid" role="list" aria-label="Assets" ${z({"--ap-grid-min-col":String(t)})}>
        ${this.folders.map((e,s)=>n.html`
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
        ${this.assets.map((e,s)=>{const i=s>=this._prevCount?Math.min(s-this._prevCount,20):Math.min(s,20);return n.html`
              <ap-asset-card
                .asset=${e}
                .t=${this.t}
                .index=${this.folderSelectable?this.folders.length+s:s}
                ?selected=${this.selectedIds.includes(e.uuid)}
                ?disabled=${this.disabledAssetIds.includes(e.uuid)}
                .multiSelect=${this.multiSelect}
                ${z({"--ap-stagger-index":String(i)})}
                data-asset-uuid=${e.uuid}
                @asset-select=${a=>this.dispatchEvent(new CustomEvent("asset-select",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-preview=${a=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:a.detail,bubbles:!0,composed:!0}))}
                @asset-quick-select=${a=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:a.detail,bubbles:!0,composed:!0}))}
              ></ap-asset-card>
            `})}
        ${this.isLoading?Array.from({length:xl},()=>n.html`<div class="ghost-card">
                <div class="ghost-thumb"></div>
                <div class="ghost-info">
                  <div class="ghost-line ghost-name"></div>
                  <div class="ghost-line ghost-meta"></div>
                </div>
              </div>`):n.nothing}
      </div>
    `}};de.styles=n.css`
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
  `;Ce([d.property({attribute:!1})],de.prototype,"t",2);Ce([d.property({type:Array})],de.prototype,"assets",2);Ce([d.property({type:Array})],de.prototype,"folders",2);Ce([d.property({type:Object})],de.prototype,"folderPreviews",2);Ce([d.property({type:Array})],de.prototype,"selectedIds",2);Ce([d.property({type:Array})],de.prototype,"selectedFolderIds",2);Ce([d.property({type:Array})],de.prototype,"disabledAssetIds",2);Ce([d.property({type:Array})],de.prototype,"disabledFolderIds",2);Ce([d.property({type:Boolean})],de.prototype,"isLoading",2);Ce([d.property({type:Boolean})],de.prototype,"multiSelect",2);Ce([d.property({type:Boolean})],de.prototype,"folderSelectable",2);Ce([d.property({type:String})],de.prototype,"gridSize",2);de=Ce([d.customElement("ap-grid-view")],de);var wl=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,ue=(t,e,s,i)=>{for(var a=i>1?void 0:i?$l(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&wl(e,s,a),a};const kl=5;let se=class extends n.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this._compactLevel=0}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(t=>{var i;const e=((i=t[0])==null?void 0:i.contentRect.width)??0,s=e<550?2:e<680?1:0;s!==this._compactLevel&&(this._compactLevel=s)}),this._resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._resizeObserver)==null||t.disconnect()}_getGridColumns(t){const e=[];return t&&e.push("32px"),e.push("48px"),e.push("minmax(120px, 1fr)"),e.push("72px"),this._compactLevel<2&&e.push("100px"),this._compactLevel<1&&e.push("120px"),e.push("64px"),e.join(" ")}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;const t=new Set(this.selectedIds),e=this.assets.length===0||this.assets.every(a=>t.has(a.uuid));if(!this.folderSelectable)return e&&this.assets.length>0;const s=new Set(this.selectedFolderIds),i=this.folders.length===0||this.folders.every(a=>s.has(a.uuid));return e&&i}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&e>=t?this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:"all"},bubbles:!0,composed:!0}))}render(){const t=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,e=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,s=this._allVisibleSelected&&e>=t;return n.html`
      <div class="list-header" ${z({"grid-template-columns":this._getGridColumns(this.multiSelect)})} role="row" aria-label="Column headers">
        ${this.multiSelect?n.html`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div class="header-check-box ${s?"checked":e>0?"indeterminate":""}">
                <svg class="header-check-icon check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg class="header-check-icon dash" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>`:n.nothing}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        ${this._compactLevel<2?n.html`<span>${this.t("size","Size")}</span>`:n.nothing}
        ${this._compactLevel<1?n.html`<span>${this.t("date","Date")}</span>`:n.nothing}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map((i,a)=>n.html`
            <ap-folder-row
              .folder=${i}
              .previews=${this.folderPreviews[i.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(i.uuid)}
              ?disabled=${this.disabledFolderIds.includes(i.uuid)}
              .index=${a}
              data-folder-uuid=${i.uuid}
              @folder-open=${r=>{r.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-open",{detail:r.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${r=>{r.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:r.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((i,a)=>n.html`
            <ap-asset-row
              .asset=${i}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+a:a}
              ?selected=${this.selectedIds.includes(i.uuid)}
              ?disabled=${this.disabledAssetIds.includes(i.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${i.uuid}
              @asset-select=${r=>this.dispatchEvent(new CustomEvent("asset-select",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${r=>this.dispatchEvent(new CustomEvent("asset-preview",{detail:r.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${r=>this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:r.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:kl},(i,a)=>{const r=["70%","55%","80%","45%","65%"];return n.html`
                <div class="ghost-row" ${z({"grid-template-columns":this._getGridColumns(this.multiSelect)})}>
                  ${this.multiSelect?n.html`<div class="ghost-el ghost-check"></div>`:n.nothing}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${z({width:r[a]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?n.html`<div class="ghost-el ghost-size"></div>`:n.nothing}
                  ${this._compactLevel<1?n.html`<div class="ghost-el ghost-date"></div>`:n.nothing}
                  <div></div>
                </div>
              `}):n.nothing}
      </div>
    `}};se.styles=n.css`
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
  `;ue([d.property({attribute:!1})],se.prototype,"t",2);ue([d.property({type:Array})],se.prototype,"assets",2);ue([d.property({type:Array})],se.prototype,"folders",2);ue([d.property({type:Array})],se.prototype,"selectedIds",2);ue([d.property({type:Array})],se.prototype,"selectedFolderIds",2);ue([d.property({type:Array})],se.prototype,"disabledAssetIds",2);ue([d.property({type:Array})],se.prototype,"disabledFolderIds",2);ue([d.property({type:Boolean})],se.prototype,"isLoading",2);ue([d.property({type:Boolean})],se.prototype,"multiSelect",2);ue([d.property({type:Boolean})],se.prototype,"folderSelectable",2);ue([d.property({type:Number})],se.prototype,"totalCount",2);ue([d.property({type:Boolean})],se.prototype,"isSelectingAll",2);ue([d.property({type:Object})],se.prototype,"folderPreviews",2);ue([d.state()],se.prototype,"_compactLevel",2);se=ue([d.customElement("ap-list-view")],se);function _i(t){if(t===0)return"0 B";const e=["B","KB","MB","GB","TB"],s=1024,i=Math.floor(Math.log(t)/Math.log(s));return`${(t/Math.pow(s,i)).toFixed(i===0?0:1)} ${e[i]}`}function Ls(t){if(!t)return"—";const e=new Date(t);return isNaN(e.getTime())?"—":e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}function Ma(t,e){return!t||!e?"":`${t} x ${e}`}var Sl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,kt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Cl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Sl(e,s,a),a};let Qe=class extends n.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0}_handleSelect(t){if(t.stopPropagation(),t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),i=Math.floor(t%60),a=r=>String(r).padStart(2,"0");return e>0?`${e}:${a(s)}:${a(i)}`:`${a(s)}:${a(i)}`}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var h,u,f,p,g,v,b,_;const t=this.asset;if(!t)return n.html``;const s=Tt(t.type)==="video",i=((h=t.extension)==null?void 0:h.toLowerCase())==="pdf",a=!!((u=t.info)!=null&&u.thumbnail||(f=t.info)!=null&&f.image_thumbnail||(p=t.info)!=null&&p.preview),r=ba(t.extension||"")||a;let o="";s?o=_a(t):i?o=hi(t):r&&(o=Es(t));const l=cs(t.extension||""),c=pi(t.extension||"");return n.html`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${c&&o?"chess":""}">
          ${o?n.html`<img
                src=${o}
                alt=${t.name}
                loading="lazy"
                class="thumb-img ${c?"transparent-asset":""}"
                @error=${$=>{const w=$.target,I=Pt();w.src!==l&&w.src!==I?(w.src=l,w.classList.add("icon-fallback")):w.src!==I&&(w.src=I)}}
              />`:n.html`<img
                src=${l}
                alt=${t.name}
                class="thumb-img icon-fallback"
                @error=${$=>{const w=$.target,I=Pt();w.src!==I&&(w.src=I)}}
              />`}
          ${s&&(((g=t.info)==null?void 0:g.video_duration)??((v=t.info)==null?void 0:v.duration))!=null?n.html`<span class="duration">${this._formatDuration(t.info.video_duration??t.info.duration)}</span>`:n.nothing}
          <div class="overlay">
            <button class="overlay-btn" @click=${this._handlePreview} aria-label=${this.t("preview","Preview")}>
              <ap-icon name="preview" .size=${16}></ap-icon>
              ${this.t("preview","Preview")}
            </button>
            <button class="overlay-btn select-btn" @click=${this._handleQuickSelect} aria-label=${this.t("select","Select")}>
              <ap-icon name="select" .size=${16}></ap-icon>
              ${this.t("select","Select")}
            </button>
          </div>
          ${this.multiSelect?n.html`
            <div class="check">
              <div class="check-box">
                <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
            </div>
          `:n.nothing}
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="meta">${(b=t.extension)==null?void 0:b.toUpperCase()}${(()=>{var F,C,U,S;const $=((F=t.info)==null?void 0:F.img_w)||((C=t.info)==null?void 0:C.video_w),w=((U=t.info)==null?void 0:U.img_h)||((S=t.info)==null?void 0:S.video_h),I=Ma($,w);return I?` · ${I}`:""})()} · ${_i(((_=t.size)==null?void 0:_.bytes)||0)}</div>
        </div>
      </div>
    `}};Qe.styles=n.css`
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
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
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
  `;kt([d.property({attribute:!1})],Qe.prototype,"t",2);kt([d.property({type:Object})],Qe.prototype,"asset",2);kt([d.property({type:Number})],Qe.prototype,"index",2);kt([d.property({type:Boolean,reflect:!0})],Qe.prototype,"selected",2);kt([d.property({type:Boolean,reflect:!0})],Qe.prototype,"disabled",2);kt([d.property({type:Boolean})],Qe.prototype,"multiSelect",2);Qe=kt([d.customElement("ap-asset-card")],Qe);var Al=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,ot=(t,e,s,i)=>{for(var a=i>1?void 0:i?Fl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Al(e,s,a),a};let je=class extends n.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_handleSelect(t){if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:this.index,event:t},bubbles:!0}))}_handlePreview(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-preview",{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0}))}render(){var h,u,f,p,g,v;const t=this.asset;if(!t)return n.html``;const s=Tt(t.type)==="video",i=((h=t.extension)==null?void 0:h.toLowerCase())==="pdf",a=!!((u=t.info)!=null&&u.thumbnail||(f=t.info)!=null&&f.image_thumbnail||(p=t.info)!=null&&p.preview),r=ba(t.extension||"")||a;let o="";s?o=_a(t):i?o=hi(t):r&&(o=Es(t));const l=cs(t.extension||""),c=pi(t.extension||"");return n.html`
      <div class="row" ${z({"grid-template-columns":this._getGridColumns()})} @click=${this._handleSelect}>
        ${this.multiSelect?n.html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:n.nothing}
        <div class="thumb ${c&&o?"chess":""}">
          ${o?n.html`<img
                src=${o}
                alt=${t.name}
                class="${c?"transparent-asset":""}"
                loading="lazy"
                @error=${b=>{const _=b.target,$=Pt();_.src!==l&&_.src!==$?(_.src=l,_.classList.add("icon-fallback")):_.src!==$&&(_.src=$)}}
              />`:n.html`<img
                src=${l}
                alt=${t.name}
                class="icon-fallback"
                @error=${b=>{const _=b.target,$=Pt();_.src!==$&&(_.src=$)}}
              />`}
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="type">${(g=t.extension)==null?void 0:g.toUpperCase()}</div>
        ${this.compactLevel<2?n.html`<div class="desc">${_i(((v=t.size)==null?void 0:v.bytes)||0)}</div>`:n.nothing}
        ${this.compactLevel<1?n.html`<div class="date">${Ls(t.created_at||"")}</div>`:n.nothing}
        <div class="actions">
          <button class="icon-btn select-btn" @click=${this._handleQuickSelect} aria-label=${this.t("select","Select")} title=${this.t("select","Select")}>
            <ap-icon name="select" .size=${16}></ap-icon>
          </button>
          <button class="icon-btn" @click=${this._handlePreview} aria-label=${this.t("preview","Preview")} title=${this.t("preview","Preview")}>
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `}};je.styles=n.css`
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
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    :host([disabled]) .check-icon {
      display: block;
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
  `;ot([d.property({attribute:!1})],je.prototype,"t",2);ot([d.property({type:Object})],je.prototype,"asset",2);ot([d.property({type:Number})],je.prototype,"index",2);ot([d.property({type:Boolean,reflect:!0})],je.prototype,"selected",2);ot([d.property({type:Boolean,reflect:!0})],je.prototype,"disabled",2);ot([d.property({type:Boolean})],je.prototype,"multiSelect",2);ot([d.property({type:Number})],je.prototype,"compactLevel",2);je=ot([d.customElement("ap-asset-row")],je);var El=Object.defineProperty,Ol=Object.getOwnPropertyDescriptor,nt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ol(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&El(e,s,a),a};let Ne=class extends n.LitElement{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(t){return xa(t,"200")}_renderPreviewImg(t){const e=ya(t.file_type),s=this._getPreviewUrl(t),i=cs(js(t.file_type)),a=Pt();return n.html`<div class="preview-slot ${e?"icon-bg":""}">
      <img
        class="preview-img ${e?"icon-mode":""}"
        src="${s||i}"
        alt=""
        loading="lazy"
        @error=${r=>{const o=r.target,l=o.parentElement;o.src!==i&&o.src!==a?(o.src=i,o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg")):o.src!==a&&(o.src=a,o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
        @load=${r=>{const o=r.target,l=o.parentElement;o.src.includes("assets/file-types")&&(o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return n.html`<div class="empty-preview"><ap-icon name="inbox" .size=${64}></ap-icon></div>`;const t=this.previews.slice(0,3);return t.length===1?n.html`<div class="preview-left">${this._renderPreviewImg(t[0])}</div>`:n.html`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(t[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(t[1])}</div>
          ${t[2]?n.html`<div class="preview-right-item">${this._renderPreviewImg(t[2])}</div>`:n.nothing}
        </div>
      </div>
    `}render(){var a,r;const t=this.folder;if(!t)return n.html``;const e=((a=t.count)==null?void 0:a.files_direct)??0,i=(((r=t.count)==null?void 0:r.files_recursive)??0)-e;return n.html`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                rx="3" ry="3" />
        </svg>
        ${this.selectable&&this.multiSelect?n.html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        `:n.nothing}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${t.name}>${t.name}</div>
            <div class="counts">
              <span>${e} asset${e!==1?"s":""}</span>
              ${i>0?n.html`<span>${i} sub-asset${i!==1?"s":""}</span>`:n.nothing}
            </div>
          </div>
        </div>
      </div>
    `}};Ne.styles=[pe,n.css`
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
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
  `];nt([d.property({type:Object})],Ne.prototype,"folder",2);nt([d.property({type:Array})],Ne.prototype,"previews",2);nt([d.property({type:Boolean,reflect:!0})],Ne.prototype,"selected",2);nt([d.property({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);nt([d.property({type:Boolean})],Ne.prototype,"selectable",2);nt([d.property({type:Boolean})],Ne.prototype,"multiSelect",2);nt([d.property({type:Number})],Ne.prototype,"index",2);Ne=nt([d.customElement("ap-folder-card")],Ne);var Tl=Object.defineProperty,Ll=Object.getOwnPropertyDescriptor,Xe=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ll(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Tl(e,s,a),a};let Le=class extends n.LitElement{constructor(){super(...arguments),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}_getGridColumns(){const t=[];return this.multiSelect&&t.push("32px"),t.push("48px"),t.push("minmax(120px, 1fr)"),t.push("72px"),this.compactLevel<2&&t.push("100px"),this.compactLevel<1&&t.push("120px"),t.push("64px"),t.join(" ")}_renderPreviewImg(t){const e=ya(t.file_type),s=xa(t,"80"),i=cs(js(t.file_type)),a=Pt();return n.html`<div class="preview-slot ${e?"icon-bg":""}"><img
      class="preview-img ${e?"icon-mode":""}"
      src="${s||i}"
      alt=""
      loading="lazy"
      @error=${r=>{const o=r.target,l=o.parentElement;o.src!==i&&o.src!==a?(o.src=i,o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg")):o.src!==a&&(o.src=a,o.classList.add("icon-mode"),l==null||l.classList.add("icon-bg"))}}
    /></div>`}_renderThumb(){const t=n.html`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
              />
      </svg>
    `,e=this.previews.slice(0,2);return n.html`
      ${t}
      <div class="preview-area">
        ${e.length>0?e.map(s=>this._renderPreviewImg(s)):n.html`<div class="empty-preview">
              <ap-icon name="inbox" .size=${14}></ap-icon>
            </div>`}
      </div>
    `}_handleClick(t){if(!this.selectable){this._handleOpen();return}if(t.composedPath().some(i=>i instanceof HTMLElement&&(i.classList.contains("check")||i.classList.contains("check-box")))){t.stopPropagation(),this.dispatchEvent(new CustomEvent("folder-select",{detail:{folder:this.folder,index:this.index,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0,shiftKey:t.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent("folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){var e,s;const t=this.folder;return t?n.html`
      <div class="row" ${z({"grid-template-columns":this._getGridColumns()})} @click=${this._handleClick}>
        ${this.multiSelect?this.selectable?n.html`
              <div class="check">
                <div class="check-box">
                  <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
              </div>`:n.html`<div></div>`:n.nothing}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${t.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?n.html`<div class="meta">${((e=t.count)==null?void 0:e.files_recursive)??((s=t.count)==null?void 0:s.files_direct)??0} items</div>`:n.nothing}
        ${this.compactLevel<1?n.html`<div class="meta">${Ls(t.modified_at||t.updated_at||"")}</div>`:n.nothing}
        <div></div>
      </div>
    `:n.html``}};Le.styles=n.css`
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
    :host([disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([disabled]) .check-box {
      background: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
  `;Xe([d.property({type:Object})],Le.prototype,"folder",2);Xe([d.property({type:Array})],Le.prototype,"previews",2);Xe([d.property({type:Boolean,reflect:!0})],Le.prototype,"selected",2);Xe([d.property({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);Xe([d.property({type:Boolean})],Le.prototype,"selectable",2);Xe([d.property({type:Boolean})],Le.prototype,"multiSelect",2);Xe([d.property({type:Number})],Le.prototype,"index",2);Xe([d.property({type:Number})],Le.prototype,"compactLevel",2);Le=Xe([d.customElement("ap-folder-row")],Le);var Pl=Object.defineProperty,Il=Object.getOwnPropertyDescriptor,xi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Il(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Pl(e,s,a),a};let ts=class extends n.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return n.html``;const e=t.assets_count??0,s=t.color||"#94a3b8";return n.html`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper" ${z({background:`color-mix(in srgb, ${s} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${18} ${z({color:s})}></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${t.name}>${t.name}</div>
          <div class="count">${e} asset${e!==1?"s":""}</div>
        </div>
      </div>
    `}};ts.styles=[pe,n.css`
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
  `];xi([d.property({type:Object})],ts.prototype,"label",2);xi([d.property({type:Number})],ts.prototype,"index",2);ts=xi([d.customElement("ap-label-card")],ts);var Ml=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,wi=(t,e,s,i)=>{for(var a=i>1?void 0:i?Dl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ml(e,s,a),a};let ss=class extends n.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("label-open",{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){const t=this.label;if(!t)return n.html``;const e=t.assets_count??0,s=t.color||"#94a3b8";return n.html`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper" ${z({background:`color-mix(in srgb, ${s} 10%, transparent)`})}>
          <ap-icon name="tag" .size=${16} ${z({color:s})}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="count">${e} asset${e!==1?"s":""}</div>
      </div>
    `}};ss.styles=n.css`
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
  `;wi([d.property({type:Object})],ss.prototype,"label",2);wi([d.property({type:Number})],ss.prototype,"index",2);ss=wi([d.customElement("ap-label-row")],ss);var Rl=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,$i=(t,e,s,i)=>{for(var a=i>1?void 0:i?zl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Rl(e,s,a),a};let is=class extends n.LitElement{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?n.html`
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
    `:n.html``}};is.styles=[pe,n.css`
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
  `];$i([d.property({type:Object})],is.prototype,"collection",2);$i([d.property({type:Number})],is.prototype,"index",2);is=$i([d.customElement("ap-collection-card")],is);var jl=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,ki=(t,e,s,i)=>{for(var a=i>1?void 0:i?Nl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&jl(e,s,a),a};let as=class extends n.LitElement{constructor(){super(...arguments),this.index=0}_formatDate(t){if(!t)return"";try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return""}}_handleClick(){this.dispatchEvent(new CustomEvent("collection-open",{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){const t=this.collection;return t?n.html`
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
    `:n.html``}};as.styles=n.css`
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
  `;ki([d.property({type:Object})],as.prototype,"collection",2);ki([d.property({type:Number})],as.prototype,"index",2);as=ki([d.customElement("ap-collection-row")],as);var Ul=Object.defineProperty,Kl=Object.getOwnPropertyDescriptor,Si=(t,e,s,i)=>{for(var a=i>1?void 0:i?Kl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Ul(e,s,a),a};let rs=class extends n.LitElement{constructor(){super(...arguments),this.index=0}connectedCallback(){super.connectedCallback(),this.style.setProperty("--ap-stagger-index",String(this.index))}updated(t){t.has("index")&&this.style.setProperty("--ap-stagger-index",String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?n.html`
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
    `:n.html``}};rs.styles=[pe,n.css`
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
  `];Si([d.property({type:Object})],rs.prototype,"folder",2);Si([d.property({type:Number})],rs.prototype,"index",2);rs=Si([d.customElement("ap-collection-folder-card")],rs);var Bl=Object.defineProperty,ql=Object.getOwnPropertyDescriptor,Ci=(t,e,s,i)=>{for(var a=i>1?void 0:i?ql(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Bl(e,s,a),a};let os=class extends n.LitElement{constructor(){super(...arguments),this.index=0}_handleClick(){this.dispatchEvent(new CustomEvent("collection-folder-open",{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){const t=this.folder;return t?n.html`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <ap-icon name="folder" .size=${16}></ap-icon>
        </div>
        <div class="name" title=${t.name}>${t.name}</div>
        <div class="chevron">
          <ap-icon name="chevron-right" .size=${16}></ap-icon>
        </div>
      </div>
    `:n.html``}};os.styles=n.css`
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
  `;Ci([d.property({type:Object})],os.prototype,"folder",2);Ci([d.property({type:Number})],os.prototype,"index",2);os=Ci([d.customElement("ap-collection-folder-row")],os);var Vl=Object.defineProperty,Hl=Object.getOwnPropertyDescriptor,zt=(t,e,s,i)=>{for(var a=i>1?void 0:i?Hl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Vl(e,s,a),a};let it=class extends n.LitElement{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.variant="grid",this.gridSize="normal",this.multiSelect=!0,this.folderCount=0}render(){if(this.variant==="grid"){const o=this.gridSize==="large"?"280px":"220px";return n.html`
        <div class="grid-skeleton" ${z({"--ap-grid-min-col":String(o)})}>
          ${Array.from({length:18},()=>n.html`<div class="card-skel">
            <div class="skeleton card-skel-thumb"></div>
            <div class="card-skel-info">
              <div class="skeleton card-skel-name"></div>
              <div class="skeleton card-skel-meta"></div>
            </div>
          </div>`)}
        </div>
      `}const t=[];this.multiSelect&&t.push("32px"),t.push("48px","minmax(120px, 1fr)","72px","100px","120px","36px");const e=t.join(" "),s=n.html`
      <div class="row-skel" ${z({"grid-template-columns":e})}>
        ${this.multiSelect?n.html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z" />
          </svg>
        </div>
        <div class="skeleton row-skel-name row-skel-folder-name"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,i=o=>n.html`
      <div class="row-skel" ${z({"grid-template-columns":e})}>
        ${this.multiSelect?n.html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:""}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${z({width:o})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,a=["70%","55%","80%","45%","65%","50%","75%","60%","85%","40%","72%","58%"],r=12-this.folderCount;return n.html`
      <div class="list-header" ${z({"grid-template-columns":e})}>
        ${this.multiSelect?n.html`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:""}
        <span></span>
        <span>${this.t("name","Name")}</span>
        <span>${this.t("type","Type")}</span>
        <span>${this.t("size","Size")}</span>
        <span>${this.t("date","Date")}</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>s)}
      ${Array.from({length:r},(o,l)=>i(a[l%a.length]))}
    `}};it.styles=n.css`
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
  `;zt([d.property({attribute:!1})],it.prototype,"t",2);zt([d.property({reflect:!0})],it.prototype,"variant",2);zt([d.property({type:String})],it.prototype,"gridSize",2);zt([d.property({type:Boolean})],it.prototype,"multiSelect",2);zt([d.property({type:Number})],it.prototype,"folderCount",2);it=zt([d.customElement("ap-skeleton")],it);var Gl=Object.defineProperty,Ql=Object.getOwnPropertyDescriptor,ae=(t,e,s,i)=>{for(var a=i>1?void 0:i?Ql(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Gl(e,s,a),a};let W=class extends n.LitElement{constructor(){super(...arguments),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken="",this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.t=(t,e)=>typeof e=="string"?e:t,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set(["file-info","metadata"]),this._hls=null}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("keydown",this._onKeyDown),this._destroyHls()}_onKeyDown(t){if(t.key!=="ArrowLeft"&&t.key!=="ArrowRight")return;const e=t.composedPath()[0];if(!e)return;const s=e.tagName;s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.getAttribute("role")==="radio"||e.getAttribute("role")==="listbox"||e.isContentEditable||(t.preventDefault(),t.key==="ArrowLeft"?this._prev():this._next())}_destroyHls(){this._hls&&(this._hls.destroy(),this._hls=null)}updated(t){if(super.updated(t),t.has("asset")&&(this._destroyHls(),this._previewLoading=!0,this.asset)){const e=Tt(this.asset.type);e==="video"&&this._setupHls(this.asset),e!=="image"&&e!=="video"&&(this._previewLoading=!1)}}async _setupHls(t){var i,a;const e=zs(t);if(!e||(await this.updateComplete,((i=this.asset)==null?void 0:i.uuid)!==t.uuid))return;const s=this._videoEl;if(s){if(s.canPlayType("application/vnd.apple.mpegurl")){s.src=e;return}try{const{default:r}=await Promise.resolve().then(()=>require("./hls.light-C3NKRmfw.cjs"));if(!r.isSupported()||((a=this.asset)==null?void 0:a.uuid)!==t.uuid||!this.isConnected)return;const o=new r;this._hls=o,o.loadSource(e),o.attachMedia(s),o.on(r.Events.ERROR,(l,c)=>{var h;c.fatal&&(this._destroyHls(),s.src=((h=t.url)==null?void 0:h.cdn)||"")})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent("preview-close",{bubbles:!0,composed:!0}))}_exitFullscreen(){var t;(t=document.exitFullscreen)==null||t.call(document)}_fullscreen(){var e,s,i,a,r,o;if(((s=(e=this.asset)==null?void 0:e.extension)==null?void 0:s.toLowerCase())==="pdf"&&((a=(i=this.asset)==null?void 0:i.url)!=null&&a.cdn)){window.open(this.asset.url.cdn,"_blank","noopener");return}this._fsImageLoaded=!1,(o=(r=this.previewArea)==null?void 0:r.requestFullscreen)==null||o.call(r)}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent("asset-quick-select",{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}const t=this._getCurrentIndex();this.dispatchEvent(new CustomEvent("asset-select",{detail:{asset:this.asset,index:t,event:new MouseEvent("click",{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(t=>t.uuid===this.asset.uuid)}_navigateTo(t){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent("preview-navigate",{detail:{asset:t},bubbles:!0,composed:!0}))}_supportsFullscreen(t){const e=Tt(t.type);return e==="image"||e==="video"||e==="audio"}_findNavTarget(t,e){const s=e===1?this.assets.length:-1;for(let i=t+e;i!==s;i+=e)if(!this._isFullscreen||this._supportsFullscreen(this.assets[i]))return i;return-1}_prev(){const t=this._getCurrentIndex();if(t<=0)return;const e=this._findNavTarget(t,-1);e>=0&&this._navigateTo(this.assets[e])}_next(){const t=this._getCurrentIndex();if(t<0||t>=this.assets.length-1)return;const e=this._findNavTarget(t,1);e>=0&&this._navigateTo(this.assets[e])}_getFullscreenImageUrl(t){var a,r;const e=(a=t.url)==null?void 0:a.cdn;if(!e)return Es(t)||"";const s={source:"asset",asset:t};if(((r=t.extension)==null?void 0:r.toLowerCase())==="svg")return qe(e,s);const i=bt(e,this.containerToken);return qe(Ve(i,{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:"1"}),s)}_getBlurDimensions(t){var o,l;const e=(o=t.info)==null?void 0:o.img_w,s=(l=t.info)==null?void 0:l.img_h;if(!e||!s)return{width:"100vw",height:"100vh"};const i=window.innerWidth,a=window.innerHeight,r=Math.min(i/e,a/s,1);return{width:`${Math.round(e*r)}px`,height:`${Math.round(s*r)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(t){if(!t)return[];if(Array.isArray(t))return this._parseTagArray(t);const e=Object.values(t);if(e.length>0&&Array.isArray(e[0])){const s=e.flat(),i=new Set;return s.filter(a=>!a.label||i.has(a.sid)?!1:(i.add(a.sid),!0))}return e.map(s=>({label:s.label,sid:s.sid})).filter(s=>s.label)}_parseTagArray(t){return t.map(e=>{if(typeof e=="string")return{label:e,sid:e};const s=e;return{label:s.label||Object.values(s.names||{})[0]||"",sid:s.sid||""}}).filter(e=>e.label)}_applyTagFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:k.TAGS,values:[t],operator:R.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(t){this.dispatchEvent(new CustomEvent("filter-update",{detail:{key:k.LABELS,values:[t],operator:R.IS},bubbles:!0,composed:!0}))}_toggleSection(t){const e=new Set(this._openSections);e.has(t)?e.delete(t):e.add(t),this._openSections=e}_renderFileInfoSection(t){const e=this._getFileInfoRows(t);if(e.length===0)return n.nothing;const s=this._openSections.has("file-info");return n.html`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${s?"true":"false"}
          @click=${()=>this._toggleSection("file-info")}
        >
          <span>${this.t("fileInfo","File info")}</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${s?"open":""}">
          ${e.map(i=>n.html`
            <div class="meta-row">
              <span class="meta-label" title=${i.label}>${i.label}</span>
              <span class="meta-value" title=${i.value}>${i.value}</span>
            </div>
          `)}
          ${this._renderTagsRow(t)}
          ${this._renderLabelsRow(t)}
        </div>
      </div>
    `}_renderAccordion(t,e,s){if(s.length===0)return n.nothing;const i=this._openSections.has(t);return n.html`
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
              <span class="meta-value" title=${a.value}>${a.value}</span>
            </div>
          `)}
        </div>
      </div>
    `}_getFileInfoRows(t){var s,i,a,r,o,l;const e=[];return e.push({label:this.t("fileName","File name"),value:t.name}),t.extension&&e.push({label:this.t("fileType","Type"),value:t.extension.toUpperCase()}),(s=t.size)!=null&&s.bytes&&e.push({label:this.t("fileSize","Size"),value:_i(t.size.bytes)}),(i=t.info)!=null&&i.img_w&&e.push({label:this.t("dimensions","Dimensions"),value:Ma(t.info.img_w,t.info.img_h)}),(a=t.info)!=null&&a.video_w&&e.push({label:this.t("videoResolution","Video resolution"),value:`${t.info.video_w} x ${t.info.video_h}`}),(((r=t.info)==null?void 0:r.video_duration)??((o=t.info)==null?void 0:o.duration))!=null&&e.push({label:this.t("duration","Duration"),value:`${Math.round(t.info.video_duration??t.info.duration)}s`}),(l=t.info)!=null&&l.color_space&&e.push({label:this.t("colorSpace","Color space"),value:t.info.color_space}),t.created_at&&e.push({label:this.t("created","Created"),value:Ls(t.created_at)}),t.modified_at&&e.push({label:this.t("modified","Modified"),value:Ls(t.modified_at)}),e}_buildFieldMap(){const t=new Map;for(const e of this.metadataFields)t.set(e.key,e),e.ckey&&t.set(e.ckey,e),e.slug&&t.set(e.slug,e);return t}_resolveSlug(t,e){var i;if(!((i=e.possible_values)!=null&&i.length)||!t.startsWith("@"))return t;const s=e.possible_values.find(a=>a.internal_unique_value===t||a.api_value===t);return(s==null?void 0:s.label)??t}_resolveFieldValue(t,e){var s;if(t==null||t==="")return"";if(e.regionalVariantsGroupUuid&&typeof t=="object"&&t!==null&&!Array.isArray(t)){const i=this.regionalFilters[e.regionalVariantsGroupUuid];if(i){const a=t[i];if(a!=null&&a!=="")return this._resolveFieldValue(a,{...e,regionalVariantsGroupUuid:void 0})}return""}if((s=e.possible_values)!=null&&s.length)return Array.isArray(t)?t.map(a=>this._resolveSlug(String(a),e)).filter(Boolean).join(", "):this._resolveSlug(String(t),e);if(Array.isArray(t))return t.join(", ");if(typeof t=="object"){const i=JSON.stringify(t);return i==="{}"||i==="[]"?"":i}return String(t)}_getAllMetadataRows(t){var r,o,l,c;const e=[],s=this._buildFieldMap(),i=new Set;if(this.metadataFields.length>0){const h=t;for(const u of this.metadataFields){const f=h[u.key]??((o=(r=t.info)==null?void 0:r.metadata)==null?void 0:o[u.key])??((l=t.meta)==null?void 0:l[u.key]),p=this._resolveFieldValue(f,u);if(!p)continue;i.add(u.key),u.slug&&i.add(u.slug);const g=p.length>50;e.push({label:u.label,value:p,wrap:g})}}if(t.meta)for(const[h,u]of Object.entries(t.meta)){if(i.has(h)||u==null||u==="")continue;const f=s.get(h);if(f){const p=this._resolveFieldValue(u,f);if(!p)continue;i.add(h);const g=p.length>50;e.push({label:f.label,value:p,wrap:g})}else{const p=typeof u=="object"?JSON.stringify(u):String(u);if(!p||p==="{}"||p==="[]")continue;i.add(h);const g=h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),v=p.length>50;e.push({label:g,value:p,wrap:v})}}const a=(c=t.info)==null?void 0:c.metadata;if(a&&typeof a=="object")for(const[h,u]of Object.entries(a)){if(i.has(h)||u==null||u==="")continue;const f=s.get(h);if(f){const p=this._resolveFieldValue(u,f);if(!p)continue;i.add(h);const g=p.length>50;e.push({label:f.label,value:p,wrap:g})}else{const p=typeof u=="object"?JSON.stringify(u):String(u);if(!p||p==="{}"||p==="[]")continue;i.add(h);const g=h.charAt(0).toUpperCase()+h.slice(1).replace(/_/g," "),v=p.length>50;e.push({label:g,value:p,wrap:v})}}return e}_getAssetLabels(t){return!t.labels||t.labels.length===0?[]:t.labels.map(e=>this.labels.find(s=>s.sid===e||s.uuid===e)).filter(e=>!!e)}_renderLabelsRow(t){const e=this._getAssetLabels(t);return e.length===0?n.nothing:n.html`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t("labels","Labels")}</span>
        <div class="tags-list">
          ${e.map(s=>n.html`
            <ap-badge class="tag-link" ${z({"--ap-muted":`${s.color}22`,"--ap-muted-foreground":s.color})} @click=${()=>this._applyLabelFilter(s.sid||s.uuid)}>
              <span class="label-content">
                <ap-icon name="tag" .size=${12} ${z({color:s.color})}></ap-icon>
                ${s.name}
              </span>
            </ap-badge>
          `)}
        </div>
      </div>
    `}_renderTagsRow(t){const e=this._getTagEntries(t.tags);return e.length===0?n.nothing:n.html`
      <div class="meta-row">
        <span class="meta-label">${this.t("tags","Tags")}</span>
        <div class="tags-list">
          ${e.map(s=>n.html`
            <ap-badge class="tag-link" @click=${()=>this._applyTagFilter(s.sid)}>${s.label}</ap-badge>
          `)}
        </div>
      </div>
    `}render(){var F,C,U,S,B,P,A,Q;const t=this.asset;if(!t)return n.nothing;const e=Tt(t.type),s=e==="image",i=e==="video",a=e==="audio",r=((F=t.extension)==null?void 0:F.toLowerCase())==="pdf",o=cs(t.extension||""),l=pi(t.extension||""),c=((C=t.extension)==null?void 0:C.toLowerCase())==="svg",h=Es(t),u=s?c?qe(((U=t.url)==null?void 0:U.cdn)||"",{source:"asset",asset:t}):h||qe(bt(((S=t.url)==null?void 0:S.cdn)||"",this.containerToken),{source:"asset",asset:t}):"",f=s?this._getFullscreenImageUrl(t):"",p=s&&!c?this._getBlurDimensions(t):null,g=i&&((B=t.url)==null?void 0:B.cdn)||"",v=i?qe(((P=t.info)==null?void 0:P.video_thumbnail)||((A=t.info)==null?void 0:A.preview)||"",{source:"video",asset:t}):"",b=r&&!s?hi(t):"",_=this._getCurrentIndex(),$=_>0&&this._findNavTarget(_,-1)>=0,w=_>=0&&this._findNavTarget(_,1)>=0,I=this.assets.length>1;return n.html`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${t.name}>${t.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!s&&!i&&!a&&!r} aria-label=${this.t("fullscreen","Fullscreen")} title=${this.t("fullscreen","Fullscreen")}>
              <ap-icon name="fullscreen" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?"selected":""}" @click=${this._select} aria-label=${this.t("select","Select")} title=${this.t("selectAsset","Select the asset")}>
              <ap-icon name="select" .size=${16}></ap-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${s&&l?"chess":""}">
          ${I?n.html`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!$} aria-label=${this.t("previous","Previous")}>
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!w} aria-label=${this.t("next","Next")}>
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          `:n.nothing}
          ${this._isFullscreen?n.html`
            <button class="fs-close-btn" @click=${this._exitFullscreen} aria-label=${this.t("exitFullscreen","Exit fullscreen")}>
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          `:n.nothing}
          ${this._previewLoading?n.html`<div class="preview-loading"><div class="spinner"></div></div>`:n.nothing}
          ${s?n.html`
            <img
              src=${u}
              alt=${t.name}
              @load=${V=>{V.target.classList.remove("icon-fallback"),this._previewLoading=!1}}
              @error=${V=>{const G=V.target;this._previewLoading=!1,G.src!==o&&(G.src=o,G.classList.add("icon-fallback"))}}
            />
            <div class="fs-wrapper">
              ${c?n.nothing:n.html`
                <img
                  class="fs-blur ${this._fsImageLoaded?"hidden":""}"
                  src=${u}
                  alt=""
                  ${z({width:p.width,height:p.height})}
                />
              `}
              <img
                class="fs-full ${c||this._fsImageLoaded?"loaded":""}"
                src=${this._isFullscreen?f:""}
                alt=${t.name}
                ${z(c?{width:"100vw",height:"100vh"}:null)}
                @load=${this._onFsImageLoad}
              />
            </div>
          `:n.nothing}
          ${i?n.html`<video src=${g} poster=${v||n.nothing} controls controlsList="nofullscreen" @loadeddata=${()=>{this._previewLoading=!1}} @error=${()=>{this._previewLoading=!1}}></video>`:n.nothing}
          ${a?n.html`<audio src=${((Q=t.url)==null?void 0:Q.cdn)||""} controls></audio>`:n.nothing}
          ${r&&!s?n.html`
            <img
              src=${b||o}
              alt=${t.name}
              class=${b?"":"icon-fallback"}
              @error=${V=>{const G=V.target;G.src!==o&&(G.src=o,G.classList.add("icon-fallback"))}}
            />
          `:n.nothing}
          ${!s&&!i&&!a&&!r?n.html`<img src=${o} alt=${t.name} class="icon-fallback" />`:n.nothing}
        </div>

        ${this._renderFileInfoSection(t)}
        ${this.showMetadata?n.html`
          ${this._renderAccordion("metadata",this.t("metadata","Metadata"),this._getAllMetadataRows(t))}
        `:n.nothing}
      </div>
    `}};W.styles=n.css`
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
  `;ae([d.property({type:Object})],W.prototype,"asset",2);ae([d.property({type:Array})],W.prototype,"assets",2);ae([d.property({type:Array})],W.prototype,"selectedIds",2);ae([d.property()],W.prototype,"containerToken",2);ae([d.property({type:Boolean})],W.prototype,"showMetadata",2);ae([d.property({type:Array})],W.prototype,"metadataFields",2);ae([d.property({type:Array})],W.prototype,"labels",2);ae([d.property({type:Object})],W.prototype,"regionalFilters",2);ae([d.property({type:Boolean})],W.prototype,"multiSelect",2);ae([d.property({attribute:!1})],W.prototype,"t",2);ae([d.query(".preview-area")],W.prototype,"previewArea",2);ae([d.query("video")],W.prototype,"_videoEl",2);ae([d.state()],W.prototype,"_isFullscreen",2);ae([d.state()],W.prototype,"_fsImageLoaded",2);ae([d.state()],W.prototype,"_previewLoading",2);ae([d.state()],W.prototype,"_openSections",2);W=ae([d.customElement("ap-preview-panel")],W);var Yl=Object.defineProperty,Wl=Object.getOwnPropertyDescriptor,Ai=(t,e,s,i)=>{for(var a=i>1?void 0:i?Wl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Yl(e,s,a),a};const Xl={sparkles:[{tag:"path",attrs:{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}},{tag:"path",attrs:{d:"M5 3v4"}},{tag:"path",attrs:{d:"M19 17v4"}},{tag:"path",attrs:{d:"M3 5h4"}},{tag:"path",attrs:{d:"M17 19h4"}}],search:[{tag:"circle",attrs:{cx:"11",cy:"11",r:"8"}},{tag:"path",attrs:{d:"m21 21-4.3-4.3"}}],check:"M20 6 9 17l-5-5","check-check":[{tag:"path",attrs:{d:"M18 6 7 17l-5-5"}},{tag:"path",attrs:{d:"m22 10-7.5 7.5L13 16"}}],close:[{tag:"path",attrs:{d:"M18 6 6 18"}},{tag:"path",attrs:{d:"m6 6 12 12"}}],"chevron-left":"m15 18-6-6 6-6","chevron-right":"m9 18 6-6-6-6","chevron-down":"m6 9 6 6 6-6",download:[{tag:"path",attrs:{d:"M12 15V3"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m7 10 5 5 5-5"}}],upload:[{tag:"path",attrs:{d:"M12 3v12"}},{tag:"path",attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"path",attrs:{d:"m17 8-5-5-5 5"}}],fullscreen:[{tag:"path",attrs:{d:"M8 3H5a2 2 0 0 0-2 2v3"}},{tag:"path",attrs:{d:"M21 8V5a2 2 0 0 0-2-2h-3"}},{tag:"path",attrs:{d:"M3 16v3a2 2 0 0 0 2 2h3"}},{tag:"path",attrs:{d:"M16 21h3a2 2 0 0 0 2-2v-3"}}],trash:[{tag:"path",attrs:{d:"M10 11v6"}},{tag:"path",attrs:{d:"M14 11v6"}},{tag:"path",attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}},{tag:"path",attrs:{d:"M3 6h18"}},{tag:"path",attrs:{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}],more:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attrs:{cx:"5",cy:"12",r:"1"}}],grid:[{tag:"rect",attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2"}},{tag:"path",attrs:{d:"M12 3v18"}},{tag:"path",attrs:{d:"M3 12h18"}}],list:[{tag:"path",attrs:{d:"M3 5h.01"}},{tag:"path",attrs:{d:"M3 12h.01"}},{tag:"path",attrs:{d:"M3 19h.01"}},{tag:"path",attrs:{d:"M8 5h13"}},{tag:"path",attrs:{d:"M8 12h13"}},{tag:"path",attrs:{d:"M8 19h13"}}],preview:[{tag:"path",attrs:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"3"}}],select:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],"gallery-vertical-end":[{tag:"path",attrs:{d:"M7 2h10"}},{tag:"path",attrs:{d:"M5 6h14"}},{tag:"rect",attrs:{width:"18",height:"12",x:"3",y:"10",rx:"2"}}],filter:[{tag:"path",attrs:{d:"M2 5h20"}},{tag:"path",attrs:{d:"M6 12h12"}},{tag:"path",attrs:{d:"M9 19h6"}}],sort:[{tag:"path",attrs:{d:"m21 16-4 4-4-4"}},{tag:"path",attrs:{d:"M17 20V4"}},{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}}],"sort-asc":[{tag:"path",attrs:{d:"m3 8 4-4 4 4"}},{tag:"path",attrs:{d:"M7 4v16"}},{tag:"path",attrs:{d:"M11 12h4"}},{tag:"path",attrs:{d:"M11 16h7"}},{tag:"path",attrs:{d:"M11 20h10"}}],"sort-desc":[{tag:"path",attrs:{d:"m3 16 4 4 4-4"}},{tag:"path",attrs:{d:"M7 20V4"}},{tag:"path",attrs:{d:"M11 4h4"}},{tag:"path",attrs:{d:"M11 8h7"}},{tag:"path",attrs:{d:"M11 12h10"}}],image:[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}},{tag:"circle",attrs:{cx:"9",cy:"9",r:"2"}},{tag:"path",attrs:{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}}],video:[{tag:"path",attrs:{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}},{tag:"rect",attrs:{x:"2",y:"6",width:"14",height:"12",rx:"2"}}],audio:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],music:[{tag:"path",attrs:{d:"M9 18V5l12-2v13"}},{tag:"circle",attrs:{cx:"6",cy:"18",r:"3"}},{tag:"circle",attrs:{cx:"18",cy:"16",r:"3"}}],document:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],"file-text":[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 9H8"}},{tag:"path",attrs:{d:"M16 13H8"}},{tag:"path",attrs:{d:"M16 17H8"}}],file:[{tag:"path",attrs:{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}}],archive:[{tag:"rect",attrs:{width:"20",height:"5",x:"2",y:"3",rx:"1"}},{tag:"path",attrs:{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}},{tag:"path",attrs:{d:"M10 12h4"}}],font:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],text:[{tag:"path",attrs:{d:"M12 4v16"}},{tag:"path",attrs:{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"}},{tag:"path",attrs:{d:"M9 20h6"}}],clapperboard:[{tag:"path",attrs:{d:"m12.296 3.464 3.02 3.956"}},{tag:"path",attrs:{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"}},{tag:"path",attrs:{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"path",attrs:{d:"m6.18 5.276 3.1 3.899"}}],folder:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z","folder-open":"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2","folder-plus":[{tag:"path",attrs:{d:"M12 10v6"}},{tag:"path",attrs:{d:"M9 13h6"}},{tag:"path",attrs:{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}}],inbox:[{tag:"path",attrs:{d:"M22 12L16 12L14 15L10 15L8 12L2 12"}},{tag:"path",attrs:{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}}],tags:[{tag:"path",attrs:{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"}},{tag:"path",attrs:{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"}},{tag:"circle",attrs:{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor"}}],tag:[{tag:"path",attrs:{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}},{tag:"circle",attrs:{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}}],hash:[{tag:"path",attrs:{d:"M4 9h16"}},{tag:"path",attrs:{d:"M4 15h16"}},{tag:"path",attrs:{d:"M10 3 8 21"}},{tag:"path",attrs:{d:"M14 3 16 21"}}],calendar:[{tag:"path",attrs:{d:"M8 2v4"}},{tag:"path",attrs:{d:"M16 2v4"}},{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"4",rx:"2"}},{tag:"path",attrs:{d:"M3 10h18"}}],"file-type":[{tag:"path",attrs:{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}},{tag:"path",attrs:{d:"M14 2v4a2 2 0 0 0 2 2h4"}},{tag:"path",attrs:{d:"M2 13v-1h6v1"}},{tag:"path",attrs:{d:"M5 12v6"}},{tag:"path",attrs:{d:"M4 18h2"}}],scaling:[{tag:"path",attrs:{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attrs:{d:"M14 15H9v-5"}},{tag:"path",attrs:{d:"M20 9V4h-5"}},{tag:"path",attrs:{d:"M20 4l-6 6"}}],history:[{tag:"path",attrs:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}},{tag:"path",attrs:{d:"M3 3v5h5"}},{tag:"path",attrs:{d:"M12 7v5l4 2"}}],"swatch-book":[{tag:"path",attrs:{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}},{tag:"path",attrs:{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}},{tag:"path",attrs:{d:"M7 17h.01"}},{tag:"path",attrs:{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}}],"badge-check":[{tag:"path",attrs:{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],box:[{tag:"path",attrs:{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}},{tag:"path",attrs:{d:"m3.3 7 8.7 5 8.7-5"}},{tag:"path",attrs:{d:"M12 22V12"}}],"layout-grid":[{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"14",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"7",height:"7",x:"3",y:"14",rx:"1"}}],"layout-template":[{tag:"rect",attrs:{width:"18",height:"7",x:"3",y:"3",rx:"1"}},{tag:"rect",attrs:{width:"9",height:"7",x:"3",y:"14",rx:"1"}},{tag:"rect",attrs:{width:"5",height:"7",x:"16",y:"14",rx:"1"}}],pin:[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z"}}],"pin-off":[{tag:"path",attrs:{d:"M12 17v5"}},{tag:"path",attrs:{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34"}},{tag:"path",attrs:{d:"M2 2l20 20"}},{tag:"path",attrs:{d:"M9 12a2 2 0 0 1-1.11 1.79l-1.78.9"}},{tag:"path",attrs:{d:"M17 17H5"}}],lock:[{tag:"rect",attrs:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}},{tag:"path",attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}],globe:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}},{tag:"path",attrs:{d:"M2 12h20"}}],"circle-check-big":[{tag:"path",attrs:{d:"M21.801 10A10 10 0 1 1 17 3.335"}},{tag:"path",attrs:{d:"m9 11 3 3L22 4"}}],"x-circle":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m15 9-6 6"}},{tag:"path",attrs:{d:"m9 9 6 6"}}],ban:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"m4.9 4.9 14.2 14.2"}}],clock:[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"path",attrs:{d:"M12 6v6l4 2"}}],"toggle-left":[{tag:"rect",attrs:{width:"20",height:"14",x:"2",y:"5",rx:"7"}},{tag:"circle",attrs:{cx:"9",cy:"12",r:"3"}}],"file-digit":[{tag:"path",attrs:{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"}},{tag:"path",attrs:{d:"M14 2v5a1 1 0 0 0 1 1h5"}},{tag:"path",attrs:{d:"M10 16h2v6"}},{tag:"path",attrs:{d:"M10 22h4"}},{tag:"rect",attrs:{width:"4",height:"6",x:"2",y:"16",rx:"2"}}],"decimals-arrow-right":[{tag:"path",attrs:{d:"M10 18h10"}},{tag:"path",attrs:{d:"m17 21 3-3-3-3"}},{tag:"path",attrs:{d:"M3 11h.01"}},{tag:"rect",attrs:{width:"5",height:"8",x:"15",y:"3",rx:"2.5"}},{tag:"rect",attrs:{width:"5",height:"8",x:"6",y:"3",rx:"2.5"}}],"text-initial":[{tag:"path",attrs:{d:"M15 5h6"}},{tag:"path",attrs:{d:"M15 12h6"}},{tag:"path",attrs:{d:"M3 19h18"}},{tag:"path",attrs:{d:"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12"}},{tag:"path",attrs:{d:"M3.92 10h6.16"}}],"text-align-justify":[{tag:"path",attrs:{d:"M3 5h18"}},{tag:"path",attrs:{d:"M3 12h18"}},{tag:"path",attrs:{d:"M3 19h18"}}],paperclip:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551","link-2":[{tag:"path",attrs:{d:"M9 17H7A5 5 0 0 1 7 7h2"}},{tag:"path",attrs:{d:"M15 7h2a5 5 0 1 1 0 10h-2"}},{tag:"path",attrs:{d:"M8 12h8"}}],"circle-dot":[{tag:"circle",attrs:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"1"}}],"square-check":[{tag:"rect",attrs:{width:"18",height:"18",x:"3",y:"3",rx:"2"}},{tag:"path",attrs:{d:"m9 12 2 2 4-4"}}],locate:[{tag:"path",attrs:{d:"M2 12h3"}},{tag:"path",attrs:{d:"M19 12h3"}},{tag:"path",attrs:{d:"M12 2v3"}},{tag:"path",attrs:{d:"M12 19v3"}},{tag:"circle",attrs:{cx:"12",cy:"12",r:"7"}}],"list-ordered":[{tag:"path",attrs:{d:"M11 5h10"}},{tag:"path",attrs:{d:"M11 12h10"}},{tag:"path",attrs:{d:"M11 19h10"}},{tag:"path",attrs:{d:"M4 4h1v5"}},{tag:"path",attrs:{d:"M4 9h2"}},{tag:"path",attrs:{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"}}],plus:[{tag:"path",attrs:{d:"M5 12h14"}},{tag:"path",attrs:{d:"M12 5v14"}}],component:[{tag:"path",attrs:{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}},{tag:"path",attrs:{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}}]};let ns=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.size=20}render(){const t=Xl[this.name];if(!t)return n.nothing;const e=typeof t=="string"?n.svg`<path d=${t}></path>`:t.map(s=>{const{tag:i,attrs:a}=s;return i==="circle"?n.svg`<circle cx=${a.cx} cy=${a.cy} r=${a.r} fill=${a.fill??"none"}></circle>`:i==="rect"?n.svg`<rect width=${a.width} height=${a.height} x=${a.x} y=${a.y} rx=${a.rx??"0"} ry=${a.ry??"0"}></rect>`:n.svg`<path d=${a.d}></path>`});return n.html`
      <svg
        ${z({"--icon-size":`${this.size}px`})}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${e}
      </svg>
    `}};ns.styles=[n.css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `];Ai([d.property()],ns.prototype,"name",2);Ai([d.property({type:Number})],ns.prototype,"size",2);ns=Ai([d.customElement("ap-icon")],ns);var Jl=Object.defineProperty,Zl=Object.getOwnPropertyDescriptor,Ke=(t,e,s,i)=>{for(var a=i>1?void 0:i?Zl(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&Jl(e,s,a),a};let Fe=class extends n.LitElement{constructor(){super(...arguments),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(t,e)=>typeof e=="string"?e:t}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){const{t}=this,e=this.selectedAssets.length,s=this.selectedFolders.length;if(s===0)return t("assetsSelected",{count:e,defaultValue_one:"{{count}} asset selected",defaultValue_other:"{{count}} assets selected"});if(e===0)return t("foldersSelected",{count:s,defaultValue_one:"{{count}} folder selected",defaultValue_other:"{{count}} folders selected"});const i=t("foldersCount",{count:s,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}),a=t("assetsCount",{count:e,defaultValue_one:"{{count}} asset",defaultValue_other:"{{count}} assets"});return t("foldersAndAssetsSelected","{{folders}} and {{assets}} selected",{folders:i,assets:a})}_confirm(){this.dispatchEvent(new CustomEvent("selection-confirm",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent("selection-transform",{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent("selection-clear",{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;const t=this._selectScope;return t==="assets"?this.selectedAssets.length<this.totalCount:t==="folders"?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){const t=this._selectScope;return t==="assets"?this.totalCount:t==="folders"?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){const t=this.selectedAssets.length>0,e=this.selectedFolders.length>0;return t&&!e?"assets":e&&!t?"folders":"all"}_selectAll(){this.dispatchEvent(new CustomEvent("select-all",{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?n.nothing:n.html`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?n.html`
          <span class="divider"></span>
          <span class="select-label">Select:</span>
          ${this._canSelectMore()?n.html`<button
                class="bar-btn"
                ?disabled=${this.isSelectingAll}
                @click=${this._selectAll}
              ><ap-icon name="check-check" .size=${14}></ap-icon>${this.isSelectingAll?this.t("selecting","Selecting..."):this.maxSelections&&this.maxSelections<this._scopeTotal?this.t("selectFirst",`First ${this.maxSelections}`,{count:this.maxSelections}):this._selectScope==="assets"?this.t("selectAllAssets","Select all assets"):this._selectScope==="folders"?this.t("selectAllFolders","Select all folders"):this.t("selectAll","Select all")}</button>`:n.nothing}
          <button class="bar-btn" @click=${this._clear}><ap-icon name="close" .size=${14}></ap-icon>${this.t("deselectAll","Deselect all")}</button>
          ${this.maxSelections&&this._totalSelected>=this.maxSelections?n.html`<span class="limit-notice">${this.t("maxSelectionsAllowed",`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span>`:n.nothing}
        `:n.nothing}
        <div class="spacer"></div>
        ${this.showTransform?n.html`
          <button class="btn-confirm btn-transform" @click=${this._transform}>${this.t("transform","Transform")}</button>
        `:n.nothing}
        <button class="btn-confirm" @click=${this._confirm}>${this.t("confirm","Confirm")}</button>
      </div>
    `}};Fe.styles=n.css`
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
  `;Ke([d.property({type:Array})],Fe.prototype,"selectedAssets",2);Ke([d.property({type:Array})],Fe.prototype,"selectedFolders",2);Ke([d.property({type:Number})],Fe.prototype,"totalCount",2);Ke([d.property({type:Number})],Fe.prototype,"totalFolderCount",2);Ke([d.property({type:Boolean})],Fe.prototype,"isSelectingAll",2);Ke([d.property({type:Boolean})],Fe.prototype,"multiSelect",2);Ke([d.property({type:Number})],Fe.prototype,"maxSelections",2);Ke([d.property({type:Boolean})],Fe.prototype,"showTransform",2);Ke([d.property({attribute:!1})],Fe.prototype,"t",2);Fe=Ke([d.customElement("ap-selection-bar")],Fe);var ec=Object.defineProperty,tc=Object.getOwnPropertyDescriptor,Fi=(t,e,s,i)=>{for(var a=i>1?void 0:i?tc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ec(e,s,a),a};let ls=class extends n.LitElement{constructor(){super(...arguments),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}render(){return!this.active||this.rect.width<5||this.rect.height<5?n.nothing:n.html`
      <div
        class="marquee"
        ${z({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};ls.styles=n.css`
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
  `;Fi([d.property({type:Boolean})],ls.prototype,"active",2);Fi([d.property({type:Object})],ls.prototype,"rect",2);ls=Fi([d.customElement("ap-marquee-overlay")],ls);var sc=Object.defineProperty,ic=Object.getOwnPropertyDescriptor,St=(t,e,s,i)=>{for(var a=i>1?void 0:i?ic(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&sc(e,s,a),a};let Ye=class extends n.LitElement{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.clearable=!1,this.direction="vertical",this._onKeydown=t=>{const e=this.options.filter(a=>!this.disabled&&!a.disabled);if(e.length===0)return;const s=e.findIndex(a=>a.value===this.value);let i=null;switch(t.key){case"ArrowDown":case"ArrowRight":t.preventDefault(),i=s<0?0:(s+1)%e.length;break;case"ArrowUp":case"ArrowLeft":t.preventDefault(),i=s<0?e.length-1:(s-1+e.length)%e.length;break;case" ":case"Enter":t.preventDefault(),s>=0?this._select(e[s]):e.length>0&&this._select(e[0]);return;default:return}i!==null&&this._select(e[i])}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radiogroup"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeydown)}render(){return n.html`
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
    `}_select(t){if(this.disabled||t.disabled)return;const e=this.clearable&&t.value===this.value?"":t.value;this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:e},bubbles:!0,composed:!0}))}};Ye.styles=[pe,n.css`
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
    `];St([d.property()],Ye.prototype,"value",2);St([d.property({type:Array})],Ye.prototype,"options",2);St([d.property({type:Boolean})],Ye.prototype,"disabled",2);St([d.property({type:Boolean})],Ye.prototype,"clearable",2);St([d.property({reflect:!0})],Ye.prototype,"direction",2);St([d.property({reflect:!0})],Ye.prototype,"columns",2);Ye=St([d.customElement("ap-radio-group")],Ye);var ac=Object.defineProperty,rc=Object.getOwnPropertyDescriptor,Da=(t,e,s,i)=>{for(var a=i>1?void 0:i?rc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&ac(e,s,a),a};let Ps=class extends n.LitElement{constructor(){super(...arguments),this.size=24}render(){return n.html`<div class="spinner" ${z({width:`${this.size}px`,height:`${this.size}px`})}></div>`}};Ps.styles=[n.css`
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
    `];Da([d.property({type:Number})],Ps.prototype,"size",2);Ps=Da([d.customElement("ap-spinner")],Ps);var oc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,hs=(t,e,s,i)=>{for(var a=i>1?void 0:i?nc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&oc(e,s,a),a};let xt=class extends n.LitElement{constructor(){super(...arguments),this.folders=[],this.loading=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._mode="recursive"}_handleConfirm(){this.dispatchEvent(new CustomEvent("folder-resolve-confirm",{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("folder-resolve-cancel",{bubbles:!0,composed:!0}))}_handleModeChange(t){this._mode=t.detail.value}render(){const t=this.folders.length;return n.html`
      <div class="backdrop" @click=${e=>{e.target===e.currentTarget&&this._handleCancel()}}>
        <div class="dialog">
          <div class="title">${this.t("addFolderContents","Add folder contents")}</div>
          <div class="description">
            ${this.t("folderResolveDescription","You selected {{count}} folder(s). How would you like to add the assets?",{count:t})}
          </div>
          <div class="options">
            <ap-radio-group
              .value=${this._mode}
              .options=${[{value:"direct",label:this.t("directAssetsOnly","Direct assets only")},{value:"recursive",label:this.t("allAssetsIncludingSubfolders","All assets (including subfolders)")}]}
              @ap-change=${this._handleModeChange}
            ></ap-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>${this.t("cancel","Cancel")}</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading?n.html`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> ${this.t("loading","Loading...")}</span>`:this.t("addAssets","Add assets")}
            </button>
          </div>
        </div>
      </div>
    `}};xt.styles=[pe,n.css`
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
  `];hs([d.property({type:Array})],xt.prototype,"folders",2);hs([d.property({type:Boolean})],xt.prototype,"loading",2);hs([d.property({attribute:!1})],xt.prototype,"t",2);hs([d.state()],xt.prototype,"_mode",2);xt=hs([d.customElement("ap-folder-resolve-dialog")],xt);var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,fe=(t,e,s,i)=>{for(var a=i>1?void 0:i?cc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&lc(e,s,a),a};let ie=class extends n.LitElement{constructor(){super(...arguments),this.value="",this.label="",this.variant="default",this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition="below",this._menuAlign="align-left",this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=t=>{t.composedPath().includes(this)||(this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}}close(){this._open=!1}render(){const t=this.options.find(s=>s.value===this.value),e="ap-dropdown-menu";return n.html`
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
        ${this.label?n.html`<span class="label">${this.label}${t?": ":""}</span>`:n.nothing}${t?t.label:""}
        ${this.clearable&&t?n.html`<span class="clear-trigger" @click=${this._clear}><ap-icon name="close" .size=${12}></ap-icon></span>`:n.html`<ap-icon name="chevron-down" .size=${14}></ap-icon>`}
      </button>
      ${this._open?n.html`
        <div
          id=${e}
          class="menu ${this._menuPosition} ${this._menuAlign}"
          ${z({[this._menuPosition==="below"?"top":"bottom"]:`${this._menuPosition==="below"?this._menuTop:this._menuBottom}px`,[this._menuAlign==="align-left"?"left":"right"]:`${this._menuAlign==="align-left"?this._menuLeft:this._menuRight}px`,...this._menuWidth?{"min-width":`${this._menuWidth}px`}:{}})}
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
                <span class="option-label">
                  ${s.icon?n.html`<ap-icon name=${s.icon} .size=${16}></ap-icon>`:n.nothing}
                  ${s.label}
                </span>
                ${s.value===this.value?n.html`<ap-icon name="check" .size=${14}></ap-icon>`:n.nothing}
              </button>
            `)}
        </div>
      `:n.nothing}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(t=>t.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener("click",this._handleOutsideClick)}_clear(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:""},bubbles:!0,composed:!0}))}_select(t){this._open=!1,document.removeEventListener("click",this._handleOutsideClick),this.dispatchEvent(new CustomEvent("ap-change",{detail:{value:t},bubbles:!0,composed:!0}))}_updateMenuPosition(){const t=this.getBoundingClientRect();this._menuWidth=t.width;const e=window.innerHeight-t.bottom,s=t.top,i=Math.min(this.options.length*36+8,300);this._menuPosition=e<i&&s>e?"above":"below",this._menuPosition==="below"?this._menuTop=t.bottom+4:this._menuBottom=window.innerHeight-t.top+4;const a=window.innerWidth-t.left;this._menuAlign=a<200?"align-right":"align-left",this._menuAlign==="align-left"?this._menuLeft=t.left:this._menuRight=window.innerWidth-t.right}_handleTriggerKeydown(t){t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="Enter"||t.key===" "?(t.preventDefault(),this._open||(this._open=!0,this._focusedIndex=t.key==="ArrowUp"?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent("dropdown-open",{bubbles:!0,composed:!0})),document.addEventListener("click",this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):t.key==="Escape"&&this._open&&(t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick))}_handleMenuKeydown(t){var e,s,i,a;switch(t.key){case"ArrowDown":t.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case"ArrowUp":t.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case"Enter":case" ":t.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),(s=(e=this.shadowRoot)==null?void 0:e.querySelector(".trigger"))==null||s.focus());break;case"Escape":t.preventDefault(),this._open=!1,document.removeEventListener("click",this._handleOutsideClick),(a=(i=this.shadowRoot)==null?void 0:i.querySelector(".trigger"))==null||a.focus();break;case"Tab":this._open=!1,document.removeEventListener("click",this._handleOutsideClick);break;case"Home":t.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case"End":t.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption();break}}_focusCurrentOption(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelectorAll(".option");t&&this._focusedIndex>=0&&this._focusedIndex<t.length&&t[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};ie.styles=[pe,n.css`
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
    `];fe([d.property()],ie.prototype,"value",2);fe([d.property()],ie.prototype,"label",2);fe([d.property({reflect:!0})],ie.prototype,"variant",2);fe([d.property({type:Boolean})],ie.prototype,"clearable",2);fe([d.property({type:Array})],ie.prototype,"options",2);fe([d.state()],ie.prototype,"_open",2);fe([d.state()],ie.prototype,"_focusedIndex",2);fe([d.state()],ie.prototype,"_menuPosition",2);fe([d.state()],ie.prototype,"_menuAlign",2);fe([d.state()],ie.prototype,"_menuTop",2);fe([d.state()],ie.prototype,"_menuBottom",2);fe([d.state()],ie.prototype,"_menuLeft",2);fe([d.state()],ie.prototype,"_menuRight",2);fe([d.state()],ie.prototype,"_menuWidth",2);ie=fe([d.customElement("ap-dropdown")],ie);var dc=Object.defineProperty,pc=Object.getOwnPropertyDescriptor,Ee=(t,e,s,i)=>{for(var a=i>1?void 0:i?pc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&dc(e,s,a),a};const hc=["webp","jpeg","png","gif"];function uc(t){const e=(t??"").toLowerCase();return hc.includes(e)?e:"jpeg"}let be=class extends n.LitElement{constructor(){super(...arguments),this.assets=[],this.isMultiSelect=!1,this.t=(t,e)=>typeof e=="string"?e:t,this._format="jpeg",this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this._defaultFormat="jpeg"}get _ratio(){const t=this.assets.find(i=>gt(i));if(!t)return 1.5;const e=As(t),s=Fs(t);return e&&s?e/s:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!=="excellent"||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(t){t.has("assets")&&this._initDefaults()}_initDefaults(){const t=this.assets.find(e=>gt(e));if(this._defaultFormat=uc(t==null?void 0:t.extension),this._format=this._defaultFormat,this._quality="excellent",this._lockAspect=!0,this._activePreset="original",this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(t){const e=As(t),s=Fs(t);this._defaultWidth=e||void 0,this._defaultHeight=s||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(t){this._format=t.detail.value}_handleQualityChange(t){this._quality=t.detail.value}_handleWidthInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._activePreset="",this._lockAspect&&i&&(this._height=Math.round(i/this._ratio))}_handleHeightInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._height=i,this._activePreset="",this._lockAspect&&i&&(this._width=Math.round(i*this._ratio))}_handleMaxSizeInput(t){const e=t.target.value,s=parseInt(e,10),i=e===""||isNaN(s)||s<=0?void 0:s;this._width=i,this._height=i,this._activePreset=""}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(t){this._activePreset=t.value,t.value==="original"?(this._width=this._defaultWidth,this._height=this._defaultHeight):t.width&&(this._width=t.width,this._height=Math.round(t.width/this._ratio))}_handleApply(){const t={format:this._format,quality:this._format!=="png"?this._quality:void 0,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent("transform-confirm",{detail:{params:t,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent("transform-skip",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("transform-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleClose()}render(){const t=this._format==="png";return n.html`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">${this.t("exportOptions","Export Options")}</div>
            <button class="close-btn" @click=${this._handleClose} title=${this.t("close","Close")}>
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">${this.t("format","Format")}</span>
            <ap-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${go}
              @ap-change=${this._handleFormatChange}
            ></ap-radio-group>
          </div>

          ${t?n.nothing:n.html`
            <div class="section">
              <span class="section-label">${this.t("quality","Quality")}</span>
              <ap-dropdown
                .value=${this._quality}
                .options=${mo}
                @ap-change=${this._handleQualityChange}
              ></ap-dropdown>
            </div>
          `}

          <div class="section">
            <span class="section-label">${this.t("size","Size")}</span>
            ${this.isMultiSelect?n.html`
              <div class="input-group half-width">
                <span class="input-label">${this.t("maxSize","Max Size")}</span>
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
            `:n.html`
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
                  <ap-icon name=${this._lockAspect?"lock":"link-2"} .size=${16}></ap-icon>
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
              ${vo.map(e=>n.html`
                <button
                  class="preset-btn ${this._activePreset===e.value?"active":""}"
                  @click=${()=>this._handlePreset(e)}
                >${e.label}</button>
              `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>${this.exportOriginalLabel??this.t("exportOriginal","Export Original")}</button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>${this.applyExportLabel??this.t("applyAndExport","Apply & Export")}</button>
          </div>
        </div>
      </div>
    `}};be.styles=[pe,n.css`
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
  `];Ee([d.property({type:Array})],be.prototype,"assets",2);Ee([d.property({type:Boolean})],be.prototype,"isMultiSelect",2);Ee([d.property({attribute:!1})],be.prototype,"t",2);Ee([d.property({attribute:!1})],be.prototype,"exportOriginalLabel",2);Ee([d.property({attribute:!1})],be.prototype,"applyExportLabel",2);Ee([d.state()],be.prototype,"_format",2);Ee([d.state()],be.prototype,"_quality",2);Ee([d.state()],be.prototype,"_width",2);Ee([d.state()],be.prototype,"_height",2);Ee([d.state()],be.prototype,"_lockAspect",2);Ee([d.state()],be.prototype,"_activePreset",2);be=Ee([d.customElement("ap-transformation-dialog")],be);var fc=Object.defineProperty,gc=Object.getOwnPropertyDescriptor,Us=(t,e,s,i)=>{for(var a=i>1?void 0:i?gc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&fc(e,s,a),a};let It=class extends n.LitElement{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent("ap-toggle",{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleHostClick)}_onSlotChange(t){const e=t.target;this._hasLabel=e.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return n.html`
      <div class="box">
        <svg class="check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        <svg class="dash" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </div>
      <span class="label" ?hidden=${!this._hasLabel}><slot @slotchange=${this._onSlotChange}></slot></span>
    `}};It.styles=[n.css`
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
    `];Us([d.property({type:Boolean,reflect:!0})],It.prototype,"checked",2);Us([d.property({type:Boolean,reflect:!0})],It.prototype,"indeterminate",2);Us([d.property({type:Boolean,reflect:!0})],It.prototype,"disabled",2);It=Us([d.customElement("ap-checkbox")],It);var mc=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,Ra=(t,e,s,i)=>{for(var a=i>1?void 0:i?vc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&mc(e,s,a),a};let Is=class extends n.LitElement{constructor(){super(...arguments),this.open=!1,this._handleOutsideClick=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)}}render(){return n.html`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleOutsideClick)}};Is.styles=[n.css`
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
    `];Ra([d.state()],Is.prototype,"open",2);Is=Ra([d.customElement("ap-popover")],Is);var bc=Object.defineProperty,yc=Object.getOwnPropertyDescriptor,za=(t,e,s,i)=>{for(var a=i>1?void 0:i?yc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&bc(e,s,a),a};let Ms=class extends n.LitElement{constructor(){super(...arguments),this.variant="default"}render(){return n.html`<span class="badge"><slot></slot></span>`}};Ms.styles=[n.css`
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
    `];za([d.property({reflect:!0})],Ms.prototype,"variant",2);Ms=za([d.customElement("ap-badge")],Ms);var _c=Object.defineProperty,xc=Object.getOwnPropertyDescriptor,ja=(t,e,s,i)=>{for(var a=i>1?void 0:i?xc(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&_c(e,s,a),a};let Ds=class extends n.LitElement{constructor(){super(...arguments),this.text=""}render(){return n.html`
      <slot></slot>
      <div class="tip">${this.text}</div>
    `}};Ds.styles=[n.css`
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
    `];ja([d.property()],Ds.prototype,"text",2);Ds=ja([d.customElement("ap-tooltip")],Ds);var wc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,lt=(t,e,s,i)=>{for(var a=i>1?void 0:i?$c(e,s):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=(i?o(e,s,a):o(a))||a);return i&&a&&wc(e,s,a),a};const kc=/[/\\\x00-\x1f]/;function Sc(t){return kc.test(t)?`Folder name can't contain "/" or "\\".`:t==="."||t===".."?`Folder name can't be "." or "..".`:null}let Ue=class extends n.LitElement{constructor(){super(...arguments),this.currentFolderPath="/",this.loading=!1,this.error=null,this._name="",this._localError=null,this._apiErrorDismissed=!1,this._handleDocKeyDown=t=>{t.key==="Escape"&&(t.preventDefault(),this._handleCancel())}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleDocKeyDown),requestAnimationFrame(()=>{var t;return(t=this._input)==null?void 0:t.focus()})}disconnectedCallback(){document.removeEventListener("keydown",this._handleDocKeyDown),super.disconnectedCallback()}updated(t){t.has("error")&&this.error&&(this._apiErrorDismissed=!1)}_handleInput(t){this._name=t.target.value,this._localError&&(this._localError=null),this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_canSubmit(){return!this.loading&&this._name.trim().length>0}_handleConfirm(){if(!this._canSubmit())return;const t=this._name.trim(),e=Sc(t);if(e){this._localError=e;return}this.dispatchEvent(new CustomEvent("create-folder-confirm",{detail:{name:t},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent("create-folder-cancel",{bubbles:!0,composed:!0}))}_handleBackdropClick(t){t.target===t.currentTarget&&this._handleCancel()}_handleKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this._handleConfirm())}render(){const t=this.currentFolderPath||"/",e=this._localError??(this._apiErrorDismissed?null:this.error);return n.html`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="ap-cf-title">
          <div class="title" id="ap-cf-title">Create folder</div>
          <div class="description">In <code>${t}</code></div>

          <input
            type="text"
            placeholder="Folder name"
            .value=${this._name}
            ?disabled=${this.loading}
            @input=${this._handleInput}
            @keydown=${this._handleKeyDown}
            aria-label="Folder name"
            aria-invalid=${e?"true":"false"}
          />
          ${e?n.html`<div class="error" role="alert">${e}</div>`:n.nothing}

          <div class="actions">
            <button class="btn" @click=${this._handleCancel}>Cancel</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${!this._canSubmit()}>
              ${this.loading?n.html`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> Creating...</span>`:"Create"}
            </button>
          </div>
        </div>
      </div>
    `}};Ue.styles=[pe,n.css`
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
      animation: ap-cf-backdrop-in 150ms ease-out;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 24px 28px 20px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      animation: ap-cf-dialog-in 180ms ease-out;
    }
    @keyframes ap-cf-backdrop-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes ap-cf-dialog-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    @media (prefers-reduced-motion: reduce) {
      .backdrop, .dialog { animation: none; }
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 6px;
    }
    .description {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 16px;
      line-height: 1.5;
      word-break: break-all;
      overflow-wrap: anywhere;
    }
    .description code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.8125rem;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      padding: 1px 6px;
      border-radius: 4px;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    input {
      width: 100%;
      box-sizing: border-box;
      height: 36px;
      padding: 0 12px;
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
    .error {
      font-size: 0.8125rem;
      color: var(--ap-destructive, oklch(0.577 0.245 27.325));
      margin: 6px 0 0;
      line-height: 1.25rem;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 16px;
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
  `];lt([d.property()],Ue.prototype,"currentFolderPath",2);lt([d.property({type:Boolean})],Ue.prototype,"loading",2);lt([d.property()],Ue.prototype,"error",2);lt([d.state()],Ue.prototype,"_name",2);lt([d.state()],Ue.prototype,"_localError",2);lt([d.state()],Ue.prototype,"_apiErrorDismissed",2);lt([d.query("input")],Ue.prototype,"_input",2);Ue=lt([d.customElement("ap-create-folder-dialog")],Ue);var Cc=Object.defineProperty,ct=(t,e,s,i)=>{for(var a=void 0,r=t.length-1,o;r>=0;r--)(o=t[r])&&(a=o(e,s,a)||a);return a&&Cc(e,s,a),a};const Ei=class Ei extends n.LitElement{constructor(){super(),this._initFailed=!1,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._onDragEnter=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))},this._onDragLeave=e=>{var s;!((s=this.config)!=null&&s.uploader)||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{var i,a;if(!((i=this.config)!=null&&i.uploader)||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;const s=Array.from(((a=e.dataTransfer)==null?void 0:a.files)??[]);s.length>0&&this._openUploader(s)},this._cancelCreateFolderRequested=!1,this.store=Ya(),this.storeCtrl=new Kr(this,this.store),this.selectionCtrl=new qr(this,this.store),this.infiniteScrollCtrl=new Vr(this,()=>this._loadMore()),this.marqueeCtrl=new Hr(this,this.store)}get _isInline(){var e;return((e=this.config)==null?void 0:e.displayMode)==="inline"}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has("config")&&this.config&&this._initConfig(this.config);const s=this.renderRoot.querySelector("#sentinel");if(s&&s!==this._lastSentinel){this._lastSentinel=s;const a=this.renderRoot.querySelector(".main-content");this.infiniteScrollCtrl.observe(s,a)}const i=this.renderRoot.querySelector(".main-content");i&&i!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=i,this.marqueeCtrl.attach(i))}_initConfig(e){const s={folderSelection:!0,...e};this._initFailed=!1,this.store.setState({disabledAssetIds:new Set(s.disabledAssetIds??[]),disabledFolderIds:new Set(s.disabledFolderIds??[])}),$o(s.transformRemoteThumbnail),this._normalizedForcedFilters=ci(s.forcedFilters),this._initPromise=this._doInit(s).catch(()=>{this._initFailed=!0}),this._initI18n(s.locale),this.toggleAttribute("inline",s.displayMode==="inline"),s.displayMode==="inline"&&!this.store.getState().isOpen&&this.open()}async _initI18n(e){try{const{i18n:s,isNew:i}=await zr(e||"en");i&&s.on("missingKey",(r,o,l,c,h,u)=>{const f=l.match(/_(?:zero|one|two|few|many|other)$/),p=f&&(u!=null&&u[`defaultValue${f[0]}`])?String(u[`defaultValue${f[0]}`]):c;Ur.handleMissingKey(l,p,o)});const a=(r,o,l)=>typeof o=="string"?s.t(r,o,l??{}):s.t(r,o??{});this.store.setState({t:a})}catch{}}async _doInit(e){const s=pn(),i=s.sortBy??e.defaultSortBy??"created_at",a=s.sortDirection??e.defaultSortDirection??"desc";this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&fn(e.auth.projectToken)||e.defaultViewMode||"grid",sortBy:i,sortDirection:a}),this.apiClient=new Gr(e.auth,e.apiBase);try{if(e.auth.mode==="securityTemplate"){const{key:b,permissions:_}=await io(this.apiClient);this.apiClient.setSassKey(b),this.store.setState({sassKey:b,permissions:_})}const[r,o,l,c,h]=await Promise.allSettled([Ko(this.apiClient),Zr(this.apiClient),so(this.apiClient),No(this.apiClient),eo(this.apiClient)]),u={};if(r.status==="fulfilled"){const{fields:b,regionalVariantGroups:_,regionalFilters:$,brandColor:w}=r.value;u.metadataFields=b,u.regionalVariantGroups=_,u.regionalFilters=$,w&&(u.brandColor=w)}o.status==="fulfilled"&&(u.labels=o.value.labels||[]),l.status==="fulfilled"&&(u.tags=l.value),h.status==="fulfilled"&&(u.collections=h.value.collections||[]),c.status==="fulfilled"&&(u.fileTypes=c.value);const{pinnedFilters:f,pinnedMetadata:p}=ln(e.auth.projectToken??null),g=this.store.getState().filters;u.filters={...g,pinned:f,visible:[...f],metadata:{...g.metadata,pinned:p,visible:[...p]}},this.store.setState(u);const v=e.brandColor||u.brandColor||this.store.getState().brandColor;v&&(u.brandColor||this.store.setState({brandColor:v}),_n(this,v))}catch(r){throw this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:r,context:"init"},bubbles:!0,composed:!0})),r}}_ensureUploaderImport(){return customElements.get("sfx-uploader")?Promise.resolve():this._uploaderImportPromise?this._uploaderImportPromise:(this._uploaderImportPromise=import("@scaleflex/uploader/define").then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),this._uploaderImportPromise)}_buildUploaderConfig(){const e=this.config,s=e.uploader,i=this.store.getState();let a;return e.auth.mode==="securityTemplate"?a={mode:"security-template",container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:a={mode:"sass-key",container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:a,targetFolder:i.currentFolderPath||"/",mode:"inline",restrictions:s.restrictions,concurrency:s.concurrency,autoProceed:s.autoProceed,showFillMetadata:s.showFillMetadata,connectors:s.connectors,sourcesLayout:s.sourcesLayout,header:s.header??"back",clearOnClose:s.clearOnClose,clearOnComplete:s.clearOnComplete,closeOnComplete:s.closeOnComplete,rejectedFileAutoRemoveDelay:s.rejectedFileAutoRemoveDelay,lastUploadReview:s.lastUploadReview,showLocateButton:s.showLocateButton,showCopyCdnButton:s.showCopyCdnButton,getLocateUrl:s.getLocateUrl,minimizeOnUpload:s.minimizeOnUpload,metadataConfig:s.metadataConfig,tusConfig:s.tusConfig,locale:s.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){var i;if(!((i=this.config)!=null&&i.uploader)||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(a){this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:a instanceof Error?a:new Error(String(a)),context:"uploader-load"},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement("sfx-uploader");const s=this._uploaderEl;s.addEventListener("sfx-all-complete",()=>{this.store.getState().isOpen&&this._loadData()}),s.addEventListener("sfx-complete-action",()=>{this._closeUploader()}),s.addEventListener("sfx-cancel",()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,s.config=this._buildUploaderConfig(),await s.updateComplete,e!=null&&e.length&&s.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&(this._uploaderEl.remove(),this._uploaderEl=null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){var s,i;return!!((i=(s=e.dataTransfer)==null?void 0:s.types)!=null&&i.includes("Files"))}async open(){var h,u,f,p,g,v,b,_;const e=this.store.getState(),s=new Set(Object.keys(this._normalizedForcedFilters)),i={},a=ci((h=this.config)==null?void 0:h.defaultFilters);for(const[$,w]of Object.entries(a))s.has($)||(i[$]=w);const r=Object.keys(i),o=((u=this.config)==null?void 0:u.tabs)??["assets","folders"],l=(f=this.config)!=null&&f.rememberLastTab?mn(this.config.auth.projectToken):null,c=(l&&o.includes(l)?l:null)??((p=this.config)!=null&&p.defaultTab&&o.includes(this.config.defaultTab)?this.config.defaultTab:null)??((g=this.config)!=null&&g.initialFolderPath&&o.includes("folders")?"folders":null)??o[0]??"assets";this.store.setState({isOpen:!0,activeTab:c,searchQuery:"",isAISearchActive:!!((v=this.config)!=null&&v.enableAISearch&&((b=this.config)!=null&&b.defaultAISearch)),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,visible:[...new Set([...e.filters.pinned,...r])],applied:i},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(c),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(c),((_=this.config)==null?void 0:_.rootFolderPath)||"/"),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent("ap-open",{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._selectAllId++}_scrollToTop(){var e;(e=this.renderRoot.querySelector(".main-content"))==null||e.scrollTo({top:0})}async _loadData(){var i,a,r,o,l,c,h,u,f,p,g,v,b,_,$,w,I,F,C,U,S,B,P,A,Q,V,G,X,m,y,E,L,j,D,ye,dt,J,Me,jt,Nt,Ut,Kt,Bt;if(!this.apiClient)return;const e=++this._loadId,s=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{const Be=s.activeTab;if(Be==="assets"){const ge=this._buildSearchNotation(),Je=s.currentFolderPath||"/",Oe=s.isAISearchActive&&!!s.searchQuery,Ae=ht(this.apiClient,{fields:(i=this.config)==null?void 0:i.apiFields,folder:Je,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ge||void 0,recursive:1,...Oe&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((a=s.config)==null?void 0:a.locale)??"en"}}),me=ms(this.apiClient,{folder:Je,q:ge||void 0,search:s.searchQuery||void 0,recursive:1,...Oe&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((r=s.config)==null?void 0:r.locale)??"en"}}).catch(()=>null),[ce,_e]=await Promise.all([Ae,me]);if(e!==this._loadId)return;const xe=((o=ce.files)==null?void 0:o.length)??0,re=xe>=s.limit,we=((l=_e==null?void 0:_e.stats)==null?void 0:l.approx_files_count)??((c=_e==null?void 0:_e.info)==null?void 0:c.total_files_count)??((h=ce.info)==null?void 0:h.total_files_count)??((f=(u=ce.base)==null?void 0:u.count)==null?void 0:f.files_recursive)??((g=(p=ce.base)==null?void 0:p.count)==null?void 0:g.files_direct)??xe;this.store.setState({assets:ce.files||[],folders:[],totalCount:we,totalFolderCount:0,offset:0,hasMore:re,isLoading:!1})}else if(Be==="folders"){const ge=this._buildSearchNotation(),Je=s.currentFolderPath||"/",[Oe,Ae,me]=await Promise.all([Wr(this.apiClient,{folderPath:s.currentFolderPath,q:s.searchQuery||void 0,recursive:s.searchQuery?1:0,sort_by:s.sortBy,sort_direction:s.sortDirection}),ht(this.apiClient,{fields:(v=this.config)==null?void 0:v.apiFields,folder:Je,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:ge||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((b=s.config)==null?void 0:b.locale)??"en"}}),ms(this.apiClient,{folder:Je,q:ge||void 0,search:s.searchQuery||void 0,recursive:0,...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((_=s.config)==null?void 0:_.locale)??"en"}}).catch(()=>null)]);if(e!==this._loadId)return;const ce=Oe.folders||[];let _e={};if(ce.length>0)try{_e=await Xr(this.apiClient,ce.map(Ct=>Ct.uuid))}catch{}if(e!==this._loadId)return;const xe=(($=Ae.files)==null?void 0:$.length)??0,re=xe>=s.limit,we=((w=me==null?void 0:me.stats)==null?void 0:w.approx_files_count)??((I=me==null?void 0:me.info)==null?void 0:I.total_files_count)??((F=Ae.info)==null?void 0:F.total_files_count)??((U=(C=Ae.base)==null?void 0:C.count)==null?void 0:U.files_direct)??xe;this.store.setState({assets:Ae.files||[],folders:ce,folderPreviews:_e,totalCount:we,totalFolderCount:Oe.total??ce.length,offset:0,hasMore:re,isLoading:!1})}else if(Be==="labels"){if(!s.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:s.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ge=s.labels.find(Bs=>Bs.uuid===s.activeLabelUuid);if(!ge){this.store.setState({isLoading:!1});return}const Je=ge.sid.replace("#",""),Oe=this._buildSearchNotation(),Ae=`labels:${Je}${Oe?" "+Oe:""}`,me=s.isAISearchActive&&!!s.searchQuery,ce=ht(this.apiClient,{fields:(S=this.config)==null?void 0:S.apiFields,folder:"/",offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:Ae,recursive:1,...me&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((B=s.config)==null?void 0:B.locale)??"en"}}),_e=ms(this.apiClient,{folder:"/",q:Ae,search:s.searchQuery||void 0,recursive:1,...me&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((P=s.config)==null?void 0:P.locale)??"en"}}).catch(()=>null),[xe,re]=await Promise.all([ce,_e]);if(e!==this._loadId)return;const we=((A=xe.files)==null?void 0:A.length)??0,Ct=we>=s.limit,Ks=((Q=re==null?void 0:re.stats)==null?void 0:Q.approx_files_count)??((V=re==null?void 0:re.info)==null?void 0:V.total_files_count)??((G=xe.info)==null?void 0:G.total_files_count)??((m=(X=xe.base)==null?void 0:X.count)==null?void 0:m.files_recursive)??((E=(y=xe.base)==null?void 0:y.count)==null?void 0:E.files_direct)??we;this.store.setState({assets:xe.files||[],folders:[],totalCount:Ks,totalFolderCount:0,offset:0,hasMore:Ct,isLoading:!1})}else if(Be==="collections"){if(!s.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const ge=s.activeCollectionFolder;if(!(ge&&!((L=ge.children)!=null&&L.length))){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}const Oe=s.activeCollectionUuid,Ae=ge.filters||void 0,me=this._buildSearchNotation(),ce=s.isAISearchActive&&!!s.searchQuery,_e=ht(this.apiClient,{fields:(j=this.config)==null?void 0:j.apiFields,offset:0,limit:s.limit,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:me||void 0,recursive:1,collection_uuid:Oe,f64:Ae,...ce&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((D=s.config)==null?void 0:D.locale)??"en"}}),xe=ms(this.apiClient,{q:me||void 0,search:s.searchQuery||void 0,recursive:1,collection_uuid:Oe,f64:Ae,...ce&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((ye=s.config)==null?void 0:ye.locale)??"en"}}).catch(()=>null),[re,we]=await Promise.all([_e,xe]);if(e!==this._loadId)return;const Ct=((dt=re.files)==null?void 0:dt.length)??0,Ks=Ct>=s.limit,Bs=((J=we==null?void 0:we.stats)==null?void 0:J.approx_files_count)??((Me=we==null?void 0:we.info)==null?void 0:Me.total_files_count)??((jt=re.info)==null?void 0:jt.total_files_count)??((Ut=(Nt=re.base)==null?void 0:Nt.count)==null?void 0:Ut.files_recursive)??((Bt=(Kt=re.base)==null?void 0:Kt.count)==null?void 0:Bt.files_direct)??Ct;this.store.setState({assets:re.files||[],folders:[],totalCount:Bs,totalFolderCount:0,offset:0,hasMore:Ks,isLoading:!1})}}catch(Be){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:Be,context:"loadData"},bubbles:!0,composed:!0}))}}async _loadMore(){var a,r,o;const e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((a=e.activeCollectionFolder.children)!=null&&a.length)))return;const s=++this._loadMoreId,i=e.offset+e.limit;this.store.setState({isLoading:!0});try{const l=this._buildSearchNotation();let c=l||void 0,h=e.currentFolderPath||"/",u=e.activeTab==="folders"?0:1;if(e.activeTab==="labels"&&e.activeLabelUuid){const w=e.labels.find(I=>I.uuid===e.activeLabelUuid);w&&(c=`labels:${w.sid.replace("#","")}${l?" "+l:""}`),h="/",u=1}let f,p;e.activeTab==="collections"&&e.activeCollectionFolder&&(f=e.activeCollectionUuid||void 0,p=e.activeCollectionFolder.filters||void 0,h="",u=1);const g=await ht(this.apiClient,{fields:(r=this.config)==null?void 0:r.apiFields,...h?{folder:h}:{},offset:i,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:c,recursive:u,...f&&{collection_uuid:f},...p&&{f64:p},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:((o=e.config)==null?void 0:o.locale)??"en"}});if(s!==this._loadMoreId)return;const v=this.store.getState().assets,b=g.files||[],_=b.length>=e.limit,$=[...v,...b];this.store.setState({assets:$,offset:i,hasMore:_,isLoading:!1})}catch{if(s!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){var s,i;this.close(),(i=(s=this.config)==null?void 0:s.onCancel)==null||i.call(s),this.dispatchEvent(new CustomEvent("ap-cancel",{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){var a;const s=this.store.getState();if(s.activeTab==="labels"&&!s.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(s.activeTab==="collections"&&!(s.activeCollectionFolder&&!((a=s.activeCollectionFolder.children)!=null&&a.length))){this.store.setState({searchQuery:e.detail.value});return}const i={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};s.isAISearchActive&&e.detail.value&&(i.sortBy="relevance"),this.store.setState(i),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){var r;const s=e.detail.active,i=this.store.getState(),a={isAISearchActive:s};i.searchQuery&&(s?a.sortBy="relevance":i.sortBy==="relevance"&&(a.sortBy=((r=this.config)==null?void 0:r.defaultSortBy)??"created_at"),a.offset=0,a.assets=[],a.folders=[],a.isLoading=!0),this.store.setState(a),i.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){var i;const s=e.detail.mode;this.store.setState({viewMode:s}),(i=this.config)!=null&&i.rememberLastView&&un(s,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){const{groupUuid:s,value:i}=e.detail,a=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...a,[s]:i}})}_handleSortChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortBy:s,offset:0,assets:[],folders:[]}),aa(s,i.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){const s=e.detail.value,i=this.store.getState();this.store.setState({sortDirection:s,offset:0,assets:[],folders:[]}),aa(i.sortBy,s),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){var i,a;const s=e.detail.tab;(i=this.config)!=null&&i.rememberLastTab&&gn(s,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:s,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:((a=this.config)==null?void 0:a.rootFolderPath)??"/",breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){var s;const e=(s=this.config)==null?void 0:s.transformations;return typeof e=="object"?e:void 0}_handleQuickSelect(e){var i;const s=e.detail.asset;if((i=this.config)!=null&&i.transformations&&gt(s)){this._transformAssets=[s],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([s])}_emitSelect(e,s){var a,r;const i={assets:e};s!=null&&s.length&&(i.folders=s),(r=(a=this.config)==null?void 0:a.onSelect)==null||r.call(a,e,s!=null&&s.length?s:void 0),this.dispatchEvent(new CustomEvent("ap-select",{detail:i,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){var r;const s=e.detail.folder,i=this.store.getState(),a=s.path||`${i.currentFolderPath}${s.name}/`;(r=this.config)!=null&&r.rememberLastFolder&&ra(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s.uuid,currentFolderPath:a,breadcrumb:[...i.breadcrumb,{uuid:s.uuid,name:s.name,path:a}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){var l,c;const s=e.detail.uuid,i=this.store.getState();if(i.activeTab==="labels"){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(i.activeTab==="collections"){if(this._selectAllId++,!s){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(s===i.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[i.breadcrumb[0]],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}const h=this._findCollectionFolder(i.activeCollectionFolders,s);if(h){const u=i.breadcrumb.findIndex(p=>p.uuid===s),f=i.breadcrumb.slice(0,u+1);this.store.setState({activeCollectionFolder:h,breadcrumb:f,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}const a=s?i.breadcrumb.findIndex(h=>h.uuid===s):-1,r=s?i.breadcrumb.slice(0,a+1):[],o=r.length>0?r[r.length-1].path:((l=this.config)==null?void 0:l.rootFolderPath)||"/";(c=this.config)!=null&&c.rememberLastFolder&&ra(o,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:s||null,currentFolderPath:o,breadcrumb:r,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){const s=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:s.uuid,breadcrumb:[{uuid:s.uuid,name:s.name,path:""}],searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){const s=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:s.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:s.uuid,name:s.title,path:""}],searchQuery:"",offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{const i=await to(this.apiClient,s.uuid),a=ma(i.folders||[]);this.store.setState({activeCollectionFolders:a,isLoadingCollectionFolders:!1,isLoading:!1})}catch(i){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:i,context:"loadCollectionFolders"},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){var l;const s=e.detail.folder,i=this.store.getState(),a=s.path.split(" -> ").filter(Boolean),r=[{uuid:i.activeCollectionUuid,name:((l=i.breadcrumb[0])==null?void 0:l.name)||"Collection",path:""}];let o="";for(const c of a)o=o?`${o} -> ${c}`:c,r.push({uuid:o,name:c,path:o});this._selectAllId++,this.store.setState({activeCollectionFolder:s,breadcrumb:r,searchQuery:"",offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,s){for(const i of e){if(i.path===s)return i;if(i.children){const a=this._findCollectionFolder(i.children,s);if(a)return a}}return null}_getVisibleCollectionFolders(){const e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){var s,i,a;return e==="folders"&&((s=this.config)==null?void 0:s.rememberLastFolder)&&hn(this.config.auth.projectToken)||((i=this.config)==null?void 0:i.initialFolderPath)||((a=this.config)==null?void 0:a.rootFolderPath)||"/"}_buildBreadcrumbFromPath(e,s){if(!e||e===s||e==="/")return[];const a=(e.startsWith(s)?e.slice(s.length):e.replace(/^\//,"")).split("/").filter(Boolean),r=[];let o=s.endsWith("/")?s:s+"/";for(const l of a)o+=l+"/",r.push({uuid:o,name:l,path:o});return r}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){var a,r;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((a=this.config)==null?void 0:a.folderSelection)!==!1&&((r=this.config)==null?void 0:r.folderSelectionMode)==="assets"){this._folderResolveOpen=!0;return}this._emitSelect(s,i.length?i:void 0)}_handleSelectionTransform(e){var r,o;const s=e.detail.assets,i=e.detail.folders||[];if(i.length>0&&((r=this.config)==null?void 0:r.folderSelection)!==!1&&((o=this.config)==null?void 0:o.folderSelectionMode)==="assets"){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(s.filter(gt).length===0){this._emitSelect(s,i.length?i:void 0);return}this._transformAssets=s,this._transformFolders=i,this._transformOpen=!0}async _handleFolderResolveConfirm(e){var r;const s=e.detail.mode,i=this.selectionCtrl.getSelectedFolders(),a=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{const o=await Promise.all(i.map(p=>{var g;return ht(this.apiClient,{fields:(g=this.config)==null?void 0:g.apiFields,folder:p.path,recursive:s==="recursive"?1:0,limit:1e4})})),l=[];for(const p of o)l.push(...p.files);const c=[...a],h=new Set(c.map(p=>p.uuid));for(const p of l)h.has(p.uuid)||(c.push(p),h.add(p.uuid));const u=(r=this.config)==null?void 0:r.maxSelections,f=u?c.slice(0,u):c;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=f,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(f)}catch(o){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:o,context:"folderResolve"},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){const s=e.detail.params,i=e.detail.isAspectLocked??!0,a=this._transformAssets,r=this._transformFolders,o=a.length>1,l=ui(s,{isMultiSelect:o,isAspectLocked:i}),c=a.map(h=>{var g,v;if(!gt(h))return h;const u=(g=h.url)==null?void 0:g.cdn,f=(v=h.url)==null?void 0:v.permalink,p={cdn:u?Ve(u,l):""};return f&&(p.permalink_cdn=Ve(f,l)),{...h,transformation:{params:s,url:p}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(c,r.length?r:void 0)}_handleTransformSkip(){const e=this._transformAssets,s=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,s.length?s:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){const s=e.detail.name;if(!s||this._isCreatingFolder||!this.apiClient)return;const i=this.store.getState().currentFolderPath||"/";this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await Jr(this.apiClient,s,i),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(a){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(a))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){const s=(e==null?void 0:e.message)??"";if(/timed out/i.test(s))return"Request timed out. Please try again.";const i=s.match(/^API error: (\d+)/);if(i)switch(Number(i[1])){case 400:return"Invalid folder name.";case 401:return"Authentication failed. Please reload the page.";case 403:return"You do not have permission to create a folder here.";case 409:return"A folder with this name already exists.";default:return"Failed to create folder. Please try again."}return s||"Failed to create folder. Please try again."}async _handleSelectAll(e){var c,h,u;const s=this.store.getState();if(s.isSelectingAll||!this.apiClient||!(((c=s.config)==null?void 0:c.multiSelect)??!0))return;const a=((h=e==null?void 0:e.detail)==null?void 0:h.scope)??"all",r=a!=="assets"&&((u=this.config)==null?void 0:u.folderSelection)!==!1&&s.folders.length>0;if(!(a!=="folders")){r&&this.selectionCtrl.selectAllFolders(s.folders);return}if(s.assets.length>=s.totalCount){r&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(s.assets);return}const l=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{const f=this._buildSearchNotation();let p=s.currentFolderPath||"/";const g=s.limit,v=s.assets,b=s.totalCount;let _=s.activeTab==="folders"?0:1,$=f||void 0;if(s.activeTab==="labels"&&s.activeLabelUuid){const A=s.labels.find(Q=>Q.uuid===s.activeLabelUuid);A&&($=`labels:${A.sid.replace("#","")}${f?" "+f:""}`),p="/",_=1}let w,I;s.activeTab==="collections"&&s.activeCollectionFolder&&(w=s.activeCollectionUuid||void 0,I=s.activeCollectionFolder.filters||void 0,p="",_=1);const F=[];for(let A=v.length;A<b;A+=g)F.push(A);const C=4,U=[];for(let A=0;A<F.length;A+=C){if(l!==this._selectAllId)return;const Q=F.slice(A,A+C),V=await Promise.all(Q.map(G=>{var X,m;return ht(this.apiClient,{fields:(X=this.config)==null?void 0:X.apiFields,...p?{folder:p}:{},offset:G,limit:g,sort_by:s.sortBy,sort_direction:s.sortDirection,search:s.searchQuery||void 0,q:$,recursive:_,...w&&{collection_uuid:w},...I&&{f64:I},...s.isAISearchActive&&s.searchQuery&&{with_ai:!0,ai_query:s.searchQuery,ai_lang:((m=s.config)==null?void 0:m.locale)??"en"}})}));if(l!==this._selectAllId)return;for(const G of V)G.files&&U.push(...G.files)}if(l!==this._selectAllId)return;const S=new Set(v.map(A=>A.uuid)),B=U.filter(A=>S.has(A.uuid)?!1:(S.add(A.uuid),!0)),P=[...v,...B];this.store.setState({assets:P,offset:Math.max(0,P.length-g),hasMore:!1,isSelectingAll:!1}),r&&this.selectionCtrl.selectAllFolders(s.folders),this.selectionCtrl.selectAll(P)}catch(f){if(l!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent("ap-error",{detail:{error:f,context:"selectAll"},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){const s=new Map(this.store.getState().selectedAssets);s.delete(e.detail.uuid),this.store.setState({selectedAssets:s})}_isDateFilterKey(e){return e===k.DATE||e===k.LICENSE_EXPIRY||e===M.DUE_DATE}_handleFilterUpdate(e){const{key:s,values:i,operator:a}=e.detail,o={...this.store.getState().filters};let l=i===""||i===null||i===void 0||Array.isArray(i)&&i.length===0||typeof i=="object"&&!Array.isArray(i)&&Object.values(i).every(h=>h==null||h===""||Array.isArray(h)&&h.length===0);if(!l&&this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)){const{kind:h,preset:u,from:f,to:p}=i;l=!h&&!u&&!f&&!p}if(l){const h={...o.applied};delete h[s],o.applied=h,o.pinned.includes(s)||(o.visible=o.visible.filter(u=>u!==s))}else{const h={...o.applied};this._isDateFilterKey(s)&&typeof i=="object"&&!Array.isArray(i)?h[s]={type:"date",field:i.field||"created",kind:i.kind||null,preset:i.preset||null,from:i.from||null,to:i.to||null}:s===k.IMAGE&&typeof i=="object"&&!Array.isArray(i)?h[s]=i:h[s]={type:"string",values:Array.isArray(i)?i:[i],operator:a||":"},o.applied=h,o.visible.includes(s)||(o.visible=[...o.visible,s])}this.store.setState({filters:o,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData();const c=s===M.STATUS||s===M.APPROVER||s===M.REQUESTOR||s===M.DUE_DATE;if(this._pendingFilter===s||this._pendingFilter===k.APPROVAL&&c){this._pendingFilter=null;const h=this.renderRoot.querySelector("ap-filters-bar");h&&(h.pendingFilter=null)}}_handleFilterOpen(e){const s=e.detail.key,i=e.detail.chipRect,a=this.renderRoot.querySelector("ap-content-toolbar");let r,o;if(i){const l=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(l){const c=l.getBoundingClientRect();r=i.left-c.left,o=i.bottom-c.top}}a==null||a.openFilterPanel(s,!0,r,o)}_handleMetadataFilterOpen(e){const{fieldKey:s,chipRect:i}=e.detail,a=this.renderRoot.querySelector("ap-content-toolbar");let r,o;if(i){const l=this.renderRoot.querySelector(".toolbar-filters-wrapper");if(l){const c=l.getBoundingClientRect();r=i.left-c.left,o=i.bottom-c.top}}a==null||a.openMetadataFieldPanel(s,!0,r,o)}_handleFilterPanelChange(e){const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=e.detail.key,s.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,s&&(s.pendingFilter=null,s.pendingMetadataField=null))}async _handleFilterPending(e){var p,g,v;const{key:s,metadataFieldKey:i}=e.detail,a=this.renderRoot.querySelector("ap-filters-bar"),r=this.renderRoot.querySelector("ap-content-toolbar");if(!a||!r)return;i?(this._pendingMetadataField=i,a.pendingMetadataField=i):s&&(this._pendingFilter=s,a.pendingFilter=s),await a.updateComplete;let o=a.renderRoot.querySelector(".chip.pending");if(!o){const b=a.renderRoot.querySelectorAll(".chip.pinned-empty"),_=i?(p=a._getMetadataLabel)==null?void 0:p.call(a,i):void 0;for(const $ of b){const w=(v=(g=$.querySelector(".chip-label"))==null?void 0:g.textContent)==null?void 0:v.trim();if(i&&w===_){o=$;break}if(s&&w===(Ot[s]||s)){o=$;break}}}if(!o)return;const l=o.getBoundingClientRect(),c=this.renderRoot.querySelector(".toolbar-filters-wrapper"),h=c==null?void 0:c.getBoundingClientRect(),u=h?l.left-h.left:l.left,f=h?l.bottom-h.top:void 0;i?r.openMetadataFieldPanel(i,!0,u,f):s&&r.openFilterPanel(s,!0,u,f)}_handleFilterRemove(e){var o;const s=e.detail.key;if(s in(((o=this.config)==null?void 0:o.forcedFilters)??{}))return;const a={...this.store.getState().filters},r={...a.applied};delete r[s],a.applied=r,a.pinned.includes(s)||(a.visible=a.visible.filter(l=>l!==s)),this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){const{fieldKey:s,operator:i,values:a,metadataType:r}=e.detail,l={...this.store.getState().filters},c={...l.metadata},h={...c.applied};if(!a||Array.isArray(a)&&a.length===0?(delete h[s],c.applied=h,c.pinned.includes(s)||(c.visible=c.visible.filter(f=>f!==s))):(h[s]={type:"string",values:Array.isArray(a)?a:[a],operator:i||":",metadataType:r},c.applied=h,c.visible.includes(s)||(c.visible=[...c.visible,s])),l.metadata=c,this.store.setState({filters:l,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===s){this._pendingMetadataField=null;const f=this.renderRoot.querySelector("ap-filters-bar");f&&(f.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){const{fieldKey:s,visible:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.visible.includes(s)||(o.visible=[...o.visible,s]):o.visible=o.visible.filter(l=>l!==s),r.metadata=o,this.store.setState({filters:r})}_handleMetadataFilterRemove(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata},o={...r.applied};delete o[s],r.applied=o,r.pinned.includes(s)||(r.visible=r.visible.filter(l=>l!==s)),a.metadata=r,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){var l,c;const{key:s,pinned:i}=e.detail,r={...this.store.getState().filters};i?r.pinned.includes(s)||(r.pinned=[...r.pinned,s]):(r.pinned=r.pinned.filter(h=>h!==s),s in r.applied||(r.visible=r.visible.filter(h=>h!==s))),this.store.setState({filters:r});const o=((c=(l=this.store.getState().config)==null?void 0:l.auth)==null?void 0:c.projectToken)??null;cn(o,r.pinned)}_handleMetadataPin(e){var c,h;const{fieldKey:s,pinned:i}=e.detail,r={...this.store.getState().filters},o={...r.metadata};i?o.pinned.includes(s)||(o.pinned=[...o.pinned,s]):(o.pinned=o.pinned.filter(u=>u!==s),s in o.applied||(o.visible=o.visible.filter(u=>u!==s))),r.metadata=o,this.store.setState({filters:r});const l=((h=(c=this.store.getState().config)==null?void 0:c.auth)==null?void 0:h.projectToken)??null;dn(l,o.pinned)}_handleFiltersClearAll(){const e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},visible:[...e.filters.pinned],metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});const s=this.renderRoot.querySelector("ap-filters-bar");s&&(s.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterDeactivate(e){const s=e.detail.key,a={...this.store.getState().filters};a.visible=a.visible.filter(r=>r!==s),this.store.setState({filters:a})}_handleMetadataFieldDeactivate(e){const{fieldKey:s}=e.detail,a={...this.store.getState().filters},r={...a.metadata};r.visible=r.visible.filter(o=>o!==s),a.metadata=r,this.store.setState({filters:a})}_handleFiltersSet(e){var h;const{applied:s,metadata:i}=e.detail,r={...this.store.getState().filters},o=new Set(Object.keys(((h=this.config)==null?void 0:h.forcedFilters)??{})),l={...s};for(const u of o)delete l[u];r.applied=l;const c=Object.keys(s);if(r.visible=[...new Set([...r.pinned,...c])],i){const u={...r.metadata};u.applied=i.applied;const f=Object.keys(i.applied);u.visible=[...new Set([...u.pinned,...f])],r.metadata=u}this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){var s;const e=this.storeCtrl.state;if(e.activeTab==="labels"&&!e.activeLabelUuid)return $n;if(e.activeTab==="collections"){if(!e.activeCollectionUuid)return kn;if(!(e.activeCollectionFolder&&!((s=e.activeCollectionFolder.children)!=null&&s.length)))return Sn}return e.searchQuery?xn:e.activeTab==="folders"?wn:mi}_buildSearchNotation(){const e=this.store.getState(),s={...this._normalizedForcedFilters,...e.filters.applied};return Vo(s,e.filters.metadata.applied).join(" ")}render(){var I,F,C,U,S,B,P,A,Q,V,G,X,m,y,E,L,j,D,ye,dt,J,Me,jt,Nt,Ut,Kt,Bt,Be;const e=this.storeCtrl.state,s=e.t,i=Array.from(e.selectedAssets.keys()),a=Array.from(e.selectedFolders.keys()),r=((I=this.config)==null?void 0:I.disabledAssetIds)??[],o=((F=this.config)==null?void 0:F.disabledFolderIds)??[],l=this.selectionCtrl.getSelectedAssets(),c=this.selectionCtrl.getSelectedFolders(),h=((C=this.config)==null?void 0:C.folderSelection)!==!1,u=n.html`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${((U=this.config)==null?void 0:U.tabs)??["assets","folders"]}
        .isInsideLabel=${e.activeTab==="labels"&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab==="collections"&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab==="collections"&&!!e.activeCollectionFolder&&!((S=e.activeCollectionFolder.children)!=null&&S.length)}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!((B=this.config)!=null&&B.enableAISearch)}
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
    `,f=!!((P=this.config)!=null&&P.uploader),p=((A=this.config)==null?void 0:A.folderCreation)===!0,g=((Q=this.config)==null?void 0:Q.auth.mode)==="sassKey",v=e.activeTab==="folders",b=p&&v&&(g||ao(e.permissions,ro.FOLDER_CREATE)),_=n.html`
      <div class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?n.html`
          <div class="drop-zone-overlay">
            <div class="drop-zone-label">
              <ap-icon name="upload" .size=${32}></ap-icon>
              ${s("dropFilesToUpload","Drop files to upload")}
            </div>
          </div>
        `:n.nothing}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${(V=this.config)!=null&&V.stickyFilters?" sticky":""}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${f}
              .showCreateFolder=${b}
              .showFilters=${!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((G=e.activeCollectionFolder.children)!=null&&G.length)))}
              .countLabel=${e.activeTab==="labels"&&!e.activeLabelUuid?s("labelCount",{count:e.labels.length,defaultValue_one:"{{count}} label",defaultValue_other:"{{count}} labels"}):e.activeTab==="collections"&&!e.activeCollectionUuid?s("collectionCount",{count:e.collections.length,defaultValue_one:"{{count}} collection",defaultValue_other:"{{count}} collections"}):e.activeTab==="collections"&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!((X=e.activeCollectionFolder.children)!=null&&X.length))?s("folderCount",{count:this._getVisibleCollectionFolders().length,defaultValue_one:"{{count}} folder",defaultValue_other:"{{count}} folders"}):""}
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
              .approverUsers=${((m=this.config)==null?void 0:m.approverUsers)??[]}
              .requesterUsers=${((y=this.config)==null?void 0:y.requesterUsers)??[]}
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

            ${e.activeTab==="labels"&&!e.activeLabelUuid||e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((E=e.activeCollectionFolder.children)!=null&&E.length))?n.nothing:n.html`
            <ap-filters-bar
              .appliedFilters=${e.filters.applied}
              .appliedMetadata=${e.filters.metadata.applied}
              .metadataFields=${e.metadataFields}
              .tags=${e.tags}
              .labels=${e.labels}
              .approverUsers=${((L=this.config)==null?void 0:L.approverUsers)??[]}
              .requesterUsers=${((j=this.config)==null?void 0:j.requesterUsers)??[]}
              .pinnedFilters=${e.filters.pinned}
              .pinnedMetadataFields=${e.filters.metadata.pinned}
              .forcedFilters=${((D=this.config)==null?void 0:D.forcedFilters)??{}}
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

            ${e.breadcrumb.length>0?n.html`<ap-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab==="labels"?s("tabLabels","Labels"):e.activeTab==="collections"?s("tabCollections","Collections"):s("rootFolder","Root")}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></ap-breadcrumb>`:n.nothing}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab==="labels"&&!e.activeLabelUuid)&&!(e.activeTab==="collections"&&!(e.activeCollectionFolder&&!((ye=e.activeCollectionFolder.children)!=null&&ye.length)))?n.html`<ap-skeleton .variant=${e.viewMode} .gridSize=${((dt=this.config)==null?void 0:dt.gridSize)??"normal"} .multiSelect=${((J=this.config)==null?void 0:J.multiSelect)!==!1} .folderCount=${2} .t=${s}></ap-skeleton>`:this._renderContent(e,i,a,h,r,o)}

          <ap-marquee-overlay .active=${this.marqueeCtrl.isActive} .rect=${this.marqueeCtrl.rect}></ap-marquee-overlay>
          ${this._folderResolveOpen?n.html`
            <ap-folder-resolve-dialog
              .folders=${c}
              .loading=${e.isResolvingFolders}
              .t=${s}
              @folder-resolve-confirm=${this._handleFolderResolveConfirm}
              @folder-resolve-cancel=${this._handleFolderResolveCancel}
            ></ap-folder-resolve-dialog>
          `:n.nothing}
          ${this._transformOpen?n.html`
            <ap-transformation-dialog
              .assets=${this._transformAssets}
              .isMultiSelect=${this._transformAssets.length>1}
              .t=${s}
              .exportOriginalLabel=${(Me=this._transformationsConfig)==null?void 0:Me.exportOriginalLabel}
              .applyExportLabel=${(jt=this._transformationsConfig)==null?void 0:jt.applyExportLabel}
              @transform-confirm=${this._handleTransformConfirm}
              @transform-skip=${this._handleTransformSkip}
              @transform-cancel=${this._handleTransformCancel}
            ></ap-transformation-dialog>
          `:n.nothing}
          ${this._createFolderOpen?n.html`
            <ap-create-folder-dialog
              .currentFolderPath=${e.currentFolderPath}
              .loading=${this._isCreatingFolder}
              .error=${this._createFolderError}
              @create-folder-confirm=${this._handleCreateFolderConfirm}
              @create-folder-cancel=${this._handleCreateFolderCancel}
            ></ap-create-folder-dialog>
          `:n.nothing}
        </div>

        ${e.isPreviewOpen&&e.previewAsset?n.html`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${i}
              .containerToken=${e.projectToken}
              .showMetadata=${((Nt=this.config)==null?void 0:Nt.showMetadata)!==!1}
              .metadataFields=${e.metadataFields}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${((Ut=this.config)==null?void 0:Ut.multiSelect)??!0}
              .t=${s}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:n.nothing}
      </div>
    `,$=n.html`
      <ap-selection-bar
        .selectedAssets=${l}
        .selectedFolders=${c}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${((Kt=this.config)==null?void 0:Kt.multiSelect)??!0}
        .maxSelections=${(Bt=this.config)==null?void 0:Bt.maxSelections}
        .showTransform=${!!((Be=this.config)!=null&&Be.transformations)&&l.some(gt)}
        .t=${s}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,w=this._isUploaderOpen?n.html`
      <div class="uploader-overlay">
        <div class="uploader-body">${this._uploaderEl}</div>
      </div>
    `:n.nothing;return this._isInline?e.isOpen?n.html`
        <div class="ap-inline">
          ${this._isUploaderOpen?w:n.html`
            <div class="inline-header">${u}</div>
            <div class="inline-content">${_}</div>
            <div class="inline-footer">${$}</div>
          `}
        </div>
      `:n.nothing:n.html`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${ge=>this._handleCancel(ge.detail.reason)}
      >
        ${this._isUploaderOpen?w:n.html`
          <div slot="header">${u}</div>
          ${_}
          <div slot="footer">${$}</div>
        `}
      </ap-modal>
    `}_renderContent(e,s,i=[],a=!1,r=[],o=[]){var c,h,u,f,p,g,v,b,_,$,w,I,F;const l=e.t;if(e.activeTab==="assets")return!e.isLoading&&e.assets.length===0?n.html`
          <div class="empty-state">
            <ap-icon name="search" .size=${48}></ap-icon>
            <div class="empty-title">${l("noAssetsFound","No assets found")}</div>
            <div class="empty-desc">${l("noAssetsFoundDesc","Try adjusting your search or filters")}</div>
          </div>
        `:e.viewMode==="grid"?n.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${l}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((c=this.config)==null?void 0:c.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((h=this.config)==null?void 0:h.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${l}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((u=this.config)==null?void 0:u.multiSelect)??!0}
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
      `;if(e.activeTab==="folders")return!e.isLoading&&e.folders.length===0&&e.assets.length===0?n.html`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">${l("emptyFolder","This folder is empty")}</div>
            <div class="empty-desc">${l("emptyFolderDesc","No folders or files found here")}</div>
          </div>
        `:e.viewMode==="grid"?n.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .t=${l}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((f=this.config)==null?void 0:f.multiSelect)??!0}
            .folderSelectable=${a}
            .gridSize=${((p=this.config)==null?void 0:p.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .t=${l}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((g=this.config)==null?void 0:g.multiSelect)??!0}
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
      `;if(e.activeTab==="labels"){if(!e.activeLabelUuid){let C=e.labels;if(e.searchQuery){const S=e.searchQuery.toLowerCase();C=e.labels.filter(B=>B.name.toLowerCase().includes(S))}const U=e.sortDirection==="asc"?1:-1;return C=[...C].sort((S,B)=>U*S.name.localeCompare(B.name)),C.length===0?n.html`
            <div class="empty-state">
              <ap-icon name="tag" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?l("noLabelsMatchSearch","No labels match your search"):l("noLabelsFound","No labels found")}</div>
              <div class="empty-desc">${e.searchQuery?l("tryDifferentSearch","Try a different search term"):l("labelsWillAppear","Labels will appear here once created")}</div>
            </div>
          `:e.viewMode==="grid"?n.html`
            <div class="labels-grid">
              ${C.map((S,B)=>n.html`
                <ap-label-card .label=${S} .index=${B} @label-open=${this._handleLabelOpen}></ap-label-card>
              `)}
            </div>
          `:n.html`
          <div class="labels-list">
            ${C.map((S,B)=>n.html`
              <ap-label-row .label=${S} .index=${B} @label-open=${this._handleLabelOpen}></ap-label-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?n.html`
          <div class="empty-state">
            <ap-icon name="tag" .size=${48}></ap-icon>
            <div class="empty-title">${l("noAssetsInLabel","No assets in this label")}</div>
            <div class="empty-desc">${l("noAssetsInLabelDesc","Assets added to this label will appear here")}</div>
          </div>
        `:e.viewMode==="grid"?n.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${l}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((v=this.config)==null?void 0:v.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((b=this.config)==null?void 0:b.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${l}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((_=this.config)==null?void 0:_.multiSelect)??!0}
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
      `}if(e.activeTab==="collections"){if(!e.activeCollectionUuid){let S=e.collections;if(e.searchQuery){const P=e.searchQuery.toLowerCase();S=e.collections.filter(A=>A.title.toLowerCase().includes(P))}const B=e.sortDirection==="asc"?1:-1;return e.sortBy==="created_at"?S=[...S].sort((P,A)=>B*(new Date(P.created_at).getTime()-new Date(A.created_at).getTime())):e.sortBy==="updated_at"?S=[...S].sort((P,A)=>B*(new Date(P.updated_at).getTime()-new Date(A.updated_at).getTime())):S=[...S].sort((P,A)=>B*P.title.localeCompare(A.title)),S.length===0?n.html`
            <div class="empty-state">
              <ap-icon name="layout-grid" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?l("noCollectionsMatchSearch","No collections match your search"):l("noCollectionsFound","No collections found")}</div>
              <div class="empty-desc">${e.searchQuery?l("tryDifferentSearch","Try a different search term"):l("collectionsWillAppear","Collections will appear here once created")}</div>
            </div>
          `:e.viewMode==="grid"?n.html`
            <div class="collections-grid">
              ${S.map((P,A)=>n.html`
                <ap-collection-card .collection=${P} .index=${A} @collection-open=${this._handleCollectionOpen}></ap-collection-card>
              `)}
            </div>
          `:n.html`
          <div class="collections-list">
            ${S.map((P,A)=>n.html`
              <ap-collection-row .collection=${P} .index=${A} @collection-open=${this._handleCollectionOpen}></ap-collection-row>
            `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return n.html`<div class="loading-center"><ap-spinner></ap-spinner></div>`;const C=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||((($=e.activeCollectionFolder.children)==null?void 0:$.length)??0)>0){let S=C;if(e.searchQuery){const P=e.searchQuery.toLowerCase();S=C.filter(A=>A.name.toLowerCase().includes(P))}const B=e.sortDirection==="asc"?1:-1;return S=[...S].sort((P,A)=>B*P.name.localeCompare(A.name)),S.length===0?n.html`
            <div class="empty-state">
              <ap-icon name="folder" .size=${48}></ap-icon>
              <div class="empty-title">${e.searchQuery?l("noFoldersMatchSearch","No folders match your search"):l("noFoldersInCollection","No folders in this collection")}</div>
              <div class="empty-desc">${e.searchQuery?l("tryDifferentSearch","Try a different search term"):l("collectionFoldersWillAppear","Collection folders will appear here")}</div>
            </div>
          `:e.viewMode==="grid"?n.html`
            <div class="collection-folders-grid">
              ${S.map((P,A)=>n.html`
                <ap-collection-folder-card .folder=${P} .index=${A} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-card>
              `)}
            </div>
          `:n.html`
          <div class="collection-folders-list">
            ${S.map((P,A)=>n.html`
              <ap-collection-folder-row .folder=${P} .index=${A} @collection-folder-open=${this._handleCollectionFolderOpen}></ap-collection-folder-row>
            `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?n.html`
          <div class="empty-state">
            <ap-icon name="folder" .size=${48}></ap-icon>
            <div class="empty-title">${l("noAssetsInCollectionFolder","No assets in this collection folder")}</div>
            <div class="empty-desc">${l("noAssetsInCollectionFolderDesc","Assets matching this collection's criteria will appear here")}</div>
          </div>
        `:e.viewMode==="grid"?n.html`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${l}
            .selectedIds=${s}
            .selectedFolderIds=${i}
            .disabledAssetIds=${r}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${((w=this.config)==null?void 0:w.multiSelect)??!0}
            .folderSelectable=${!1}
            .gridSize=${((I=this.config)==null?void 0:I.gridSize)??"normal"}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:n.html`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${l}
          .selectedIds=${s}
          .selectedFolderIds=${i}
          .disabledAssetIds=${r}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${((F=this.config)==null?void 0:F.multiSelect)??!0}
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
      `}return n.nothing}};Ei.styles=[n.css`
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
    `];let Pe=Ei;ct([d.state()],Pe.prototype,"_isDragOver");ct([d.state()],Pe.prototype,"_isUploaderOpen");ct([d.state()],Pe.prototype,"_folderResolveOpen");ct([d.state()],Pe.prototype,"_transformOpen");ct([d.state()],Pe.prototype,"_createFolderOpen");ct([d.state()],Pe.prototype,"_isCreatingFolder");ct([d.state()],Pe.prototype,"_createFolderError");ct([d.property({type:Object})],Pe.prototype,"config");exports.AssetPicker=Pe;exports.addCdnParams=Ve;exports.buildTransformCdnParams=ui;exports.buildTransformedUrl=ko;exports.getAltText=lo;exports.getAssetDimensions=co;exports.getAssetHeight=Fs;exports.getAssetWidth=As;exports.getBestVideoUrl=uo;exports.getCdnUrl=va;exports.getTranscodedUrl=ho;exports.isAudio=no;exports.isImage=gt;exports.isTranscoded=po;exports.isVideo=oo;
