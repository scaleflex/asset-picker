import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import type { Label } from '../../types/label.types';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import type { MetadataModelField, RegionalFilters } from '../../types/filter.types';
import { getAssetThumbnailUrl, getPdfPreviewUrl, addCdnParams, getFormattedPreviewUrl } from '../../utils/thumbnail';
import { formatFileSize, formatDate, formatDimensions } from '../../utils/format';
import { getFileTypeFromMime, getFileTypeIconUrl, hasTransparencySupport } from '../../utils/file-type';
import { getHlsUrl } from '../../utils/video';
import type Hls from 'hls.js';

@customElement('ap-preview-panel')
export class ApPreviewPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .panel {
      width: 420px;
      min-width: 420px;
      max-width: 100%;
      height: 100%;
      background: var(--ap-background, #fff);
      border-left: 1px solid var(--ap-border, #e4e4e7);
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
      padding: 16px;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
    }
    .panel-title {
      font-size: var(--ap-font-size-base, 1rem);
      font-weight: 600;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: none;
    }
    .header-actions {
      display: flex;
      gap: 4px;
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
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .icon-btn:hover:not(:disabled) {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .icon-btn:disabled {
      opacity: 0.3;
      cursor: default;
    }
    .icon-btn.selected {
      background: var(--ap-primary, #3b82f6);
      color: #fff;
    }
    .icon-btn.selected:hover {
      background: var(--ap-primary, #3b82f6);
      color: #fff;
      opacity: 0.9;
    }
    .preview-area {
      position: relative;
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--ap-muted, #f4f4f5);
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
      background: var(--ap-muted, #f4f4f5);
      z-index: 3;
    }
    .preview-loading .spinner {
      width: 24px;
      height: 24px;
      border: 2.5px solid var(--ap-border, #e4e4e7);
      border-top-color: var(--ap-primary, #3b82f6);
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
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      z-index: 2;
    }
    .nav-btn:hover:not(:disabled) {
      background: var(--ap-muted, #f4f4f5);
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
    .accordion {
      border-top: 1px solid var(--ap-border, #e4e4e7);
    }
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
      color: var(--ap-foreground, #09090b);
      text-align: left;
    }
    .accordion-trigger:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .accordion-chevron {
      transition: transform 200ms;
      color: var(--ap-muted-foreground, #71717a);
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
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
    }
    .meta-row:last-child {
      border-bottom: none;
    }
    .meta-label {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .meta-value {
      font-size: 0.8125rem;
      color: var(--ap-foreground, #09090b);
      min-width: 0;
      user-select: text;
      word-break: break-word;
    }
    @media (prefers-reduced-motion: reduce) {
      .panel { animation: none; }
      .accordion-chevron { transition: none; }
    }
  `;

  @property({ type: Object }) asset: Asset | null = null;
  @property({ type: Array }) assets: Asset[] = [];
  @property({ type: Array }) selectedIds: string[] = [];
  @property() containerToken = '';
  @property({ type: Boolean }) showMetadata = true;
  @property({ type: Array }) metadataFields: MetadataModelField[] = [];
  @property({ type: Array }) labels: Label[] = [];
  @property({ type: Object }) regionalFilters: RegionalFilters = {};
  @property({ type: Boolean }) multiSelect = true;
  @query('.preview-area') previewArea?: HTMLElement;
  @query('video') private _videoEl?: HTMLVideoElement;
  @state() private _isFullscreen = false;
  @state() private _fsImageLoaded = false;
  @state() private _previewLoading = false;
  @state() private _openSections = new Set<string>(['file-info', 'metadata']);
  private _hls: Hls | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._onFullscreenChange = this._onFullscreenChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    document.addEventListener('fullscreenchange', this._onFullscreenChange);
    document.addEventListener('keydown', this._onKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('fullscreenchange', this._onFullscreenChange);
    document.removeEventListener('keydown', this._onKeyDown);
    this._destroyHls();
  }

  private _onKeyDown(e: KeyboardEvent) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

    // Use composedPath to pierce shadow DOM and get the real target
    const origin = e.composedPath()[0] as HTMLElement;
    if (!origin) return;

    // Skip if user is focused on a form control or interactive widget
    const tag = origin.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (origin.getAttribute('role') === 'radio' || origin.getAttribute('role') === 'listbox') return;
    if (origin.isContentEditable) return;

    e.preventDefault();
    if (e.key === 'ArrowLeft') {
      this._prev();
    } else {
      this._next();
    }
  }

  private _destroyHls() {
    if (this._hls) {
      this._hls.destroy();
      this._hls = null;
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('asset')) {
      this._destroyHls();
      this._previewLoading = true;
      if (this.asset) {
        const fileType = getFileTypeFromMime(this.asset.type);
        if (fileType === 'video') {
          this._setupHls(this.asset);
        }
        // Non-media types have no load event, clear loading immediately
        if (fileType !== 'image' && fileType !== 'video') {
          this._previewLoading = false;
        }
      }
    }
  }

  private async _setupHls(asset: Asset) {
    const hlsUrl = getHlsUrl(asset);
    if (!hlsUrl) return; // No HLS available, fall back to native <video src>

    // Wait for the video element to be rendered
    await this.updateComplete;
    if (this.asset?.uuid !== asset.uuid) return;
    const videoEl = this._videoEl;
    if (!videoEl) return;

    // Safari supports HLS natively
    if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
      videoEl.src = hlsUrl;
      return;
    }

    // For Chrome/Firefox, use hls.js
    try {
      const { default: Hls } = await import('hls.js/dist/hls.light.mjs');
      if (!Hls.isSupported()) return;

      // Guard: asset may have changed during async import, or component disconnected
      if (this.asset?.uuid !== asset.uuid || !this.isConnected) return;

      const hls = new Hls();
      this._hls = hls;
      hls.loadSource(hlsUrl);
      hls.attachMedia(videoEl);
      hls.on(Hls.Events.ERROR, (_event: string, data: { fatal?: boolean }) => {
        if (data.fatal) {
          this._destroyHls();
          // Fall back to direct CDN playback
          videoEl.src = asset.url?.cdn || '';
        }
      });
    } catch {
      // hls.js not available, fall back to native playback
    }
  }

  private _onFullscreenChange() {
    this._isFullscreen = !!document.fullscreenElement;
    if (this._isFullscreen) {
      this._fsImageLoaded = false;
    }
  }

  private _close() {
    this.dispatchEvent(new CustomEvent('preview-close', { bubbles: true, composed: true }));
  }

  private _exitFullscreen() {
    document.exitFullscreen?.();
  }

  private _fullscreen() {
    const isPdf = this.asset?.extension?.toLowerCase() === 'pdf';
    if (isPdf && this.asset?.url?.cdn) {
      window.open(this.asset.url.cdn, '_blank', 'noopener');
      return;
    }
    this._fsImageLoaded = false;
    this.previewArea?.requestFullscreen?.();
  }

  private _select() {
    if (!this.asset) return;
    if (!this.multiSelect) {
      // Single-select: immediately confirm selection and close
      this.dispatchEvent(new CustomEvent('asset-quick-select', {
        detail: { asset: this.asset },
        bubbles: true,
        composed: true,
      }));
      return;
    }
    const index = this._getCurrentIndex();
    this.dispatchEvent(new CustomEvent('asset-select', {
      detail: { asset: this.asset, index, event: new MouseEvent('click', { ctrlKey: true, metaKey: true }) },
      bubbles: true,
      composed: true,
    }));
  }

  private _getCurrentIndex(): number {
    if (!this.asset || this.assets.length === 0) return -1;
    return this.assets.findIndex((a) => a.uuid === this.asset!.uuid);
  }

  private _navigateTo(asset: Asset) {
    this._fsImageLoaded = false;
    this.dispatchEvent(new CustomEvent('preview-navigate', {
      detail: { asset },
      bubbles: true,
      composed: true,
    }));
  }

  /** Check if an asset supports inline fullscreen preview (not PDF/other). */
  private _supportsFullscreen(asset: Asset): boolean {
    const ft = getFileTypeFromMime(asset.type);
    return ft === 'image' || ft === 'video' || ft === 'audio';
  }

  /**
   * Find the nearest navigable asset index in a given direction.
   * In fullscreen, skips assets that don't support fullscreen preview.
   * Returns -1 if no valid target exists.
   */
  private _findNavTarget(fromIdx: number, direction: -1 | 1): number {
    const end = direction === 1 ? this.assets.length : -1;
    for (let i = fromIdx + direction; i !== end; i += direction) {
      if (!this._isFullscreen || this._supportsFullscreen(this.assets[i])) {
        return i;
      }
    }
    return -1;
  }

  private _prev() {
    const idx = this._getCurrentIndex();
    if (idx <= 0) return;
    const target = this._findNavTarget(idx, -1);
    if (target >= 0) this._navigateTo(this.assets[target]);
  }

  private _next() {
    const idx = this._getCurrentIndex();
    if (idx < 0 || idx >= this.assets.length - 1) return;
    const target = this._findNavTarget(idx, 1);
    if (target >= 0) this._navigateTo(this.assets[target]);
  }

  private _getFullscreenImageUrl(a: Asset): string {
    const cdnUrl = a.url?.cdn;
    if (!cdnUrl) return getAssetThumbnailUrl(a) || '';
    // SVGs are vectors — use original URL directly to avoid CDN rasterization
    if (a.extension?.toLowerCase() === 'svg') return cdnUrl;
    const previewUrl = getFormattedPreviewUrl(cdnUrl, this.containerToken);
    return addCdnParams(previewUrl, {
      w: String(window.screen.width),
      dpr: String(window.devicePixelRatio || 1),
      org_if_sml: '1',
    });
  }

  private _getBlurDimensions(a: Asset): { width: string; height: string } {
    const imgW = a.info?.img_w;
    const imgH = a.info?.img_h;
    if (!imgW || !imgH) return { width: '100vw', height: '100vh' };

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / imgW, vh / imgH, 1);
    return { width: `${Math.round(imgW * scale)}px`, height: `${Math.round(imgH * scale)}px` };
  }

  private _onFsImageLoad() {
    this._fsImageLoaded = true;
  }

  private _getTagEntries(tags: Asset['tags']): Array<{ label: string; sid: string }> {
    if (!tags) return [];

    // tags can be: string[], Array<{ label, sid, ... }>, or { [lang]: Array<{ label, sid }> }
    if (Array.isArray(tags)) {
      return this._parseTagArray(tags);
    }

    // Language-keyed object: { "en": [{ label, sid }, ...] }
    const values = Object.values(tags);
    if (values.length > 0 && Array.isArray(values[0])) {
      // Flatten all language arrays, dedupe by sid
      const all = (values as Array<Array<{ label: string; sid: string }>>).flat();
      const seen = new Set<string>();
      return all.filter((t) => {
        if (!t.label || seen.has(t.sid)) return false;
        seen.add(t.sid);
        return true;
      });
    }

    // Simple Record<string, { label, sid }>
    return values
      .map((t: { label: string; sid: string }) => ({ label: t.label, sid: t.sid }))
      .filter((t) => t.label);
  }

  private _parseTagArray(tags: unknown[]): Array<{ label: string; sid: string }> {
    return tags.map((t) => {
      if (typeof t === 'string') return { label: t, sid: t };
      const obj = t as { label?: string; sid?: string; names?: Record<string, string> };
      const label = obj.label || Object.values(obj.names || {})[0] || '';
      return { label, sid: obj.sid || '' };
    }).filter((t) => t.label);
  }

  private _applyTagFilter(sid: string) {
    this.dispatchEvent(new CustomEvent('filter-update', {
      detail: { key: FILTER_KEYS.TAGS, values: [sid], operator: FILTER_OPERATORS.IS },
      bubbles: true,
      composed: true,
    }));
  }

  private _applyLabelFilter(sid: string) {
    this.dispatchEvent(new CustomEvent('filter-update', {
      detail: { key: FILTER_KEYS.LABELS, values: [sid], operator: FILTER_OPERATORS.IS },
      bubbles: true,
      composed: true,
    }));
  }

  private _toggleSection(id: string) {
    const next = new Set(this._openSections);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this._openSections = next;
  }

  private _renderFileInfoSection(a: Asset) {
    const rows = this._getFileInfoRows(a);
    if (rows.length === 0) return nothing;
    const isOpen = this._openSections.has('file-info');
    return html`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${isOpen ? 'true' : 'false'}
          @click=${() => this._toggleSection('file-info')}
        >
          <span>File info</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${isOpen ? 'open' : ''}">
          ${rows.map((r) => html`
            <div class="meta-row">
              <span class="meta-label" title=${r.label}>${r.label}</span>
              <span class="meta-value" title=${r.value}>${r.value}</span>
            </div>
          `)}
          ${this._renderTagsRow(a)}
          ${this._renderLabelsRow(a)}
        </div>
      </div>
    `;
  }

  private _renderAccordion(id: string, title: string, rows: Array<{ label: string; value: string; wrap?: boolean }>) {
    if (rows.length === 0) return nothing;
    const isOpen = this._openSections.has(id);
    return html`
      <div class="accordion">
        <button
          class="accordion-trigger"
          aria-expanded=${isOpen ? 'true' : 'false'}
          @click=${() => this._toggleSection(id)}
        >
          <span>${title}</span>
          <svg class="accordion-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
        <div class="accordion-content ${isOpen ? 'open' : ''}">
          ${rows.map((r) => html`
            <div class="meta-row">
              <span class="meta-label" title=${r.label}>${r.label}</span>
              <span class="meta-value" title=${r.value}>${r.value}</span>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  private _getFileInfoRows(a: Asset): Array<{ label: string; value: string }> {
    const rows: Array<{ label: string; value: string }> = [];
    rows.push({ label: 'File name', value: a.name });
    if (a.extension) rows.push({ label: 'Type', value: a.extension.toUpperCase() });
    if (a.size?.bytes) rows.push({ label: 'Size', value: formatFileSize(a.size.bytes) });
    if (a.info?.img_w) rows.push({ label: 'Dimensions', value: formatDimensions(a.info.img_w, a.info.img_h) });
    if (a.info?.video_w) rows.push({ label: 'Video resolution', value: `${a.info.video_w} x ${a.info.video_h}` });
    if (a.info?.duration) rows.push({ label: 'Duration', value: `${Math.round(a.info.duration)}s` });
    if (a.info?.color_space) rows.push({ label: 'Color space', value: a.info.color_space });
    if (a.created_at) rows.push({ label: 'Created', value: formatDate(a.created_at) });
    if (a.modified_at) rows.push({ label: 'Modified', value: formatDate(a.modified_at) });
    return rows;
  }

  /**
   * Build a lookup map from metadata field key → field definition.
   * Maps by key, ckey, and slug.
   */
  private _buildFieldMap(): Map<string, MetadataModelField> {
    const map = new Map<string, MetadataModelField>();
    for (const field of this.metadataFields) {
      map.set(field.key, field);
      if (field.ckey) map.set(field.ckey, field);
      if (field.slug) map.set(field.slug, field);
    }
    return map;
  }

  /**
   * Resolve a single slug like "@itm_v1_xxx@" to its label via possible_values.
   */
  private _resolveSlug(value: string, field: MetadataModelField): string {
    if (!field.possible_values?.length || !value.startsWith('@')) return value;
    const match = field.possible_values.find(
      (pv) => pv.internal_unique_value === value || pv.api_value === value,
    );
    return match?.label ?? value;
  }

  /**
   * Resolve a metadata field value, handling regional variants and slug→label mapping.
   */
  private _resolveFieldValue(rawValue: unknown, field: MetadataModelField): string {
    if (rawValue === undefined || rawValue === null || rawValue === '') return '';

    // Regional variant resolution
    if (field.regionalVariantsGroupUuid && typeof rawValue === 'object' && rawValue !== null && !Array.isArray(rawValue)) {
      const selectedVariant = this.regionalFilters[field.regionalVariantsGroupUuid];
      if (selectedVariant) {
        const regionalVal = (rawValue as Record<string, unknown>)[selectedVariant];
        if (regionalVal !== undefined && regionalVal !== null && regionalVal !== '') {
          // Recurse to resolve slugs within the regional value
          return this._resolveFieldValue(regionalVal, { ...field, regionalVariantsGroupUuid: undefined });
        }
      }
      return '';
    }

    // For select/multi-select, resolve slug values to labels
    if (field.possible_values?.length) {
      if (Array.isArray(rawValue)) {
        const resolved = rawValue.map((v) => this._resolveSlug(String(v), field)).filter(Boolean);
        return resolved.join(', ');
      }
      return this._resolveSlug(String(rawValue), field);
    }

    if (Array.isArray(rawValue)) return rawValue.join(', ');
    if (typeof rawValue === 'object') {
      const str = JSON.stringify(rawValue);
      return str === '{}' || str === '[]' ? '' : str;
    }
    return String(rawValue);
  }

  private _getAllMetadataRows(a: Asset): Array<{ label: string; value: string; wrap?: boolean }> {
    const rows: Array<{ label: string; value: string; wrap?: boolean }> = [];
    const fieldMap = this._buildFieldMap();
    const shownKeys = new Set<string>();

    // 1. Iterate metadata field definitions — resolve values from all sources
    if (this.metadataFields.length > 0) {
      const asset = a as unknown as Record<string, unknown>;
      for (const field of this.metadataFields) {
        const rawValue = asset[field.key]
          ?? (a.info?.metadata as Record<string, unknown> | undefined)?.[field.key]
          ?? (a.meta as Record<string, unknown> | undefined)?.[field.key];
        const strVal = this._resolveFieldValue(rawValue, field);
        if (!strVal) continue;
        shownKeys.add(field.key);
        if (field.slug) shownKeys.add(field.slug);
        const isLong = strVal.length > 50;
        rows.push({ label: field.label, value: strVal, wrap: isLong });
      }
    }

    // 2. Show remaining a.meta entries not covered by field definitions
    if (a.meta) {
      for (const [key, val] of Object.entries(a.meta)) {
        if (shownKeys.has(key)) continue;
        if (val === undefined || val === null || val === '') continue;

        // Try to find a matching field definition by key
        const field = fieldMap.get(key);
        if (field) {
          const strVal = this._resolveFieldValue(val, field);
          if (!strVal) continue;
          shownKeys.add(key);
          const isLong = strVal.length > 50;
          rows.push({ label: field.label, value: strVal, wrap: isLong });
        } else {
          // No field definition — show raw, but skip complex objects
          const strVal = typeof val === 'object' ? JSON.stringify(val) : String(val);
          if (!strVal || strVal === '{}' || strVal === '[]') continue;
          shownKeys.add(key);
          const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
          const isLong = strVal.length > 50;
          rows.push({ label, value: strVal, wrap: isLong });
        }
      }
    }

    // 3. Show remaining info.metadata entries not covered
    const metadata = a.info?.metadata;
    if (metadata && typeof metadata === 'object') {
      for (const [key, val] of Object.entries(metadata)) {
        if (shownKeys.has(key)) continue;
        if (val === undefined || val === null || val === '') continue;
        const field = fieldMap.get(key);
        if (field) {
          const strVal = this._resolveFieldValue(val, field);
          if (!strVal) continue;
          shownKeys.add(key);
          const isLong = strVal.length > 50;
          rows.push({ label: field.label, value: strVal, wrap: isLong });
        } else {
          const strVal = typeof val === 'object' ? JSON.stringify(val) : String(val);
          if (!strVal || strVal === '{}' || strVal === '[]') continue;
          shownKeys.add(key);
          const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
          const isLong = strVal.length > 50;
          rows.push({ label, value: strVal, wrap: isLong });
        }
      }
    }

    return rows;
  }

  private _getAssetLabels(a: Asset): Label[] {
    if (!a.labels || a.labels.length === 0) return [];
    return a.labels
      .map((sid) => this.labels.find((l) => l.sid === sid || l.uuid === sid))
      .filter((l): l is Label => !!l);
  }

  private _renderLabelsRow(a: Asset) {
    const resolved = this._getAssetLabels(a);
    if (resolved.length === 0) return nothing;
    return html`
      <div class="meta-row" style="flex-direction:column;gap:6px">
        <span class="meta-label">Labels</span>
        <div class="tags-list">
          ${resolved.map((label) => html`
            <ap-badge class="tag-link" style="--ap-muted: ${label.color}22; --ap-muted-foreground: ${label.color}" @click=${() => this._applyLabelFilter(label.sid || label.uuid)}>
              <span style="display:inline-flex;align-items:center;gap:4px">
                <ap-icon name="tag" .size=${12} style="color:${label.color}"></ap-icon>
                ${label.name}
              </span>
            </ap-badge>
          `)}
        </div>
      </div>
    `;
  }

  private _renderTagsRow(a: Asset) {
    const entries = this._getTagEntries(a.tags);
    if (entries.length === 0) return nothing;
    return html`
      <div class="meta-row" style="flex-direction:column;gap:6px">
        <span class="meta-label">Tags</span>
        <div class="tags-list">
          ${entries.map((t) => html`
            <ap-badge class="tag-link" @click=${() => this._applyTagFilter(t.sid)}>${t.label}</ap-badge>
          `)}
        </div>
      </div>
    `;
  }

  render() {
    const a = this.asset;
    if (!a) return nothing;

    const fileType = getFileTypeFromMime(a.type);
    const isImage = fileType === 'image';
    const isVideo = fileType === 'video';
    const isAudio = fileType === 'audio';
    const isPdf = a.extension?.toLowerCase() === 'pdf';
    const fallbackIconUrl = getFileTypeIconUrl(a.extension || '');
    const isTransparent = hasTransparencySupport(a.extension || '');

    const isSvg = a.extension?.toLowerCase() === 'svg';
    const thumbnailUrl = getAssetThumbnailUrl(a);
    const panelPreviewUrl = isImage
      ? (isSvg ? (a.url?.cdn || '') : (thumbnailUrl || getFormattedPreviewUrl(a.url?.cdn || '', this.containerToken)))
      : '';
    const fsPreviewUrl = isImage ? this._getFullscreenImageUrl(a) : '';

    const blurDims = isImage && !isSvg ? this._getBlurDimensions(a) : null;
    const videoSrc = isVideo ? (a.url?.cdn || '') : '';
    const videoPoster = isVideo ? (a.info?.video_thumbnail || a.info?.preview || '') : '';
    const pdfPreviewUrl = isPdf && !isImage ? getPdfPreviewUrl(a) : '';

    const currentIdx = this._getCurrentIndex();
    const hasPrev = currentIdx > 0 && this._findNavTarget(currentIdx, -1) >= 0;
    const hasNext = currentIdx >= 0 && this._findNavTarget(currentIdx, 1) >= 0;
    const showNav = this.assets.length > 1;

    return html`
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title" title=${a.name}>${a.name}</span>
          <div class="header-actions">
            <button class="icon-btn" @click=${this._fullscreen} ?disabled=${!isImage && !isVideo && !isAudio && !isPdf} aria-label="Fullscreen">
              <ap-icon name="fullscreen" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn ${this.asset && this.selectedIds.includes(this.asset.uuid) ? 'selected' : ''}" @click=${this._select} aria-label="Select">
              <ap-icon name="select" .size=${16}></ap-icon>
            </button>
            <button class="icon-btn" @click=${this._close} aria-label="Close">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          </div>
        </div>

        <div class="preview-area ${isImage && isTransparent ? 'chess' : ''}">
          ${showNav ? html`
            <button class="nav-btn prev" @click=${this._prev} ?disabled=${!hasPrev} aria-label="Previous">
              <ap-icon name="chevron-left" .size=${16}></ap-icon>
            </button>
            <button class="nav-btn next" @click=${this._next} ?disabled=${!hasNext} aria-label="Next">
              <ap-icon name="chevron-right" .size=${16}></ap-icon>
            </button>
          ` : nothing}
          ${this._isFullscreen ? html`
            <button class="fs-close-btn" @click=${this._exitFullscreen} aria-label="Exit fullscreen">
              <ap-icon name="close" .size=${16}></ap-icon>
            </button>
          ` : nothing}
          ${this._previewLoading ? html`<div class="preview-loading"><div class="spinner"></div></div>` : nothing}
          ${isImage ? html`
            <img
              src=${panelPreviewUrl}
              alt=${a.name}
              @load=${(e: Event) => { (e.target as HTMLImageElement).classList.remove('icon-fallback'); this._previewLoading = false; }}
              @error=${(e: Event) => {
                const img = e.target as HTMLImageElement;
                this._previewLoading = false;
                if (img.src !== fallbackIconUrl) {
                  img.src = fallbackIconUrl;
                  img.classList.add('icon-fallback');
                }
              }}
            />
            <div class="fs-wrapper">
              ${!isSvg ? html`
                <img
                  class="fs-blur ${this._fsImageLoaded ? 'hidden' : ''}"
                  src=${panelPreviewUrl}
                  alt=""
                  style="width:${blurDims!.width};height:${blurDims!.height}"
                />
              ` : nothing}
              <img
                class="fs-full ${isSvg || this._fsImageLoaded ? 'loaded' : ''}"
                src=${this._isFullscreen ? fsPreviewUrl : ''}
                alt=${a.name}
                style=${isSvg ? 'width:100vw;height:100vh' : ''}
                @load=${this._onFsImageLoad}
              />
            </div>
          ` : nothing}
          ${isVideo ? html`<video src=${videoSrc} poster=${videoPoster || nothing} controls @loadeddata=${() => { this._previewLoading = false; }} @error=${() => { this._previewLoading = false; }}></video>` : nothing}
          ${isAudio ? html`<audio src=${a.url?.cdn || ''} controls></audio>` : nothing}
          ${isPdf && !isImage ? html`
            <img
              src=${pdfPreviewUrl || fallbackIconUrl}
              alt=${a.name}
              class=${pdfPreviewUrl ? '' : 'icon-fallback'}
              @error=${(e: Event) => {
                const img = e.target as HTMLImageElement;
                if (img.src !== fallbackIconUrl) {
                  img.src = fallbackIconUrl;
                  img.classList.add('icon-fallback');
                }
              }}
            />
          ` : nothing}
          ${!isImage && !isVideo && !isAudio && !isPdf ? html`<img src=${fallbackIconUrl} alt=${a.name} class="icon-fallback" />` : nothing}
        </div>

        ${this._renderFileInfoSection(a)}
        ${this.showMetadata ? html`
          ${this._renderAccordion('metadata', 'Metadata', this._getAllMetadataRows(a))}
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-preview-panel': ApPreviewPanel;
  }
}
