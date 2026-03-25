import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles } from '../../styles/shared-styles';
import type { Folder } from '../../types/folder.types';
import { getExtensionFromType, getFileTypeIconUrl, getDefaultFileTypeIconUrl, getFileTypeFromMime } from '../../utils/file-type';
import { getFormattedPreviewUrl, addCdnParams } from '../../utils/thumbnail';

export interface FolderPreviewImage {
  file_uri_cdn: string;
  file_type: string;
}

@customElement('ap-folder-card')
export class ApFolderCard extends LitElement {
  static styles = [resetStyles, css`
    :host {
      display: block;
    }
    .card {
      position: relative;
      aspect-ratio: 4/3;
      cursor: pointer;
    }
    /* Folder shape SVG fills card */
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
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
    .card:hover .preview-overlay {
      opacity: 1;
    }
    .card-content {
      position: absolute;
      top: 16%;
      left: 3.5%;
      width: 93%;
      bottom: 0;
      z-index: 1;
      display: flex;
      flex-direction: column;
      padding-bottom: 12px;
    }
    .preview-container {
      position: relative;
      flex: 1;
      min-height: 0;
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
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
  `];

  @property({ type: Object }) folder!: Folder;
  @property({ type: Array }) previews: FolderPreviewImage[] = [];

  private _handleOpen() {
    this.dispatchEvent(new CustomEvent('folder-open', {
      detail: { folder: this.folder },
      bubbles: true,
      composed: true,
    }));
  }

  private _isAlternativeDisplay(fileType: string): boolean {
    const ext = getExtensionFromType(fileType).toLowerCase();
    return ['svg', 'svg+xml', 'png', 'pdf'].includes(ext);
  }

  /**
   * Get the best preview URL for a folder preview image.
   * Uses assets CDN URL to bypass private permissions and support CDN params.
   */
  private _getPreviewUrl(preview: FolderPreviewImage): string {
    const rawUrl = preview.file_uri_cdn;
    if (!rawUrl) return '';

    // Convert to assets CDN URL (bypasses private file permissions)
    let url = getFormattedPreviewUrl(rawUrl);
    const type = getFileTypeFromMime(preview.file_type);
    const dpr = String(window.devicePixelRatio || 1);

    if (type === 'video') {
      return addCdnParams(url, { w: '200', dpr, force_format: 'webp,jpeg' });
    }

    if (preview.file_type === 'application/pdf' || getExtensionFromType(preview.file_type).toLowerCase() === 'pdf') {
      url = url.replace(/([?&])func=proxy&?/, '$1').replace(/[?&]$/, '');
      return addCdnParams(url, { w: '200', dpr, force_format: 'webp,jpeg', doc_page: '1', bypass_process_proxy: '1' });
    }

    return addCdnParams(url, { w: '200', dpr });
  }

  private _renderPreviewImg(preview: FolderPreviewImage) {
    const isAlt = this._isAlternativeDisplay(preview.file_type);
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
          if (img.src.includes('scaleflex/assets/file-types')) {
            img.classList.add('icon-mode');
            slot?.classList.add('icon-bg');
          }
        }}
      />
    </div>`;
  }

  private _renderPreviews() {
    if (this.previews.length === 0) {
      return html`<div class="empty-preview"><ap-icon name="folder" .size=${48}></ap-icon></div>`;
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
      <div class="card" @click=${this._handleOpen}>
        <!-- Folder shape background -->
        <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                fill="#E3E8ED" rx="3" ry="3" />
        </svg>
        <div class="card-content">
          <!-- Preview images -->
          <div class="preview-container">
            <div class="preview-overlay"></div>
            ${this._renderPreviews()}
          </div>
          <!-- Info section inside the card shape -->
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
