import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import type { Folder, FolderPreviewImage } from '../../types/folder.types';

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
      gap: 12px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 400;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .list-header span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .ghost-el {
      background: linear-gradient(
        90deg,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 25%,
        #e8e8ea 50%,
        var(--ap-muted, oklch(0.974 0.006 239.819)) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 4px;
    }
    .ghost-check { width: 22px; height: 22px; }
    .ghost-thumb { width: 40px; height: 40px; }
    .ghost-name { height: 14px; border-radius: 4px; }
    .ghost-type { height: 12px; width: 40px; }
    .ghost-size { height: 12px; width: 48px; }
    .ghost-date { height: 12px; width: 72px; }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ghost-el { animation: none; }
    }
  `;

  @property({ type: Array }) assets: Asset[] = [];
  @property({ type: Array }) folders: Folder[] = [];
  @property({ type: Array }) selectedIds: string[] = [];
  @property({ type: Array }) selectedFolderIds: string[] = [];
  @property({ type: Boolean }) isLoading = false;
  @property({ type: Boolean }) multiSelect = true;
  @property({ type: Boolean }) folderSelectable = false;
  @property({ type: Number }) totalCount = 0;
  @property({ type: Boolean }) isSelectingAll = false;
  @property({ type: Object }) folderPreviews: Record<string, FolderPreviewImage[]> = {};

  @state() private _compactLevel = 0;
  private _resizeObserver?: ResizeObserver;

  override connectedCallback() {
    super.connectedCallback();
    this._resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      const level = width < 550 ? 2 : width < 680 ? 1 : 0;
      if (level !== this._compactLevel) this._compactLevel = level;
    });
    this._resizeObserver.observe(this);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._resizeObserver?.disconnect();
  }

  private _getGridColumns(hasCheckbox: boolean): string {
    const cols: string[] = [];
    if (hasCheckbox) cols.push('32px');
    cols.push('48px');
    cols.push('minmax(120px, 1fr)');
    cols.push('72px');
    if (this._compactLevel < 2) cols.push('100px');
    if (this._compactLevel < 1) cols.push('120px');
    cols.push('64px');
    return cols.join(' ');
  }

  private get _allVisibleSelected(): boolean {
    if (this.assets.length === 0 && this.folders.length === 0) return false;
    if (this.selectedIds.length === 0 && this.selectedFolderIds.length === 0) return false;
    const assetIdSet = new Set(this.selectedIds);
    const assetsOk = this.assets.length === 0 || this.assets.every((a) => assetIdSet.has(a.uuid));
    if (!this.folderSelectable) return assetsOk && this.assets.length > 0;
    const folderIdSet = new Set(this.selectedFolderIds);
    const foldersOk = this.folders.length === 0 || this.folders.every((f) => folderIdSet.has(f.uuid));
    return assetsOk && foldersOk;
  }

  private _handleHeaderCheckboxClick() {
    if (this.isSelectingAll) return;
    const totalSelectable = this.folderSelectable ? this.totalCount + this.folders.length : this.totalCount;
    const totalSelected = this.folderSelectable ? this.selectedIds.length + this.selectedFolderIds.length : this.selectedIds.length;
    if (this._allVisibleSelected && totalSelected >= totalSelectable) {
      this.dispatchEvent(new CustomEvent('selection-clear', { bubbles: true, composed: true }));
    } else {
      this.dispatchEvent(new CustomEvent('select-all', { detail: { scope: 'all' }, bubbles: true, composed: true }));
    }
  }

  render() {
    const totalSelectable = this.folderSelectable ? this.totalCount + this.folders.length : this.totalCount;
    const totalSelected = this.folderSelectable ? this.selectedIds.length + this.selectedFolderIds.length : this.selectedIds.length;
    const allSelected = this._allVisibleSelected && totalSelected >= totalSelectable;
    return html`
      <div class="list-header" style="grid-template-columns: ${this._getGridColumns(this.multiSelect)}" role="row" aria-label="Column headers">
        ${this.multiSelect
          ? html`<span class="header-checkbox" @click=${this._handleHeaderCheckboxClick}>
              <div class="header-check-box ${allSelected ? 'checked' : totalSelected > 0 ? 'indeterminate' : ''}">
                <svg class="header-check-icon check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <svg class="header-check-icon dash" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                </svg>
              </div>
            </span>`
          : nothing}
        <span></span>
        <span>Name</span>
        <span>Type</span>
        ${this._compactLevel < 2 ? html`<span>Size</span>` : nothing}
        ${this._compactLevel < 1 ? html`<span>Date</span>` : nothing}
        <span></span>
      </div>
      <div class="list-body" role="list" aria-label="Assets">
        ${this.folders.map(
          (folder, i) => html`
            <ap-folder-row
              .folder=${folder}
              .previews=${this.folderPreviews[folder.uuid] || []}
              .selectable=${this.folderSelectable}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              ?selected=${this.selectedFolderIds.includes(folder.uuid)}
              .index=${i}
              data-folder-uuid=${folder.uuid}
              @folder-open=${(e: CustomEvent) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent('folder-open', { detail: e.detail, bubbles: true, composed: true })); }}
              @folder-select=${(e: CustomEvent) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent('folder-select', { detail: e.detail, bubbles: true, composed: true })); }}
            ></ap-folder-row>
          `
        )}
        ${this.assets.map(
          (asset, i) => html`
            <ap-asset-row
              .asset=${asset}
              .index=${this.folderSelectable ? this.folders.length + i : i}
              ?selected=${this.selectedIds.includes(asset.uuid)}
              .multiSelect=${this.multiSelect}
              .compactLevel=${this._compactLevel}
              data-asset-uuid=${asset.uuid}
              @asset-select=${(e: CustomEvent) =>
                this.dispatchEvent(new CustomEvent('asset-select', { detail: e.detail, bubbles: true, composed: true }))}
              @asset-preview=${(e: CustomEvent) =>
                this.dispatchEvent(new CustomEvent('asset-preview', { detail: e.detail, bubbles: true, composed: true }))}
              @asset-quick-select=${(e: CustomEvent) =>
                this.dispatchEvent(new CustomEvent('asset-quick-select', { detail: e.detail, bubbles: true, composed: true }))}
            ></ap-asset-row>
          `
        )}
        ${this.isLoading
          ? Array.from({ length: LOAD_MORE_ROW_COUNT }, (_, i) => {
              const widths = ['70%', '55%', '80%', '45%', '65%'];
              return html`
                <div class="ghost-row" style="grid-template-columns: ${this._getGridColumns(this.multiSelect)}">
                  ${this.multiSelect ? html`<div class="ghost-el ghost-check"></div>` : nothing}
                  <div class="ghost-el ghost-thumb"></div>
                  <div class="ghost-el ghost-name" style="width: ${widths[i]}"></div>
                  <div class="ghost-el ghost-type"></div>
                  ${this._compactLevel < 2 ? html`<div class="ghost-el ghost-size"></div>` : nothing}
                  ${this._compactLevel < 1 ? html`<div class="ghost-el ghost-date"></div>` : nothing}
                  <div></div>
                </div>
              `;
            })
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
