import { LitElement, html, css } from 'lit';
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
      grid-template-columns: 48px 1fr 100px 200px 120px 60px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .icon {
      color: var(--ap-primary, oklch(0.65 0.19 258));
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, #09090b);
    }
    .meta {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
    }
  `;

  @property({ type: Object }) folder!: Folder;

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
      <div class="row" @click=${this._handleOpen}>
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
