import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import { getAssetThumbnailUrl, getVideoThumbnailUrl, getPdfPreviewUrl } from '../../utils/thumbnail';
import { formatFileSize, formatDimensions } from '../../utils/format';
import { getFileTypeFromMime, getFileTypeIconUrl, getDefaultFileTypeIconUrl, isFileTypeIcon, hasThumbnailSupport, hasTransparencySupport } from '../../utils/file-type';

@customElement('ap-asset-card')
export class ApAssetCard extends LitElement {
  static styles = css`
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
  `;

  @property({ type: Object }) asset!: Asset;
  @property({ type: Number }) index = 0;
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean }) multiSelect = true;

  private _handleSelect(e: MouseEvent) {
    e.stopPropagation();
    const path = e.composedPath();
    const isCheckbox = path.some(
      (el) => el instanceof HTMLElement && (el.classList.contains('check') || el.classList.contains('check-box'))
    );

    if (isCheckbox) {
      this.dispatchEvent(new CustomEvent('asset-select', {
        detail: { asset: this.asset, index: this.index, event: new MouseEvent('click', { ctrlKey: true, metaKey: true, shiftKey: e.shiftKey }) },
        bubbles: true,
      }));
      return;
    }
    this.dispatchEvent(new CustomEvent('asset-select', {
      detail: { asset: this.asset, index: this.index, event: e },
      bubbles: true,
    }));
  }

  private _handlePreview(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('asset-preview', {
      detail: { asset: this.asset },
      bubbles: true,
    }));
  }

  private _formatDuration(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const pad = (n: number) => String(n).padStart(2, '0');
    return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
  }

  private _handleQuickSelect(e: MouseEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('asset-quick-select', {
      detail: { asset: this.asset },
      bubbles: true,
    }));
  }

  render() {
    const a = this.asset;
    if (!a) return html``;
    const fileType = getFileTypeFromMime(a.type);
    const isVideo = fileType === 'video';
    const isPdf = a.extension?.toLowerCase() === 'pdf';
    const canThumbnail = hasThumbnailSupport(a.extension || '');

    let thumbUrl = '';
    if (isVideo) {
      thumbUrl = getVideoThumbnailUrl(a);
    } else if (isPdf) {
      thumbUrl = getPdfPreviewUrl(a);
    } else if (canThumbnail) {
      thumbUrl = getAssetThumbnailUrl(a);
    }

    const fallbackIconUrl = getFileTypeIconUrl(a.extension || '');
    const isTransparent = hasTransparencySupport(a.extension || '');

    return html`
      <div class="card" @click=${this._handleSelect}>
        <div class="thumbnail ${isTransparent && thumbUrl ? 'chess' : ''}">
          ${thumbUrl
            ? html`<img
                src=${thumbUrl}
                alt=${a.name}
                loading="lazy"
                class="thumb-img ${isTransparent ? 'transparent-asset' : ''}"
                @error=${(e: Event) => {
                  const img = e.target as HTMLImageElement;
                  const defaultIcon = getDefaultFileTypeIconUrl();
                  if (img.src !== fallbackIconUrl && img.src !== defaultIcon) {
                    img.src = fallbackIconUrl;
                    img.classList.add('icon-fallback');
                  } else if (img.src !== defaultIcon) {
                    img.src = defaultIcon;
                  }
                }}
              />`
            : html`<img
                src=${fallbackIconUrl}
                alt=${a.name}
                class="thumb-img icon-fallback"
                @error=${(e: Event) => {
                  const img = e.target as HTMLImageElement;
                  const defaultIcon = getDefaultFileTypeIconUrl();
                  if (img.src !== defaultIcon) {
                    img.src = defaultIcon;
                  }
                }}
              />`}
          ${isVideo && (a.info?.video_duration ?? a.info?.duration) != null ? html`<span class="duration">${this._formatDuration((a.info!.video_duration ?? a.info!.duration)!)}</span>` : nothing}
          <div class="overlay">
            <button class="overlay-btn" @click=${this._handlePreview} aria-label="Preview">
              <ap-icon name="preview" .size=${16}></ap-icon>
              Preview
            </button>
            <button class="overlay-btn select-btn" @click=${this._handleQuickSelect} aria-label="Select">
              <ap-icon name="select" .size=${16}></ap-icon>
              Select
            </button>
          </div>
          ${this.multiSelect ? html`
            <div class="check">
              <div class="check-box">
                <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
            </div>
          ` : nothing}
        </div>
        <div class="info">
          <div class="name" title=${a.name}>${a.name}</div>
          <div class="meta">${a.extension?.toUpperCase()}${(() => { const w = a.info?.img_w || a.info?.video_w; const h = a.info?.img_h || a.info?.video_h; const dim = formatDimensions(w, h); return dim ? ` · ${dim}` : ''; })()} · ${formatFileSize(a.size?.bytes || 0)}</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-asset-card': ApAssetCard;
  }
}
