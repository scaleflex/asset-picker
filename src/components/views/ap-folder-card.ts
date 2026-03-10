import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Folder } from '../../types/folder.types';
import { getExtensionFromType, getFileTypeIconUrl, getDefaultFileTypeIconUrl, getFileTypeFromMime } from '../../utils/file-type';

export interface FolderPreviewImage {
  file_uri_cdn: string;
  file_type: string;
}

@customElement('ap-folder-card')
export class ApFolderCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      position: relative;
      aspect-ratio: 9/7;
      cursor: pointer;
    }
    .card:hover .hover-overlay {
      opacity: 0.9;
    }
    /* Folder shape SVG fills card */
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .hover-overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      opacity: 0;
      transition: opacity 200ms;
      pointer-events: none;
    }
    .preview-container {
      position: absolute;
      top: 15%;
      left: 3.5%;
      width: 93%;
      height: 74%;
      display: flex;
      overflow: hidden;
      border-radius: 4px;
      z-index: 1;
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
      background: var(--ap-muted, #f4f4f5);
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, #f3f7fa);
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
      color: var(--ap-muted-foreground, #71717a);
    }
    .info {
      padding: 8px 4px 0;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, #09090b);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .counts {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-top: 2px;
    }
  `;

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
    return ['svg', 'svg+xml', 'png'].includes(ext);
  }

  /**
   * Get the best preview URL for a folder preview image.
   * Applies CDN transformations for videos and PDFs (like asset cards).
   */
  private _getPreviewUrl(preview: FolderPreviewImage): string {
    const type = getFileTypeFromMime(preview.file_type);
    const cdnUrl = preview.file_uri_cdn;
    if (!cdnUrl) return '';

    if (type === 'video') {
      // Generate a video thumbnail via CDN (first frame)
      try {
        const u = new URL(cdnUrl);
        u.searchParams.set('w', '200');
        u.searchParams.set('force_format', 'webp,jpeg');
        return u.toString();
      } catch {
        return cdnUrl;
      }
    }

    if (preview.file_type === 'application/pdf' || getExtensionFromType(preview.file_type).toLowerCase() === 'pdf') {
      // Render first page as image, similar to getPdfPreviewUrl
      try {
        let url = cdnUrl.replace(/([?&])func=proxy&?/, '$1').replace(/[?&]$/, '');
        const u = new URL(url);
        u.searchParams.set('w', '200');
        u.searchParams.set('force_format', 'webp,jpeg');
        u.searchParams.set('doc_page', '1');
        u.searchParams.set('bypass_process_proxy', '1');
        return u.toString();
      } catch {
        return cdnUrl;
      }
    }

    return cdnUrl;
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
        <!-- Hover overlay with same folder shape -->
        <svg class="hover-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
                fill="#F3F7FA" />
        </svg>
        <!-- Preview images -->
        <div class="preview-container">
          ${this._renderPreviews()}
        </div>
      </div>
      <!-- Info section outside the card shape -->
      <div class="info">
        <div class="name" title=${f.name}>${f.name}</div>
        <div class="counts">
          <span>${directCount} asset${directCount !== 1 ? 's' : ''}</span>
          ${subAssets > 0 ? html`<span>${subAssets} sub-asset${subAssets !== 1 ? 's' : ''}</span>` : nothing}
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
