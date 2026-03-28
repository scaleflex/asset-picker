import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Folder, FolderPreviewImage } from '../../types/folder.types';
import { formatDate } from '../../utils/format';
import { getFolderPreviewUrl } from '../../utils/thumbnail';
import { getExtensionFromType, getFileTypeIconUrl, getDefaultFileTypeIconUrl, isAlternativeDisplay } from '../../utils/file-type';

@customElement('ap-folder-row')
export class ApFolderRow extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
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
      height: 36px;
      position: relative;
      flex-shrink: 0;
    }
    .folder-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .preview-area {
      position: absolute;
      top: 30%;
      left: 4%;
      right: 4%;
      bottom: 8%;
      overflow: hidden;
      border-radius: 1.5px;
      display: flex;
      gap: 1px;
    }
    .preview-slot {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .preview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .preview-img.icon-mode {
      object-fit: contain;
      padding: 2px;
    }
    .empty-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-input, oklch(0.871 0.016 241.798));
    }
    .folder-svg path {
      fill: var(--ap-folder-bg, #E3E8ED);
    }
    .preview-slot.icon-bg {
      background: var(--ap-card, oklch(1 0 0));
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
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .check {
      display: flex;
      align-items: center;
      justify-content: center;
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
  `;

  @property({ type: Object }) folder!: Folder;
  @property({ type: Array }) previews: FolderPreviewImage[] = [];
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean }) selectable = false;
  @property({ type: Number }) index = 0;
  @property({ type: Number }) compactLevel = 0;

  private _getGridColumns(): string {
    const cols: string[] = [];
    cols.push('32px');
    cols.push('48px');
    cols.push('minmax(120px, 1fr)');
    cols.push('72px');
    if (this.compactLevel < 2) cols.push('100px');
    if (this.compactLevel < 1) cols.push('120px');
    cols.push('36px');
    return cols.join(' ');
  }

  private _renderPreviewImg(preview: FolderPreviewImage) {
    const isAlt = isAlternativeDisplay(preview.file_type);
    const previewUrl = getFolderPreviewUrl(preview, '80');
    const fallbackIconUrl = getFileTypeIconUrl(getExtensionFromType(preview.file_type));
    const defaultIcon = getDefaultFileTypeIconUrl();
    return html`<div class="preview-slot ${isAlt ? 'icon-bg' : ''}"><img
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
    /></div>`;
  }

  private _renderThumb() {
    const folderSvg = html`
      <svg class="folder-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z"
              />
      </svg>
    `;

    const images = this.previews.slice(0, 2);

    return html`
      ${folderSvg}
      <div class="preview-area">
        ${images.length > 0
          ? images.map(p => this._renderPreviewImg(p))
          : html`<div class="empty-preview">
              <ap-icon name="inbox" .size=${14}></ap-icon>
            </div>`
        }
      </div>
    `;
  }

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

  render() {
    const f = this.folder;
    if (!f) return html``;
    return html`
      <div class="row" style="grid-template-columns: ${this._getGridColumns()}" @click=${this._handleClick}>
        ${this.selectable ? html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        ` : html`<div></div>`}
        <div class="thumb">${this._renderThumb()}</div>
        <div class="name">${f.name}</div>
        <div class="meta">Folder</div>
        ${this.compactLevel < 2 ? html`<div class="meta">${f.count?.files_recursive ?? f.count?.files_direct ?? 0} items</div>` : nothing}
        ${this.compactLevel < 1 ? html`<div class="meta">${formatDate(f.modified_at || f.updated_at || '')}</div>` : nothing}
        <div></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-folder-row': ApFolderRow;
  }
}
