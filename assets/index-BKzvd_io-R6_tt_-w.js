import{a as _,c as l,A as h,i as v,n as p,r as x,w as m}from"./index-BqysEWZn.js";import{X as Re,K as Ne,f as Ke}from"./define-x9S7c_zT.js";function he(o,e){const t=(e==null?void 0:e.language)??"en",i=o.model??[],s=o.store??{},a=i.find(f=>f.applies_to==="FILES");let r=(a==null?void 0:a.groups)??[];if(Array.isArray(e==null?void 0:e.fields)){const f=new Set(e.fields);r=r.map(b=>({...b,fields:b.fields.filter(g=>f.has(g.ckey))})).filter(b=>b.fields.length>0)}r=r.map(f=>({...f,fields:f.fields.filter(b=>!b.hide)})).filter(f=>f.fields.length>0);const n=r.flatMap(f=>f.fields),d=new Map(n.map(f=>[f.key,f])),c=s.force_filling_metadata_on_upload===!0,u=s.regional_variants_groups??[];return{groups:r,fields:n,fieldsByKey:d,forceFillingOnUpload:c,regionalVariantsGroups:u,language:t}}const Ve="https://hub.scaleflex.com/api",K=new Map,q=new Map;async function zt(o,e,t,i){const s=K.get(t);if(s)return s;const a=q.get(t);if(a)return a;if(i!=null&&i.rawMetadata){const n=he(i.rawMetadata,i);return K.set(t,n),n}const r=Ue(e,t,i);q.set(t,r);try{const n=await r;return K.set(t,n),n}finally{q.delete(t)}}async function Ue(o,e,t){var i,s,a;const r=`${(t==null?void 0:t.hubApiBase)??Ve}/project/${encodeURIComponent(e)}`,n=(t==null?void 0:t.hubHeaders)??o,d=await fetch(r,{headers:n});if(!d.ok)throw new Error(`Failed to fetch metadata schema (HTTP ${d.status})`);const c=await d.json(),u=((s=(i=c.data)==null?void 0:i.project)==null?void 0:s.data)??((a=c.project)==null?void 0:a.data);if(!(u!=null&&u.metadata))throw new Error("No metadata in project response");return he(u.metadata,t)}function Tt(o){var e;o?(K.delete(o),(e=q.get(o))==null||e.catch(()=>{}),q.delete(o)):(K.clear(),q.clear())}function xe(o,e,t){let i=e;switch(o.regional_variants_group_uuid&&i!=null&&typeof i=="object"&&!Array.isArray(i)&&(i=i[t??"en"]),o.type){case"geopoint":return Je(i);case"boolean":return i===!0?"true":i===!1?"false":"null";case"date":return i?new Date(i):null;case"decimal2":return i!=null?String(i):"";case"tags":return Array.isArray(i)?i.map(s=>typeof s=="string"?{value:s,label:s}:s):[];case"multi-select":return i||[];default:return i??""}}function ee(o,e,t,i){var s;let a;switch(o.type){case"geopoint":{const r=e;!r||r.latitude===""||r.latitude==null||r.longitude===""||r.longitude==null?a=null:a=`(${r.latitude},${r.longitude})`;break}case"boolean":e==="true"?a=!0:e==="false"?a=!1:a=null;break;case"date":{if(!e)a=null;else{const r=e instanceof Date?e:new Date(e),n=r.getFullYear(),d=String(r.getMonth()+1).padStart(2,"0"),c=String(r.getDate()).padStart(2,"0");a=`${n}-${d}-${c}`}break}case"tags":a=Array.isArray(e)?e.map(r=>(r==null?void 0:r.label)??""):[];break;case"select-one":a=e===""?null:e;break;case"numeric":{if(e===""||e==null){a=null;break}const r=Number(e);a=Number.isFinite(r)?Math.round(r):null;break}case"decimal2":{if(e===""||e==null){a=null;break}const r=Number(e);a=Number.isFinite(r)?r:null;break}default:a=e}if(o.regional_variants_group_uuid){const r=i??"en";return{...((s=t==null?void 0:t.meta)==null?void 0:s[o.key])??{},[r]:a}}return a}function Je(o){if(typeof o=="string"){const e=/\(([^)]+)\)/.exec(o);if(e){const t=e[1].split(",");if(t.length===2)return{latitude:t[0].trim(),longitude:t[1].trim()}}}return{latitude:"",longitude:""}}function ve(o,e,t){var i;if(((i=t==null?void 0:t.requiredFields)!=null&&i.includes(o.ckey)||o.required===1)&&$(e))return`${o.title} is required`;if($(e))return null;switch(o.type){case"numeric":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!Number.isInteger(s))return"Must be an integer";if(s<-1999999999||s>1999999999)return"Value out of range (±1,999,999,999)";break}case"decimal2":{const s=Number(e);if(!Number.isFinite(s))return"Must be a valid number";if(!/^\-?\d*\.?\d{0,2}$/.test(String(e)))return"Maximum 2 decimal places";if(s<-999999999999e-2||s>999999999999e-2)return"Value out of range (±9,999,999,999.99)";break}case"geopoint":{const s=e,a=s.latitude!==""&&s.latitude!=null,r=s.longitude!==""&&s.longitude!=null;if(a!==r)return"Both latitude and longitude are required";if(a&&r){const n=Number(s.latitude),d=Number(s.longitude);if(!Number.isFinite(n)||n<-90||n>90)return"Latitude must be between -90 and 90";if(!Number.isFinite(d)||d<-180||d>180)return"Longitude must be between -180 and 180"}break}case"attachment-uri":{try{const s=new URL(e);if(!["http:","https:"].includes(s.protocol))return"Only http and https URLs are allowed"}catch{return"Invalid URI"}break}}if(o.validation&&typeof e=="string")try{if(!new RegExp(o.validation).test(e))return"Value does not match expected format"}catch{}return null}function $(o){return o==null?!0:Array.isArray(o)||typeof o=="string"?o.length===0:typeof o=="object"?!Object.values(o).some(e=>e!=null&&e!==""):!o}function He(o){return!$(o)}function Ft(o,e,t){const i=new Set(["idle","queued","rejected"]),s=[...o.values()].filter(d=>i.has(d.status));if(s.length===0)return{};const a=new Set((t==null?void 0:t.requiredFields)??[]),r=e.fields.filter(d=>d.required===1||a.has(d.ckey)),n={};for(const d of r){const c=s.filter(u=>!He(u.meta[d.key]));c.length>0&&(n[d.key]=c)}return n}function jt(o,e){const t={...o};for(const i of Object.keys(e)){const s=e[i];if(s==null||s==="")continue;const a=o[i];if(Array.isArray(s))if(Array.isArray(a)){const r=new Set(a.map(d=>JSON.stringify(d))),n=[...a];for(const d of s){const c=JSON.stringify(d);r.has(c)||(r.add(c),n.push(d))}t[i]=n}else t[i]=s;else t[i]=s}return t}function Lt(o,e){let t=null,i=null,s=!1;return{search(a,r,n){if(t&&clearTimeout(t),i&&i.abort(),s=!1,!r.trim()){n([]);return}t=setTimeout(async()=>{var d;i=new AbortController;try{const c=`${o}/v5/metadata/autocomplete?q=${encodeURIComponent(r.trim())}&meta_key=_${encodeURIComponent(a)}&limit=20`,u=await fetch(c,{headers:e,signal:i.signal});if(s)return;if(!u.ok){n([]);return}const f=await u.json();if(s)return;const b=((d=f.data)==null?void 0:d.tags)??f.tags??[];n(b.map(g=>({sid:g.sid||void 0,value:g.tag||g.value||g.label||"",label:g.tag||g.label||g.value||""})))}catch{s||n([])}},200)},cancel(){s=!0,t&&clearTimeout(t),i&&i.abort()}}}var Ye=Object.defineProperty,P=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&Ye(e,t,s),s};const be=class extends _{constructor(){super(...arguments),this.schema=null,this.meta={},this.config=null,this.disabled=!1,this._collapsed=new Set}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_renderGroup(e){const t=!this._collapsed.has(e.uuid);return l`
      <div class="group">
        <button class="group-header"
          @click=${()=>this._toggleGroup(e.uuid)}
          aria-expanded=${t}>
          <span>${e.name}</span>
          <svg class="chevron ${t?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 6 8 10 12 6"/>
          </svg>
        </button>
        ${t?l`
              <div class="group-content">
                ${e.fields.map(i=>l`
                    <sfx-metadata-field
                      .field=${i}
                      .value=${this.meta[i.key]}
                      .config=${this.config}
                      .autocomplete=${this.autocomplete}
                      ?disabled=${this.disabled}
                    ></sfx-metadata-field>
                  `)}
              </div>
            `:h}
      </div>
    `}render(){return!this.schema||this.schema.groups.length===0?l`<div class="empty">No metadata fields configured</div>`:l`
      ${this.schema.groups.map(e=>this._renderGroup(e))}
    `}};be.styles=v`
    :host { display: block; }


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
  `;let D=be;P([p({attribute:!1})],D.prototype,"schema");P([p({attribute:!1})],D.prototype,"meta");P([p({attribute:!1})],D.prototype,"config");P([p({attribute:!1})],D.prototype,"autocomplete");P([p({type:Boolean})],D.prototype,"disabled");P([x()],D.prototype,"_collapsed");customElements.define("sfx-metadata-form",D);const V=v`
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
`,te=v`
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

  .search {
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
`,ge=v`
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
`;v`
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
`;const Ge=v`
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
`;var We=Object.defineProperty,M=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&We(e,t,s),s};const me=class extends _{constructor(){super(...arguments),this.config=null,this.disabled=!1,this._error=null,this._dispatching=!1,this._handleChildBlur=e=>{this._dispatching||(e.stopPropagation(),this._onFieldBlur(e))}}get _isRequired(){var e,t;return(t=(e=this.config)==null?void 0:e.requiredFields)!=null&&t.includes(this.field.ckey)?!0:this.field.required===1}_onFieldBlur(e){var t;const{key:i,value:s}=e.detail,a=ve(this.field,s,this.config??void 0);if(a){this._error=a;return}this._error=null;const r=ee(this.field,s,void 0,(t=this.config)==null?void 0:t.language);this._dispatching=!0,this.dispatchEvent(new CustomEvent("field-blur",{detail:{key:i,value:r},bubbles:!0,composed:!0})),this._dispatching=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("field-blur",this._handleChildBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("field-blur",this._handleChildBlur)}_renderField(e,t){const i=this.disabled;switch(e.type){case"text":case"attachment-uri":return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return l`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return l`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return l`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return l`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"boolean":return l`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return l`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return l`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return l`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}render(){var e;const t=this.field;if(!t)return h;const i=xe(t,this.value,(e=this.config)==null?void 0:e.language),s=t.type==="textarea"?"field-row field-row--top":"field-row";return l`
      <div class=${s} aria-required=${this._isRequired?"true":"false"}>
        <div class="field-label" id="label-${t.key}">
          <span class="field-label-text">${t.title}</span>
          ${this._isRequired?l`<span class="field-required" aria-hidden="true">*</span>`:h}
        </div>
        <div class="field-content">
          ${this._renderField(t,i)}
          ${this._error?l`<div class="field-error" id="error-${t.key}" role="alert">${this._error}</div>`:h}
        </div>
      </div>
    `}};me.styles=[Ge];let z=me;M([p({attribute:!1})],z.prototype,"field");M([p({attribute:!1})],z.prototype,"value");M([p({attribute:!1})],z.prototype,"config");M([p({attribute:!1})],z.prototype,"autocomplete");M([p({type:Boolean})],z.prototype,"disabled");M([x()],z.prototype,"_error");customElements.define("sfx-metadata-field",z);var Xe=Object.defineProperty,ie=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&Xe(e,t,s),s};class y extends _{constructor(){super(...arguments),this.value="",this.disabled=!1}_emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:{key:this.field.key,...t!==void 0?{value:t}:{}},bubbles:!0,composed:!0}))}}ie([p({attribute:!1})],y.prototype,"field");ie([p({attribute:!1})],y.prototype,"value");ie([p({type:Boolean})],y.prototype,"disabled");const ye=class extends y{_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var e,t;const i=((e=this.field)==null?void 0:e.title)??"",s=i?`Enter ${i.toLowerCase()}`:"";return l`
      <input
        type="text"
        .value=${this.value??""}
        placeholder=${((t=this.field)==null?void 0:t.placeholder)||s}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      />
    `}};ye.styles=[V];let Qe=ye;customElements.define("sfx-meta-text-field",Qe);const _e=class extends y{firstUpdated(){const e=this.renderRoot.querySelector("textarea");e&&this._autoResize(e)}_autoResize(e){e.style.height="auto",e.style.height=`${Math.max(80,e.scrollHeight)}px`}_onInput(e){const t=e.target;this._autoResize(t),this._emit("field-change",t.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var e,t;const i=((e=this.field)==null?void 0:e.title)??"",s=i?`Enter ${i.toLowerCase()}`:"";return l`
      <textarea
        .value=${this.value??""}
        placeholder=${((t=this.field)==null?void 0:t.placeholder)||s}
        ?disabled=${this.disabled}
        @input=${this._onInput}
        @blur=${this._onBlur}
        @keydown=${this._onKeydown}
      ></textarea>
    `}};_e.styles=[V,v`
      textarea {
        height: auto;
        min-height: 80px;
        padding: 8px 10px;
        resize: none;
      }
    `];let Ze=_e;customElements.define("sfx-meta-textarea-field",Ze);var et=Object.defineProperty,se=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&et(e,t,s),s};const we=class extends y{constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,i)=>t.label.localeCompare(i.label))}get _selectedLabel(){var e;return((e=this._options.find(t=>t.value===this.value))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="";const e=this._filtered.findIndex(t=>t.value===this.value);this._activeIndex=e>=0?e:0,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".search"))==null||t.focus(),this._scrollActive()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this._emit("field-change",e.value),this.value=e.value,this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=0}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}const i=this._filtered;if(i.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,i.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=i.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<i.length&&(e.preventDefault(),this._onSelect(i[this._activeIndex],!0));break}}render(){var e,t;const i=((e=this.field)==null?void 0:e.title)??"",s=i?`Select ${i.toLowerCase()}`:"Select an option";return l`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox"
        aria-expanded=${this._open}
        aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._selectedLabel?l`<span class="trigger-value">${this._selectedLabel}</span>`:l`<span class="placeholder">${((t=this.field)==null?void 0:t.placeholder)||s}</span>`}
        ${this._selectedLabel&&!this.disabled?l`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this._clear(a))}}>&times;</span>
        `:h}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?l`
        <div class="dropdown" role="listbox" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          ${this._filtered.length?this._filtered.map((a,r)=>l`
                <div class="option ${a.value===this.value?"selected":""} ${r===this._activeIndex?"active":""}"
                  role="option" aria-selected=${a.value===this.value}
                  @mousedown=${n=>{n.preventDefault(),this._onSelect(a)}}
                  @mouseenter=${()=>{this._activeIndex=r}}>
                  ${a.label}
                </div>`):l`<div class="empty">No options</div>`}
        </div>
      `:h}
    `}};we.styles=[te];let Y=we;se([x()],Y.prototype,"_open");se([x()],Y.prototype,"_search");se([x()],Y.prototype,"_activeIndex");customElements.define("sfx-meta-select-field",Y);var tt=Object.defineProperty,re=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&tt(e,t,s),s};const ke=class extends y{constructor(){super(...arguments),this._open=!1,this._search="",this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _selected(){return Array.isArray(this.value)?this.value:[]}get _options(){var e;return(((e=this.field)==null?void 0:e.possible_values)??[]).map(t=>({id:t.internal_unique_value,label:t.label,value:t.internal_unique_value}))}get _filtered(){const e=this._search.toLowerCase();return this._options.filter(t=>t.label.toLowerCase().includes(e)).sort((t,i)=>t.label.localeCompare(i.label))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0,this._search="",this._activeIndex=-1,document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".search"))==null||e.focus()})}_closeAndSubmit(){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this._selected)}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_toggle(e){const t=this._selected,i=t.includes(e.value)?t.filter(s=>s!==e.value):[...t,e.value];this.value=i,this._emit("field-change",i)}_remove(e){const t=this._selected.filter(i=>i!==e);this.value=t,this._emit("field-change",t)}_selectAll(){const e=this._options.map(t=>t.value);this.value=e,this._emit("field-change",e)}_clearAll(){this.value=[],this._emit("field-change",[])}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onSearchInput(e){this._search=e.target.value,this._activeIndex=-1}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}if(e.key==="Backspace"&&!this._search&&this._selected.length>0){this._remove(this._selected[this._selected.length-1]);return}const i=this._filtered;if(i.length)switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,i.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=i.length-1,this._scrollActive();break;case"Enter":this._activeIndex>=0&&this._activeIndex<i.length&&(e.preventDefault(),this._toggle(i[this._activeIndex]));break;case" ":this._activeIndex>=0&&this._activeIndex<i.length&&!this._search&&(e.preventDefault(),this._toggle(i[this._activeIndex]));break}}_labelFor(e){var t;return((t=this._options.find(i=>i.value===e))==null?void 0:t.label)??e}render(){var e,t;const i=this._selected,s=((e=this.field)==null?void 0:e.title)??"",a=s?`Select ${s.toLowerCase()}`:"Select an option";return l`
      <div class="trigger"
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        tabindex="0"
        @click=${()=>this._open?this._closeAndSubmit():this._openDropdown()} @keydown=${this._onKeydown}>
        ${i.length?i.map(r=>l`
              <span class="chip">
                ${this._labelFor(r)}
                <button class="chip-x" aria-label="Remove ${this._labelFor(r)}" @click=${n=>{n.stopPropagation(),this._remove(r)}}>&times;</button>
              </span>`):l`<span class="placeholder">${((t=this.field)==null?void 0:t.placeholder)||a}</span>`}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </div>

      ${this._open?l`
        <div class="dropdown" role="listbox" aria-multiselectable="true" @keydown=${this._onKeydown}>
          <input class="search" type="text" placeholder="Search"
            aria-label="Filter options"
            .value=${this._search}
            @input=${this._onSearchInput} />
          <div class="options-list">
            ${this._filtered.length?this._filtered.map((r,n)=>l`
                  <div class="option ${n===this._activeIndex?"active":""}" role="option" aria-selected=${i.includes(r.value)}
                    @mousedown=${d=>{d.preventDefault(),this._toggle(r)}}
                    @mouseenter=${()=>{this._activeIndex=n}}>
                    <span class="check ${i.includes(r.value)?"checked":""}">
                      ${i.includes(r.value)?"✓":""}
                    </span>
                    ${r.label}
                  </div>`):l`<div class="empty">No options</div>`}
          </div>
          ${this._options.length>0?l`
            <div class="bulk-actions">
              <button type="button" class="bulk-btn" @mousedown=${r=>{r.preventDefault(),this._selectAll()}}>Select all</button>
              <button type="button" class="bulk-btn bulk-btn--muted" @mousedown=${r=>{r.preventDefault(),this._clearAll()}}>Clear all</button>
            </div>
          `:h}
        </div>
      `:h}
    `}};ke.styles=[te,ge,v`
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
    `];let G=ke;re([x()],G.prototype,"_open");re([x()],G.prototype,"_search");re([x()],G.prototype,"_activeIndex");customElements.define("sfx-meta-multi-select-field",G);function I(o,e){var t,i;return((t=o.label)==null?void 0:t.trim().toLowerCase())===((i=e.label)==null?void 0:i.trim().toLowerCase())}function $e(o){return o.trim().replace(/\s+/g," ")}function it(o){return $e(o).replace(/\s/g,"-")}function H(o){return{label:$e(o),value:it(o)}}var st=Object.defineProperty,R=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&st(e,t,s),s};const Ce=class extends y{constructor(){super(...arguments),this._query="",this._results=[],this._loading=!1,this._dropdownOpen=!1,this._activeIndex=-1,this._blurTimeout=null}get _tags(){return Array.isArray(this.value)?this.value:[]}disconnectedCallback(){var e;super.disconnectedCallback(),this._blurTimeout&&clearTimeout(this._blurTimeout),(e=this.autocomplete)==null||e.cancel()}_onInput(e){var t,i,s;const a=e.target.value;if(this._query=a,this._dropdownOpen=!0,this._activeIndex=-1,!a.trim()||!((t=this.field)!=null&&t.ckey)){this._results=[],this._loading=!1,(i=this.autocomplete)==null||i.cancel();return}this._loading=!0,(s=this.autocomplete)==null||s.search(this.field.ckey,a,r=>{this._results=r,this._loading=!1})}_addTag(e){if(this._tags.some(i=>I(i,e)))return;const t=[...this._tags,e];this.value=t,this._query="",this._results=[],this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-change",t),this.updateComplete.then(()=>{var i;(i=this.renderRoot.querySelector(".input"))==null||i.focus()})}_removeTag(e){const t=this._tags.filter(i=>!I(i,e));this.value=t,this._emit("field-change",t)}_onBlur(){this._blurTimeout&&clearTimeout(this._blurTimeout),this._blurTimeout=setTimeout(()=>{this._blurTimeout=null,this.renderRoot.querySelector(".dropdown:hover")||(this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-blur",this._tags))},150)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}get _itemCount(){return this._suggestions.length+(this._canCreate?1:0)}_onKeydown(e){if(e.key==="Escape"){this._dropdownOpen=!1,this._activeIndex=-1,this._emit("field-escape");return}if(e.key==="Backspace"&&!this._query&&this._tags.length){this._removeTag(this._tags[this._tags.length-1]);return}if(!this._dropdownOpen)return;const t=this._itemCount;if(this._activeIndex>=t&&(this._activeIndex=Math.max(t-1,-1)),!(t===0&&e.key!=="Enter"))switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,t-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,-1),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=t-1,this._scrollActive();break;case"Enter":{e.preventDefault();const i=this._suggestions;this._activeIndex>=0&&this._activeIndex<i.length?this._addTag(i[this._activeIndex]):this._activeIndex===i.length&&this._canCreate?this._addTag(H(this._query)):this._activeIndex===-1&&this._canCreate?this._addTag(H(this._query)):this._activeIndex===-1&&i.length&&this._addTag(i[0]);break}}}get _suggestions(){var e;const t=this._query.toLowerCase().trim(),i=this._tags,s=(((e=this.field)==null?void 0:e.possible_values)??[]).map(r=>({value:r.api_value||r.internal_unique_value,label:r.label})).filter(r=>!i.some(n=>I(n,r))).filter(r=>!t||r.label.toLowerCase().includes(t)),a=this._results.filter(r=>!i.some(n=>I(n,r))&&!s.some(n=>I(n,r)));return[...s,...a]}get _canCreate(){const e=this._query.trim();if(!e||this._loading)return!1;const t=H(e);return!this._tags.some(i=>I(i,t))&&!this._suggestions.some(i=>I(i,t))}render(){var e,t;const i=this._tags,s=this._suggestions,a=s.length;return l`
      <div class="container" @click=${()=>{var r;return(r=this.renderRoot.querySelector(".input"))==null?void 0:r.focus()}}>
        ${i.map(r=>l`
          <span class="chip">
            ${r.label}
            <button class="chip-x" aria-label="Remove ${r.label}" @click=${n=>{n.stopPropagation(),this._removeTag(r)}}>&times;</button>
          </span>`)}
        <input class="input" type="text" .value=${this._query}
          role="combobox" aria-expanded=${this._dropdownOpen} aria-haspopup="listbox"
          aria-label=${((e=this.field)==null?void 0:e.title)??"Tags"}
          placeholder=${i.length?"":((t=this.field)==null?void 0:t.placeholder)||"Add tags"}
          ?disabled=${this.disabled}
          @input=${this._onInput} @blur=${this._onBlur} @keydown=${this._onKeydown} />
      </div>

      ${this._dropdownOpen&&(this._query.trim()||s.length)?l`
        <div class="dropdown" role="listbox">
          ${this._loading?l`<div class="loading">Loading</div>`:h}
          ${s.map((r,n)=>l`
            <div class="option ${n===this._activeIndex?"active":""}" role="option"
              @mousedown=${d=>{d.preventDefault(),this._addTag(r)}}
              @mouseenter=${()=>{this._activeIndex=n}}>
              ${r.label}
            </div>`)}
          ${this._canCreate?l`
            <div class="option create ${a===this._activeIndex?"active":""}"
              @mousedown=${r=>{r.preventDefault(),this._addTag(H(this._query))}}
              @mouseenter=${()=>{this._activeIndex=a}}>
              Create '${this._query.trim()}'
            </div>`:h}
          ${!this._loading&&!s.length&&!this._canCreate?l`<div class="empty">No results</div>`:h}
        </div>
      `:h}
    `}};Ce.styles=[ge,v`
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
    `];let T=Ce;R([p({attribute:!1})],T.prototype,"autocomplete");R([x()],T.prototype,"_query");R([x()],T.prototype,"_results");R([x()],T.prototype,"_loading");R([x()],T.prototype,"_dropdownOpen");R([x()],T.prototype,"_activeIndex");customElements.define("sfx-meta-tags-field",T);var rt=Object.defineProperty,Se=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&rt(e,t,s),s};const O=[{label:"True",value:"true"},{label:"False",value:"false"}],Ee=class extends y{constructor(){super(...arguments),this._open=!1,this._activeIndex=-1,this._boundOutsideClick=this._onOutsideClick.bind(this)}get _currentLabel(){var e;if(this.value==null)return"";const t=String(this.value);return((e=O.find(i=>i.value===t))==null?void 0:e.label)??""}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("mousedown",this._boundOutsideClick)}_openDropdown(){this._open=!0;const e=this.value==null?"":String(this.value);this._activeIndex=Math.max(O.findIndex(t=>t.value===e),0),document.addEventListener("mousedown",this._boundOutsideClick),this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".dropdown"))==null||t.focus()})}_closeAndSubmit(e=!1){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-blur",this.value),e&&this.updateComplete.then(()=>{var t;(t=this.renderRoot.querySelector(".trigger"))==null||t.focus()})}_onOutsideClick(e){e.composedPath().includes(this)||this._closeAndSubmit()}_onSelect(e,t=!1){this.value=e.value,this._emit("field-change",e.value),this._closeAndSubmit(t)}_clear(e){e.stopPropagation(),this.value=null,this._emit("field-change",null),this._emit("field-blur",null)}_scrollActive(){this.updateComplete.then(()=>{var e;(e=this.renderRoot.querySelector(".option.active"))==null||e.scrollIntoView({block:"nearest"})})}_onKeydown(e){var t;if(e.key==="Escape"){this._open=!1,this._activeIndex=-1,document.removeEventListener("mousedown",this._boundOutsideClick),this._emit("field-escape"),(t=this.renderRoot.querySelector(".trigger"))==null||t.focus();return}if(!this._open){(e.key==="ArrowDown"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._openDropdown());return}switch(e.key){case"ArrowDown":e.preventDefault(),this._activeIndex=Math.min(this._activeIndex+1,O.length-1),this._scrollActive();break;case"ArrowUp":e.preventDefault(),this._activeIndex=Math.max(this._activeIndex-1,0),this._scrollActive();break;case"Home":e.preventDefault(),this._activeIndex=0,this._scrollActive();break;case"End":e.preventDefault(),this._activeIndex=O.length-1,this._scrollActive();break;case"Enter":case" ":this._activeIndex>=0&&this._activeIndex<O.length&&(e.preventDefault(),this._onSelect(O[this._activeIndex],!0));break}}render(){var e,t;const i=this.value==null?"":String(this.value),s=((e=this.field)==null?void 0:e.title)??"",a=s?`Select ${s.toLowerCase()}`:"Select an option";return l`
      <button class="trigger" ?disabled=${this.disabled}
        role="combobox" aria-expanded=${this._open} aria-haspopup="listbox"
        @click=${()=>this._open?this._closeAndSubmit(!0):this._openDropdown()}
        @keydown=${this._onKeydown}>
        ${this._currentLabel?l`<span class="trigger-value">${this._currentLabel}</span>`:l`<span class="placeholder">${((t=this.field)==null?void 0:t.placeholder)||a}</span>`}
        ${this._currentLabel&&!this.disabled?l`
          <span class="trigger-clear" role="button" tabindex="0" aria-label="Clear"
            @click=${this._clear}
            @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this._clear(r))}}>&times;</span>
        `:h}
        <span class="trigger-chevron ${this._open?"open":""}" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>

      ${this._open?l`
        <div class="dropdown" role="listbox" tabindex="-1" @keydown=${this._onKeydown}>
          ${O.map((r,n)=>l`
            <div class="option ${r.value===i?"selected":""} ${n===this._activeIndex?"active":""}"
              role="option" aria-selected=${r.value===i}
              @mousedown=${d=>{d.preventDefault(),this._onSelect(r)}}
              @mouseenter=${()=>{this._activeIndex=n}}>
              ${r.label}
            </div>`)}
        </div>
      `:h}
    `}};Ee.styles=[te];let oe=Ee;Se([x()],oe.prototype,"_open");Se([x()],oe.prototype,"_activeIndex");customElements.define("sfx-meta-boolean-field",oe);const Ae=class extends y{get _step(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"0.01":"1"}get _inputMode(){var e;return((e=this.field)==null?void 0:e.type)==="decimal2"?"decimal":"numeric"}_onInput(e){this._emit("field-change",e.target.value)}_onBlur(e){this._emit("field-blur",e.target.value)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){var e;return l`
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
    `}};Ae.styles=[V];let ot=Ae;customElements.define("sfx-meta-number-field",ot);const Ie=class extends y{get _dateStr(){const e=this.value;return e?e instanceof Date?e.toISOString().split("T")[0]:String(e):""}_onChange(e){const t=e.target.value;this._emit("field-change",t),this._emit("field-blur",t)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._dateStr,t=!e;return l`
      <div class="date-wrap">
        <input
          type="date"
          class=${t?"is-empty":""}
          .value=${e}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          @keydown=${this._onKeydown}
        />
        ${t?l`<span class="date-placeholder">Pick a date</span>`:h}
        <span class="date-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        </span>
      </div>
    `}};Ie.styles=[V,v`
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
    `];let at=Ie;customElements.define("sfx-meta-date-field",at);const Oe=class extends y{get _geo(){const e=this.value;return{latitude:(e==null?void 0:e.latitude)??"",longitude:(e==null?void 0:e.longitude)??""}}_onInput(e,t){const i=t.target.value,s={...this._geo,[e]:i};this.value=s,this._emit("field-change",s)}_onBlur(e){const t=e.relatedTarget;t&&this.renderRoot.contains(t)||this._emit("field-blur",this._geo)}_onKeydown(e){e.key==="Escape"&&this._emit("field-escape")}render(){const e=this._geo;return l`
      <div class="grid">
        <div>
          <label>Latitude</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.latitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("latitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
        <div>
          <label>Longitude</label>
          <input type="number" step="any" inputmode="decimal" .value=${e.longitude}
            ?disabled=${this.disabled}
            @input=${t=>this._onInput("longitude",t)}
            @blur=${this._onBlur} @keydown=${this._onKeydown} />
        </div>
      </div>
    `}};Oe.styles=[V,v`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      label {
        display: block;
        font-size: 12px;
        color: var(--sfx-up-text-muted, #94a3b8);
        margin-bottom: 4px;
      }
    `];let nt=Oe;customElements.define("sfx-meta-geo-point-field",nt);var lt=Object.defineProperty,W=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&lt(e,t,s),s};const De=class extends _{constructor(){super(...arguments),this.disabled=!1}render(){const e=this.field,t=this.value,i=this.disabled;switch(e.type){case"text":case"attachment-uri":return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`;case"textarea":return l`<sfx-meta-textarea-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-textarea-field>`;case"select-one":return l`<sfx-meta-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-select-field>`;case"multi-select":return l`<sfx-meta-multi-select-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-multi-select-field>`;case"tags":return l`<sfx-meta-tags-field .field=${e} .value=${t} .autocomplete=${this.autocomplete} ?disabled=${i}></sfx-meta-tags-field>`;case"boolean":return l`<sfx-meta-boolean-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-boolean-field>`;case"numeric":case"decimal2":return l`<sfx-meta-number-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-number-field>`;case"date":return l`<sfx-meta-date-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-date-field>`;case"geopoint":return l`<sfx-meta-geo-point-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-geo-point-field>`;default:return l`<sfx-meta-text-field .field=${e} .value=${t} ?disabled=${i}></sfx-meta-text-field>`}}};De.styles=v`
    :host { display: block; }
  `;let U=De;W([p({attribute:!1})],U.prototype,"field");W([p({attribute:!1})],U.prototype,"value");W([p({attribute:!1})],U.prototype,"autocomplete");W([p({type:Boolean})],U.prototype,"disabled");customElements.define("sfx-metadata-field-edit",U);var dt=Object.defineProperty,ze=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&dt(e,t,s),s};const Te=class extends _{_formatValue(){var e,t;const i=this.value,s=(e=this.field)==null?void 0:e.type;switch(s){case"boolean":return i==="true"?"True":i==="false"?"False":"";case"date":return i?i instanceof Date?i.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):typeof i=="string"&&i.length>0?i:"":"";case"numeric":case"decimal2":{if(i==null||i==="")return"";const a=Number(i);return Number.isFinite(a)?a.toLocaleString(void 0,{maximumFractionDigits:s==="decimal2"?2:0}):String(i)}case"select-one":{if(i==null||i==="")return"";const a=(t=this.field.possible_values)==null?void 0:t.find(r=>r.internal_unique_value===i||r.api_value===i);return(a==null?void 0:a.label)??String(i)}case"multi-select":return!Array.isArray(i)||i.length===0?"":i.map(a=>{var r;const n=(r=this.field.possible_values)==null?void 0:r.find(d=>d.internal_unique_value===a||d.api_value===a);return(n==null?void 0:n.label)??String(a)}).join(", ");case"tags":return!Array.isArray(i)||i.length===0?"":i.map(a=>a.label||a.value).join(", ");case"geopoint":{const a=i;return!a||a.latitude===""||a.latitude==null||a.longitude===""||a.longitude==null?"":`(${a.latitude}, ${a.longitude})`}case"attachment-uri":return!i||typeof i=="string"&&i.length===0?"":String(i);case"text":case"textarea":default:return i==null||i===""?"":String(i)}}render(){var e;const t=this._formatValue(),i=t==="";return((e=this.field)==null?void 0:e.type)==="attachment-uri"&&!i?l`
        <div class="value">
          <a class="link" href=${t} target="_blank" rel="noopener noreferrer"
            @click=${s=>s.stopPropagation()}
          >${t}</a>
        </div>
      `:l`
      <div class="value ${i?"empty":""}">${i?"—":t}</div>
    `}};Te.styles=v`
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
  `;let ae=Te;ze([p({attribute:!1})],ae.prototype,"field");ze([p({attribute:!1})],ae.prototype,"value");customElements.define("sfx-metadata-field-view",ae);const ne=new Set(["multi-select","tags","integer-list"]),le=new Set(["text","textarea","attachment-uri"]);function pt(o){return ne.has(o)?[{key:"SET",label:"Set"},{key:"ADD",label:"Add to"},{key:"DELETE",label:"Remove from"}]:le.has(o)?[{key:"SET",label:"Set"},{key:"ADD",label:"Append"},{key:"DELETE",label:"Remove"}]:[{key:"SET",label:"Set"},{key:"DELETE",label:"Clear"}]}function Q(o,e){return o==="DELETE"?ne.has(e)||le.has(e):!0}function ct(o,e,t,i){const s=ne.has(i),a=le.has(i);switch(o){case"SET":return t;case"ADD":{if(s){const r=Array.isArray(e)?e:[],n=Array.isArray(t)?t:[];if(n.length===0)return r;if(i==="tags"){const u=new Set(r.map(b=>b)),f=[...r];for(const b of n){const g=typeof b=="string"?b:String(b);u.has(g)||(u.add(g),f.push(g))}return f}const d=new Set(r.map(u=>JSON.stringify(u))),c=[...r];for(const u of n){const f=JSON.stringify(u);d.has(f)||(d.add(f),c.push(u))}return c}if(a){const r=typeof t=="string"?t:"";if(!r)return e??"";const n=typeof e=="string"?e:"";return n?`${n} ${r}`:r}return t}case"DELETE":{if(s){const r=Array.isArray(e)?e:[],n=Array.isArray(t)?t:[];if(n.length===0)return r;if(i==="tags"){const c=new Set(n.map(u=>typeof u=="string"?u:String(u)));return r.filter(u=>!c.has(typeof u=="string"?u:String(u)))}const d=new Set(n.map(c=>JSON.stringify(c)));return r.filter(c=>!d.has(JSON.stringify(c)))}if(a){const r=typeof t=="string"?t:"";return r?(typeof e=="string"?e:"").replaceAll(r,"").replace(/\s{2,}/g," ").trim():""}return i==="geopoint"?{latitude:"",longitude:""}:null}default:return t}}function Fe(o,e,t,i,s){const a=s??"en",r=!!o.regional_variants_group_uuid,n={meta:{[o.key]:e}},d=ee(o,t,n,s),c=g=>r&&g!==null&&typeof g=="object"&&!Array.isArray(g),u=c(e)?e[a]:e,f=c(d)?d[a]:d,b=ct(i,u,f,o.type);return r?{...c(e)?e:{},[a]:b}:b}const je=v`
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
`,ut=v`
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
    background: rgba(17, 24, 39, 0.45);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  /* ---- Confirm discard dialog ---- */
  .fm-confirm-overlay {
    position: absolute;
    inset: 0;
    background: rgba(17, 24, 39, 0.35);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
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
    width: 980px;
    max-width: calc(100vw - 40px);
    height: 82vh;
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

  ${je}
`,ft=v`
  :host {
    display: block;
    width: 260px;
    flex-shrink: 0;
    border-right: 1px solid var(--sfx-up-border, #e2e8f0);
    overflow-y: auto;
    padding: 12px 0;
    font-family: var(--sfx-up-font, inherit);
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.18) transparent;
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
`,ht=v`
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
`,xt=v`
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

  ${je}
`,vt=v`
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
`,bt=v`
  :host {
    display: block;
  }
`;var gt=Object.defineProperty,k=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&gt(e,t,s),s};const Le=class extends _{constructor(){super(...arguments),this.files=[],this.config=null,this._activeFieldKey="",this._staged=new Map,this._selected=new Set,this._sortAsc=!0,this._pendingOp=null,this._confirmVisible=!1,this._confirmResolve=null,this._originalFiles=new Map,this._onKeyDown=async e=>{if(e.key==="Escape"){if(this._confirmVisible){e.stopPropagation(),this._onConfirmCancel();return}e.composedPath().some(t=>t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)||await this._confirmDiscardPending()&&this._emitClose()}},this._onConfirmOk=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!0),this._confirmResolve=null},this._onConfirmCancel=()=>{var e;this._confirmVisible=!1,(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null},this._onConfirmKeydown=e=>{var t,i;if(e.key!=="Tab")return;const s=(t=this.shadowRoot)==null?void 0:t.querySelector(".fm-confirm");if(!s)return;const a=s.querySelectorAll("button");if(a.length===0)return;const r=a[0],n=a[a.length-1],d=(i=this.shadowRoot)==null?void 0:i.activeElement;e.shiftKey&&d===r?(e.preventDefault(),n.focus()):!e.shiftKey&&d===n&&(e.preventDefault(),r.focus())},this._onPendingChange=e=>{const{operation:t,value:i}=e.detail,s=this._activeField;$(i)&&(!s||Q(t,s.type))?this._pendingOp=null:this._pendingOp={operation:t,value:i}},this._onFieldSelect=async e=>{await this._confirmDiscardPending()&&(this._pendingOp=null,this._activeFieldKey=e.detail.fieldKey)},this._onBulkApply=e=>{var t,i,s;const a=this._activeField;if(!a)return;const{operation:r,value:n}=e.detail,d=(t=this.config)==null?void 0:t.language,c=[];for(const u of this._selected){const f=this._staged.get(u),b=f!=null&&f.has(a.key)?f.get(a.key):((s=(i=this._originalFiles.get(u))==null?void 0:i.meta)==null?void 0:s[a.key])??null,g=Fe(a,b,n,r,d);c.push([u,a.key,g])}this._setStagedBulk(c)},this._onRowFieldChange=e=>{const t=this._activeField;t&&this._setStagedValue(e.detail.fileId,t.key,e.detail.value)},this._onRowToggle=e=>{const t=new Set(this._selected);t.has(e.detail.fileId)?t.delete(e.detail.fileId):t.add(e.detail.fileId),this._selected=t},this._onSelectAll=()=>{this._selected.size===this.files.length?this._selected=new Set:this._selected=new Set(this.files.map(e=>e.id))},this._onSortToggle=()=>{this._sortAsc=!this._sortAsc},this._onSave=async()=>{if(!await this._confirmDiscardPending())return;const e=[];for(const[t,i]of this._staged){const s=this._originalFiles.get(t);if(!s)continue;const a={};for(const[r,n]of i)JSON.stringify(n)!==JSON.stringify(s.meta[r])&&(a[r]=n);Object.keys(a).length>0&&e.push({fileId:t,meta:a})}this.dispatchEvent(new CustomEvent("metadata-save-batch",{detail:{changes:e},bubbles:!0,composed:!0})),this._emitClose()},this._onCancel=async()=>{await this._confirmDiscardPending()&&this._emitClose()},this._onClose=async()=>{await this._confirmDiscardPending()&&this._emitClose()}}connectedCallback(){super.connectedCallback(),this._initStaged(),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown),(e=this._confirmResolve)==null||e.call(this,!1),this._confirmResolve=null}_initStaged(){var e,t;const i=new Map,s=new Set,a=new Map;for(const r of this.files){const n=new Map;if(r.meta)for(const[d,c]of Object.entries(r.meta))n.set(d,c);i.set(r.id,n),s.add(r.id),a.set(r.id,r)}this._staged=i,this._selected=s,this._originalFiles=a,((t=(e=this.schema)==null?void 0:e.fields)==null?void 0:t.length)>0&&(this._activeFieldKey=this.schema.fields[0].key)}_setStagedValue(e,t,i){const s=new Map(this._staged),a=new Map(s.get(e)??new Map);a.set(t,i),s.set(e,a),this._staged=s}_setStagedBulk(e){const t=new Map(this._staged);for(const[i,s,a]of e){const r=new Map(t.get(i)??new Map);r.set(s,a),t.set(i,r)}this._staged=t}get _activeField(){var e,t;return(t=(e=this.schema)==null?void 0:e.fieldsByKey)==null?void 0:t.get(this._activeFieldKey)}get _filledFields(){var e,t;const i=new Set;for(const s of((e=this.schema)==null?void 0:e.fields)??[])for(const[a,r]of this._staged){const n=r.get(s.key),d=(t=this._originalFiles.get(a))==null?void 0:t.meta[s.key];if(n!==void 0&&!$(n)&&JSON.stringify(n)!==JSON.stringify(d)){i.add(s.key);break}}return i}get _hasPendingValue(){return this._pendingOp!=null&&!$(this._pendingOp.value)}_confirmDiscardPending(){return this._hasPendingValue?new Promise(e=>{this._confirmResolve=e,this._confirmVisible=!0}):Promise.resolve(!0)}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("_confirmVisible")&&this._confirmVisible&&requestAnimationFrame(()=>{var i;const s=(i=this.shadowRoot)==null?void 0:i.querySelector(".fm-confirm .btn-ghost");s==null||s.focus()})}_emitClose(){this.dispatchEvent(new CustomEvent("metadata-close",{bubbles:!0,composed:!0}))}get _sortedFiles(){const e=[...this.files];return e.sort((t,i)=>{const s=t.name.localeCompare(i.name)||t.id.localeCompare(i.id);return this._sortAsc?s:-s}),e}render(){var e,t;if(!((t=(e=this.schema)==null?void 0:e.fields)!=null&&t.length))return l`
        <div class="fm-overlay" @click=${this._onClose}>
          <div class="fm-modal" @click=${n=>n.stopPropagation()}>
            <div class="fm-topbar">
              <span class="fm-topbar-title">Fill multiple assets</span>
              <button class="fm-topbar-close" @click=${this._onClose} title="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="fm-empty">No metadata fields configured</div>
          </div>
        </div>
      `;const i=this._activeField,s=this._sortedFiles,a=this._selected.size===this.files.length&&this.files.length>0,r=this._selected.size>0&&!a;return l`
      <div class="fm-overlay" @click=${this._onClose}>
        <div class="fm-modal" @click=${n=>n.stopPropagation()}>
          <!-- Top bar -->
          <div class="fm-topbar">
            <span class="fm-topbar-title">Fill multiple assets</span>
            <button class="fm-topbar-close" @click=${this._onClose} title="Close">
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
              .filledFields=${this._filledFields}
              .config=${this.config}
              @field-select=${this._onFieldSelect}
            ></sfx-bulk-meta-sidebar>

            <!-- Main area -->
            <div class="fm-main">
              <!-- Op bar -->
              ${i?l`
                    <sfx-bulk-meta-op-bar
                      .field=${i}
                      .autocomplete=${this.autocomplete}
                      .config=${this.config}
                      .selectedCount=${this._selected.size}
                      @bulk-apply=${this._onBulkApply}
                      @pending-change=${this._onPendingChange}
                    ></sfx-bulk-meta-op-bar>
                  `:h}

              <!-- Table header -->
              <div class="fm-table-header">
                <div class="fm-th-check">
                  <input
                    type="checkbox"
                    class="fm-checkbox"
                    .checked=${a}
                    .indeterminate=${r}
                    @change=${this._onSelectAll}
                  />
                </div>
                <div class="fm-th-name" @click=${this._onSortToggle}>
                  Name
                  <span class="fm-sort-arrow">${this._sortAsc?"↑":"↓"}</span>
                </div>
                <div class="fm-th-size">Size</div>
                <div class="fm-th-field">${(i==null?void 0:i.title)??""}</div>
              </div>

              <!-- Table body -->
              <div class="fm-table-body">
                ${i?l`
                      <sfx-bulk-meta-table
                        .files=${s}
                        .field=${i}
                        .staged=${this._staged}
                        .selected=${this._selected}
                        .pendingOp=${this._pendingOp}
                        .config=${this.config}
                        .autocomplete=${this.autocomplete}
                        @row-field-change=${this._onRowFieldChange}
                        @row-toggle=${this._onRowToggle}
                      ></sfx-bulk-meta-table>
                    `:h}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="fm-footer">
            <button class="btn-back" @click=${this._onCancel}>
              \u2190 Back
            </button>
            <div class="spacer"></div>
            <button class="btn-ghost" @click=${this._onCancel}>Cancel</button>
            <button class="btn-primary" @click=${this._onSave}>Save</button>
          </div>

          ${this._confirmVisible?l`
            <div class="fm-confirm-overlay" @click=${this._onConfirmCancel} @keydown=${this._onConfirmKeydown}>
              <div class="fm-confirm" role="alertdialog" aria-modal="true" aria-labelledby="fm-confirm-msg" @click=${n=>n.stopPropagation()}>
                <p class="fm-confirm-text" id="fm-confirm-msg">You have unapplied bulk changes. Discard them?</p>
                <div class="fm-confirm-actions">
                  <button class="btn-ghost" @click=${this._onConfirmCancel}>Cancel</button>
                  <button class="btn-primary" @click=${this._onConfirmOk}>Discard</button>
                </div>
              </div>
            </div>
          `:h}
        </div>
      </div>
    `}};Le.styles=[ut];let w=Le;k([p({attribute:!1})],w.prototype,"schema");k([p({attribute:!1})],w.prototype,"files");k([p({attribute:!1})],w.prototype,"config");k([p({attribute:!1})],w.prototype,"autocomplete");k([x()],w.prototype,"_activeFieldKey");k([x()],w.prototype,"_staged");k([x()],w.prototype,"_selected");k([x()],w.prototype,"_sortAsc");k([x()],w.prototype,"_pendingOp");k([x()],w.prototype,"_confirmVisible");customElements.define("sfx-bulk-metadata-modal",w);const de={text:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<path d="M2 11l2.5-7 2.5 7"/><line x1="2.8" y1="9" x2="6.2" y2="9"/><line x1="9" y1="6" x2="14" y2="6"/><line x1="9" y1="9" x2="14" y2="9"/><line x1="9" y1="12" x2="13" y2="12"/>`}
  </svg>`,textarea:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${m`<line x1="3" y1="4" x2="13" y2="4"/><line x1="3" y1="8" x2="13" y2="8"/><line x1="3" y1="12" x2="13" y2="12"/>`}
  </svg>`,"select-one":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>`}
  </svg>`,"multi-select":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<rect x="2" y="2" width="12" height="12" rx="2"/><polyline points="5 8 7.5 10.5 11.5 6"/>`}
  </svg>`,boolean:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<rect x="2" y="4.5" width="12" height="7" rx="3.5"/><circle cx="5.5" cy="8" r="1.75"/>`}
  </svg>`,date:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<rect x="2" y="3" width="12" height="11" rx="2"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="1.5" x2="5.5" y2="4.5"/><line x1="10.5" y1="1.5" x2="10.5" y2="4.5"/>`}
  </svg>`,numeric:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<path d="M3.5 1.5h6l3 3v9a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"/><polyline points="9.5 1.5 9.5 4.5 12.5 4.5"/><text x="4.5" y="12.5" font-size="5.5" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">01</text>`}
  </svg>`,decimal2:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<text x="1" y="11" font-size="7" fill="currentColor" stroke="none" font-family="inherit" font-weight="600">.00</text><line x1="9.5" y1="13" x2="13.5" y2="13"/><polyline points="11.5 11 13.5 13 11.5 15"/>`}
  </svg>`,geopoint:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<circle cx="8" cy="8" r="3.5"/><line x1="8" y1="1.5" x2="8" y2="3.5"/><line x1="8" y1="12.5" x2="8" y2="14.5"/><line x1="1.5" y1="8" x2="3.5" y2="8"/><line x1="12.5" y1="8" x2="14.5" y2="8"/><circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none"/>`}
  </svg>`,"integer-list":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${m`<line x1="7" y1="4" x2="14" y2="4"/><line x1="7" y1="8" x2="14" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/><text x="2" y="5.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">1</text><text x="2" y="9.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">2</text><text x="2" y="13.5" font-size="4.5" fill="currentColor" stroke="none" font-family="inherit">3</text>`}
  </svg>`,tags:l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    ${m`<line x1="6" y1="2" x2="4.5" y2="14"/><line x1="11.5" y1="2" x2="10" y2="14"/><line x1="3" y1="6" x2="13" y2="6"/><line x1="3" y1="10" x2="13" y2="10"/>`}
  </svg>`,"attachment-uri":l`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    ${m`<path d="M6.67 8.67a3.33 3.33 0 0 0 5.03.36l2-2a3.33 3.33 0 0 0-4.71-4.71l-1.15 1.14"/><path d="M9.33 7.33a3.33 3.33 0 0 0-5.03-.36l-2 2a3.33 3.33 0 0 0 4.71 4.71l1.14-1.14"/>`}
  </svg>`};function mt(o){return de[o]??de.text}var yt=Object.defineProperty,N=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&yt(e,t,s),s};const Be=class extends _{constructor(){super(...arguments),this.activeFieldKey="",this.filledFields=new Set,this.config=null,this._collapsed=new Set,this._isNarrow=!1,this._resizeTimer=null,this._onResize=()=>{this._resizeTimer&&clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(this._updateNarrow,100)},this._updateNarrow=()=>{this._resizeTimer=null;const e=window.innerWidth<=768;e!==this._isNarrow&&(this._isNarrow=e)}}connectedCallback(){super.connectedCallback(),this._updateNarrow(),window.addEventListener("resize",this._onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._onResize),this._resizeTimer&&(clearTimeout(this._resizeTimer),this._resizeTimer=null)}_isRequired(e){var t,i;return(i=(t=this.config)==null?void 0:t.requiredFields)!=null&&i.includes(e.ckey)?!0:e.required===1}_toggleGroup(e){const t=new Set(this._collapsed);t.has(e)?t.delete(e):t.add(e),this._collapsed=t}_onFieldClick(e){this.dispatchEvent(new CustomEvent("field-select",{detail:{fieldKey:e},bubbles:!0,composed:!0}))}render(){return this.schema?l`
      ${this.schema.groups.map(e=>{const t=this._isNarrow||!this._collapsed.has(e.uuid);return l`
          <button
            class="group-label"
            @click=${()=>this._toggleGroup(e.uuid)}
            aria-expanded=${t}
          >
            <span class="group-label-text">${e.name}</span>
            <svg class="group-chevron ${t?"open":""}" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 6 8 10 12 6"/>
            </svg>
          </button>
          ${t?e.fields.map(i=>l`
                  <button
                    class="field-item ${this.activeFieldKey===i.key?"active":""}"
                    @click=${()=>this._onFieldClick(i.key)}
                  >
                    <span class="field-icon" aria-hidden="true">${mt(i.type)}</span>
                    <span class="field-name">${i.title}</span>
                    ${this.filledFields.has(i.key)?l`<span class="field-dot"></span>`:h}
                    ${this._isRequired(i)?l`<span class="field-required" aria-hidden="true">*</span>`:h}
                  </button>
                `):h}
        `})}
    `:h}};Be.styles=[ft];let F=Be;N([p({attribute:!1})],F.prototype,"schema");N([p({attribute:!1})],F.prototype,"activeFieldKey");N([p({attribute:!1})],F.prototype,"filledFields");N([p({attribute:!1})],F.prototype,"config");N([x()],F.prototype,"_collapsed");N([x()],F.prototype,"_isNarrow");customElements.define("sfx-bulk-meta-sidebar",F);var _t=Object.defineProperty,j=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&_t(e,t,s),s},B;const S=(B=class extends _{constructor(){super(...arguments),this.config=null,this.selectedCount=0,this._operation="SET",this._value=void 0,this._opDropdownOpen=!1,this._availableOps=[],this._onOpDropdownClose=o=>{if(!this._opDropdownOpen)return;const e=this.renderRoot.querySelector(".op-dropdown-wrap");e&&(o.composedPath().includes(e)||(this._opDropdownOpen=!1))},this._onFieldBlur=o=>{o.stopPropagation(),this._value=o.detail.value,this._emitPendingChange()},this._onFieldChange=o=>{o.stopPropagation(),this._value=o.detail.value,this._emitPendingChange()},this._onFieldEscape=o=>{o.stopPropagation()},this._onValueKeydown=o=>{var e;if(o.key!=="Enter")return;const t=(e=this.field)==null?void 0:e.type;if(!t||!B._ENTER_APPLY_TYPES.has(t))return;const i=o.composedPath().find(a=>a instanceof HTMLElement);if((i==null?void 0:i.tagName)==="TEXTAREA")return;o.preventDefault();const s=o.composedPath().find(a=>a instanceof HTMLInputElement);s&&s.value!==void 0&&(this._value=s.value),this._onApply()}}static _emptyValueForType(o){switch(o){case"multi-select":case"tags":case"integer-list":return[];case"boolean":return"null";case"geopoint":return{latitude:"",longitude:""};default:return""}}get _effectiveValue(){var o;return this._value??B._emptyValueForType((o=this.field)==null?void 0:o.type)}willUpdate(o){o.has("field")&&this.field&&(this._availableOps=pt(this.field.type),this._operation="SET",this._value=void 0,this._emitPendingChange())}_onOpSelect(o){this._operation=o,this._opDropdownOpen=!1,this._emitPendingChange()}_onOpToggle(){this._opDropdownOpen=!this._opDropdownOpen}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._onOpDropdownClose,!0)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._onOpDropdownClose,!0)}_emitPendingChange(){this.dispatchEvent(new CustomEvent("pending-change",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0}))}_onApply(){var o;this._isApplyDisabled||(this.dispatchEvent(new CustomEvent("bulk-apply",{detail:{operation:this._operation,value:this._value},bubbles:!0,composed:!0})),this._value=void 0,this._operation==="DELETE"&&!Q(this._operation,(o=this.field)==null?void 0:o.type)&&(this._operation="SET"),this._emitPendingChange())}get _isApplyDisabled(){var o,e;if(this.selectedCount===0)return!0;if(this._operation==="DELETE"){const t=new Set(["multi-select","tags","integer-list"]),i=new Set(["text","textarea","attachment-uri"]);return t.has((o=this.field)==null?void 0:o.type)?$(this._value):i.has((e=this.field)==null?void 0:e.type)?$(this._value):!1}return $(this._value)}render(){if(!this.field)return h;const o=this._availableOps.length>1,e=this._availableOps.find(t=>t.key===this._operation);return l`
      <div class="op-bar">
        <div class="op-field op-field--operation">
          <span class="op-field-label">Operation</span>
          ${o?l`
                <div class="op-dropdown-wrap">
                  <button
                    class="op-trigger ${this._opDropdownOpen?"open":""}"
                    @click=${this._onOpToggle}
                  >
                    <span class="op-trigger-label">${(e==null?void 0:e.label)??"Set"}</span>
                    <svg class="op-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>
                  ${this._opDropdownOpen?l`
                        <div class="op-menu">
                          ${this._availableOps.map(t=>l`
                              <button
                                class="op-option ${t.key===this._operation?"active":""}"
                                @click=${()=>this._onOpSelect(t.key)}
                              >
                                ${t.label}
                              </button>
                            `)}
                        </div>
                      `:h}
                </div>
              `:l`
                <div class="op-trigger op-trigger--static">
                  <span class="op-trigger-label">${(e==null?void 0:e.label)??"Overwrite"}</span>
                </div>
              `}
        </div>

        ${Q(this._operation,this.field.type)?l`
              <div class="op-field op-field--value">
                <span class="op-field-label">${this.field.title}</span>
                <div
                  class="op-value"
                  @field-blur=${this._onFieldBlur}
                  @field-change=${this._onFieldChange}
                  @field-escape=${this._onFieldEscape}
                  @keydown=${this._onValueKeydown}
                >
                  <sfx-metadata-field-edit
                    .field=${this.field}
                    .value=${this._effectiveValue}
                    .autocomplete=${this.autocomplete}
                  ></sfx-metadata-field-edit>
                </div>
              </div>
            `:h}

        <button
          class="btn-apply"
          ?disabled=${this._isApplyDisabled}
          @click=${this._onApply}
        >
          Apply
        </button>
      </div>
    `}},B.styles=[ht],B._ENTER_APPLY_TYPES=new Set(["text","numeric","decimal2","date","geopoint","attachment-uri"]),B);j([p({attribute:!1})],S.prototype,"field");j([p({attribute:!1})],S.prototype,"autocomplete");j([p({attribute:!1})],S.prototype,"config");j([p({type:Number})],S.prototype,"selectedCount");j([x()],S.prototype,"_operation");j([x()],S.prototype,"_value");j([x()],S.prototype,"_opDropdownOpen");let wt=S;customElements.define("sfx-bulk-meta-op-bar",wt);var kt=Object.defineProperty,L=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&kt(e,t,s),s};const qe=class extends _{constructor(){super(...arguments),this.files=[],this.staged=new Map,this.selected=new Set,this.pendingOp=null,this.config=null}_getEffectiveValue(e){const t=this.staged.get(e.id);return t!=null&&t.has(this.field.key)?t.get(this.field.key):e.meta[this.field.key]}render(){return l`
      ${this.files.map(e=>l`
          <sfx-bulk-meta-row
            .file=${e}
            .field=${this.field}
            .value=${this._getEffectiveValue(e)}
            .selected=${this.selected.has(e.id)}
            .pendingOp=${this.pendingOp}
            .config=${this.config}
            .autocomplete=${this.autocomplete}
          ></sfx-bulk-meta-row>
        `)}
    `}};qe.styles=[bt];let E=qe;L([p({attribute:!1})],E.prototype,"files");L([p({attribute:!1})],E.prototype,"field");L([p({attribute:!1})],E.prototype,"staged");L([p({attribute:!1})],E.prototype,"selected");L([p({attribute:!1})],E.prototype,"pendingOp");L([p({attribute:!1})],E.prototype,"config");L([p({attribute:!1})],E.prototype,"autocomplete");customElements.define("sfx-bulk-meta-table",E);var $t=Object.defineProperty,A=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&$t(e,t,s),s};const Pe=class extends _{constructor(){super(...arguments),this.selected=!1,this.pendingOp=null,this.config=null,this._error=null,this._onFieldBlur=e=>{var t;e.stopPropagation();const{value:i}=e.detail,s=ve(this.field,i,this.config??void 0);if(s){this._error=s;return}this._error=null;const a={meta:{...this.file.meta,[this.field.key]:this.value}},r=ee(this.field,i,a,(t=this.config)==null?void 0:t.language);JSON.stringify(r)!==JSON.stringify(this.value)&&this.dispatchEvent(new CustomEvent("row-field-change",{detail:{fileId:this.file.id,value:r},bubbles:!0,composed:!0}))}}willUpdate(e){e.has("field")&&(this._error=null)}_onCheckboxChange(){this.dispatchEvent(new CustomEvent("row-toggle",{detail:{fileId:this.file.id},bubbles:!0,composed:!0}))}_computePreviewValue(){var e;const t=this.pendingOp;return!t||!this.field?this.value:Fe(this.field,this.value,t.value,t.operation,(e=this.config)==null?void 0:e.language)}_getExtension(e){const t=e.lastIndexOf(".");return t>0?e.slice(t+1).toUpperCase():"?"}render(){var e;const t=this.file;return l`
      <div class="row">
        <div class="row-check">
          <input
            type="checkbox"
            class="fm-checkbox"
            .checked=${this.selected}
            @change=${this._onCheckboxChange}
          />
        </div>

        ${t.previewUrl?l`<img class="row-thumb" src=${t.previewUrl} alt="" />`:l`<img class="row-thumb row-thumb-fallback"
              src=${Re(this._getExtension(t.name))}
              alt="${this._getExtension(t.name)} file"
              @error=${i=>{const s=i.target,a=Ne();!s.dataset.fallback&&s.src!==a&&(s.dataset.fallback="1",s.src=a)}}
            />`}

        <div class="row-name" title=${t.name}>${t.name}</div>
        <div class="row-size">${t.size?Ke(t.size):"—"}</div>

        <div
          class="row-field"
          @field-blur=${this._onFieldBlur}
        >
          ${this.pendingOp&&this.selected?l`<sfx-bulk-meta-diff-view
                .field=${this.field}
                .oldValue=${this.value}
                .newValue=${this._computePreviewValue()}
                .config=${this.config}
              ></sfx-bulk-meta-diff-view>`:l`<div class="row-field-edit">
                <sfx-metadata-field-edit
                  .field=${this.field}
                  .value=${xe(this.field,this.value,(e=this.config)==null?void 0:e.language)}
                  .autocomplete=${this.autocomplete}
                ></sfx-metadata-field-edit>
              </div>
              ${this._error?l`<div class="row-error" role="alert">${this._error}</div>`:h}`}
        </div>
      </div>
    `}};Pe.styles=[xt];let C=Pe;A([p({attribute:!1})],C.prototype,"file");A([p({attribute:!1})],C.prototype,"field");A([p({attribute:!1})],C.prototype,"value");A([p({type:Boolean})],C.prototype,"selected");A([p({attribute:!1})],C.prototype,"pendingOp");A([p({attribute:!1})],C.prototype,"config");A([p({attribute:!1})],C.prototype,"autocomplete");A([x()],C.prototype,"_error");customElements.define("sfx-bulk-meta-row",C);const Ct=new Set(["multi-select","tags","integer-list"]);function pe(o,e,t){return!e.regional_variants_group_uuid||o==null||typeof o!="object"||Array.isArray(o)?o:o[t??"en"]}function ce(o){return Array.isArray(o)?o:[]}function ue(o){return o==null||o===""||Array.isArray(o)&&o.length===0?!0:typeof o=="object"&&!Array.isArray(o)?!Object.values(o).some(e=>e!=null&&e!==""):!1}function Z(o,e){var t;const i=(t=o.possible_values)==null?void 0:t.find(s=>s.internal_unique_value===e||s.api_value===e);return(i==null?void 0:i.label)??String(e)}function fe(o,e){if(e==null||e==="")return"";switch(o.type){case"boolean":return e===!0?"True":e===!1?"False":"None";case"date":{if(typeof e!="string"||e.length===0)return"";try{return new Date(e+"T00:00").toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return e}}case"numeric":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:0}):String(e)}case"decimal2":{const t=Number(e);return Number.isFinite(t)?t.toLocaleString(void 0,{maximumFractionDigits:2}):String(e)}case"select-one":return Z(o,String(e));case"geopoint":{if(typeof e=="object"&&e!==null&&!Array.isArray(e)){const t=e;return!t.latitude&&!t.longitude?"":`(${t.latitude??""}, ${t.longitude??""})`}if(typeof e=="string"){const t=e.match(/^\((.+),(.+)\)$/);if(t)return`(${t[1].trim()}, ${t[2].trim()})`}return String(e)}default:return String(e)}}function St(o,e){const t=o.map(n=>typeof n=="string"?n:String(n)),i=e.map(n=>typeof n=="string"?n:String(n)),s=new Set(t),a=new Set(i),r=[];for(const n of i)r.push({label:n,state:s.has(n)?"kept":"added"});for(const n of t)a.has(n)||r.push({label:n,state:"removed"});return r}function Et(o,e,t){const i=new Set(o.map(r=>JSON.stringify(r))),s=new Set(e.map(r=>JSON.stringify(r))),a=[];for(const r of e){const n=JSON.stringify(r),d=typeof r=="string"?Z(t,r):String(r);a.push({label:d,state:i.has(n)?"kept":"added"})}for(const r of o){const n=JSON.stringify(r);if(!s.has(n)){const d=typeof r=="string"?Z(t,r):String(r);a.push({label:d,state:"removed"})}}return a}function At(o,e,t,i){const s=i==null?void 0:i.language,a=pe(e,o,s),r=pe(t,o,s);if(Ct.has(o.type)){const n=ce(a),d=ce(r);return o.type==="tags"?{kind:"array",items:St(n,d)}:{kind:"array",items:Et(n,d,o)}}return{kind:"scalar",oldDisplay:fe(o,a),newDisplay:fe(o,r),oldEmpty:ue(a),newEmpty:ue(r)}}var It=Object.defineProperty,X=(o,e,t,i)=>{for(var s=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(s=r(e,t,s)||s);return s&&It(e,t,s),s};const Me=class extends _{constructor(){super(...arguments),this.config=null}_renderArrayDiff(e){return l`
      <div class="diff-wrap" aria-label="Bulk operation preview">
        ${e.items.length===0?l`<span class="diff-chip diff-chip--kept" style="opacity:0.5">\u2014</span>`:e.items.map(t=>l`
                <span
                  class="diff-chip diff-chip--${t.state}"
                  aria-label="${t.state==="added"?"Added":t.state==="removed"?"Removed":"Kept"}: ${t.label}"
                >
                  ${t.state==="removed"?l`<s>${t.label}</s>`:t.label}
                </span>
              `)}
      </div>
    `}_renderScalarDiff(e){const t=`Will change from ${e.oldEmpty?"empty":e.oldDisplay} to ${e.newEmpty?"empty":e.newDisplay}`;return l`
      <div class="diff-wrap diff-scalar-text" aria-label="Bulk operation preview">
        <span class="sr-only">${t}</span>
        ${e.newEmpty?h:l`<span class="diff-new" aria-hidden="true">${e.newDisplay}</span>`}
      </div>
    `}render(){if(!this.field)return h;const e=At(this.field,this.oldValue,this.newValue,this.config);return e.kind==="array"?this._renderArrayDiff(e):this._renderScalarDiff(e)}};Me.styles=[vt];let J=Me;X([p({attribute:!1})],J.prototype,"field");X([p({attribute:!1})],J.prototype,"oldValue");X([p({attribute:!1})],J.prototype,"newValue");X([p({attribute:!1})],J.prototype,"config");customElements.define("sfx-bulk-meta-diff-view",J);export{w as SfxBulkMetadataModal,Tt as clearSchemaCache,Lt as createTagsAutocomplete,jt as deepMergeMeta,zt as fetchMetadataSchema,Ft as getFilesWithMissingRequired,He as isAssetHasMetadataValue,$ as isEmpty,xe as mapValueFromBackend,ee as mapValueToBackend,he as parseMetadataSchema,ve as validateField};
