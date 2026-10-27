import{u as Q,f as W,v as K,A as h,j as l,d as J,k as V,w as D,x as M,D as X,y as Y,n as p,r as k,z as Z,b as q}from"./index-BnaKtpZY.js";import{c as I,f as ee}from"./async-directive-DbBif0WP.js";import{r as te}from"./code-block-Bk3NnwHF.js";const re={search:!0,createFolder:!1,root:!0,chips:!0},se="f7b2366e-fcb6-4f1a-8f23-8de48422989a",oe="https://i18n-fastly.ultrafast.io",ae="folder-picker",z=Q({gridUuid:se,namespace:ae,cdnUrl:oe}),B=z.initI18n,d=z.t,ie=z.I18nController;function _(t,e){var r,s,o,a;if(!t)return null;if((r=t.uuids)!=null&&r.length&&e.uuid&&t.uuids.includes(e.uuid))return"uuid";if((s=t.pathPrefixes)!=null&&s.length)for(const i of t.pathPrefixes){const x=i.replace(/\/+$/,"")||"/";if(e.path===x||(x==="/"?e.path!=="/":e.path.startsWith(`${x}/`)))return"prefix"}return(o=t.paths)!=null&&o.length&&t.paths.includes(e.path)?"path":(a=t.predicate)!=null&&a.call(t,e)?"predicate":null}function ne(t,e,r,s){const o=t==null?void 0:t.message;return typeof o=="function"?o(e,r):typeof o=="string"?o:s(e)}function U(t,e){return e==="created"?t.createdAt??"":e==="modified"?t.modifiedAt??"":t.name}function le(t){if(typeof t=="function")return t;const e=(t==null?void 0:t.by)??"name",r=(t==null?void 0:t.order)==="desc"?-1:1;return(s,o)=>{const a=U(s,e),i=U(o,e);return!a&&!i?0:a?i?(e==="name"?a.localeCompare(i):a<i?-1:a>i?1:0)*r:-1:1}}function ce(t,e){return[...t].sort(le(e))}function E(t,e){return e?t.filter(e):t}function j(t,e){return{uuid:"",name:e,path:t,parentPath:void 0}}function de(t){var u;const{state:e,disabled:r}=t,s=((u=t.rootPath)==null?void 0:u.replace(/\/+$/,""))||"/",o=t.showRoot??!0,a=[],i=(n,m,b,g,w)=>{const v=e.nodeStatus[n.path]??"idle",$=e.children[n.path],A=$===void 0?void 0:E($,t.filter);return{folder:n,depth:m,posInSet:g,setSize:w,expanded:e.expanded.has(n.path),expandable:!b&&(A===void 0||A.length>0),status:v,disabledReason:_(r,n),partial:v==="partial",isRoot:b}},x=(n,m,b=!1)=>{if(!b&&!e.expanded.has(n))return;const g=ce(E(e.children[n]??[],t.filter),t.sort);for(const[w,v]of g.entries()){const $=i(v,m,!1,w+1,g.length);a.push($),!($.disabledReason&&(r!=null&&r.hideSubtree))&&x(v.path,m+1)}};return o?(a.push(i(j(s,t.rootLabel??"Root"),0,!0,1,1)),x(s,1,!0)):x(s,0,!0),a}function fe(t,e){const r=t[e];return r&&!r.disabledReason?e:t.findIndex(s=>!s.disabledReason)}function he(t,e,r){if(!t.length)return r==="Escape"?{type:"cancel"}:null;const s=i=>Math.max(0,Math.min(t.length-1,i)),o=e>=0&&e<t.length?e:-1,a=o>=0?t[o]:void 0;switch(r){case"ArrowDown":return{type:"move",index:o<0?0:s(o+1)};case"ArrowUp":return{type:"move",index:o<0?0:s(o-1)};case"Home":return{type:"move",index:0};case"End":return{type:"move",index:t.length-1};case"ArrowRight":{if(!a)return{type:"move",index:0};if(a.expandable&&!a.expanded)return{type:"expand",path:a.folder.path};const i=t[o+1];return i&&i.depth>a.depth?{type:"move",index:o+1}:null}case"ArrowLeft":{if(!a)return{type:"move",index:0};if(a.expanded)return{type:"collapse",path:a.folder.path};for(let i=o-1;i>=0;i-=1)if(t[i].depth<a.depth)return{type:"move",index:i};return null}case"Enter":return o<0?null:{type:"select",index:o};case" ":case"Spacebar":return o<0?null:{type:"select",index:o};case"Escape":return{type:"cancel"};default:return null}}const pe=/[/\\%]/;function ue(t){for(const e of t){const r=e.codePointAt(0)??0;if(r<32||r===127)return!0}return!1}function xe(t,e=[]){const r=t.trim();if(!r)return{ok:!1,reason:"empty"};if(pe.test(r)||ue(r))return{ok:!1,reason:"chars"};const s=r.toLowerCase();return e.some(o=>o.name.toLowerCase()===s)?{ok:!1,reason:"duplicate"}:{ok:!0,value:r}}class ge{constructor(e,r){this.host=e,this.store=r,e.addController(this)}get state(){return this.store.getState()}setStore(e){this.store=e,this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=e.subscribe(()=>this.host.requestUpdate())),this.host.requestUpdate()}hostConnected(){this.unsubscribe=this.store.subscribe(()=>this.host.requestUpdate())}hostDisconnected(){var e;(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=void 0}}const G=24;function R(t){return!Number.isFinite(t)||t<0?0:Math.min(Math.floor(t),G)}const me=K(Array.from({length:G+1},(t,e)=>`[data-depth='${e}'] {
    padding-left: calc(var(--sfx-fp-indent) * ${e} + var(--sfx-fp-row-padding-left));
  }`).join(`
  `)),be=W`
  :host {
    /*
     * Palette. Each token first looks for the @scaleflex/ui-tw variable of the same meaning
     * — custom properties inherit through the shadow boundary, so a host already on ui-tw
     * (Hub, Portals, Studio) is themed with no wiring at all. The hex is the standalone
     * fallback, and an explicit --sfx-fp-* from the host still wins over both.
     */
    --sfx-fp-accent: var(--accent-foreground, #2563eb);
    --sfx-fp-accent-soft: var(--accent, #eff6ff);
    --sfx-fp-fg: var(--foreground, #1b1f24);
    --sfx-fp-muted: var(--muted-foreground, #6b7280);
    --sfx-fp-border: var(--border, #e3e6ea);
    --sfx-fp-bg: var(--popover, #ffffff);
    --sfx-fp-bg-alt: var(--secondary, #f8f9fb);
    --sfx-fp-hover: var(--muted, #f3f4f6);
    --sfx-fp-danger: var(--destructive, #dc2626);
    --sfx-fp-radius: 6px;
    --sfx-fp-body-max-height: 220px;

    /*
     * Row metrics. These are the "hub" variant — the shape of Hub's Airbox picker, and the
     * default. Pick the other shipped shape with variant="portals"; individual values stay
     * overridable for anything neither shape covers.
     */
    --sfx-fp-indent: 20px;
    --sfx-fp-row-padding-left: 14px;
    --sfx-fp-row-padding-right: 12px;
    --sfx-fp-row-padding-y: 8px;
    --sfx-fp-row-radius: 4px;
    --sfx-fp-row-gap: 6px;
    --sfx-fp-row-font-size: 14px;
    --sfx-fp-row-line-height: 20px;
    /* Hub shows the chevron only; the folder glyph is reserved for the Root row. */
    --sfx-fp-folder-icon-display: none;
    /* Width reserved for the disclosure control, so rows align whether or not one exists. */
    --sfx-fp-chevron-box: 11px;
    --sfx-fp-chevron-size: 11px;
    /*
     * The chevron is a CSS mask rather than an <sfx-icon>, because sfx-icon fixes its glyph
     * size with an inline style on its own <svg> — unreachable from here. As a mask it takes
     * its size from the property above, its colour from currentColor, and a host can swap
     * the shape entirely by pointing this at another data: URI.
     */
    --sfx-fp-icon-chevron: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>');
    --sfx-fp-search-height: 40px;
    --sfx-fp-search-font-size: 16px;
    --sfx-fp-search-padding-x: 13px;
    --sfx-fp-search-gap: 6px;
    --sfx-fp-search-icon-size: 16px;
    --sfx-fp-search-bg: var(--background, #ffffff);
    --sfx-fp-search-border: var(--input, var(--sfx-fp-border));
    --sfx-fp-search-color: var(--sfx-fp-fg);
    /* Left unstyled the browser picks its own grey, which rarely matches the host's. */
    --sfx-fp-placeholder: color-mix(in oklch, var(--sfx-fp-muted) 80%, transparent);
    /* Focus ring, drawn on the wrapper because the input's own outline is suppressed.
       Two shadows reproduce ring + ring-offset: the first is the gap, the second the ring. */
    --sfx-fp-focus-ring: var(--ring, var(--sfx-fp-accent));
    --sfx-fp-focus-ring-width: 2px;
    --sfx-fp-focus-ring-offset: 2px;
    --sfx-fp-focus-ring-offset-color: var(--background, var(--sfx-fp-bg));
    --sfx-fp-search-focus-border: color-mix(
      in oklch,
      var(--secondary-foreground, var(--sfx-fp-accent)) 50%,
      transparent
    );
    /* shadow-xs, part of the hub shape. Never the keyword "none": this value is composed
       into the focus-ring list, where none would invalidate the whole declaration — use a
       transparent shadow to switch it off, as the portals variant does. */
    --sfx-fp-search-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    /* Breathing room around the scrolling list, so the first row is not flush against the
       search field and the last is not flush against the panel edge. */
    --sfx-fp-list-padding: 4px 0;

    /* → canonical dam-ui tokens */
    --sfx-foreground: var(--sfx-fp-fg);
    --sfx-muted-foreground: var(--sfx-fp-muted);
    --sfx-primary: var(--sfx-fp-accent);
    --sfx-primary-10: var(--sfx-fp-accent-soft);
    --sfx-primary-foreground: #fff;
    --sfx-destructive: var(--sfx-fp-danger);
    --sfx-destructive-foreground: #fff;
    --sfx-background: var(--sfx-fp-bg);
    --sfx-card: var(--sfx-fp-bg);
    --sfx-popover: var(--sfx-fp-bg);
    --sfx-border: var(--sfx-fp-border);
    --sfx-input: var(--sfx-fp-border);
    --sfx-muted: var(--sfx-fp-hover);
    --sfx-ring: var(--sfx-fp-accent);
    --sfx-radius: var(--sfx-fp-radius);
    --sfx-radius-sm: 6px;
    --sfx-radius-lg: 12px;
    --sfx-font-size-sm: 0.875rem;
    /* Inherits by default: embedded in an app the picker should read as part of it. A
       standalone consumer can pin a family here instead. */
    --sfx-fp-font-family: inherit;
    --sfx-font-family: var(--sfx-fp-font-family);

    display: block;
    color: var(--sfx-fp-fg);
    font-family: var(--sfx-fp-font-family);
    font-size: var(--sfx-font-size-sm);
  }

  /*
   * The "portals" shape, measured from jolipage-next-js
   * (features/admin/folders-selector): roomier rows, 16px indent applied inside the row so
   * the highlight stays full-bleed, a 20px chevron that swaps glyph instead of rotating,
   * and a folder icon on every row. Colours are deliberately not set here — those come from
   * the host's palette either way.
   */
  :host([variant='portals']) {
    --sfx-fp-indent: 16px;
    --sfx-fp-row-padding-left: 12px;
    --sfx-fp-row-padding-right: 12px;
    --sfx-fp-row-padding-y: 8px;
    --sfx-fp-row-radius: 4px;
    --sfx-fp-row-gap: 8px;
    --sfx-fp-row-font-size: 14px;
    --sfx-fp-row-line-height: 20px;
    --sfx-fp-folder-icon-display: inline-flex;
    --sfx-fp-chevron-box: 20px;
    --sfx-fp-chevron-size: 20px;
    --sfx-fp-icon-chevron-open: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>');
    --sfx-fp-body-max-height: 320px;
    --sfx-fp-list-padding: 0;
    --sfx-fp-search-height: 36px;
    --sfx-fp-search-font-size: 14px;
    --sfx-fp-search-padding-x: 16px;
    --sfx-fp-search-gap: 8px;
    --sfx-fp-search-shadow: 0 0 #0000;
  }

  /* Portals swaps chevron-right for chevron-down rather than rotating one glyph. */
  :host([variant='portals']) .tree-toggle .chev.open {
    transform: none;
    mask-image: var(--sfx-fp-icon-chevron-open);
    -webkit-mask-image: var(--sfx-fp-icon-chevron-open);
  }

  :host([hidden]) {
    display: none;
  }

  *:focus-visible {
    outline: 2px solid var(--sfx-fp-accent);
    outline-offset: 1px;
    border-radius: 4px;
  }

  /* Host-supplied chrome: a title, a sort control, a "collapse all" button. Given no
     assigned nodes a slot occupies no space, so these cost nothing when unused. */
  slot[name='header']::slotted(*),
  slot[name='footer']::slotted(*) {
    display: block;
  }

  /* ── toolbar ─────────────────────────────────────────────────────────────── */
  .toolbar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-bottom: 1px solid var(--sfx-fp-border);
  }
  .search {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(--sfx-fp-search-gap);
    padding: 0 var(--sfx-fp-search-padding-x);
    border: 1px solid var(--sfx-fp-search-border);
    border-radius: var(--sfx-fp-radius);
    background: var(--sfx-fp-search-bg);
    box-shadow: var(--sfx-fp-search-shadow);
  }
  .search > sfx-icon {
    flex: 0 0 auto;
  }
  .search:focus-within {
    border-color: var(--sfx-fp-search-focus-border);
    /* The resting shadow is repeated here: box-shadow replaces, it does not stack. */
    box-shadow:
      0 0 0 var(--sfx-fp-focus-ring-offset) var(--sfx-fp-focus-ring-offset-color),
      0 0 0 calc(var(--sfx-fp-focus-ring-offset) + var(--sfx-fp-focus-ring-width))
        var(--sfx-fp-focus-ring),
      var(--sfx-fp-search-shadow);
  }
  .search {
    box-sizing: border-box;
    min-height: var(--sfx-fp-search-height);
  }
  .search input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: none;
    padding: 0;
    font: inherit;
    font-size: var(--sfx-fp-search-font-size);
    color: var(--sfx-fp-search-color);
    background: transparent;
  }
  .search input::placeholder {
    color: var(--sfx-fp-placeholder);
    opacity: 1;
  }
  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border: 0;
    border-radius: 4px;
    background: none;
    color: var(--sfx-fp-muted);
    cursor: pointer;
  }
  .icon-btn:hover {
    background: var(--sfx-fp-hover);
  }

  /* ── chips ───────────────────────────────────────────────────────────────── */
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 8px;
    border-bottom: 1px solid var(--sfx-fp-border);
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    max-width: 100%;
    padding: 2px 4px 2px 8px;
    border: 1px solid var(--sfx-fp-accent-soft);
    border-radius: 6px;
    background: var(--sfx-fp-accent-soft);
  }
  .chip span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .chips-clear {
    margin-left: auto;
    border: 0;
    background: none;
    color: var(--sfx-fp-muted);
    font: inherit;
    cursor: pointer;
  }

  /* ── body ────────────────────────────────────────────────────────────────── */
  .body {
    max-height: var(--sfx-fp-body-max-height);
    padding: var(--sfx-fp-list-padding);
    overflow: auto;
  }

  /* ── tree ────────────────────────────────────────────────────────────────── */
  .tree-row {
    display: flex;
    align-items: center;
    /* Also separates the disclosure control from the label — with icons hidden the label's
       own gap has nothing to apply between, so the row must own this one. */
    gap: var(--sfx-fp-row-gap);
    border-radius: var(--sfx-fp-row-radius);
  }
  .tree-row:hover {
    background: var(--sfx-fp-hover);
  }
  .tree-row[aria-selected='true'] {
    background: var(--sfx-fp-accent-soft);
  }
  .tree-row[aria-selected='true'] .tree-label {
    color: var(--sfx-fp-accent);
  }
  .tree-row[aria-disabled='true'] {
    opacity: 0.45;
  }
  .tree-row[aria-disabled='true'] .tree-label {
    cursor: not-allowed;
  }
  .tree-toggle,
  .tree-spacer {
    flex: 0 0 var(--sfx-fp-chevron-box);
    width: var(--sfx-fp-chevron-box);
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: none;
    color: var(--sfx-fp-muted);
    cursor: pointer;
  }
  .tree-toggle .chev {
    display: block;
    width: var(--sfx-fp-chevron-size);
    height: var(--sfx-fp-chevron-size);
    background: currentColor;
    mask: var(--sfx-fp-icon-chevron) center / contain no-repeat;
    -webkit-mask: var(--sfx-fp-icon-chevron) center / contain no-repeat;
    transition: transform 0.12s;
  }
  .tree-toggle .chev.open {
    transform: rotate(90deg);
  }
  .tree-label {
    display: flex;
    align-items: center;
    gap: var(--sfx-fp-row-gap);
    flex: 1;
    min-width: 0;
    /* No left padding: the gap after the chevron is --sfx-fp-row-gap, and padding here
       would push the label away from the disclosure control it belongs to. */
    padding: var(--sfx-fp-row-padding-y) var(--sfx-fp-row-padding-right) var(--sfx-fp-row-padding-y)
      0;
    font-size: var(--sfx-fp-row-font-size);
    line-height: var(--sfx-fp-row-line-height);
    cursor: pointer;
  }
  .tree-label > sfx-icon {
    flex: 0 0 auto;
  }
  /* The root row keeps its icon even when rows are icon-less. */
  .tree-label > sfx-icon.folder-icon {
    display: var(--sfx-fp-folder-icon-display);
  }
  .truncate {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .row-spinner {
    flex: 0 0 auto;
    padding-right: 6px;
  }
  .show-more {
    border: 0;
    background: none;
    color: var(--sfx-fp-accent);
    font: inherit;
    padding: 4px 0;
    cursor: pointer;
  }

  /* ── search results ──────────────────────────────────────────────────────── */
  .result {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 8px;
    border: 0;
    background: none;
    font: inherit;
    color: inherit;
    text-align: left;
    cursor: pointer;
  }
  .result:hover {
    background: var(--sfx-fp-hover);
  }
  .result[aria-disabled='true'] {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .result-text {
    min-width: 0;
    flex: 1;
  }
  .result-path {
    display: block;
    color: var(--sfx-fp-muted);
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  mark {
    background: #fef3c7;
    color: inherit;
    border-radius: 2px;
  }

  /* ── create-folder input ─────────────────────────────────────────────────── */
  .new-folder {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 4px;
  }
  .new-folder input {
    flex: 1;
    min-width: 0;
    padding: 3px 6px;
    border: 1px solid var(--sfx-fp-accent);
    border-radius: 4px;
    font: inherit;
    color: inherit;
    outline: none;
  }
  .new-folder input.invalid {
    border-color: var(--sfx-fp-danger);
  }
  .field-error {
    color: var(--sfx-fp-danger);
    font-size: 12px;
    padding: 2px 8px 6px;
  }

  /* ── states / footer ─────────────────────────────────────────────────────── */
  .state {
    padding: 16px 8px;
    color: var(--sfx-fp-muted);
    text-align: center;
  }
  .hint {
    padding: 6px 8px;
    color: var(--sfx-fp-muted);
    font-size: 12px;
  }
  .footer {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-top: 1px solid var(--sfx-fp-border);
  }
  .link-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border: 0;
    background: none;
    color: var(--sfx-fp-accent);
    font: inherit;
    cursor: pointer;
    padding: 0;
  }
  .link-btn[disabled] {
    color: var(--sfx-fp-muted);
    cursor: not-allowed;
  }
  .dest {
    margin-left: auto;
    color: var(--sfx-fp-muted);
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dest code {
    background: var(--sfx-fp-bg-alt);
    padding: 1px 5px;
    border-radius: 4px;
    color: var(--sfx-fp-fg);
  }
  .panel {
    border: 1px solid var(--sfx-fp-border);
    border-radius: var(--sfx-fp-radius);
    background: var(--sfx-fp-bg);
    overflow: hidden;
  }
  :host([presentation='modal']) .panel {
    border: 0;
    border-radius: 0;
  }

  /* Was an inline style attribute on <sfx-dialog>, which a strict style-src drops — the
     modal then fell back to the dialog's own default width. */
  sfx-dialog {
    --sfx-dialog-max-width: 460px;
  }

  ${me}
`;function ve(t){return t.selected.length?l`
    <div class="chips">
      ${I(t.selected,e=>e.path,e=>l`
          <span class="chip">
            <span>${e.name}</span>
            <button
              class="icon-btn"
              type="button"
              aria-label=${t.removeLabel(e.name)}
              @click=${()=>t.onRemove(e.path)}
            >
              <sfx-icon name="close" .size=${14}></sfx-icon>
            </button>
          </span>
        `)}
      <button class="chips-clear" type="button" @click=${t.onClearAll}>
        ${t.clearAllLabel}
      </button>
    </div>
  `:h}const C=new WeakMap,ye=J(class extends ee{render(t){return h}update(t,[e]){var s;const r=e!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=e,this.ht=(s=t.options)==null?void 0:s.host,this.rt(this.ct=t.element)),h}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let r=C.get(e);r===void 0&&(r=new WeakMap,C.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=C.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function we(t){const e=s=>{const o=s;o&&requestAnimationFrame(()=>{o.focus(),o.select()})},r=s=>{t.onCommit(s.target.value)};return l`
    <div class="new-folder" data-depth=${R(t.depth)}>
      <sfx-icon name="folder-plus" .size=${16}></sfx-icon>
      <input
        type="text"
        class=${t.error?"invalid":""}
        .value=${t.defaultName}
        ?disabled=${t.busy}
        aria-invalid=${t.error?"true":"false"}
        ${ye(e)}
        @keydown=${s=>{s.key==="Enter"?(s.preventDefault(),r(s)):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),t.onCancel())}}
      />
      ${t.busy?l`<sfx-spinner .size=${14}></sfx-spinner>`:h}
    </div>
    ${t.error?l`<div class="field-error">${t.error}</div>`:h}
  `}function ke(t){return!t.showCreate&&!t.destinationPath?h:l`
    <div class="footer">
      ${t.showCreate?l`<button
            class="link-btn"
            type="button"
            ?disabled=${!t.createEnabled}
            @click=${t.onCreateClick}
          >
            <sfx-icon name="plus" .size=${14}></sfx-icon>${t.createLabel}
          </button>`:h}
      ${t.destinationPath?l`<span class="dest">
            ${t.destinationLabel} <code>${t.destinationPath}</code>
          </span>`:h}
    </div>
  `}function P(t){return l`<div class="state">${t}</div>`}function $e(t,e){const r=e.trim().toLowerCase();if(!r||!t)return[{text:t,match:!1}];const s=t.toLowerCase(),o=[];let a=0;for(;;){const i=s.indexOf(r,a);if(i===-1)break;i>a&&o.push({text:t.slice(a,i),match:!1}),o.push({text:t.slice(i,i+r.length),match:!0}),a=i+r.length}return o.length?(a<t.length&&o.push({text:t.slice(a),match:!1}),o):[{text:t,match:!1}]}function Se(t){return t.status==="loading"?l`<div class="body">${P(t.labels.loading)}</div>`:t.status==="error"?l`<div class="body">${P(t.labels.error)}</div>`:t.results.length?l`
    <div class="body" role="listbox">
      ${I(t.results,e=>e.path,e=>Pe(e,t))}
      ${t.truncated?l`<div class="hint">${t.labels.truncated}</div>`:h}
    </div>
  `:l`<div class="body">${P(t.labels.empty)}</div>`}function Pe(t,e){const r=e.disabledOf(t),s=r!==null,o=e.selectedPaths.has(t.path),a=t.path==="/";return l`
    <button
      class="result"
      type="button"
      role="option"
      aria-selected=${String(o)}
      aria-disabled=${String(s)}
      title=${s?e.labels.disabled(r,t):h}
      @click=${()=>!s&&e.onSelect(t)}
    >
      <sfx-icon name="folder" .size=${16}></sfx-icon>
      <span class="result-text">
        <span class="truncate">
          ${a?e.labels.rootDisplay:$e(t.name,e.query).map(i=>i.match?l`<mark>${i.text}</mark>`:i.text)}
        </span>
        ${a?h:l`<span class="result-path">${t.path}</span>`}
      </span>
      ${e.checkingPath===t.path?l`<sfx-spinner .size=${14}></sfx-spinner>`:h}
    </button>
  `}function Ce(t){const{query:e}=t;return l`
    <div class="toolbar">
      <div class="search">
        <sfx-icon name="search" .size=${16}></sfx-icon>
        <input
          type="text"
          .value=${e}
          placeholder=${t.placeholder}
          ?disabled=${t.disabled}
          @input=${r=>t.onInput(r.target.value)}
        />
        ${e?l`<button
              class="icon-btn"
              type="button"
              aria-label=${t.clearLabel}
              @click=${t.onClear}
            >
              <sfx-icon name="close" .size=${14}></sfx-icon>
            </button>`:h}
      </div>
    </div>
  `}function Fe(t){return l`
    <div class="body" role="tree" aria-multiselectable=${t.mode==="multi"}>
      ${I(t.rows,e=>e.folder.path,(e,r)=>Ee(e,r,t))}
    </div>
  `}function Ee(t,e,r){var g,w;const{folder:s,depth:o,expanded:a,expandable:i,disabledReason:x}=t,u=x!==null,n=r.selectedPaths.has(s.path),m=t.status==="loading",b=()=>{u||r.handlers.onSelect(t)};return l`
    <!-- role="none" (not "group"): the DOM is flat, so hierarchy is carried by
         aria-level/posinset/setsize. A real "group" here would announce every node as a
         one-item group and break tree traversal. -->
    <div role="none">
      <div
        class="tree-row"
        role="treeitem"
        aria-level=${o+1}
        aria-posinset=${t.posInSet}
        aria-setsize=${t.setSize}
        aria-expanded=${i?String(a):h}
        aria-selected=${String(n)}
        aria-disabled=${String(u)}
        data-depth=${R(o)}
      >
        ${i?l`<button
              class="tree-toggle"
              type="button"
              tabindex="-1"
              aria-label=${a?r.labels.collapse:r.labels.expand}
              ?disabled=${u||m}
              @click=${v=>{v.stopPropagation(),u||r.handlers.onToggle(s.path)}}
            >
              ${m?l`<sfx-spinner .size=${14}></sfx-spinner>`:l`<span class="chev ${a?"open":""}"></span>`}
            </button>`:l`<span class="tree-spacer"></span>`}

        <div
          class="tree-label"
          role="button"
          tabindex=${!u&&e===r.tabStopIndex?"0":"-1"}
          data-index=${e}
          title=${u?r.labels.disabled(t):h}
          @click=${b}
        >
          ${r.mode==="multi"&&!u?l`<sfx-checkbox
                ?checked=${n}
                tabindex="-1"
                @click=${v=>v.stopPropagation()}
                @sfx-toggle=${v=>{v.stopPropagation(),b()}}
              ></sfx-checkbox>`:h}
          <sfx-icon
            class=${t.isRoot?"root-icon":"folder-icon"}
            name=${a?"folder-open":"folder"}
            .size=${16}
          ></sfx-icon>
          <span class="truncate">${s.name}</span>
        </div>

        ${r.checkingPath===s.path?l`<span class="row-spinner"><sfx-spinner .size=${14}></sfx-spinner></span>`:h}
      </div>

      ${((w=(g=r.handlers).renderCreateUnder)==null?void 0:w.call(g,t))??h}
      ${t.partial&&a?l`<button
            class="show-more"
            type="button"
            data-depth=${R(o+1)}
            @click=${()=>r.handlers.onLoadMore(s.path)}
          >
            ${r.labels.showMore}
          </button>`:h}
    </div>
  `}var Re=Object.defineProperty,f=(t,e,r,s)=>{for(var o=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(o=i(e,r,o)||o);return o&&Re(e,r,o),o};const Te=300,Ie={async listChildren(){return{folders:[],hasMore:!1}}},L=class L extends V{constructor(){super(...arguments),this.variant="hub",this.mode="single",this.presentation="inline",this.open=!1,this.rootPath="/",this.autoFocusSearch=!1,this.loading=!1,this.query="",this.internalSelection=[],this.activeIndex=-1,this.creatingUnder=null,this.createBusy=!1,this.createError=null,this.store=new D({source:Ie}),this.treeController=new ge(this,this.store),this.i18nController=new ie(this),this.controlled=!1,this.rebuildSeq=0,this.lastQuery="",this.onTreeFocusIn=e=>{var o,a;const r=(a=(o=e.target)==null?void 0:o.closest)==null?void 0:a.call(o,".tree-label"),s=Number(r==null?void 0:r.getAttribute("data-index"));Number.isInteger(s)&&s!==this.activeIndex&&(this.activeIndex=s)},this.onTreeKeyDown=e=>{if(this.searching||this.creatingUnder||e.target instanceof HTMLInputElement)return;const r=this.rows,s=he(r,this.activeIndex,e.key);if(s)switch(e.preventDefault(),s.type){case"move":this.activeIndex=s.index,this.pendingFocusIndex=s.index;break;case"expand":case"collapse":this.toggleRow(s.path);break;case"select":{const o=r[s.index];o&&!o.disabledReason&&this.selectFolder(o.folder);break}case"cancel":this.emit("sfx-folder-cancel",{}),this.setOpen(!1);break}}}connectedCallback(){var e;super.connectedCallback(),B(((e=this.config)==null?void 0:e.locale)||navigator.language||"en")}disconnectedCallback(){this.searchTimer&&clearTimeout(this.searchTimer),super.disconnectedCallback()}firstUpdated(){this.autoFocusSearch&&this.presentation!=="modal"&&this.focusSearch()}willUpdate(e){e.has("value")&&this.value!==void 0&&(this.controlled=!0)}updated(e){var s,o,a,i,x;if(e.has("config")){const u=ze(this.config),n=u!==this.lastConfigKey||((s=this.config)==null?void 0:s.client)!==((o=this.lastConfig)==null?void 0:o.client),m=((a=this.config)==null?void 0:a.locale)!==((i=this.lastConfig)==null?void 0:i.locale);this.lastConfig=this.config,this.lastConfigKey=u,m&&((x=this.config)!=null&&x.locale)&&B(this.config.locale),n&&!this.source&&this.rebuildStore()}if(e.has("source")&&this.source!==this.lastSource){const u=this.lastSource;this.lastSource=this.source,this.source&&u?this.store.setSource(this.source):this.rebuildStore()}e.has("rootPath")&&!e.has("config")&&!e.has("source")&&this.rebuildStore(),this.revealPath&&this.revealPath!==this.lastRevealPath&&(this.lastRevealPath=this.revealPath,this.store.reveal(this.revealPath)),e.has("open")&&this.open&&this.presentation==="modal"&&this.focusSearch(),e.has("query")&&this.query!==this.lastQuery&&this.runQuery(this.query);const r=this.treeState.error;if(r&&r!==this.lastStoreError?(this.lastStoreError=r,this.emit("sfx-folder-error",{code:"load",message:r})):r||(this.lastStoreError=void 0),this.pendingFocusIndex!==void 0){const u=this.pendingFocusIndex;this.pendingFocusIndex=void 0,this.focusRow(u)}}async rebuildStore(){var s;const e=this.rebuildSeq+=1;let r=this.source;if(!r){const o=((s=this.config)==null?void 0:s.client)??await this.createClient();if(!o||e!==this.rebuildSeq)return;this.client=o,r=M(o)}this.store=new D({source:r,rootPath:this.rootPath}),this.treeController.setStore(this.store),await this.store.loadChildren(this.normalizedRoot),this.revealPath&&await this.store.reveal(this.revealPath)}async createClient(){var e;if((e=this.config)!=null&&e.auth)try{return await X.create(Y(this.config.auth),this.config.apiDomain)}catch(r){this.emitError("load",r);return}}get featureFlags(){return{...re,confirm:this.presentation==="modal",...this.features}}get normalizedRoot(){var e;return((e=this.rootPath)==null?void 0:e.replace(/\/+$/,""))||"/"}get treeState(){return this.treeController.state}get selection(){return this.controlled?(this.value??[]).map(e=>this.selectionForPath(e)):this.internalSelection}get selectedPaths(){return new Set(this.selection.map(e=>e.path))}get rows(){return de({state:this.treeState,rootPath:this.normalizedRoot,rootLabel:this.rootLabel??d("folderPicker.root","Root"),showRoot:this.featureFlags.root,disabled:this.disabled,sort:this.sort,filter:this.filter})}get searching(){return this.treeState.search.query.length>0}get searchResults(){const{results:e,query:r}=this.treeState.search,s=E(e,this.filter);if(!this.featureFlags.root)return[...s];const o=this.rootLabel??d("folderPicker.root","Root");if(!(r==="/"||o.toLowerCase().includes(r.toLowerCase())))return[...s];const i=j(this.normalizedRoot,o);return[i,...s.filter(x=>x.path!==i.path)]}selectionForPath(e){const r=this.findFolder(e);if(r)return{path:r.path,uuid:r.uuid||void 0,name:r.name,folder:r};const s=e===this.normalizedRoot?this.rootLabel??d("folderPicker.root","Root"):e.split("/").filter(Boolean).pop()??e;return{path:e,name:s}}findFolder(e){for(const r of Object.values(this.treeState.children)){const s=r.find(o=>o.path===e);if(s)return s}return this.treeState.search.results.find(r=>r.path===e)}emit(e,r){this.dispatchEvent(new CustomEvent(e,{detail:r,bubbles:!0,composed:!0}))}emitError(e,r,s){this.emit("sfx-folder-error",{code:e,message:r instanceof Error?r.message:String(r),path:s})}commitSelection(e,r){this.controlled||(this.internalSelection=e),this.emit("sfx-folder-select",{mode:this.mode,selection:r,selected:e})}async selectFolder(e){if(!await this.passesPermissionCheck(e))return;const r={path:e.path,uuid:e.uuid||void 0,name:e.name,folder:e};if(this.mode==="multi"){const s=this.selection,a=s.some(i=>i.path===e.path)?s.filter(i=>i.path!==e.path):[...s,r];this.commitSelection(a,r);return}this.commitSelection([r],r),this.featureFlags.confirm||this.setOpen(!1)}async passesPermissionCheck(e){const r=this.permissions;if(!(r!=null&&r.required.length))return!0;this.checkingPath=e.path;try{const s=r.check?await r.check(e):!e.uuid||(await this.sourceCheck(e.uuid,r.required)??!0);return s||this.emit("sfx-folder-error",{code:"permission",message:d("folderPicker.permissionDenied","You're not allowed to select this folder"),path:e.path}),s}catch(s){return this.emitError("permission-check",s,e.path),!1}finally{this.checkingPath=void 0}}async sourceCheck(e,r){var o;const s=this.source??(this.client?M(this.client):void 0);return(o=s==null?void 0:s.checkPermissions)==null?void 0:o.call(s,e,r)}removeSelected(e){const r=this.selection.filter(s=>s.path!==e);this.commitSelection(r,null)}clearSelection(){this.commitSelection([],null)}setOpen(e){this.presentation!=="modal"||this.open===e||(this.open=e,this.emit("sfx-folder-open-change",{open:e}))}toggleRow(e){const r=this.treeState.expanded.has(e);this.store.toggle(e),this.emit("sfx-folder-expand",{path:e,expanded:!r})}onSearchInput(e){this.query=e,this.runQuery(e)}runQuery(e){if(this.lastQuery=e,this.searchTimer&&clearTimeout(this.searchTimer),!e.trim()){this.store.clearSearch();return}this.searchTimer=setTimeout(()=>{this.store.runSearch(e).then(()=>{const{results:r,truncated:s,query:o}=this.store.getState().search;this.emit("sfx-folder-search",{query:o,resultCount:r.length,truncated:s})})},Te)}clearSearch(){this.searchTimer&&clearTimeout(this.searchTimer),this.query="",this.lastQuery="",this.store.clearSearch()}collapseAll(){this.store.collapseAll()}get createTarget(){var r;const e=(r=this.selection[0])==null?void 0:r.path;return e||(this.featureFlags.root?this.normalizedRoot:null)}openCreateInput(){this.createError=null,this.creatingUnder=this.createTarget}async commitCreate(e){const r=this.creatingUnder;if(!r)return;const s=this.treeState.children[r]??[],o=xe(e,s);if(!o.ok){this.createError=o.reason;return}this.createBusy=!0,this.createError=null;try{const a=await this.store.createFolder(o.value,r);this.creatingUnder=null,this.emit("sfx-folder-create",{folder:{path:a.path,uuid:a.uuid||void 0,name:a.name,folder:a},parentPath:r}),await this.selectFolder(a)}catch(a){this.emitError("create",a,r)}finally{this.createBusy=!1}}createErrorText(e){switch(e){case"empty":return d("folderPicker.nameRequired","Folder name is required");case"duplicate":return d("folderPicker.nameDuplicate","A folder with this name already exists here");default:return d("folderPicker.nameInvalid","Folder name cannot contain /, \\ or %")}}focusRow(e){const r=this.renderRoot.querySelector(`.tree-label[data-index="${e}"]`);r==null||r.focus(),r==null||r.scrollIntoView({block:"nearest"})}focusSearch(){this.featureFlags.search&&requestAnimationFrame(()=>{var e;(e=this.renderRoot.querySelector(".search input"))==null||e.focus()})}render(){if(this.presentation==="modal"&&!this.open)return h;const e=this.renderPanel();return this.presentation==="modal"?this.renderModal(e):e}renderModal(e){return l`
      <sfx-dialog
        kind="confirm"
        heading=${this.heading??d("folderPicker.heading","Select a folder")}
        confirmLabel=${this.confirmLabel??d("folderPicker.confirm","Select")}
        cancelLabel=${this.cancelLabel??d("folderPicker.cancel","Cancel")}
        .confirmDisabled=${!this.selection.length}
        .loading=${this.loading}
        .error=${this.errorMessage??null}
        @sfx-dialog-confirm=${()=>{this.emit("sfx-folder-confirm",{selection:this.selection[0]??null,selected:this.selection}),this.setOpen(!1)}}
        @sfx-dialog-cancel=${()=>{this.emit("sfx-folder-cancel",{}),this.setOpen(!1)}}
      >
        ${e}
      </sfx-dialog>
    `}renderPanel(){const e=this.featureFlags,r=this.selection;return l`
      <div class="panel" @keydown=${this.onTreeKeyDown} @focusin=${this.onTreeFocusIn}>
        <slot name="header"></slot>
        ${e.search?Ce({query:this.query,placeholder:d("folderPicker.searchPlaceholder","Search folders"),clearLabel:d("folderPicker.clearSearch","Clear search"),onInput:s=>this.onSearchInput(s),onClear:()=>this.clearSearch()}):h}
        ${this.mode==="multi"&&e.chips?ve({selected:r,clearAllLabel:d("folderPicker.clearAll","Clear all"),removeLabel:s=>d("folderPicker.remove","Remove")+" "+s,onRemove:s=>this.removeSelected(s),onClearAll:()=>this.clearSelection()}):h}
        ${this.searching?this.renderResults():this.renderTreeBody()}
        ${ke({showCreate:e.createFolder&&!this.searching,createEnabled:this.createTarget!==null&&!this.createBusy,createLabel:d("folderPicker.addFolder","Add new folder"),destinationPath:e.confirm&&this.mode==="single"&&r.length?r[0].path:void 0,destinationLabel:d("folderPicker.destination","Destination:"),onCreateClick:()=>this.openCreateInput()})}
        <slot name="footer"></slot>
      </div>
    `}renderTreeBody(){const e=this.treeState.nodeStatus[this.normalizedRoot];if(e==="loading"&&!this.treeState.children[this.normalizedRoot])return l`<div class="body"><div class="state"><sfx-spinner></sfx-spinner></div></div>`;if(e==="error"&&!this.treeState.children[this.normalizedRoot])return l`<div class="body">
        ${P(d("folderPicker.loadFailed","Could not load folders"))}
      </div>`;const r=this.rows;return Fe({rows:r,mode:this.mode,selectedPaths:this.selectedPaths,activeIndex:this.activeIndex,tabStopIndex:fe(r,this.activeIndex),checkingPath:this.checkingPath,labels:{expand:d("folderPicker.expand","Expand"),collapse:d("folderPicker.collapse","Collapse"),showMore:d("folderPicker.showMore","Show more"),disabled:s=>this.disabledTextFor(s.disabledReason,s.folder)},handlers:{onToggle:s=>this.toggleRow(s),onSelect:s=>void this.selectFolder(s.folder),onLoadMore:s=>void this.store.loadMore(s),renderCreateUnder:s=>this.creatingUnder===s.folder.path?we({depth:s.depth,defaultName:d("folderPicker.newFolder","New folder"),busy:this.createBusy,error:this.createError?this.createErrorText(this.createError):null,onCommit:o=>void this.commitCreate(o),onCancel:()=>{this.creatingUnder=null,this.createError=null}}):h}})}renderResults(){const e=this.treeState.search;return Se({query:e.query,status:e.status,results:this.searchResults,truncated:e.truncated,mode:this.mode,selectedPaths:this.selectedPaths,checkingPath:this.checkingPath,disabledOf:r=>_(this.disabled,r),labels:{loading:d("folderPicker.searching","Searching…"),empty:d("folderPicker.noResults","No folders found"),error:d("folderPicker.searchFailed","Search failed"),truncated:d("folderPicker.refineSearch","More matches exist — refine your search"),rootDisplay:this.rootLabel??d("folderPicker.root","Root"),disabled:(r,s)=>this.disabledTextFor(r,s)},onSelect:r=>void this.selectFolder(r)})}disabledTextFor(e,r){return ne(this.disabled,e,r,s=>s==="prefix"?d("folderPicker.cantMoveIntoSelf","Can't move a folder into itself"):d("folderPicker.notSelectable","This folder cannot be selected"))}};L.styles=be;let c=L;f([p({attribute:!1})],c.prototype,"config");f([p({attribute:!1})],c.prototype,"features");f([p({attribute:!1})],c.prototype,"source");f([p({reflect:!0})],c.prototype,"variant");f([p({reflect:!0})],c.prototype,"mode");f([p({reflect:!0})],c.prototype,"presentation");f([p({type:Boolean,reflect:!0})],c.prototype,"open");f([p({attribute:!1})],c.prototype,"value");f([p({attribute:"root-path"})],c.prototype,"rootPath");f([p({attribute:"root-label"})],c.prototype,"rootLabel");f([p({attribute:"reveal-path"})],c.prototype,"revealPath");f([p({attribute:!1})],c.prototype,"sort");f([p({attribute:!1})],c.prototype,"filter");f([p({attribute:!1})],c.prototype,"disabled");f([p({attribute:!1})],c.prototype,"permissions");f([p()],c.prototype,"heading");f([p({attribute:"confirm-label"})],c.prototype,"confirmLabel");f([p({attribute:"cancel-label"})],c.prototype,"cancelLabel");f([p({type:Boolean,attribute:"auto-focus-search"})],c.prototype,"autoFocusSearch");f([p({type:Boolean})],c.prototype,"loading");f([p({attribute:"error-message"})],c.prototype,"errorMessage");f([p()],c.prototype,"query");f([k()],c.prototype,"internalSelection");f([k()],c.prototype,"activeIndex");f([k()],c.prototype,"creatingUnder");f([k()],c.prototype,"createBusy");f([k()],c.prototype,"createError");f([k()],c.prototype,"checkingPath");function ze(t){if(!t)return"";try{return JSON.stringify({apiDomain:t.apiDomain??null,auth:t.auth??null})}catch{return`unserializable:${Math.random()}`}}typeof window<"u"&&!customElements.get("sfx-folder-picker")&&customElements.define("sfx-folder-picker",c);const F=10,Le=[{path:"/Audio",byDefault:!0},{path:"/Avatars",byDefault:!0},{path:"/Text",byDefault:!1}];let y=[],S=null;function O(t){return t.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function T(){return y.map(t=>t.path)}function H(){return y.filter(t=>t.byDefault).map(t=>t.path)}function Ae(){const t=document.getElementById("code-container");if(!t)return;t.innerHTML="";const e=T().map(o=>`    '${o}',`).join(`
`),r=H().map(o=>`'${o}'`).join(", "),s=`folderFilterOptions: [
${e}
  ],${r?`
  defaultFilters: {
    folders: { values: [${r}] },
  },`:""}`;te("#code-container",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  ${s}
};`},{label:"React",lang:"tsx",code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
    ${s.replace(/\n/g,`
  `)}
  }}
/>`}])}function N(){const t=document.getElementById("fo-defaults");t&&(t.innerHTML=y.length?y.map((e,r)=>`
      <label class="tm-field" data-index="${r}" title="${O(e.path)}">
        <input type="checkbox" ${e.byDefault?"checked":""} />
        <span class="tm-field-label">${O(e.path)}</span>
      </label>`).join(""):'<p class="fo-empty">No folders yet — pick at least one with the Folders button.</p>')}const Be={render(){return`
      <div class="page-header">
        <h1>Allowed folders</h1>
        <p>Use <code>folderFilterOptions</code> to limit the picker to a set of folders. The Folders filter lists only these, the Assets view never searches outside them — not even after "Clear filters" — and the Folders tab opens on the picked ones. Combine with <code>defaultFilters.folders</code> to choose which ones are on when the picker opens.</p>
      </div>

      <section class="page-section">
        <div class="fo-panel">
          <div class="fo-header">
            <span>Allowed folders <span class="fo-count" id="fo-count"></span> <span class="fo-info" tabindex="0" role="img" aria-label="Ticked folders are selected in the Folders filter when the picker opens. If none is ticked, the picker searches all of them." data-tip="Ticked folders are selected in the Folders filter when the picker opens. If none is ticked, the picker searches all of them."><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></span></span>
            <div class="fo-dropdown" id="fo-dropdown">
              <button type="button" class="fo-trigger" id="fo-trigger" aria-haspopup="true" aria-expanded="false">
                <span class="fo-trigger-icon"><sfx-icon name="folder" size="16"></sfx-icon></span>
                <span class="fo-trigger-label">Folders</span>
                <span class="fo-trigger-chevron"><sfx-icon name="chevron-down" size="14"></sfx-icon></span>
              </button>
              <div class="fo-popover" id="fo-popover" hidden>
                <sfx-folder-picker id="fo-folder-picker" mode="multi" variant="portals"></sfx-folder-picker>
              </div>
            </div>
          </div>
          <p class="fo-hint">
            The picker shows assets only from these folders (<code>folderFilterOptions</code>). Ticked ones are selected when it opens (<code>defaultFilters.folders</code>).
          </p>
          <div id="fo-defaults" class="tm-fields"></div>
        </div>
        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
        <p class="helper-text">Up to ${F} allowed folders.</p>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){y=Le.map(n=>({...n}));const e=()=>{const n=document.getElementById("fo-count");n&&(n.textContent=`${y.length} / ${F}`),document.getElementById("open-btn").disabled=y.length===0,Ae()};N(),e(),document.getElementById("fo-defaults").addEventListener("change",n=>{var g;const m=n.target,b=y[Number((g=m.closest(".tm-field"))==null?void 0:g.dataset.index)];b&&(b.byDefault=m.checked,e())});const r=document.getElementById("fo-dropdown"),s=document.getElementById("fo-trigger"),o=document.getElementById("fo-popover"),a=document.getElementById("fo-folder-picker");a.features={root:!1},a.value=T(),a.addEventListener("sfx-folder-select",n=>{const m=n.detail.selected.map(g=>g.path).slice(0,F);a.value=m;const b=new Map(y.map(g=>[g.path,g.byDefault]));y=[...new Set(m.map(Z))].map(g=>({path:g,byDefault:b.get(g)??!1})),N(),e()});const i=n=>{o.hidden=!n,s.setAttribute("aria-expanded",String(n)),n&&(a.config={auth:q().auth})};s.addEventListener("click",()=>i(o.hidden));const x=n=>{!o.hidden&&!n.composedPath().includes(r)&&i(!1)},u=n=>{n.key==="Escape"&&!o.hidden&&i(!1)};document.addEventListener("pointerdown",x),document.addEventListener("keydown",u),S=()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",u)},document.getElementById("open-btn").addEventListener("click",()=>{const n=H();t.config=q({folderFilterOptions:T(),...n.length?{defaultFilters:{folders:{values:n}}}:{},onSelect:m=>alert(`Selected ${m.length} asset(s)`)}),t.open()})},destroy(){S==null||S(),S=null}};export{Be as default};
