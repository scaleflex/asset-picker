import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { resetStyles } from '../../styles/shared-styles';
import type { Folder } from '../../types/folder.types';
import '../shared/ap-radio-group';
import '../shared/ap-icon';
import '../shared/ap-spinner';

@customElement('ap-folder-resolve-dialog')
export class ApFolderResolveDialog extends LitElement {
  static styles = [resetStyles, css`
    :host {
      display: block;
    }
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
      background: oklch(0 0 0 / 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .dialog {
      background: var(--ap-background, oklch(1 0 0));
      border-radius: var(--ap-radius-lg, 12px);
      padding: 28px 32px;
      max-width: 440px;
      width: 90%;
      box-shadow: 0 16px 48px oklch(0 0 0 / 0.16);
    }
    .title {
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      margin-bottom: 8px;
    }
    .description {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .options {
      margin-bottom: 24px;
    }
    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
    .btn {
      padding: 8px 20px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .btn:not(.btn-primary):hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .btn-primary {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .btn-primary:hover {
      opacity: 0.9;
    }
    .btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .btn-primary .loading-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `];

  @property({ type: Array }) folders: Folder[] = [];
  @property({ type: Boolean }) loading = false;

  @state() private _mode: 'direct' | 'recursive' = 'recursive';

  private _handleConfirm() {
    this.dispatchEvent(new CustomEvent('folder-resolve-confirm', {
      detail: { mode: this._mode },
      bubbles: true,
      composed: true,
    }));
  }

  private _handleCancel() {
    this.dispatchEvent(new CustomEvent('folder-resolve-cancel', {
      bubbles: true,
      composed: true,
    }));
  }

  private _handleModeChange(e: CustomEvent) {
    this._mode = e.detail.value;
  }

  render() {
    const count = this.folders.length;
    return html`
      <div class="backdrop" @click=${(e: MouseEvent) => { if (e.target === e.currentTarget) this._handleCancel(); }}>
        <div class="dialog">
          <div class="title">Add folder contents</div>
          <div class="description">
            You selected ${count} folder${count !== 1 ? 's' : ''}. How would you like to add the assets?
          </div>
          <div class="options">
            <ap-radio-group
              .value=${this._mode}
              .options=${[
                { value: 'direct', label: 'Direct assets only' },
                { value: 'recursive', label: 'All assets (including subfolders)' },
              ]}
              @ap-change=${this._handleModeChange}
            ></ap-radio-group>
          </div>
          <div class="actions">
            <button class="btn" @click=${this._handleCancel} ?disabled=${this.loading}>Cancel</button>
            <button class="btn btn-primary" @click=${this._handleConfirm} ?disabled=${this.loading}>
              ${this.loading
                ? html`<span class="loading-content"><ap-spinner .size=${14}></ap-spinner> Loading...</span>`
                : 'Add assets'}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-folder-resolve-dialog': ApFolderResolveDialog;
  }
}
