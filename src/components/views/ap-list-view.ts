import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import type { Folder } from '../../types/folder.types';

const LOAD_MORE_ROW_COUNT = 5;

@customElement('ap-list-view')
export class ApListView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .list-header {
      display: grid;
      grid-template-columns: 32px 48px 1fr 100px 200px 120px 60px;
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .list-header:not(.has-checkbox) {
      grid-template-columns: 48px 1fr 100px 200px 120px 60px;
    }
    .header-checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .header-check-box {
      box-sizing: border-box;
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
    .header-check-box.checked,
    .header-check-box.indeterminate {
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }
    .header-check-icon {
      display: none;
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }
    .header-check-box.checked .header-check-icon.check {
      display: block;
    }
    .header-check-box.indeterminate .header-check-icon.dash {
      display: block;
    }
    .list-body {
      display: flex;
      flex-direction: column;
    }
    .ghost-row {
      height: 56px;
      margin-bottom: 1px;
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-row { animation: none; }
    }
  `;

  @property({ type: Array }) assets: Asset[] = [];
  @property({ type: Array }) folders: Folder[] = [];
  @property({ type: Array }) selectedIds: string[] = [];
  @property({ type: Boolean }) isLoading = false;
  @property({ type: Boolean }) multiSelect = true;
  @property({ type: Number }) totalCount = 0;
  @property({ type: Boolean }) isSelectingAll = false;

  private get _allVisibleSelected(): boolean {
    if (this.assets.length === 0 || this.selectedIds.length === 0) return false;
    const idSet = new Set(this.selectedIds);
    return this.assets.every((a) => idSet.has(a.uuid));
  }

  private _handleHeaderCheckboxClick() {
    if (this.isSelectingAll) return;
    if (this._allVisibleSelected && this.selectedIds.length >= this.totalCount) {
      this.dispatchEvent(new CustomEvent('selection-clear', { bubbles: true, composed: true }));
    } else {
      this.dispatchEvent(new CustomEvent('select-all', { bubbles: true, composed: true }));
    }
  }

  render() {
    const allSelected = this._allVisibleSelected && this.selectedIds.length >= this.totalCount;
    return html`
      <div class="list-header ${this.multiSelect ? 'has-checkbox' : ''}" role="row" aria-label="Column headers">
        ${this.multiSelect
          ? html`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div class="header-check-box ${allSelected ? 'checked' : this.selectedIds.length > 0 ? 'indeterminate' : ''}">
                <svg class="header-check-icon check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg class="header-check-icon dash" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>`
          : nothing}
        <span style="grid-column:span 2">Name</span>
        <span>Type</span>
        <span>Size</span>
        <span>Date</span>
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map(
          (folder) => html`
            <ap-folder-row
              .folder=${folder}
              @folder-open=${(e: CustomEvent) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent('folder-open', { detail: e.detail, bubbles: true, composed: true })); }}
            ></ap-folder-row>
          `
        )}
        ${this.assets.map(
          (asset, i) => html`
            <ap-asset-row
              .asset=${asset}
              .index=${i}
              ?selected=${this.selectedIds.includes(asset.uuid)}
              .multiSelect=${this.multiSelect}
              data-asset-uuid=${asset.uuid}
              @asset-select=${(e: CustomEvent) =>
                this.dispatchEvent(new CustomEvent('asset-select', { detail: e.detail, bubbles: true, composed: true }))}
              @asset-preview=${(e: CustomEvent) =>
                this.dispatchEvent(new CustomEvent('asset-preview', { detail: e.detail, bubbles: true, composed: true }))}
            ></ap-asset-row>
          `
        )}
        ${this.isLoading
          ? Array.from({ length: LOAD_MORE_ROW_COUNT }, () =>
              html`<div class="ghost-row"></div>`)
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-list-view': ApListView;
  }
}
