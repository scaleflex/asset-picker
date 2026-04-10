import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles } from '../../styles/shared-styles';
import type { Folder, FolderPreviewImage } from '../../types/folder.types';
import { getExtensionFromType, getFileTypeIconUrl, getDefaultFileTypeIconUrl, isAlternativeDisplay } from '../../utils/file-type';
import { getFolderPreviewUrl } from '../../utils/thumbnail';

@customElement('ap-folder-card')
export class ApFolderCard extends LitElement {
  static styles = [resetStyles, css`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      transition: filter 150ms;
    }
    :host([selected]) .card {
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)));
    }
    /* Folder shape SVG fills card */
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
    }
    .preview-overlay {
      position: absolute;
      inset: 0;
      z-index: 2;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      opacity: 0;
      transition: opacity 150ms;
      pointer-events: none;
    }
    .card:hover {
      filter: drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
    }
    :host([selected]) .card:hover {
      filter:
        drop-shadow(2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(-2px 0 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 -2px 0 var(--ap-primary, oklch(0.578 0.198 268.129)))
        drop-shadow(0 4px 12px rgb(0 0 0 / 0.08));
    }
    .card:hover .preview-overlay {
      opacity: 1;
    }
    .card-content {
      position: relative;
      z-index: 1;
      padding: 12% 3.5% 12px;
      display: flex;
      flex-direction: column;
    }
    .preview-container {
      position: relative;
      aspect-ratio: 16/9;
      display: flex;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-grid {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 6px;
    }
    .preview-left {
      flex: 1;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-right {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .preview-right-item {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-left > .preview-slot,
    .preview-right-item > .preview-slot {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 4px;
    }
    .preview-slot {
      display: flex;
      position: relative;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
    }
    .preview-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    .preview-img.icon-mode {
      object-fit: contain;
      padding: 8px;
    }
    .empty-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      border-radius: 4px;
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .info {
      flex-shrink: 0;
      padding-top: 8px;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counts {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-top: 6px;
    }
    .check {
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 3;
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
  `];

  @property({ type: Object }) folder!: Folder;
  @property({ type: Array }) previews: FolderPreviewImage[] = [];
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean }) selectable = false;
  @property({ type: Boolean }) multiSelect = true;
  @property({ type: Number }) index = 0;

  private _handleClick(e: MouseEvent) {
    if (!this.selectable) {
      this._handleOpen();
      return;
    }

    const path = e.composedPath();
    const isCheckbox = path.some(
      (el) => el instanceof HTMLElement && (el.classList.contains('check') || el.classList.contains('check-box'))
    );

    if (isCheckbox) {
      e.stopPropagation();
      this.dispatchEvent(new CustomEvent('folder-select', {
        detail: { folder: this.folder, index: this.index, event: new MouseEvent('click', { ctrlKey: true, metaKey: true, shiftKey: e.shiftKey }) },
        bubbles: true,
        composed: true,
      }));
      return;
    }

    this._handleOpen();
  }

  private _handleOpen() {
    this.dispatchEvent(new CustomEvent('folder-open', {
      detail: { folder: this.folder },
      bubbles: true,
      composed: true,
    }));
  }

  private _getPreviewUrl(preview: FolderPreviewImage): string {
    return getFolderPreviewUrl(preview, '200');
  }

  private _renderPreviewImg(preview: FolderPreviewImage) {
    const isAlt = isAlternativeDisplay(preview.file_type);
    const previewUrl = this._getPreviewUrl(preview);
    const fallbackIconUrl = getFileTypeIconUrl(getExtensionFromType(preview.file_type));
    const defaultIcon = getDefaultFileTypeIconUrl();

    return html`<div class="preview-slot ${isAlt ? 'icon-bg' : ''}">
      <img
        class="preview-img ${isAlt ? 'icon-mode' : ''}"
        src="${previewUrl || fallbackIconUrl}"
        alt=""
        loading="lazy"
        @error=${(e: Event) => {
          const img = e.target as HTMLImageElement;
          const slot = img.parentElement;
          if (img.src !== fallbackIconUrl && img.src !== defaultIcon) {
            img.src = fallbackIconUrl;
            img.classList.add('icon-mode');
            slot?.classList.add('icon-bg');
          } else if (img.src !== defaultIcon) {
            img.src = defaultIcon;
            img.classList.add('icon-mode');
            slot?.classList.add('icon-bg');
          }
        }}
        @load=${(e: Event) => {
          const img = e.target as HTMLImageElement;
          const slot = img.parentElement;
          // If the loaded image is an icon, apply icon styling
          if (img.src.includes('assets/file-types')) {
            img.classList.add('icon-mode');
            slot?.classList.add('icon-bg');
          }
        }}
      />
    </div>`;
  }

  private _renderPreviews() {
    if (this.previews.length === 0) {
      return html`<div class="empty-preview"><ap-icon name="inbox" .size=${64}></ap-icon></div>`;
    }

    const images = this.previews.slice(0, 3);
    if (images.length === 1) {
      return html`<div class="preview-left">${this._renderPreviewImg(images[0])}</div>`;
    }

    return html`
      <div class="preview-grid">
        <div class="preview-left">${this._renderPreviewImg(images[0])}</div>
        <div class="preview-right">
          <div class="preview-right-item">${this._renderPreviewImg(images[1])}</div>
          ${images[2] ? html`<div class="preview-right-item">${this._renderPreviewImg(images[2])}</div>` : nothing}
        </div>
      </div>
    `;
  }


  render() {
    const f = this.folder;
    if (!f) return html``;
    const directCount = f.count?.files_direct ?? 0;
    const recursiveCount = f.count?.files_recursive ?? 0;
    const subAssets = recursiveCount - directCount;

    return html`
      <div class="card" @click=${this._handleClick}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                rx="3" ry="3" />
        </svg>
        ${this.selectable && this.multiSelect ? html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        ` : nothing}
        <div class="card-content">
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <div class="info">
            <div class="name" title=${f.name}>${f.name}</div>
            <div class="counts">
              <span>${directCount} asset${directCount !== 1 ? 's' : ''}</span>
              ${subAssets > 0 ? html`<span>${subAssets} sub-asset${subAssets !== 1 ? 's' : ''}</span>` : nothing}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-folder-card': ApFolderCard;
  }
}
