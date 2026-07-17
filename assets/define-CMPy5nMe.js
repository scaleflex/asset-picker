const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/google-picker-view-BtJ5yX5F-_1KVCPmH.js","assets/index-BZ9dNCUM.js","assets/index-BkwiWuoo.css","assets/search-provider-browser-Dz5XsYn7-e-P5nMY9.js","assets/provider-browser-C2kQJBGd-gok0cHbc.js","assets/index-By-Ia9bl-hfntVoOj.js"])))=>i.map(i=>d[i]);
import{j as tr,e as ft,i as qt,t as Vt,E as Ae,A as P,w as _e,a as f,c as se,n as F,r as I,d as Ri,f as ce,D as Pe,_ as yt}from"./index-BZ9dNCUM.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ir}=tr,Yi=t=>t,Ac=t=>t.strings===void 0,Gi=()=>document.createComment(""),We=(t,e,i)=>{var r;const o=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(i===void 0){const n=o.insertBefore(Gi(),s),a=o.insertBefore(Gi(),s);i=new ir(n,a,t,t.options)}else{const n=i._$AB.nextSibling,a=i._$AM,l=a!==t;if(l){let c;(r=i._$AQ)==null||r.call(i,t),i._$AM=t,i._$AP!==void 0&&(c=t._$AU)!==a._$AU&&i._$AP(c)}if(n!==s||l){let c=i._$AA;for(;c!==n;){const d=Yi(c).nextSibling;Yi(o).insertBefore(c,s),c=d}}}return i},Se=(t,e,i=t)=>(t._$AI(e,i),t),or={},sr=(t,e=or)=>t._$AH=e,rr=t=>t._$AH,ei=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=(t,e,i)=>{const o=new Map;for(let s=e;s<=i;s++)o.set(t[s],s);return o},Qe=ft(class extends qt{constructor(t){if(super(t),t.type!==Vt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let o;i===void 0?i=e:e!==void 0&&(o=e);const s=[],r=[];let n=0;for(const a of t)s[n]=o?o(a,n):n,r[n]=i(a,n),n++;return{values:r,keys:s}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,o]){const s=rr(t),{values:r,keys:n}=this.dt(e,i,o);if(!Array.isArray(s))return this.ut=n,r;const a=this.ut??(this.ut=[]),l=[];let c,d,p=0,u=s.length-1,b=0,h=r.length-1;for(;p<=u&&b<=h;)if(s[p]===null)p++;else if(s[u]===null)u--;else if(a[p]===n[b])l[b]=Se(s[p],r[b]),p++,b++;else if(a[u]===n[h])l[h]=Se(s[u],r[h]),u--,h--;else if(a[p]===n[h])l[h]=Se(s[p],r[h]),We(t,l[h+1],s[p]),p++,h--;else if(a[u]===n[b])l[b]=Se(s[u],r[b]),We(t,s[p],s[u]),u--,b++;else if(c===void 0&&(c=Wi(n,b,h),d=Wi(a,p,u)),c.has(a[p]))if(c.has(a[u])){const _=d.get(n[b]),C=_!==void 0?s[_]:null;if(C===null){const U=We(t,s[p]);Se(U,r[b]),l[b]=U}else l[b]=Se(C,r[b]),We(t,s[p],C),s[_]=null;b++}else ei(s[u]),u--;else ei(s[p]),p++;for(;b<=h;){const _=We(t,l[h+1]);Se(_,r[b]),l[b++]=_}for(;p<=u;){const _=s[p++];_!==null&&ei(_)}return this.ut=n,sr(t,l),Ae}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ft=class extends qt{constructor(e){if(super(e),this.it=P,e.type!==Vt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===P||e==null)return this._t=void 0,this.it=e;if(e===Ae)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};Ft.directiveName="unsafeHTML",Ft.resultType=1;const Xi=ft(Ft);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ui extends Ft{}ui.directiveName="unsafeSVG",ui.resultType=2;const we=ft(ui);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nr=ft(class extends qt{constructor(t){var e;if(super(t),t.type!==Vt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((o=this.nt)!=null&&o.has(r))&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Ae}}),j=t=>typeof t=="string",Xe=()=>{let t,e;const i=new Promise((o,s)=>{t=o,e=s});return i.resolve=t,i.reject=e,i},Ji=t=>t==null?"":String(t),ar=(t,e,i)=>{t.forEach(o=>{e[o]&&(i[o]=e[o])})},lr=/###/g,Zi=t=>t&&t.includes("###")?t.replace(lr,"."):t,Qi=t=>!t||j(t),st=(t,e,i)=>{const o=j(e)?e.split("."):e;let s=0;for(;s<o.length-1;){if(Qi(t))return{};const r=Zi(o[s]);!t[r]&&i&&(t[r]=new i),Object.prototype.hasOwnProperty.call(t,r)?t=t[r]:t={},++s}return Qi(t)?{}:{obj:t,k:Zi(o[s])}},eo=(t,e,i)=>{const{obj:o,k:s}=st(t,e,Object);if(o!==void 0||e.length===1){o[s]=i;return}let r=e[e.length-1],n=e.slice(0,e.length-1),a=st(t,n,Object);for(;a.obj===void 0&&n.length;)r=`${n[n.length-1]}.${r}`,n=n.slice(0,n.length-1),a=st(t,n,Object),a!=null&&a.obj&&typeof a.obj[`${a.k}.${r}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},cr=(t,e,i,o)=>{const{obj:s,k:r}=st(t,e,Object);s[r]=s[r]||[],s[r].push(i)},Lt=(t,e)=>{const{obj:i,k:o}=st(t,e);if(i&&Object.prototype.hasOwnProperty.call(i,o))return i[o]},dr=(t,e,i)=>{const o=Lt(t,i);return o!==void 0?o:Lt(e,i)},ts=(t,e,i)=>{for(const o in e)o!=="__proto__"&&o!=="constructor"&&(o in t?j(t[o])||t[o]instanceof String||j(e[o])||e[o]instanceof String?i&&(t[o]=e[o]):ts(t[o],e[o],i):t[o]=e[o]);return t},be=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),pr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},ur=t=>j(t)?t.replace(/[&<>"'\/]/g,e=>pr[e]):t;class hr{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const i=this.regExpMap.get(e);if(i!==void 0)return i;const o=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,o),this.regExpQueue.push(e),o}}const fr=[" ",",","?","!",";"],gr=new hr(20),mr=(t,e,i)=>{e=e||"",i=i||"";const o=fr.filter(n=>!e.includes(n)&&!i.includes(n));if(o.length===0)return!0;const s=gr.getRegExp(`(${o.map(n=>n==="?"?"\\?":n).join("|")})`);let r=!s.test(t);if(!r){const n=t.indexOf(i);n>0&&!s.test(t.substring(0,n))&&(r=!0)}return r},hi=(t,e,i=".")=>{if(!t)return;if(t[e])return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0;const o=e.split(i);let s=t;for(let r=0;r<o.length;){if(!s||typeof s!="object")return;let n,a="";for(let l=r;l<o.length;++l)if(l!==r&&(a+=i),a+=o[l],n=s[a],n!==void 0){if(["string","number","boolean"].includes(typeof n)&&l<o.length-1)continue;r+=l-r+1;break}s=n}return s},nt=t=>t==null?void 0:t.replace(/_/g,"-"),vr={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){var i,o;(o=(i=console==null?void 0:console[t])==null?void 0:i.apply)==null||o.call(i,console,e)}};class zt{constructor(e,i={}){this.init(e,i)}init(e,i={}){this.prefix=i.prefix||"i18next:",this.logger=e||vr,this.options=i,this.debug=i.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,i,o,s){return s&&!this.debug?null:(e=e.map(r=>j(r)?r.replace(/[\r\n\x00-\x1F\x7F]/g," "):r),j(e[0])&&(e[0]=`${o}${this.prefix} ${e[0]}`),this.logger[i](e))}create(e){return new zt(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new zt(this.logger,e)}}var me=new zt;class Kt{constructor(){this.observers={}}on(e,i){return e.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const s=this.observers[o].get(i)||0;this.observers[o].set(i,s+1)}),this}off(e,i){if(this.observers[e]){if(!i){delete this.observers[e];return}this.observers[e].delete(i)}}once(e,i){const o=(...s)=>{i(...s),this.off(e,o)};return this.on(e,o),this}emit(e,...i){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([o,s])=>{for(let r=0;r<s;r++)o(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([o,s])=>{for(let r=0;r<s;r++)o(e,...i)})}}class to extends Kt{constructor(e,i={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const i=this.options.ns.indexOf(e);i>-1&&this.options.ns.splice(i,1)}getResource(e,i,o,s={}){var r,n;const a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,l=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let c;e.includes(".")?c=e.split("."):(c=[e,i],o&&(Array.isArray(o)?c.push(...o):j(o)&&a?c.push(...o.split(a)):c.push(o)));const d=Lt(this.data,c);return!d&&!i&&!o&&e.includes(".")&&(e=c[0],i=c[1],o=c.slice(2).join(".")),d||!l||!j(o)?d:hi((n=(r=this.data)==null?void 0:r[e])==null?void 0:n[i],o,a)}addResource(e,i,o,s,r={silent:!1}){const n=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=[e,i];o&&(a=a.concat(n?o.split(n):o)),e.includes(".")&&(a=e.split("."),s=i,i=a[1]),this.addNamespaces(i),eo(this.data,a,s),r.silent||this.emit("added",e,i,o,s)}addResources(e,i,o,s={silent:!1}){for(const r in o)(j(o[r])||Array.isArray(o[r]))&&this.addResource(e,i,r,o[r],{silent:!0});s.silent||this.emit("added",e,i,o)}addResourceBundle(e,i,o,s,r,n={silent:!1,skipCopy:!1}){let a=[e,i];e.includes(".")&&(a=e.split("."),s=o,o=i,i=a[1]),this.addNamespaces(i);let l=Lt(this.data,a)||{};n.skipCopy||(o=JSON.parse(JSON.stringify(o))),s?ts(l,o,r):l={...l,...o},eo(this.data,a,l),n.silent||this.emit("added",e,i,o)}removeResourceBundle(e,i){this.hasResourceBundle(e,i)&&delete this.data[e][i],this.removeNamespaces(i),this.emit("removed",e,i)}hasResourceBundle(e,i){return this.getResource(e,i)!==void 0}getResourceBundle(e,i){return i||(i=this.options.defaultNS),this.getResource(e,i)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const i=this.getDataByLanguage(e);return!!(i&&Object.keys(i)||[]).find(o=>i[o]&&Object.keys(i[o]).length>0)}toJSON(){return this.data}}var is={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,o,s){return t.forEach(r=>{var n;e=((n=this.processors[r])==null?void 0:n.process(e,i,o,s))??e}),e}};const os=Symbol("i18next/PATH_KEY");function br(){const t=[],e=Object.create(null);let i;return e.get=(o,s)=>{var r;return(r=i==null?void 0:i.revoke)==null||r.call(i),s===os?t:(t.push(s),i=Proxy.revocable(o,e),i.proxy)},Proxy.revocable(Object.create(null),e).proxy}function Me(t,e){const{[os]:i}=t(br()),o=(e==null?void 0:e.keySeparator)??".",s=(e==null?void 0:e.nsSeparator)??":",r=(e==null?void 0:e.enableSelector)==="strict";if(i.length>1&&s){const n=e==null?void 0:e.ns,a=r?Array.isArray(n)?n:n?[n]:null:Array.isArray(n)?n:null;if(a&&(r?a:a.length>1?a.slice(1):[]).includes(i[0]))return`${i[0]}${s}${i.slice(1).join(o)}`}return i.join(o)}const ti=t=>!j(t)&&typeof t!="boolean"&&typeof t!="number";class It extends Kt{constructor(e,i={}){super(),ar(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=i,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=me.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,i={interpolation:{}}){const o={...i};if(e==null)return!1;const s=this.resolve(e,o);if((s==null?void 0:s.res)===void 0)return!1;const r=ti(s.res);return!(o.returnObjects===!1&&r)}extractFromKey(e,i){let o=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const s=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let r=i.ns||this.options.defaultNS||[];const n=o&&e.includes(o),a=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!mr(e,o,s);if(n&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:j(r)?[r]:r};const c=e.split(o);(o!==s||o===s&&this.options.ns.includes(c[0]))&&(r=c.shift()),e=c.join(s)}return{key:e,namespaces:j(r)?[r]:r}}translate(e,i,o){let s=typeof i=="object"?{...i}:i;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),e==null)return"";typeof e=="function"&&(e=Me(e,{...this.options,...s})),Array.isArray(e)||(e=[String(e)]),e=e.map(O=>typeof O=="function"?Me(O,{...this.options,...s}):String(O));const r=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,n=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:a,namespaces:l}=this.extractFromKey(e[e.length-1],s),c=l[l.length-1];let d=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;d===void 0&&(d=":");const p=s.lng||this.language,u=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((p==null?void 0:p.toLowerCase())==="cimode")return u?r?{res:`${c}${d}${a}`,usedKey:a,exactUsedKey:a,usedLng:p,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:`${c}${d}${a}`:r?{res:a,usedKey:a,exactUsedKey:a,usedLng:p,usedNS:c,usedParams:this.getUsedParamsDetails(s)}:a;const b=this.resolve(e,s);let h=b==null?void 0:b.res;const _=(b==null?void 0:b.usedKey)||a,C=(b==null?void 0:b.exactUsedKey)||a,U=["[object Number]","[object Function]","[object RegExp]"],w=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,x=!this.i18nFormat||this.i18nFormat.handleAsObject,S=s.count!==void 0&&!j(s.count),v=It.hasDefaultValue(s),$=S?this.pluralResolver.getSuffix(p,s.count,s):"",E=s.ordinal&&S?this.pluralResolver.getSuffix(p,s.count,{ordinal:!1}):"",L=S&&!s.ordinal&&s.count===0,R=L&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${$}`]||s[`defaultValue${E}`]||s.defaultValue;let A=h;x&&!h&&v&&(A=R);const re=ti(A),fe=Object.prototype.toString.apply(A);if(x&&A&&re&&!U.includes(fe)&&!(j(w)&&Array.isArray(A))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const O=this.options.returnedObjectHandler?this.options.returnedObjectHandler(_,A,{...s,ns:l}):`key '${a} (${this.language})' returned an object instead of string.`;return r?(b.res=O,b.usedParams=this.getUsedParamsDetails(s),b):O}if(n){const O=Array.isArray(A),V=O?[]:{},ne=O?C:_;for(const g in A)if(Object.prototype.hasOwnProperty.call(A,g)){const m=`${ne}${n}${g}`;v&&!h?V[g]=this.translate(m,{...s,defaultValue:ti(R)?R[g]:void 0,joinArrays:!1,ns:l}):V[g]=this.translate(m,{...s,joinArrays:!1,ns:l}),V[g]===m&&(V[g]=A[g])}h=V}}else if(x&&j(w)&&Array.isArray(h))h=h.join(w),h&&(h=this.extendTranslation(h,e,s,o));else{let O=!1,V=!1;!this.isValidLookup(h)&&v&&(O=!0,h=R),this.isValidLookup(h)||(V=!0,h=a);const ne=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&V?void 0:h,g=v&&R!==h&&this.options.updateMissing;if(V||O||g){if(this.logger.log(g?"updateKey":"missingKey",p,c,S&&!g?`${a}${this.pluralResolver.getSuffix(p,s.count,s)}`:a,g?R:h),n){const k=this.resolve(a,{...s,keySeparator:!1});k&&k.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let m=[];const y=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&y&&y[0])for(let k=0;k<y.length;k++)m.push(y[k]);else this.options.saveMissingTo==="all"?m=this.languageUtils.toResolveHierarchy(s.lng||this.language):m.push(s.lng||this.language);const T=(k,z,D)=>{var N;const q=v&&D!==h?D:ne;this.options.missingKeyHandler?this.options.missingKeyHandler(k,c,z,q,g,s):(N=this.backendConnector)!=null&&N.saveMissing&&this.backendConnector.saveMissing(k,c,z,q,g,s),this.emit("missingKey",k,c,z,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&S?m.forEach(k=>{const z=this.pluralResolver.getSuffixes(k,s);L&&s[`defaultValue${this.options.pluralSeparator}zero`]&&!z.includes(`${this.options.pluralSeparator}zero`)&&z.push(`${this.options.pluralSeparator}zero`),z.forEach(D=>{T([k],a+D,s[`defaultValue${D}`]||R)})}):T(m,a,R))}h=this.extendTranslation(h,e,s,b,o),V&&h===a&&this.options.appendNamespaceToMissingKey&&(h=`${c}${d}${a}`),(V||O)&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${c}${d}${a}`:a,O?h:void 0,s))}return r?(b.res=h,b.usedParams=this.getUsedParamsDetails(s),b):h}extendTranslation(e,i,o,s,r){var n,a;if((n=this.i18nFormat)!=null&&n.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const d=j(e)&&(((a=o==null?void 0:o.interpolation)==null?void 0:a.skipOnVariables)!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let p;if(d){const b=e.match(this.interpolator.nestingRegexp);p=b&&b.length}let u=o.replace&&!j(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,o.lng||this.language||s.usedLng,o),d){const b=e.match(this.interpolator.nestingRegexp),h=b&&b.length;p<h&&(o.nest=!1)}!o.lng&&s&&s.res&&(o.lng=this.language||s.usedLng),o.nest!==!1&&(e=this.interpolator.nest(e,(...b)=>(r==null?void 0:r[0])===b[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${i[0]}`),null):this.translate(...b,i),o)),o.interpolation&&this.interpolator.reset()}const l=o.postProcess||this.options.postProcess,c=j(l)?[l]:l;return e!=null&&c!=null&&c.length&&o.applyPostProcessor!==!1&&(e=is.handle(c,e,i,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),e}resolve(e,i={}){let o,s,r,n,a;return j(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(l=>typeof l=="function"?Me(l,{...this.options,...i}):l)),e.forEach(l=>{if(this.isValidLookup(o))return;const c=this.extractFromKey(l,i),d=c.key;s=d;let p=c.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const u=i.count!==void 0&&!j(i.count),b=u&&!i.ordinal&&i.count===0,h=i.context!==void 0&&(j(i.context)||typeof i.context=="number")&&i.context!=="",_=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);p.forEach(C=>{var U,w;this.isValidLookup(o)||(a=C,!this.checkedLoadedFor[`${_[0]}-${C}`]&&(U=this.utils)!=null&&U.hasLoadedNamespace&&!((w=this.utils)!=null&&w.hasLoadedNamespace(a))&&(this.checkedLoadedFor[`${_[0]}-${C}`]=!0,this.logger.warn(`key "${s}" for languages "${_.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),_.forEach(x=>{var S;if(this.isValidLookup(o))return;n=x;const v=[d];if((S=this.i18nFormat)!=null&&S.addLookupKeys)this.i18nFormat.addLookupKeys(v,d,x,C,i);else{let E;u&&(E=this.pluralResolver.getSuffix(x,i.count,i));const L=`${this.options.pluralSeparator}zero`,R=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(i.ordinal&&E.startsWith(R)&&v.push(d+E.replace(R,this.options.pluralSeparator)),v.push(d+E),b&&v.push(d+L)),h){const A=`${d}${this.options.contextSeparator||"_"}${i.context}`;v.push(A),u&&(i.ordinal&&E.startsWith(R)&&v.push(A+E.replace(R,this.options.pluralSeparator)),v.push(A+E),b&&v.push(A+L))}}let $;for(;$=v.pop();)this.isValidLookup(o)||(r=$,o=this.getResource(x,C,$,i))}))})}),{res:o,usedKey:s,exactUsedKey:r,usedLng:n,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,i,o,s={}){var r;return(r=this.i18nFormat)!=null&&r.getResource?this.i18nFormat.getResource(e,i,o,s):this.resourceStore.getResource(e,i,o,s)}getUsedParamsDetails(e={}){const i=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=e.replace&&!j(e.replace);let s=o?e.replace:e;if(o&&typeof e.count<"u"&&(s.count=e.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!o){s={...s};for(const r of i)delete s[r]}return s}static hasDefaultValue(e){const i="defaultValue";for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&o.startsWith(i)&&e[o]!==void 0)return!0;return!1}}class io{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=me.create("languageUtils")}getScriptPartFromCode(e){if(e=nt(e),!e||!e.includes("-"))return null;const i=e.split("-");return i.length===2||(i.pop(),i[i.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(i.join("-"))}getLanguagePartFromCode(e){if(e=nt(e),!e||!e.includes("-"))return e;const i=e.split("-");return this.formatLanguageCode(i[0])}formatLanguageCode(e){if(j(e)&&e.includes("-")){let i;try{i=Intl.getCanonicalLocales(e)[0]}catch{}return i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let i;return e.forEach(o=>{if(i)return;const s=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(s))&&(i=s)}),!i&&this.options.supportedLngs&&e.forEach(o=>{if(i)return;const s=this.getScriptPartFromCode(o);if(this.isSupportedCode(s))return i=s;const r=this.getLanguagePartFromCode(o);if(this.isSupportedCode(r))return i=r;i=this.options.supportedLngs.find(n=>n===r?!0:!n.includes("-")&&!r.includes("-")?!1:!!(n.includes("-")&&!r.includes("-")&&n.slice(0,n.indexOf("-"))===r||n.startsWith(r)&&r.length>1))}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}getFallbackCodes(e,i){if(!e)return[];if(typeof e=="function"&&(e=e(i)),j(e)&&(e=[e]),Array.isArray(e))return e;if(!i)return e.default||[];let o=e[i];return o||(o=e[this.getScriptPartFromCode(i)]),o||(o=e[this.formatLanguageCode(i)]),o||(o=e[this.getLanguagePartFromCode(i)]),o||(o=e.default),o||[]}toResolveHierarchy(e,i){const o=this.getFallbackCodes((i===!1?[]:i)||this.options.fallbackLng||[],e),s=[],r=n=>{n&&(this.isSupportedCode(n)?s.push(n):this.logger.warn(`rejecting language code not found in supportedLngs: ${n}`))};return j(e)&&(e.includes("-")||e.includes("_"))?(this.options.load!=="languageOnly"&&r(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&r(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&r(this.getLanguagePartFromCode(e))):j(e)&&r(this.formatLanguageCode(e)),o.forEach(n=>{s.includes(n)||r(this.formatLanguageCode(n))}),s}}const oo={zero:0,one:1,two:2,few:3,many:4,other:5},so={select:t=>t===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class xr{constructor(e,i={}){this.languageUtils=e,this.options=i,this.logger=me.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,i={}){const o=nt(e==="dev"?"en":e),s=i.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:o,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];let n;try{n=new Intl.PluralRules(o,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),so;if(!e.match(/-|_/))return so;const a=this.languageUtils.getLanguagePartFromCode(e);n=this.getRule(a,i)}return this.pluralRulesCache[r]=n,n}needsPlural(e,i={}){let o=this.getRule(e,i);return o||(o=this.getRule("dev",i)),(o==null?void 0:o.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,i,o={}){return this.getSuffixes(e,o).map(s=>`${i}${s}`)}getSuffixes(e,i={}){let o=this.getRule(e,i);return o||(o=this.getRule("dev",i)),o?o.resolvedOptions().pluralCategories.sort((s,r)=>oo[s]-oo[r]).map(s=>`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(e,i,o={}){const s=this.getRule(e,o);return s?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${s.select(i)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",i,o))}}const ro=(t,e,i,o=".",s=!0)=>{let r=dr(t,e,i);return!r&&s&&j(i)&&(r=hi(t,i,o),r===void 0&&(r=hi(e,i,o))),r},ii=t=>t.replace(/\$/g,"$$$$");class no{constructor(e={}){var i;this.logger=me.create("interpolator"),this.options=e,this.format=((i=e==null?void 0:e.interpolation)==null?void 0:i.format)||(o=>o),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:i,escapeValue:o,useRawValueToEscape:s,prefix:r,prefixEscaped:n,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:d,unescapePrefix:p,nestingPrefix:u,nestingPrefixEscaped:b,nestingSuffix:h,nestingSuffixEscaped:_,nestingOptionsSeparator:C,maxReplaces:U,alwaysFormat:w}=e.interpolation;this.escape=i!==void 0?i:ur,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=r?be(r):n||"{{",this.suffix=a?be(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=d?"":p?be(p):"-",this.unescapeSuffix=this.unescapePrefix?"":d?be(d):"",this.nestingPrefix=u?be(u):b||be("$t("),this.nestingSuffix=h?be(h):_||be(")"),this.nestingOptionsSeparator=C||",",this.maxReplaces=U||1e3,this.alwaysFormat=w!==void 0?w:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(i,o)=>(i==null?void 0:i.source)===o?(i.lastIndex=0,i):new RegExp(o,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,i,o,s){var r;let n,a,l;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=b=>{if(!b.includes(this.formatSeparator)){const U=ro(i,c,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(U,void 0,o,{...s,...i,interpolationkey:b}):U}const h=b.split(this.formatSeparator),_=h.shift().trim(),C=h.join(this.formatSeparator).trim();return this.format(ro(i,c,_,this.options.keySeparator,this.options.ignoreJSONStructure),C,o,{...s,...i,interpolationkey:_})};this.resetRegExp(),!this.escapeValue&&typeof e=="string"&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const p=(s==null?void 0:s.missingInterpolationHandler)||this.options.missingInterpolationHandler,u=((r=s==null?void 0:s.interpolation)==null?void 0:r.skipOnVariables)!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>ii(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?ii(this.escape(b)):ii(b)}].forEach(b=>{for(l=0;n=b.regex.exec(e);){const h=n[1].trim();if(a=d(h),a===void 0)if(typeof p=="function"){const C=p(e,n,s);a=j(C)?C:""}else if(s&&Object.prototype.hasOwnProperty.call(s,h))a="";else if(u){a=n[0];continue}else this.logger.warn(`missed to pass in variable ${h} for interpolating ${e}`),a="";else!j(a)&&!this.useRawValueToEscape&&(a=Ji(a));const _=b.safeValue(a);if(e=e.replace(n[0],_),u?(b.regex.lastIndex+=a.length,b.regex.lastIndex-=n[0].length):b.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,i,o={}){let s,r,n;const a=(l,c)=>{const d=this.nestingOptionsSeparator;if(!l.includes(d))return l;const p=l.split(new RegExp(`${be(d)}[ ]*{`));let u=`{${p[1]}`;l=p[0],u=this.interpolate(u,n);const b=u.match(/'/g),h=u.match(/"/g);(((b==null?void 0:b.length)??0)%2===0&&!h||((h==null?void 0:h.length)??0)%2!==0)&&(u=u.replace(/'/g,'"'));try{n=JSON.parse(u),c&&(n={...c,...n})}catch(_){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,_),`${l}${d}${u}`}return n.defaultValue&&n.defaultValue.includes(this.prefix)&&delete n.defaultValue,l};for(;s=this.nestingRegexp.exec(e);){let l=[];n={...o},n=n.replace&&!j(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;const c=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(c!==-1&&(l=s[1].slice(c).split(this.formatSeparator).map(d=>d.trim()).filter(Boolean),s[1]=s[1].slice(0,c)),r=i(a.call(this,s[1].trim(),n),n),r&&s[0]===e&&!j(r))return r;j(r)||(r=Ji(r)),r||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),r=""),l.length&&(r=l.reduce((d,p)=>this.format(d,p,o.lng,{...o,interpolationkey:s[1].trim()}),r.trim())),e=e.replace(s[0],r),this.regexp.lastIndex=0}return e}}const yr=t=>{let e=t.toLowerCase().trim();const i={};if(t.includes("(")){const o=t.split("(");e=o[0].toLowerCase().trim();const s=o[1].slice(0,-1);e==="currency"&&!s.includes(":")?i.currency||(i.currency=s.trim()):e==="relativetime"&&!s.includes(":")?i.range||(i.range=s.trim()):s.split(";").forEach(r=>{if(r){const[n,...a]=r.split(":"),l=a.join(":").trim().replace(/^'+|'+$/g,""),c=n.trim();i[c]||(i[c]=l),l==="false"&&(i[c]=!1),l==="true"&&(i[c]=!0),isNaN(l)||(i[c]=parseInt(l,10))}})}return{formatName:e,formatOptions:i}},ao=t=>{const e={};return(i,o,s)=>{let r=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(r={...r,[s.interpolationkey]:void 0});const n=o+JSON.stringify(r);let a=e[n];return a||(a=t(nt(o),s),e[n]=a),a(i)}},wr=t=>(e,i,o)=>t(nt(i),o)(e);class _r{constructor(e={}){this.logger=me.create("formatter"),this.options=e,this.init(e)}init(e,i={interpolation:{}}){this.formatSeparator=i.interpolation.formatSeparator||",";const o=i.cacheInBuiltFormats?ao:wr;this.formats={number:o((s,r)=>{const n=new Intl.NumberFormat(s,{...r});return a=>n.format(a)}),currency:o((s,r)=>{const n=new Intl.NumberFormat(s,{...r,style:"currency"});return a=>n.format(a)}),datetime:o((s,r)=>{const n=new Intl.DateTimeFormat(s,{...r});return a=>n.format(a)}),relativetime:o((s,r)=>{const n=new Intl.RelativeTimeFormat(s,{...r});return a=>n.format(a,r.range||"day")}),list:o((s,r)=>{const n=new Intl.ListFormat(s,{...r});return a=>n.format(a)})}}add(e,i){this.formats[e.toLowerCase().trim()]=i}addCached(e,i){this.formats[e.toLowerCase().trim()]=ao(i)}format(e,i,o,s={}){if(!i||e==null)return e;const r=i.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&!r[0].includes(")")&&r.find(n=>n.includes(")"))){const n=r.findIndex(a=>a.includes(")"));r[0]=[r[0],...r.splice(1,n)].join(this.formatSeparator)}return r.reduce((n,a)=>{var l;const{formatName:c,formatOptions:d}=yr(a);if(this.formats[c]){let p=n;try{const u=((l=s==null?void 0:s.formatParams)==null?void 0:l[s.interpolationkey])||{},b=u.locale||u.lng||s.locale||s.lng||o;p=this.formats[c](n,b,{...d,...s,...u})}catch(u){this.logger.warn(u)}return p}else this.logger.warn(`there was no format function for ${c}`);return n},e)}}const kr=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class Sr extends Kt{constructor(e,i,o,s={}){var r,n;super(),this.backend=e,this.store=i,this.services=o,this.languageUtils=o.languageUtils,this.options=s,this.logger=me.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],(n=(r=this.backend)==null?void 0:r.init)==null||n.call(r,o,s.backend,s)}queueLoad(e,i,o,s){const r={},n={},a={},l={};return e.forEach(c=>{let d=!0;i.forEach(p=>{const u=`${c}|${p}`;!o.reload&&this.store.hasResourceBundle(c,p)?this.state[u]=2:this.state[u]<0||(this.state[u]===1?n[u]===void 0&&(n[u]=!0):(this.state[u]=1,d=!1,n[u]===void 0&&(n[u]=!0),r[u]===void 0&&(r[u]=!0),l[p]===void 0&&(l[p]=!0)))}),d||(a[c]=!0)}),(Object.keys(r).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(n),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,i,o){const s=e.split("|"),r=s[0],n=s[1];i&&this.emit("failedLoading",r,n,i),!i&&o&&this.store.addResourceBundle(r,n,o,void 0,void 0,{skipCopy:!0}),this.state[e]=i?-1:2,i&&o&&(this.state[e]=0);const a={};this.queue.forEach(l=>{cr(l.loaded,[r],n),kr(l,e),i&&l.errors.push(i),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const d=l.loaded[c];d.length&&d.forEach(p=>{a[c][p]===void 0&&(a[c][p]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,i,o,s=0,r=this.retryTimeout,n){if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:i,fcName:o,tried:s,wait:r,callback:n});return}this.readingCalls++;const a=(c,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(c&&d&&s<this.maxRetries){setTimeout(()=>{this.read(e,i,o,s+1,r*2,n)},r);return}n(c,d)},l=this.backend[o].bind(this.backend);if(l.length===2){try{const c=l(e,i);c&&typeof c.then=="function"?c.then(d=>a(null,d)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,i,a)}prepareLoading(e,i,o={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();j(e)&&(e=this.languageUtils.toResolveHierarchy(e)),j(i)&&(i=[i]);const r=this.queueLoad(e,i,o,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach(n=>{this.loadOne(n)})}load(e,i,o){this.prepareLoading(e,i,{},o)}reload(e,i,o){this.prepareLoading(e,i,{reload:!0},o)}loadOne(e,i=""){const o=e.split("|"),s=o[0],r=o[1];this.read(s,r,"read",void 0,void 0,(n,a)=>{n&&this.logger.warn(`${i}loading namespace ${r} for language ${s} failed`,n),!n&&a&&this.logger.log(`${i}loaded namespace ${r} for language ${s}`,a),this.loaded(e,n,a)})}saveMissing(e,i,o,s,r,n={},a=()=>{}){var l,c,d,p,u;if((c=(l=this.services)==null?void 0:l.utils)!=null&&c.hasLoadedNamespace&&!((p=(d=this.services)==null?void 0:d.utils)!=null&&p.hasLoadedNamespace(i))){this.logger.warn(`did not save key "${o}" as the namespace "${i}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if((u=this.backend)!=null&&u.create){const b={...n,isUpdate:r},h=this.backend.create.bind(this.backend);if(h.length<6)try{let _;h.length===5?_=h(e,i,o,s,b):_=h(e,i,o,s),_&&typeof _.then=="function"?_.then(C=>a(null,C)).catch(a):a(null,_)}catch(_){a(_)}else h(e,i,o,s,a,b)}!e||!e[0]||this.store.addResource(e[0],i,o,s)}}}const oi=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),j(t[1])&&(e.defaultValue=t[1]),j(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const i=t[3]||t[2];Object.keys(i).forEach(o=>{e[o]=i[o]})}return e},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),lo=t=>(j(t.ns)&&(t.ns=[t.ns]),j(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),j(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&!t.supportedLngs.includes("cimode")&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),wt=()=>{},$r=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(e=>{typeof t[e]=="function"&&(t[e]=t[e].bind(t))})};class rt extends Kt{constructor(e={},i){if(super(),this.options=lo(e),this.services={},this.logger=me,this.modules={external:[]},$r(this),i&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,i),this;setTimeout(()=>{this.init(e,i)},0)}}init(e={},i){this.isInitializing=!0,typeof e=="function"&&(i=e,e={}),e.defaultNS==null&&e.ns&&(j(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const o=oi();this.options={...o,...this.options,...lo(e)},this.options.interpolation={...o.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler);const s=a=>a?typeof a=="function"?new a:a:null;if(!this.options.isClone){this.modules.logger?me.init(s(this.modules.logger),this.options):me.init(null,this.options);let a;this.modules.formatter?a=this.modules.formatter:a=_r;const l=new io(this.options);this.store=new to(this.options.resources,this.options);const c=this.services;c.logger=me,c.resourceStore=this.store,c.languageUtils=l,c.pluralResolver=new xr(l,{prepend:this.options.pluralSeparator}),a&&(c.formatter=s(a),c.formatter.init&&c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new no(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new Sr(s(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",(d,...p)=>{this.emit(d,...p)}),this.modules.languageDetector&&(c.languageDetector=s(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=s(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new It(this.services,this.options),this.translator.on("*",(d,...p)=>{this.emit(d,...p)}),this.modules.external.forEach(d=>{d.init&&d.init(this)})}if(this.format=this.options.interpolation.format,i||(i=wt),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const a=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);a.length>0&&a[0]!=="dev"&&(this.options.lng=a[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(a=>{this[a]=(...l)=>this.store[a](...l)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(a=>{this[a]=(...l)=>(this.store[a](...l),this)});const r=Xe(),n=()=>{const a=(l,c)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),r.resolve(c),i(l,c)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return a(null,this.t.bind(this));this.changeLanguage(this.options.lng,a)};return this.options.resources||!this.options.initAsync?n():setTimeout(n,0),r}loadResources(e,i=wt){var o,s;let r=i;const n=j(e)?e:this.language;if(typeof e=="function"&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if((n==null?void 0:n.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const a=[],l=c=>{!c||c==="cimode"||this.services.languageUtils.toResolveHierarchy(c).forEach(d=>{d!=="cimode"&&(a.includes(d)||a.push(d))})};n?l(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(c=>l(c)),(s=(o=this.options.preload)==null?void 0:o.forEach)==null||s.call(o,c=>l(c)),this.services.backendConnector.load(a,this.options.ns,c=>{!c&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(c)})}else r(null)}reloadResources(e,i,o){const s=Xe();return typeof e=="function"&&(o=e,e=void 0),typeof i=="function"&&(o=i,i=void 0),e||(e=this.languages),i||(i=this.options.ns),o||(o=wt),this.services.backendConnector.reload(e,i,r=>{s.resolve(),o(r)}),s}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&is.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!["cimode","dev"].includes(e)){for(let i=0;i<this.languages.length;i++){const o=this.languages[i];if(!["cimode","dev"].includes(o)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,i){this.isLanguageChangingTo=e;const o=Xe();this.emit("languageChanging",e);const s=a=>{this.language=a,this.languages=this.services.languageUtils.toResolveHierarchy(a),this.resolvedLanguage=void 0,this.setResolvedLanguage(a)},r=(a,l)=>{l?this.isLanguageChangingTo===e&&(s(l),this.translator.changeLanguage(l),this.isLanguageChangingTo=void 0,this.emit("languageChanged",l),this.logger.log("languageChanged",l)):this.isLanguageChangingTo=void 0,o.resolve((...c)=>this.t(...c)),i&&i(a,(...c)=>this.t(...c))},n=a=>{var l,c;!e&&!a&&this.services.languageDetector&&(a=[]);const d=j(a)?a:a&&a[0],p=this.store.hasLanguageSomeTranslations(d)?d:this.services.languageUtils.getBestMatchFromCodes(j(a)?[a]:a);p&&(this.language||s(p),this.translator.language||this.translator.changeLanguage(p),(c=(l=this.services.languageDetector)==null?void 0:l.cacheUserLanguage)==null||c.call(l,p)),this.loadResources(p,u=>{r(u,p)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?n(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(n):this.services.languageDetector.detect(n):n(e),o}getFixedT(e,i,o,s){const r=s==null?void 0:s.scopeNs,n=(a,l,...c)=>{let d;typeof l!="object"?d=this.options.overloadTranslationOptionHandler([a,l].concat(c)):d={...l},d.lng=d.lng||n.lng,d.lngs=d.lngs||n.lngs;const p=d.ns!==void 0&&d.ns!==null;d.ns=d.ns||n.ns,d.keyPrefix!==""&&(d.keyPrefix=d.keyPrefix||o||n.keyPrefix);const u={...this.options,...d};Array.isArray(r)&&!p&&(u.ns=r),typeof d.keyPrefix=="function"&&(d.keyPrefix=Me(d.keyPrefix,u));const b=this.options.keySeparator||".";let h;return d.keyPrefix&&Array.isArray(a)?h=a.map(_=>(typeof _=="function"&&(_=Me(_,u)),`${d.keyPrefix}${b}${_}`)):(typeof a=="function"&&(a=Me(a,u)),h=d.keyPrefix?`${d.keyPrefix}${b}${a}`:a),this.t(h,d)};return j(e)?n.lng=e:n.lngs=e,n.ns=i,n.keyPrefix=o,n}t(...e){var i;return(i=this.translator)==null?void 0:i.translate(...e)}exists(...e){var i;return(i=this.translator)==null?void 0:i.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,i={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=i.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,r=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const n=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(i.precheck){const a=i.precheck(this,n);if(a!==void 0)return a}return!!(this.hasResourceBundle(o,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||n(o,e)&&(!s||n(r,e)))}loadNamespaces(e,i){const o=Xe();return this.options.ns?(j(e)&&(e=[e]),e.forEach(s=>{this.options.ns.includes(s)||this.options.ns.push(s)}),this.loadResources(s=>{o.resolve(),i&&i(s)}),o):(i&&i(),Promise.resolve())}loadLanguages(e,i){const o=Xe();j(e)&&(e=[e]);const s=this.options.preload||[],r=e.filter(n=>!s.includes(n)&&this.services.languageUtils.isSupportedCode(n));return r.length?(this.options.preload=s.concat(r),this.loadResources(n=>{o.resolve(),i&&i(n)}),o):(i&&i(),Promise.resolve())}dir(e){var i,o;if(e||(e=this.resolvedLanguage||(((i=this.languages)==null?void 0:i.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const n=new Intl.Locale(e);if(n&&n.getTextInfo){const a=n.getTextInfo();if(a&&a.direction)return a.direction}}catch{}const s=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=((o=this.services)==null?void 0:o.languageUtils)||new io(oi());return e.toLowerCase().indexOf("-latn")>1?"ltr":s.includes(r.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},i){const o=new rt(e,i);return o.createInstance=rt.createInstance,o}cloneInstance(e={},i=wt){const o=e.forkResourceStore;o&&delete e.forkResourceStore;const s={...this.options,...e,isClone:!0},r=new rt(s);if((e.debug!==void 0||e.prefix!==void 0)&&(r.logger=r.logger.clone(e)),["store","services","language"].forEach(n=>{r[n]=this[n]}),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},o){const n=Object.keys(this.store.data).reduce((a,l)=>(a[l]={...this.store.data[l]},a[l]=Object.keys(a[l]).reduce((c,d)=>(c[d]={...a[l][d]},c),a[l]),a),{});r.store=new to(n,s),r.services.resourceStore=r.store}if(e.interpolation){const n={...oi().interpolation,...this.options.interpolation,...e.interpolation},a={...s,interpolation:n};r.services.interpolator=new no(a)}return r.translator=new It(r.services,s),r.translator.on("*",(n,...a)=>{r.emit(n,...a)}),r.init(s,i),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ie=rt.createInstance();ie.createInstance;ie.dir;ie.init;ie.loadResources;ie.reloadResources;ie.use;ie.changeLanguage;ie.getFixedT;ie.t;ie.exists;ie.setDefaultNamespace;ie.hasLoadedNamespace;ie.loadNamespaces;ie.loadLanguages;const ss=["__proto__","constructor","prototype"];function rs(t){return!(typeof t!="string"||t.length===0||t.length>128||ss.indexOf(t)>-1||t.indexOf("..")>-1||t.indexOf("\\")>-1||/[?#%\s@]/.test(t)||/[\x00-\x1F\x7F]/.test(t))}function ns(t){return!(!rs(t)||t.indexOf("/")>-1)}function Cr(t){return rs(t)}const Pr={lng:ns,ns:Cr};function _t(t){return typeof t!="string"?t:t.replace(/[\r\n\x00-\x1F\x7F]/g," ")}function Er(t){if(typeof t!="string"||t.length===0)return t;try{const e=new URL(t);return e.username||e.password?(e.username="",e.password="",e.toString()):t}catch{return t.replace(/(\/\/)[^/@\s]+@/g,"$1")}}function as(){return typeof XMLHttpRequest=="function"||typeof XMLHttpRequest=="object"}function Ur(t){return!!t&&typeof t.then=="function"}function Rr(t){return Ur(t)?t:Promise.resolve(t)}const Or=/\{\{(.+?)\}\}/g;function co(t,e){let i=!1;const o=t.replace(Or,(s,r)=>{const n=r.trim();if(ss.indexOf(n)>-1)return s;const a=e[n];if(a==null)return s;const l=Pr[n]||ns,c=String(a).split("+");for(const d of c)if(!l(d))return i=!0,s;return c.join("+")});return i?null:o}const Ee=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:void 0;let jt;typeof fetch=="function"?jt=fetch:Ee&&typeof Ee.fetch=="function"&&(jt=Ee.fetch);const po=as()&&Ee?Ee.XMLHttpRequest:void 0,Tr=typeof ActiveXObject=="function"&&Ee?Ee.ActiveXObject:void 0,ls=["__proto__","constructor","prototype"],fi=(t,e)=>{if(e&&typeof e=="object"){let i="";for(const o of Object.keys(e))ls.indexOf(o)>-1||(i+="&"+encodeURIComponent(o)+"="+encodeURIComponent(e[o]));if(!i)return t;t=t+(t.indexOf("?")!==-1?"&":"?")+i.slice(1)}return t},uo=(t,e,i,o)=>{const s=r=>{if(!r.ok)return i(r.statusText||"Error",{status:r.status});r.text().then(n=>{i(null,{status:r.status,data:n})}).catch(i)};if(o){const r=o(t,e);if(r instanceof Promise){r.then(s).catch(i);return}}typeof fetch=="function"?fetch(t,e).then(s).catch(i):jt(t,e).then(s).catch(i)},Fr=(t,e,i,o)=>{t.queryStringParams&&(e=fi(e,t.queryStringParams));const s={...typeof t.customHeaders=="function"?t.customHeaders():t.customHeaders};typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(s["User-Agent"]=`i18next-http-backend (node/${global.process.version}; ${global.process.platform} ${global.process.arch})`),i&&(s["Content-Type"]="application/json");const r=typeof t.requestOptions=="function"?t.requestOptions(i):t.requestOptions,n={method:i?"POST":"GET",body:i?t.stringify(i):void 0,headers:s,...t._omitFetchOptions?{}:r},a=typeof t.alternateFetch=="function"&&t.alternateFetch.length>=1?t.alternateFetch:void 0;try{uo(e,n,o,a)}catch(l){if(!r||Object.keys(r).length===0||!l.message||l.message.indexOf("not implemented")<0)return o(l);try{Object.keys(r).forEach(c=>{delete n[c]}),uo(e,n,o,a),t._omitFetchOptions=!0}catch(c){o(c)}}},Lr=(t,e,i,o)=>{i&&typeof i=="object"&&(i=fi("",i).slice(1)),t.queryStringParams&&(e=fi(e,t.queryStringParams));try{const s=po?new po:new Tr("MSXML2.XMLHTTP.3.0");s.open(i?"POST":"GET",e,1),t.crossDomain||s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.withCredentials=!!t.withCredentials,i&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.overrideMimeType&&s.overrideMimeType("application/json");let r=t.customHeaders;if(r=typeof r=="function"?r():r,r)for(const n of Object.keys(r))ls.indexOf(n)>-1||s.setRequestHeader(n,r[n]);s.onreadystatechange=()=>{s.readyState>3&&o(s.status>=400?s.statusText:null,{status:s.status,data:s.responseText})},s.send(i)}catch(s){console&&console.log(s)}},zr=(t,e,i,o)=>{if(typeof i=="function"&&(o=i,i=void 0),o=o||(()=>{}),jt&&e.indexOf("file:")!==0)return Fr(t,e,i,o);if(as()||typeof ActiveXObject=="function")return Lr(t,e,i,o);o(new Error("No fetch and no xhr implementation found!"))},Ir=()=>({loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:t=>JSON.parse(t),stringify:JSON.stringify,parsePayload:(t,e,i)=>({[e]:i||""}),parseLoadPayload:(t,e)=>{},request:zr,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}});var cs=class{constructor(t,e={},i={}){this.services=t,this.options=e,this.allOptions=i,this.type="backend",this.init(t,e,i)}init(t,e={},i={}){if(this.services=t,this.options={...Ir(),...this.options||{},...e},this.allOptions=i,this.services&&this.options.reloadInterval){const o=setInterval(()=>this.reload(),this.options.reloadInterval);typeof o=="object"&&typeof o.unref=="function"&&o.unref()}}readMulti(t,e,i){this._readAny(t,t,e,e,i)}read(t,e,i){this._readAny([t],t,[e],e,i)}_readAny(t,e,i,o,s){let r=this.options.loadPath;typeof this.options.loadPath=="function"&&(r=this.options.loadPath(t,i)),r=Rr(r),r.then(n=>{if(!n)return s(null,{});const a=co(n,{lng:t.join("+"),ns:i.join("+")});if(a==null){const l=t.map(_t).join(", "),c=i.map(_t).join(", ");return s(new Error("i18next-http-backend: unsafe lng/ns value — refusing to build request URL for languages=["+l+"] namespaces=["+c+"]"),!1)}this.loadUrl(a,s,e,o)})}loadUrl(t,e,i,o){const s=typeof i=="string"?[i]:i,r=typeof o=="string"?[o]:o,n=this.options.parseLoadPayload(s,r),a=_t(Er(t));this.options.request(this.options,t,n,(l,c)=>{if(c&&(c.status>=500&&c.status<600||!c.status))return e("failed loading "+a+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return e("failed loading "+a+"; status code: "+c.status,!1);if(!c&&l&&l.message){const u=l.message.toLowerCase();if(["failed","fetch","network","load"].find(b=>u.indexOf(b)>-1))return e("failed loading "+a+": "+_t(l.message),!0)}if(l)return e(l,!1);let d,p;try{typeof c.data=="string"?d=this.options.parse(c.data,i,o):d=c.data}catch{p="failed parsing "+a+" to json"}if(p)return e(p,!1);e(null,d)})}create(t,e,i,o,s){if(!this.options.addPath)return;typeof t=="string"&&(t=[t]);const r=this.options.parsePayload(e,i,o);let n=0;const a=[],l=[];t.forEach(c=>{let d=this.options.addPath;typeof this.options.addPath=="function"&&(d=this.options.addPath(c,e));const p=co(d,{lng:c,ns:e});if(p==null){n+=1,s&&n===t.length&&s(a,l);return}this.options.request(this.options,p,r,(u,b)=>{n+=1,a.push(u),l.push(b),n===t.length&&typeof s=="function"&&s(a,l)})})}reload(){const{backendConnector:t,languageUtils:e,logger:i}=this.services,o=t.language;if(o&&o.toLowerCase()==="cimode")return;const s=[],r=n=>{e.toResolveHierarchy(n).forEach(a=>{s.indexOf(a)<0&&s.push(a)})};r(o),this.allOptions.preload&&this.allOptions.preload.forEach(n=>r(n)),s.forEach(n=>{this.allOptions.ns.forEach(a=>{t.read(n,a,"read",null,null,(l,c)=>{l&&i.warn(`loading namespace ${a} for language ${n} failed`,l),!l&&c&&i.log(`loaded namespace ${a} for language ${n}`,c),t.loaded(`${n}|${a}`,l,c)})})})}};cs.type="backend";const ds="f7b2366e-fcb6-4f1a-8f23-8de48422989a",jr="https://i18n-fastly.ultrafast.io",Dr="https://neo.wordplex.io",gi="uploader";let ge=null;const mi=new Set;function kt(){for(const t of mi)t()}function Ar(t){return mi.add(t),()=>mi.delete(t)}async function Mr(t="en"){return ge?(ge.language!==t&&(await ge.changeLanguage(t),kt()),{i18n:ge,isNew:!1}):(ge=ie.createInstance(),await ge.use(cs).init({lng:t,fallbackLng:"en",ns:[gi],defaultNS:gi,saveMissing:!0,missingKeyNoValueFallbackToKey:!1,interpolation:{escapeValue:!1},backend:{addPath:"",loadPath:`${jr}/api/export/grid/f2/${ds}?langs={{lng}}&separator=+&response_format=i18next_multi`,parse(e,i){var o;const s=JSON.parse(e),r=Array.isArray(i)?i[0]:i;return r&&(o=s[r])!=null&&o.__without_namespace?s[r].__without_namespace:s}}}),ge.on("languageChanged",kt),ge.on("loaded",kt),kt(),{i18n:ge,isNew:!0})}function Br(){return ge}const Hr="sfxUploaderTranslationsMissingKeysEnabled";class Nr{constructor(){this.enabled=!1,this._missingKeys={},this._timer=null,this.debounceDelay=2e3,this.enabled=typeof localStorage<"u"&&localStorage.getItem(Hr)==="true",this.enabled&&console.log("%c[uploader] TranslationMissingKeysHelper enabled","font-weight:600;"),this._missingKeys=new Proxy(this._missingKeys,{set:(e,i,o,s)=>(this._timer&&clearTimeout(this._timer),this._timer=setTimeout(()=>this._renderCurl(),this.debounceDelay),Reflect.set(e,i,o,s))})}handleMissingKey(e,i="",o=gi){if(!this.enabled)return;const s=`${o}:${e}`;this._missingKeys[s]={value:i,ns:o}}_renderCurl(){console.group("[uploader] Missing translation keys"),console.log("%cMissing keys:","font-weight:600;font-size:200%;"),console.table({...this._missingKeys}),console.log("%ccURL (check carefully data before send):","font-weight:600;font-size:150%;"),console.log(`
curl '${Dr}/api/import/request-translations' \\
  --data-raw '{"grid_uuid":"${ds}","translations_requests":${JSON.stringify(Object.entries(this._missingKeys).map(([e,{value:i,ns:o}])=>({key:o&&e.startsWith(`${o}:`)?e.slice(o.length+1):e,lang:"en",default:i}))).replaceAll("'","'\\''")}}'
    `),console.groupEnd()}}const qr=new Nr,si=(t,e)=>t.replace(/\{\{(\w+)\}\}/g,(i,o)=>String(e[o]??"")),de=(t,e,i)=>{if(typeof e=="string")return si(e,i??{});if(typeof e=="object"&&e!==null){const o=e,s=o.count;if(s!==void 0){const r=String((s===1?o.defaultValue_one:o.defaultValue_other)??o.defaultValue??t);return si(r,o)}return si(String(o.defaultValue??t),o)}return t},$e=(t,e,i)=>{const o=Br();return!o||!o.isInitialized?de(t,e,i):typeof e=="string"?o.t(t,e,i??{}):o.t(t,e??{})},ri=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);class Vr extends qt{constructor(e){if(super(e),this._appliedProps=new Set,e.type!==Vt.ELEMENT)throw new Error("cspStyle must be used as an element directive: <el ${cspStyle({...})}>")}render(e){return Ae}update(e,[i]){if(i===this._lastStyles)return Ae;this._lastStyles=i;const{style:o}=e.element,s=i??{};for(const r of this._appliedProps)(!(r in s)||s[r]==null||s[r]==="")&&(o.removeProperty(ri(r)),this._appliedProps.delete(r));for(const[r,n]of Object.entries(s))n!=null&&n!==""?(o.setProperty(ri(r),n),this._appliedProps.add(r)):this._appliedProps.has(r)&&(o.removeProperty(ri(r)),this._appliedProps.delete(r));return Ae}}const Y=ft(Vr);function Kr(t,e){var i,o,s;const r=(i=e==null?void 0:e.getLocateUrl)==null?void 0:i.call(e,t);if(r)return r;const n=(e==null?void 0:e.adminUrl)??(typeof window<"u"?window.location.origin:void 0);if(!n)return null;const a=(s=(o=t.response)==null?void 0:o.file)==null?void 0:s.uuid;return a?`${n.replace(/\/+$/,"")}/library?lf=${encodeURIComponent(btoa(a))}`:null}const ps=_e`<line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" /><line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" /><circle cx="12" cy="12" r="7" />`,ni=f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ps}</svg>`;class Yr{constructor(e){this.listeners=new Set,this._notifying=!1,this._pendingState=null,this.state=e}getState(){return this.state}setState(e){if(this._notifying){this._pendingState={...this._pendingState||{},...e};return}const i=this.state;this.state={...i,...e},this._notifying=!0;try{this.listeners.forEach(o=>o(this.state,i))}finally{this._notifying=!1}if(this._pendingState){const o=this._pendingState;this._pendingState=null,this.setState(o)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}destroy(){this.listeners.clear()}}function Z(t,e,i){const o=t.getState().files,s=o.get(e);if(!s)return;const r=new Map(o);r.set(e,{...s,...i}),t.setState({files:r})}function Te(t,e){const i=new Map(t.getState().files);i.set(e.id,e),t.setState({files:i})}function ho(t,e){const i=t.getState().files;if(!i.has(e))return;const o=new Map(i);o.delete(e),t.setState({files:o})}function Gr(){return new Yr({files:new Map,queueConfig:{concurrency:3,autoProceed:!1,retryConfig:{maxRetries:0,baseDelay:1e3,maxDelay:3e4,backoffFactor:2}},isPaused:!1,restrictions:{maxFileSize:null,maxTotalFilesSize:null,maxNumberOfFiles:null,minNumberOfFiles:null,allowedFileTypes:null,blockedFileTypes:null},targetFolder:"/",totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0,isUploading:!1,t:de})}class Wr{constructor(e,i){this.host=e,this.store=i,e.addController(this)}get state(){return this.store.getState()}setState(e){this.store.setState(e)}hostConnected(){this.unsubscribe=this.store.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this)}}const Xr="SAME_ASSET_EXISTS_SKIP_UPLOAD",Jr="ERROR_SHA1_CONFLICT";function gt(t){return(t==null?void 0:t.code)===Xr||(t==null?void 0:t.code)===Jr}function Oi(t,e){return{...t,status:"success",file:t.file??{uuid:t.existing_file_uuid??"",name:e.name,extension:e.name.split(".").pop()??"",type:e.type,size:e.size,url:{public:"",cdn:""},meta:{},tags:[],info:{},created_at:"",modified_at:""}}}function Dt(t,e){var i,o,s,r,n;return((o=(i=t==null?void 0:t.info)==null?void 0:i.msg)==null?void 0:o.trim())||((s=t==null?void 0:t.msg)==null?void 0:s.trim())||((r=t==null?void 0:t.hint)==null?void 0:r.trim())||((n=t==null?void 0:t.message)==null?void 0:n.trim())||e}const Zr=/[!#$%^&*()=+{}\[\];"<>\\,\/?~\t\n\r\s`]/;function Ti(t){return t?t.ref!=null&&t.ref!==""||t.position!=null:!1}function Fi(t){const e={};return(t==null?void 0:t.ref)!=null&&t.ref!==""&&(e.ref=t.ref),(t==null?void 0:t.position)!=null&&(e.position=t.position),e}function fo(t,e){const i={...t??{}};for(const o of Object.keys(e)){const s=e[o];s===void 0?delete i[o]:i[o]=s}return i}function Qr(t,e,i){let o=`${t.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(i)for(const[s,r]of Object.entries(i))r!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(r)}`);return o}function en(t,e){const i=new XMLHttpRequest;let o=!1;const s=Qr(e.apiBase,e.folder,e.extraParams);i.open("POST",s);for(const[n,a]of Object.entries(e.authHeaders))i.setRequestHeader(n,a);i.upload.addEventListener("progress",n=>{n.lengthComputable&&!o&&e.onProgress(n.loaded,n.total)}),i.addEventListener("load",()=>{if(o)return;let n;try{n=JSON.parse(i.responseText)}catch{e.onError(new Error(`Invalid JSON response (HTTP ${i.status})`));return}i.status>=200&&i.status<300&&n.status==="success"?e.onComplete(n):gt(n)?e.onComplete(Oi(n,t)):e.onError(new Error(Dt(n,`Upload failed (HTTP ${i.status})`)))}),i.addEventListener("error",()=>{o||e.onError(new Error("Network error — check your connection"))});const r=new FormData;if(t.file){const n={name:t.name,type:t.type};r.append("info[files[]]",JSON.stringify(n)),Object.keys(t.meta).length>0&&r.append("meta[files[]]",JSON.stringify(t.meta)),t.tags.length>0&&r.append("tags[files[]]",JSON.stringify(t.tags)),Ti(t.product)&&r.append("product[files[]]",JSON.stringify(Fi(t.product))),r.append("files[]",t.file,t.name)}return i.send(r),{abort(){o=!0,i.abort()}}}function Yt(t){return{Accept:"application/json","Content-Type":"application/json","uppy-auth-token":t}}function ke(t){return t.replace(/\/+$/,"")}const tn={"google-drive":"drive",dropbox:"dropbox",onedrive:"onedrive",box:"box",instagram:"instagram",facebook:"facebook",unsplash:"unsplash"};function mt(t){return tn[t]??t}function Bc(t,e){const i=ke(t),o=btoa(JSON.stringify({origin:window.location.origin})),s=mt(e);return`${i}/${s}/connect?state=${encodeURIComponent(o)}`}async function on(t,e,i,o="",s){const r=ke(t),n=o?`/${o}`:"",a=mt(e),l=await fetch(`${r}/${a}/list${n}`,{method:"GET",headers:Yt(i),credentials:"same-origin",signal:s});if(l.status===401)throw new Li;if(!l.ok){const c=await l.json().catch(()=>null);throw new Error((c==null?void 0:c.message)||`Companion list failed (HTTP ${l.status})`)}return l.json()}async function sn(t,e,i,o){const s=ke(t),r=await fetch(`${s}/${i}`,{method:"GET",headers:Yt(e),credentials:"same-origin",signal:o});if(r.status===401)throw new Li;if(!r.ok){const n=await r.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion list failed (HTTP ${r.status})`)}return r.json()}async function Hc(t,e,i,o,s,r){const n=[];async function a(l,c){let d=null,p=!0;do{if(r!=null&&r.aborted)throw new DOMException("Aborted","AbortError");const u=p?await on(t,e,i,l,r):await sn(t,i,d,r);p=!1,d=u.nextPagePath;for(const b of u.items){if(r!=null&&r.aborted)throw new DOMException("Aborted","AbortError");if(b.isFolder){const h=c?`${c}/${b.name}`:b.name;await a(b.requestPath,h)}else n.push({...b,relativeFolder:c})}}while(d)}return await a(o,s),n}async function Nc(t,e,i,o){const s=ke(t),r=mt(e),n=o?`q=${encodeURIComponent(i)}&${o}`:`q=${encodeURIComponent(i)}`,a=await fetch(`${s}/search/${r}/list?${n}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"});if(!a.ok){const l=await a.json().catch(()=>null);throw new Error((l==null?void 0:l.message)||`Search failed (HTTP ${a.status})`)}return a.json()}async function rn(t,e,i,o,s,r=!1){const n=ke(t),a=mt(e),l=r?`${n}/search/${a}/get/${o}`:`${n}/${a}/get/${o}`,c=r?{Accept:"application/json","Content-Type":"application/json"}:Yt(i),d=await fetch(l,{method:"POST",headers:c,credentials:"same-origin",body:JSON.stringify({...s,httpMethod:s.httpMethod??"POST",useFormData:s.useFormData??!0,fieldname:s.fieldname??"files[]"})});if(d.status===401)throw new Li;if(!d.ok){const p=await d.json().catch(()=>null);throw new Error((p==null?void 0:p.message)||`Companion upload failed (HTTP ${d.status})`)}return d.json()}async function nn(t,e,i){const o=ke(t),s=await fetch(`${o}/url/meta`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e}),signal:i});if(!s.ok){const r=await s.json().catch(()=>null);throw new Error((r==null?void 0:r.message)||`Could not fetch URL metadata (HTTP ${s.status})`)}return s.json()}async function an(t,e,i,o){const s=ke(t),r=await fetch(`${s}/url/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({url:e,...i,httpMethod:"POST",useFormData:!0,fieldname:"files[]"}),signal:o});if(!r.ok){const n=await r.json().catch(()=>null);throw new Error((n==null?void 0:n.message)||`Companion URL upload failed (HTTP ${r.status})`)}return r.json()}async function qc(t,e,i){const o=ke(t),s=mt(e),r=await fetch(`${o}/${s}/logout`,{method:"GET",headers:Yt(i),credentials:"same-origin"});return r.ok?r.json():{ok:!1,revoked:!1}}function ln(t){var e;const i=((e=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(t))==null?void 0:e[1])??t;return`${/^https:\/\//i.test(t)?"wss":"ws"}://${i}`}class Li extends Error{constructor(){super("Authentication expired"),this.name="AuthExpiredError"}}function us(t,e,i){let o=`${t.replace(/\/+$/,"")}/v4/files?folder=${encodeURIComponent(e)}`;if(i)for(const[s,r]of Object.entries(i))r!=null&&(o+=`&${encodeURIComponent(s)}=${encodeURIComponent(r)}`);return o}function hs(t,e){const i={name:t.name,type:t.type,"filerobot-folder":e};return t.meta&&Object.keys(t.meta).length>0&&(i.meta=JSON.stringify(t.meta)),t.tags&&t.tags.length>0&&(i.tags=JSON.stringify(t.tags)),Ti(t.product)&&(i.product=JSON.stringify(Fi(t.product))),i}function fs(t){const e=`${ln(t.companionUrl)}/api/${t.token}`;let i;try{i=new WebSocket(e)}catch{return t.onError(new Error("Failed to connect to upload progress channel")),null}let o=!1;const s=()=>{o=!0,i.onmessage=null,i.onerror=null,i.onclose=null};return i.onmessage=r=>{var n,a,l;if(!o)try{const c=JSON.parse(r.data);switch(c.action){case"progress":{const d=c.payload,p=d.bytesUploaded??0,u=d.bytesTotal??(t.expectedSize||1);t.onProgress(p,u);break}case"success":{const d=c.payload;if(s(),i.close(),(n=d.response)!=null&&n.responseText)try{const p=JSON.parse(d.response.responseText);if(p.status==="success"){t.onComplete(p);return}if(gt(p)){t.onComplete(Oi(p,t.uploadFile));return}t.onError(new Error(Dt(p,"Upload failed")));return}catch{}t.onError(new Error("Upload completed but no valid response received"));break}case"error":{const d=c.payload;s(),i.close();let p=((a=d.error)==null?void 0:a.message)||"Upload failed";if((l=d.response)!=null&&l.responseText)try{const u=JSON.parse(d.response.responseText);p=Dt(u,p)}catch{}t.onError(new Error(p));break}}}catch{}},i.onerror=()=>{o||(s(),t.onError(new Error("Upload progress connection failed")))},i.onclose=()=>{o||(s(),t.onError(new Error("Upload progress connection closed unexpectedly")))},i}function gs(t){if(t){t.onmessage=null,t.onerror=null,t.onclose=null;try{t.send(JSON.stringify({action:"cancel",payload:{}}))}catch{}t.close()}}async function cn(t,e,i,o,s,r,n){const a=t.replace(/\/+$/,""),l=await fetch(`${a}/google-picker/get`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({accessToken:e,platform:"drive",fileId:i,endpoint:o,headers:s,size:r,metadata:n})});if(!l.ok){const c=await l.text().catch(()=>"");throw new Error(`Google Picker upload failed (${l.status}): ${c}`)}return l.json()}function dn(t,e){const i=t.remoteInfo;if(!i)return e.onError(new Error("remoteInfo is required for companion upload")),{abort(){}};let o=!1,s=null;const r=us(e.apiBase,e.folder,e.extraParams),n=hs(t,e.folder);return(i.pickerAccessToken?cn(i.companionUrl,i.pickerAccessToken,i.fileId,r,e.authHeaders,i.size,n):rn(i.companionUrl,i.provider,i.token,i.requestPath,{fileId:i.fileId,endpoint:r,headers:e.authHeaders,size:i.size,metadata:n},!i.token)).then(a=>{o||(s=fs({companionUrl:i.companionUrl,token:a.token,uploadFile:t,expectedSize:i.size,onProgress:(l,c)=>{o||e.onProgress(l,c)},onComplete:l=>{o||e.onComplete(l)},onError:l=>{o||e.onError(l)}}))}).catch(a=>{o||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){o=!0,gs(s),s=null}}}function pn(t,e){const i=t.remoteUrl;if(!i)return e.onError(new Error("Remote URL is required for URL upload")),{abort(){}};let o=!1,s=null;const r=new AbortController,n=us(e.apiBase,e.folder,e.extraParams);return nn(e.companionUrl,i,r.signal).then(a=>{var l;if(o)return null;(l=e.onMeta)==null||l.call(e,{name:a.name,type:a.type,size:a.size});const c=hs(t,e.folder);return a.name&&(c.name=a.name),a.type&&(c.type=a.type),an(e.companionUrl,i,{fileId:t.id,endpoint:n,headers:e.authHeaders,size:a.size,metadata:c},r.signal).then(d=>({result:d,size:a.size}))}).then(a=>{o||!a||(s=fs({companionUrl:e.companionUrl,token:a.result.token,uploadFile:t,expectedSize:a.size,onProgress:(l,c)=>{o||e.onProgress(l,c)},onComplete:l=>{o||e.onComplete(l)},onError:l=>{o||e.onError(l)}}))}).catch(a=>{o||a&&a.name==="AbortError"||e.onError(a instanceof Error?a:new Error(String(a)))}),{abort(){o=!0,r.abort(),gs(s),s=null}}}function vi(t){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vi(t)}function un(t,e,i){return Object.defineProperty(t,"prototype",{writable:!1}),t}function hn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fn(t,e,i){return e=lt(e),gn(t,zi()?Reflect.construct(e,i||[],lt(t).constructor):e.apply(t,i))}function gn(t,e){if(e&&(vi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mn(t)}function mn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function vn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&at(t,e)}function bi(t){var e=typeof Map=="function"?new Map:void 0;return bi=function(i){if(i===null||!xn(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,o)}function o(){return bn(i,arguments,lt(this).constructor)}return o.prototype=Object.create(i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),at(o,i)},bi(t)}function bn(t,e,i){if(zi())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var s=new(t.bind.apply(t,o));return i&&at(s,i.prototype),s}function zi(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(zi=function(){return!!t})()}function xn(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function at(t,e){return at=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},at(t,e)}function lt(t){return lt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},lt(t)}var et=(function(t){function e(i){var o,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;if(hn(this,e),o=fn(this,e,[i]),o.originalRequest=r,o.originalResponse=n,o.causingError=s,s!=null&&(i+=", caused by ".concat(s.toString())),r!=null){var a=r.getHeader("X-Request-ID")||"n/a",l=r.getMethod(),c=r.getURL(),d=n?n.getStatus():"n/a",p=n?n.getBody()||"":"n/a";i+=", originated from request (method: ".concat(l,", url: ").concat(c,", response code: ").concat(d,", response text: ").concat(p,", request id: ").concat(a,")")}return o.message=i,o}return vn(e,t),un(e)})(bi(Error));function ct(t){"@babel/helpers - typeof";return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ct(t)}function yn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wn(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,kn(o.key),o)}}function _n(t,e,i){return e&&wn(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function kn(t){var e=Sn(t,"string");return ct(e)=="symbol"?e:e+""}function Sn(t,e){if(ct(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(ct(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var $n=(function(){function t(){yn(this,t)}return _n(t,[{key:"listAllUploads",value:function(){return Promise.resolve([])}},{key:"findUploadsByFingerprint",value:function(e){return Promise.resolve([])}},{key:"removeUpload",value:function(e){return Promise.resolve()}},{key:"addUpload",value:function(e,i){return Promise.resolve(null)}}])})();const ms="3.7.8",Cn=ms,Ve=typeof Buffer=="function",go=typeof TextDecoder=="function"?new TextDecoder:void 0,mo=typeof TextEncoder=="function"?new TextEncoder:void 0,Pn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",tt=Array.prototype.slice.call(Pn),St=(t=>{let e={};return t.forEach((i,o)=>e[i]=o),e})(tt),En=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,Q=String.fromCharCode.bind(String),vo=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),vs=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),bs=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),xs=t=>{let e,i,o,s,r="";const n=t.length%3;for(let a=0;a<t.length;){if((i=t.charCodeAt(a++))>255||(o=t.charCodeAt(a++))>255||(s=t.charCodeAt(a++))>255)throw new TypeError("invalid character found");e=i<<16|o<<8|s,r+=tt[e>>18&63]+tt[e>>12&63]+tt[e>>6&63]+tt[e&63]}return n?r.slice(0,n-3)+"===".substring(n):r},Ii=typeof btoa=="function"?t=>btoa(t):Ve?t=>Buffer.from(t,"binary").toString("base64"):xs,xi=Ve?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let i=0,o=t.length;i<o;i+=4096)e.push(Q.apply(null,t.subarray(i,i+4096)));return Ii(e.join(""))},Pt=(t,e=!1)=>e?vs(xi(t)):xi(t),Un=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?Q(192|e>>>6)+Q(128|e&63):Q(224|e>>>12&15)+Q(128|e>>>6&63)+Q(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return Q(240|e>>>18&7)+Q(128|e>>>12&63)+Q(128|e>>>6&63)+Q(128|e&63)}},Rn=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ys=t=>t.replace(Rn,Un),bo=Ve?t=>Buffer.from(t,"utf8").toString("base64"):mo?t=>xi(mo.encode(t)):t=>Ii(ys(t)),Be=(t,e=!1)=>e?vs(bo(t)):bo(t),xo=t=>Be(t,!0),On=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Tn=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),i=e-65536;return Q((i>>>10)+55296)+Q((i&1023)+56320);case 3:return Q((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return Q((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},ws=t=>t.replace(On,Tn),_s=t=>{if(t=t.replace(/\s+/g,""),!En.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,i,o,s=[];for(let r=0;r<t.length;)e=St[t.charAt(r++)]<<18|St[t.charAt(r++)]<<12|(i=St[t.charAt(r++)])<<6|(o=St[t.charAt(r++)]),i===64?s.push(Q(e>>16&255)):o===64?s.push(Q(e>>16&255,e>>8&255)):s.push(Q(e>>16&255,e>>8&255,e&255));return s.join("")},ji=typeof atob=="function"?t=>atob(bs(t)):Ve?t=>Buffer.from(t,"base64").toString("binary"):_s,ks=Ve?t=>vo(Buffer.from(t,"base64")):t=>vo(ji(t).split("").map(e=>e.charCodeAt(0))),Ss=t=>ks($s(t)),Fn=Ve?t=>Buffer.from(t,"base64").toString("utf8"):go?t=>go.decode(ks(t)):t=>ws(ji(t)),$s=t=>bs(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),yi=t=>Fn($s(t)),Ln=t=>{if(typeof t!="string")return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},Cs=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),Ps=function(){const t=(e,i)=>Object.defineProperty(String.prototype,e,Cs(i));t("fromBase64",function(){return yi(this)}),t("toBase64",function(e){return Be(this,e)}),t("toBase64URI",function(){return Be(this,!0)}),t("toBase64URL",function(){return Be(this,!0)}),t("toUint8Array",function(){return Ss(this)})},Es=function(){const t=(e,i)=>Object.defineProperty(Uint8Array.prototype,e,Cs(i));t("toBase64",function(e){return Pt(this,e)}),t("toBase64URI",function(){return Pt(this,!0)}),t("toBase64URL",function(){return Pt(this,!0)})},zn=()=>{Ps(),Es()},In={version:ms,VERSION:Cn,atob:ji,atobPolyfill:_s,btoa:Ii,btoaPolyfill:xs,fromBase64:yi,toBase64:Be,encode:Be,encodeURI:xo,encodeURL:xo,utob:ys,btou:ws,decode:yi,isValid:Ln,fromUint8Array:Pt,toUint8Array:Ss,extendString:Ps,extendUint8Array:Es,extendBuiltins:zn};var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wo,_o;function Dn(){return _o||(_o=1,wo=function(t,e){if(e=e.split(":")[0],t=+t,!t)return!1;switch(e){case"http":case"ws":return t!==80;case"https":case"wss":return t!==443;case"ftp":return t!==21;case"gopher":return t!==70;case"file":return!1}return t!==0}),wo}var $t={},ko;function An(){if(ko)return $t;ko=1;var t=Object.prototype.hasOwnProperty,e;function i(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function o(n){try{return encodeURIComponent(n)}catch{return null}}function s(n){for(var a=/([^=?#&]+)=?([^&]*)/g,l={},c;c=a.exec(n);){var d=i(c[1]),p=i(c[2]);d===null||p===null||d in l||(l[d]=p)}return l}function r(n,a){a=a||"";var l=[],c,d;typeof a!="string"&&(a="?");for(d in n)if(t.call(n,d)){if(c=n[d],!c&&(c===null||c===e||isNaN(c))&&(c=""),d=o(d),c=o(c),d===null||c===null)continue;l.push(d+"="+c)}return l.length?a+l.join("&"):""}return $t.stringify=r,$t.parse=s,$t}var ai,So;function Mn(){if(So)return ai;So=1;var t=Dn(),e=An(),i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,o=/[\n\r\t]/g,s=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,r=/:\d+$/,n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,a=/^[a-zA-Z]:/;function l(w){return(w||"").toString().replace(i,"")}var c=[["#","hash"],["?","query"],function(w,x){return u(x.protocol)?w.replace(/\\/g,"/"):w},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};function p(w){var x;typeof window<"u"?x=window:typeof yo<"u"?x=yo:typeof self<"u"?x=self:x={};var S=x.location||{};w=w||S;var v={},$=typeof w,E;if(w.protocol==="blob:")v=new _(unescape(w.pathname),{});else if($==="string"){v=new _(w,{});for(E in d)delete v[E]}else if($==="object"){for(E in w)E in d||(v[E]=w[E]);v.slashes===void 0&&(v.slashes=s.test(w.href))}return v}function u(w){return w==="file:"||w==="ftp:"||w==="http:"||w==="https:"||w==="ws:"||w==="wss:"}function b(w,x){w=l(w),w=w.replace(o,""),x=x||{};var S=n.exec(w),v=S[1]?S[1].toLowerCase():"",$=!!S[2],E=!!S[3],L=0,R;return $?E?(R=S[2]+S[3]+S[4],L=S[2].length+S[3].length):(R=S[2]+S[4],L=S[2].length):E?(R=S[3]+S[4],L=S[3].length):R=S[4],v==="file:"?L>=2&&(R=R.slice(2)):u(v)?R=S[4]:v?$&&(R=R.slice(2)):L>=2&&u(x.protocol)&&(R=S[4]),{protocol:v,slashes:$||u(v),slashesCount:L,rest:R}}function h(w,x){if(w==="")return x;for(var S=(x||"/").split("/").slice(0,-1).concat(w.split("/")),v=S.length,$=S[v-1],E=!1,L=0;v--;)S[v]==="."?S.splice(v,1):S[v]===".."?(S.splice(v,1),L++):L&&(v===0&&(E=!0),S.splice(v,1),L--);return E&&S.unshift(""),($==="."||$==="..")&&S.push(""),S.join("/")}function _(w,x,S){if(w=l(w),w=w.replace(o,""),!(this instanceof _))return new _(w,x,S);var v,$,E,L,R,A,re=c.slice(),fe=typeof x,O=this,V=0;for(fe!=="object"&&fe!=="string"&&(S=x,x=null),S&&typeof S!="function"&&(S=e.parse),x=p(x),$=b(w||"",x),v=!$.protocol&&!$.slashes,O.slashes=$.slashes||v&&x.slashes,O.protocol=$.protocol||x.protocol||"",w=$.rest,($.protocol==="file:"&&($.slashesCount!==2||a.test(w))||!$.slashes&&($.protocol||$.slashesCount<2||!u(O.protocol)))&&(re[3]=[/(.*)/,"pathname"]);V<re.length;V++){if(L=re[V],typeof L=="function"){w=L(w,O);continue}E=L[0],A=L[1],E!==E?O[A]=w:typeof E=="string"?(R=E==="@"?w.lastIndexOf(E):w.indexOf(E),~R&&(typeof L[2]=="number"?(O[A]=w.slice(0,R),w=w.slice(R+L[2])):(O[A]=w.slice(R),w=w.slice(0,R)))):(R=E.exec(w))&&(O[A]=R[1],w=w.slice(0,R.index)),O[A]=O[A]||v&&L[3]&&x[A]||"",L[4]&&(O[A]=O[A].toLowerCase())}S&&(O.query=S(O.query)),v&&x.slashes&&O.pathname.charAt(0)!=="/"&&(O.pathname!==""||x.pathname!=="")&&(O.pathname=h(O.pathname,x.pathname)),O.pathname.charAt(0)!=="/"&&u(O.protocol)&&(O.pathname="/"+O.pathname),t(O.port,O.protocol)||(O.host=O.hostname,O.port=""),O.username=O.password="",O.auth&&(R=O.auth.indexOf(":"),~R?(O.username=O.auth.slice(0,R),O.username=encodeURIComponent(decodeURIComponent(O.username)),O.password=O.auth.slice(R+1),O.password=encodeURIComponent(decodeURIComponent(O.password))):O.username=encodeURIComponent(decodeURIComponent(O.auth)),O.auth=O.password?O.username+":"+O.password:O.username),O.origin=O.protocol!=="file:"&&u(O.protocol)&&O.host?O.protocol+"//"+O.host:"null",O.href=O.toString()}function C(w,x,S){var v=this;switch(w){case"query":typeof x=="string"&&x.length&&(x=(S||e.parse)(x)),v[w]=x;break;case"port":v[w]=x,t(x,v.protocol)?x&&(v.host=v.hostname+":"+x):(v.host=v.hostname,v[w]="");break;case"hostname":v[w]=x,v.port&&(x+=":"+v.port),v.host=x;break;case"host":v[w]=x,r.test(x)?(x=x.split(":"),v.port=x.pop(),v.hostname=x.join(":")):(v.hostname=x,v.port="");break;case"protocol":v.protocol=x.toLowerCase(),v.slashes=!S;break;case"pathname":case"hash":if(x){var $=w==="pathname"?"/":"#";v[w]=x.charAt(0)!==$?$+x:x}else v[w]=x;break;case"username":case"password":v[w]=encodeURIComponent(x);break;case"auth":var E=x.indexOf(":");~E?(v.username=x.slice(0,E),v.username=encodeURIComponent(decodeURIComponent(v.username)),v.password=x.slice(E+1),v.password=encodeURIComponent(decodeURIComponent(v.password))):v.username=encodeURIComponent(decodeURIComponent(x))}for(var L=0;L<c.length;L++){var R=c[L];R[4]&&(v[R[1]]=v[R[1]].toLowerCase())}return v.auth=v.password?v.username+":"+v.password:v.username,v.origin=v.protocol!=="file:"&&u(v.protocol)&&v.host?v.protocol+"//"+v.host:"null",v.href=v.toString(),v}function U(w){(!w||typeof w!="function")&&(w=e.stringify);var x,S=this,v=S.host,$=S.protocol;$&&$.charAt($.length-1)!==":"&&($+=":");var E=$+(S.protocol&&S.slashes||u(S.protocol)?"//":"");return S.username?(E+=S.username,S.password&&(E+=":"+S.password),E+="@"):S.password?(E+=":"+S.password,E+="@"):S.protocol!=="file:"&&u(S.protocol)&&!v&&S.pathname!=="/"&&(E+="@"),(v[v.length-1]===":"||r.test(S.hostname)&&!S.port)&&(v+=":"),E+=v+S.pathname,x=typeof S.query=="object"?w(S.query):S.query,x&&(E+=x.charAt(0)!=="?"?"?"+x:x),S.hash&&(E+=S.hash),E}return _.prototype={set:C,toString:U},_.extractProtocol=b,_.location=p,_.trimLeft=l,_.qs=e,ai=_,ai}var Bn=Mn();const Hn=jn(Bn);function Nn(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,i=t==="x"?e:e&3|8;return i.toString(16)})}function wi(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */wi=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,s=Object.defineProperty||function(g,m,y){g[m]=y.value},r=typeof Symbol=="function"?Symbol:{},n=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(g,m,y){return Object.defineProperty(g,m,{value:y,enumerable:!0,configurable:!0,writable:!0}),g[m]}try{c({},"")}catch{c=function(g,m,y){return g[m]=y}}function d(g,m,y,T){var k=m&&m.prototype instanceof U?m:U,z=Object.create(k.prototype),D=new V(T||[]);return s(z,"_invoke",{value:A(g,y,D)}),z}function p(g,m,y){try{return{type:"normal",arg:g.call(m,y)}}catch(T){return{type:"throw",arg:T}}}e.wrap=d;var u="suspendedStart",b="suspendedYield",h="executing",_="completed",C={};function U(){}function w(){}function x(){}var S={};c(S,n,function(){return this});var v=Object.getPrototypeOf,$=v&&v(v(ne([])));$&&$!==i&&o.call($,n)&&(S=$);var E=x.prototype=U.prototype=Object.create(S);function L(g){["next","throw","return"].forEach(function(m){c(g,m,function(y){return this._invoke(m,y)})})}function R(g,m){function y(k,z,D,N){var q=p(g[k],g,z);if(q.type!=="throw"){var ae=q.arg,ue=ae.value;return ue&&Ue(ue)=="object"&&o.call(ue,"__await")?m.resolve(ue.__await).then(function(te){y("next",te,D,N)},function(te){y("throw",te,D,N)}):m.resolve(ue).then(function(te){ae.value=te,D(ae)},function(te){return y("throw",te,D,N)})}N(q.arg)}var T;s(this,"_invoke",{value:function(k,z){function D(){return new m(function(N,q){y(k,z,N,q)})}return T=T?T.then(D,D):D()}})}function A(g,m,y){var T=u;return function(k,z){if(T===h)throw Error("Generator is already running");if(T===_){if(k==="throw")throw z;return{value:t,done:!0}}for(y.method=k,y.arg=z;;){var D=y.delegate;if(D){var N=re(D,y);if(N){if(N===C)continue;return N}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(T===u)throw T=_,y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);T=h;var q=p(g,m,y);if(q.type==="normal"){if(T=y.done?_:b,q.arg===C)continue;return{value:q.arg,done:y.done}}q.type==="throw"&&(T=_,y.method="throw",y.arg=q.arg)}}}function re(g,m){var y=m.method,T=g.iterator[y];if(T===t)return m.delegate=null,y==="throw"&&g.iterator.return&&(m.method="return",m.arg=t,re(g,m),m.method==="throw")||y!=="return"&&(m.method="throw",m.arg=new TypeError("The iterator does not provide a '"+y+"' method")),C;var k=p(T,g.iterator,m.arg);if(k.type==="throw")return m.method="throw",m.arg=k.arg,m.delegate=null,C;var z=k.arg;return z?z.done?(m[g.resultName]=z.value,m.next=g.nextLoc,m.method!=="return"&&(m.method="next",m.arg=t),m.delegate=null,C):z:(m.method="throw",m.arg=new TypeError("iterator result is not an object"),m.delegate=null,C)}function fe(g){var m={tryLoc:g[0]};1 in g&&(m.catchLoc=g[1]),2 in g&&(m.finallyLoc=g[2],m.afterLoc=g[3]),this.tryEntries.push(m)}function O(g){var m=g.completion||{};m.type="normal",delete m.arg,g.completion=m}function V(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(fe,this),this.reset(!0)}function ne(g){if(g||g===""){var m=g[n];if(m)return m.call(g);if(typeof g.next=="function")return g;if(!isNaN(g.length)){var y=-1,T=function k(){for(;++y<g.length;)if(o.call(g,y))return k.value=g[y],k.done=!1,k;return k.value=t,k.done=!0,k};return T.next=T}}throw new TypeError(Ue(g)+" is not iterable")}return w.prototype=x,s(E,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:w,configurable:!0}),w.displayName=c(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(g){var m=typeof g=="function"&&g.constructor;return!!m&&(m===w||(m.displayName||m.name)==="GeneratorFunction")},e.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,x):(g.__proto__=x,c(g,l,"GeneratorFunction")),g.prototype=Object.create(E),g},e.awrap=function(g){return{__await:g}},L(R.prototype),c(R.prototype,a,function(){return this}),e.AsyncIterator=R,e.async=function(g,m,y,T,k){k===void 0&&(k=Promise);var z=new R(d(g,m,y,T),k);return e.isGeneratorFunction(m)?z:z.next().then(function(D){return D.done?D.value:z.next()})},L(E),c(E,l,"Generator"),c(E,n,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),e.keys=function(g){var m=Object(g),y=[];for(var T in m)y.push(T);return y.reverse(),function k(){for(;y.length;){var z=y.pop();if(z in m)return k.value=z,k.done=!1,k}return k.done=!0,k}},e.values=ne,V.prototype={constructor:V,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!g)for(var m in this)m.charAt(0)==="t"&&o.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=t)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var m=this;function y(q,ae){return z.type="throw",z.arg=g,m.next=q,ae&&(m.method="next",m.arg=t),!!ae}for(var T=this.tryEntries.length-1;T>=0;--T){var k=this.tryEntries[T],z=k.completion;if(k.tryLoc==="root")return y("end");if(k.tryLoc<=this.prev){var D=o.call(k,"catchLoc"),N=o.call(k,"finallyLoc");if(D&&N){if(this.prev<k.catchLoc)return y(k.catchLoc,!0);if(this.prev<k.finallyLoc)return y(k.finallyLoc)}else if(D){if(this.prev<k.catchLoc)return y(k.catchLoc,!0)}else{if(!N)throw Error("try statement without catch or finally");if(this.prev<k.finallyLoc)return y(k.finallyLoc)}}}},abrupt:function(g,m){for(var y=this.tryEntries.length-1;y>=0;--y){var T=this.tryEntries[y];if(T.tryLoc<=this.prev&&o.call(T,"finallyLoc")&&this.prev<T.finallyLoc){var k=T;break}}k&&(g==="break"||g==="continue")&&k.tryLoc<=m&&m<=k.finallyLoc&&(k=null);var z=k?k.completion:{};return z.type=g,z.arg=m,k?(this.method="next",this.next=k.finallyLoc,C):this.complete(z)},complete:function(g,m){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&m&&(this.next=m),C},finish:function(g){for(var m=this.tryEntries.length-1;m>=0;--m){var y=this.tryEntries[m];if(y.finallyLoc===g)return this.complete(y.completion,y.afterLoc),O(y),C}},catch:function(g){for(var m=this.tryEntries.length-1;m>=0;--m){var y=this.tryEntries[m];if(y.tryLoc===g){var T=y.completion;if(T.type==="throw"){var k=T.arg;O(y)}return k}}throw Error("illegal catch attempt")},delegateYield:function(g,m,y){return this.delegate={iterator:ne(g),resultName:m,nextLoc:y},this.method==="next"&&(this.arg=t),C}},e}function $o(t,e,i,o,s,r,n){try{var a=t[r](n),l=a.value}catch(c){i(c);return}a.done?e(l):Promise.resolve(l).then(o,s)}function qn(t){return function(){var e=this,i=arguments;return new Promise(function(o,s){var r=t.apply(e,i);function n(l){$o(r,o,s,n,a,"next",l)}function a(l){$o(r,o,s,n,a,"throw",l)}n(void 0)})}}function Us(t,e){return Yn(t)||Kn(t,e)||Rs(t,e)||Vn()}function Vn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kn(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var o,s,r,n,a=[],l=!0,c=!1;try{if(r=(i=i.call(t)).next,e!==0)for(;!(l=(o=r.call(i)).done)&&(a.push(o.value),a.length!==e);l=!0);}catch(d){c=!0,s=d}finally{try{if(!l&&i.return!=null&&(n=i.return(),Object(n)!==n))return}finally{if(c)throw s}}return a}}function Yn(t){if(Array.isArray(t))return t}function Ue(t){"@babel/helpers - typeof";return Ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ue(t)}function Gn(t,e){var i=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=Rs(t))||e){i&&(t=i);var o=0,s=function(){};return{s,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(l){throw l},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r=!0,n=!1,a;return{s:function(){i=i.call(t)},n:function(){var l=i.next();return r=l.done,l},e:function(l){n=!0,a=l},f:function(){try{!r&&i.return!=null&&i.return()}finally{if(n)throw a}}}}function Rs(t,e){if(t){if(typeof t=="string")return Co(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Co(t,e)}}function Co(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function Po(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,o)}return i}function Fe(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Po(Object(i),!0).forEach(function(o){Wn(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Po(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function Wn(t,e,i){return e=Os(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Xn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Eo(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Os(o.key),o)}}function Jn(t,e,i){return e&&Eo(t.prototype,e),i&&Eo(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Os(t){var e=Zn(t,"string");return Ue(e)=="symbol"?e:e+""}function Zn(t,e){if(Ue(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(Ue(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Et="tus-v1",Ut="ietf-draft-03",it="ietf-draft-05",Qn={endpoint:null,uploadUrl:null,metadata:{},metadataForPartialUploads:{},fingerprint:null,uploadSize:null,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,onUploadUrlAvailable:null,overridePatchMethod:!1,headers:{},addRequestId:!1,onBeforeRequest:null,onAfterResponse:null,onShouldRetry:Ts,chunkSize:Number.POSITIVE_INFINITY,retryDelays:[0,1e3,3e3,5e3],parallelUploads:1,parallelUploadBoundaries:null,storeFingerprintForResuming:!0,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,uploadDataDuringCreation:!1,urlStorage:null,fileReader:null,httpStack:null,protocol:Et},At=(function(){function t(e,i){Xn(this,t),"resume"in i&&console.log("tus: The `resume` option has been removed in tus-js-client v2. Please use the URL storage API instead."),this.options=i,this.options.chunkSize=Number(this.options.chunkSize),this._urlStorage=this.options.urlStorage,this.file=e,this.url=null,this._req=null,this._fingerprint=null,this._urlStorageKey=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0,this._parallelUploads=null,this._parallelUploadUrls=null}return Jn(t,[{key:"findPreviousUploads",value:function(){var e=this;return this.options.fingerprint(this.file,this.options).then(function(i){return e._urlStorage.findUploadsByFingerprint(i)})}},{key:"resumeFromPreviousUpload",value:function(e){this.url=e.uploadUrl||null,this._parallelUploadUrls=e.parallelUploadUrls||null,this._urlStorageKey=e.urlStorageKey}},{key:"start",value:function(){var e=this,i=this.file;if(!i){this._emitError(new Error("tus: no file or stream to upload provided"));return}if(![Et,Ut,it].includes(this.options.protocol)){this._emitError(new Error("tus: unsupported protocol ".concat(this.options.protocol)));return}if(!this.options.endpoint&&!this.options.uploadUrl&&!this.url){this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));return}var o=this.options.retryDelays;if(o!=null&&Object.prototype.toString.call(o)!=="[object Array]"){this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));return}if(this.options.parallelUploads>1)for(var s=0,r=["uploadUrl","uploadSize","uploadLengthDeferred"];s<r.length;s++){var n=r[s];if(this.options[n]){this._emitError(new Error("tus: cannot use the ".concat(n," option when parallelUploads is enabled")));return}}if(this.options.parallelUploadBoundaries){if(this.options.parallelUploads<=1){this._emitError(new Error("tus: cannot use the `parallelUploadBoundaries` option when `parallelUploads` is disabled"));return}if(this.options.parallelUploads!==this.options.parallelUploadBoundaries.length){this._emitError(new Error("tus: the `parallelUploadBoundaries` must have the same length as the value of `parallelUploads`"));return}}this.options.fingerprint(i,this.options).then(function(a){return e._fingerprint=a,e._source?e._source:e.options.fileReader.openFile(i,e.options.chunkSize)}).then(function(a){if(e._source=a,e.options.uploadLengthDeferred)e._size=null;else if(e.options.uploadSize!=null){if(e._size=Number(e.options.uploadSize),Number.isNaN(e._size)){e._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));return}}else if(e._size=e._source.size,e._size==null){e._emitError(new Error("tus: cannot automatically derive upload's size from input. Specify it manually using the `uploadSize` option or use the `uploadLengthDeferred` option"));return}e.options.parallelUploads>1||e._parallelUploadUrls!=null?e._startParallelUpload():e._startSingleUpload()}).catch(function(a){e._emitError(a)})}},{key:"_startParallelUpload",value:function(){var e,i=this,o=this._size,s=0;this._parallelUploads=[];var r=this._parallelUploadUrls!=null?this._parallelUploadUrls.length:this.options.parallelUploads,n=(e=this.options.parallelUploadBoundaries)!==null&&e!==void 0?e:ta(this._source.size,r);this._parallelUploadUrls&&n.forEach(function(c,d){c.uploadUrl=i._parallelUploadUrls[d]||null}),this._parallelUploadUrls=new Array(n.length);var a=n.map(function(c,d){var p=0;return i._source.slice(c.start,c.end).then(function(u){var b=u.value;return new Promise(function(h,_){var C=Fe(Fe({},i.options),{},{uploadUrl:c.uploadUrl||null,storeFingerprintForResuming:!1,removeFingerprintOnSuccess:!1,parallelUploads:1,parallelUploadBoundaries:null,metadata:i.options.metadataForPartialUploads,headers:Fe(Fe({},i.options.headers),{},{"Upload-Concat":"partial"}),onSuccess:h,onError:_,onProgress:function(w){s=s-p+w,p=w,i._emitProgress(s,o)},onUploadUrlAvailable:function(){i._parallelUploadUrls[d]=U.url,i._parallelUploadUrls.filter(function(w){return!!w}).length===n.length&&i._saveUploadInUrlStorage()}}),U=new t(b,C);U.start(),i._parallelUploads.push(U)})})}),l;Promise.all(a).then(function(){l=i._openRequest("POST",i.options.endpoint),l.setHeader("Upload-Concat","final;".concat(i._parallelUploadUrls.join(" ")));var c=Uo(i.options.metadata);return c!==""&&l.setHeader("Upload-Metadata",c),i._sendRequest(l,null)}).then(function(c){if(!Ie(c.getStatus(),200)){i._emitHttpError(l,c,"tus: unexpected response while creating upload");return}var d=c.getHeader("Location");if(d==null){i._emitHttpError(l,c,"tus: invalid or missing Location header");return}i.url=Fo(i.options.endpoint,d),"Created upload at ".concat(i.url),i._emitSuccess(c)}).catch(function(c){i._emitError(c)})}},{key:"_startSingleUpload",value:function(){if(this._aborted=!1,this.url!=null){"Resuming upload from previous URL: ".concat(this.url),this._resumeUpload();return}if(this.options.uploadUrl!=null){"Resuming upload from provided URL: ".concat(this.options.uploadUrl),this.url=this.options.uploadUrl,this._resumeUpload();return}this._createUpload()}},{key:"abort",value:function(e){var i=this;if(this._parallelUploads!=null){var o=Gn(this._parallelUploads),s;try{for(o.s();!(s=o.n()).done;){var r=s.value;r.abort(e)}}catch(n){o.e(n)}finally{o.f()}}return this._req!==null&&this._req.abort(),this._aborted=!0,this._retryTimeout!=null&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),!e||this.url==null?Promise.resolve():t.terminate(this.url,this.options).then(function(){return i._removeFromUrlStorage()})}},{key:"_emitHttpError",value:function(e,i,o,s){this._emitError(new et(o,s,e,i))}},{key:"_emitError",value:function(e){var i=this;if(!this._aborted){if(this.options.retryDelays!=null){var o=this._offset!=null&&this._offset>this._offsetBeforeRetry;if(o&&(this._retryAttempt=0),To(e,this._retryAttempt,this.options)){var s=this.options.retryDelays[this._retryAttempt++];this._offsetBeforeRetry=this._offset,this._retryTimeout=setTimeout(function(){i.start()},s);return}}if(typeof this.options.onError=="function")this.options.onError(e);else throw e}}},{key:"_emitSuccess",value:function(e){this.options.removeFingerprintOnSuccess&&this._removeFromUrlStorage(),typeof this.options.onSuccess=="function"&&this.options.onSuccess({lastResponse:e})}},{key:"_emitProgress",value:function(e,i){typeof this.options.onProgress=="function"&&this.options.onProgress(e,i)}},{key:"_emitChunkComplete",value:function(e,i,o){typeof this.options.onChunkComplete=="function"&&this.options.onChunkComplete(e,i,o)}},{key:"_createUpload",value:function(){var e=this;if(!this.options.endpoint){this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));return}var i=this._openRequest("POST",this.options.endpoint);this.options.uploadLengthDeferred?i.setHeader("Upload-Defer-Length","1"):i.setHeader("Upload-Length","".concat(this._size));var o=Uo(this.options.metadata);o!==""&&i.setHeader("Upload-Metadata",o);var s;this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,s=this._addChunkToRequest(i)):((this.options.protocol===Ut||this.options.protocol===it)&&i.setHeader("Upload-Complete","?0"),s=this._sendRequest(i,null)),s.then(function(r){if(!Ie(r.getStatus(),200)){e._emitHttpError(i,r,"tus: unexpected response while creating upload");return}var n=r.getHeader("Location");if(n==null){e._emitHttpError(i,r,"tus: invalid or missing Location header");return}if(e.url=Fo(e.options.endpoint,n),"Created upload at ".concat(e.url),typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._size===0){e._emitSuccess(r),e._source.close();return}e._saveUploadInUrlStorage().then(function(){e.options.uploadDataDuringCreation?e._handleUploadResponse(i,r):(e._offset=0,e._performUpload())})}).catch(function(r){e._emitHttpError(i,null,"tus: failed to create upload",r)})}},{key:"_resumeUpload",value:function(){var e=this,i=this._openRequest("HEAD",this.url),o=this._sendRequest(i,null);o.then(function(s){var r=s.getStatus();if(!Ie(r,200)){if(r===423){e._emitHttpError(i,s,"tus: upload is currently locked; retry later");return}if(Ie(r,400)&&e._removeFromUrlStorage(),!e.options.endpoint){e._emitHttpError(i,s,"tus: unable to resume upload (new upload cannot be created without an endpoint)");return}e.url=null,e._createUpload();return}var n=Number.parseInt(s.getHeader("Upload-Offset"),10);if(Number.isNaN(n)){e._emitHttpError(i,s,"tus: invalid or missing offset value");return}var a=Number.parseInt(s.getHeader("Upload-Length"),10);if(Number.isNaN(a)&&!e.options.uploadLengthDeferred&&e.options.protocol===Et){e._emitHttpError(i,s,"tus: invalid or missing length value");return}typeof e.options.onUploadUrlAvailable=="function"&&e.options.onUploadUrlAvailable(),e._saveUploadInUrlStorage().then(function(){if(n===a){e._emitProgress(a,a),e._emitSuccess(s);return}e._offset=n,e._performUpload()})}).catch(function(s){e._emitHttpError(i,null,"tus: failed to resume upload",s)})}},{key:"_performUpload",value:function(){var e=this;if(!this._aborted){var i;this.options.overridePatchMethod?(i=this._openRequest("POST",this.url),i.setHeader("X-HTTP-Method-Override","PATCH")):i=this._openRequest("PATCH",this.url),i.setHeader("Upload-Offset","".concat(this._offset));var o=this._addChunkToRequest(i);o.then(function(s){if(!Ie(s.getStatus(),200)){e._emitHttpError(i,s,"tus: unexpected response while uploading chunk");return}e._handleUploadResponse(i,s)}).catch(function(s){e._aborted||e._emitHttpError(i,null,"tus: failed to upload chunk at offset ".concat(e._offset),s)})}}},{key:"_addChunkToRequest",value:function(e){var i=this,o=this._offset,s=this._offset+this.options.chunkSize;return e.setProgressHandler(function(r){i._emitProgress(o+r,i._size)}),this.options.protocol===Et?e.setHeader("Content-Type","application/offset+octet-stream"):this.options.protocol===it&&e.setHeader("Content-Type","application/partial-upload"),(s===Number.POSITIVE_INFINITY||s>this._size)&&!this.options.uploadLengthDeferred&&(s=this._size),this._source.slice(o,s).then(function(r){var n=r.value,a=r.done,l=n!=null&&n.size?n.size:0;i.options.uploadLengthDeferred&&a&&(i._size=i._offset+l,e.setHeader("Upload-Length","".concat(i._size)));var c=i._offset+l;return!i.options.uploadLengthDeferred&&a&&c!==i._size?Promise.reject(new Error("upload was configured with a size of ".concat(i._size," bytes, but the source is done after ").concat(c," bytes"))):n===null?i._sendRequest(e):((i.options.protocol===Ut||i.options.protocol===it)&&e.setHeader("Upload-Complete",a?"?1":"?0"),i._emitProgress(i._offset,i._size),i._sendRequest(e,n))})}},{key:"_handleUploadResponse",value:function(e,i){var o=Number.parseInt(i.getHeader("Upload-Offset"),10);if(Number.isNaN(o)){this._emitHttpError(e,i,"tus: invalid or missing offset value");return}if(this._emitProgress(o,this._size),this._emitChunkComplete(o-this._offset,o,this._size),this._offset=o,o===this._size){this._emitSuccess(i),this._source.close();return}this._performUpload()}},{key:"_openRequest",value:function(e,i){var o=Ro(e,i,this.options);return this._req=o,o}},{key:"_removeFromUrlStorage",value:function(){var e=this;this._urlStorageKey&&(this._urlStorage.removeUpload(this._urlStorageKey).catch(function(i){e._emitError(i)}),this._urlStorageKey=null)}},{key:"_saveUploadInUrlStorage",value:function(){var e=this;if(!this.options.storeFingerprintForResuming||!this._fingerprint||this._urlStorageKey!==null)return Promise.resolve();var i={size:this._size,metadata:this.options.metadata,creationTime:new Date().toString()};return this._parallelUploads?i.parallelUploadUrls=this._parallelUploadUrls:i.uploadUrl=this.url,this._urlStorage.addUpload(this._fingerprint,i).then(function(o){e._urlStorageKey=o})}},{key:"_sendRequest",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return Oo(e,i,this.options)}}],[{key:"terminate",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=Ro("DELETE",e,i);return Oo(o,null,i).then(function(s){if(s.getStatus()!==204)throw new et("tus: unexpected response while terminating upload",null,o,s)}).catch(function(s){if(s instanceof et||(s=new et("tus: failed to terminate upload",s,o,null)),!To(s,0,i))throw s;var r=i.retryDelays[0],n=i.retryDelays.slice(1),a=Fe(Fe({},i),{},{retryDelays:n});return new Promise(function(l){return setTimeout(l,r)}).then(function(){return t.terminate(e,a)})})}}])})();function Uo(t){return Object.entries(t).map(function(e){var i=Us(e,2),o=i[0],s=i[1];return"".concat(o," ").concat(In.encode(String(s)))}).join(",")}function Ie(t,e){return t>=e&&t<e+100}function Ro(t,e,i){var o=i.httpStack.createRequest(t,e);i.protocol===Ut?o.setHeader("Upload-Draft-Interop-Version","5"):i.protocol===it?o.setHeader("Upload-Draft-Interop-Version","6"):o.setHeader("Tus-Resumable","1.0.0");for(var s=i.headers||{},r=0,n=Object.entries(s);r<n.length;r++){var a=Us(n[r],2),l=a[0],c=a[1];o.setHeader(l,c)}if(i.addRequestId){var d=Nn();o.setHeader("X-Request-ID",d)}return o}function Oo(t,e,i){return _i.apply(this,arguments)}function _i(){return _i=qn(wi().mark(function t(e,i,o){var s;return wi().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(typeof o.onBeforeRequest!="function"){r.next=3;break}return r.next=3,o.onBeforeRequest(e);case 3:return r.next=5,e.send(i);case 5:if(s=r.sent,typeof o.onAfterResponse!="function"){r.next=9;break}return r.next=9,o.onAfterResponse(e,s);case 9:return r.abrupt("return",s);case 10:case"end":return r.stop()}},t)})),_i.apply(this,arguments)}function ea(){var t=!0;return typeof navigator<"u"&&navigator.onLine===!1&&(t=!1),t}function To(t,e,i){return i.retryDelays==null||e>=i.retryDelays.length||t.originalRequest==null?!1:i&&typeof i.onShouldRetry=="function"?i.onShouldRetry(t,e,i):Ts(t)}function Ts(t){var e=t.originalResponse?t.originalResponse.getStatus():0;return(!Ie(e,400)||e===409||e===423)&&ea()}function Fo(t,e){return new Hn(e,t).toString()}function ta(t,e){for(var i=Math.floor(t/e),o=[],s=0;s<e;s++)o.push({start:i*s,end:i*(s+1)});return o[e-1].end=t,o}At.defaultOptions=Qn;var Fs=function(){return typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative"};function ia(t){return new Promise(function(e,i){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var s=o.response;e(s)},o.onerror=function(s){i(s)},o.open("GET",t),o.send()})}var oa=function(){return typeof window<"u"&&(typeof window.PhoneGap<"u"||typeof window.Cordova<"u"||typeof window.cordova<"u")};function sa(t){return new Promise(function(e,i){var o=new FileReader;o.onload=function(){var s=new Uint8Array(o.result);e({value:s})},o.onerror=function(s){i(s)},o.readAsArrayBuffer(t)})}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function ra(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function na(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,la(o.key),o)}}function aa(t,e,i){return e&&na(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function la(t){var e=ca(t,"string");return dt(e)=="symbol"?e:e+""}function ca(t,e){if(dt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(dt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Lo=(function(){function t(e){ra(this,t),this._file=e,this.size=e.size}return aa(t,[{key:"slice",value:function(e,i){if(oa())return sa(this._file.slice(e,i));var o=this._file.slice(e,i),s=i>=this.size;return Promise.resolve({value:o,done:s})}},{key:"close",value:function(){}}])})();function pt(t){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pt(t)}function da(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pa(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,ha(o.key),o)}}function ua(t,e,i){return e&&pa(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function ha(t){var e=fa(t,"string");return pt(e)=="symbol"?e:e+""}function fa(t,e){if(pt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(pt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function zo(t){return t===void 0?0:t.size!==void 0?t.size:t.length}function ga(t,e){if(t.concat)return t.concat(e);if(t instanceof Blob)return new Blob([t,e],{type:t.type});if(t.set){var i=new t.constructor(t.length+e.length);return i.set(t),i.set(e,t.length),i}throw new Error("Unknown data type")}var ma=(function(){function t(e){da(this,t),this._buffer=void 0,this._bufferOffset=0,this._reader=e,this._done=!1}return ua(t,[{key:"slice",value:function(e,i){return e<this._bufferOffset?Promise.reject(new Error("Requested data is before the reader's current offset")):this._readUntilEnoughDataOrDone(e,i)}},{key:"_readUntilEnoughDataOrDone",value:function(e,i){var o=this,s=i<=this._bufferOffset+zo(this._buffer);if(this._done||s){var r=this._getDataFromBuffer(e,i),n=r==null?this._done:!1;return Promise.resolve({value:r,done:n})}return this._reader.read().then(function(a){var l=a.value,c=a.done;return c?o._done=!0:o._buffer===void 0?o._buffer=l:o._buffer=ga(o._buffer,l),o._readUntilEnoughDataOrDone(e,i)})}},{key:"_getDataFromBuffer",value:function(e,i){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var o=zo(this._buffer)===0;return this._done&&o?null:this._buffer.slice(0,i-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}])})();function Re(t){"@babel/helpers - typeof";return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(t)}function ki(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ki=function(){return e};var t,e={},i=Object.prototype,o=i.hasOwnProperty,s=Object.defineProperty||function(g,m,y){g[m]=y.value},r=typeof Symbol=="function"?Symbol:{},n=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(g,m,y){return Object.defineProperty(g,m,{value:y,enumerable:!0,configurable:!0,writable:!0}),g[m]}try{c({},"")}catch{c=function(g,m,y){return g[m]=y}}function d(g,m,y,T){var k=m&&m.prototype instanceof U?m:U,z=Object.create(k.prototype),D=new V(T||[]);return s(z,"_invoke",{value:A(g,y,D)}),z}function p(g,m,y){try{return{type:"normal",arg:g.call(m,y)}}catch(T){return{type:"throw",arg:T}}}e.wrap=d;var u="suspendedStart",b="suspendedYield",h="executing",_="completed",C={};function U(){}function w(){}function x(){}var S={};c(S,n,function(){return this});var v=Object.getPrototypeOf,$=v&&v(v(ne([])));$&&$!==i&&o.call($,n)&&(S=$);var E=x.prototype=U.prototype=Object.create(S);function L(g){["next","throw","return"].forEach(function(m){c(g,m,function(y){return this._invoke(m,y)})})}function R(g,m){function y(k,z,D,N){var q=p(g[k],g,z);if(q.type!=="throw"){var ae=q.arg,ue=ae.value;return ue&&Re(ue)=="object"&&o.call(ue,"__await")?m.resolve(ue.__await).then(function(te){y("next",te,D,N)},function(te){y("throw",te,D,N)}):m.resolve(ue).then(function(te){ae.value=te,D(ae)},function(te){return y("throw",te,D,N)})}N(q.arg)}var T;s(this,"_invoke",{value:function(k,z){function D(){return new m(function(N,q){y(k,z,N,q)})}return T=T?T.then(D,D):D()}})}function A(g,m,y){var T=u;return function(k,z){if(T===h)throw Error("Generator is already running");if(T===_){if(k==="throw")throw z;return{value:t,done:!0}}for(y.method=k,y.arg=z;;){var D=y.delegate;if(D){var N=re(D,y);if(N){if(N===C)continue;return N}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(T===u)throw T=_,y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);T=h;var q=p(g,m,y);if(q.type==="normal"){if(T=y.done?_:b,q.arg===C)continue;return{value:q.arg,done:y.done}}q.type==="throw"&&(T=_,y.method="throw",y.arg=q.arg)}}}function re(g,m){var y=m.method,T=g.iterator[y];if(T===t)return m.delegate=null,y==="throw"&&g.iterator.return&&(m.method="return",m.arg=t,re(g,m),m.method==="throw")||y!=="return"&&(m.method="throw",m.arg=new TypeError("The iterator does not provide a '"+y+"' method")),C;var k=p(T,g.iterator,m.arg);if(k.type==="throw")return m.method="throw",m.arg=k.arg,m.delegate=null,C;var z=k.arg;return z?z.done?(m[g.resultName]=z.value,m.next=g.nextLoc,m.method!=="return"&&(m.method="next",m.arg=t),m.delegate=null,C):z:(m.method="throw",m.arg=new TypeError("iterator result is not an object"),m.delegate=null,C)}function fe(g){var m={tryLoc:g[0]};1 in g&&(m.catchLoc=g[1]),2 in g&&(m.finallyLoc=g[2],m.afterLoc=g[3]),this.tryEntries.push(m)}function O(g){var m=g.completion||{};m.type="normal",delete m.arg,g.completion=m}function V(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(fe,this),this.reset(!0)}function ne(g){if(g||g===""){var m=g[n];if(m)return m.call(g);if(typeof g.next=="function")return g;if(!isNaN(g.length)){var y=-1,T=function k(){for(;++y<g.length;)if(o.call(g,y))return k.value=g[y],k.done=!1,k;return k.value=t,k.done=!0,k};return T.next=T}}throw new TypeError(Re(g)+" is not iterable")}return w.prototype=x,s(E,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:w,configurable:!0}),w.displayName=c(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(g){var m=typeof g=="function"&&g.constructor;return!!m&&(m===w||(m.displayName||m.name)==="GeneratorFunction")},e.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,x):(g.__proto__=x,c(g,l,"GeneratorFunction")),g.prototype=Object.create(E),g},e.awrap=function(g){return{__await:g}},L(R.prototype),c(R.prototype,a,function(){return this}),e.AsyncIterator=R,e.async=function(g,m,y,T,k){k===void 0&&(k=Promise);var z=new R(d(g,m,y,T),k);return e.isGeneratorFunction(m)?z:z.next().then(function(D){return D.done?D.value:z.next()})},L(E),c(E,l,"Generator"),c(E,n,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),e.keys=function(g){var m=Object(g),y=[];for(var T in m)y.push(T);return y.reverse(),function k(){for(;y.length;){var z=y.pop();if(z in m)return k.value=z,k.done=!1,k}return k.done=!0,k}},e.values=ne,V.prototype={constructor:V,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!g)for(var m in this)m.charAt(0)==="t"&&o.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=t)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var m=this;function y(q,ae){return z.type="throw",z.arg=g,m.next=q,ae&&(m.method="next",m.arg=t),!!ae}for(var T=this.tryEntries.length-1;T>=0;--T){var k=this.tryEntries[T],z=k.completion;if(k.tryLoc==="root")return y("end");if(k.tryLoc<=this.prev){var D=o.call(k,"catchLoc"),N=o.call(k,"finallyLoc");if(D&&N){if(this.prev<k.catchLoc)return y(k.catchLoc,!0);if(this.prev<k.finallyLoc)return y(k.finallyLoc)}else if(D){if(this.prev<k.catchLoc)return y(k.catchLoc,!0)}else{if(!N)throw Error("try statement without catch or finally");if(this.prev<k.finallyLoc)return y(k.finallyLoc)}}}},abrupt:function(g,m){for(var y=this.tryEntries.length-1;y>=0;--y){var T=this.tryEntries[y];if(T.tryLoc<=this.prev&&o.call(T,"finallyLoc")&&this.prev<T.finallyLoc){var k=T;break}}k&&(g==="break"||g==="continue")&&k.tryLoc<=m&&m<=k.finallyLoc&&(k=null);var z=k?k.completion:{};return z.type=g,z.arg=m,k?(this.method="next",this.next=k.finallyLoc,C):this.complete(z)},complete:function(g,m){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&m&&(this.next=m),C},finish:function(g){for(var m=this.tryEntries.length-1;m>=0;--m){var y=this.tryEntries[m];if(y.finallyLoc===g)return this.complete(y.completion,y.afterLoc),O(y),C}},catch:function(g){for(var m=this.tryEntries.length-1;m>=0;--m){var y=this.tryEntries[m];if(y.tryLoc===g){var T=y.completion;if(T.type==="throw"){var k=T.arg;O(y)}return k}}throw Error("illegal catch attempt")},delegateYield:function(g,m,y){return this.delegate={iterator:ne(g),resultName:m,nextLoc:y},this.method==="next"&&(this.arg=t),C}},e}function Io(t,e,i,o,s,r,n){try{var a=t[r](n),l=a.value}catch(c){i(c);return}a.done?e(l):Promise.resolve(l).then(o,s)}function va(t){return function(){var e=this,i=arguments;return new Promise(function(o,s){var r=t.apply(e,i);function n(l){Io(r,o,s,n,a,"next",l)}function a(l){Io(r,o,s,n,a,"throw",l)}n(void 0)})}}function ba(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xa(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,wa(o.key),o)}}function ya(t,e,i){return e&&xa(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function wa(t){var e=_a(t,"string");return Re(e)=="symbol"?e:e+""}function _a(t,e){if(Re(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(Re(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var ka=(function(){function t(){ba(this,t)}return ya(t,[{key:"openFile",value:(function(){var e=va(ki().mark(function o(s,r){var n;return ki().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(Fs()&&s&&typeof s.uri<"u")){a.next=11;break}return a.prev=1,a.next=4,ia(s.uri);case 4:return n=a.sent,a.abrupt("return",new Lo(n));case 8:throw a.prev=8,a.t0=a.catch(1),new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. ".concat(a.t0));case 11:if(!(typeof s.slice=="function"&&typeof s.size<"u")){a.next=13;break}return a.abrupt("return",Promise.resolve(new Lo(s)));case 13:if(typeof s.read!="function"){a.next=18;break}if(r=Number(r),Number.isFinite(r)){a.next=17;break}return a.abrupt("return",Promise.reject(new Error("cannot create source for stream without a finite value for the `chunkSize` option")));case 17:return a.abrupt("return",Promise.resolve(new ma(s,r)));case 18:return a.abrupt("return",Promise.reject(new Error("source object may only be an instance of File, Blob, or Reader in this environment")));case 19:case"end":return a.stop()}},o,null,[[1,8]])}));function i(o,s){return e.apply(this,arguments)}return i})()}])})();function Sa(t,e){return Fs()?Promise.resolve($a(t,e)):Promise.resolve(["tus-br",t.name,t.type,t.size,t.lastModified,e.endpoint].join("-"))}function $a(t,e){var i=t.exif?Ca(JSON.stringify(t.exif)):"noexif";return["tus-rn",t.name||"noname",t.size||"nosize",i,e.endpoint].join("/")}function Ca(t){var e=0;if(t.length===0)return e;for(var i=0;i<t.length;i++){var o=t.charCodeAt(i);e=(e<<5)-e+o,e&=e}return e}function ut(t){"@babel/helpers - typeof";return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ut(t)}function Di(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pa(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Ea(o.key),o)}}function Ai(t,e,i){return e&&Pa(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ea(t){var e=Ua(t,"string");return ut(e)=="symbol"?e:e+""}function Ua(t,e){if(ut(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(ut(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Ra=(function(){function t(){Di(this,t)}return Ai(t,[{key:"createRequest",value:function(e,i){return new Oa(e,i)}},{key:"getName",value:function(){return"XHRHttpStack"}}])})(),Oa=(function(){function t(e,i){Di(this,t),this._xhr=new XMLHttpRequest,this._xhr.open(e,i,!0),this._method=e,this._url=i,this._headers={}}return Ai(t,[{key:"getMethod",value:function(){return this._method}},{key:"getURL",value:function(){return this._url}},{key:"setHeader",value:function(e,i){this._xhr.setRequestHeader(e,i),this._headers[e]=i}},{key:"getHeader",value:function(e){return this._headers[e]}},{key:"setProgressHandler",value:function(e){"upload"in this._xhr&&(this._xhr.upload.onprogress=function(i){i.lengthComputable&&e(i.loaded)})}},{key:"send",value:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return new Promise(function(o,s){e._xhr.onload=function(){o(new Ta(e._xhr))},e._xhr.onerror=function(r){s(r)},e._xhr.send(i)})}},{key:"abort",value:function(){return this._xhr.abort(),Promise.resolve()}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})(),Ta=(function(){function t(e){Di(this,t),this._xhr=e}return Ai(t,[{key:"getStatus",value:function(){return this._xhr.status}},{key:"getHeader",value:function(e){return this._xhr.getResponseHeader(e)}},{key:"getBody",value:function(){return this._xhr.responseText}},{key:"getUnderlyingObject",value:function(){return this._xhr}}])})();function ht(t){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ht(t)}function Fa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function La(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Ia(o.key),o)}}function za(t,e,i){return e&&La(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ia(t){var e=ja(t,"string");return ht(e)=="symbol"?e:e+""}function ja(t,e){if(ht(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(ht(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Si=!1;try{Si="localStorage"in window;var li="tusSupport",jo=localStorage.getItem(li);localStorage.setItem(li,jo),jo===null&&localStorage.removeItem(li)}catch(t){if(t.code===t.SECURITY_ERR||t.code===t.QUOTA_EXCEEDED_ERR)Si=!1;else throw t}var Da=Si,Aa=(function(){function t(){Fa(this,t)}return za(t,[{key:"findAllUploads",value:function(){var e=this._findEntries("tus::");return Promise.resolve(e)}},{key:"findUploadsByFingerprint",value:function(e){var i=this._findEntries("tus::".concat(e,"::"));return Promise.resolve(i)}},{key:"removeUpload",value:function(e){return localStorage.removeItem(e),Promise.resolve()}},{key:"addUpload",value:function(e,i){var o=Math.round(Math.random()*1e12),s="tus::".concat(e,"::").concat(o);return localStorage.setItem(s,JSON.stringify(i)),Promise.resolve(s)}},{key:"_findEntries",value:function(e){for(var i=[],o=0;o<localStorage.length;o++){var s=localStorage.key(o);if(s.indexOf(e)===0)try{var r=JSON.parse(localStorage.getItem(s));r.urlStorageKey=s,i.push(r)}catch{}}return i}}])})();function He(t){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(t)}function Ma(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ba(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,zs(o.key),o)}}function Ha(t,e,i){return i&&Ba(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Na(t,e,i){return e=Mt(e),qa(t,Ls()?Reflect.construct(e,i||[],Mt(t).constructor):e.apply(t,i))}function qa(t,e){if(e&&(He(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Va(t)}function Va(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ls(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ls=function(){return!!t})()}function Mt(t){return Mt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Mt(t)}function Ka(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$i(t,e)}function $i(t,e){return $i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},$i(t,e)}function Do(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,o)}return i}function De(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Do(Object(i),!0).forEach(function(o){Ya(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Do(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function Ya(t,e,i){return e=zs(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function zs(t){var e=Ga(t,"string");return He(e)=="symbol"?e:e+""}function Ga(t,e){if(He(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(He(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ao=De(De({},At.defaultOptions),{},{httpStack:new Ra,fileReader:new ka,urlStorage:Da?new Aa:new $n,fingerprint:Sa}),Wa=(function(t){function e(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ma(this,e),o=De(De({},Ao),o),Na(this,e,[i,o])}return Ka(e,t),Ha(e,null,[{key:"terminate",value:function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return o=De(De({},Ao),o),At.terminate(i,o)}}])})(At);const Xa=10*1024*1024,Ja=5*1024*1024,Za="https://eu-on-24001.connector.filerobot.com/files",Qa="https://eu-on-24001.connector.filerobot.com/json";function el(t,e){if(!e||!t.file)return!1;const i=e.sizeThreshold??Xa;return t.size>=i}function tl(t,e){const{tusConfig:i}=e,o=e.apiBase.replace(/\/+$/,""),s=i.endpoint||Za,r=i.jsonBase||Qa,n=i.chunkSize??Ja,a=i.resumable!==!1,l=i.parallelChunks??1,c=i.retryDelays??[0,1e3,3e3,5e3],d=o.split("/").pop()||"";let p=!1,u=!1,b=!1;const h={name:t.name,type:t.type,"filerobot-folder":e.folder};Ti(t.product)&&(h.product=JSON.stringify(Fi(t.product)));const _=async()=>`tus-${t.id}-${s}`,C=new Wa(t.file,{endpoint:s,chunkSize:n,retryDelays:c,parallelUploads:l,storeFingerprintForResuming:a,removeFingerprintOnSuccess:!0,headers:{},metadata:h,fingerprint:_,onBeforeRequest(v){const $=e.getAuthHeaders?e.getAuthHeaders():e.authHeaders;for(const[E,L]of Object.entries($))v.setHeader(E,L);v.setHeader("X-Filerobot-Token",d)},onUploadUrlAvailable(){C.url&&e.onUploadUrlAvailable&&!b&&(b=!0,e.onUploadUrlAvailable(C.url))},onProgress(v,$){!u&&!p&&e.onProgress(v,$)},onSuccess(){var v;if(u)return;x();const $=C.url||"",E=(v=$.match(/files\/([^/?]+)/))==null?void 0:v[1];E?ol(r,E,t.size).then(L=>{u||e.onComplete(gt(L)?Oi(L,t):L)}).catch(L=>{u||e.onError(L)}):e.onComplete({status:"success",file:{uuid:"",name:t.name,extension:t.name.split(".").pop()||"",type:t.type,size:t.size,url:{public:$,cdn:$},meta:t.meta,tags:t.tags,info:{},created_at:new Date().toISOString(),modified_at:new Date().toISOString()}})},onError(v){u||(x(),il(v)?e.onError(new Error("Network error during upload — check your connection or firewall settings")):e.onError(v instanceof Error?v:new Error(String(v))))},onShouldRetry(v,$,E){var L;const R=(L=v.originalResponse)==null?void 0:L.getStatus();return R===429?!0:!(R&&R>400&&R<500&&R!==409)}});let U=null,w=null;typeof window<"u"&&(U=()=>{var v;!p&&!u&&(p=!0,C.abort(!1),(v=e.onPause)==null||v.call(e))},w=()=>{var v;p&&!u&&(p=!1,C.start(),(v=e.onResume)==null||v.call(e))},window.addEventListener("offline",U),window.addEventListener("online",w));const x=()=>{U&&window.removeEventListener("offline",U),w&&window.removeEventListener("online",w)},S=()=>{try{C.start()}catch(v){x(),e.onError(v instanceof Error?v:new Error(String(v)))}};return a?C.findPreviousUploads().then(v=>{v.length>0&&!u&&C.resumeFromPreviousUpload(v[0]),u||S()}):S(),{abort(){u=!0,p=!1,x(),C.abort(!0)},pause(){!p&&!u&&(p=!0,C.abort(!1))},resume(){p&&!u&&(p=!1,C.start())},isPaused(){return p}}}function il(t){var e;if(t instanceof et){const i=(e=t.originalRequest)==null?void 0:e.getUnderlyingObject();return i&&typeof i.readyState=="number"&&typeof i.status=="number"?i.readyState!==0&&i.readyState!==4||i.status===0:t.originalResponse==null&&t.causingError!=null}return!1}async function ol(t,e,i){const o=`${t.replace(/\/+$/,"")}/${e}`,s=i>1e8?13e3:6e3,r=3;for(let n=0;n<=r;n++){n>0&&await new Promise(c=>setTimeout(c,s));const a=await fetch(o);if(a.status===404&&n<r)continue;if(!a.ok)throw new Error(`Failed to fetch file record (HTTP ${a.status})`);const l=await a.json();if(gt(l))return l;if(l.file)return{status:"success",file:l.file};if(l.status==="success")return l;if(!(n<r))throw new Error(Dt(l,"File record not available after upload"))}throw new Error("File record not available after upload")}const Rt="_sfxRelativePath",Mo=8,sl=new Set(["node_modules","__MACOSX","$RECYCLE.BIN","System Volume Information"]);function rl(t){return t?t.startsWith(".")?!0:sl.has(t):!1}function Mi(t,e){if(e){try{Object.defineProperty(t,Rt,{value:e,configurable:!0,enumerable:!1,writable:!1});return}catch{}try{Object.defineProperty(t,Rt,{value:e,configurable:!0,enumerable:!1,writable:!0})}catch{t[Rt]=e}}}function nl(t){const e=t[Rt];if(typeof e=="string"&&e)return e;const i=t.webkitRelativePath;if(typeof i=="string"&&i)return i;const o=t.relativePath;return typeof o=="string"?o:""}function al(t){if(!t)return"";const e=t.replace(/^\/+/,"").replace(/\/+$/,""),i=e.lastIndexOf("/");return i===-1?"":e.slice(0,i)}function ll(t,e){const i=(t??"").replace(/\/+$/,""),o=(e??"").replace(/^\/+/,"").replace(/\/+$/,"");return o?i?`${i}/${o}`:o:t??""}async function Is(t){var e;const i=t.items;if(!(i&&i.length>0&&typeof i[0].webkitGetAsEntry=="function"))return{files:Array.from(t.files??[]),hadDirectories:!1};const o=[];let s=!1;for(const n of Array.from(i)){if(n.kind!=="file")continue;const a=(e=n.webkitGetAsEntry)==null?void 0:e.call(n);a&&(a.isDirectory&&(s=!0),o.push(a))}if(o.length===0)return{files:Array.from(t.files??[]),hadDirectories:!1};const r=[];return await js(o,"",r),{files:r,hadDirectories:s}}async function js(t,e,i){for(let o=0;o<t.length;o+=Mo){const s=t.slice(o,o+Mo);await Promise.all(s.map(r=>cl(r,e,i)))}}async function cl(t,e,i){try{if(t.isFile){const o=await dl(t);if(!o)return;const s=e?`${e}/${o.name}`:o.name;Mi(o,s),i.push(o);return}if(t.isDirectory){if(rl(t.name))return;const o=e?`${e}/${t.name}`:t.name,s=await pl(t);await js(s,o,i)}}catch(o){console.warn("[sfx-uploader] folder traversal skipped an entry:",(t==null?void 0:t.name)??t,o)}}function dl(t){return new Promise(e=>{t.file(i=>e(i),()=>e(null))})}function pl(t){return new Promise(e=>{const i=t.createReader(),o=[],s=()=>{i.readEntries(r=>{if(r.length===0){e(o);return}o.push(...r),s()},r=>{console.warn("[sfx-uploader] directory read failed for",t==null?void 0:t.name,r),e(o)})};s()})}class ul{constructor(e,i){this.activeUploads=new Map,this.pausedUploads=new Map,this.retryTimers=new Map,this.unsubscribe=null,this.pendingProgress=new Map,this.progressFlushHandle=null,this.flushProgress=()=>{if(this.progressFlushHandle=null,this.pendingProgress.size===0)return;const o=new Map(this.store.getState().files);let s=!1;for(const[r,n]of this.pendingProgress){const a=o.get(r);a&&a.status==="uploading"&&(o.set(r,{...a,...n}),s=!0)}this.pendingProgress.clear(),s&&this.store.setState({files:o,...this.computeTotals(o)})},this.store=e,this.config=i}start(){this.unsubscribe||(this.unsubscribe=this.store.subscribe(()=>this.processQueue()),this.processQueue())}uploadAll(){const{files:e}=this.store.getState();let i=!1;for(const o of e.values())o.status==="idle"?(Z(this.store,o.id,{status:"queued"}),i=!0):o.status==="queued"&&(i=!0);i&&(this.store.setState({isUploading:!0}),this.processQueue())}retryFile(e){const i=this.store.getState().files.get(e);!i||i.status!=="error"&&i.status!=="failed"||(Z(this.store,e,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0}),this.processQueue())}retryAll(){const{files:e}=this.store.getState();for(const i of e.values())(i.status==="error"||i.status==="failed")&&Z(this.store,i.id,{status:"queued",error:null,progress:0,bytesUploaded:0,speed:0});this.processQueue()}pauseFile(e){const i=this.activeUploads.get(e);i&&"pause"in i&&(i.pause(),this.activeUploads.delete(e),this.pausedUploads.set(e,i),this.pendingProgress.delete(e),Z(this.store,e,{status:"paused"}),this.processQueue())}resumeFile(e){const i=this.pausedUploads.get(e);if(!i)return;const{concurrency:o}=this.store.getState().queueConfig;this.activeUploads.size<o?(this.pausedUploads.delete(e),i.resume(),this.activeUploads.set(e,i),Z(this.store,e,{status:"uploading"})):Z(this.store,e,{status:"queued"})}cancelFile(e){const i=this.store.getState().files.get(e);!i||!Bo(i.status)||(this.abortPausedUpload(e),this.abortUpload(e),Z(this.store,e,{status:"cancelled"}))}cancelAll(){const{files:e}=this.store.getState();for(const i of e.values())Bo(i.status)&&(this.abortPausedUpload(i.id),this.abortUpload(i.id),Z(this.store,i.id,{status:"cancelled"}));this.store.setState({isUploading:!1})}recompute(){this.updateTotalProgress(),this.checkAllComplete()}updateConfig(e){Object.assign(this.config,e)}destroy(){var e;for(const i of this.activeUploads.keys())this.abortUpload(i);for(const i of[...this.pausedUploads.keys()])this.abortPausedUpload(i);for(const i of this.retryTimers.values())clearTimeout(i);this.retryTimers.clear(),this.cancelProgressFlush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}processQueue(){const e=this.store.getState();if(e.isPaused)return;const{concurrency:i}=e.queueConfig,o=this.activeUploads.size,s=i-o;if(s<=0)return;const r=[...e.files.values()].filter(n=>n.status==="queued").sort((n,a)=>n.retryCount!==a.retryCount?a.retryCount-n.retryCount:n.addedAt-a.addedAt).slice(0,s);for(const n of r){const a=this.pausedUploads.get(n.id);a?(this.pausedUploads.delete(n.id),a.resume(),this.activeUploads.set(n.id,a),Z(this.store,n.id,{status:"uploading"})):this.startUpload(n)}}startUpload(e){var i,o;this.pendingProgress.delete(e.id);const s=(o=(i=this.config).resolveUploadParams)==null?void 0:o.call(i,e),r=!!s&&Object.keys(s).length>0,n=!r&&!e.remoteInfo&&!e.remoteUrl&&el(e,this.config.tusConfig);Z(this.store,e.id,{status:"uploading",error:null,isTus:n});let a=0,l=Date.now(),c=0;const d=ll(this.store.getState().targetFolder,e.relativeFolder),p={apiBase:this.config.apiBase,authHeaders:this.config.authHeaders,folder:d,extraParams:r?s:void 0,onComplete:h=>this.handleComplete(e.id,h),onError:h=>this.handleError(e.id,h)},u=(h,_)=>{const C=Date.now(),U=(C-l)/1e3;if(U>0){const x=(h-a)/U;c=c===0?x:.3*x+.7*c}a=h,l=C;const w=_>0?Math.min(h/_*100,100):0;this.pendingProgress.set(e.id,{progress:w,bytesUploaded:h,speed:c}),this.scheduleProgressFlush()};let b;if(e.remoteInfo)b=dn(e,{...p,onProgress:u});else if(e.remoteUrl){if(!this.config.companionUrl){Z(this.store,e.id,{status:"failed",error:"URL import requires connectors.companionUrl to be configured"}),this.checkAllComplete(),this.processQueue();return}b=pn(e,{...p,onProgress:u,companionUrl:this.config.companionUrl,onMeta:h=>{Z(this.store,e.id,{size:h.size,type:h.type||e.type})}})}else if(n){const h=tl(e,{...p,onProgress:u,tusConfig:this.config.tusConfig,getAuthHeaders:()=>this.config.authHeaders,onUploadUrlAvailable:_=>{Z(this.store,e.id,{tusUploadUrl:_})},onPause:()=>{this.activeUploads.delete(e.id),this.pausedUploads.set(e.id,h),this.pendingProgress.delete(e.id),Z(this.store,e.id,{status:"paused"}),this.processQueue()},onResume:()=>{this.pausedUploads.delete(e.id),this.activeUploads.set(e.id,h),Z(this.store,e.id,{status:"uploading"})}});b=h}else b=en(e,{...p,onProgress:u});this.activeUploads.set(e.id,b)}handleComplete(e,i){var o,s,r,n,a,l,c,d,p,u,b;this.activeUploads.delete(e);const h=this.store.getState().files.get(e),_=((o=h==null?void 0:h.previewUrl)==null?void 0:o.startsWith("blob:"))??!1,C=((r=(s=i.file)==null?void 0:s.url)==null?void 0:r.cdn)??((a=(n=i.file)==null?void 0:n.url)==null?void 0:a.cdn_permalink)??((c=(l=i.file)==null?void 0:l.url)==null?void 0:c.permalink)??null,U={status:"complete",progress:100,response:i,alreadyExisted:gt(i)};if(h&&C&&h.type.startsWith("image/")&&!_){const $=((u=(p=this.config).transformPreviewUrl)==null?void 0:u.call(p,C,(d=i.file)==null?void 0:d.url))??C;$&&(U.previewUrl=$)}const w=(b=i.file)==null?void 0:b.size,x=typeof w=="number"?w:w==null?void 0:w.bytes;typeof x=="number"&&(U.size=x);const S=this.store.getState().files,v=S.get(e);if(v){const $=new Map(S);$.set(e,{...v,...U}),this.store.setState({files:$,...this.computeTotals($)})}else this.updateTotalProgress();this.checkAllComplete(),this.processQueue()}handleError(e,i){this.activeUploads.delete(e);const o=this.store.getState().files.get(e);if(!o)return;const{retryConfig:s}=this.store.getState().queueConfig,r=o.retryCount+1;if(r<=s.maxRetries){const n=Math.min(s.baseDelay*Math.pow(s.backoffFactor,o.retryCount),s.maxDelay);Z(this.store,e,{status:"retrying",error:i.message,retryCount:r});const a=setTimeout(()=>{this.retryTimers.delete(e),Z(this.store,e,{status:"queued"}),this.processQueue()},n);this.retryTimers.set(e,a)}else Z(this.store,e,{status:"failed",error:i.message}),this.checkAllComplete(),this.processQueue()}abortPausedUpload(e){const i=this.pausedUploads.get(e);i&&(i.abort(),this.pausedUploads.delete(e))}abortUpload(e){var i;(i=this.activeUploads.get(e))==null||i.abort(),this.activeUploads.delete(e);const o=this.retryTimers.get(e);o&&(clearTimeout(o),this.retryTimers.delete(e))}scheduleProgressFlush(){if(this.progressFlushHandle!==null)return;const e=typeof requestAnimationFrame=="function"?requestAnimationFrame:i=>setTimeout(()=>i(0),16);this.progressFlushHandle=e(this.flushProgress)}cancelProgressFlush(){this.progressFlushHandle!==null&&((typeof cancelAnimationFrame=="function"?cancelAnimationFrame:clearTimeout)(this.progressFlushHandle),this.progressFlushHandle=null,this.pendingProgress.clear())}updateTotalProgress(){this.store.setState(this.computeTotals(this.store.getState().files))}computeTotals(e){let i=0,o=0,s=0,r=0,n=0;for(const a of e.values())a.status==="rejected"||a.status==="cancelled"||(n++,i+=a.size,o+=a.status==="complete"?a.size:Math.min(a.bytesUploaded,a.size),r+=a.status==="complete"?100:a.progress,a.status==="uploading"&&(s+=a.speed));return{totalBytes:i,totalBytesUploaded:o,totalSpeed:s,totalProgress:n>0?Math.min(r/n,100):0}}checkAllComplete(){const{files:e}=this.store.getState();![...e.values()].some(i=>i.status==="queued"||i.status==="uploading"||i.status==="retrying"||i.status==="paused")&&this.store.getState().isUploading&&this.store.setState({isUploading:!1})}}function Bo(t){return t==="queued"||t==="uploading"||t==="retrying"||t==="paused"}function Bi(t,e){return`${(e||"https://api.filerobot.com").replace(/\/+$/,"")}/${t}`}async function hl(t,e,i){const o=`${Bi(t,i)}/key/${encodeURIComponent(e)}`,s=new AbortController,r=setTimeout(()=>s.abort(),3e4);try{const n=await fetch(o,{signal:s.signal});if(clearTimeout(r),!n.ok)throw new Error(`SASS key exchange failed (HTTP ${n.status})`);const a=await n.json();if(a.status==="error")throw new Error(`SASS key exchange failed: ${a.msg||"Unknown error"}`);return a.key}catch(n){throw clearTimeout(r),n instanceof DOMException&&n.name==="AbortError"?new Error("SASS key exchange timed out"):n}}function Ci(t,e){const i={};switch(t.mode){case"security-template":if(!e)throw new Error("[sfx-uploader] Cannot build auth headers for security-template mode: SASS key exchange has not been performed. Call resolveAuth() first or use sass-key mode with a pre-resolved key.");i["X-Filerobot-Key"]=e;break;case"sass-key":i["X-Filerobot-Key"]=t.sassKey;break}return t.airboxPuid&&(i["X-Filerobot-Airbox-Puid"]=t.airboxPuid),i}async function fl(t,e){const i=Bi(t.container,e);if(t.mode==="security-template"){const o=await hl(t.container,t.securityTemplateId,e);return{apiBase:i,headers:Ci(t,o),sassKey:o}}return{apiBase:i,headers:Ci(t)}}const gl="https://ai.scaleflex.com",Ho=300,ml=.85,vl=3e4;function No(t){return t==="low"?.6:t==="high"?.85:.75}async function bl(t,e){var i,o,s;if(t.file)return t.file;const r=t.previewUrl||((s=(o=(i=t.response)==null?void 0:i.file)==null?void 0:o.url)==null?void 0:s.cdn)||t.remoteUrl||"";if(!r)throw new Error("No image source for similarity check");const n=await fetch(r,{signal:e});if(!n.ok)throw new Error(`Failed to load image (HTTP ${n.status})`);return n.blob()}function xl(t){return`${(t||"image").replace(/\.[^./\\]*$/,"")||"image"}.jpg`}async function yl(t){if(typeof createImageBitmap=="function")try{const e=await createImageBitmap(t);return{source:e,width:e.width,height:e.height,close:()=>e.close()}}catch{}return new Promise((e,i)=>{const o=new Image,s=URL.createObjectURL(t);o.onload=()=>{e({source:o,width:o.naturalWidth,height:o.naturalHeight,close:()=>URL.revokeObjectURL(s)})},o.onerror=()=>{URL.revokeObjectURL(s),i(new Error("Image decode failed"))},o.src=s})}async function wl(t){const e=await yl(t);try{const i=e.width>Ho?Ho/e.width:1,o=Math.max(1,Math.round(e.width*i)),s=Math.max(1,Math.round(e.height*i)),r=document.createElement("canvas");r.width=o,r.height=s;const n=r.getContext("2d");if(!n)throw new Error("Canvas 2D not supported");return n.drawImage(e.source,0,0,o,s),await new Promise((a,l)=>{r.toBlob(c=>c?a(c):l(new Error("Canvas toBlob failed")),"image/jpeg",ml)})}finally{e.close()}}async function qo(t,e){var i,o;const s=new AbortController,r=setTimeout(()=>s.abort(),vl),n=()=>s.abort();(i=e.signal)==null||i.addEventListener("abort",n);const a=s.signal,l=()=>{if(a.aborted)throw new DOMException("Aborted","AbortError")};try{l();const c=await bl(t,a);l();const d=await wl(c);l();const p=`${(e.endpoint||gl).replace(/\/+$/,"")}/images/embedding/vectorize/image?threshold=${encodeURIComponent(String(e.threshold))}`,u=new FormData;u.append("file",d,xl(t.name));const b=await fetch(p,{method:"POST",headers:{"Filerobot-Token":e.container,"Filerobot-Key":e.sassKey},body:u,signal:a});if(!b.ok)throw new Error(`Similarity check failed (HTTP ${b.status})`);const h=await b.json();if(h.status==="error")throw new Error(`Similarity check failed: ${h.msg||"Unknown error"}`);return(h.similar_assets??[]).map(([_,C,U])=>({uuid:_,score:C,url:U}))}finally{clearTimeout(r),(o=e.signal)==null||o.removeEventListener("abort",n)}}const Bt="sfx-uploader:last-upload:",Ds=1;function _l(t){var e,i,o,s,r,n,a,l,c;const{file:d,previewUrl:p,...u}=t;let b=null;return t.status==="complete"&&(t.previewUrl&&!t.previewUrl.startsWith("blob:")?b=t.previewUrl:b=((o=(i=(e=t.response)==null?void 0:e.file)==null?void 0:i.url)==null?void 0:o.permalink)??((n=(r=(s=t.response)==null?void 0:s.file)==null?void 0:r.url)==null?void 0:n.cdn_permalink)??((c=(l=(a=t.response)==null?void 0:a.file)==null?void 0:l.url)==null?void 0:c.cdn)??null),{...u,previewUrl:b}}function kl(t){try{const e=sessionStorage.getItem(Bt+t);if(!e)return null;const i=JSON.parse(e);return(i==null?void 0:i.__schemaVersion)!==Ds?null:i}catch{return null}}function Sl(t,e){try{sessionStorage.setItem(Bt+t,JSON.stringify(e))}catch{}}const Je={save(t,e){if(e.length===0){this.clear(t);return}const i={__schemaVersion:Ds,savedAt:Date.now(),files:e.map(_l)};Sl(t,i)},load(t){const e=kl(t);return e?e.files.map(i=>({...i,file:null,previewUrl:i.previewUrl??null})):null},exists(t){try{return sessionStorage.getItem(Bt+t)!=null}catch{return!1}},clear(t){try{sessionStorage.removeItem(Bt+t)}catch{}}},H={FILE_ADDED:"sfx-file-added",FILE_REMOVED:"sfx-file-removed",FILE_REJECTED:"sfx-file-rejected",UPLOAD_STARTED:"sfx-upload-started",UPLOAD_PROGRESS:"sfx-upload-progress",UPLOAD_COMPLETE:"sfx-upload-complete",UPLOAD_ERROR:"sfx-upload-error",UPLOAD_RETRY:"sfx-upload-retry",UPLOAD_PAUSED:"sfx-upload-paused",UPLOAD_RESUMED:"sfx-upload-resumed",ALL_COMPLETE:"sfx-all-complete",FOLDER_COMPLETE:"sfx-folder-complete",TOTAL_PROGRESS:"sfx-total-progress",BEFORE_UPLOAD:"sfx-before-upload",OPEN:"sfx-open",CLOSE:"sfx-close",CANCEL:"sfx-cancel",MINIMIZE:"sfx-minimize",RESTORE:"sfx-restore",PANEL_SHOWN:"sfx-panel-shown",COMPLETE_ACTION:"sfx-complete-action",FILE_PREVIEW:"sfx-file-preview",FILL_METADATA:"sfx-fill-metadata",METADATA_SCHEMA:"sfx-metadata-schema",FILE_LOCATE:"sfx-file-locate",FILE_COPY_CDN:"sfx-file-copy-cdn"};let $l=0;function Le(){return`file-${Date.now()}-${++$l}`}function je(t){if(!Number.isFinite(t)||t<=0)return"0 B";const e=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),e.length-1),o=t/Math.pow(1024,i);return`${i===0?o:o.toFixed(1)} ${e[i]}`}function Vo(t){if(!isFinite(t)||t<=0)return"0s";const e=Math.round(t);if(e<60)return`${e}s`;const i=Math.floor(e/60);if(i>99){const s=Math.floor(i/60),r=i%60;return r>0?`${s}h ${r}m`:`${s}h`}const o=e%60;return o>0?`${i}m ${o}s`:`${i}m`}function le(t){var e;const i=((e=t.name.split(".").pop())==null?void 0:e.toLowerCase())??"";return t.type.startsWith("image/")?"image":t.type.startsWith("video/")||["mp4","mov","avi","webm","mkv","flv","wmv"].includes(i)?"vid":t.type.startsWith("audio/")||["mp3","wav","ogg","flac","aac","m4a","wma"].includes(i)?"audio":t.type==="application/pdf"||i==="pdf"?"pdf":["xls","xlsx","csv","tsv","ods"].includes(i)?"sheet":["doc","docx","txt","rtf","odt","pages"].includes(i)?"doc":["ppt","pptx","key","odp"].includes(i)?"slide":["zip","rar","7z","tar","gz","bz2","xz","zst"].includes(i)?"zip":["js","ts","jsx","tsx","py","rb","go","rs","java","c","cpp","h","cs","php","swift","kt","sh","bash"].includes(i)?"code":["html","css","scss","xml","svg","json","yaml","yml","toml","md","mdx","ini","env","log"].includes(i)?"markup":["ttf","otf","woff","woff2","eot"].includes(i)?"font":["ai","psd","sketch","fig","xd","indd","eps"].includes(i)?"design":["exe","dmg","app","msi","deb","rpm","apk","ipa"].includes(i)?"binary":["sql","db","sqlite","mdb"].includes(i)?"data":"gen"}function Cl(t){const e=t.lastIndexOf(".");return e>=0?t.slice(e+1).toUpperCase():""}const Pl=new Set([".ds_store","thumbs.db","desktop.ini"]);function ci(t){const e=(t.split(/[\\/]/).pop()??t).toLowerCase();return e.startsWith(".ds_store")?!0:Pl.has(e)}const El="https://scaleflex.cloudimg.io/v7/assets/file-types/v3/",As={_default:"9a518a",png:"96cd9a",jpg:"06e819",jpg2:"f0eb7f",jpeg:"6a65e9",gif:"c3c2c3",bmp:"d2243a",webp:"fedd74",svg:"a15e46",tiff:"1f30c3",tif:"b383c9",heic:"84adfe",avif:"536b30",ico:"79063d",psd:"be6140",psb:"678646",ai:"84b254",dwg:"971fb3",mp4:"42f175",webm:"26a84a",avi:"d22ba8",mpeg:"ba93bb",ogv:"74d453","3gp":"f0d388","3g2":"04c652",swf:"3955e2",fla:"daf585",m3u8:"7d5e62",mp3:"66bbef",wav:"d7a7d5",aac:"07f3f9",oga:"a5c622",opus:"9548b1",weba:"4dcf70",mid:"3f0e29",midi:"9fedec",cda:"85b83b",pdf:"18c5f7",doc:"d1b47c",docx:"1eb6b0",txt:"307979",rtf:"978c5f",xls:"13b5f7",xlsx:"79d64a",ppt:"4ee29b",pptx:"8b1568",csv:"4add78",odt:"940781",ods:"9fbe9a",odp:"bf892d",dbf:"457bd4",vsd:"8a9ccb",abw:"313dc7",epub:"15263d",azw:"a018b1",ics:"909f63",ogx:"f694d2",zip:"84f98b",rar:"1d6423","7z":"e007e5",tar:"603aed",gz:"de13f7",bz:"0374ff",bz2:"e14294",arc:"942fad",jar:"149796",mpkg:"dea655",ttf:"d2e2c1",otf:"c904fd",woff:"4b8177",woff2:"b532d3",eot:"a54980",js:"524691",mjs:"d57921",ts:"9af3ae",css:"287863",html:"fa7a87",htm:"21323d",xhtml:"e6d6a9",xul:"6c9c71",json:"104c9e",jsonld:"f30c0f",xml:"7f7194",php:"503e36",sh:"3b820e",csh:"08c0cc",exe:"ccca53",iso:"064b8f",bin:"1e9618"};function Pi(t){const e=t==="_default"?"GENERIC":t.toUpperCase();return`${El}${e}.svg?vh=${As[t]}`}function Ms(t){const e=(t==null?void 0:t.toLowerCase().replaceAll(".",""))||"";return e in As?Pi(e):Pi("_default")}function Bs(){return Pi("_default")}const Ul={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",bmp:"image/bmp",ico:"image/x-icon",heic:"image/heic",heif:"image/heif",mp4:"video/mp4",mov:"video/quicktime",avi:"video/x-msvideo",webm:"video/webm",pdf:"application/pdf",zip:"application/zip",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};function Ko(t){var e;const i=((e=t.split(".").pop())==null?void 0:e.toLowerCase())??"";return Ul[i]||""}function ye(t){return t==="image/heic"||t==="image/heif"}function Rl(t){return new Promise(e=>{const i=document.createElement("video");i.preload="metadata",i.muted=!0,i.playsInline=!0;const o=URL.createObjectURL(t);let s=!1;const r=()=>{s||(s=!0,e(null)),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(o)};i.addEventListener("seeked",()=>{try{const n=document.createElement("canvas");n.width=i.videoWidth||320,n.height=i.videoHeight||240;const a=n.getContext("2d");if(a){a.drawImage(i,0,0,n.width,n.height),n.toBlob(l=>{s||(s=!0,e(l?URL.createObjectURL(l):null),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(o))},"image/jpeg",.7);return}}catch{}r()},{once:!0}),i.addEventListener("error",()=>r(),{once:!0}),setTimeout(()=>r(),5e3),i.src=o,i.addEventListener("loadeddata",()=>{i.currentTime=.1},{once:!0})})}function Ol(t){return(t==null?void 0:t.code)==="max-files"}function di(t,e,i){var o,s;if(e.maxFileSize!=null&&t.size>0&&t.size>e.maxFileSize){const r=(e.maxFileSize/1048576).toFixed(1);return{code:"max-file-size",message:$e("fileExceedsSizeLimit","File exceeds {{limit}} MB limit",{limit:r})}}if(e.maxTotalFilesSize!=null&&t.size>0){let r=t.size;for(const n of i.values())n.status!=="rejected"&&n.status!=="cancelled"&&(r+=n.size);if(r>e.maxTotalFilesSize)return{code:"max-total-size",message:$e("totalSizeLimitExceeded","Total file size limit exceeded")}}if(e.maxNumberOfFiles!=null){let r=0;for(const n of i.values())n.status!=="rejected"&&n.status!=="cancelled"&&r++;if(r>=e.maxNumberOfFiles)return{code:"max-files",message:$e("maxFilesAllowed","Maximum {{count}} files allowed",{count:e.maxNumberOfFiles})}}if(e.allowedFileTypes!=null){const r=e.allowedFileTypes,n="."+(((o=t.name.split(".").pop())==null?void 0:o.toLowerCase())??"");if(!r.some(a=>a.startsWith(".")?n===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return{code:"type-not-allowed",message:$e("fileTypeNotAllowed","File type not allowed")}}if(e.blockedFileTypes!=null){const r=e.blockedFileTypes,n="."+(((s=t.name.split(".").pop())==null?void 0:s.toLowerCase())??"");if(r.some(a=>a.startsWith(".")?n===a.toLowerCase():a.endsWith("/*")?t.type.startsWith(a.slice(0,-1)):t.type===a))return{code:"type-blocked",message:$e("fileTypeBlocked","File type is blocked")}}return null}function Yo(t){return t.allowedFileTypes?t.allowedFileTypes.join(","):""}const Go={"google-drive":{id:"google-drive",label:"Google Drive",fillIcon:!0,icon:"",brandStyle:{background:"transparent"},brandHtml:'<svg width="16" height="16" viewBox="0 0 87.3 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L27.5 53H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5C.4 49.9 0 51.45 0 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.65 10.85z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>'},dropbox:{id:"dropbox",label:"Dropbox",fillIcon:!0,icon:"",brandStyle:{background:"#0061ff"},brandHtml:'<svg width="11" height="11" viewBox="0 0 528 512" fill="white"><path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zm-132 284.5l132-84.3 132 84.3-132 84.4-132-84.4zm132-116.6l132.3-84.3-132.3-83.9 131.6-84.3L528 116.3l-132.3 84.1L528 284.7l-132.4 83.9-131.2-84.4z"/></svg>'},onedrive:{id:"onedrive",label:"OneDrive",fillIcon:!0,icon:"",brandStyle:{background:"#0078d4"},brandHtml:'<svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M10.5 13.5C10.5 11.57 12.07 10 14 10h6.5c.17 0 .34.01.5.02A6 6 0 009.01 11.6 4 4 0 0010.5 13.5zM12 14.5a5 5 0 00-5-5 5 5 0 00-5 5 3 3 0 003 3h9.5A3.5 3.5 0 0018 14c0-.18-.01-.35-.03-.52A5.48 5.48 0 0112 14.5z"/></svg>'},box:{id:"box",label:"Box",fillIcon:!0,icon:"",brandStyle:{background:"#0e50a0","font-size":"9px","font-weight":"800",color:"#fff"},brandHtml:"box"},instagram:{id:"instagram",label:"Instagram",fillIcon:!0,icon:"",brandStyle:{background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.16c2.94 0 3.29.01 4.45.06 1.07.05 1.8.22 2.43.46.66.25 1.21.6 1.77 1.16.55.55.9 1.1 1.16 1.77.25.64.41 1.37.46 2.43.05 1.16.06 1.51.06 4.45s-.01 3.29-.06 4.45c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.55-1.1.9-1.77 1.16-.64.25-1.37.41-2.43.46-1.16.05-1.51.06-4.45.06s-3.29-.01-4.45-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.25-.64-.41-1.37-.46-2.43C2.17 15.29 2.16 14.94 2.16 12s.01-3.29.06-4.45c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 011.16-1.77A4.9 4.9 0 015.61 2.2c.64-.25 1.37-.41 2.43-.46C9.21 2.17 9.56 2.16 12 2.16zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-9.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>'},facebook:{id:"facebook",label:"Facebook",fillIcon:!0,icon:"",brandStyle:{background:"#1877f2"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.02 10.12 11.93v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.09 24 18.09 24 12.07z"/></svg>'},unsplash:{id:"unsplash",label:"Unsplash",fillIcon:!0,icon:"",brandStyle:{background:"#111"},brandHtml:'<svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M8.5 11.5v5h7v-5h5.5V21h-18v-9.5h5.5zm7-8v5h-7v-5h7z"/></svg>'}};function Tl(t){return t.filter(e=>e in Go).map(e=>Go[e])}function Ce(t){return t.brandStyle?f`<span
    class=${nr({"brand-ico":!0,"brand-ico--transparent":t.brandStyle.background==="transparent"})}
    ${Y(t.brandStyle)}
  >${Xi(t.brandHtml)}</span>`:Xi(t.brandHtml)}var Fl=Object.defineProperty,Hs=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Fl(e,i,s),s};const Ll='<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',zl='<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',Il='<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>',jl='<rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="1"/><path d="M7 21l5-5 5 5"/>',ot=[{id:"device",labelKey:"myDevice",label:"My Device",icon:Ll,iconColor:"#2563eb"},{id:"url",labelKey:"urlLink",label:"URL link",icon:zl,iconColor:"#16a34a"},{id:"camera",labelKey:"camera",label:"Camera",icon:Il,iconColor:"#7c3aed"},{id:"screen-cast",labelKey:"screenCapture",label:"Screen capture",icon:jl,iconColor:"#ea580c"}],Ns=class extends ce{constructor(){super(...arguments),this.t=de,this.sources=ot}_handleClick(e){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:e.id},bubbles:!0,composed:!0}))}render(){return f`
      ${this.sources.map(e=>f`
          <button @click=${()=>this._handleClick(e)}>
            ${e.brandHtml?Ce(e):_e`<svg viewBox="0 0 24 24" class=${e.fillIcon?"fill-icon":""}>${we(e.icon)}</svg>`}
            ${e.labelKey?this.t(e.labelKey,e.label):e.label}
          </button>
        `)}
    `}};Ns.styles=se`
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
  `;let Hi=Ns;Hs([F({attribute:!1})],Hi.prototype,"t");Hs([F({type:Array})],Hi.prototype,"sources");function Dl(){return{hidden:!1,required:!1,contributingDependencyUuids:[]}}function Al(t,e){let i=t.get(e);return i||(i=Dl(),t.set(e,i)),i}function Ml(t,e){if(t.length===0||e.length===0)return[];const i=new Set(t);return e.filter(o=>i.has(o))}function Bl(t,e){t.contributingDependencyUuids.includes(e)||t.contributingDependencyUuids.push(e)}function Hl(t,e,i){const o=Al(t,i.targetCkey);switch(Bl(o,e.uuid),i.type){case"hide":o.hidden=!0;break;case"show":o.shown=!0;break;case"require":o.required=!0;break;case"allow_values":{const s=i.allowedValues??[];o.allowedValues=o.allowedValues===void 0?[...s]:Ml(o.allowedValues,s);break}case"set_values":{const s=i.setValues??[];if(s.length===0)break;o.setValue===void 0&&(o.setValue=s.length===1?s[0]:s);break}default:i.type}}function Nl(t,e){for(const i of e.actions)Hl(t,e,i)}const ql=new Set(["application/zip","application/x-zip-compressed","application/vnd.rar","application/x-rar-compressed"]);function Vl(t){const e=new Set;if(!t)return e;const i=t.toLowerCase(),[o]=i.split("/");return o==="image"?e.add("image"):o==="video"?e.add("video"):o==="audio"?e.add("audio"):o==="application"&&e.add("document"),ql.has(i)&&e.add("archive"),e}function Kl(t,e){if(t.formatMimetypes.length===0)return!0;const i=Vl(e);return t.formatMimetypes.some(o=>i.has(o))}function pi(t){return t==null?!0:Array.isArray(t)||typeof t=="string"?t.length===0:!1}function Wo(t){return typeof t=="boolean"?t:t==="true"?!0:t==="false"?!1:null}function Ct(t){return t==null?[]:Array.isArray(t)?t.map(String):[String(t)]}function Xo(t,e){if(t.length!==e.length)return!1;const i=new Set(t);for(const o of e)if(!i.has(o))return!1;return!0}function Jo(t,e){if(t.length===0||e.length===0)return!1;const i=new Set(t);for(const o of e)if(i.has(o))return!0;return!1}function Yl(t,e){const i=e[t.triggerCkey],o=t.triggerValues;switch(t.triggerCondition){case"is_true":return Wo(i)===!0;case"is_false":return Wo(i)===!1;case"is_empty":return pi(i);case"is_not_empty":return!pi(i);case"is_in":return Jo(Ct(i),o);case"is_not_in":return pi(i)?!0:!Jo(Ct(i),o);case"is":return Xo(Ct(i),o);case"is_not":return!Xo(Ct(i),o);default:return!1}}function Gl(t,e){const i=new Map;for(const o of e)o.active&&Kl(o,t.mime)&&Yl(o,t.meta)&&Nl(i,o);return i}function Ot(t,e,i){const o={},s=new Set;for(const a of e.fields)s.add(a.ckey),a.key in t.meta&&(o[a.ckey]=t.meta[a.key]);const r=i.filter(a=>s.has(a.triggerCkey)),n=Gl({mime:t.mime,meta:o},r);for(const a of e.groups){const l=a.ckey?n.get(a.ckey):void 0;if(l!=null&&l.hidden)for(const c of a.fields){const d=n.get(c.ckey);if(d){d.hidden=!0;for(const p of l.contributingDependencyUuids)d.contributingDependencyUuids.includes(p)||d.contributingDependencyUuids.push(p)}else n.set(c.ckey,{hidden:!0,required:!1,contributingDependencyUuids:[...l.contributingDependencyUuids]})}}return n}function Wl(t,e){const i=Array.isArray(e)?e:[e];switch(t.type){case"boolean":{const o=i[0];return o==="true"?!0:o==="false"?!1:null}case"select-one":return i[0]??null;case"multi-select":return i.length>0?i:null;default:return i.length===1?i[0]:i}}function Xl(t,e,i){var o,s;return!!((o=i.get(t.ckey))!=null&&o.hidden||e!=null&&e.ckey&&(s=i.get(e.ckey))!=null&&s.hidden)}function Kc(t,e,i){var o,s;return i?!!((o=i.get(t.ckey))!=null&&o.shown||e!=null&&e.ckey&&(s=i.get(e.ckey))!=null&&s.shown):!1}function Jl(t,e,i){if(i.size===0)return t;let o=null;for(const s of e.groups)for(const r of s.fields)Xl(r,s,i)&&r.key in t&&(o||(o={...t}),delete o[r.key]);return o??t}const Ne="product.ref",qe="product.position",Zl="__product__",Ql=new Set([Ne,qe]);function ec(t){return Ql.has(t)}function tc(t){return t===Ne?"ref":t===qe?"position":null}function ic(t){return[{key:Ne,ckey:Ne,uuid:"product-ref",title:t("productRefLabel","Product reference"),type:"text",placeholder:t("productRefPlaceholder","e.g. SKU-12345"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]},{key:qe,ckey:qe,uuid:"product-position",title:t("productPositionLabel","Position"),type:"numeric",placeholder:t("productPositionPlaceholder","0"),required:0,possible_values:[],regional_variants_group_uuid:null,permissions:[]}]}function oc(t){return{uuid:Zl,isRoot:!1,name:t("productFieldsLabel","Product"),fields:ic(t)}}function sc(t,e){const i=oc(e);let o=-1;for(let l=0;l<t.groups.length;l++)t.groups[l].isRoot&&(o=l);const s=o+1,r=[...t.groups.slice(0,s),i,...t.groups.slice(s)],n=r.flatMap(l=>l.fields),a=new Map(n.map(l=>[l.key,l]));return{...t,groups:r,fields:n,fieldsByKey:a}}function Yc(t,e,i){var o;if(((o=i==null?void 0:i.requiredFields)!=null&&o.includes(t.ckey)||t.required)&&Ht(e))return`${t.title} is required`;if(Ht(e))return null;if(t.key===Ne)return typeof e!="string"||Zr.test(e)?"Reference contains invalid characters":null;if(t.key===qe){const s=Number(e);return!Number.isFinite(s)||!Number.isInteger(s)?"Position must be an integer":null}switch(t.type){case"numeric":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!Number.isInteger(s))return"Must be an integer";if(s<-1999999999||s>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(s<-999999999999e-2||s>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const s=e,r=s.latitude!==""&&s.latitude!=null,n=s.longitude!==""&&s.longitude!=null;if(r!==n)return"Both latitude and longitude are required";if(r&&n){const a=Number(s.latitude),l=Number(s.longitude);if(!Number.isFinite(a)||a<-90||a>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(l)||l<-180||l>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const s=new URL(e);if(!["http:","https:"].includes(s.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(t.validation&&typeof e=="string")try{if(!new RegExp(t.validation).test(e))return"Value does not match expected format"}catch{}return null}function Ht(t){return t==null?!0:Array.isArray(t)||typeof t=="string"?t.length===0:typeof t=="object"?!Object.values(t).some(e=>e!=null&&e!==""):!t}const Tt={LANGUAGES:"FTYPE_LANGUAGES"};function Gc(t,e){if(!t.regional_variants_group_uuid)return;const i=e==null?void 0:e.regionalFilters;return i&&t.regional_variants_group_uuid in i?i[t.regional_variants_group_uuid]:e==null?void 0:e.language}function Wc(t,e,i,o){if(!t.regional_variants_group_uuid||!e)return;const s=e.find(a=>a.uuid===t.regional_variants_group_uuid);if(!s)return;const r=(i==null?void 0:i[s.uuid])??o,n=s.variants.find(a=>a.api_value===r);if(n)return`${s.label}: ${n.label}`}function rc(t,e){var i;const o={};for(const s of t??[]){if(!((i=s.variants)!=null&&i.length))continue;const r=s.type===Tt.LANGUAGES?nc(s.variants,e):void 0;o[s.uuid]=r??s.variants[0].api_value}return o}function nc(t,e){var i;if(!e)return;const o=e.toLowerCase(),s=o.split("-")[0];let r,n;for(const a of t){const l=(i=a.api_value)==null?void 0:i.toLowerCase();if(l){if(l===o)return a.api_value;!r&&l===s&&(r=a.api_value),!n&&l.split("-")[0]===s&&(n=a.api_value)}}return r??n}function ac(t,e){const i=e.fields[t.ckey];let o=!1;const s=(t.possible_values??[]).map(l=>{const c=e.options[l.internal_unique_value];return c&&c!==l.label?(o=!0,{...l,label:c}):l}),r=!!(i!=null&&i.name)&&i.name!==t.title,n=!!(i!=null&&i.placeholder)&&i.placeholder!==t.placeholder,a=!!(i!=null&&i.tooltip)&&i.tooltip!==t.hint;return!o&&!r&&!n&&!a?t:{...t,title:r?i.name:t.title,placeholder:n?i.placeholder:t.placeholder,hint:a?i.tooltip:t.hint,possible_values:o?s:t.possible_values}}function lc(t,e){if(!e||Object.keys(e.fields).length===0&&Object.keys(e.options).length===0)return t;let i=!1;const o=t.groups.map(n=>{let a=!1;const l=n.fields.map(c=>{const d=ac(c,e);return d!==c&&(a=!0),d});return a?(i=!0,{...n,fields:l}):n});if(!i)return t;const s=o.flatMap(n=>n.fields),r=new Map(s.map(n=>[n.key,n]));return{...t,groups:o,fields:s,fieldsByKey:r}}const qs=new Set(["asset-attachments","attachments-assets","integer-list"]),cc=new Set(["face_matcher"]);function Xc(t){return qs.has(t)}function dc(t){return qs.has(t.type)||cc.has(t.ckey)}function pc(t){return t==null?[]:Array.isArray(t)?t.map(String):[String(t)]}function uc(t,e){if(t.length!==e.length)return!1;const i=new Set(t);for(const o of e)if(!i.has(o))return!1;return!0}function hc(t,e){const i=[];for(const[o,s]of e){if(s.hidden)continue;const r=pc(t[o]);if(r.length!==0){if(s.allowedValues!==void 0){const n=new Set(s.allowedValues),a=r.filter(l=>!n.has(l));a.length>0&&i.push({ckey:o,kind:"allow_values",conflictingValues:a,dependencyUuids:[...s.contributingDependencyUuids]})}if(s.setValue!==void 0){const n=Array.isArray(s.setValue)?s.setValue:[s.setValue];uc(r,n)||i.push({ckey:o,kind:"set_values",conflictingValues:r,dependencyUuids:[...s.contributingDependencyUuids]})}}}return i}const fc=new Set(["idle","queued","rejected"]);function Ni(t){return!Ht(t)}function Nt(t,e){var i;return dc(t)?!1:(i=e==null?void 0:e.requiredFields)!=null&&i.includes(t.ckey)?!0:!!t.required}function Jc(t,e,i){var o;return(o=i==null?void 0:i.get(t.ckey))!=null&&o.required?!0:Nt(t,e)}function Gt(t){return[...t.values()].filter(e=>fc.has(e.status))}function gc(t,e){return e.enforceRequiredBeforeUpload===!1?!1:e.enforceRequiredBeforeUpload===!0?!0:t.forceFillingOnUpload!==void 0?t.forceFillingOnUpload:e.requiredFields&&e.requiredFields.length>0?!0:t.fields.some(i=>!!i.required)}function qi(t,e,i){if(!e)return Nt(t,i);const o=e.get(t.ckey);return o!=null&&o.hidden?!1:o!=null&&o.required?!0:Nt(t,i)}function Wt(t,e,i){const o=new Map;if(!i||i.length===0){for(const s of t)o.set(s.id,null);return o}for(const s of t)o.set(s.id,Ot({mime:s.type??"",meta:s.meta},e,i));return o}function Zc(t,e,i,o){const s=Gt(t);if(s.length===0)return{};const r=Wt(s,e,o),n={};for(const a of e.fields){const l=s.filter(c=>{const d=r.get(c.id)??null;return qi(a,d,i)?!Ni(c.meta[a.key]):!1});l.length>0&&(n[a.key]=l)}return n}function mc(t,e,i,o){const s=Gt(t);if(s.length===0)return null;const r=Wt(s,e,o);for(const n of e.fields)if(s.some(a=>{const l=r.get(a.id)??null;return qi(n,l,i)?!Ni(a.meta[n.key]):!1}))return n.key;return null}function vc(t,e,i){var o;const s=t.get(e.id);return s&&s.has(i)?s.get(i):(o=e.meta)==null?void 0:o[i]}function bc(t,e,i){const o=e.get(t.id);if(!o||o.size===0)return t;const s={...t.meta};for(const r of i.fields)o.has(r.key)&&(s[r.key]=o.get(r.key));return{...t,meta:s}}function Qc(t,e,i,o,s){const r=new Set,n=Gt(e);if(n.length===0)return r;const a=n.map(c=>bc(c,t,i)),l=Wt(a,i,s);for(const c of i.fields)n.some((d,p)=>{const u=l.get(a[p].id)??null;return qi(c,u,o)?!Ni(vc(t,d,c.key)):!1})&&r.add(c.key);return r}function xc(t,e,i){if(!i||i.length===0)return null;const o=Gt(t);if(o.length===0)return null;const s=Wt(o,e,i),r=new Map;for(const n of o){const a=s.get(n.id);if(!a||a.size===0)continue;const l={};for(const d of e.fields)d.key in n.meta&&(l[d.ckey]=n.meta[d.key]);const c=hc(l,a);c.length!==0&&r.set(n.id,new Set(c.map(d=>d.ckey)))}if(r.size===0)return null;for(const n of e.fields)for(const a of r.values())if(a.has(n.ckey))return n.key;return null}function ed(t,e){const i={...t};for(const o of Object.keys(e)){const s=e[o];if(s==null||s==="")continue;const r=t[o];if(Array.isArray(s))if(Array.isArray(r)){const n=new Set(r.map(l=>JSON.stringify(l))),a=[...r];for(const l of s){const c=JSON.stringify(l);n.has(c)||(n.add(c),a.push(l))}i[o]=a}else i[o]=s;else i[o]=s}return i}function Vs(t){let e=t;for(;e;){if(e instanceof ShadowRoot){e=e.host;continue}if(e instanceof HTMLDialogElement&&e.open)return e;if(e instanceof Element&&e.shadowRoot){const i=e.shadowRoot.querySelector("dialog[open]");if(i instanceof HTMLDialogElement)return i}e=e.parentNode}return document.body}var yc=Object.defineProperty,oe=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&yc(e,i,s),s};const Zo=3,Ei=new CSSStyleSheet;Ei.replaceSync(`
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
`);var Ze;const ee=(Ze=class extends ce{constructor(){super(...arguments),this.t=de,this.compact=!1,this.externalDragOver=!1,this.accept="",this.multi=!0,this.directory=!1,this.sources=[],this.sourcesLayout="pills",this.mode="modal",this._resizeObserver=null,this._dragOver=!1,this._moreOpen=!1,this._visiblePills=Zo,this._dragCounter=0,this._onDragEnter=t=>{t.preventDefault(),this._dragCounter++,this._dragCounter===1&&(this._dragOver=!0)},this._onDragOver=t=>{t.preventDefault()},this._onDragLeave=t=>{t.preventDefault(),this._dragCounter--,this._dragCounter<=0&&(this._dragCounter=0,this._dragOver=!1)},this._onDrop=t=>{t.preventDefault(),t.stopPropagation(),this._dragCounter=0,this._dragOver=!1;const e=t.dataTransfer;e&&Is(e).then(({files:i,hadDirectories:o})=>{i.length>0?this._emitFiles(i,o):o&&this.dispatchEvent(new CustomEvent("folder-empty",{bubbles:!0,composed:!0}))})},this._onClick=t=>{const e=this.shadowRoot.querySelector(".dz-content");if(e&&this._rippleEl){const i=e.getBoundingClientRect();this._rippleEl.style.left=`${t.clientX-i.left}px`,this._rippleEl.style.top=`${t.clientY-i.top}px`,this._rippleEl.classList.remove("go"),this._rippleEl.offsetWidth,this._rippleEl.classList.add("go")}this.browse()},this._onKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.browse())},this._onFileChange=t=>{const e=t.target,i=Array.from(e.files??[]);for(const o of i){const s=o.webkitRelativePath;s&&Mi(o,s)}i.length>0&&this._emitFiles(i),e.value=""},this._onPaste=t=>{var e;if(!this.isConnected||this.offsetWidth===0)return;const i=(e=t.clipboardData)==null?void 0:e.items;if(!i)return;const o=[];for(const s of i)if(s.kind==="file"){const r=s.getAsFile();r&&o.push(r)}o.length>0&&(t.preventDefault(),this._emitFiles(o))},this._portalContainer=null,this._onDocClick=t=>{var e;this._moreOpen&&((e=this._portalContainer)!=null&&e.contains(t.target)||(this._moreOpen=!1,this._updateDropdownPortal()))},this._onDocKeyDown=t=>{t.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._updateDropdownPortal())},this._resizeTimer=null,this._onScrollOrResize=()=>{this._moreOpen&&this._positionDropdown(),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(()=>this._updateVisiblePills(),100)}}browse(t="files"){var e,i;if(t==="folder"&&this.directory&&this.multi){(e=this.folderInput)==null||e.click();return}(i=this.fileInput)==null||i.click()}_onSourceIconClick(t){this.dispatchEvent(new CustomEvent("source-click",{detail:{source:t.id},bubbles:!0,composed:!0}))}_emitFiles(t,e=!1){this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:t,hadDirectories:e},bubbles:!0,composed:!0}))}_toggleMore(t){t.stopPropagation(),this._moreOpen=!this._moreOpen,this._updateDropdownPortal()}_updateDropdownPortal(){if(this._moreOpen){const t=this.sources.slice(this._visiblePills);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-more-dropdown",""),Vs(this).appendChild(this._portalContainer),this._injectDropdownStyles()),Pe(f`<div class="sfx-more-dropdown open">
          ${t.map(e=>f`
              <button
                class="sfx-more-item"
                @click=${i=>this._onMoreItemClick(e,i)}
              >
                <div class="sfx-more-item-ico">
                  ${e.brandHtml?Ce(e):e.iconColor?f`<svg
                        viewBox="0 0 24 24"
                        ${Y({color:e.iconColor})}
                      >
                        ${we(e.icon)}
                      </svg>`:_e`<svg viewBox="0 0 24 24">${we(e.icon)}</svg>`}
                </div>
                ${e.labelKey?this.t(e.labelKey,e.label):e.label}
              </button>
            `)}
        </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionDropdown())}else this._portalContainer&&(Pe(P,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectDropdownStyles(){var t;const e=(t=this._portalContainer)==null?void 0:t.getRootNode();e&&(e.adoptedStyleSheets.includes(Ei)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,Ei]))}_positionDropdown(){var t,e;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".more-wrap > button"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-more-dropdown");if(!i||!o)return;const s=i.getBoundingClientRect(),r=8,n=o.scrollHeight,a=o.offsetWidth,l=s.top,c=window.innerHeight-s.bottom;l>=n+r||l>c?o.style.top=`${s.top-n-r}px`:o.style.top=`${s.bottom+r}px`;let d=s.right-a;d=Math.max(8,Math.min(d,window.innerWidth-a-8)),o.style.left=`${d}px`}_onMoreItemClick(t,e){e.stopPropagation(),this._moreOpen=!1,this._updateDropdownPortal(),this._onSourceIconClick(t)}_updateVisiblePills(){const t=window.innerWidth;this.sourcesLayout==="cards"?t<=480?this._visiblePills=2:t<=768?this._visiblePills=3:this._visiblePills=5:t<=768?this._visiblePills=1:this._visiblePills=Zo}connectedCallback(){super.connectedCallback(),document.addEventListener("paste",this._onPaste),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onDocKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize),this._updateVisiblePills(),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>{var e;const i=(((e=t[0])==null?void 0:e.contentRect.width)??this.getBoundingClientRect().width)>=Ze._WIDE_THRESHOLD_PX;i&&!this.hasAttribute("data-wide")?this.setAttribute("data-wide",""):!i&&this.hasAttribute("data-wide")&&this.removeAttribute("data-wide")}),this._resizeObserver.observe(this))}updated(t){super.updated(t),t.has("sourcesLayout")&&this._updateVisiblePills(),t.has("t")&&this._moreOpen&&this._updateDropdownPortal()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("paste",this._onPaste),document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onDocKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize),this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._portalContainer&&(Pe(P,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_renderPill(t){return f`
      <button
        class="src-pill"
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?Ce(t):f`<span
              class="pill-ico"
              ${Y(t.iconColor?{color:t.iconColor}:null)}
            >
              ${_e`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${we(t.icon)}</svg>`}
            </span>`}
        ${t.labelKey?this.t(t.labelKey,t.label):t.label}
      </button>
    `}_renderCard(t){return f`
      <button
        class="src-card"
        aria-label=${t.labelKey?this.t(t.labelKey,t.label):t.label}
        @click=${e=>{e.stopPropagation(),this._onSourceIconClick(t)}}
      >
        ${t.brandHtml?f`<span class="card-ico">${Ce(t)}</span>`:f`<span
              class="card-ico"
              ${Y(t.iconColor?{color:t.iconColor}:null)}
            >
              ${_e`<svg viewBox="0 0 24 24" class=${t.fillIcon?"fill-icon":""}>${we(t.icon)}</svg>`}
            </span>`}
        <span class="card-label">${t.labelKey?this.t(t.labelKey,t.label):t.label}</span>
      </button>
    `}_renderMoreCard(){return f`
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
    `}_renderMoreDropdown(){return f`
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
    `}render(){const t=["drop-zone",this._dragOver||this.externalDragOver?"drag-over":"",this.compact?"compact":""].filter(Boolean).join(" "),e=this.sources.slice(0,this._visiblePills),i=this.sources.slice(this._visiblePills);return f`
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

          ${!this.compact&&this.directory&&this.multi?f`<div class="title">
                ${this.t("dragDropClickTo","Drag & Drop, click to")}
                <span>${this.t("browse","browse")}</span>
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${o=>{o.stopPropagation(),this.browse("folder")}}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:f`<div class="title">${this.t("dragAndDrop","Drag & Drop or click to")} <span>${this.t("browse","browse")}</span></div>`}
          ${!this.compact&&this.sources.length>0?f`
                <div class="import-divider"><span>${this.t("orImportFrom","or import from")}</span></div>
                ${this.sourcesLayout==="cards"?f`
                      <div class="sources-cards">
                        ${e.map(o=>this._renderCard(o))}
                        ${i.length>0?this._renderMoreCard():P}
                      </div>
                    `:f`
                      <div class="sources-grid">
                        ${e.map(o=>this._renderPill(o))}
                        ${i.length>0?this._renderMoreDropdown():P}
                      </div>
                    `}
              `:P}
          ${this.compact&&this.sources.length>0?f`
                <div class="sources-row">
                  ${this.sources.map(o=>f`
                      <button
                        class="src-ico"
                        ${Y(o.iconColor&&!o.brandHtml?{color:o.iconColor}:null)}
                        data-tip=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        aria-label=${o.labelKey?this.t(o.labelKey,o.label):o.label}
                        @click=${s=>{s.stopPropagation(),this._onSourceIconClick(o)}}
                      >
                        ${o.brandHtml?Ce(o):_e`<svg viewBox="0 0 24 24" class=${o.fillIcon?"fill-icon":""}>${we(o.icon)}</svg>`}
                      </button>
                    `)}
                </div>
              `:P}

          <div class="ripple"></div>
        </div>
        <input
          data-sfx-dz-files
          type="file"
          ?multiple=${this.multi}
          accept=${this.accept||P}
          @change=${this._onFileChange}
        />
        ${this.directory&&this.multi?f`<input
              data-sfx-dz-folder
              type="file"
              multiple
              webkitdirectory
              @change=${this._onFileChange}
            />`:P}
      </div>
    `}},Ze.styles=se`
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
  `,Ze._WIDE_THRESHOLD_PX=1200,Ze);oe([F({attribute:!1})],ee.prototype,"t");oe([F({type:Boolean,reflect:!0})],ee.prototype,"compact");oe([F({type:Boolean,attribute:"external-drag-over"})],ee.prototype,"externalDragOver");oe([F({type:String})],ee.prototype,"accept");oe([F({type:Boolean})],ee.prototype,"multi");oe([F({type:Boolean})],ee.prototype,"directory");oe([F({type:Array})],ee.prototype,"sources");oe([F({type:String,attribute:"sources-layout"})],ee.prototype,"sourcesLayout");oe([F({type:String,reflect:!0})],ee.prototype,"mode");oe([I()],ee.prototype,"_dragOver");oe([I()],ee.prototype,"_moreOpen");oe([I()],ee.prototype,"_visiblePills");oe([Ri(".ripple")],ee.prototype,"_rippleEl");oe([Ri("input[data-sfx-dz-files]")],ee.prototype,"fileInput");oe([Ri("input[data-sfx-dz-folder]")],ee.prototype,"folderInput");let wc=ee;class _c{constructor(e){this._unsubscribe=null,this._host=e,e.addController(this)}hostConnected(){this._unsubscribe=Ar(()=>this._host.requestUpdate())}hostDisconnected(){var e;(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=null}}const Ks=class extends ce{constructor(){super(...arguments),this._i18nController=new _c(this)}render(){return f`
      <div class="line"></div>
      <div class="label">${$e("orImportFrom","or import from")}</div>
      <div class="line"></div>
    `}};Ks.styles=se`
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
  `;let kc=Ks;var Sc=Object.defineProperty,G=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Sc(e,i,s),s};const Ui=new CSSStyleSheet;Ui.replaceSync(`
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
`);const Ys=class extends ce{constructor(){super(...arguments),this.t=de,this.files=[],this.showDropTile=!1,this.sources=[],this.accept="",this.multi=!0,this.directory=!1,this.allowRename=!0,this.mode="upload",this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedIds=new Set,this.allSelected=!1,this.selectionFull=!1,this.maxSelection=0,this.previewOpen=!1,this.searchRunIds=[],this.searchActiveIds=new Set,this.searchResults=new Map,this._moreOpen=!1,this._dropTileMaxVisible=3,this._portalContainer=null,this._outsideClickHandler=e=>{var i;if((i=this._portalContainer)!=null&&i.contains(e.target))return;const o=this.renderRoot.querySelector(".drop-tile-more-wrap"),s=e.composedPath();o&&s.includes(o)||(this._moreOpen=!1,this._closePortal(),document.removeEventListener("click",this._outsideClickHandler,!0))},this._onScrollOrResize=()=>{this._moreOpen&&this._positionPortal()},this._onKeyDown=e=>{e.key==="Escape"&&this._moreOpen&&(this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners())},this._updateDropTileMaxVisible=()=>{const e=window.innerWidth<=768?1:3;e!==this._dropTileMaxVisible&&(this._dropTileMaxVisible=e)},this._fileIdsKey=""}_onDropTileClick(){const e=this.renderRoot.querySelector("input[data-sfx-fl-files]");e==null||e.click()}_onDropTileFolderClick(e){e.stopPropagation();const i=this.renderRoot.querySelector("input[data-sfx-fl-folder]");i==null||i.click()}_onFileInput(e){const i=e.target,o=Array.from(i.files??[]);for(const s of o){const r=s.webkitRelativePath;r&&Mi(s,r)}o.length>0&&this.dispatchEvent(new CustomEvent("files-selected",{detail:{files:o},bubbles:!0,composed:!0})),i.value=""}_onSourceClick(e,i){if(e.stopPropagation(),i.id==="device"){const o=this.renderRoot.querySelector('input[type="file"]');o==null||o.click();return}this.dispatchEvent(new CustomEvent("source-click",{detail:{source:i},bubbles:!0,composed:!0}))}_addGlobalListeners(){requestAnimationFrame(()=>document.addEventListener("click",this._outsideClickHandler,!0)),document.addEventListener("keydown",this._onKeyDown),window.addEventListener("scroll",this._onScrollOrResize,!0),window.addEventListener("resize",this._onScrollOrResize)}_removeGlobalListeners(){document.removeEventListener("click",this._outsideClickHandler,!0),document.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("scroll",this._onScrollOrResize,!0),window.removeEventListener("resize",this._onScrollOrResize)}updated(e){super.updated(e),e.has("t")&&this._moreOpen&&this._openPortal()}_toggleMore(e){e.stopPropagation(),this._moreOpen=!this._moreOpen,this._moreOpen?(this._openPortal(),this._addGlobalListeners()):(this._closePortal(),this._removeGlobalListeners())}_openPortal(){const e=this.sources.slice(this._dropTileMaxVisible);this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-tile-dropdown",""),Vs(this).appendChild(this._portalContainer),this._injectTileDropdownStyles()),Pe(f`<div class="sfx-tile-dropdown">
        ${e.map(i=>f`
          <button
            class="sfx-tile-dropdown-item"
            @click=${o=>this._onMoreSourceClick(o,i)}
          >
            <span class="sfx-tile-dropdown-ico" ${Y(i.iconColor&&!i.brandHtml?{color:i.iconColor}:null)}>
              ${i.brandHtml?Ce(i):_e`<svg viewBox="0 0 24 24" class=${i.fillIcon?"fill-icon":""}>${we(i.icon)}</svg>`}
            </span>
            ${i.labelKey?this.t(i.labelKey,i.label):i.label}
          </button>
        `)}
      </div>`,this._portalContainer),requestAnimationFrame(()=>this._positionPortal())}_positionPortal(){var e;const i=this.renderRoot.querySelector(".drop-tile-more"),o=(e=this._portalContainer)==null?void 0:e.querySelector(".sfx-tile-dropdown");if(!i||!o)return;const s=i.getBoundingClientRect(),r=6,n=o.scrollHeight,a=o.offsetWidth,l=s.top,c=window.innerHeight-s.bottom;l>=n+r||l>c?o.style.top=`${s.top-n-r}px`:o.style.top=`${s.bottom+r}px`;let d=s.right-a;d=Math.max(8,Math.min(d,window.innerWidth-a-8)),o.style.left=`${d}px`}_closePortal(){this._portalContainer&&(Pe(P,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null)}_injectTileDropdownStyles(){var e;const i=(e=this._portalContainer)==null?void 0:e.getRootNode();i&&(i.adoptedStyleSheets.includes(Ui)||(i.adoptedStyleSheets=[...i.adoptedStyleSheets,Ui]))}connectedCallback(){super.connectedCallback(),this._updateDropTileMaxVisible(),window.addEventListener("resize",this._updateDropTileMaxVisible)}disconnectedCallback(){super.disconnectedCallback(),this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),window.removeEventListener("resize",this._updateDropTileMaxVisible)}_onMoreSourceClick(e,i){this._moreOpen=!1,this._closePortal(),this._removeGlobalListeners(),this._onSourceClick(e,i)}_renderDropTile(){const e=this._dropTileMaxVisible,i=this.sources.slice(0,e),o=this.sources.slice(e);return f`
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
          ${this.directory&&this.multi?f`<div class="drop-tile-folder-pick">
                ${this.t("orUploadFolderPrefix","or upload a ")}<button
                  type="button"
                  @click=${this._onDropTileFolderClick}
                >${this.t("uploadFolder","folder")}</button>
              </div>`:P}
          ${i.length>0?f`
            <div class="drop-tile-sources">
              ${i.map(s=>f`
                <button
                  class="drop-tile-src"
                  ${Y(s.iconColor&&!s.brandHtml?{color:s.iconColor}:null)}
                  title=${s.labelKey?this.t(s.labelKey,s.label):s.label}
                  @click=${r=>this._onSourceClick(r,s)}
                >
                  ${s.brandHtml?Ce(s):_e`<svg viewBox="0 0 24 24" class=${s.fillIcon?"fill-icon":""}>${we(s.icon)}</svg>`}
                </button>
              `)}
              ${o.length>0?f`
                <div class="drop-tile-more-wrap">
                  <button class="drop-tile-more" title=${this.t("moreSources","More sources")} @click=${s=>this._toggleMore(s)}>···</button>
                </div>
              `:P}
            </div>
          `:P}
        </div>
        <input data-sfx-fl-files type="file" ?multiple=${this.multi} accept=${this.accept||P} @change=${this._onFileInput} />
        ${this.directory&&this.multi?f`<input data-sfx-fl-folder type="file" multiple webkitdirectory @change=${this._onFileInput} />`:P}
      </div>
    `}_onSelectAll(e){const i=e.target.checked;this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:i},bubbles:!0,composed:!0}))}_onSearchCancel(){this.dispatchEvent(new CustomEvent("check-similar-search-cancel",{bubbles:!0,composed:!0}))}_statusFor(e){return this.searchActiveIds.has(e)?"searching":this.searchRunIds.includes(e)&&!this.searchResults.has(e)?"queued":""}shouldUpdate(e){const i=this.files.map(s=>s.id).join(","),o=i!==this._fileIdsKey;return this._fileIdsKey=i,this.store?!(e.size===1&&e.has("files")&&!o):!0}render(){const e=this.searchRunIds.length,i=this.searchRunIds.filter(r=>this.searchResults.has(r)).length,o=e?Math.round(i/e*100):0,s=e>0&&i===e;return f`
      ${e>1&&!this.previewOpen?f`
            <div class="similar-banner search">
              ${s?f`<span class="search-done-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>`:f`<span class="search-ring"></span>`}
              <div class="similar-banner-txt">
                <b>${s?this.t("similarCheckDone","Similarity check complete"):this.t("checkingSimilar","Checking for similar assets…")}</b>
                <span>${this.t("similarProgress","{{done}} of {{total}} done",{done:i,total:e})}</span>
                <div class="search-bar"><div class="search-bar-fill" ${Y({width:`${o}%`})}></div></div>
              </div>
              <button class="search-cancel" @click=${this._onSearchCancel}>
                ${s?this.t("done","Done"):this.t("cancel","Cancel")}
              </button>
            </div>
          `:P}
      <div class="grid">
        ${this.showDropTile&&this.mode!=="review"?this._renderDropTile():P}
        ${Qe(this.files,r=>r.id,(r,n)=>{const a=this.searchResults.get(r.id);return f`<sfx-file-item .t=${this.t} .store=${this.store} .fileId=${r.id} .file=${r} .mode=${this.mode} .allowRename=${this.allowRename} .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton} .showCheckSimilar=${this.showCheckSimilar} .selectMode=${this.selectMode} .isSelected=${this.selectedIds.has(r.id)} .selectionActive=${this.selectedIds.size>0} .selectionFull=${this.selectionFull} .previewOpen=${this.previewOpen} .similarStatus=${this._statusFor(r.id)} .similarCount=${(a==null?void 0:a.length)??-1} .similarResults=${a??[]} ${Y({"--tile-index":String(n)})}></sfx-file-item>`})}
      </div>
    `}};Ys.styles=se`
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

    .similar-banner-ico svg { width: 16px; height: 16px; }

    .similar-banner-txt { flex: 1; min-width: 0; }
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
      transition: background-color 0.15s ease, box-shadow 0.15s ease;
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

    @keyframes simBannerSpin { to { transform: rotate(360deg); } }

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
    .search-done-ico svg { width: 14px; height: 14px; }

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
    .search-cancel:hover { background: var(--sfx-up-border-light, #f1f5f9); }

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
  `;let K=Ys;G([F({attribute:!1})],K.prototype,"t");G([F({attribute:!1})],K.prototype,"files");G([F({attribute:!1})],K.prototype,"store");G([F({type:Boolean})],K.prototype,"showDropTile");G([F({attribute:!1})],K.prototype,"sources");G([F({type:String})],K.prototype,"accept");G([F({type:Boolean})],K.prototype,"multi");G([F({type:Boolean})],K.prototype,"directory");G([F({type:Boolean})],K.prototype,"allowRename");G([F({type:String})],K.prototype,"mode");G([F({type:Boolean})],K.prototype,"showLocateButton");G([F({type:Boolean})],K.prototype,"showCopyCdnButton");G([F({type:Boolean})],K.prototype,"showCheckSimilar");G([F({type:Boolean})],K.prototype,"selectMode");G([F({attribute:!1})],K.prototype,"selectedIds");G([F({type:Boolean})],K.prototype,"allSelected");G([F({type:Boolean})],K.prototype,"selectionFull");G([F({type:Number})],K.prototype,"maxSelection");G([F({type:Boolean})],K.prototype,"previewOpen");G([F({attribute:!1})],K.prototype,"searchRunIds");G([F({attribute:!1})],K.prototype,"searchActiveIds");G([F({attribute:!1})],K.prototype,"searchResults");G([I()],K.prototype,"_moreOpen");G([I()],K.prototype,"_dropTileMaxVisible");var $c=Object.defineProperty,J=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&$c(e,i,s),s};const Gs=class extends ce{constructor(){super(...arguments),this.t=de,this.fileId="",this.mode="upload",this.allowRename=!0,this.showLocateButton=!1,this.showCopyCdnButton=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.isSelected=!1,this.selectionActive=!1,this.selectionFull=!1,this.previewOpen=!1,this.similarStatus="",this.similarCount=-1,this.similarResults=[],this.reviewPick=!1,this._dims="",this._simPopover=!1,this._simPopLeft=0,this._simPopTop=0,this._simPopTimer=null,this._simHideTimer=null,this._copied=!1,this._copiedTimer=null,this._tip="",this._tipLeft=0,this._tipTop=0,this._tipBelow=!1,this._dimsForUrl=null,this._tileRendered=!1,this._simPopoverShow=()=>{if(this.previewOpen||!this.similarResults.length||(this._simCancelHide(),this._simPopover))return;const e=this.getBoundingClientRect(),i=240,o=280;let s=e.right+12;s+i>window.innerWidth-8&&(s=e.left-i-12),this._simPopLeft=Math.max(8,s),this._simPopTop=Math.max(8,Math.min(e.top,window.innerHeight-o-8)),this._simPopTimer&&clearTimeout(this._simPopTimer),this._simPopTimer=window.setTimeout(()=>{this._simPopover=!0,this._syncHostZIndex()},150)},this._simCancelHide=()=>{this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null)},this._simScheduleHide=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&clearTimeout(this._simHideTimer),this._simHideTimer=window.setTimeout(()=>this._simPopoverClose(),180)},this._simPopoverClose=()=>{this._simPopTimer&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._simPopover&&(this._simPopover=!1),this._syncHostZIndex()},this._showTip=(e,i)=>{const o=i.currentTarget.getBoundingClientRect(),s=140;this._tipLeft=Math.max(s+8,Math.min(o.left+o.width/2,window.innerWidth-s-8)),this._tipBelow=o.top<60,this._tipTop=this._tipBelow?o.bottom+8:o.top-8,this._tip=e,this._syncHostZIndex()},this._hideTip=()=>{this._tip&&(this._tip="",this._syncHostZIndex())}}get _file(){return this.store&&this.fileId?this.store.getState().files.get(this.fileId):this.file}connectedCallback(){super.connectedCallback(),this.store&&this.fileId&&!this._unsubscribe&&(this._lastFile=this._file,this._unsubscribe=this.store.subscribe(e=>{const i=e.files.get(this.fileId);i!==this._lastFile&&(this._lastFile=i,this.requestUpdate())}))}firstUpdated(){if(typeof IntersectionObserver>"u"){this._tileRendered=!0,this._maybeProbeDims();return}const e=this.getRootNode(),i=e instanceof ShadowRoot?e.host:null;this._io=new IntersectionObserver(o=>{var s;o.some(r=>r.isIntersecting)&&(this._tileRendered=!0,this._maybeProbeDims(),(s=this._io)==null||s.disconnect(),this._io=void 0)},{root:i,rootMargin:"200px"}),this._io.observe(this)}updated(){this._tileRendered&&this._maybeProbeDims(),this._tip&&!this._hasBadge()&&this._hideTip()}_hasBadge(){const e=this._file;if(!e)return!1;const i=(e.status==="error"||e.status==="failed"||e.status==="rejected")&&!!e.error&&this.mode!=="review",o=e.status==="complete"&&!!e.alreadyExisted;return i||o}_maybeProbeDims(){var e,i;const o=this._file,s=(o==null?void 0:o.previewUrl)??null;if(s!==this._dimsForUrl){if(this._dimsForUrl=s,this._dims="",s!=null&&s.startsWith("blob:")){const r=new Image;r.onload=()=>{var n;((n=this._file)==null?void 0:n.previewUrl)===s&&(this._dims=`${r.naturalWidth}×${r.naturalHeight}`)},r.src=s}else if((i=(e=o==null?void 0:o.response)==null?void 0:e.file)!=null&&i.info){const r=o.response.file.info;r.img_w&&r.img_h&&(this._dims=`${r.img_w}×${r.img_h}`)}}}disconnectedCallback(){var e,i;super.disconnectedCallback(),this._simPopTimer!=null&&(clearTimeout(this._simPopTimer),this._simPopTimer=null),this._simHideTimer!=null&&(clearTimeout(this._simHideTimer),this._simHideTimer=null),this._copiedTimer!=null&&(clearTimeout(this._copiedTimer),this._copiedTimer=null),this._tip="",this._simPopover=!1,this.style.zIndex="",(e=this._unsubscribe)==null||e.call(this),this._unsubscribe=void 0,(i=this._io)==null||i.disconnect(),this._io=void 0}_emit(e,i){var o;this.dispatchEvent(new CustomEvent(e,{detail:{fileId:(o=this._file)==null?void 0:o.id,...i},bubbles:!0,composed:!0}))}_remove(){this._emit("file-remove")}_retry(){this._emit("file-retry")}_pause(){this._emit("file-pause")}_resume(){this._emit("file-resume")}_rename(e){const i=e.target.value.trim();i&&this._emit("file-rename",{name:i})}_preview(e){e.stopPropagation(),this._emit("file-preview")}_checkSimilarSingle(e){e.stopPropagation(),this._file&&this._emit("check-similar-single",{file:this._file})}_toggleSimilar(e){e.stopPropagation(),!(this.selectionFull&&!this.isSelected)&&this._emit("similar-toggle")}_reviewSelect(){var e;this._emit("similar-results-select",{fileId:(e=this._file)==null?void 0:e.id})}_openResults(e){e.stopPropagation(),this._simPopoverClose(),this._emit("similar-open-results")}_syncHostZIndex(){this.style.zIndex=this._tip||this._simPopover?"50":""}_locate(e){e.stopPropagation(),this._file&&this._emit("file-locate",{file:this._file})}async _copyCdn(e){var i,o,s,r;e.stopPropagation();const n=(r=(s=(o=(i=this._file)==null?void 0:i.response)==null?void 0:o.file)==null?void 0:s.url)==null?void 0:r.cdn;if(n){try{await navigator.clipboard.writeText(n)}catch{return}this._emit("file-copy-cdn",{file:this._file,cdnUrl:n}),this._copied=!0,this._copiedTimer&&clearTimeout(this._copiedTimer),this._copiedTimer=window.setTimeout(()=>{this._copied=!1,this._copiedTimer=null},1400)}}render(){var e,i,o;const s=this._file;if(!s)return P;const r=le(s),n=s.status==="complete",a=s.status==="uploading",l=s.status==="paused",c=s.status==="error"||s.status==="failed",d=s.status==="rejected",p=this.mode==="review",u=p||this.reviewPick||!this.allowRename,b=Cl(s.name),h=r==="image"&&!ye(s.type),_=this.selectMode&&h&&!p,C=this.similarCount>=0,U=_&&!C&&!n&&this.similarStatus==="",w=!p&&!n&&!a&&!l&&!c&&s.status!=="rejected"&&this.similarStatus!=="searching"&&!this.reviewPick,x=w,S=["tile",n?"done":"",a?"uploading":"",l?"paused":"",d?"rejected":"",p?"review":"",U?"selectable":"",U&&this.isSelected?"selected":"",this.selectionActive&&!h&&!p?"select-dimmed":"",x?"cs-overlay":"",this.similarStatus==="queued"?"sim-queued":"",this.reviewPick?"review-pick":"",this.reviewPick&&this.isSelected?"selected":""].filter(Boolean).join(" ");return f`
      <div
        class=${S}
        tabindex="0"
        @click=${this.reviewPick?this._reviewSelect:U?this._toggleSimilar:void 0}
      >
        <!-- Preview area -->
        <div class="preview">
          ${s.previewUrl?f`<img class="preview-img" src=${s.previewUrl} alt="" decoding="async" />`:f`
                <div class="preview-bg ${r}"></div>
                <div class="type-icon">
                  <img
                    class="type-icon-img"
                    src=${Ms(b)}
                    alt="${b?this.t("extFile","{{ext}} file",{ext:b}):this.t("file","File")}"
                    @error=${v=>{const $=v.target,E=Bs();!$.dataset.fallback&&$.src!==E&&($.dataset.fallback="1",$.src=E)}}
                  />
                </div>
              `}

          <!-- Similarity search: spinner overlay while this image is being checked -->
          ${this.similarStatus==="searching"?f`
                <div class="sim-search-overlay">
                  <div class="sim-spinner"></div>
                  <div class="sim-label">${this.t("searching","Searching…")}</div>
                </div>
              `:P}

          <!-- Similarity result badge once checked: "N similar" (click to open
               results) or "No similar". Replaces the green check. -->
          ${!this.similarStatus&&this.similarCount>=0?this.similarCount>0?f`
                  <span class="sim-result-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    ${this.t("nSimilar","{{count}} similar",{count:this.similarCount})}
                  </span>
                `:f`<span class="sim-result-badge none">${this.t("noSimilar","No similar")}</span>`:P}

          <!-- Similar-image selection checkbox (selection mode, unchecked images only) -->
          ${U?f`
                <span
                  class="similar-cb ${this.isSelected?"checked":""} ${this.selectionFull&&!this.isSelected?"disabled":""}"
                  @click=${this._toggleSimilar}
                  role="checkbox"
                  aria-checked=${this.isSelected?"true":"false"}
                  aria-disabled=${this.selectionFull&&!this.isSelected?"true":"false"}
                  aria-label=${this.t("selectImage","Select image")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              `:P}

          <!-- Centered hover actions: Details + (optional) Check similar.
               Not in review mode (review uses Locate / Copy CDN) and hidden
               while picking images in similar-selection mode. -->
          ${w?f`
                <div class="center-actions">
                  <button class="preview-btn" @click=${this._preview} aria-label=${this.t("details","Details")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="cs-label">${this.t("details","Details")}</span>
                  </button>
                  ${this.similarCount>0?f`
                        <button class="check-similar-btn" @click=${this._openResults} @mouseenter=${this._simPopoverShow} @mouseleave=${this._simScheduleHide} aria-label=${this.t("viewSimilar","View similar assets")}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          </svg>
                          <span class="cs-label">${this.t("viewNSimilar","View {{count}} similar",{count:this.similarCount})}</span>
                        </button>
                      `:this.similarCount===0?f`
                          <button class="check-similar-btn no-similar" @click=${this._openResults} aria-label=${this.t("noSimilarFound","No similar assets found")}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                              <circle cx="11" cy="11" r="7"/>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                            <span class="cs-label">${this.t("noSimilar","No similar")}</span>
                          </button>
                        `:this.showCheckSimilar&&h?f`
                            <button class="check-similar-btn" @click=${this._checkSimilarSingle} aria-label=${this.t("checkSimilar","Check similar")}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                                <circle cx="11" cy="11" r="7"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              </svg>
                              <span class="cs-label">${this.t("checkSimilar","Check similar")}</span>
                            </button>
                          `:P}
                </div>
              `:P}

          <!-- Locate / Copy-CDN hover actions: Locate (deep-link to the asset
               in the admin DAM) + Copy CDN (copy CDN URL to clipboard).
               Shown on any completed tile (the single-view upload list and the
               review screen) that has a response.file and the host enabled the
               feature. Each inner button has its own gate — Locate needs uuid,
               Copy CDN needs url.cdn — so an already-existed-but-missing-uuid
               edge case won't render a dead button. The outer gate mirrors the
               two inner gates so we never render (and hover-reveal) an empty
               overlay when neither button qualifies. -->
          ${n&&(e=s.response)!=null&&e.file&&(this.showLocateButton&&s.response.file.uuid||this.showCopyCdnButton&&(i=s.response.file.url)!=null&&i.cdn)?f`
                <div class="review-actions">
                  ${this.showLocateButton&&s.response.file.uuid?f`<button class="review-action secondary" @click=${this._locate} aria-label=${this.t("locate","Locate")}>
                        <svg viewBox="0 0 24 24">${ps}</svg>
                        ${this.t("locate","Locate")}
                      </button>`:P}
                  ${this.showCopyCdnButton&&(o=s.response.file.url)!=null&&o.cdn?f`<button class="review-action primary ${this._copied?"copied":""}" @click=${this._copyCdn} title=${this.t("copyCdn","Copy CDN")} aria-label=${this.t("copyCdnLink","Copy CDN link to clipboard")}>
                        ${this._copied?f`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`:f`<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        ${this._copied?this.t("copied","Copied"):this.t("copyCdn","Copy CDN")}
                      </button>`:P}
                </div>
              `:P}

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
          ${n?f`<div class="done-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>`:P}

          <!-- Failed badge (review mode only — failed files get a visible status) -->
          ${p&&c?f`<div class="failed-badge" title=${s.error||this.t("uploadFailed","Upload failed")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>`:P}

          <!-- Progress bar (visible during upload and when paused; not in review mode) -->
          ${!p&&(s.status==="uploading"||s.status==="paused")?f`
                <div class="progress">
                  <div class="progress-fill" ${Y({transform:`scaleX(${Math.min(s.progress,100)/100})`})}></div>
                </div>
              `:P}

          <!-- Error / rejected text overlay (suppressed in review mode — failed-badge takes over) -->
          ${(c||d)&&s.error&&!p?f`<div
                class="error-badge"
                @mouseenter=${v=>this._showTip(s.error??"",v)}
                @mouseleave=${this._hideTip}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span class="error-badge-text">${s.error}</span>
              </div>`:P}

          <!-- "Already uploaded" note (same content already on the server —
               neutral, not an error). Shown for completed files in both the
               upload-complete view and the review screen. -->
          ${n&&s.alreadyExisted?f`<div
                class="exists-badge"
                @mouseenter=${v=>this._showTip(this.t("alreadyUploaded","Already uploaded"),v)}
                @mouseleave=${this._hideTip}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span>${this.t("alreadyUploaded","Already uploaded")}</span>
              </div>`:P}

          <!-- Video duration badge (hidden when error badge or exists badge is shown to avoid overlap) -->
          ${!(c||d)&&!(n&&s.alreadyExisted)&&s.duration!=null&&s.duration>0?f`<div class="duration-badge">${this._formatDuration(s.duration)}</div>`:P}
        </div>

        <!-- Action buttons (hidden in review mode and the standalone results-
             pick mode — files are read-only there) -->
        ${p||this.reviewPick?P:f`
        <div class="actions">
          ${a&&s.isTus?f`
                <button class="act-btn pause" @click=${this._pause} title=${this.t("pause","Pause")} aria-label=${this.t("pauseUpload","Pause upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                </button>
              `:P}
          ${l?f`
                <button class="act-btn resume" @click=${this._resume} title=${this.t("resume","Resume")} aria-label=${this.t("resumeUpload","Resume upload")}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              `:P}
          ${c?f`
                <button class="act-btn retry" @click=${this._retry} title=${this.t("retry","Retry")} aria-label=${this.t("retryUpload","Retry upload")}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                  </svg>
                </button>
              `:P}
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
          <input class="name-input" type="text" .value=${s.name} title=${s.name}
            aria-label=${this.t("fileName","File name")}
            ?readonly=${u}
            @change=${u?P:this._rename} @click=${v=>v.stopPropagation()} />
          <div class="meta">${b||""}${s.size?` · ${je(s.size)}`:""}${this._dims?` · ${this._dims}`:""}</div>
        </div>
      </div>
      ${this._renderSimPopover()}
      ${this._renderTip()}
    `}_renderTip(){return this._tip?f`<div
      class="hover-tip ${this._tipBelow?"below":""}"
      role="tooltip"
      ${Y({left:`${this._tipLeft}px`,top:`${this._tipTop}px`})}
    >
      ${this._tip}
    </div>`:P}_renderSimPopover(){if(!this._simPopover||!this.similarResults.length)return P;const e=[...this.similarResults].sort((l,c)=>c.score-l.score),i=e[0],o=e.length,s=e.slice(1),r=s.slice(0,3),n=s.length-r.length,a=Math.round(i.score*100);return f`
      <div
        class="sim-popover"
        @mouseenter=${this._simCancelHide}
        @mouseleave=${this._simScheduleHide}
        @click=${this._openResults}
        ${Y({left:`${this._simPopLeft}px`,top:`${this._simPopTop}px`})}
      >
        <div class="pop-hero">
          ${i.url?f`<img src=${i.url} alt="" />`:P}
          <span class="pop-best ${i.score>=.85?"high":""}">${this.t("bestMatch","{{pct}}% best match",{pct:a})}</span>
        </div>
        <div class="pop-body">
          <div class="pop-t">${this.t("closestSimilar","Closest similar asset")}</div>
          <div class="pop-s">${i.uuid}</div>
        </div>
        <div class="pop-foot">
          ${s.length?f`<div class="pop-thumbs">
                ${r.map(l=>f`<img src=${l.url} alt="" />`)}
                ${n>0?f`<span class="pop-more">+${n}</span>`:P}
              </div>`:f`<span></span>`}
          <span class="pop-open">
            ${o===1?this.t("open","Open"):this.t("openAllN","Open all {{count}}",{count:o})}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    `}_formatDuration(e){const i=Math.floor(e/60),o=Math.floor(e%60);return`${i}:${o.toString().padStart(2,"0")}`}};Gs.styles=se`
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
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      animation: tileIn 0.45s cubic-bezier(0.34, 1.2, 0.64, 1) both;
      animation-delay: calc(min(var(--tile-index, 0), 8) * 0.04s);
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
      .center-actions { opacity: 1; }
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
      transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
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
    .tile.selectable { cursor: pointer; }
    /* Selected: blue ring hugging the card, depth shadow preserved. */
    .tile.selected {
      box-shadow:
        0 0 0 1px var(--sfx-up-primary, #2563eb),
        0 1px 3px rgba(0, 0, 0, 0.04),
        0 4px 12px rgba(0, 0, 0, 0.06);
    }
    /* Non-image tiles can't be checked — dim them while selecting. */
    .tile.select-dimmed { opacity: 0.5; }

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
      transition: background-color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
    }

    .tile:hover .similar-cb,
    .tile:focus-visible .similar-cb,
    .tile:has(:focus-visible) .similar-cb,
    .similar-cb.checked {
      opacity: 1;
    }

    /* Touch devices have no hover — always reveal so picking remains possible. */
    @media (hover: none) {
      .similar-cb { opacity: 1; }
    }

    .similar-cb svg { width: 16px; height: 16px; opacity: 0; transition: opacity 0.15s ease; }

    .similar-cb.checked {
      background: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary, #2563eb);
    }

    .similar-cb.checked svg { opacity: 1; }

    /* Selection cap reached: unselected checkboxes are muted on hover and not
       clickable. Stays hidden when not hovered like the rest. */
    .similar-cb.disabled { cursor: not-allowed; }
    .tile:hover .similar-cb.disabled,
    .tile:focus-visible .similar-cb.disabled,
    .tile:has(:focus-visible) .similar-cb.disabled {
      opacity: 0.4;
    }
    @media (hover: none) {
      .similar-cb.disabled { opacity: 0.4; }
    }

    /* --- Similarity search loading states --- */
    /* Queued (waiting its turn): just dimmed, no badge. */
    .tile.sim-queued { opacity: 0.55; transition: opacity 0.15s ease; }
    /* On hover a queued tile un-dims so its Details button is clearly visible. */
    .tile.sim-queued:hover { opacity: 1; }

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
    .sim-result-badge svg { width: 12px; height: 12px; }
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
    .tile:has(:focus-visible) .sim-result-badge { opacity: 0; }

    /* Review-pick tile (results modal left list): plain selectable card. */
    .tile.review-pick { cursor: pointer; }
    .tile.review-pick:hover .sim-result-badge { opacity: 1; }
    .tile.review-pick .name-input { pointer-events: none; }

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
    @keyframes simPopIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }

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
      content: "";
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
    @keyframes tipIn { from { opacity: 0; } to { opacity: 1; } }
    .sim-popover .pop-hero { position: relative; aspect-ratio: 16 / 10; background: var(--sfx-up-surface, #eef); }
    .sim-popover .pop-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .sim-popover .pop-best {
      position: absolute; top: 8px; left: 8px; font-size: 11px; font-weight: 700;
      padding: 3px 9px; border-radius: 999px; background: rgba(255, 255, 255, 0.95);
      color: var(--sfx-up-primary, #2563eb); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-best.high { color: var(--sfx-up-success, #16a34a); }
    .sim-popover .pop-body { padding: 11px 13px 8px; }
    .sim-popover .pop-t { font-size: 12.5px; font-weight: 600; color: var(--sfx-up-text, #1e293b); }
    .sim-popover .pop-s { font-size: 11.5px; color: var(--sfx-up-text-muted, #94a3b8); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sim-popover .pop-foot { padding: 0 13px 12px; display: flex; align-items: center; justify-content: space-between; }
    .sim-popover .pop-thumbs { display: inline-flex; }
    .sim-popover .pop-thumbs img { width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; object-fit: cover; margin-left: -8px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }
    .sim-popover .pop-thumbs img:first-child { margin-left: 0; }
    .sim-popover .pop-more {
      width: 22px; height: 22px; border-radius: 5px; border: 2px solid #fff; margin-left: -8px;
      background: var(--sfx-up-primary, #2563eb); color: #fff; font-size: 9.5px; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .sim-popover .pop-open { font-size: 11.5px; font-weight: 600; color: var(--sfx-up-primary, #2563eb); display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
    .sim-popover .pop-open svg { width: 12px; height: 12px; }

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
  `;let X=Gs;J([F({attribute:!1})],X.prototype,"t");J([F({attribute:!1})],X.prototype,"store");J([F({type:String})],X.prototype,"fileId");J([F({attribute:!1})],X.prototype,"file");J([F({type:String})],X.prototype,"mode");J([F({type:Boolean})],X.prototype,"allowRename");J([F({type:Boolean})],X.prototype,"showLocateButton");J([F({type:Boolean})],X.prototype,"showCopyCdnButton");J([F({type:Boolean})],X.prototype,"showCheckSimilar");J([F({type:Boolean})],X.prototype,"selectMode");J([F({type:Boolean})],X.prototype,"isSelected");J([F({type:Boolean})],X.prototype,"selectionActive");J([F({type:Boolean})],X.prototype,"selectionFull");J([F({type:Boolean})],X.prototype,"previewOpen");J([F({type:String})],X.prototype,"similarStatus");J([F({type:Number})],X.prototype,"similarCount");J([F({attribute:!1})],X.prototype,"similarResults");J([F({type:Boolean})],X.prototype,"reviewPick");J([I()],X.prototype,"_dims");J([I()],X.prototype,"_simPopover");J([I()],X.prototype,"_copied");J([I()],X.prototype,"_tip");var Cc=Object.defineProperty,vt=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Cc(e,i,s),s};const Ws=class extends ce{constructor(){super(...arguments),this.t=de,this.files=[],this.showLocateButton=!1,this.showCopyCdnButton=!1,this._filter="all",this._setFilter=e=>()=>{this._filter=e},this._onBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0,composed:!0}))},this._onClear=()=>{this.dispatchEvent(new CustomEvent("clear-history",{bubbles:!0,composed:!0}))}}get _filtered(){return this._filter==="success"?this.files.filter(e=>e.status==="complete"):this._filter==="failed"?this.files.filter(e=>e.status==="failed"||e.status==="error"):this.files}get _successCount(){return this.files.filter(e=>e.status==="complete").length}get _failedCount(){return this.files.filter(e=>e.status==="failed"||e.status==="error").length}render(){const e=this._filtered,i=this.files.length;return f`
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
          ${this._failedCount>0?f`<button class="chip ${this._filter==="failed"?"active":""}" @click=${this._setFilter("failed")}>
                ✗ ${this.t("failed","Failed")} (${this._failedCount})
              </button>`:P}
          <button class="clear-btn" @click=${this._onClear} title=${this.t("clearLastUpload","Clear last upload from this browser")}>${this.t("clear","Clear")}</button>
        </div>
      </div>

      <div class="body">
        ${e.length===0?f`<div class="empty">${this.t("noFilesMatchFilter","No files match this filter.")}</div>`:f`<sfx-file-list .t=${this.t} .files=${e} mode="review" .showLocateButton=${this.showLocateButton} .showCopyCdnButton=${this.showCopyCdnButton}></sfx-file-list>`}
      </div>
    `}};Ws.styles=se`
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
  `;let Ke=Ws;vt([F({attribute:!1})],Ke.prototype,"t");vt([F({attribute:!1})],Ke.prototype,"files");vt([F({type:Boolean})],Ke.prototype,"showLocateButton");vt([F({type:Boolean})],Ke.prototype,"showCopyCdnButton");vt([I()],Ke.prototype,"_filter");customElements.define("sfx-last-upload-review",Ke);const Xt=se`
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
`,Jt=se`
  button:focus-visible {
    outline: 2px solid var(--sfx-up-ring, oklch(0.578 0.198 268.129 / 0.7));
    outline-offset: 2px;
  }
`;var Pc=Object.defineProperty,he=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Pc(e,i,s),s};const Xs=class extends ce{constructor(){super(...arguments),this.t=de,this.uploadState="idle",this.fileCount=0,this.failedCount=0,this.showFillMetadata=!1,this.requireMetadataFirst=!1,this.showCheckSimilar=!1,this.selectMode=!1,this.selectedCount=0,this.maxSelection=0,this.allSelected=!1}_clear(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_addMore(){this.dispatchEvent(new CustomEvent("add-more",{bubbles:!0,composed:!0}))}_fillMetadata(){this.dispatchEvent(new CustomEvent("fill-metadata",{bubbles:!0,composed:!0}))}_upload(){if(this.requireMetadataFirst){this.dispatchEvent(new CustomEvent("require-metadata",{bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("upload-start",{bubbles:!0,composed:!0}))}_retryAll(){this.dispatchEvent(new CustomEvent("retry-all",{bubbles:!0,composed:!0}))}_cancelUpload(){this.dispatchEvent(new CustomEvent("cancel-upload",{bubbles:!0,composed:!0}))}_uploadMore(){this.dispatchEvent(new CustomEvent("upload-more",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("primary-action",{bubbles:!0,composed:!0}))}_checkSimilarEnter(){this.dispatchEvent(new CustomEvent("check-similar-enter",{bubbles:!0,composed:!0}))}_checkSimilarCancel(){this.dispatchEvent(new CustomEvent("check-similar-cancel",{bubbles:!0,composed:!0}))}_checkSimilarRun(){this.dispatchEvent(new CustomEvent("check-similar-run",{bubbles:!0,composed:!0}))}_similarSelectAll(){this.dispatchEvent(new CustomEvent("similar-select-all",{detail:{selected:!this.allSelected},bubbles:!0,composed:!0}))}render(){return this.selectMode?this._renderSelectToolbar():this.uploadState==="uploading"?this._renderUploadingBar():this.uploadState==="done"?this._renderDoneBar():this._renderIdleBar()}_renderRetryAllButton(){return this.failedCount===0?P:f`
      <button
        class="btn-retry"
        @click=${this._retryAll}
        aria-label=${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
        <span class="btn-label">${this.t("retryAll","Retry all ({{count}})",{count:this.failedCount})}</span>
      </button>
    `}_renderUploadingBar(){return f`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          <button
            class="btn-ghost"
            @click=${this._cancelUpload}
            aria-label=${this.t("cancelUpload","Cancel upload")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
        </div>
      </div>
    `}_renderDoneBar(){return f`
      <div class="buttons-row">
        <!-- Empty spacer: .buttons-row is space-between, so this keeps the
             actions right-aligned. -->
        <div class="left"></div>
        <div class="right">
          ${this._renderRetryAllButton()}
          <button class="btn-sec" @click=${this._uploadMore} aria-label=${this.t("uploadMore","Upload more")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span class="btn-label">${this.t("uploadMore","Upload more")}</span>
          </button>
          <button class="btn-primary" @click=${this._close} aria-label=${this.t("close","Close")}>
            <span class="btn-label">${this.t("close","Close")}</span>
          </button>
        </div>
      </div>
    `}_renderIdleBar(){return f`
      <div class="buttons-row">
        <div class="left">
          ${this.showFillMetadata&&this.uploadState==="idle"?f`
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
              `:P}
          ${this.showCheckSimilar&&this.uploadState==="idle"?f`
                <button
                  class="btn-sec"
                  @click=${this._checkSimilarEnter}
                  aria-label=${this.t("checkSimilar","Check similar")}
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
                  <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
                </button>
              `:P}
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
          ${this._renderRetryAllButton()}
          ${this._renderUploadButton()}
        </div>
      </div>
    `}_renderSelectToolbar(){const e=this.selectedCount,i=this.maxSelection,o=i>0&&e>=i;return f`
      <div class="buttons-row">
        <div class="left">
          <span class="sim-ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <div class="sim-text">
            <b>${this.t("selectImagesToCheck","Select images to check for similar assets")}</b>
            <span>${i>0?this.t("selectImagesHintMax","Pick up to {{max}}, then click Check",{max:i}):this.t("selectImagesHint","Pick one or more, then click Check")}</span>
          </div>
        </div>
        <div class="right">
          ${i>0?f`<span
                class="count-pill ${o?"full":""}"
                aria-label=${this.t("countSelected","{{count}} of {{max}} selected",{count:e,max:i})}
              >${e}/${i}</span>`:P}
          <button class="select-all" type="button" @click=${this._similarSelectAll}>
            ${this.allSelected?this.t("deselectAll","Deselect all"):this.t("selectAll","Select all")}
          </button>
          <button class="btn-ghost" @click=${this._checkSimilarCancel} aria-label=${this.t("cancel","Cancel")}>
            <span class="btn-label">${this.t("cancel","Cancel")}</span>
          </button>
          <button
            class="btn-primary"
            @click=${this._checkSimilarRun}
            ?disabled=${e===0}
            aria-label=${this.t("checkSimilar","Check similar")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span class="btn-label">${this.t("checkSimilar","Check similar")}</span>
          </button>
        </div>
      </div>
    `}_renderUploadButton(){const e=this.uploadState==="uploading",i=this.uploadState==="done",o="btn-primary",s=e?this.t("uploading","Uploading"):i?this.t("done","Done"):this.t("upload","Upload");return f`
      <button
        class=${o}
        @click=${this._upload}
        ?disabled=${e||this.fileCount===0&&!i}
        aria-label=${s}
      >
        ${e?f`<span class="btn-spin"></span
              ><span class="btn-label">${this.t("uploading","Uploading")}…</span>`:i?f`
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
            `:f`
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
    `}};Xs.styles=[Xt,Jt,se`
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
      .sim-ico svg { width: 16px; height: 16px; }

      .sim-text { min-width: 0; display: flex; flex-direction: column; line-height: 1.25; }
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
      .select-all:hover { background: var(--sfx-up-primary-bg, #eff6ff); }

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
    `];let pe=Xs;he([F({attribute:!1})],pe.prototype,"t");he([F({type:String})],pe.prototype,"uploadState");he([F({type:Number})],pe.prototype,"fileCount");he([F({type:Number})],pe.prototype,"failedCount");he([F({type:Boolean})],pe.prototype,"showFillMetadata");he([F({type:Boolean})],pe.prototype,"requireMetadataFirst");he([F({type:Boolean})],pe.prototype,"showCheckSimilar");he([F({type:Boolean})],pe.prototype,"selectMode");he([F({type:Number})],pe.prototype,"selectedCount");he([F({type:Number})],pe.prototype,"maxSelection");he([F({type:Boolean})],pe.prototype,"allSelected");const Ec='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';function Vi(t,e){return i=>{if(i.key!=="Tab")return;const o=t();if(!o)return;const s=o.querySelector(e);if(!s)return;const r=Array.from(s.querySelectorAll(Ec));if(r.length===0)return;const n=r[0],a=r[r.length-1],l=o.activeElement;i.shiftKey?(l===n||!s.contains(l))&&(i.preventDefault(),a.focus()):(l===a||!s.contains(l))&&(i.preventDefault(),n.focus())}}var Uc=Object.defineProperty,Zt=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Uc(e,i,s),s};const Js=class extends ce{constructor(){super(...arguments),this.t=de,this._url="",this._name="",this._error="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._onUrlInput=e=>{this._url=e.target.value,this._error="",this._autoName()},this._onNameInput=e=>{this._name=e.target.value},this._focusTrap=Vi(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{var i;e.key==="Escape"&&this._cancel(),e.key==="Enter"&&((i=e.target)==null?void 0:i.tagName)==="INPUT"&&this._submit(),this._focusTrap(e)}}_autoName(){var e;if(!this._name)try{const i=new URL(this._url).pathname.split("/"),o=i[i.length-1];if(o){const s=(e=this.shadowRoot)==null?void 0:e.querySelector("#nameInput");s&&(s.placeholder=o)}}catch{}}_cancel(){this.dispatchEvent(new CustomEvent("url-cancel",{bubbles:!0,composed:!0}))}_submit(){const e=this._url.trim();if(!e){this._error=this.t("pleaseEnterUrl","Please enter a URL");return}try{new URL(e)}catch{this._error=this.t("pleaseEnterValidUrl","Please enter a valid URL");return}this._error="";let i=this._name.trim();if(!i)try{const o=new URL(e).pathname.split("/");i=o[o.length-1]||"imported-file"}catch{i="imported-file"}this.dispatchEvent(new CustomEvent("url-submit",{detail:{url:e,name:i},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{var e,i;(i=(e=this.shadowRoot)==null?void 0:e.querySelector("#urlInput"))==null||i.focus()})}render(){return f`
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
            ${this._error?f`<div class="error">${this._error}</div>`:""}
            <div class="actions">
              <button class="btn btn-ghost" @click=${this._cancel}>${this.t("cancel","Cancel")}</button>
              <button class="btn btn-primary" @click=${this._submit}>
                ${this.t("importFile","Import file")}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};Js.styles=[Xt,Jt,se`
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

  `];let bt=Js;Zt([F({attribute:!1})],bt.prototype,"t");Zt([I()],bt.prototype,"_url");Zt([I()],bt.prototype,"_name");Zt([I()],bt.prototype,"_error");var Rc=Object.defineProperty,xt=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Rc(e,i,s),s};const Zs=class extends ce{constructor(){super(...arguments),this.t=de,this._stream=null,this._error="",this._captured=null,this._previewUrl="",this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Vi(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._capture=()=>{var e,i;const o=(e=this.shadowRoot)==null?void 0:e.querySelector("video"),s=(i=this.shadowRoot)==null?void 0:i.querySelector("canvas");!o||!s||(s.width=o.videoWidth,s.height=o.videoHeight,s.getContext("2d").drawImage(o,0,0),s.toBlob(r=>{r&&(this._captured=r,this._previewUrl=URL.createObjectURL(r),this._stopStream())},"image/jpeg",.92))},this._retake=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._captured=null,this._previewUrl="",this._startCamera()},this._usePhoto=()=>{if(!this._captured)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),i=new File([this._captured],`camera-${e}.jpg`,{type:"image/jpeg"});this.dispatchEvent(new CustomEvent("camera-capture",{detail:{file:i},bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this._startCamera()}disconnectedCallback(){super.disconnectedCallback(),this._stopStream(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}async _startCamera(){var e;try{this._stream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),await this.updateComplete;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("video");i&&(i.srcObject=this._stream)}catch{this._error=this.t("cameraAccessError","Could not access camera. Please check your permissions.")}}_stopStream(){var e;(e=this._stream)==null||e.getTracks().forEach(i=>i.stop()),this._stream=null}_cancel(){this._stopStream(),this.dispatchEvent(new CustomEvent("camera-cancel",{bubbles:!0,composed:!0}))}render(){return f`
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
            ${this._error?f`<div class="error">${this._error}</div>`:this._captured?f`
                    <img class="preview-img" src=${this._previewUrl} alt=${this.t("capturedPhoto","Captured photo")} />
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._retake}>${this.t("retake","Retake")}</button>
                      <button class="btn btn-primary" @click=${this._usePhoto}>${this.t("usePhoto","Use photo")}</button>
                    </div>
                  `:f`
                    <video autoplay playsinline muted></video>
                    <canvas></canvas>
                    <div class="actions">
                      <button class="btn-capture" @click=${this._capture}></button>
                    </div>
                  `}
          </div>
        </div>
      </div>
    `}};Zs.styles=[Xt,Jt,se`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
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
  `];let Ye=Zs;xt([F({attribute:!1})],Ye.prototype,"t");xt([I()],Ye.prototype,"_stream");xt([I()],Ye.prototype,"_error");xt([I()],Ye.prototype,"_captured");xt([I()],Ye.prototype,"_previewUrl");var Oc=Object.defineProperty,Ge=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Oc(e,i,s),s};const Qs=class extends ce{constructor(){super(...arguments),this.t=de,this._stream=null,this._recording=!1,this._error="",this._recordedBlob=null,this._previewUrl="",this._recorder=null,this._chunks=[],this._onBackdropClick=e=>{e.target===e.currentTarget&&this._cancel()},this._focusTrap=Vi(()=>this.shadowRoot,".card"),this._onKeyDown=e=>{e.key==="Escape"&&this._cancel(),this._focusTrap(e)},this._startRecording=async()=>{var e;try{this._stream=await navigator.mediaDevices.getDisplayMedia({video:{width:1280,height:720,frameRate:5},audio:!0}),this._stream.getVideoTracks()[0].addEventListener("ended",()=>{this._stopRecording()}),this._recording=!0,await this.updateComplete;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("video");i&&(i.srcObject=this._stream),this._chunks=[];const o=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm";this._recorder=new MediaRecorder(this._stream,{mimeType:o}),this._recorder.ondataavailable=s=>{s.data.size>0&&this._chunks.push(s.data)},this._recorder.onstop=()=>{var s;const r=new Blob(this._chunks,{type:"video/webm"});this._recordedBlob=r,this._previewUrl=URL.createObjectURL(r),(s=this._stream)==null||s.getTracks().forEach(n=>n.stop()),this._stream=null},this._recorder.start()}catch{this._error=this.t("screenCaptureError","Could not start screen capture. Please check your permissions.")}},this._stopRecording=()=>{var e;this._recording=!1,((e=this._recorder)==null?void 0:e.state)==="recording"&&this._recorder.stop(),this._recorder=null},this._useRecording=()=>{if(!this._recordedBlob)return;const e=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),i=new File([this._recordedBlob],`screencap-${e}.webm`,{type:"video/webm"});this.dispatchEvent(new CustomEvent("screencast-capture",{detail:{file:i},bubbles:!0,composed:!0}))},this._discard=()=>{this._previewUrl&&URL.revokeObjectURL(this._previewUrl),this._recordedBlob=null,this._previewUrl=""}}disconnectedCallback(){super.disconnectedCallback(),this._stopAll(),this._previewUrl&&URL.revokeObjectURL(this._previewUrl)}_stopAll(){var e,i;(e=this._recorder)==null||e.stop(),this._recorder=null,(i=this._stream)==null||i.getTracks().forEach(o=>o.stop()),this._stream=null}_cancel(){this._stopAll(),this.dispatchEvent(new CustomEvent("screencast-cancel",{bubbles:!0,composed:!0}))}render(){return f`
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
            ${this._error?f`<div class="error">${this._error}</div>`:this._recordedBlob?f`
                    <video src=${this._previewUrl} controls></video>
                    <div class="actions">
                      <button class="btn btn-ghost" @click=${this._discard}>${this.t("discard","Discard")}</button>
                      <button class="btn btn-primary" @click=${this._useRecording}>${this.t("useRecording","Use recording")}</button>
                    </div>
                  `:this._recording?f`
                      <video autoplay playsinline muted></video>
                      <div class="status"><div class="rec-dot"></div> ${this.t("recording","Recording")}...</div>
                      <div class="actions">
                        <button class="btn btn-danger" @click=${this._stopRecording}>${this.t("stopRecording","Stop recording")}</button>
                      </div>
                    `:f`
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
    `}};Qs.styles=[Xt,Jt,se`
    :host { display: block; }

    .backdrop {
      position: fixed; inset: 0; z-index: 1000;
      background: var(--sfx-up-backdrop, rgba(0, 0, 0, 0.45));
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
  `];let Oe=Qs;Ge([F({attribute:!1})],Oe.prototype,"t");Ge([I()],Oe.prototype,"_stream");Ge([I()],Oe.prototype,"_recording");Ge([I()],Oe.prototype,"_error");Ge([I()],Oe.prototype,"_recordedBlob");Ge([I()],Oe.prototype,"_previewUrl");var Tc=Object.defineProperty,Ki=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Tc(e,i,s),s};const er=class extends ce{constructor(){super(...arguments),this.t=de,this.duration=6e3,this._toasts=[],this._nextId=0}show(e,i="error"){const o=++this._nextId;this._toasts=[...this._toasts,{id:o,message:e,type:i,leaving:!1}],setTimeout(()=>this._dismiss(o),this.duration)}_dismiss(e){const i=this._toasts.findIndex(s=>s.id===e);if(i===-1)return;const o=[...this._toasts];o[i]={...o[i],leaving:!0},this._toasts=o,setTimeout(()=>{this._toasts=this._toasts.filter(s=>s.id!==e)},200)}_iconForType(e){return e==="error"?f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="5" x2="8" y2="8.5"/><circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:e==="warning"?f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 1.5l6.5 12H1.5z"/><line x1="8" y1="6.5" x2="8" y2="9.5"/><circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>`:f`<svg class="toast-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <circle cx="8" cy="8" r="6.5"/><line x1="8" y1="7" x2="8" y2="11"/><circle cx="8" cy="5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>`}render(){return this._toasts.length===0?f``:f`
      <div class="toast-stack">
        ${this._toasts.map(e=>f`
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
    `}};er.styles=se`
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
  `;let Qt=er;Ki([F({attribute:!1})],Qt.prototype,"t");Ki([F({type:Number})],Qt.prototype,"duration");Ki([I()],Qt.prototype,"_toasts");customElements.define("sfx-toast",Qt);var Fc=Object.defineProperty,B=(t,e,i,o)=>{for(var s=void 0,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=n(e,i,s)||s);return s&&Fc(e,i,s),s};const Qo=new Set(["unsplash"]),xe=10,Lc=3,zc=["auto","mobile","tablet","desktop","hq","sample"],Ic=["hls"],ze={isTus:!1,tusUploadUrl:null,relativeFolder:""},es=new Set(["complete","failed","error","cancelled","rejected"]);var W;const M=(W=class extends ce{constructor(){super(),this.config=null,this._isOpen=!1,this._activeConnector=null,this._showUrlDialog=!1,this._showCameraDialog=!1,this._showScreenCastDialog=!1,this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._similarRunIds=[],this._similarActiveIds=new Set,this._similarResults=new Map,this._previewPanelTab="details",this._similarDismissTimer=null,this._similarAbort=null,this._previewFileId=null,this._previewDims="—",this._fileInfoOpen=!0,this._splitPct=58,this._showSettings=!1,this._setResize=!0,this._setMaxW=2e3,this._setMaxH=2e3,this._setTranscode=!1,this._setResolution="auto",this._setResolutionOpen=!1,this._setProtocol="hls",this._setResumable=!1,this._isResizing=!1,this._splitRafId=0,this._previewDefaultApplied=!1,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0,this._fsDragging=!1,this._fsDragStartX=0,this._fsDragStartY=0,this._fsPanStartX=0,this._fsPanStartY=0,this._bodyDragOver=!1,this._isMinimized=!1,this._isPillExpanded=!1,this._metadataSchema=null,this._metadataTranslations=null,this._metadataTranslationsLang=null,this._translationsRequestId=0,this._fieldI18nService=null,this._localizedSchemaCache=null,this._metadataDependencies=[],this._warnedHubSchemaSkip=!1,this._warnedHubDepsSkip=!1,this._regionalFilters={},this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1,this._metadataAutocomplete=null,this._taxonomyService=null,this._ultratagsService=null,this._onRegionalChange=t=>{const{groupUuid:e,value:i}=t.detail;e&&(this._regionalFilters={...this._regionalFilters,[e]:i},this._loadMetadataTranslations())},this._videoBlobUrls=new Map,this._lastEta=0,this._engine=null,this._cachedSources=ot,this._cachedSourcesConfig=void 0,this._rejectedTimers=new Map,this._closeOnCompleteTimer=null,this._apiBase=null,this._authHeaders=null,this._authResolveId=0,this._prevStoreState=null,this._unsubStoreEvents=null,this._firedFolders=new Set,this._portalContainer=null,this._hostStyleObserver=null,this._onFileRename=t=>{this._onPreviewRename(t.detail.fileId,t.detail.name)},this._onPreviewMetadataBlur=t=>{const e=this._previewFileId;if(!e)return;const{key:i,value:o}=t.detail;if(ec(i)){const n=tc(i);if(!n)return;const a=o===""||o==null,l=n==="position"?{position:a?void 0:Number(o)}:{ref:a?void 0:String(o)};this.updateFileProduct(e,l);return}const s=this._store.getState().files.get(e);if(!s)return;const r=new Map(this._store.getState().files);r.set(e,{...s,meta:{...s.meta,[i]:o}}),this._store.setState({files:r}),this._applyDependencySetValuesPrefill(e)},this._onPreviewTaxonomyEntry=t=>{const e=this._previewFileId;e&&this.updateFileTaxonode(e,t.detail.key,t.detail.entry)},this._floatShownDispatched=!1,this._transformRemoteThumbnail=(t,e)=>{var i;const o=(i=this.config)==null?void 0:i.transformRemoteThumbnail;if(!o)return t;try{return o(t,e)||t}catch(s){return console.warn("[sfx-uploader] transformRemoteThumbnail threw:",s),t}},this._connectorThumbnailTransform=t=>{const e=this._activeConnector;return e?this._transformRemoteThumbnail(t,{source:"connector",providerId:e}):t},this._onFilesSelected=t=>{const{files:e,hadDirectories:i}=t.detail;if(e.length===0&&i){this._showEmptyFolderToast();return}this._processIncomingFiles(e)},this._onFolderEmpty=()=>{this._showEmptyFolderToast()},this._onDropTileSourceClick=t=>{t.stopPropagation(),this._handleSourceActivation(t.detail.source.id)},this._onSourceClick=async t=>{this._handleSourceActivation(t.detail.source)},this._handleSourceActivation=async t=>{var e,i,o,s;const r=this._mergedSources.find(n=>n.id===t);if(r!=null&&r.onActivate){try{r.onActivate(this)}catch(n){console.error(`[sfx-uploader] onActivate for custom source "${t}" threw:`,n)}return}if(t==="device"){const n=this.shadowRoot.querySelector("sfx-drop-zone");n==null||n.browse();return}if(t==="url"){this._showUrlDialog=!0;return}if(t==="camera"){this._showCameraDialog=!0;return}if(t==="screen-cast"){this._showScreenCastDialog=!0;return}if((((i=(e=this.config)==null?void 0:e.connectors)==null?void 0:i.providers)??[]).includes(t)){if(t==="google-drive"&&(s=(o=this.config)==null?void 0:o.connectors)!=null&&s.googlePicker){if(!customElements.get("sfx-google-picker-view")){const{SfxGooglePickerView:n}=await yt(async()=>{const{SfxGooglePickerView:a}=await import("./google-picker-view-BtJ5yX5F-_1KVCPmH.js");return{SfxGooglePickerView:a}},__vite__mapDeps([0,1,2]));customElements.define("sfx-google-picker-view",n)}}else if(Qo.has(t)){if(!customElements.get("sfx-search-provider-browser")){const{SfxSearchProviderBrowser:n}=await yt(async()=>{const{SfxSearchProviderBrowser:a}=await import("./search-provider-browser-Dz5XsYn7-e-P5nMY9.js");return{SfxSearchProviderBrowser:a}},__vite__mapDeps([3,1,2]));customElements.define("sfx-search-provider-browser",n)}}else if(!customElements.get("sfx-provider-browser")){const{SfxProviderBrowser:n}=await yt(async()=>{const{SfxProviderBrowser:a}=await import("./provider-browser-C2kQJBGd-gok0cHbc.js");return{SfxProviderBrowser:a}},__vite__mapDeps([4,1,2]));customElements.define("sfx-provider-browser",n)}this._activeConnector=t}},this._onUrlSubmit=t=>{var e,i,o;this._showUrlDialog=!1;const{url:s,name:r}=t.detail,n=(e=this.config)==null?void 0:e.callbacks,a=Ko(r),l=a.startsWith("image/");if(ci(r))return;const c=this._store.getState();if([...c.files.values()].some(u=>u.name===r&&u.status!=="rejected"&&u.status!=="cancelled"))return;const d=di({name:r,size:0,type:a},c.restrictions,c.files);if(d){const u={id:Le(),status:"rejected",file:null,remoteUrl:s,name:r,size:0,type:a,previewUrl:null,duration:null,progress:0,speed:0,bytesUploaded:0,error:d.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...ze};Te(this._store,u),this._dispatchPublic(H.FILE_REJECTED,{file:u,reason:d.message}),(i=n==null?void 0:n.onFileRejected)==null||i.call(n,u,d.message);return}const p={id:Le(),status:"idle",file:null,remoteUrl:s,name:r,size:0,type:a,previewUrl:l?this._transformRemoteThumbnail(s,{source:"url-import"}):null,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...ze};Te(this._store,p),this._dispatchPublic(H.FILE_ADDED,{file:p}),(o=n==null?void 0:n.onFileAdded)==null||o.call(n,p),this._store.getState().queueConfig.autoProceed&&this.upload()},this._onUrlCancel=()=>{this._showUrlDialog=!1},this._onCameraCapture=t=>{this._showCameraDialog=!1,this._processIncomingFiles([t.detail.file])},this._onCameraCancel=()=>{this._showCameraDialog=!1},this._onScreenCastCapture=t=>{this._showScreenCastDialog=!1,this._processIncomingFiles([t.detail.file])},this._onScreenCastCancel=()=>{this._showScreenCastDialog=!1},this._onFileRemove=t=>{this._removeFile(t.detail.fileId)},this._onFilePreview=t=>{var e,i,o;const s=this._store.getState().files.get(t.detail.fileId);s&&(this._previewFileId=s.id,this._showSettings=!1,this._previewPanelTab="details",this._dispatchPublic(H.FILE_PREVIEW,{file:s}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFilePreview)==null||o.call(i,s))},this._onFillMetadata=()=>{var t,e,i,o;const s=[...this._store.getState().files.values()].filter(r=>W._MODIFIABLE_STATUSES.has(r.status));(t=this.config)!=null&&t.metadataConfig&&this._metadataSchema&&(this._bulkMetadataInitialFieldKey=this._firstMissingRequiredFieldKey()??this._firstConflictedFieldKey(),this._bulkMetadataOpen=!0),this._dispatchPublic(H.FILL_METADATA,{files:s}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFillMetadata)==null||o.call(i,s)},this._onCheckSimilarEnter=()=>{this._similarSelectedIds=new Set,this._similarSelectMode=!0},this._onCheckSimilarCancel=()=>{this._similarSelectMode=!1,this._similarSelectedIds=new Set},this._onSimilarToggle=t=>{const e=t.detail.fileId,i=new Set(this._similarSelectedIds);if(i.has(e))i.delete(e);else{if(i.size>=xe)return;i.add(e)}this._similarSelectedIds=i},this._onSimilarSelectAll=t=>{this._similarSelectedIds=t.detail.selected?new Set(this._similarUncheckedFiles().slice(0,xe).map(e=>e.id)):new Set},this._onCheckSimilarRun=()=>{const t=this._similarImageFiles().filter(e=>this._similarSelectedIds.has(e.id));t.length&&(this._runSimilarityCheck(t),this._similarSelectMode=!1,this._similarSelectedIds=new Set)},this._onCheckSimilarSingle=t=>{const e=t.detail.file;e&&this._checkSimilarSingleFile(e)},this._onSimilarSearchCancel=()=>{this._clearSimilarRun()},this._onSimilarOpenResults=t=>{this._previewFileId=t.detail.fileId,this._showSettings=!1,this._previewPanelTab="similar"},this._onRequireMetadata=()=>{const t=this._storeCtrl.state.t;this._showToast(t("fillRequiredFieldsFirst","Please fill required fields first."),"warning"),this._onFillMetadata()},this._onFileLocate=t=>{this._locateFile(t.detail.file)},this._onFileCopyCdn=t=>{var e,i,o;const s=t.detail.file,r=t.detail.cdnUrl;!s||!r||(this._dispatchPublic(H.FILE_COPY_CDN,{file:s,cdnUrl:r}),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFileCopyCdn)==null||o.call(i,s,r))},this._onBulkMetadataSaveBatch=t=>{const{changes:e}=t.detail;if(!e.length)return;const i=new Map(this._store.getState().files);for(const{fileId:o,meta:s}of e){const r=i.get(o);r&&i.set(o,{...r,meta:{...r.meta,...s}})}this._store.setState({files:i})},this._onBulkProductSaveBatch=t=>{const{changes:e}=t.detail;e.length&&this.updateFilesProduct(e)},this._onBulkTaxonomySaveBatch=t=>{const{changes:e}=t.detail;if(!e.length)return;const i=this._store.getState().files,o=new Map(i);for(const{fileId:s,taxonodes:r}of e){const n=i.get(s);if(!n||!W._MODIFIABLE_STATUSES.has(n.status))continue;const a={...n.taxonodes??{}};for(const[l,c]of Object.entries(r))c==null?delete a[l]:a[l]=c;o.set(s,{...n,taxonodes:a})}this._store.setState({files:o})},this._onBulkMetadataClose=()=>{this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null},this._onFileRetry=t=>{var e;this._ensureEngine(),(e=this._engine)==null||e.retryFile(t.detail.fileId)},this._onFilePause=t=>{var e;(e=this._engine)==null||e.pauseFile(t.detail.fileId)},this._onFileResume=t=>{var e;(e=this._engine)==null||e.resumeFile(t.detail.fileId)},this._onRetryAll=()=>{var t;this._ensureEngine(),(t=this._engine)==null||t.retryAll()},this._onClearAll=(t=!1)=>{var e,i,o;const s=(e=this.config)==null?void 0:e.callbacks;this._clearSimilarRun(),this._similarResults=new Map,this._previewPanelTab="details",this._similarSelectMode=!1,this._similarSelectedIds=new Set,this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),t||(i=this._engine)==null||i.cancelAll();const r=[...this._store.getState().files.values()];for(const n of r)n.previewUrl&&URL.revokeObjectURL(n.previewUrl),t||(this._dispatchPublic(H.FILE_REMOVED,{file:n}),(o=s==null?void 0:s.onFileRemoved)==null||o.call(s,n));this._revokeVideoBlobUrls();for(const n of this._rejectedTimers.values())clearTimeout(n);this._rejectedTimers.clear(),this._dimCache.clear(),this._previewFileId=null,this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._lastEta=0,this._firedFolders.clear(),this._store.setState({files:new Map,isUploading:!1,totalProgress:0,totalSpeed:0,totalBytesUploaded:0,totalBytes:0})},this._onAddMore=()=>{var t;const e=this.shadowRoot.querySelector("sfx-drop-zone");if(e){e.browse();return}const i=this.shadowRoot.querySelector("sfx-file-list"),o=(t=i==null?void 0:i.shadowRoot)==null?void 0:t.querySelector('input[type="file"]');o==null||o.click()},this._onUploadStart=()=>{var t;if(this._phase==="complete"){((t=this.config)==null?void 0:t.clearOnComplete)!==!1&&this._onClearAll();return}this._hasMetadataIssues||(this._similarSelectMode=!1,this._similarSelectedIds=new Set,this.upload())},this._onUploadMore=()=>{this._onClearAll()},this._onEnterReview=()=>{const t=[...this._store.getState().files.values()].filter(o=>o.status==="complete"||o.status==="failed"||o.status==="error");if(t.length>0){this._reviewFiles=[...t].reverse(),this._isReviewing=!0;return}const e=this._lastUploadId;if(e==null)return;const i=Je.load(e);!i||i.length===0||(this._reviewFiles=[...i].reverse(),this._isReviewing=!0)},this._onExitReview=()=>{this._isReviewing=!1,this._reviewFiles=[]},this._onClearReview=()=>{const t=this._lastUploadId;t!=null&&Je.clear(t),this._isReviewing=!1,this._reviewFiles=[],this._hasStoredReview=!1},this._onConnectorFilesSelected=t=>{var e,i,o,s;const r=(e=this.config)==null?void 0:e.callbacks,n=((i=this.config)==null?void 0:i.preserveFolderStructure)!==!1,a=(c,d,p)=>`${c}\0${d}\0${p}`,l=new Set;for(const c of this._store.getState().files.values())c.status!=="rejected"&&c.status!=="cancelled"&&l.add(a(c.name,c.size,c.relativeFolder??""));for(const c of t.detail.files){if(ci(c.name))continue;const d=n?c.relativeFolder??"":"",p=this._store.getState(),u=a(c.name,c.size,d);if(l.has(u))continue;const b=c.thumbnail?this._transformRemoteThumbnail(c.thumbnail,{source:"connector",providerId:c.provider}):null,h=di({name:c.name,size:c.size,type:c.mimeType},p.restrictions,p.files);if(h){const C={id:Le(),status:"rejected",file:null,remoteUrl:null,name:c.name,size:c.size,type:c.mimeType,previewUrl:b,duration:null,progress:0,speed:0,bytesUploaded:0,error:h.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:c,...ze,relativeFolder:d};Te(this._store,C),this._dispatchPublic(H.FILE_REJECTED,{file:C,reason:h.message}),(o=r==null?void 0:r.onFileRejected)==null||o.call(r,C,h.message);continue}const _={id:Le(),status:"idle",file:null,remoteUrl:null,name:c.name,size:c.size,type:c.mimeType,previewUrl:b,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:c,...ze,relativeFolder:d};Te(this._store,_),l.add(u),this._dispatchPublic(H.FILE_ADDED,{file:_}),(s=r==null?void 0:r.onFileAdded)==null||s.call(r,_)}this._activeConnector=null,this._store.getState().queueConfig.autoProceed&&this.upload()},this._onConnectorClose=()=>{this._activeConnector=null},this._onConnectorBackdropClick=t=>{t.target===t.currentTarget&&(this._activeConnector=null)},this._onPrimaryAction=()=>{var t,e,i,o,s;this._dispatchPublic(H.COMPLETE_ACTION,{}),(i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCompleteAction)==null||i.call(e),(((o=this.config)==null?void 0:o.mode)??"modal")==="modal"?this.close():((s=this.config)==null?void 0:s.clearOnComplete)!==!1&&this._onClearAll()},this._onInlineDismiss=()=>{var t,e,i;(i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onCancel)==null||i.call(e),this._dispatchPublic(H.CANCEL,{})},this._onModalDismiss=()=>{var t,e,i,o;this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll()),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(H.CANCEL,{}),this.close()},this._onCancelUpload=()=>{var t,e,i,o;(t=this._engine)==null||t.cancelAll(),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(H.CANCEL,{}),this._onClearAll()},this._onMinimize=()=>{var t,e,i;this._isMinimized||(this._isMinimized=!0,this._isPillExpanded=!0,(i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onMinimize)==null||i.call(e),this._dispatchFloatGeometryEvent(H.MINIMIZE),this.requestUpdate())},this._onPillClick=()=>{this._isPillExpanded=!this._isPillExpanded,this.requestUpdate()},this._onPillExpand=()=>{var t,e,i;this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!0,(i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onRestore)==null||i.call(e),this._dispatchPublic(H.RESTORE,{mode:"modal"}),this.requestUpdate())},this._onPillDismiss=()=>{var t,e,i,o;this._isMinimized=!1,this._isPillExpanded=!1,this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll(),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(H.CANCEL,{})),this.close()},this._onModalBackdropClick=t=>{var e;t.target===t.currentTarget&&(this._phase==="uploading"&&(e=this.config)!=null&&e.minimizeOnUpload?this._onMinimize():this._onModalDismiss())},this._bodyLeaveTimer=null,this._onBodyDragEnter=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragOver=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!0},this._onBodyDragLeave=t=>{t.preventDefault(),this._bodyLeaveTimer&&clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=setTimeout(()=>{this._bodyDragOver=!1,this._bodyLeaveTimer=null},80)},this._onBodyDrop=t=>{t.preventDefault(),this._bodyLeaveTimer&&(clearTimeout(this._bodyLeaveTimer),this._bodyLeaveTimer=null),this._bodyDragOver=!1;const e=t.dataTransfer;e&&Is(e).then(({files:i,hadDirectories:o})=>{if(i.length===0){o&&this._showEmptyFolderToast();return}this._onFilesSelected(new CustomEvent("files-selected",{detail:{files:i,hadDirectories:o}}))})},this._onKeyDown=t=>{var e,i;if(t.key==="Escape"){if(this._fullscreenPreviewUrl||this._fullscreenVideoFile){this._onFsClose();return}if(this._bulkMetadataOpen||this._isMinimized)return;const o=((e=this.config)==null?void 0:e.mode)??"modal",s=((i=this.config)==null?void 0:i.header)??(o==="modal"?"close":!0);(s==="close"||s==="back")&&(o==="modal"&&this._isOpen?this._onModalDismiss():o==="inline"&&this._onInlineDismiss())}},this._dimCache=new Map,this._onSplitPointerDown=t=>{var e;t.preventDefault(),this._isResizing=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector(".preview-layout");i==null||i.classList.add("resizing"),t.target.setPointerCapture(t.pointerId)},this._onSplitPointerMove=t=>{if(!this._isResizing||this._splitRafId)return;const e=t.clientX;this._splitRafId=requestAnimationFrame(()=>{var i;this._splitRafId=0;const o=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-layout");if(!o)return;const s=o.getBoundingClientRect(),r=(e-s.left)/s.width*100;this._splitPct=Math.max(25,Math.min(75,r))})},this._onSplitPointerUp=()=>{var t;this._isResizing=!1,this._splitRafId&&(cancelAnimationFrame(this._splitRafId),this._splitRafId=0);const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".preview-layout");e==null||e.classList.remove("resizing")},this._onFsToggleZoom=t=>{t==null||t.stopPropagation();const e=W._FS_ZOOM_LEVELS,i=e.indexOf(this._fsZoom),o=i===-1?1:(i+1)%e.length;this._fsZoom=e[o],this._fsZoom===1&&(this._fsPanX=0,this._fsPanY=0)},this._onFsOverlayClick=t=>{this._fsDragDidMove||this._onFsToggleZoom(t)},this._fsDragDidMove=!1,this._onFsPanStart=t=>{this._fsZoom<=1||(this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=t.clientX,this._fsDragStartY=t.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY,t.preventDefault())},this._onFsPanMove=t=>{if(!this._fsDragging)return;const e=t.clientX-this._fsDragStartX,i=t.clientY-this._fsDragStartY;(Math.abs(e)>3||Math.abs(i)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+e,this._fsPanY=this._fsPanStartY+i,this.requestUpdate()},this._onFsPanEnd=()=>{this._fsDragging=!1,requestAnimationFrame(()=>{this._fsDragDidMove=!1})},this._onFsTouchStart=t=>{if(this._fsZoom<=1||t.touches.length!==1)return;const e=t.touches[0];this._fsDragging=!0,this._fsDragDidMove=!1,this._fsDragStartX=e.clientX,this._fsDragStartY=e.clientY,this._fsPanStartX=this._fsPanX,this._fsPanStartY=this._fsPanY},this._onFsTouchMove=t=>{if(!this._fsDragging||t.touches.length!==1)return;const e=t.touches[0],i=e.clientX-this._fsDragStartX,o=e.clientY-this._fsDragStartY;(Math.abs(i)>3||Math.abs(o)>3)&&(this._fsDragDidMove=!0),this._fsPanX=this._fsPanStartX+i,this._fsPanY=this._fsPanStartY+o,this.requestUpdate(),t.preventDefault()},this._onFsClose=t=>{t==null||t.stopPropagation(),this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0},this._store=Gr(),this._storeCtrl=new Wr(this,this._store)}get _lastUploadId(){var t,e;const i=(t=this.config)==null?void 0:t.lastUploadReview;if(!i)return null;if(typeof i=="string")return i;const o=(e=this.config)==null?void 0:e.auth;return o?o.airboxPuid?`${o.container}:${o.airboxPuid}`:o.container:null}get _metadataDefaultLanguage(){var t,e;const i=(t=this._metadataSchema)==null?void 0:t.regionalVariantsGroups;if(!i)return;const o=i.find(s=>s.type===Tt.LANGUAGES);return((e=o==null?void 0:o.variants.find(Boolean))==null?void 0:e.api_value)||void 0}get _effectiveRegionalFilters(){var t,e,i,o;const s=((e=(t=this.config)==null?void 0:t.metadataConfig)==null?void 0:e.language)??((i=this.config)==null?void 0:i.locale)??void 0;return{...rc((o=this._metadataSchema)==null?void 0:o.regionalVariantsGroups,s),...this._regionalFilters}}get _activeLanguage(){var t,e,i;const o=(((t=this._metadataSchema)==null?void 0:t.regionalVariantsGroups)??[]).find(r=>r.type===Tt.LANGUAGES),s=this._effectiveRegionalFilters;return(o?s[o.uuid]:void 0)??((i=(e=this.config)==null?void 0:e.metadataConfig)==null?void 0:i.language)}get _effectiveMetadataConfig(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;if(!e)return null;const i={...e.regionalFilters??{},...this._effectiveRegionalFilters},o=this._activeLanguage??e.language;return{...e,regionalFilters:i,language:o}}get _localizedMetadataSchema(){const t=this._metadataSchema;if(!t)return null;const e=this._metadataTranslations;if(!e)return t;const i=this._localizedSchemaCache;if(i&&i.base===t&&i.translations===e)return i.result;const o=lc(t,e);return this._localizedSchemaCache={base:t,translations:e,result:o},o}_loadMetadataTranslations(){var t;const e=this._fieldI18nService,i=this._metadataSchema;if(!e||!i||!((t=i.regionalVariantsGroups)!=null&&t.some(n=>n.type===Tt.LANGUAGES)))return;const o=this._activeLanguage;if(!o||this._metadataTranslationsLang===o&&this._metadataTranslations)return;this._metadataTranslationsLang=o;const s=++this._translationsRequestId,r=e.peek(o);if(r){this._metadataTranslations=r;return}e.getTranslations(o).then(n=>{s===this._translationsRequestId&&(this._metadataTranslations=n)})}open(){var t,e,i,o,s,r,n,a,l;const c=this._isMinimized;if(this._isMinimized&&(this._isMinimized=!1,this._isPillExpanded=!1),this._isOpen){c&&((i=(e=(t=this.config)==null?void 0:t.callbacks)==null?void 0:e.onRestore)==null||i.call(e),this._dispatchPublic(H.RESTORE,{mode:"modal"}),this.requestUpdate());return}this._isOpen=!0,(r=(s=(o=this.config)==null?void 0:o.callbacks)==null?void 0:s.onOpen)==null||r.call(s),this._dispatchPublic(H.OPEN,{}),c&&((l=(a=(n=this.config)==null?void 0:n.callbacks)==null?void 0:a.onRestore)==null||l.call(a),this._dispatchPublic(H.RESTORE,{mode:"modal"})),this.requestUpdate()}close(){this._isOpen&&(this._isOpen=!1,this._runCloseCleanup())}getStatus(){return this._phase}dismissPanel(){var t,e,i,o;this._phase==="uploading"&&((t=this._engine)==null||t.cancelAll(),(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onCancel)==null||o.call(i),this._dispatchPublic(H.CANCEL,{})),this._isMinimized=!1,this._isPillExpanded=!1,this._isOpen=!1,this._runCloseCleanup()}_runCloseCleanup(){var t,e,i,o;this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),((t=this.config)==null?void 0:t.clearOnClose)!==!1&&this._onClearAll(),this._previewFileId=null,this._bulkMetadataOpen=!1,this._bulkMetadataInitialFieldKey=null,(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onClose)==null||o.call(i),this._dispatchPublic(H.CLOSE,{}),this.requestUpdate()}upload(){var t,e,i,o,s,r,n,a,l,c;if(this._ensureEngine(),!this._engine){console.warn("[sfx-uploader] Cannot upload: auth not resolved yet");return}const d=[...this._store.getState().files.values()].filter(b=>b.status==="idle"||b.status==="queued");if((e=(t=this.config)==null?void 0:t.callbacks)!=null&&e.onBeforeUpload&&this.config.callbacks.onBeforeUpload(d)===!1)return;const p=new CustomEvent(H.BEFORE_UPLOAD,{bubbles:!0,composed:!0,cancelable:!0,detail:{files:d}});if(!this.dispatchEvent(p))return;this._stripHiddenFieldsForUpload();const u=[...this._store.getState().files.values()].filter(b=>b.status==="idle"||b.status==="queued");this._dispatchPublic(H.UPLOAD_STARTED,{files:u}),(s=(o=(i=this.config)==null?void 0:i.callbacks)==null?void 0:o.onUploadStarted)==null||s.call(o,u),this._engine.uploadAll(),(r=this.config)!=null&&r.minimizeOnUpload&&((n=this.config)==null?void 0:n.mode)!=="inline"&&!this._isMinimized&&(this._isMinimized=!0,this._isPillExpanded=!0,(c=(l=(a=this.config)==null?void 0:a.callbacks)==null?void 0:l.onMinimize)==null||c.call(l),this._dispatchFloatGeometryEvent(H.MINIMIZE),this.requestUpdate())}addFiles(t){this._processIncomingFiles(t)}resumeUpload(t){var e;if(t&&t.length>0){const i=this._store.getState().files,o=new Map(i);let s=!1;for(const r of t){const n=i.get(r.id);n&&(o.set(r.id,{...n,...r}),s=!0)}s&&this._store.setState({files:o})}this._ensureEngine(),(e=this._engine)==null||e.uploadAll()}cancelUpload(){var t;(t=this._engine)==null||t.cancelAll()}pauseFile(t){var e;(e=this._engine)==null||e.pauseFile(t)}resumeFile(t){var e;(e=this._engine)==null||e.resumeFile(t)}getFiles(){return[...this._store.getState().files.values()]}getFile(t){return this._store.getState().files.get(t)}updateFileMeta(t,e,i){const o=this._store.getState().files,s=o.get(t);if(!s||!W._MODIFIABLE_STATUSES.has(s.status))return;const r=new Map(o);r.set(t,{...s,meta:e!=null?{...s.meta,...e}:s.meta,tags:i??s.tags}),this._store.setState({files:r})}updateFilesMeta(t){const e=this._store.getState().files,i=new Map(e);let o=!1;for(const{fileId:s,meta:r,tags:n}of t){const a=e.get(s);!a||!W._MODIFIABLE_STATUSES.has(a.status)||(i.set(s,{...a,meta:r!=null?{...a.meta,...r}:a.meta,tags:n??a.tags}),o=!0)}o&&this._store.setState({files:i})}updateFileTaxonode(t,e,i){const o=this._store.getState().files,s=o.get(t);if(!s||!W._MODIFIABLE_STATUSES.has(s.status))return;const r={...s.taxonodes??{}};i==null?delete r[e]:r[e]=i;const n=new Map(o);n.set(t,{...s,taxonodes:r}),this._store.setState({files:n})}updateFilesTaxonode(t,e,i){const o=this._store.getState().files,s=new Map(o);let r=!1;for(const n of t){const a=o.get(n);if(!a||!W._MODIFIABLE_STATUSES.has(a.status))continue;const l={...a.taxonodes??{}};i==null?delete l[e]:l[e]=i,s.set(n,{...a,taxonodes:l}),r=!0}r&&this._store.setState({files:s})}updateFileProduct(t,e){const i=this._store.getState().files,o=i.get(t);if(!o||!W._MODIFIABLE_STATUSES.has(o.status))return;const s=new Map(i);s.set(t,{...o,product:fo(o.product,e)}),this._store.setState({files:s})}updateFilesProduct(t){const e=this._store.getState().files,i=new Map(e);let o=!1;for(const{fileId:s,product:r}of t){const n=e.get(s);!n||!W._MODIFIABLE_STATUSES.has(n.status)||(i.set(s,{...n,product:fo(n.product,r)}),o=!0)}o&&this._store.setState({files:i})}willUpdate(t){if(t.has("config")&&this.config){this._applyConfig(this.config);const e=this.config.uploadSettings;!(e!==!1&&(e==null||e.enabled!==!1))&&this._showSettings&&(this._showSettings=!1)}if(t.has("_previewFileId")&&this._previewFileId){const e=this._previewFileId,i=this._store.getState().files.get(e);i?this._getImageDimensions(i).then(o=>{this._previewFileId===e&&(this._previewDims=o?`${o.w} × ${o.h}`:"—")}):this._previewDims="—"}this._previewFileId?this._previewDefaultApplied||(this._splitPct=62.5,this._previewDefaultApplied=!0):this._previewDefaultApplied&&(this._previewDefaultApplied=!1)}updated(t){this._updateFloatingPortal()}_injectFloatStyles(){if(document.querySelector("style[data-sfx-upload-float-styles]"))return;const t=document.createElement("style");t.setAttribute("data-sfx-upload-float-styles",""),t.textContent=`
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
      [data-sfx-upload-float] .float-item-tooltip { display:none; position:absolute; right:calc(100% + 8px); top:50%; transform:translateY(-50%); background:#fff; color:#1e293b; font-size:11px; padding:6px 10px; border-radius:6px; white-space:nowrap; pointer-events:none; z-index:10; box-shadow:0 2px 12px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.08); }
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
    `,document.head.appendChild(t)}_updateFloatingPortal(){const t=[...this._storeCtrl.state.files.values()];if(this._isMinimized&&t.length>0){this._injectFloatStyles();const e=!this._portalContainer;this._portalContainer||(this._portalContainer=document.createElement("div"),this._portalContainer.setAttribute("data-sfx-upload-float",""),document.body.appendChild(this._portalContainer)),this._syncPortalOffsetVars(),Pe(this._renderFloatingPill(t),this._portalContainer),e&&!this._floatShownDispatched&&(this._floatShownDispatched=!0,requestAnimationFrame(()=>{this._dispatchPublic(H.PANEL_SHOWN,this._measureFloatGeometry())}))}else this._portalContainer&&(Pe(P,this._portalContainer),this._portalContainer.remove(),this._portalContainer=null,this._floatShownDispatched=!1)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeyDown),this._prevStoreState=this._store.getState(),this._unsubStoreEvents=this._store.subscribe(()=>this._onStoreChange());const t=this._lastUploadId;this._hasStoredReview=t!=null&&Je.exists(t),this._initI18n(typeof navigator<"u"?navigator.language:void 0),typeof MutationObserver<"u"&&(this._hostStyleObserver=new MutationObserver(()=>this._syncPortalOffsetVars()),this._hostStyleObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}async _initI18n(t){try{const{i18n:e,isNew:i}=await Mr(t||"en");i&&e.on("missingKey",(s,r,n,a,l,c)=>{const d=n.match(/_(?:zero|one|two|few|many|other)$/),p=d&&c!=null&&c[`defaultValue${d[0]}`]?String(c[`defaultValue${d[0]}`]):a;qr.handleMissingKey(n,p,r)});const o=(s,r,n)=>$e(s,r,n);this._store.setState({t:o})}catch{}}disconnectedCallback(){var t,e,i,o,s;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(t=this._hostStyleObserver)==null||t.disconnect(),this._hostStyleObserver=null,(e=this._unsubStoreEvents)==null||e.call(this),this._unsubStoreEvents=null,this._prevStoreState=null,(i=this._portalContainer)==null||i.remove(),this._portalContainer=null,document.querySelector("[data-sfx-upload-float]")||(o=document.querySelector("style[data-sfx-upload-float-styles]"))==null||o.remove(),this._revokeVideoBlobUrls();for(const r of this._rejectedTimers.values())clearTimeout(r);this._rejectedTimers.clear(),this._closeOnCompleteTimer&&(clearTimeout(this._closeOnCompleteTimer),this._closeOnCompleteTimer=null),this._clearSimilarRun();for(const r of this._store.getState().files.values())r.previewUrl&&URL.revokeObjectURL(r.previewUrl);(s=this._engine)==null||s.destroy(),this._engine=null}_applyConfig(t){const e={};if(t.locale&&this._initI18n(t.locale),t.targetFolder&&(e.targetFolder=t.targetFolder),(t.restrictions||t.forceName!=null)&&(e.restrictions={...this._store.getState().restrictions,...t.restrictions},t.forceName!=null&&(e.restrictions.maxNumberOfFiles=1)),t.concurrency!=null){const s=this._store.getState().queueConfig;e.queueConfig={...s,concurrency:t.concurrency}}if(t.autoProceed!=null){const s=e.queueConfig??this._store.getState().queueConfig;e.queueConfig={...s,autoProceed:t.autoProceed}}Object.keys(e).length>0&&this._store.setState(e);const i=t.uploadSettings;if(i&&i.defaults){const s=i.defaults;s.resize!==void 0&&(this._setResize=s.resize),s.maxWidth!==void 0&&(this._setMaxW=s.maxWidth),s.maxHeight!==void 0&&(this._setMaxH=s.maxHeight),s.transcode!==void 0&&(this._setTranscode=s.transcode),s.resolution!==void 0&&(this._setResolution=s.resolution),s.protocol!==void 0&&(this._setProtocol=s.protocol),s.resumable!==void 0&&(this._setResumable=s.resumable)}const o=this._lastUploadId;this._hasStoredReview=o!=null&&Je.exists(o),this._resolveAuthAndEngine(t),(t.mode==="inline"||!t.mode)&&(this._isOpen=!0)}async _resolveAuthAndEngine(t){var e,i,o,s;const r=t.auth;if(r.mode==="sass-key"){this._apiBase=Bi(r.container,t.apiDomain),this._authHeaders=Ci(r),this._ensureEngine(),(i=this._engine)==null||i.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(e=t.connectors)==null?void 0:e.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(t);return}const n=++this._authResolveId;try{const a=await fl(r,t.apiDomain);if(n!==this._authResolveId)return;this._apiBase=a.apiBase,this._authHeaders=a.headers,this._ensureEngine(),(s=this._engine)==null||s.updateConfig({apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(o=t.connectors)==null?void 0:o.companionUrl,resolveUploadParams:this._buildUploadParamsResolver()}),this._preloadMetadataSchema(t)}catch(a){if(n!==this._authResolveId)return;console.error("[sfx-uploader] Auth resolution failed:",a),this._showToast(this._formatAuthError(a))}}_formatAuthError(t){var e,i;const o=t instanceof Error?t.message:String(t);return(i=(e=this.config)==null?void 0:e.auth)!=null&&i.container?o.includes("HTTP 404")?`Authentication failed: container "${this.config.auth.container}" not found. Check your container name.`:o.includes("HTTP 401")||o.includes("HTTP 403")?"Authentication failed: invalid security template ID. Check your credentials in the Auth panel.":o.includes("timed out")?"Authentication failed: request timed out. Check your network connection.":o.includes("Failed to fetch")||o.includes("NetworkError")?"Authentication failed: network error. Check your internet connection.":`Authentication failed: ${o}`:"Authentication failed: no container specified. Open the Auth panel and enter your credentials."}_showToast(t,e="error"){var i;const o=(i=this.shadowRoot)==null?void 0:i.querySelector("sfx-toast");o==null||o.show(t,e)}_normalizeTusConfig(){var t,e,i,o;const s=(t=this.config)==null?void 0:t.uploadSettings,r=!!s&&s.showResumableSwitcher===!0,n=(e=this.config)==null?void 0:e.tusConfig;let a=n===!0?{}:n||void 0;if(r){if(!this._setResumable)return;a||(a={})}if(!a)return;const l=(o=(i=this.config)==null?void 0:i.connectors)==null?void 0:o.companionUrl;if(!l)return a;const c=l.replace(/\/+$/,"");return{...a,endpoint:a.endpoint??`${c}/files`,jsonBase:a.jsonBase??`${c}/json`}}get _remainingSlots(){const t=this._storeCtrl.state.restrictions.maxNumberOfFiles;if(t==null)return null;let e=0;for(const i of this._storeCtrl.state.files.values())i.status!=="rejected"&&i.status!=="cancelled"&&e++;return Math.max(0,t-e)}get _allowMulti(){var t;if(((t=this.config)==null?void 0:t.forceName)!=null)return!1;const e=this._remainingSlots;return e===null||e>1}get _allowFolderUpload(){var t;return((t=this.config)==null?void 0:t.preserveFolderStructure)===!1?!1:this._allowMulti}_buildUploadParamsResolver(){const t=this.config;if(!t)return;const{forceName:e,getUploadParams:i}=t;return o=>{const s={},r=le(o);if(this._setResize&&(r==="image"||r==="pdf")&&this._setMaxW>0&&this._setMaxH>0&&(s.resize=`${this._setMaxW},${this._setMaxH}`),this._setTranscode&&r==="vid"&&(s.postprocess="transcode",s["video-resolution"]=this._setResolution,s.video_protocols=this._setProtocol),e!=null){const a=typeof e=="function"?e():e;a&&(s.opt_force_name=a)}const n=i==null?void 0:i(o);return n&&Object.assign(s,n),Object.keys(s).length>0?s:void 0}}_ensureEngine(){var t,e;!this._engine&&this._apiBase&&this._authHeaders&&(this._engine=new ul(this._store,{apiBase:this._apiBase,authHeaders:this._authHeaders,tusConfig:this._normalizeTusConfig(),companionUrl:(e=(t=this.config)==null?void 0:t.connectors)==null?void 0:e.companionUrl,resolveUploadParams:this._buildUploadParamsResolver(),transformPreviewUrl:(i,o)=>this._transformRemoteThumbnail(i,{source:"cdn-complete",urls:o})}),this._engine.start())}async _preloadMetadataSchema(t){const e=t.metadataConfig;if(!e||!this._apiBase||!this._authHeaders)return;const i=this._storeCtrl.state.t;try{const{fetchMetadataSchema:o,fetchDependencies:s,normalizeDependencies:r,hasCachedSchema:n,hasCachedDependencies:a,canReachHub:l,HUB_HEADERS_HINT:c,createTagsAutocomplete:d,createTaxonomyService:p,createUltratagsService:u,createFieldI18nService:b}=await yt(async()=>{const{fetchMetadataSchema:v,fetchDependencies:$,normalizeDependencies:E,hasCachedSchema:L,hasCachedDependencies:R,canReachHub:A,HUB_HEADERS_HINT:re,createTagsAutocomplete:fe,createTaxonomyService:O,createUltratagsService:V,createFieldI18nService:ne}=await import("./index-By-Ia9bl-hfntVoOj.js");return{fetchMetadataSchema:v,fetchDependencies:$,normalizeDependencies:E,hasCachedSchema:L,hasCachedDependencies:R,canReachHub:A,HUB_HEADERS_HINT:re,createTagsAutocomplete:fe,createTaxonomyService:O,createUltratagsService:V,createFieldI18nService:ne}},__vite__mapDeps([5,1,2])),h=l(e),_=h||!!e.rawMetadata||n(e.projectUuid),C=h||a(e.projectUuid)||!!e.rawDependencies;if(!_){this._warnedHubSchemaSkip||(this._warnedHubSchemaSkip=!0,console.warn(`[sfx-uploader] metadataConfig is set but no usable Hub auth is configured — skipping metadata schema and dependencies. ${c}`),this._showToast(i("metadataUnavailable","Metadata is unavailable — missing Hub session headers"),"warning")),this._metadataSchema=null,this._metadataDependencies=[];return}let U;e.rawDependencies?U=Promise.resolve(r(e.rawDependencies)):C?U=s(e.projectUuid,this._authHeaders,{hubApiBase:e.hubApiBase,hubHeaders:e.hubHeaders}).catch(v=>(console.warn("[sfx-uploader] Failed to load metadata dependencies:",v),[])):(this._warnedHubDepsSkip||(this._warnedHubDepsSkip=!0,console.warn(`[sfx-uploader] No usable Hub auth — metadata dependency rules are disabled (the schema itself loads without the Hub). ${c}`)),U=Promise.resolve([]));const[w,x]=await Promise.all([o(this._apiBase,this._authHeaders,e.projectUuid,e),U]);this._metadataDependencies=x,this._metadataAutocomplete=d(this._apiBase,this._authHeaders),this._taxonomyService=p(this._apiBase,this._authHeaders),this._ultratagsService=u(this._apiBase,this._authHeaders),this._fieldI18nService=b(this._apiBase,this._authHeaders),this._metadataSchema=w.productsEnabled?sc(w,this._storeCtrl.state.t):w;const S=this._metadataSchema.fields.filter(v=>Nt(v,e)).map(v=>v.key);this._dispatchPublic(H.METADATA_SCHEMA,{schema:this._metadataSchema,requiredFieldKeys:S}),this._loadMetadataTranslations(),this._applyDependencySetValuesPrefill()}catch(o){console.error("[sfx-uploader] Failed to load metadata schema:",o),this._showToast(i("metadataLoadFailed","Failed to load metadata schema"),"warning")}}_applyDependencySetValuesPrefill(t){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const e=this._metadataSchema,i=this._store.getState().files;let o=!1;const s=new Map(i),r=t?(()=>{const n=i.get(t);return n?[n]:[]})():i.values();for(const n of r){if(!W._MODIFIABLE_STATUSES.has(n.status))continue;const a=Ot({mime:n.type??"",meta:n.meta},e,this._metadataDependencies);if(a.size===0)continue;const l={};for(const c of e.fields){const d=a.get(c.ckey);(d==null?void 0:d.setValue)!==void 0&&(d.hidden||Ht(n.meta[c.key])&&(l[c.key]=Wl(c,d.setValue)))}Object.keys(l).length!==0&&(s.set(n.id,{...n,meta:{...n.meta,...l}}),o=!0)}o&&this._store.setState({files:s})}_stripHiddenFieldsForUpload(){if(!this._metadataSchema||this._metadataDependencies.length===0)return;const t=this._metadataSchema,e=this._store.getState().files;let i=!1;const o=new Map(e);for(const s of e.values()){if(!W._MODIFIABLE_STATUSES.has(s.status))continue;const r=Ot({mime:s.type??"",meta:s.meta},t,this._metadataDependencies),n=Jl(s.meta,t,r);n!==s.meta&&(o.set(s.id,{...s,meta:n}),i=!0)}i&&this._store.setState({files:o})}get _renameAllowed(){var t,e;return(((t=this.config)==null?void 0:t.allowFileRename)??!0)&&((e=this.config)==null?void 0:e.forceName)==null}_onPreviewRename(t,e){if(!this._renameAllowed)return;const i=e.trim();if(!i)return;const o=this._store.getState().files.get(t);if(!o||o.name===i)return;const s=new Map(this._store.getState().files);s.set(t,{...o,name:i}),this._store.setState({files:s})}_previewMeta(t){var e;return(e=this._metadataSchema)!=null&&e.productsEnabled?{...t.meta,[Ne]:t.product.ref,[qe]:t.product.position}:t.meta}_resolvedSchemaFor(t){return!this._metadataSchema||this._metadataDependencies.length===0?null:Ot({mime:t.type??"",meta:t.meta},this._metadataSchema,this._metadataDependencies)}get _metadataEnforcing(){var t;const e=(t=this.config)==null?void 0:t.metadataConfig;return!e||!this._metadataSchema?!1:gc(this._metadataSchema,e)}_firstMissingRequiredFieldKey(){var t;return!this._metadataEnforcing||!this._metadataSchema?null:mc(this._store.getState().files,this._metadataSchema,(t=this.config)==null?void 0:t.metadataConfig,this._metadataDependencies)}get _hasUnfilledRequiredMetadata(){return this._firstMissingRequiredFieldKey()!=null}_firstConflictedFieldKey(){return this._metadataSchema?xc(this._store.getState().files,this._metadataSchema,this._metadataDependencies):null}get _hasMetadataConflicts(){return this._firstConflictedFieldKey()!=null}get _hasMetadataIssues(){return this._hasUnfilledRequiredMetadata||this._hasMetadataConflicts}_dispatchPublic(t,e){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:e}))}_measureFloatGeometry(){var t;const e=this._isPillExpanded?"card":"pill",i=(t=this._portalContainer)==null?void 0:t.querySelector(".upload-float");if(!i)return{width:0,height:0,mode:e};const o=i.getBoundingClientRect();return{width:o.width,height:o.height,mode:e}}_dispatchFloatGeometryEvent(t){this.updateComplete.then(()=>{requestAnimationFrame(()=>{this._dispatchPublic(t,this._measureFloatGeometry())})})}_syncPortalOffsetVars(){if(!this._portalContainer)return;const t=getComputedStyle(this),e=t.getPropertyValue("--sfx-up-float-offset-x").trim(),i=t.getPropertyValue("--sfx-up-float-offset-y").trim();e?this._portalContainer.style.setProperty("--sfx-up-float-offset-x",e):this._portalContainer.style.removeProperty("--sfx-up-float-offset-x"),i?this._portalContainer.style.setProperty("--sfx-up-float-offset-y",i):this._portalContainer.style.removeProperty("--sfx-up-float-offset-y")}_onStoreChange(){var t,e,i,o,s,r,n,a,l,c;const d=this._store.getState(),p=this._prevStoreState;if(this._prevStoreState=d,!p)return;d.isUploading&&!p.isUploading&&(this._lastEta=0,this._firedFolders.clear());const u=(t=this.config)==null?void 0:t.callbacks;for(const[b,h]of d.files){const _=p.files.get(b);if(!_){h.relativeFolder&&this._firedFolders.delete(h.relativeFolder);continue}if(_.status!==h.status)switch(h.status){case"uploading":_.status==="paused"&&(this._dispatchPublic(H.UPLOAD_RESUMED,{file:h}),(e=u==null?void 0:u.onUploadResumed)==null||e.call(u,h));break;case"complete":h.response&&(this._dispatchPublic(H.UPLOAD_COMPLETE,{file:h,response:h.response}),(i=u==null?void 0:u.onUploadComplete)==null||i.call(u,h,h.response));break;case"error":case"failed":{const C=new Error(h.error??"Upload failed");this._dispatchPublic(H.UPLOAD_ERROR,{file:h,error:C}),(o=u==null?void 0:u.onUploadError)==null||o.call(u,h,C);break}case"retrying":this._dispatchPublic(H.UPLOAD_RETRY,{file:h,attempt:h.retryCount}),(s=u==null?void 0:u.onUploadRetry)==null||s.call(u,h,h.retryCount);break;case"paused":this._dispatchPublic(H.UPLOAD_PAUSED,{file:h}),(r=u==null?void 0:u.onUploadPaused)==null||r.call(u,h);break}h.status==="uploading"&&_.progress!==h.progress&&(this._dispatchPublic(H.UPLOAD_PROGRESS,{file:h,progress:h.progress,speed:h.speed}),(n=u==null?void 0:u.onUploadProgress)==null||n.call(u,h,h.progress,h.speed)),h.relativeFolder&&_.status!==h.status&&es.has(h.status)&&!this._firedFolders.has(h.relativeFolder)&&this._maybeDispatchFolderComplete(h.relativeFolder,d,u)}if(d.totalProgress!==p.totalProgress||d.totalSpeed!==p.totalSpeed){const b=d.totalSpeed>0?(d.totalBytes-d.totalBytesUploaded)/d.totalSpeed:d.isUploading?this._lastEta:0;d.totalSpeed>0&&(this._lastEta=b),this._dispatchPublic(H.TOTAL_PROGRESS,{percentage:d.totalProgress,speed:d.totalSpeed,eta:b}),(a=u==null?void 0:u.onTotalProgress)==null||a.call(u,d.totalProgress,d.totalSpeed,b)}if(p.isUploading&&!d.isUploading){const b=[...d.files.values()];if(!b.some(h=>h.status==="cancelled")){const h=b.filter(w=>w.status==="complete"),_=b.filter(w=>w.status==="failed"||w.status==="error");if(h.length===0&&_.length===0)return;const C=this._lastUploadId;if(C!=null){const w=[...h,..._];Je.save(C,w),this._hasStoredReview=w.length>0}this._dispatchPublic(H.ALL_COMPLETE,{successful:h,failed:_}),(l=u==null?void 0:u.onAllComplete)==null||l.call(u,h,_);const U=(c=this.config)==null?void 0:c.closeOnComplete;if(U!==!1&&U!=null){const w=typeof U=="number"?U:1500;this._closeOnCompleteTimer=setTimeout(()=>{var x,S,v;this._closeOnCompleteTimer=null,this._phase==="complete"&&(this._dispatchPublic(H.COMPLETE_ACTION,{}),(v=(S=(x=this.config)==null?void 0:x.callbacks)==null?void 0:S.onCompleteAction)==null||v.call(S),this.close())},w)}}}}_maybeDispatchFolderComplete(t,e,i){var o;const s=[...e.files.values()].filter(a=>a.relativeFolder===t);if(s.length===0||s.some(a=>!es.has(a.status)))return;const r=s.filter(a=>a.status==="complete"),n=s.filter(a=>a.status==="failed"||a.status==="error");r.length===0&&n.length===0||(this._firedFolders.add(t),this._dispatchPublic(H.FOLDER_COMPLETE,{folder:t,successful:r,failed:n}),(o=i==null?void 0:i.onFolderComplete)==null||o.call(i,t,r,n))}get _mergedSources(){var t;const e=(t=this.config)==null?void 0:t.connectors;if(e===this._cachedSourcesConfig)return this._cachedSources;if(this._cachedSourcesConfig=e,!e)return this._cachedSources=ot.filter(p=>p.id!=="url"),this._cachedSources;const i=e.providers.length>0?Tl(e.providers):[],o=e.customSources??[],s=e.coreSources?new Set(e.coreSources):null,r=s?ot.filter(p=>s.has(p.id)):ot,n=e.companionUrl?r:r.filter(p=>p.id!=="url"),a=n.filter(p=>p.id==="device"||p.id==="url"),l=n.filter(p=>p.id!=="device"&&p.id!=="url"),c=new Set,d=[];for(const p of[...a,...i,...l,...o])if(!c.has(p.id)){if(W._RESERVED_IDS.has(p.id)&&p.onActivate){console.warn(`[sfx-uploader] Custom source id "${p.id}" conflicts with a built-in source and was skipped.`);continue}c.add(p.id),d.push(p)}return this._cachedSources=d,this._cachedSources}get _phase(){const t=this._storeCtrl.state,e=[...t.files.values()];if(e.length===0)return"empty";if(t.isUploading)return"uploading";const i=new Set(["complete","rejected","cancelled","failed"]);return e.every(o=>i.has(o.status))&&e.some(o=>o.status==="complete"||o.status==="failed")?"complete":"ready"}_processIncomingFiles(t){var e,i,o,s,r;const n=(e=this.config)==null?void 0:e.callbacks;this._phase==="complete"&&this._onClearAll(!0),this._isReviewing&&(this._isReviewing=!1,this._reviewFiles=[]);const a=((i=this.config)==null?void 0:i.preserveFolderStructure)!==!1;let l=0,c=!1;const d=(u,b,h)=>`${u}\0${b}\0${h}`,p=new Set;for(const u of this._store.getState().files.values())u.status!=="rejected"&&u.status!=="cancelled"&&p.add(d(u.name,u.size,u.relativeFolder??""));for(const u of t){if(ci(u.name))continue;if(c){l++;continue}const b=a?al(nl(u)):"",h=this._store.getState(),_=d(u.name,u.size,b);if(p.has(_))continue;const C=u.type||Ko(u.name),U=di({name:u.name,size:u.size,type:C},h.restrictions,h.files);if(U){if(Ol(U)){c=!0,l++;continue}const S=C.startsWith("image/")&&!ye(C)?URL.createObjectURL(u):null,v={id:Le(),status:"rejected",file:u,remoteUrl:null,name:u.name,size:u.size,type:C,previewUrl:S,duration:null,progress:0,speed:0,bytesUploaded:0,error:U.message,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...ze,relativeFolder:b};Te(this._store,v),this._dispatchPublic(H.FILE_REJECTED,{file:v,reason:U.message}),(o=n==null?void 0:n.onFileRejected)==null||o.call(n,v,U.message);const $=(s=this.config)==null?void 0:s.rejectedFileAutoRemoveDelay,E=$===!1||$===0||$===void 0?0:$;if(E>0){const L=v.id,R=setTimeout(()=>{this._rejectedTimers.delete(L);const A=this._store.getState().files.get(L);A&&A.status==="rejected"&&ho(this._store,L)},E);this._rejectedTimers.set(L,R)}continue}let w=null;C.startsWith("image/")&&!ye(C)&&(w=URL.createObjectURL(u));const x={id:Le(),status:"idle",file:u,remoteUrl:null,name:u.name,size:u.size,type:C,previewUrl:w,duration:null,progress:0,speed:0,bytesUploaded:0,error:null,retryCount:0,response:null,addedAt:Date.now(),meta:{},tags:[],product:{},remoteInfo:null,...ze,relativeFolder:b};if(Te(this._store,x),p.add(_),this._dispatchPublic(H.FILE_ADDED,{file:x}),(r=n==null?void 0:n.onFileAdded)==null||r.call(n,x),u.type.startsWith("video/")){Rl(u).then(v=>{if(!v)return;const $=this._store.getState(),E=$.files.get(x.id);if(E){const L=new Map($.files);L.set(x.id,{...E,previewUrl:v}),this._store.setState({files:L})}else URL.revokeObjectURL(v)});const S=document.createElement("video");S.preload="metadata",S.src=URL.createObjectURL(u),S.onerror=()=>{URL.revokeObjectURL(S.src)},S.onloadedmetadata=()=>{const v=S.duration;if(URL.revokeObjectURL(S.src),!isFinite(v))return;const $=this._store.getState(),E=$.files.get(x.id);if(E){const L=new Map($.files);L.set(x.id,{...E,duration:v}),this._store.setState({files:L})}}}}if(l>0){const u=this._storeCtrl.state.t,b=this._store.getState().restrictions.maxNumberOfFiles??0;this._showToast(u("tooManyFilesSkipped",{count:l,max:b,defaultValue_one:"Skipped {{count}} file — limit is {{max}}",defaultValue_other:"Skipped {{count}} files — limit is {{max}}"}),"warning")}this._applyDependencySetValuesPrefill(),this._store.getState().queueConfig.autoProceed&&this.upload()}_showEmptyFolderToast(){const t=this._storeCtrl.state.t;this._showToast(t("emptyFolderDrop","The dropped folder is empty — no files were added"),"info")}_removeFile(t){var e,i,o,s,r;const n=this._store.getState().files.get(t);if(!n)return;const a={...n};if((this._fullscreenPreviewUrl&&this._fullscreenPreviewUrl===n.previewUrl||this._fullscreenVideoFile&&this._fullscreenVideoFile===n.file)&&(this._fullscreenPreviewUrl=null,this._fullscreenVideoFile=null),n.previewUrl&&URL.revokeObjectURL(n.previewUrl),n.file){const c=this._videoBlobUrls.get(n.file);c&&(URL.revokeObjectURL(c),this._videoBlobUrls.delete(n.file))}(n.status==="uploading"||n.status==="queued"||n.status==="retrying"||n.status==="paused")&&((e=this._engine)==null||e.cancelFile(t)),ho(this._store,t),(i=this._engine)==null||i.recompute(),this._dimCache.delete(t);const l=this._rejectedTimers.get(t);if(l&&(clearTimeout(l),this._rejectedTimers.delete(t)),this._previewFileId===t){const c=[...this._store.getState().files.values()];this._previewFileId=c.length>0?c[0].id:null}this._purgeSimilarState(t),this._dispatchPublic(H.FILE_REMOVED,{file:a}),(r=(s=(o=this.config)==null?void 0:o.callbacks)==null?void 0:s.onFileRemoved)==null||r.call(s,a)}_similarImageFiles(){return[...this._store.getState().files.values()].filter(t=>le(t)==="image"&&!ye(t.type))}_similarUncheckedFiles(){return this._similarImageFiles().filter(t=>!this._similarResults.has(t.id))}_similarityAuth(){var t,e,i;const o=(e=(t=this.config)==null?void 0:t.auth)==null?void 0:e.container,s=(i=this._authHeaders)==null?void 0:i["X-Filerobot-Key"];return!o||!s?null:{container:o,sassKey:s}}_similarMarkInactive(t){const e=new Set(this._similarActiveIds);e.delete(t),this._similarActiveIds=e}_similarSetResults(t,e){const i=new Map(this._similarResults);i.set(t,e),this._similarResults=i}_checkSimilarSingleFile(t){var e,i,o,s;if(this._similarActiveIds.has(t.id)||this._similarRunIds.includes(t.id))return;const r=this._similarityAuth();if(!r){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}const n=No((i=(e=this.config)==null?void 0:e.similarityCheck)==null?void 0:i.confidence),a=(s=(o=this.config)==null?void 0:o.similarityCheck)==null?void 0:s.endpoint;this._similarActiveIds=new Set(this._similarActiveIds).add(t.id),qo(t,{...r,threshold:n,endpoint:a}).then(l=>{this._similarMarkInactive(t.id),this._similarSetResults(t.id,l)}).catch(l=>{console.error("[sfx-uploader] Similarity check failed for",t.name,l),this._similarMarkInactive(t.id),this._similarSetResults(t.id,[])})}_runSimilarityCheck(t){var e,i,o,s;if(this._clearSimilarRun(),!t.length)return;const r=this._similarityAuth();if(!r){console.error("[sfx-uploader] Similarity check requires resolved auth.");return}this._similarRunIds=t.map(_=>_.id);const n=No((i=(e=this.config)==null?void 0:e.similarityCheck)==null?void 0:i.confidence),a=(s=(o=this.config)==null?void 0:o.similarityCheck)==null?void 0:s.endpoint,l=new AbortController;this._similarAbort=l;const c=[...t];let d=0,p=0;const u=t.length,b=()=>{if(!l.signal.aborted){if(!this._previewFileId){const _=t.find(C=>{var U;return(((U=this._similarResults.get(C.id))==null?void 0:U.length)??0)>0});_&&(this._previewFileId=_.id,this._showSettings=!1,this._previewPanelTab="similar")}this._similarDismissTimer=window.setTimeout(()=>this._clearSimilarRun(),1500)}},h=()=>{if(!l.signal.aborted)for(;d<Lc&&c.length>0;){const _=c.shift();d+=1,this._similarActiveIds=new Set(this._similarActiveIds).add(_.id),qo(_,{...r,threshold:n,endpoint:a,signal:l.signal}).then(C=>{l.signal.aborted||(this._similarMarkInactive(_.id),this._similarSetResults(_.id,C))}).catch(C=>{l.signal.aborted||(console.error("[sfx-uploader] Similarity check failed for",_.name,C),this._similarMarkInactive(_.id),this._similarSetResults(_.id,[]))}).finally(()=>{l.signal.aborted||(d-=1,p+=1,p===u?b():h())})}};h()}_clearSimilarRun(){var t;(t=this._similarAbort)==null||t.abort(),this._similarAbort=null,this._similarDismissTimer!=null&&(clearTimeout(this._similarDismissTimer),this._similarDismissTimer=null),this._similarRunIds=[],this._similarActiveIds=new Set}_purgeSimilarState(t){if(this._similarRunIds.includes(t)&&(this._similarRunIds=this._similarRunIds.filter(e=>e!==t)),this._similarActiveIds.has(t)){const e=new Set(this._similarActiveIds);e.delete(t),this._similarActiveIds=e}if(this._similarResults.has(t)){const e=new Map(this._similarResults);e.delete(t),this._similarResults=e}if(this._similarSelectedIds.has(t)){const e=new Set(this._similarSelectedIds);e.delete(t),this._similarSelectedIds=e}}_openSimilarAsset(t){t&&window.open(t,"_blank","noopener,noreferrer")}_simAssetName(t){let e="";if(t.url){const i=t.url.split("?")[0].split("/").pop()||"";try{e=decodeURIComponent(i)}catch{e=i}}return e||t.uuid}_simAssetMeta(t){const e=this._simAssetName(t),i=e.lastIndexOf("."),o=i>0?e.slice(i+1).toUpperCase():"";return o&&o.length<=5?o:""}_soleLocatableFile(t){var e;if(!((e=this.config)!=null&&e.showLocateButton))return null;const i=t.filter(o=>{var s,r;return o.status==="complete"&&!!((r=(s=o.response)==null?void 0:s.file)!=null&&r.uuid)});return i.length===1?i[0]:null}_locateFile(t){var e,i,o;if(!t)return;const s=Kr(t,this.config??void 0),r=this.dispatchEvent(new CustomEvent(H.FILE_LOCATE,{bubbles:!0,composed:!0,cancelable:!0,detail:{file:t,url:s}})),n=(o=(i=(e=this.config)==null?void 0:e.callbacks)==null?void 0:i.onFileLocate)==null?void 0:o.call(i,t,s);this._onMinimize(),!(!r||n===!1)&&s&&window.location.assign(s)}render(){var t;const e=((t=this.config)==null?void 0:t.mode)??"modal",i=[...this._storeCtrl.state.files.values()],o=this._storeCtrl.state.t;return e==="modal"?f`
        ${this._isOpen&&!this._isMinimized?f`
              <div class="modal-backdrop" @click=${this._onModalBackdropClick}>
                <div class="modal-card">
                  ${this._renderHeader()} ${this._renderBody()}
                  <sfx-toast .t=${o}></sfx-toast>
                </div>
              </div>
            `:P}
        ${this._renderFsOverlay()}
      `:f`
      <div class="inline ${i.length===0?"no-files":""}">
        ${this._renderHeader()} ${this._renderBody()}
          <sfx-toast .t=${o}></sfx-toast>
      </div>
      ${this._renderFsOverlay()}
    `}_renderFsOverlay(){if(!this._fullscreenPreviewUrl&&!this._fullscreenVideoFile)return P;const t=this._storeCtrl.state.t,e=this._getFullscreenNavigableFiles(),i=e.findIndex(o=>o.id===this._previewFileId);return f`
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
        ${this._fullscreenVideoFile?f`<video class="fs-img" src=${this._getVideoBlobUrl(this._fullscreenVideoFile)} controls playsinline draggable="false" @click=${o=>o.stopPropagation()}></video>`:f`<img class="fs-img" src=${this._fullscreenPreviewUrl} alt="" ${Y(this._fsZoom>1?{transform:`scale(${this._fsZoom}) translate(${this._fsPanX}px, ${this._fsPanY}px)`}:null)} draggable="false" />`}
      </div>
      <div class="fs-toolbar" @click=${o=>o.stopPropagation()}>
        <button class="fs-btn" @click=${this._onFsToggleZoom} title=${this._fsZoom>=W._FS_ZOOM_LEVELS[W._FS_ZOOM_LEVELS.length-1]?t("resetZoom","Reset zoom"):t("zoomIn","Zoom in ({{zoom}}×)",{zoom:this._fsZoom})}>
          ${this._fsZoom>=W._FS_ZOOM_LEVELS[W._FS_ZOOM_LEVELS.length-1]?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`}
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
    `}_renderProgressHeaderActions(){var t,e,i;const o=this._storeCtrl.state.t,s=((t=this.config)==null?void 0:t.mode)??"modal",r=((e=this.config)==null?void 0:e.header)??(s==="modal"?"close":!0),n=!!((i=this.config)!=null&&i.minimizeOnUpload)&&s!=="inline",a=r==="close";if(!n&&!a)return P;const l=s==="modal"?this._onModalDismiss:this._onInlineDismiss;return f`
      <div class="header-actions">
        ${n?f`<button
              class="header-btn"
              aria-label=${this._phase==="uploading"?o("minimizeAndContinue","Minimize & continue in background"):o("minimize","Minimize")}
              title=${o("minimize","Minimize")}
              @click=${this._onMinimize}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>`:P}
        ${a?f`<button
              class="header-btn"
              aria-label=${o("close","Close")}
              title=${o("close","Close")}
              @click=${l}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>`:P}
      </div>
    `}_renderInlineHeader(t){return f`
      <div class="inline-header">
        <div class="inline-header-top">
          ${t.accent?f`
                <div class="inline-header-accent">
                  <div class="accent-line"></div>
                  <span>${t.accent}</span>
                </div>
              `:P}
          ${t.title?f`<h2 class="inline-header-title">${t.title}</h2>`:P}
        </div>
        ${t.description?f`<div class="inline-header-desc">${t.description}</div>`:P}
      </div>
    `}_renderHeader(){var t,e,i,o,s,r;const n=this._storeCtrl.state.t,a=((t=this.config)==null?void 0:t.mode)??"modal";if(this._phase==="uploading"){const v=this._storeCtrl.state,$=[...v.files.values()].filter(A=>A.status!=="rejected"&&A.status!=="cancelled"),E=$.length,L=$.filter(A=>A.status==="complete").length,R=v.totalProgress??0;return f`
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
                ${n("uploadingFiles",{count:E,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"})}
              </div>
              <div class="float-subtitle">
                ${n("nOfNComplete","{{completed}} of {{total}} complete",{completed:L,total:E})}${this._lastEta>0?` · ${n("etaLeft","~{{eta}} left",{eta:Vo(this._lastEta)})}`:""}
              </div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          <div class="header-progress">
            <div
              class="header-progress-track"
              role="progressbar"
              aria-valuenow=${Math.round(R)}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label=${n("uploadProgress","Upload progress")}
            >
              <div class="header-progress-fill" ${Y({width:`${R}%`})}></div>
            </div>
          </div>
        </div>
      `}if(this._phase==="complete"){const v=[...this._storeCtrl.state.files.values()].filter(E=>E.status!=="rejected"&&E.status!=="cancelled"),$=this._batchOutcome(v,!0);return f`
        <div class="header upload-header has-progress">
          <div class="float-header-left">
            <div class="float-icon ${$.outcomeClass}">${$.outcomeIcon}</div>
            <div>
              <div class="float-title">${$.title}</div>
              <div class="float-subtitle">${$.doneSummary}</div>
            </div>
          </div>
          ${this._renderProgressHeaderActions()}
          ${$.segTotal>0?f`<div class="header-progress">
                <div class="header-overall-bar" aria-hidden="true">
                  ${$.newCount>0?f`<div class="header-seg ok" ${Y({width:$.segPct($.newCount)})}></div>`:P}
                  ${$.alreadyExistedCount>0?f`<div class="header-seg dup" ${Y({width:$.segPct($.alreadyExistedCount)})}></div>`:P}
                  ${$.failed>0?f`<div class="header-seg fail" ${Y({width:$.segPct($.failed)})}></div>`:P}
                </div>
              </div>`:P}
        </div>
      `}if(a==="inline"&&(e=this.config)!=null&&e.inlineHeader)return P;const l=((i=this.config)==null?void 0:i.header)??(a==="modal"?"close":!0);if(l===!1)return P;const c=a==="modal"?this._onModalDismiss:this._onInlineDismiss,d=l==="back"?f`<button
            class="header-btn header-btn-back"
            aria-label=${n("backToAssetPicker","Back to Asset Picker")}
            @click=${c}
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
          </button>`:P,p=(o=this.config)==null?void 0:o.uploadSettings,u=p!==!1&&(p==null||p.enabled!==!1),b=p!==!1&&p!=null&&p.showResumableSwitcher===!0,h=[...this._storeCtrl.state.files.values()],_=h.some(v=>le(v)==="image"&&!ye(v.type)),C=h.some(v=>le(v)==="pdf"),U=h.some(v=>le(v)==="vid"),w=u&&(_||C||U||b)?f`<button
            class="header-btn header-btn-settings ${this._showSettings?"on":""}"
            aria-label=${n("uploadSettings","Upload settings")}
            title=${n("uploadSettings","Upload settings")}
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
          </button>`:P,x=(r=(s=this._metadataSchema)==null?void 0:s.regionalVariantsGroups)!=null&&r.length?f`<sfx-regional-settings
          class="header-regional"
          .groups=${this._metadataSchema.regionalVariantsGroups}
          .selectedFilters=${this._effectiveRegionalFilters}
          @regional-change=${this._onRegionalChange}
        ></sfx-regional-settings>`:P,S=l==="close"?f`<button
            class="header-btn header-btn-close"
            aria-label=${n("close","Close")}
            @click=${c}
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
          </button>`:P;return f`
      <div class="header">
        ${d}
        ${l!=="back"?f` <div class="header-icon">
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
            </div>`:P}
        <div class="header-title">${n("uploadFiles","Upload Files")}</div>
        ${x}
        ${w}
        ${S}
      </div>
    `}_getImageDimensions(t){return t.previewUrl?this._dimCache.has(t.id)?Promise.resolve(this._dimCache.get(t.id)):new Promise(e=>{const i=new Image;i.onload=()=>{const o={w:i.naturalWidth,h:i.naturalHeight};this._dimCache.set(t.id,o),e(o)},i.onerror=()=>{this._dimCache.set(t.id,null),e(null)},i.src=t.previewUrl}):Promise.resolve(null)}_batchOutcome(t,e){const i=this._storeCtrl.state.t,o=t.filter(U=>U.status==="complete").length,s=t.filter(U=>U.status==="failed"||U.status==="error").length,r=t.filter(U=>U.status==="complete"&&U.alreadyExisted).length,n=Math.max(o-r,0),a=o>0&&s===0&&r>=o,l=e?s>0?"error":r>0?"warn":"done":"",c=f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>`,d=f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>`,p=f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>`,u=s>0?o>0?c:d:r>0?c:p,b=e?s>0?o>0?i("partiallyUploaded","Partially uploaded"):i("uploadFailed","Upload failed"):a?i("alreadyInLibrary",{count:r,defaultValue_one:"{{count}} file was already in your library",defaultValue_other:"{{count}} files were already in your library"}):i("uploadComplete","Upload complete"):i("uploadingFiles",{count:t.length,defaultValue_one:"Uploading {{count}} file",defaultValue_other:"Uploading {{count}} files"}),h=[];n>0&&h.push(i("nUploaded","{{count}} uploaded",{count:n})),r>0&&h.push(i("nAlreadyInLibrary","{{count}} already in library",{count:r})),s>0&&h.push(i("nFailed","{{count}} failed",{count:s}));const _=h.length>0?h.join(" · "):i("allDone","All done"),C=n+r+s;return{completed:o,failed:s,alreadyExistedCount:r,newCount:n,allAlreadyExisted:a,outcomeClass:l,outcomeIcon:u,title:b,doneSummary:_,segTotal:C,segPct:U=>C>0?`${U/C*100}%`:"0%"}}_renderFloatingPill(t){const e=this._storeCtrl.state,i=e.t,o=Math.round(e.totalProgress??0),s=this._phase==="complete",{completed:r,failed:n,alreadyExistedCount:a,newCount:l,outcomeClass:c,outcomeIcon:d,title:p,doneSummary:u,segPct:b}=this._batchOutcome(t,s),h=this._soleLocatableFile(t);if(this._isPillExpanded===!1)return f`
        <div class="upload-float float-collapsed">
          <div class="float-collapsed-left">
            ${s?f`<div class="float-collapsed-icon ${c}">${d}</div>`:f`<div class="float-collapsed-spinner"></div>`}
            <span class="float-collapsed-text">${p}</span>
            ${s?P:f`<span class="float-collapsed-pct">${o}%</span>`}
          </div>
          <div class="float-collapsed-actions">
            ${s&&h?f`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(h)}
                >
                  ${ni}
                </button>`:P}
            <button title=${i("openUploader","Open uploader")} @click=${this._onPillExpand}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${i("expand","Expand")} @click=${this._onPillClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      `;const _=t.filter(x=>x.status==="failed"||x.status==="error"),C=t.filter(x=>x.status==="complete"&&x.alreadyExisted),U=t.filter(x=>x.status!=="failed"&&x.status!=="error"&&x.status!=="complete"),w=t.filter(x=>x.status==="complete"&&!x.alreadyExisted);return f`
      <div class="upload-float">
        <div class="float-header">
          <div class="float-header-left">
            <div class="float-icon ${c}">
              ${s?d:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <polyline points="16 16 12 12 8 16" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                  </svg>`}
            </div>
            <div>
              <div class="float-title">${p}</div>
              <div class="float-subtitle">
                ${s?u:`${i("nOfNComplete","{{completed}} of {{total}} complete",{completed:r,total:t.length})}${this._lastEta>0?` · ${i("etaLeft","~{{eta}} left",{eta:Vo(this._lastEta)})}`:""}`}
              </div>
            </div>
          </div>
          <div class="float-actions">
            ${s&&h?f`<button
                  class="locate"
                  title=${i("locate","Locate")}
                  aria-label=${i("locate","Locate")}
                  @click=${()=>this._locateFile(h)}
                >
                  ${ni}
                </button>`:P}
            <button title=${i("expand","Expand")} @click=${this._onPillExpand}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <button title=${i("collapse","Collapse")} @click=${this._onPillClick}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <button title=${i("close","Close")} @click=${this._onPillDismiss}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div class="float-progress">
          <div class="float-progress-top">
            <span class="float-progress-label">${i("overallProgress","Overall progress")}</span>
            ${s?P:f`<span class="float-progress-pct">${o}%</span>`}
          </div>
          ${s?f`<div class="float-bar segmented" role="img" aria-label=${u}>
                ${l>0?f`<div class="float-bar-seg ok" ${Y({width:b(l)})}></div>`:P}
                ${a>0?f`<div class="float-bar-seg dup" ${Y({width:b(a)})}></div>`:P}
                ${n>0?f`<div class="float-bar-seg fail" ${Y({width:b(n)})}></div>`:P}
              </div>`:f`<div class="float-bar">
                <div class="float-bar-fill" ${Y({width:`${o}%`})}></div>
              </div>`}
        </div>
        <div class="float-items">
          ${Qe(_,x=>x.id,x=>this._renderFloatItem(x,i))}
          ${Qe(C,x=>x.id,x=>this._renderFloatItem(x,i))}
          ${Qe(U,x=>x.id,x=>this._renderFloatItem(x,i))}
          ${Qe(w,x=>x.id,x=>this._renderFloatItem(x,i))}
        </div>
      </div>
    `}_renderFloatItem(t,e){var i,o,s;const r=t.status==="failed"||t.status==="error";return f`
              <div class="float-item">
                <div
                  class="float-item-thumb"
                  ${Y(t.previewUrl?{"background-image":`url(${t.previewUrl})`,"background-size":"cover","background-position":"center"}:null)}
                >
                  ${t.previewUrl?P:f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>`}
                </div>
                <div class="float-item-info">
                  <div class="float-item-name">${t.name}</div>
                  <div class="float-item-size">${je(t.size)}</div>
                </div>
                <div class="float-item-status">
                  ${t.status==="complete"?f`${(i=this.config)!=null&&i.showLocateButton&&(s=(o=t.response)==null?void 0:o.file)!=null&&s.uuid?f`<button
                              class="float-item-act locate"
                              title=${e("locate","Locate")}
                              aria-label=${e("locate","Locate")}
                              @click=${()=>this._locateFile(t)}
                            >
                              ${ni}
                            </button>`:P}
                        ${t.alreadyExisted?f`<div class="float-item-tip">
                              <div class="float-item-done warn" aria-label=${e("alreadyInYourLibrary","Already in your library")}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                  <line x1="12" y1="9" x2="12" y2="13" />
                                  <line x1="12" y1="17" x2="12.01" y2="17" />
                                </svg>
                              </div>
                              <span class="float-item-tooltip">${e("alreadyInYourLibrary","Already in your library")}</span>
                            </div>`:f`<div class="float-item-tip">
                              <div class="float-item-done" aria-label=${e("uploaded","Uploaded")}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span class="float-item-tooltip">${e("uploaded","Uploaded")}</span>
                            </div>`}`:r?f`<button
                          class="float-item-retry"
                          title=${e("retry","Retry")}
                          aria-label=${e("retry","Retry")}
                          @click=${()=>{var n;this._ensureEngine(),(n=this._engine)==null||n.retryFile(t.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 2v6h-6" />
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                            <path d="M3 22v-6h6" />
                            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                          </svg>
                        </button>
                        <div class="float-item-error-wrap">
                          <svg class="float-item-error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          <span class="float-item-tooltip">${t.error||e("uploadFailed","Upload failed")}</span>
                        </div>`:t.status==="paused"?f`
                        <button
                          class="float-item-act paused"
                          title=${e("resume","Resume")}
                          aria-label=${e("resumeUpload","Resume upload")}
                          @click=${()=>{var n;return(n=this._engine)==null?void 0:n.resumeFile(t.id)}}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5,3 19,12 5,21" />
                          </svg>
                        </button>
                        <button
                          class="float-item-act del"
                          title=${e("remove","Remove")}
                          aria-label=${e("removeFile","Remove file")}
                          @click=${()=>this._removeFile(t.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                        </button>`:f`
                        ${t.status==="uploading"&&t.isTus?f`<button
                              class="float-item-act"
                              title=${e("pause","Pause")}
                              aria-label=${e("pauseUpload","Pause upload")}
                              @click=${()=>{var n;return(n=this._engine)==null?void 0:n.pauseFile(t.id)}}
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                              </svg>
                            </button>`:P}
                        ${t.status==="uploading"||t.status==="queued"||t.status==="retrying"?f`<button
                              class="float-item-act del"
                              title=${e("remove","Remove")}
                              aria-label=${e("removeFile","Remove file")}
                              @click=${()=>this._removeFile(t.id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                            </button>`:P}
                        <div class="float-item-spinner"></div>
                      `}
                </div>
              </div>
            `}_renderPreviewLayout(t){var e,i,o,s,r,n,a,l,c;if(t.length===0)return P;const d=this._storeCtrl.state.t,p=t,u=p.find(E=>E.id===this._previewFileId)??p[0],b=((e=u.name.split(".").pop())==null?void 0:e.toUpperCase())||"";new Date(u.addedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),this._store.getState().targetFolder;const h=p.reduce((E,L)=>E+(L.size||0),0),_=!!((o=(i=this.config)==null?void 0:i.similarityCheck)!=null&&o.enabled)&&this._phase==="ready",C=_?p.filter(E=>le(E)==="image"&&!ye(E.type)&&!this._similarResults.has(E.id)).map(E=>E.id):[],U=Math.min(C.length,xe),w=U>0&&this._similarSelectedIds.size>=U,x=this._similarSelectedIds.size>=xe,S=this._similarResults.get(u.id),v=S!==void 0,$=v?this._previewPanelTab:"details";return f`
      <div class="preview-topbar"></div>
      <div class="preview-layout">
        <div class="file-grid-side" ${Y({flex:String(this._splitPct)})}>
          ${((s=this.config)==null?void 0:s.mode)==="inline"&&(r=this.config)!=null&&r.inlineHeader?this._renderInlineHeader(this.config.inlineHeader):P}
          <div class="file-grid-header">
            <span class="file-grid-header-text"
              >${p.length} ${p.length===1?"asset":"assets"} ·
              ${je(h)}</span
            >
          </div>
          <sfx-file-list
            .t=${this._storeCtrl.state.t}
            .files=${p}
            .store=${this._store}
            .showDropTile=${!0}
            .sources=${this._mergedSources}
            .accept=${Yo(this._storeCtrl.state.restrictions)}
            .multi=${this._allowMulti}
            .allowRename=${this._renameAllowed}
            .showLocateButton=${((n=this.config)==null?void 0:n.showLocateButton)??!1}
            .showCopyCdnButton=${((a=this.config)==null?void 0:a.showCopyCdnButton)??!1}
            .showCheckSimilar=${_}
            .selectMode=${_}
            .selectedIds=${this._similarSelectedIds}
            .allSelected=${w}
            .selectionFull=${x}
            .maxSelection=${xe}
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
        <div class="preview-panel" ${Y({flex:String(100-this._splitPct)})}>
          ${this._showSettings?this._renderSettingsPanel():f`
          <div class="preview-panel-header">
            <button
              class="preview-back-btn"
              @click=${()=>{this._previewFileId=null}}
              aria-label=${d("backToFileList","Back to file list")}
              title=${d("back","Back")}
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
            <span class="preview-header-name" title=${u.name}
              >${u.name}</span
            >
            <div class="preview-header-actions">
              ${u.previewUrl||u.type.startsWith("video/")&&u.file?f`
                    <button
                      @click=${()=>{this._fullscreenPreviewUrl=u.previewUrl,this._fullscreenVideoFile=u.type.startsWith("video/")&&u.file?u.file:null,this._fsZoom=1,requestAnimationFrame(()=>this.requestUpdate())}}
                      title=${d("fullscreen","Fullscreen")}
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
                  `:P}
              <button
                @click=${()=>{this._previewFileId=null}}
                title=${d("close","Close")}
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
          ${v?f`
                <div class="preview-tabs" role="tablist">
                  <button
                    class="preview-tab ${$==="details"?"active":""}"
                    role="tab"
                    aria-selected=${$==="details"}
                    @click=${()=>{this._previewPanelTab="details"}}
                  >
                    ${d("details","Details")}
                  </button>
                  <button
                    class="preview-tab ${$==="similar"?"active":""}"
                    role="tab"
                    aria-selected=${$==="similar"}
                    @click=${()=>{this._previewPanelTab="similar"}}
                  >
                    <span>${d("similarTab","Similar")}</span>${S&&S.length>0?f`<span class="preview-tab-count">${S.length}</span>`:P}
                  </button>
                </div>
              `:P}
          ${$==="similar"?this._renderSimilarPanel(u,S??[]):f`
          <div class="preview-details-body">
          ${u.type.startsWith("video/")&&u.file?f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <video
                      class="preview-image"
                      src=${this._getVideoBlobUrl(u.file)}
                      controls
                      playsinline
                    ></video>
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${p.indexOf(u)===0}
                    @click=${()=>this._navigatePreview(p,-1)}
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
                    ?disabled=${p.indexOf(u)===p.length-1}
                    @click=${()=>this._navigatePreview(p,1)}
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
              `:u.previewUrl?f`
                <div class="preview-media-area">
                  <div class="preview-img-wrap">
                    <img
                      class="preview-image"
                      src=${u.previewUrl}
                      alt=${u.name}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${p.indexOf(u)===0}
                    @click=${()=>this._navigatePreview(p,-1)}
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
                    ?disabled=${p.indexOf(u)===p.length-1}
                    @click=${()=>this._navigatePreview(p,1)}
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
              `:f`
                <div class="preview-media-area">
                  <div class="preview-doc-wrap ${le(u)}">
                    <img
                      class="preview-doc-type-img"
                      src=${Ms(b)}
                      alt="${b?d("extFile","{{ext}} file",{ext:b}):d("file","File")}"
                      @error=${E=>{const L=E.target,R=Bs();!L.dataset.fallback&&L.src!==R&&(L.dataset.fallback="1",L.src=R)}}
                    />
                  </div>
                  <button
                    class="preview-nav prev"
                    ?disabled=${p.indexOf(u)===0}
                    @click=${()=>this._navigatePreview(p,-1)}
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
                    ?disabled=${p.indexOf(u)===p.length-1}
                    @click=${()=>this._navigatePreview(p,1)}
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
          ${this._metadataSchema&&(l=this.config)!=null&&l.metadataConfig?f`<div class="preview-meta-list">
                <div class="preview-file-info">
                  ${b}${u.size?` · ${je(u.size)}`:""}${this._previewDims!=="—"?` · ${this._previewDims}`:""}
                </div>
              </div>`:P}
          ${this._metadataSchema&&(c=this.config)!=null&&c.metadataConfig?f`
                <div
                  class="preview-metadata"
                  @field-blur=${this._onPreviewMetadataBlur}
                  @taxonomy-entry-change=${this._onPreviewTaxonomyEntry}
                >
                  <sfx-metadata-form
                    .schema=${this._localizedMetadataSchema}
                    .meta=${this._previewMeta(u)}
                    .config=${this._effectiveMetadataConfig}
                    .autocomplete=${this._metadataAutocomplete}
                    .taxonomyService=${this._taxonomyService}
                    .ultratags=${this._ultratagsService}
                    .defaultLanguage=${this._metadataDefaultLanguage}
                    .taxonodes=${u.taxonodes??null}
                    .resolvedSchema=${this._resolvedSchemaFor(u)}
                    .dependencies=${this._metadataDependencies}
                  ></sfx-metadata-form>
                </div>
              `:f`
                <div class="preview-file-info-panel">
                  <div
                    class="preview-file-info-header ${this._fileInfoOpen?"open":""}"
                    @click=${()=>{this._fileInfoOpen=!this._fileInfoOpen}}
                  >
                    <span>${d("fileInfo","File info")}</span>
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
                      <div class="preview-file-info-key">${d("fileName","File name")}</div>
                      <div class="preview-file-info-val">
                        ${u.name}
                      </div>
                    </div>
                    <div class="preview-file-info-row">
                      <div class="preview-file-info-key">${d("type","Type")}</div>
                      <div class="preview-file-info-val">${b}</div>
                    </div>
                    ${u.size?f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${d("size","Size")}</div>
                            <div class="preview-file-info-val">
                              ${je(u.size)}
                            </div>
                          </div>
                        `:P}
                    ${this._previewDims!=="—"?f`
                          <div class="preview-file-info-row">
                            <div class="preview-file-info-key">${d("dimensions","Dimensions")}</div>
                            <div class="preview-file-info-val">
                              ${this._previewDims}
                            </div>
                          </div>
                        `:P}
                  </div>
                </div>
              `}
          </div>
              `}
          `}
        </div>
      </div>
    `}_renderSimilarPanel(t,e){const i=this._storeCtrl.state.t;return e.length===0?f`
        <div class="psim-empty">
          <span class="psim-empty-ic"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
          ></span>
          <b>${i("noSimilarFound","No similar assets found")}</b>
          <span>${i("noSimilarHint","This image looks unique in your library.")}</span>
        </div>
      `:f`
      <div class="psim-body">
        ${e.map(o=>{const s=Math.round(o.score*100);return f`
            <div class="psim-card">
              <div class="psim-iw">
                <span class="psim-score ${o.score>=.85?"high":""}">${s}%</span>
                <button
                  class="psim-open"
                  @click=${()=>this._openSimilarAsset(o.url)}
                  title=${i("openInNewWindow","Open in new window")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </button>
                ${o.url?f`<img src=${o.url} alt="" />`:P}
              </div>
              <div class="psim-foot">
                <div class="psim-foot-name">${this._simAssetName(o)}</div>
                <div class="psim-foot-meta">${this._simAssetMeta(o)}</div>
              </div>
            </div>
          `})}
      </div>
    `}_renderSettingsPanel(){var t;const e=this._storeCtrl.state.t,i=[...this._storeCtrl.state.files.values()],o=i.some(p=>le(p)==="image"&&!ye(p.type)),s=i.some(p=>le(p)==="pdf"),r=i.some(p=>le(p)==="vid"),n=(t=this.config)==null?void 0:t.uploadSettings,a=!!n&&n.showResumableSwitcher===!0,l=p=>{switch(p){case"auto":return e("resolutionAuto","Auto");case"mobile":return e("resolutionMobile","Mobile");case"tablet":return e("resolutionTablet","Tablet");case"desktop":return e("resolutionDesktop","Desktop");case"hq":return e("resolutionHq","HQ");case"sample":return e("resolutionSample","Sample")}},c=p=>{switch(p){case"hls":return e("protocolHls","HLS")}},d=p=>u=>{const b=parseInt(u.target.value,10);p(Number.isFinite(b)?b:0)};return f`
      <div class="preview-panel-header settings-header">
        <span class="preview-header-name"
          >${e("uploadSettings","Upload settings")}</span
        >
        <div class="preview-header-actions">
          <button
            @click=${()=>{this._showSettings=!1}}
            title=${e("close","Close")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="settings-body">
        ${o||s?f`
              <!-- Image settings (only when the queue contains an image or PDF) -->
              <div class="sgroup-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg>
                ${e("imageSettings","Image settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("resizeImages","Resize Images")}</span>
                <span class="info-i" data-tip=${e("resizeImagesInfo","Scale down large images to the maximum dimensions below before uploading.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResize?"on":""}"
                  role="switch"
                  aria-checked=${this._setResize}
                  aria-label=${e("resizeImages","Resize Images")}
                  @click=${()=>{this._setResize=!this._setResize}}
                ></button>
              </div>
              <div class="sfields ${this._setResize?"":"dep-off"}">
                <div class="sfield">
                  <label>${e("maxWidth","Max Width")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxW)}
                      @input=${d(p=>this._setMaxW=p)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
                <div class="sfield">
                  <label>${e("maxHeight","Max Height")}</label>
                  <div class="sinp">
                    <input
                      type="number"
                      min="1"
                      inputmode="numeric"
                      .value=${String(this._setMaxH)}
                      @input=${d(p=>this._setMaxH=p)}
                    />
                    <span class="sfx">px</span>
                  </div>
                </div>
              </div>
            `:P}

        ${r?f`
              <!-- Video settings (only when the queue contains a video) -->
              <div class="sgroup-title sgroup-title-spaced">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                ${e("videoSettings","Video settings")}
              </div>
              <div class="srow">
                <span class="srow-lbl">${e("transcodeVideo","Transcode video")}</span>
                <span class="info-i" data-tip=${e("transcodeVideoInfo","Re-encode videos into adaptive streaming formats for smoother playback.")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setTranscode?"on":""}"
                  role="switch"
                  aria-checked=${this._setTranscode}
                  aria-label=${e("transcodeVideo","Transcode video")}
                  @click=${()=>{this._setTranscode=!this._setTranscode,this._setTranscode||(this._setResolutionOpen=!1)}}
                ></button>
              </div>
              <div
                class="sfield sfield-block ${this._setTranscode?"":"dep-off"} ${this._setResolutionOpen?"open":""}"
              >
                <label>${e("resolution","Resolution")}</label>
                <div
                  class="ssel"
                  @click=${()=>{this._setResolutionOpen=!this._setResolutionOpen}}
                >
                  <span>${l(this._setResolution)}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
                ${this._setResolutionOpen&&this._setTranscode?f`
                      <div class="smenu">
                        ${zc.map(p=>f`
                            <div
                              class="sopt ${p===this._setResolution?"cur":""}"
                              @click=${()=>{this._setResolution=p,this._setResolutionOpen=!1}}
                            >
                              ${l(p)}
                              ${p===this._setResolution?f`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`:P}
                            </div>
                          `)}
                      </div>
                    `:P}
              </div>
              <div class="sfield sfield-block sfield-radios ${this._setTranscode?"":"dep-off"}">
                <label>${e("protocols","Protocols")}</label>
                ${Ic.map(p=>f`
                    <div
                      class="sradio-row"
                      @click=${()=>{this._setProtocol=p}}
                    >
                      <span class="sradio ${this._setProtocol===p?"on":""}"></span>
                      <span class="sradio-lbl">${c(p)}</span>
                    </div>
                  `)}
              </div>
            `:P}

        ${a?f`
              <!-- Resume uploads (resumable / tus) -->
              <div class="srow srow-spaced">
                <span class="srow-lbl">${e("resumeUploads","Resume uploads")}</span>
                <span class="info-i" data-tip=${e("resumeUploadsInfo","Enable the ability to resume uploads (recommended if you expect large files); slightly slower compared to uploading files in one go")}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
                <span class="sbeta" data-tip=${e("betaInfo","Beta functionality — you may experience performance issues in some cases")}>${e("beta","Beta")}</span>
                <span class="srow-spacer"></span>
                <button
                  class="sw-toggle ${this._setResumable?"on":""}"
                  role="switch"
                  aria-checked=${this._setResumable}
                  aria-label=${e("resumeUploads","Resume uploads")}
                  @click=${()=>{var p;this._setResumable=!this._setResumable,(p=this._engine)==null||p.updateConfig({tusConfig:this._normalizeTusConfig()})}}
                ></button>
              </div>
            `:P}
      </div>
    `}_navigatePreview(t,e){var i;const o=t.findIndex(s=>s.id===this._previewFileId)+e;if(o>=0&&o<t.length){const s=(i=this.shadowRoot)==null?void 0:i.querySelector(".preview-image[controls]");s&&(s.pause(),s.removeAttribute("src"),s.load()),this._previewFileId=t[o].id}}_renderBody(){var t,e,i,o,s,r,n,a,l,c,d,p,u;const b=this._storeCtrl.state,h=b.t,_=[...b.files.values()],C=_.filter(R=>R.status==="idle"||R.status==="queued"||R.status==="error"||R.status==="failed"),U=this._phase,w=Yo(b.restrictions),x=_.length>0,S=!!((e=(t=this.config)==null?void 0:t.similarityCheck)!=null&&e.enabled)&&U==="ready",v=S?_.filter(R=>le(R)==="image"&&!ye(R.type)&&!this._similarResults.has(R.id)).map(R=>R.id):[],$=Math.min(v.length,xe),E=$>0&&this._similarSelectedIds.size>=$,L=this._similarSelectedIds.size>=xe;return f`
      <div
        class="content"
        @files-selected=${this._onFilesSelected}
        @folder-empty=${this._onFolderEmpty}
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
        @clear-all=${this._onClearAll}
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
        <div
          class="body ${x?"has-files":""} ${this._bodyDragOver?"body-drag-over":""} ${this._previewFileId||this._showSettings?"has-preview":""}"
          @dragenter=${x?this._onBodyDragEnter:P}
          @dragover=${x?this._onBodyDragOver:P}
          @dragleave=${x?this._onBodyDragLeave:P}
          @drop=${x?this._onBodyDrop:P}
        >
          ${((i=this.config)==null?void 0:i.mode)==="inline"&&(o=this.config)!=null&&o.inlineHeader&&!this._previewFileId&&U!=="uploading"&&U!=="complete"&&!this._isReviewing?this._renderInlineHeader(this.config.inlineHeader):P}
          ${this._isReviewing?f`
                <sfx-last-upload-review
                  .t=${h}
                  .files=${this._reviewFiles}
                  .showLocateButton=${((s=this.config)==null?void 0:s.showLocateButton)??!1}
                  .showCopyCdnButton=${((r=this.config)==null?void 0:r.showCopyCdnButton)??!1}
                  @back=${this._onExitReview}
                  @clear-history=${this._onClearReview}
                ></sfx-last-upload-review>
              `:f`
                ${x?P:f`<sfx-drop-zone
                        .t=${h}
                        .compact=${x}
                        .externalDragOver=${this._bodyDragOver}
                        .accept=${w}
                        .sources=${this._mergedSources}
                        .sourcesLayout=${((n=this.config)==null?void 0:n.sourcesLayout)??"pills"}
                        .mode=${((a=this.config)==null?void 0:a.mode)??"modal"}
                        .multi=${this._allowMulti}
                        .directory=${this._allowFolderUpload}
                      ></sfx-drop-zone>
                      ${this._hasStoredReview?f`<button
                            class="last-upload-pill"
                            @click=${this._onEnterReview}
                            title=${h("viewLastUploadBatch","View last upload batch")}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                            ${h("viewLastUpload","View last upload")}
                          </button>`:P}`}
                ${x?this._previewFileId||this._showSettings?this._renderPreviewLayout(_):f`
                        <div class="asset-count">
                          ${_.length}
                          ${_.length===1?"file":"files"} ·
                          ${je(_.reduce((R,A)=>R+(A.size||0),0))}
                        </div>
                        <sfx-file-list
                          .t=${h}
                          .files=${_}
                          .store=${this._store}
                          .showDropTile=${U!=="uploading"&&U!=="complete"}
                          .sources=${this._mergedSources}
                          .accept=${w}
                          .multi=${this._allowMulti}
                          .allowRename=${this._renameAllowed}
                          .showLocateButton=${((l=this.config)==null?void 0:l.showLocateButton)??!1}
                          .showCopyCdnButton=${((c=this.config)==null?void 0:c.showCopyCdnButton)??!1}
                          .showCheckSimilar=${S}
                          .selectMode=${S}
                          .selectedIds=${this._similarSelectedIds}
                          .allSelected=${E}
                          .selectionFull=${L}
                          .maxSelection=${xe}
                          .searchRunIds=${this._similarRunIds}
                          .searchActiveIds=${this._similarActiveIds}
                          .searchResults=${this._similarResults}
                          .directory=${this._allowFolderUpload}
                          ?drag-active=${this._bodyDragOver}
                          @source-click=${this._onDropTileSourceClick}
                        ></sfx-file-list>
                      `:P}
              `}
        </div>

        ${x?f`
              <sfx-actions-bar
                .t=${h}
                .uploadState=${U==="uploading"?"uploading":U==="complete"?"done":"idle"}
                .fileCount=${U==="uploading"||U==="complete"?_.filter(R=>R.status!=="rejected"&&R.status!=="cancelled").length:C.length}
                .failedCount=${_.filter(R=>R.status==="failed"||R.status==="error").length}
                .showFillMetadata=${!!(((d=this.config)==null?void 0:d.showFillMetadata)??((p=this.config)==null?void 0:p.metadataConfig))}
                .requireMetadataFirst=${U==="ready"?this._hasMetadataIssues:!1}
                .showCheckSimilar=${!1}
                .selectMode=${S&&this._similarSelectedIds.size>0}
                .selectedCount=${this._similarSelectedIds.size}
                .maxSelection=${$}
                .allSelected=${E}
              ></sfx-actions-bar>
            `:P}
        ${this._showUrlDialog?f`<sfx-url-dialog .t=${h}></sfx-url-dialog>`:P}
        ${this._showCameraDialog?f`<sfx-camera-dialog .t=${h}></sfx-camera-dialog>`:P}
        ${this._showScreenCastDialog?f`<sfx-screen-cast-dialog .t=${h}></sfx-screen-cast-dialog>`:P}
        ${this._activeConnector&&(u=this.config)!=null&&u.connectors?f`
              <div
                class="connector-modal-backdrop"
                @click=${this._onConnectorBackdropClick}
              >
                <div class="connector-modal">
                  ${this._activeConnector==="google-drive"&&this.config.connectors.googlePicker?f`
                        <sfx-google-picker-view
                          .t=${h}
                          .companionUrl=${this.config.connectors.companionUrl}
                          .googlePickerConfig=${this.config.connectors.googlePicker}
                          .multi=${this._allowMulti}
                          .maxSelect=${this._remainingSlots}
                        ></sfx-google-picker-view>
                      `:Qo.has(this._activeConnector)?f`
                          <sfx-search-provider-browser
                            .t=${h}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-search-provider-browser>
                        `:f`
                          <sfx-provider-browser
                            .t=${h}
                            .provider=${this._activeConnector}
                            .companionUrl=${this.config.connectors.companionUrl}
                            .transformThumbnail=${this._connectorThumbnailTransform}
                            .multi=${this._allowMulti}
                            .maxSelect=${this._remainingSlots}
                          ></sfx-provider-browser>
                        `}
                </div>
              </div>
            `:P}
        ${this._bulkMetadataOpen&&this._metadataSchema?f`
              <sfx-bulk-metadata-modal
                .schema=${this._localizedMetadataSchema}
                .files=${[...this._store.getState().files.values()].filter(R=>W._MODIFIABLE_STATUSES.has(R.status))}
                .config=${this._effectiveMetadataConfig}
                .autocomplete=${this._metadataAutocomplete}
                .taxonomyService=${this._taxonomyService}
                .ultratags=${this._ultratagsService}
                .defaultLanguage=${this._metadataDefaultLanguage}
                .initialFieldKey=${this._bulkMetadataInitialFieldKey}
                .dependencies=${this._metadataDependencies}
                @metadata-save-batch=${this._onBulkMetadataSaveBatch}
                @product-save-batch=${this._onBulkProductSaveBatch}
                @taxonomy-save-batch=${this._onBulkTaxonomySaveBatch}
                @metadata-close=${this._onBulkMetadataClose}
                @regional-change=${this._onRegionalChange}
              ></sfx-bulk-metadata-modal>
            `:P}
      </div>
    `}_getFullscreenNavigableFiles(){return[...this._store.getState().files.values()].filter(t=>t.previewUrl||t.type.startsWith("video/")&&t.file).reverse()}_navigateFs(t){const e=this._getFullscreenNavigableFiles(),i=e.findIndex(s=>s.id===this._previewFileId);if(i===-1)return;const o=i+t;if(o>=0&&o<e.length){const s=e[o];this._fullscreenPreviewUrl=s.previewUrl,this._fullscreenVideoFile=s.type.startsWith("video/")&&s.file?s.file:null,this._previewFileId=s.id,this._fsZoom=1,this._fsPanX=0,this._fsPanY=0}}_getVideoBlobUrl(t){let e=this._videoBlobUrls.get(t);return e||(e=URL.createObjectURL(t),this._videoBlobUrls.set(t,e)),e}_revokeVideoBlobUrls(){for(const t of this._videoBlobUrls.values())URL.revokeObjectURL(t);this._videoBlobUrls.clear()}},W.styles=se`
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
      --sfx-up-font: "Inter", system-ui, -apple-system, sans-serif;
      --sfx-up-shadow: var(--shadow, rgba(0, 0, 0, 0.1));
      --sfx-up-surface: var(--card, #f8fafc);
      --sfx-up-backdrop: rgba(0, 0, 0, 0.45);
      --sfx-up-ring: var(--ring, oklch(0.578 0.198 268.129 / 0.7));
      --sfx-up-max-height: 88vh;
      --sfx-up-modal-max-width: 1100px;
      --sfx-up-bulk-modal-width: 980px;
      --sfx-up-bulk-modal-height: 82vh;
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
        --sfx-up-primary-hover: var(--primary-hover, color-mix(in srgb, var(--sfx-up-primary) 82%, #000));
        --sfx-up-primary-mid: var(--primary-mid, color-mix(in srgb, var(--sfx-up-primary) 80%, #fff));
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
      content: "";
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
      transition: color 0.15s, border-color 0.15s;
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
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: box-shadow 0.15s;
    }
    .psim-card:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 6px 16px rgba(0, 0, 0, 0.08);
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
      background-position: 0 0, 0 8px, 8px -8px, -8px 0;
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
      transition: opacity 0.15s ease, transform 0.15s ease;
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
      content: "";
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
      content: "";
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
      transition: bottom 0.25s ease, right 0.25s ease;
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
  `,W._FS_ZOOM_LEVELS=[1,2,3,4],W._MODIFIABLE_STATUSES=new Set(["idle","queued","rejected"]),W._RESERVED_IDS=new Set(["device","camera","url","screen-cast"]),W);B([F({attribute:!1})],M.prototype,"config");B([I()],M.prototype,"_isOpen");B([I()],M.prototype,"_activeConnector");B([I()],M.prototype,"_showUrlDialog");B([I()],M.prototype,"_showCameraDialog");B([I()],M.prototype,"_showScreenCastDialog");B([I()],M.prototype,"_similarSelectMode");B([I()],M.prototype,"_similarSelectedIds");B([I()],M.prototype,"_similarRunIds");B([I()],M.prototype,"_similarActiveIds");B([I()],M.prototype,"_similarResults");B([I()],M.prototype,"_previewPanelTab");B([I()],M.prototype,"_previewFileId");B([I()],M.prototype,"_previewDims");B([I()],M.prototype,"_fileInfoOpen");B([I()],M.prototype,"_splitPct");B([I()],M.prototype,"_showSettings");B([I()],M.prototype,"_setResize");B([I()],M.prototype,"_setMaxW");B([I()],M.prototype,"_setMaxH");B([I()],M.prototype,"_setTranscode");B([I()],M.prototype,"_setResolution");B([I()],M.prototype,"_setResolutionOpen");B([I()],M.prototype,"_setProtocol");B([I()],M.prototype,"_setResumable");B([I()],M.prototype,"_fullscreenPreviewUrl");B([I()],M.prototype,"_fullscreenVideoFile");B([I()],M.prototype,"_fsZoom");B([I()],M.prototype,"_bodyDragOver");B([I()],M.prototype,"_isMinimized");B([I()],M.prototype,"_isPillExpanded");B([I()],M.prototype,"_metadataSchema");B([I()],M.prototype,"_metadataTranslations");B([I()],M.prototype,"_metadataDependencies");B([I()],M.prototype,"_regionalFilters");B([I()],M.prototype,"_bulkMetadataOpen");B([I()],M.prototype,"_bulkMetadataInitialFieldKey");B([I()],M.prototype,"_isReviewing");B([I()],M.prototype,"_reviewFiles");B([I()],M.prototype,"_hasStoredReview");let jc=M;const ve=(t,e)=>{typeof customElements<"u"&&!customElements.get(t)&&customElements.define(t,e)};ve("sfx-uploader",jc);ve("sfx-drop-zone",wc);ve("sfx-import-divider",kc);ve("sfx-source-pills",Hi);ve("sfx-file-list",K);ve("sfx-file-item",X);ve("sfx-actions-bar",pe);ve("sfx-url-dialog",bt);ve("sfx-camera-dialog",Ye);ve("sfx-screen-cast-dialog",Oe);const dd=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Gc as A,Qc as B,Li as C,Nt as D,Hc as F,Y as G,sn as H,Yc as I,Kc as L,Jc as M,on as N,Nc as O,Ce as P,hc as Q,qc as T,Bc as U,dc as X,_c as a,Ne as b,Ot as c,Xl as d,$e as e,nr as f,tc as g,Wc as h,Ms as i,ec as j,Bs as k,je as l,Xc as m,Qe as n,ed as o,Zc as p,qe as q,Ac as r,Ni as s,gc as t,de as u,Tl as v,lc as w,dd as x,Ht as z};
