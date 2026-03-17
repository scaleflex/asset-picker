import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import { getAssetThumbnailUrl, getVideoThumbnailUrl, getPdfPreviewUrl } from '../../utils/thumbnail';
import { getFileTypeFromMime, hasThumbnailSupport, getFileTypeIconUrl, getDefaultFileTypeIconUrl, hasTransparencySupport } from '../../utils/file-type';

@customElement('ap-selection-bar')
export class ApSelectionBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--ap-card, #fff);
      border-top: 1px solid var(--ap-border, #e4e4e7);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .count {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
    }
    .select-all-link {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-primary, oklch(0.65 0.19 258));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-left: 8px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      white-space: nowrap;
    }
    .select-all-link:hover {
      text-decoration: underline;
    }
    .select-all-link:disabled {
      opacity: 0.5;
      cursor: default;
      text-decoration: none;
    }
    .thumbnails {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 16px;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .thumbnails::-webkit-scrollbar { display: none; }
    .thumb {
      width: 36px;
      height: 36px;
      border-radius: 4px;
      overflow: hidden;
      flex-shrink: 0;
      cursor: pointer;
      border: 2px solid transparent;
      transition: border-color 100ms;
      background: var(--ap-muted, #f4f4f5);
    }
    .thumb:hover {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .thumb.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 10px 10px;
    }
    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
    .btn {
      padding: 8px 20px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: opacity 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }
    .btn:hover {
      opacity: 0.9;
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary-foreground, #fff);
    }
    .btn-ghost {
      background: none;
      color: var(--ap-muted-foreground, #71717a);
    }
    .btn-ghost:hover {
      color: var(--ap-foreground, #09090b);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar { animation: none; }
    }
  `;

  @property({ type: Array }) selectedAssets: Asset[] = [];
  @property({ type: Number }) totalCount = 0;
  @property({ type: Boolean }) isSelectingAll = false;
  @property({ type: Boolean }) multiSelect = true;

  private _confirm() {
    this.dispatchEvent(new CustomEvent('selection-confirm', {
      detail: { assets: this.selectedAssets },
      bubbles: true,
      composed: true,
    }));
  }

  private _clear() {
    this.dispatchEvent(new CustomEvent('selection-clear', { bubbles: true, composed: true }));
  }

  private _selectAll() {
    this.dispatchEvent(new CustomEvent('select-all', { bubbles: true, composed: true }));
  }

  private _deselect(uuid: string) {
    this.dispatchEvent(new CustomEvent('selection-deselect', {
      detail: { uuid },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    if (this.selectedAssets.length === 0) return nothing;

    return html`
      <div class="bar">
        <span class="count">${this.selectedAssets.length} asset${this.selectedAssets.length > 1 ? 's' : ''} selected</span>
        ${this.multiSelect && this.selectedAssets.length < this.totalCount
          ? html`<button
              class="select-all-link"
              ?disabled=${this.isSelectingAll}
              @click=${this._selectAll}
            >${this.isSelectingAll ? 'Selecting...' : `Select all ${this.totalCount.toLocaleString()}`}</button>`
          : nothing}
        <div class="thumbnails">
          ${this.selectedAssets.map((asset) => {
            const fileType = getFileTypeFromMime(asset.type);
            const isVideo = fileType === 'video';
            const isPdf = asset.extension?.toLowerCase() === 'pdf';
            const canThumbnail = hasThumbnailSupport(asset.extension || '');

            let thumbUrl = '';
            if (isVideo) {
              thumbUrl = getVideoThumbnailUrl(asset);
            } else if (isPdf) {
              thumbUrl = getPdfPreviewUrl(asset);
            } else if (canThumbnail) {
              thumbUrl = getAssetThumbnailUrl(asset);
            }

            const fallbackIconUrl = getFileTypeIconUrl(asset.extension || '');
            const isTransparent = hasTransparencySupport(asset.extension || '');

            return html`
              <div class="thumb ${isTransparent && thumbUrl ? 'chess' : ''}" @click=${() => this._deselect(asset.uuid)} title="Click to deselect ${asset.name}">
                ${thumbUrl
                  ? html`<img
                      src=${thumbUrl}
                      alt=${asset.name}
                      @error=${(e: Event) => {
                        const img = e.target as HTMLImageElement;
                        const defaultIcon = getDefaultFileTypeIconUrl();
                        if (img.src !== fallbackIconUrl && img.src !== defaultIcon) {
                          img.src = fallbackIconUrl;
                        } else if (img.src !== defaultIcon) {
                          img.src = defaultIcon;
                        }
                      }}
                    />`
                  : html`<img
                      src=${fallbackIconUrl}
                      alt=${asset.name}
                      style="object-fit: contain; padding: 6px;"
                      @error=${(e: Event) => {
                        const img = e.target as HTMLImageElement;
                        const defaultIcon = getDefaultFileTypeIconUrl();
                        if (img.src !== defaultIcon) {
                          img.src = defaultIcon;
                        }
                      }}
                    />`}
              </div>
            `;
          })}
        </div>
        <div class="actions">
          <button class="btn btn-ghost" @click=${this._clear}>Clear</button>
          <button class="btn btn-primary" @click=${this._confirm}>Confirm</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-selection-bar': ApSelectionBar;
  }
}
