import{f as P,A as g,a as p,c as $,n as h,r as C}from"./index-BZ9dNCUM.js";import{u as S,v as z,G as A,P as v}from"./define-CMPy5nMe.js";const T="https://accounts.google.com/gsi/client",I="https://apis.google.com/js/api.js",D="https://www.googleapis.com/auth/drive.file";let b=!1,w=!1,x=null;const y=new Map;function k(r){return new Promise((e,a)=>{if(document.querySelector(`script[src="${r}"]`)){e();return}const i=document.createElement("script");i.src=r,i.async=!0,i.onload=()=>e(),i.onerror=()=>a(new Error(`Failed to load ${r}`)),document.head.appendChild(i)})}function _(){return b?Promise.resolve():x||(x=Promise.all([k(T),k(I)]).then(()=>new Promise((r,e)=>{if(!window.gapi){e(new Error("gapi failed to initialise"));return}window.gapi.load("picker",{callback:()=>r(),onerror:()=>e(new Error("Failed to load Google Picker library")),timeout:1e4,ontimeout:()=>e(new Error("Timed out loading Google Picker library"))})})).then(()=>{b=!0}).catch(r=>{throw x=null,r}),x)}function L(r){const e=y.get(r);return e&&Date.now()<e.expiresAt-6e4?Promise.resolve(e.token):new Promise((a,i)=>{var t,l;if(!((l=(t=window.google)==null?void 0:t.accounts)!=null&&l.oauth2)){i(new Error("Google Identity Services not loaded"));return}let s=!1;const u=setTimeout(()=>{s||(s=!0,i(new Error("Google authentication timed out. The current domain may not be authorized.")))},3e4);window.google.accounts.oauth2.initTokenClient({client_id:r,scope:D,callback:o=>{if(!s){if(s=!0,clearTimeout(u),o.error){i(new Error(o.error_description||o.error));return}y.set(r,{token:o.access_token,expiresAt:Date.now()+o.expires_in*1e3}),a(o.access_token)}},error_callback:o=>{if(!s){if(s=!0,clearTimeout(u),o.type==="popup_closed"){a("");return}i(new Error(o.message||"OAuth token request failed"))}}}).requestAccessToken({prompt:""})})}function j(r,e,a,i=!0,t){return new Promise((l,s)=>{var u;if(!((u=window.google)!=null&&u.picker)){s(new Error("Google Picker library not loaded"));return}const o=new window.google.picker.DocsView;o.setIncludeFolders(!0),o.setSelectFolderEnabled(!1);const m=new window.google.picker.PickerBuilder().addView(o).setOAuthToken(r).setDeveloperKey(e).setAppId(a).setCallback(n=>{n.action===google.picker.Action.PICKED&&n.docs?l(n.docs.map(f=>({id:f.id,name:f.name,mimeType:f.mimeType,sizeBytes:f.sizeBytes??0}))):n.action===google.picker.Action.CANCEL?l([]):n.action!=="loaded"&&n.action!=="ready"&&l([])});if(i&&m.enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED),t!=null&&t>0&&m.setMaxItems(t),!w){const n=document.createElement("style");n.textContent=".picker-dialog-bg { z-index: 100000 !important; } .picker-dialog { z-index: 100001 !important; }",document.head.appendChild(n),w=!0}try{m.build().setVisible(!0)}catch(n){s(n instanceof Error?n:new Error(String(n)))}})}var B=Object.defineProperty,c=(r,e,a,i)=>{for(var t=void 0,l=r.length-1,s;l>=0;l--)(s=r[l])&&(t=s(e,a,t)||t);return t&&B(e,a,t),t};const E=class extends P{constructor(){super(...arguments),this.t=S,this.companionUrl="",this.googlePickerConfig={clientId:"",apiKey:"",appId:""},this.multi=!0,this.maxSelect=null,this._busy=!1,this._error=null,this._onClose=()=>{this.dispatchEvent(new CustomEvent("connector-close",{bubbles:!0,composed:!0}))},this._handleConnect=async()=>{if(!this._busy){this._busy=!0,this._error=null;try{await _();const e=await L(this.googlePickerConfig.clientId);if(!e){this._busy=!1;return}const a=await j(e,this.googlePickerConfig.apiKey,this.googlePickerConfig.appId,this.multi,this.maxSelect);if(a.length===0){this._busy=!1;return}const i=a.map(t=>({companionUrl:this.companionUrl,provider:"google-drive",token:"",requestPath:"",fileId:t.id,name:t.name,mimeType:t.mimeType,size:t.sizeBytes,thumbnail:null,pickerAccessToken:e}));this.dispatchEvent(new CustomEvent("connector-files-selected",{detail:{files:i},bubbles:!0,composed:!0}))}catch(e){this._error=e instanceof Error?e.message:String(e)}finally{this._busy=!1}}}}get _providerDef(){return z(["google-drive"])[0]??null}get _providerLabel(){var e;return((e=this._providerDef)==null?void 0:e.label)??"Google Drive"}connectedCallback(){super.connectedCallback(),_().catch(()=>{})}render(){const e=this._providerDef;return p`
      ${this._renderHeader()}
      <div class="auth-view">
        <div class="auth-glow"></div>
        <div class="auth-logo-wrap">
          <div class="auth-ring">
            <div class="auth-logo">
              ${e!=null&&e.brandHtml?p`<span ${A({display:"flex","align-items":"center","justify-content":"center",transform:"scale(2.2)"})}>${v(e)}</span>`:g}
            </div>
          </div>
        </div>
        <div class="auth-content">
          <div class="auth-title">
            ${this.t("connectProvider","Connect {{provider}}",{provider:this._providerLabel})}
          </div>
          <div class="auth-text">
            ${this.t("pickerHint","Select files from your {{provider}} account",{provider:this._providerLabel})}
          </div>
          ${this.maxSelect!=null&&this.maxSelect>0?p`<div class="auth-text">${this.t("pickerMaxFiles","You can select up to {{count}} files",{count:this.maxSelect})}</div>`:g}
        </div>
        ${this._error?p`<div class="error-text">${this._error}</div>`:g}
        <button
          class="connect-btn"
          ?disabled=${this._busy}
          @click=${this._handleConnect}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          ${this._busy?this.t("connecting","Connecting…"):this.t("selectFromProvider","Select from {{provider}}",{provider:this._providerLabel})}
        </button>
      </div>
    `}_renderHeader(){const e=this._providerDef;return p`
      <div class="browser-header">
        <div class="header-brand">
          ${e!=null&&e.brandHtml?p`<div class="header-logo">${v(e)}</div>`:g}
          <span class="browser-title">${this._providerLabel}</span>
        </div>
        <button
          class="close-btn"
          @click=${this._onClose}
          title=${this.t("close","Close")}
          aria-label=${this.t("close","Close")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    `}};E.styles=$`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
      flex: 1 1 0;
      min-height: 0;
      height: 100%;
      font-family: var(--sfx-up-font, 'Inter', system-ui, -apple-system, sans-serif);
      color: var(--sfx-up-text, #1e293b);
      background: var(--sfx-up-bg, #fff);
    }

    /* --- Header --- */
    .browser-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
    }

    .close-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: var(--sfx-up-border-light, #f1f5f9);
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .close-btn:hover {
      background: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text, #1e293b);
    }

    .close-btn svg {
      width: 18px;
      height: 18px;
    }

    .header-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
    }

    .header-logo {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .browser-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
    }

    /* --- Auth view --- */
    .auth-view {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 40px 32px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .auth-glow {
      position: absolute;
      width: 280px;
      height: 280px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--sfx-up-primary-bg, #eff6ff) 0%, transparent 70%);
      opacity: 0.7;
      pointer-events: none;
    }

    .auth-logo-wrap {
      position: relative;
      z-index: 1;
    }

    .auth-ring {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1.5px dashed var(--sfx-up-border, #e8edf5);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slowSpin 20s linear infinite;
    }

    .auth-logo {
      width: 64px;
      height: 64px;
      border-radius: 18px;
      background: #fff;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slowSpin 20s linear infinite reverse;
    }

    .auth-logo svg {
      width: 34px;
      height: 34px;
    }

    .auth-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .auth-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--sfx-up-text, #1e293b);
    }

    .auth-text {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
      max-width: 260px;
      line-height: 1.5;
    }

    .connect-btn {
      position: relative;
      z-index: 1;
      height: 42px;
      padding: 0 28px;
      border: none;
      border-radius: 11px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.25));
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .connect-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 24px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.35));
    }

    .connect-btn:active {
      transform: translateY(0);
    }

    .connect-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .connect-btn svg {
      width: 16px;
      height: 16px;
    }

    .error-text {
      font-size: 13px;
      color: var(--sfx-up-error, #dc2626);
      max-width: 300px;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }

    @keyframes slowSpin {
      to { transform: rotate(360deg); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .auth-view { animation: fadeUp 0.35s ease both; }

    @media (prefers-reduced-motion: reduce) {
      .auth-ring, .auth-logo { animation: none; }
      .auth-view { animation: none; }
    }
  `;let d=E;c([h({attribute:!1})],d.prototype,"t");c([h({attribute:!1})],d.prototype,"companionUrl");c([h({attribute:!1})],d.prototype,"googlePickerConfig");c([h({type:Boolean})],d.prototype,"multi");c([h({attribute:!1})],d.prototype,"maxSelect");c([C()],d.prototype,"_busy");c([C()],d.prototype,"_error");export{d as SfxGooglePickerView};
