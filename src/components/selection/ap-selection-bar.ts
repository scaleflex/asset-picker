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
      background: var(--ap-card, oklch(1 0 0));
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .count {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
    }
    .select-all-link {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
    .limit-notice {
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: 8px;
      white-space: nowrap;
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
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .thumb:hover {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .thumb.chess {
      background-image: conic-gradient(var(--ap-chess-a, #f0f0f0) 25%, var(--ap-chess-b, #fff) 25% 50%, var(--ap-chess-a, #f0f0f0) 50% 75%, var(--ap-chess-b, #fff) 75%);
      background-size: 10px 10px;
    }
    .thumb {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .thumb img.icon {
      object-fit: contain;
      width: 20px;
      height: 20px;
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
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .btn-ghost {
      background: none;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }
    .btn-ghost:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    @media (prefers-reduced-motion: reduce) {
      .bar { animation: none; }
    }
  `;

  @property({ type: Array }) selectedAssets: Asset[] = [];
  @property({ type: Number }) totalCount = 0;
  @property({ type: Boolean }) isSelectingAll = false;
  @property({ type: Boolean }) multiSelect = true;
  @property({ type: Number }) maxSelections?: number;

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
            && (!this.maxSelections || this.selectedAssets.length < this.maxSelections)
          ? html`<button
              class="select-all-link"
              ?disabled=${this.isSelectingAll}
              @click=${this._selectAll}
            >${this.isSelectingAll
              ? 'Selecting...'
              : this.maxSelections && this.maxSelections < this.totalCount
                ? `Select first ${this.maxSelections}`
                : `Select all ${this.totalCount.toLocaleString()}`
            }</button>`
          : nothing}
        ${this.maxSelections && this.selectedAssets.length >= this.maxSelections
          ? html`<span class="limit-notice">Max ${this.maxSelections} allowed</span>`
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
                          img.classList.add('icon');
                        } else if (img.src !== defaultIcon) {
                          img.src = defaultIcon;
                          img.classList.add('icon');
                        }
                      }}
                    />`
                  : html`<img
                      class="icon"
                      src=${fallbackIconUrl}
                      alt=${asset.name}
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
