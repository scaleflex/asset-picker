import{a as e,f as t,i as n,l as r,n as i,o as a,r as o,t as s}from"./decorate-DzwBp3n0.js";import{i as c}from"./index-DEo6o-Qa.js";import{t as l}from"./brand-icon-Bf8LJEW8.js";import{t as u}from"./provider-registry-96Csod9w.js";var d=`https://accounts.google.com/gsi/client`,f=`https://apis.google.com/js/api.js`,p=`https://www.googleapis.com/auth/drive.file`,m=!1,h=null,g=new Map;function _(e){return new Promise((t,n)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}let r=document.createElement(`script`);r.src=e,r.async=!0,r.onload=()=>t(),r.onerror=()=>n(Error(`Failed to load ${e}`)),document.head.appendChild(r)})}function v(){return m?Promise.resolve():h||(h=Promise.all([_(d),_(f)]).then(()=>new Promise((e,t)=>{if(!window.gapi){t(Error(`gapi failed to initialise`));return}window.gapi.load(`picker`,{callback:()=>e(),onerror:()=>t(Error(`Failed to load Google Picker library`)),timeout:1e4,ontimeout:()=>t(Error(`Timed out loading Google Picker library`))})})).then(()=>{m=!0}).catch(e=>{throw h=null,e}),h)}function y(e){let t=g.get(e);return t&&Date.now()<t.expiresAt-6e4?Promise.resolve(t.token):new Promise((t,n)=>{if(!window.google?.accounts?.oauth2){n(Error(`Google Identity Services not loaded`));return}let r=!1,i=setTimeout(()=>{r||(r=!0,n(Error(`Google authentication timed out. The current domain may not be authorized.`)))},3e4);window.google.accounts.oauth2.initTokenClient({client_id:e,scope:p,callback:a=>{if(!r){if(r=!0,clearTimeout(i),a.error){n(Error(a.error_description||a.error));return}g.set(e,{token:a.access_token,expiresAt:Date.now()+a.expires_in*1e3}),t(a.access_token)}},error_callback:e=>{if(!r){if(r=!0,clearTimeout(i),e.type===`popup_closed`){t(``);return}n(Error(e.message||`OAuth token request failed`))}}}).requestAccessToken({prompt:``})})}var b=!1;function x(){if(b)return;let e=document.createElement(`style`);e.textContent=`.picker-dialog-bg { z-index: 100000 !important; } .picker-dialog { z-index: 100001 !important; }`,document.head.appendChild(e),b=!0}function S(e,t,n,r=!0,i){return new Promise((a,o)=>{if(!window.google?.picker){o(Error(`Google Picker library not loaded`));return}let s=new window.google.picker.DocsView;s.setIncludeFolders(!0),s.setSelectFolderEnabled(!1);let c=new window.google.picker.PickerBuilder().addView(s).setOAuthToken(e).setDeveloperKey(t).setAppId(n).setCallback(e=>{e.action===google.picker.Action.PICKED&&e.docs?a(e.docs.map(e=>({id:e.id,name:e.name,mimeType:e.mimeType,sizeBytes:e.sizeBytes??0}))):(e.action===google.picker.Action.CANCEL||e.action!==`loaded`&&e.action!==`ready`)&&a([])});r&&c.enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED),i!=null&&i>0&&c.setMaxItems(i),x();try{c.build().setVisible(!0)}catch(e){o(e instanceof Error?e:Error(String(e)))}})}var C=class extends e{constructor(...e){super(...e),this.t=i,this.companionUrl=``,this.googlePickerConfig={clientId:``,apiKey:``,appId:``},this.multi=!0,this.maxSelect=null,this._busy=!1,this._error=null,this._onClose=()=>{this.dispatchEvent(new CustomEvent(`connector-close`,{bubbles:!0,composed:!0}))},this._handleConnect=async()=>{if(!this._busy){this._busy=!0,this._error=null;try{await v();let e=await y(this.googlePickerConfig.clientId);if(!e){this._busy=!1;return}let t=await S(e,this.googlePickerConfig.apiKey,this.googlePickerConfig.appId,this.multi,this.maxSelect);if(t.length===0){this._busy=!1;return}let n=t.map(t=>({companionUrl:this.companionUrl,provider:`google-drive`,token:``,requestPath:``,fileId:t.id,name:t.name,mimeType:t.mimeType,size:t.sizeBytes,thumbnail:null,pickerAccessToken:e}));this.dispatchEvent(new CustomEvent(`connector-files-selected`,{detail:{files:n},bubbles:!0,composed:!0}))}catch(e){this._error=e instanceof Error?e.message:String(e)}finally{this._busy=!1}}}}static{this.styles=t`
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
      box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.08),
        0 1px 4px rgba(0, 0, 0, 0.04);
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
      background: linear-gradient(
        135deg,
        var(--sfx-up-primary, #2563eb),
        var(--sfx-up-primary-mid, #3b82f6)
      );
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
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .auth-view {
      animation: fadeUp 0.35s ease both;
    }

    @media (prefers-reduced-motion: reduce) {
      .auth-ring,
      .auth-logo {
        animation: none;
      }
      .auth-view {
        animation: none;
      }
    }
  `}get _providerDef(){return u([`google-drive`])[0]??null}get _providerLabel(){return this._providerDef?.label??`Google Drive`}connectedCallback(){super.connectedCallback(),v().catch(()=>{})}render(){let e=this._providerDef;return r`
      ${this._renderHeader()}
      <div class="auth-view">
        <div class="auth-glow"></div>
        <div class="auth-logo-wrap">
          <div class="auth-ring">
            <div class="auth-logo">
              ${e?.brandHtml?r`<span
                    ${c({display:`flex`,"align-items":`center`,"justify-content":`center`,transform:`scale(2.2)`})}
                    >${l(e)}</span
                  >`:a}
            </div>
          </div>
        </div>
        <div class="auth-content">
          <div class="auth-title">
            ${this.t(`connectProvider`,`Connect {{provider}}`,{provider:this._providerLabel})}
          </div>
          <div class="auth-text">
            ${this.t(`pickerHint`,`Select files from your {{provider}} account`,{provider:this._providerLabel})}
          </div>
          ${this.maxSelect!=null&&this.maxSelect>0?r`<div class="auth-text">
                ${this.t(`pickerMaxFiles`,`You can select up to {{count}} files`,{count:this.maxSelect})}
              </div>`:a}
        </div>
        ${this._error?r`<div class="error-text">${this._error}</div>`:a}
        <button class="connect-btn" ?disabled=${this._busy} @click=${this._handleConnect}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
          </svg>
          ${this._busy?this.t(`connecting`,`Connecting…`):this.t(`selectFromProvider`,`Select from {{provider}}`,{provider:this._providerLabel})}
        </button>
      </div>
    `}_renderHeader(){let e=this._providerDef;return r`
      <div class="browser-header">
        <div class="header-brand">
          ${e?.brandHtml?r`<div class="header-logo">${l(e)}</div>`:a}
          <span class="browser-title">${this._providerLabel}</span>
        </div>
        <button
          class="close-btn"
          @click=${this._onClose}
          title=${this.t(`close`,`Close`)}
          aria-label=${this.t(`close`,`Close`)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    `}};s([n({attribute:!1})],C.prototype,`t`,void 0),s([n({attribute:!1})],C.prototype,`companionUrl`,void 0),s([n({attribute:!1})],C.prototype,`googlePickerConfig`,void 0),s([n({type:Boolean})],C.prototype,`multi`,void 0),s([n({attribute:!1})],C.prototype,`maxSelect`,void 0),s([o()],C.prototype,`_busy`,void 0),s([o()],C.prototype,`_error`,void 0);export{C as SfxGooglePickerView};