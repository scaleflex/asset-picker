const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/define-BPPbrBZO.js","assets/decorate-DzwBp3n0.js","assets/thumbnail-Bqk5FnPO.js","assets/directive-BSZPiF1A.js","assets/brand-icon-Bf8LJEW8.js","assets/provider-registry-96Csod9w.js","assets/companion-client-Cmfc-04q.js","assets/landing-DIX6IHsI.js","assets/code-block-Dan-Xu_Q.js","assets/getting-started-BrBDDWQM.js","assets/doc-utils-C97Qk3q2.js","assets/configuration-C6iUFoDW.js","assets/api-DuJxwe5r.js","assets/theming-DCySbDpp.js","assets/filters-zNo9JSAZ.js","assets/types-jwVRf3vW.js","assets/basic-BCl1hH7Z.js","assets/single-select-BhEeK8w_.js","assets/multi-select-DlQOq9VM.js","assets/disabled-assets-DSXV1uLH.js","assets/theming-ni213UO7.js","assets/custom-theming-DvdK2kgQ.js","assets/default-filters-DCNifzLu.js","assets/forced-filters-CZE-CEmk.js","assets/enabled-filters-CY0IgR5R.js","assets/enabled-metadata-fields-CU5fW3hB.js","assets/approval-users-87xgk51b.js","assets/hidden-tabs-BDfDms27.js","assets/root-folder-CClooRcK.js","assets/events--N5J5YUW.js","assets/react-wrapper-vIvYZGWV.js","assets/inline-Ax7HuXbZ.js","assets/sticky-filters-GgkvKz5s.js","assets/grid-size-kFxMvvqA.js","assets/preferences-vc6xK6Wk.js","assets/uploader-c8DL82KD.js","assets/folder-selection-BFEDEOEi.js","assets/ai-search-CpwVz7jh.js","assets/transformations--A2RBoO8.js","assets/variants-JWtjK-Fs.js","assets/language-switcher-CdD71ybT.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,r as c,t as l}from"./decorate-DzwBp3n0.js";import{a as u,i as d,n as f,r as p,t as m}from"./thumbnail-Bqk5FnPO.js";import{n as h,r as g,t as _}from"./directive-BSZPiF1A.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ee=class{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}let t=this.state;this.state={...t,...e},this._notifying=!0;try{this.listeners.forEach(e=>e(this.state,t))}finally{this._notifying=!1}if(this._pendingState){let e=this._pendingState;this._pendingState=null,this.setState(e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}};function v(){return new ee({t:(e,t,n)=>{let r=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,(e,n)=>String(t[n]??``));if(typeof t==`string`)return r(t,n??{});if(typeof t==`object`&&t){let n=t,i=n.count;return r(String(i===void 0?n.defaultValue??e:(i===1?n.defaultValue_one:n.defaultValue_other)??n.defaultValue??e),n)}return e},config:null,projectToken:``,sassKey:``,permissions:null,brandColor:``,cdnPermalinkEnabled:!1,isOpen:!1,activeTab:`assets`,viewMode:`grid`,searchQuery:``,isAISearchActive:!1,sortBy:`modified_at`,sortDirection:`desc`,previewAsset:null,isPreviewOpen:!1,assets:[],folders:[],folderPreviews:{},labels:[],tags:[],currentFolder:null,currentFolderPath:`/`,breadcrumb:[],activeLabelUuid:null,collections:[],activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,offset:0,limit:100,totalCount:0,totalFolderCount:0,isLoading:!1,isSelectingAll:!1,hasMore:!1,filters:{metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},fileTypes:[],metadataFields:[],regionalVariantGroups:[],regionalFilters:{},selectedAssets:new Map,selectedFolders:new Map,disabledAssetIds:new Set,disabledFolderIds:new Set,isResolvingFolders:!1})}var y=e=>typeof e==`string`,te=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},ne=e=>e==null?``:``+e,re=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},ie=/###/g,ae=e=>e&&e.indexOf(`###`)>-1?e.replace(ie,`.`):e,oe=e=>!e||y(e),se=(e,t,n)=>{let r=y(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(oe(e))return{};let t=ae(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return oe(e)?{}:{obj:e,k:ae(r[i])}},ce=(e,t,n)=>{let{obj:r,k:i}=se(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=se(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=se(e,o,Object),s&&s.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},le=(e,t,n,r)=>{let{obj:i,k:a}=se(e,t,Object);i[a]=i[a]||[],i[a].push(n)},ue=(e,t)=>{let{obj:n,k:r}=se(e,t);if(n)return n[r]},de=(e,t,n)=>{let r=ue(e,n);return r===void 0?ue(t,n):r},fe=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(r in e?y(e[r])||e[r]instanceof String||y(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):fe(e[r],t[r],n):e[r]=t[r]);return e},pe=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),me={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},he=e=>y(e)?e.replace(/[&<>"'\/]/g,e=>me[e]):e,ge=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},_e=[` `,`,`,`?`,`!`,`;`],ve=new ge(20),ye=(e,t,n)=>{t||=``,n||=``;let r=_e.filter(e=>t.indexOf(e)<0&&n.indexOf(e)<0);if(r.length===0)return!0;let i=ve.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},be=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:`.`;if(!e)return;if(e[t])return e[t];let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].indexOf(typeof t)>-1&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},xe=e=>e&&e.replace(`_`,`-`),Se={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}},b=new class e{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=t.prefix||`i18next:`,this.logger=e||Se,this.options=t,this.debug=t.debug}log(){var e=[...arguments];return this.forward(e,`log`,``,!0)}warn(){var e=[...arguments];return this.forward(e,`warn`,``,!0)}error(){var e=[...arguments];return this.forward(e,`error`,``)}deprecate(){var e=[...arguments];return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(y(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},Ce=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e){var t=[...arguments].slice(1);this.observers[e]&&Array.from(this.observers[e].entries()).forEach(e=>{let[n,r]=e;for(let e=0;e<r;e++)n(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(n=>{let[r,i]=n;for(let n=0;n<i;n++)r.apply(r,[e,...t])})}},we=class extends Ce{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:[`translation`],defaultNS:`translation`};super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.indexOf(`.`)>-1?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):y(n)&&i?o.push(...n.split(i)):o.push(n)));let s=ue(this.data,o);return!s&&!t&&!n&&e.indexOf(`.`)>-1&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!y(n)?s:be(this.data&&this.data[e]&&this.data[e][t],n,i)}addResource(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.indexOf(`.`)>-1&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),ce(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(let r in n)(y(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},o=[e,t];e.indexOf(`.`)>-1&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=ue(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?fe(s,n,i):s={...s,...n},ce(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.options.compatibilityAPI===`v1`?{...this.getResource(e,t)}:this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}},Te={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{this.processors[e]&&(t=this.processors[e].process(t,n,r,i))}),t}},Ee={},De=class e extends Ce{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),re([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=b.create(`translator`)}changeLanguage(e){e&&(this.language=e)}exists(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;let n=this.resolve(e,t);return n&&n.res!==void 0}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.indexOf(n)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!ye(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:y(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(a[0])>-1)&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:y(i)?[i]:i}}translate(t,n,r){if(typeof n!=`object`&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n==`object`&&(n={...n}),n||={},t==null)return``;Array.isArray(t)||(t=[String(t)]);let i=n.returnDetails===void 0?this.options.returnDetails:n.returnDetails,a=n.keySeparator===void 0?this.options.keySeparator:n.keySeparator,{key:o,namespaces:s}=this.extractFromKey(t[t.length-1],n),c=s[s.length-1],l=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&l.toLowerCase()===`cimode`){if(u){let e=n.nsSeparator||this.options.nsSeparator;return i?{res:`${c}${e}${o}`,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:`${c}${e}${o}`}return i?{res:o,usedKey:o,exactUsedKey:o,usedLng:l,usedNS:c,usedParams:this.getUsedParamsDetails(n)}:o}let d=this.resolve(t,n),f=d&&d.res,p=d&&d.usedKey||o,m=d&&d.exactUsedKey||o,h=Object.prototype.toString.apply(f),g=[`[object Number]`,`[object Function]`,`[object RegExp]`],_=n.joinArrays===void 0?this.options.joinArrays:n.joinArrays,ee=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!y(f)&&typeof f!=`boolean`&&typeof f!=`number`;if(ee&&f&&v&&g.indexOf(h)<0&&!(y(_)&&Array.isArray(f))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,f,{...n,ns:s}):`key '${o} (${this.language})' returned an object instead of string.`;return i?(d.res=e,d.usedParams=this.getUsedParamsDetails(n),d):e}if(a){let e=Array.isArray(f),t=e?[]:{},r=e?m:p;for(let e in f)if(Object.prototype.hasOwnProperty.call(f,e)){let i=`${r}${a}${e}`;t[e]=this.translate(i,{...n,joinArrays:!1,ns:s}),t[e]===i&&(t[e]=f[e])}f=t}}else if(ee&&y(_)&&Array.isArray(f))f=f.join(_),f&&=this.extendTranslation(f,t,n,r);else{let i=!1,s=!1,u=n.count!==void 0&&!y(n.count),p=e.hasDefaultValue(n),m=u?this.pluralResolver.getSuffix(l,n.count,n):``,h=n.ordinal&&u?this.pluralResolver.getSuffix(l,n.count,{ordinal:!1}):``,g=u&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),_=g&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${m}`]||n[`defaultValue${h}`]||n.defaultValue;!this.isValidLookup(f)&&p&&(i=!0,f=_),this.isValidLookup(f)||(s=!0,f=o);let ee=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&s?void 0:f,v=p&&_!==f&&this.options.updateMissing;if(s||i||v){if(this.logger.log(v?`updateKey`:`missingKey`,l,c,o,v?_:f),a){let e=this.resolve(o,{...n,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(n.lng||this.language):e.push(n.lng||this.language);let r=(e,t,r)=>{let i=p&&r!==f?r:ee;this.options.missingKeyHandler?this.options.missingKeyHandler(e,c,t,i,v,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,c,t,i,v,n),this.emit(`missingKey`,e,c,t,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&u?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,n);g&&n[`defaultValue${this.options.pluralSeparator}zero`]&&t.indexOf(`${this.options.pluralSeparator}zero`)<0&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{r([e],o+t,n[`defaultValue${t}`]||_)})}):r(e,o,_))}f=this.extendTranslation(f,t,n,d,r),s&&f===o&&this.options.appendNamespaceToMissingKey&&(f=`${c}:${o}`),(s||i)&&this.options.parseMissingKeyHandler&&(f=this.options.compatibilityAPI===`v1`?this.options.parseMissingKeyHandler(f):this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}:${o}`:o,i?f:void 0))}return i?(d.res=f,d.usedParams=this.getUsedParamsDetails(n),d):f}extendTranslation(e,t,n,r,i){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let o=y(e)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),s;if(o){let t=e.match(this.interpolator.nestingRegexp);s=t&&t.length}let c=n.replace&&!y(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(c={...this.options.interpolation.defaultVariables,...c}),e=this.interpolator.interpolate(e,c,n.lng||this.language||r.usedLng,n),o){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;s<r&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!==`v1`&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,function(){var e=[...arguments];return i&&i[0]===e[0]&&!n.context?(a.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):a.translate(...e,t)},n)),n.interpolation&&this.interpolator.reset()}let o=n.postProcess||this.options.postProcess,s=y(o)?[o]:o;return e!=null&&s&&s.length&&n.applyPostProcessor!==!1&&(e=Te.handle(s,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,r,i,a,o;return y(e)&&(e=[e]),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!y(t.count),d=u&&!t.ordinal&&t.count===0&&this.pluralResolver.shouldUseIntlApi(),f=t.context!==void 0&&(y(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!Ee[`${p[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(o)&&(Ee[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(o.push(c+e),t.ordinal&&e.indexOf(i)===0&&o.push(c+e.replace(i,this.options.pluralSeparator)),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator}${t.context}`;o.push(r),u&&(o.push(r+e),t.ordinal&&e.indexOf(i)===0&&o.push(r+e.replace(i,this.options.pluralSeparator)),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!y(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.substring(0,12)===`defaultValue`&&e[t]!==void 0)return!0;return!1}},Oe=e=>e.charAt(0).toUpperCase()+e.slice(1),ke=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=b.create(`languageUtils`)}getScriptPartFromCode(e){if(e=xe(e),!e||e.indexOf(`-`)<0)return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=xe(e),!e||e.indexOf(`-`)<0)return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(y(e)&&e.indexOf(`-`)>-1){if(typeof Intl<`u`&&Intl.getCanonicalLocales!==void 0)try{let t=Intl.getCanonicalLocales(e)[0];if(t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t)return t}catch{}let t=[`hans`,`hant`,`latn`,`cyrl`,`cans`,`mong`,`arab`],n=e.split(`-`);return this.options.lowerCaseLng?n=n.map(e=>e.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Oe(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!==`sgn`&&n[2].length===2&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Oe(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=Oe(n[2].toLowerCase()))),n.join(`-`)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(e=>{if(e===n||!(e.indexOf(`-`)<0&&n.indexOf(`-`)<0)&&(e.indexOf(`-`)>0&&n.indexOf(`-`)<0&&e.substring(0,e.indexOf(`-`))===n||e.indexOf(n)===0&&n.length>1))return e})}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),y(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return y(e)&&(e.indexOf(`-`)>-1||e.indexOf(`_`)>-1)?(this.options.load!==`languageOnly`&&i(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&i(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&i(this.getLanguagePartFromCode(e))):y(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.indexOf(e)<0&&i(this.formatLanguageCode(e))}),r}},Ae=[{lngs:[`ach`,`ak`,`am`,`arn`,`br`,`fil`,`gun`,`ln`,`mfe`,`mg`,`mi`,`oc`,`pt`,`pt-BR`,`tg`,`tl`,`ti`,`tr`,`uz`,`wa`],nr:[1,2],fc:1},{lngs:`af.an.ast.az.bg.bn.ca.da.de.dev.el.en.eo.es.et.eu.fi.fo.fur.fy.gl.gu.ha.hi.hu.hy.ia.it.kk.kn.ku.lb.mai.ml.mn.mr.nah.nap.nb.ne.nl.nn.no.nso.pa.pap.pms.ps.pt-PT.rm.sco.se.si.so.son.sq.sv.sw.ta.te.tk.ur.yo`.split(`.`),nr:[1,2],fc:2},{lngs:[`ay`,`bo`,`cgg`,`fa`,`ht`,`id`,`ja`,`jbo`,`ka`,`km`,`ko`,`ky`,`lo`,`ms`,`sah`,`su`,`th`,`tt`,`ug`,`vi`,`wo`,`zh`],nr:[1],fc:3},{lngs:[`be`,`bs`,`cnr`,`dz`,`hr`,`ru`,`sr`,`uk`],nr:[1,2,5],fc:4},{lngs:[`ar`],nr:[0,1,2,3,11,100],fc:5},{lngs:[`cs`,`sk`],nr:[1,2,5],fc:6},{lngs:[`csb`,`pl`],nr:[1,2,5],fc:7},{lngs:[`cy`],nr:[1,2,3,8],fc:8},{lngs:[`fr`],nr:[1,2],fc:9},{lngs:[`ga`],nr:[1,2,3,7,11],fc:10},{lngs:[`gd`],nr:[1,2,3,20],fc:11},{lngs:[`is`],nr:[1,2],fc:12},{lngs:[`jv`],nr:[0,1],fc:13},{lngs:[`kw`],nr:[1,2,3,4],fc:14},{lngs:[`lt`],nr:[1,2,10],fc:15},{lngs:[`lv`],nr:[1,2,0],fc:16},{lngs:[`mk`],nr:[1,2],fc:17},{lngs:[`mnk`],nr:[0,1,2],fc:18},{lngs:[`mt`],nr:[1,2,11,20],fc:19},{lngs:[`or`],nr:[2,1],fc:2},{lngs:[`ro`],nr:[1,2,20],fc:20},{lngs:[`sl`],nr:[5,1,2,3],fc:21},{lngs:[`he`,`iw`],nr:[1,2,20,21],fc:22}],je={1:e=>Number(e>1),2:e=>Number(e!=1),3:e=>0,4:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),5:e=>Number(e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5),6:e=>Number(e==1?0:e>=2&&e<=4?1:2),7:e=>Number(e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),8:e=>Number(e==1?0:e==2?1:e!=8&&e!=11?2:3),9:e=>Number(e>=2),10:e=>Number(e==1?0:e==2?1:e<7?2:e<11?3:4),11:e=>Number(e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3),12:e=>Number(e%10!=1||e%100==11),13:e=>Number(e!==0),14:e=>Number(e==1?0:e==2?1:e==3?2:3),15:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2),16:e=>Number(e%10==1&&e%100!=11?0:e===0?2:1),17:e=>Number(e==1||e%10==1&&e%100!=11?0:1),18:e=>Number(e==0?0:e==1?1:2),19:e=>Number(e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3),20:e=>Number(e==1?0:e==0||e%100>0&&e%100<20?1:2),21:e=>Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0),22:e=>Number(e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3)},Me=[`v1`,`v2`,`v3`],Ne=[`v4`],Pe={zero:0,one:1,two:2,few:3,many:4,other:5},Fe=()=>{let e={};return Ae.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:je[t.fc]}})}),e},Ie=class{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=b.create(`pluralResolver`),(!this.options.compatibilityJSON||Ne.includes(this.options.compatibilityJSON))&&(typeof Intl>`u`||!Intl.PluralRules)&&(this.options.compatibilityJSON=`v3`,this.logger.error(`Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.`)),this.rules=Fe(),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){let n=xe(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(!e.match(/-|_/))return;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=this.getRule(e,t);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((e,t)=>Pe[e]-Pe[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):n.numbers.map(n=>this.getSuffix(e,n,t)):[]}getSuffix(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=this.getRule(e,n);return r?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:this.getSuffixRetroCompatible(r,t):(this.logger.warn(`no plural rule found for: ${e}`),``)}getSuffixRetroCompatible(e,t){let n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),r=e.numbers[n];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r=`plural`:r===1&&(r=``));let i=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON===`v1`?r===1?``:typeof r==`number`?`_plural_${r.toString()}`:i():this.options.compatibilityJSON===`v2`||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?i():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Me.includes(this.options.compatibilityJSON)}},Le=function(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:`.`,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=de(e,t,n);return!a&&i&&y(n)&&(a=be(e,n,r),a===void 0&&(a=be(t,n,r))),a},Re=e=>e.replace(/\$/g,`$$$$`),ze=class{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=b.create(`interpolator`),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?he:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?pe(i):a||`{{`,this.suffix=o?pe(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u||`-`,this.unescapeSuffix=this.unescapePrefix?``:l||``,this.nestingPrefix=d?pe(d):f||pe(`$t(`),this.nestingSuffix=p?pe(p):m||pe(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e&&e.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(e.indexOf(this.formatSeparator)<0){let i=Le(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(Le(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp();let l=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>Re(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?Re(this.escape(e)):Re(e)}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0)if(typeof l==`function`){let t=l(e,i,r);a=y(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``;else!y(a)&&!this.useRawValueToEscape&&(a=ne(a));let s=t.safeValue(a);if(e=e.replace(i[0],s),u?(t.regex.lastIndex+=a.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;let r=e.split(RegExp(`${n}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);(o&&o.length%2==0&&!s||s.length%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,e};for(;r=this.nestingRegexp.exec(e);){let s=[];a={...n},a=a.replace&&!y(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){let e=r[1].split(this.formatSeparator).map(e=>e.trim());r[1]=e.shift(),s=e,c=!0}if(i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!y(i))return i;y(i)||(i=ne(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),c&&(i=s.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),e=e.replace(r[0],i),this.regexp.lastIndex=0}return e}},Be=e=>{let t=e.toLowerCase().trim(),n={};if(e.indexOf(`(`)>-1){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].substring(0,r[1].length-1);t===`currency`&&i.indexOf(`:`)<0?n.currency||=i.trim():t===`relativetime`&&i.indexOf(`:`)<0?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},Ve=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(xe(r),i),t[o]=s),s(n)}},He=class{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=b.create(`formatter`),this.options=e,this.formats={number:Ve((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:Ve((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:Ve((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:Ve((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:Ve((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})},this.init(e)}init(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||`,`}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ve(t)}format(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=t.split(this.formatSeparator);if(i.length>1&&i[0].indexOf(`(`)>1&&i[0].indexOf(`)`)<0&&i.find(e=>e.indexOf(`)`)>-1)){let e=i.findIndex(e=>e.indexOf(`)`)>-1);i[0]=[i[0],...i.splice(1,e)].join(this.formatSeparator)}return i.reduce((e,t)=>{let{formatName:i,formatOptions:a}=Be(t);if(this.formats[i]){let t=e;try{let o=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${i}`),e},e)}},Ue=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},We=class extends Ce{constructor(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=b.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{le(n.loaded,[i],a),Ue(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();y(e)&&(e=this.languageUtils.toResolveHierarchy(e)),y(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:``,n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(n!=null&&n!==``){if(this.backend&&this.backend.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}},Ge=()=>({debug:!1,initImmediate:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,simplifyPluralSuffix:!0,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),y(e[1])&&(t.defaultValue=e[1]),y(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0}}),Ke=e=>(y(e.ns)&&(e.ns=[e.ns]),y(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),y(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf(`cimode`)<0&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),qe=()=>{},Je=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},Ye=class e extends Ce{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Ke(e),this.services={},this.logger=b,this.modules={external:[]},Je(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof t==`function`&&(n=t,t={}),!t.defaultNS&&t.defaultNS!==!1&&t.ns&&(y(t.ns)?t.defaultNS=t.ns:t.ns.indexOf(`translation`)<0&&(t.defaultNS=t.ns[0]));let r=Ge();this.options={...r,...this.options,...Ke(t)},this.options.compatibilityAPI!==`v1`&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),t.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=t.keySeparator),t.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=t.nsSeparator);let i=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?b.init(i(this.modules.logger),this.options):b.init(null,this.options);let t;this.modules.formatter?t=this.modules.formatter:typeof Intl<`u`&&(t=He);let n=new ke(this.options);this.store=new we(this.options.resources,this.options);let a=this.services;a.logger=b,a.resourceStore=this.store,a.languageUtils=n,a.pluralResolver=new Ie(n,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),t&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(a.formatter=i(t),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new ze(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new We(i(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on(`*`,function(t){var n=[...arguments].slice(1);e.emit(t,...n)}),this.modules.languageDetector&&(a.languageDetector=i(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=i(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new De(this.services,this.options),this.translator.on(`*`,function(t){var n=[...arguments].slice(1);e.emit(t,...n)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,n||=qe,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(t=>{this[t]=function(){return e.store[t](...arguments)}}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(t=>{this[t]=function(){return e.store[t](...arguments),e}});let a=te(),o=()=>{let e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),a.resolve(t),n(e,t)};if(this.languages&&this.options.compatibilityAPI!==`v1`&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?o():setTimeout(o,0),a}loadResources(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qe,n=y(e)?e:this.language;if(typeof e==`function`&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return t();let e=[],r=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&e.indexOf(t)<0&&e.push(t)})};n?r(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>r(e)),this.options.preload&&this.options.preload.forEach(e=>r(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),t(e)})}else t(null)}reloadResources(e,t,n){let r=te();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=qe,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&Te.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!([`cimode`,`dev`].indexOf(e)>-1))for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(!([`cimode`,`dev`].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;let r=te();this.emit(`languageChanging`,e);let i=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},a=(e,a)=>{a?(i(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,r.resolve(function(){return n.t(...arguments)}),t&&t(e,function(){return n.t(...arguments)})},o=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=y(t)?t:this.services.languageUtils.getBestMatchFromCodes(t);n&&(this.language||i(n),this.translator.language||this.translator.changeLanguage(n),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(n)),this.loadResources(n,e=>{a(e,n)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?o(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e),r}getFixedT(e,t,n){var r=this;let i=function(e,t){let a;if(typeof t!=`object`){var o=[...arguments].slice(2);a=r.options.overloadTranslationOptionHandler([e,t].concat(o))}else a={...t};a.lng=a.lng||i.lng,a.lngs=a.lngs||i.lngs,a.ns=a.ns||i.ns,a.keyPrefix!==``&&(a.keyPrefix=a.keyPrefix||n||i.keyPrefix);let s=r.options.keySeparator||`.`,c;return c=a.keyPrefix&&Array.isArray(e)?e.map(e=>`${a.keyPrefix}${s}${e}`):a.keyPrefix?`${a.keyPrefix}${s}${e}`:e,r.t(c,a)};return y(e)?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=n,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(i,e)))}loadNamespaces(e,t){let n=te();return this.options.ns?(y(e)&&(e=[e]),e.forEach(e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=te();y(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>r.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return`rtl`;let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services&&this.services.languageUtils||new ke(Ge());return t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new e(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qe,r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,...t,isClone:!0},a=new e(i);return(t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r&&(a.store=new we(this.store.data,i),a.services.resourceStore=a.store),a.translator=new De(a.services,i),a.translator.on(`*`,function(e){var t=[...arguments].slice(1);a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},x=Ye.createInstance();x.createInstance=Ye.createInstance,x.createInstance,x.dir,x.init,x.loadResources,x.reloadResources,x.use,x.changeLanguage,x.getFixedT,x.t,x.exists,x.setDefaultNamespace,x.hasLoadedNamespace,x.loadNamespaces,x.loadLanguages;var Xe=[];Xe.forEach,Xe.slice;var Ze=[`__proto__`,`constructor`,`prototype`];function Qe(e){return!(typeof e!=`string`||e.length===0||e.length>128||Ze.indexOf(e)>-1||e.indexOf(`..`)>-1||e.indexOf(`\\`)>-1||/[?#%\s@]/.test(e)||/[\x00-\x1F\x7F]/.test(e))}function $e(e){return!(!Qe(e)||e.indexOf(`/`)>-1)}function et(e){return Qe(e)}var tt={lng:$e,ns:et};function nt(e){return typeof e==`string`?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e}function rt(e){if(typeof e!=`string`||e.length===0)return e;try{let t=new URL(e);return t.username||t.password?(t.username=``,t.password=``,t.toString()):e}catch{return e.replace(/(\/\/)[^/@\s]+@/g,`$1`)}}function it(){return typeof XMLHttpRequest==`function`||typeof XMLHttpRequest==`object`}function at(e){return!!e&&typeof e.then==`function`}function ot(e){return at(e)?e:Promise.resolve(e)}var st=/\{\{(.+?)\}\}/g;function ct(e,t){let n=!1,r=e.replace(st,(e,r)=>{let i=r.trim();if(Ze.indexOf(i)>-1)return e;let a=t[i];if(a==null)return e;let o=tt[i]||$e,s=String(a).split(`+`);for(let t of s)if(!o(t))return n=!0,e;return s.join(`+`)});return n?null:r}var lt=typeof globalThis<`u`?globalThis:typeof global<`u`?global:typeof window<`u`?window:void 0,ut;typeof fetch==`function`?ut=fetch:lt&&typeof lt.fetch==`function`&&(ut=lt.fetch);var dt=it()&&lt?lt.XMLHttpRequest:void 0,ft=typeof ActiveXObject==`function`&&lt?lt.ActiveXObject:void 0,pt=[`__proto__`,`constructor`,`prototype`],mt=(e,t)=>{if(t&&typeof t==`object`){let n=``;for(let e of Object.keys(t))pt.indexOf(e)>-1||(n+=`&`+encodeURIComponent(e)+`=`+encodeURIComponent(t[e]));if(!n)return e;e=e+(e.indexOf(`?`)===-1?`?`:`&`)+n.slice(1)}return e},ht=(e,t,n,r)=>{let i=e=>{if(!e.ok)return n(e.statusText||`Error`,{status:e.status});e.text().then(t=>{n(null,{status:e.status,data:t})}).catch(n)};if(r){let a=r(e,t);if(a instanceof Promise){a.then(i).catch(n);return}}typeof fetch==`function`?fetch(e,t).then(i).catch(n):ut(e,t).then(i).catch(n)},gt=(e,t,n,r)=>{e.queryStringParams&&(t=mt(t,e.queryStringParams));let i={...typeof e.customHeaders==`function`?e.customHeaders():e.customHeaders};typeof window>`u`&&typeof global<`u`&&global.process!==void 0&&global.process.versions&&global.process.versions.node&&(i[`User-Agent`]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),n&&(i[`Content-Type`]=`application/json`);let a=typeof e.requestOptions==`function`?e.requestOptions(n):e.requestOptions,o={method:n?`POST`:`GET`,body:n?e.stringify(n):void 0,headers:i,...e._omitFetchOptions?{}:a},s=typeof e.alternateFetch==`function`&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{ht(t,o,r,s)}catch(n){if(!a||Object.keys(a).length===0||!n.message||n.message.indexOf(`not implemented`)<0)return r(n);try{Object.keys(a).forEach(e=>{delete o[e]}),ht(t,o,r,s),e._omitFetchOptions=!0}catch(e){r(e)}}},_t=(e,t,n,r)=>{n&&typeof n==`object`&&(n=mt(``,n).slice(1)),e.queryStringParams&&(t=mt(t,e.queryStringParams));try{let i=dt?new dt:new ft(`MSXML2.XMLHTTP.3.0`);i.open(n?`POST`:`GET`,t,1),e.crossDomain||i.setRequestHeader(`X-Requested-With`,`XMLHttpRequest`),i.withCredentials=!!e.withCredentials,n&&i.setRequestHeader(`Content-Type`,`application/x-www-form-urlencoded`),i.overrideMimeType&&i.overrideMimeType(`application/json`);let a=e.customHeaders;if(a=typeof a==`function`?a():a,a)for(let e of Object.keys(a))pt.indexOf(e)>-1||i.setRequestHeader(e,a[e]);i.onreadystatechange=()=>{i.readyState>3&&r(i.status>=400?i.statusText:null,{status:i.status,data:i.responseText})},i.send(n)}catch(e){console&&console.log(e)}},vt=(e,t,n,r)=>{if(typeof n==`function`&&(r=n,n=void 0),r||=(()=>{}),ut&&t.indexOf(`file:`)!==0)return gt(e,t,n,r);if(it()||typeof ActiveXObject==`function`)return _t(e,t,n,r);r(Error(`No fetch and no xhr implementation found!`))},yt=()=>({loadPath:`/locales/{{lng}}/{{ns}}.json`,addPath:`/locales/add/{{lng}}/{{ns}}`,parse:e=>JSON.parse(e),stringify:JSON.stringify,parsePayload:(e,t,n)=>({[t]:n||``}),parseLoadPayload:(e,t)=>void 0,request:vt,reloadInterval:typeof window<`u`?!1:36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:`cors`,credentials:`same-origin`,cache:`default`}}),bt=class{constructor(e,t={},n={}){this.services=e,this.options=t,this.allOptions=n,this.type=`backend`,this.init(e,t,n)}init(e,t={},n={}){if(this.services=e,this.options={...yt(),...this.options||{},...t},this.allOptions=n,this.services&&this.options.reloadInterval){let e=setInterval(()=>this.reload(),this.options.reloadInterval);typeof e==`object`&&typeof e.unref==`function`&&e.unref()}}readMulti(e,t,n){this._readAny(e,e,t,t,n)}read(e,t,n){this._readAny([e],e,[t],t,n)}_readAny(e,t,n,r,i){let a=this.options.loadPath;typeof this.options.loadPath==`function`&&(a=this.options.loadPath(e,n)),a=ot(a),a.then(a=>{if(!a)return i(null,{});let o=ct(a,{lng:e.join(`+`),ns:n.join(`+`)});if(o==null){let t=e.map(nt).join(`, `),r=n.map(nt).join(`, `);return i(Error(`i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=[`+t+`] namespaces=[`+r+`]`),!1)}this.loadUrl(o,i,t,r)})}loadUrl(e,t,n,r){let i=typeof n==`string`?[n]:n,a=typeof r==`string`?[r]:r,o=this.options.parseLoadPayload(i,a),s=nt(rt(e));this.options.request(this.options,e,o,(e,i)=>{if(i&&(i.status>=500&&i.status<600||!i.status))return t(`failed loading `+s+`; status code: `+i.status,!0);if(i&&i.status>=400&&i.status<500)return t(`failed loading `+s+`; status code: `+i.status,!1);if(!i&&e&&e.message){let n=e.message.toLowerCase();if([`failed`,`fetch`,`network`,`load`].find(e=>n.indexOf(e)>-1))return t(`failed loading `+s+`: `+nt(e.message),!0)}if(e)return t(e,!1);let a,o;try{a=typeof i.data==`string`?this.options.parse(i.data,n,r):i.data}catch{o=`failed parsing `+s+` to json`}if(o)return t(o,!1);t(null,a)})}create(e,t,n,r,i){if(!this.options.addPath)return;typeof e==`string`&&(e=[e]);let a=this.options.parsePayload(t,n,r),o=0,s=[],c=[];e.forEach(n=>{let r=this.options.addPath;typeof this.options.addPath==`function`&&(r=this.options.addPath(n,t));let l=ct(r,{lng:n,ns:t});if(l==null){o+=1,i&&o===e.length&&i(s,c);return}this.options.request(this.options,l,a,(t,n)=>{o+=1,s.push(t),c.push(n),o===e.length&&typeof i==`function`&&i(s,c)})})}reload(){let{backendConnector:e,languageUtils:t,logger:n}=this.services,r=e.language;if(r&&r.toLowerCase()===`cimode`)return;let i=[],a=e=>{t.toResolveHierarchy(e).forEach(e=>{i.indexOf(e)<0&&i.push(e)})};a(r),this.allOptions.preload&&this.allOptions.preload.forEach(e=>a(e)),i.forEach(t=>{this.allOptions.ns.forEach(r=>{e.read(t,r,`read`,null,null,(i,a)=>{i&&n.warn(`loading namespace ${r} for language ${t} failed`,i),!i&&a&&n.log(`loaded namespace ${r} for language ${t}`,a),e.loaded(`${t}|${r}`,i,a)})})})}};bt.type=`backend`;var xt=`https://i18n-fastly.ultrafast.io`;function St(e){let t=e.cdnUrl??xt,n=null,r=new Set,i=()=>{for(let e of r)e()},a=e=>(r.add(e),()=>r.delete(e));async function s(r=`en`){return n?(n.language!==r&&(await n.changeLanguage(r),i()),{i18n:n,isNew:!1}):(n=x.createInstance(),await n.use(bt).init({lng:r,fallbackLng:`en`,ns:[e.namespace],defaultNS:e.namespace,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:``,loadPath:`${t}/api/export/grid/f2/${e.gridUuid}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,t){let n=JSON.parse(e),r=Array.isArray(t)?t[0]:t;return r&&n[r]?.__without_namespace?n[r].__without_namespace:n}}}),n.on(`languageChanged`,i),n.on(`loaded`,i),i(),{i18n:n,isNew:!0})}let c=()=>n,l=(e,t,r)=>!n||!n.isInitialized?o(e,t,r):typeof t==`string`?n.t(e,t,r??{}):n.t(e,t??{});class u{constructor(e){this._unsubscribe=null,this._host=e,e.addController(this)}hostConnected(){this._unsubscribe=a(()=>this._host.requestUpdate())}hostDisconnected(){this._unsubscribe?.(),this._unsubscribe=null}}return{initI18n:s,getInstance:c,onChange:a,t:l,fallbackT:o,I18nController:u}}var Ct=`a656ff82-0270-46dc-8de8-c734318d841d`,wt=`https://i18n-fastly.ultrafast.io`,Tt=`https://neo.wordplex.io`,Et=`asset-picker`,Dt=St({gridUuid:Ct,namespace:Et,cdnUrl:wt}),Ot=Dt.initI18n;Dt.getInstance;var kt=d({lsKey:`apTranslationsMissingKeysEnabled`,namespace:Et,gridUuid:Ct,prodUrl:Tt,logPrefix:`[asset-picker]`}),At=class{constructor(e,t){this.host=e,this.store=t,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe?.()}};function jt(e){return`extension`in e&&!(`path`in e)}var Mt=class{constructor(e,t){this.lastClickedIndex=-1,this.host=e,this.store=t,e.addController(this)}hostConnected(){}hostDisconnected(){}get _folderSelectionEnabled(){return this.store.getState().config?.folderSelection===!0}_getCombinedList(){let e=this.store.getState();return this._folderSelectionEnabled?[...e.folders,...e.assets]:e.assets}_wouldExceedMax(e){let t=this.store.getState().config?.maxSelections;return!!t&&e>t}_applyRangeSelection(e,t,n,r){let i=this.store.getState(),a=this._getCombinedList();for(let o=e;o<=t;o++){let e=a[o];e&&(jt(e)?i.disabledAssetIds.has(e.uuid)||n.set(e.uuid,e):i.disabledFolderIds.has(e.uuid)||r.set(e.uuid,e))}}handleSelect(e,t,n){let r=this.store.getState();if(r.disabledAssetIds.has(e.uuid))return;let i=new Map(r.selectedAssets);if(!(r.config?.multiSelect??!0)){i.clear(),i.set(e.uuid,e),this.store.setState({selectedAssets:i,selectedFolders:new Map}),this.lastClickedIndex=t;return}if(n.shiftKey&&this.lastClickedIndex>=0)if(this._folderSelectionEnabled){let e=Math.min(this.lastClickedIndex,t),n=Math.max(this.lastClickedIndex,t),a=new Map(r.selectedFolders);if(this._applyRangeSelection(e,n,i,a),this._wouldExceedMax(i.size+a.size))return;this.store.setState({selectedAssets:i,selectedFolders:a})}else{let e=Math.min(this.lastClickedIndex,t),n=Math.max(this.lastClickedIndex,t),a=r.assets;for(let t=e;t<=n;t++)a[t]&&!r.disabledAssetIds.has(a[t].uuid)&&i.set(a[t].uuid,a[t]);if(this._wouldExceedMax(i.size))return;this.store.setState({selectedAssets:i})}else if(n.metaKey||n.ctrlKey){i.has(e.uuid)?i.delete(e.uuid):i.set(e.uuid,e);let t=i.size+(this._folderSelectionEnabled?r.selectedFolders.size:0);if(this._wouldExceedMax(t))return;this.store.setState({selectedAssets:i})}else i.clear(),i.set(e.uuid,e),this.store.setState({selectedAssets:i,selectedFolders:new Map});this.lastClickedIndex=t}selectAsset(e,t){let n=this.store.getState();if(n.disabledAssetIds.has(e.uuid))return!1;if(n.selectedAssets.has(e.uuid))return!0;if(!(n.config?.multiSelect??!0)){let n=new Map([[e.uuid,e]]);return this.store.setState({selectedAssets:n,selectedFolders:new Map}),t!==void 0&&(this.lastClickedIndex=t),!0}let r=new Map(n.selectedAssets);r.set(e.uuid,e);let i=r.size+(this._folderSelectionEnabled?n.selectedFolders.size:0);return!this._wouldExceedMax(i)&&(this.store.setState({selectedAssets:r}),t!==void 0&&(this.lastClickedIndex=t),!0)}handleFolderSelect(e,t,n){if(!this._folderSelectionEnabled)return;let r=this.store.getState();if(r.disabledFolderIds.has(e.uuid))return;let i=new Map(r.selectedFolders);if(!(r.config?.multiSelect??!0)){i.clear(),i.set(e.uuid,e),this.store.setState({selectedFolders:i,selectedAssets:new Map}),this.lastClickedIndex=t;return}if(n.shiftKey&&this.lastClickedIndex>=0){let e=Math.min(this.lastClickedIndex,t),n=Math.max(this.lastClickedIndex,t),a=new Map(r.selectedAssets);if(this._applyRangeSelection(e,n,a,i),this._wouldExceedMax(a.size+i.size))return;this.store.setState({selectedAssets:a,selectedFolders:i})}else if(n.metaKey||n.ctrlKey){i.has(e.uuid)?i.delete(e.uuid):i.set(e.uuid,e);let t=i.size+r.selectedAssets.size;if(this._wouldExceedMax(t))return;this.store.setState({selectedFolders:i})}else i.clear(),i.set(e.uuid,e),this.store.setState({selectedFolders:i,selectedAssets:new Map});this.lastClickedIndex=t}isSelected(e){return this.store.getState().selectedAssets.has(e)}isFolderSelected(e){return this.store.getState().selectedFolders.has(e)}resetRange(){this.lastClickedIndex=-1}selectAll(e){let t=this.store.getState(),n=t.config?.maxSelections,r=this._folderSelectionEnabled?t.selectedFolders.size:0,i=e.filter(e=>!t.disabledAssetIds.has(e.uuid)),a=new Map,o=n?Math.max(0,Math.min(i.length,n-r)):i.length;for(let e=0;e<o;e++)a.set(i[e].uuid,i[e]);return this.store.setState({selectedAssets:a}),this.lastClickedIndex=-1,a.size}selectAllFolders(e){if(!this._folderSelectionEnabled)return;let t=this.store.getState(),n=t.config?.maxSelections,r=e.filter(e=>!t.disabledFolderIds.has(e.uuid)),i=new Map,a=n?Math.max(0,Math.min(r.length,n-t.selectedAssets.size)):r.length;for(let e=0;e<a;e++)i.set(r[e].uuid,r[e]);this.store.setState({selectedFolders:i})}clearSelection(){this.store.setState({selectedAssets:new Map,selectedFolders:new Map}),this.lastClickedIndex=-1}getSelectedAssets(){return Array.from(this.store.getState().selectedAssets.values())}getSelectedFolders(){return Array.from(this.store.getState().selectedFolders.values())}},Nt=5,Pt=40,Ft=15,It=class e{constructor(e,t){this.host=e,this.options=t,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.startX=0,this.startY=0,this.startClientX=0,this.startClientY=0,this.preMarquee=new Set,this.dragging=!1,this.scrollRAF=null,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null,this.handleMouseDown=e=>this.onMouseDown(e),this.handleMouseMove=e=>this.onMouseMove(e),this.handleMouseUp=()=>this.onMouseUp(),this.preventSelect=e=>e.preventDefault(),e.addController(this)}hostConnected(){}hostDisconnected(){this.detach()}attach(e){this.container!==e&&(this.detach(),this.container=e,e.addEventListener(`mousedown`,this.handleMouseDown))}detach(){this.container?.removeEventListener(`mousedown`,this.handleMouseDown),document.removeEventListener(`mousemove`,this.handleMouseMove),document.removeEventListener(`mouseup`,this.handleMouseUp),document.removeEventListener(`selectstart`,this.preventSelect),this.stopAutoScroll(),this.container?.classList.remove(`marqueeing`),this.container=void 0,this.lastMouseEvent=null,this.cardRects=[],this.appliedSelection=null}isInteractiveTarget(e){return this.options.isInteractiveTarget?this.options.isInteractiveTarget(e):e.composedPath().some(e=>e instanceof HTMLElement?e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLAnchorElement||e.hasAttribute(`data-uuid`)||e.tagName===`TR`||e.tagName===`TABLE`:!1)}onMouseDown(e){if(e.button!==0||!this.container||this.isInteractiveTarget(e))return;let t=this.container.getBoundingClientRect();this.startX=e.clientX-t.left+this.container.scrollLeft,this.startY=e.clientY-t.top+this.container.scrollTop,this.startClientX=e.clientX,this.startClientY=e.clientY,this.preMarquee=new Set(this.options.getSelection(e)),this.dragging=!1,this.isActive=!1,document.addEventListener(`mousemove`,this.handleMouseMove),document.addEventListener(`mouseup`,this.handleMouseUp)}onMouseMove(e){if(this.container){if(!this.dragging){let t=Math.abs(e.clientX-this.startClientX),n=Math.abs(e.clientY-this.startClientY);if(t<Nt&&n<Nt)return;this.dragging=!0,this.isActive=!0,this.container.classList.add(`marqueeing`),document.addEventListener(`selectstart`,this.preventSelect),window.getSelection()?.removeAllRanges(),this.cacheCards()}this.lastMouseEvent=e,this.updateRect(e),this.maybeAutoScroll(e)}}updateRect(e){if(!this.container)return;let t=this.container.getBoundingClientRect(),n=e.clientX-t.left+this.container.scrollLeft,r=e.clientY-t.top+this.container.scrollTop,i=Math.min(this.startX,n),a=Math.min(this.startY,r),o=Math.abs(n-this.startX),s=Math.abs(r-this.startY);i<0&&(o+=i,i=0),a<0&&(s+=a,a=0),i+o>this.container.scrollWidth&&(o=this.container.scrollWidth-i),a+s>this.container.scrollHeight&&(s=this.container.scrollHeight-a),this.rect={x:i,y:a,width:o,height:s},this.applyBoxStyle(),this.selectIntersecting()}maybeAutoScroll(e){if(!this.container||this.container.scrollHeight<=this.container.clientHeight){this.stopAutoScroll();return}let t=this.container.getBoundingClientRect(),n=e.clientY-t.top<Pt||t.bottom-e.clientY<Pt;n&&this.scrollRAF==null?this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()):n||this.stopAutoScroll()}autoScrollTick(){if(this.scrollRAF=null,!this.container||!this.dragging||!this.lastMouseEvent||this.container.scrollHeight<=this.container.clientHeight)return;let e=this.container.getBoundingClientRect(),t=this.lastMouseEvent,n=t.clientY-e.top,r=e.bottom-t.clientY,i=0;n<Pt?i=-15*(1-n/Pt):r<Pt&&(i=Ft*(1-r/Pt)),i!==0&&(this.container.scrollTop+=i,this.updateRect(t),this.scrollRAF=requestAnimationFrame(()=>this.autoScrollTick()))}stopAutoScroll(){this.scrollRAF!=null&&(cancelAnimationFrame(this.scrollRAF),this.scrollRAF=null)}onMouseUp(){document.removeEventListener(`mousemove`,this.handleMouseMove),document.removeEventListener(`mouseup`,this.handleMouseUp),document.removeEventListener(`selectstart`,this.preventSelect),this.stopAutoScroll(),this.lastMouseEvent=null,this.dragging&&(this.dragging=!1,this.isActive=!1,this.rect={x:0,y:0,width:0,height:0},this.cardRects=[],this.appliedSelection=null,this.container?.classList.remove(`marqueeing`),this.host.requestUpdate())}cacheCards(){if(!this.container)return;let e=this.container.getBoundingClientRect(),t=this.container.scrollLeft,n=this.container.scrollTop;this.cardRects=[];for(let{uuid:r,el:i}of this.options.queryCards(this.container)){if(!r)continue;let a=i.getBoundingClientRect();this.cardRects.push({uuid:r,x:a.left-e.left+t,y:a.top-e.top+n,w:a.width,h:a.height})}}applyBoxStyle(){let e=this.container?.querySelector(`.marquee-box`);if(!e){this.host.requestUpdate();return}e.style.left=`${this.rect.x}px`,e.style.top=`${this.rect.y}px`,e.style.width=`${this.rect.width}px`,e.style.height=`${this.rect.height}px`}static sameSet(e,t){if(!t||e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}selectIntersecting(){let t=new Set(this.preMarquee),{x:n,y:r,width:i,height:a}=this.rect;for(let e of this.cardRects)n<e.x+e.w&&n+i>e.x&&r<e.y+e.h&&r+a>e.y&&t.add(e.uuid);e.sameSet(t,this.appliedSelection)||(this.appliedSelection=t,this.options.setSelection(t))}},Lt=class{constructor(e,t){this.onLoadMore=t,e.addController(this)}hostConnected(){}hostDisconnected(){this.disconnect()}observe(e,t,n=`200px`){this.disconnect(),this.sentinel=e,this.observer=new IntersectionObserver(e=>{e[0]?.isIntersecting&&this.onLoadMore()},{root:t??null,rootMargin:n}),this.observer.observe(e)}disconnect(){this.observer&&this.sentinel&&(this.observer.unobserve(this.sentinel),this.observer.disconnect()),this.observer=void 0,this.sentinel=void 0}};function Rt(e){let t=e.path??e.name,n=t.replace(/\/[^/]*$/,``)||`/`;return{uuid:e.uuid,name:e.name.split(`/`).pop()||e.name,path:t,parentPath:n,createdAt:e.created_at,modifiedAt:e.modified_at}}async function zt(e,t,n){let r=n.replace(/\/+$/,``),i=r?`${r}/${t}`:`/${t}`,a=await e.post(`/folders`,{name:i});if(a.status!==`success`||!a.folder)throw Error(a.msg||`Failed to create folder`);return Rt(a.folder)}async function Bt(e){return(await e.get(`/labels`)).labels??[]}function Vt(e,t){try{let n=new URL(e);return n.searchParams.set(`p`,t),n.toString()}catch{return e}}function Ht(e){return Array.isArray(e)?e.map(e=>typeof e==`string`?{name:e}:e&&typeof e.name==`string`?{name:e.name,desc:e.desc}:null).filter(e=>e!==null):[]}async function Ut(e){let t=await e.get(`/settings`);return Ht(t?.presets??t?.cloudimg?.presets??t?.settings?.cloudimg?.presets??void 0)}var Wt=[`cdn_permalink`],Gt={created_at:`created_at`,modified_at:`modified_at`,name:`name`,size:`size`,type:`type`};function Kt(e){let t=e.fields??Wt;e.permalinksEnabled||(t=t.filter(e=>e!==`cdn_permalink`));let n={offset:e.offset??0,limit:e.limit??100,format:`json,regvar:api,select:internal`,preview:2301,recursive:e.recursive??1};t.length>0&&(n.fields=t);let r=e.sort_by??`created_at`,i=e.sort_direction??`desc`;n.sort=`${Gt[r]||r}:${i}`,e.folder&&(n.folder=e.folder);let a=[];return e.search&&!e.with_ai&&a.push(e.search),e.q&&a.push(e.q),a.length>0&&(n.q=a.join(` `)),e.with_ai&&(n.with_ai=!0,e.ai_query&&(n.ai_query=e.ai_query),e.ai_lang&&(n.ai_lang=e.ai_lang)),e.collection_uuid&&(n.collection_uuid=e.collection_uuid),e.f64&&(n.f64=e.f64),n}function qt(e,t){return e.get(`/files`,Kt(t))}function Jt(e,t){let n={recursive:t.recursive??1};t.folder&&(n.folder=t.folder);let r=[];return t.search&&!t.with_ai&&r.push(t.search),t.q&&r.push(t.q),r.length>0&&(n.q=r.join(` `)),t.with_ai&&(n.with_ai=!0,t.ai_query&&(n.ai_query=t.ai_query),t.ai_lang&&(n.ai_lang=t.ai_lang)),t.collection_uuid&&(n.collection_uuid=t.collection_uuid),t.f64&&(n.f64=t.f64),e.get(`/files/stats`,n)}function Yt(e,t={}){let n={recursive:t.recursive??0,folder:t.folderPath??`/`,limit:t.limit??1e3,offset:t.offset??0};t.q&&(n.q=t.q);let r=t.sort_by??`created_at`,i=t.sort_direction??`asc`;return n.sort=`${Gt[r]||r}:${i}`,e.get(`/folders`,n)}async function Xt(e,t){return t.length===0?{}:(await e.post(`/folders/previews`,{folders:t})).folders||{}}function Zt(e,t){let n,r=((...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)});return r.cancel=()=>clearTimeout(n),r}async function Qt(e){return e.get(`/collections`)}async function $t(e,t){return e.get(`/collections/${t}/folders`)}function en(e){return e.filter(e=>!!e.name).map(e=>({...e,children:en(e.children??[])})).filter(e=>!((e.children?.length??0)<1&&!e.filters))}async function tn(e){return((await e.get(`/tags`)).tags||[]).map(e=>({...e,label:e.names.en||Object.values(e.names)[0]||``})).filter(e=>e.label).sort((e,t)=>e.label.localeCompare(t.label))}var nn=3e4;async function rn(e,t){let n=`${t}/key/${e.securityTemplateKey}`,r=new AbortController,i=setTimeout(()=>r.abort(),nn);try{let t=await fetch(n,{headers:{"X-Filerobot-Key":e.securityTemplateKey},signal:r.signal});if(clearTimeout(i),!t.ok){let e=`API error: ${t.status} ${t.statusText}`;try{let n=await t.json();n.msg&&(e=`API error: ${t.status} - ${n.msg}`)}catch{}throw Error(e)}let a=await t.json();if(a.status===`error`)throw Error(`API error: ${a.msg||`Unknown error`}`);return{key:a.key,permissions:a.permissions??[]}}catch(e){throw clearTimeout(i),e instanceof DOMException&&e.name===`AbortError`?Error(`API request timed out`):e}}function an(e,t){return e?e.includes(t):!1}var on={FOLDER_CREATE:`DIR_CREATE`};function sn(e){let t=e.info?.playlists;if(!t?.length)return null;let n=t[0]?.playlists;return n?.length&&n[0]||null}function cn(e){return(e.type??``).startsWith(`image`)}function ln(e){return e.info?.img_w??e.info?.video_w??0}function un(e){return e.info?.img_h??e.info?.video_h??0}var dn={excellent:90,good:75,fair:60},fn=[{label:`WEBP`,value:`webp`},{label:`JPEG`,value:`jpeg`},{label:`PNG`,value:`png`},{label:`GIF`,value:`gif`}],pn=[{label:`Excellent`,value:`excellent`},{label:`Good`,value:`good`},{label:`Fair`,value:`fair`}],mn=[{label:`Original`,value:`original`},{label:`Full HD`,value:`full_hd`,width:1920},{label:`Large`,value:`large`,width:1200},{label:`Medium`,value:`medium`,width:600},{label:`Small`,value:`small`,width:300}],hn={webp:`awebp,webp`,jpeg:`jpeg`,png:`png`,gif:`agif,gif`},gn=new Set([...new Set([`jpg`,`jpeg`,`png`,`gif`,`webp`,`svg`,`bmp`,`ico`,`tiff`,`tif`,`avif`,`heic`,`heif`,`psd`,`eps`]),`pdf`,`psd`,`eps`,`ai`,`ttf`,`otf`,`woff`,`woff2`,`eot`]);function _n(e){if(!e)return`other`;let t={image:`image`,video:`video`,audio:`audio`,application:`document`,font:`font`,text:`document`};return t[e]?t[e]:e.startsWith(`image/`)?`image`:e.startsWith(`video/`)?`video`:e.startsWith(`audio/`)?`audio`:e.startsWith(`application/pdf`)||e.startsWith(`text/`)||e.startsWith(`application/msword`)||e.startsWith(`application/vnd.`)?`document`:e.startsWith(`application/zip`)||e.startsWith(`application/x-rar`)||e.startsWith(`application/x-7z`)||e.startsWith(`application/gzip`)?`archive`:e.startsWith(`font/`)?`font`:`other`}function vn(e){let t=e?.toLowerCase().replace(`.`,``)||``;return gn.has(t)}function yn(e){if(!e)return``;let t=e.split(`/`);return t.length>1?t[1]:t[0]}var bn=new Set([`png`,`svg`,`webp`,`gif`,`avif`]);function xn(e){let t=e?.toLowerCase().replace(`.`,``)||``;return bn.has(t)}var Sn=new Set([`svg`,`svg+xml`,`png`,`pdf`]);function Cn(e){return Sn.has(yn(e).toLowerCase())}var wn=null;function Tn(e){wn=e??null}function S(e,t){if(!e||!wn)return e;try{return wn(e,t)||e}catch(t){return console.warn(`[asset-picker] transformRemoteThumbnail threw:`,t),e}}function En(e,t){let n=e.transformation?.url.cdn??e.url?.cdn??``;return n?Vt(n,t):null}function Dn(e,t){let n=e.info,r=n?.image_thumbnail||n?.thumbnail||n?.preview||``;return r?Vt(r,t):En(e,t)}function On(e,t){if(t&&t!==`original`){let n=Dn(e,t);if(n)return S(n,{source:`asset`,asset:e})}let n=e.info;return S(Nn(n?.video_thumbnail||n?.image_thumbnail||n?.thumbnail||n?.preview||e.url?.cdn||``),{source:`asset`,asset:e})}function kn(e){let t=e.info,n=t?.video_thumbnail||t?.image_thumbnail||t?.thumbnail||``;return n?S(Nn(n),{source:`video`,asset:e}):``}function An(e){let t=Nn(e.url?.cdn||e.url?.public||``);return t?(t=t.replace(/([?&])func=proxy&?/,`$1`).replace(/[?&]$/,``),S(jn(t,{w:`200`,force_format:`webp,jpeg`,doc_page:`1`,bypass_process_proxy:`1`}),{source:`pdf`,asset:e})):``}function jn(e,t){try{let n=new URL(e);for(let[e,r]of Object.entries(t))n.searchParams.set(e,r);return n.toString()}catch{return e}}var Mn=/^(https:\/\/)([a-z0-9_-]+)\.filerobot\.com\/(?:v\d+\/)?/i;function Nn(e,t){if(!e)return``;let n=e=>e.replace(/(\.filerobot\.com\/[a-z0-9_-]+)\/v\d+\//i,`$1/`);if(e.includes(`assets.filerobot.com`))return n(e);let r=e.match(Mn);if(r){let t=r[2];return n(e.replace(Mn,`$1assets.filerobot.com/${t}/`))}if(t)try{let r=new URL(e);return n(`https://assets.filerobot.com/${t}${r.pathname}${r.search}`)}catch{}return e}function Pn(e,t){let n=e.file_uri_cdn;if(!n)return``;let r=Nn(n),i=_n(e.file_type),a=String(window.devicePixelRatio||1),o;return i===`video`?o=jn(r,{w:t,dpr:a,force_format:`webp,jpeg`}):e.file_type===`application/pdf`||yn(e.file_type).toLowerCase()===`pdf`?(r=r.replace(/([?&])func=proxy&?/,`$1`).replace(/[?&]$/,``),o=jn(r,{w:t,dpr:a,force_format:`webp,jpeg`,doc_page:`1`,bypass_process_proxy:`1`})):o=jn(r,{w:t,dpr:a}),S(o,{source:`folder`})}function Fn(e,t){let n={};return e.format&&(n.force_format=hn[e.format]),e.quality&&e.format!==`png`&&(n.q=String(dn[e.quality])),e.width&&(n.w=String(e.width)),e.height&&(n.h=String(e.height)),(e.width||e.height)&&(n.org_if_sml=`1`,t?.isMultiSelect?n.func=`bound`:t?.isAspectLocked===!1&&(n.func=`cover`)),n}var C={TYPE:`type`,MIME_TYPE:`mimetype`,METADATA:`metadata`,DATE:`date`,APPROVAL:`approval`,SIZE:`size`,LICENSE_EXPIRY:`asset_expiration`,TAGS:`tags`,FOLDERS:`folders`,IMAGE:`image`,LABELS:`labels`,PRODUCT_REF:`product_ref`,RESOLUTION:`resolution`,PRODUCTS:`products`,FACES:`faces`,ORIENTATION:`orientation`,COLOR:`color`},w={STATUS:`approval_status`,APPROVER:`task_approver`,REQUESTOR:`task_requester`,DUE_DATE:`task_duedate`},T={IS:`:`,EQUAL:`=`,NOT_EQUAL:`!=`,RANGE:`..`,IS_NOT:`:-`,IS_EXACT:`:=`,CONTAINS:`~`,CONTAINS_IN_TEXT:`~~~`,STARTS_WITH:`~^`,GREATER_THAN:`>`,LESS_THAN:`<`,GREATER_THAN_OR_EQUAL:`>=`,LESS_THAN_OR_EQUAL:`<=`,SIMILAR_TO:`~~`},In={OR:`OR`,AND:`AND`},E={NUMERIC:`numeric`,SELECT_ONE:`select-one`,MULTI_SELECT:`multi-select`,TEXT_AREA:`textarea`,TEXT:`text`,SUPERTAGS:`tags`,ULTRATAGS:`ultratags`,DATE:`date`,BOOLEAN:`boolean`,ATTACHMENTS_ASSETS:`attachments-assets`,ATTACHMENT_URI:`attachment-uri`,GEO_POINT:`geopoint`,DECIMAL2:`decimal2`,INTEGER_LIST:`integer-list`},Ln={[E.DATE]:`date_`,[E.BOOLEAN]:`bool_`,[E.NUMERIC]:`num_`,[E.DECIMAL2]:`dec_`,[E.ATTACHMENTS_ASSETS]:`attach_`,[E.ATTACHMENT_URI]:`uri_`,[E.SELECT_ONE]:`one_`,[E.MULTI_SELECT]:`multi_`,[E.SUPERTAGS]:`tags_`,[E.ULTRATAGS]:`utags_`,[E.TEXT]:`text_`,[E.TEXT_AREA]:`area_`,[E.GEO_POINT]:`geo_`,[E.INTEGER_LIST]:`intlist_`};Object.fromEntries(Object.entries(Ln).map(([e,t])=>[t,e]));var Rn=Object.values(Ln);function zn(e){for(let t of Rn)if(e.startsWith(t))return e.slice(t.length);return e}var D={PRESET:`preset`,AFTER:`after`,BEFORE:`before`,BETWEEN:`between`,SPECIFIC:`specific`},Bn={TODAY:`today`,LAST_WEEK:`last_week`,WITHIN_WEEK:`within_week`,LAST_MONTH:`last_month`,WITHIN_MONTH:`within_month`,LAST_YEAR:`last_year`,WITHIN_YEAR:`within_year`,EMPTY:`empty`,NOT_EMPTY:`non-empty`},Vn=`empty`,Hn=`non-empty`,Un=`specific`,Wn=`filters:pinned:`,Gn=`metadata:pinned:`,Kn=[C.DATE,C.TYPE,C.SIZE],qn=T.IS,Jn=[{key:C.DATE,labelKey:`filterDate`,label:`Date`,icon:`calendar`,type:`date`},{key:C.TYPE,labelKey:`filterFormat`,label:`Format`,icon:`file-type`,type:`string`},{key:C.SIZE,labelKey:`filterSize`,label:`Size`,icon:`scaling`,type:`string`},{key:C.LICENSE_EXPIRY,labelKey:`filterLicenseExpiry`,label:`License expiry`,icon:`history`,type:`date`},{key:C.TAGS,labelKey:`filterTags`,label:`Tags`,icon:`hash`,type:`string`},{key:C.LABELS,labelKey:`filterLabels`,label:`Labels`,icon:`tag`,type:`string`},{key:C.PRODUCT_REF,labelKey:`filterProducts`,label:`Products`,icon:`box`,type:`string`},{key:C.IMAGE,labelKey:`filterImage`,label:`Image`,icon:`image`,type:`string`},{key:C.COLOR,labelKey:`filterColor`,label:`Color`,icon:`swatch-book`,type:`string`}],Yn={key:C.METADATA,labelKey:`filterMetadata`,label:`Metadata`,icon:`file-text`,type:`string`},Xn={key:C.APPROVAL,labelKey:`filterApproval`,label:`Approval`,icon:`badge-check`,type:`string`},Zn=[{key:w.STATUS,labelKey:`filterApprovalStatus`,label:`Approval status`,icon:`square-check`,type:`string`},{key:w.APPROVER,labelKey:`filterApprovalApprover`,label:`Approver`,icon:`file-check-2`,type:`string`},{key:w.REQUESTOR,labelKey:`filterApprovalRequester`,label:`Requester`,icon:`user-star`,type:`string`},{key:w.DUE_DATE,labelKey:`filterApprovalDueDate`,label:`Due date`,icon:`calendar-check-2`,type:`date`}],Qn=[Yn,...Jn,Xn],$n=new Set(Object.values(w)),er=new Set([...Qn.map(e=>e.key),...$n]),tr={[C.TYPE]:`Format`,[C.DATE]:`Date`,[C.SIZE]:`Size`,[C.LICENSE_EXPIRY]:`License expiry`,[C.TAGS]:`Tags`,[C.LABELS]:`Labels`,[C.PRODUCT_REF]:`Products`,[C.IMAGE]:`Image`,[C.COLOR]:`Color`,[C.METADATA]:`Metadata`,[C.APPROVAL]:`Approval`,...Object.fromEntries(Zn.map(e=>[e.key,e.label]))},nr={...Object.fromEntries(Qn.map(e=>[e.key,e.labelKey])),...Object.fromEntries(Zn.map(e=>[e.key,e.labelKey]))},O={IMAGE:`image`,VIDEO:`video`,AUDIO:`audio`,DOCUMENT:`document`,ARCHIVE:`archive`,DESIGN_TEMPLATE:`template_fdt`,OTHER:`other`,SCRIPT:`script`,FONTS:`font`},rr=[{value:O.IMAGE,labelKey:`assetTypeImage`,label:`Image`,icon:`image`},{value:O.VIDEO,labelKey:`assetTypeVideo`,label:`Video`,icon:`clapperboard`},{value:O.AUDIO,labelKey:`assetTypeAudio`,label:`Audio`,icon:`music`},{value:O.DOCUMENT,labelKey:`assetTypeDocument`,label:`Document`,icon:`document`},{value:O.ARCHIVE,labelKey:`assetTypeArchive`,label:`Archive`,icon:`archive`},{value:O.DESIGN_TEMPLATE,labelKey:`assetTypeDesignTemplate`,label:`Design template`,icon:`layout-template`},{value:O.FONTS,labelKey:`assetTypeFonts`,label:`Fonts`,icon:`text`},{value:O.OTHER,labelKey:`assetTypeOther`,label:`Other`,icon:`layout-grid`}],ir={[O.IMAGE]:[`jpg`,`jpeg`,`png`,`gif`,`webp`,`svg`,`bmp`,`ico`,`tiff`,`tif`,`avif`,`heic`,`heif`,`psd`,`eps`],[O.VIDEO]:[`mp4`,`webm`,`ogg`,`mov`,`avi`,`mkv`,`flv`,`wmv`,`m4v`],[O.AUDIO]:[`mp3`,`wav`,`ogg`,`flac`,`aac`,`wma`,`m4a`,`opus`],[O.DOCUMENT]:[`pdf`,`doc`,`docx`,`xls`,`xlsx`,`ppt`,`pptx`,`txt`,`csv`,`rtf`,`odt`,`ods`,`odp`,`html`],[O.ARCHIVE]:[`zip`,`rar`,`7z`,`tar`,`gz`,`bz2`,`xz`],[O.FONTS]:[`ttf`,`otf`,`woff`,`woff2`,`eot`]},ar={RESOLUTION:0,ORIENTATION:1,FACES:2},or=[{value:`small`,label:`Small`,labelKey:`resolutionSmall`},{value:`medium`,label:`Medium`,labelKey:`resolutionMedium`},{value:`large`,label:`Large`,labelKey:`resolutionLarge`}],sr=[{value:`portrait`,label:`Portrait`,labelKey:`orientationPortrait`},{value:`landscape`,label:`Landscape`,labelKey:`orientationLandscape`},{value:`square`,label:`Square`,labelKey:`orientationSquare`},{value:`panorama`,label:`Panorama`,labelKey:`orientationPanorama`}],cr=[{value:`none`,label:`None`,labelKey:`facesNone`},{value:`1`,label:`1`},{value:`2`,label:`2`},{value:`3..`,label:`3+`}],lr=[{value:`created`,label:`Created at`,labelKey:`createdAt`},{value:`updated`,label:`Updated at`,labelKey:`updatedAt`}],ur=[{value:`today`,label:`Today`,labelKey:`today`},{value:`before`,label:`Before date`,labelKey:`beforeDate`},{value:`last_week`,label:`Last week`,labelKey:`lastWeek`},{value:`after`,label:`After date`,labelKey:`afterDate`},{value:`last_month`,label:`Last month`,labelKey:`lastMonth`},{value:`between`,label:`Between dates`,labelKey:`betweenDates`},{value:`last_year`,label:`Last year`,labelKey:`lastYear`}],dr=[{value:`today`,label:`Today`,labelKey:`today`},{value:`before`,label:`Before date`,labelKey:`beforeDate`},{value:`within_week`,label:`Within week`,labelKey:`withinWeek`},{value:`after`,label:`After date`,labelKey:`afterDate`},{value:`within_month`,label:`Within month`,labelKey:`withinMonth`},{value:`between`,label:`Between dates`,labelKey:`betweenDates`},{value:`within_year`,label:`Within year`,labelKey:`withinYear`},{value:`specific`,label:`Specific date`,labelKey:`specificDate`}],fr=[{value:`today`,label:`Today`,labelKey:`today`},{value:`before`,label:`Before date`,labelKey:`beforeDate`},{value:`within_week`,label:`Within week`,labelKey:`withinWeek`},{value:`after`,label:`After date`,labelKey:`afterDate`},{value:`within_month`,label:`Within month`,labelKey:`withinMonth`},{value:`between`,label:`Between dates`,labelKey:`betweenDates`},{value:`within_year`,label:`Within year`,labelKey:`withinYear`},{value:`specific`,label:`Specific date`,labelKey:`specificDate`}],pr=[`#ffffff`,`#99a1af`,`#000000`,`#894b00`,`#e7000b`,`#ff8904`,`#fdc700`,`#9ae600`,`#008236`,`#00bcff`,`#1447e6`,`#7f22fe`,`#e60076`],mr=[{label:`None (Exact)`,value:`0`,labelKey:`colorDiffNone`},{label:`Small`,value:`1`,labelKey:`colorDiffSmall`},{label:`Medium`,value:`2`,labelKey:`colorDiffMedium`},{label:`Large`,value:`4`,labelKey:`colorDiffLarge`}],hr=[{label:`Is`,value:T.IS,labelKey:`operatorIs`},{label:`Contains`,value:T.CONTAINS_IN_TEXT,labelKey:`operatorContains`}],gr=[{label:`Is`,value:T.IS,labelKey:`operatorIs`},{label:`Is not`,value:T.IS_NOT,labelKey:`operatorIsNot`}],_r=gr,vr=[{label:`Is`,value:T.IS_EXACT,labelKey:`operatorIs`},{label:`Contains`,value:T.IS,labelKey:`operatorContains`},{label:`Does not contain`,value:T.IS_NOT,labelKey:`operatorDoesNotContain`}],yr=[{label:`Is`,value:T.IS,labelKey:`operatorIs`},{label:`Greater than`,value:T.GREATER_THAN_OR_EQUAL,labelKey:`operatorGreaterThan`},{label:`Is not`,value:T.IS_NOT,labelKey:`operatorIsNot`},{label:`Less than`,value:T.LESS_THAN_OR_EQUAL,labelKey:`operatorLessThan`},{label:`Between`,value:T.RANGE,labelKey:`operatorBetween`}];T.IS,T.STARTS_WITH,T.CONTAINS;var br=[{label:`Is`,value:T.IS,labelKey:`operatorIs`},{label:`Is not`,value:T.IS_NOT,labelKey:`operatorIsNot`}],xr=T.IS,Sr=[{value:`APPROVED`,label:`Approved`,labelKey:`approved`,icon:`circle-check-big`,iconColor:`var(--sfx-success, oklch(0.637 0.17 151.295))`},{value:`PENDING`,label:`Pending`,labelKey:`pending`,icon:`clock`,iconColor:`var(--sfx-warning, oklch(0.734 0.157 69.419))`},{value:`REJECTED`,label:`Rejected`,labelKey:`rejected`,icon:`x-circle`,iconColor:`var(--sfx-destructive, oklch(0.577 0.215 27.325))`},{value:`CANCELLED`,label:`Cancelled`,labelKey:`cancelled`,icon:`ban`,iconColor:`var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))`}],Cr=[{label:`Empty`,value:Vn,labelKey:`empty`},{label:`Not empty`,value:Hn,labelKey:`notEmpty`}],wr=[...Cr,{label:`Specific`,value:Un,labelKey:`specific`}],Tr=[{label:`Empty`,value:Vn,labelKey:`empty`},{label:`Not empty`,value:Hn,labelKey:`notEmpty`},{label:`True`,value:`true`,labelKey:`boolTrue`},{label:`False`,value:`false`,labelKey:`boolFalse`}],Er={[E.DATE]:`calendar`,[E.BOOLEAN]:`toggle-left`,[E.NUMERIC]:`file-digit`,[E.DECIMAL2]:`decimals-arrow-right`,[E.ATTACHMENTS_ASSETS]:`paperclip`,[E.ATTACHMENT_URI]:`link-2`,[E.SELECT_ONE]:`circle-dot`,[E.MULTI_SELECT]:`square-check`,[E.SUPERTAGS]:`hash`,[E.ULTRATAGS]:`hash`,[E.TEXT]:`text-initial`,[E.TEXT_AREA]:`text-align-justify`,[E.GEO_POINT]:`locate`,[E.INTEGER_LIST]:`list-ordered`},Dr={[E.TEXT]:`text`,[E.TEXT_AREA]:`text`,[E.NUMERIC]:`number`,[E.DECIMAL2]:`number`,[E.BOOLEAN]:`boolean`,[E.SELECT_ONE]:`select-one`,[E.MULTI_SELECT]:`multi-select`,[E.SUPERTAGS]:`tags`,[E.ULTRATAGS]:`ultratags`,[E.DATE]:`date`,[E.GEO_POINT]:`geo`,[E.ATTACHMENTS_ASSETS]:`attachment`,[E.ATTACHMENT_URI]:`attachment`,[E.INTEGER_LIST]:`attachment`};function Or(e){return Object.prototype.hasOwnProperty.call(Dr,e)}async function kr(e){return((await e.get(`/filters`,{filter_by:`filetype`,format:`list`,limit:200})).filters?.file_types??[]).map(e=>({name:e.name,value:e.value,count:e.count,category:e.category??e.value.split(`_`)[0],label:Ar(e.name)}))}function Ar(e){let t=e.indexOf(`›`);return(t===-1?e:e.slice(t+1).trim()).toUpperCase()}async function jr(e){let t=await e.get(`/settings`),n=t.settings??t,r=n?.metadata??t.metadata,i=(r?.model??[])[0],a=(r?.store?.regional_variants_groups??[]).map(e=>({uuid:e.uuid,label:e.label??e.name??``,variants:(e.variants??[]).map(e=>({api_value:e.api_value??e.value??``,internal_unique_value:e.internal_unique_value??e.api_value??``,label:e.label??e.name??``}))})).filter(e=>e.variants.length>1),o={};for(let e of a)o[e.uuid]=e.variants[0]?.api_value??``;let s=(n?.project_branding??t.settings?.project_branding)?.brandColor,c=!!(n?._cdn_permalink_enabled??t._cdn_permalink_enabled);if(!i)return{fields:[],regionalVariantGroups:a,regionalFilters:o,brandColor:s,cdnPermalinkEnabled:c};let l=i.groups??[],u=[];for(let e of l){let t=e.name||``;for(let n of e.fields??[]){let e=n.type??E.TEXT,r=n.possible_values?.map(e=>({api_value:e.api_value??e.value??``,internal_unique_value:e.internal_unique_value??e.api_value??``,label:e.label??e.name??e.api_value??``}));u.push({key:n.key??n.ckey,label:n.title??n.label??n.key??``,type:e,slug:n.slug,ckey:n.ckey,possible_values:r,group:t,regionalVariantsGroupUuid:n.regional_variants_group_uuid})}}return{fields:u,regionalVariantGroups:a,regionalFilters:o,brandColor:s,cdnPermalinkEnabled:c}}function Mr(e){return e.toLocaleDateString(`en-CA`)}function k(e){if(!e)return``;if(/^\d{4}-\d{2}-\d{2}$/.test(e))return e;let t=new Date(e);return Number.isNaN(t.getTime())?e:Mr(t)}function Nr(){return Mr(new Date)}function Pr(e){let t=new Date;switch(e){case`today`:return{from:Nr(),to:null};case`last_week`:{let e=new Date(t);return e.setDate(e.getDate()-7),{from:Mr(e),to:null}}case`within_week`:{let e=new Date(t);return e.setDate(e.getDate()+7),{from:Nr(),to:Mr(e)}}case`last_month`:{let e=new Date(t);return e.setDate(e.getDate()-30),{from:Mr(e),to:null}}case`within_month`:{let e=new Date(t);return e.setDate(e.getDate()+30),{from:Nr(),to:Mr(e)}}case`last_year`:{let e=new Date(t);return e.setDate(e.getDate()-365),{from:Mr(e),to:null}}case`within_year`:{let e=new Date(t);return e.setDate(e.getDate()+365),{from:Nr(),to:Mr(e)}}default:return null}}function Fr(e,t){return t?t.type===`date`?Ir(t):t.type!==`string`||Lr(t):!1}function Ir(e){return!(!e.kind&&!e.preset||e.kind===`preset`&&!e.preset||e.kind===`between`&&!e.from&&!e.to||e.kind===`after`&&!e.from||e.kind===`before`&&!e.to||e.kind===`specific`&&!e.from||e.from&&e.to&&new Date(e.from)>new Date(e.to))}function Lr(e){return!e.values||!Array.isArray(e.values)||e.values.filter(Boolean).length===0?!1:e.operator===T.RANGE&&Rr(e)?!!e.values[0]&&!!e.values[1]:!0}function Rr(e){return e.metadataType===E.NUMERIC||e.metadataType===E.DECIMAL2}function zr(e,t={}){let n=[];for(let[t,r]of Object.entries(e)){if(!r||!Fr(t,r))continue;let e=Vr(t,r);n.push(...e)}for(let[e,r]of Object.entries(t)){if(!r||!Fr(e,r))continue;let t=Xr(e,r);n.push(...t)}return Br(n)}function Br(e){let t=[],n=[],r=[];for(let i of e)i.startsWith(`type:`)||i.startsWith(`type=`)?t.push(i):i.startsWith(`mimetype:`)||i.startsWith(`mimetype=`)?n.push(i):r.push(i);if(t.length>0&&n.length>0){let e=[...t,...n].join(` , `);r.push(e)}else r.push(...t,...n);return r}function Vr(e,t){if(t.type===`date`)return Hr(e,t);if(e===C.IMAGE)return Yr(t);let{operator:n=qn,values:r=[],logic:i}=t;if(r.length===0)return[];switch(e){case C.SIZE:return Ur(e,r,`..`);case C.FACES:return Wr(e,n,r);case C.TAGS:return Gr(e,n,$r(r),`,`,i);case C.LABELS:return Gr(e,n,$r(r),`,`,i);case C.COLOR:return Kr(n,r,i);case C.TYPE:return qr(r,n);case C.MIME_TYPE:return Jr(e,r,n,i);case C.PRODUCT_REF:return Gr(e,`=%`,r,`,`,i);default:return Gr(e,n,r,`,`,i)}}function Hr(e,t){let n=t.field||`created`;if(t.kind===D.PRESET&&t.preset){if(t.preset===Bn.EMPTY)return[`${n}:"empty"`];if(t.preset===Bn.NOT_EMPTY)return[`${n}:"non-empty"`];let e=Pr(t.preset);return e?e.to===null?[`${n}>"${e.from}"`]:[`${n}:"${e.from}..${e.to}"`]:[]}if(t.kind===D.AFTER&&t.from)return[`${n}>"${t.from}"`];if(t.kind===D.BEFORE&&t.to)return[`${n}<"${t.to}"`];if(t.kind===D.BETWEEN){if(t.from&&t.to)return[`${n}:"${t.from}..${t.to}"`];if(t.from&&!t.to)return[`${n}>"${t.from}"`];if(!t.from&&t.to)return[`${n}<"${t.to}"`]}return t.kind===D.SPECIFIC&&t.from?[`${n}:"${t.from}"`]:[]}function Ur(e,t,n){return t.length===0?[]:[`${e}:"${t.join(n)}"`]}function Wr(e,t,n){return n.length===0?[]:[`${e}${t}"${n.join(`,`)}"`]}function Gr(e,t,n,r,i){return n.length===0?[]:i===In.AND?n.map(n=>`${e}${t}"${n}"`):[`${e}${t}${n.map(e=>`"${e}"`).join(r)}`]}function Kr(e,t,n){let r=[],i=Gr(`color_search`,e,t,`,`,n);return r.push(...i),r.push(`color_operator:"AND"`),r}function qr(e,t){if(e.length===0)return[];let n=new Set,r=[];for(let t of e){let e=ir[t];if(e)for(let i of e){let e=`${t}_${i}`;n.has(e)||(n.add(e),r.push(e))}else n.has(t)||(n.add(t),r.push(t))}return[`type${t}${r.map(e=>`"${e}"`).join(`,`)}`]}function Jr(e,t,n,r){return t.length===0?[]:[`${e}${n}${t.map(e=>`"${e}"`).join(`,`)}`]}function Yr(e){let t=[];if(typeof e==`object`&&e&&!Array.isArray(e)){let n=e,r=n.resolution,i=n.orientation,a=n.faces;return r?.length&&t.push(`resolution:"${r.join(`,`)}"`),i?.length&&t.push(`orientation:"${i.join(`,`)}"`),a?.length&&t.push(`faces:"${a.join(`,`)}"`),t}let n=e,r=n[ar.RESOLUTION],i=n[ar.ORIENTATION],a=n[ar.FACES];return r&&t.push(`resolution:"${r}"`),i&&t.push(`orientation:"${i}"`),a&&t.push(`faces:"${a}"`),t}function Xr(e,t){let n=zn(e),r=Qr(e);if(t.type===`date`)return Zr(n,t,r);let{operator:i=qn,values:a=[],logic:o,metadataType:s}=t;if(a.length===0)return[];if(a.length===1&&(a[0]===`empty`||a[0]===`non-empty`))return[`${n}${s===E.GEO_POINT?T.IS+`~`:T.IS}"${a[0]}"`];let c=s===E.NUMERIC||s===E.DECIMAL2;if(c&&i===T.RANGE)return[`${n}${T.IS}"${a.join(`","`)}"`];if(c&&(i===T.GREATER_THAN_OR_EQUAL||i===T.LESS_THAN_OR_EQUAL)){let e=i===T.GREATER_THAN_OR_EQUAL?a[0]:a[1]??a[0];return e?[`${n}${i}"${e}"`]:[]}if(s===E.GEO_POINT){let e=a.map(e=>{let t=e.indexOf(`..`);return t===-1?`(${e})`:`(${e.slice(0,t)})${e.slice(t)}`});return Gr(n,i+`~`,e,`,`,o)}return Gr(n,i,a,`,`,o)}function Zr(e,t,n){let r=Hr(e,t);return!n||r.length===0?r:r.map(e=>{let t=e.search(/[^a-zA-Z0-9_]/);return t===-1?`"${e}"`:`"${e.slice(0,t)}${e.slice(t).replace(/"/g,``)}"`})}function Qr(e){return e.startsWith(`date_`)}function $r(e){return e.map(e=>e.replace(/#/g,``))}var ei=new Set([C.DATE,C.LICENSE_EXPIRY,w.DUE_DATE]),ti={[C.DATE]:`created`,[C.LICENSE_EXPIRY]:C.LICENSE_EXPIRY,[w.DUE_DATE]:w.DUE_DATE};function ni(e){if(!e)return{};let t={};for(let[n,r]of Object.entries(e))r&&(t[n]=ri(n,r));return t}function ri(e,t){return t.type===`string`||t.type===`date`?t:ei.has(e)?{type:`date`,field:t.field??ti[e]??`created`,kind:t.kind??null,preset:t.preset??null,from:t.from??null,to:t.to??null}:{type:`string`,values:t.values,...t.operator!==void 0&&{operator:t.operator},...t.logic!==void 0&&{logic:t.logic}}}function ii(e){let t=localStorage.getItem(Wn+e),n=localStorage.getItem(Gn+e),r;try{r=t?JSON.parse(t):[...Kn]}catch{r=[...Kn]}let i;try{i=n?JSON.parse(n):[]}catch{i=[]}return{pinnedFilters:r,pinnedMetadata:i}}function ai(e,t){localStorage.setItem(Wn+e,JSON.stringify(t))}function oi(e,t){localStorage.setItem(Gn+e,JSON.stringify(t))}var si=`sort-by`,ci=`sort-order`;function li(e,t){try{localStorage.setItem(si,e),localStorage.setItem(ci,t)}catch{}}function ui(){try{return{sortBy:localStorage.getItem(si),sortDirection:localStorage.getItem(ci)}}catch{return{sortBy:null,sortDirection:null}}}function di(e,t,n){return e===`title`?n(`metadataTitleLabel`,`Title`):e===`description`?n(`metadataDescriptionLabel`,`Description`):t}function fi(e,t){let n=!1,r=e.map(e=>{let r=di(e.key,e.label,t);return r===e.label?e:(n=!0,{...e,label:r})});return n?r:e}var pi=`ap-last-folder`,mi=`ap-last-view`,hi=`ap-last-tab`;function gi(e,t){return t?`${e}:${t}`:e}function _i(e,t){try{localStorage.setItem(gi(pi,t),e)}catch{}}function vi(e){try{return localStorage.getItem(gi(pi,e))}catch{return null}}function yi(e,t){try{localStorage.setItem(gi(mi,t),e)}catch{}}function bi(e){try{return localStorage.getItem(gi(mi,e))}catch{return null}}function xi(e,t){try{localStorage.setItem(gi(hi,t),e)}catch{}}function Si(e){try{let t=localStorage.getItem(gi(hi,e));return t===`assets`||t===`folders`||t===`labels`||t===`collections`?t:null}catch{return null}}function Ci(e){let t=e.replace(`#`,``),n=t.length===3?t[0]+t[0]+t[1]+t[1]+t[2]+t[2]:t;return[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]}function wi(e){return e<=.04045?e/12.92:((e+.055)/1.055)**2.4}function Ti(e,t,n){let r=wi(e),i=wi(t),a=wi(n),o=.4122214708*r+.5363325363*i+.0514459929*a,s=.2119034982*r+.6806995451*i+.1073969566*a,c=.0883024619*r+.2817188376*i+.6299787005*a,l=Math.cbrt(o),u=Math.cbrt(s),d=Math.cbrt(c),f=.2104542553*l+.793617785*u-.0040720468*d,p=1.9779984951*l-2.428592205*u+.4505937099*d,m=.0259040371*l+.7827717662*u-.808675766*d,h=Math.sqrt(p*p+m*m),g=180/Math.PI*Math.atan2(m,p);return g<0&&(g+=360),[f,h,g]}function Ei(e){return e>.7}function Di(e,t){let n=[`--sfx-primary`,`--sfx-primary-foreground`,`--sfx-primary-10`,`--sfx-primary-20`,`--sfx-accent`,`--sfx-accent-foreground`,`--sfx-ring`,`--sfx-selection-bg`];if(!t){for(let t of n)e.style.removeProperty(t);return}let[r,i,a]=Ci(t),[o,s,c]=Ti(r,i,a),l=`${o.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(1)}`,u=`oklch(${l})`,d=Ei(o)?`#000`:`#fff`;e.style.setProperty(`--sfx-primary`,u),e.style.setProperty(`--sfx-primary-foreground`,d),e.style.setProperty(`--sfx-primary-10`,`oklch(${l} / 0.1)`),e.style.setProperty(`--sfx-primary-20`,`oklch(${l} / 0.2)`),e.style.setProperty(`--sfx-accent`,`oklch(${l} / 0.07)`),e.style.setProperty(`--sfx-accent-foreground`,u),e.style.setProperty(`--sfx-ring`,`oklch(${l} / 0.7)`),e.style.setProperty(`--sfx-selection-bg`,`oklch(${l} / 0.08)`)}var Oi=[{value:`name`,labelKey:`sortName`,label:`Name`},{value:`created_at`,labelKey:`sortUploaded`,label:`Uploaded`},{value:`modified_at`,labelKey:`sortModified`,label:`Modified`},{value:`size`,labelKey:`sortSize`,label:`Size`},{value:`type`,labelKey:`sortFormat`,label:`Format`}],ki=[{value:`relevance`,labelKey:`sortRelevance`,label:`Relevance`},...Oi],Ai=[{value:`name`,labelKey:`sortName`,label:`Name`},{value:`created_at`,labelKey:`sortUploaded`,label:`Uploaded`},{value:`modified_at`,labelKey:`sortModified`,label:`Modified`},{value:`files_count_recursive`,labelKey:`sortAssetsCount`,label:`Assets count`},{value:`files_size_recursive`,labelKey:`sortAssetsSize`,label:`Assets size`}],ji=[{value:`name`,labelKey:`sortName`,label:`Name`}],Mi=[{value:`name`,labelKey:`sortName`,label:`Name`},{value:`created_at`,labelKey:`sortUploaded`,label:`Uploaded`},{value:`updated_at`,labelKey:`sortModified`,label:`Modified`}],Ni=[{value:`name`,labelKey:`sortName`,label:`Name`}],Pi=r`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`,Fi=r`
  button:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`,Ii=r`
  @media (hover: none) and (pointer: coarse) {
    input,
    textarea,
    select {
      font-size: 16px !important;
    }
  }
`,Li=e=>e.includes(`-`)?e:e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),A=_(class extends h{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==g.ELEMENT)throw Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return t}update(e,[n]){if(n===this._lastStyles)return t;this._lastStyles=n;let{style:r}=e.element,i=n??{};for(let e of this._appliedProps)(!(e in i)||i[e]==null||i[e]===``)&&(r.removeProperty(Li(e)),this._appliedProps.delete(e));for(let[e,t]of Object.entries(i))t!=null&&t!==``?(r.setProperty(Li(e),t),this._appliedProps.add(e)):this._appliedProps.has(e)&&(r.removeProperty(Li(e)),this._appliedProps.delete(e));return t}});function Ri(e,t){customElements.get(e)||customElements.define(e,t)}var j=e=>t=>(Ri(e,t),t),zi=class extends e{constructor(...e){super(...e),this.open=!1}static{this.styles=r`
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
  `}updated(e){super.updated(e),e.has(`open`)&&(this.open?this.dialog&&!this.dialog.open&&this.dialog.showModal():this.dialog?.open&&this._animateClose())}_animateClose(){let e=this.dialog;if(e){if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.close();return}e.classList.add(`closing`),e.addEventListener(`animationend`,()=>{e.classList.remove(`closing`),e.close()},{once:!0})}}_handleBackdropClick(e){e.target===this.dialog&&this.dispatchEvent(new CustomEvent(`ap-cancel`,{detail:{reason:`backdrop`},bubbles:!0,composed:!0}))}_handleCancel(e){e.preventDefault(),this.dispatchEvent(new CustomEvent(`ap-cancel`,{detail:{reason:`escape`},bubbles:!0,composed:!0}))}render(){return a`
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
    `}};l([i({type:Boolean})],zi.prototype,`open`,void 0),l([u(`dialog`)],zi.prototype,`dialog`,void 0),zi=l([j(`ap-modal`)],zi);var M=r`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`,Bi=class extends e{constructor(...e){super(...e),this.groups=[],this.selectedFilters={},this.t=(e,t)=>typeof t==`string`?t:e,this._open=!1,this._handleOutsideClick=e=>{this._open&&!e.composedPath().includes(this)&&(this._open=!1)}}static{this.styles=r`
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
  `}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._handleOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._handleOutsideClick)}_selectVariant(e,t){this.dispatchEvent(new CustomEvent(`regional-change`,{detail:{groupUuid:e,value:t},bubbles:!0,composed:!0}))}render(){let e=this.groups.length>0;return a`
      <button
        class="trigger ${this._open?`active`:``}"
        @click=${()=>this._open=!this._open}
        aria-label=${this.t(`regionalFiltersDropdownLabel`,`Regional settings`)}
        title=${this.t(`regionalFiltersDropdownLabel`,`Regional settings`)}
      >
        <sfx-icon name="globe" .size=${18}></sfx-icon>
      </button>
      <div class="popover ${this._open?`open`:``}">
        ${e?s:a`
              <div class="empty-msg">
                ${this.t(`noRegionalSettings`,`No regional settings configured`)}
              </div>
            `}
        ${this.groups.map(e=>a`
            <div class="group">
              <div class="group-label">${e.label}</div>
              ${e.variants.map(t=>{let n=this.selectedFilters[e.uuid]===t.api_value;return a`
                  <button
                    class="variant-option"
                    ?data-selected=${n}
                    @click=${()=>this._selectVariant(e.uuid,t.api_value)}
                  >
                    <span class="variant-label">${t.label}</span>
                    <span class="check-mark"
                      >${n?a`<sfx-icon name="check" .size=${14}></sfx-icon>`:``}</span
                    >
                  </button>
                `})}
            </div>
          `)}
      </div>
    `}};l([i({type:Array})],Bi.prototype,`groups`,void 0),l([i({type:Object})],Bi.prototype,`selectedFilters`,void 0),l([i({attribute:!1})],Bi.prototype,`t`,void 0),l([c()],Bi.prototype,`_open`,void 0),Bi=l([j(`ap-regional-settings`)],Bi);var Vi=[{value:`assets`,labelKey:`tabAssets`,labelDefault:`Assets`,icon:`gallery-vertical-end`},{value:`folders`,labelKey:`tabFolders`,labelDefault:`Folders`,icon:`folder-open`},{value:`labels`,labelKey:`tabLabels`,labelDefault:`Labels`,icon:`tag`},{value:`collections`,labelKey:`tabCollections`,labelDefault:`Collections`,icon:`layout-grid`}],N=class extends e{constructor(...e){super(...e),this.activeTab=`assets`,this.tabs=[`assets`,`folders`],this.isInsideLabel=!1,this.isInsideCollection=!1,this.isInsideCollectionLeaf=!1,this.viewMode=`grid`,this.searchQuery=``,this.regionalGroups=[],this.regionalFilters={},this.hideClose=!1,this.enableAISearch=!1,this.isAISearchActive=!1,this.t=(e,t)=>typeof t==`string`?t:e,this._localSearch=``,this._debouncedSearch=Zt(e=>{(e.length===0||e.length>=3)&&this.dispatchEvent(new CustomEvent(`search-change`,{detail:{value:e},bubbles:!0,composed:!0}))},300)}static{this.styles=[M,r`
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
    `]}disconnectedCallback(){super.disconnectedCallback(),this._debouncedSearch.cancel()}willUpdate(e){e.has(`searchQuery`)&&(this._localSearch=this.searchQuery)}_handleInput(e){let t=e.target.value;this._localSearch=t,this._debouncedSearch(t)}_clearSearch(){this._localSearch=``,this._debouncedSearch.cancel(),this.dispatchEvent(new CustomEvent(`search-change`,{detail:{value:``},bubbles:!0,composed:!0}))}_toggleView(){let e=this.viewMode===`grid`?`list`:`grid`;this.dispatchEvent(new CustomEvent(`view-change`,{detail:{mode:e},bubbles:!0,composed:!0}))}_handleTabChange(e){this.dispatchEvent(new CustomEvent(`tab-change`,{detail:{tab:e.detail.value},bubbles:!0,composed:!0}))}_handleRegionalChange(e){this.dispatchEvent(new CustomEvent(`regional-change`,{detail:e.detail,bubbles:!0,composed:!0}))}_toggleAISearch(){this.dispatchEvent(new CustomEvent(`ai-search-toggle`,{detail:{active:!this.isAISearchActive},bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent(`ap-close`,{bubbles:!0,composed:!0}))}render(){let{t:e}=this,t=Vi.filter(e=>this.tabs.includes(e.value)).map(t=>({...t,label:e(t.labelKey,t.labelDefault)}));return a`
      <div class="header-row">
        ${t.length>1?a`<sfx-dropdown
              .value=${this.activeTab}
              .options=${t}
              @sfx-change=${this._handleTabChange}
            ></sfx-dropdown>`:s}
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${16}></sfx-icon>
          <input
            type="text"
            placeholder=${this.isAISearchActive?this.activeTab===`folders`?e(`aiSearchFoldersPlaceholder`,`AI search folders and assets`):e(`aiSearchAssetsPlaceholder`,`AI search assets`):this.activeTab===`labels`&&!this.isInsideLabel?e(`searchLabelsPlaceholder`,`Search labels`):this.activeTab===`collections`&&!this.isInsideCollection?e(`searchCollectionsPlaceholder`,`Search collections`):this.activeTab===`collections`&&this.isInsideCollection&&!this.isInsideCollectionLeaf?e(`searchCollectionFoldersPlaceholder`,`Search collection folders`):this.activeTab===`folders`?e(`searchFoldersPlaceholder`,`Search folders and assets`):e(`searchAssetsPlaceholder`,`Search assets`)}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          <div class="search-actions">
            ${this._localSearch?a`
                  <button
                    class="clear-btn"
                    @click=${this._clearSearch}
                    aria-label=${e(`clearSearch`,`Clear search`)}
                  >
                    <sfx-icon name="close" .size=${14}></sfx-icon>
                  </button>
                `:``}
            ${this.enableAISearch?a`
                  <button
                    class="ai-toggle ${this.isAISearchActive?`active`:``}"
                    @click=${this._toggleAISearch}
                    aria-label=${this.isAISearchActive?e(`disableAISearch`,`Disable AI search`):e(`enableAISearch`,`Enable AI search`)}
                    title=${this.isAISearchActive?e(`aiSearchOn`,`AI search on`):e(`aiSearchOff`,`AI search off`)}
                  >
                    <sfx-icon name="sparkles" .size=${12}></sfx-icon>
                    <span>AI</span>
                  </button>
                `:``}
          </div>
        </div>
        <div class="actions">
          <ap-regional-settings
            .groups=${this.regionalGroups}
            .selectedFilters=${this.regionalFilters}
            .t=${e}
            @regional-change=${this._handleRegionalChange}
          ></ap-regional-settings>
          <button
            class="icon-btn"
            @click=${this._toggleView}
            aria-label=${this.viewMode===`grid`?e(`switchToListView`,`Switch to list view`):e(`switchToGridView`,`Switch to grid view`)}
            title=${this.viewMode===`grid`?e(`listView`,`List view`):e(`gridView`,`Grid view`)}
          >
            <sfx-icon
              name=${this.viewMode===`grid`?`list`:`layout-grid`}
              .size=${18}
            ></sfx-icon>
          </button>
          ${this.hideClose?s:a`
                <div class="divider"></div>
                <button
                  class="icon-btn icon-btn--muted"
                  @click=${this._handleClose}
                  aria-label=${e(`close`,`Close`)}
                >
                  <sfx-icon name="close" .size=${18}></sfx-icon>
                </button>
              `}
        </div>
      </div>
    `}};l([i()],N.prototype,`activeTab`,void 0),l([i({type:Array})],N.prototype,`tabs`,void 0),l([i({type:Boolean})],N.prototype,`isInsideLabel`,void 0),l([i({type:Boolean})],N.prototype,`isInsideCollection`,void 0),l([i({type:Boolean})],N.prototype,`isInsideCollectionLeaf`,void 0),l([i()],N.prototype,`viewMode`,void 0),l([i()],N.prototype,`searchQuery`,void 0),l([i({type:Array})],N.prototype,`regionalGroups`,void 0),l([i({type:Object})],N.prototype,`regionalFilters`,void 0),l([i({type:Boolean})],N.prototype,`hideClose`,void 0),l([i({type:Boolean,reflect:!0,attribute:`ai-search`})],N.prototype,`enableAISearch`,void 0),l([i({type:Boolean})],N.prototype,`isAISearchActive`,void 0),l([i({attribute:!1})],N.prototype,`t`,void 0),l([c()],N.prototype,`_localSearch`,void 0),N=l([j(`ap-header`)],N);var Hi=class extends e{constructor(...e){super(...e),this.title=``,this.open=!1}static{this.styles=r`
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
  `}render(){return this.open?a`
      <div class="popover">
        ${this.title?a`<div class="title">${this.title}</div>`:``}
        <slot></slot>
      </div>
    `:a``}};l([i()],Hi.prototype,`title`,void 0),l([i({type:Boolean})],Hi.prototype,`open`,void 0),Hi=l([j(`ap-filter-popover`)],Hi);function Ui(e){let t=new Map;for(let n of e){let e=n.category||n.value.split(`_`)[0];if(!t.has(e)){let n=rr.find(t=>t.value===e);t.set(e,{key:e,labelKey:n?.labelKey||e,label:n?.label||e.charAt(0).toUpperCase()+e.slice(1),icon:n?.icon||`file`,extensions:[],totalCount:0})}let r=t.get(e);r.extensions.push({value:n.value,label:n.label||n.value.split(`_`).pop()?.toUpperCase()||n.value,count:n.count}),r.totalCount+=n.count}let n=rr.map(e=>e.value);return[...t.values()].sort((e,t)=>{let r=n.indexOf(e.key),i=n.indexOf(t.key);return(r===-1?999:r)-(i===-1?999:i)})}var Wi=class extends e{constructor(...e){super(...e),this.selected=[],this.fileTypes=[],this.t=(e,t)=>typeof t==`string`?t:e,this._search=``,this._expanded=new Set}static{this.styles=r`
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
  `}_extValues(e){return e.extensions.map(e=>e.value)}_isGroupFullySelected(e){if(this.selected.includes(e.key))return!0;let t=this._extValues(e);return t.length>0&&t.every(e=>this.selected.includes(e))}_isGroupPartial(e){if(this.selected.includes(e.key))return!1;let t=this._extValues(e),n=t.filter(e=>this.selected.includes(e)).length;return n>0&&n<t.length}_isExtSelected(e,t){return this.selected.includes(t)||this.selected.includes(e)}_toggleGroup(e){let t=this._extValues(e),n=this._isGroupFullySelected(e),r;if(n){let n=new Set([e.key,...t]);r=this.selected.filter(e=>!n.has(e))}else{let n=new Set(t);r=this.selected.filter(e=>!n.has(e)),r.push(e.key)}this._emit(r)}_toggleExt(e,t){let n=this._extValues(t),r=[...this.selected];r.includes(t.key)&&(r=r.filter(e=>e!==t.key),r.push(...n)),r.includes(e)?r=r.filter(t=>t!==e):(r.push(e),n.every(e=>r.includes(e))&&(r=r.filter(e=>!n.includes(e)),r.push(t.key))),this._emit(r)}_clearAll(){this._emit([])}_emit(e){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:C.TYPE,values:e,operator:T.IS},bubbles:!0,composed:!0}))}_toggleExpand(e){let t=new Set(this._expanded);t.has(e)?t.delete(e):t.add(e),this._expanded=t}_filteredGroups(e){let t=this._search.toLowerCase().trim();return t?e.map(e=>{if(e.label.toLowerCase().includes(t)||e.key.toLowerCase().includes(t))return e;let n=e.extensions.filter(e=>e.label.toLowerCase().includes(t)||e.value.toLowerCase().includes(t));return n.length===0?null:{...e,extensions:n}}).filter(e=>e!==null):e}_toggleCategory(e){let t=this.selected.includes(e)?this.selected.filter(t=>t!==e):[...this.selected,e];this._emit(t)}updated(e){if(e.has(`fileTypes`)&&this.fileTypes.length>0){let e=Ui(this.fileTypes),t=new Set(this._expanded);for(let n of e)(this._isGroupFullySelected(n)||this._isGroupPartial(n))&&t.add(n.key);this._expanded=t}}render(){if(this.fileTypes.length===0)return this._renderFallback();let e=Ui(this.fileTypes),t=this._filteredGroups(e),n=this.selected.length>0;return a`
      <input
        class="search-input"
        type="text"
        .placeholder=${this.t(`searchFormatsPlaceholder`,`Search formats...`)}
        .value=${this._search}
        @input=${e=>{this._search=e.target.value}}
      />
      <div class="header-row">
        <span class="section-label">${this.t(`formats`,`Formats`)}</span>
        ${n?a`<button class="clear-btn" @click=${this._clearAll}>
              ${this.t(`clearAll`,`Clear all`)}
            </button>`:s}
      </div>
      <div class="groups">
        ${t.length===0&&this._search.trim()?a`<div class="no-results">${this.t(`noFormatsFound`,`No formats found`)}</div>`:t.map(e=>this._renderGroup(e))}
      </div>
    `}_renderGroup(e){let t=this._expanded.has(e.key)||this._search.trim().length>0,n=this._isGroupFullySelected(e),r=this._isGroupPartial(e);return a`
      <div
        class="group-header ${n||r?`selected`:``}"
        @click=${()=>this._toggleExpand(e.key)}
      >
        <svg
          class="group-chevron ${t?`expanded`:``}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        <sfx-icon name=${e.icon} size="16"></sfx-icon>
        <span class="group-label">${this.t(e.labelKey,e.label)}</span>
        <sfx-checkbox
          ?checked=${n}
          ?indeterminate=${r}
          @click=${e=>e.stopPropagation()}
          @sfx-toggle=${()=>this._toggleGroup(e)}
        ></sfx-checkbox>
      </div>
      ${t?a`
            <div class="extensions">
              ${e.extensions.map(t=>a`
                  <div class="ext-row" @click=${()=>this._toggleExt(t.value,e)}>
                    <sfx-checkbox
                      ?checked=${this._isExtSelected(t.value,e.key)}
                      @click=${e=>e.stopPropagation()}
                      @sfx-toggle=${()=>this._toggleExt(t.value,e)}
                    ></sfx-checkbox>
                    <span class="ext-label">${t.label}</span>
                  </div>
                `)}
            </div>
          `:s}
    `}_renderFallback(){return a`
      <div class="options">
        <span class="section-label">${this.t(`formats`,`Formats`)}</span>
        ${rr.map(e=>a`
            <div
              class="option ${this.selected.includes(e.value)?`selected`:``}"
              @click=${()=>this._toggleCategory(e.value)}
            >
              <sfx-checkbox ?checked=${this.selected.includes(e.value)}></sfx-checkbox>
              <sfx-icon name=${e.icon} size="16"></sfx-icon>
              <span class="option-label">${e.label}</span>
            </div>
          `)}
      </div>
    `}};l([i({type:Array})],Wi.prototype,`selected`,void 0),l([i({type:Array})],Wi.prototype,`fileTypes`,void 0),l([i({attribute:!1})],Wi.prototype,`t`,void 0),l([c()],Wi.prototype,`_search`,void 0),l([c()],Wi.prototype,`_expanded`,void 0),Wi=l([j(`ap-filter-type`)],Wi);var Gi=r`
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
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
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
`,Ki=class extends e{constructor(...e){super(...e),this.filterKey=C.DATE,this.t=(e,t)=>typeof t==`string`?t:e,this.field=`created`,this.kind=null,this.preset=``,this.from=``,this.to=``}static{this.styles=[Gi,r`
      .date-inputs {
        margin-top: 4px;
      }
    `]}get _isLicenseExpiry(){return this.filterKey===C.LICENSE_EXPIRY}get _rangeOptions(){return(this._isLicenseExpiry?dr:ur).map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _fieldOptions(){return lr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _todayStr(){return Mr(new Date)}get _hasFilter(){return!!(this.kind||this.preset||this.from||this.to)}_kindFromValue(e){return[`before`,`after`,`between`,`specific`].includes(e)?e:`preset`}_selectField(e){this.field=e,this._dispatchChange()}_selectPreset(e){if(!e){this._clearAll();return}let t=this._kindFromValue(e);if(this.kind=t,this.preset=e,[`before`,`after`,`between`,`specific`].includes(e)){this.from=``,this.to=``,this.requestUpdate();return}let n=Pr(e);n&&(this.from=n.from,this.to=n.to??``),this._dispatchChange()}_clearAll(){this.field=`created`,this.kind=null,this.preset=``,this.from=``,this.to=``,this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:this.filterKey,values:{field:this.field,kind:this.kind,preset:this.preset,from:this.from,to:this.to}},bubbles:!0,composed:!0}))}_handleDateInput(e,t){let n=t.target.value,r=n?new Date(n+`T00:00:00`).toISOString():``;if(e===`from`?this.from=r:this.to=r,this.preset===`specific`&&e===`from`&&r){let e=new Date(n+`T23:59:59`);this.to=e.toISOString()}this.preset===`after`&&e===`from`&&r&&(this.to=new Date().toISOString()),this.preset===`before`&&e===`to`&&r&&(this.from=new Date(0).toISOString()),this._dispatchChange()}_renderDateTypeSection(){return this._isLicenseExpiry?s:a`
      <div class="filter-section">
        <span class="section-label">${this.t(`dateType`,`Date type`)}</span>
        <sfx-radio-group
          .options=${this._fieldOptions}
          .value=${this.field}
          @sfx-change=${e=>this._selectField(e.detail.value)}
        ></sfx-radio-group>
      </div>
    `}_renderRangeSection(){return a`
      <div class="filter-section">
        <span class="section-label">${this.t(`dateRange`,`Range`)}</span>
        <sfx-radio-group
          clearable
          columns="2"
          .options=${this._rangeOptions}
          .value=${this.preset}
          @sfx-change=${e=>this._selectPreset(e.detail.value)}
        ></sfx-radio-group>
      </div>
    `}_renderDateInputs(){let e=this.preset;if(![`before`,`after`,`between`,`specific`].includes(e))return s;let t=this.from?k(this.from):``,n=this.to?k(this.to):``,r=this._todayStr;return e===`specific`?a`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t(`date`,`Date`)}</span>
            <sfx-date-input
              max=${r}
              .value=${t}
              @change=${e=>this._handleDateInput(`from`,e)}
            ></sfx-date-input>
          </div>
        </div>
      `:e===`before`?a`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t(`endDate`,`End date`)}</span>
            <sfx-date-input
              max=${r}
              .value=${n}
              @change=${e=>this._handleDateInput(`to`,e)}
            ></sfx-date-input>
          </div>
        </div>
      `:e===`after`?a`
        <div class="filter-section date-inputs">
          <div>
            <span class="input-label">${this.t(`startDate`,`Start date`)}</span>
            <sfx-date-input
              max=${r}
              .value=${t}
              @change=${e=>this._handleDateInput(`from`,e)}
            ></sfx-date-input>
          </div>
        </div>
      `:a`
      <div class="filter-section date-inputs">
        <div class="grid-2">
          <div>
            <span class="input-label">${this.t(`startDate`,`Start date`)}</span>
            <sfx-date-input
              max=${n||r}
              .value=${t}
              @change=${e=>this._handleDateInput(`from`,e)}
            ></sfx-date-input>
          </div>
          <div>
            <span class="input-label">${this.t(`endDate`,`End date`)}</span>
            <sfx-date-input
              min=${t}
              max=${r}
              .value=${n}
              @change=${e=>this._handleDateInput(`to`,e)}
            ></sfx-date-input>
          </div>
        </div>
      </div>
    `}render(){return a`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${()=>this._clearAll()}>
          ${this.t(`clearAll`,`Clear all`)}
        </button>
        ${this._renderDateTypeSection()} ${this._renderRangeSection()} ${this._renderDateInputs()}
      </div>
    `}};l([i()],Ki.prototype,`filterKey`,void 0),l([i({attribute:!1})],Ki.prototype,`t`,void 0),l([i()],Ki.prototype,`field`,void 0),l([i()],Ki.prototype,`kind`,void 0),l([i()],Ki.prototype,`preset`,void 0),l([i()],Ki.prototype,`from`,void 0),l([i()],Ki.prototype,`to`,void 0),Ki=l([j(`ap-filter-date`)],Ki);var qi=class extends e{constructor(...e){super(...e),this.tags=[],this.selected=[],this.filterKey=C.TAGS,this.t=(e,t)=>typeof t==`string`?t:e,this._search=``}static{this.styles=[M,Gi,r`
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
    `]}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._searchInput?.focus())}get _suggestedTags(){return this.tags.filter(e=>e.primary)}get _otherTags(){return this.tags.filter(e=>!e.primary)}get _atLimit(){return this.selected.length>=10}get _isSearching(){return this._search.trim().length>0}_toggle(e){let t=this.selected.includes(e);if(!t&&this._atLimit)return;let n=t?this.selected.filter(t=>t!==e):[...this.selected,e];this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:this.filterKey,values:n,operator:T.IS},bubbles:!0,composed:!0}))}_remove(e){let t=this.selected.filter(t=>t!==e);this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:this.filterKey,values:t,operator:T.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:this.filterKey,values:[],operator:T.IS},bubbles:!0,composed:!0}))}_onSearchInput(e){this._search=e.target.value}_clearSearch(){this._search=``}_getTagBySid(e){return this.tags.find(t=>t.sid===e)}_renderTagItem(e){let t=this.selected.includes(e.sid),n=!t&&this._atLimit;return a`
      <div
        class="tag-item ${n?`disabled`:``}"
        title=${n?`You can select up to 10 tags`:s}
        @click=${()=>!n&&this._toggle(e.sid)}
      >
        <sfx-checkbox ?checked=${t}></sfx-checkbox>
        <span class="tag-name">${e.label}</span>
      </div>
    `}render(){let e=this._search.toLowerCase().trim();return a`
      <div class="filter-content">
        <div class="filter-header">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="tag-search"
            type="text"
            .placeholder=${this.t(`searchTagsPlaceholder`,`Search tags`)}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?a`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?a`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button class="clear-btn" @click=${this._clearAll}>Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{let t=this._getTagBySid(e);return t?a`
                      <div class="chip">
                        <span class="chip-label">${t.label}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `:s})}
                </div>
              </div>
            `:s}
        ${this._isSearching?this._renderSearchResults(e):this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit?a`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span>You can select up to ${10} tags.</span>
              </div>
            `:s}
      </div>
    `}_renderSearchResults(e){let t=t=>t.toLowerCase().includes(e),n=this._suggestedTags.filter(e=>t(e.label)).slice(0,50),r=this._otherTags.filter(e=>t(e.label)).slice(0,50);return n.length===0&&r.length===0?a`<div class="no-results">${this.t(`noTagsFound`,`No tags found`)}</div>`:a`
      ${n.length>0?a`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">${this.t(`suggestedTags`,`Suggested tags`)}</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length===0}
                  @click=${this._clearAll}
                >
                  ${this.t(`clearAll`,`Clear all`)}
                </button>
              </div>
              <div class="options-list short">
                ${n.map(e=>this._renderTagItem(e))}
              </div>
            </div>
          `:s}
      ${r.length>0?a`
            <div class="filter-section">
              <div class="section-header">
                ${n.length===0?a`<span class="section-label">${this.t(`allTags`,`All tags`)}</span>
                      <button
                        class="clear-btn"
                        ?disabled=${this.selected.length===0}
                        @click=${this._clearAll}
                      >
                        ${this.t(`clearAll`,`Clear all`)}
                      </button>`:a`<span class="section-label">${this.t(`allTags`,`All tags`)}</span>`}
              </div>
              <div class="options-list">
                ${r.map(e=>this._renderTagItem(e))}
              </div>
            </div>
          `:s}
    `}_renderSections(){if(this.tags.length===0)return a`<div class="no-results">${this.t(`noTagsAvailable`,`No tags available`)}</div>`;let e=this._suggestedTags.filter(e=>!this.selected.includes(e.sid));return a`
      <div class="filter-section">
        ${e.length>0?a`<span class="section-label">${this.t(`suggestedTags`,`Suggested tags`)}</span>`:s}
        ${e.length>0?a`
              <div class="options-list short">
                ${e.map(e=>this._renderTagItem(e))}
              </div>
            `:s}
      </div>

      ${e.length>0?a`<div class="separator"></div>`:s}

      <div class="hint-message">
        ${this.t(`findMoreTagsBySearch`,`Find more tags by using search`)}
      </div>
    `}};l([i({type:Array})],qi.prototype,`tags`,void 0),l([i({type:Array})],qi.prototype,`selected`,void 0),l([i()],qi.prototype,`filterKey`,void 0),l([i({attribute:!1})],qi.prototype,`t`,void 0),l([u(`.tag-search`)],qi.prototype,`_searchInput`,void 0),l([c()],qi.prototype,`_search`,void 0),qi=l([j(`ap-filter-tags`)],qi);var Ji=class extends e{constructor(...e){super(...e),this.labels=[],this.selected=[],this.t=(e,t)=>typeof t==`string`?t:e,this._search=``}static{this.styles=[Gi,r`
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
    `]}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._searchInput?.focus())}get _atLimit(){return this.selected.length>=10}get _isSearching(){return this._search.trim().length>0}_toggle(e){let t=this.selected.includes(e);if(!t&&this._atLimit)return;let n=t?this.selected.filter(t=>t!==e):[...this.selected,e];this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:C.LABELS,values:n,operator:T.IS},bubbles:!0,composed:!0}))}_remove(e){let t=this.selected.filter(t=>t!==e);this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:C.LABELS,values:t,operator:T.IS},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:C.LABELS,values:[],operator:T.IS},bubbles:!0,composed:!0}))}_onSearchInput(e){this._search=e.target.value}_clearSearch(){this._search=``}_getLabelBySid(e){return this.labels.find(t=>t.sid===e)}_renderLabelItem(e){let t=this.selected.includes(e.sid),n=!t&&this._atLimit;return a`
      <div
        class="label-item ${n?`disabled`:``}"
        title=${n?this.t(`labelsLimitTitle`,`You can select up to 10 labels`,{count:10}):s}
        @click=${()=>!n&&this._toggle(e.sid)}
      >
        <sfx-checkbox ?checked=${t}></sfx-checkbox>
        <span class="label-icon" ${A({color:e.color||`#94a3b8`})}>
          <sfx-icon name="tag" .size=${16}></sfx-icon>
        </span>
        <span class="label-name">${e.name}</span>
        <span class="count">${e.assets_count??0}</span>
      </div>
    `}render(){let e=this._search.toLowerCase().trim(),t=this.labels.filter(t=>t.name.toLowerCase().includes(e));return a`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t(`searchLabelsPlaceholder`,`Search labels`)}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?a`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?a`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t(`selected`,`Selected`)}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t(`clearAll`,`Clear all`)}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>{let t=this._getLabelBySid(e);return t?a`
                      <div class="chip">
                        <span class="chip-icon" ${A({color:t.color||`#94a3b8`})}>
                          <sfx-icon name="tag" .size=${12}></sfx-icon>
                        </span>
                        <span class="chip-label">${t.name}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `:s})}
                </div>
              </div>
            `:s}

        <!-- Labels list -->
        <div class="filter-section">
          <div class="section-header">
            <span class="section-label">${this.t(`allLabels`,`All labels`)}</span>
            <button
              class="clear-btn"
              ?disabled=${this.selected.length===0}
              @click=${this._clearAll}
            >
              ${this.t(`clearAll`,`Clear all`)}
            </button>
          </div>
          <div class="options-list">
            ${t.length===0?a`<div class="no-results">${this.t(`noLabelsFound`,`No labels found`)}</div>`:t.map(e=>this._renderLabelItem(e))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit?a`
              <div class="info-alert">
                <sfx-icon name="info" .size=${14}></sfx-icon>
                <span
                  >${this.t(`labelsLimitAlert`,`You can select up to 10 labels.`,{count:10})}</span
                >
              </div>
            `:s}
      </div>
    `}};l([i({type:Array})],Ji.prototype,`labels`,void 0),l([i({type:Array})],Ji.prototype,`selected`,void 0),l([i({attribute:!1})],Ji.prototype,`t`,void 0),l([u(`.search-input`)],Ji.prototype,`_searchInput`,void 0),l([c()],Ji.prototype,`_search`,void 0),Ji=l([j(`ap-filter-labels`)],Ji);var Yi=3,Xi=/^#[0-9A-Fa-f]{6}$/;function Zi(e){let t=e.trim().split(/\s+/);return t.length<1||!Xi.test(t[0])?null:{hex:t[0],tolerance:t[1]||`1`,coverage:t[3]||`20`}}var Qi=class extends e{constructor(...e){super(...e),this.values=[],this.t=(e,t)=>typeof t==`string`?t:e,this._colors=[],this._advanced=!1,this._showPalette=!1,this._initialized=!1}static{this.styles=[M,Gi,r`
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
    `]}get _hasSelection(){return this._colors.length>0}get _selectedHexes(){return new Set(this._colors.map(e=>e.hex))}willUpdate(e){if(e.has(`values`)){let e=[];for(let t of this.values){let n=Zi(t);n&&e.push(n)}(!this._initialized||this.values.length===0&&this._colors.length>0)&&(this._colors=e,e.length>0&&(this._advanced=e.some(e=>e.tolerance!==`1`||e.coverage!==`20`)),this._initialized=!0)}}_selectColor(e){if(!Xi.test(e))return;let t=this._colors.findIndex(t=>t.hex.toLowerCase()===e.toLowerCase());if(t>=0){this._removeColor(t);return}this._colors.length>=Yi||(this._colors=[...this._colors,{hex:e,tolerance:`1`,coverage:`20`}],this._showPalette=!1,this._dispatchChange())}_removeColor(e){this._colors=this._colors.filter((t,n)=>n!==e),this._dispatchChange()}_clearAll(){this._colors=[],this._showPalette=!1,this._dispatchChange()}_toggleAdvanced(){this._advanced=!this._advanced,this._colors.length>0&&this._dispatchChange()}_handleHexInput(e,t){let n=t.target.value.trim();if(n.startsWith(`#`)||(n=`#`+n),!Xi.test(n)||this._colors.some((t,r)=>r!==e&&t.hex.toLowerCase()===n.toLowerCase()))return;let r=[...this._colors];r[e]={...r[e],hex:n},this._colors=r,this._dispatchChange()}_handleToleranceChange(e,t){let n=[...this._colors];n[e]={...n[e],tolerance:t.detail.value},this._colors=n,this._dispatchChange()}_handleCoverageInput(e,t){let n=t.target.value,r=parseInt(n,10);if(!isNaN(r)&&r>=1&&r<=100){let t=[...this._colors];t[e]={...t[e],coverage:String(r)},this._colors=t,this._dispatchChange()}}_showAddPalette(){this._showPalette=!0}_dispatchChange(){if(this._colors.length===0){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:`color`,values:``,operator:`:`},bubbles:!0,composed:!0}));return}let e=this._colors.map(e=>{let t=this._advanced?e.tolerance:`1`,n=this._advanced?e.coverage:`20`;return`${e.hex} ${t} ${t} ${n}`});this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:`color`,values:e,operator:`:`},bubbles:!0,composed:!0}))}_renderPalette(){let e=this._selectedHexes,t=this._colors.length>=Yi;return a`
      <div class="palette">
        ${pr.map(n=>{let r=e.has(n),i=t&&!r;return a`
            <button
              class="swatch ${r?`selected`:``} ${i?`disabled`:``}"
              ${A({background:n,...n===`#ffffff`?{border:`1px solid #e4e4e7`}:{}})}
              @click=${()=>!i&&this._selectColor(n)}
              title=${n}
              ?disabled=${i}
            ></button>
          `})}
      </div>
    `}_renderColorEntry(e,t){return this._advanced?a`
      <div class="color-row advanced">
        <div class="adv-field">
          <span class="adv-field-label">${this.t(`colorLabel`,`Color`)}</span>
          <div class="color-row">
            <div class="color-swatch-small" ${A({background:e.hex})}></div>
            <input
              class="color-hex-input"
              type="text"
              .value=${e.hex}
              maxlength="7"
              @change=${e=>this._handleHexInput(t,e)}
            />
          </div>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t(`difference`,`Difference`)}</span>
          <sfx-dropdown
            .value=${e.tolerance}
            .options=${mr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
            @sfx-change=${e=>this._handleToleranceChange(t,e)}
          ></sfx-dropdown>
        </div>
        <div class="adv-field">
          <span class="adv-field-label">${this.t(`coverage`,`Coverage`)}</span>
          <div class="coverage-wrap">
            <span class="coverage-unit">%</span>
            <input
              type="number"
              class="coverage-input"
              min="1"
              max="100"
              .value=${e.coverage}
              @change=${e=>this._handleCoverageInput(t,e)}
            />
          </div>
        </div>
        <button
          class="remove-btn"
          title=${this.t(`removeColor`,`Remove color`)}
          @click=${()=>this._removeColor(t)}
        >
          <sfx-icon name="close" .size=${14}></sfx-icon>
        </button>
      </div>
    `:a`
        <div class="color-row">
          <div class="color-swatch-small" ${A({background:e.hex})}></div>
          <input
            class="color-hex-input"
            type="text"
            .value=${e.hex}
            maxlength="7"
            @change=${e=>this._handleHexInput(t,e)}
          />
          <button
            class="remove-btn"
            title=${this.t(`removeColor`,`Remove color`)}
            @click=${()=>this._removeColor(t)}
          >
            <sfx-icon name="close" .size=${14}></sfx-icon>
          </button>
        </div>
      `}render(){let e=this._colors.length===0||this._showPalette,t=this._colors.length<Yi&&!this._showPalette;return a`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <span class="section-label">${this.t(`colorLabel`,`Color`)}</span>

        <div class="advanced-row">
          <label class="advanced-toggle" @click=${this._toggleAdvanced}>
            <span class="toggle-track ${this._advanced?`on`:``}">
              <span class="toggle-thumb"></span>
            </span>
            ${this.t(`advanced`,`Advanced`)}
          </label>
        </div>

        <div class="filter-section">${e?this._renderPalette():s}</div>

        ${this._colors.length>0?a`
              <div class="filter-section">
                <div class="selected-colors">
                  ${this._colors.map((e,t)=>this._renderColorEntry(e,t))}
                </div>
              </div>
            `:s}
        ${t?a`
              <div class="filter-section">
                <button class="add-color-btn" @click=${this._showAddPalette}>
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
                  ${this.t(`addColor`,`Add color`)}
                </button>
              </div>
            `:s}

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t(`requiresImageProcessing`,`Requires image processing to be enabled.`)}</span
          >
        </div>
      </div>
    `}};l([i({type:Array})],Qi.prototype,`values`,void 0),l([i({attribute:!1})],Qi.prototype,`t`,void 0),l([c()],Qi.prototype,`_colors`,void 0),l([c()],Qi.prototype,`_advanced`,void 0),l([c()],Qi.prototype,`_showPalette`,void 0),l([c()],Qi.prototype,`_initialized`,void 0),Qi=l([j(`ap-filter-color`)],Qi);var $i={KB:1/1e3,MB:1,GB:1e3},ea=[{value:`MB`,label:`MB`},{value:`GB`,label:`GB`}],ta=class extends e{constructor(...e){super(...e),this.min=0,this.max=0,this.t=(e,t)=>typeof t==`string`?t:e,this._minVal=``,this._maxVal=``,this._unit=`MB`,this._initialized=!1}static{this.styles=[Gi,r`
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
    `]}willUpdate(e){!this._initialized&&(e.has(`min`)||e.has(`max`))&&(this._initialized=!0,this.min>0&&(this._minVal=String(this.min)),this.max>0&&(this._maxVal=String(this.max)))}get _hasFilter(){return this._minVal!==``||this._maxVal!==``}_clearAll(){this._minVal=``,this._maxVal=``,this._emitChange()}_setUnit(e){this._unit=e.detail.value,this._emitChange()}_emitChange(){let e=$i[this._unit],t=this._minVal===``?null:parseFloat((parseFloat(this._minVal)*e).toFixed(2)).toString(),n=this._maxVal===``?null:parseFloat((parseFloat(this._maxVal)*e).toFixed(2)).toString(),r;if(t!==null&&n!==null)r=`${t}..${n}`;else if(t!==null)r=`${t}..`;else if(n!==null)r=`..${n}`;else{this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:C.SIZE,values:[],operator:T.RANGE},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:C.SIZE,values:[r],operator:T.RANGE},bubbles:!0,composed:!0}))}_onMinInput(e){this._minVal=e.target.value,this._emitChange()}_onMaxInput(e){this._maxVal=e.target.value,this._emitChange()}render(){return a`
      <div class="filter-content">
        <span class="section-label">${this.t(`sizeLabel`,`Size`)}</span>
        <button class="clear-btn" ?disabled=${!this._hasFilter} @click=${this._clearAll}>
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="size-grid">
          <div>
            <span class="input-label">${this.t(`sizeFrom`,`From`)}</span>
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
            <span class="input-label">${this.t(`sizeTo`,`To`)}</span>
            <input
              class="filter-input"
              type="number"
              placeholder=${this.t(`any`,`Any`)}
              min="0"
              step="0.1"
              .value=${this._maxVal}
              @change=${this._onMaxInput}
            />
          </div>
          <div>
            <span class="input-label">${this.t(`sizeUnit`,`Unit`)}</span>
            <sfx-dropdown
              .options=${ea}
              .value=${this._unit}
              @sfx-change=${this._setUnit}
            ></sfx-dropdown>
          </div>
        </div>
      </div>
    `}};l([i({type:Number})],ta.prototype,`min`,void 0),l([i({type:Number})],ta.prototype,`max`,void 0),l([i({attribute:!1})],ta.prototype,`t`,void 0),l([c()],ta.prototype,`_minVal`,void 0),l([c()],ta.prototype,`_maxVal`,void 0),l([c()],ta.prototype,`_unit`,void 0),l([c()],ta.prototype,`_initialized`,void 0),ta=l([j(`ap-filter-size`)],ta);var na={portrait:n`
  <svg width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66666 1.9987C2.29847 1.9987 1.99999 2.29717 1.99999 2.66536L1.99999 13.332C1.99999 13.7002 2.29847 13.9987 2.66666 13.9987L9.33332 13.9987C9.70151 13.9987 9.99999 13.7002 9.99999 13.332L9.99999 2.66536C9.99999 2.29717 9.70151 1.9987 9.33332 1.9987L2.66666 1.9987ZM9.33332 0.665364C10.4379 0.665364 11.3333 1.56079 11.3333 2.66536L11.3333 13.332C11.3333 14.4366 10.4379 15.332 9.33332 15.332L2.66666 15.332C1.56209 15.332 0.666656 14.4366 0.666656 13.332L0.666656 2.66536C0.666656 1.56079 1.56209 0.665364 2.66666 0.665364L9.33332 0.665364Z" fill="#9747FF"/>
    <path d="M5.33332 4.65885C5.33332 4.29066 5.6318 3.99219 5.99999 3.99219C6.36818 3.99219 6.66666 4.29066 6.66666 4.65885L6.66666 4.66536C6.66666 5.03355 6.36818 5.33203 5.99999 5.33203C5.6318 5.33203 5.33332 5.03355 5.33332 4.66536L5.33332 4.65885Z" fill="#9747FF"/>
    <path d="M5.33332 11.3255C5.33332 10.9573 5.6318 10.6589 5.99999 10.6589C6.36818 10.6589 6.66666 10.9573 6.66666 11.3255L6.66666 11.332C6.66666 11.7002 6.36818 11.9987 5.99999 11.9987C5.6318 11.9987 5.33332 11.7002 5.33332 11.332L5.33332 11.3255Z" fill="#9747FF"/>
  </svg>
`,landscape:n`
  <svg width="20" height="20" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.66797C14 2.29978 13.7015 2.0013 13.3333 2.0013H2.66666C2.29847 2.0013 1.99999 2.29978 1.99999 2.66797V9.33463C1.99999 9.70282 2.29847 10.0013 2.66666 10.0013H13.3333C13.7015 10.0013 14 9.70282 14 9.33463V2.66797ZM15.3333 9.33463C15.3333 10.4392 14.4379 11.3346 13.3333 11.3346H2.66666C1.56209 11.3346 0.666656 10.4392 0.666656 9.33463V2.66797C0.666656 1.5634 1.56209 0.667969 2.66666 0.667969H13.3333C14.4379 0.667969 15.3333 1.5634 15.3333 2.66797V9.33463Z" fill="#65A30D"/>
    <path d="M11.3398 5.33464C11.708 5.33464 12.0065 5.63311 12.0065 6.0013C12.0065 6.36949 11.708 6.66797 11.3398 6.66797H11.3333C10.9651 6.66797 10.6667 6.36949 10.6667 6.0013C10.6667 5.63311 10.9651 5.33464 11.3333 5.33464H11.3398Z" fill="#65A30D"/>
    <path d="M4.67317 5.33464C5.04136 5.33464 5.33983 5.63311 5.33983 6.0013C5.33983 6.36949 5.04136 6.66797 4.67317 6.66797H4.66666C4.29847 6.66797 3.99999 6.36949 3.99999 6.0013C3.99999 5.63311 4.29847 5.33464 4.66666 5.33464H4.67317Z" fill="#65A30D"/>
  </svg>
`,square:n`
  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3333 2.33203C12.3333 1.96384 12.0349 1.66536 11.6667 1.66536H2.33334C1.96515 1.66536 1.66668 1.96384 1.66668 2.33203V11.6654C1.66668 12.0336 1.96515 12.332 2.33334 12.332H11.6667C12.0349 12.332 12.3333 12.0336 12.3333 11.6654V2.33203ZM13.6667 11.6654C13.6667 12.7699 12.7712 13.6654 11.6667 13.6654H2.33334C1.22877 13.6654 0.333344 12.7699 0.333344 11.6654V2.33203C0.333344 1.22746 1.22877 0.332031 2.33334 0.332031H11.6667C12.7712 0.332031 13.6667 1.22746 13.6667 2.33203V11.6654Z" fill="#6366F1"/>
    <path d="M9.67319 3.66536C10.0414 3.66536 10.3399 3.96384 10.3399 4.33203C10.3399 4.70022 10.0414 4.9987 9.67319 4.9987H9.66668C9.29849 4.9987 9.00001 4.70022 9.00001 4.33203C9.00001 3.96384 9.29849 3.66536 9.66668 3.66536H9.67319Z" fill="#6366F1"/>
    <path d="M4.33985 3.66536C4.70804 3.66536 5.00652 3.96384 5.00652 4.33203C5.00652 4.70022 4.70804 4.9987 4.33985 4.9987H4.33334C3.96515 4.9987 3.66668 4.70022 3.66668 4.33203C3.66668 3.96384 3.96515 3.66536 4.33334 3.66536H4.33985Z" fill="#6366F1"/>
    <path d="M4.33985 8.9987C4.70804 8.9987 5.00652 9.29718 5.00652 9.66537C5.00652 10.0336 4.70804 10.332 4.33985 10.332H4.33334C3.96515 10.332 3.66668 10.0336 3.66668 9.66537C3.66668 9.29718 3.96515 8.9987 4.33334 8.9987H4.33985Z" fill="#6366F1"/>
    <path d="M9.67319 8.9987C10.0414 8.9987 10.3399 9.29718 10.3399 9.66537C10.3399 10.0336 10.0414 10.332 9.67319 10.332H9.66668C9.29849 10.332 9.00001 10.0336 9.00001 9.66537C9.00001 9.29718 9.29849 8.9987 9.66668 8.9987H9.67319Z" fill="#6366F1"/>
  </svg>
`,panorama:n`
  <svg width="20" height="20" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.33203C14 1.96384 13.7015 1.66536 13.3333 1.66536H2.66666C2.29847 1.66536 1.99999 1.96384 1.99999 2.33203V5.66536C1.99999 6.03355 2.29847 6.33203 2.66666 6.33203H13.3333C13.7015 6.33203 14 6.03355 14 5.66536V2.33203ZM15.3333 5.66536C15.3333 6.76993 14.4379 7.66536 13.3333 7.66536H2.66666C1.56209 7.66536 0.666656 6.76993 0.666656 5.66536V2.33203C0.666656 1.22746 1.56209 0.332031 2.66666 0.332031H13.3333C14.4379 0.332031 15.3333 1.22746 15.3333 2.33203V5.66536Z" fill="#4BA3AD"/>
    <path d="M11.3398 3.33203C11.708 3.33203 12.0065 3.63051 12.0065 3.9987C12.0065 4.36689 11.708 4.66536 11.3398 4.66536H11.3333C10.9651 4.66536 10.6667 4.36689 10.6667 3.9987C10.6667 3.63051 10.9651 3.33203 11.3333 3.33203H11.3398Z" fill="#4BA3AD"/>
    <path d="M4.67317 3.33203C5.04136 3.33203 5.33983 3.63051 5.33983 3.9987C5.33983 4.36689 5.04136 4.66536 4.67317 4.66536H4.66666C4.29847 4.66536 3.99999 4.36689 3.99999 3.9987C3.99999 3.63051 4.29847 3.33203 4.66666 3.33203H4.67317Z" fill="#4BA3AD"/>
  </svg>
`},ra=class extends e{constructor(...e){super(...e),this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this.t=(e,t)=>typeof t==`string`?t:e}static{this.styles=[Gi,r`
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
    `]}get _hasSelection(){return this.selectedResolution.length>0||this.selectedOrientation.length>0||this.selectedFaces.length>0}_toggle(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}_toggleResolution(e){this.selectedResolution=this._toggle(this.selectedResolution,e),this._dispatchChange()}_toggleOrientation(e){this.selectedOrientation=this._toggle(this.selectedOrientation,e),this._dispatchChange()}_toggleFaces(e){this.selectedFaces=this._toggle(this.selectedFaces,e),this._dispatchChange()}_clearAll(){this.selectedResolution=[],this.selectedOrientation=[],this.selectedFaces=[],this._dispatchChange()}_dispatchChange(){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:`image`,values:{resolution:this.selectedResolution,orientation:this.selectedOrientation,faces:this.selectedFaces}},bubbles:!0,composed:!0}))}render(){return a`
      <div class="filter-content">
        <button class="clear-btn" ?disabled=${!this._hasSelection} @click=${this._clearAll}>
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t(`imageResolution`,`Resolution`)}</span>
          <div class="options-horizontal">
            ${or.map(e=>a`
                <sfx-checkbox
                  ?checked=${this.selectedResolution.includes(e.value)}
                  @sfx-toggle=${()=>{this._toggleResolution(e.value)}}
                  >${this.t(e.labelKey,e.label)}</sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t(`imageOrientation`,`Orientation`)}</span>
          <div class="options-vertical">
            ${sr.map(e=>a`
                <sfx-checkbox
                  ?checked=${this.selectedOrientation.includes(e.value)}
                  @sfx-toggle=${()=>{this._toggleOrientation(e.value)}}
                  ><span class="orientation-label"
                    >${na[e.value]}${this.t(e.labelKey,e.label)}</span
                  ></sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t(`imageFaces`,`Faces`)}</span>
          <div class="options-horizontal">
            ${cr.map(e=>a`
                <sfx-checkbox
                  ?checked=${this.selectedFaces.includes(e.value)}
                  @sfx-toggle=${()=>{this._toggleFaces(e.value)}}
                  >${e.labelKey?this.t(e.labelKey,e.label):e.label}</sfx-checkbox
                >
              `)}
          </div>
        </div>

        <div class="info-alert">
          <sfx-icon name="info" .size=${14}></sfx-icon>
          <span
            >${this.t(`imageProcessingNotice`,`Some images might not have been processed, so they won't be displayed.`)}</span
          >
        </div>
      </div>
    `}};l([i({type:Array})],ra.prototype,`selectedResolution`,void 0),l([i({type:Array})],ra.prototype,`selectedOrientation`,void 0),l([i({type:Array})],ra.prototype,`selectedFaces`,void 0),l([i({attribute:!1})],ra.prototype,`t`,void 0),ra=l([j(`ap-filter-image`)],ra);var ia=`/meta/ultratags`,aa=`regvar:api`,oa=50;async function sa(e,{meta:t,q:n,limit:r=oa}){let i=n?.trim();return(await e.get(ia,{meta:t,q:i?i.toLowerCase():void 0,sort:i?void 0:`slug`,limit:r,format:aa})).items??[]}function ca(e,t,n=`en`){let{i18n:r}=e;if(r){for(let e of pa(t,n)){let t=r[e]??r[`~${e.toUpperCase()}`];if(t)return t}let e=Object.values(r).find(Boolean);if(e)return e}return e.slug}var la=new Map,ua=(e,t)=>`${e}::${t}`;function da(e,t){for(let n of e){let e=n.sid||n.slug;e&&la.set(ua(t,e),ca(n,t))}}function fa(e,t){return la.get(ua(t,e))}function pa(e,t){let n=[];for(let r of[e,t]){if(!r)continue;n.push(r);let e=r.split(`-`)[0];e&&e!==r&&n.push(e)}return n}function P(e){return`${Ln[e.type]||``}${e.key}`}var F=class extends e{constructor(...e){super(...e),this.fields=[],this.appliedFilters={},this.visibleFields=[],this.mode=`full`,this.activeFieldKey=``,this.pinnedFields=[],this.appliedMetadata={},this.t=(e,t)=>typeof t==`string`?t:e,this.locale=`en`,this._showFieldSelection=!1,this._fieldSearch=``,this._collapsedFields=new Set,this._tagInputs={},this._tagSuggestions={},this._tagLoading={},this._datePresets={},this._dateFroms={},this._dateTos={},this._specificModeFields=new Set,this._selectSearches={},this._pendingOperators={},this._utagQueries={},this._utagEntries={},this._utagLoading={},this._utagLabels={},this._utagLoaded=new Set,this._utagRequestSeq={},this._tagDebounceTimers={},this._fieldsByPrefixedKeyCache=null}static{this.styles=[M,Gi,r`
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
    `]}get _tTextOperatorOptions(){return hr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _tNumberOperatorOptions(){return yr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _tSingleSelectOperatorOptions(){return gr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _tUltratagsOperatorOptions(){return _r.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _tMultiSelectOperatorOptions(){return vr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _tBooleanOptions(){return Tr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _tEmptyOptions(){return Cr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}get _tEmptyAndSpecificOptions(){return wr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._focusSearch())}disconnectedCallback(){super.disconnectedCallback();for(let e of Object.values(this._tagDebounceTimers))clearTimeout(e)}updated(){for(let e of this._visibleUltratagsFields())this._ensureUltratagsLoaded(e)}_focusSearch(){this.renderRoot.querySelector(`.field-search, .search-input`)?.focus()}_getField(e){return this._fieldsByPrefixedKeyCache?.fields!==this.fields&&(this._fieldsByPrefixedKeyCache={fields:this.fields,map:new Map(this.fields.map(e=>[P(e),e]))}),this._fieldsByPrefixedKeyCache.map.get(e)}get _atFieldLimit(){return this.visibleFields.filter(e=>{let t=this._getField(e);return t&&Or(t.type)}).length>=10}get _selectableFields(){return this.fields.filter(e=>Or(e.type))}_getUIType(e){return Dr[e.type]}_getApplied(e){return this.appliedMetadata[e]||this.appliedFilters[e]||{}}_getOperator(e,t){return this._getApplied(e).operator||this._pendingOperators[e]||t}_hasOperator(e){return!!(this._getApplied(e).operator||this._pendingOperators[e])}_clearPendingOperator(e){if(!(e in this._pendingOperators))return;let{[e]:t,...n}=this._pendingOperators;this._pendingOperators=n}_isSpecialValue(e){return!e||e.length!==1?!1:e[0]===`empty`||e[0]===`non-empty`}_getContentMode(e){let t=this._getApplied(e);return t.values?.[0]===`empty`?Vn:t.values?.[0]===`non-empty`?Hn:this._specificModeFields.has(e)||t.values&&t.values.length>0?Un:``}_emitFilterChange(e,t,n){let r=P(e);this.dispatchEvent(new CustomEvent(`metadata-filter-change`,{detail:{fieldKey:r,operator:t,values:n,metadataType:e.type},bubbles:!0,composed:!0}))}_emitFieldToggle(e,t){let n=P(e);this.dispatchEvent(new CustomEvent(`metadata-field-toggle`,{detail:{fieldKey:n,visible:t},bubbles:!0,composed:!0}))}_emitFieldSelect(e){let t=P(e);!this.visibleFields.includes(t)&&this._atFieldLimit||(this.visibleFields.includes(t)||this._emitFieldToggle(e,!0),this.dispatchEvent(new CustomEvent(`metadata-field-select`,{detail:{fieldKey:t},bubbles:!0,composed:!0})))}_emitPin(e,t){this.dispatchEvent(new CustomEvent(`metadata-pin`,{detail:{fieldKey:e,pinned:t},bubbles:!0,composed:!0}))}_openFieldSelection(){this._showFieldSelection=!0,this._fieldSearch=``}_closeFieldSelection(){this._showFieldSelection=!1,this._fieldSearch=``}_addField(e){if(this._atFieldLimit)return;let t=P(e);this.visibleFields.includes(t)||this._emitFieldToggle(e,!0)}_removeField(e){this._emitFieldToggle(e,!1),this._clearPendingOperator(P(e)),this._emitFilterChange(e,void 0,[])}_toggleCollapse(e){let t=new Set(this._collapsedFields);t.has(e)?t.delete(e):t.add(e),this._collapsedFields=t}_onOperatorChange(e,t){let n=P(e),r=this._getApplied(n).values||[];this._pendingOperators={...this._pendingOperators,[n]:t},this._emitFilterChange(e,t,r)}_onContentModeChange(e,t){let n=P(e);if(t===`specific`){let t=new Set(this._specificModeFields);t.add(n),this._specificModeFields=t;let r=this._getApplied(n);this._isSpecialValue(r.values)&&this._emitFilterChange(e,r.operator||this._pendingOperators[n],[])}else{if(this._specificModeFields.has(n)){let e=new Set(this._specificModeFields);e.delete(n),this._specificModeFields=e}if(t)this._onEmptyOption(e,t);else{let t=this._getApplied(n);this._emitFilterChange(e,t.operator||this._pendingOperators[n],[])}}}_clearFieldFilter(e){let t=P(e);if(this._specificModeFields.has(t)){let e=new Set(this._specificModeFields);e.delete(t),this._specificModeFields=e}let{[t]:n,...r}=this._datePresets;this._datePresets=r;let{[t]:i,...a}=this._dateFroms;this._dateFroms=a;let{[t]:o,...s}=this._dateTos;this._dateTos=s;let{[t]:c,...l}=this._selectSearches;this._selectSearches=l;let{[t]:u,...d}=this._tagInputs;this._tagInputs=d,e.type===E.ULTRATAGS&&this._utagQueries[t]&&this._onUltratagSearch(e,t,``),this._clearPendingOperator(t),this._emitFilterChange(e,void 0,[])}_onTextInput(e,t){let n=t.target.value,r=this._getOperator(P(e),hr[0].value);this._emitFilterChange(e,r,n?[n]:[])}_onNumberInput(e,t,n){let r=t.target.value,i=P(e),a=this._getApplied(i),o=this._getOperator(i,yr[0].value),s=[...a.values||[]];n===0?s[0]=r:(s[1]=r,s[0]??=``);let c=s.filter(e=>e!==``&&e!==void 0);if(c.length>0){let t=e.type===E.DECIMAL2;if(!c.every(e=>t?!isNaN(parseFloat(e)):/^-?\d+$/.test(e)))return}this._emitFilterChange(e,o,s)}_onBooleanSelect(e,t){let n=this._getApplied(P(e)),r=n.values?.[0];!t||r===t?this._emitFilterChange(e,void 0,[]):this._emitFilterChange(e,n.operator,[t])}_onSelectOneToggle(e,t){let n=P(e),r=this._getApplied(n),i=this._getOperator(n,gr[0].value),a=r.values||[];a.length===1&&a[0]===t?this._emitFilterChange(e,i,[]):this._emitFilterChange(e,i,[t])}_onMultiSelectToggle(e,t){let n=P(e),r=this._getApplied(n),i=this._getOperator(n,vr[0].value),a=r.values||[],o=a.includes(t)?a.filter(e=>e!==t):[...a,t];this._emitFilterChange(e,i,o)}_onTagKeydown(e,t){let n=P(e);(t.key===`Enter`||t.key===`,`)&&(t.preventDefault(),this._commitTagInput(e,n))}_onTagInput(e,t,n){let r=n.target.value;if(r.includes(`,`)){let n=r.replace(/,/g,``).trim();n&&(this._tagInputs={...this._tagInputs,[t]:n},this._commitTagInput(e,t));return}this._tagInputs={...this._tagInputs,[t]:r},this._fetchTagSuggestions(e,t,r.trim())}_selectTagSuggestion(e,t){let n=P(e),r=this._getApplied(n),i=this._getOperator(n,gr[0].value),a=r.values||[];a.includes(t)||this._emitFilterChange(e,i,[...a,t]),this._tagInputs={...this._tagInputs,[n]:``},this._tagSuggestions={...this._tagSuggestions,[n]:[]}}_fetchTagSuggestions(e,t,n){if(this._tagDebounceTimers[t]&&clearTimeout(this._tagDebounceTimers[t]),!n||!this.apiClient){this._tagSuggestions={...this._tagSuggestions,[t]:[]},this._tagLoading={...this._tagLoading,[t]:!1};return}this._tagDebounceTimers[t]=setTimeout(async()=>{this._tagLoading={...this._tagLoading,[t]:!0};try{let r=`_${e.ckey||e.key}`,i=await this.apiClient.get(`/metadata/autocomplete`,{q:n,meta_key:r});(this._tagInputs[t]||``).trim()===n&&(this._tagSuggestions={...this._tagSuggestions,[t]:(i.tags||[]).map(e=>e.tag)})}catch{this._tagSuggestions={...this._tagSuggestions,[t]:[]}}finally{this._tagLoading={...this._tagLoading,[t]:!1}}},300)}_commitTagInput(e,t){let n=(this._tagInputs[t]||``).trim();if(!n)return;let r=this._getApplied(t),i=this._getOperator(t,gr[0].value),a=r.values||[];a.includes(n)||this._emitFilterChange(e,i,[...a,n]),this._tagInputs={...this._tagInputs,[t]:``},this._tagSuggestions={...this._tagSuggestions,[t]:[]}}_removeTag(e,t){let n=P(e),r=this._getApplied(n),i=this._getOperator(n,gr[0].value),a=r.values||[];this._emitFilterChange(e,i,a.filter(e=>e!==t))}_visibleUltratagsFields(){return this._showFieldSelection||this.mode===`selector`?[]:(this.mode===`field`?[this.activeFieldKey]:this.visibleFields).map(e=>this._getField(e)).filter(e=>!!e&&e.type===E.ULTRATAGS)}_cacheUltratagLabels(e){da(e,this.locale);let t={};for(let n of e){let e=n.sid||n.slug;e&&(t[e]=ca(n,this.locale))}Object.keys(t).length!==0&&(this._utagLabels={...this._utagLabels,...t})}_ultratagLabel(e){return this._utagLabels[e]||fa(e,this.locale)||e}async _loadUltratags(e,t,n){if(!this.apiClient)return;let r=(this._utagRequestSeq[t]??0)+1;this._utagRequestSeq[t]=r;let i=()=>this._utagRequestSeq[t]===r;this._utagLoading={...this._utagLoading,[t]:!0};try{let r=await sa(this.apiClient,{meta:e.key,q:n});if(!i())return;this._utagEntries={...this._utagEntries,[t]:r},this._cacheUltratagLabels(r)}catch{if(!i())return;this._utagEntries={...this._utagEntries,[t]:[]}}finally{i()&&(this._utagLoading={...this._utagLoading,[t]:!1})}}_ensureUltratagsLoaded(e){let t=P(e);this._utagLoaded.has(t)||!this.apiClient||(this._utagLoaded.add(t),this._loadUltratags(e,t,``))}_onUltratagSearch(e,t,n){this._utagQueries={...this._utagQueries,[t]:n},this._tagDebounceTimers[t]&&clearTimeout(this._tagDebounceTimers[t]),this._tagDebounceTimers[t]=setTimeout(()=>{this._loadUltratags(e,t,n.trim())},300)}_onUltratagToggle(e,t){let n=P(e),r=t.sid||t.slug;if(!r)return;let i=this._getApplied(n),a=this._getOperator(n,_r[0].value),o=this._isSpecialValue(i.values)?[]:i.values||[];this._cacheUltratagLabels([t]),this._emitFilterChange(e,a,o.includes(r)?o.filter(e=>e!==r):[...o,r])}_removeUltratag(e,t){let n=P(e),r=this._getApplied(n),i=this._getOperator(n,_r[0].value),a=r.values||[];this._emitFilterChange(e,i,a.filter(e=>e!==t))}_onDatePreset(e,t){let n=P(e);if(!t){this._clearFieldFilter(e);return}if(this._datePresets={...this._datePresets,[n]:t},[`before`,`after`,`between`].includes(t)){this._dateFroms={...this._dateFroms,[n]:``},this._dateTos={...this._dateTos,[n]:``};return}if(t===`empty`||t===`non-empty`){this._emitFilterChange(e,void 0,[t]);return}let r=new Date,i=``,a=``;switch(t){case`today`:{let e=new Date(r);e.setHours(0,0,0,0),i=e.toISOString(),a=r.toISOString();break}case`last_week`:{let e=new Date(r),t=e.getDay();e.setDate(e.getDate()-(t===0?6:t-1)),e.setHours(0,0,0,0);let n=new Date(e);n.setDate(n.getDate()-7),i=n.toISOString(),a=e.toISOString();break}case`last_month`:{let e=new Date(r.getFullYear(),r.getMonth(),1),t=new Date(e);t.setMonth(t.getMonth()-1),i=t.toISOString(),a=e.toISOString();break}case`last_year`:{let e=new Date(r.getFullYear(),0,1),t=new Date(e);t.setFullYear(t.getFullYear()-1),i=t.toISOString(),a=e.toISOString();break}}i&&a&&(this._dateFroms={...this._dateFroms,[n]:i},this._dateTos={...this._dateTos,[n]:a},this._emitFilterChange(e,`..`,[i,a]))}_onDateInput(e,t,n){let r=n.target.value,i=P(e),a=this._datePresets[i]||``,o=r?new Date(r+`T00:00:00`).toISOString():``;t===`from`?this._dateFroms={...this._dateFroms,[i]:o}:this._dateTos={...this._dateTos,[i]:o};let s=this._dateFroms[i]||``,c=this._dateTos[i]||``;a===`after`&&s&&(c=new Date().toISOString(),this._dateTos={...this._dateTos,[i]:c}),a===`before`&&c&&(s=new Date(0).toISOString(),this._dateFroms={...this._dateFroms,[i]:s}),s&&c&&this._emitFilterChange(e,`..`,[s,c])}_onGeoLocationInput(e,t){let n=t.target.value.trim(),r=P(e),i=this.shadowRoot?.querySelector(`[data-geo-radius="${r}"]`)?.value||``;if(!n){this._emitFilterChange(e,void 0,[]);return}let a=n.split(`,`).map(e=>e.trim());if(a.length!==2||a.some(e=>isNaN(Number(e))||e===``))return;let[o,s]=a,c=`${o},${s}..${i||`0`}`;this._emitFilterChange(e,T.IS,[c])}_onGeoRadiusInput(e,t){let n=t.target.value,r=P(e),i=this._getApplied(r);if(!i.values?.[0])return;let[a]=i.values[0].split(`..`),o=a;n&&(o+=`..${n}`),this._emitFilterChange(e,T.IS,[o])}_onEmptyOption(e,t){let n=P(e),r=this._getApplied(n),i=r.operator||this._pendingOperators[n],a=r.values?.[0];!t||a===t?this._emitFilterChange(e,i,[]):(this._clearPendingOperator(n),this._emitFilterChange(e,r.operator,[t]))}_getGroupedFields(e){let t=new Map;for(let n of e){let e=n.group||this.t(`rootFields`,`Root fields`);t.has(e)||t.set(e,[]),t.get(e).push(n)}return t}_renderFieldSelection(){let e=this._fieldSearch.toLowerCase(),t=this._selectableFields.filter(t=>t.label.toLowerCase().includes(e)),n=this._getGroupedFields(t),r=(e,t)=>t.length===0?s:a`
        <div class="field-group-label">${e}</div>
        ${t.map(e=>{let t=P(e),n=this.visibleFields.includes(t),r=!n&&this._atFieldLimit;return a`
            <div
              class="field-item ${n?`selected`:``} ${r?`disabled`:``}"
              @click=${()=>!r&&!n&&this._addField(e)}
            >
              ${n?a`<sfx-icon name="check" .size=${14}></sfx-icon>`:a`<sfx-icon
                    name=${Er[e.type]||`file-text`}
                    .size=${14}
                    ${A({color:`var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))`})}
                  ></sfx-icon>`}
              <span>${e.label}</span>
            </div>
          `})}
      `;return a`
      <div class="field-selection">
        <div class="field-selection-header">
          <span class="field-selection-title"
            >${this.t(`addMetadataField`,`Add metadata field`)}</span
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
            .placeholder=${this.t(`searchFieldsPlaceholder`,`Search fields`)}
            .value=${this._fieldSearch}
            @input=${e=>{this._fieldSearch=e.target.value}}
          />
        </div>
        <div class="field-list">
          ${t.length===0?a`<div class="empty-msg">${this.t(`noFieldsFound`,`No fields found`)}</div>`:a`${[...n.entries()].map(([e,t])=>r(e,t))}`}
        </div>
      </div>
    `}_renderTextFilter(e){let t=P(e),n=this._getApplied(t),r=this._isSpecialValue(n.values)?``:n.values?.[0]||``,i=this._getContentMode(t),o=i===`empty`||i===`non-empty`,c=this._getOperator(t,hr[0].value),l=e.type===E.TEXT_AREA;return a`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!n.values?.length&&!this._hasOperator(t)}
          @click=${()=>this._clearFieldFilter(e)}
        >
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t(`operator`,`Operator`)}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${this._tTextOperatorOptions}
            .value=${c}
            ?disabled=${o}
            @sfx-change=${t=>this._onOperatorChange(e,t.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t(`content`,`Content`)}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${i}
            @sfx-change=${t=>this._onContentModeChange(e,t.detail.value)}
          ></sfx-radio-group>
        </div>

        ${i===`specific`?a`
              <div class="filter-section">
                <span class="section-label">${this.t(`value`,`Value`)}</span>
                ${l?a`
                      <textarea
                        class="filter-input"
                        .placeholder=${this.t(`enterValue`,`Enter value`)}
                        .value=${r}
                        @change=${t=>this._onTextInput(e,t)}
                      ></textarea>
                    `:a`
                      <input
                        class="filter-input"
                        type="text"
                        .placeholder=${this.t(`enterValue`,`Enter value`)}
                        .value=${r}
                        @change=${t=>this._onTextInput(e,t)}
                        @keydown=${e=>{e.key===`Enter`&&e.preventDefault()}}
                      />
                    `}
              </div>
            `:s}
      </div>
    `}_renderNumberFilter(e){let t=P(e),n=this._getApplied(t),r=this._getOperator(t,yr[0].value),i=this._isSpecialValue(n.values),o=this._getContentMode(t),c=o===`empty`||o===`non-empty`,l=r===T.RANGE,u=r===T.GREATER_THAN_OR_EQUAL,d=r===T.LESS_THAN_OR_EQUAL,f=e.type===E.DECIMAL2,p=f?`0.01`:`1`,m=f?`0.00`:`0`,h=i?``:n.values?.[0]||``,g=i?``:n.values?.[1]||``,_=l||u||d,ee=l||u||d?this.t(`min`,`Min`):this.t(`value`,`Value`),v=this.t(`max`,`Max`);return a`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!n.values?.length&&!this._hasOperator(t)}
          @click=${()=>this._clearFieldFilter(e)}
        >
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t(`condition`,`Condition`)}</span>
          <sfx-radio-group
            columns="2"
            .options=${this._tNumberOperatorOptions}
            .value=${r}
            ?disabled=${c}
            @sfx-change=${t=>this._onOperatorChange(e,t.detail.value)}
          ></sfx-radio-group>
        </div>

        <div class="filter-section">
          <span class="section-label">${this.t(`content`,`Content`)}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${o}
            @sfx-change=${t=>this._onContentModeChange(e,t.detail.value)}
          ></sfx-radio-group>
        </div>

        ${o===`specific`?a`
              <div class="filter-section">
                <div class="grid-2">
                  <div>
                    <span class="input-label" aria-disabled=${d?`true`:s}
                      >${ee}</span
                    >
                    <input
                      class="filter-input"
                      type="number"
                      step=${p}
                      placeholder=${m}
                      .value=${h}
                      ?disabled=${d}
                      @change=${t=>this._onNumberInput(e,t,0)}
                    />
                  </div>
                  ${_?a`
                        <div>
                          <span
                            class="input-label"
                            aria-disabled=${u?`true`:s}
                            >${v}</span
                          >
                          <input
                            class="filter-input"
                            type="number"
                            step=${p}
                            placeholder=${m}
                            .value=${g}
                            ?disabled=${u}
                            @change=${t=>this._onNumberInput(e,t,1)}
                          />
                        </div>
                      `:s}
                </div>
              </div>
            `:s}
      </div>
    `}_renderBooleanFilter(e){let t=this._getApplied(P(e)),n=t.values?.[0]||``;return a`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!t.values?.length}
          @click=${()=>this._clearFieldFilter(e)}
        >
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t(`value`,`Value`)}</span>
          <sfx-radio-group
            clearable
            .options=${this._tBooleanOptions}
            .value=${n}
            @sfx-change=${t=>this._onBooleanSelect(e,t.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `}_renderSelectOneFilter(e){let t=P(e),n=this._getApplied(t),r=this._isSpecialValue(n.values),i=r?[]:n.values||[],o=e.possible_values||[],c=this._getOperator(t,gr[0].value),l=(this._selectSearches[t]||``).toLowerCase(),u=l.length>0,d=i.length>0||r,f=l?o.filter(e=>e.label.toLowerCase().includes(l)):o,p=i.length>=10;return a`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t(`searchOptionsPlaceholder`,`Search options`)}
            .value=${this._selectSearches[t]||``}
            @input=${e=>{this._selectSearches={...this._selectSearches,[t]:e.target.value}}}
          />
          ${u?a`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[t]:``}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        ${u?a`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!d&&!this._hasOperator(t)}
                  @click=${()=>this._clearFieldFilter(e)}
                >
                  ${this.t(`clearAll`,`Clear all`)}
                </button>
              </div>
            `:a`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t(`operator`,`Operator`)}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!d&&!this._hasOperator(t)}
                    @click=${()=>this._clearFieldFilter(e)}
                  >
                    ${this.t(`clearAll`,`Clear all`)}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${c}
                  @sfx-change=${t=>this._onOperatorChange(e,t.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${i.length>0?a`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t(`selected`,`Selected`)}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(e)}>
                          ${this.t(`clearAll`,`Clear all`)}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${i.map(t=>{let n=o.find(e=>e.api_value===t);return a`
                            <div class="chip">
                              <span class="chip-label">${n?.label||t}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onSelectOneToggle(e,t)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:s}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t(`allOptions`,`All options`)}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(t=>a`
                <div class="option-item" @click=${()=>this._onEmptyOption(e,t.value)}>
                  <sfx-checkbox ?checked=${n.values?.[0]===t.value}></sfx-checkbox>
                  <span>${t.label}</span>
                </div>
              `)}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${f.length===0?a`<div class="no-results">${this.t(`noOptionsFound`,`No options found`)}</div>`:f.map(t=>{let n=i.includes(t.api_value),r=!n&&p;return a`
                    <div
                      class="option-item ${r?`disabled`:``}"
                      @click=${()=>!r&&this._onSelectOneToggle(e,t.api_value)}
                    >
                      <sfx-checkbox ?checked=${n}></sfx-checkbox>
                      <span>${t.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderMultiSelectFilter(e){let t=P(e),n=this._getApplied(t),r=this._isSpecialValue(n.values),i=r?[]:n.values||[],o=e.possible_values||[],c=this._getOperator(t,vr[0].value),l=(this._selectSearches[t]||``).toLowerCase(),u=l.length>0,d=i.length>0||r,f=l?o.filter(e=>e.label.toLowerCase().includes(l)):o,p=i.length>=10;return a`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t(`searchOptionsPlaceholder`,`Search options`)}
            .value=${this._selectSearches[t]||``}
            @input=${e=>{this._selectSearches={...this._selectSearches,[t]:e.target.value}}}
          />
          ${u?a`
                <button
                  class="search-clear"
                  @click=${()=>{this._selectSearches={...this._selectSearches,[t]:``}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        ${u?a`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!d&&!this._hasOperator(t)}
                  @click=${()=>this._clearFieldFilter(e)}
                >
                  ${this.t(`clearAll`,`Clear all`)}
                </button>
              </div>
            `:a`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t(`operator`,`Operator`)}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!d&&!this._hasOperator(t)}
                    @click=${()=>this._clearFieldFilter(e)}
                  >
                    ${this.t(`clearAll`,`Clear all`)}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tMultiSelectOperatorOptions}
                  .value=${c}
                  @sfx-change=${t=>this._onOperatorChange(e,t.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${i.length>0?a`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t(`selected`,`Selected`)}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(e)}>
                          ${this.t(`clearAll`,`Clear all`)}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${i.map(t=>{let n=o.find(e=>e.api_value===t);return a`
                            <div class="chip">
                              <span class="chip-label">${n?.label||t}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._onMultiSelectToggle(e,t)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:s}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t(`allOptions`,`All options`)}</span>

          <!-- Empty/Not empty checkboxes -->
          <div class="options-list short">
            ${this._tEmptyOptions.map(t=>a`
                <div class="option-item" @click=${()=>this._onEmptyOption(e,t.value)}>
                  <sfx-checkbox ?checked=${n.values?.[0]===t.value}></sfx-checkbox>
                  <span>${t.label}</span>
                </div>
              `)}
          </div>

          <div class="separator"></div>

          <!-- Regular options -->
          <div class="options-list">
            ${f.length===0?a`<div class="no-results">${this.t(`noOptionsFound`,`No options found`)}</div>`:f.map(t=>{let n=i.includes(t.api_value),r=!n&&p;return a`
                    <div
                      class="option-item ${r?`disabled`:``}"
                      @click=${()=>!r&&this._onMultiSelectToggle(e,t.api_value)}
                    >
                      <sfx-checkbox ?checked=${n}></sfx-checkbox>
                      <span>${t.label}</span>
                    </div>
                  `})}
          </div>
        </div>
      </div>
    `}_renderTagsFilter(e){let t=P(e),n=this._getApplied(t),r=this._isSpecialValue(n.values),i=r?[]:n.values||[],o=this._tagInputs[t]||``,c=this._getOperator(t,gr[0].value),l=i.length>0||r,u=this._tagSuggestions[t]||[],d=this._tagLoading[t]||!1,f=o.trim().length>0,p=i.length>=10;return a`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t(`searchTagsPlaceholder`,`Search tags`)}
            .value=${o}
            @input=${n=>this._onTagInput(e,t,n)}
            @keydown=${t=>this._onTagKeydown(e,t)}
          />
          ${f?a`
                <button
                  class="search-clear"
                  @click=${()=>{this._tagInputs={...this._tagInputs,[t]:``},this._tagSuggestions={...this._tagSuggestions,[t]:[]}}}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        ${f?a`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!l&&!this._hasOperator(t)}
                  @click=${()=>this._clearFieldFilter(e)}
                >
                  ${this.t(`clearAll`,`Clear all`)}
                </button>
              </div>
            `:a`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t(`condition`,`Condition`)}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!l&&!this._hasOperator(t)}
                    @click=${()=>this._clearFieldFilter(e)}
                  >
                    ${this.t(`clearAll`,`Clear all`)}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tSingleSelectOperatorOptions}
                  .value=${c}
                  ?disabled=${r}
                  @sfx-change=${t=>this._onOperatorChange(e,t.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${i.length>0?a`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t(`selected`,`Selected`)}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(e)}>
                          ${this.t(`clearAll`,`Clear all`)}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${i.map(t=>a`
                            <div class="chip">
                              <span class="chip-label">${t}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._removeTag(e,t)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:s}

              <!-- Empty/Not empty -->
              <div class="filter-section">
                <span class="section-label">${this.t(`allOptions`,`All options`)}</span>
                <div class="options-list short">
                  ${this._tEmptyOptions.map(t=>a`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(e,t.value)}
                      >
                        <sfx-checkbox ?checked=${n.values?.[0]===t.value}></sfx-checkbox>
                        <span>${t.label}</span>
                      </div>
                    `)}
                </div>
              </div>
            `}

        <!-- Suggestions list -->
        ${f?a`
              <div class="filter-section">
                <div class="options-list">
                  ${d?a`<div class="option-item disabled">
                        <span>${this.t(`loading`,`Loading...`)}</span>
                      </div>`:u.length>0?u.map(t=>{let n=i.includes(t),r=!n&&p;return a`
                            <div
                              class="option-item ${r?`disabled`:``}"
                              @click=${()=>!r&&(n?this._removeTag(e,t):this._selectTagSuggestion(e,t))}
                            >
                              <sfx-checkbox ?checked=${n}></sfx-checkbox>
                              <span>${t}</span>
                            </div>
                          `}):a`<div class="option-item disabled">
                          <span>${this.t(`noResults`,`No results`)}</span>
                        </div>`}
                </div>
              </div>
            `:s}
      </div>
    `}_renderUltratagsFilter(e){let t=P(e),n=this._getApplied(t),r=this._isSpecialValue(n.values),i=r?[]:n.values||[],o=this._getOperator(t,_r[0].value),c=this._utagQueries[t]||``,l=c.trim().length>0,u=this._utagEntries[t]||[],d=this._utagLoading[t]||!1,f=i.length>0||r,p=i.length>=10;return a`
      <div class="filter-content">
        <!-- Search input -->
        <div class="search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${this.t(`searchTagsPlaceholder`,`Search tags`)}
            .value=${c}
            @input=${n=>this._onUltratagSearch(e,t,n.target.value)}
          />
          ${l?a`
                <button
                  class="search-clear"
                  @click=${()=>this._onUltratagSearch(e,t,``)}
                >
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        ${l?a`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  ?disabled=${!f&&!this._hasOperator(t)}
                  @click=${()=>this._clearFieldFilter(e)}
                >
                  ${this.t(`clearAll`,`Clear all`)}
                </button>
              </div>
            `:a`
              <!-- Operator -->
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t(`condition`,`Condition`)}</span>
                  <button
                    class="clear-btn"
                    ?disabled=${!f&&!this._hasOperator(t)}
                    @click=${()=>this._clearFieldFilter(e)}
                  >
                    ${this.t(`clearAll`,`Clear all`)}
                  </button>
                </div>
                <sfx-radio-group
                  direction="horizontal"
                  .options=${this._tUltratagsOperatorOptions}
                  .value=${o}
                  ?disabled=${r}
                  @sfx-change=${t=>this._onOperatorChange(e,t.detail.value)}
                ></sfx-radio-group>
              </div>

              <!-- Selected chips -->
              ${i.length>0?a`
                    <div class="filter-section">
                      <div class="section-header">
                        <span class="section-label">${this.t(`selected`,`Selected`)}</span>
                        <button class="clear-btn" @click=${()=>this._clearFieldFilter(e)}>
                          ${this.t(`clearAll`,`Clear all`)}
                        </button>
                      </div>
                      <div class="chips-wrap">
                        ${i.map(t=>a`
                            <div class="chip">
                              <span class="chip-label">${this._ultratagLabel(t)}</span>
                              <button
                                class="chip-remove"
                                @click=${()=>this._removeUltratag(e,t)}
                              >
                                <sfx-icon name="close" .size=${10}></sfx-icon>
                              </button>
                            </div>
                          `)}
                      </div>
                    </div>
                  `:s}
            `}

        <!-- Options list -->
        <div class="filter-section">
          <span class="section-label">${this.t(`allOptions`,`All options`)}</span>

          ${l?s:a`
                <!-- Empty/Not empty checkboxes -->
                <div class="options-list short">
                  ${this._tEmptyOptions.map(t=>a`
                      <div
                        class="option-item"
                        @click=${()=>this._onEmptyOption(e,t.value)}
                      >
                        <sfx-checkbox ?checked=${n.values?.[0]===t.value}></sfx-checkbox>
                        <span>${t.label}</span>
                      </div>
                    `)}
                </div>

                <div class="separator"></div>
              `}

          <div class="options-list">
            ${d?a`<div class="option-item disabled">
                  <span>${this.t(`loading`,`Loading...`)}</span>
                </div>`:u.length===0?a`<div class="no-results">
                    ${this.t(`noOptionsFound`,`No options found`)}
                  </div>`:u.map(t=>{let n=t.sid||t.slug,r=i.includes(n),o=!r&&p;return a`
                      <div
                        class="option-item ${o?`disabled`:``}"
                        @click=${()=>!o&&this._onUltratagToggle(e,t)}
                      >
                        <sfx-checkbox ?checked=${r}></sfx-checkbox>
                        <span>${ca(t,this.locale)}</span>
                      </div>
                    `})}
          </div>
        </div>
      </div>
    `}_renderDateFilter(e){let t=P(e),n=this._datePresets[t]||``,r=this._getApplied(t),i=this._isSpecialValue(r.values)?r.values?.[0]||``:n,o=[{value:`empty`,label:`Empty`},{value:`non-empty`,label:`Not empty`}],c=this._dateFroms[t]?k(this._dateFroms[t]):``,l=this._dateTos[t]?k(this._dateTos[t]):``,u=[`before`,`after`,`between`].includes(i);return a`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!i&&!r.values?.length}
          @click=${()=>this._clearFieldFilter(e)}
        >
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${o}
            .value=${i===`empty`||i===`non-empty`?i:``}
            @sfx-change=${t=>this._onDatePreset(e,t.detail.value)}
          ></sfx-radio-group>

          <div class="separator"></div>

          <sfx-radio-group
            clearable
            columns="2"
            .options=${ur.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
            .value=${i!==`empty`&&i!==`non-empty`?i:``}
            @sfx-change=${t=>this._onDatePreset(e,t.detail.value)}
          ></sfx-radio-group>
        </div>

        ${u?a`
              <div class="filter-section">
                <div class="grid-2">
                  ${i===`before`?a`
                        <div>
                          <span class="input-label">${this.t(`endDate`,`End date`)}</span>
                          <sfx-date-input
                            .value=${l}
                            @change=${t=>this._onDateInput(e,`to`,t)}
                          ></sfx-date-input>
                        </div>
                      `:i===`after`?a`
                          <div>
                            <span class="input-label">${this.t(`startDate`,`Start date`)}</span>
                            <sfx-date-input
                              .value=${c}
                              @change=${t=>this._onDateInput(e,`from`,t)}
                            ></sfx-date-input>
                          </div>
                        `:a`
                          <div>
                            <span class="input-label">${this.t(`startDate`,`Start date`)}</span>
                            <sfx-date-input
                              .value=${c}
                              @change=${t=>this._onDateInput(e,`from`,t)}
                            ></sfx-date-input>
                          </div>
                          <div>
                            <span class="input-label">${this.t(`endDate`,`End date`)}</span>
                            <sfx-date-input
                              .value=${l}
                              @change=${t=>this._onDateInput(e,`to`,t)}
                            ></sfx-date-input>
                          </div>
                        `}
                </div>
              </div>
            `:s}
      </div>
    `}_renderGeoFilter(e){let t=P(e),n=this._getApplied(t),r=this._isSpecialValue(n.values),i=this._getContentMode(t),o=``,c=``;if(!r&&n.values?.[0]){let[e,t]=n.values[0].split(`..`);o=e||``,c=t||``}let l=o.length>0,u=o.split(`,`).map(e=>e.trim()),d=!l||u.length===2&&u.every(e=>!isNaN(Number(e))&&e!==``);return a`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!n.values?.length}
          @click=${()=>this._clearFieldFilter(e)}
        >
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t(`content`,`Content`)}</span>
          <sfx-radio-group
            clearable
            .options=${this._tEmptyAndSpecificOptions}
            .value=${i}
            @sfx-change=${t=>this._onContentModeChange(e,t.detail.value)}
          ></sfx-radio-group>
        </div>

        ${i===`specific`?a`
              <div class="filter-section">
                <div class="geo-row">
                  <div class="geo-location">
                    <span class="input-label">${this.t(`location`,`Location`)}</span>
                    <input
                      class="filter-input"
                      type="text"
                      .placeholder=${this.t(`latLngPlaceholder`,`Latitude, longitude`)}
                      .value=${o}
                      @change=${t=>this._onGeoLocationInput(e,t)}
                    />
                    ${l&&!d?a`<div class="error-text">
                          ${this.t(`geoCoordinatesError`,`Enter coordinates as "latitude, longitude"`)}
                        </div>`:s}
                  </div>
                  <div class="geo-radius">
                    <span class="input-label">${this.t(`maxRadius`,`Max radius`)} (&deg;)</span>
                    <input
                      class="filter-input"
                      type="number"
                      placeholder="0"
                      data-geo-radius=${t}
                      .value=${c}
                      @change=${t=>this._onGeoRadiusInput(e,t)}
                    />
                  </div>
                </div>
              </div>
            `:s}
      </div>
    `}_renderAttachmentFilter(e){let t=this._getApplied(P(e)),n=t.values?.[0]||``;return a`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!t.values?.length}
          @click=${()=>this._clearFieldFilter(e)}
        >
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <sfx-radio-group
            clearable
            .options=${this._tEmptyOptions}
            .value=${n}
            @sfx-change=${t=>this._onEmptyOption(e,t.detail.value)}
          ></sfx-radio-group>
        </div>
      </div>
    `}_renderFaceMatcherFilter(e){let t=P(e),n=this._getApplied(t).values||[],r=this._getOperator(t,T.IS);return a`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${n.length===0&&!this._hasOperator(t)}
          @click=${()=>this._clearFieldFilter(e)}
        >
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <div class="filter-section">
          <span class="section-label">${this.t(`condition`,`Condition`)}</span>
          <sfx-radio-group
            direction="horizontal"
            .options=${gr}
            .value=${r}
            @sfx-change=${t=>this._onOperatorChange(e,t.detail.value)}
          ></sfx-radio-group>
          <input
            class="filter-input"
            type="text"
            .placeholder=${this.t(`searchFacesPlaceholder`,`Search faces`)}
            .value=${n.join(`, `)}
            @change=${t=>{let n=t.target.value.split(`,`).map(e=>e.trim()).filter(Boolean);this._emitFilterChange(e,r,n)}}
          />
        </div>
      </div>
    `}_renderFieldControl(e){switch(this._getUIType(e)){case`text`:return this._renderTextFilter(e);case`number`:return this._renderNumberFilter(e);case`boolean`:return this._renderBooleanFilter(e);case`select-one`:return this._renderSelectOneFilter(e);case`multi-select`:return this._renderMultiSelectFilter(e);case`tags`:return this._renderTagsFilter(e);case`ultratags`:return this._renderUltratagsFilter(e);case`date`:return this._renderDateFilter(e);case`geo`:return this._renderGeoFilter(e);case`attachment`:return e.type===E.INTEGER_LIST&&e.slug===`face_matcher`?this._renderFaceMatcherFilter(e):this._renderAttachmentFilter(e);default:return s}}_renderFieldSection(e){let t=this._getField(e);if(!t||!Or(t.type))return s;let n=this._collapsedFields.has(e);return a`
      <div class="field-section">
        <div class="field-header" @click=${()=>this._toggleCollapse(e)}>
          <div class="field-header-left">
            <sfx-icon
              class="chevron ${n?``:`expanded`}"
              name="chevron-right"
              .size=${14}
            ></sfx-icon>
            <sfx-icon
              name=${Er[t.type]||`file-text`}
              .size=${14}
              ${A({color:`var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))`})}
            ></sfx-icon>
            <span>${t.label}</span>
          </div>
          <div class="field-header-actions">
            <button
              class="icon-btn remove"
              @click=${e=>{e.stopPropagation(),this._removeField(t)}}
              title=${this.t(`removeField`,`Remove field`)}
            >
              <sfx-icon name="close" .size=${14}></sfx-icon>
            </button>
          </div>
        </div>
        <div class="field-body ${n?`collapsed`:``}">
          ${this._renderFieldControl(t)}
        </div>
      </div>
    `}_renderSelectorMode(){let e=this._fieldSearch.toLowerCase(),t=this._selectableFields.filter(t=>t.label.toLowerCase().includes(e)),n=this._getGroupedFields(t),r=(e,t)=>t.length===0?s:a`
        <div class="field-group-label">${e}</div>
        ${t.map(e=>{let t=P(e),n=this.visibleFields.includes(t),r=!!this.appliedMetadata[t]||!!this.appliedFilters[t],i=this.pinnedFields.includes(t),o=!n&&this._atFieldLimit;return a`
            <div
              class="field-item ${r?`has-filter`:``} ${o?`disabled`:``}"
              @click=${()=>!o&&this._emitFieldSelect(e)}
            >
              <sfx-icon
                name=${Er[e.type]||`file-text`}
                .size=${14}
                ${A({color:`var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))`})}
              ></sfx-icon>
              <span class="field-item-label">${e.label}</span>
              <button
                class="field-item-pin ${i?`pinned`:``}"
                @click=${e=>{e.stopPropagation(),this._emitPin(t,!i)}}
                title=${i?this.t(`unpinField`,`Unpin field`):this.t(`pinField`,`Pin field`)}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${r?a`<sfx-icon name="check" .size=${14}></sfx-icon>`:s}
            </div>
          `})}
      `;return a`
      <div class="selector-wrap">
        <div class="field-search-wrapper">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="field-search"
            type="text"
            .placeholder=${this.t(`searchFieldsPlaceholder`,`Search fields`)}
            .value=${this._fieldSearch}
            @input=${e=>{this._fieldSearch=e.target.value}}
          />
        </div>
        <div class="field-list">
          ${t.length===0?a`<div class="empty-msg">${this.t(`noFieldsFound`,`No fields found`)}</div>`:a`${[...n.entries()].map(([e,t])=>r(e,t))}`}
        </div>
      </div>
    `}_renderFieldMode(){let e=this._getField(this.activeFieldKey);return!e||!Or(e.type)?a`<div class="empty-msg">${this.t(`fieldNotFound`,`Field not found`)}</div>`:this._renderFieldControl(e)}render(){if(this.mode===`selector`)return this._renderSelectorMode();if(this.mode===`field`)return this._renderFieldMode();let e=this.visibleFields.length>0;return a`
      ${this._showFieldSelection||!e?this._renderFieldSelection():s}
      ${e?a`
            <div class="field-filters">
              ${this.visibleFields.map(e=>this._renderFieldSection(e))}
            </div>

            ${!this._showFieldSelection&&!this._atFieldLimit?a`
                  <button class="add-field-btn" @click=${this._openFieldSelection}>
                    <sfx-icon name="filter" .size=${14}></sfx-icon>
                    ${this.t(`addField`,`Add field`)}
                  </button>
                `:s}
          `:s}
    `}};l([i({type:Array})],F.prototype,`fields`,void 0),l([i({type:Object})],F.prototype,`appliedFilters`,void 0),l([i({type:Array})],F.prototype,`visibleFields`,void 0),l([i()],F.prototype,`mode`,void 0),l([i()],F.prototype,`activeFieldKey`,void 0),l([i({type:Array})],F.prototype,`pinnedFields`,void 0),l([i({type:Object})],F.prototype,`appliedMetadata`,void 0),l([i({attribute:!1})],F.prototype,`apiClient`,void 0),l([i({attribute:!1})],F.prototype,`t`,void 0),l([i()],F.prototype,`locale`,void 0),l([c()],F.prototype,`_showFieldSelection`,void 0),l([c()],F.prototype,`_fieldSearch`,void 0),l([c()],F.prototype,`_collapsedFields`,void 0),l([c()],F.prototype,`_tagInputs`,void 0),l([c()],F.prototype,`_tagSuggestions`,void 0),l([c()],F.prototype,`_tagLoading`,void 0),l([c()],F.prototype,`_datePresets`,void 0),l([c()],F.prototype,`_dateFroms`,void 0),l([c()],F.prototype,`_dateTos`,void 0),l([c()],F.prototype,`_specificModeFields`,void 0),l([c()],F.prototype,`_selectSearches`,void 0),l([c()],F.prototype,`_pendingOperators`,void 0),l([c()],F.prototype,`_utagQueries`,void 0),l([c()],F.prototype,`_utagEntries`,void 0),l([c()],F.prototype,`_utagLoading`,void 0),l([c()],F.prototype,`_utagLabels`,void 0),F=l([j(`ap-filter-metadata`)],F);var I=class extends e{constructor(...e){super(...e),this.t=(e,t)=>typeof t==`string`?t:e,this.mode=`field`,this.activeKey=w.STATUS,this.appliedKeys=[],this.pinnedKeys=[],this.forcedKeys=[],this.selectedStatus=[],this.statusOperator=xr,this.approverValues=[],this.approverOperator=xr,this.approverUsers=[],this.requesterValues=[],this.requesterOperator=xr,this.requesterUsers=[],this.dueDateKind=null,this.dueDatePreset=``,this.dueDateFrom=``,this.dueDateTo=``,this._approverSearch=``,this._requesterSearch=``,this._pendingOperators={}}static{this.styles=[M,Gi,r`
      .options-list.short {
        max-height: none;
      }
      .date-input-col {
        display: flex;
        flex-direction: column;
        gap: 4px;
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
      .selector-wrap {
        padding: 4px 0;
        min-width: 220px;
      }
      .sub-filter-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        cursor: pointer;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        transition: background 100ms;
      }
      .sub-filter-item:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .sub-filter-label {
        flex: 1;
        white-space: nowrap;
      }
      .sub-filter-pin {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        border: none;
        background: none;
        border-radius: var(--sfx-radius-sm, 6px);
        cursor: pointer;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0;
        transition:
          opacity 100ms,
          color 100ms;
      }
      .sub-filter-item:hover .sub-filter-pin,
      .sub-filter-pin.pinned {
        opacity: 1;
      }
      .sub-filter-pin.pinned {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .sub-filter-item.has-filter {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
    `]}_operatorFor(e,t,n){return n.length>0?t:this._pendingOperators[e]||t}_setPendingOperator(e,t){this._pendingOperators={...this._pendingOperators,[e]:t}}_clearPendingOperator(e){let{[e]:t,...n}=this._pendingOperators;this._pendingOperators=n}get _statusHasOnlyEmptyValues(){return this.selectedStatus.length>0&&this.selectedStatus.every(e=>e===`empty`||e===`non-empty`)}get _dueDateNeedsInputs(){return[`before`,`after`,`between`,`specific`].includes(this.dueDatePreset)}get _hasApproverUsers(){return this.approverUsers.length>0}get _hasRequesterUsers(){return this.requesterUsers.length>0}get _effectiveStatusOperator(){return this._operatorFor(w.STATUS,this.statusOperator,this.selectedStatus)}_toggleStatus(e){let t=this.selectedStatus.includes(e)?this.selectedStatus.filter(t=>t!==e):[...this.selectedStatus,e];if(t.length>0&&t.every(e=>e===`empty`||e===`non-empty`)){this._clearPendingOperator(w.STATUS),this._emitChange(w.STATUS,t,this.statusOperator);return}this._emitChange(w.STATUS,t,this._effectiveStatusOperator)}_handleStatusOperator(e){let t=e.detail.value;this._setPendingOperator(w.STATUS,t),this._emitChange(w.STATUS,this.selectedStatus,t)}_clearStatus(){this._clearPendingOperator(w.STATUS),this._emitChange(w.STATUS,[],this.statusOperator)}get _effectiveApproverOperator(){return this._operatorFor(w.APPROVER,this.approverOperator,this.approverValues)}_toggleApprover(e){let t=this.approverValues.includes(e)?this.approverValues.filter(t=>t!==e):[...this.approverValues,e];this._emitChange(w.APPROVER,t,this._effectiveApproverOperator)}_handleApproverOperator(e){let t=e.detail.value;this._setPendingOperator(w.APPROVER,t),this._emitChange(w.APPROVER,this.approverValues,t)}_clearApprover(){this._clearPendingOperator(w.APPROVER),this._emitChange(w.APPROVER,[],this.approverOperator)}_onApproverSearchInput(e){this._approverSearch=e.target.value}_clearApproverSearch(){this._approverSearch=``}get _effectiveRequesterOperator(){return this._operatorFor(w.REQUESTOR,this.requesterOperator,this.requesterValues)}_toggleRequester(e){let t=this.requesterValues.includes(e)?this.requesterValues.filter(t=>t!==e):[...this.requesterValues,e];this._emitChange(w.REQUESTOR,t,this._effectiveRequesterOperator)}_handleRequesterOperator(e){let t=e.detail.value;this._setPendingOperator(w.REQUESTOR,t),this._emitChange(w.REQUESTOR,this.requesterValues,t)}_clearRequester(){this._clearPendingOperator(w.REQUESTOR),this._emitChange(w.REQUESTOR,[],this.requesterOperator)}_onRequesterSearchInput(e){this._requesterSearch=e.target.value}_clearRequesterSearch(){this._requesterSearch=``}_kindFromDuedateValue(e){return e===D.BEFORE||e===D.AFTER||e===D.BETWEEN||e===D.SPECIFIC?e:D.PRESET}_handleDueDatePreset(e){let t=e.detail.value;if(!t||this.dueDatePreset===t){this._clearDueDate();return}let n=this._kindFromDuedateValue(t),r=``,i=``;if(n===D.PRESET){let e=Pr(t);e&&(r=e.from,i=e.to??``)}this._emitDuedate({kind:n,preset:t,from:r,to:i})}_handleDueDateFrom(e){let t=e.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:t,to:this.dueDateTo})}_handleDueDateTo(e){let t=e.target.value;this._emitDuedate({kind:this.dueDateKind,preset:this.dueDatePreset,from:this.dueDateFrom,to:t})}_clearDueDate(){this._emitDuedate({kind:null,preset:``,from:``,to:``})}_emitDuedate(e){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:w.DUE_DATE,values:{field:w.DUE_DATE,kind:e.kind,preset:e.preset||null,from:e.from,to:e.to}},bubbles:!0,composed:!0}))}_emitChange(e,t,n){this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:e,values:t,operator:n},bubbles:!0,composed:!0}))}_filterUsers(e,t){let n=t.trim().toLowerCase();return n?e.filter(e=>e.name.toLowerCase().includes(n)||(e.email?.toLowerCase().includes(n)??!1)):e}_getInitials(e){let t=e.name||e.email||``;if(!t)return`?`;let n=t.split(/\s+/).filter(Boolean);return n.length===0?`?`:n.length===1?n[0].slice(0,2).toUpperCase():(n[0][0]+n[n.length-1][0]).toUpperCase()}_renderStatusSection(){let e=this.selectedStatus.length>0||!!this._pendingOperators[w.STATUS];return a`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${this._clearStatus}>
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <span class="section-label">${this.t(`approvalStatus`,`Status`)}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t(`condition`,`Condition`)}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${br.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this._effectiveStatusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @sfx-change=${this._handleStatusOperator}
        ></sfx-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${Cr.map(e=>a`
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
          ${Sr.map(e=>a`
              <sfx-checkbox
                ?checked=${this.selectedStatus.includes(e.value)}
                @sfx-toggle=${()=>this._toggleStatus(e.value)}
              >
                <span class="status-icon-label">
                  <sfx-icon
                    name=${e.icon}
                    .size=${16}
                    ${A({color:e.iconColor})}
                  ></sfx-icon>
                  ${this.t(e.labelKey,e.label)}
                </span>
              </sfx-checkbox>
            `)}
        </div>
      </div>
    `}_renderUserItem(e,t,n){return a`
      <div class="user-item" @click=${n}>
        <sfx-checkbox ?checked=${t}></sfx-checkbox>
        <span class="user-avatar">
          ${e.avatarUrl?a`<img src=${e.avatarUrl} alt="" />`:a`<span>${this._getInitials(e)}</span>`}
        </span>
        <span class="user-text">
          <span class="user-name">${e.name}</span>
          ${e.email?a`<span class="user-email">${e.email}</span>`:s}
        </span>
      </div>
    `}_renderUserSelectedChips(e,t,n){return t.length===0?s:a`
      <div class="chips-wrap">
        ${t.map(t=>{let r=e.find(e=>e.uuid===t);return r?a`
            <div class="chip">
              <span class="user-chip-avatar">
                ${r.avatarUrl?a`<img src=${r.avatarUrl} alt="" />`:a`<span>${this._getInitials(r)}</span>`}
              </span>
              <span class="chip-label">${r.name}</span>
              <button class="chip-remove" @click=${()=>n(t)}>
                <sfx-icon name="close" .size=${10}></sfx-icon>
              </button>
            </div>
          `:s})}
      </div>
    `}_renderUserPickerSection(e){let t=e.selectedValues.length>0||!!this._pendingOperators[e.filterKey],n=this._filterUsers(e.users,e.search);return a`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!t} @click=${e.onClear}>
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <span class="section-label">${e.title}</span>

        <!-- Condition -->
        <span class="section-label condition-label">${this.t(`condition`,`Condition`)}</span>
        <sfx-radio-group
          direction="horizontal"
          .options=${br.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${e.operator}
          @sfx-change=${e.onOperatorChange}
        ></sfx-radio-group>

        ${this._renderUserSelectedChips(e.users,e.selectedValues,e.onToggle)}

        <div class="search-wrapper mt-12">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="search-input"
            type="text"
            .placeholder=${e.searchPlaceholder}
            .value=${e.search}
            @input=${e.onSearchInput}
          />
          ${e.search?a`
                <button class="search-clear" @click=${e.onSearchClear}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        <div class="options-list users-list">
          ${n.length===0?a`<div class="no-results">${this.t(`noUsersFound`,`No users found`)}</div>`:n.map(t=>this._renderUserItem(t,e.selectedValues.includes(t.uuid),()=>e.onToggle(t.uuid)))}
        </div>
      </div>
    `}_renderApproverSection(){return this._renderUserPickerSection({title:this.t(`approver`,`Approver`),searchPlaceholder:this.t(`searchApproverPlaceholder`,`Search approvers`),users:this.approverUsers,selectedValues:this.approverValues,operator:this._effectiveApproverOperator,filterKey:w.APPROVER,search:this._approverSearch,onClear:()=>this._clearApprover(),onOperatorChange:e=>this._handleApproverOperator(e),onSearchInput:e=>this._onApproverSearchInput(e),onSearchClear:()=>this._clearApproverSearch(),onToggle:e=>this._toggleApprover(e)})}_renderRequesterSection(){return this._renderUserPickerSection({title:this.t(`requester`,`Requester`),searchPlaceholder:this.t(`searchRequesterPlaceholder`,`Search requesters`),users:this.requesterUsers,selectedValues:this.requesterValues,operator:this._effectiveRequesterOperator,filterKey:w.REQUESTOR,search:this._requesterSearch,onClear:()=>this._clearRequester(),onOperatorChange:e=>this._handleRequesterOperator(e),onSearchInput:e=>this._onRequesterSearchInput(e),onSearchClear:()=>this._clearRequesterSearch(),onToggle:e=>this._toggleRequester(e)})}_renderDueDateSection(){let e=!!this.dueDatePreset||!!this.dueDateFrom||!!this.dueDateTo;return a`
      <div class="filter-section">
        <button class="clear-btn" ?disabled=${!e} @click=${this._clearDueDate}>
          ${this.t(`clearAll`,`Clear all`)}
        </button>

        <span class="section-label">${this.t(`dueDate`,`Due date`)}</span>

        <!-- Empty / Not empty radio buttons -->
        <sfx-radio-group
          clearable
          .options=${Cr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset===`empty`||this.dueDatePreset===`non-empty`?this.dueDatePreset:``}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <sfx-radio-group
          clearable
          columns="2"
          .options=${fr.map(e=>({...e,label:this.t(e.labelKey,e.label)}))}
          .value=${this.dueDatePreset!==`empty`&&this.dueDatePreset!==`non-empty`?this.dueDatePreset:``}
          @sfx-change=${this._handleDueDatePreset}
        ></sfx-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs?a`
              <div class="grid-2 mt-12">
                ${this.dueDatePreset===`before`?s:a`
                      <div class="date-input-col">
                        <span class="input-label">${this.t(`startDate`,`Start date`)}</span>
                        <sfx-date-input
                          .value=${this.dueDateFrom}
                          @change=${this._handleDueDateFrom}
                        ></sfx-date-input>
                      </div>
                    `}
                ${this.dueDatePreset!==`after`&&this.dueDatePreset!==`specific`?a`
                      <div class="date-input-col">
                        <span class="input-label">${this.t(`endDate`,`End date`)}</span>
                        <sfx-date-input
                          .value=${this.dueDateTo}
                          @change=${this._handleDueDateTo}
                        ></sfx-date-input>
                      </div>
                    `:s}
              </div>
            `:s}
      </div>
    `}get _availableSubFilters(){return Zn.filter(e=>this.forcedKeys.includes(e.key)?!1:e.key===w.APPROVER?this._hasApproverUsers:e.key!==w.REQUESTOR||this._hasRequesterUsers)}_emitSubFilterSelect(e){this.dispatchEvent(new CustomEvent(`approval-filter-select`,{detail:{key:e},bubbles:!0,composed:!0}))}_emitPin(e,t){this.dispatchEvent(new CustomEvent(`filter-pin`,{detail:{key:e,pinned:t},bubbles:!0,composed:!0}))}_renderSelector(){return a`
      <div class="selector-wrap">
        ${this._availableSubFilters.map(e=>{let t=this.appliedKeys.includes(e.key),n=this.pinnedKeys.includes(e.key);return a`
            <div
              class="sub-filter-item ${t?`has-filter`:``}"
              @click=${()=>this._emitSubFilterSelect(e.key)}
            >
              <sfx-icon
                name=${e.icon}
                .size=${14}
                ${A({color:`var(--sfx-muted-foreground, oklch(0.685 0.033 249.82))`})}
              ></sfx-icon>
              <span class="sub-filter-label">${this.t(e.labelKey,e.label)}</span>
              <button
                class="sub-filter-pin ${n?`pinned`:``}"
                title=${n?this.t(`unpinFilter`,`Unpin filter`):this.t(`pinFilter`,`Pin filter`)}
                @click=${t=>{t.stopPropagation(),this._emitPin(e.key,!n)}}
              >
                <sfx-icon name="pin" .size=${12}></sfx-icon>
              </button>
              ${t?a`<sfx-icon name="check" .size=${14}></sfx-icon>`:s}
            </div>
          `})}
      </div>
    `}render(){if(this.mode===`selector`)return this._renderSelector();switch(this.activeKey){case w.APPROVER:return a`<div class="filter-content">${this._renderApproverSection()}</div>`;case w.REQUESTOR:return a`<div class="filter-content">${this._renderRequesterSection()}</div>`;case w.DUE_DATE:return a`<div class="filter-content">${this._renderDueDateSection()}</div>`;default:return a`<div class="filter-content">${this._renderStatusSection()}</div>`}}};l([i({attribute:!1})],I.prototype,`t`,void 0),l([i()],I.prototype,`mode`,void 0),l([i()],I.prototype,`activeKey`,void 0),l([i({type:Array})],I.prototype,`appliedKeys`,void 0),l([i({type:Array})],I.prototype,`pinnedKeys`,void 0),l([i({type:Array})],I.prototype,`forcedKeys`,void 0),l([i({type:Array})],I.prototype,`selectedStatus`,void 0),l([i()],I.prototype,`statusOperator`,void 0),l([i({type:Array})],I.prototype,`approverValues`,void 0),l([i()],I.prototype,`approverOperator`,void 0),l([i({type:Array})],I.prototype,`approverUsers`,void 0),l([i({type:Array})],I.prototype,`requesterValues`,void 0),l([i()],I.prototype,`requesterOperator`,void 0),l([i({type:Array})],I.prototype,`requesterUsers`,void 0),l([i()],I.prototype,`dueDateKind`,void 0),l([i()],I.prototype,`dueDatePreset`,void 0),l([i()],I.prototype,`dueDateFrom`,void 0),l([i()],I.prototype,`dueDateTo`,void 0),l([c()],I.prototype,`_approverSearch`,void 0),l([c()],I.prototype,`_requesterSearch`,void 0),l([c()],I.prototype,`_pendingOperators`,void 0),I=l([j(`ap-filter-approval`)],I);var ma=300;function ha(e){return e.filter(t=>t.toLowerCase().includes(`*`)||!e.some(e=>e.toLowerCase().includes(`*`)&&t.toLowerCase().startsWith(e.slice(0,-1).toLowerCase())))}var L=class extends e{constructor(...e){super(...e),this.selected=[],this.t=(e,t)=>typeof t==`string`?t:e,this._search=``,this._debouncedSearch=``,this._products=[],this._isLoading=!1,this._showAddList=!1,this._addListText=``}static{this.styles=[M,Gi,r`
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
    `]}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._searchInput?.focus())}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer&&clearTimeout(this._debounceTimer)}get _isSearching(){return this._debouncedSearch.length>0}_emit(e){let t=ha(e);this.dispatchEvent(new CustomEvent(`filter-change`,{detail:{key:C.PRODUCT_REF,values:t,operator:T.IS},bubbles:!0,composed:!0}))}_toggle(e){let t=this.selected.includes(e)?this.selected.filter(t=>t!==e):[...this.selected,e];this._emit(t)}_remove(e){this._emit(this.selected.filter(t=>t!==e))}_clearAll(){this._emit([]),this._search=``,this._debouncedSearch=``,this._products=[]}_onSearchInput(e){let t=e.target.value;this._search=t,this._debounceTimer&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{let e=t.trim().toLowerCase();this._debouncedSearch=e,e?this._fetchProducts(e):(this._products=[],this._isLoading=!1)},ma)}_clearSearch(){this._search=``,this._debouncedSearch=``,this._products=[],this._isLoading=!1,this._debounceTimer&&clearTimeout(this._debounceTimer)}async _fetchProducts(e){if(this.apiClient){this._isLoading=!0;try{let t=await this.apiClient.get(`/products`,{q:`reference~^${e}`});this._debouncedSearch===e&&(this._products=t.products??[])}catch{this._debouncedSearch===e&&(this._products=[])}finally{this._debouncedSearch===e&&(this._isLoading=!1)}}}_openAddList(){this._showAddList=!0,this._addListText=``}_closeAddList(){this._showAddList=!1,this._addListText=``}_onAddListInput(e){this._addListText=e.target.value}_onAddListKeydown(e){e.key===`Enter`&&!e.shiftKey&&e.stopPropagation()}_submitAddList(){let e=this._addListText.split(`
`).map(e=>e.trim()).filter(e=>e!==``);if(e.length>0){let t=new Set(this.selected),n=[...this.selected,...e.filter(e=>!t.has(e))];this._emit(n)}this._closeAddList()}_renderProductItem(e){let t=this.selected.includes(e);return a`
      <div class="product-item" @click=${()=>this._toggle(e)}>
        <sfx-checkbox ?checked=${t}></sfx-checkbox>
        <span class="product-name">${e}</span>
      </div>
    `}render(){let e=this.selected.length===0;return a`
      <div class="filter-content">
        <div class="filter-header">
          <sfx-icon class="search-icon" name="search" .size=${14}></sfx-icon>
          <input
            class="product-search"
            type="text"
            .placeholder=${this.t(`searchProductRefsPlaceholder`,`Search product references`)}
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search?a`
                <button class="search-clear" @click=${this._clearSearch}>
                  <sfx-icon name="close" .size=${12}></sfx-icon>
                </button>
              `:s}
        </div>

        <!-- Clear all (when searching and has selection) -->
        ${this._isSearching&&!e?a`
              <div class="section-header">
                <span class="section-label"></span>
                <button class="clear-btn" @click=${this._clearAll}>
                  ${this.t(`clearAll`,`Clear all`)}
                </button>
              </div>
            `:s}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching&&this.selected.length>0?a`
              <div class="filter-section">
                <div class="section-header">
                  <span class="section-label">${this.t(`selected`,`Selected`)}</span>
                  <button class="clear-btn" @click=${this._clearAll}>
                    ${this.t(`clearAll`,`Clear all`)}
                  </button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map(e=>a`
                      <div class="chip">
                        <span class="chip-label">${e}</span>
                        <button class="chip-remove" @click=${()=>this._remove(e)}>
                          <sfx-icon name="close" .size=${10}></sfx-icon>
                        </button>
                      </div>
                    `)}
                </div>
              </div>
            `:s}

        <!-- Search results -->
        ${this._isSearching?a`
              <div class="filter-section">
                <span class="section-label"
                  >${this.t(`productReferences`,`Product references`)}</span
                >
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length>1?this._renderProductItem(`${this._search.trim()}*`):s}
                  ${this._products.map(({ref:e})=>this._renderProductItem(e))}
                </div>
              </div>
            `:s}

        <!-- Placeholder (when not searching) -->
        ${this._isSearching?s:a`
              <div class="placeholder">
                ${e?a`<sfx-icon
                      name="box"
                      .size=${40}
                      ${A({color:`var(--sfx-border, oklch(92.86% 0.009 247.92))`,"margin-bottom":`4px`})}
                    ></sfx-icon>`:s}
                <div class="placeholder-title">
                  ${this.t(`findProductRef`,`Find product reference`)}
                </div>
                <div class="placeholder-text">
                  ${this.t(`productRefSearchHint`,`By using the search or pressing the button below to import the product references list.`)}
                </div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <sfx-icon name="plus" .size=${14}></sfx-icon>
                  ${this.t(`addList`,`Add list`)}
                </button>
              </div>
            `}

        <!-- Loading skeleton -->
        ${this._isLoading?a`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `:s}

        <!-- No results -->
        ${this._isSearching&&!this._isLoading&&this._products.length===0?a`<div class="no-results">${this.t(`noResultsFound`,`No results found`)}</div>`:s}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList?a`
            <div
              class="dialog-overlay"
              @click=${e=>{e.target===e.currentTarget&&this._closeAddList()}}
            >
              <div class="dialog">
                <div class="dialog-header">
                  ${this.t(`addProductRefsList`,`Add products references list`)}
                </div>
                <div class="dialog-body">
                  <div class="info-alert" ${A({"margin-top":`0`})}>
                    <sfx-icon name="info" .size=${14}></sfx-icon>
                    <span
                      >${this.t(`wildcardInfo`,`Use "*" to select all references starting with your text.`)}</span
                    >
                  </div>
                  <label
                    class="input-label"
                    ${A({"margin-bottom":`0`,"font-weight":`400`,color:`var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89))`})}
                    >${this.t(`productReferences`,`Product references`)}</label
                  >
                  <textarea
                    class="dialog-textarea"
                    .placeholder=${this.t(`productRefsTextareaPlaceholder`,`Enter product references separated by new lines`)}
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>
                    ${this.t(`cancel`,`Cancel`)}
                  </button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>
                    ${this.t(`continue`,`Continue`)}
                  </button>
                </div>
              </div>
            </div>
          `:s}
    `}};l([i({type:Array})],L.prototype,`selected`,void 0),l([i({attribute:!1})],L.prototype,`apiClient`,void 0),l([i({attribute:!1})],L.prototype,`t`,void 0),l([u(`.product-search`)],L.prototype,`_searchInput`,void 0),l([c()],L.prototype,`_search`,void 0),l([c()],L.prototype,`_debouncedSearch`,void 0),l([c()],L.prototype,`_products`,void 0),l([c()],L.prototype,`_isLoading`,void 0),l([c()],L.prototype,`_showAddList`,void 0),l([c()],L.prototype,`_addListText`,void 0),L=l([j(`ap-filter-product-ref`)],L);var R=class extends e{constructor(...e){super(...e),this.totalCount=0,this.totalFolderCount=0,this.isLoading=!1,this.showUpload=!1,this.showCreateFolder=!1,this.showFilters=!0,this.countLabel=``,this.sortBy=`created_at`,this.sortDirection=`desc`,this.sortOptions=Oi,this.showVariants=!1,this.variantOptions=[],this.defaultVariantName=`original`,this.filters={metadata:{pinned:[],visible:[],applied:{}},pinned:[],applied:{}},this.labels=[],this.tags=[],this.fileTypes=[],this.metadataFields=[],this.pinnedFilters=[],this.forcedFilterKeys=[],this.enabledFilterKeys=null,this.enabledMetadataFields=null,this.metadataCategoryEnabled=!0,this.approverUsers=[],this.requesterUsers=[],this.t=(e,t)=>typeof t==`string`?t:e,this.locale=`en`,this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._outsideClickHandler=e=>{let t=e.composedPath();if(this._externalTrigger&&t.some(e=>e instanceof HTMLElement&&e.classList.contains(`chip`)&&e.closest?.(`ap-filters-bar`)))return;let n=this._openFilter&&t.some(e=>e instanceof HTMLElement?e.classList.contains(`popover-anchor`)||e.classList.contains(`popover-panel`):!1),r=(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&t.some(e=>e instanceof HTMLElement&&(e.classList.contains(`dropdown-menu`)||e.classList.contains(`filter-dropdown`)||e.classList.contains(`submenu-overlay`)));n||r||(this._openFilter&&(this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null),(this._showDropdown||this._showMetadataSelector||this._showApprovalSelector)&&(this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1))}}static{this.styles=r`
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
    .submenu-overlay {
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
  `}connectedCallback(){super.connectedCallback(),document.addEventListener(`mousedown`,this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._outsideClickHandler)}updated(e){if((e.has(`_openFilter`)||e.has(`_externalTrigger`)||e.has(`_openMetadataField`))&&this.dispatchEvent(new CustomEvent(`filter-panel-change`,{detail:{key:this._externalTrigger?this._openFilter:null,metadataFieldKey:this._externalTrigger?this._openMetadataField:null},bubbles:!0,composed:!0})),this._externalTrigger&&this._externalLeft!=null&&(e.has(`_openFilter`)||e.has(`_externalLeft`)||e.has(`_openMetadataField`))){let e=this.renderRoot.querySelector(`.popover-panel`);if(e){let t=e.closest(`.popover-anchor`),n=t?t.offsetWidth:this.offsetWidth,r=e.offsetWidth;this._externalLeft+r>n-8&&(e.style.left=`${Math.max(8,n-r-8)}px`)}}}_closeAllDropdowns(){this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null,this._sortDropdown?.close()}_handleUploadClick(){this.dispatchEvent(new CustomEvent(`upload-click`,{bubbles:!0,composed:!0}))}_handleCreateFolderClick(){this.dispatchEvent(new CustomEvent(`create-folder-click`,{bubbles:!0,composed:!0}))}_toggleDropdown(){let e=this._showDropdown;this._closeAllDropdowns(),this._showDropdown=!e}_toggleMetadataSelector(){this._showApprovalSelector=!1,this._showMetadataSelector=!this._showMetadataSelector}_toggleApprovalSelector(){this._showMetadataSelector=!1,this._showApprovalSelector=!this._showApprovalSelector}_handleApprovalFilterSelect(e){e.stopPropagation();let t=e.detail.key;if(this._showApprovalSelector=!1,this._showDropdown=!1,!(t in this.filters.applied)){this.dispatchEvent(new CustomEvent(`filter-pending`,{detail:{key:t},bubbles:!0,composed:!0}));return}this._openFilter=t,this._openMetadataField=null,this._clearExternalAnchor()}_clearExternalAnchor(){this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}closeFilterPanel(){this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}openFilterPanel(e,t=!1,n,r){if(t&&this._externalTrigger&&this._openFilter===e&&!this._openMetadataField){this.closeFilterPanel();return}let i=e===`approval`&&this._isApprovalActive();if(!t&&!this._isFilterActive(e)&&!i){this._showDropdown=!1,this._showMetadataSelector=!1,this.dispatchEvent(new CustomEvent(`filter-pending`,{detail:{key:e},bubbles:!0,composed:!0}));return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=e,this._openMetadataField=null,this._externalTrigger=t,this._externalLeft=n??null,this._externalTop=r??null}_handleSortOpen(){this._showDropdown=!1,this._showMetadataSelector=!1,this._showApprovalSelector=!1,this._openFilter=null,this._openMetadataField=null,this._externalTrigger=!1,this._externalLeft=null,this._externalTop=null}_handleSort(e){this.dispatchEvent(new CustomEvent(`sort-change`,{detail:e.detail,bubbles:!0,composed:!0}))}_handleVariantDefaultChange(e){this.dispatchEvent(new CustomEvent(`variant-default-change`,{detail:{name:e.detail.value},bubbles:!0,composed:!0}))}_toggleSortDirection(){let e=this.sortDirection===`asc`?`desc`:`asc`;this.dispatchEvent(new CustomEvent(`sort-direction-change`,{detail:{value:e},bubbles:!0,composed:!0}))}_isFilterActive(e){return e in this.filters.applied&&this.filters.applied[e]!==void 0}_isApprovalSubKey(e){return!!e&&Zn.some(t=>t.key===e)}_isApprovalActive(){let e=this.filters.applied;return w.STATUS in e||w.APPROVER in e||w.REQUESTOR in e||w.DUE_DATE in e}_handleFilterChange(e){e.stopPropagation();let{key:t,values:n,operator:r}=e.detail;this.dispatchEvent(new CustomEvent(`filter-update`,{detail:{key:t,values:n,operator:r},bubbles:!0,composed:!0}))}_handleMetadataFilterChange(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`metadata-filter-change`,{detail:e.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`metadata-field-toggle`,{detail:e.detail,bubbles:!0,composed:!0}))}_handleMetadataFieldSelect(e){e.stopPropagation(),this._openMetadataField=e.detail.fieldKey}_handleMetadataSelectorFieldSelect(e){e.stopPropagation();let t=e.detail.fieldKey;if(this._showMetadataSelector=!1,this._showDropdown=!1,!(t in(this.filters.metadata?.applied||{}))){this.dispatchEvent(new CustomEvent(`filter-pending`,{detail:{metadataFieldKey:t},bubbles:!0,composed:!0}));return}this._openFilter=`metadata`,this._openMetadataField=t,this._clearExternalAnchor()}_handleMetadataPin(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`metadata-pin`,{detail:e.detail,bubbles:!0,composed:!0}))}openMetadataFieldPanel(e,t=!1,n,r){if(t&&this._externalTrigger&&this._openMetadataField===e){this.closeFilterPanel();return}this._showDropdown=!1,this._showMetadataSelector=!1,this._openFilter=`metadata`,this._openMetadataField=e,this._externalTrigger=t,this._externalLeft=n??null,this._externalTop=r??null}_getMetadataFieldLabel(e){for(let t of this.metadataFields)if(`${Ln[t.type]||``}${t.key}`===e)return t.label;return e}get _visibleAppliedMetadataCount(){if(!this.metadataCategoryEnabled)return 0;let e=this.enabledMetadataFields;return e?Object.keys(this.filters.metadata.applied).filter(t=>e.includes(zn(t))).length:Object.keys(this.filters.metadata.applied).length}_togglePin(e,t){t.stopPropagation();let n=this.pinnedFilters.includes(e);this.dispatchEvent(new CustomEvent(`filter-pin`,{detail:{key:e,pinned:!n},bubbles:!0,composed:!0}))}_getFilterIcon(e){return(Qn.find(t=>t.key===e)??Zn.find(t=>t.key===e))?.icon||`filter`}_renderFilterContent(e){let{t}=this,n=this.filters.applied;switch(e){case`type`:{let e=n.type;return a`<ap-filter-type
          .selected=${e?.values||[]}
          .fileTypes=${this.fileTypes}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-type>`}case`tags`:{let e=n.tags;return a`<ap-filter-tags
          .tags=${this.tags}
          .selected=${e?.values||[]}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-tags>`}case`labels`:{let e=n.labels;return a`<ap-filter-labels
          .labels=${this.labels}
          .selected=${e?.values||[]}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-labels>`}case`color`:{let e=n.color;return a`<ap-filter-color
          .values=${e?.values||[]}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-color>`}case`date`:{let e=n.date;return a`<ap-filter-date
          .filterKey=${`date`}
          .field=${e?.field||`created`}
          .kind=${e?.kind||null}
          .from=${e?.from||``}
          .to=${e?.to||``}
          .preset=${e?.preset||``}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case`asset_expiration`:{let e=n.asset_expiration;return a`<ap-filter-date
          .filterKey=${`asset_expiration`}
          .field=${`asset_expiration`}
          .kind=${e?.kind||null}
          .from=${e?.from||``}
          .to=${e?.to||``}
          .preset=${e?.preset||``}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-date>`}case`size`:{let[e,r]=(n.size?.values?.[0]||``).split(`..`),i=e?parseFloat(e)/1e6:0,o=r?parseFloat(r)/1e6:0;return a`<ap-filter-size
          .min=${i}
          .max=${o}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-size>`}case`image`:{let e=n.image,r=e&&`resolution`in e?e:null;return a`<ap-filter-image
          .selectedResolution=${r?.resolution||[]}
          .selectedOrientation=${r?.orientation||[]}
          .selectedFaces=${r?.faces||[]}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-image>`}case C.APPROVAL:return this._renderApprovalSelector();case w.STATUS:case w.APPROVER:case w.REQUESTOR:case w.DUE_DATE:{let r=n[w.STATUS],i=n[w.APPROVER],o=n[w.REQUESTOR],s=n[w.DUE_DATE];return a`<ap-filter-approval
          mode="field"
          .activeKey=${e}
          .selectedStatus=${r?.values||[]}
          .statusOperator=${r?.operator||xr}
          .approverValues=${i?.values||[]}
          .approverOperator=${i?.operator||xr}
          .approverUsers=${this.approverUsers}
          .requesterValues=${o?.values||[]}
          .requesterOperator=${o?.operator||xr}
          .requesterUsers=${this.requesterUsers}
          .dueDateKind=${s?.kind??null}
          .dueDatePreset=${s?.preset||``}
          .dueDateFrom=${s?.from||``}
          .dueDateTo=${s?.to||``}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-approval>`}case`metadata`:return this._openMetadataField?a`<ap-filter-metadata
            mode="field"
            .activeFieldKey=${this._openMetadataField}
            .fields=${this.metadataFields}
            .appliedMetadata=${this.filters.metadata.applied}
            .visibleFields=${this.filters.metadata.visible}
            .pinnedFields=${this.filters.metadata.pinned}
            .apiClient=${this.apiClient}
            .locale=${this.locale}
            .t=${t}
            @metadata-filter-change=${this._handleMetadataFilterChange}
            @metadata-field-toggle=${this._handleMetadataFieldToggle}
          ></ap-filter-metadata>`:a`<ap-filter-metadata
          mode="selector"
          .fields=${this.metadataFields}
          .appliedMetadata=${this.filters.metadata.applied}
          .visibleFields=${this.filters.metadata.visible}
          .pinnedFields=${this.filters.metadata.pinned}
          .apiClient=${this.apiClient}
          .locale=${this.locale}
          .t=${t}
          @metadata-filter-change=${this._handleMetadataFilterChange}
          @metadata-field-toggle=${this._handleMetadataFieldToggle}
          @metadata-field-select=${this._handleMetadataFieldSelect}
          @metadata-pin=${this._handleMetadataPin}
        ></ap-filter-metadata>`;case`product_ref`:{let e=n.product_ref;return a`<ap-filter-product-ref
          .selected=${e?.values||[]}
          .apiClient=${this.apiClient}
          .t=${t}
          @filter-change=${this._handleFilterChange}
        ></ap-filter-product-ref>`}default:return s}}_renderFilterButton(e){let{t}=this,n=e.key===`metadata`,r=e.key===`approval`,i=n?this._visibleAppliedMetadataCount>0:r?this._isApprovalActive():this._isFilterActive(e.key),o=this.pinnedFilters.includes(e.key),c=n||r,l=a`
      <button
        class="filter-btn ${i?`active`:``} ${o?`pinned`:``}"
        @click=${()=>{n?this._toggleMetadataSelector():r?this._toggleApprovalSelector():this.openFilterPanel(e.key)}}
      >
        <span class="filter-btn-icon">
          <sfx-icon name=${e.icon} .size=${18}></sfx-icon>
        </span>
        <span class="filter-btn-label"> ${t(e.labelKey,e.label)} </span>
        ${c?a`<span class="submenu-chevron"
              ><sfx-icon name="chevron-right" .size=${14}></sfx-icon
            ></span>`:a`
              <span
                class="pin-btn ${o?`pinned`:``}"
                title=${o?t(`unpinFilter`,`Unpin filter`):t(`pinFilter`,`Pin filter`)}
                @click=${t=>this._togglePin(e.key,t)}
              >
                <sfx-icon name="pin" .size=${14}></sfx-icon>
              </span>
            `}
      </button>
    `;return c?a`
      <div class="filter-btn-wrapper">
        ${l}
        ${n&&this._showMetadataSelector?a`
              <div class="submenu-overlay">
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
            `:s}
        ${r&&this._showApprovalSelector?a` <div class="submenu-overlay">${this._renderApprovalSelector()}</div> `:s}
      </div>
    `:l}_renderApprovalSelector(){return a`<ap-filter-approval
      mode="selector"
      .forcedKeys=${Zn.map(e=>e.key).filter(e=>this.forcedFilterKeys.includes(e))}
      .appliedKeys=${Zn.map(e=>e.key).filter(e=>e in this.filters.applied)}
      .pinnedKeys=${this.pinnedFilters.filter(e=>Zn.some(t=>t.key===e))}
      .approverUsers=${this.approverUsers}
      .requesterUsers=${this.requesterUsers}
      .t=${this.t}
      @approval-filter-select=${this._handleApprovalFilterSelect}
    ></ap-filter-approval>`}render(){let{t:e}=this,t=Object.keys(this.filters.applied).length+this._visibleAppliedMetadataCount,n=Qn.filter(e=>!this.forcedFilterKeys.includes(e.key)&&(!this.enabledFilterKeys||this.enabledFilterKeys.includes(e.key)));return a`
      <div class="toolbar-row">
        ${this.isLoading?a`<span class="count-skeleton"></span>`:a`<span class="count"
              >${this.countLabel||[this.totalFolderCount>0?e(`folderCount`,{count:this.totalFolderCount,defaultValue_one:`{{count}} folder`,defaultValue_other:`{{count}} folders`}):``,this.totalCount>0||this.totalFolderCount===0?e(`assetCount`,{count:this.totalCount,defaultValue_one:`{{count}} asset`,defaultValue_other:`{{count}} assets`}):``].filter(Boolean).join(`, `)}</span
            >`}
        <span class="spacer"></span>
        <div class="controls">
          ${this.showFilters&&n.length>0?a`
                <div class="filter-dropdown">
                  <button
                    class="add-btn ${this._showDropdown?`open`:``}"
                    @click=${this._toggleDropdown}
                  >
                    <sfx-icon name="filter" .size=${16}></sfx-icon>
                    ${e(`filters`,`Filters`)}
                    ${t>0?a`<span class="filter-count">${t}</span>`:a`<sfx-icon name="chevron-down" .size=${16}></sfx-icon>`}
                  </button>
                  ${this._showDropdown?a`
                        <div class="dropdown-menu">
                          ${n.map(e=>this._renderFilterButton(e))}
                        </div>
                      `:s}
                </div>
              `:s}
          <sfx-dropdown
            variant="borderless"
            .label=${e(`sort`,`Sort`)}
            .value=${this.sortBy}
            .options=${this.sortOptions.map(t=>({...t,label:e(t.labelKey,t.label)}))}
            @sfx-change=${this._handleSort}
            @dropdown-open=${this._handleSortOpen}
          ></sfx-dropdown>
          ${this.showVariants?a`
                <sfx-dropdown
                  variant="borderless"
                  .label=${e(`insertAs`,`Insert as`)}
                  .value=${this.defaultVariantName}
                  .options=${this.variantOptions}
                  @sfx-change=${this._handleVariantDefaultChange}
                  @dropdown-open=${this._handleSortOpen}
                ></sfx-dropdown>
              `:s}
          <button
            class="icon-btn"
            @click=${this._toggleSortDirection}
            aria-label=${this.sortDirection===`asc`?e(`sortAscending`,`Sort ascending`):e(`sortDescending`,`Sort descending`)}
            title=${this.sortDirection===`asc`?e(`ascending`,`Ascending`):e(`descending`,`Descending`)}
          >
            <sfx-icon
              name=${this.sortDirection===`asc`?`sort-asc`:`sort-desc`}
              .size=${18}
            ></sfx-icon>
          </button>
          ${this.showCreateFolder?a`
                <button class="new-folder-btn" @click=${this._handleCreateFolderClick}>
                  <sfx-icon name="folder-plus" .size=${16}></sfx-icon>
                  New folder
                </button>
              `:s}
          ${this.showUpload?a`
                <button class="upload-btn" @click=${this._handleUploadClick}>
                  <sfx-icon name="upload" .size=${16}></sfx-icon>
                  ${e(`upload`,`Upload`)}
                </button>
              `:s}
        </div>
      </div>
      ${this._openFilter?a`
            <div
              class="popover-anchor ${this._externalTrigger?`external`:``}"
              ${A(this._externalTrigger&&this._externalTop!=null?{top:`${this._externalTop+4}px`}:null)}
            >
              ${this._externalTrigger?s:a`
                    <div class="anchor-tab">
                      ${this._openFilter===`metadata`&&this._openMetadataField?a`
                            <button
                              class="anchor-back"
                              @click=${e=>{e.stopPropagation(),this._openMetadataField=null}}
                              title=${e(`backToFields`,`Back to fields`)}
                            >
                              <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                            </button>
                            ${this._getMetadataFieldLabel(this._openMetadataField)}
                          `:this._isApprovalSubKey(this._openFilter)?a`
                              <button
                                class="anchor-back"
                                @click=${e=>{e.stopPropagation(),this._openFilter=C.APPROVAL}}
                                title=${e(`backToApproval`,`Back to approval filters`)}
                              >
                                <sfx-icon name="chevron-left" .size=${14}></sfx-icon>
                              </button>
                              <sfx-icon
                                name=${this._getFilterIcon(this._openFilter)}
                                .size=${16}
                              ></sfx-icon>
                              ${e(nr[this._openFilter]??this._openFilter,tr[this._openFilter]||this._openFilter)}
                            `:a`
                              <sfx-icon
                                name=${this._getFilterIcon(this._openFilter)}
                                .size=${16}
                              ></sfx-icon>
                              ${e(nr[this._openFilter]??this._openFilter,tr[this._openFilter]||this._openFilter)}
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
                ${A(this._externalTrigger&&this._externalLeft!=null?{left:`${this._externalLeft}px`}:null)}
              >
                ${this._renderFilterContent(this._openFilter)}
              </div>
            </div>
          `:s}
    `}};l([i({type:Number})],R.prototype,`totalCount`,void 0),l([i({type:Number})],R.prototype,`totalFolderCount`,void 0),l([i({type:Boolean})],R.prototype,`isLoading`,void 0),l([i({type:Boolean})],R.prototype,`showUpload`,void 0),l([i({type:Boolean})],R.prototype,`showCreateFolder`,void 0),l([i({type:Boolean})],R.prototype,`showFilters`,void 0),l([i()],R.prototype,`countLabel`,void 0),l([i()],R.prototype,`sortBy`,void 0),l([i()],R.prototype,`sortDirection`,void 0),l([i({type:Array})],R.prototype,`sortOptions`,void 0),l([i({type:Boolean})],R.prototype,`showVariants`,void 0),l([i({type:Array})],R.prototype,`variantOptions`,void 0),l([i()],R.prototype,`defaultVariantName`,void 0),l([i({type:Object})],R.prototype,`filters`,void 0),l([i({type:Array})],R.prototype,`labels`,void 0),l([i({type:Array})],R.prototype,`tags`,void 0),l([i({type:Array})],R.prototype,`fileTypes`,void 0),l([i({type:Array})],R.prototype,`metadataFields`,void 0),l([i({type:Array})],R.prototype,`pinnedFilters`,void 0),l([i({type:Array})],R.prototype,`forcedFilterKeys`,void 0),l([i({type:Array})],R.prototype,`enabledFilterKeys`,void 0),l([i({type:Array})],R.prototype,`enabledMetadataFields`,void 0),l([i({type:Boolean})],R.prototype,`metadataCategoryEnabled`,void 0),l([i({type:Array})],R.prototype,`approverUsers`,void 0),l([i({type:Array})],R.prototype,`requesterUsers`,void 0),l([i({attribute:!1})],R.prototype,`apiClient`,void 0),l([i({attribute:!1})],R.prototype,`t`,void 0),l([i()],R.prototype,`locale`,void 0),l([u(`sfx-dropdown`)],R.prototype,`_sortDropdown`,void 0),l([c()],R.prototype,`_showDropdown`,void 0),l([c()],R.prototype,`_showMetadataSelector`,void 0),l([c()],R.prototype,`_showApprovalSelector`,void 0),l([c()],R.prototype,`_openFilter`,void 0),l([c()],R.prototype,`_openMetadataField`,void 0),l([c()],R.prototype,`_externalTrigger`,void 0),l([c()],R.prototype,`_externalLeft`,void 0),l([c()],R.prototype,`_externalTop`,void 0),R=l([j(`ap-content-toolbar`)],R);var z=class extends e{constructor(...e){super(...e),this.appliedFilters={},this.appliedMetadata={},this.forcedFilters={},this.metadataFields=[],this.pinnedFilters=[],this.pinnedMetadataFields=[],this.tags=[],this.labels=[],this.approverUsers=[],this.requesterUsers=[],this.activeFilter=null,this.activeMetadataField=null,this.pendingFilter=null,this.pendingMetadataField=null,this.t=(e,t)=>typeof t==`string`?t:e,this.locale=`en`}static{this.styles=r`
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
  `}_mapTypeLabel(e){let t=rr.find(t=>t.value===e)?.label;if(t)return t;let n=e.indexOf(`_`);return n===-1?e:e.slice(n+1).toUpperCase()}_getSizeSummary(e){if(e.values.length===0)return``;let[t,n]=e.values[0].split(`..`),r=t?parseFloat(t):null,i=n?parseFloat(n):null,a=e=>e>=1e3?`${(e/1e3).toFixed(e%1e3==0?0:1)} GB`:`${e} MB`;return r!==null&&i!==null?`${a(r)} – ${a(i)}`:r===null?i===null?``:`< ${a(i)}`:`> ${a(r)}`}_getFilterSummary(e,t){if(e.type===`string`){let n=e;if(n.values.length===0)return``;if(t===C.SIZE)return this._getSizeSummary(n);if(t===C.COLOR){let e=n.values.map(e=>e.split(` `)[0]).filter(Boolean);return e.length===0?``:e.length===1?e[0]:`${e[0]} +${e.length-1}`}let r=e=>e===`empty`?this.t(`empty`,`Empty`):e===`non-empty`?this.t(`notEmpty`,`Not empty`):null;if(n.metadataType===E.ULTRATAGS){let e=e=>r(e)??fa(e,this.locale)??e;return n.values.length===1?e(n.values[0]):`${e(n.values[0])} +${n.values.length-1}`}let i=t===C.TYPE?e=>r(e)??this._mapTypeLabel(e):t===C.TAGS?e=>r(e)??(this.tags.find(t=>t.sid===e)?.label||e):t===C.LABELS?e=>r(e)??(this.labels.find(t=>t.sid===e)?.name||e):t===w.APPROVER?e=>r(e)??(this.approverUsers.find(t=>t.uuid===e)?.name||e):t===w.REQUESTOR?e=>r(e)??(this.requesterUsers.find(t=>t.uuid===e)?.name||e):e=>r(e)??e;return n.values.length===1?i(n.values[0]):`${i(n.values[0])} +${n.values.length-1}`}if(e.type===`date`)return t===w.DUE_DATE?this._getDuedateSummary(e):this._getDateSummary(e);if(typeof e==`object`&&`resolution`in e){let t=e,n=[...t.resolution,...t.orientation,...t.faces];return n.length===0?``:n.length===1?n[0]:`${n[0]} +${n.length-1}`}return``}_getDuedateSummary(e){let t=e.preset||``;if(t===`empty`)return this.t(`empty`,`Empty`);if(t===`non-empty`)return this.t(`notEmpty`,`Not empty`);if(e.kind===`preset`){let e=fr.find(e=>e.value===t);return e?this.t(e.labelKey,e.label):t}if(e.kind===`between`){if(e.from&&e.to)return`${k(e.from)} – ${k(e.to)}`;if(e.from)return`> ${k(e.from)}`;if(e.to)return`< ${k(e.to)}`}return e.kind===`after`&&e.from?`> ${k(e.from)}`:e.kind===`before`&&e.to?`< ${k(e.to)}`:e.kind===`specific`&&e.from?k(e.from):``}_getDateSummary(e){let t=lr.find(t=>t.value===e.field),n=t?this.t(t.labelKey,t.label):``,r=[...ur,...dr],i=e.preset?r.find(t=>t.value===e.preset):null,a=i?this.t(i.labelKey,i.label):e.preset||``,o=``;switch(e.kind){case`preset`:o=a;break;case`before`:o=e.to?`< ${k(e.to)}`:a;break;case`after`:o=e.from?`> ${k(e.from)}`:a;break;case`between`:e.from&&e.to?o=`${k(e.from)} – ${k(e.to)}`:e.from?o=`> ${k(e.from)}`:e.to&&(o=`< ${k(e.to)}`);break;case`specific`:o=e.from?k(e.from):``;break;default:o=a}return o?n?`${n}: ${o}`:o:``}_getFilterIcon(e){return(Qn.find(t=>t.key===e)??Zn.find(t=>t.key===e))?.icon||`filter`}_getMetadataLabel(e){let t=zn(e);return this.metadataFields.find(e=>e.key===t)?.label||t}_getMetadataIcon(e){let t=zn(e),n=this.metadataFields.find(e=>e.key===t);return n&&Er[n.type]||`file-text`}_removeFilter(e){this.dispatchEvent(new CustomEvent(`filter-remove`,{detail:{key:e},bubbles:!0,composed:!0}))}_removeMetadataFilter(e){this.dispatchEvent(new CustomEvent(`metadata-filter-remove`,{detail:{fieldKey:e},bubbles:!0,composed:!0}))}_clearAll(){this.dispatchEvent(new CustomEvent(`filters-clear-all`,{bubbles:!0,composed:!0}))}_openFilter(e,t){let n=t.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent(`filter-open`,{detail:{key:e,chipRect:{left:n.left,right:n.right,bottom:n.bottom,width:n.width}},bubbles:!0,composed:!0}))}_openMetadataFilter(e,t){let n=t.currentTarget.getBoundingClientRect();this.dispatchEvent(new CustomEvent(`metadata-filter-open`,{detail:{fieldKey:e,chipRect:{left:n.left,right:n.right,bottom:n.bottom,width:n.width}},bubbles:!0,composed:!0}))}_renderForcedChip(e,t){let{t:n}=this,r=this._getFilterSummary(t,e),i=t.type===`date`;return a`
      <span class="chip forced">
        ${(i||e===C.TYPE||e===C.SIZE)&&r?a`<span class="chip-label">${r}</span>`:a`
              <span class="chip-label"
                >${n(nr[e]??e,tr[e]||e)}</span
              >
              ${r?a`<span class="chip-summary">${r}</span>`:s}
            `}
        <span class="chip-lock">
          <sfx-icon name="lock" .size=${12}></sfx-icon>
        </span>
      </span>
    `}_renderFilterChip(e,t){let{t:n}=this;if(!t)return a`
        <span
          class="chip pinned-empty ${e===this.activeFilter?`active`:``}"
          @click=${t=>this._openFilter(e,t)}
        >
          <span class="chip-icon"
            ><sfx-icon name=${this._getFilterIcon(e)} .size=${16}></sfx-icon
          ></span>
          <span class="chip-label"
            >${n(nr[e]??e,tr[e]||e)}</span
          >
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `;let r=this._getFilterSummary(t,e),i=e===C.DATE||e===C.TYPE||e===C.SIZE;return a`
      <span
        class="chip ${e===this.activeFilter?`active`:``}"
        @click=${t=>this._openFilter(e,t)}
      >
        ${i&&r?a` <span class="chip-icon"
                ><sfx-icon name=${this._getFilterIcon(e)} .size=${16}></sfx-icon
              ></span>
              <span class="chip-label">${r}</span>`:a`
              <span class="chip-label"
                >${n(nr[e]??e,tr[e]||e)}</span
              >
              ${r?a`<span class="chip-summary">${r}</span>`:s}
            `}
        <button
          class="chip-remove"
          @click=${t=>{t.stopPropagation(),this._removeFilter(e)}}
          title=${n(`removeFilter`,`Remove filter`)}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}_renderMetadataChip(e,t){if(!t){let t=this._getMetadataLabel(e),n=this._getMetadataIcon(e);return a`
        <span
          class="chip pinned-empty ${e===this.activeMetadataField?`active`:``}"
          @click=${t=>this._openMetadataFilter(e,t)}
        >
          <span class="chip-icon"><sfx-icon name=${n} .size=${16}></sfx-icon></span>
          <span class="chip-label">${t}</span>
          <span class="chip-chevron"><sfx-icon name="chevron-down" .size=${14}></sfx-icon></span>
        </span>
      `}let n=this._getFilterSummary(t),r=this._getMetadataLabel(e),i=this._getMetadataIcon(e);return a`
      <span
        class="chip ${e===this.activeMetadataField?`active`:``}"
        @click=${t=>this._openMetadataFilter(e,t)}
      >
        <span class="chip-icon"><sfx-icon name=${i} .size=${16}></sfx-icon></span>
        <span class="chip-label">${r}</span>
        ${n?a`<span class="chip-summary">${n}</span>`:s}
        <button
          class="chip-remove"
          @click=${t=>{t.stopPropagation(),this._removeMetadataFilter(e)}}
          title=${this.t(`removeFilter`,`Remove filter`)}
        >
          <sfx-icon name="close" .size=${12}></sfx-icon>
        </button>
      </span>
    `}render(){let e=ni(this.forcedFilters),t=new Set(Object.keys(e)),n=Object.keys(this.appliedFilters).filter(e=>!t.has(e)),r=Object.keys(this.appliedMetadata),i=new Set(this.pinnedFilters),o=new Set(this.pinnedMetadataFields),c=this.pinnedFilters.filter(e=>!t.has(e)),l=n.filter(e=>!i.has(e)),u=r.filter(e=>!o.has(e)),d=this.pendingFilter&&!i.has(this.pendingFilter)&&!(this.pendingFilter in this.appliedFilters),f=this.pendingMetadataField&&!o.has(this.pendingMetadataField)&&!(this.pendingMetadataField in this.appliedMetadata),p=n.length+r.length>0;return t.size+c.length+this.pinnedMetadataFields.length+l.length+u.length+ +!!d+ +!!f===0?s:a`
      <div class="chips-row">
        <div class="chips">
          ${[...t].map(t=>this._renderForcedChip(t,e[t]))}
          ${c.map(e=>this._renderFilterChip(e,this.appliedFilters[e]))}
          ${this.pinnedMetadataFields.map(e=>this._renderMetadataChip(e,this.appliedMetadata[e]))}
          ${l.map(e=>this._renderFilterChip(e,this.appliedFilters[e]))}
          ${d?a`
                <span
                  class="chip pinned-empty active pending"
                  @click=${e=>this._openFilter(this.pendingFilter,e)}
                >
                  <span class="chip-icon"
                    ><sfx-icon
                      name=${this._getFilterIcon(this.pendingFilter)}
                      .size=${16}
                    ></sfx-icon
                  ></span>
                  <span class="chip-label"
                    >${this.t(nr[this.pendingFilter]??this.pendingFilter,tr[this.pendingFilter]||this.pendingFilter)}</span
                  >
                  <span class="chip-chevron"
                    ><sfx-icon name="chevron-down" .size=${14}></sfx-icon
                  ></span>
                </span>
              `:s}
          ${u.map(e=>this._renderMetadataChip(e,this.appliedMetadata[e]))}
          ${f?a`
                <span
                  class="chip pinned-empty active pending"
                  @click=${e=>this._openMetadataFilter(this.pendingMetadataField,e)}
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
              `:s}
          ${p?a`<button class="clear-all" @click=${this._clearAll}>
                ${this.t(`clearFilters`,`Clear filters`)}
              </button>`:s}
        </div>
      </div>
    `}};l([i({type:Object})],z.prototype,`appliedFilters`,void 0),l([i({type:Object})],z.prototype,`appliedMetadata`,void 0),l([i({type:Object})],z.prototype,`forcedFilters`,void 0),l([i({type:Array})],z.prototype,`metadataFields`,void 0),l([i({type:Array})],z.prototype,`pinnedFilters`,void 0),l([i({type:Array})],z.prototype,`pinnedMetadataFields`,void 0),l([i({type:Array})],z.prototype,`tags`,void 0),l([i({type:Array})],z.prototype,`labels`,void 0),l([i({type:Array})],z.prototype,`approverUsers`,void 0),l([i({type:Array})],z.prototype,`requesterUsers`,void 0),l([i()],z.prototype,`activeFilter`,void 0),l([i()],z.prototype,`activeMetadataField`,void 0),l([i()],z.prototype,`pendingFilter`,void 0),l([i()],z.prototype,`pendingMetadataField`,void 0),l([i({attribute:!1})],z.prototype,`t`,void 0),l([i()],z.prototype,`locale`,void 0),z=l([j(`ap-filters-bar`)],z);var ga=6,B=class extends e{constructor(...e){super(...e),this.t=(e,t)=>typeof t==`string`?t:e,this.assets=[],this.folders=[],this.folderPreviews={},this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.gridSize=`normal`,this.showVariants=!1,this.variantOptions=[],this.defaultVariantName=`original`,this.variantOverrides={},this._prevCount=0}static{this.styles=r`
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
  `}willUpdate(e){if(e.has(`assets`)){let t=e.get(`assets`);this._prevCount=t&&this.assets.length>t.length?t.length:0}}render(){let e=this.gridSize===`large`?`280px`:`220px`;return a`
      <div
        class="grid"
        role="list"
        aria-label="Assets"
        ${A({"--sfx-grid-min-col":String(e)})}
      >
        ${this.folders.map((e,t)=>a`
            <ap-folder-card
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              ?disabled=${this.disabledFolderIds.includes(e.uuid)}
              .index=${t}
              data-folder-uuid=${e.uuid}
              @folder-open=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`folder-open`,{detail:e.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`folder-select`,{detail:e.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-card>
          `)}
        ${this.assets.map((e,t)=>{let n=t>=this._prevCount?Math.min(t-this._prevCount,20):Math.min(t,20);return a`
            <ap-asset-card
              .asset=${e}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+t:t}
              ?selected=${this.selectedIds.includes(e.uuid)}
              ?disabled=${this.disabledAssetIds.includes(e.uuid)}
              .multiSelect=${this.multiSelect}
              .showVariants=${this.showVariants}
              .variantOptions=${this.variantOptions}
              .selectedVariantName=${this.variantOverrides[e.uuid]??this.defaultVariantName}
              ${A({"--sfx-stagger-index":String(n)})}
              data-asset-uuid=${e.uuid}
              @asset-select=${e=>this.dispatchEvent(new CustomEvent(`asset-select`,{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${e=>this.dispatchEvent(new CustomEvent(`asset-preview`,{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${e=>this.dispatchEvent(new CustomEvent(`asset-quick-select`,{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-variant-change=${e=>this.dispatchEvent(new CustomEvent(`asset-variant-change`,{detail:e.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-card>
          `})}
        ${this.isLoading?Array.from({length:ga},()=>a`<div class="ghost-card">
                  <div class="ghost-thumb"></div>
                  <div class="ghost-info">
                    <div class="ghost-line ghost-name"></div>
                    <div class="ghost-line ghost-meta"></div>
                  </div>
                </div>`):s}
      </div>
    `}};l([i({attribute:!1})],B.prototype,`t`,void 0),l([i({type:Array})],B.prototype,`assets`,void 0),l([i({type:Array})],B.prototype,`folders`,void 0),l([i({type:Object})],B.prototype,`folderPreviews`,void 0),l([i({type:Array})],B.prototype,`selectedIds`,void 0),l([i({type:Array})],B.prototype,`selectedFolderIds`,void 0),l([i({type:Array})],B.prototype,`disabledAssetIds`,void 0),l([i({type:Array})],B.prototype,`disabledFolderIds`,void 0),l([i({type:Boolean})],B.prototype,`isLoading`,void 0),l([i({type:Boolean})],B.prototype,`multiSelect`,void 0),l([i({type:Boolean})],B.prototype,`folderSelectable`,void 0),l([i({type:String})],B.prototype,`gridSize`,void 0),l([i({type:Boolean})],B.prototype,`showVariants`,void 0),l([i({type:Array})],B.prototype,`variantOptions`,void 0),l([i({type:String})],B.prototype,`defaultVariantName`,void 0),l([i({type:Object})],B.prototype,`variantOverrides`,void 0),B=l([j(`ap-grid-view`)],B);var _a=5,V=class extends e{constructor(...e){super(...e),this.t=(e,t)=>typeof t==`string`?t:e,this.assets=[],this.folders=[],this.selectedIds=[],this.selectedFolderIds=[],this.disabledAssetIds=[],this.disabledFolderIds=[],this.isLoading=!1,this.multiSelect=!0,this.folderSelectable=!1,this.totalCount=0,this.isSelectingAll=!1,this.folderPreviews={},this.showVariants=!1,this.variantOptions=[],this.defaultVariantName=`original`,this.variantOverrides={},this._compactLevel=0}static{this.styles=r`
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
  `}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(e=>{let t=e[0]?.contentRect.width??0,n=t<550?2:+(t<680);n!==this._compactLevel&&(this._compactLevel=n)}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}_getGridColumns(e){let t=[];e&&t.push(`32px`),t.push(`48px`),t.push(`minmax(120px, 1fr)`),t.push(`72px`),this._compactLevel<2&&t.push(`100px`),this._compactLevel<1&&t.push(`120px`);let n=this.showVariants&&this.variantOptions.length>1;return t.push(n?`96px`:`64px`),t.join(` `)}get _allVisibleSelected(){if(this.assets.length===0&&this.folders.length===0||this.selectedIds.length===0&&this.selectedFolderIds.length===0)return!1;let e=new Set(this.selectedIds),t=this.assets.length===0||this.assets.every(t=>e.has(t.uuid));if(!this.folderSelectable)return t&&this.assets.length>0;let n=new Set(this.selectedFolderIds),r=this.folders.length===0||this.folders.every(e=>n.has(e.uuid));return t&&r}_handleHeaderCheckboxClick(){if(this.isSelectingAll)return;let e=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,t=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length;this._allVisibleSelected&&t>=e?this.dispatchEvent(new CustomEvent(`selection-clear`,{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent(`select-all`,{detail:{scope:`all`},bubbles:!0,composed:!0}))}render(){let e=this.folderSelectable?this.totalCount+this.folders.length:this.totalCount,t=this.folderSelectable?this.selectedIds.length+this.selectedFolderIds.length:this.selectedIds.length,n=this._allVisibleSelected&&t>=e;return a`
      <div
        class="list-header"
        ${A({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
        role="row"
        aria-label="Column headers"
      >
        ${this.multiSelect?a`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div
                class="header-check-box ${n?`checked`:t>0?`indeterminate`:``}"
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
            </span>`:s}
        <span></span>
        <span>${this.t(`name`,`Name`)}</span>
        <span>${this.t(`type`,`Type`)}</span>
        ${this._compactLevel<2?a`<span>${this.t(`size`,`Size`)}</span>`:s}
        ${this._compactLevel<1?a`<span>${this.t(`date`,`Date`)}</span>`:s}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map((e,t)=>a`
            <ap-folder-row
              .folder=${e}
              .previews=${this.folderPreviews[e.uuid]||[]}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(e.uuid)}
              ?disabled=${this.disabledFolderIds.includes(e.uuid)}
              .index=${t}
              data-folder-uuid=${e.uuid}
              @folder-open=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`folder-open`,{detail:e.detail,bubbles:!0,composed:!0}))}}
              @folder-select=${e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`folder-select`,{detail:e.detail,bubbles:!0,composed:!0}))}}
            ></ap-folder-row>
          `)}
        ${this.assets.map((e,t)=>a`
            <ap-asset-row
              .asset=${e}
              .t=${this.t}
              .index=${this.folderSelectable?this.folders.length+t:t}
              ?selected=${this.selectedIds.includes(e.uuid)}
              ?disabled=${this.disabledAssetIds.includes(e.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              .showVariants=${this.showVariants}
              .variantOptions=${this.variantOptions}
              .selectedVariantName=${this.variantOverrides[e.uuid]??this.defaultVariantName}
              data-asset-uuid=${e.uuid}
              @asset-select=${e=>this.dispatchEvent(new CustomEvent(`asset-select`,{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-preview=${e=>this.dispatchEvent(new CustomEvent(`asset-preview`,{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-quick-select=${e=>this.dispatchEvent(new CustomEvent(`asset-quick-select`,{detail:e.detail,bubbles:!0,composed:!0}))}
              @asset-variant-change=${e=>this.dispatchEvent(new CustomEvent(`asset-variant-change`,{detail:e.detail,bubbles:!0,composed:!0}))}
            ></ap-asset-row>
          `)}
        ${this.isLoading?Array.from({length:_a},(e,t)=>a`
                <div
                  class="ghost-row"
                  ${A({"grid-template-columns":this._getGridColumns(this.multiSelect)})}
                >
                  ${this.multiSelect?a`<div class="ghost-el ghost-check"></div>`:s}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" ${A({width:[`70%`,`55%`,`80%`,`45%`,`65%`][t]})}></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel<2?a`<div class="ghost-el ghost-size"></div>`:s}
                  ${this._compactLevel<1?a`<div class="ghost-el ghost-date"></div>`:s}
                  <div></div>
                </div>
              `):s}
      </div>
    `}};l([i({attribute:!1})],V.prototype,`t`,void 0),l([i({type:Array})],V.prototype,`assets`,void 0),l([i({type:Array})],V.prototype,`folders`,void 0),l([i({type:Array})],V.prototype,`selectedIds`,void 0),l([i({type:Array})],V.prototype,`selectedFolderIds`,void 0),l([i({type:Array})],V.prototype,`disabledAssetIds`,void 0),l([i({type:Array})],V.prototype,`disabledFolderIds`,void 0),l([i({type:Boolean})],V.prototype,`isLoading`,void 0),l([i({type:Boolean})],V.prototype,`multiSelect`,void 0),l([i({type:Boolean})],V.prototype,`folderSelectable`,void 0),l([i({type:Number})],V.prototype,`totalCount`,void 0),l([i({type:Boolean})],V.prototype,`isSelectingAll`,void 0),l([i({type:Object})],V.prototype,`folderPreviews`,void 0),l([i({type:Boolean})],V.prototype,`showVariants`,void 0),l([i({type:Array})],V.prototype,`variantOptions`,void 0),l([i({type:String})],V.prototype,`defaultVariantName`,void 0),l([i({type:Object})],V.prototype,`variantOverrides`,void 0),l([c()],V.prototype,`_compactLevel`,void 0),V=l([j(`ap-list-view`)],V);function va(e){if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=1024,r=Math.floor(Math.log(e)/Math.log(n));return`${(e/n**r).toFixed(r===0?0:1)} ${t[r]}`}function ya(e){if(!e)return`—`;let t=new Date(e);return isNaN(t.getTime())?`—`:t.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}function ba(e,t){return!e||!t?``:`${e} x ${t}`}function xa(e){return(e?.split(`:`)[0]??``).toUpperCase()}function Sa(e,t,n=33,r=240){let i=Math.min(t*n+8,r),a=window.innerHeight-e.bottom,o=e.top;return a>=i||a>=o?`below`:`above`}function Ca(e,t,n){return r=>{if(!e())return;let i=r.composedPath(),a=t();(!a||!i.includes(a))&&n()}}var H=class extends e{constructor(...e){super(...e),this.t=(e,t)=>typeof t==`string`?t:e,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName=`original`,this._variantMenuOpen=!1,this._variantMenuPos=`above`,this._variantMenuFocusIndex=-1,this._outsideClickHandler=Ca(()=>this._variantMenuOpen,()=>this.shadowRoot?.querySelector(`.variant-trigger-wrap`),()=>this._setVariantMenuOpen(!1))}static{this.styles=r`
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
      border-radius: var(--sfx-radius, 8px) var(--sfx-radius, 8px) 0 0;
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
      padding: 10px 12px 12px;
      border-radius: 0 0 var(--sfx-radius, 8px) var(--sfx-radius, 8px);
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
    /* The file meta (size/dimensions) and the variant control occupy the SAME slot,
       stacked and cross-faded — showing the variant picker only when it's relevant
       (hover / selected) without ever changing the card's height. */
    .info-secondary {
      position: relative;
      /* The .meta inside is absolutely positioned, so this slot needs an explicit height
         in both states. 18px is the meta line box on its own — the height the row had
         before variants existed, so cards without a switcher keep their original size. */
      height: 18px;
      margin-top: 4px;
    }
    /* Taller only when a variant trigger chip shares the slot, so it fits (padding +
       border) without clipping; the meta text centers within the same box. */
    .info-secondary.has-variants {
      height: 28px;
    }
    .meta {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: opacity 100ms;
    }
    .card:hover .info-secondary.has-variants .meta,
    .card:focus-within .info-secondary.has-variants .meta,
    /* Mirrors the control's own force-visible state: with the menu open on an unhovered
       card the control stays up, so the meta underneath must stay down — the trigger has a
       transparent background and the size/dimensions text would read through it. */
    .info-secondary.has-variants.menu-open .meta,
    :host([selected]) .info-secondary.has-variants .meta {
      opacity: 0;
      visibility: hidden;
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
    .variant-control {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 100ms;
    }
    .card:hover .variant-control,
    /* Keyboard users never hover: revealing on focus-within is what puts the trigger in the
       tab order at all (visibility:hidden is unfocusable), so the arrow/Enter/Escape handling
       below is reachable. The card's overlay buttons only fade with opacity, so they stay
       focusable and are what brings focus into the card in the first place. */
    .card:focus-within .variant-control,
    .variant-control.force-visible,
    :host([selected]) .variant-control {
      opacity: 1;
      visibility: visible;
    }
    .variant-control-label {
      flex-shrink: 0;
      font-size: 0.75rem;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .variant-trigger-wrap {
      position: relative;
      flex: 1;
      min-width: 0;
    }
    .variant-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      width: 100%;
      padding: 5px 8px;
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      font-size: 0.75rem;
      font-weight: 500;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      cursor: pointer;
    }
    .variant-trigger:hover {
      border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .variant-trigger:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: 1px;
    }
    .variant-trigger-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .variant-trigger sfx-icon {
      flex-shrink: 0;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .variant-menu {
      position: absolute;
      z-index: 20;
      left: 0;
      right: 0;
      max-height: 240px;
      overflow-y: auto;
      overflow-x: hidden;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.15);
      padding: 4px;
    }
    .variant-menu.above {
      bottom: calc(100% + 6px);
    }
    .variant-menu.below {
      top: calc(100% + 6px);
    }
    .variant-menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 7px 8px;
      border: none;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.8125rem;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      text-align: left;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
    }
    .variant-menu-item span {
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .variant-menu-item:hover,
    .variant-menu-item.focused {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .variant-menu-item:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .variant-menu-item.active {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      font-weight: 600;
    }
    .variant-menu-item .tick {
      width: 14px;
      flex-shrink: 0;
      visibility: hidden;
    }
    .variant-menu-item.active .tick {
      visibility: visible;
    }
    @media (prefers-reduced-motion: reduce) {
      :host {
        animation: none;
      }
      .overlay {
        transition: none;
      }
    }
  `}_setVariantMenuOpen(e){this._variantMenuOpen=e,this.style.zIndex=e?`30`:``,e||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){let e=this.shadowRoot?.querySelectorAll(`.variant-menu-item`);e&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<e.length&&e[this._variantMenuFocusIndex].focus()}_handleTriggerKeydown(e){if((e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`||e.key===` `)&&!this._variantMenuOpen){e.preventDefault();let t=e.currentTarget.getBoundingClientRect();this._variantMenuPos=Sa(t,this.variantOptions.length),this._variantMenuFocusIndex=e.key===`ArrowUp`?this.variantOptions.length-1:Math.max(0,this.variantOptions.findIndex(e=>e.value===this.selectedVariantName)),this._setVariantMenuOpen(!0),this.updateComplete.then(()=>this._focusVariantMenuItem())}}_handleMenuKeydown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case`ArrowUp`:e.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case`Enter`:case` `:{e.preventDefault();let t=this.variantOptions[this._variantMenuFocusIndex];t&&this._selectVariant(e,t.value);break}case`Escape`:e.preventDefault(),e.stopPropagation(),this._setVariantMenuOpen(!1),this.shadowRoot?.querySelector(`.variant-trigger`)?.focus();break;case`Tab`:this._setVariantMenuOpen(!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener(`mousedown`,this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._outsideClickHandler)}_handleSelect(e){if(e.stopPropagation(),e.composedPath().some(e=>e instanceof HTMLElement&&(e.classList.contains(`check`)||e.classList.contains(`check-box`)))){this.dispatchEvent(new CustomEvent(`asset-select`,{detail:{asset:this.asset,index:this.index,event:new MouseEvent(`click`,{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent(`asset-select`,{detail:{asset:this.asset,index:this.index,event:e},bubbles:!0}))}_handlePreview(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`asset-preview`,{detail:{asset:this.asset},bubbles:!0}))}_formatDuration(e){let t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.floor(e%60),i=e=>String(e).padStart(2,`0`);return t>0?`${t}:${i(n)}:${i(r)}`:`${i(n)}:${i(r)}`}_handleQuickSelect(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`asset-quick-select`,{detail:{asset:this.asset},bubbles:!0}))}_toggleVariantMenu(e){if(e.stopPropagation(),!this._variantMenuOpen){let t=e.currentTarget.getBoundingClientRect();this._variantMenuPos=Sa(t,this.variantOptions.length)}this._setVariantMenuOpen(!this._variantMenuOpen)}_selectVariant(e,t){e.stopPropagation(),this._setVariantMenuOpen(!1),this.shadowRoot?.querySelector(`.variant-trigger`)?.focus(),this.dispatchEvent(new CustomEvent(`asset-variant-change`,{detail:{uuid:this.asset.uuid,name:t,asset:this.asset,index:this.index},bubbles:!0}))}render(){let e=this.asset;if(!e)return a``;let t=_n(e.type),n=t===`video`,r=t===`image`,i=e.extension?.toLowerCase()===`pdf`,o=!!(e.info?.thumbnail||e.info?.image_thumbnail||e.info?.preview),c=vn(e.extension||``)||o,l=``;n?l=kn(e):i?l=An(e):c&&(l=On(e,r?this.selectedVariantName:void 0));let u=this.showVariants&&this.variantOptions.length>1&&r,d=f(e.extension||``),p=xn(e.extension||``);return a`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${p&&l?`chess`:``}">
          ${l?a`<img
                src=${l}
                alt=${e.name}
                loading="lazy"
                class="thumb-img ${p?`transparent-asset`:``}"
                @error=${e=>{let t=e.target,n=m();t.src!==d&&t.src!==n?(t.src=d,t.classList.add(`icon-fallback`)):t.src!==n&&(t.src=n)}}
              />`:a`<img
                src=${d}
                alt=${e.name}
                class="thumb-img icon-fallback"
                @error=${e=>{let t=e.target,n=m();t.src!==n&&(t.src=n)}}
              />`}
          ${n&&(e.info?.video_duration??e.info?.duration)!=null?a`<span class="duration"
                >${this._formatDuration(e.info.video_duration??e.info.duration)}</span
              >`:s}
          <div class="overlay">
            <button
              class="overlay-btn"
              @click=${this._handlePreview}
              aria-label=${this.t(`preview`,`Preview`)}
            >
              <sfx-icon name="preview" .size=${16}></sfx-icon>
              ${this.t(`preview`,`Preview`)}
            </button>
            <button
              class="overlay-btn select-btn"
              @click=${this._handleQuickSelect}
              aria-label=${this.t(`select`,`Select`)}
            >
              <sfx-icon name="select" .size=${16}></sfx-icon>
              ${this.t(`select`,`Select`)}
            </button>
          </div>
          ${this.multiSelect?a`
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
              `:s}
        </div>
        <div class="info">
          <div class="name" title=${e.name}>${e.name}</div>
          <div
            class="info-secondary ${u?`has-variants`:``} ${this._variantMenuOpen?`menu-open`:``}"
          >
            <div class="meta">
              ${xa(e.extension)}${(()=>{let t=ba(e.info?.img_w||e.info?.video_w,e.info?.img_h||e.info?.video_h);return t?` · ${t}`:``})()}
              · ${va(e.size?.bytes||0)}
            </div>
            ${u?(()=>{let e=this.variantOptions.find(e=>e.value===this.selectedVariantName)?.label??this.selectedVariantName;return a`
                    <div
                      class="variant-control ${this._variantMenuOpen?`force-visible`:``}"
                      @click=${e=>e.stopPropagation()}
                    >
                      <span class="variant-control-label">${this.t(`insertAs`,`Insert as`)}:</span>
                      <div class="variant-trigger-wrap">
                        <button
                          class="variant-trigger"
                          @click=${this._toggleVariantMenu}
                          @keydown=${this._handleTriggerKeydown}
                          title=${e}
                          aria-label=${this.t(`insertAs`,`Insert as`)}
                          aria-haspopup="listbox"
                          aria-expanded=${this._variantMenuOpen}
                        >
                          <span class="variant-trigger-label">${e}</span>
                          <sfx-icon name="chevron-down" .size=${12}></sfx-icon>
                        </button>
                        ${this._variantMenuOpen?a`
                              <div
                                class="variant-menu ${this._variantMenuPos}"
                                role="listbox"
                                @keydown=${this._handleMenuKeydown}
                              >
                                ${this.variantOptions.map((e,t)=>a`
                                    <button
                                      class="variant-menu-item ${e.value===this.selectedVariantName?`active`:``} ${t===this._variantMenuFocusIndex?`focused`:``}"
                                      role="option"
                                      aria-selected=${e.value===this.selectedVariantName}
                                      @click=${t=>this._selectVariant(t,e.value)}
                                      @mouseenter=${()=>{this._variantMenuFocusIndex=t}}
                                    >
                                      <svg
                                        class="tick"
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
                                      <span>${e.label}</span>
                                    </button>
                                  `)}
                              </div>
                            `:s}
                      </div>
                    </div>
                  `})():s}
          </div>
        </div>
      </div>
    `}};l([i({attribute:!1})],H.prototype,`t`,void 0),l([i({type:Object})],H.prototype,`asset`,void 0),l([i({type:Number})],H.prototype,`index`,void 0),l([i({type:Boolean,reflect:!0})],H.prototype,`selected`,void 0),l([i({type:Boolean,reflect:!0})],H.prototype,`disabled`,void 0),l([i({type:Boolean})],H.prototype,`multiSelect`,void 0),l([i({type:Boolean})],H.prototype,`showVariants`,void 0),l([i({type:Array})],H.prototype,`variantOptions`,void 0),l([i({type:String})],H.prototype,`selectedVariantName`,void 0),l([c()],H.prototype,`_variantMenuOpen`,void 0),l([c()],H.prototype,`_variantMenuPos`,void 0),l([c()],H.prototype,`_variantMenuFocusIndex`,void 0),H=l([j(`ap-asset-card`)],H);var U=class extends e{constructor(...e){super(...e),this.t=(e,t)=>typeof t==`string`?t:e,this.index=0,this.selected=!1,this.disabled=!1,this.multiSelect=!0,this.compactLevel=0,this.showVariants=!1,this.variantOptions=[],this.selectedVariantName=`original`,this._variantMenuOpen=!1,this._variantMenuPos=`above`,this._variantMenuFocusIndex=-1,this._outsideClickHandler=Ca(()=>this._variantMenuOpen,()=>this.shadowRoot?.querySelector(`.variant-control-wrap`),()=>this._setVariantMenuOpen(!1))}static{this.styles=r`
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
    .row:hover .actions,
    .actions.force-visible,
    :host([selected]) .actions {
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
    .variant-control-wrap {
      position: relative;
    }
    .icon-btn.variant-btn[aria-expanded='true'] {
      background: var(--sfx-background, oklch(1 0 0));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .variant-menu {
      position: absolute;
      z-index: 20;
      right: 0;
      min-width: 200px;
      max-width: 260px;
      max-height: 240px;
      overflow-y: auto;
      overflow-x: hidden;
      background: var(--sfx-card, oklch(1 0 0));
      border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--sfx-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.15);
      padding: 4px;
    }
    .variant-menu.above {
      bottom: calc(100% + 6px);
    }
    .variant-menu.below {
      top: calc(100% + 6px);
    }
    .variant-menu-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 7px 8px;
      border: none;
      border-radius: var(--sfx-radius-sm, 6px);
      background: none;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-size: 0.8125rem;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      text-align: left;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
    }
    .variant-menu-item span {
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .variant-menu-item:hover,
    .variant-menu-item.focused {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
    }
    .variant-menu-item:focus-visible {
      outline: 2px solid var(--sfx-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .variant-menu-item.active {
      color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      font-weight: 600;
    }
    .variant-menu-item .tick {
      width: 14px;
      flex-shrink: 0;
      visibility: hidden;
    }
    .variant-menu-item.active .tick {
      visibility: visible;
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
  `}_setVariantMenuOpen(e){this._variantMenuOpen=e,this.style.zIndex=e?`30`:``,e||(this._variantMenuFocusIndex=-1)}_focusVariantMenuItem(){let e=this.shadowRoot?.querySelectorAll(`.variant-menu-item`);e&&this._variantMenuFocusIndex>=0&&this._variantMenuFocusIndex<e.length&&e[this._variantMenuFocusIndex].focus()}connectedCallback(){super.connectedCallback(),document.addEventListener(`mousedown`,this._outsideClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._outsideClickHandler)}_toggleVariantMenu(e){if(e.stopPropagation(),!this._variantMenuOpen){let t=e.currentTarget.getBoundingClientRect();this._variantMenuPos=Sa(t,this.variantOptions.length),this._variantMenuFocusIndex=Math.max(0,this.variantOptions.findIndex(e=>e.value===this.selectedVariantName))}this._setVariantMenuOpen(!this._variantMenuOpen)}_handleVariantTriggerKeydown(e){!this._variantMenuOpen&&(e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._toggleVariantMenu(e),this.updateComplete.then(()=>this._focusVariantMenuItem()))}_handleVariantMenuKeydown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex+1)%this.variantOptions.length,this._focusVariantMenuItem();break;case`ArrowUp`:e.preventDefault(),this._variantMenuFocusIndex=(this._variantMenuFocusIndex-1+this.variantOptions.length)%this.variantOptions.length,this._focusVariantMenuItem();break;case`Enter`:case` `:{e.preventDefault();let t=this.variantOptions[this._variantMenuFocusIndex];t&&this._selectVariant(e,t.value);break}case`Escape`:e.preventDefault(),e.stopPropagation(),this._setVariantMenuOpen(!1),this.shadowRoot?.querySelector(`.variant-btn`)?.focus();break;case`Tab`:this._setVariantMenuOpen(!1)}}_selectVariant(e,t){e.stopPropagation(),this._setVariantMenuOpen(!1),this.shadowRoot?.querySelector(`.variant-btn`)?.focus(),this.dispatchEvent(new CustomEvent(`asset-variant-change`,{detail:{uuid:this.asset.uuid,name:t,asset:this.asset,index:this.index},bubbles:!0}))}get _isImageAsset(){return _n(this.asset?.type??``)===`image`}_getGridColumns(){let e=[];this.multiSelect&&e.push(`32px`),e.push(`48px`),e.push(`minmax(120px, 1fr)`),e.push(`72px`),this.compactLevel<2&&e.push(`100px`),this.compactLevel<1&&e.push(`120px`);let t=this.showVariants&&this.variantOptions.length>1;return e.push(t?`96px`:`64px`),e.join(` `)}_handleSelect(e){if(e.composedPath().some(e=>e instanceof HTMLElement&&(e.classList.contains(`check`)||e.classList.contains(`check-box`)))){this.dispatchEvent(new CustomEvent(`asset-select`,{detail:{asset:this.asset,index:this.index,event:new MouseEvent(`click`,{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0}));return}this.dispatchEvent(new CustomEvent(`asset-select`,{detail:{asset:this.asset,index:this.index,event:e},bubbles:!0}))}_handlePreview(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`asset-preview`,{detail:{asset:this.asset},bubbles:!0}))}_handleQuickSelect(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`asset-quick-select`,{detail:{asset:this.asset},bubbles:!0}))}render(){let e=this.asset;if(!e)return a``;let t=_n(e.type)===`video`,n=e.extension?.toLowerCase()===`pdf`,r=!!(e.info?.thumbnail||e.info?.image_thumbnail||e.info?.preview),i=vn(e.extension||``)||r,o=``;t?o=kn(e):n?o=An(e):i&&(o=On(e,this._isImageAsset?this.selectedVariantName:void 0));let c=f(e.extension||``),l=xn(e.extension||``);return a`
      <div
        class="row"
        ${A({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleSelect}
      >
        ${this.multiSelect?a`
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
            `:s}
        <div class="thumb ${l&&o?`chess`:``}">
          ${o?a`<img
                src=${o}
                alt=${e.name}
                class="${l?`transparent-asset`:``}"
                loading="lazy"
                @error=${e=>{let t=e.target,n=m();t.src!==c&&t.src!==n?(t.src=c,t.classList.add(`icon-fallback`)):t.src!==n&&(t.src=n)}}
              />`:a`<img
                src=${c}
                alt=${e.name}
                class="icon-fallback"
                @error=${e=>{let t=e.target,n=m();t.src!==n&&(t.src=n)}}
              />`}
        </div>
        <div class="name" title=${e.name}>${e.name}</div>
        <div class="type">${xa(e.extension)}</div>
        ${this.compactLevel<2?a`<div class="desc">${va(e.size?.bytes||0)}</div>`:s}
        ${this.compactLevel<1?a`<div class="date">${ya(e.created_at||``)}</div>`:s}
        <div class="actions ${this._variantMenuOpen?`force-visible`:``}">
          <button
            class="icon-btn select-btn"
            @click=${this._handleQuickSelect}
            aria-label=${this.t(`select`,`Select`)}
            title=${this.t(`select`,`Select`)}
          >
            <sfx-icon name="select" .size=${16}></sfx-icon>
          </button>
          <button
            class="icon-btn"
            @click=${this._handlePreview}
            aria-label=${this.t(`preview`,`Preview`)}
            title=${this.t(`preview`,`Preview`)}
          >
            <sfx-icon name="preview" .size=${16}></sfx-icon>
          </button>
          ${this.showVariants&&this.variantOptions.length>1&&this._isImageAsset?(()=>{let e=this.variantOptions.find(e=>e.value===this.selectedVariantName)?.label??this.selectedVariantName;return a`
                  <div class="variant-control-wrap">
                    <button
                      class="icon-btn variant-btn"
                      @click=${this._toggleVariantMenu}
                      @keydown=${this._handleVariantTriggerKeydown}
                      aria-label=${`${this.t(`insertAs`,`Insert as`)}: ${e}`}
                      title=${`${this.t(`insertAs`,`Insert as`)}: ${e}`}
                      aria-haspopup="listbox"
                      aria-expanded=${this._variantMenuOpen}
                    >
                      <sfx-icon name="component" .size=${16}></sfx-icon>
                    </button>
                    ${this._variantMenuOpen?a`
                          <div
                            class="variant-menu ${this._variantMenuPos}"
                            role="listbox"
                            @keydown=${this._handleVariantMenuKeydown}
                            @click=${e=>e.stopPropagation()}
                          >
                            ${this.variantOptions.map((e,t)=>a`
                                <button
                                  class="variant-menu-item ${e.value===this.selectedVariantName?`active`:``} ${t===this._variantMenuFocusIndex?`focused`:``}"
                                  role="option"
                                  aria-selected=${e.value===this.selectedVariantName}
                                  @click=${t=>this._selectVariant(t,e.value)}
                                  @mouseenter=${()=>{this._variantMenuFocusIndex=t}}
                                >
                                  <svg
                                    class="tick"
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
                                  <span>${e.label}</span>
                                </button>
                              `)}
                          </div>
                        `:s}
                  </div>
                `})():s}
        </div>
      </div>
    `}};l([i({attribute:!1})],U.prototype,`t`,void 0),l([i({type:Object})],U.prototype,`asset`,void 0),l([i({type:Number})],U.prototype,`index`,void 0),l([i({type:Boolean,reflect:!0})],U.prototype,`selected`,void 0),l([i({type:Boolean,reflect:!0})],U.prototype,`disabled`,void 0),l([i({type:Boolean})],U.prototype,`multiSelect`,void 0),l([i({type:Number})],U.prototype,`compactLevel`,void 0),l([i({type:Boolean})],U.prototype,`showVariants`,void 0),l([i({type:Array})],U.prototype,`variantOptions`,void 0),l([i({type:String})],U.prototype,`selectedVariantName`,void 0),l([c()],U.prototype,`_variantMenuOpen`,void 0),l([c()],U.prototype,`_variantMenuPos`,void 0),l([c()],U.prototype,`_variantMenuFocusIndex`,void 0),U=l([j(`ap-asset-row`)],U);var wa=class extends e{constructor(...e){super(...e),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0}static{this.styles=[M,r`
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
    `]}_handleClick(e){if(!this.selectable){this._handleOpen();return}if(e.composedPath().some(e=>e instanceof HTMLElement&&(e.classList.contains(`check`)||e.classList.contains(`check-box`)))){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`folder-select`,{detail:{folder:this.folder,index:this.index,event:new MouseEvent(`click`,{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent(`folder-open`,{detail:{folder:this.folder},bubbles:!0,composed:!0}))}_getPreviewUrl(e){return Pn(e,`200`)}_renderPreviewImg(e){let t=Cn(e.file_type),n=this._getPreviewUrl(e),r=f(yn(e.file_type)),i=m();return a`<div class="preview-slot ${t?`icon-bg`:``}">
      <img
        class="preview-img ${t?`icon-mode`:``}"
        src="${n||r}"
        alt=""
        loading="lazy"
        @error=${e=>{let t=e.target,n=t.parentElement;t.src!==r&&t.src!==i?(t.src=r,t.classList.add(`icon-mode`),n?.classList.add(`icon-bg`)):t.src!==i&&(t.src=i,t.classList.add(`icon-mode`),n?.classList.add(`icon-bg`))}}
        @load=${e=>{let t=e.target,n=t.parentElement;t.src.includes(`assets/file-types`)&&(t.classList.add(`icon-mode`),n?.classList.add(`icon-bg`))}}
      />
    </div>`}_renderPreviews(){if(this.previews.length===0)return a`<div class="empty-preview"><sfx-icon name="inbox" .size=${64}></sfx-icon></div>`;let e=this.previews.slice(0,3);return e.length===1?a`<div class="preview-left">${this._renderPreviewImg(e[0])}</div>`:a`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(e[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(e[1])}</div>
          ${e[2]?a`<div class="preview-right-item">${this._renderPreviewImg(e[2])}</div>`:s}
        </div>
      </div>
    `}render(){let e=this.folder;if(!e)return a``;let t=e.count?.files_direct??0,n=(e.count?.files_recursive??0)-t;return a`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
            rx="3"
            ry="3"
          />
        </svg>
        ${this.selectable&&this.multiSelect?a`
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
            `:s}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${e.name}>${e.name}</div>
            <div class="counts">
              <span>${t} asset${t===1?``:`s`}</span>
              ${n>0?a`<span>${n} sub-asset${n===1?``:`s`}</span>`:s}
            </div>
          </div>
        </div>
      </div>
    `}};l([i({type:Object})],wa.prototype,`folder`,void 0),l([i({type:Array})],wa.prototype,`previews`,void 0),l([i({type:Boolean,reflect:!0})],wa.prototype,`selected`,void 0),l([i({type:Boolean,reflect:!0})],wa.prototype,`disabled`,void 0),l([i({type:Boolean})],wa.prototype,`selectable`,void 0),l([i({type:Boolean})],wa.prototype,`multiSelect`,void 0),l([i({type:Number})],wa.prototype,`index`,void 0),wa=l([j(`ap-folder-card`)],wa);var W=class extends e{constructor(...e){super(...e),this.previews=[],this.selected=!1,this.disabled=!1,this.selectable=!1,this.multiSelect=!0,this.index=0,this.compactLevel=0}static{this.styles=r`
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
  `}_getGridColumns(){let e=[];return this.multiSelect&&e.push(`32px`),e.push(`48px`),e.push(`minmax(120px, 1fr)`),e.push(`72px`),this.compactLevel<2&&e.push(`100px`),this.compactLevel<1&&e.push(`120px`),e.push(`64px`),e.join(` `)}_renderPreviewImg(e){let t=Cn(e.file_type),n=Pn(e,`80`),r=f(yn(e.file_type)),i=m();return a`<div class="preview-slot ${t?`icon-bg`:``}">
      <img
        class="preview-img ${t?`icon-mode`:``}"
        src="${n||r}"
        alt=""
        loading="lazy"
        @error=${e=>{let t=e.target,n=t.parentElement;t.src!==r&&t.src!==i?(t.src=r,t.classList.add(`icon-mode`),n?.classList.add(`icon-bg`)):t.src!==i&&(t.src=i,t.classList.add(`icon-mode`),n?.classList.add(`icon-bg`))}}
      />
    </div>`}_renderThumb(){let e=a`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
        />
      </svg>
    `,t=this.previews.slice(0,2);return a`
      ${e}
      <div class="preview-area">
        ${t.length>0?t.map(e=>this._renderPreviewImg(e)):a`<div class="empty-preview">
              <sfx-icon name="inbox" .size=${14}></sfx-icon>
            </div>`}
      </div>
    `}_handleClick(e){if(!this.selectable){this._handleOpen();return}if(e.composedPath().some(e=>e instanceof HTMLElement&&(e.classList.contains(`check`)||e.classList.contains(`check-box`)))){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`folder-select`,{detail:{folder:this.folder,index:this.index,event:new MouseEvent(`click`,{ctrlKey:!0,metaKey:!0,shiftKey:e.shiftKey})},bubbles:!0,composed:!0}));return}this._handleOpen()}_handleOpen(){this.dispatchEvent(new CustomEvent(`folder-open`,{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){let e=this.folder;return e?a`
      <div
        class="row"
        ${A({"grid-template-columns":this._getGridColumns()})}
        @click=${this._handleClick}
      >
        ${this.multiSelect?this.selectable?a` <div class="check">
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
              </div>`:a`<div></div>`:s}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${e.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel<2?a`<div class="meta">
              ${e.count?.files_recursive??e.count?.files_direct??0} items
            </div>`:s}
        ${this.compactLevel<1?a`<div class="meta">${ya(e.modified_at||e.updated_at||``)}</div>`:s}
        <div></div>
      </div>
    `:a``}};l([i({type:Object})],W.prototype,`folder`,void 0),l([i({type:Array})],W.prototype,`previews`,void 0),l([i({type:Boolean,reflect:!0})],W.prototype,`selected`,void 0),l([i({type:Boolean,reflect:!0})],W.prototype,`disabled`,void 0),l([i({type:Boolean})],W.prototype,`selectable`,void 0),l([i({type:Boolean})],W.prototype,`multiSelect`,void 0),l([i({type:Number})],W.prototype,`index`,void 0),l([i({type:Number})],W.prototype,`compactLevel`,void 0),W=l([j(`ap-folder-row`)],W);var Ta=class extends e{constructor(...e){super(...e),this.index=0}static{this.styles=[M,r`
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
    `]}_handleClick(){this.dispatchEvent(new CustomEvent(`label-open`,{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){let e=this.label;if(!e)return a``;let t=e.assets_count??0,n=e.color||`#94a3b8`;return a`
      <div class="card" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${A({background:`color-mix(in srgb, ${n} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${18} ${A({color:n})}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${e.name}>${e.name}</div>
          <div class="count">${t} asset${t===1?``:`s`}</div>
        </div>
      </div>
    `}};l([i({type:Object})],Ta.prototype,`label`,void 0),l([i({type:Number})],Ta.prototype,`index`,void 0),Ta=l([j(`ap-label-card`)],Ta);var Ea=class extends e{constructor(...e){super(...e),this.index=0}static{this.styles=r`
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
  `}_handleClick(){this.dispatchEvent(new CustomEvent(`label-open`,{detail:{label:this.label},bubbles:!0,composed:!0}))}render(){let e=this.label;if(!e)return a``;let t=e.assets_count??0,n=e.color||`#94a3b8`;return a`
      <div class="row" @click=${this._handleClick}>
        <div
          class="icon-wrapper"
          ${A({background:`color-mix(in srgb, ${n} 10%, transparent)`})}
        >
          <sfx-icon name="tag" .size=${16} ${A({color:n})}></sfx-icon>
        </div>
        <div class="name" title=${e.name}>${e.name}</div>
        <div class="count">${t} asset${t===1?``:`s`}</div>
      </div>
    `}};l([i({type:Object})],Ea.prototype,`label`,void 0),l([i({type:Number})],Ea.prototype,`index`,void 0),Ea=l([j(`ap-label-row`)],Ea);var Da=class extends e{constructor(...e){super(...e),this.index=0}static{this.styles=[M,r`
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
    `]}connectedCallback(){super.connectedCallback(),this.style.setProperty(`--sfx-stagger-index`,String(this.index))}updated(e){e.has(`index`)&&this.style.setProperty(`--sfx-stagger-index`,String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent(`collection-open`,{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){let e=this.collection;return e?a`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="layout-grid" .size=${22}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${e.title}>${e.title}</div>
        </div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:a``}};l([i({type:Object})],Da.prototype,`collection`,void 0),l([i({type:Number})],Da.prototype,`index`,void 0),Da=l([j(`ap-collection-card`)],Da);var Oa=class extends e{constructor(...e){super(...e),this.index=0}static{this.styles=r`
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
  `}_formatDate(e){if(!e)return``;try{return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`,year:`numeric`})}catch{return``}}_handleClick(){this.dispatchEvent(new CustomEvent(`collection-open`,{detail:{collection:this.collection},bubbles:!0,composed:!0}))}render(){let e=this.collection;return e?a`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="layout-grid" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${e.title}>${e.title}</div>
        <div class="date">${this._formatDate(e.updated_at)}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:a``}};l([i({type:Object})],Oa.prototype,`collection`,void 0),l([i({type:Number})],Oa.prototype,`index`,void 0),Oa=l([j(`ap-collection-row`)],Oa);var ka=class extends e{constructor(...e){super(...e),this.index=0}static{this.styles=[M,r`
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
    `]}connectedCallback(){super.connectedCallback(),this.style.setProperty(`--sfx-stagger-index`,String(this.index))}updated(e){e.has(`index`)&&this.style.setProperty(`--sfx-stagger-index`,String(this.index))}_handleClick(){this.dispatchEvent(new CustomEvent(`collection-folder-open`,{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){let e=this.folder;return e?a`
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${22}></sfx-icon>
        </div>
        <div class="info">
          <div class="name" title=${e.name}>${e.name}</div>
        </div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:a``}};l([i({type:Object})],ka.prototype,`folder`,void 0),l([i({type:Number})],ka.prototype,`index`,void 0),ka=l([j(`ap-collection-folder-card`)],ka);var Aa=class extends e{constructor(...e){super(...e),this.index=0}static{this.styles=r`
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
  `}_handleClick(){this.dispatchEvent(new CustomEvent(`collection-folder-open`,{detail:{folder:this.folder},bubbles:!0,composed:!0}))}render(){let e=this.folder;return e?a`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper">
          <sfx-icon name="folder" .size=${16}></sfx-icon>
        </div>
        <div class="name" title=${e.name}>${e.name}</div>
        <div class="chevron">
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </div>
      </div>
    `:a``}};l([i({type:Object})],Aa.prototype,`folder`,void 0),l([i({type:Number})],Aa.prototype,`index`,void 0),Aa=l([j(`ap-collection-folder-row`)],Aa);var ja=class extends e{constructor(...e){super(...e),this.t=(e,t)=>typeof t==`string`?t:e,this.variant=`grid`,this.gridSize=`normal`,this.multiSelect=!0,this.folderCount=0}static{this.styles=r`
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
  `}render(){if(this.variant===`grid`){let e=this.gridSize===`large`?`280px`:`220px`;return a`
        <div class="grid-skeleton" ${A({"--sfx-grid-min-col":String(e)})}>
          ${Array.from({length:18},()=>a`<div class="card-skel">
                <div class="skeleton card-skel-thumb"></div>
                <div class="card-skel-info">
                  <div class="skeleton card-skel-name"></div>
                  <div class="skeleton card-skel-meta"></div>
                </div>
              </div>`)}
        </div>
      `}let e=[];this.multiSelect&&e.push(`32px`),e.push(`48px`,`minmax(120px, 1fr)`,`72px`,`100px`,`120px`,`36px`);let t=e.join(` `),n=a`
      <div class="row-skel" ${A({"grid-template-columns":t})}>
        ${this.multiSelect?a`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:``}
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
    `,r=e=>a`
      <div class="row-skel" ${A({"grid-template-columns":t})}>
        ${this.multiSelect?a`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>`:``}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" ${A({width:e})}></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `,i=[`70%`,`55%`,`80%`,`45%`,`65%`,`50%`,`75%`,`60%`,`85%`,`40%`,`72%`,`58%`],o=12-this.folderCount;return a`
      <div class="list-header" ${A({"grid-template-columns":t})}>
        ${this.multiSelect?a`<div class="header-check-wrap"><div class="header-check-box"></div></div>`:``}
        <span></span>
        <span>${this.t(`name`,`Name`)}</span>
        <span>${this.t(`type`,`Type`)}</span>
        <span>${this.t(`size`,`Size`)}</span>
        <span>${this.t(`date`,`Date`)}</span>
        <span></span>
      </div>
      ${Array.from({length:this.folderCount},()=>n)}
      ${Array.from({length:o},(e,t)=>r(i[t%i.length]))}
    `}};l([i({attribute:!1})],ja.prototype,`t`,void 0),l([i({reflect:!0})],ja.prototype,`variant`,void 0),l([i({type:String})],ja.prototype,`gridSize`,void 0),l([i({type:Boolean})],ja.prototype,`multiSelect`,void 0),l([i({type:Number})],ja.prototype,`folderCount`,void 0),ja=l([j(`ap-skeleton`)],ja);var Ma=`modulepreload`,Na=function(e){return`/asset-picker/`+e},Pa={},G=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Na(t,n),t=s(t),t in Pa)return;Pa[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ma,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},K=class extends e{constructor(...e){super(...e),this.asset=null,this.assets=[],this.selectedIds=[],this.containerToken=``,this.showMetadata=!0,this.metadataFields=[],this.labels=[],this.regionalFilters={},this.multiSelect=!0,this.selectedVariantName=`original`,this.t=(e,t)=>typeof t==`string`?t:e,this._isFullscreen=!1,this._fsImageLoaded=!1,this._previewLoading=!1,this._openSections=new Set([`file-info`,`metadata`]),this._hls=null}static{this.styles=r`
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
  `}connectedCallback(){super.connectedCallback(),this._onFullscreenChange=this._onFullscreenChange.bind(this),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener(`fullscreenchange`,this._onFullscreenChange),document.addEventListener(`keydown`,this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`fullscreenchange`,this._onFullscreenChange),document.removeEventListener(`keydown`,this._onKeyDown),this._destroyHls()}_onKeyDown(e){if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;let t=e.composedPath()[0];if(!t)return;let n=t.tagName;n!==`INPUT`&&n!==`TEXTAREA`&&n!==`SELECT`&&t.getAttribute(`role`)!==`radio`&&t.getAttribute(`role`)!==`listbox`&&(t.isContentEditable||(e.preventDefault(),e.key===`ArrowLeft`?this._prev():this._next()))}_destroyHls(){this._hls&&=(this._hls.destroy(),null)}updated(e){if(super.updated(e),e.has(`asset`)&&(this._destroyHls(),this._previewLoading=!0,this.asset)){let e=_n(this.asset.type);e===`video`&&this._setupHls(this.asset),e!==`image`&&e!==`video`&&(this._previewLoading=!1)}}async _setupHls(e){let t=sn(e);if(!t||(await this.updateComplete,this.asset?.uuid!==e.uuid))return;let n=this._videoEl;if(n){if(n.canPlayType(`application/vnd.apple.mpegurl`)){n.src=t;return}try{let{default:r}=await G(async()=>{let{default:e}=await import(`./hls.light-Ct6oY_Cz.js`);return{default:e}},[]);if(!r.isSupported()||this.asset?.uuid!==e.uuid||!this.isConnected)return;let i=new r;this._hls=i,i.loadSource(t),i.attachMedia(n),i.on(r.Events.ERROR,(t,r)=>{r.fatal&&(this._destroyHls(),n.src=e.url?.cdn||``)})}catch{}}}_onFullscreenChange(){this._isFullscreen=!!document.fullscreenElement,this._isFullscreen&&(this._fsImageLoaded=!1)}_close(){this.dispatchEvent(new CustomEvent(`preview-close`,{bubbles:!0,composed:!0}))}_exitFullscreen(){document.exitFullscreen?.()}_fullscreen(){if(this.asset?.extension?.toLowerCase()===`pdf`&&this.asset?.url?.cdn){window.open(this.asset.url.cdn,`_blank`,`noopener`);return}this._fsImageLoaded=!1,this.previewArea?.requestFullscreen?.()}_select(){if(!this.asset)return;if(!this.multiSelect){this.dispatchEvent(new CustomEvent(`asset-quick-select`,{detail:{asset:this.asset},bubbles:!0,composed:!0}));return}let e=this._getCurrentIndex();this.dispatchEvent(new CustomEvent(`asset-select`,{detail:{asset:this.asset,index:e,event:new MouseEvent(`click`,{ctrlKey:!0,metaKey:!0})},bubbles:!0,composed:!0}))}_getCurrentIndex(){return!this.asset||this.assets.length===0?-1:this.assets.findIndex(e=>e.uuid===this.asset.uuid)}_navigateTo(e){this._fsImageLoaded=!1,this.dispatchEvent(new CustomEvent(`preview-navigate`,{detail:{asset:e},bubbles:!0,composed:!0}))}_supportsFullscreen(e){let t=_n(e.type);return t===`image`||t===`video`||t===`audio`}_findNavTarget(e,t){let n=t===1?this.assets.length:-1;for(let r=e+t;r!==n;r+=t)if(!this._isFullscreen||this._supportsFullscreen(this.assets[r]))return r;return-1}_prev(){let e=this._getCurrentIndex();if(e<=0)return;let t=this._findNavTarget(e,-1);t>=0&&this._navigateTo(this.assets[t])}_next(){let e=this._getCurrentIndex();if(e<0||e>=this.assets.length-1)return;let t=this._findNavTarget(e,1);t>=0&&this._navigateTo(this.assets[t])}_getFullscreenImageUrl(e){let t=e.url?.cdn;if(!t)return On(e,this.selectedVariantName)||``;let n={source:`asset`,asset:e};if(e.extension?.toLowerCase()===`svg`)return S(t,n);if(this.selectedVariantName&&this.selectedVariantName!==`original`){let t=En(e,this.selectedVariantName);if(t)return S(t,n)}return S(jn(Nn(t,this.containerToken),{w:String(window.screen.width),dpr:String(window.devicePixelRatio||1),org_if_sml:`1`}),n)}_getBlurDimensions(e){let t=e.info?.img_w,n=e.info?.img_h;if(!t||!n)return{width:`100vw`,height:`100vh`};let r=window.innerWidth,i=window.innerHeight,a=Math.min(r/t,i/n,1);return{width:`${Math.round(t*a)}px`,height:`${Math.round(n*a)}px`}}_onFsImageLoad(){this._fsImageLoaded=!0}_getTagEntries(e){if(!e)return[];if(Array.isArray(e))return this._parseTagArray(e);let t=Object.values(e);if(t.length>0&&Array.isArray(t[0])){let e=t.flat(),n=new Set;return e.filter(e=>!e.label||n.has(e.sid)?!1:(n.add(e.sid),!0))}return t.map(e=>({label:e.label,sid:e.sid})).filter(e=>e.label)}_parseTagArray(e){return e.map(e=>{if(typeof e==`string`)return{label:e,sid:e};let t=e;return{label:t.label||Object.values(t.names||{})[0]||``,sid:t.sid||``}}).filter(e=>e.label)}_applyTagFilter(e){this.dispatchEvent(new CustomEvent(`filter-update`,{detail:{key:C.TAGS,values:[e],operator:T.IS},bubbles:!0,composed:!0}))}_applyLabelFilter(e){this.dispatchEvent(new CustomEvent(`filter-update`,{detail:{key:C.LABELS,values:[e],operator:T.IS},bubbles:!0,composed:!0}))}_toggleSection(e){let t=new Set(this._openSections);t.has(e)?t.delete(e):t.add(e),this._openSections=t}_renderFileInfoSection(e){let t=this._getFileInfoRows(e);if(t.length===0)return s;let n=this._openSections.has(`file-info`);return a`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${n?`true`:`false`}
          @click=${()=>this._toggleSection(`file-info`)}
        >
          <span>${this.t(`fileInfo`,`File info`)}</span>
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
        <div class="accordion-content ${n?`open`:``}">
          ${t.map(e=>a`
              <div class="meta-row">
                <span class="meta-label" title=${e.label}>${e.label}</span>
                <span class="meta-value" title=${e.value}>${e.value}</span>
              </div>
            `)}
          ${this._renderTagsRow(e)} ${this._renderLabelsRow(e)}
        </div>
      </div>
    `}_renderAccordion(e,t,n){if(n.length===0)return s;let r=this._openSections.has(e);return a`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${r?`true`:`false`}
          @click=${()=>this._toggleSection(e)}
        >
          <span>${t}</span>
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
        <div class="accordion-content ${r?`open`:``}">
          ${n.map(e=>a`
              <div class="meta-row">
                <span class="meta-label" title=${e.label}>${e.label}</span>
                <span class="meta-value" title=${e.value}>${e.value}</span>
              </div>
            `)}
        </div>
      </div>
    `}_getFileInfoRows(e){let t=[];return t.push({label:this.t(`fileName`,`File name`),value:e.name}),e.extension&&t.push({label:this.t(`fileType`,`Type`),value:xa(e.extension)}),e.size?.bytes&&t.push({label:this.t(`fileSize`,`Size`),value:va(e.size.bytes)}),e.info?.img_w&&t.push({label:this.t(`dimensions`,`Dimensions`),value:ba(e.info.img_w,e.info.img_h)}),e.info?.video_w&&t.push({label:this.t(`videoResolution`,`Video resolution`),value:`${e.info.video_w} x ${e.info.video_h}`}),(e.info?.video_duration??e.info?.duration)!=null&&t.push({label:this.t(`duration`,`Duration`),value:`${Math.round(e.info.video_duration??e.info.duration)}s`}),e.info?.color_space&&t.push({label:this.t(`colorSpace`,`Color space`),value:e.info.color_space}),e.created_at&&t.push({label:this.t(`created`,`Created`),value:ya(e.created_at)}),e.modified_at&&t.push({label:this.t(`modified`,`Modified`),value:ya(e.modified_at)}),t}_buildFieldMap(){let e=new Map;for(let t of this.metadataFields)e.set(t.key,t),t.ckey&&e.set(t.ckey,t),t.slug&&e.set(t.slug,t);return e}_resolveSlug(e,t){return!t.possible_values?.length||!e.startsWith(`@`)?e:t.possible_values.find(t=>t.internal_unique_value===e||t.api_value===e)?.label??e}_resolveFieldValue(e,t){if(e==null||e===``)return``;if(t.regionalVariantsGroupUuid&&typeof e==`object`&&e&&!Array.isArray(e)){let n=this.regionalFilters[t.regionalVariantsGroupUuid];if(n){let r=e[n];if(r!=null&&r!==``)return this._resolveFieldValue(r,{...t,regionalVariantsGroupUuid:void 0})}return``}if(t.possible_values?.length)return Array.isArray(e)?e.map(e=>this._resolveSlug(String(e),t)).filter(Boolean).join(`, `):this._resolveSlug(String(e),t);if(Array.isArray(e))return e.join(`, `);if(typeof e==`object`){let t=JSON.stringify(e);return t===`{}`||t===`[]`?``:t}return String(e)}_getAllMetadataRows(e){let t=[],n=this._buildFieldMap(),r=new Set;if(this.metadataFields.length>0){let n=e;for(let i of this.metadataFields){let a=n[i.key]??e.info?.metadata?.[i.key]??e.meta?.[i.key],o=this._resolveFieldValue(a,i);if(!o)continue;r.add(i.key),i.slug&&r.add(i.slug);let s=o.length>50;t.push({label:i.label,value:o,wrap:s})}}if(e.meta)for(let[i,a]of Object.entries(e.meta)){if(r.has(i)||a==null||a===``)continue;let e=n.get(i);if(e){let n=this._resolveFieldValue(a,e);if(!n)continue;r.add(i);let o=n.length>50;t.push({label:e.label,value:n,wrap:o})}else{let e=typeof a==`object`?JSON.stringify(a):String(a);if(!e||e===`{}`||e===`[]`)continue;r.add(i);let n=di(i,i.charAt(0).toUpperCase()+i.slice(1).replace(/_/g,` `),this.t),o=e.length>50;t.push({label:n,value:e,wrap:o})}}let i=e.info?.metadata;if(i&&typeof i==`object`)for(let[e,a]of Object.entries(i)){if(r.has(e)||a==null||a===``)continue;let i=n.get(e);if(i){let n=this._resolveFieldValue(a,i);if(!n)continue;r.add(e);let o=n.length>50;t.push({label:i.label,value:n,wrap:o})}else{let n=typeof a==`object`?JSON.stringify(a):String(a);if(!n||n===`{}`||n===`[]`)continue;r.add(e);let i=di(e,e.charAt(0).toUpperCase()+e.slice(1).replace(/_/g,` `),this.t),o=n.length>50;t.push({label:i,value:n,wrap:o})}}return t}_getAssetLabels(e){return!e.labels||e.labels.length===0?[]:e.labels.map(e=>this.labels.find(t=>t.sid===e||t.uuid===e)).filter(e=>!!e)}_renderLabelsRow(e){let t=this._getAssetLabels(e);return t.length===0?s:a`
      <div class="meta-row meta-row--col">
        <span class="meta-label">${this.t(`labels`,`Labels`)}</span>
        <div class="tags-list">
          ${t.map(e=>a`
              <sfx-badge
                class="tag-link"
                ${A({"--sfx-muted":`${e.color||`#94a3b8`}22`,"--sfx-muted-foreground":e.color||`#94a3b8`})}
                @click=${()=>this._applyLabelFilter(e.sid||e.uuid)}
              >
                <span class="label-content">
                  <sfx-icon name="tag" .size=${12} ${A({color:e.color||`#94a3b8`})}></sfx-icon>
                  ${e.name}
                </span>
              </sfx-badge>
            `)}
        </div>
      </div>
    `}_renderTagsRow(e){let t=this._getTagEntries(e.tags);return t.length===0?s:a`
      <div class="meta-row">
        <span class="meta-label">${this.t(`tags`,`Tags`)}</span>
        <div class="tags-list">
          ${t.map(e=>a`
              <sfx-badge class="tag-link" @click=${()=>this._applyTagFilter(e.sid)}
                >${e.label}</sfx-badge
              >
            `)}
        </div>
      </div>
    `}render(){let e=this.asset;if(!e)return s;let t=_n(e.type),n=t===`image`,r=t===`video`,i=t===`audio`,o=e.extension?.toLowerCase()===`pdf`,c=f(e.extension||``),l=xn(e.extension||``),u=e.extension?.toLowerCase()===`svg`,d=On(e,this.selectedVariantName),p=n?u?S(e.url?.cdn||``,{source:`asset`,asset:e}):d||S(Nn(e.url?.cdn||``,this.containerToken),{source:`asset`,asset:e}):``,m=n?this._getFullscreenImageUrl(e):``,h=n&&!u?this._getBlurDimensions(e):null,g=r&&e.url?.cdn||``,_=r?S(e.info?.video_thumbnail||e.info?.preview||``,{source:`video`,asset:e}):``,ee=o&&!n?An(e):``,v=this._getCurrentIndex(),y=v>0&&this._findNavTarget(v,-1)>=0,te=v>=0&&this._findNavTarget(v,1)>=0,ne=this.assets.length>1;return a`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${e.name}>${e.name}</span>
          <div class="header-actions">
            <button
              class="icon-btn"
              @click=${this._fullscreen}
              ?disabled=${!n&&!r&&!i&&!o}
              aria-label=${this.t(`fullscreen`,`Fullscreen`)}
              title=${this.t(`fullscreen`,`Fullscreen`)}
            >
              <sfx-icon name="fullscreen" .size=${16}></sfx-icon>
            </button>
            <button
              class="icon-btn ${this.asset&&this.selectedIds.includes(this.asset.uuid)?`selected`:``}"
              @click=${this._select}
              aria-label=${this.t(`select`,`Select`)}
              title=${this.t(`selectAsset`,`Select the asset`)}
            >
              <sfx-icon name="select" .size=${16}></sfx-icon>
            </button>
            <div class="header-divider"></div>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <sfx-icon name="close" .size=${16}></sfx-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${n&&l?`chess`:``}">
          ${ne?a`
                <button
                  class="nav-btn prev"
                  @click=${this._prev}
                  ?disabled=${!y}
                  aria-label=${this.t(`previous`,`Previous`)}
                >
                  <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
                </button>
                <button
                  class="nav-btn next"
                  @click=${this._next}
                  ?disabled=${!te}
                  aria-label=${this.t(`next`,`Next`)}
                >
                  <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
                </button>
              `:s}
          ${this._isFullscreen?a`
                <button
                  class="fs-close-btn"
                  @click=${this._exitFullscreen}
                  aria-label=${this.t(`exitFullscreen`,`Exit fullscreen`)}
                >
                  <sfx-icon name="close" .size=${16}></sfx-icon>
                </button>
              `:s}
          ${this._previewLoading?a`<div class="preview-loading"><div class="spinner"></div></div>`:s}
          ${n?a`
                <img
                  src=${p}
                  alt=${e.name}
                  @load=${e=>{e.target.classList.remove(`icon-fallback`),this._previewLoading=!1}}
                  @error=${e=>{let t=e.target;this._previewLoading=!1,t.src!==c&&(t.src=c,t.classList.add(`icon-fallback`))}}
                />
                <div class="fs-wrapper">
                  ${u?s:a`
                        <img
                          class="fs-blur ${this._fsImageLoaded?`hidden`:``}"
                          src=${p}
                          alt=""
                          ${A({width:h.width,height:h.height})}
                        />
                      `}
                  <img
                    class="fs-full ${u||this._fsImageLoaded?`loaded`:``}"
                    src=${this._isFullscreen?m:``}
                    alt=${e.name}
                    ${A(u?{width:`100vw`,height:`100vh`}:null)}
                    @load=${this._onFsImageLoad}
                  />
                </div>
              `:s}
          ${r?a`<video
                src=${g}
                poster=${_||s}
                controls
                controlsList="nofullscreen"
                @loadeddata=${()=>{this._previewLoading=!1}}
                @error=${()=>{this._previewLoading=!1}}
              ></video>`:s}
          ${i?a`<audio src=${e.url?.cdn||``} controls></audio>`:s}
          ${o&&!n?a`
                <img
                  src=${ee||c}
                  alt=${e.name}
                  class=${ee?``:`icon-fallback`}
                  @error=${e=>{let t=e.target;t.src!==c&&(t.src=c,t.classList.add(`icon-fallback`))}}
                />
              `:s}
          ${!n&&!r&&!i&&!o?a`<img src=${c} alt=${e.name} class="icon-fallback" />`:s}
        </div>

        ${this._renderFileInfoSection(e)}
        ${this.showMetadata?a`
              ${this._renderAccordion(`metadata`,this.t(`metadata`,`Metadata`),this._getAllMetadataRows(e))}
            `:s}
      </div>
    `}};l([i({type:Object})],K.prototype,`asset`,void 0),l([i({type:Array})],K.prototype,`assets`,void 0),l([i({type:Array})],K.prototype,`selectedIds`,void 0),l([i()],K.prototype,`containerToken`,void 0),l([i({type:Boolean})],K.prototype,`showMetadata`,void 0),l([i({type:Array})],K.prototype,`metadataFields`,void 0),l([i({type:Array})],K.prototype,`labels`,void 0),l([i({type:Object})],K.prototype,`regionalFilters`,void 0),l([i({type:Boolean})],K.prototype,`multiSelect`,void 0),l([i({type:String})],K.prototype,`selectedVariantName`,void 0),l([i({attribute:!1})],K.prototype,`t`,void 0),l([u(`.preview-area`)],K.prototype,`previewArea`,void 0),l([u(`video`)],K.prototype,`_videoEl`,void 0),l([c()],K.prototype,`_isFullscreen`,void 0),l([c()],K.prototype,`_fsImageLoaded`,void 0),l([c()],K.prototype,`_previewLoading`,void 0),l([c()],K.prototype,`_openSections`,void 0),K=l([j(`ap-preview-panel`)],K);var Fa={sparkles:[{tag:`path`,attrs:{d:`m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z`}},{tag:`path`,attrs:{d:`M5 3v4`}},{tag:`path`,attrs:{d:`M19 17v4`}},{tag:`path`,attrs:{d:`M3 5h4`}},{tag:`path`,attrs:{d:`M17 19h4`}}],search:[{tag:`circle`,attrs:{cx:`11`,cy:`11`,r:`8`}},{tag:`path`,attrs:{d:`m21 21-4.3-4.3`}}],check:`M20 6 9 17l-5-5`,"check-check":[{tag:`path`,attrs:{d:`M18 6 7 17l-5-5`}},{tag:`path`,attrs:{d:`m22 10-7.5 7.5L13 16`}}],close:[{tag:`path`,attrs:{d:`M18 6 6 18`}},{tag:`path`,attrs:{d:`m6 6 12 12`}}],"chevron-left":`m15 18-6-6 6-6`,"chevron-right":`m9 18 6-6-6-6`,"chevron-down":`m6 9 6 6 6-6`,download:[{tag:`path`,attrs:{d:`M12 15V3`}},{tag:`path`,attrs:{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}},{tag:`path`,attrs:{d:`m7 10 5 5 5-5`}}],upload:[{tag:`path`,attrs:{d:`M12 3v12`}},{tag:`path`,attrs:{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}},{tag:`path`,attrs:{d:`m17 8-5-5-5 5`}}],fullscreen:[{tag:`path`,attrs:{d:`M8 3H5a2 2 0 0 0-2 2v3`}},{tag:`path`,attrs:{d:`M21 8V5a2 2 0 0 0-2-2h-3`}},{tag:`path`,attrs:{d:`M3 16v3a2 2 0 0 0 2 2h3`}},{tag:`path`,attrs:{d:`M16 21h3a2 2 0 0 0 2-2v-3`}}],trash:[{tag:`path`,attrs:{d:`M10 11v6`}},{tag:`path`,attrs:{d:`M14 11v6`}},{tag:`path`,attrs:{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}},{tag:`path`,attrs:{d:`M3 6h18`}},{tag:`path`,attrs:{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}}],more:[{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`1`}},{tag:`circle`,attrs:{cx:`19`,cy:`12`,r:`1`}},{tag:`circle`,attrs:{cx:`5`,cy:`12`,r:`1`}}],grid:[{tag:`rect`,attrs:{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}},{tag:`path`,attrs:{d:`M12 3v18`}},{tag:`path`,attrs:{d:`M3 12h18`}}],list:[{tag:`path`,attrs:{d:`M3 5h.01`}},{tag:`path`,attrs:{d:`M3 12h.01`}},{tag:`path`,attrs:{d:`M3 19h.01`}},{tag:`path`,attrs:{d:`M8 5h13`}},{tag:`path`,attrs:{d:`M8 12h13`}},{tag:`path`,attrs:{d:`M8 19h13`}}],preview:[{tag:`path`,attrs:{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`}},{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`3`}}],select:[{tag:`path`,attrs:{d:`M5 12h14`}},{tag:`path`,attrs:{d:`M12 5v14`}}],"gallery-vertical-end":[{tag:`path`,attrs:{d:`M7 2h10`}},{tag:`path`,attrs:{d:`M5 6h14`}},{tag:`rect`,attrs:{width:`18`,height:`12`,x:`3`,y:`10`,rx:`2`}}],filter:[{tag:`path`,attrs:{d:`M2 5h20`}},{tag:`path`,attrs:{d:`M6 12h12`}},{tag:`path`,attrs:{d:`M9 19h6`}}],sort:[{tag:`path`,attrs:{d:`m21 16-4 4-4-4`}},{tag:`path`,attrs:{d:`M17 20V4`}},{tag:`path`,attrs:{d:`m3 8 4-4 4 4`}},{tag:`path`,attrs:{d:`M7 4v16`}}],"sort-asc":[{tag:`path`,attrs:{d:`m3 8 4-4 4 4`}},{tag:`path`,attrs:{d:`M7 4v16`}},{tag:`path`,attrs:{d:`M11 12h4`}},{tag:`path`,attrs:{d:`M11 16h7`}},{tag:`path`,attrs:{d:`M11 20h10`}}],"sort-desc":[{tag:`path`,attrs:{d:`m3 16 4 4 4-4`}},{tag:`path`,attrs:{d:`M7 20V4`}},{tag:`path`,attrs:{d:`M11 4h4`}},{tag:`path`,attrs:{d:`M11 8h7`}},{tag:`path`,attrs:{d:`M11 12h10`}}],image:[{tag:`rect`,attrs:{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}},{tag:`circle`,attrs:{cx:`9`,cy:`9`,r:`2`}},{tag:`path`,attrs:{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`}}],video:[{tag:`path`,attrs:{d:`m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`}},{tag:`rect`,attrs:{x:`2`,y:`6`,width:`14`,height:`12`,rx:`2`}}],audio:[{tag:`path`,attrs:{d:`M9 18V5l12-2v13`}},{tag:`circle`,attrs:{cx:`6`,cy:`18`,r:`3`}},{tag:`circle`,attrs:{cx:`18`,cy:`16`,r:`3`}}],music:[{tag:`path`,attrs:{d:`M9 18V5l12-2v13`}},{tag:`circle`,attrs:{cx:`6`,cy:`18`,r:`3`}},{tag:`circle`,attrs:{cx:`18`,cy:`16`,r:`3`}}],document:[{tag:`path`,attrs:{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`}},{tag:`path`,attrs:{d:`M14 2v5a1 1 0 0 0 1 1h5`}},{tag:`path`,attrs:{d:`M10 9H8`}},{tag:`path`,attrs:{d:`M16 13H8`}},{tag:`path`,attrs:{d:`M16 17H8`}}],"file-text":[{tag:`path`,attrs:{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`}},{tag:`path`,attrs:{d:`M14 2v5a1 1 0 0 0 1 1h5`}},{tag:`path`,attrs:{d:`M10 9H8`}},{tag:`path`,attrs:{d:`M16 13H8`}},{tag:`path`,attrs:{d:`M16 17H8`}}],file:[{tag:`path`,attrs:{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`}},{tag:`path`,attrs:{d:`M14 2v5a1 1 0 0 0 1 1h5`}}],archive:[{tag:`rect`,attrs:{width:`20`,height:`5`,x:`2`,y:`3`,rx:`1`}},{tag:`path`,attrs:{d:`M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8`}},{tag:`path`,attrs:{d:`M10 12h4`}}],font:[{tag:`path`,attrs:{d:`M12 4v16`}},{tag:`path`,attrs:{d:`M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2`}},{tag:`path`,attrs:{d:`M9 20h6`}}],text:[{tag:`path`,attrs:{d:`M12 4v16`}},{tag:`path`,attrs:{d:`M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2`}},{tag:`path`,attrs:{d:`M9 20h6`}}],clapperboard:[{tag:`path`,attrs:{d:`m12.296 3.464 3.02 3.956`}},{tag:`path`,attrs:{d:`M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z`}},{tag:`path`,attrs:{d:`M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}},{tag:`path`,attrs:{d:`m6.18 5.276 3.1 3.899`}}],folder:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,"folder-open":`m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,"folder-plus":[{tag:`path`,attrs:{d:`M12 10v6`}},{tag:`path`,attrs:{d:`M9 13h6`}},{tag:`path`,attrs:{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`}}],inbox:[{tag:`path`,attrs:{d:`M22 12L16 12L14 15L10 15L8 12L2 12`}},{tag:`path`,attrs:{d:`M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`}}],tags:[{tag:`path`,attrs:{d:`M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z`}},{tag:`path`,attrs:{d:`M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193`}},{tag:`circle`,attrs:{cx:`10.5`,cy:`6.5`,r:`.5`,fill:`currentColor`}}],tag:[{tag:`path`,attrs:{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`}},{tag:`circle`,attrs:{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`}}],hash:[{tag:`path`,attrs:{d:`M4 9h16`}},{tag:`path`,attrs:{d:`M4 15h16`}},{tag:`path`,attrs:{d:`M10 3 8 21`}},{tag:`path`,attrs:{d:`M14 3 16 21`}}],calendar:[{tag:`path`,attrs:{d:`M8 2v4`}},{tag:`path`,attrs:{d:`M16 2v4`}},{tag:`rect`,attrs:{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`}},{tag:`path`,attrs:{d:`M3 10h18`}}],"file-type":[{tag:`path`,attrs:{d:`M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4`}},{tag:`path`,attrs:{d:`M14 2v4a2 2 0 0 0 2 2h4`}},{tag:`path`,attrs:{d:`M2 13v-1h6v1`}},{tag:`path`,attrs:{d:`M5 12v6`}},{tag:`path`,attrs:{d:`M4 18h2`}}],scaling:[{tag:`path`,attrs:{d:`M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`}},{tag:`path`,attrs:{d:`M14 15H9v-5`}},{tag:`path`,attrs:{d:`M20 9V4h-5`}},{tag:`path`,attrs:{d:`M20 4l-6 6`}}],history:[{tag:`path`,attrs:{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`}},{tag:`path`,attrs:{d:`M3 3v5h5`}},{tag:`path`,attrs:{d:`M12 7v5l4 2`}}],"swatch-book":[{tag:`path`,attrs:{d:`M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z`}},{tag:`path`,attrs:{d:`M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7`}},{tag:`path`,attrs:{d:`M7 17h.01`}},{tag:`path`,attrs:{d:`m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8`}}],"badge-check":[{tag:`path`,attrs:{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`}},{tag:`path`,attrs:{d:`m9 12 2 2 4-4`}}],"file-check-2":[{tag:`path`,attrs:{d:`M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4`}},{tag:`path`,attrs:{d:`M14 2v4a2 2 0 0 0 2 2h4`}},{tag:`path`,attrs:{d:`m3 15 2 2 4-4`}}],"user-star":[{tag:`path`,attrs:{d:`M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z`}},{tag:`path`,attrs:{d:`M8 15H7a4 4 0 0 0-4 4v2`}},{tag:`circle`,attrs:{cx:`10`,cy:`7`,r:`4`}}],"calendar-check-2":[{tag:`path`,attrs:{d:`M8 2v4`}},{tag:`path`,attrs:{d:`M16 2v4`}},{tag:`path`,attrs:{d:`M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8`}},{tag:`path`,attrs:{d:`M3 10h18`}},{tag:`path`,attrs:{d:`m16 20 2 2 4-4`}}],box:[{tag:`path`,attrs:{d:`M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z`}},{tag:`path`,attrs:{d:`m3.3 7 8.7 5 8.7-5`}},{tag:`path`,attrs:{d:`M12 22V12`}}],"layout-grid":[{tag:`rect`,attrs:{width:`7`,height:`7`,x:`3`,y:`3`,rx:`1`}},{tag:`rect`,attrs:{width:`7`,height:`7`,x:`14`,y:`3`,rx:`1`}},{tag:`rect`,attrs:{width:`7`,height:`7`,x:`14`,y:`14`,rx:`1`}},{tag:`rect`,attrs:{width:`7`,height:`7`,x:`3`,y:`14`,rx:`1`}}],"layout-template":[{tag:`rect`,attrs:{width:`18`,height:`7`,x:`3`,y:`3`,rx:`1`}},{tag:`rect`,attrs:{width:`9`,height:`7`,x:`3`,y:`14`,rx:`1`}},{tag:`rect`,attrs:{width:`5`,height:`7`,x:`16`,y:`14`,rx:`1`}}],pin:[{tag:`path`,attrs:{d:`M12 17v5`}},{tag:`path`,attrs:{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z`}}],"pin-off":[{tag:`path`,attrs:{d:`M12 17v5`}},{tag:`path`,attrs:{d:`M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34`}},{tag:`path`,attrs:{d:`M2 2l20 20`}},{tag:`path`,attrs:{d:`M9 12a2 2 0 0 1-1.11 1.79l-1.78.9`}},{tag:`path`,attrs:{d:`M17 17H5`}}],lock:[{tag:`rect`,attrs:{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}},{tag:`path`,attrs:{d:`M7 11V7a5 5 0 0 1 10 0v4`}}],globe:[{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`10`}},{tag:`path`,attrs:{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`}},{tag:`path`,attrs:{d:`M2 12h20`}}],"circle-check-big":[{tag:`path`,attrs:{d:`M21.801 10A10 10 0 1 1 17 3.335`}},{tag:`path`,attrs:{d:`m9 11 3 3L22 4`}}],"x-circle":[{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`10`}},{tag:`path`,attrs:{d:`m15 9-6 6`}},{tag:`path`,attrs:{d:`m9 9 6 6`}}],ban:[{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`10`}},{tag:`path`,attrs:{d:`m4.9 4.9 14.2 14.2`}}],clock:[{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`10`}},{tag:`path`,attrs:{d:`M12 6v6l4 2`}}],"toggle-left":[{tag:`rect`,attrs:{width:`20`,height:`14`,x:`2`,y:`5`,rx:`7`}},{tag:`circle`,attrs:{cx:`9`,cy:`12`,r:`3`}}],"file-digit":[{tag:`path`,attrs:{d:`M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2`}},{tag:`path`,attrs:{d:`M14 2v5a1 1 0 0 0 1 1h5`}},{tag:`path`,attrs:{d:`M10 16h2v6`}},{tag:`path`,attrs:{d:`M10 22h4`}},{tag:`rect`,attrs:{width:`4`,height:`6`,x:`2`,y:`16`,rx:`2`}}],"decimals-arrow-right":[{tag:`path`,attrs:{d:`M10 18h10`}},{tag:`path`,attrs:{d:`m17 21 3-3-3-3`}},{tag:`path`,attrs:{d:`M3 11h.01`}},{tag:`rect`,attrs:{width:`5`,height:`8`,x:`15`,y:`3`,rx:`2.5`}},{tag:`rect`,attrs:{width:`5`,height:`8`,x:`6`,y:`3`,rx:`2.5`}}],"text-initial":[{tag:`path`,attrs:{d:`M15 5h6`}},{tag:`path`,attrs:{d:`M15 12h6`}},{tag:`path`,attrs:{d:`M3 19h18`}},{tag:`path`,attrs:{d:`m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12`}},{tag:`path`,attrs:{d:`M3.92 10h6.16`}}],"text-align-justify":[{tag:`path`,attrs:{d:`M3 5h18`}},{tag:`path`,attrs:{d:`M3 12h18`}},{tag:`path`,attrs:{d:`M3 19h18`}}],paperclip:`m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551`,"link-2":[{tag:`path`,attrs:{d:`M9 17H7A5 5 0 0 1 7 7h2`}},{tag:`path`,attrs:{d:`M15 7h2a5 5 0 1 1 0 10h-2`}},{tag:`path`,attrs:{d:`M8 12h8`}}],"circle-dot":[{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`10`}},{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`1`}}],"square-check":[{tag:`rect`,attrs:{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`}},{tag:`path`,attrs:{d:`m9 12 2 2 4-4`}}],locate:[{tag:`path`,attrs:{d:`M2 12h3`}},{tag:`path`,attrs:{d:`M19 12h3`}},{tag:`path`,attrs:{d:`M12 2v3`}},{tag:`path`,attrs:{d:`M12 19v3`}},{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`7`}}],"list-ordered":[{tag:`path`,attrs:{d:`M11 5h10`}},{tag:`path`,attrs:{d:`M11 12h10`}},{tag:`path`,attrs:{d:`M11 19h10`}},{tag:`path`,attrs:{d:`M4 4h1v5`}},{tag:`path`,attrs:{d:`M4 9h2`}},{tag:`path`,attrs:{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`}}],plus:[{tag:`path`,attrs:{d:`M5 12h14`}},{tag:`path`,attrs:{d:`M12 5v14`}}],component:[{tag:`path`,attrs:{d:`M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z`}},{tag:`path`,attrs:{d:`M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z`}},{tag:`path`,attrs:{d:`M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z`}},{tag:`path`,attrs:{d:`M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z`}}],link:[{tag:`path`,attrs:{d:`M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1`}},{tag:`path`,attrs:{d:`M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1`}}],move:[{tag:`path`,attrs:{d:`M5 9 2 12l3 3`}},{tag:`path`,attrs:{d:`M9 5l3-3 3 3`}},{tag:`path`,attrs:{d:`M15 19l-3 3-3-3`}},{tag:`path`,attrs:{d:`M19 9l3 3-3 3`}},{tag:`path`,attrs:{d:`M2 12h20`}},{tag:`path`,attrs:{d:`M12 2v20`}}],pencil:[{tag:`path`,attrs:{d:`M12 20h9`}},{tag:`path`,attrs:{d:`M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z`}}],unlock:[{tag:`rect`,attrs:{x:`5`,y:`11`,width:`14`,height:`10`,rx:`2`}},{tag:`path`,attrs:{d:`M8 11V7a4 4 0 0 1 7.5-2`}}],star:[{tag:`path`,attrs:{d:`m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z`}}],"star-filled":[{tag:`path`,attrs:{d:`m12 17.3-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z`,fill:`currentColor`}}],dot:[{tag:`circle`,attrs:{cx:`12`,cy:`12`,r:`5`,fill:`currentColor`}}]},Ia=class extends e{constructor(...e){super(...e),this.name=``,this.size=20}static{this.styles=[r`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `]}render(){let e=Fa[this.name];if(!e)return s;let t=typeof e==`string`?n`<path d=${e}></path>`:e.map(e=>{let{tag:t,attrs:r}=e;return t===`circle`?n`<circle cx=${r.cx} cy=${r.cy} r=${r.r} fill=${r.fill??`none`}></circle>`:t===`rect`?n`<rect width=${r.width} height=${r.height} x=${r.x} y=${r.y} rx=${r.rx??`0`} ry=${r.ry??`0`}></rect>`:n`<path d=${r.d} fill=${r.fill??`none`}></path>`});return a`
      <svg
        ${A({"--icon-size":`${this.size}px`})}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${t}
      </svg>
    `}};l([i()],Ia.prototype,`name`,void 0),l([i({type:Number})],Ia.prototype,`size`,void 0),Ia=l([j(`sfx-icon`)],Ia);var La=class extends e{constructor(...e){super(...e),this.size=24}static{this.styles=[r`
      :host {
        display: inline-flex;
      }
      .spinner {
        border: 2px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-top-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `]}render(){return a`<div
      class="spinner"
      ${A({width:`${this.size}px`,height:`${this.size}px`})}
    ></div>`}};l([i({type:Number})],La.prototype,`size`,void 0),La=l([j(`sfx-spinner`)],La);var Ra=class extends e{constructor(...e){super(...e),this.variant=`default`}static{this.styles=[r`
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
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      :host([variant='primary']) .badge {
        background: var(--sfx-primary-10, oklch(0.578 0.198 268.129 / 0.1));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
    `]}render(){return a`<span class="badge"><slot></slot></span>`}};l([i({reflect:!0})],Ra.prototype,`variant`,void 0),Ra=l([j(`sfx-badge`)],Ra);var za=class extends e{constructor(...e){super(...e),this.text=``,this.placement=`top`}static{this.styles=[r`
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
        background: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        color: var(--sfx-background, oklch(1 0 0));
        border-radius: 4px;
        pointer-events: none;
        z-index: 100;
      }
      .tip.bottom {
        bottom: auto;
        top: calc(100% + 6px);
      }
      :host(:hover) .tip {
        display: block;
      }
    `]}render(){return a`
      <slot></slot>
      <div class="tip ${this.placement===`bottom`?`bottom`:``}">${this.text}</div>
    `}};l([i()],za.prototype,`text`,void 0),l([i()],za.prototype,`placement`,void 0),za=l([j(`sfx-tooltip`)],za);var Ba=class extends e{constructor(...e){super(...e),this.open=!1,this.align=`start`,this._handleOutsideClick=e=>{this.open&&!e.composedPath().includes(this)&&(this.open=!1)},this._handleKeyDown=e=>{e.key===`Escape`&&this.open&&(this.open=!1)}}static{this.styles=[r`
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
        background: var(--sfx-card, oklch(1 0 0));
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 8px;
      }
      .content.end {
        left: auto;
        right: 0;
      }
      .content.open {
        display: block;
      }
    `]}render(){return a`
      <slot name="trigger" @click=${()=>this.open=!this.open}></slot>
      <div class="content ${this.align===`end`?`end`:``} ${this.open?`open`:``}">
        <slot></slot>
      </div>
    `}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._handleOutsideClick),document.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._handleOutsideClick),document.removeEventListener(`keydown`,this._handleKeyDown)}};l([c()],Ba.prototype,`open`,void 0),l([i()],Ba.prototype,`align`,void 0),Ba=l([j(`sfx-popover`)],Ba);var Va=class extends e{constructor(...e){super(...e),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this._hasLabel=!1,this._handleHostClick=()=>{this.dispatchEvent(new CustomEvent(`sfx-toggle`,{detail:{checked:!this.checked},bubbles:!0,composed:!0}))}}static{this.styles=[r`
      :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
      }
      .box {
        width: 16px;
        height: 16px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms;
        background: var(--sfx-background, oklch(1 0 0));
      }
      :host(:hover) .box {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      :host([checked]) .box {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .check {
        display: none;
        color: var(--sfx-primary-foreground, oklch(1 0 0));
      }
      :host([checked]) .check {
        display: block;
      }
      :host([indeterminate]) .box {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .dash {
        display: none;
        color: var(--sfx-primary-foreground, oklch(1 0 0));
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
        margin-left: var(--sfx-checkbox-gap, 8px);
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        display: inline-flex;
        align-items: center;
      }
      .label[hidden] {
        display: none;
      }
    `]}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this._handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._handleHostClick)}_onSlotChange(e){let t=e.target;this._hasLabel=t.assignedNodes({flatten:!0}).length>0,this.requestUpdate()}render(){return a`
      <div class="box">
        <svg
          class="check"
          width="12"
          height="12"
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
          class="dash"
          width="12"
          height="12"
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
      <span class="label" ?hidden=${!this._hasLabel}
        ><slot @slotchange=${this._onSlotChange}></slot
      ></span>
    `}};l([i({type:Boolean,reflect:!0})],Va.prototype,`checked`,void 0),l([i({type:Boolean,reflect:!0})],Va.prototype,`indeterminate`,void 0),l([i({type:Boolean,reflect:!0})],Va.prototype,`disabled`,void 0),Va=l([j(`sfx-checkbox`)],Va);var Ha=class extends e{constructor(...e){super(...e),this.value=``,this.options=[],this.disabled=!1,this.clearable=!1,this.direction=`vertical`,this._onKeydown=e=>{let t=this.options.filter(e=>!this.disabled&&!e.disabled);if(t.length===0)return;let n=t.findIndex(e=>e.value===this.value),r=null;switch(e.key){case`ArrowDown`:case`ArrowRight`:e.preventDefault(),r=n<0?0:(n+1)%t.length;break;case`ArrowUp`:case`ArrowLeft`:e.preventDefault(),r=n<0?t.length-1:(n-1+t.length)%t.length;break;case` `:case`Enter`:e.preventDefault(),n>=0?this._select(t[n]):t.length>0&&this._select(t[0]);return;default:return}r!==null&&this._select(t[r])}}static{this.styles=[Pi,r`
      :host {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      :host([direction='horizontal']) {
        flex-direction: row;
        gap: 16px;
      }
      :host([columns='2']) {
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
      .option[aria-disabled='true'] {
        opacity: 0.5;
        cursor: default;
        pointer-events: none;
      }
      .radio {
        width: 18px;
        height: 18px;
        min-width: 18px;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 150ms;
        background: var(--sfx-background, oklch(1 0 0));
      }
      .radio .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: transparent;
        transition: background 150ms;
      }
      .option:hover .radio {
        border-color: var(--sfx-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
      }
      .option[aria-checked='true'] .radio {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-checked='true'] .radio .dot {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .label {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        user-select: none;
      }
    `]}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`radiogroup`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`0`),this.addEventListener(`keydown`,this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this._onKeydown)}render(){return a`
      ${this.options.map(e=>a`
          <div
            class="option"
            role="radio"
            aria-checked=${e.value===this.value}
            aria-disabled=${this.disabled||e.disabled?`true`:s}
            @click=${()=>this._select(e)}
          >
            <div class="radio"><div class="dot"></div></div>
            ${e.icon?a`<sfx-icon name=${e.icon} .size=${16}></sfx-icon>`:s}
            <span class="label">${e.label}</span>
          </div>
        `)}
    `}_select(e){if(this.disabled||e.disabled)return;let t=this.clearable&&e.value===this.value?``:e.value;this.dispatchEvent(new CustomEvent(`sfx-change`,{detail:{value:t},bubbles:!0,composed:!0}))}};l([i()],Ha.prototype,`value`,void 0),l([i({type:Array})],Ha.prototype,`options`,void 0),l([i({type:Boolean})],Ha.prototype,`disabled`,void 0),l([i({type:Boolean})],Ha.prototype,`clearable`,void 0),l([i({reflect:!0})],Ha.prototype,`direction`,void 0),l([i({reflect:!0})],Ha.prototype,`columns`,void 0),Ha=l([j(`sfx-radio-group`)],Ha);var q=class extends e{constructor(...e){super(...e),this.value=``,this.label=``,this.variant=`default`,this.clearable=!1,this.options=[],this._open=!1,this._focusedIndex=-1,this._menuPosition=`below`,this._menuAlign=`align-left`,this._menuTop=0,this._menuBottom=0,this._menuLeft=0,this._menuRight=0,this._menuWidth=0,this._handleOutsideClick=e=>{e.composedPath().includes(this)||(this._open=!1,document.removeEventListener(`click`,this._handleOutsideClick))}}static{this.styles=[Pi,r`
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
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        cursor: pointer;
        white-space: nowrap;
      }
      .trigger:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      :host([variant='borderless']) .trigger {
        border-color: transparent;
        background: none;
      }
      :host([variant='borderless']) .trigger:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .menu {
        position: fixed;
        z-index: 50;
        min-width: 160px;
        background: var(--sfx-card, oklch(1 0 0));
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 4px;
      }
      .menu.below {
        bottom: auto;
      }
      .menu.above {
        top: auto;
      }
      .menu.align-left {
        right: auto;
      }
      .menu.align-right {
        left: auto;
      }
      .option {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 6px 12px;
        justify-content: space-between;
        border: none;
        background: none;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        text-align: left;
        cursor: pointer;
        border-radius: 4px;
      }
      .option:hover,
      .option.focused {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .option-label {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .option[aria-selected='true'] {
        background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .option[aria-selected='true'] > sfx-icon {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .trigger .label {
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
      }
      .clear-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0 -4px 0 auto;
        border: none;
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
        border-radius: 50%;
        flex-shrink: 0;
      }
      .clear-trigger:hover {
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      }
      .clear-trigger sfx-icon {
        color: inherit;
      }
      .trigger sfx-icon {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        margin-left: auto;
      }
      .option sfx-icon {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .option[aria-selected='true'] sfx-icon {
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
    `]}close(){this._open=!1}render(){let e=this.options.find(e=>e.value===this.value),t=`sfx-dropdown-menu`;return a`
      <button
        class="trigger"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        aria-controls=${t}
        @click=${this._toggle}
        @keydown=${this._handleTriggerKeydown}
      >
        ${e?.icon?a`<sfx-icon name=${e.icon} .size=${16}></sfx-icon>`:s}
        ${this.label?a`<span class="label">${this.label}${e?`: `:``}</span>`:s}${e?e.label:``}
        ${this.clearable&&e?a`<span class="clear-trigger" @click=${this._clear}
              ><sfx-icon name="close" .size=${12}></sfx-icon
            ></span>`:a`<sfx-icon name="chevron-down" .size=${14}></sfx-icon>`}
      </button>
      ${this._open?a`
            <div
              id=${t}
              class="menu ${this._menuPosition} ${this._menuAlign}"
              ${A({[this._menuPosition===`below`?`top`:`bottom`]:`${this._menuPosition===`below`?this._menuTop:this._menuBottom}px`,[this._menuAlign===`align-left`?`left`:`right`]:`${this._menuAlign===`align-left`?this._menuLeft:this._menuRight}px`,...this._menuWidth?{"min-width":`${this._menuWidth}px`}:{}})}
              role="listbox"
              @keydown=${this._handleMenuKeydown}
            >
              ${this.options.map((e,t)=>a`
                  <button
                    class="option ${t===this._focusedIndex?`focused`:``}"
                    role="option"
                    aria-selected=${e.value===this.value}
                    @click=${()=>this._select(e.value)}
                    @mouseenter=${()=>{this._focusedIndex=t}}
                  >
                    <span class="option-label">
                      ${e.icon?a`<sfx-icon name=${e.icon} .size=${16}></sfx-icon>`:s}
                      ${e.label}
                    </span>
                    ${e.value===this.value?a`<sfx-icon name="check" .size=${14}></sfx-icon>`:s}
                  </button>
                `)}
            </div>
          `:s}
    `}_toggle(){this._open=!this._open,this._open?(this._focusedIndex=this.options.findIndex(e=>e.value===this.value),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent(`dropdown-open`,{bubbles:!0,composed:!0})),document.addEventListener(`click`,this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption())):document.removeEventListener(`click`,this._handleOutsideClick)}_clear(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`sfx-change`,{detail:{value:``},bubbles:!0,composed:!0}))}_select(e){this._open=!1,document.removeEventListener(`click`,this._handleOutsideClick),this.dispatchEvent(new CustomEvent(`sfx-change`,{detail:{value:e},bubbles:!0,composed:!0}))}_updateMenuPosition(){let e=this.getBoundingClientRect();this._menuWidth=e.width;let t=window.innerHeight-e.bottom,n=e.top,r=Math.min(this.options.length*36+8,300);this._menuPosition=t<r&&n>t?`above`:`below`,this._menuPosition===`below`?this._menuTop=e.bottom+4:this._menuBottom=window.innerHeight-e.top+4;let i=window.innerWidth-e.left;this._menuAlign=i<200?`align-right`:`align-left`,this._menuAlign===`align-left`?this._menuLeft=e.left:this._menuRight=window.innerWidth-e.right}_handleTriggerKeydown(e){e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`||e.key===` `?(e.preventDefault(),this._open||(this._open=!0,this._focusedIndex=e.key===`ArrowUp`?this.options.length-1:Math.max(0,this.options.findIndex(e=>e.value===this.value)),this._updateMenuPosition(),this.dispatchEvent(new CustomEvent(`dropdown-open`,{bubbles:!0,composed:!0})),document.addEventListener(`click`,this._handleOutsideClick),this.updateComplete.then(()=>this._focusCurrentOption()))):e.key===`Escape`&&this._open&&(e.preventDefault(),e.stopPropagation(),this._open=!1,document.removeEventListener(`click`,this._handleOutsideClick))}_handleMenuKeydown(e){switch(e.key){case`ArrowDown`:e.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%this.options.length,this._focusCurrentOption();break;case`ArrowUp`:e.preventDefault(),this._focusedIndex=(this._focusedIndex-1+this.options.length)%this.options.length,this._focusCurrentOption();break;case`Enter`:case` `:e.preventDefault(),this._focusedIndex>=0&&this._focusedIndex<this.options.length&&(this._select(this.options[this._focusedIndex].value),this.shadowRoot?.querySelector(`.trigger`)?.focus());break;case`Escape`:e.preventDefault(),e.stopPropagation(),this._open=!1,document.removeEventListener(`click`,this._handleOutsideClick),this.shadowRoot?.querySelector(`.trigger`)?.focus();break;case`Tab`:this._open=!1,document.removeEventListener(`click`,this._handleOutsideClick);break;case`Home`:e.preventDefault(),this._focusedIndex=0,this._focusCurrentOption();break;case`End`:e.preventDefault(),this._focusedIndex=this.options.length-1,this._focusCurrentOption()}}_focusCurrentOption(){let e=this.shadowRoot?.querySelectorAll(`.option`);e&&this._focusedIndex>=0&&this._focusedIndex<e.length&&e[this._focusedIndex].focus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._handleOutsideClick)}};l([i()],q.prototype,`value`,void 0),l([i()],q.prototype,`label`,void 0),l([i({reflect:!0})],q.prototype,`variant`,void 0),l([i({type:Boolean})],q.prototype,`clearable`,void 0),l([i({type:Array})],q.prototype,`options`,void 0),l([c()],q.prototype,`_open`,void 0),l([c()],q.prototype,`_focusedIndex`,void 0),l([c()],q.prototype,`_menuPosition`,void 0),l([c()],q.prototype,`_menuAlign`,void 0),l([c()],q.prototype,`_menuTop`,void 0),l([c()],q.prototype,`_menuBottom`,void 0),l([c()],q.prototype,`_menuLeft`,void 0),l([c()],q.prototype,`_menuRight`,void 0),l([c()],q.prototype,`_menuWidth`,void 0),q=l([j(`sfx-dropdown`)],q);var Ua=class extends e{constructor(...e){super(...e),this.heading=`File info`,this.rows=[],this.collapsible=!1,this.open=!0}static{this.styles=r`
    :host {
      display: block;
      font-family: var(--sfx-font-family, system-ui, -apple-system, sans-serif);
    }
    .head {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      font: inherit;
      font-weight: 600;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      text-align: left;
    }
    button.head {
      cursor: pointer;
    }
    .head .spacer {
      flex: 1;
    }
    .chevron {
      width: 16px;
      height: 16px;
      flex: 0 0 auto;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      transition: transform 0.15s ease;
    }
    :host([open]) .chevron {
      transform: rotate(180deg);
    }
    dl {
      display: grid;
      grid-template-columns: 92px 1fr;
      gap: 9px 10px;
      margin: 12px 0 0;
      font-size: 13px;
    }
    dt {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
    dd {
      margin: 0;
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `}toggle(){this.collapsible&&(this.open=!this.open)}renderHead(){let e=a`<span>${this.heading}</span><span class="spacer"></span>`;return this.collapsible?a`<button
      class="head"
      type="button"
      aria-expanded=${this.open?`true`:`false`}
      @click=${()=>this.toggle()}
    >
      ${e}
      <svg class="chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m6 9 6 6 6-6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>`:a`<div class="head">${e}</div>`}render(){return a`
      ${this.renderHead()}
      ${this.open?a`<dl>
            ${this.rows.map(e=>a`<dt>${e.label}</dt>
                  <dd title=${e.title??e.value}>${e.value}</dd>`)}
          </dl>`:s}
    `}};l([i()],Ua.prototype,`heading`,void 0),l([i({attribute:!1})],Ua.prototype,`rows`,void 0),l([i({type:Boolean})],Ua.prototype,`collapsible`,void 0),l([i({type:Boolean,reflect:!0})],Ua.prototype,`open`,void 0),Ua=l([j(`sfx-asset-info`)],Ua);var Wa=class extends e{constructor(...e){super(...e),this.items=[],this.rootLabel=`Root`}static{this.styles=r`
    :host {
      display: block;
      padding: 4px 20px 12px;
    }
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: var(--sfx-font-size-sm, 0.875rem);
    }
    button {
      border: none;
      background: none;
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--sfx-font-family, system-ui, sans-serif);
      font-size: var(--sfx-font-size-sm, 0.875rem);
    }
    button:first-child {
      margin-left: -6px;
    }
    button:hover {
      background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
    }
    .current {
      color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
      font-weight: 500;
      padding: 4px 6px;
    }
    sfx-icon {
      color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
    }
  `}_navigate(e){this.dispatchEvent(new CustomEvent(`breadcrumb-navigate`,{detail:{uuid:e},bubbles:!0,composed:!0}))}render(){return this.items.length===0?a``:a`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${()=>this._navigate(``)}>${this.rootLabel}</button>
        ${this.items.map((e,t)=>a`
            <sfx-icon name="chevron-right" .size=${14}></sfx-icon>
            ${t<this.items.length-1?a`<button @click=${()=>this._navigate(e.uuid)}>${e.name}</button>`:a`<span class="current">${e.name}</span>`}
          `)}
      </nav>
    `}};l([i({type:Array})],Wa.prototype,`items`,void 0),l([i()],Wa.prototype,`rootLabel`,void 0),Wa=l([j(`sfx-breadcrumb`)],Wa);var Ga,J=class extends e{static{Ga=this}constructor(...e){super(...e),this.kind=`confirm`,this.heading=``,this.message=``,this.value=``,this.placeholder=``,this.confirmLabel=`Confirm`,this.cancelLabel=`Cancel`,this.danger=!1,this.loading=!1,this.confirmDisabled=!1,this.error=null,this._handleDocKeyDown=e=>{e.key===`Escape`&&Ga._stack[Ga._stack.length-1]===this&&(e.preventDefault(),this._cancel())}}static{this.styles=[Pi,Ii,r`
      :host {
        display: block;
      }
      .backdrop {
        position: fixed;
        inset: 0;
        z-index: var(--sfx-dialog-z-index, 100);
        background: oklch(0 0 0 / 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: sfx-dlg-backdrop-in 150ms ease-out;
      }
      .dialog {
        background: var(--sfx-background, oklch(1 0 0));
        border-radius: var(--sfx-radius-lg, 12px);
        padding: 24px 28px 20px;
        max-width: var(--sfx-dialog-max-width, 440px);
        width: 90%;
        box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
        font-family: var(--sfx-font-family, system-ui, sans-serif);
        animation: sfx-dlg-dialog-in 180ms ease-out;
      }
      @keyframes sfx-dlg-backdrop-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes sfx-dlg-dialog-in {
        from {
          opacity: 0;
          transform: scale(0.96);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .backdrop,
        .dialog {
          animation: none;
        }
      }
      .title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        margin-bottom: 6px;
      }
      .message {
        font-size: var(--sfx-font-size-sm, 0.875rem);
        color: var(--sfx-secondary-foreground, oklch(53.03% 0.039 249.89));
        margin-bottom: 16px;
        line-height: 1.5;
      }
      ::slotted(*) {
        margin-bottom: 16px;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        height: 36px;
        padding: 0 12px;
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
      .error {
        font-size: 0.8125rem;
        color: var(--sfx-destructive, oklch(0.577 0.245 27.325));
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
      .btn:not(.btn-primary):not(.btn-danger):hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .btn-primary {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .btn-danger {
        background: var(--sfx-destructive, oklch(0.577 0.245 27.325));
        color: var(--sfx-destructive-foreground, oklch(1 0 0));
        border-color: var(--sfx-destructive, oklch(0.577 0.245 27.325));
      }
      .btn-primary:hover,
      .btn-danger:hover {
        opacity: 0.9;
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: default;
      }
      .loading-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `]}static{this._stack=[]}connectedCallback(){super.connectedCallback(),Ga._stack.push(this),document.addEventListener(`keydown`,this._handleDocKeyDown),requestAnimationFrame(()=>{this._input?.focus(),this._input?.select()})}disconnectedCallback(){document.removeEventListener(`keydown`,this._handleDocKeyDown),Ga._stack=Ga._stack.filter(e=>e!==this),super.disconnectedCallback()}get inputValue(){return(this._input?.value??this.value).trim()}_onInput(e){this.dispatchEvent(new CustomEvent(`sfx-dialog-input`,{detail:{value:e.target.value},bubbles:!0,composed:!0}))}_confirm(){this.loading||this.confirmDisabled||this.dispatchEvent(new CustomEvent(`sfx-dialog-confirm`,{detail:{value:this.kind===`prompt`?this.inputValue:``},bubbles:!0,composed:!0}))}_cancel(){this.dispatchEvent(new CustomEvent(`sfx-dialog-cancel`,{bubbles:!0,composed:!0}))}_onBackdrop(e){e.target===e.currentTarget&&this._cancel()}_onInputKeyDown(e){e.key===`Enter`&&(e.preventDefault(),this._confirm())}render(){return a`
      <div class="backdrop" @click=${this._onBackdrop}>
        <div class="dialog" role="dialog" aria-modal="true" aria-label=${this.heading}>
          ${this.heading?a`<div class="title">${this.heading}</div>`:s}
          ${this.message&&this.kind===`confirm`?a`<div class="message">${this.message}</div>`:s}
          <slot></slot>
          ${this.kind===`prompt`?a`<input
                type="text"
                placeholder=${this.placeholder}
                .value=${this.value}
                ?disabled=${this.loading}
                @input=${this._onInput}
                @keydown=${this._onInputKeyDown}
                aria-label=${this.heading||this.placeholder}
                aria-invalid=${this.error?`true`:`false`}
              />`:s}
          ${this.error?a`<div class="error" role="alert">${this.error}</div>`:s}
          <div class="actions">
            <button class="btn" @click=${this._cancel}>${this.cancelLabel}</button>
            <button
              class="btn ${this.danger?`btn-danger`:`btn-primary`}"
              @click=${this._confirm}
              ?disabled=${this.loading||this.confirmDisabled}
            >
              ${this.loading?a`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.confirmLabel}</span
                  >`:this.confirmLabel}
            </button>
          </div>
        </div>
      </div>
    `}};l([i()],J.prototype,`kind`,void 0),l([i()],J.prototype,`heading`,void 0),l([i()],J.prototype,`message`,void 0),l([i()],J.prototype,`value`,void 0),l([i()],J.prototype,`placeholder`,void 0),l([i()],J.prototype,`confirmLabel`,void 0),l([i()],J.prototype,`cancelLabel`,void 0),l([i({type:Boolean})],J.prototype,`danger`,void 0),l([i({type:Boolean})],J.prototype,`loading`,void 0),l([i({type:Boolean})],J.prototype,`confirmDisabled`,void 0),l([i()],J.prototype,`error`,void 0),l([u(`input`)],J.prototype,`_input`,void 0),J=Ga=l([j(`sfx-dialog`)],J);function Ka(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function qa(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}var Ja=class extends e{constructor(...e){super(...e),this.value=null,this.minDate=null,this.maxDate=null,this.locale=``,this._viewYear=0,this._viewMonth=0,this._viewInitialized=!1}static{this.styles=[Pi,Fi,r`
      :host {
        display: block;
        width: 264px;
        font-family: inherit;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 2px;
        margin-bottom: 8px;
      }
      .nav-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        flex-shrink: 0;
        border: none;
        border-radius: var(--sfx-radius-sm, 6px);
        background: none;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        cursor: pointer;
      }
      .nav-btn:hover {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .month-select,
      .year-select {
        flex: 1;
        min-width: 0;
      }
      .weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        margin-bottom: 4px;
      }
      .weekday {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
      }
      .day {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1;
        border: none;
        border-radius: 9999px;
        background: none;
        font-size: var(--sfx-font-size-sm, 0.875rem);
        font-family: inherit;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        cursor: pointer;
      }
      .day:hover:not(:disabled) {
        background: var(--sfx-muted, oklch(0.974 0.006 239.819));
      }
      .day.outside {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .day.today {
        background: var(--sfx-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
        color: var(--sfx-primary, oklch(0.578 0.198 268.129));
        font-weight: 500;
      }
      .day.selected,
      .day.selected.today {
        background: var(--sfx-primary, oklch(0.578 0.198 268.129));
        color: var(--sfx-primary-foreground, oklch(1 0 0));
        font-weight: 500;
      }
      .day:disabled {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        opacity: 0.4;
        cursor: default;
      }
    `]}willUpdate(){if(!this._viewInitialized){this._viewInitialized=!0;let e=this.value??new Date;this._viewYear=e.getFullYear(),this._viewMonth=e.getMonth()}}get _locale(){return this.locale||document.documentElement.lang||`en`}get _monthOptions(){let e=new Intl.DateTimeFormat(this._locale,{month:`long`});return Array.from({length:12},(t,n)=>({value:String(n),label:e.format(new Date(2e3,n,1))}))}get _yearOptions(){let e=this.minDate?.getFullYear()??this._viewYear-10,t=this.maxDate?.getFullYear()??this._viewYear+10;return Array.from({length:t-e+1},(t,n)=>{let r=e+n;return{value:String(r),label:String(r)}})}get _weekdayLabels(){let e=new Intl.DateTimeFormat(this._locale,{weekday:`short`});return Array.from({length:7},(t,n)=>{let r=e.format(new Date(2e3,0,3+n)).slice(0,2);return r.charAt(0).toUpperCase()+r.slice(1)})}get _days(){let e=(new Date(this._viewYear,this._viewMonth,1).getDay()+6)%7,t=new Date(this._viewYear,this._viewMonth,1-e);return Array.from({length:42},(e,n)=>{let r=new Date(t.getFullYear(),t.getMonth(),t.getDate()+n);return{date:r,outside:r.getMonth()!==this._viewMonth}})}_isDisabled(e){return!!(this.minDate&&Ka(e)<Ka(this.minDate)||this.maxDate&&Ka(e)>Ka(this.maxDate))}_prevMonth(){this._viewMonth===0?(this._viewMonth=11,--this._viewYear):--this._viewMonth}_nextMonth(){this._viewMonth===11?(this._viewMonth=0,this._viewYear+=1):this._viewMonth+=1}_selectDay(e){this._isDisabled(e)||this.dispatchEvent(new CustomEvent(`sfx-select`,{detail:{date:e},bubbles:!0,composed:!0}))}render(){let e=Ka(new Date);return a`
      <div class="header">
        <button class="nav-btn" aria-label="Previous month" @click=${()=>this._prevMonth()}>
          <sfx-icon name="chevron-left" .size=${16}></sfx-icon>
        </button>
        <sfx-dropdown
          class="month-select"
          variant="borderless"
          .options=${this._monthOptions}
          .value=${String(this._viewMonth)}
          @sfx-change=${e=>{this._viewMonth=Number(e.detail.value)}}
        ></sfx-dropdown>
        <sfx-dropdown
          class="year-select"
          variant="borderless"
          .options=${this._yearOptions}
          .value=${String(this._viewYear)}
          @sfx-change=${e=>{this._viewYear=Number(e.detail.value)}}
        ></sfx-dropdown>
        <button class="nav-btn" aria-label="Next month" @click=${()=>this._nextMonth()}>
          <sfx-icon name="chevron-right" .size=${16}></sfx-icon>
        </button>
      </div>
      <div class="weekdays">
        ${this._weekdayLabels.map(e=>a`<span class="weekday">${e}</span>`)}
      </div>
      <div class="days">
        ${this._days.map(({date:t,outside:n})=>{let r=this._isDisabled(t),i=qa(t,e),o=this.value?qa(t,this.value):!1,s=[`day`,n&&`outside`,i&&`today`,o&&`selected`].filter(Boolean).join(` `);return a`
            <button class=${s} ?disabled=${r} @click=${()=>this._selectDay(t)}>
              ${t.getDate()}
            </button>
          `})}
      </div>
    `}};l([i({attribute:!1})],Ja.prototype,`value`,void 0),l([i({attribute:!1})],Ja.prototype,`minDate`,void 0),l([i({attribute:!1})],Ja.prototype,`maxDate`,void 0),l([i()],Ja.prototype,`locale`,void 0),l([c()],Ja.prototype,`_viewYear`,void 0),l([c()],Ja.prototype,`_viewMonth`,void 0),Ja=l([j(`sfx-calendar`)],Ja);function Ya(e){if(!e)return null;let[t,n,r]=e.split(`-`).map(Number);return!t||!n||!r?null:new Date(t,n-1,r)}function Xa(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Za(e){return new Intl.DateTimeFormat(e,{year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(new Date(2e3,0,1)).map(e=>e.type).filter(e=>e===`month`||e===`day`||e===`year`)}function Qa(e){return new Intl.DateTimeFormat(e,{year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(new Date(2e3,0,1)).map(e=>{switch(e.type){case`month`:return`MM`;case`day`:return`DD`;case`year`:return`YYYY`;default:return e.value}}).join(``)}function $a(e,t){let n=e.split(/[^0-9]+/).filter(Boolean);if(n.length!==3)return null;let r=Za(t),i={};for(let[e,t]of r.entries()){let r=n[e];if(t===`year`?r.length!==4:r.length>2)return null;i[t]=Number(r)}let{month:a,day:o,year:s}=i;if(!a||!o||!s||a<1||a>12||o<1||o>31)return null;let c=new Date(s,a-1,o);return c.getFullYear()!==s||c.getMonth()!==a-1||c.getDate()!==o?null:c}var Y=class extends e{constructor(...e){super(...e),this.value=``,this.min=``,this.max=``,this.placeholder=``,this.disabled=!1,this.locale=``,this._draft=``,this._error=``,this._open=!1,this._popoverTop=0,this._popoverBottom=0,this._popoverLeft=0,this._popoverPosition=`below`,this._openCalendar=()=>{this.disabled||this._open||(this._open=!0,this._updatePopoverPosition(),document.addEventListener(`click`,this._handleOutsideClick),document.addEventListener(`keydown`,this._handleKeyDown))},this._toggleCalendar=()=>{this.disabled||(this._open?(this._open=!1,this._cleanupListeners()):this._openCalendar())},this._handleOutsideClick=e=>{this._open&&!e.composedPath().includes(this)&&(this._open=!1,this._cleanupListeners())},this._handleKeyDown=e=>{e.key===`Escape`&&this._open&&(e.preventDefault(),e.stopPropagation(),this._open=!1,this._cleanupListeners())}}static{this.styles=[Pi,Ii,r`
      :host {
        position: relative;
        display: inline-block;
        width: 100%;
        min-width: 0;
      }
      .field {
        display: flex;
        align-items: center;
        width: 100%;
        height: 36px;
        padding: 0 10px;
        box-sizing: border-box;
        border: 1px solid var(--sfx-input, oklch(0.871 0.016 241.798));
        border-radius: var(--sfx-radius-sm, 6px);
        background: var(--sfx-background, oklch(1 0 0));
      }
      .field:hover:not(.disabled) {
        border-color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .field.disabled {
        opacity: 0.5;
      }
      .field.open,
      .field:focus-within {
        border-color: var(--sfx-primary, oklch(0.578 0.198 268.129));
      }
      .field.error {
        border-color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
      }
      input {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        background: none;
        padding: 0;
        margin: 0;
        color: var(--sfx-foreground, oklch(0.37 0.022 248.413));
        font-family: inherit;
        font-size: var(--sfx-font-size-sm, 0.875rem);
      }
      input:disabled {
        cursor: default;
      }
      input::placeholder {
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
      }
      .icon-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-left: 8px;
        padding: 0;
        border: none;
        background: none;
        color: var(--sfx-muted-foreground, oklch(0.685 0.033 249.82));
        cursor: pointer;
      }
      .icon-btn:disabled {
        cursor: default;
      }
      .error-text {
        font-size: 0.8125rem;
        color: var(--sfx-destructive, oklch(0.577 0.215 27.325));
        margin-top: 4px;
      }
      .popover {
        position: fixed;
        z-index: 50;
        background: var(--sfx-card, oklch(1 0 0));
        border: 1px solid var(--sfx-border, oklch(92.86% 0.009 247.92));
        border-radius: var(--sfx-radius, 8px);
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        padding: 10px;
      }
    `]}get _effectiveLocale(){return this.locale||document.documentElement.lang||`en`}get _selectedDate(){return Ya(this.value)}get _displayText(){let e=this._selectedDate;return e?new Intl.DateTimeFormat(this._effectiveLocale).format(e):``}willUpdate(e){e.has(`value`)&&this.shadowRoot?.activeElement?.tagName!==`INPUT`&&(this._draft=this._displayText,this._error=``)}render(){let e=this._selectedDate;return a`
      <div
        class="field ${this._open?`open`:``} ${this.disabled?`disabled`:``} ${this._error?`error`:``}"
      >
        <input
          type="text"
          .value=${this._draft}
          placeholder=${this.placeholder||Qa(this._effectiveLocale)}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        />
        <button
          class="icon-btn"
          type="button"
          aria-label="Open calendar"
          ?disabled=${this.disabled}
          @click=${this._toggleCalendar}
        >
          <sfx-icon name="calendar" .size=${16}></sfx-icon>
        </button>
      </div>
      ${this._error?a`<div class="error-text">${this._error}</div>`:s}
      ${this._open?a`
            <div
              class="popover"
              ${A({[this._popoverPosition===`below`?`top`:`bottom`]:`${this._popoverPosition===`below`?this._popoverTop:this._popoverBottom}px`,left:`${this._popoverLeft}px`})}
            >
              <sfx-calendar
                .value=${e}
                .minDate=${Ya(this.min)}
                .maxDate=${Ya(this.max)}
                .locale=${this.locale}
                @sfx-select=${this._handleSelect}
              ></sfx-calendar>
            </div>
          `:s}
    `}_handleInput(e){this._draft=e.target.value,this._validateAndCommit(this._draft)}_validateAndCommit(e){if(!e){this._error=``,this._commit(``);return}let t=$a(e,this._effectiveLocale),n=Ya(this.min),r=Ya(this.max);if(!t||t&&(n&&t<n||r&&t>r)){this._error=`Invalid date. Use ${Qa(this._effectiveLocale)}`;return}this._error=``,this._commit(Xa(t))}_commit(e){e!==this.value&&(this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})))}_handleSelect(e){this._open=!1,this._cleanupListeners(),this._error=``,this._commit(Xa(e.detail.date))}_updatePopoverPosition(){let e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom,n=e.top;this._popoverPosition=t<340&&n>t?`above`:`below`,this._popoverPosition===`below`?this._popoverTop=e.bottom+4:this._popoverBottom=window.innerHeight-e.top+4,this._popoverLeft=Math.min(e.left,window.innerWidth-284)}_cleanupListeners(){document.removeEventListener(`click`,this._handleOutsideClick),document.removeEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupListeners()}};l([i()],Y.prototype,`value`,void 0),l([i()],Y.prototype,`min`,void 0),l([i()],Y.prototype,`max`,void 0),l([i()],Y.prototype,`placeholder`,void 0),l([i({type:Boolean})],Y.prototype,`disabled`,void 0),l([i()],Y.prototype,`locale`,void 0),l([c()],Y.prototype,`_draft`,void 0),l([c()],Y.prototype,`_error`,void 0),l([c()],Y.prototype,`_open`,void 0),l([c()],Y.prototype,`_popoverTop`,void 0),l([c()],Y.prototype,`_popoverBottom`,void 0),l([c()],Y.prototype,`_popoverLeft`,void 0),l([c()],Y.prototype,`_popoverPosition`,void 0),Y=l([j(`sfx-date-input`)],Y);var X=class extends e{constructor(...e){super(...e),this.selectedAssets=[],this.selectedFolders=[],this.totalCount=0,this.totalFolderCount=0,this.isSelectingAll=!1,this.multiSelect=!0,this.showTransform=!1,this.t=(e,t)=>typeof t==`string`?t:e}static{this.styles=r`
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
  `}get _totalSelected(){return this.selectedAssets.length+this.selectedFolders.length}_formatCount(){let{t:e}=this,t=this.selectedAssets.length,n=this.selectedFolders.length;return n===0?e(`assetsSelected`,{count:t,defaultValue_one:`{{count}} asset selected`,defaultValue_other:`{{count}} assets selected`}):t===0?e(`foldersSelected`,{count:n,defaultValue_one:`{{count}} folder selected`,defaultValue_other:`{{count}} folders selected`}):e(`foldersAndAssetsSelected`,`{{folders}} and {{assets}} selected`,{folders:e(`foldersCount`,{count:n,defaultValue_one:`{{count}} folder`,defaultValue_other:`{{count}} folders`}),assets:e(`assetsCount`,{count:t,defaultValue_one:`{{count}} asset`,defaultValue_other:`{{count}} assets`})})}_confirm(){this.dispatchEvent(new CustomEvent(`selection-confirm`,{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_transform(){this.dispatchEvent(new CustomEvent(`selection-transform`,{detail:{assets:this.selectedAssets,folders:this.selectedFolders},bubbles:!0,composed:!0}))}_clear(){this.dispatchEvent(new CustomEvent(`selection-clear`,{bubbles:!0,composed:!0}))}_canSelectMore(){if(this.maxSelections&&this._totalSelected>=this.maxSelections)return!1;let e=this._selectScope;return e===`assets`?this.selectedAssets.length<this.totalCount:e===`folders`?this.selectedFolders.length<this.totalFolderCount:this._totalSelected<this.totalCount+this.totalFolderCount}get _scopeTotal(){let e=this._selectScope;return e===`assets`?this.totalCount:e===`folders`?this.totalFolderCount:this.totalCount+this.totalFolderCount}get _selectScope(){let e=this.selectedAssets.length>0,t=this.selectedFolders.length>0;return e&&!t?`assets`:t&&!e?`folders`:`all`}_selectAll(){this.dispatchEvent(new CustomEvent(`select-all`,{detail:{scope:this._selectScope},bubbles:!0,composed:!0}))}render(){return this._totalSelected===0?s:a`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        ${this.multiSelect?a`
              <span class="divider"></span>
              <span class="select-label">${this.t(`selectColon`,`Select:`)}</span>
              ${this._canSelectMore()?a`<button
                    class="bar-btn"
                    ?disabled=${this.isSelectingAll}
                    @click=${this._selectAll}
                  >
                    <sfx-icon name="check-check" .size=${14}></sfx-icon>${this.isSelectingAll?this.t(`selecting`,`Selecting...`):this.maxSelections&&this.maxSelections<this._scopeTotal?this.t(`selectFirst`,`First ${this.maxSelections}`,{count:this.maxSelections}):this._selectScope===`assets`?this.t(`selectAllAssets`,`Select all assets`):this._selectScope===`folders`?this.t(`selectAllFolders`,`Select all folders`):this.t(`selectAll`,`Select all`)}
                  </button>`:s}
              <button class="bar-btn" @click=${this._clear}>
                <sfx-icon name="close" .size=${14}></sfx-icon>${this.t(`deselectAll`,`Deselect all`)}
              </button>
              ${this.maxSelections&&this._totalSelected>=this.maxSelections?a`<span class="limit-notice"
                    >${this.t(`maxSelectionsAllowed`,`Max ${this.maxSelections} allowed`,{count:this.maxSelections})}</span
                  >`:s}
            `:s}
        <div class="spacer"></div>
        ${this.showTransform?a`
              <button class="btn-confirm btn-transform" @click=${this._transform}>
                ${this.t(`transform`,`Transform`)}
              </button>
            `:s}
        <button class="btn-confirm" @click=${this._confirm}>${this.t(`confirm`,`Confirm`)}</button>
      </div>
    `}};l([i({type:Array})],X.prototype,`selectedAssets`,void 0),l([i({type:Array})],X.prototype,`selectedFolders`,void 0),l([i({type:Number})],X.prototype,`totalCount`,void 0),l([i({type:Number})],X.prototype,`totalFolderCount`,void 0),l([i({type:Boolean})],X.prototype,`isSelectingAll`,void 0),l([i({type:Boolean})],X.prototype,`multiSelect`,void 0),l([i({type:Number})],X.prototype,`maxSelections`,void 0),l([i({type:Boolean})],X.prototype,`showTransform`,void 0),l([i({attribute:!1})],X.prototype,`t`,void 0),X=l([j(`ap-selection-bar`)],X);var eo=class extends e{constructor(...e){super(...e),this.active=!1,this.rect={x:0,y:0,width:0,height:0}}static{this.styles=r`
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
  `}render(){return!this.active||this.rect.width<5||this.rect.height<5?s:a`
      <div
        class="marquee"
        ${A({left:`${this.rect.x}px`,top:`${this.rect.y}px`,width:`${this.rect.width}px`,height:`${this.rect.height}px`})}
      ></div>
    `}};l([i({type:Boolean})],eo.prototype,`active`,void 0),l([i({type:Object})],eo.prototype,`rect`,void 0),eo=l([j(`ap-marquee-overlay`)],eo);var to=class extends e{constructor(...e){super(...e),this.folders=[],this.loading=!1,this.t=(e,t)=>typeof t==`string`?t:e,this._mode=`recursive`}static{this.styles=[M,r`
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
    `]}_handleConfirm(){this.dispatchEvent(new CustomEvent(`folder-resolve-confirm`,{detail:{mode:this._mode},bubbles:!0,composed:!0}))}_handleCancel(){this.dispatchEvent(new CustomEvent(`folder-resolve-cancel`,{bubbles:!0,composed:!0}))}_handleModeChange(e){this._mode=e.detail.value}render(){let e=this.folders.length;return a`
      <div
        class="backdrop"
        @click=${e=>{e.target===e.currentTarget&&this._handleCancel()}}
      >
        <div class="dialog">
          <div class="title">${this.t(`addFolderContents`,`Add folder contents`)}</div>
          <div class="description">
            ${this.t(`folderResolveDescription`,`You selected {{count}} folder(s). How would you like to add the assets?`,{count:e})}
          </div>
          <div class="options">
            <sfx-radio-group
              .value=${this._mode}
              .options=${[{value:`direct`,label:this.t(`directAssetsOnly`,`Direct assets only`)},{value:`recursive`,label:this.t(`allAssetsIncludingSubfolders`,`All assets (including subfolders)`)}]}
              @sfx-change=${this._handleModeChange}
            ></sfx-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>
              ${this.t(`cancel`,`Cancel`)}
            </button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading?a`<span class="loading-content"
                    ><sfx-spinner .size=${14}></sfx-spinner> ${this.t(`loading`,`Loading...`)}</span
                  >`:this.t(`addAssets`,`Add assets`)}
            </button>
          </div>
        </div>
      </div>
    `}};l([i({type:Array})],to.prototype,`folders`,void 0),l([i({type:Boolean})],to.prototype,`loading`,void 0),l([i({attribute:!1})],to.prototype,`t`,void 0),l([c()],to.prototype,`_mode`,void 0),to=l([j(`ap-folder-resolve-dialog`)],to);var no=[`webp`,`jpeg`,`png`,`gif`];function ro(e){let t=(e??``).toLowerCase();return no.includes(t)?t:`jpeg`}var Z=class extends e{constructor(...e){super(...e),this.assets=[],this.isMultiSelect=!1,this.t=(e,t)=>typeof t==`string`?t:e,this._format=`jpeg`,this._quality=`excellent`,this._lockAspect=!0,this._activePreset=`original`,this._defaultFormat=`jpeg`}static{this.styles=[M,r`
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
    `]}get _ratio(){let e=this.assets.find(e=>cn(e));if(!e)return 1.5;let t=ln(e),n=un(e);return t&&n?t/n:1.5}get _isDirty(){return this._format!==this._defaultFormat||this._quality!==`excellent`||this._width!==this._defaultWidth||this._height!==this._defaultHeight}willUpdate(e){e.has(`assets`)&&this._initDefaults()}_initDefaults(){let e=this.assets.find(e=>cn(e));if(this._defaultFormat=ro(e?.extension),this._format=this._defaultFormat,this._quality=`excellent`,this._lockAspect=!0,this._activePreset=`original`,this.isMultiSelect)this._defaultWidth=void 0,this._defaultHeight=void 0;else if(e){let t=ln(e),n=un(e);this._defaultWidth=t||void 0,this._defaultHeight=n||void 0}else this._defaultWidth=void 0,this._defaultHeight=void 0;this._width=this._defaultWidth,this._height=this._defaultHeight}_handleFormatChange(e){this._format=e.detail.value}_handleQualityChange(e){this._quality=e.detail.value}_handleWidthInput(e){let t=e.target.value,n=parseInt(t,10),r=t===``||isNaN(n)||n<=0?void 0:n;this._width=r,this._activePreset=``,this._lockAspect&&r&&(this._height=Math.round(r/this._ratio))}_handleHeightInput(e){let t=e.target.value,n=parseInt(t,10),r=t===``||isNaN(n)||n<=0?void 0:n;this._height=r,this._activePreset=``,this._lockAspect&&r&&(this._width=Math.round(r*this._ratio))}_handleMaxSizeInput(e){let t=e.target.value,n=parseInt(t,10),r=t===``||isNaN(n)||n<=0?void 0:n;this._width=r,this._height=r,this._activePreset=``}_toggleLock(){this._lockAspect=!this._lockAspect}_handlePreset(e){this._activePreset=e.value,e.value===`original`?(this._width=this._defaultWidth,this._height=this._defaultHeight):e.width&&(this._width=e.width,this._height=Math.round(e.width/this._ratio))}_handleApply(){let e={format:this._format,quality:this._format===`png`?void 0:this._quality,width:this._width,height:this._height};this.dispatchEvent(new CustomEvent(`transform-confirm`,{detail:{params:e,isAspectLocked:this._lockAspect},bubbles:!0,composed:!0}))}_handleSkip(){this.dispatchEvent(new CustomEvent(`transform-skip`,{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent(`transform-cancel`,{bubbles:!0,composed:!0}))}_handleBackdropClick(e){e.target===e.currentTarget&&this._handleClose()}render(){let e=this._format===`png`;return a`
      <div class="backdrop" @click=${this._handleBackdropClick}>
        <div class="dialog">
          <div class="header">
            <div class="title">${this.t(`exportOptions`,`Export Options`)}</div>
            <button class="close-btn" @click=${this._handleClose} title=${this.t(`close`,`Close`)}>
              <sfx-icon name="close" .size=${16}></sfx-icon>
            </button>
          </div>

          <div class="section">
            <span class="section-label">${this.t(`format`,`Format`)}</span>
            <sfx-radio-group
              direction="horizontal"
              .value=${this._format}
              .options=${fn}
              @sfx-change=${this._handleFormatChange}
            ></sfx-radio-group>
          </div>

          ${e?s:a`
                <div class="section">
                  <span class="section-label">${this.t(`quality`,`Quality`)}</span>
                  <sfx-dropdown
                    .value=${this._quality}
                    .options=${pn}
                    @sfx-change=${this._handleQualityChange}
                  ></sfx-dropdown>
                </div>
              `}

          <div class="section">
            <span class="section-label">${this.t(`size`,`Size`)}</span>
            ${this.isMultiSelect?a`
                  <div class="input-group half-width">
                    <span class="input-label">${this.t(`maxSize`,`Max Size`)}</span>
                    <div class="input-wrapper">
                      <input
                        type="number"
                        min="1"
                        .value=${this._width==null?``:String(this._width)}
                        placeholder=${this.t(`original`,`Original`)}
                        @input=${this._handleMaxSizeInput}
                      />
                      <span class="input-suffix">px</span>
                    </div>
                  </div>
                `:a`
                  <div class="dimensions-row">
                    <div class="input-group">
                      <span class="input-label">${this.t(`width`,`Width`)}</span>
                      <div class="input-wrapper">
                        <input
                          type="number"
                          min="1"
                          .value=${this._width==null?``:String(this._width)}
                          @input=${this._handleWidthInput}
                        />
                        <span class="input-suffix">px</span>
                      </div>
                    </div>
                    <button
                      class="lock-btn ${this._lockAspect?`locked`:``}"
                      @click=${this._toggleLock}
                      title=${this._lockAspect?this.t(`unlockAspectRatio`,`Unlock aspect ratio`):this.t(`lockAspectRatio`,`Lock aspect ratio`)}
                    >
                      <sfx-icon name=${this._lockAspect?`lock`:`link-2`} .size=${16}></sfx-icon>
                    </button>
                    <div class="input-group">
                      <span class="input-label">${this.t(`height`,`Height`)}</span>
                      <div class="input-wrapper">
                        <input
                          type="number"
                          min="1"
                          .value=${this._height==null?``:String(this._height)}
                          @input=${this._handleHeightInput}
                        />
                        <span class="input-suffix">px</span>
                      </div>
                    </div>
                  </div>
                `}
            <div class="presets-row">
              ${mn.map(e=>a`
                  <button
                    class="preset-btn ${this._activePreset===e.value?`active`:``}"
                    @click=${()=>this._handlePreset(e)}
                  >
                    ${e.label}
                  </button>
                `)}
            </div>
          </div>

          <div class="actions">
            <button class="btn" @click=${this._handleSkip}>
              ${this.exportOriginalLabel??this.t(`exportOriginal`,`Export Original`)}
            </button>
            <button class="btn btn-primary" @click=${this._handleApply} ?disabled=${!this._isDirty}>
              ${this.applyExportLabel??this.t(`applyAndExport`,`Apply & Export`)}
            </button>
          </div>
        </div>
      </div>
    `}};l([i({type:Array})],Z.prototype,`assets`,void 0),l([i({type:Boolean})],Z.prototype,`isMultiSelect`,void 0),l([i({attribute:!1})],Z.prototype,`t`,void 0),l([i({attribute:!1})],Z.prototype,`exportOriginalLabel`,void 0),l([i({attribute:!1})],Z.prototype,`applyExportLabel`,void 0),l([c()],Z.prototype,`_format`,void 0),l([c()],Z.prototype,`_quality`,void 0),l([c()],Z.prototype,`_width`,void 0),l([c()],Z.prototype,`_height`,void 0),l([c()],Z.prototype,`_lockAspect`,void 0),l([c()],Z.prototype,`_activePreset`,void 0),Z=l([j(`ap-transformation-dialog`)],Z);var io=/[/\\\x00-\x1f]/,Q=class extends e{constructor(...e){super(...e),this.t=(e,t)=>typeof t==`string`?t:e,this.currentFolderPath=`/`,this.loading=!1,this.error=null,this._name=``,this._localError=null,this._apiErrorDismissed=!1}static{this.styles=r`
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
  `}updated(e){e.has(`error`)&&this.error&&(this._apiErrorDismissed=!1)}_onInput(e){this._name=e.detail.value,this._localError&&=null,this.error&&!this._apiErrorDismissed&&(this._apiErrorDismissed=!0)}_validateName(e){return io.test(e)?this.t(`folderNameInvalidChars`,`Folder name can't contain "/" or "\\".`):e===`.`||e===`..`?this.t(`folderNameReserved`,`Folder name can't be "." or "..".`):null}_onConfirm(e){if(this.loading)return;let t=e.detail.value.trim();if(!t)return;let n=this._validateName(t);if(n){this._localError=n;return}this.dispatchEvent(new CustomEvent(`create-folder-confirm`,{detail:{name:t},bubbles:!0,composed:!0}))}_onCancel(){this.dispatchEvent(new CustomEvent(`create-folder-cancel`,{bubbles:!0,composed:!0}))}render(){let e=this._localError??(this._apiErrorDismissed?null:this.error);return a`
      <sfx-dialog
        kind="prompt"
        heading=${this.t(`createFolder`,`Create folder`)}
        placeholder=${this.t(`folderName`,`Folder name`)}
        confirmLabel=${this.t(`create`,`Create`)}
        .loading=${this.loading}
        .error=${e}
        .confirmDisabled=${this._name.trim().length===0}
        @sfx-dialog-input=${this._onInput}
        @sfx-dialog-confirm=${this._onConfirm}
        @sfx-dialog-cancel=${this._onCancel}
      >
        <div class="description">${this.t(`inFolder`,`In`)} <code>${this.currentFolderPath||`/`}</code></div>
      </sfx-dialog>
    `}};l([i({attribute:!1})],Q.prototype,`t`,void 0),l([i()],Q.prototype,`currentFolderPath`,void 0),l([i({type:Boolean})],Q.prototype,`loading`,void 0),l([i()],Q.prototype,`error`,void 0),l([c()],Q.prototype,`_name`,void 0),l([c()],Q.prototype,`_localError`,void 0),l([c()],Q.prototype,`_apiErrorDismissed`,void 0),Q=l([j(`ap-create-folder-dialog`)],Q);var $=class t extends e{static{this.styles=[r`
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
    `]}static{this.VARIANTS_FETCH_MAX_ATTEMPTS=3}_toKeySet(e){return Array.isArray(e)?new Set(e):null}get _enabledFilterKeys(){return this._toKeySet(this.config?.enabledFilters)}_isFilterEnabled(e){let t=this._enabledFilterKeys;if(!t||!er.has(e)||e in this._normalizedForcedFilters)return!0;let n=$n.has(e)?C.APPROVAL:e;return t.has(n)}get _visiblePinnedFilters(){let{filters:e}=this.store.getState();return e.pinned.filter(e=>this._isFilterEnabled(e))}get _enabledMetadataFieldKeys(){return this._toKeySet(this.config?.enabledMetadataFields)}get _visiblePinnedMetadata(){let{filters:e}=this.store.getState();if(!this._isFilterEnabled(C.METADATA))return[];let t=this._enabledMetadataFieldKeys;return t?e.metadata.pinned.filter(e=>t.has(zn(e))):e.metadata.pinned}get _visibleAppliedMetadata(){let{filters:e}=this.store.getState();if(!this._isFilterEnabled(C.METADATA))return{};let t=this._enabledMetadataFieldKeys;return t?Object.fromEntries(Object.entries(e.metadata.applied).filter(([e])=>t.has(zn(e)))):e.metadata.applied}_localizeMetadataFields(e,t){let n=this._localizedFieldsCache;if(n&&n.fields===e&&n.t===t)return n.result;let r=fi(e,t);return this._localizedFieldsCache={fields:e,t,result:r},r}_getFilterMetadataFields(e){if(!this._isFilterEnabled(C.METADATA))return[];let t=this._enabledMetadataFieldKeys;return t?e.filter(e=>t.has(e.key)):e}get _variantOptions(){let e=this.store.getState().t;return(!this._variantOptionsCache||this._variantOptionsCachePresets!==this._variantPresets||this._variantOptionsCacheT!==e)&&(this._variantOptionsCache=[{value:`original`,label:e(`original`,`Original`)},...this._variantPresets.map(e=>({value:e.name,label:e.name}))],this._variantOptionsCachePresets=this._variantPresets,this._variantOptionsCacheT=e),this._variantOptionsCache}_handleVariantDefaultChange(e){this._defaultVariantName=e.detail.name}_handleAssetVariantChange(e){let{uuid:t,name:n,asset:r,index:i}=e.detail;this.selectionCtrl.selectAsset(r,i)&&(this._variantOverrides={...this._variantOverrides,[t]:n})}_applyVariantSelection(e){return this.config?.variants?e.map(e=>{if(!cn(e))return e;let t=this._variantOverrides[e.uuid]??this._defaultVariantName;if(!t||t===`original`)return e;let n=e.transformation?.url.cdn??e.url?.cdn??``;return n?{...e,selectedVariant:{name:t,url:Vt(n,t)}}:e}):e}constructor(){super(),this._initFailed=!1,this._variantsFetched=!1,this._variantsFetching=!1,this._variantsFetchAttempts=0,this._loadId=0,this._loadMoreId=0,this._selectAllId=0,this._loadDataTimer=null,this._pendingFilter=null,this._pendingMetadataField=null,this._normalizedForcedFilters={},this._localizedFieldsCache=null,this._uploaderEl=null,this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._createFolderOpen=!1,this._isCreatingFolder=!1,this._createFolderError=null,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._variantPresets=[],this._defaultVariantName=`original`,this._variantOverrides={},this._onDragEnter=e=>{!this.config?.uploader||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._isDragOver=!0))},this._onDragOver=e=>{!this.config?.uploader||!this._hasFileTransfer(e)||(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`))},this._onDragLeave=e=>{!this.config?.uploader||!this._hasFileTransfer(e)||(e.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._isDragOver=!1))},this._onDrop=e=>{if(!this.config?.uploader||!this._hasFileTransfer(e))return;e.preventDefault(),this._dragCounter=0,this._isDragOver=!1;let t=Array.from(e.dataTransfer?.files??[]);t.length>0&&this._openUploader(t)},this._cancelCreateFolderRequested=!1,this.store=v(),this.storeCtrl=new At(this,this.store),this.selectionCtrl=new Mt(this,this.store),this.infiniteScrollCtrl=new Lt(this,()=>this._loadMore()),this.marqueeCtrl=new It(this,{queryCards:e=>{let t=[],n=(e,n,r)=>e.querySelectorAll(`[${n}]`).forEach(e=>{let n=e.dataset[r];n&&t.push({uuid:n,el:e})}),r=!1;for(let t of Array.from(e.children))t.shadowRoot&&(n(t.shadowRoot,`data-asset-uuid`,`assetUuid`),n(t.shadowRoot,`data-folder-uuid`,`folderUuid`),r=!0);return(!r||t.length===0)&&(n(e,`data-asset-uuid`,`assetUuid`),n(e,`data-folder-uuid`,`folderUuid`)),t},getSelection:()=>{let e=this.store.getState();return[...e.selectedAssets.keys(),...e.selectedFolders.keys()]},setSelection:e=>{let t=this.store.getState(),n=t.config?.folderSelection===!0,r=new Map,i=new Map;for(let a of e){let e=t.selectedAssets.get(a);if(e){r.set(a,e);continue}let o=t.selectedFolders.get(a);if(n&&o){i.set(a,o);continue}if(!t.disabledAssetIds.has(a)){let e=t.assets.find(e=>e.uuid===a);if(e){r.set(a,e);continue}}if(n&&!t.disabledFolderIds.has(a)){let e=t.folders.find(e=>e.uuid===a);e&&i.set(a,e)}}let a=t.config?.maxSelections,o=r.size+(n?i.size:0),s=a&&o>a?new Map(Array.from(r.entries()).slice(0,Math.max(0,a-i.size))):r;this.store.setState({selectedAssets:s,...n?{selectedFolders:i}:{}})},isInteractiveTarget:e=>(this.store.getState().config?.multiSelect??!0)===!1||e.composedPath().some(e=>{if(!(e instanceof HTMLElement))return!1;if(e instanceof HTMLButtonElement||e instanceof HTMLInputElement)return!0;let t=e.tagName.toLowerCase();return t.startsWith(`ap-asset-`)||t.startsWith(`ap-folder-`)?!0:e.classList.contains(`check`)||e.classList.contains(`check-box`)})})}get _isInline(){return this.config?.displayMode===`inline`}disconnectedCallback(){super.disconnectedCallback(),this._uploaderEl&&=(this._uploaderEl.remove(),null),this._uploaderImportPromise=null,this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1}updated(e){super.updated(e),e.has(`config`)&&this.config&&this._initConfig(this.config);let t=this.renderRoot.querySelector(`#sentinel`);if(t&&t!==this._lastSentinel){this._lastSentinel=t;let e=this.renderRoot.querySelector(`.main-content`);this.infiniteScrollCtrl.observe(t,e)}let n=this.renderRoot.querySelector(`.main-content`);n&&n!==this._lastMarqueeContainer&&(this._lastMarqueeContainer=n,this.marqueeCtrl.attach(n))}_computeAuthKey(e){return JSON.stringify({auth:e.auth,apiBase:e.apiBase})}_initConfig(e){let n={folderSelection:!0,...e};this._applyConfig(n);let r=this._computeAuthKey(n);!this._initPromise||r!==this._lastAuthKey||this._initFailed?(r!==this._lastAuthKey&&(this._variantPresets=[],this._variantsFetched=!1,this._variantsFetchAttempts=0,this._defaultVariantName=`original`,this._variantOverrides={}),this._lastAuthKey=r,this._initFailed=!1,this._initPromise=this._fetchBootstrapData(n).catch(()=>{this._initFailed=!0})):n.variants&&!this._variantsFetched&&!this._variantsFetching&&this._variantsFetchAttempts<t.VARIANTS_FETCH_MAX_ATTEMPTS&&this._initPromise.then(()=>this._fetchVariantPresets(n)),this._initI18n(n.locale),this.toggleAttribute(`inline`,n.displayMode===`inline`),n.displayMode===`inline`&&!this.store.getState().isOpen&&this.open()}_applyConfig(e){let t=ui(),n=t.sortBy??e.defaultSortBy??`created_at`,r=t.sortDirection??e.defaultSortDirection??`desc`;this.store.setState({config:e,projectToken:e.auth.projectToken,viewMode:e.rememberLastView&&bi(e.auth.projectToken)||e.defaultViewMode||`grid`,sortBy:n,sortDirection:r,disabledAssetIds:new Set(e.disabledAssetIds??[]),disabledFolderIds:new Set(e.disabledFolderIds??[])}),Tn(e.transformRemoteThumbnail),this._normalizedForcedFilters=ni(e.forcedFilters)}async _initI18n(e){try{let{i18n:t,isNew:n}=await Ot(e||`en`);n&&t.on(`missingKey`,(e,t,n,r,i,a)=>{let o=n.match(/_(?:zero|one|two|few|many|other)$/),s=o&&a?.[`defaultValue${o[0]}`]?String(a[`defaultValue${o[0]}`]):r;kt.handleMissingKey(n,s,t)}),this.store.setState({t:(e,n,r)=>typeof n==`string`?t.t(e,n,r??{}):t.t(e,n??{})})}catch{}}async _fetchVariantPresets(e){if(!(!this.apiClient||!e.variants||this._initFailed||this._variantsFetching||this._variantsFetched)){this._variantsFetching=!0,this._variantsFetchAttempts++;try{this._variantPresets=await Ut(this.apiClient),this._variantsFetched=!0}catch(e){this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:e,context:`variantPresets`},bubbles:!0,composed:!0}))}finally{this._variantsFetching=!1}}}async _fetchBootstrapData(e){let t=e.apiBase||`https://api.filerobot.com/${e.auth.projectToken}/v5`,n;if(e.auth.mode===`securityTemplate`){let{key:r,permissions:i}=await rn(e.auth,t);n=r,this.store.setState({sassKey:r,permissions:i})}else n=e.auth.sassKey;this.apiClient=new p({apiBase:t.replace(/\/v5$/,``),headers:{"X-Filerobot-Key":n}});try{let[t,n,r,i,a,o]=await Promise.allSettled([jr(this.apiClient),Bt(this.apiClient),tn(this.apiClient),kr(this.apiClient),Qt(this.apiClient),e.variants?Ut(this.apiClient):Promise.resolve([])]),s={};if(t.status===`fulfilled`){let{fields:e,regionalVariantGroups:n,regionalFilters:r,brandColor:i,cdnPermalinkEnabled:a}=t.value;s.metadataFields=e,s.regionalVariantGroups=n,s.regionalFilters=r,s.cdnPermalinkEnabled=a,i&&(s.brandColor=i)}n.status===`fulfilled`&&(s.labels=n.value||[]),r.status===`fulfilled`&&(s.tags=r.value),a.status===`fulfilled`&&(s.collections=a.value.collections||[]),i.status===`fulfilled`&&(s.fileTypes=i.value),o.status===`fulfilled`?e.variants&&(this._variantPresets=o.value,this._variantsFetched=!0):e.variants&&this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:o.reason,context:`variantPresets`},bubbles:!0,composed:!0}));let{pinnedFilters:c,pinnedMetadata:l}=ii(e.auth.projectToken??null),u=this.store.getState().filters;s.filters={...u,pinned:c,metadata:{...u.metadata,pinned:l,visible:[...l]}},this.store.setState(s);let d=e.brandColor||s.brandColor||this.store.getState().brandColor;d&&(s.brandColor||this.store.setState({brandColor:d}),Di(this,d))}catch(e){throw this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:e,context:`init`},bubbles:!0,composed:!0})),e}}_ensureUploaderImport(){return customElements.get(`sfx-uploader`)?Promise.resolve():(this._uploaderImportPromise||=G(()=>import(`./define-BPPbrBZO.js`).then(()=>{},e=>{throw this._uploaderImportPromise=null,e}),__vite__mapDeps([0,1,2,3,4,5,6])),this._uploaderImportPromise)}_buildUploaderConfig(){let e=this.config,t=e.uploader,n=this.store.getState(),r;return r=e.auth.mode===`securityTemplate`?{mode:`security-template`,container:e.auth.projectToken,securityTemplateId:e.auth.securityTemplateKey}:{mode:`sass-key`,container:e.auth.projectToken,sassKey:e.auth.sassKey},{auth:r,targetFolder:n.currentFolderPath||`/`,mode:`inline`,restrictions:t.restrictions,concurrency:t.concurrency,autoProceed:t.autoProceed,showFillMetadata:t.showFillMetadata,connectors:t.connectors,sourcesLayout:t.sourcesLayout,header:t.header??`back`,clearOnClose:t.clearOnClose,clearOnComplete:t.clearOnComplete,closeOnComplete:t.closeOnComplete,rejectedFileAutoRemoveDelay:t.rejectedFileAutoRemoveDelay,lastUploadReview:t.lastUploadReview,showLocateButton:t.showLocateButton,showCopyCdnButton:t.showCopyCdnButton,getLocateUrl:t.getLocateUrl,minimizeOnUpload:t.minimizeOnUpload,metadataConfig:t.metadataConfig,similarityCheck:t.similarityCheck,tusConfig:t.tusConfig,locale:t.locale??e.locale,transformRemoteThumbnail:e.transformRemoteThumbnail}}async _openUploader(e){if(!this.config?.uploader||this._isUploaderOpen)return;try{await this._ensureUploaderImport()}catch(e){this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:e instanceof Error?e:Error(String(e)),context:`uploader-load`},bubbles:!0,composed:!0}));return}this._uploaderEl=document.createElement(`sfx-uploader`);let t=this._uploaderEl;t.addEventListener(`sfx-all-complete`,()=>{this.store.getState().isOpen&&this._loadData()}),t.addEventListener(`sfx-complete-action`,()=>{this._closeUploader()}),t.addEventListener(`sfx-cancel`,()=>{this._closeUploader()}),this._isUploaderOpen=!0,await this.updateComplete,t.config=this._buildUploaderConfig(),await t.updateComplete,e?.length&&t.addFiles(e)}_closeUploader(){this._isUploaderOpen=!1,this._uploaderEl&&=(this._uploaderEl.remove(),null)}_handleUploadClick(){this._openUploader()}_hasFileTransfer(e){return!!e.dataTransfer?.types?.includes(`Files`)}async open(){let e=this.store.getState(),t=new Set(Object.keys(this._normalizedForcedFilters)),n={},r=ni(this.config?.defaultFilters);for(let[e,i]of Object.entries(r))!t.has(e)&&this._isFilterEnabled(e)&&(n[e]=i);Object.keys(n);let i=this.config?.tabs??[`assets`,`folders`],a=this.config?.rememberLastTab?Si(this.config.auth.projectToken):null,o=(a&&i.includes(a)?a:null)??(this.config?.defaultTab&&i.includes(this.config.defaultTab)?this.config.defaultTab:null)??(this.config?.initialFolderPath&&i.includes(`folders`)?`folders`:null)??i[0]??`assets`;this.store.setState({isOpen:!0,activeTab:o,searchQuery:``,isAISearchActive:!!(this.config?.enableAISearch&&this.config?.defaultAISearch),filters:{metadata:{pinned:e.filters.metadata.pinned,visible:[...e.filters.metadata.pinned],applied:{}},pinned:e.filters.pinned,applied:n},offset:0,assets:[],folders:[],currentFolder:null,currentFolderPath:this._resolveInitialFolderPath(o),activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,breadcrumb:this._buildBreadcrumbFromPath(this._resolveInitialFolderPath(o),this.config?.rootFolderPath||`/`),selectedAssets:new Map,selectedFolders:new Map,isResolvingFolders:!1,folderPreviews:{},isPreviewOpen:!1,previewAsset:null,isLoading:!0,isSelectingAll:!1}),this._dragCounter=0,this._isDragOver=!1,this.dispatchEvent(new CustomEvent(`ap-open`,{detail:{timestamp:Date.now()},bubbles:!0,composed:!0})),await this.updateComplete,!this._initPromise&&this.config&&this._initConfig(this.config),!(this._initPromise&&(await this._initPromise,this._initFailed))&&this._loadData()}close(){this.store.setState({isOpen:!1}),this._dragCounter=0,this._isDragOver=!1,this._isUploaderOpen=!1,this._folderResolveOpen=!1,this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._transformAfterResolve=!1,this._defaultVariantName=`original`,this._variantOverrides={},this._selectAllId++}_scrollToTop(){this.renderRoot.querySelector(`.main-content`)?.scrollTo({top:0})}async _loadData(){if(!this.apiClient)return;let e=++this._loadId,t=this.store.getState();this._scrollToTop(),this.store.setState({isLoading:!0});try{let n=t.activeTab;if(n===`assets`){let n=this._buildSearchNotation(),r=t.currentFolderPath||`/`,i=t.isAISearchActive&&!!t.searchQuery,a=qt(this.apiClient,{fields:this.config?.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:r,offset:0,limit:t.limit,sort_by:t.sortBy,sort_direction:t.sortDirection,search:t.searchQuery||void 0,q:n||void 0,recursive:1,...i&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}),o=Jt(this.apiClient,{folder:r,q:n||void 0,search:t.searchQuery||void 0,recursive:1,...i&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}).catch(()=>null),[s,c]=await Promise.all([a,o]);if(e!==this._loadId)return;let l=s.files?.length??0,u=l>=t.limit,d=c?.stats?.approx_files_count??c?.info?.total_files_count??s.info?.total_files_count??s.base?.count?.files_recursive??s.base?.count?.files_direct??l;this.store.setState({assets:s.files||[],folders:[],totalCount:d,totalFolderCount:0,offset:0,hasMore:u,isLoading:!1})}else if(n===`folders`){let n=this._buildSearchNotation(),r=t.currentFolderPath||`/`,[i,a,o]=await Promise.all([Yt(this.apiClient,{folderPath:t.currentFolderPath,q:t.searchQuery||void 0,recursive:+!!t.searchQuery,sort_by:t.sortBy,sort_direction:t.sortDirection}),qt(this.apiClient,{fields:this.config?.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:r,offset:0,limit:t.limit,sort_by:t.sortBy,sort_direction:t.sortDirection,search:t.searchQuery||void 0,q:n||void 0,recursive:0,...t.isAISearchActive&&t.searchQuery&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}),Jt(this.apiClient,{folder:r,q:n||void 0,search:t.searchQuery||void 0,recursive:0,...t.isAISearchActive&&t.searchQuery&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}).catch(()=>null)]);if(e!==this._loadId)return;let s=i.folders||[],c={};if(s.length>0)try{c=await Xt(this.apiClient,s.map(e=>e.uuid))}catch{}if(e!==this._loadId)return;let l=a.files?.length??0,u=l>=t.limit,d=o?.stats?.approx_files_count??o?.info?.total_files_count??a.info?.total_files_count??a.base?.count?.files_direct??l;this.store.setState({assets:a.files||[],folders:s,folderPreviews:c,totalCount:d,totalFolderCount:i.total??s.length,offset:0,hasMore:u,isLoading:!1})}else if(n===`labels`){if(!t.activeLabelUuid){this.store.setState({assets:[],folders:[],totalCount:t.labels.length,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}let n=t.labels.find(e=>e.uuid===t.activeLabelUuid);if(!n){this.store.setState({isLoading:!1});return}let r=n.sid.replace(`#`,``),i=this._buildSearchNotation(),a=`labels:${r}${i?` `+i:``}`,o=t.isAISearchActive&&!!t.searchQuery,s=qt(this.apiClient,{fields:this.config?.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:`/`,offset:0,limit:t.limit,sort_by:t.sortBy,sort_direction:t.sortDirection,search:t.searchQuery||void 0,q:a,recursive:1,...o&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}),c=Jt(this.apiClient,{folder:`/`,q:a,search:t.searchQuery||void 0,recursive:1,...o&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}).catch(()=>null),[l,u]=await Promise.all([s,c]);if(e!==this._loadId)return;let d=l.files?.length??0,f=d>=t.limit,p=u?.stats?.approx_files_count??u?.info?.total_files_count??l.info?.total_files_count??l.base?.count?.files_recursive??l.base?.count?.files_direct??d;this.store.setState({assets:l.files||[],folders:[],totalCount:p,totalFolderCount:0,offset:0,hasMore:f,isLoading:!1})}else if(n===`collections`){if(!t.activeCollectionUuid){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}let n=t.activeCollectionFolder;if(!(n&&!n.children?.length)){this.store.setState({assets:[],folders:[],totalCount:0,totalFolderCount:0,offset:0,hasMore:!1,isLoading:!1});return}let r=t.activeCollectionUuid,i=n.filters||void 0,a=this._buildSearchNotation(),o=t.isAISearchActive&&!!t.searchQuery,s=qt(this.apiClient,{fields:this.config?.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,offset:0,limit:t.limit,sort_by:t.sortBy,sort_direction:t.sortDirection,search:t.searchQuery||void 0,q:a||void 0,recursive:1,collection_uuid:r,f64:i,...o&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}),c=Jt(this.apiClient,{q:a||void 0,search:t.searchQuery||void 0,recursive:1,collection_uuid:r,f64:i,...o&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}}).catch(()=>null),[l,u]=await Promise.all([s,c]);if(e!==this._loadId)return;let d=l.files?.length??0,f=d>=t.limit,p=u?.stats?.approx_files_count??u?.info?.total_files_count??l.info?.total_files_count??l.base?.count?.files_recursive??l.base?.count?.files_direct??d;this.store.setState({assets:l.files||[],folders:[],totalCount:p,totalFolderCount:0,offset:0,hasMore:f,isLoading:!1})}}catch(t){if(e!==this._loadId)return;this.store.setState({isLoading:!1}),this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:t,context:`loadData`},bubbles:!0,composed:!0}))}}async _loadMore(){let e=this.store.getState();if(e.isLoading||!e.hasMore||!this.apiClient||e.activeTab===`labels`&&!e.activeLabelUuid||e.activeTab===`collections`&&!(e.activeCollectionFolder&&!e.activeCollectionFolder.children?.length))return;let t=++this._loadMoreId,n=e.offset+e.limit;this.store.setState({isLoading:!0});try{let r=this._buildSearchNotation(),i=r||void 0,a=e.currentFolderPath||`/`,o=e.activeTab===`folders`?0:1;if(e.activeTab===`labels`&&e.activeLabelUuid){let t=e.labels.find(t=>t.uuid===e.activeLabelUuid);t&&(i=`labels:${t.sid.replace(`#`,``)}${r?` `+r:``}`),a=`/`,o=1}let s,c;e.activeTab===`collections`&&e.activeCollectionFolder&&(s=e.activeCollectionUuid||void 0,c=e.activeCollectionFolder.filters||void 0,a=``,o=1);let l=await qt(this.apiClient,{fields:this.config?.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...a?{folder:a}:{},offset:n,limit:e.limit,sort_by:e.sortBy,sort_direction:e.sortDirection,search:e.searchQuery||void 0,q:i,recursive:o,...s&&{collection_uuid:s},...c&&{f64:c},...e.isAISearchActive&&e.searchQuery&&{with_ai:!0,ai_query:e.searchQuery,ai_lang:e.config?.locale??`en`}});if(t!==this._loadMoreId)return;let u=this.store.getState().assets,d=l.files||[],f=d.length>=e.limit,p=[...u,...d];this.store.setState({assets:p,offset:n,hasMore:f,isLoading:!1})}catch{if(t!==this._loadMoreId)return;this.store.setState({isLoading:!1})}}_debouncedLoadData(e=120){this._loadDataTimer&&clearTimeout(this._loadDataTimer),this._loadDataTimer=setTimeout(()=>{this._loadDataTimer=null,this._loadData()},e)}_handleCancel(e){this.close(),this.config?.onCancel?.(),this.dispatchEvent(new CustomEvent(`ap-cancel`,{detail:{reason:e},bubbles:!0,composed:!0}))}_handleSearchChange(e){let t=this.store.getState();if(t.activeTab===`labels`&&!t.activeLabelUuid){this.store.setState({searchQuery:e.detail.value});return}if(t.activeTab===`collections`&&!(t.activeCollectionFolder&&!t.activeCollectionFolder.children?.length)){this.store.setState({searchQuery:e.detail.value});return}let n={searchQuery:e.detail.value,offset:0,assets:[],folders:[],isLoading:!0};t.isAISearchActive&&e.detail.value&&(n.sortBy=`relevance`),this.store.setState(n),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleAISearchToggle(e){let t=e.detail.active,n=this.store.getState(),r={isAISearchActive:t};n.searchQuery&&(t?r.sortBy=`relevance`:n.sortBy===`relevance`&&(r.sortBy=this.config?.defaultSortBy??`created_at`),r.offset=0,r.assets=[],r.folders=[],r.isLoading=!0),this.store.setState(r),n.searchQuery&&this._debouncedLoadData()}_handleViewChange(e){let t=e.detail.mode;this.store.setState({viewMode:t}),this.config?.rememberLastView&&yi(t,this.config.auth.projectToken),this._scrollToTop()}_handleRegionalChange(e){let{groupUuid:t,value:n}=e.detail,r=this.store.getState().regionalFilters;this.store.setState({regionalFilters:{...r,[t]:n}})}_handleSortChange(e){let t=e.detail.value,n=this.store.getState();this.store.setState({sortBy:t,offset:0,assets:[],folders:[]}),li(t,n.sortDirection),this.selectionCtrl.resetRange(),this._loadData()}_handleSortDirectionChange(e){let t=e.detail.value,n=this.store.getState();this.store.setState({sortDirection:t,offset:0,assets:[],folders:[]}),li(n.sortBy,t),this.selectionCtrl.resetRange(),this._loadData()}_handleTabChange(e){let t=e.detail.tab;this.config?.rememberLastTab&&xi(t,this.config.auth.projectToken),this._selectAllId++,this.store.setState({activeTab:t,activeLabelUuid:null,activeCollectionUuid:null,activeCollectionFolders:[],activeCollectionFolder:null,isLoadingCollectionFolders:!1,currentFolder:null,currentFolderPath:this.config?.rootFolderPath??`/`,breadcrumb:[],offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleAssetSelect(e){this.selectionCtrl.handleSelect(e.detail.asset,e.detail.index,e.detail.event)}_handleFolderSelect(e){this.selectionCtrl.handleFolderSelect(e.detail.folder,e.detail.index,e.detail.event)}_handleAssetPreview(e){this.store.setState({previewAsset:e.detail.asset,isPreviewOpen:!0})}get _transformationsConfig(){let e=this.config?.transformations;return typeof e==`object`?e:void 0}_handleQuickSelect(e){let t=e.detail.asset;if(this.config?.transformations&&cn(t)){this._transformAssets=[t],this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect([t])}_emitSelect(e,t){e=this._applyVariantSelection(e);let n={assets:e};t?.length&&(n.folders=t),this.config?.onSelect?.(e,t?.length?t:void 0),this.dispatchEvent(new CustomEvent(`ap-select`,{detail:n,bubbles:!0,composed:!0})),this._isInline||this.close()}_handleFolderOpen(e){let t=e.detail.folder,n=this.store.getState(),r=t.path||`${n.currentFolderPath}${t.name}/`;this.config?.rememberLastFolder&&_i(r,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:t.uuid,currentFolderPath:r,breadcrumb:[...n.breadcrumb,{uuid:t.uuid,name:t.name,path:r}],searchQuery:``,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleBreadcrumbNavigate(e){let t=e.detail.uuid,n=this.store.getState();if(n.activeTab===`labels`){this._selectAllId++,this.store.setState({activeLabelUuid:null,breadcrumb:[],searchQuery:``,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData();return}if(n.activeTab===`collections`){if(this._selectAllId++,!t){this.store.setState({activeCollectionUuid:null,activeCollectionFolder:null,activeCollectionFolders:[],breadcrumb:[],searchQuery:``,offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}if(t===n.activeCollectionUuid){this.store.setState({activeCollectionFolder:null,breadcrumb:[n.breadcrumb[0]],searchQuery:``,offset:0,assets:[],folders:[],isLoading:!1}),this.selectionCtrl.resetRange();return}let e=this._findCollectionFolder(n.activeCollectionFolders,t);if(e){let r=n.breadcrumb.findIndex(e=>e.uuid===t),i=n.breadcrumb.slice(0,r+1);this.store.setState({activeCollectionFolder:e,breadcrumb:i,searchQuery:``,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}return}let r=t?n.breadcrumb.findIndex(e=>e.uuid===t):-1,i=t?n.breadcrumb.slice(0,r+1):[],a=i.length>0?i[i.length-1].path:this.config?.rootFolderPath||`/`;this.config?.rememberLastFolder&&_i(a,this.config.auth.projectToken),this._selectAllId++,this.store.setState({currentFolder:t||null,currentFolderPath:a,breadcrumb:i,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_handleLabelOpen(e){let t=e.detail.label;this._selectAllId++,this.store.setState({activeLabelUuid:t.uuid,breadcrumb:[{uuid:t.uuid,name:t.name,path:``}],searchQuery:``,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}async _handleCollectionOpen(e){let t=e.detail.collection;if(this.apiClient){this._selectAllId++,this.store.setState({activeCollectionUuid:t.uuid,activeCollectionFolder:null,activeCollectionFolders:[],isLoadingCollectionFolders:!0,breadcrumb:[{uuid:t.uuid,name:t.title,path:``}],searchQuery:``,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange();try{let e=en((await $t(this.apiClient,t.uuid)).folders||[]);this.store.setState({activeCollectionFolders:e,isLoadingCollectionFolders:!1,isLoading:!1})}catch(e){this.store.setState({isLoadingCollectionFolders:!1,isLoading:!1}),this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:e,context:`loadCollectionFolders`},bubbles:!0,composed:!0}))}}}_handleCollectionFolderOpen(e){let t=e.detail.folder,n=this.store.getState(),r=t.path.split(` -> `).filter(Boolean),i=[{uuid:n.activeCollectionUuid,name:n.breadcrumb[0]?.name||`Collection`,path:``}],a=``;for(let e of r)a=a?`${a} -> ${e}`:e,i.push({uuid:a,name:e,path:a});this._selectAllId++,this.store.setState({activeCollectionFolder:t,breadcrumb:i,searchQuery:``,offset:0,assets:[],folders:[]}),this.selectionCtrl.resetRange(),this._loadData()}_findCollectionFolder(e,t){for(let n of e){if(n.path===t)return n;if(n.children){let e=this._findCollectionFolder(n.children,t);if(e)return e}}return null}_getVisibleCollectionFolders(){let e=this.store.getState();return e.activeCollectionUuid?e.activeCollectionFolder?e.activeCollectionFolder.children??[]:e.activeCollectionFolders:[]}_resolveInitialFolderPath(e){return e===`folders`&&this.config?.rememberLastFolder&&vi(this.config.auth.projectToken)||this.config?.initialFolderPath||this.config?.rootFolderPath||`/`}_buildBreadcrumbFromPath(e,t){if(!e||e===t||e===`/`)return[];let n=(e.startsWith(t)?e.slice(t.length):e.replace(/^\//,``)).split(`/`).filter(Boolean),r=[],i=t.endsWith(`/`)?t:t+`/`;for(let e of n)i+=e+`/`,r.push({uuid:i,name:e,path:i});return r}_handlePreviewClose(){this.store.setState({isPreviewOpen:!1,previewAsset:null})}_handlePreviewNavigate(e){this.store.setState({previewAsset:e.detail.asset})}_handleSelectionConfirm(e){let t=e.detail.assets,n=e.detail.folders||[];if(n.length>0&&this.config?.folderSelection!==!1&&this.config?.folderSelectionMode===`assets`){this._folderResolveOpen=!0;return}this._emitSelect(t,n.length?n:void 0)}_handleSelectionTransform(e){let t=e.detail.assets,n=e.detail.folders||[];if(n.length>0&&this.config?.folderSelection!==!1&&this.config?.folderSelectionMode===`assets`){this._transformAfterResolve=!0,this._folderResolveOpen=!0;return}if(t.filter(cn).length===0){this._emitSelect(t,n.length?n:void 0);return}this._transformAssets=t,this._transformFolders=n,this._transformOpen=!0}async _handleFolderResolveConfirm(e){let t=e.detail.mode,n=this.selectionCtrl.getSelectedFolders(),r=this.selectionCtrl.getSelectedAssets();this.store.setState({isResolvingFolders:!0});try{let e=await Promise.all(n.map(e=>qt(this.apiClient,{fields:this.config?.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,folder:e.path,recursive:+(t===`recursive`),limit:1e4}))),i=[];for(let t of e)i.push(...t.files);let a=[...r],o=new Set(a.map(e=>e.uuid));for(let e of i)o.has(e.uuid)||(a.push(e),o.add(e.uuid));let s=this.config?.maxSelections,c=s?a.slice(0,s):a;if(this._folderResolveOpen=!1,this.store.setState({isResolvingFolders:!1}),this._transformAfterResolve){this._transformAfterResolve=!1,this._transformAssets=c,this._transformFolders=[],this._transformOpen=!0;return}this._emitSelect(c)}catch(e){this.store.setState({isResolvingFolders:!1}),this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:e,context:`folderResolve`},bubbles:!0,composed:!0}))}}_handleFolderResolveCancel(){this._folderResolveOpen=!1,this._transformAfterResolve=!1}_handleTransformConfirm(e){let t=e.detail.params,n=e.detail.isAspectLocked??!0,r=this._transformAssets,i=this._transformFolders,a=Fn(t,{isMultiSelect:r.length>1,isAspectLocked:n}),o=r.map(e=>{if(!cn(e))return e;let n=e.url?.cdn,r=e.url?.permalink,i={cdn:n?jn(n,a):``};return r&&(i.permalink_cdn=jn(r,a)),{...e,transformation:{params:t,url:i}}});this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(o,i.length?i:void 0)}_handleTransformSkip(){let e=this._transformAssets,t=this._transformFolders;this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[],this._emitSelect(e,t.length?t:void 0)}_handleTransformCancel(){this._transformOpen=!1,this._transformAssets=[],this._transformFolders=[]}_openCreateFolderDialog(){this._createFolderError=null,this._createFolderOpen=!0}_handleCreateFolderCancel(){this._isCreatingFolder&&(this._cancelCreateFolderRequested=!0),this._createFolderOpen=!1,this._createFolderError=null}async _handleCreateFolderConfirm(e){let t=e.detail.name;if(!t||this._isCreatingFolder||!this.apiClient)return;let n=this.store.getState().currentFolderPath||`/`;this._isCreatingFolder=!0,this._cancelCreateFolderRequested=!1,this._createFolderError=null;try{await zt(this.apiClient,t,n),this._cancelCreateFolderRequested||(this._createFolderOpen=!1),this._loadData()}catch(e){this._cancelCreateFolderRequested||(this._createFolderError=this._mapCreateFolderError(e))}finally{this._isCreatingFolder=!1,this._cancelCreateFolderRequested=!1}}_mapCreateFolderError(e){let t=e?.message??``;if(/timed out/i.test(t))return`Request timed out. Please try again.`;let n=t.match(/^API error: (\d+)/);if(n)switch(Number(n[1])){case 400:return`Invalid folder name.`;case 401:return`Authentication failed. Please reload the page.`;case 403:return`You do not have permission to create a folder here.`;case 409:return`A folder with this name already exists.`;default:return`Failed to create folder. Please try again.`}return t||`Failed to create folder. Please try again.`}async _handleSelectAll(e){let t=this.store.getState();if(t.isSelectingAll||!this.apiClient||!(t.config?.multiSelect??!0))return;let n=e?.detail?.scope??`all`,r=n!==`assets`&&this.config?.folderSelection!==!1&&t.folders.length>0;if(n===`folders`){r&&this.selectionCtrl.selectAllFolders(t.folders);return}if(t.assets.length>=t.totalCount){r&&this.selectionCtrl.selectAllFolders(t.folders),this.selectionCtrl.selectAll(t.assets);return}let i=++this._selectAllId;this.store.setState({isSelectingAll:!0});try{let e=this._buildSearchNotation(),n=t.currentFolderPath||`/`,a=t.limit,o=t.assets,s=t.totalCount,c=t.activeTab===`folders`?0:1,l=e||void 0;if(t.activeTab===`labels`&&t.activeLabelUuid){let r=t.labels.find(e=>e.uuid===t.activeLabelUuid);r&&(l=`labels:${r.sid.replace(`#`,``)}${e?` `+e:``}`),n=`/`,c=1}let u,d;t.activeTab===`collections`&&t.activeCollectionFolder&&(u=t.activeCollectionUuid||void 0,d=t.activeCollectionFolder.filters||void 0,n=``,c=1);let f=[];for(let e=o.length;e<s;e+=a)f.push(e);let p=[];for(let e=0;e<f.length;e+=4){if(i!==this._selectAllId)return;let r=f.slice(e,e+4),o=await Promise.all(r.map(e=>qt(this.apiClient,{fields:this.config?.apiFields,permalinksEnabled:this.store.getState().cdnPermalinkEnabled,...n?{folder:n}:{},offset:e,limit:a,sort_by:t.sortBy,sort_direction:t.sortDirection,search:t.searchQuery||void 0,q:l,recursive:c,...u&&{collection_uuid:u},...d&&{f64:d},...t.isAISearchActive&&t.searchQuery&&{with_ai:!0,ai_query:t.searchQuery,ai_lang:t.config?.locale??`en`}})));if(i!==this._selectAllId)return;for(let e of o)e.files&&p.push(...e.files)}if(i!==this._selectAllId)return;let m=new Set(o.map(e=>e.uuid)),h=p.filter(e=>!m.has(e.uuid)&&(m.add(e.uuid),!0)),g=[...o,...h];this.store.setState({assets:g,offset:Math.max(0,g.length-a),hasMore:!1,isSelectingAll:!1}),r&&this.selectionCtrl.selectAllFolders(t.folders),this.selectionCtrl.selectAll(g)}catch(e){if(i!==this._selectAllId)return;this.store.setState({isSelectingAll:!1}),this.dispatchEvent(new CustomEvent(`ap-error`,{detail:{error:e,context:`selectAll`},bubbles:!0,composed:!0}))}}_handleSelectionClear(){this.selectionCtrl.clearSelection()}_handleSelectionDeselect(e){let t=new Map(this.store.getState().selectedAssets);t.delete(e.detail.uuid),this.store.setState({selectedAssets:t})}_isDateFilterKey(e){return e===C.DATE||e===C.LICENSE_EXPIRY||e===w.DUE_DATE}_handleFilterUpdate(e){let{key:t,values:n,operator:r}=e.detail,i={...this.store.getState().filters},a=n===``||n==null||Array.isArray(n)&&n.length===0||typeof n==`object`&&!Array.isArray(n)&&Object.values(n).every(e=>e==null||e===``||Array.isArray(e)&&e.length===0);if(!a&&this._isDateFilterKey(t)&&typeof n==`object`&&!Array.isArray(n)){let{kind:e,preset:t,from:r,to:i}=n;a=!e&&!t&&!r&&!i}if(a){let e={...i.applied};delete e[t],i.applied=e}else{let e={...i.applied};e[t]=this._isDateFilterKey(t)&&typeof n==`object`&&!Array.isArray(n)?{type:`date`,field:n.field||`created`,kind:n.kind||null,preset:n.preset||null,from:n.from||null,to:n.to||null}:t===C.IMAGE&&typeof n==`object`&&!Array.isArray(n)?n:{type:`string`,values:Array.isArray(n)?n:[n],operator:r||`:`},i.applied=e}if(this.store.setState({filters:i,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingFilter===t){this._pendingFilter=null;let e=this.renderRoot.querySelector(`ap-filters-bar`);e&&(e.pendingFilter=null)}}_handleFilterOpen(e){let t=e.detail.key,n=e.detail.chipRect,r=this.renderRoot.querySelector(`ap-content-toolbar`),i,a;if(n){let e=this.renderRoot.querySelector(`.toolbar-filters-wrapper`);if(e){let t=e.getBoundingClientRect();i=n.left-t.left,a=n.bottom-t.top}}r?.openFilterPanel(t,!0,i,a)}_handleMetadataFilterOpen(e){let{fieldKey:t,chipRect:n}=e.detail,r=this.renderRoot.querySelector(`ap-content-toolbar`),i,a;if(n){let e=this.renderRoot.querySelector(`.toolbar-filters-wrapper`);if(e){let t=e.getBoundingClientRect();i=n.left-t.left,a=n.bottom-t.top}}r?.openMetadataFieldPanel(t,!0,i,a)}_handleFilterPanelChange(e){let t=this.renderRoot.querySelector(`ap-filters-bar`);t&&(t.activeFilter=e.detail.key,t.activeMetadataField=e.detail.metadataFieldKey||null),!e.detail.key&&!e.detail.metadataFieldKey&&(this._pendingFilter||this._pendingMetadataField)&&(this._pendingFilter=null,this._pendingMetadataField=null,t&&(t.pendingFilter=null,t.pendingMetadataField=null))}async _handleFilterPending(e){let{key:t,metadataFieldKey:n}=e.detail,r=this.renderRoot.querySelector(`ap-filters-bar`),i=this.renderRoot.querySelector(`ap-content-toolbar`);if(!r||!i)return;n?(this._pendingMetadataField=n,r.pendingMetadataField=n):t&&(this._pendingFilter=t,r.pendingFilter=t),await r.updateComplete;let a=r.renderRoot.querySelector(`.chip.pending`);if(!a){let e=r.renderRoot.querySelectorAll(`.chip.pinned-empty`),i=n?r._getMetadataLabel?.(n):void 0;for(let r of e){let e=r.querySelector(`.chip-label`)?.textContent?.trim();if(n&&e===i){a=r;break}if(t&&e===(tr[t]||t)){a=r;break}}}if(!a)return;let o=a.getBoundingClientRect(),s=this.renderRoot.querySelector(`.toolbar-filters-wrapper`)?.getBoundingClientRect(),c=s?o.left-s.left:o.left,l=s?o.bottom-s.top:void 0;n?i.openMetadataFieldPanel(n,!0,c,l):t&&i.openFilterPanel(t,!0,c,l)}_handleFilterRemove(e){let t=e.detail.key;if(t in(this.config?.forcedFilters??{}))return;let n={...this.store.getState().filters},r={...n.applied};delete r[t],n.applied=r,this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleMetadataFilterChange(e){let{fieldKey:t,operator:n,values:r,metadataType:i}=e.detail,a={...this.store.getState().filters},o={...a.metadata},s={...o.applied};if(!r||Array.isArray(r)&&r.length===0?(delete s[t],o.applied=s,o.pinned.includes(t)||(o.visible=o.visible.filter(e=>e!==t))):(s[t]={type:`string`,values:Array.isArray(r)?r:[r],operator:n||`:`,metadataType:i},o.applied=s,o.visible.includes(t)||(o.visible=[...o.visible,t])),a.metadata=o,this.store.setState({filters:a,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData(),this._pendingMetadataField===t){this._pendingMetadataField=null;let e=this.renderRoot.querySelector(`ap-filters-bar`);e&&(e.pendingMetadataField=null)}}_handleMetadataFieldToggle(e){let{fieldKey:t,visible:n}=e.detail,r={...this.store.getState().filters},i={...r.metadata};n?i.visible.includes(t)||(i.visible=[...i.visible,t]):i.visible=i.visible.filter(e=>e!==t),r.metadata=i,this.store.setState({filters:r})}_handleMetadataFilterRemove(e){let{fieldKey:t}=e.detail,n={...this.store.getState().filters},r={...n.metadata},i={...r.applied};delete i[t],r.applied=i,r.pinned.includes(t)||(r.visible=r.visible.filter(e=>e!==t)),n.metadata=r,this.store.setState({filters:n,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFilterPin(e){let{key:t,pinned:n}=e.detail,r={...this.store.getState().filters};n?r.pinned.includes(t)||(r.pinned=[...r.pinned,t]):r.pinned=r.pinned.filter(e=>e!==t),this.store.setState({filters:r}),ai(this.store.getState().config?.auth?.projectToken??null,r.pinned)}_handleMetadataPin(e){let{fieldKey:t,pinned:n}=e.detail,r={...this.store.getState().filters},i={...r.metadata};n?i.pinned.includes(t)||(i.pinned=[...i.pinned,t]):(i.pinned=i.pinned.filter(e=>e!==t),t in i.applied||(i.visible=i.visible.filter(e=>e!==t))),r.metadata=i,this.store.setState({filters:r}),oi(this.store.getState().config?.auth?.projectToken??null,i.pinned)}_handleFiltersClearAll(){let e=this.store.getState();this.store.setState({filters:{...e.filters,applied:{},metadata:{...e.filters.metadata,applied:{},visible:[...e.filters.metadata.pinned]}},offset:0,assets:[],folders:[],isLoading:!0});let t=this.renderRoot.querySelector(`ap-filters-bar`);t&&(t.activeFilter=null),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_handleFiltersSet(e){let{applied:t,metadata:n}=e.detail,r={...this.store.getState().filters},i=new Set(Object.keys(this.config?.forcedFilters??{})),a={...t};for(let e of i)delete a[e];if(r.applied=a,n){let e={...r.metadata};e.applied=n.applied;let t=Object.keys(n.applied);e.visible=[...new Set([...e.pinned,...t])],r.metadata=e}this.store.setState({filters:r,offset:0,assets:[],folders:[],isLoading:!0}),this.selectionCtrl.resetRange(),this._debouncedLoadData()}_getSortOptions(){let e=this.storeCtrl.state;if(e.activeTab===`labels`&&!e.activeLabelUuid)return ji;if(e.activeTab===`collections`){if(!e.activeCollectionUuid)return Mi;if(!(e.activeCollectionFolder&&!e.activeCollectionFolder.children?.length))return Ni}return e.searchQuery?ki:e.activeTab===`folders`?Ai:Oi}_buildSearchNotation(){let e=this.store.getState();return zr({...this._normalizedForcedFilters,...e.filters.applied},this._visibleAppliedMetadata).join(` `)}render(){let e=this.storeCtrl.state,t=e.t,n=Array.from(e.selectedAssets.keys()),r=Array.from(e.selectedFolders.keys()),i=this.config?.disabledAssetIds??[],o=this.config?.disabledFolderIds??[],c=this.selectionCtrl.getSelectedAssets(),l=this.selectionCtrl.getSelectedFolders(),u=this.config?.folderSelection!==!1,d=this._localizeMetadataFields(e.metadataFields,t),f=this._getFilterMetadataFields(d),p=a`
      <ap-header
        .activeTab=${e.activeTab}
        .tabs=${this.config?.tabs??[`assets`,`folders`]}
        .isInsideLabel=${e.activeTab===`labels`&&!!e.activeLabelUuid}
        .isInsideCollection=${e.activeTab===`collections`&&!!e.activeCollectionUuid}
        .isInsideCollectionLeaf=${e.activeTab===`collections`&&!!e.activeCollectionFolder&&!e.activeCollectionFolder.children?.length}
        .viewMode=${e.viewMode}
        .searchQuery=${e.searchQuery}
        .enableAISearch=${!!this.config?.enableAISearch}
        .isAISearchActive=${e.isAISearchActive}
        .regionalGroups=${e.regionalVariantGroups}
        .regionalFilters=${e.regionalFilters}
        .hideClose=${this._isInline}
        .t=${t}
        @tab-change=${this._handleTabChange}
        @search-change=${this._handleSearchChange}
        @ai-search-toggle=${this._handleAISearchToggle}
        @view-change=${this._handleViewChange}
        @regional-change=${this._handleRegionalChange}
        @ap-close=${()=>this._handleCancel(`close-button`)}
      ></ap-header>
    `,m=!!this.config?.uploader,h=this.config?.folderCreation===!0,g=this.config?.auth.mode===`sassKey`,_=e.activeTab===`folders`,ee=h&&_&&(g||an(e.permissions,on.FOLDER_CREATE)),v=a`
      <div
        class="content-area"
        @dragenter=${this._onDragEnter}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        ${this._isDragOver?a`
              <div class="drop-zone-overlay">
                <div class="drop-zone-label">
                  <sfx-icon name="upload" .size=${32}></sfx-icon>
                  ${t(`dropFilesToUpload`,`Drop files to upload`)}
                </div>
              </div>
            `:s}
        <div class="main-content">
          <div class="toolbar-filters-wrapper${this.config?.stickyFilters?` sticky`:``}">
            <ap-content-toolbar
              .isLoading=${e.isLoading}
              .totalCount=${e.totalCount}
              .totalFolderCount=${e.totalFolderCount}
              .showUpload=${m}
              .showCreateFolder=${ee}
              .showFilters=${!(e.activeTab===`labels`&&!e.activeLabelUuid)&&!(e.activeTab===`collections`&&!(e.activeCollectionFolder&&!e.activeCollectionFolder.children?.length))}
              .countLabel=${e.activeTab===`labels`&&!e.activeLabelUuid?t(`labelCount`,{count:e.labels.length,defaultValue_one:`{{count}} label`,defaultValue_other:`{{count}} labels`}):e.activeTab===`collections`&&!e.activeCollectionUuid?t(`collectionCount`,{count:e.collections.length,defaultValue_one:`{{count}} collection`,defaultValue_other:`{{count}} collections`}):e.activeTab===`collections`&&e.activeCollectionUuid&&!(e.activeCollectionFolder&&!e.activeCollectionFolder.children?.length)?t(`folderCount`,{count:this._getVisibleCollectionFolders().length,defaultValue_one:`{{count}} folder`,defaultValue_other:`{{count}} folders`}):``}
              .sortBy=${e.sortBy}
              .sortDirection=${e.sortDirection}
              .sortOptions=${this._getSortOptions()}
              .showVariants=${!!this.config?.variants&&this._variantOptions.length>1}
              .variantOptions=${this._variantOptions}
              .defaultVariantName=${this._defaultVariantName}
              .filters=${e.filters}
              .labels=${e.labels}
              .tags=${e.tags}
              .fileTypes=${e.fileTypes}
              .metadataFields=${f}
              .pinnedFilters=${this._visiblePinnedFilters}
              .apiClient=${this.apiClient}
              .locale=${this.config?.locale??`en`}
              .forcedFilterKeys=${Object.keys(this._normalizedForcedFilters)}
              .enabledFilterKeys=${this.config?.enabledFilters??null}
              .enabledMetadataFields=${this.config?.enabledMetadataFields??null}
              .metadataCategoryEnabled=${this._isFilterEnabled(C.METADATA)}
              .approverUsers=${this.config?.approverUsers??[]}
              .requesterUsers=${this.config?.requesterUsers??[]}
              .t=${t}
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
              @variant-default-change=${this._handleVariantDefaultChange}
            ></ap-content-toolbar>

            ${e.activeTab===`labels`&&!e.activeLabelUuid||e.activeTab===`collections`&&!(e.activeCollectionFolder&&!e.activeCollectionFolder.children?.length)?s:a`
                  <ap-filters-bar
                    .appliedFilters=${e.filters.applied}
                    .appliedMetadata=${this._visibleAppliedMetadata}
                    .metadataFields=${f}
                    .tags=${e.tags}
                    .labels=${e.labels}
                    .approverUsers=${this.config?.approverUsers??[]}
                    .requesterUsers=${this.config?.requesterUsers??[]}
                    .pinnedFilters=${this._visiblePinnedFilters}
                    .pinnedMetadataFields=${this._visiblePinnedMetadata}
                    .forcedFilters=${this.config?.forcedFilters??{}}
                    .locale=${this.config?.locale??`en`}
                    .t=${t}
                    @filter-remove=${this._handleFilterRemove}
                    @filter-open=${this._handleFilterOpen}
                    @metadata-filter-open=${this._handleMetadataFilterOpen}
                    @metadata-filter-remove=${this._handleMetadataFilterRemove}
                    @metadata-pin=${this._handleMetadataPin}
                    @filters-clear-all=${this._handleFiltersClearAll}
                    @filters-set=${this._handleFiltersSet}
                  ></ap-filters-bar>
                `}
            ${e.breadcrumb.length>0?a`<sfx-breadcrumb
                  .items=${e.breadcrumb}
                  .rootLabel=${e.activeTab===`labels`?t(`tabLabels`,`Labels`):e.activeTab===`collections`?t(`tabCollections`,`Collections`):t(`rootFolder`,`Root`)}
                  @breadcrumb-navigate=${this._handleBreadcrumbNavigate}
                ></sfx-breadcrumb>`:s}
          </div>

          ${e.isLoading&&e.assets.length===0&&e.folders.length===0&&!(e.activeTab===`labels`&&!e.activeLabelUuid)&&!(e.activeTab===`collections`&&!(e.activeCollectionFolder&&!e.activeCollectionFolder.children?.length))?a`<ap-skeleton
                .variant=${e.viewMode}
                .gridSize=${this.config?.gridSize??`normal`}
                .multiSelect=${this.config?.multiSelect!==!1}
                .folderCount=${2}
                .t=${t}
              ></ap-skeleton>`:this._renderContent(e,n,r,u,i,o)}

          <ap-marquee-overlay
            .active=${this.marqueeCtrl.isActive}
            .rect=${this.marqueeCtrl.rect}
          ></ap-marquee-overlay>
          ${this._folderResolveOpen?a`
                <ap-folder-resolve-dialog
                  .folders=${l}
                  .loading=${e.isResolvingFolders}
                  .t=${t}
                  @folder-resolve-confirm=${this._handleFolderResolveConfirm}
                  @folder-resolve-cancel=${this._handleFolderResolveCancel}
                ></ap-folder-resolve-dialog>
              `:s}
          ${this._transformOpen?a`
                <ap-transformation-dialog
                  .assets=${this._transformAssets}
                  .isMultiSelect=${this._transformAssets.length>1}
                  .t=${t}
                  .exportOriginalLabel=${this._transformationsConfig?.exportOriginalLabel}
                  .applyExportLabel=${this._transformationsConfig?.applyExportLabel}
                  @transform-confirm=${this._handleTransformConfirm}
                  @transform-skip=${this._handleTransformSkip}
                  @transform-cancel=${this._handleTransformCancel}
                ></ap-transformation-dialog>
              `:s}
          ${this._createFolderOpen?a`
                <ap-create-folder-dialog
                  .t=${e.t}
                  .currentFolderPath=${e.currentFolderPath}
                  .loading=${this._isCreatingFolder}
                  .error=${this._createFolderError}
                  @create-folder-confirm=${this._handleCreateFolderConfirm}
                  @create-folder-cancel=${this._handleCreateFolderCancel}
                ></ap-create-folder-dialog>
              `:s}
        </div>

        ${e.isPreviewOpen&&e.previewAsset?a`<ap-preview-panel
              .asset=${e.previewAsset}
              .assets=${e.assets}
              .selectedIds=${n}
              .containerToken=${e.projectToken}
              .showMetadata=${this.config?.showMetadata!==!1}
              .metadataFields=${d}
              .labels=${e.labels}
              .regionalFilters=${e.regionalFilters}
              .multiSelect=${this.config?.multiSelect??!0}
              .selectedVariantName=${this._variantOverrides[e.previewAsset.uuid]??this._defaultVariantName}
              .t=${t}
              @preview-close=${this._handlePreviewClose}
              @preview-navigate=${this._handlePreviewNavigate}
              @asset-select=${this._handleAssetSelect}
              @asset-quick-select=${this._handleQuickSelect}
              @filter-update=${this._handleFilterUpdate}
            ></ap-preview-panel>`:s}
      </div>
    `,y=a`
      <ap-selection-bar
        .selectedAssets=${c}
        .selectedFolders=${l}
        .totalCount=${e.totalCount}
        .totalFolderCount=${e.totalFolderCount}
        .isSelectingAll=${e.isSelectingAll}
        .multiSelect=${this.config?.multiSelect??!0}
        .maxSelections=${this.config?.maxSelections}
        .showTransform=${!!this.config?.transformations&&c.some(cn)}
        .t=${t}
        @selection-confirm=${this._handleSelectionConfirm}
        @selection-transform=${this._handleSelectionTransform}
        @selection-clear=${this._handleSelectionClear}
        @selection-deselect=${this._handleSelectionDeselect}
        @select-all=${this._handleSelectAll}
      ></ap-selection-bar>
    `,te=this._isUploaderOpen?a`
          <div class="uploader-overlay">
            <div class="uploader-body">${this._uploaderEl}</div>
          </div>
        `:s;return this._isInline?e.isOpen?a`
        <div class="ap-inline">
          ${this._isUploaderOpen?te:a`
                <div class="inline-header">${p}</div>
                <div class="inline-content">${v}</div>
                <div class="inline-footer">${y}</div>
              `}
        </div>
      `:s:a`
      <ap-modal
        ?open=${e.isOpen}
        @ap-cancel=${e=>this._handleCancel(e.detail.reason)}
      >
        ${this._isUploaderOpen?te:a`
              <div slot="header">${p}</div>
              ${v}
              <div slot="footer">${y}</div>
            `}
      </ap-modal>
    `}_renderContent(e,t,n=[],r=!1,i=[],o=[]){let c=e.t;if(e.activeTab===`assets`)return!e.isLoading&&e.assets.length===0?a`
          <div class="empty-state">
            <sfx-icon name="search" .size=${48}></sfx-icon>
            <div class="empty-title">${c(`noAssetsFound`,`No assets found`)}</div>
            <div class="empty-desc">
              ${c(`noAssetsFoundDesc`,`Try adjusting your search or filters`)}
            </div>
          </div>
        `:e.viewMode===`grid`?a`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${c}
            .selectedIds=${t}
            .selectedFolderIds=${n}
            .disabledAssetIds=${i}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${this.config?.multiSelect??!0}
            .folderSelectable=${r}
            .gridSize=${this.config?.gridSize??`normal`}
            .showVariants=${!!this.config?.variants}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${c}
          .selectedIds=${t}
          .selectedFolderIds=${n}
          .disabledAssetIds=${i}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${this.config?.multiSelect??!0}
          .folderSelectable=${r}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!this.config?.variants}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;if(e.activeTab===`folders`)return!e.isLoading&&e.folders.length===0&&e.assets.length===0?a`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">${c(`emptyFolder`,`This folder is empty`)}</div>
            <div class="empty-desc">${c(`emptyFolderDesc`,`No folders or files found here`)}</div>
          </div>
        `:e.viewMode===`grid`?a`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${e.folders}
            .folderPreviews=${e.folderPreviews}
            .t=${c}
            .selectedIds=${t}
            .selectedFolderIds=${n}
            .disabledAssetIds=${i}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${this.config?.multiSelect??!0}
            .folderSelectable=${r}
            .gridSize=${this.config?.gridSize??`normal`}
            .showVariants=${!!this.config?.variants}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
            @folder-open=${this._handleFolderOpen}
            @folder-select=${this._handleFolderSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a`
        <ap-list-view
          .assets=${e.assets}
          .folders=${e.folders}
          .folderPreviews=${e.folderPreviews}
          .t=${c}
          .selectedIds=${t}
          .selectedFolderIds=${n}
          .disabledAssetIds=${i}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${this.config?.multiSelect??!0}
          .folderSelectable=${r}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!this.config?.variants}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @folder-open=${this._handleFolderOpen}
          @folder-select=${this._handleFolderSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `;if(e.activeTab===`labels`){if(!e.activeLabelUuid){let t=e.labels;if(e.searchQuery){let n=e.searchQuery.toLowerCase();t=e.labels.filter(e=>e.name.toLowerCase().includes(n))}let n=e.sortDirection===`asc`?1:-1;return t=[...t].sort((e,t)=>n*e.name.localeCompare(t.name)),t.length===0?a`
            <div class="empty-state">
              <sfx-icon name="tag" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?c(`noLabelsMatchSearch`,`No labels match your search`):c(`noLabelsFound`,`No labels found`)}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?c(`tryDifferentSearch`,`Try a different search term`):c(`labelsWillAppear`,`Labels will appear here once created`)}
              </div>
            </div>
          `:e.viewMode===`grid`?a`
            <div class="labels-grid">
              ${t.map((e,t)=>a`
                  <ap-label-card
                    .label=${e}
                    .index=${t}
                    @label-open=${this._handleLabelOpen}
                  ></ap-label-card>
                `)}
            </div>
          `:a`
          <div class="labels-list">
            ${t.map((e,t)=>a`
                <ap-label-row
                  .label=${e}
                  .index=${t}
                  @label-open=${this._handleLabelOpen}
                ></ap-label-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?a`
          <div class="empty-state">
            <sfx-icon name="tag" .size=${48}></sfx-icon>
            <div class="empty-title">${c(`noAssetsInLabel`,`No assets in this label`)}</div>
            <div class="empty-desc">
              ${c(`noAssetsInLabelDesc`,`Assets added to this label will appear here`)}
            </div>
          </div>
        `:e.viewMode===`grid`?a`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${c}
            .selectedIds=${t}
            .selectedFolderIds=${n}
            .disabledAssetIds=${i}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${this.config?.multiSelect??!0}
            .folderSelectable=${!1}
            .gridSize=${this.config?.gridSize??`normal`}
            .showVariants=${!!this.config?.variants}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${c}
          .selectedIds=${t}
          .selectedFolderIds=${n}
          .disabledAssetIds=${i}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${this.config?.multiSelect??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!this.config?.variants}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `}if(e.activeTab===`collections`){if(!e.activeCollectionUuid){let t=e.collections;if(e.searchQuery){let n=e.searchQuery.toLowerCase();t=e.collections.filter(e=>e.title.toLowerCase().includes(n))}let n=e.sortDirection===`asc`?1:-1;return t=e.sortBy===`created_at`?[...t].sort((e,t)=>n*(new Date(e.created_at).getTime()-new Date(t.created_at).getTime())):e.sortBy===`updated_at`?[...t].sort((e,t)=>n*(new Date(e.updated_at).getTime()-new Date(t.updated_at).getTime())):[...t].sort((e,t)=>n*e.title.localeCompare(t.title)),t.length===0?a`
            <div class="empty-state">
              <sfx-icon name="layout-grid" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?c(`noCollectionsMatchSearch`,`No collections match your search`):c(`noCollectionsFound`,`No collections found`)}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?c(`tryDifferentSearch`,`Try a different search term`):c(`collectionsWillAppear`,`Collections will appear here once created`)}
              </div>
            </div>
          `:e.viewMode===`grid`?a`
            <div class="collections-grid">
              ${t.map((e,t)=>a`
                  <ap-collection-card
                    .collection=${e}
                    .index=${t}
                    @collection-open=${this._handleCollectionOpen}
                  ></ap-collection-card>
                `)}
            </div>
          `:a`
          <div class="collections-list">
            ${t.map((e,t)=>a`
                <ap-collection-row
                  .collection=${e}
                  .index=${t}
                  @collection-open=${this._handleCollectionOpen}
                ></ap-collection-row>
              `)}
          </div>
        `}if(e.isLoadingCollectionFolders)return a`<div class="loading-center"><sfx-spinner></sfx-spinner></div>`;let r=this._getVisibleCollectionFolders();if(!e.activeCollectionFolder||(e.activeCollectionFolder.children?.length??0)>0){let t=r;if(e.searchQuery){let n=e.searchQuery.toLowerCase();t=r.filter(e=>e.name.toLowerCase().includes(n))}let n=e.sortDirection===`asc`?1:-1;return t=[...t].sort((e,t)=>n*e.name.localeCompare(t.name)),t.length===0?a`
            <div class="empty-state">
              <sfx-icon name="folder" .size=${48}></sfx-icon>
              <div class="empty-title">
                ${e.searchQuery?c(`noFoldersMatchSearch`,`No folders match your search`):c(`noFoldersInCollection`,`No folders in this collection`)}
              </div>
              <div class="empty-desc">
                ${e.searchQuery?c(`tryDifferentSearch`,`Try a different search term`):c(`collectionFoldersWillAppear`,`Collection folders will appear here`)}
              </div>
            </div>
          `:e.viewMode===`grid`?a`
            <div class="collection-folders-grid">
              ${t.map((e,t)=>a`
                  <ap-collection-folder-card
                    .folder=${e}
                    .index=${t}
                    @collection-folder-open=${this._handleCollectionFolderOpen}
                  ></ap-collection-folder-card>
                `)}
            </div>
          `:a`
          <div class="collection-folders-list">
            ${t.map((e,t)=>a`
                <ap-collection-folder-row
                  .folder=${e}
                  .index=${t}
                  @collection-folder-open=${this._handleCollectionFolderOpen}
                ></ap-collection-folder-row>
              `)}
          </div>
        `}return!e.isLoading&&e.assets.length===0?a`
          <div class="empty-state">
            <sfx-icon name="folder" .size=${48}></sfx-icon>
            <div class="empty-title">
              ${c(`noAssetsInCollectionFolder`,`No assets in this collection folder`)}
            </div>
            <div class="empty-desc">
              ${c(`noAssetsInCollectionFolderDesc`,`Assets matching this collection's criteria will appear here`)}
            </div>
          </div>
        `:e.viewMode===`grid`?a`
          <ap-grid-view
            .assets=${e.assets}
            .folders=${[]}
            .t=${c}
            .selectedIds=${t}
            .selectedFolderIds=${n}
            .disabledAssetIds=${i}
            .disabledFolderIds=${o}
            .isLoading=${e.isLoading}
            .multiSelect=${this.config?.multiSelect??!0}
            .folderSelectable=${!1}
            .gridSize=${this.config?.gridSize??`normal`}
            .showVariants=${!!this.config?.variants}
            .variantOptions=${this._variantOptions}
            .defaultVariantName=${this._defaultVariantName}
            .variantOverrides=${this._variantOverrides}
            @asset-variant-change=${this._handleAssetVariantChange}
            @asset-select=${this._handleAssetSelect}
            @asset-preview=${this._handleAssetPreview}
            @asset-quick-select=${this._handleQuickSelect}
          ></ap-grid-view>
          <div id="sentinel"></div>
        `:a`
        <ap-list-view
          .assets=${e.assets}
          .folders=${[]}
          .t=${c}
          .selectedIds=${t}
          .selectedFolderIds=${n}
          .disabledAssetIds=${i}
          .disabledFolderIds=${o}
          .isLoading=${e.isLoading}
          .multiSelect=${this.config?.multiSelect??!0}
          .folderSelectable=${!1}
          .totalCount=${e.totalCount}
          .isSelectingAll=${e.isSelectingAll}
          .showVariants=${!!this.config?.variants}
          .variantOptions=${this._variantOptions}
          .defaultVariantName=${this._defaultVariantName}
          .variantOverrides=${this._variantOverrides}
          @asset-variant-change=${this._handleAssetVariantChange}
          @asset-select=${this._handleAssetSelect}
          @asset-preview=${this._handleAssetPreview}
          @asset-quick-select=${this._handleQuickSelect}
          @select-all=${this._handleSelectAll}
          @selection-clear=${this._handleSelectionClear}
        ></ap-list-view>
        <div id="sentinel"></div>
      `}return s}};l([c()],$.prototype,`_isDragOver`,void 0),l([c()],$.prototype,`_isUploaderOpen`,void 0),l([c()],$.prototype,`_folderResolveOpen`,void 0),l([c()],$.prototype,`_transformOpen`,void 0),l([c()],$.prototype,`_createFolderOpen`,void 0),l([c()],$.prototype,`_isCreatingFolder`,void 0),l([c()],$.prototype,`_createFolderError`,void 0),l([c()],$.prototype,`_variantPresets`,void 0),l([c()],$.prototype,`_defaultVariantName`,void 0),l([c()],$.prototype,`_variantOverrides`,void 0),l([i({type:Object})],$.prototype,`config`,void 0),typeof customElements<`u`&&!customElements.get(`sfx-asset-picker`)&&customElements.define(`sfx-asset-picker`,$);var ao=[{pattern:`/`,load:()=>G(()=>import(`./landing-DIX6IHsI.js`).then(e=>e.default),__vite__mapDeps([7,8]))},{pattern:`/docs/getting-started`,load:()=>G(()=>import(`./getting-started-BrBDDWQM.js`).then(e=>e.default),__vite__mapDeps([9,10]))},{pattern:`/docs/configuration`,load:()=>G(()=>import(`./configuration-C6iUFoDW.js`).then(e=>e.default),__vite__mapDeps([11,10]))},{pattern:`/docs/api`,load:()=>G(()=>import(`./api-DuJxwe5r.js`).then(e=>e.default),__vite__mapDeps([12,10]))},{pattern:`/docs/theming`,load:()=>G(()=>import(`./theming-DCySbDpp.js`).then(e=>e.default),__vite__mapDeps([13,10]))},{pattern:`/docs/filters`,load:()=>G(()=>import(`./filters-zNo9JSAZ.js`).then(e=>e.default),__vite__mapDeps([14,10]))},{pattern:`/docs/types`,load:()=>G(()=>import(`./types-jwVRf3vW.js`).then(e=>e.default),__vite__mapDeps([15,10]))},{pattern:`/examples/basic`,load:()=>G(()=>import(`./basic-BCl1hH7Z.js`).then(e=>e.default),__vite__mapDeps([16,8]))},{pattern:`/examples/single-select`,load:()=>G(()=>import(`./single-select-BhEeK8w_.js`).then(e=>e.default),__vite__mapDeps([17,8]))},{pattern:`/examples/multi-select`,load:()=>G(()=>import(`./multi-select-DlQOq9VM.js`).then(e=>e.default),__vite__mapDeps([18,8]))},{pattern:`/examples/disabled-assets`,load:()=>G(()=>import(`./disabled-assets-DSXV1uLH.js`).then(e=>e.default),__vite__mapDeps([19,8]))},{pattern:`/examples/theming`,load:()=>G(()=>import(`./theming-ni213UO7.js`).then(e=>e.default),__vite__mapDeps([20,8]))},{pattern:`/examples/custom-theming`,load:()=>G(()=>import(`./custom-theming-DvdK2kgQ.js`).then(e=>e.default),__vite__mapDeps([21,8]))},{pattern:`/examples/default-filters`,load:()=>G(()=>import(`./default-filters-DCNifzLu.js`).then(e=>e.default),__vite__mapDeps([22,8]))},{pattern:`/examples/forced-filters`,load:()=>G(()=>import(`./forced-filters-CZE-CEmk.js`).then(e=>e.default),__vite__mapDeps([23,8]))},{pattern:`/examples/enabled-filters`,load:()=>G(()=>import(`./enabled-filters-CY0IgR5R.js`).then(e=>e.default),__vite__mapDeps([24,8]))},{pattern:`/examples/enabled-metadata-fields`,load:()=>G(()=>import(`./enabled-metadata-fields-CU5fW3hB.js`).then(e=>e.default),__vite__mapDeps([25,8]))},{pattern:`/examples/approval-users`,load:()=>G(()=>import(`./approval-users-87xgk51b.js`).then(e=>e.default),__vite__mapDeps([26,8]))},{pattern:`/examples/hidden-tabs`,load:()=>G(()=>import(`./hidden-tabs-BDfDms27.js`).then(e=>e.default),__vite__mapDeps([27,8]))},{pattern:`/examples/root-folder`,load:()=>G(()=>import(`./root-folder-CClooRcK.js`).then(e=>e.default),__vite__mapDeps([28,8]))},{pattern:`/examples/events`,load:()=>G(()=>import(`./events--N5J5YUW.js`).then(e=>e.default),__vite__mapDeps([29,8]))},{pattern:`/examples/react-wrapper`,load:()=>G(()=>import(`./react-wrapper-vIvYZGWV.js`).then(e=>e.default),__vite__mapDeps([30,8]))},{pattern:`/examples/inline`,load:()=>G(()=>import(`./inline-Ax7HuXbZ.js`).then(e=>e.default),__vite__mapDeps([31,8]))},{pattern:`/examples/sticky-filters`,load:()=>G(()=>import(`./sticky-filters-GgkvKz5s.js`).then(e=>e.default),__vite__mapDeps([32,8]))},{pattern:`/examples/grid-size`,load:()=>G(()=>import(`./grid-size-kFxMvvqA.js`).then(e=>e.default),__vite__mapDeps([33,8]))},{pattern:`/examples/preferences`,load:()=>G(()=>import(`./preferences-vc6xK6Wk.js`).then(e=>e.default),__vite__mapDeps([34,8]))},{pattern:`/examples/uploader`,load:()=>G(()=>import(`./uploader-c8DL82KD.js`).then(e=>e.default),__vite__mapDeps([35,8]))},{pattern:`/examples/folder-selection`,load:()=>G(()=>import(`./folder-selection-BFEDEOEi.js`).then(e=>e.default),__vite__mapDeps([36,8]))},{pattern:`/examples/ai-search`,load:()=>G(()=>import(`./ai-search-CpwVz7jh.js`).then(e=>e.default),__vite__mapDeps([37,8]))},{pattern:`/examples/transformations`,load:()=>G(()=>import(`./transformations--A2RBoO8.js`).then(e=>e.default),__vite__mapDeps([38,8]))},{pattern:`/examples/variants`,load:()=>G(()=>import(`./variants-JWtjK-Fs.js`).then(e=>e.default),__vite__mapDeps([39,8]))},{pattern:`/examples/language-switcher`,load:()=>G(()=>import(`./language-switcher-CdD71ybT.js`).then(e=>e.default),__vite__mapDeps([40,8]))}],oo=null,so=0;function co(e){let t=document.getElementById(`content`),n=document.getElementById(`sidebar`),r=document.getElementById(`sidebar-docs`),i=document.getElementById(`sidebar-examples`),a=document.querySelectorAll(`.topbar-nav-link`);async function o(){let o=location.hash.slice(1)||`/`,s=++so;oo?.destroy&&oo.destroy(),e.close();let c=ao.find(e=>e.pattern===o);if(!c){location.hash=`#/`;return}let l=o.startsWith(`/docs/`),u=o.startsWith(`/examples/`),d=l||u,f=o===`/`;n.classList.toggle(`hidden`,!d),document.body.classList.toggle(`has-sidebar`,d),document.body.classList.toggle(`is-home`,f),r.classList.toggle(`hidden`,!l),i.classList.toggle(`hidden`,!u),n.querySelectorAll(`.sidebar-link`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`data-route`)===o)});let p=l?`docs`:u?`examples`:`home`;a.forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`data-section`)===p)}),n.classList.remove(`mobile-open`),window.scrollTo(0,0);let m=await c.load();s===so&&(oo=m,t.innerHTML=m.render(),m.init&&m.init(e))}window.addEventListener(`hashchange`,o),o()}var lo=`ap-demo-auth`,uo={projectToken:`fbmjmuoeb`,securityTemplateKey:`SECU_47D57B3106A841F7A1FEA951846CC5F3`};function fo(){try{let e=localStorage.getItem(lo);if(e)return{...uo,...JSON.parse(e)}}catch{}return{...uo}}function po(e){localStorage.setItem(lo,JSON.stringify(e))}function mo(){let e=window.__apDemoFlags;return e&&typeof e==`object`?e:{}}function ho(e={}){let{projectToken:t,securityTemplateKey:n}=fo();return{auth:{mode:`securityTemplate`,securityTemplateKey:n,projectToken:t},...e,...mo()}}function go(){let e=document.getElementById(`auth-btn`),t=document.getElementById(`auth-popover`),n=document.getElementById(`auth-project-token`),r=document.getElementById(`auth-sec-key`),i=document.getElementById(`auth-save`);try{let e=localStorage.getItem(lo);if(e){let t=JSON.parse(e);n.value=t.projectToken??``,r.value=t.securityTemplateKey??``}}catch{}e.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.toggle(`hidden`)}),i.addEventListener(`click`,()=>{po({projectToken:n.value.trim()||uo.projectToken,securityTemplateKey:r.value.trim()||uo.securityTemplateKey}),window.location.reload()}),document.addEventListener(`click`,n=>{!t.contains(n.target)&&!e.contains(n.target)&&t.classList.add(`hidden`)})}go(),console.info(`%c[asset-picker demo]%c Override picker config from the console:
  window.__apDemoFlags = { folderCreation: true }
Then re-open the picker. Flags merge over the example's own overrides.`,`color: #5b6cff; font-weight: 600;`,`color: inherit;`);var _o=document.getElementById(`sidebar-toggle`),vo=document.getElementById(`sidebar`);_o.addEventListener(`click`,()=>{vo.classList.toggle(`mobile-open`)}),document.getElementById(`content`).addEventListener(`click`,()=>{vo.classList.remove(`mobile-open`)}),co(document.getElementById(`picker`));export{Ii as a,A as i,G as n,St as o,Ri as r,ho as t};