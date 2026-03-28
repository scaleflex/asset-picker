import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Folder } from '../../types/folder.types';
import { formatDate } from '../../utils/format';

@customElement('ap-folder-row')
export class ApFolderRow extends LitElement {
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
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    :host([selected]) .row {
      background: var(--ap-selection-bg, oklch(0.578 0.198 268.129 / 0.08));
    }
    .icon {
      color: var(--ap-input, oklch(0.871 0.016 241.798));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean }) selectable = false;
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

  render() {
    const f = this.folder;
    if (!f) return html``;
    return html`
      <div class="row" @click=${this._handleClick}>
        ${this.selectable ? html`
          <div class="check">
            <div class="check-box">
              <svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            </div>
          </div>
        ` : html`<div></div>`}
        <div class="icon"><ap-icon name="folder" .size=${22}></ap-icon></div>
        <div class="name">${f.name}</div>
        <div class="meta">Folder</div>
        <div class="meta">${f.count?.files_recursive ?? f.count?.files_direct ?? 0} items</div>
        <div class="meta">${formatDate(f.modified_at || f.updated_at || '')}</div>
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
