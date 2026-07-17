import{f as P,a as o,A as f,c as z,n as m,r as x}from"./index-BZ9dNCUM.js";import{u as S,U as C,F as A,C as _,T as I,v as M,N as B,H as L,P as w,G as V}from"./define-CMPy5nMe.js";const y="sfx-uploader-token:";function g(a){try{return localStorage.getItem(`${y}${a}`)}catch{return null}}function H(a,e){try{localStorage.setItem(`${y}${a}`,e)}catch{}}function v(a){try{localStorage.removeItem(`${y}${a}`)}catch{}}function U(a,e){const i=r=>{if(a&&r.source!==a)return;const n=typeof r.data=="string"?j(r.data):r.data;n!=null&&n.token&&e(n.token)};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)}function j(a){try{return JSON.parse(a)}catch{return null}}var T=Object.defineProperty,h=(a,e,i,r)=>{for(var n=void 0,p=a.length-1,t;p>=0;p--)(t=a[p])&&(n=t(e,i,n)||n);return n&&T(e,i,n),n};const F=class extends P{constructor(){super(...arguments),this.t=S,this.provider="google-drive",this.companionUrl="",this.multi=!0,this.maxSelect=null,this.transformThumbnail=e=>e,this._authenticated=!1,this._loading=!1,this._items=[],this._selectedIds=new Set,this._breadcrumbs=[],this._nextPagePath=null,this._error=null,this._loadingMore=!1,this._username=null,this._resolvingFolders=!1,this._resolveProgress=0,this._cleanupAuthListener=null,this._authWindow=null,this._resolveAbort=null,this._handleConnect=()=>{var e;try{if(this._authWindow&&!this._authWindow.closed){this._authWindow.focus();return}}catch{this._authWindow=null}const i=C(this.companionUrl,this.provider);this._authWindow=window.open(i,"_blank","width=600,height=600"),(e=this._cleanupAuthListener)==null||e.call(this),this._cleanupAuthListener=U(this._authWindow,r=>{var n;this._authWindow=null,(n=this._cleanupAuthListener)==null||n.call(this),this._cleanupAuthListener=null,H(this.provider,r),this._authenticated=!0,this._loadFolder("")})},this._lastClickedIndex=null,this._toggleSelectAll=()=>{if(this._items.every(e=>this._selectedIds.has(e.id)))this._selectedIds=new Set;else{const e=new Set;let i=0;for(const r of this._items)r.isFolder?e.add(r.id):(this.maxSelect===null||i<this.maxSelect)&&(e.add(r.id),i++);this._selectedIds=e}},this._onAddSelected=async()=>{var e,i;const r=g(this.provider);if(!r)return;const n=this._items.filter(s=>!s.isFolder&&this._selectedIds.has(s.id)),p=this._items.filter(s=>s.isFolder&&this._selectedIds.has(s.id)),t=n.map(s=>({companionUrl:this.companionUrl,provider:this.provider,token:r,requestPath:s.requestPath,fileId:s.id,name:s.name,mimeType:s.mimeType,size:s.size,thumbnail:s.thumbnail}));if(p.length>0){(e=this._resolveAbort)==null||e.abort(),this._resolveAbort=new AbortController;const s=this._resolveAbort.signal;this._resolvingFolders=!0,this._resolveProgress=0;let d=0;try{for(const l of p){const b=await A(this.companionUrl,this.provider,r,l.requestPath,l.name,s);if(s.aborted)return;for(const u of b)t.push({companionUrl:this.companionUrl,provider:this.provider,token:r,requestPath:u.requestPath,fileId:u.id,name:u.name,mimeType:u.mimeType,size:u.size,thumbnail:u.thumbnail,relativeFolder:u.relativeFolder});d+=b.length,this._resolveProgress=d}}catch(l){if(s.aborted)return;if(this._resolvingFolders=!1,l instanceof _){v(this.provider),this._authenticated=!1;return}this._error=l instanceof Error?l.message:this.t("failedToReadFolder","Failed to read folder contents");return}finally{((i=this._resolveAbort)==null?void 0:i.signal)===s&&(this._resolveAbort=null)}this._resolvingFolders=!1}this.dispatchEvent(new CustomEvent("connector-files-selected",{detail:{files:t},bubbles:!0,composed:!0}))},this._onClose=()=>{this.dispatchEvent(new CustomEvent("connector-close",{bubbles:!0,composed:!0}))},this._handleLogout=async()=>{const e=g(this.provider);if(e){try{await I(this.companionUrl,this.provider,e)}catch{}v(this.provider)}this._reset()},this._onBack=()=>{this._breadcrumbs.length!==0&&this._onBreadcrumbClick(this._breadcrumbs.length-2)},this._cancelResolve=()=>{var e;(e=this._resolveAbort)==null||e.abort(),this._resolveAbort=null,this._resolvingFolders=!1,this._resolveProgress=0}}connectedCallback(){super.connectedCallback(),this._checkAuth()}disconnectedCallback(){var e,i;super.disconnectedCallback(),(e=this._cleanupAuthListener)==null||e.call(this),this._cleanupAuthListener=null,(i=this._resolveAbort)==null||i.abort(),this._resolveAbort=null}willUpdate(e){e.has("provider")&&e.get("provider")!==void 0&&(this._reset(),this._checkAuth())}_reset(){var e;(e=this._resolveAbort)==null||e.abort(),this._resolveAbort=null,this._authenticated=!1,this._loading=!1,this._items=[],this._selectedIds=new Set,this._lastClickedIndex=null,this._breadcrumbs=[],this._nextPagePath=null,this._error=null,this._username=null,this._resolvingFolders=!1,this._resolveProgress=0}_checkAuth(){g(this.provider)&&(this._authenticated=!0,this._loadFolder(""))}get _providerDef(){return M([this.provider])[0]??null}get _providerLabel(){var e;return((e=this._providerDef)==null?void 0:e.label)??this.provider}async _loadFolder(e){const i=g(this.provider);if(!i){this._authenticated=!1;return}this.offsetHeight>0&&(this.style.minHeight=`${this.offsetHeight}px`),this._loading=!0,this._error=null,this._items=[],this._selectedIds=new Set,this._lastClickedIndex=null,this._nextPagePath=null;try{const r=await B(this.companionUrl,this.provider,i,e);this._items=r.items,this._nextPagePath=r.nextPagePath,r.username&&(this._username=r.username)}catch(r){r instanceof _?(v(this.provider),this._authenticated=!1):this._error=r instanceof Error?r.message:this.t("failedToLoadFiles","Failed to load files")}finally{this._loading=!1}}_onFolderClick(e){this._breadcrumbs=[...this._breadcrumbs,{name:e.name,path:e.requestPath}],this._loadFolder(e.requestPath)}_onBreadcrumbClick(e){if(e<0)this._breadcrumbs=[],this._loadFolder("");else{const i=this._breadcrumbs[e];this._breadcrumbs=this._breadcrumbs.slice(0,e+1),this._loadFolder(i.path)}}async _onLoadMore(){const e=g(this.provider);if(!(!e||!this._nextPagePath)){this._loadingMore=!0;try{const i=await L(this.companionUrl,e,this._nextPagePath);this._items=[...this._items,...i.items],this._nextPagePath=i.nextPagePath}catch(i){i instanceof _&&(v(this.provider),this._authenticated=!1)}finally{this._loadingMore=!1}}}get _selectedFileCount(){return this._items.filter(e=>!e.isFolder&&this._selectedIds.has(e.id)).length}_toggleSelect(e,i){if(!this.multi){if(e.isFolder)return;this._selectedIds=this._selectedIds.has(e.id)?new Set:new Set([e.id]);const t=this._items.filter(s=>!s.isFolder).findIndex(s=>s.id===e.id);t!==-1&&(this._lastClickedIndex=t);return}const r=this._items.filter(t=>!t.isFolder),n=r.findIndex(t=>t.id===e.id),p=this.maxSelect!==null&&this._selectedFileCount>=this.maxSelect;if(!e.isFolder&&i!=null&&i.shiftKey&&this._lastClickedIndex!==null&&n!==-1){const t=Math.min(this._lastClickedIndex,n),s=Math.max(this._lastClickedIndex,n),d=new Set(this._selectedIds);for(let l=t;l<=s;l++)d.has(r[l].id)||this.maxSelect!==null&&[...d].filter(b=>r.some(u=>u.id===b)).length>=this.maxSelect||d.add(r[l].id);this._selectedIds=d}else{const t=new Set(this._selectedIds);t.has(e.id)?t.delete(e.id):(e.isFolder||!p)&&t.add(e.id),this._selectedIds=t}n!==-1&&(this._lastClickedIndex=n)}render(){return o`
      ${this._renderHeader()}
      ${this._authenticated?this._loading?this._renderLoading():this._error?this._renderError():this._renderBrowser():this._renderAuthView()}
    `}_renderHeader(){const e=this._providerDef,i=this._authenticated&&this._breadcrumbs.length>0;return o`
      <div class="browser-header">
        <button
          class="back-btn"
          ?disabled=${!i}
          @click=${this._onBack}
          title=${this.t("back","Back")}
          aria-label=${this.t("back","Back")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div class="header-brand">
          ${e!=null&&e.brandHtml?o`<div class="header-logo">${w(e)}</div>`:f}

          <div class="header-title-group">
            <span class="browser-title">${this._providerLabel}</span>
            ${this._authenticated&&this._username?o`<span class="header-username">${this._username}</span>`:f}
          </div>
        </div>
        ${this._authenticated?o`<button class="logout-btn" @click=${this._handleLogout}>${this.t("signOut","Sign out")}</button>`:f}
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
    `}_renderAuthView(){const e=this._providerDef;return o`
      <div class="auth-view">
        <div class="auth-glow"></div>
        <div class="auth-logo-wrap">
          <div class="auth-ring">
            <div class="auth-logo">
              ${e!=null&&e.brandHtml?o`<span ${V({display:"flex","align-items":"center","justify-content":"center",transform:"scale(2.2)"})}>${w(e)}</span>`:o`<svg viewBox="0 0 24 24" fill="none" stroke="var(--sfx-up-primary, #2563eb)" stroke-width="1.5"><path d="M12 2a5 5 0 015 5v3h1a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h1V7a5 5 0 015-5zm3 8H9v-3a3 3 0 016 0v3z" fill="var(--sfx-up-primary, #2563eb)"/></svg>`}
            </div>
          </div>
        </div>
        <div class="auth-content">
          <div class="auth-title">
            ${this.t("connectProvider","Connect {{provider}}",{provider:this._providerLabel})}
          </div>
          <div class="auth-text">
            ${this.t("connectProviderHint","Sign in to browse and select files from your {{provider}} account",{provider:this._providerLabel})}
          </div>
        </div>
        <button class="connect-btn" @click=${this._handleConnect}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
          </svg>
          ${this.t("signInToProvider","Sign in to {{provider}}",{provider:this._providerLabel})}
        </button>
      </div>
    `}_renderLoading(){return o`
      <div class="skeleton-list">
        ${[1,2,3,4,5,6,7].map(()=>o`
          <div class="skeleton-row">
            <div class="skeleton-check"></div>
            <div class="skeleton-thumb"></div>
            <div class="skeleton-text">
              <div class="skeleton-name"></div>
              <div class="skeleton-size"></div>
            </div>
            <div class="skeleton-modified"></div>
          </div>
        `)}
      </div>
    `}_renderError(){return o`
      <div class="error-view">
        <div class="error-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <div class="error-text">${this._error}</div>
        <button class="retry-btn" @click=${()=>{const e=this._breadcrumbs[this._breadcrumbs.length-1];this._loadFolder((e==null?void 0:e.path)??"")}}>
          ${this.t("tryAgain","Try again")}
        </button>
      </div>
    `}_renderBrowser(){const e=this._items.filter(t=>!t.isFolder),i=this._items.filter(t=>t.isFolder),r=this._selectedIds.size,n=this.maxSelect!==null&&this._selectedFileCount>=this.maxSelect,p=this._items.length>0&&this._items.every(t=>this._selectedIds.has(t.id));return o`
      ${this._renderBreadcrumbs()}

      ${this._items.length>0?o`
            <div class="list-header">
              <div class="col-check"></div>
              <div class="col-thumb"></div>
              <div class="col-name">${this.t("name","Name")}</div>
              <div class="col-modified">${this.t("lastModified","Last modified")}</div>
            </div>
          `:f}

      <div class="file-list">
        ${i.length===0&&e.length===0?o`
              <div class="empty-state">
                <div class="empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                  </svg>
                </div>
                <div class="empty-text">${this.t("folderEmpty","This folder is empty")}</div>
              </div>
            `:f}

        ${i.map(t=>{const s=this._selectedIds.has(t.id);return o`
            <div
              class="file-item ${s?"selected":""}"
              @click=${()=>this._onFolderClick(t)}
            >
              ${this.multi?o`<input
                    type="checkbox"
                    .checked=${s}
                    aria-label=${this.t("selectFolder","Select folder")}
                    @click=${d=>d.stopPropagation()}
                    @change=${()=>this._toggleSelect(t)}
                  />`:o`<span class="checkbox-spacer" aria-hidden="true"></span>`}
              <div class="file-thumb folder-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <div class="file-info">
                <div class="file-name">${t.name}</div>
              </div>
              <span class="file-modified">${$(t.modifiedDate,this.t)}</span>
            </div>
          `})}

        ${e.map(t=>{const s=this._selectedIds.has(t.id);return o`
            <div
              class="file-item ${s?"selected":""} ${!s&&n?"disabled":""}"
              @click=${d=>this._toggleSelect(t,d)}
            >
              <input
                type="checkbox"
                .checked=${this._selectedIds.has(t.id)}
                @click=${d=>d.stopPropagation()}
                @change=${()=>this._toggleSelect(t)}
              />
              <div class="file-thumb">
                ${t.thumbnail?o`<img src=${this.transformThumbnail(t.thumbnail)} alt="" loading="lazy" referrerpolicy="no-referrer"
                      @error=${d=>{const l=d.target;l.style.display="none",l.parentElement.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'}}
                    />`:o`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>`}
              </div>
              <div class="file-info">
                <div class="file-name">${t.name}</div>
                <div class="file-meta">
                  ${t.size?o`<span class="file-size">${E(t.size)}</span>`:f}
                </div>
              </div>
              <span class="file-modified">${$(t.modifiedDate,this.t)}</span>
            </div>
          `})}

        ${this._nextPagePath?o`
              <button
                class="load-more-btn"
                ?disabled=${this._loadingMore}
                @click=${this._onLoadMore}
              >
                ${this._loadingMore?this.t("loading","Loading"):this.t("loadMore","Load more")}
              </button>
            `:f}
      </div>

      ${this._items.length>0||r>0?o`
            <div class="browser-footer">
              <div class="footer-left">
                ${this.multi?o`<button class="select-all-btn" @click=${this._toggleSelectAll}>
                  ${p?this.t("deselectAll","Deselect all"):this.t("selectAll","Select all")}
                </button>`:f}
                <span class="selected-count ${r>0?"has-selection":""}">
                  ${r>0?this.t("itemsSelected",{count:r,defaultValue_one:"{{count}} item selected",defaultValue_other:"{{count}} items selected"}):this.t("noFilesSelected","No files selected")}
                </span>
              </div>
              <button
                class="add-btn"
                ?disabled=${r===0||this._resolvingFolders}
                @click=${this._onAddSelected}
              >
                ${r>0?this.t("addItems",{count:r,defaultValue_one:"Add {{count}} item",defaultValue_other:"Add {{count}} items"}):this.t("add","Add")}
              </button>
            </div>
          `:f}

      ${this._resolvingFolders?o`
            <div class="busy-overlay">
              <div class="spinner"></div>
              <div class="busy-text">
                ${this._resolveProgress>0?this.t("preparingFilesWithCount",{count:this._resolveProgress,defaultValue_one:"Preparing {{count}} file…",defaultValue_other:"Preparing {{count}} files…"}):this.t("preparingFiles","Preparing files…")}
              </div>
              <button class="busy-cancel-btn" @click=${this._cancelResolve}>
                ${this.t("cancel","Cancel")}
              </button>
            </div>
          `:f}
    `}_renderBreadcrumbs(){return this._breadcrumbs.length===0?f:o`
      <div class="breadcrumbs">
        <button class="crumb" @click=${()=>this._onBreadcrumbClick(-1)}>
          <svg class="crumb-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          ${this.t("root","Root")}
        </button>
        ${this._breadcrumbs.map((e,i)=>o`
            <span class="crumb-sep">&rsaquo;</span>
            ${i<this._breadcrumbs.length-1?o`<button class="crumb" @click=${()=>this._onBreadcrumbClick(i)}>${e.name}</button>`:o`<span class="crumb-current">${e.name}</span>`}
          `)}
      </div>
    `}};F.styles=z`
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

    .back-btn,
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

    .back-btn:hover:not(:disabled),
    .close-btn:hover {
      background: var(--sfx-up-border, #e8edf5);
      color: var(--sfx-up-text, #1e293b);
    }

    .back-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .back-btn svg,
    .close-btn svg {
      width: 16px;
      height: 16px;
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
      flex-shrink: 0;
      overflow: hidden;
    }

    .header-logo svg {
      width: 20px;
      height: 20px;
    }

    .header-title-group {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .browser-title {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.2;
    }

    .header-username {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .logout-btn {
      border: 1px solid var(--sfx-up-border, #e8edf5);
      background: none;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-muted, #94a3b8);
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 6px;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .logout-btn:hover {
      background: var(--destructive-10, #fef2f2);
      color: var(--sfx-up-error, #dc2626);
      border-color: #fecaca;
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

    .connect-btn svg {
      width: 16px;
      height: 16px;
    }

    /* --- Breadcrumbs --- */
    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 8px 20px;
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
      flex-wrap: wrap;
      background: var(--sfx-up-border-light, #fafbfd);
    }

    .crumb {
      cursor: pointer;
      color: var(--sfx-up-primary, #2563eb);
      border: none;
      background: none;
      font-family: inherit;
      font-size: 12px;
      padding: 3px 6px;
      border-radius: 5px;
      transition: background 0.15s;
      font-weight: 500;
    }

    .crumb:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .crumb-sep {
      color: var(--sfx-up-text-muted, #94a3b8);
      font-size: 10px;
    }

    .crumb-current {
      color: var(--sfx-up-text, #1e293b);
      font-weight: 600;
      padding: 3px 6px;
      font-size: 12px;
    }

    .crumb-home {
      width: 12px;
      height: 12px;
      vertical-align: middle;
      margin-right: 2px;
    }

    /* --- Column header --- */
    .list-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 20px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--sfx-up-text-muted, #94a3b8);
      border-bottom: 1px solid var(--sfx-up-border-light, #f1f5f9);
      background: var(--sfx-up-border-light, #fafbfd);
      flex-shrink: 0;
    }

    .list-header .col-check {
      width: 16px;
      flex-shrink: 0;
    }

    .list-header .col-thumb {
      width: 38px;
      flex-shrink: 0;
    }

    .list-header .col-name {
      flex: 1;
      min-width: 0;
    }

    .list-header .col-modified {
      width: 110px;
      flex-shrink: 0;
      text-align: right;
    }

    .file-modified {
      width: 110px;
      flex-shrink: 0;
      text-align: right;
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* --- File list --- */
    .file-list {
      flex: 1;
      overflow-y: auto;
      padding: 6px 8px;
      min-height: 0;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 12px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.15s;
      user-select: none;
      border: 1.5px solid transparent;
      position: relative;
    }

    .file-item:hover {
      background: var(--sfx-up-border-light, #f8fafc);
    }

    .file-item.selected {
      background: var(--sfx-up-primary-bg, #eff6ff);
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.15));
    }

    .file-item.disabled {
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
    }

    .file-item input[type='checkbox'] {
      width: 16px;
      height: 16px;
      accent-color: var(--sfx-up-primary, #2563eb);
      flex-shrink: 0;
      cursor: pointer;
    }

    /* Invisible placeholder that reserves the same horizontal slot as the
       checkbox. Used on folder rows in single-select mode so they line up
       with file rows and the column header. */
    .checkbox-spacer {
      display: inline-block;
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }

    .file-thumb {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: var(--sfx-up-border-light, #f1f5f9);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: hidden;
    }

    .file-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .file-thumb svg {
      width: 18px;
      height: 18px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .file-thumb.folder-thumb {
      background: linear-gradient(135deg, #fef3c7, #fde68a);
    }

    .file-thumb.folder-thumb svg {
      color: #d97706;
    }

    .file-info {
      flex: 1;
      min-width: 0;
    }

    .file-name {
      font-size: 13px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .file-meta {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .file-size {
      font-size: 11px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }


    /* --- Footer --- */
    .browser-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-top: 1px solid var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
      gap: 12px;
      background: var(--sfx-up-bg, #fff);
    }

    .footer-left {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .selected-count {
      font-size: 12px;
      color: var(--sfx-up-text-muted, #94a3b8);
      font-weight: 500;
    }

    .selected-count.has-selection {
      color: var(--sfx-up-primary, #2563eb);
    }

    .add-btn {
      height: 36px;
      padding: 0 20px;
      border: none;
      border-radius: 9px;
      background: linear-gradient(135deg, var(--sfx-up-primary, #2563eb), var(--sfx-up-primary-mid, #3b82f6));
      color: var(--primary-foreground, #fff);
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.18s;
      box-shadow: 0 2px 10px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.28));
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .add-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.38));
    }

    .add-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .select-all-btn {
      border: 1px solid var(--sfx-up-border, #e8edf5);
      background: none;
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      color: var(--sfx-up-text-secondary, #475569);
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 6px;
      transition: all 0.15s;
      flex-shrink: 0;
    }

    .select-all-btn:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
      color: var(--sfx-up-primary, #2563eb);
      border-color: var(--sfx-up-primary-glow, rgba(37, 99, 235, 0.2));
    }

    /* --- Loading / Error --- */
    .loading, .error-view, .empty-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 40px 24px;
      text-align: center;
    }

    .spinner {
      width: 28px;
      height: 28px;
      border: 3px solid var(--sfx-up-border, #e8edf5);
      border-top-color: var(--sfx-up-primary, #2563eb);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    .error-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: #fef2f2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .error-icon svg {
      width: 24px;
      height: 24px;
      color: var(--sfx-up-error, #dc2626);
    }

    .error-text {
      font-size: 13px;
      color: var(--sfx-up-text-secondary, #475569);
      max-width: 260px;
      line-height: 1.4;
    }

    .retry-btn {
      height: 34px;
      padding: 0 16px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
    }

    .retry-btn:hover {
      background: var(--sfx-up-border-light, #f8faff);
      border-color: var(--sfx-up-border, #d1dff0);
    }

    .load-more-btn {
      display: block;
      margin: 8px auto;
      padding: 8px 20px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: none;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: var(--sfx-up-primary, #2563eb);
      transition: all 0.15s;
    }

    .load-more-btn:hover {
      background: var(--sfx-up-primary-bg, #eff6ff);
    }

    .empty-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: var(--sfx-up-border-light, #f1f5f9);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .empty-icon svg {
      width: 24px;
      height: 24px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    .empty-text {
      font-size: 13px;
      color: var(--sfx-up-text-muted, #94a3b8);
    }

    /* --- Skeleton loading --- */
    .skeleton-list {
      flex: 1;
      padding: 6px 8px;
      min-height: 0;
    }

    .skeleton-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 12px;
    }

    .skeleton-check {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background: var(--sfx-up-border-light, #f1f5f9);
    }

    .skeleton-thumb {
      width: 38px;
      height: 38px;
      border-radius: 8px;
      background: var(--sfx-up-border-light, #f1f5f9);
      flex-shrink: 0;
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .skeleton-name {
      height: 14px;
      border-radius: 6px;
      background: var(--sfx-up-border-light, #f1f5f9);
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-size {
      height: 11px;
      width: 60px;
      border-radius: 6px;
      background: var(--sfx-up-border-light, #f1f5f9);
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-modified {
      width: 70px;
      height: 11px;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--sfx-up-border-light, #f1f5f9);
      animation: shimmer 1.5s ease-in-out infinite;
    }

    .skeleton-row:nth-child(1) .skeleton-name { width: 65%; animation-delay: 0s; }
    .skeleton-row:nth-child(1) .skeleton-thumb { animation-delay: 0s; }
    .skeleton-row:nth-child(2) .skeleton-name { width: 45%; animation-delay: 0.1s; }
    .skeleton-row:nth-child(2) .skeleton-thumb { animation-delay: 0.1s; }
    .skeleton-row:nth-child(3) .skeleton-name { width: 75%; animation-delay: 0.2s; }
    .skeleton-row:nth-child(3) .skeleton-thumb { animation-delay: 0.2s; }
    .skeleton-row:nth-child(4) .skeleton-name { width: 55%; animation-delay: 0.3s; }
    .skeleton-row:nth-child(4) .skeleton-thumb { animation-delay: 0.3s; }
    .skeleton-row:nth-child(5) .skeleton-name { width: 60%; animation-delay: 0.4s; }
    .skeleton-row:nth-child(5) .skeleton-thumb { animation-delay: 0.4s; }
    .skeleton-row:nth-child(6) .skeleton-name { width: 50%; animation-delay: 0.5s; }
    .skeleton-row:nth-child(6) .skeleton-thumb { animation-delay: 0.5s; }
    .skeleton-row:nth-child(7) .skeleton-name { width: 70%; animation-delay: 0.6s; }
    .skeleton-row:nth-child(7) .skeleton-thumb { animation-delay: 0.6s; }

    @keyframes shimmer {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
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
      .spinner { animation: none; }
      .skeleton-thumb, .skeleton-name, .skeleton-size { animation: none; }
      .auth-ring { animation: none; }
      .auth-logo { animation: none; }
      .auth-view { animation: none; }
    }

    /* Hide the modified column on narrow viewports (mobile fullscreen). */
    @media (max-width: 540px) {
      .list-header .col-modified,
      .file-modified,
      .skeleton-modified {
        display: none;
      }
    }

    /* --- Folder-traversal busy overlay --- */
    .busy-overlay {
      position: absolute;
      inset: 0;
      /* Themed background with a translucent veil so the list shows through.
         Safari < 15.4 needs the -webkit-backdrop-filter alias. */
      background: color-mix(in srgb, var(--sfx-up-bg, #fff) 85%, transparent);
      -webkit-backdrop-filter: blur(2px);
      backdrop-filter: blur(2px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      z-index: 2;
    }

    /* color-mix() lands in Safari 16.4 / Firefox 113 / Chrome 111. Older
       browsers ignore the rule above; this gives them a solid-ish veil. */
    @supports not (background: color-mix(in srgb, red, blue)) {
      .busy-overlay {
        background: rgba(255, 255, 255, 0.85);
      }
    }

    .busy-text {
      font-size: 13px;
      color: var(--sfx-up-text-secondary, #475569);
      font-weight: 500;
    }

    .busy-cancel-btn {
      height: 32px;
      padding: 0 16px;
      border: 1.5px solid var(--sfx-up-border, #e8edf5);
      background: var(--sfx-up-bg, #fff);
      border-radius: 8px;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      color: var(--sfx-up-text-secondary, #475569);
      transition: all 0.15s;
    }

    .busy-cancel-btn:hover {
      background: var(--sfx-up-border-light, #f1f5f9);
      color: var(--sfx-up-text, #1e293b);
    }
  `;let c=F;h([m({attribute:!1})],c.prototype,"t");h([m({type:String})],c.prototype,"provider");h([m({type:String})],c.prototype,"companionUrl");h([m({type:Boolean})],c.prototype,"multi");h([m({type:Number})],c.prototype,"maxSelect");h([m({attribute:!1})],c.prototype,"transformThumbnail");h([x()],c.prototype,"_authenticated");h([x()],c.prototype,"_loading");h([x()],c.prototype,"_items");h([x()],c.prototype,"_selectedIds");h([x()],c.prototype,"_breadcrumbs");h([x()],c.prototype,"_nextPagePath");h([x()],c.prototype,"_error");h([x()],c.prototype,"_loadingMore");h([x()],c.prototype,"_username");h([x()],c.prototype,"_resolvingFolders");h([x()],c.prototype,"_resolveProgress");function E(a){if(a===0)return"0 B";const e=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(a)/Math.log(1024)),e.length-1);return`${(a/Math.pow(1024,i)).toFixed(i===0?0:1)} ${e[i]}`}function $(a,e){if(!a)return"";const i=Date.parse(a);if(Number.isNaN(i))return"";const r=Math.max(0,Date.now()-i),n=6e4,p=60*n,t=24*p,s=30*t,d=365*t,l=Math.round(r/n);if(l<1)return e("justNow","just now");if(l<60)return e("minutesAgo",{count:l,defaultValue_one:"{{count}} minute ago",defaultValue_other:"{{count}} minutes ago"});const b=Math.round(r/p);if(b<24)return e("hoursAgo",{count:b,defaultValue_one:"{{count}} hour ago",defaultValue_other:"{{count}} hours ago"});const u=Math.round(r/t);if(u<2)return e("yesterday","yesterday");if(u<30)return e("daysAgo",{count:u,defaultValue_one:"{{count}} day ago",defaultValue_other:"{{count}} days ago"});const k=Math.round(r/s);return k<12?e("monthsAgo",{count:k,defaultValue_one:"{{count}} month ago",defaultValue_other:"{{count}} months ago"}):e("yearsAgo",{count:Math.round(r/d),defaultValue_one:"{{count}} year ago",defaultValue_other:"{{count}} years ago"})}export{c as SfxProviderBrowser,$ as formatRelativeDate};
