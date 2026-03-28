import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import type { Folder } from '../../types/folder.types';
import '../shared/ap-icon';

@customElement('ap-selection-bar')
export class ApSelectionBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0 8px 8px;
    }
    .bar {
      display: flex;
      align-items: center;
      padding: 12px 20px;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-radius: var(--ap-radius-lg, 12px);
      animation: ap-bar-in 250ms ease-out;
    }
    @keyframes ap-bar-in {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .count {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-primary-foreground, oklch(1 0 0));
      white-space: nowrap;
    }
    .divider {
      width: 1px;
      height: 20px;
      background: oklch(1 0 0 / 0.3);
      margin: 0 16px;
      flex-shrink: 0;
    }
    .select-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: oklch(1 0 0 / 0.7);
      white-space: nowrap;
    }
    .bar-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-primary-foreground, oklch(1 0 0));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 14px;
      margin-left: 8px;
      font-weight: 500;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      white-space: nowrap;
      border-radius: var(--ap-radius-sm, 6px);
      transition: background 100ms;
    }
    .bar-btn:hover {
      background: oklch(1 0 0 / 0.1);
    }
    .bar-btn:disabled {
      opacity: 0.5;
      cursor: default;
    }
    .limit-notice {
      font-size: var(--ap-font-size-xs, 0.75rem);
      color: oklch(1 0 0 / 0.7);
      margin-left: 8px;
      white-space: nowrap;
    }
    .spacer {
      flex: 1;
    }
    .btn-confirm {
      padding: 8px 24px;
      border: 1.5px solid var(--ap-primary-foreground, oklch(1 0 0));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      cursor: pointer;
      transition: background 100ms;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: transparent;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .btn-confirm:hover {
      background: oklch(1 0 0 / 0.1);
    }
    @media (prefers-reduced-motion: reduce) {
      .bar { animation: none; }
    }
  `;

  @property({ type: Array }) selectedAssets: Asset[] = [];
  @property({ type: Array }) selectedFolders: Folder[] = [];
  @property({ type: Number }) totalCount = 0;
  @property({ type: Boolean }) isSelectingAll = false;
  @property({ type: Boolean }) multiSelect = true;
  @property({ type: Number }) maxSelections?: number;

  private get _totalSelected(): number {
    return this.selectedAssets.length + this.selectedFolders.length;
  }

  private _formatCount(): string {
    const ac = this.selectedAssets.length;
    const fc = this.selectedFolders.length;
    if (fc === 0) return `${ac} selected`;
    if (ac === 0) return `${fc} folder${fc !== 1 ? 's' : ''} selected`;
    const folderPart = `${fc} folder${fc !== 1 ? 's' : ''}`;
    const assetPart = `${ac} asset${ac !== 1 ? 's' : ''}`;
    return `${folderPart} and ${assetPart} selected`;
  }

  private _confirm() {
    this.dispatchEvent(new CustomEvent('selection-confirm', {
      detail: { assets: this.selectedAssets, folders: this.selectedFolders },
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

  render() {
    if (this._totalSelected === 0) return nothing;

    return html`
      <div class="bar">
        <span class="count">${this._formatCount()}</span>
        <span class="divider"></span>
        <span class="select-label">Select:</span>
        ${this.multiSelect && this._totalSelected < this.totalCount
            && (!this.maxSelections || this._totalSelected < this.maxSelections)
          ? html`<button
              class="bar-btn"
              ?disabled=${this.isSelectingAll}
              @click=${this._selectAll}
            ><ap-icon name="check-check" .size=${14}></ap-icon>${this.isSelectingAll
              ? 'Selecting...'
              : this.maxSelections && this.maxSelections < this.totalCount
                ? `First ${this.maxSelections}`
                : 'Select all'
            }</button>`
          : nothing}
        <button class="bar-btn" @click=${this._clear}><ap-icon name="close" .size=${14}></ap-icon>Deselect all</button>
        ${this.maxSelections && this._totalSelected >= this.maxSelections
          ? html`<span class="limit-notice">Max ${this.maxSelections} allowed</span>`
          : nothing}
        <div class="spacer"></div>
        <button class="btn-confirm" @click=${this._confirm}>Confirm</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-selection-bar': ApSelectionBar;
  }
}
