import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';

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
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
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
    .select-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: oklch(1 0 0 / 0.7);
      margin-left: 24px;
      white-space: nowrap;
    }
    .bar-link {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-primary-foreground, oklch(1 0 0));
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-left: 8px;
      font-weight: 600;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      white-space: nowrap;
    }
    .bar-link:hover {
      text-decoration: underline;
    }
    .bar-link:disabled {
      opacity: 0.5;
      cursor: default;
      text-decoration: none;
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
      background: transparent;
      color: var(--ap-primary-foreground, oklch(1 0 0));
      border: 1px solid var(--ap-primary-foreground, oklch(1 0 0));
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

  render() {
    if (this.selectedAssets.length === 0) return nothing;

    return html`
      <div class="bar">
        <span class="count">${this.selectedAssets.length} selected</span>
        <span class="select-label">Select:</span>
        ${this.multiSelect && this.selectedAssets.length < this.totalCount
            && (!this.maxSelections || this.selectedAssets.length < this.maxSelections)
          ? html`<button
              class="bar-link"
              ?disabled=${this.isSelectingAll}
              @click=${this._selectAll}
            >${this.isSelectingAll
              ? 'Selecting...'
              : this.maxSelections && this.maxSelections < this.totalCount
                ? `First ${this.maxSelections}`
                : 'All assets'
            }</button>`
          : nothing}
        <button class="bar-link" @click=${this._clear}>None</button>
        ${this.maxSelections && this.selectedAssets.length >= this.maxSelections
          ? html`<span class="limit-notice">Max ${this.maxSelections} allowed</span>`
          : nothing}
        <div class="spacer"></div>
        <div class="actions">
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
