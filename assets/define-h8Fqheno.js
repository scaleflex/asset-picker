const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-provider-browser-2xJAWQ24-DNn6VBBL.js","assets/index-DAAE0gwp.js","assets/index-DcRqXYU3.css","assets/provider-browser-DhrwbwTl-BNVpkzdm.js","assets/index-D4-RSon2-BVJe6U3X.js"])))=>i.map(i=>d[i]);
import{i as ai,A as U,t as li,E as Xe,e as Et,a as X,n as R,r as D,c as vo,d as te,w as we,f as v,D as ke,_ as zt}from"./index-DAAE0gwp.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yt=class extends ai{constructor(e){if(super(e),this.it=U,e.type!==li.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this._t=void 0,this.it=e;if(e===Xe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};yt.directiveName="unsafeHTML",yt.resultType=1;const xi=Et(yt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ht extends yt{}Ht.directiveName="unsafeSVG",Ht.resultType=2;const ve=Et(Ht);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=Et(class extends ai{constructor(t){var e;if(super(t),t.type!==li.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((o=this.nt)!=null&&o.has(s))&&this.st.add(s);return this.render(e)}const i=t.element.classList;for(const s of this.st)s in e||(i.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(n?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return Xe}}),T=t=>typeof t=="string",qe=()=>{let t,e;const i=new Promise((o,r)=>{t=o,e=r});return i.resolve=t,i.reject=e,i},yi=t=>t==null?"":String(t),mr=(t,e,i)=>{t.forEach(o=>{e[o]&&(i[o]=e[o])})},br=/###/g,wi=t=>t&&t.includes("###")?t.replace(br,"."):t,_i=t=>!t||T(t),Ze=(t,e,i)=>{const o=T(e)?e.split("."):e;let r=0;for(;r<o.length-1;){if(_i(t))return{};const s=wi(o[r]);!t[s]&&i&&(t[s]=new i),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++r}return _i(t)?{}:{obj:t,k:wi(o[r])}},ki=(t,e,i)=>{const{obj:o,k:r}=Ze(t,e,Object);if(o!==void 0||e.length===1){o[r]=i;return}let s=e[e.length-1],n=e.slice(0,e.length-1),a=Ze(t,n,Object);for(;a.obj===void 0&&n.length;)s=`${n[n.length-1]}.${s}`,n=n.slice(0,n.length-1),a=Ze(t,n,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=i},xr=(t,e,i,o)=>{const{obj:r,k:s}=Ze(t,e,Object);r[s]=r[s]||[],r[s].push(i)},wt=(t,e)=>{const{obj:i,k:o}=Ze(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,o))return i[o]},yr=(t,e,i)=>{const o=wt(t,i);return o!==void 0?o:wt(e,i)},mo=(t,e,i)=>{for(const o in e)o!=="__proto__"&&o!=="constructor"&&(o in t?T(t[o])||t[o]instanceof String||T(e[o])||e[o]instanceof String?i&&(t[o]=e[o]):mo(t[o],e[o],i):t[o]=e[o]);return t},pe=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),wr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},_r=t=>T(t)?t.replace(/[&<>"'\/]/g,e=>wr[e]):t;class kr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const o=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,o),this.regExpQueue.push(e),o}}const Sr=[" ",",","?","!",";"],Cr=new kr(20),$r=(t,e,i)=>{e=e||"",i=i||"";const o=Sr.filter(n=>!e.includes(n)&&!i.includes(n));if(o.length===0)return!0;const r=Cr.getRegExp(`(${o.map(n=>n==="?"?"\\?":n).join("|")})`);let s=!r.test(t);if(!s){const n=t.indexOf(i);n>0&&!r.test(t.substring(0,n))&&(s=!0)}return s},qt=(t,e,i=".")=>{if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const o=e.split(i);let r=t;for(let s=0;s<o.length;){if(!r||typeof r!="object")return;let n,a="";for(let l=s;l<o.length;++l)if(l!==s&&(a+=i),a+=o[l],n=r[a],n!==void 0){if(["string","number","boolean"].includes(typeof n)&&l<o.length-1)continue;s+=l-s+1;break}r=n}return r},et=t=>t==null?void 0:t.replace(/_/g,"-"),Ur={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,o;(o=(i=console==null?void 0:console[t])==null?void 0:i.apply)==null||o.call(i,console,e)}};class _t{constructor(e,i={}){this.init(e,i)}init(e,i={}){this.prefix=i.prefix||"i18next:",this.logger=e||Ur,this.options=i,this.debug=i.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,o,r){return r&&!this.debug?null:(e=e.map(s=>T(s)?s.replace(/[\r\n\x00-\x1F\x7F]/g," "):s),T(e[0])&&(e[0]=`${o}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new _t(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new _t(this.logger,e)}}var de=new _t;class Pt{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const r=this.observers[o].get(i)||0;this.observers[o].set(i,r+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}once(e,i){const o=(...r)=>{i(...r),this.off(e,o)};return this.on(e,o),this}emit(e,...i){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,r])=>{for(let s=0;s<r;s++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,r])=>{for(let s=0;s<r;s++)o(e,...i)})}}class Si extends Pt{constructor(e,i={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,o,r={}){var s,n;const a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,l=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let d;e.includes(".")?d=e.split("."):(d=[e,i],o&&(Array.isArray(o)?d.push(...o):T(o)&&a?d.push(...o.split(a)):d.push(o)));const c=wt(this.data,d);return!c&&!i&&!o&&e.includes(".")&&(e=d[0],i=d[1],o=d.slice(2).join(".")),c||!l||!T(o)?c:qt((n=(s=this.data)==null?void 0:s[e])==null?void 0:n[i],o,a)}addResource(e,i,o,r,s={silent:!1}){const n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,i];o&&(a=a.concat(n?o.split(n):o)),e.includes(".")&&(a=e.split("."),r=i,i=a[1]),this.addNamespaces(i),ki(this.data,a,r),s.silent||this.emit("added",e,i,o,r)}addResources(e,i,o,r={silent:!1}){for(const s in o)(T(o[s])||Array.isArray(o[s]))&&this.addResource(e,i,s,o[s],{silent:!0});r.silent||this.emit("added",e,i,o)}addResourceBundle(e,i,o,r,s,n={silent:!1,skipCopy:!1}){let a=[e,i];e.includes(".")&&(a=e.split("."),r=o,o=i,i=a[1]),this.addNamespaces(i);let l=wt(this.data,a)||{};n.skipCopy||(o=JSON.parse(JSON.stringify(o))),r?mo(l,o,s):l={...l,...o},ki(this.data,a,l),n.silent||this.emit("added",e,i,o)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var bo={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,o,r){return t.forEach(s=>{var n;e=((n=this.processors[s])==null?void 0:n.process(e,i,o,r))??e}),e}};const xo=Symbol("i18next/PATH_KEY");function Er(){const t=[],e=Object.create(null);let i;return e.get=(o,r)=>{var s;return(s=i==null?void 0:i.revoke)==null||s.call(i),r===xo?t:(t.push(r),i=Proxy.revocable(o,e),i.proxy)},Proxy.revocable(Object.create(null),e).proxy}function Te(t,e){const{[xo]:i}=t(Er()),o=(e==null?void 0:e.keySeparator)??".",r=(e==null?void 0:e.nsSeparator)??":",s=(e==null?void 0:e.enableSelector)==="strict";if(i.length>1&&r){const n=e==null?void 0:e.ns,a=s?Array.isArray(n)?n:n?[n]:null:Array.isArray(n)?n:null;if(a&&(s?a:a.length>1?a.slice(1):[]).includes(i[0]))return`${i[0]}${r}${i.slice(1).join(o)}`}return i.join(o)}const Tt=t=>!T(t)&&typeof t!="boolean"&&typeof t!="number";class kt extends Pt{constructor(e,i={}){super(),mr(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=de.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,i={interpolation:{}}){const o={...i};if(e==null)return!1;const r=this.resolve(e,o);if((r==null?void 0:r.res)===void 0)return!1;const s=Tt(r.res);return!(o.returnObjects===!1&&s)}extractFromKey(e,i){let o=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const r=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let s=i.ns||this.options.defaultNS||[];const n=o&&e.includes(o),a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!$r(e,o,r);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:T(s)?[s]:s};const d=e.split(o);(o!==r||o===r&&this.options.ns.includes(d[0]))&&(s=d.shift()),e=d.join(r)}return{key:e,namespaces:T(s)?[s]:s}}translate(e,i,o){let r=typeof i=="object"?{...i}:i;if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),e==null)return"";typeof e=="function"&&(e=Te(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]),e=e.map(E=>typeof E=="function"?Te(E,{...this.options,...r}):String(E));const s=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,n=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],r),d=l[l.length-1];let c=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;c===void 0&&(c=":");const g=r.lng||this.language,f=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((g==null?void 0:g.toLowerCase())==="cimode")return f?s?{res:`${d}${c}${a}`,usedKey:a,exactUsedKey:a,usedLng:g,usedNS:d,usedParams:this.getUsedParamsDetails(r)}:`${d}${c}${a}`:s?{res:a,usedKey:a,exactUsedKey:a,usedLng:g,usedNS:d,usedParams:this.getUsedParamsDetails(r)}:a;const b=this.resolve(e,r);let x=b==null?void 0:b.res;const k=(b==null?void 0:b.usedKey)||a,C=(b==null?void 0:b.exactUsedKey)||a,j=["[object Number]","[object Function]","[object RegExp]"],m=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,S=!this.i18nFormat||this.i18nFormat.handleAsObject,_=r.count!==void 0&&!T(r.count),w=kt.hasDefaultValue(r),z=_?this.pluralResolver.getSuffix(g,r.count,r):"",P=r.ordinal&&_?this.pluralResolver.getSuffix(g,r.count,{ordinal:!1}):"",A=_&&!r.ordinal&&r.count===0,L=A&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${z}`]||r[`defaultValue${P}`]||r.defaultValue;let M=x;S&&!x&&w&&(M=L);const se=Tt(M),ge=Object.prototype.toString.apply(M);if(S&&M&&se&&!j.includes(ge)&&!(T(m)&&Array.isArray(M))){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const E=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,M,{...r,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return s?(b.res=E,b.usedParams=this.getUsedParamsDetails(r),b):E}if(n){const E=Array.isArray(M),H=E?[]:{},ne=E?C:k;for(const p in M)if(Object.prototype.hasOwnProperty.call(M,p)){const u=`${ne}${n}${p}`;w&&!x?H[p]=this.translate(u,{...r,defaultValue:Tt(L)?L[p]:void 0,joinArrays:!1,ns:l}):H[p]=this.translate(u,{...r,joinArrays:!1,ns:l}),H[p]===u&&(H[p]=M[p])}x=H}}else if(S&&T(m)&&Array.isArray(x))x=x.join(m),x&&(x=this.extendTranslation(x,e,r,o));else{let E=!1,H=!1;!this.isValidLookup(x)&&w&&(E=!0,x=L),this.isValidLookup(x)||(H=!0,x=a);const ne=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&H?void 0:x,p=w&&L!==x&&this.options.updateMissing;if(H||E||p){if(this.logger.log(p?"updateKey":"missingKey",g,d,_&&!p?`${a}${this.pluralResolver.getSuffix(g,r.count,r)}`:a,p?L:x),n){const y=this.resolve(a,{...r,keySeparator:!1});y&&y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let u=[];const h=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&h&&h[0])for(let y=0;y<h.length;y++)u.push(h[y]);else this.options.saveMissingTo==="all"?u=this.languageUtils.toResolveHierarchy(r.lng||this.language):u.push(r.lng||this.language);const $=(y,O,F)=>{var B;const N=w&&F!==x?F:ne;this.options.missingKeyHandler?this.options.missingKeyHandler(y,d,O,N,p,r):(B=this.backendConnector)!=null&&B.saveMissing&&this.backendConnector.saveMissing(y,d,O,N,p,r),this.emit("missingKey",y,d,O,x)};this.options.saveMissing&&(this.options.saveMissingPlurals&&_?u.forEach(y=>{const O=this.pluralResolver.getSuffixes(y,r);A&&r[`defaultValue${this.options.pluralSeparator}zero`]&&!O.includes(`${this.options.pluralSeparator}zero`)&&O.push(`${this.options.pluralSeparator}zero`),O.forEach(F=>{$([y],a+F,r[`defaultValue${F}`]||L)})}):$(u,a,L))}x=this.extendTranslation(x,e,r,b,o),H&&x===a&&this.options.appendNamespaceToMissingKey&&(x=`${d}${c}${a}`),(H||E)&&this.options.parseMissingKeyHandler&&(x=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}${c}${a}`:a,E?x:void 0,r))}return s?(b.res=x,b.usedParams=this.getUsedParamsDetails(r),b):x}extendTranslation(e,i,o,r,s){var n,a;if((n=this.i18nFormat)!=null&&n.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const c=T(e)&&(((a=o==null?void 0:o.interpolation)==null?void 0:a.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let g;if(c){const b=e.match(this.interpolator.nestingRegexp);g=b&&b.length}let f=o.replace&&!T(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,o.lng||this.language||r.usedLng,o),c){const b=e.match(this.interpolator.nestingRegexp),x=b&&b.length;g<x&&(o.nest=!1)}!o.lng&&r&&r.res&&(o.lng=this.language||r.usedLng),o.nest!==!1&&(e=this.interpolator.nest(e,(...b)=>(s==null?void 0:s[0])===b[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${i[0]}`),null):this.translate(...b,i),o)),o.interpolation&&this.interpolator.reset()}const l=o.postProcess||this.options.postProcess,d=T(l)?[l]:l;return e!=null&&d!=null&&d.length&&o.applyPostProcessor!==!1&&(e=bo.handle(d,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),e}resolve(e,i={}){let o,r,s,n,a;return T(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?Te(l,{...this.options,...i}):l)),e.forEach(l=>{if(this.isValidLookup(o))return;const d=this.extractFromKey(l,i),c=d.key;r=c;let g=d.namespaces;this.options.fallbackNS&&(g=g.concat(this.options.fallbackNS));const f=i.count!==void 0&&!T(i.count),b=f&&!i.ordinal&&i.count===0,x=i.context!==void 0&&(T(i.context)||typeof i.context=="number")&&i.context!=="",k=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);g.forEach(C=>{var j,m;this.isValidLookup(o)||(a=C,!this.checkedLoadedFor[`${k[0]}-${C}`]&&(j=this.utils)!=null&&j.hasLoadedNamespace&&!((m=this.utils)!=null&&m.hasLoadedNamespace(a))&&(this.checkedLoadedFor[`${k[0]}-${C}`]=!0,this.logger.warn(`key "${r}" for languages "${k.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(S=>{var _;if(this.isValidLookup(o))return;n=S;const w=[c];if((_=this.i18nFormat)!=null&&_.addLookupKeys)this.i18nFormat.addLookupKeys(w,c,S,C,i);else{let P;f&&(P=this.pluralResolver.getSuffix(S,i.count,i));const A=`${this.options.pluralSeparator}zero`,L=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(i.ordinal&&P.startsWith(L)&&w.push(c+P.replace(L,this.options.pluralSeparator)),w.push(c+P),b&&w.push(c+A)),x){const M=`${c}${this.options.contextSeparator||"_"}${i.context}`;w.push(M),f&&(i.ordinal&&P.startsWith(L)&&w.push(M+P.replace(L,this.options.pluralSeparator)),w.push(M+P),b&&w.push(M+A))}}let z;for(;z=w.pop();)this.isValidLookup(o)||(s=z,o=this.getResource(S,C,z,i))}))})}),{res:o,usedKey:r,exactUsedKey:s,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,o,r={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,i,o,r):this.resourceStore.getResource(e,i,o,r)}getUsedParamsDetails(e={}){const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=e.replace&&!T(e.replace);let r=o?e.replace:e;if(o&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!o){r={...r};for(const s of i)delete r[s]}return r}static hasDefaultValue(e){const i="defaultValue";for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&o.startsWith(i)&&e[o]!==void 0)return!0;return!1}}class Ci{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=de.create("languageUtils")}getScriptPartFromCode(e){if(e=et(e),!e||!e.includes("-"))return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=et(e),!e||!e.includes("-"))return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(T(e)&&e.includes("-")){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(o=>{if(i)return;const r=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(r))&&(i=r)}),!i&&this.options.supportedLngs&&e.forEach(o=>{if(i)return;const r=this.getScriptPartFromCode(o);if(this.isSupportedCode(r))return i=r;const s=this.getLanguagePartFromCode(o);if(this.isSupportedCode(s))return i=s;i=this.options.supportedLngs.find(n=>n===s?!0:!n.includes("-")&&!s.includes("-")?!1:!!(n.includes("-")&&!s.includes("-")&&n.slice(0,n.indexOf("-"))===s||n.startsWith(s)&&s.length>1))}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),T(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let o=e[i];return o||(o=e[this.getScriptPartFromCode(i)]),o||(o=e[this.formatLanguageCode(i)]),o||(o=e[this.getLanguagePartFromCode(i)]),o||(o=e.default),o||[]}toResolveHierarchy(e,i){const o=this.getFallbackCodes((i===!1?[]:i)||this.options.fallbackLng||[],e),r=[],s=n=>{n&&(this.isSupportedCode(n)?r.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return T(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):T(e)&&s(this.formatLanguageCode(e)),o.forEach(n=>{r.includes(n)||s(this.formatLanguageCode(n))}),r}}const $i={zero:0,one:1,two:2,few:3,many:4,other:5},Ui={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Pr{constructor(e,i={}){this.languageUtils=e,this.options=i,this.logger=de.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,i={}){const o=et(e==="dev"?"en":e),r=i.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:o,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let n;try{n=new Intl.PluralRules(o,{type:r})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Ui;if(!e.match(/-|_/))return Ui;const a=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(a,i)}return this.pluralRulesCache[s]=n,n}needsPlural(e,i={}){let o=this.getRule(e,i);return o||(o=this.getRule("dev",i)),(o==null?void 0:o.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,i,o={}){return this.getSuffixes(e,o).map(r=>`${i}${r}`)}getSuffixes(e,i={}){let o=this.getRule(e,i);return o||(o=this.getRule("dev",i)),o?o.resolvedOptions().pluralCategories.sort((r,s)=>$i[r]-$i[s]).map(r=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r}`):[]}getSuffix(e,i,o={}){const r=this.getRule(e,o);return r?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${r.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,o))}}const Ei=(t,e,i,o=".",r=!0)=>{let s=yr(t,e,i);return!s&&r&&T(i)&&(s=qt(t,i,o),s===void 0&&(s=qt(e,i,o))),s},Ft=t=>t.replace(/\$/g,"$$$$");class Pi{constructor(e={}){var i;this.logger=de.create("interpolator"),this.options=e,this.format=((i=e==null?void 0:e.interpolation)==null?void 0:i.format)||(o=>o),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:o,useRawValueToEscape:r,prefix:s,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:d,unescapeSuffix:c,unescapePrefix:g,nestingPrefix:f,nestingPrefixEscaped:b,nestingSuffix:x,nestingSuffixEscaped:k,nestingOptionsSeparator:C,maxReplaces:j,alwaysFormat:m}=e.interpolation;this.escape=i!==void 0?i:_r,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=s?pe(s):n||"{{",this.suffix=a?pe(a):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=c?"":g?pe(g):"-",this.unescapeSuffix=this.unescapePrefix?"":c?pe(c):"",this.nestingPrefix=f?pe(f):b||pe("$t("),this.nestingSuffix=x?pe(x):k||pe(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=j||1e3,this.alwaysFormat=m!==void 0?m:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,o)=>(i==null?void 0:i.source)===o?(i.lastIndex=0,i):new RegExp(o,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,i,o,r){var s;let n,a,l;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=b=>{if(!b.includes(this.formatSeparator)){const j=Ei(i,d,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(j,void 0,o,{...r,...i,interpolationkey:b}):j}const x=b.split(this.formatSeparator),k=x.shift().trim(),C=x.join(this.formatSeparator).trim();return this.format(Ei(i,d,k,this.options.keySeparator,this.options.ignoreJSONStructure),C,o,{...r,...i,interpolationkey:k})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const g=(r==null?void 0:r.missingInterpolationHandler)||this.options.missingInterpolationHandler,f=((s=r==null?void 0:r.interpolation)==null?void 0:s.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>Ft(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?Ft(this.escape(b)):Ft(b)}].forEach(b=>{for(l=0;n=b.regex.exec(e);){const x=n[1].trim();if(a=c(x),a===void 0)if(typeof g=="function"){const C=g(e,n,r);a=T(C)?C:""}else if(r&&Object.prototype.hasOwnProperty.call(r,x))a="";else if(f){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),a="";else!T(a)&&!this.useRawValueToEscape&&(a=yi(a));const k=b.safeValue(a);if(e=e.replace(n[0],k),f?(b.regex.lastIndex+=a.length,b.regex.lastIndex-=n[0].length):b.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,i,o={}){let r,s,n;const a=(l,d)=>{const c=this.nestingOptionsSeparator;if(!l.includes(c))return l;const g=l.split(new RegExp(`${pe(c)}[ ]*{`));let f=`{${g[1]}`;l=g[0],f=this.interpolate(f,n);const b=f.match(/'/g),x=f.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!x||((x==null?void 0:x.length)??0)%2!==0)&&(f=f.replace(/'/g,'"'));try{n=JSON.parse(f),d&&(n={...d,...n})}catch(k){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,k),`${l}${c}${f}`}return n.defaultValue&&n.defaultValue.includes(this.prefix)&&delete n.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];n={...o},n=n.replace&&!T(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;const d=/{.*}/.test(r[1])?r[1].lastIndexOf("}")+1:r[1].indexOf(this.formatSeparator);if(d!==-1&&(l=r[1].slice(d).split(this.formatSeparator).map(c=>c.trim()).filter(Boolean),r[1]=r[1].slice(0,d)),s=i(a.call(this,r[1].trim(),n),n),s&&r[0]===e&&!T(s))return s;T(s)||(s=yi(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),l.length&&(s=l.reduce((c,g)=>this.format(c,g,o.lng,{...o,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const Or=t=>{let e=t.toLowerCase().trim();const i={};if(t.includes("(")){const o=t.split("(");e=o[0].toLowerCase().trim();const r=o[1].slice(0,-1);e==="currency"&&!r.includes(":")?i.currency||(i.currency=r.trim()):e==="relativetime"&&!r.includes(":")?i.range||(i.range=r.trim()):r.split(";").forEach(s=>{if(s){const[n,...a]=s.split(":"),l=a.join(":").trim().replace(/^'+|'+$/g,""),d=n.trim();i[d]||(i[d]=l),l==="false"&&(i[d]=!1),l==="true"&&(i[d]=!0),isNaN(l)||(i[d]=parseInt(l,10))}})}return{formatName:e,formatOptions:i}},Oi=t=>{const e={};return(i,o,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const n=o+JSON.stringify(s);let a=e[n];return a||(a=t(et(o),r),e[n]=a),a(i)}},Lr=t=>(e,i,o)=>t(et(i),o)(e);class Rr{constructor(e={}){this.logger=de.create("formatter"),this.options=e,this.init(e)}init(e,i={interpolation:{}}){this.formatSeparator=i.interpolation.formatSeparator||",";const o=i.cacheInBuiltFormats?Oi:Lr;this.formats={number:o((r,s)=>{const n=new Intl.NumberFormat(r,{...s});return a=>n.format(a)}),currency:o((r,s)=>{const n=new Intl.NumberFormat(r,{...s,style:"currency"});return a=>n.format(a)}),datetime:o((r,s)=>{const n=new Intl.DateTimeFormat(r,{...s});return a=>n.format(a)}),relativetime:o((r,s)=>{const n=new Intl.RelativeTimeFormat(r,{...s});return a=>n.format(a,s.range||"day")}),list:o((r,s)=>{const n=new Intl.ListFormat(r,{...s});return a=>n.format(a)})}}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=Oi(i)}format(e,i,o,r={}){if(!i||e==null)return e;const s=i.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&!s[0].includes(")")&&s.find(n=>n.includes(")"))){const n=s.findIndex(a=>a.includes(")"));s[0]=[s[0],...s.splice(1,n)].join(this.formatSeparator)}return s.reduce((n,a)=>{var l;const{formatName:d,formatOptions:c}=Or(a);if(this.formats[d]){let g=n;try{const f=((l=r==null?void 0:r.formatParams)==null?void 0:l[r.interpolationkey])||{},b=f.locale||f.lng||r.locale||r.lng||o;g=this.formats[d](n,b,{...c,...r,...f})}catch(f){this.logger.warn(f)}return g}else this.logger.warn(`there was no format function for ${d}`);return n},e)}}const jr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class zr extends Pt{constructor(e,i,o,r={}){var s,n;super(),this.backend=e,this.store=i,this.services=o,this.languageUtils=o.languageUtils,this.options=r,this.logger=de.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],(n=(s=this.backend)==null?void 0:s.init)==null||n.call(s,o,r.backend,r)}queueLoad(e,i,o,r){const s={},n={},a={},l={};return e.forEach(d=>{let c=!0;i.forEach(g=>{const f=`${d}|${g}`;!o.reload&&this.store.hasResourceBundle(d,g)?this.state[f]=2:this.state[f]<0||(this.state[f]===1?n[f]===void 0&&(n[f]=!0):(this.state[f]=1,c=!1,n[f]===void 0&&(n[f]=!0),s[f]===void 0&&(s[f]=!0),l[g]===void 0&&(l[g]=!0)))}),c||(a[d]=!0)}),(Object.keys(s).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,i,o){const r=e.split("|"),s=r[0],n=r[1];i&&this.emit("failedLoading",s,n,i),!i&&o&&this.store.addResourceBundle(s,n,o,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&o&&(this.state[e]=0);const a={};this.queue.forEach(l=>{xr(l.loaded,[s],n),jr(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{a[d]||(a[d]={});const c=l.loaded[d];c.length&&c.forEach(g=>{a[d][g]===void 0&&(a[d][g]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,i,o,r=0,s=this.retryTimeout,n){if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:o,tried:r,wait:s,callback:n});return}this.readingCalls++;const a=(d,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const g=this.waitingReads.shift();this.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(d&&c&&r<this.maxRetries){setTimeout(()=>{this.read(e,i,o,r+1,s*2,n)},s);return}n(d,c)},l=this.backend[o].bind(this.backend);if(l.length===2){try{const d=l(e,i);d&&typeof d.then=="function"?d.then(c=>a(null,c)).catch(a):a(null,d)}catch(d){a(d)}return}return l(e,i,a)}prepareLoading(e,i,o={},r){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();T(e)&&(e=this.languageUtils.toResolveHierarchy(e)),T(i)&&(i=[i]);const s=this.queueLoad(e,i,o,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(n=>{this.loadOne(n)})}load(e,i,o){this.prepareLoading(e,i,{},o)}reload(e,i,o){this.prepareLoading(e,i,{reload:!0},o)}loadOne(e,i=""){const o=e.split("|"),r=o[0],s=o[1];this.read(r,s,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${i}loading namespace ${s} for language ${r} failed`,n),!n&&a&&this.logger.log(`${i}loaded namespace ${s} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,i,o,r,s,n={},a=()=>{}){var l,d,c,g,f;if((d=(l=this.services)==null?void 0:l.utils)!=null&&d.hasLoadedNamespace&&!((g=(c=this.services)==null?void 0:c.utils)!=null&&g.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${o}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if((f=this.backend)!=null&&f.create){const b={...n,isUpdate:s},x=this.backend.create.bind(this.backend);if(x.length<6)try{let k;x.length===5?k=x(e,i,o,r,b):k=x(e,i,o,r),k&&typeof k.then=="function"?k.then(C=>a(null,C)).catch(a):a(null,k)}catch(k){a(k)}else x(e,i,o,r,a,b)}!e||!e[0]||this.store.addResource(e[0],i,o,r)}}}const Dt=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),T(t[1])&&(e.defaultValue=t[1]),T(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(o=>{e[o]=i[o]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Li=t=>(T(t.ns)&&(t.ns=[t.ns]),T(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),T(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&!t.supportedLngs.includes("cimode")&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),ft=()=>{},Tr=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t))})};class Qe extends Pt{constructor(e={},i){if(super(),this.options=Li(e),this.services={},this.logger=de,this.modules={external:[]},Tr(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(e={},i){this.isInitializing=!0,typeof e=="function"&&(i=e,e={}),e.defaultNS==null&&e.ns&&(T(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const o=Dt();this.options={...o,...this.options,...Li(e)},this.options.interpolation={...o.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler);const r=a=>a?typeof a=="function"?new a:a:null;if(!this.options.isClone){this.modules.logger?de.init(r(this.modules.logger),this.options):de.init(null,this.options);let a;this.modules.formatter?a=this.modules.formatter:a=Rr;const l=new Ci(this.options);this.store=new Si(this.options.resources,this.options);const d=this.services;d.logger=de,d.resourceStore=this.store,d.languageUtils=l,d.pluralResolver=new Pr(l,{prepend:this.options.pluralSeparator}),a&&(d.formatter=r(a),d.formatter.init&&d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new Pi(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new zr(r(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",(c,...g)=>{this.emit(c,...g)}),this.modules.languageDetector&&(d.languageDetector=r(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=r(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new kt(this.services,this.options),this.translator.on("*",(c,...g)=>{this.emit(c,...g)}),this.modules.external.forEach(c=>{c.init&&c.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ft),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const a=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);a.length>0&&a[0]!=="dev"&&(this.options.lng=a[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(a=>{this[a]=(...l)=>this.store[a](...l)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(a=>{this[a]=(...l)=>(this.store[a](...l),this)});const s=qe(),n=()=>{const a=(l,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(d),i(l,d)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return a(null,this.t.bind(this));this.changeLanguage(this.options.lng,a)};return this.options.resources||!this.options.initAsync?n():setTimeout(n,0),s}loadResources(e,i=ft){var o,r;let s=i;const n=T(e)?e:this.language;if(typeof e=="function"&&(s=e),!this.options.resources||this.options.partialBundledLanguages){if((n==null?void 0:n.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return s();const a=[],l=d=>{!d||d==="cimode"||this.services.languageUtils.toResolveHierarchy(d).forEach(c=>{c!=="cimode"&&(a.includes(c)||a.push(c))})};n?l(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>l(d)),(r=(o=this.options.preload)==null?void 0:o.forEach)==null||r.call(o,d=>l(d)),this.services.backendConnector.load(a,this.options.ns,d=>{!d&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),s(d)})}else s(null)}reloadResources(e,i,o){const r=qe();return typeof e=="function"&&(o=e,e=void 0),typeof i=="function"&&(o=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),o||(o=ft),this.services.backendConnector.reload(e,i,s=>{r.resolve(),o(s)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&bo.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let i=0;i<this.languages.length;i++){const o=this.languages[i];if(!["cimode","dev"].includes(o)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,i){this.isLanguageChangingTo=e;const o=qe();this.emit("languageChanging",e);const r=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},s=(a,l)=>{l?this.isLanguageChangingTo===e&&(r(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,o.resolve((...d)=>this.t(...d)),i&&i(a,(...d)=>this.t(...d))},n=a=>{var l,d;!e&&!a&&this.services.languageDetector&&(a=[]);const c=T(a)?a:a&&a[0],g=this.store.hasLanguageSomeTranslations(c)?c:this.services.languageUtils.getBestMatchFromCodes(T(a)?[a]:a);g&&(this.language||r(g),this.translator.language||this.translator.changeLanguage(g),(d=(l=this.services.languageDetector)==null?void 0:l.cacheUserLanguage)==null||d.call(l,g)),this.loadResources(g,f=>{s(f,g)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),o}getFixedT(e,i,o,r){const s=r==null?void 0:r.scopeNs,n=(a,l,...d)=>{let c;typeof l!="object"?c=this.options.overloadTranslationOptionHandler([a,l].concat(d)):c={...l},c.lng=c.lng||n.lng,c.lngs=c.lngs||n.lngs;const g=c.ns!==void 0&&c.ns!==null;c.ns=c.ns||n.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||o||n.keyPrefix);const f={...this.options,...c};Array.isArray(s)&&!g&&(f.ns=s),typeof c.keyPrefix=="function"&&(c.keyPrefix=Te(c.keyPrefix,f));const b=this.options.keySeparator||".";let x;return c.keyPrefix&&Array.isArray(a)?x=a.map(k=>(typeof k=="function"&&(k=Te(k,f)),`${c.keyPrefix}${b}${k}`)):(typeof a=="function"&&(a=Te(a,f)),x=c.keyPrefix?`${c.keyPrefix}${b}${a}`:a),this.t(x,c)};return T(e)?n.lng=e:n.lngs=e,n.ns=i,n.keyPrefix=o,n}t(...e){var i;return(i=this.translator)==null?void 0:i.translate(...e)}exists(...e){var i;return(i=this.translator)==null?void 0:i.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,i={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=i.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const d=this.services.backendConnector.state[`${a}|${l}`];return d===-1||d===0||d===2};if(i.precheck){const a=i.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(o,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(o,e)&&(!r||n(s,e)))}loadNamespaces(e,i){const o=qe();return this.options.ns?(T(e)&&(e=[e]),e.forEach(r=>{this.options.ns.includes(r)||this.options.ns.push(r)}),this.loadResources(r=>{o.resolve(),i&&i(r)}),o):(i&&i(),Promise.resolve())}loadLanguages(e,i){const o=qe();T(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(n=>!r.includes(n)&&this.services.languageUtils.isSupportedCode(n));return s.length?(this.options.preload=r.concat(s),this.loadResources(n=>{o.resolve(),i&&i(n)}),o):(i&&i(),Promise.resolve())}dir(e){var i,o;if(e||(e=this.resolvedLanguage||(((i=this.languages)==null?void 0:i.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const n=new Intl.Locale(e);if(n&&n.getTextInfo){const a=n.getTextInfo();if(a&&a.direction)return a.direction}}catch{}const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=((o=this.services)==null?void 0:o.languageUtils)||new Ci(Dt());return e.toLowerCase().indexOf("-latn")>1?"ltr":r.includes(s.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},i){const o=new Qe(e,i);return o.createInstance=Qe.createInstance,o}cloneInstance(e={},i=ft){const o=e.forkResourceStore;o&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new Qe(r);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(n=>{s[n]=this[n]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},o){const n=Object.keys(this.store.data).reduce((a,l)=>(a[l]={...this.store.data[l]},a[l]=Object.keys(a[l]).reduce((d,c)=>(d[c]={...a[l][c]},d),a[l]),a),{});s.store=new Si(n,r),s.services.resourceStore=s.store}if(e.interpolation){const n={...Dt().interpolation,...this.options.interpolation,...e.interpolation},a={...r,interpolation:n};s.services.interpolator=new Pi(a)}return s.translator=new kt(s.services,r),s.translator.on("*",(n,...a)=>{s.emit(n,...a)}),s.init(r,i),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Z=Qe.createInstance();Z.createInstance;Z.dir;Z.init;Z.loadResources;Z.reloadResources;Z.use;Z.changeLanguage;Z.getFixedT;Z.t;Z.exists;Z.setDefaultNamespace;Z.hasLoadedNamespace;Z.loadNamespaces;Z.loadLanguages;const yo=["__proto__","constructor","prototype"];function wo(t){return!(typeof t!="string"||t.length===0||t.length>128||yo.indexOf(t)>-1||t.indexOf("..")>-1||t.indexOf("\\")>-1||/[?#%\s@]/.test(t)||/[\x00-\x1F\x7F]/.test(t))}function _o(t){return!(!wo(t)||t.indexOf("/")>-1)}function Fr(t){return wo(t)}const Dr={lng:_o,ns:Fr};function ht(t){return typeof t!="string"?t:t.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function Ar(t){if(typeof t!="string"||t.length===0)return t;try{const e=new URL(t);return e.username||e.password?(e.username="",e.password="",e.toString()):t}catch{return t.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function ko(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function Ir(t){return!!t&&typeof t.then=="function"}function Mr(t){return Ir(t)?t:Promise.resolve(t)}const Br=/\{\{(.+?)\}\}/g;function Ri(t,e){let i=!1;const o=t.replace(Br,(r,s)=>{const n=s.trim();if(yo.indexOf(n)>-1)return r;const a=e[n];if(a==null)return r;const l=Dr[n]||_o,d=String(a).split("+");for(const c of d)if(!l(c))return i=!0,r;return d.join("+")});return i?null:o}const Se=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let St;typeof fetch=="function"?St=fetch:Se&&typeof Se.fetch=="function"&&(St=Se.fetch);const ji=ko()&&Se?Se.XMLHttpRequest:void 0,Nr=typeof ActiveXObject=="function"&&Se?Se.ActiveXObject:void 0,So=["__proto__","constructor","prototype"],Vt=(t,e)=>{if(e&&typeof e=="object"){let i="";for(const o of Object.keys(e))So.indexOf(o)>-1||(i+="&"+encodeURIComponent(o)+"="+encodeURIComponent(e[o]));if(!i)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+i.slice(1)}return t},zi=(t,e,i,o)=>{const r=s=>{if(!s.ok)return i(s.statusText||"Error",{status:s.status});s.text().then(n=>{i(null,{status:s.status,data:n})}).catch(i)};if(o){const s=o(t,e);if(s instanceof Promise){s.then(r).catch(i);return}}typeof fetch=="function"?fetch(t,e).then(r).catch(i):St(t,e).then(r).catch(i)},Hr=(t,e,i,o)=>{t.queryStringParams&&(e=Vt(e,t.queryStringParams));const r={...typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(r["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),i&&(r["Content-Type"]="application/json");const s=typeof t.requestOptions=="function"?t.requestOptions(i):t.requestOptions,n={method:i?"POST":"GET",body:i?t.stringify(i):void 0,headers:r,...t._omitFetchOptions?{}:s},a=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{zi(e,n,o,a)}catch(l){if(!s||Object.keys(s).length===0||!l.message||l.message.indexOf("not implemented")<0)return o(l);try{Object.keys(s).forEach(d=>{delete n[d]}),zi(e,n,o,a),t._omitFetchOptions=!0}catch(d){o(d)}}},qr=(t,e,i,o)=>{i&&typeof i=="object"&&(i=Vt("",i).slice(1)),t.queryStringParams&&(e=Vt(e,t.queryStringParams));try{const r=ji?new ji:new Nr("MSXML2.XMLHTTP.3.0");r.open(i?"POST":"GET",e,1),t.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!t.withCredentials,i&&r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");let s=t.customHeaders;if(s=typeof s=="function"?s():s,s)for(const n of Object.keys(s))So.indexOf(n)>-1||r.setRequestHeader(n,s[n]);r.onreadystatechange=()=>{r.readyState>3&&o(r.status>=400?r.statusText:null,{status:r.status,data:r.responseText})},r.send(i)}catch(r){console&&console.log(r)}},Vr=(t,e,i,o)=>{if(typeof i=="function"&&(o=i,i=void 0),o=o||(()=>{}),St&&e.indexOf("file:")!==0)return Hr(t,e,i,o);if(ko()||typeof ActiveXObject=="function")return qr(t,e,i,o);o(new Error("No fetch and no xhr implementation found!"))},Kr=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:t=>JSON.parse(t),stringify:JSON.stringify,parsePayload:(t,e,i)=>({[e]:i||""}),parseLoadPayload:(t,e)=>{},request:Vr,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var Co=class{constructor(t,e={},i={}){this.services=t,this.options=e,this.allOptions=i,this.type="backend",this.init(t,e,i)}init(t,e={},i={}){if(this.services=t,this.options={...Kr(),...this.options||{},...e},this.allOptions=i,this.services&&this.options.reloadInterval){const o=setInterval(()=>this.reload(),this.options.reloadInterval);typeof o=="object"&&typeof o.unref=="function"&&o.unref()}}readMulti(t,e,i){this._readAny(t,t,e,e,i)}read(t,e,i){this._readAny([t],t,[e],e,i)}_readAny(t,e,i,o,r){let s=this.options.loadPath;typeof this.options.loadPath=="function"&&(s=this.options.loadPath(t,i)),s=Mr(s),s.then(n=>{if(!n)return r(null,{});const a=Ri(n,{lng:t.join("+"),ns:i.join("+")});if(a==null){const l=t.map(ht).join(", "),d=i.map(ht).join(", ");return r(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+d+"]"),!1)}this.loadUrl(a,r,e,o)})}loadUrl(t,e,i,o){const r=typeof i=="string"?[i]:i,s=typeof o=="string"?[o]:o,n=this.options.parseLoadPayload(r,s),a=ht(Ar(t));this.options.request(this.options,t,n,(l,d)=>{if(d&&(d.status>=500&&d.status<600||!d.status))return e("failed loading "+a+"; status code: "+d.status,!0);if(d&&d.status>=400&&d.status<500)return e("failed loading "+a+"; status code: "+d.status,!1);if(!d&&l&&l.message){const f=l.message.toLowerCase();if(["failed","fetch","network","load"].find(b=>f.indexOf(b)>-1))return e("failed loading "+a+": "+ht(l.message),!0)}if(l)return e(l,!1);let c,g;try{typeof d.data=="string"?c=this.options.parse(d.data,i,o):c=d.data}catch{g="failed parsing "+a+" to json"}if(g)return e(g,!1);e(null,c)})}create(t,e,i,o,r){if(!this.options.addPath)return;typeof t=="string"&&(t=[t]);const s=this.options.parsePayload(e,i,o);let n=0;const a=[],l=[];t.forEach(d=>{let c=this.options.addPath;typeof this.options.addPath=="function"&&(c=this.options.addPath(d,e));const g=Ri(c,{lng:d,ns:e});if(g==null){n+=1,r&&n===t.length&&r(a,l);return}this.options.request(this.options,g,s,(f,b)=>{n+=1,a.push(f),l.push(b),n===t.length&&typeof r=="function"&&r(a,l)})})}reload(){const{backendConnector:t,languageUtils:e,logger:i}=this.services,o=t.language;if(o&&o.toLowerCase()==="cimode")return;const r=[],s=n=>{e.toResolveHierarchy(n).forEach(a=>{r.indexOf(a)<0&&r.push(a)})};s(o),this.allOptions.preload&&this.allOptions.preload.forEach(n=>s(n)),r.forEach(n=>{this.allOptions.ns.forEach(a=>{t.read(n,a,"read",null,null,(l,d)=>{l&&i.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&d&&i.log(`loaded namespace ${a} for language ${n}`,d),t.loaded(`${n}|${a}`,l,d)})})})}};Co.type="backend";const $o="f7b2366e-fcb6-4f1a-8f23-8de48422989a",Yr="https://i18n-fastly.ultrafast.io",Wr="https://neo.wordplex.io",Kt="uploader";let xe=null;async function Gr(t="en"){return xe?(xe.language!==t&&await xe.changeLanguage(t),{i18n:xe,isNew:!1}):(xe=Z.createInstance(),await xe.use(Co).init({lng:t,fallbackLng:"en",ns:[Kt],defaultNS:Kt,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,backend:{loadPath:`${Yr}/api/export/grid/f2/${$o}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,i){var o;const r=JSON.parse(e),s=Array.isArray(i)?i[0]:i;return s&&(o=r[s])!=null&&o.__without_namespace?r[s].__without_namespace:r}}}),{i18n:xe,isNew:!0})}const Jr="sfxUploaderTranslationsMissingKeysEnabled";class Xr{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(Jr)==="true",this.enabled&&console.log("%c[uploader] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,i,o,r)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,i,o,r))})}handleMissingKey(e,i="",o=Kt){if(!this.enabled)return;const r=`${o}:${e}`;this._missingKeys[r]={value:i,ns:o}}_renderCurl(){console.group("[uploader] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${Wr}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${$o}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:i,ns:o}])=>({key:o&&e.startsWith(`${o}:`)?e.slice(o.length+1):e,lang:"en",default:i}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const Zr=new Xr,At=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Qr extends ai{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==li.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return Xe}update(e,[i]){if(i===this._lastStyles)return Xe;this._lastStyles=i;const{style:o}=e.element,r=i??{};for(const s of this._appliedProps)(!(s in r)||r[s]==null||r[s]==="")&&(o.removeProperty(At(s)),this._appliedProps.delete(s));for(const[s,n]of Object.entries(r))n!=null&&n!==""?(o.setProperty(At(s),n),this._appliedProps.add(s)):this._appliedProps.has(s)&&(o.removeProperty(At(s)),this._appliedProps.delete(s));return Xe}}const G=Et(Qr);class es{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const i=this.state;this.state={...i,...e},this._notifying=!0;try{this.listeners.forEach(o=>o(this.state,i))}finally{this._notifying=!1}if(this._pendingState){const o=this._pendingState;this._pendingState=null,this.setState(o)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function K(t,e,i){const o=t.getState().files,r=o.get(e);if(!r)return;const s=new Map(o);s.set(e,{...r,...i}),t.setState({files:s})}function Pe(t,e){const i=new Map(t.getState().files);i.set(e.id,e),t.setState({files:i})}function Ti(t,e){const i=t.getState().files;if(!i.has(e))return;const o=new Map(i);o.delete(e),t.setState({files:o})}function ts(){return new es({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:(t,e,i)=>{const o=(r,s)=>r.replace(/\{\{(\w+)\}\}/g,(n,a)=>String(s[a]??""));if(typeof e=="string")return o(e,i??{});if(typeof e=="object"&&e!==null){const r=e,s=r.count;if(s!==void 0){const n=String((s===1?r.defaultValue_one:r.defaultValue_other)??r.defaultValue??t);return o(n,r)}return o(String(r.defaultValue??t),r)}return t}})}class is{constructor(e,i){this.host=e,this.store=i,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const os="SAME_ASSET_EXISTS_SKIP_UPLOAD";function Ae(t){return(t==null?void 0:t.code)===os}function Ot(t,e){return{...t,status:"success",file:t.file??{uuid:t.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Uo(t,e,i){let o=`${t.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(i)for(const[r,s]of Object.entries(i))s!=null&&(o+=`&${encodeURIComponent(r)}=${encodeURIComponent(s)}`);return o}function rs(t,e){const i=new XMLHttpRequest;let o=!1;const r=Uo(e.apiBase,e.folder,e.extraParams);i.open("POST",r);for(const[n,a]of Object.entries(e.authHeaders))i.setRequestHeader(n,a);i.upload.addEventListener("progress",n=>{n.lengthComputable&&!o&&e.onProgress(n.loaded,n.total)}),i.addEventListener("load",()=>{if(o)return;let n;try{n=JSON.parse(i.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${i.status})`));return}i.status>=200&&i.status<300&&n.status==="success"?e.onComplete(n):Ae(n)?e.onComplete(Ot(n,t)):e.onError(new Error(n.hint||n.msg||`Upload failed (HTTP ${i.status})`))}),i.addEventListener("error",()=>{o||e.onError(new Error("Network error — check your connection"))}),i.addEventListener("timeout",()=>{o||e.onError(new Error("Upload timed out"))});const s=new FormData;if(t.file){const n={name:t.name,type:t.type};s.append("info[files[]]",JSON.stringify(n)),Object.keys(t.meta).length>0&&s.append("meta[files[]]",JSON.stringify(t.meta)),t.tags.length>0&&s.append("tags[files[]]",JSON.stringify(t.tags)),s.append("files[]",t.file,t.name)}return i.timeout=6e4,i.send(s),{abort(){o=!0,i.abort()}}}function ss(t,e){if(!t.remoteUrl)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};const i=new XMLHttpRequest;let o=!1;const r=Uo(e.apiBase,e.folder,e.extraParams);i.open("POST",r);for(const[n,a]of Object.entries(e.authHeaders))i.setRequestHeader(n,a);i.setRequestHeader("Content-Type","application/json"),i.addEventListener("load",()=>{if(o)return;let n;try{n=JSON.parse(i.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${i.status})`));return}i.status>=200&&i.status<300&&n.status==="success"?e.onComplete(n):Ae(n)?e.onComplete(Ot(n,t)):e.onError(new Error(n.hint||n.msg||`Upload failed (HTTP ${i.status})`))}),i.addEventListener("error",()=>{o||e.onError(new Error("Network error — check your connection"))}),i.addEventListener("timeout",()=>{o||e.onError(new Error("Upload timed out"))});const s={files_urls:[{url:t.remoteUrl,name:t.name}]};return i.timeout=6e4,i.send(JSON.stringify(s)),{abort(){o=!0,i.abort()}}}function Lt(t){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":t}}function Ie(t){return t.replace(/\/+$/,"")}const ns={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function lt(t){return ns[t]??t}function Ma(t,e){const i=Ie(t),o=btoa(JSON.stringify({origin:window.location.origin})),r=lt(e);return`${i}/${r}/connect?state=${encodeURIComponent(o)}`}async function Ba(t,e,i,o=""){const r=Ie(t),s=o?`/${o}`:"",n=lt(e),a=await fetch(`${r}/${n}/list${s}`,{method:"GET",headers:Lt(i),credentials:"same-origin"});if(a.status===401)throw new di;if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Companion list failed (HTTP ${a.status})`)}return a.json()}async function Na(t,e,i){const o=Ie(t),r=await fetch(`${o}/${i}`,{method:"GET",headers:Lt(e),credentials:"same-origin"});if(r.status===401)throw new di;if(!r.ok){const s=await r.json().catch(()=>null);throw new Error((s==null?void 0:s.message)||`Companion list failed (HTTP ${r.status})`)}return r.json()}async function Ha(t,e,i,o){const r=Ie(t),s=lt(e),n=o?`q=${encodeURIComponent(i)}&${o}`:`q=${encodeURIComponent(i)}`,a=await fetch(`${r}/search/${s}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function as(t,e,i,o,r,s=!1){const n=Ie(t),a=lt(e),l=s?`${n}/search/${a}/get/${o}`:`${n}/${a}/get/${o}`,d=s?{Accept:"application/json","Content-Type":"application/json"}:Lt(i),c=await fetch(l,{method:"POST",headers:d,credentials:"same-origin",body:JSON.stringify({...r,httpMethod:r.httpMethod??"POST",useFormData:r.useFormData??!0,fieldname:r.fieldname??"files[]"})});if(c.status===401)throw new di;if(!c.ok){const g=await c.json().catch(()=>null);throw new Error((g==null?void 0:g.message)||`Companion upload failed (HTTP ${c.status})`)}return c.json()}async function qa(t,e,i){const o=Ie(t),r=lt(e),s=await fetch(`${o}/${r}/logout`,{method:"GET",headers:Lt(i),credentials:"same-origin"});return s.ok?s.json():{ok:!1,revoked:!1}}function ls(t){var e;const i=((e=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(t))==null?void 0:e[1])??t;return`${/^https:\/\//i.test(t)?"wss":"ws"}://${i}`}class di extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function ds(t,e){const i=t.remoteInfo;if(!i)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let o=!1,r=null,s=`${e.apiBase.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e.folder)}`;if(e.extraParams)for(const[l,d]of Object.entries(e.extraParams))d!=null&&(s+=`&${encodeURIComponent(l)}=${encodeURIComponent(d)}`);const n={};t.meta&&Object.keys(t.meta).length>0&&Object.assign(n,t.meta),t.tags&&t.tags.length>0&&(n.tags=t.tags),n["filerobot-folder"]=e.folder;const a=!i.token;return as(i.companionUrl,i.provider,i.token,i.requestPath,{fileId:i.fileId,endpoint:s,headers:e.authHeaders,size:i.size,metadata:n},a).then(l=>{if(o)return;const d=`${ls(i.companionUrl)}/api/${l.token}`;try{r=new WebSocket(d)}catch{e.onError(new Error("Failed to connect to upload progress channel"));return}r.onmessage=c=>{var g,f,b;if(!o)try{const x=JSON.parse(c.data);switch(x.action){case"progress":{const k=x.payload,C=k.bytesUploaded??0,j=k.bytesTotal??(i.size||1);e.onProgress(C,j);break}case"success":{const k=x.payload;if(r==null||r.close(),(g=k.response)!=null&&g.responseText)try{const C=JSON.parse(k.response.responseText);if(C.status==="success"){e.onComplete(C);return}if(Ae(C)){e.onComplete(Ot(C,t));return}e.onError(new Error(C.msg||"Upload failed"));return}catch{}e.onError(new Error("Upload completed but no valid response received"));break}case"error":{r==null||r.close();const k=x.payload;let C=((f=k.error)==null?void 0:f.message)||"Upload failed";if((b=k.response)!=null&&b.responseText)try{const j=JSON.parse(k.response.responseText);C=j.hint||j.msg||j.message||C}catch{}e.onError(new Error(C));break}}}catch{}},r.onerror=()=>{o||e.onError(new Error("Upload progress connection failed"))},r.onclose=()=>{r=null}}).catch(l=>{o||e.onError(l instanceof Error?l:new Error(String(l)))}),{abort(){if(o=!0,r){try{r.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}r.close(),r=null}}}}function Yt(t){"@babel/helpers - typeof";return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt(t)}function cs(t,e,i){return Object.defineProperty(t,"prototype",{writable:!1}),t}function ps(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function us(t,e,i){return e=it(e),fs(t,ci()?Reflect.construct(e,i||[],it(t).constructor):e.apply(t,i))}function fs(t,e){if(e&&(Yt(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hs(t)}function hs(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function gs(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&tt(t,e)}function Wt(t){var e=typeof Map=="function"?new Map:void 0;return Wt=function(i){if(i===null||!ms(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return vs(i,arguments,it(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),tt(o,i)},Wt(t)}function vs(t,e,i){if(ci())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var r=new(t.bind.apply(t,o));return i&&tt(r,i.prototype),r}function ci(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ci=function(){return!!t})()}function ms(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function tt(t,e){return tt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},tt(t,e)}function it(t){return it=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},it(t)}var Ye=(function(t){function e(i){var o,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(ps(this,e),o=us(this,e,[i]),o.originalRequest=s,o.originalResponse=n,o.causingError=r,r!=null&&(i+=", caused by ".concat(r.toString())),s!=null){var a=s.getHeader("X-Request-ID")||"n/a",l=s.getMethod(),d=s.getURL(),c=n?n.getStatus():"n/a",g=n?n.getBody()||"":"n/a";i+=", originated from request (method: ".concat(l,", url: ").concat(d,", response code: ").concat(c,", response text: ").concat(g,", request id: ").concat(a,")")}return o.message=i,o}return gs(e,t),cs(e)})(Wt(Error));function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function bs(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xs(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ws(o.key),o)}}function ys(t,e,i){return e&&xs(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ws(t){var e=_s(t,"string");return ot(e)=="symbol"?e:e+""}function _s(t,e){if(ot(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(ot(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var ks=(function(){function t(){bs(this,t)}return ys(t,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(e){return Promise.resolve([])}},{key:"removeUpload",value:function(e){return Promise.resolve()}},{key:"addUpload",value:function(e,i){return Promise.resolve(null)}}])})();const Eo="3.7.8",Ss=Eo,Me=typeof Buffer=="function",Fi=typeof TextDecoder=="function"?new TextDecoder:void 0,Di=typeof TextEncoder=="function"?new TextEncoder:void 0,Cs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",We=Array.prototype.slice.call(Cs),gt=(t=>{let e={};return t.forEach((i,o)=>e[i]=o),e})(We),$s=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,Y=String.fromCharCode.bind(String),Ai=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),Po=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),Oo=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),Lo=t=>{let e,i,o,r,s="";const n=t.length%3;for(let a=0;a<t.length;){if((i=t.charCodeAt(a++))>255||(o=t.charCodeAt(a++))>255||(r=t.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=i<<16|o<<8|r,s+=We[e>>18&63]+We[e>>12&63]+We[e>>6&63]+We[e&63]}return n?s.slice(0,n-3)+"===".substring(n):s},pi=typeof btoa=="function"?t=>btoa(t):Me?t=>Buffer.from(t,"binary").toString("base64"):Lo,Gt=Me?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let i=0,o=t.length;i<o;i+=4096)e.push(Y.apply(null,t.subarray(i,i+4096)));return pi(e.join(""))},mt=(t,e=!1)=>e?Po(Gt(t)):Gt(t),Us=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?Y(192|e>>>6)+Y(128|e&63):Y(224|e>>>12&15)+Y(128|e>>>6&63)+Y(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return Y(240|e>>>18&7)+Y(128|e>>>12&63)+Y(128|e>>>6&63)+Y(128|e&63)}},Es=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Ro=t=>t.replace(Es,Us),Ii=Me?t=>Buffer.from(t,"utf8").toString("base64"):Di?t=>Gt(Di.encode(t)):t=>pi(Ro(t)),Fe=(t,e=!1)=>e?Po(Ii(t)):Ii(t),Mi=t=>Fe(t,!0),Ps=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Os=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),i=e-65536;return Y((i>>>10)+55296)+Y((i&1023)+56320);case 3:return Y((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return Y((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},jo=t=>t.replace(Ps,Os),zo=t=>{if(t=t.replace(/\s+/g,""),!$s.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,i,o,r=[];for(let s=0;s<t.length;)e=gt[t.charAt(s++)]<<18|gt[t.charAt(s++)]<<12|(i=gt[t.charAt(s++)])<<6|(o=gt[t.charAt(s++)]),i===64?r.push(Y(e>>16&255)):o===64?r.push(Y(e>>16&255,e>>8&255)):r.push(Y(e>>16&255,e>>8&255,e&255));return r.join("")},ui=typeof atob=="function"?t=>atob(Oo(t)):Me?t=>Buffer.from(t,"base64").toString("binary"):zo,To=Me?t=>Ai(Buffer.from(t,"base64")):t=>Ai(ui(t).split("").map(e=>e.charCodeAt(0))),Fo=t=>To(Do(t)),Ls=Me?t=>Buffer.from(t,"base64").toString("utf8"):Fi?t=>Fi.decode(To(t)):t=>jo(ui(t)),Do=t=>Oo(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),Jt=t=>Ls(Do(t)),Rs=t=>{if(typeof t!="string")return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Ao=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),Io=function(){const t=(e,i)=>Object.defineProperty(String.prototype,e,Ao(i));t("fromBase64",function(){return Jt(this)}),t("toBase64",function(e){return Fe(this,e)}),t("toBase64URI",function(){return Fe(this,!0)}),t("toBase64URL",function(){return Fe(this,!0)}),t("toUint8Array",function(){return Fo(this)})},Mo=function(){const t=(e,i)=>Object.defineProperty(Uint8Array.prototype,e,Ao(i));t("toBase64",function(e){return mt(this,e)}),t("toBase64URI",function(){return mt(this,!0)}),t("toBase64URL",function(){return mt(this,!0)})},js=()=>{Io(),Mo()},zs={version:Eo,VERSION:Ss,atob:ui,atobPolyfill:zo,btoa:pi,btoaPolyfill:Lo,fromBase64:Jt,toBase64:Fe,encode:Fe,encodeURI:Mi,encodeURL:Mi,utob:Ro,btou:jo,decode:Jt,isValid:Rs,fromUint8Array:mt,toUint8Array:Fo,extendString:Io,extendUint8Array:Mo,extendBuiltins:js};var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ts(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ni,Hi;function Fs(){return Hi||(Hi=1,Ni=function(t,e){if(e=e.split(":")[0],t=+t,!t)return!1;switch(e){case"http":case"ws":return t!==80;case"https":case"wss":return t!==443;case"ftp":return t!==21;case"gopher":return t!==70;case"file":return!1}return t!==0}),Ni}var vt={},qi;function Ds(){if(qi)return vt;qi=1;var t=Object.prototype.hasOwnProperty,e;function i(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function o(n){try{return encodeURIComponent(n)}catch{return null}}function r(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},d;d=a.exec(n);){var c=i(d[1]),g=i(d[2]);c===null||g===null||c in l||(l[c]=g)}return l}function s(n,a){a=a||"";var l=[],d,c;typeof a!="string"&&(a="?");for(c in n)if(t.call(n,c)){if(d=n[c],!d&&(d===null||d===e||isNaN(d))&&(d=""),c=o(c),d=o(d),c===null||d===null)continue;l.push(c+"="+d)}return l.length?a+l.join("&"):""}return vt.stringify=s,vt.parse=r,vt}var It,Vi;function As(){if(Vi)return It;Vi=1;var t=Fs(),e=Ds(),i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,o=/[\n\r\t]/g,r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(m){return(m||"").toString().replace(i,"")}var d=[["#","hash"],["?","query"],function(m,S){return f(S.protocol)?m.replace(/\\/g,"/"):m},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],c={hash:1,query:1};function g(m){var S;typeof window<"u"?S=window:typeof Bi<"u"?S=Bi:typeof self<"u"?S=self:S={};var _=S.location||{};m=m||_;var w={},z=typeof m,P;if(m.protocol==="blob:")w=new k(unescape(m.pathname),{});else if(z==="string"){w=new k(m,{});for(P in c)delete w[P]}else if(z==="object"){for(P in m)P in c||(w[P]=m[P]);w.slashes===void 0&&(w.slashes=r.test(m.href))}return w}function f(m){return m==="file:"||m==="ftp:"||m==="http:"||m==="https:"||m==="ws:"||m==="wss:"}function b(m,S){m=l(m),m=m.replace(o,""),S=S||{};var _=n.exec(m),w=_[1]?_[1].toLowerCase():"",z=!!_[2],P=!!_[3],A=0,L;return z?P?(L=_[2]+_[3]+_[4],A=_[2].length+_[3].length):(L=_[2]+_[4],A=_[2].length):P?(L=_[3]+_[4],A=_[3].length):L=_[4],w==="file:"?A>=2&&(L=L.slice(2)):f(w)?L=_[4]:w?z&&(L=L.slice(2)):A>=2&&f(S.protocol)&&(L=_[4]),{protocol:w,slashes:z||f(w),slashesCount:A,rest:L}}function x(m,S){if(m==="")return S;for(var _=(S||"/").split("/").slice(0,-1).concat(m.split("/")),w=_.length,z=_[w-1],P=!1,A=0;w--;)_[w]==="."?_.splice(w,1):_[w]===".."?(_.splice(w,1),A++):A&&(w===0&&(P=!0),_.splice(w,1),A--);return P&&_.unshift(""),(z==="."||z==="..")&&_.push(""),_.join("/")}function k(m,S,_){if(m=l(m),m=m.replace(o,""),!(this instanceof k))return new k(m,S,_);var w,z,P,A,L,M,se=d.slice(),ge=typeof S,E=this,H=0;for(ge!=="object"&&ge!=="string"&&(_=S,S=null),_&&typeof _!="function"&&(_=e.parse),S=g(S),z=b(m||"",S),w=!z.protocol&&!z.slashes,E.slashes=z.slashes||w&&S.slashes,E.protocol=z.protocol||S.protocol||"",m=z.rest,(z.protocol==="file:"&&(z.slashesCount!==2||a.test(m))||!z.slashes&&(z.protocol||z.slashesCount<2||!f(E.protocol)))&&(se[3]=[/(.*)/,"pathname"]);H<se.length;H++){if(A=se[H],typeof A=="function"){m=A(m,E);continue}P=A[0],M=A[1],P!==P?E[M]=m:typeof P=="string"?(L=P==="@"?m.lastIndexOf(P):m.indexOf(P),~L&&(typeof A[2]=="number"?(E[M]=m.slice(0,L),m=m.slice(L+A[2])):(E[M]=m.slice(L),m=m.slice(0,L)))):(L=P.exec(m))&&(E[M]=L[1],m=m.slice(0,L.index)),E[M]=E[M]||w&&A[3]&&S[M]||"",A[4]&&(E[M]=E[M].toLowerCase())}_&&(E.query=_(E.query)),w&&S.slashes&&E.pathname.charAt(0)!=="/"&&(E.pathname!==""||S.pathname!=="")&&(E.pathname=x(E.pathname,S.pathname)),E.pathname.charAt(0)!=="/"&&f(E.protocol)&&(E.pathname="/"+E.pathname),t(E.port,E.protocol)||(E.host=E.hostname,E.port=""),E.username=E.password="",E.auth&&(L=E.auth.indexOf(":"),~L?(E.username=E.auth.slice(0,L),E.username=encodeURIComponent(decodeURIComponent(E.username)),E.password=E.auth.slice(L+1),E.password=encodeURIComponent(decodeURIComponent(E.password))):E.username=encodeURIComponent(decodeURIComponent(E.auth)),E.auth=E.password?E.username+":"+E.password:E.username),E.origin=E.protocol!=="file:"&&f(E.protocol)&&E.host?E.protocol+"//"+E.host:"null",E.href=E.toString()}function C(m,S,_){var w=this;switch(m){case"query":typeof S=="string"&&S.length&&(S=(_||e.parse)(S)),w[m]=S;break;case"port":w[m]=S,t(S,w.protocol)?S&&(w.host=w.hostname+":"+S):(w.host=w.hostname,w[m]="");break;case"hostname":w[m]=S,w.port&&(S+=":"+w.port),w.host=S;break;case"host":w[m]=S,s.test(S)?(S=S.split(":"),w.port=S.pop(),w.hostname=S.join(":")):(w.hostname=S,w.port="");break;case"protocol":w.protocol=S.toLowerCase(),w.slashes=!_;break;case"pathname":case"hash":if(S){var z=m==="pathname"?"/":"#";w[m]=S.charAt(0)!==z?z+S:S}else w[m]=S;break;case"username":case"password":w[m]=encodeURIComponent(S);break;case"auth":var P=S.indexOf(":");~P?(w.username=S.slice(0,P),w.username=encodeURIComponent(decodeURIComponent(w.username)),w.password=S.slice(P+1),w.password=encodeURIComponent(decodeURIComponent(w.password))):w.username=encodeURIComponent(decodeURIComponent(S))}for(var A=0;A<d.length;A++){var L=d[A];L[4]&&(w[L[1]]=w[L[1]].toLowerCase())}return w.auth=w.password?w.username+":"+w.password:w.username,w.origin=w.protocol!=="file:"&&f(w.protocol)&&w.host?w.protocol+"//"+w.host:"null",w.href=w.toString(),w}function j(m){(!m||typeof m!="function")&&(m=e.stringify);var S,_=this,w=_.host,z=_.protocol;z&&z.charAt(z.length-1)!==":"&&(z+=":");var P=z+(_.protocol&&_.slashes||f(_.protocol)?"//":"");return _.username?(P+=_.username,_.password&&(P+=":"+_.password),P+="@"):_.password?(P+=":"+_.password,P+="@"):_.protocol!=="file:"&&f(_.protocol)&&!w&&_.pathname!=="/"&&(P+="@"),(w[w.length-1]===":"||s.test(_.hostname)&&!_.port)&&(w+=":"),P+=w+_.pathname,S=typeof _.query=="object"?m(_.query):_.query,S&&(P+=S.charAt(0)!=="?"?"?"+S:S),_.hash&&(P+=_.hash),P}return k.prototype={set:C,toString:j},k.extractProtocol=b,k.location=g,k.trimLeft=l,k.qs=e,It=k,It}var Is=As();const Ms=Ts(Is);function Bs(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,i=t==="x"?e:e&3|8;return i.toString(16)})}function Xt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Xt=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,r=Object.defineProperty||function(p,u,h){p[u]=h.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(p,u,h){return Object.defineProperty(p,u,{value:h,enumerable:!0,configurable:!0,writable:!0}),p[u]}try{d({},"")}catch{d=function(p,u,h){return p[u]=h}}function c(p,u,h,$){var y=u&&u.prototype instanceof j?u:j,O=Object.create(y.prototype),F=new H($||[]);return r(O,"_invoke",{value:M(p,h,F)}),O}function g(p,u,h){try{return{type:"normal",arg:p.call(u,h)}}catch($){return{type:"throw",arg:$}}}e.wrap=c;var f="suspendedStart",b="suspendedYield",x="executing",k="completed",C={};function j(){}function m(){}function S(){}var _={};d(_,n,function(){return this});var w=Object.getPrototypeOf,z=w&&w(w(ne([])));z&&z!==i&&o.call(z,n)&&(_=z);var P=S.prototype=j.prototype=Object.create(_);function A(p){["next","throw","return"].forEach(function(u){d(p,u,function(h){return this._invoke(u,h)})})}function L(p,u){function h(y,O,F,B){var N=g(p[y],p,O);if(N.type!=="throw"){var ee=N.arg,ae=ee.value;return ae&&Ce(ae)=="object"&&o.call(ae,"__await")?u.resolve(ae.__await).then(function(J){h("next",J,F,B)},function(J){h("throw",J,F,B)}):u.resolve(ae).then(function(J){ee.value=J,F(ee)},function(J){return h("throw",J,F,B)})}B(N.arg)}var $;r(this,"_invoke",{value:function(y,O){function F(){return new u(function(B,N){h(y,O,B,N)})}return $=$?$.then(F,F):F()}})}function M(p,u,h){var $=f;return function(y,O){if($===x)throw Error("Generator is already running");if($===k){if(y==="throw")throw O;return{value:t,done:!0}}for(h.method=y,h.arg=O;;){var F=h.delegate;if(F){var B=se(F,h);if(B){if(B===C)continue;return B}}if(h.method==="next")h.sent=h._sent=h.arg;else if(h.method==="throw"){if($===f)throw $=k,h.arg;h.dispatchException(h.arg)}else h.method==="return"&&h.abrupt("return",h.arg);$=x;var N=g(p,u,h);if(N.type==="normal"){if($=h.done?k:b,N.arg===C)continue;return{value:N.arg,done:h.done}}N.type==="throw"&&($=k,h.method="throw",h.arg=N.arg)}}}function se(p,u){var h=u.method,$=p.iterator[h];if($===t)return u.delegate=null,h==="throw"&&p.iterator.return&&(u.method="return",u.arg=t,se(p,u),u.method==="throw")||h!=="return"&&(u.method="throw",u.arg=new TypeError("The iterator does not provide a '"+h+"' method")),C;var y=g($,p.iterator,u.arg);if(y.type==="throw")return u.method="throw",u.arg=y.arg,u.delegate=null,C;var O=y.arg;return O?O.done?(u[p.resultName]=O.value,u.next=p.nextLoc,u.method!=="return"&&(u.method="next",u.arg=t),u.delegate=null,C):O:(u.method="throw",u.arg=new TypeError("iterator result is not an object"),u.delegate=null,C)}function ge(p){var u={tryLoc:p[0]};1 in p&&(u.catchLoc=p[1]),2 in p&&(u.finallyLoc=p[2],u.afterLoc=p[3]),this.tryEntries.push(u)}function E(p){var u=p.completion||{};u.type="normal",delete u.arg,p.completion=u}function H(p){this.tryEntries=[{tryLoc:"root"}],p.forEach(ge,this),this.reset(!0)}function ne(p){if(p||p===""){var u=p[n];if(u)return u.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length)){var h=-1,$=function y(){for(;++h<p.length;)if(o.call(p,h))return y.value=p[h],y.done=!1,y;return y.value=t,y.done=!0,y};return $.next=$}}throw new TypeError(Ce(p)+" is not iterable")}return m.prototype=S,r(P,"constructor",{value:S,configurable:!0}),r(S,"constructor",{value:m,configurable:!0}),m.displayName=d(S,l,"GeneratorFunction"),e.isGeneratorFunction=function(p){var u=typeof p=="function"&&p.constructor;return!!u&&(u===m||(u.displayName||u.name)==="GeneratorFunction")},e.mark=function(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,S):(p.__proto__=S,d(p,l,"GeneratorFunction")),p.prototype=Object.create(P),p},e.awrap=function(p){return{__await:p}},A(L.prototype),d(L.prototype,a,function(){return this}),e.AsyncIterator=L,e.async=function(p,u,h,$,y){y===void 0&&(y=Promise);var O=new L(c(p,u,h,$),y);return e.isGeneratorFunction(u)?O:O.next().then(function(F){return F.done?F.value:O.next()})},A(P),d(P,l,"Generator"),d(P,n,function(){return this}),d(P,"toString",function(){return"[object Generator]"}),e.keys=function(p){var u=Object(p),h=[];for(var $ in u)h.push($);return h.reverse(),function y(){for(;h.length;){var O=h.pop();if(O in u)return y.value=O,y.done=!1,y}return y.done=!0,y}},e.values=ne,H.prototype={constructor:H,reset:function(p){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!p)for(var u in this)u.charAt(0)==="t"&&o.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=t)},stop:function(){this.done=!0;var p=this.tryEntries[0].completion;if(p.type==="throw")throw p.arg;return this.rval},dispatchException:function(p){if(this.done)throw p;var u=this;function h(N,ee){return O.type="throw",O.arg=p,u.next=N,ee&&(u.method="next",u.arg=t),!!ee}for(var $=this.tryEntries.length-1;$>=0;--$){var y=this.tryEntries[$],O=y.completion;if(y.tryLoc==="root")return h("end");if(y.tryLoc<=this.prev){var F=o.call(y,"catchLoc"),B=o.call(y,"finallyLoc");if(F&&B){if(this.prev<y.catchLoc)return h(y.catchLoc,!0);if(this.prev<y.finallyLoc)return h(y.finallyLoc)}else if(F){if(this.prev<y.catchLoc)return h(y.catchLoc,!0)}else{if(!B)throw Error("try statement without catch or finally");if(this.prev<y.finallyLoc)return h(y.finallyLoc)}}}},abrupt:function(p,u){for(var h=this.tryEntries.length-1;h>=0;--h){var $=this.tryEntries[h];if($.tryLoc<=this.prev&&o.call($,"finallyLoc")&&this.prev<$.finallyLoc){var y=$;break}}y&&(p==="break"||p==="continue")&&y.tryLoc<=u&&u<=y.finallyLoc&&(y=null);var O=y?y.completion:{};return O.type=p,O.arg=u,y?(this.method="next",this.next=y.finallyLoc,C):this.complete(O)},complete:function(p,u){if(p.type==="throw")throw p.arg;return p.type==="break"||p.type==="continue"?this.next=p.arg:p.type==="return"?(this.rval=this.arg=p.arg,this.method="return",this.next="end"):p.type==="normal"&&u&&(this.next=u),C},finish:function(p){for(var u=this.tryEntries.length-1;u>=0;--u){var h=this.tryEntries[u];if(h.finallyLoc===p)return this.complete(h.completion,h.afterLoc),E(h),C}},catch:function(p){for(var u=this.tryEntries.length-1;u>=0;--u){var h=this.tryEntries[u];if(h.tryLoc===p){var $=h.completion;if($.type==="throw"){var y=$.arg;E(h)}return y}}throw Error("illegal catch attempt")},delegateYield:function(p,u,h){return this.delegate={iterator:ne(p),resultName:u,nextLoc:h},this.method==="next"&&(this.arg=t),C}},e}function Ki(t,e,i,o,r,s,n){try{var a=t[s](n),l=a.value}catch(d){i(d);return}a.done?e(l):Promise.resolve(l).then(o,r)}function Ns(t){return function(){var e=this,i=arguments;return new Promise(function(o,r){var s=t.apply(e,i);function n(l){Ki(s,o,r,n,a,"next",l)}function a(l){Ki(s,o,r,n,a,"throw",l)}n(void 0)})}}function Bo(t,e){return Vs(t)||qs(t,e)||No(t,e)||Hs()}function Hs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qs(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var o,r,s,n,a=[],l=!0,d=!1;try{if(s=(i=i.call(t)).next,e!==0)for(;!(l=(o=s.call(i)).done)&&(a.push(o.value),a.length!==e);l=!0);}catch(c){d=!0,r=c}finally{try{if(!l&&i.return!=null&&(n=i.return(),Object(n)!==n))return}finally{if(d)throw r}}return a}}function Vs(t){if(Array.isArray(t))return t}function Ce(t){"@babel/helpers - typeof";return Ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(t)}function Ks(t,e){var i=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=No(t))||e){i&&(t=i);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,n=!1,a;return{s:function(){i=i.call(t)},n:function(){var l=i.next();return s=l.done,l},e:function(l){n=!0,a=l},f:function(){try{!s&&i.return!=null&&i.return()}finally{if(n)throw a}}}}function No(t,e){if(t){if(typeof t=="string")return Yi(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Yi(t,e)}}function Yi(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Wi(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,o)}return i}function Oe(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Wi(Object(i),!0).forEach(function(o){Ys(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Wi(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function Ys(t,e,i){return e=Ho(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ws(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Gi(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Ho(o.key),o)}}function Gs(t,e,i){return e&&Gi(t.prototype,e),i&&Gi(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ho(t){var e=Js(t,"string");return Ce(e)=="symbol"?e:e+""}function Js(t,e){if(Ce(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(Ce(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var bt="tus-v1",xt="ietf-draft-03",Ge="ietf-draft-05",Xs={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:qo,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:bt},Ct=(function(){function t(e,i){Ws(this,t),"resume"in i&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=i,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Gs(t,[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then(function(i){return e._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![bt,xt,Ge].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var r=0,s=["uploadUrl","uploadSize","uploadLengthDeferred"];r<s.length;r++){var n=s[r];if(this.options[n]){this._emitError(new Error("tus: cannot use the ".concat(n," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(a){return e._fingerprint=a,e._source?e._source:e.options.fileReader.openFile(i,e.options.chunkSize)}).then(function(a){if(e._source=a,e.options.uploadLengthDeferred)e._size=null;else if(e.options.uploadSize!=null){if(e._size=Number(e.options.uploadSize),Number.isNaN(e._size)){e._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(e._size=e._source.size,e._size==null){e._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}e.options.parallelUploads>1||e._parallelUploadUrls!=null?e._startParallelUpload():e._startSingleUpload()}).catch(function(a){e._emitError(a)})}},{key:"_startParallelUpload",value:function(){var e,i=this,o=this._size,r=0;this._parallelUploads=[];var s=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,n=(e=this.options.parallelUploadBoundaries)!==null&&e!==void 0?e:Qs(this._source.size,s);this._parallelUploadUrls&&n.forEach(function(d,c){d.uploadUrl=i._parallelUploadUrls[c]||null}),this._parallelUploadUrls=new Array(n.length);var a=n.map(function(d,c){var g=0;return i._source.slice(d.start,d.end).then(function(f){var b=f.value;return new Promise(function(x,k){var C=Oe(Oe({},i.options),{},{uploadUrl:d.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Oe(Oe({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:x,onError:k,onProgress:function(m){r=r-g+m,g=m,i._emitProgress(r,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[c]=j.url,i._parallelUploadUrls.filter(function(m){return!!m}).length===n.length&&i._saveUploadInUrlStorage()}}),j=new t(b,C);j.start(),i._parallelUploads.push(j)})})}),l;Promise.all(a).then(function(){l=i._openRequest("POST",i.options.endpoint),l.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var d=Ji(i.options.metadata);return d!==""&&l.setHeader("Upload-Metadata",d),i._sendRequest(l,null)}).then(function(d){if(!je(d.getStatus(),200)){i._emitHttpError(l,d,"tus: unexpected response while creating upload");return}var c=d.getHeader("Location");if(c==null){i._emitHttpError(l,d,"tus: invalid or missing Location header");return}i.url=eo(i.options.endpoint,c),"Created upload at ".concat(i.url),i._emitSuccess(d)}).catch(function(d){i._emitError(d)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(e){var i=this;if(this._parallelUploads!=null){var o=Ks(this._parallelUploads),r;try{for(o.s();!(r=o.n()).done;){var s=r.value;s.abort(e)}}catch(n){o.e(n)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!e||this.url==null?Promise.resolve():t.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(e,i,o,r){this._emitError(new Ye(o,r,e,i))}},{key:"_emitError",value:function(e){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),Qi(e,this._retryAttempt,this.options)){var r=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},r);return}}if(typeof this.options.onError=="function")this.options.onError(e);else throw e}}},{key:"_emitSuccess",value:function(e){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:e})}},{key:"_emitProgress",value:function(e,i){typeof this.options.onProgress=="function"&&this.options.onProgress(e,i)}},{key:"_emitChunkComplete",value:function(e,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(e,i,o)}},{key:"_createUpload",value:function(){var e=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=Ji(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var r;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,r=this._addChunkToRequest(i)):((this.options.protocol===xt||this.options.protocol===Ge)&&i.setHeader("Upload-Complete","?0"),r=this._sendRequest(i,null)),r.then(function(s){if(!je(s.getStatus(),200)){e._emitHttpError(i,s,"tus: unexpected response while creating upload");return}var n=s.getHeader("Location");if(n==null){e._emitHttpError(i,s,"tus: invalid or missing Location header");return}if(e.url=eo(e.options.endpoint,n),"Created upload at ".concat(e.url),typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._size===0){e._emitSuccess(s),e._source.close();return}e._saveUploadInUrlStorage().then(function(){e.options.uploadDataDuringCreation?e._handleUploadResponse(i,s):(e._offset=0,e._performUpload())})}).catch(function(s){e._emitHttpError(i,null,"tus: failed to create upload",s)})}},{key:"_resumeUpload",value:function(){var e=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(r){var s=r.getStatus();if(!je(s,200)){if(s===423){e._emitHttpError(i,r,"tus: upload is currently locked; retry later");return}if(je(s,400)&&e._removeFromUrlStorage(),!e.options.endpoint){e._emitHttpError(i,r,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}e.url=null,e._createUpload();return}var n=Number.parseInt(r.getHeader("Upload-Offset"),10);if(Number.isNaN(n)){e._emitHttpError(i,r,"tus: invalid or missing offset value");return}var a=Number.parseInt(r.getHeader("Upload-Length"),10);if(Number.isNaN(a)&&!e.options.uploadLengthDeferred&&e.options.protocol===bt){e._emitHttpError(i,r,"tus: invalid or missing length value");return}typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._saveUploadInUrlStorage().then(function(){if(n===a){e._emitProgress(a,a),e._emitSuccess(r);return}e._offset=n,e._performUpload()})}).catch(function(r){e._emitHttpError(i,null,"tus: failed to resume upload",r)})}},{key:"_performUpload",value:function(){var e=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(r){if(!je(r.getStatus(),200)){e._emitHttpError(i,r,"tus: unexpected response while uploading chunk");return}e._handleUploadResponse(i,r)}).catch(function(r){e._aborted||e._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(e._offset),r)})}}},{key:"_addChunkToRequest",value:function(e){var i=this,o=this._offset,r=this._offset+this.options.chunkSize;return e.setProgressHandler(function(s){i._emitProgress(o+s,i._size)}),this.options.protocol===bt?e.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===Ge&&e.setHeader("Content-Type","application/partial-upload"),(r===Number.POSITIVE_INFINITY||r>this._size)&&!this.options.uploadLengthDeferred&&(r=this._size),this._source.slice(o,r).then(function(s){var n=s.value,a=s.done,l=n!=null&&n.size?n.size:0;i.options.uploadLengthDeferred&&a&&(i._size=i._offset+l,e.setHeader("Upload-Length","".concat(i._size)));var d=i._offset+l;return!i.options.uploadLengthDeferred&&a&&d!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(d," bytes"))):n===null?i._sendRequest(e):((i.options.protocol===xt||i.options.protocol===Ge)&&e.setHeader("Upload-Complete",a?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(e,n))})}},{key:"_handleUploadResponse",value:function(e,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(e,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(e,i){var o=Xi(e,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){e._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){e._urlStorageKey=o})}},{key:"_sendRequest",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return Zi(e,i,this.options)}}],[{key:"terminate",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=Xi("DELETE",e,i);return Zi(o,null,i).then(function(r){if(r.getStatus()!==204)throw new Ye("tus: unexpected response while terminating upload",null,o,r)}).catch(function(r){if(r instanceof Ye||(r=new Ye("tus: failed to terminate upload",r,o,null)),!Qi(r,0,i))throw r;var s=i.retryDelays[0],n=i.retryDelays.slice(1),a=Oe(Oe({},i),{},{retryDelays:n});return new Promise(function(l){return setTimeout(l,s)}).then(function(){return t.terminate(e,a)})})}}])})();function Ji(t){return Object.entries(t).map(function(e){var i=Bo(e,2),o=i[0],r=i[1];return"".concat(o," ").concat(zs.encode(String(r)))}).join(",")}function je(t,e){return t>=e&&t<e+100}function Xi(t,e,i){var o=i.httpStack.createRequest(t,e);i.protocol===xt?o.setHeader("Upload-Draft-Interop-Version","5"):i.protocol===Ge?o.setHeader("Upload-Draft-Interop-Version","6"):o.setHeader("Tus-Resumable","1.0.0");for(var r=i.headers||{},s=0,n=Object.entries(r);s<n.length;s++){var a=Bo(n[s],2),l=a[0],d=a[1];o.setHeader(l,d)}if(i.addRequestId){var c=Bs();o.setHeader("X-Request-ID",c)}return o}function Zi(t,e,i){return Zt.apply(this,arguments)}function Zt(){return Zt=Ns(Xt().mark(function t(e,i,o){var r;return Xt().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(typeof o.onBeforeRequest!="function"){s.next=3;break}return s.next=3,o.onBeforeRequest(e);case 3:return s.next=5,e.send(i);case 5:if(r=s.sent,typeof o.onAfterResponse!="function"){s.next=9;break}return s.next=9,o.onAfterResponse(e,r);case 9:return s.abrupt("return",r);case 10:case"end":return s.stop()}},t)})),Zt.apply(this,arguments)}function Zs(){var t=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(t=!1),t}function Qi(t,e,i){return i.retryDelays==null||e>=i.retryDelays.length||t.originalRequest==null?!1:i&&typeof i.onShouldRetry=="function"?i.onShouldRetry(t,e,i):qo(t)}function qo(t){var e=t.originalResponse?t.originalResponse.getStatus():0;return(!je(e,400)||e===409||e===423)&&Zs()}function eo(t,e){return new Ms(e,t).toString()}function Qs(t,e){for(var i=Math.floor(t/e),o=[],r=0;r<e;r++)o.push({start:i*r,end:i*(r+1)});return o[e-1].end=t,o}Ct.defaultOptions=Xs;var Vo=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function en(t){return new Promise(function(e,i){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var r=o.response;e(r)},o.onerror=function(r){i(r)},o.open("GET",t),o.send()})}var tn=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function on(t){return new Promise(function(e,i){var o=new FileReader;o.onload=function(){var r=new Uint8Array(o.result);e({value:r})},o.onerror=function(r){i(r)},o.readAsArrayBuffer(t)})}function rt(t){"@babel/helpers - typeof";return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rt(t)}function rn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function sn(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,an(o.key),o)}}function nn(t,e,i){return e&&sn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function an(t){var e=ln(t,"string");return rt(e)=="symbol"?e:e+""}function ln(t,e){if(rt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(rt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var to=(function(){function t(e){rn(this,t),this._file=e,this.size=e.size}return nn(t,[{key:"slice",value:function(e,i){if(tn())return on(this._file.slice(e,i));var o=this._file.slice(e,i),r=i>=this.size;return Promise.resolve({value:o,done:r})}},{key:"close",value:function(){}}])})();function st(t){"@babel/helpers - typeof";return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},st(t)}function dn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function cn(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,un(o.key),o)}}function pn(t,e,i){return e&&cn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function un(t){var e=fn(t,"string");return st(e)=="symbol"?e:e+""}function fn(t,e){if(st(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(st(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function io(t){return t===void 0?0:t.size!==void 0?t.size:t.length}function hn(t,e){if(t.concat)return t.concat(e);if(t instanceof Blob)return new Blob([t,e],{type:t.type});if(t.set){var i=new t.constructor(t.length+e.length);return i.set(t),i.set(e,t.length),i}throw new Error("Unknown data type")}var gn=(function(){function t(e){dn(this,t),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return pn(t,[{key:"slice",value:function(e,i){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,i)}},{key:"_readUntilEnoughDataOrDone",value:function(e,i){var o=this,r=i<=this._bufferOffset+io(this._buffer);if(this._done||r){var s=this._getDataFromBuffer(e,i),n=s==null?this._done:!1;return Promise.resolve({value:s,done:n})}return this._reader.read().then(function(a){var l=a.value,d=a.done;return d?o._done=!0:o._buffer===void 0?o._buffer=l:o._buffer=hn(o._buffer,l),o._readUntilEnoughDataOrDone(e,i)})}},{key:"_getDataFromBuffer",value:function(e,i){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var o=io(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function $e(t){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$e(t)}function Qt(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */Qt=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,r=Object.defineProperty||function(p,u,h){p[u]=h.value},s=typeof Symbol=="function"?Symbol:{},n=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function d(p,u,h){return Object.defineProperty(p,u,{value:h,enumerable:!0,configurable:!0,writable:!0}),p[u]}try{d({},"")}catch{d=function(p,u,h){return p[u]=h}}function c(p,u,h,$){var y=u&&u.prototype instanceof j?u:j,O=Object.create(y.prototype),F=new H($||[]);return r(O,"_invoke",{value:M(p,h,F)}),O}function g(p,u,h){try{return{type:"normal",arg:p.call(u,h)}}catch($){return{type:"throw",arg:$}}}e.wrap=c;var f="suspendedStart",b="suspendedYield",x="executing",k="completed",C={};function j(){}function m(){}function S(){}var _={};d(_,n,function(){return this});var w=Object.getPrototypeOf,z=w&&w(w(ne([])));z&&z!==i&&o.call(z,n)&&(_=z);var P=S.prototype=j.prototype=Object.create(_);function A(p){["next","throw","return"].forEach(function(u){d(p,u,function(h){return this._invoke(u,h)})})}function L(p,u){function h(y,O,F,B){var N=g(p[y],p,O);if(N.type!=="throw"){var ee=N.arg,ae=ee.value;return ae&&$e(ae)=="object"&&o.call(ae,"__await")?u.resolve(ae.__await).then(function(J){h("next",J,F,B)},function(J){h("throw",J,F,B)}):u.resolve(ae).then(function(J){ee.value=J,F(ee)},function(J){return h("throw",J,F,B)})}B(N.arg)}var $;r(this,"_invoke",{value:function(y,O){function F(){return new u(function(B,N){h(y,O,B,N)})}return $=$?$.then(F,F):F()}})}function M(p,u,h){var $=f;return function(y,O){if($===x)throw Error("Generator is already running");if($===k){if(y==="throw")throw O;return{value:t,done:!0}}for(h.method=y,h.arg=O;;){var F=h.delegate;if(F){var B=se(F,h);if(B){if(B===C)continue;return B}}if(h.method==="next")h.sent=h._sent=h.arg;else if(h.method==="throw"){if($===f)throw $=k,h.arg;h.dispatchException(h.arg)}else h.method==="return"&&h.abrupt("return",h.arg);$=x;var N=g(p,u,h);if(N.type==="normal"){if($=h.done?k:b,N.arg===C)continue;return{value:N.arg,done:h.done}}N.type==="throw"&&($=k,h.method="throw",h.arg=N.arg)}}}function se(p,u){var h=u.method,$=p.iterator[h];if($===t)return u.delegate=null,h==="throw"&&p.iterator.return&&(u.method="return",u.arg=t,se(p,u),u.method==="throw")||h!=="return"&&(u.method="throw",u.arg=new TypeError("The iterator does not provide a '"+h+"' method")),C;var y=g($,p.iterator,u.arg);if(y.type==="throw")return u.method="throw",u.arg=y.arg,u.delegate=null,C;var O=y.arg;return O?O.done?(u[p.resultName]=O.value,u.next=p.nextLoc,u.method!=="return"&&(u.method="next",u.arg=t),u.delegate=null,C):O:(u.method="throw",u.arg=new TypeError("iterator result is not an object"),u.delegate=null,C)}function ge(p){var u={tryLoc:p[0]};1 in p&&(u.catchLoc=p[1]),2 in p&&(u.finallyLoc=p[2],u.afterLoc=p[3]),this.tryEntries.push(u)}function E(p){var u=p.completion||{};u.type="normal",delete u.arg,p.completion=u}function H(p){this.tryEntries=[{tryLoc:"root"}],p.forEach(ge,this),this.reset(!0)}function ne(p){if(p||p===""){var u=p[n];if(u)return u.call(p);if(typeof p.next=="function")return p;if(!isNaN(p.length)){var h=-1,$=function y(){for(;++h<p.length;)if(o.call(p,h))return y.value=p[h],y.done=!1,y;return y.value=t,y.done=!0,y};return $.next=$}}throw new TypeError($e(p)+" is not iterable")}return m.prototype=S,r(P,"constructor",{value:S,configurable:!0}),r(S,"constructor",{value:m,configurable:!0}),m.displayName=d(S,l,"GeneratorFunction"),e.isGeneratorFunction=function(p){var u=typeof p=="function"&&p.constructor;return!!u&&(u===m||(u.displayName||u.name)==="GeneratorFunction")},e.mark=function(p){return Object.setPrototypeOf?Object.setPrototypeOf(p,S):(p.__proto__=S,d(p,l,"GeneratorFunction")),p.prototype=Object.create(P),p},e.awrap=function(p){return{__await:p}},A(L.prototype),d(L.prototype,a,function(){return this}),e.AsyncIterator=L,e.async=function(p,u,h,$,y){y===void 0&&(y=Promise);var O=new L(c(p,u,h,$),y);return e.isGeneratorFunction(u)?O:O.next().then(function(F){return F.done?F.value:O.next()})},A(P),d(P,l,"Generator"),d(P,n,function(){return this}),d(P,"toString",function(){return"[object Generator]"}),e.keys=function(p){var u=Object(p),h=[];for(var $ in u)h.push($);return h.reverse(),function y(){for(;h.length;){var O=h.pop();if(O in u)return y.value=O,y.done=!1,y}return y.done=!0,y}},e.values=ne,H.prototype={constructor:H,reset:function(p){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!p)for(var u in this)u.charAt(0)==="t"&&o.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=t)},stop:function(){this.done=!0;var p=this.tryEntries[0].completion;if(p.type==="throw")throw p.arg;return this.rval},dispatchException:function(p){if(this.done)throw p;var u=this;function h(N,ee){return O.type="throw",O.arg=p,u.next=N,ee&&(u.method="next",u.arg=t),!!ee}for(var $=this.tryEntries.length-1;$>=0;--$){var y=this.tryEntries[$],O=y.completion;if(y.tryLoc==="root")return h("end");if(y.tryLoc<=this.prev){var F=o.call(y,"catchLoc"),B=o.call(y,"finallyLoc");if(F&&B){if(this.prev<y.catchLoc)return h(y.catchLoc,!0);if(this.prev<y.finallyLoc)return h(y.finallyLoc)}else if(F){if(this.prev<y.catchLoc)return h(y.catchLoc,!0)}else{if(!B)throw Error("try statement without catch or finally");if(this.prev<y.finallyLoc)return h(y.finallyLoc)}}}},abrupt:function(p,u){for(var h=this.tryEntries.length-1;h>=0;--h){var $=this.tryEntries[h];if($.tryLoc<=this.prev&&o.call($,"finallyLoc")&&this.prev<$.finallyLoc){var y=$;break}}y&&(p==="break"||p==="continue")&&y.tryLoc<=u&&u<=y.finallyLoc&&(y=null);var O=y?y.completion:{};return O.type=p,O.arg=u,y?(this.method="next",this.next=y.finallyLoc,C):this.complete(O)},complete:function(p,u){if(p.type==="throw")throw p.arg;return p.type==="break"||p.type==="continue"?this.next=p.arg:p.type==="return"?(this.rval=this.arg=p.arg,this.method="return",this.next="end"):p.type==="normal"&&u&&(this.next=u),C},finish:function(p){for(var u=this.tryEntries.length-1;u>=0;--u){var h=this.tryEntries[u];if(h.finallyLoc===p)return this.complete(h.completion,h.afterLoc),E(h),C}},catch:function(p){for(var u=this.tryEntries.length-1;u>=0;--u){var h=this.tryEntries[u];if(h.tryLoc===p){var $=h.completion;if($.type==="throw"){var y=$.arg;E(h)}return y}}throw Error("illegal catch attempt")},delegateYield:function(p,u,h){return this.delegate={iterator:ne(p),resultName:u,nextLoc:h},this.method==="next"&&(this.arg=t),C}},e}function oo(t,e,i,o,r,s,n){try{var a=t[s](n),l=a.value}catch(d){i(d);return}a.done?e(l):Promise.resolve(l).then(o,r)}function vn(t){return function(){var e=this,i=arguments;return new Promise(function(o,r){var s=t.apply(e,i);function n(l){oo(s,o,r,n,a,"next",l)}function a(l){oo(s,o,r,n,a,"throw",l)}n(void 0)})}}function mn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bn(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,yn(o.key),o)}}function xn(t,e,i){return e&&bn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function yn(t){var e=wn(t,"string");return $e(e)=="symbol"?e:e+""}function wn(t,e){if($e(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if($e(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var _n=(function(){function t(){mn(this,t)}return xn(t,[{key:"openFile",value:(function(){var e=vn(Qt().mark(function o(r,s){var n;return Qt().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(Vo()&&r&&typeof r.uri<"u")){a.next=11;break}return a.prev=1,a.next=4,en(r.uri);case 4:return n=a.sent,a.abrupt("return",new to(n));case 8:throw a.prev=8,a.t0=a.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(a.t0));case 11:if(!(typeof r.slice=="function"&&typeof r.size<"u")){a.next=13;break}return a.abrupt("return",Promise.resolve(new to(r)));case 13:if(typeof r.read!="function"){a.next=18;break}if(s=Number(s),Number.isFinite(s)){a.next=17;break}return a.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return a.abrupt("return",Promise.resolve(new gn(r,s)));case 18:return a.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return a.stop()}},o,null,[[1,8]])}));function i(o,r){return e.apply(this,arguments)}return i})()}])})();function kn(t,e){return Vo()?Promise.resolve(Sn(t,e)):Promise.resolve(["tus-br",t.name,t.type,t.size,t.lastModified,e.endpoint].join("-"))}function Sn(t,e){var i=t.exif?Cn(JSON.stringify(t.exif)):"noexif";return["tus-rn",t.name||"noname",t.size||"nosize",i,e.endpoint].join("/")}function Cn(t){var e=0;if(t.length===0)return e;for(var i=0;i<t.length;i++){var o=t.charCodeAt(i);e=(e<<5)-e+o,e&=e}return e}function nt(t){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nt(t)}function fi(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Un(o.key),o)}}function hi(t,e,i){return e&&$n(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Un(t){var e=En(t,"string");return nt(e)=="symbol"?e:e+""}function En(t,e){if(nt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(nt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Pn=(function(){function t(){fi(this,t)}return hi(t,[{key:"createRequest",value:function(e,i){return new On(e,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),On=(function(){function t(e,i){fi(this,t),this._xhr=new XMLHttpRequest,this._xhr.open(e,i,!0),this._method=e,this._url=i,this._headers={}}return hi(t,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,i){this._xhr.setRequestHeader(e,i),this._headers[e]=i}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&e(i.loaded)})}},{key:"send",value:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,r){e._xhr.onload=function(){o(new Ln(e._xhr))},e._xhr.onerror=function(s){r(s)},e._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Ln=(function(){function t(e){fi(this,t),this._xhr=e}return hi(t,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function at(t){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},at(t)}function Rn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jn(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Tn(o.key),o)}}function zn(t,e,i){return e&&jn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Tn(t){var e=Fn(t,"string");return at(e)=="symbol"?e:e+""}function Fn(t,e){if(at(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(at(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var ei=!1;try{ei="localStorage"in window;var Mt="tusSupport",ro=localStorage.getItem(Mt);localStorage.setItem(Mt,ro),ro===null&&localStorage.removeItem(Mt)}catch(t){if(t.code===t.SECURITY_ERR||t.code===t.QUOTA_EXCEEDED_ERR)ei=!1;else throw t}var Dn=ei,An=(function(){function t(){Rn(this,t)}return zn(t,[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var i=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,i){var o=Math.round(Math.random()*1e12),r="tus::".concat(e,"::").concat(o);return localStorage.setItem(r,JSON.stringify(i)),Promise.resolve(r)}},{key:"_findEntries",value:function(e){for(var i=[],o=0;o<localStorage.length;o++){var r=localStorage.key(o);if(r.indexOf(e)===0)try{var s=JSON.parse(localStorage.getItem(r));s.urlStorageKey=r,i.push(s)}catch{}}return i}}])})();function De(t){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(t)}function In(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mn(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Yo(o.key),o)}}function Bn(t,e,i){return i&&Mn(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Nn(t,e,i){return e=$t(e),Hn(t,Ko()?Reflect.construct(e,i||[],$t(t).constructor):e.apply(t,i))}function Hn(t,e){if(e&&(De(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return qn(t)}function qn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ko(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ko=function(){return!!t})()}function $t(t){return $t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$t(t)}function Vn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ti(t,e)}function ti(t,e){return ti=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},ti(t,e)}function so(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,o)}return i}function ze(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?so(Object(i),!0).forEach(function(o){Kn(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):so(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function Kn(t,e,i){return e=Yo(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Yo(t){var e=Yn(t,"string");return De(e)=="symbol"?e:e+""}function Yn(t,e){if(De(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(De(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var no=ze(ze({},Ct.defaultOptions),{},{httpStack:new Pn,fileReader:new _n,urlStorage:Dn?new An:new ks,fingerprint:kn}),Wn=(function(t){function e(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return In(this,e),o=ze(ze({},no),o),Nn(this,e,[i,o])}return Vn(e,t),Bn(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=ze(ze({},no),o),Ct.terminate(i,o)}}])})(Ct);const Gn=10*1024*1024,Jn=5*1024*1024,Xn="https://eu-on-24001.connector.filerobot.com/files",Zn="https://eu-on-24001.connector.filerobot.com/json";function Qn(t,e){if(!e||!t.file)return!1;const i=e.sizeThreshold??Gn;return t.size>=i}function ea(t,e){const{tusConfig:i}=e,o=e.apiBase.replace(/\/+$/,""),r=i.endpoint||Xn,s=i.chunkSize??Jn,n=i.resumable!==!1,a=i.parallelChunks??1,l=i.retryDelays??[0,1e3,3e3,5e3],d=o.split("/").pop()||"";let c=!1,g=!1,f=!1;const b={name:t.name,type:t.type,"filerobot-folder":e.folder},x=async()=>`tus-${t.id}-${r}`,k=new Wn(t.file,{endpoint:r,chunkSize:s,retryDelays:l,parallelUploads:a,storeFingerprintForResuming:n,removeFingerprintOnSuccess:!0,headers:{},metadata:b,fingerprint:x,onBeforeRequest(_){const w=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[z,P]of Object.entries(w))_.setHeader(z,P);_.setHeader("X-Filerobot-Token",d)},onUploadUrlAvailable(){k.url&&e.onUploadUrlAvailable&&!f&&(f=!0,e.onUploadUrlAvailable(k.url))},onProgress(_,w){!g&&!c&&e.onProgress(_,w)},onSuccess(){var _;if(g)return;m();const w=k.url||"",z=(_=w.match(/files\/([^/?]+)/))==null?void 0:_[1];z?ia(z,t.size).then(P=>{g||e.onComplete(Ae(P)?Ot(P,t):P)}).catch(P=>{g||e.onError(P)}):e.onComplete({status:"success",file:{uuid:"",name:t.name,extension:t.name.split(".").pop()||"",type:t.type,size:t.size,url:{public:w,cdn:w},meta:t.meta,tags:t.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(_){g||(m(),ta(_)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(_ instanceof Error?_:new Error(String(_))))},onShouldRetry(_,w,z){var P;const A=(P=_.originalResponse)==null?void 0:P.getStatus();return A===429?!0:!(A&&A>400&&A<500&&A!==409)}});let C=null,j=null;typeof window<"u"&&(C=()=>{var _;!c&&!g&&(c=!0,k.abort(!1),(_=e.onPause)==null||_.call(e))},j=()=>{var _;c&&!g&&(c=!1,k.start(),(_=e.onResume)==null||_.call(e))},window.addEventListener("offline",C),window.addEventListener("online",j));const m=()=>{C&&window.removeEventListener("offline",C),j&&window.removeEventListener("online",j)},S=()=>{try{k.start()}catch(_){m(),e.onError(_ instanceof Error?_:new Error(String(_)))}};return n?k.findPreviousUploads().then(_=>{_.length>0&&!g&&k.resumeFromPreviousUpload(_[0]),g||S()}):S(),{abort(){g=!0,c=!1,m(),k.abort(!0)},pause(){!c&&!g&&(c=!0,k.abort(!1))},resume(){c&&!g&&(c=!1,k.start())},isPaused(){return c}}}function ta(t){var e;if(t instanceof Ye){const i=(e=t.originalRequest)==null?void 0:e.getUnderlyingObject();return i&&typeof i.readyState=="number"&&typeof i.status=="number"?i.readyState!==0&&i.readyState!==4||i.status===0:t.originalResponse==null&&t.causingError!=null}return!1}async function ia(t,e){const i=`${Zn}/${t}`,o=e>1e8?13e3:6e3,r=3;for(let s=0;s<=r;s++){s>0&&await new Promise(l=>setTimeout(l,o));const n=await fetch(i);if(n.status===404&&s<r)continue;if(!n.ok)throw new Error(`Failed to fetch file record (HTTP ${n.status})`);const a=await n.json();if(Ae(a))return a;if(a.file)return{status:"success",file:a.file};if(a.status==="success")return a;if(!(s<r))throw new Error(a.msg||"File record not available after upload")}throw new Error("File record not available after upload")}class oa{constructor(e,i){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.store=e,this.config=i}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let i=!1;for(const o of e.values())o.status==="idle"?(K(this.store,o.id,{status:"queued"}),i=!0):o.status==="queued"&&(i=!0);i&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const i=this.store.getState().files.get(e);!i||i.status!=="error"&&i.status!=="failed"||(K(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const i of e.values())(i.status==="error"||i.status==="failed")&&K(this.store,i.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const i=this.activeUploads.get(e);i&&"pause"in i&&(i.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,i),K(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const i=this.pausedUploads.get(e);if(!i)return;const{concurrency:o}=this.store.getState().queueConfig;this.activeUploads.size<o?(this.pausedUploads.delete(e),i.resume(),this.activeUploads.set(e,i),K(this.store,e,{status:"uploading"})):K(this.store,e,{status:"queued"})}cancelFile(e){const i=this.store.getState().files.get(e);!i||!ao(i.status)||(this.abortPausedUpload(e),this.abortUpload(e),K(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const i of e.values())ao(i.status)&&(this.abortPausedUpload(i.id),this.abortUpload(i.id),K(this.store,i.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const i of this.activeUploads.keys())this.abortUpload(i);for(const i of[...this.pausedUploads.keys()])this.abortPausedUpload(i);for(const i of this.retryTimers.values())clearTimeout(i);this.retryTimers.clear(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:i}=e.queueConfig,o=this.activeUploads.size,r=i-o;if(r<=0)return;const s=[...e.files.values()].filter(n=>n.status==="queued").sort((n,a)=>n.retryCount!==a.retryCount?a.retryCount-n.retryCount:n.addedAt-a.addedAt).slice(0,r);for(const n of s){const a=this.pausedUploads.get(n.id);a?(this.pausedUploads.delete(n.id),a.resume(),this.activeUploads.set(n.id,a),K(this.store,n.id,{status:"uploading"})):this.startUpload(n)}}startUpload(e){var i,o;const r=(o=(i=this.config).resolveUploadParams)==null?void 0:o.call(i,e),s=!!r&&Object.keys(r).length>0,n=!s&&!e.remoteInfo&&!e.remoteUrl&&Qn(e,this.config.tusConfig);K(this.store,e.id,{status:"uploading",error:null,isTus:n});let a=0,l=Date.now(),d=0;const c={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:this.store.getState().targetFolder,extraParams:s?r:void 0,onComplete:b=>this.handleComplete(e.id,b),onError:b=>this.handleError(e.id,b)},g=(b,x)=>{const k=Date.now(),C=(k-l)/1e3;if(C>0){const m=(b-a)/C;d=d===0?m:.3*m+.7*d}a=b,l=k;const j=x>0?Math.min(b/x*100,100):0;K(this.store,e.id,{progress:j,bytesUploaded:b,speed:d}),this.updateTotalProgress()};let f;if(e.remoteInfo)f=ds(e,{...c,onProgress:g});else if(e.remoteUrl)f=ss(e,c);else if(n){const b=ea(e,{...c,onProgress:g,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:x=>{K(this.store,e.id,{tusUploadUrl:x})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,b),K(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,b),K(this.store,e.id,{status:"uploading"})}});f=b}else f=rs(e,{...c,onProgress:g});this.activeUploads.set(e.id,f)}handleComplete(e,i){var o,r,s,n,a,l,d,c,g;this.activeUploads.delete(e);const f=this.store.getState().files.get(e),b=((o=f==null?void 0:f.previewUrl)==null?void 0:o.startsWith("blob:"))??!1,x=((s=(r=i.file)==null?void 0:r.url)==null?void 0:s.cdn)??((a=(n=i.file)==null?void 0:n.url)==null?void 0:a.cdn_permalink)??((d=(l=i.file)==null?void 0:l.url)==null?void 0:d.permalink)??null,k=x?((g=(c=this.config).transformPreviewUrl)==null?void 0:g.call(c,x))??x:null,C={status:"complete",progress:100,response:i,alreadyExisted:Ae(i)};f&&k&&f.type.startsWith("image/")&&!b&&(C.previewUrl=k),K(this.store,e,C),this.updateTotalProgress(),this.checkAllComplete(),this.processQueue()}handleError(e,i){this.activeUploads.delete(e);const o=this.store.getState().files.get(e);if(!o)return;const{retryConfig:r}=this.store.getState().queueConfig,s=o.retryCount+1;if(s<=r.maxRetries){const n=Math.min(r.baseDelay*Math.pow(r.backoffFactor,o.retryCount),r.maxDelay);K(this.store,e,{status:"retrying",error:i.message,retryCount:s});const a=setTimeout(()=>{this.retryTimers.delete(e),K(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else K(this.store,e,{status:"failed",error:i.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const i=this.pausedUploads.get(e);i&&(i.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const o=this.retryTimers.get(e);o&&(clearTimeout(o),this.retryTimers.delete(e))}updateTotalProgress(){const{files:e}=this.store.getState();let i=0,o=0,r=0;for(const s of e.values())(s.status==="queued"||s.status==="uploading"||s.status==="paused"||s.status==="retrying"||s.status==="complete"||s.status==="failed")&&(i+=s.size,o+=s.status==="complete"?s.size:s.bytesUploaded),s.status==="uploading"&&(r+=s.speed);this.store.setState({totalBytes:i,totalBytesUploaded:o,totalSpeed:r,totalProgress:i>0?Math.min(o/i*100,100):0})}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function ao(t){return t==="queued"||t==="uploading"||t==="retrying"||t==="paused"}function gi(t){return`https://api.filerobot.com/${t}`}async function ra(t,e){const i=`${gi(t)}/key/${encodeURIComponent(e)}`,o=new AbortController,r=setTimeout(()=>o.abort(),3e4);try{const s=await fetch(i,{signal:o.signal});if(clearTimeout(r),!s.ok)throw new Error(`SASS key exchange failed (HTTP ${s.status})`);const n=await s.json();if(n.status==="error")throw new Error(`SASS key exchange failed: ${n.msg||"Unknown error"}`);return n.key}catch(s){throw clearTimeout(r),s instanceof DOMException&&s.name==="AbortError"?new Error("SASS key exchange timed out"):s}}function ii(t,e){const i={};switch(t.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");i["X-Filerobot-Key"]=e;break;case"sass-key":i["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(i["X-Filerobot-Airbox-Puid"]=t.airboxPuid),i}async function sa(t){const e=gi(t.container);if(t.mode==="security-template"){const i=await ra(t.container,t.securityTemplateId);return{apiBase:e,headers:ii(t,i),sassKey:i}}return{apiBase:e,headers:ii(t)}}const Ut="sfx-uploader:last-upload:",Wo=1;function na(t){var e,i,o,r,s,n,a,l,d;const{file:c,previewUrl:g,...f}=t;let b=null;return t.status==="complete"&&(t.previewUrl&&!t.previewUrl.startsWith("blob:")?b=t.previewUrl:b=((o=(i=(e=t.response)==null?void 0:e.file)==null?void 0:i.url)==null?void 0:o.permalink)??((n=(s=(r=t.response)==null?void 0:r.file)==null?void 0:s.url)==null?void 0:n.cdn_permalink)??((d=(l=(a=t.response)==null?void 0:a.file)==null?void 0:l.url)==null?void 0:d.cdn)??null),{...f,previewUrl:b}}function aa(t){try{const e=sessionStorage.getItem(Ut+t);if(!e)return null;const i=JSON.parse(e);return(i==null?void 0:i.__schemaVersion)!==Wo?null:i}catch{return null}}function la(t,e){try{sessionStorage.setItem(Ut+t,JSON.stringify(e))}catch{}}const Ve={save(t,e){if(e.length===0){this.clear(t);return}const i={__schemaVersion:Wo,savedAt:Date.now(),files:e.map(na)};la(t,i)},load(t){const e=aa(t);return e?e.files.map(i=>({...i,file:null,previewUrl:i.previewUrl??null})):null},exists(t){try{return sessionStorage.getItem(Ut+t)!=null}catch{return!1}},clear(t){try{sessionStorage.removeItem(Ut+t)}catch{}}},I={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let da=0;function Le(){return`file-${Date.now()}-${++da}`}function ye(t){if(t<=0)return"0 B";const e=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),e.length-1),o=t/Math.pow(1024,i);return`${i===0?o:o.toFixed(1)} ${e[i]}`}function Bt(t){if(!isFinite(t)||t<=0)return"0s";const e=Math.round(t);if(e<60)return`${e}s`;const i=Math.floor(e/60),o=e%60;return o>0?`${i}m ${o}s`:`${i}m`}function Go(t){var e;const i=((e=t.name.split(".").pop())==null?void 0:e.toLowerCase())??"";return t.type.startsWith("image/")?"image":t.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(i)?"vid":t.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(i)?"audio":t.type==="application/pdf"||i==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(i)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(i)?"doc":["ppt","pptx","key","odp"].includes(i)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(i)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(i)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(i)?"markup":["ttf","otf","woff","woff2","eot"].includes(i)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(i)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(i)?"binary":["sql","db","sqlite","mdb"].includes(i)?"data":"gen"}function ca(t){const e=t.lastIndexOf(".");return e>=0?t.slice(e+1).toUpperCase():""}const pa="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",Jo={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function oi(t){const e=t==="_default"?"GENERIC":t.toUpperCase();return`${pa}${e}.svg?vh=${Jo[t]}`}function Xo(t){const e=(t==null?void 0:t.toLowerCase().replaceAll(".",""))||"";return e in Jo?oi(e):oi("_default")}function Zo(){return oi("_default")}const ua={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function lo(t){var e;const i=((e=t.split(".").pop())==null?void 0:e.toLowerCase())??"";return ua[i]||""}function co(t){return t==="image/heic"||t==="image/heif"}function fa(t){return new Promise(e=>{const i=document.createElement("video");i.preload="metadata",i.muted=!0,i.playsInline=!0;const o=URL.createObjectURL(t);let r=!1;const s=()=>{r||(r=!0,e(null)),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(o)};i.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=i.videoWidth||320,n.height=i.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(i,0,0,n.width,n.height),n.toBlob(l=>{r||(r=!0,e(l?URL.createObjectURL(l):null),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(o))},"image/jpeg",.7);return}}catch{}s()},{once:!0}),i.addEventListener("error",()=>s(),{once:!0}),setTimeout(()=>s(),5e3),i.src=o,i.addEventListener("loadeddata",()=>{i.currentTime=.1},{once:!0})})}function Nt(t,e,i){var o,r;if(e.maxFileSize!=null&&t.size>0&&t.size>e.maxFileSize)return`File exceeds ${(e.maxFileSize/1048576).toFixed(1)} MB limit`;if(e.maxTotalFilesSize!=null&&t.size>0){let s=t.size;for(const n of i.values())n.status!=="rejected"&&n.status!=="cancelled"&&(s+=n.size);if(s>e.maxTotalFilesSize)return"Total file size limit exceeded"}if(e.maxNumberOfFiles!=null){let s=0;for(const n of i.values())n.status!=="rejected"&&n.status!=="cancelled"&&s++;if(s>=e.maxNumberOfFiles)return`Maximum ${e.maxNumberOfFiles} files allowed`}if(e.allowedFileTypes!=null){const s=e.allowedFileTypes,n="."+(((o=t.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(!s.some(a=>a.startsWith(".")?n===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return"File type not allowed"}if(e.blockedFileTypes!=null){const s=e.blockedFileTypes,n="."+(((r=t.name.split(".").pop())==null?void 0:r.toLowerCase())??"");if(s.some(a=>a.startsWith(".")?n===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return"File type is blocked"}return null}function po(t){return t.allowedFileTypes?t.allowedFileTypes.join(","):""}const uo={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function ha(t){return t.filter(e=>e in uo).map(e=>uo[e])}function _e(t){return t.brandStyle?v`<span
    class=${vr({"brand-ico":!0,"brand-ico--transparent":t.brandStyle.background==="transparent"})}
    ${G(t.brandStyle)}
  >${xi(t.brandHtml)}</span>`:xi(t.brandHtml)}var ga=Object.defineProperty,Qo=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&ga(e,i,r),r};const va='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',ma='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',ba='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',xa='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',Je=[{id:"device",labelKey:"myDevice",label:"My Device",icon:va,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:ma,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:ba,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:xa,iconColor:"#ea580c"}],er=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this.sources=Je}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return v`
      ${this.sources.map(e=>v`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?_e(e):we`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${ve(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};er.styles=X`
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
  `;let vi=er;Qo([R({attribute:!1})],vi.prototype,"t");Qo([R({type:Array})],vi.prototype,"sources");function Ka(t,e,i){var o;if(((o=i==null?void 0:i.requiredFields)!=null&&o.includes(t.ckey)||t.required)&&ri(e))return`${t.title} is required`;if(ri(e))return null;switch(t.type){case"numeric":{const r=Number(e);if(!Number.isFinite(r))return"Must be a valid number";if(!Number.isInteger(r))return"Must be an integer";if(r<-1999999999||r>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const r=Number(e);if(!Number.isFinite(r))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(r<-999999999999e-2||r>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const r=e,s=r.latitude!==""&&r.latitude!=null,n=r.longitude!==""&&r.longitude!=null;if(s!==n)return"Both latitude and longitude are required";if(s&&n){const a=Number(r.latitude),l=Number(r.longitude);if(!Number.isFinite(a)||a<-90||a>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(l)||l<-180||l>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const r=new URL(e);if(!["http:","https:"].includes(r.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(t.validation&&typeof e=="string")try{if(!new RegExp(t.validation).test(e))return"Value does not match expected format"}catch{}return null}function ri(t){return t==null?!0:Array.isArray(t)||typeof t=="string"?t.length===0:typeof t=="object"?!Object.values(t).some(e=>e!=null&&e!==""):!t}const ya=new Set(["idle","queued","rejected"]);function tr(t){return!ri(t)}function ir(t,e){var i;return(i=e==null?void 0:e.requiredFields)!=null&&i.includes(t.ckey)?!0:!!t.required}function or(t){return[...t.values()].filter(e=>ya.has(e.status))}function rr(t,e){return t.fields.filter(i=>ir(i,e))}function Ya(t,e,i){const o=or(t);if(o.length===0)return{};const r={};for(const s of rr(e,i)){const n=o.filter(a=>!tr(a.meta[s.key]));n.length>0&&(r[s.key]=n)}return r}function wa(t,e,i){const o=or(t);if(o.length===0)return null;for(const r of rr(e,i))if(o.some(s=>!tr(s.meta[r.key])))return r.key;return null}function Wa(t,e){const i={...t};for(const o of Object.keys(e)){const r=e[o];if(r==null||r==="")continue;const s=t[o];if(Array.isArray(r))if(Array.isArray(s)){const n=new Set(s.map(l=>JSON.stringify(l))),a=[...s];for(const l of r){const d=JSON.stringify(l);n.has(d)||(n.add(d),a.push(l))}i[o]=a}else i[o]=r;else i[o]=r}return i}function sr(t){let e=t;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const i=e.shadowRoot.querySelector("dialog[open]");if(i instanceof HTMLDialogElement)return i}e=e.parentNode}return document.body}var _a=Object.defineProperty,ie=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&_a(e,i,r),r};const fo=3,si=new CSSStyleSheet;si.replaceSync(`
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
`);var Ke;const Q=(Ke=class extends te{constructor(){super(...arguments),this.t=(t,e)=>typeof e=="string"?e:t,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=fo,this._dragCounter=0,this._onDragEnter=t=>{t.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=t=>{t.preventDefault()},this._onDragLeave=t=>{t.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=t=>{var e;t.preventDefault(),t.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const i=Array.from(((e=t.dataTransfer)==null?void 0:e.files)??[]);i.length>0&&this._emitFiles(i)},this._onClick=t=>{const e=this.shadowRoot.querySelector(".dz-content");if(e&&this._rippleEl){const i=e.getBoundingClientRect();this._rippleEl.style.left=`${t.clientX-i.left}px`,this._rippleEl.style.top=`${t.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.browse())},this._onFileChange=t=>{const e=t.target,i=Array.from(e.files??[]);i.length>0&&this._emitFiles(i),e.value=""},this._onPaste=t=>{var e;if(!this.isConnected||this.offsetWidth===0)return;const i=(e=t.clipboardData)==null?void 0:e.items;if(!i)return;const o=[];for(const r of i)if(r.kind==="file"){const s=r.getAsFile();s&&o.push(s)}o.length>0&&(t.preventDefault(),this._emitFiles(o))},this._portalContainer=null,this._onDocClick=t=>{var e;this._moreOpen&&((e=this._portalContainer)!=null&&e.contains(t.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=t=>{t.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(){var t;(t=this.fileInput)==null||t.click()}_onSourceIconClick(t){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t.id},bubbles:!0,composed:!0}))}_emitFiles(t){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:t},bubbles:!0,composed:!0}))}_toggleMore(t){t.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const t=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),sr(this).appendChild(this._portalContainer),this._injectDropdownStyles()),ke(v`<div class="sfx-more-dropdown open">
          ${t.map(e=>v`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(e,i)}
              >
                <div class="sfx-more-item-ico">
                  ${e.brandHtml?_e(e):e.iconColor?v`<svg
                        viewBox="0 0 24 24"
                        ${G({color:e.iconColor})}
                      >
                        ${ve(e.icon)}
                      </svg>`:we`<svg viewBox="0 0 24 24">${ve(e.icon)}</svg>`}
                </div>
                ${e.labelKey?this.t(e.labelKey,e.label):e.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(ke(U,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(si)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,si]))}_positionDropdown(){var t,e;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".more-wrap > button"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-dropdown");if(!i||!o)return;const r=i.getBoundingClientRect(),s=8,n=o.scrollHeight,a=o.offsetWidth,l=r.top,d=window.innerHeight-r.bottom;l>=n+s||l>d?o.style.top=`${r.top-n-s}px`:o.style.top=`${r.bottom+s}px`;let c=r.right-a;c=Math.max(8,Math.min(c,window.innerWidth-a-8)),o.style.left=`${c}px`}_onMoreItemClick(t,e){e.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(t)}_updateVisiblePills(){const t=window.innerWidth;this.sourcesLayout==="cards"?t<=480?this._visiblePills=2:t<=768?this._visiblePills=3:this._visiblePills=5:t<=768?this._visiblePills=1:this._visiblePills=fo}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>{var e;const i=(((e=t[0])==null?void 0:e.contentRect.width)??this.getBoundingClientRect().width)>=Ke._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(t){super.updated(t),t.has("sourcesLayout")&&this._updateVisiblePills(),t.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(ke(U,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(t){return v`
      <button
        class="src-pill"
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?_e(t):v`<span
              class="pill-ico"
              ${G(t.iconColor?{color:t.iconColor}:null)}
            >
              ${we`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ve(t.icon)}</svg>`}
            </span>`}
        ${t.labelKey?this.t(t.labelKey,t.label):t.label}
      </button>
    `}_renderCard(t){return v`
      <button
        class="src-card"
        aria-label=${t.labelKey?this.t(t.labelKey,t.label):t.label}
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?v`<span class="card-ico">${_e(t)}</span>`:v`<span
              class="card-ico"
              ${G(t.iconColor?{color:t.iconColor}:null)}
            >
              ${we`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${ve(t.icon)}</svg>`}
            </span>`}
        <span class="card-label">${t.labelKey?this.t(t.labelKey,t.label):t.label}</span>
      </button>
    `}_renderMoreCard(){return v`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="src-card"
          @click=${t=>this._toggleMore(t)}
        >
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
    `}_renderMoreDropdown(){return v`
      <div class="more-wrap ${this._moreOpen?"open":""}">
        <button
          class="more-pill"
          @click=${t=>this._toggleMore(t)}
        >
          ${this.t("more","More")}
          <svg class="more-chevron" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    `}render(){const t=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),e=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return v`
      <div
        class=${t}
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

          <div class="title">${this.t("dragAndDrop","Drag & Drop or click to")} <span>${this.t("browse","browse")}</span></div>
          ${this.compact?U:v`<div class="subtitle">${this.t("dropFilesAnywhere","Drop files anywhere on this page")}</div>`}
          ${!this.compact&&this.sources.length>0?v`
                <div class="import-divider"><span>${this.t("orImportFrom","or import from")}</span></div>
                ${this.sourcesLayout==="cards"?v`
                      <div class="sources-cards">
                        ${e.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():U}
                      </div>
                    `:v`
                      <div class="sources-grid">
                        ${e.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():U}
                      </div>
                    `}
              `:U}
          ${this.compact&&this.sources.length>0?v`
                <div class="sources-row">
                  ${this.sources.map(o=>v`
                      <button
                        class="src-ico"
                        ${G(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${r=>{r.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?_e(o):we`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${ve(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:U}

          <div class="ripple"></div>
        </div>
        <input
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||U}
          @change=${this._onFileChange}
        />
      </div>
    `}},Ke.styles=X`
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

    :host([mode="inline"]) .drop-zone {
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

    .dz-content:hover .core {
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
  `,Ke._WIDE_THRESHOLD_PX=1200,Ke);ie([R({attribute:!1})],Q.prototype,"t");ie([R({type:Boolean,reflect:!0})],Q.prototype,"compact");ie([R({type:Boolean,attribute:"external-drag-over"})],Q.prototype,"externalDragOver");ie([R({type:String})],Q.prototype,"accept");ie([R({type:Boolean})],Q.prototype,"multi");ie([R({type:Array})],Q.prototype,"sources");ie([R({type:String,attribute:"sources-layout"})],Q.prototype,"sourcesLayout");ie([R({type:String,reflect:!0})],Q.prototype,"mode");ie([D()],Q.prototype,"_dragOver");ie([D()],Q.prototype,"_moreOpen");ie([D()],Q.prototype,"_visiblePills");ie([vo(".ripple")],Q.prototype,"_rippleEl");ie([vo('input[type="file"]')],Q.prototype,"fileInput");let ka=Q;const nr=class extends te{render(){return v`
      <div class="line"></div>
      <div class="label">or import from</div>
      <div class="line"></div>
    `}};nr.styles=X`
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
  `;let Sa=nr;var Ca=Object.defineProperty,re=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Ca(e,i,r),r};const ni=new CSSStyleSheet;ni.replaceSync(`
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
`);const ar=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var i;if((i=this._portalContainer)!=null&&i.contains(e.target))return;const o=this.renderRoot.querySelector(".drop-tile-more-wrap"),r=e.composedPath();o&&r.includes(o)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)}}_onDropTileClick(){const e=this.renderRoot.querySelector('input[type="file"]');e==null||e.click()}_onFileInput(e){const i=e.target,o=Array.from(i.files??[]);o.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:o},bubbles:!0,composed:!0})),i.value=""}_onSourceClick(e,i){if(e.stopPropagation(),i.id==="device"){const o=this.renderRoot.querySelector('input[type="file"]');o==null||o.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:i},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),sr(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),ke(v`<div class="sfx-tile-dropdown">
        ${e.map(i=>v`
          <button
            class="sfx-tile-dropdown-item"
            @click=${o=>this._onMoreSourceClick(o,i)}
          >
            <span class="sfx-tile-dropdown-ico" ${G(i.iconColor&&!i.brandHtml?{color:i.iconColor}:null)}>
              ${i.brandHtml?_e(i):we`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${ve(i.icon)}</svg>`}
            </span>
            ${i.labelKey?this.t(i.labelKey,i.label):i.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var e;const i=this.renderRoot.querySelector(".drop-tile-more"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-tile-dropdown");if(!i||!o)return;const r=i.getBoundingClientRect(),s=6,n=o.scrollHeight,a=o.offsetWidth,l=r.top,d=window.innerHeight-r.bottom;l>=n+s||l>d?o.style.top=`${r.top-n-s}px`:o.style.top=`${r.bottom+s}px`;let c=r.right-a;c=Math.max(8,Math.min(c,window.innerWidth-a-8)),o.style.left=`${c}px`}_closePortal(){this._portalContainer&&(ke(U,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var e;const i=(e=this._portalContainer)==null?void 0:e.getRootNode();i&&(i.adoptedStyleSheets.includes(ni)||(i.adoptedStyleSheets=[...i.adoptedStyleSheets,ni]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,i){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,i)}_renderDropTile(){const e=this._dropTileMaxVisible,i=this.sources.slice(0,e),o=this.sources.slice(e);return v`
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
          <div class="drop-tile-text">${this.t("dropOrClickTo","Drop or click to")} <span>${this.t("browse","browse")}</span></div>
          ${i.length>0?v`
            <div class="drop-tile-sources">
              ${i.map(r=>v`
                <button
                  class="drop-tile-src"
                  ${G(r.iconColor&&!r.brandHtml?{color:r.iconColor}:null)}
                  title=${r.labelKey?this.t(r.labelKey,r.label):r.label}
                  @click=${s=>this._onSourceClick(s,r)}
                >
                  ${r.brandHtml?_e(r):we`<svg viewBox="0 0 24 24" class=${r.fillIcon?"fill-icon":""}>${ve(r.icon)}</svg>`}
                </button>
              `)}
              ${o.length>0?v`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources","More sources")} @click=${r=>this._toggleMore(r)}>···</button>
                </div>
              `:U}
            </div>
          `:U}
        </div>
        <input type="file" ?multiple=${this.multi} accept=${this.accept||U} @change=${this._onFileInput} />
      </div>
    `}render(){return v`
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():U}
        ${this.files.map((e,i)=>v`<sfx-file-item .t=${this.t} .file=${e} .mode=${this.mode} .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} ${G({"--tile-index":String(i)})}></sfx-file-item>`)}
      </div>
    `}};ar.styles=X`
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
      padding: 4px var(--sfx-grid-pad-r, 8px) 16px var(--sfx-grid-pad-l, 16px);
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
  `;let oe=ar;re([R({attribute:!1})],oe.prototype,"t");re([R({attribute:!1})],oe.prototype,"files");re([R({type:Boolean})],oe.prototype,"showDropTile");re([R({attribute:!1})],oe.prototype,"sources");re([R({type:String})],oe.prototype,"accept");re([R({type:Boolean})],oe.prototype,"multi");re([R({type:String})],oe.prototype,"mode");re([R({attribute:!1})],oe.prototype,"getLocateUrl");re([R({type:Boolean})],oe.prototype,"showLocateButton");re([R({type:Boolean})],oe.prototype,"showCopyCdnButton");re([D()],oe.prototype,"_moreOpen");re([D()],oe.prototype,"_dropTileMaxVisible");var $a=Object.defineProperty,me=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&$a(e,i,r),r};const lr=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this._dims="",this._copied=!1,this._copiedTimer=null}updated(e){var i,o,r,s,n;if(e.has("file")){if(this._dims="",(o=(i=this.file)==null?void 0:i.previewUrl)!=null&&o.startsWith("blob:")){const a=this.file.previewUrl,l=new Image;l.onload=()=>{var d;((d=this.file)==null?void 0:d.previewUrl)===a&&(this._dims=`${l.naturalWidth}×${l.naturalHeight}`)},l.src=a}else if((n=(s=(r=this.file)==null?void 0:r.response)==null?void 0:s.file)!=null&&n.info){const a=this.file.response.file.info;a.img_w&&a.img_h&&(this._dims=`${a.img_w}×${a.img_h}`)}}}disconnectedCallback(){super.disconnectedCallback(),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null)}_emit(e,i){this.dispatchEvent(new CustomEvent(e,{detail:{fileId:this.file.id,...i},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const i=e.target.value.trim();i&&this._emit("file-rename",{name:i})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_locate(e){e.stopPropagation(),this.file&&this._emit("file-locate",{file:this.file})}async _copyCdn(e){var i,o,r,s;e.stopPropagation();const n=(s=(r=(o=(i=this.file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:r.url)==null?void 0:s.cdn;if(n){try{await navigator.clipboard.writeText(n)}catch{return}this._emit("file-copy-cdn",{file:this.file,cdnUrl:n}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var e,i;const o=this.file;if(!o)return U;const r=Go(o),s=o.status==="complete",n=o.status==="uploading",a=o.status==="paused",l=o.status==="error"||o.status==="failed",d=o.status==="rejected",c=this.mode==="review",g=ca(o.name),f=["tile",s?"done":"",n?"uploading":"",a?"paused":"",d?"rejected":"",c?"review":""].filter(Boolean).join(" ");return v`
      <div class=${f} tabindex="0">
        <!-- Preview area -->
        <div class="preview">
          ${o.previewUrl?v`<img class="preview-img" src=${o.previewUrl} alt="" />`:v`
                <div class="preview-bg ${r}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Xo(g)}
                    alt="${g?`${g} file`:"File"}"
                    @error=${b=>{const x=b.target,k=Zo();!x.dataset.fallback&&x.src!==k&&(x.dataset.fallback="1",x.src=k)}}
                  />
                </div>
              `}

          <!-- Preview button (not in review mode — review uses its own
               stacked Locate / Copy CDN actions instead) -->
          ${!c&&!s&&!n&&!a&&!l&&o.status!=="rejected"?v`
                <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details","Details")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  ${this.t("details","Details")}
                </button>
              `:U}

          <!-- Review-mode hover actions: Locate (open in storage) +
               Copy CDN (copy CDN URL to clipboard). Both buttons fade
               in on tile hover, only for completed files (failed files
               have no response.file.url). -->
          ${c&&s&&(i=(e=o.response)==null?void 0:e.file)!=null&&i.url&&(this.showLocateButton||this.showCopyCdnButton)?v`
                <div class="review-actions">
                  ${this.showLocateButton?v`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate","Locate")}>
                        <svg viewBox="0 0 24 24"><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/></svg>
                        ${this.t("locate","Locate")}
                      </button>`:U}
                  ${this.showCopyCdnButton&&o.response.file.url.cdn?v`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title=${this.t("copyCdn","Copy CDN")} aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}>
                        ${this._copied?v`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:v`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:U}
                </div>
              `:U}

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
          ${s?v`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:U}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${c&&l?v`<div class="failed-badge" title=${o.error||this.t("uploadFailed","Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:U}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!c&&(o.status==="uploading"||o.status==="paused")?v`
                <div class="progress">
                  <div class="progress-fill" ${G({transform:`scaleX(${Math.min(o.progress,100)/100})`})}></div>
                </div>
              `:U}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(l||d)&&o.error&&!c?v`<div class="error-badge" title=${o.error}>${o.error}</div>`:U}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${s&&o.alreadyExisted?v`<div class="exists-badge" title=${this.t("alreadyUploaded","Already uploaded")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:U}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(l||d)&&!(s&&o.alreadyExisted)&&o.duration!=null&&o.duration>0?v`<div class="duration-badge">${this._formatDuration(o.duration)}</div>`:U}
        </div>

        <!-- Action buttons (hidden in review mode — files are read-only) -->
        ${c?U:v`
        <div class="actions">
          ${n&&o.isTus?v`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause","Pause")} aria-label=${this.t("pauseUpload","Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:U}
          ${a?v`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume","Resume")} aria-label=${this.t("resumeUpload","Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:U}
          ${l?v`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry","Retry")} aria-label=${this.t("retryUpload","Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:U}
          <button class="act-btn del" @click=${this._remove} title=${this.t("remove","Remove")} aria-label=${this.t("removeFile","Remove file")}>
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
            aria-label=${this.t("fileName","File name")}
            ?readonly=${c}
            @change=${c?U:this._rename} @click=${b=>b.stopPropagation()} />
          <div class="meta">${g||""}${o.size?` · ${ye(o.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
    `}_formatDuration(e){const i=Math.floor(e/60),o=Math.floor(e%60);return`${i}:${o.toString().padStart(2,"0")}`}};lr.styles=X`
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

    /* --- "Already uploaded" note (neutral, not an error) --- */
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
      font-weight: 500;
      line-height: 1.3;
      color: #fff;
      background: color-mix(in srgb, var(--sfx-up-text, #1e293b) 72%, transparent);
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
  `;let ue=lr;me([R({attribute:!1})],ue.prototype,"t");me([R({attribute:!1})],ue.prototype,"file");me([R({type:String})],ue.prototype,"mode");me([R({attribute:!1})],ue.prototype,"getLocateUrl");me([R({type:Boolean})],ue.prototype,"showLocateButton");me([R({type:Boolean})],ue.prototype,"showCopyCdnButton");me([D()],ue.prototype,"_dims");me([D()],ue.prototype,"_copied");const dt=X`
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
`,ct=X`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Ua=Object.defineProperty,be=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Ua(e,i,r),r};const ho=7,Ea=4,dr=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this.fileCount=0,this.totalSize=0,this.thumbnails=[],this.primaryLabel="Done",this.failedFiles=[],this.alreadyExistedCount=0,this._maxThumbs=ho,this._updateMaxThumbs=()=>{const e=window.innerWidth<=768?Ea:ho;e!==this._maxThumbs&&(this._maxThumbs=e)}}connectedCallback(){super.connectedCallback(),this._updateMaxThumbs(),window.addEventListener("resize",this._updateMaxThumbs)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._updateMaxThumbs)}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_reviewFiles(){this.dispatchEvent(new CustomEvent("review-files",{bubbles:!0,composed:!0}))}_primaryAction(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_retryFile(e){this.dispatchEvent(new CustomEvent("file-retry",{bubbles:!0,composed:!0,detail:{fileId:e}}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("close-uploader",{bubbles:!0,composed:!0}))}render(){const e=this.thumbnails.slice(0,this._maxThumbs),i=this.thumbnails.length-this._maxThumbs,o=this.fileCount>0,r=this.failedFiles.length>0,s=r&&!o;return v`
      <button class="close-btn" title=${this.t("close","Close")} @click=${this._close}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="card" role="status" aria-live="polite">
        <div class="icon ${s?"error":r?"warning":""}">
          ${s?v`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>`:r?v`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>`:v`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>`}
        </div>
        <div class="title">${s?this.t("uploadFailed","Upload failed"):r?this.t("partiallyUploaded","Partially uploaded"):this.t("uploadedSuccessfully","Uploaded successfully!")}</div>
        <div class="subtitle">${s?this.t("filesCouldNotBeUploaded",{count:this.failedFiles.length,defaultValue_one:"File could not be uploaded",defaultValue_other:"Files could not be uploaded"}):r?this.t("partialUploadSummary","{{uploaded}} uploaded, {{failed}} failed",{uploaded:this.fileCount,failed:this.failedFiles.length}):this.t("allFilesReady","All files are ready for use")}</div>

        ${e.length>0?v`
              <div class="thumbs">
                ${e.map(n=>v`<img class="thumb" src=${n} alt="" />`)}
                ${i>0?v`<div class="thumb-more">+${i}</div>`:U}
              </div>
            `:U}

        ${o?v`<div class="summary">${this.t("uploadSummary","{{total}} file · {{size}} uploaded",{total:this.fileCount,size:ye(this.totalSize)})}</div>`:U}

        ${this.alreadyExistedCount>0?v`<div class="info-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span>${this.t("alreadyInLibrary",{count:this.alreadyExistedCount,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"})}</span>
            </div>`:U}

        ${r?v`
            <div class="failed-list">
              ${this.failedFiles.map(n=>v`
                <div class="failed-item">
                  <svg class="failed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Error"><title>Error</title><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <div class="failed-info">
                    <div class="failed-name">${n.name}</div>
                    <div class="failed-reason">${n.error}</div>
                  </div>
                  <button class="failed-retry" title=${this.t("retry","Retry")} @click=${()=>this._retryFile(n.id)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                  </button>
                </div>
              `)}
            </div>
          `:U}

        <div class="actions">
          <button class="btn-ghost" @click=${this._uploadMore}>${this.t("uploadMore","Upload more")}</button>
          ${o||r?v`<button class="btn-ghost" @click=${this._reviewFiles}>${this.t("reviewFiles","Review files ({{count}})",{count:this.fileCount+this.failedFiles.length})}</button>`:U}
          ${r?v`<button class="btn-retry-all" @click=${this._retryAll}>${this.t("retryAll","Retry all ({{count}})",{count:this.failedFiles.length})}</button>`:U}
          <button class="btn-primary" @click=${this._primaryAction}>${this.primaryLabel}</button>
        </div>
      </div>
    `}};dr.styles=[dt,ct,X`
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

    /* --- Info banner (design-system "status-info" component) --- */
    .info-note {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-sizing: border-box;
      width: 100%;
      max-width: 400px;
      min-height: 36px;
      padding: 8px 16px;
      border-radius: 8px;
      /* Inset shadow draws the 1px border WITHOUT adding to the box height,
         so the banner stays exactly 36px tall (8 + 20 line + 8) — matching the
         Figma inside-stroke. A real border would add 2px → 38px. */
      box-shadow: inset 0 0 0 1px var(--sfx-up-info-border, rgba(0, 144, 228, 0.20));
      background: var(--sfx-up-info-bg, rgba(0, 144, 228, 0.04));
      color: var(--sfx-up-info-text, #024a71);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-top: -8px;
      margin-bottom: 22px;
    }

    .info-note svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--sfx-up-info, #0090e4);
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
  `];let fe=dr;be([R({attribute:!1})],fe.prototype,"t");be([R({type:Number})],fe.prototype,"fileCount");be([R({type:Number})],fe.prototype,"totalSize");be([R({type:Array})],fe.prototype,"thumbnails");be([R({type:String})],fe.prototype,"primaryLabel");be([R({type:Array})],fe.prototype,"failedFiles");be([R({type:Number})],fe.prototype,"alreadyExistedCount");be([D()],fe.prototype,"_maxThumbs");var Pa=Object.defineProperty,Be=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Pa(e,i,r),r};const cr=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,i=this.files.length;return v`
      <div class="topbar">
        <button class="back-btn" @click=${this._onBack} title=${this.t("back","Back")}>
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          ${this.t("back","Back")}
        </button>
        <span class="title">${this.t("lastUpload","Last upload")} <span class="count">— ${this.t("fileCount",{count:i,defaultValue_one:"{{count}} file",defaultValue_other:"{{count}} files"})}</span></span>
        <div class="filters">
          <button class="chip ${this._filter==="all"?"active":""}" @click=${this._setFilter("all")}>
            ${this.t("all","All")} (${i})
          </button>
          <button class="chip ${this._filter==="success"?"active":""}" @click=${this._setFilter("success")}>
            ✓ ${this.t("uploaded","Uploaded")} (${this._successCount})
          </button>
          ${this._failedCount>0?v`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:U}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload","Clear last upload from this browser")}>${this.t("clear","Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?v`<div class="empty">${this.t("noFilesMatchFilter","No files match this filter.")}</div>`:v`<sfx-file-list .t=${this.t} .files=${e} mode="review" .getLocateUrl=${this.getLocateUrl} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};cr.styles=X`
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
  `;let Ue=cr;Be([R({attribute:!1})],Ue.prototype,"t");Be([R({attribute:!1})],Ue.prototype,"files");Be([R({attribute:!1})],Ue.prototype,"getLocateUrl");Be([R({type:Boolean})],Ue.prototype,"showLocateButton");Be([R({type:Boolean})],Ue.prototype,"showCopyCdnButton");Be([D()],Ue.prototype,"_filter");customElements.define("sfx-last-upload-review",Ue);var Oa=Object.defineProperty,he=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Oa(e,i,r),r};const pr=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this.uploadState="idle",this.fileCount=0,this.totalSize=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.completedCount=0,this.uploadProgress=0}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}render(){const e=this.uploadState==="uploading";return v`
      ${e?v`
            <div class="progress-row">
              <div
                class="progress-track"
                role="progressbar"
                aria-valuenow=${Math.round(this.uploadProgress)}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label=${this.t("uploadProgress","Upload progress")}
              >
                <div
                  class="progress-fill"
                  ${G({width:`${this.uploadProgress}%`})}
                ></div>
              </div>
              <span class="progress-label"
                >${this.completedCount}/${this.fileCount} ${this.t("files","files")}</span
              >
            </div>
          `:U}
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?v`
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
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                  <span class="btn-label">${this.t("fillMetadata","Fill Metadata")}</span>
                </button>
              `:U}
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
          <button class="btn-sec" @click=${this._addMore} aria-label=${this.t("addMore","Add more")}>
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
          ${this.failedCount>0?v`
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
                  <span class="btn-label">${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}</span>
                </button>
              `:U}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",i=this.uploadState==="done",o=["btn-primary",i?"done-state":""].filter(Boolean).join(" "),r=e?this.t("uploading","Uploading"):i?this.t("done","Done"):this.t("upload","Upload");return v`
      <button
        class=${o}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!i}
        aria-label=${r}
      >
        ${e?v`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:i?v`
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
            `:v`
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
    `}};pr.styles=[dt,ct,X`
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
    `];let ce=pr;he([R({attribute:!1})],ce.prototype,"t");he([R({type:String})],ce.prototype,"uploadState");he([R({type:Number})],ce.prototype,"fileCount");he([R({type:Number})],ce.prototype,"totalSize");he([R({type:Number})],ce.prototype,"failedCount");he([R({type:Boolean})],ce.prototype,"showFillMetadata");he([R({type:Boolean})],ce.prototype,"requireMetadataFirst");he([R({type:Number})],ce.prototype,"completedCount");he([R({type:Number})],ce.prototype,"uploadProgress");const La='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function mi(t,e){return i=>{if(i.key!=="Tab")return;const o=t();if(!o)return;const r=o.querySelector(e);if(!r)return;const s=Array.from(r.querySelectorAll(La));if(s.length===0)return;const n=s[0],a=s[s.length-1],l=o.activeElement;i.shiftKey?(l===n||!r.contains(l))&&(i.preventDefault(),a.focus()):(l===a||!r.contains(l))&&(i.preventDefault(),n.focus())}}var Ra=Object.defineProperty,Rt=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Ra(e,i,r),r};const ur=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=mi(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var i;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((i=e.target)==null?void 0:i.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const i=new URL(this._url).pathname.split("/"),o=i[i.length-1];if(o){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");r&&(r.placeholder=o)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let i=this._name.trim();if(!i)try{const o=new URL(e).pathname.split("/");i=o[o.length-1]||"imported-file"}catch{i="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:i},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,i;(i=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||i.focus()})}render(){return v`
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
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
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
              <label for="nameInput">${this.t("fileName","File name")} <span class="optional">(${this.t("optional","optional")})</span></label>
              <input
                id="nameInput"
                type="text"
                placeholder=${this.t("fileNamePlaceholder","document.pdf")}
                .value=${this._name}
                @input=${this._onNameInput}
              />
            </div>
            ${this._error?v`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};ur.styles=[dt,ct,X`
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

  `];let pt=ur;Rt([R({attribute:!1})],pt.prototype,"t");Rt([D()],pt.prototype,"_url");Rt([D()],pt.prototype,"_name");Rt([D()],pt.prototype,"_error");var ja=Object.defineProperty,ut=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&ja(e,i,r),r};const fr=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=mi(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var e,i;const o=(e=this.shadowRoot)==null?void 0:e.querySelector("video"),r=(i=this.shadowRoot)==null?void 0:i.querySelector("canvas");!o||!r||(r.width=o.videoWidth,r.height=o.videoHeight,r.getContext("2d").drawImage(o,0,0),r.toBlob(s=>{s&&(this._captured=s,this._previewUrl=URL.createObjectURL(s),this._stopStream())},"image/jpeg",.92))},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),i=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:i},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("video");i&&(i.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return v`
      <div class="backdrop" @click=${this._onBackdropClick} @keydown=${this._onKeyDown}>
        <div class="card">
          <div class="head">
            <div class="head-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div class="title">${this.t("camera","Camera")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?v`<div class="error">${this._error}</div>`:this._captured?v`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto","Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake","Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto","Use photo")}</button>
                    </div>
                  `:v`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};fr.styles=[dt,ct,X`
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
  `];let Ne=fr;ut([R({attribute:!1})],Ne.prototype,"t");ut([D()],Ne.prototype,"_stream");ut([D()],Ne.prototype,"_error");ut([D()],Ne.prototype,"_captured");ut([D()],Ne.prototype,"_previewUrl");var za=Object.defineProperty,He=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&za(e,i,r),r};const hr=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=mi(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("video");i&&(i.srcObject=this._stream),this._chunks=[];const o=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:o}),this._recorder.ondataavailable=r=>{r.data.size>0&&this._chunks.push(r.data)},this._recorder.onstop=()=>{var r;const s=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=s,this._previewUrl=URL.createObjectURL(s),(r=this._stream)==null||r.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),i=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:i},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,i;(e=this._recorder)==null||e.stop(),this._recorder=null,(i=this._stream)==null||i.getTracks().forEach(o=>o.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return v`
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
            <div class="title">${this.t("screenCast","Screen cast")}</div>
            <button class="close-btn" aria-label=${this.t("close","Close")} @click=${this._cancel}>\u2715</button>
          </div>
          <div class="body">
            ${this._error?v`<div class="error">${this._error}</div>`:this._recordedBlob?v`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard","Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording","Use recording")}</button>
                    </div>
                  `:this._recording?v`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording","Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording","Stop recording")}</button>
                      </div>
                    `:v`
                      <div class="start-view">
                        <div class="start-icon">
                          <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <circle cx="12" cy="10" r="3"/>
                            <path d="M7 21h10"/>
                          </svg>
                        </div>
                        <div class="start-text">${this.t("screenCastPrompt","Share your screen to record a video that will be added to your uploads.")}</div>
                        <div class="actions">
                          <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
                          <button class="btn btn-primary" @click=${this._startRecording}>${this.t("startRecording","Start recording")}</button>
                        </div>
                      </div>
                    `}
          </div>
        </div>
      </div>
    `}};hr.styles=[dt,ct,X`
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
  `];let Ee=hr;He([R({attribute:!1})],Ee.prototype,"t");He([D()],Ee.prototype,"_stream");He([D()],Ee.prototype,"_recording");He([D()],Ee.prototype,"_error");He([D()],Ee.prototype,"_recordedBlob");He([D()],Ee.prototype,"_previewUrl");var Ta=Object.defineProperty,bi=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Ta(e,i,r),r};const gr=class extends te{constructor(){super(...arguments),this.t=(e,i)=>typeof i=="string"?i:e,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,i="error"){const o=++this._nextId;this._toasts=[...this._toasts,{id:o,message:e,type:i,leaving:!1}],setTimeout(()=>this._dismiss(o),this.duration)}_dismiss(e){const i=this._toasts.findIndex(r=>r.id===e);if(i===-1)return;const o=[...this._toasts];o[i]={...o[i],leaving:!0},this._toasts=o,setTimeout(()=>{this._toasts=this._toasts.filter(r=>r.id!==e)},200)}_iconForType(e){return e==="error"?v`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?v`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:v`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?v``:v`
      <div class="toast-stack">
        ${this._toasts.map(e=>v`
            <div class="toast toast--${e.type} ${e.leaving?"leaving":""}" role="alert">
              ${this._iconForType(e.type)}
              <span class="toast-msg">${e.message}</span>
              <button class="toast-close" @click=${()=>this._dismiss(e.id)} aria-label=${this.t("dismiss","Dismiss")}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/>
                </svg>
              </button>
            </div>
          `)}
      </div>
    `}};gr.styles=X`
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
  `;let jt=gr;bi([R({attribute:!1})],jt.prototype,"t");bi([R({type:Number})],jt.prototype,"duration");bi([D()],jt.prototype,"_toasts");customElements.define("sfx-toast",jt);var Fa=Object.defineProperty,V=(t,e,i,o)=>{for(var r=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(r=n(e,i,r)||r);return r&&Fa(e,i,r),r};const go=new Set(["unsplash"]),Re={isTus:!1,tusUploadUrl:null};var W;const q=(W=class extends te{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=Je,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._portalContainer=null,this._onFileRename=t=>{this._onPreviewRename(t.detail.fileId,t.detail.name)},this._onPreviewMetadataBlur=t=>{const e=this._previewFileId;if(!e)return;const{key:i,value:o}=t.detail,r=this._store.getState().files.get(e);if(!r)return;const s=new Map(this._store.getState().files);s.set(e,{...r,meta:{...r.meta,[i]:o}}),this._store.setState({files:s})},this._transformRemoteThumbnail=(t,e)=>{var i;const o=(i=this.config)==null?void 0:i.transformRemoteThumbnail;if(!o)return t;try{return o(t,e)||t}catch(r){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",r),t}},this._connectorThumbnailTransform=t=>{const e=this._activeConnector;return e?this._transformRemoteThumbnail(t,{source:"connector",providerId:e}):t},this._onFilesSelected=t=>{this._processIncomingFiles(t.detail.files)},this._onDropTileSourceClick=t=>{t.stopPropagation(),this._handleSourceActivation(t.detail.source.id)},this._onSourceClick=async t=>{this._handleSourceActivation(t.detail.source)},this._handleSourceActivation=async t=>{var e,i;const o=this._mergedSources.find(r=>r.id===t);if(o!=null&&o.onActivate){try{o.onActivate(this)}catch(r){console.error(`[sfx-uploader] onActivate for custom source "${t}" threw:`,r)}return}if(t==="device"){const r=this.shadowRoot.querySelector("sfx-drop-zone");r==null||r.browse();return}if(t==="url"){this._showUrlDialog=!0;return}if(t==="camera"){this._showCameraDialog=!0;return}if(t==="screen-cast"){this._showScreenCastDialog=!0;return}if((((i=(e=this.config)==null?void 0:e.connectors)==null?void 0:i.providers)??[]).includes(t)){if(go.has(t)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:r}=await zt(async()=>{const{SfxSearchProviderBrowser:s}=await import("./search-provider-browser-2xJAWQ24-DNn6VBBL.js");return{SfxSearchProviderBrowser:s}},__vite__mapDeps([0,1,2]));customElements.define("sfx-search-provider-browser",r)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:r}=await zt(async()=>{const{SfxProviderBrowser:s}=await import("./provider-browser-DhrwbwTl-BNVpkzdm.js");return{SfxProviderBrowser:s}},__vite__mapDeps([3,1,2]));customElements.define("sfx-provider-browser",r)}this._activeConnector=t}},this._onUrlSubmit=t=>{var e,i,o;this._showUrlDialog=!1;const{url:r,name:s}=t.detail,n=(e=this.config)==null?void 0:e.callbacks,a=lo(s),l=a.startsWith("image/"),d=this._store.getState();if([...d.files.values()].some(f=>f.name===s&&f.status!=="rejected"&&f.status!=="cancelled"))return;const c=Nt({name:s,size:0,type:a},d.restrictions,d.files);if(c){const f={id:Le(),status:"rejected",file:null,remoteUrl:r,name:s,size:0,type:a,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:c,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Re};Pe(this._store,f),this._dispatchPublic(I.FILE_REJECTED,{file:f,reason:c}),(i=n==null?void 0:n.onFileRejected)==null||i.call(n,f,c);return}const g={id:Le(),status:"idle",file:null,remoteUrl:r,name:s,size:0,type:a,previewUrl:l?this._transformRemoteThumbnail(r,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Re};Pe(this._store,g),this._dispatchPublic(I.FILE_ADDED,{file:g}),(o=n==null?void 0:n.onFileAdded)==null||o.call(n,g),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=t=>{this._showCameraDialog=!1,this._processIncomingFiles([t.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=t=>{this._showScreenCastDialog=!1,this._processIncomingFiles([t.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=t=>{this._removeFile(t.detail.fileId)},this._onFilePreview=t=>{var e,i,o;const r=this._store.getState().files.get(t.detail.fileId);r&&(this._previewFileId=r.id,this._dispatchPublic(I.FILE_PREVIEW,{file:r}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFilePreview)==null||o.call(i,r))},this._onFillMetadata=()=>{var t,e,i,o;const r=[...this._store.getState().files.values()].filter(s=>W._MODIFIABLE_STATUSES.has(s.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(I.FILL_METADATA,{files:r}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFillMetadata)==null||o.call(i,r)},this._onFileLocate=t=>{var e,i,o;const r=t.detail.file;r&&(this._dispatchPublic(I.FILE_LOCATE,{file:r}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFileLocate)==null||o.call(i,r))},this._onFileCopyCdn=t=>{var e,i,o;const r=t.detail.file,s=t.detail.cdnUrl;!r||!s||(this._dispatchPublic(I.FILE_COPY_CDN,{file:r,cdnUrl:s}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFileCopyCdn)==null||o.call(i,r,s))},this._onBulkMetadataSaveBatch=t=>{const{changes:e}=t.detail;if(!e.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:r}of e){const s=i.get(o);s&&i.set(o,{...s,meta:{...s.meta,...r}})}this._store.setState({files:i})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=t=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryFile(t.detail.fileId)},this._onFilePause=t=>{var e;(e=this._engine)==null||e.pauseFile(t.detail.fileId)},this._onFileResume=t=>{var e;(e=this._engine)==null||e.resumeFile(t.detail.fileId)},this._onRetryAll=()=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryAll()},this._onClearAll=()=>{var t,e,i;const o=(t=this.config)==null?void 0:t.callbacks;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),(e=this._engine)==null||e.cancelAll();const r=[...this._store.getState().files.values()];for(const s of r)s.previewUrl&&URL.revokeObjectURL(s.previewUrl),this._dispatchPublic(I.FILE_REMOVED,{file:s}),(i=o==null?void 0:o.onFileRemoved)==null||i.call(o,s);this._revokeVideoBlobUrls();for(const s of this._rejectedTimers.values())clearTimeout(s);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var t;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const i=this.shadowRoot.querySelector("sfx-file-list"),o=(t=i==null?void 0:i.shadowRoot)==null?void 0:t.querySelector('input[type="file"]');o==null||o.click()},this._onUploadStart=()=>{var t;if(this._phase==="complete"){((t=this.config)==null?void 0:t.clearOnComplete)!==!1&&this._onClearAll();return}this._hasUnfilledRequiredMetadata||this.upload()},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const t=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(t.length>0){this._reviewFiles=t,this._isReviewing=!0;return}const e=this._lastUploadId;if(e==null)return;const i=Ve.load(e);!i||i.length===0||(this._reviewFiles=i,this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const t=this._lastUploadId;t!=null&&Ve.clear(t),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=t=>{var e,i,o;const r=(e=this.config)==null?void 0:e.callbacks;for(const s of t.detail.files){const n=this._store.getState();if([...n.files.values()].some(c=>c.name===s.name&&c.size===s.size&&c.status!=="rejected"&&c.status!=="cancelled"))continue;const a=s.thumbnail?this._transformRemoteThumbnail(s.thumbnail,{source:"connector",providerId:s.provider}):null,l=Nt({name:s.name,size:s.size,type:s.mimeType},n.restrictions,n.files);if(l){const c={id:Le(),status:"rejected",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:a,duration:null,progress:0,speed:0,bytesUploaded:0,error:l,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Re};Pe(this._store,c),this._dispatchPublic(I.FILE_REJECTED,{file:c,reason:l}),(i=r==null?void 0:r.onFileRejected)==null||i.call(r,c,l);continue}const d={id:Le(),status:"idle",file:null,remoteUrl:null,name:s.name,size:s.size,type:s.mimeType,previewUrl:a,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:s,...Re};Pe(this._store,d),this._dispatchPublic(I.FILE_ADDED,{file:d}),(o=r==null?void 0:r.onFileAdded)==null||o.call(r,d)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=t=>{t.target===t.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,e,i,o,r;this._dispatchPublic(I.COMPLETE_ACTION,{}),(i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCompleteAction)==null||i.call(e),((o=this.config)==null?void 0:o.mode)==="modal"?this.close():((r=this.config)==null?void 0:r.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var t,e,i;(i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCancel)==null||i.call(e),this._dispatchPublic(I.CANCEL,{})},this._onSuccessCardClose=()=>{var t,e,i,o;((t=this.config)==null?void 0:t.mode)==="inline"?(this._dispatchPublic(I.COMPLETE_ACTION,{}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCompleteAction)==null||o.call(i),this._onClearAll()):this._onModalDismiss()},this._onModalDismiss=()=>{var t,e,i,o;this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll()),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(I.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var t,e,i,o;(t=this._engine)==null||t.cancelAll(),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(I.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,this.requestUpdate()},this._onPillDismiss=()=>{var t,e,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll()),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(I.CANCEL,{}),this.close()},this._onModalBackdropClick=t=>{t.target===t.currentTarget&&this._onModalDismiss()},this._bodyLeaveTimer=null,this._onBodyDragEnter=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=t=>{t.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=t=>{var e;t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const i=Array.from(((e=t.dataTransfer)==null?void 0:e.files)??[]);i.length>0&&this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i}}))},this._onKeyDown=t=>{var e,i;if(t.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}const o=((e=this.config)==null?void 0:e.mode)??"modal",r=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(r==="close"||r==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=t=>{var e;t.preventDefault(),this._isResizing=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector(".preview-layout");i==null||i.classList.add("resizing"),t.target.setPointerCapture(t.pointerId)},this._onSplitPointerMove=t=>{if(!this._isResizing||this._splitRafId)return;const e=t.clientX;this._splitRafId=requestAnimationFrame(()=>{var i;this._splitRafId=0;const o=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");if(!o)return;const r=o.getBoundingClientRect(),s=(e-r.left)/r.width*100;this._splitPct=Math.max(25,Math.min(75,s))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=t=>{t==null||t.stopPropagation();const e=W._FS_ZOOM_LEVELS,i=e.indexOf(this._fsZoom),o=i===-1?1:(i+1)%e.length;this._fsZoom=e[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=t=>{this._fsDragDidMove||this._onFsToggleZoom(t)},this._fsDragDidMove=!1,this._onFsPanStart=t=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,t.preventDefault())},this._onFsPanMove=t=>{if(!this._fsDragging)return;const e=t.clientX-this._fsDragStartX,i=t.clientY-this._fsDragStartY;(Math.abs(e)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+e,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=t=>{if(this._fsZoom<=1||t.touches.length!==1)return;const e=t.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=t=>{if(!this._fsDragging||t.touches.length!==1)return;const e=t.touches[0],i=e.clientX-this._fsDragStartX,o=e.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),t.preventDefault()},this._onFsClose=t=>{t==null||t.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=ts(),this._storeCtrl=new is(this,this._store)}get _lastUploadId(){var t,e;const i=(t=this.config)==null?void 0:t.lastUploadReview;if(!i)return null;if(typeof i=="string")return i;const o=(e=this.config)==null?void 0:e.auth;return o?o.airboxPuid?`${o.container}:${o.airboxPuid}`:o.container:null}open(){var t,e,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),!this._isOpen&&(this._isOpen=!0,(i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onOpen)==null||i.call(e),this._dispatchPublic(I.OPEN,{}),this.requestUpdate())}close(){var t,e,i,o;this._isOpen&&(this._isOpen=!1,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((t=this.config)==null?void 0:t.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(I.CLOSE,{}),this.requestUpdate())}upload(){var t,e,i,o,r,s,n;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const a=[...this._store.getState().files.values()].filter(d=>d.status==="idle"||d.status==="queued");if((e=(t=this.config)==null?void 0:t.callbacks)!=null&&e.onBeforeUpload&&this.config.callbacks.onBeforeUpload(a)===!1)return;const l=new CustomEvent(I.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:a}});this.dispatchEvent(l)&&(this._dispatchPublic(I.UPLOAD_STARTED,{files:a}),(r=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onUploadStarted)==null||r.call(o,a),this._engine.uploadAll(),(s=this.config)!=null&&s.minimizeOnUpload&&((n=this.config)==null?void 0:n.mode)!=="inline"&&(this._isMinimized=!0,this._isPillExpanded=!0,this.requestUpdate()))}addFiles(t){this._processIncomingFiles(t)}resumeUpload(t){var e;if(t&&t.length>0){const i=this._store.getState().files,o=new Map(i);let r=!1;for(const s of t){const n=i.get(s.id);n&&(o.set(s.id,{...n,...s}),r=!0)}r&&this._store.setState({files:o})}this._ensureEngine(),(e=this._engine)==null||e.uploadAll()}cancelUpload(){var t;(t=this._engine)==null||t.cancelAll()}pauseFile(t){var e;(e=this._engine)==null||e.pauseFile(t)}resumeFile(t){var e;(e=this._engine)==null||e.resumeFile(t)}getFiles(){return[...this._store.getState().files.values()]}getFile(t){return this._store.getState().files.get(t)}updateFileMeta(t,e,i){const o=this._store.getState().files,r=o.get(t);if(!r||!W._MODIFIABLE_STATUSES.has(r.status))return;const s=new Map(o);s.set(t,{...r,meta:e!=null?{...r.meta,...e}:r.meta,tags:i??r.tags}),this._store.setState({files:s})}updateFilesMeta(t){const e=this._store.getState().files,i=new Map(e);let o=!1;for(const{fileId:r,meta:s,tags:n}of t){const a=e.get(r);!a||!W._MODIFIABLE_STATUSES.has(a.status)||(i.set(r,{...a,meta:s!=null?{...a.meta,...s}:a.meta,tags:n??a.tags}),o=!0)}o&&this._store.setState({files:i})}updated(t){if(t.has("config")&&this.config&&this._applyConfig(this.config),t.has("_previewFileId")&&this._previewFileId){const e=this._previewFileId,i=this._store.getState().files.get(e);i?this._getImageDimensions(i).then(o=>{this._previewFileId===e&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._applyDefaultPreviewWidth(),this._updateFloatingPortal()}_applyDefaultPreviewWidth(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");if(!e){this._previewDefaultApplied=!1;return}this._previewDefaultApplied||e.getBoundingClientRect().width<=0||(this._splitPct=62.5,this._previewDefaultApplied=!0)}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const t=document.createElement("style");t.setAttribute("data-sfx-upload-float-styles",""),t.textContent=`
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
    `,document.head.appendChild(t)}_updateFloatingPortal(){const t=[...this._storeCtrl.state.files.values()];this._isMinimized&&t.length>0?(this._injectFloatStyles(),this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),ke(this._renderFloatingPill(t),this._portalContainer)):this._portalContainer&&(ke(U,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const t=this._lastUploadId;this._hasStoredReview=t!=null&&Ve.exists(t),this._initI18n(typeof navigator<"u"?navigator.language:void 0)}async _initI18n(t){try{const{i18n:e,isNew:i}=await Gr(t||"en");i&&e.on("missingKey",(r,s,n,a,l,d)=>{const c=n.match(/_(?:zero|one|two|few|many|other)$/),g=c&&d!=null&&d[`defaultValue${c[0]}`]?String(d[`defaultValue${c[0]}`]):a;Zr.handleMissingKey(n,g,s)});const o=(r,s,n)=>typeof s=="string"?e.t(r,s,n??{}):e.t(r,s??{});this._store.setState({t:o})}catch{}}disconnectedCallback(){var t,e,i,o;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(t=this._unsubStoreEvents)==null||t.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(e=this._portalContainer)==null||e.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(i=document.querySelector("style[data-sfx-upload-float-styles]"))==null||i.remove(),this._revokeVideoBlobUrls();for(const r of this._rejectedTimers.values())clearTimeout(r);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null);for(const r of this._store.getState().files.values())r.previewUrl&&URL.revokeObjectURL(r.previewUrl);(o=this._engine)==null||o.destroy(),this._engine=null}_applyConfig(t){const e={};if(t.locale&&this._initI18n(t.locale),t.targetFolder&&(e.targetFolder=t.targetFolder),(t.restrictions||t.forceName!=null)&&(e.restrictions={...this._store.getState().restrictions,...t.restrictions},t.forceName!=null&&(e.restrictions.maxNumberOfFiles=1)),t.concurrency!=null){const o=this._store.getState().queueConfig;e.queueConfig={...o,concurrency:t.concurrency}}if(t.autoProceed!=null){const o=e.queueConfig??this._store.getState().queueConfig;e.queueConfig={...o,autoProceed:t.autoProceed}}Object.keys(e).length>0&&this._store.setState(e);const i=this._lastUploadId;this._hasStoredReview=i!=null&&Ve.exists(i),this._resolveAuthAndEngine(t),(t.mode==="inline"||!t.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(t){var e,i;const o=t.auth;if(o.mode==="sass-key"){this._apiBase=gi(o.container),this._authHeaders=ii(o),this._ensureEngine(),(e=this._engine)==null||e.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(t);return}const r=++this._authResolveId;try{const s=await sa(o);if(r!==this._authResolveId)return;this._apiBase=s.apiBase,this._authHeaders=s.headers,this._ensureEngine(),(i=this._engine)==null||i.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(t)}catch(s){if(r!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",s),this._showToast(this._formatAuthError(s))}}_formatAuthError(t){var e,i;const o=t instanceof Error?t.message:String(t);return(i=(e=this.config)==null?void 0:e.auth)!=null&&i.container?o.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:o.includes("HTTP 401")||o.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":o.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":o.includes("Failed to fetch")||o.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${o}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(t,e="error"){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("sfx-toast");o==null||o.show(t,e)}_normalizeTusConfig(){var t;const e=(t=this.config)==null?void 0:t.tusConfig;return e===!0?{}:e||void 0}get _remainingSlots(){const t=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(t==null)return null;let e=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&e++;return Math.max(0,t-e)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}_buildUploadParamsResolver(){const t=this.config;if(!t)return;const{forceName:e,getUploadParams:i}=t;if(!(e==null&&!i))return o=>{const r={};if(e!=null){const n=typeof e=="function"?e():e;n&&(r.opt_force_name=n)}const s=i==null?void 0:i(o);return s&&Object.assign(r,s),Object.keys(r).length>0?r:void 0}}_ensureEngine(){!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new oa(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:t=>this._transformRemoteThumbnail(t,{source:"cdn-complete"})}),this._engine.start())}async _preloadMetadataSchema(t){const e=t.metadataConfig;if(!(!e||!this._apiBase||!this._authHeaders))try{const{fetchMetadataSchema:i,createTagsAutocomplete:o}=await zt(async()=>{const{fetchMetadataSchema:s,createTagsAutocomplete:n}=await import("./index-D4-RSon2-BVJe6U3X.js");return{fetchMetadataSchema:s,createTagsAutocomplete:n}},__vite__mapDeps([4,1,2]));this._metadataSchema=await i(this._apiBase,this._authHeaders,e.projectUuid,e),this._metadataAutocomplete=o(this._apiBase,this._authHeaders);const r=this._metadataSchema.fields.filter(s=>ir(s,e)).map(s=>s.key);this._dispatchPublic(I.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:r})}catch(i){console.error("[sfx-uploader] Failed to load metadata schema:",i),this._showToast("Failed to load metadata schema","warning")}}_onPreviewRename(t,e){const i=e.trim();if(!i)return;const o=this._store.getState().files.get(t);if(!o||o.name===i)return;const r=new Map(this._store.getState().files);r.set(t,{...o,name:i}),this._store.setState({files:r})}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema||e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0||this._metadataSchema.forceFillingOnUpload||e.requiredFields&&e.requiredFields.length>0?!0:this._metadataSchema.fields.some(i=>!!i.required)}_firstMissingRequiredFieldKey(){var t;return!this._metadataEnforcing||!this._metadataSchema?null:wa(this._store.getState().files,this._metadataSchema,(t=this.config)==null?void 0:t.metadataConfig)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_dispatchPublic(t,e){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}_onStoreChange(){var t,e,i,o,r,s,n,a,l,d;const c=this._store.getState(),g=this._prevStoreState;if(this._prevStoreState=c,!g)return;c.isUploading&&!g.isUploading&&(this._lastEta=0);const f=(t=this.config)==null?void 0:t.callbacks;for(const[b,x]of c.files){const k=g.files.get(b);if(k){if(k.status!==x.status)switch(x.status){case"uploading":k.status==="paused"&&(this._dispatchPublic(I.UPLOAD_RESUMED,{file:x}),(e=f==null?void 0:f.onUploadResumed)==null||e.call(f,x));break;case"complete":x.response&&(this._dispatchPublic(I.UPLOAD_COMPLETE,{file:x,response:x.response}),(i=f==null?void 0:f.onUploadComplete)==null||i.call(f,x,x.response));break;case"error":case"failed":{const C=new Error(x.error??"Upload failed");this._dispatchPublic(I.UPLOAD_ERROR,{file:x,error:C}),(o=f==null?void 0:f.onUploadError)==null||o.call(f,x,C);break}case"retrying":this._dispatchPublic(I.UPLOAD_RETRY,{file:x,attempt:x.retryCount}),(r=f==null?void 0:f.onUploadRetry)==null||r.call(f,x,x.retryCount);break;case"paused":this._dispatchPublic(I.UPLOAD_PAUSED,{file:x}),(s=f==null?void 0:f.onUploadPaused)==null||s.call(f,x);break}x.status==="uploading"&&k.progress!==x.progress&&(this._dispatchPublic(I.UPLOAD_PROGRESS,{file:x,progress:x.progress,speed:x.speed}),(n=f==null?void 0:f.onUploadProgress)==null||n.call(f,x,x.progress,x.speed))}}if(c.totalProgress!==g.totalProgress||c.totalSpeed!==g.totalSpeed){const b=c.totalSpeed>0?(c.totalBytes-c.totalBytesUploaded)/c.totalSpeed:c.isUploading?this._lastEta:0;c.totalSpeed>0&&(this._lastEta=b),this._dispatchPublic(I.TOTAL_PROGRESS,{percentage:c.totalProgress,speed:c.totalSpeed,eta:b}),(a=f==null?void 0:f.onTotalProgress)==null||a.call(f,c.totalProgress,c.totalSpeed,b)}if(g.isUploading&&!c.isUploading){const b=[...c.files.values()];if(!b.some(x=>x.status==="cancelled")){const x=b.filter(m=>m.status==="complete"),k=b.filter(m=>m.status==="failed"||m.status==="error"),C=this._lastUploadId;if(C!=null){const m=[...x,...k];Ve.save(C,m),this._hasStoredReview=m.length>0}this._dispatchPublic(I.ALL_COMPLETE,{successful:x,failed:k}),(l=f==null?void 0:f.onAllComplete)==null||l.call(f,x,k);const j=(d=this.config)==null?void 0:d.closeOnComplete;if(j){const m=typeof j=="number"?j:1500;this._closeOnCompleteTimer=setTimeout(()=>{var S,_,w;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(I.COMPLETE_ACTION,{}),(w=(_=(S=this.config)==null?void 0:S.callbacks)==null?void 0:_.onCompleteAction)==null||w.call(_),this.close())},m)}}}}get _mergedSources(){var t;const e=(t=this.config)==null?void 0:t.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=Je,this._cachedSources;const i=e.providers.length>0?ha(e.providers):[],o=e.customSources??[],r=e.coreSources?new Set(e.coreSources):null,s=r?Je.filter(c=>r.has(c.id)):Je,n=s.filter(c=>c.id==="device"||c.id==="url"),a=s.filter(c=>c.id!=="device"&&c.id!=="url"),l=new Set,d=[];for(const c of[...n,...i,...a,...o])if(!l.has(c.id)){if(W._RESERVED_IDS.has(c.id)&&c.onActivate){console.warn(`[sfx-uploader] Custom source id "${c.id}" conflicts with a built-in source and was skipped.`);continue}l.add(c.id),d.push(c)}return this._cachedSources=d,this._cachedSources}get _phase(){const t=this._storeCtrl.state,e=[...t.files.values()];if(e.length===0)return"empty";if(t.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return e.every(o=>i.has(o.status))&&e.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(t){var e,i,o,r;const s=(e=this.config)==null?void 0:e.callbacks;this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);for(const n of t){const a=this._store.getState();if([...a.files.values()].some(f=>f.name===n.name&&f.size===n.size&&f.status!=="rejected"&&f.status!=="cancelled"))continue;const l=n.type||lo(n.name),d=Nt({name:n.name,size:n.size,type:l},a.restrictions,a.files);if(d){const f=l.startsWith("image/")&&!co(l)?URL.createObjectURL(n):null,b={id:Le(),status:"rejected",file:n,remoteUrl:null,name:n.name,size:n.size,type:l,previewUrl:f,duration:null,progress:0,speed:0,bytesUploaded:0,error:d,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Re};Pe(this._store,b),this._dispatchPublic(I.FILE_REJECTED,{file:b,reason:d}),(i=s==null?void 0:s.onFileRejected)==null||i.call(s,b,d);const x=(o=this.config)==null?void 0:o.rejectedFileAutoRemoveDelay,k=x===!1||x===0||x===void 0?0:x;if(k>0){const C=b.id,j=setTimeout(()=>{this._rejectedTimers.delete(C);const m=this._store.getState().files.get(C);m&&m.status==="rejected"&&Ti(this._store,C)},k);this._rejectedTimers.set(C,j)}continue}let c=null;l.startsWith("image/")&&!co(l)&&(c=URL.createObjectURL(n));const g={id:Le(),status:"idle",file:n,remoteUrl:null,name:n.name,size:n.size,type:l,previewUrl:c,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],remoteInfo:null,...Re};if(Pe(this._store,g),this._dispatchPublic(I.FILE_ADDED,{file:g}),(r=s==null?void 0:s.onFileAdded)==null||r.call(s,g),n.type.startsWith("video/")){fa(n).then(b=>{if(!b)return;const x=this._store.getState(),k=x.files.get(g.id);if(k){const C=new Map(x.files);C.set(g.id,{...k,previewUrl:b}),this._store.setState({files:C})}else URL.revokeObjectURL(b)});const f=document.createElement("video");f.preload="metadata",f.src=URL.createObjectURL(n),f.onerror=()=>{URL.revokeObjectURL(f.src)},f.onloadedmetadata=()=>{const b=f.duration;if(URL.revokeObjectURL(f.src),!isFinite(b))return;const x=this._store.getState(),k=x.files.get(g.id);if(k){const C=new Map(x.files);C.set(g.id,{...k,duration:b}),this._store.setState({files:C})}}}}this._store.getState().queueConfig.autoProceed&&this.upload()}_removeFile(t){var e,i,o,r;const s=this._store.getState().files.get(t);if(!s)return;const n={...s};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===s.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===s.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),s.previewUrl&&URL.revokeObjectURL(s.previewUrl),s.file){const l=this._videoBlobUrls.get(s.file);l&&(URL.revokeObjectURL(l),this._videoBlobUrls.delete(s.file))}(s.status==="uploading"||s.status==="queued"||s.status==="retrying"||s.status==="paused")&&((e=this._engine)==null||e.cancelFile(t)),Ti(this._store,t),this._dimCache.delete(t);const a=this._rejectedTimers.get(t);if(a&&(clearTimeout(a),this._rejectedTimers.delete(t)),this._previewFileId===t){const l=[...this._store.getState().files.values()];this._previewFileId=l.length>0?l[0].id:null}this._dispatchPublic(I.FILE_REMOVED,{file:n}),(r=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onFileRemoved)==null||r.call(o,n)}render(){var t;const e=((t=this.config)==null?void 0:t.mode)??"modal",i=[...this._storeCtrl.state.files.values()],o=this._storeCtrl.state.t;return e==="modal"?v`
        ${this._isOpen&&!this._isMinimized?v`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${o}></sfx-toast>
                </div>
              </div>
            `:U}
        ${this._renderFsOverlay()}
      `:v`
      <div class="inline ${i.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${o}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return U;const t=this._storeCtrl.state.t,e=[...this._store.getState().files.values()].filter(o=>o.previewUrl||o.type.startsWith("video/")&&o.file),i=e.findIndex(o=>o.id===this._previewFileId);return v`
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
        ${this._fullscreenVideoFile?v`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${o=>o.stopPropagation()}></video>`:v`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${G(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom>=W._FS_ZOOM_LEVELS[W._FS_ZOOM_LEVELS.length-1]?t("resetZoom","Reset zoom"):t("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}>
          ${this._fsZoom>=W._FS_ZOOM_LEVELS[W._FS_ZOOM_LEVELS.length-1]?v`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:v`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
        </button>
        <button class="fs-btn" @click=${this._onFsClose} title=${t("close","Close")}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <button class="fs-nav prev" ?disabled=${i<=0} @click=${o=>{o.stopPropagation(),this._navigateFs(-1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="fs-nav next" ?disabled=${i>=e.length-1} @click=${o=>{o.stopPropagation(),this._navigateFs(1)}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
    `}_renderInlineHeader(t){return v`
      <div class="inline-header">
        <div class="inline-header-top">
          ${t.accent?v`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${t.accent}</span>
                </div>
              `:U}
          ${t.title?v`<h2 class="inline-header-title">${t.title}</h2>`:U}
        </div>
        ${t.description?v`<div class="inline-header-desc">${t.description}</div>`:U}
      </div>
    `}_renderHeader(){var t,e,i;if(this._phase==="complete")return U;const o=this._storeCtrl.state.t,r=((t=this.config)==null?void 0:t.mode)??"modal";if(this._phase==="uploading"){const d=[...this._storeCtrl.state.files.values()].filter(f=>f.status!=="rejected"&&f.status!=="cancelled"),c=d.length,g=d.filter(f=>f.status==="complete").length;return v`
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
                ${o("uploadingFiles",{count:c,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${o("nOfNComplete","{{completed}} of {{total}} complete",{completed:g,total:c})}${this._lastEta>0?` · ${o("etaLeft","~{{eta}} left",{eta:Bt(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
        </div>
      `}if(r==="inline"&&(e=this.config)!=null&&e.inlineHeader)return U;const s=((i=this.config)==null?void 0:i.header)??(r==="modal"?"close":!0);if(s===!1)return U;const n=r==="modal"?this._onModalDismiss:this._onInlineDismiss,a=s==="back"?v`<button
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
          </button>`:U,l=s==="close"?v`<button
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
          </button>`:U;return v`
      <div class="header">
        ${a}
        ${s!=="back"?v` <div class="header-icon">
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
            </div>`:U}
        <div class="header-title">${o("uploadFiles","Upload Files")}</div>
        ${l}
      </div>
    `}_getImageDimensions(t){return t.previewUrl?this._dimCache.has(t.id)?Promise.resolve(this._dimCache.get(t.id)):new Promise(e=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(t.id,o),e(o)},i.onerror=()=>{this._dimCache.set(t.id,null),e(null)},i.src=t.previewUrl}):Promise.resolve(null)}_renderUploadOverlay(t){var e;const i=this._storeCtrl.state,o=i.t,r=Math.round(i.totalProgress??0),s=t.filter(l=>l.status!=="rejected"&&l.status!=="cancelled"),n=s.length,a=s.filter(l=>l.status==="complete").length;return v`
      <div class="upload-overlay">
        <div class="upload-overlay-spinner"></div>
        <div class="upload-overlay-percent">${r}%</div>
        <div class="upload-overlay-title">
          ${o("uploadingFiles",{count:n,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
        </div>
        <div class="upload-overlay-subtitle">
          ${o("nOfNComplete","{{completed}} of {{total}} complete",{completed:a,total:n})}${this._lastEta>0?v` · ${o("etaLeft","~{{eta}} left",{eta:Bt(this._lastEta)})}`:U}
        </div>
        <div class="upload-overlay-bar">
          <div class="upload-overlay-bar-fill" ${G({width:`${r}%`})}></div>
        </div>
        <div class="upload-overlay-actions">
          <button
            class="upload-overlay-cancel"
            @click=${this._onCancelUpload}
          >
            ${o("cancelUpload","Cancel upload")}
          </button>
          ${(e=this.config)!=null&&e.minimizeOnUpload?v`<button
                class="upload-overlay-minimize"
                @click=${this._onMinimize}
              >
                ${o("minimizeAndContinue","Minimize & continue in background")}
              </button>`:U}
        </div>
      </div>
    `}_renderFloatingPill(t){const e=this._storeCtrl.state,i=e.t,o=Math.round(e.totalProgress??0),r=this._phase==="complete",s=t.filter(a=>a.status==="complete").length,n=t.filter(a=>a.status==="failed").length;return this._isPillExpanded===!1?v`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${r?n>0?s>0?v`<div class="float-collapsed-icon warn">
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
                    </div>`:v`<div class="float-collapsed-icon error">
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
                    </div>`:v`<div class="float-collapsed-icon done">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>`:v`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text"
              >${r?n>0?s>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:t.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}</span
            >
            ${r?U:v`<span class="float-collapsed-pct">${o}%</span>`}
          </div>
          <div class="float-collapsed-actions">
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
      `:v`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div
              class="float-icon ${r?n>0?s>0?"warn":"error":"done":""}"
            >
              ${r?n>0?s>0?v`<svg
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
                      </svg>`:v`<svg
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
                      </svg>`:v`<svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>`:v`<svg
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
                ${r?n>0?s>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:t.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${r?`${i("filesUploaded",{count:s,defaultValue_one:"{{count}} file uploaded",defaultValue_other:"{{count}} files uploaded"})}${n>0?`, ${i("nFailed","{{count}} failed",{count:n})}`:""}`:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:s,total:t.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Bt(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
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
            <span class="float-progress-label">Overall progress</span>
            <span
              class="float-progress-pct ${r?n>0?s>0?"warn":"error":"done":""}"
              >${r?"Done":`${o}%`}</span
            >
          </div>
          <div class="float-bar">
            <div
              class="float-bar-fill ${r?n>0?s>0?"warn":"error":"done":""}"
              ${G({width:`${r?100:o}%`})}
            ></div>
          </div>
        </div>
        <div class="float-items">
          ${t.map(a=>{const l=a.status==="failed"||a.status==="error";return v`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${G(a.previewUrl?{"background-image":`url(${a.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
                >
                  ${a.previewUrl?U:v`<svg
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
                  <div class="float-item-name">${a.name}</div>
                  <div class="float-item-size">${ye(a.size)}</div>
                </div>
                <div class="float-item-status">
                  ${a.status==="complete"?v`<div class="float-item-done">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2.5"
                          stroke-linecap="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>`:l?v` <div class="float-item-error-wrap">
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
                            >${a.error||"Upload failed"}</span
                          >
                        </div>
                        <button
                          class="float-item-retry"
                          @click=${()=>{var d;this._ensureEngine(),(d=this._engine)==null||d.retryFile(a.id)}}
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
                        </button>`:a.status==="paused"?v`<svg
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
                      </svg>`:v`<div class="float-item-spinner"></div>`}
                </div>
              </div>
            `})}
        </div>
      </div>
    `}_renderPreviewLayout(t){var e,i,o,r,s;if(t.length===0)return U;const n=this._storeCtrl.state.t,a=t.find(c=>c.id===this._previewFileId)??t[0],l=((e=a.name.split(".").pop())==null?void 0:e.toUpperCase())||"";new Date(a.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const d=t.reduce((c,g)=>c+(g.size||0),0);return v`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${G({flex:String(this._splitPct)})}>
          ${((i=this.config)==null?void 0:i.mode)==="inline"&&(o=this.config)!=null&&o.inlineHeader?this._renderInlineHeader(this.config.inlineHeader):U}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${t.length} ${t.length===1?"asset":"assets"} ·
              ${ye(d)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${t}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${po(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
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
        <div class="preview-panel" ${G({flex:String(100-this._splitPct)})}>
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${()=>{this._previewFileId=null}}
              aria-label=${n("backToFileList","Back to file list")}
              title=${n("back","Back")}
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
            <span class="preview-header-name" title=${a.name}
              >${a.name}</span
            >
            <div class="preview-header-actions">
              ${a.previewUrl||a.type.startsWith("video/")&&a.file?v`
                    <button
                      @click=${()=>{this._fullscreenPreviewUrl=a.previewUrl,this._fullscreenVideoFile=a.type.startsWith("video/")&&a.file?a.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
                      title=${n("fullscreen","Fullscreen")}
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
                  `:U}
              <button
                @click=${()=>{this._previewFileId=null}}
                title=${n("close","Close")}
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
          ${a.type.startsWith("video/")&&a.file?v`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(a.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(a)===0}
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
                    ?disabled=${t.indexOf(a)===t.length-1}
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
              `:a.previewUrl?v`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${a.previewUrl}
                      alt=${a.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(a)===0}
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
                    ?disabled=${t.indexOf(a)===t.length-1}
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
              `:v`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${Go(a)}">
                    <img
                      class="preview-doc-type-img"
                      src=${Xo(l)}
                      alt="${l?`${l} file`:"File"}"
                      @error=${c=>{const g=c.target,f=Zo();!g.dataset.fallback&&g.src!==f&&(g.dataset.fallback="1",g.src=f)}}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${t.indexOf(a)===0}
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
                    ?disabled=${t.indexOf(a)===t.length-1}
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
          ${this._metadataSchema&&(r=this.config)!=null&&r.metadataConfig?v`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${l}${a.size?` · ${ye(a.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:U}
          ${this._metadataSchema&&(s=this.config)!=null&&s.metadataConfig?v`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                >
                  <sfx-metadata-form
                    .schema=${this._metadataSchema}
                    .meta=${a.meta}
                    .config=${this.config.metadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                  ></sfx-metadata-form>
                </div>
              `:v`
                <div class="preview-file-info-panel">
                  <div
                    class="preview-file-info-header ${this._fileInfoOpen?"open":""}"
                    @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                  >
                    <span>${n("fileInfo","File info")}</span>
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
                      <div class="preview-file-info-key">${n("fileName","File name")}</div>
                      <div class="preview-file-info-val">
                        ${a.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${n("type","Type")}</div>
                      <div class="preview-file-info-val">${l}</div>
                    </div>
                    ${a.size?v`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${n("size","Size")}</div>
                            <div class="preview-file-info-val">
                              ${ye(a.size)}
                            </div>
                          </div>
                        `:U}
                    ${this._previewDims!=="—"?v`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${n("dimensions","Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:U}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}_navigatePreview(t,e){var i;const o=t.findIndex(r=>r.id===this._previewFileId)+e;if(o>=0&&o<t.length){const r=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-image[controls]");r&&(r.pause(),r.removeAttribute("src"),r.load()),this._previewFileId=t[o].id}}_renderBody(){var t,e,i,o,r,s,n,a,l,d,c;const g=this._storeCtrl.state,f=g.t,b=[...g.files.values()],x=b.filter(m=>m.status==="idle"||m.status==="queued"||m.status==="error"||m.status==="failed"),k=this._phase,C=po(g.restrictions),j=b.length>0;return v`
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
        @require-metadata=${this._onFillMetadata}
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
          class="body ${j?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId?"has-preview":""}"
          @dragenter=${j?this._onBodyDragEnter:U}
          @dragover=${j?this._onBodyDragOver:U}
          @dragleave=${j?this._onBodyDragLeave:U}
          @drop=${j?this._onBodyDrop:U}
        >
          ${((t=this.config)==null?void 0:t.mode)==="inline"&&(e=this.config)!=null&&e.inlineHeader&&!this._previewFileId&&k!=="uploading"&&k!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):U}
          ${this._isReviewing?v`
                <sfx-last-upload-review
                  .t=${f}
                  .files=${this._reviewFiles}
                  .getLocateUrl=${(i=this.config)==null?void 0:i.getLocateUrl}
                  .showLocateButton=${((o=this.config)==null?void 0:o.showLocateButton)??!1}
                  .showCopyCdnButton=${((r=this.config)==null?void 0:r.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:k==="complete"?v`
                <sfx-success-card
                  .t=${f}
                  .primaryLabel=${f("done","Done")}
                  .fileCount=${b.filter(m=>m.status==="complete").length}
                  .totalSize=${b.filter(m=>m.status==="complete").reduce((m,S)=>m+(S.size||0),0)}
                  .thumbnails=${b.filter(m=>m.status==="complete"&&m.previewUrl).map(m=>m.previewUrl)}
                  .failedFiles=${b.filter(m=>m.status==="failed").map(m=>({id:m.id,name:m.name,error:m.error||"Upload failed"}))}
                  .alreadyExistedCount=${b.filter(m=>m.status==="complete"&&m.alreadyExisted).length}
                  @close-uploader=${this._onSuccessCardClose}
                  @file-retry=${this._onFileRetry}
                  @retry-all=${this._onRetryAll}
                  @review-files=${this._onEnterReview}
                ></sfx-success-card>
              `:k==="uploading"?this._renderUploadOverlay(b):v`
                ${j?U:v`<sfx-drop-zone
                        .t=${f}
                        .compact=${j}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${C}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((s=this.config)==null?void 0:s.sourcesLayout)??"pills"}
                        .mode=${((n=this.config)==null?void 0:n.mode)??"modal"}
                        .multi=${this._allowMulti}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?v`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${f("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${f("viewLastUpload","View last upload")}
                          </button>`:U}`}
                ${j?this._previewFileId?this._renderPreviewLayout(b):v`
                        <div class="asset-count">
                          ${b.length}
                          ${b.length===1?"file":"files"} ·
                          ${ye(b.reduce((m,S)=>m+(S.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${f}
                          .files=${b}
                          .showDropTile=${!0}
                          .sources=${this._mergedSources}
                          .accept=${C}
                          .multi=${this._allowMulti}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:U}
              `}
        </div>

        ${j&&k!=="complete"&&k!=="uploading"?v`
              <sfx-actions-bar
                .t=${f}
                .uploadState=${"idle"}
                .fileCount=${x.length}
                .totalSize=${x.reduce((m,S)=>m+(S.size||0),0)}
                .failedCount=${b.filter(m=>m.status==="failed"||m.status==="error").length}
                .completedCount=${b.filter(m=>m.status==="complete").length}
                .uploadProgress=${g.totalProgress??0}
                .showFillMetadata=${!!(((a=this.config)==null?void 0:a.showFillMetadata)??((l=this.config)==null?void 0:l.metadataConfig))}
                .requireMetadataFirst=${this._hasUnfilledRequiredMetadata}
              ></sfx-actions-bar>
            `:U}
        ${this._showUrlDialog?v`<sfx-url-dialog .t=${f}></sfx-url-dialog>`:U}
        ${this._showCameraDialog?v`<sfx-camera-dialog .t=${f}></sfx-camera-dialog>`:U}
        ${this._showScreenCastDialog?v`<sfx-screen-cast-dialog .t=${f}></sfx-screen-cast-dialog>`:U}
        ${this._activeConnector&&(d=this.config)!=null&&d.connectors?v`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${go.has(this._activeConnector)?v`
                        <sfx-search-provider-browser
                          .t=${f}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-search-provider-browser>
                      `:v`
                        <sfx-provider-browser
                          .t=${f}
                          .provider=${this._activeConnector}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .transformThumbnail=${this._connectorThumbnailTransform}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-provider-browser>
                      `}
                </div>
              </div>
            `:U}
        ${this._bulkMetadataOpen&&this._metadataSchema?v`
              <sfx-bulk-metadata-modal
                .schema=${this._metadataSchema}
                .files=${[...this._store.getState().files.values()].filter(m=>W._MODIFIABLE_STATUSES.has(m.status))}
                .config=${((c=this.config)==null?void 0:c.metadataConfig)??null}
                .autocomplete=${this._metadataAutocomplete}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
              ></sfx-bulk-metadata-modal>
            `:U}
      </div>
    `}_navigateFs(t){const e=[...this._store.getState().files.values()].filter(r=>r.previewUrl||r.type.startsWith("video/")&&r.file),i=e.findIndex(r=>r.id===this._previewFileId);if(i===-1)return;const o=i+t;if(o>=0&&o<e.length){const r=e[o];this._fullscreenPreviewUrl=r.previewUrl,this._fullscreenVideoFile=r.type.startsWith("video/")&&r.file?r.file:null,this._previewFileId=r.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(t){let e=this._videoBlobUrls.get(t);return e||(e=URL.createObjectURL(t),this._videoBlobUrls.set(t,e)),e}_revokeVideoBlobUrls(){for(const t of this._videoBlobUrls.values())URL.revokeObjectURL(t);this._videoBlobUrls.clear()}},W.styles=X`
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
  `,W._FS_ZOOM_LEVELS=[1,2,3,4],W._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),W._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),W);V([R({attribute:!1})],q.prototype,"config");V([D()],q.prototype,"_isOpen");V([D()],q.prototype,"_activeConnector");V([D()],q.prototype,"_showUrlDialog");V([D()],q.prototype,"_showCameraDialog");V([D()],q.prototype,"_showScreenCastDialog");V([D()],q.prototype,"_previewFileId");V([D()],q.prototype,"_previewDims");V([D()],q.prototype,"_fileInfoOpen");V([D()],q.prototype,"_splitPct");V([D()],q.prototype,"_fullscreenPreviewUrl");V([D()],q.prototype,"_fullscreenVideoFile");V([D()],q.prototype,"_fsZoom");V([D()],q.prototype,"_bodyDragOver");V([D()],q.prototype,"_isMinimized");V([D()],q.prototype,"_isPillExpanded");V([D()],q.prototype,"_metadataSchema");V([D()],q.prototype,"_bulkMetadataOpen");V([D()],q.prototype,"_bulkMetadataInitialFieldKey");V([D()],q.prototype,"_isReviewing");V([D()],q.prototype,"_reviewFiles");V([D()],q.prototype,"_hasStoredReview");let Da=q;const le=(t,e)=>{typeof customElements<"u"&&!customElements.get(t)&&customElements.define(t,e)};le("sfx-uploader",Da);le("sfx-drop-zone",ka);le("sfx-import-divider",Sa);le("sfx-source-pills",vi);le("sfx-file-list",oe);le("sfx-file-item",ue);le("sfx-success-card",fe);le("sfx-actions-bar",ce);le("sfx-url-dialog",pt);le("sfx-camera-dialog",Ne);le("sfx-screen-cast-dialog",Ee);const sl=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Ma as A,Ha as B,Ka as H,Ba as I,G as J,Na as M,qa as N,_e as S,Wa as V,ye as _,Xo as a,tr as b,sl as d,Zo as i,ir as n,di as o,ha as p,Ya as q,ri as t};
