import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import { getAssetThumbnailUrl, getVideoThumbnailUrl, getPdfPreviewUrl } from '../../utils/thumbnail';
import { formatFileSize, formatDate } from '../../utils/format';
import { getFileTypeFromMime, getFileTypeIconUrl, getDefaultFileTypeIconUrl, hasThumbnailSupport, hasTransparencySupport } from '../../utils/file-type';

@customElement('ap-asset-row')
export class ApAssetRow extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 32px 48px 1fr 100px 200px 120px 60px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    .thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      overflow: hidden;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .type {
      font-size: 0.8125rem;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc, .date {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
    .row:hover .actions {
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .thumb.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 12px 12px;
    }
    .check {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
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
  `;

  @property({ type: Object }) asset!: Asset;
  @property({ type: Number }) index = 0;
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean }) multiSelect = true;

  private _handleSelect(e: MouseEvent) {
    // Check if click was on the checkbox area
    const path = e.composedPath();
    const isCheckbox = path.some(
      (el) => el instanceof HTMLElement && (el.classList.contains('check') || el.classList.contains('check-box'))
    );
    if (isCheckbox) {
      // Toggle selection (simulate ctrl/meta click)
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
      <div class="row" @click=${this._handleSelect}>
        ${this.multiSelect ? html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        ` : nothing}
        <div class="thumb ${isTransparent && thumbUrl ? 'chess' : ''}">
          ${thumbUrl
            ? html`<img
                src=${thumbUrl}
                alt=${a.name}
                class="${isTransparent ? 'transparent-asset' : ''}"
                loading="lazy"
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
                class="icon-fallback"
                @error=${(e: Event) => {
                  const img = e.target as HTMLImageElement;
                  const defaultIcon = getDefaultFileTypeIconUrl();
                  if (img.src !== defaultIcon) {
                    img.src = defaultIcon;
                  }
                }}
              />`}
        </div>
        <div class="name" title=${a.name}>${a.name}</div>
        <div class="type">${a.extension?.toUpperCase()}</div>
        <div class="desc">${formatFileSize(a.size?.bytes || 0)}</div>
        <div class="date">${formatDate(a.created_at || '')}</div>
        <div class="actions">
          <button class="icon-btn" @click=${this._handlePreview} aria-label="Preview">
            <ap-icon name="preview" .size=${16}></ap-icon>
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-asset-row': ApAssetRow;
  }
}
