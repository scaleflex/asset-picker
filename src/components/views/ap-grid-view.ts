import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import type { Folder } from '../../types/folder.types';
import type { GridSize } from '../../types/config.types';

const LOAD_MORE_SKELETON_COUNT = 6;

@customElement('ap-grid-view')
export class ApGridView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .ghost-card {
      aspect-ratio: 6/4;
      border-radius: var(--ap-radius, 8px);
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
      .ghost-card { animation: none; }
    }
  `;

  @property({ type: Array }) assets: Asset[] = [];
  @property({ type: Array }) folders: Folder[] = [];
  @property({ type: Object }) folderPreviews: Record<string, { file_uri_cdn: string; file_type: string }[]> = {};
  @property({ type: Array }) selectedIds: string[] = [];
  @property({ type: Array }) selectedFolderIds: string[] = [];
  @property({ type: Boolean }) isLoading = false;
  @property({ type: Boolean }) multiSelect = true;
  @property({ type: Boolean }) folderSelectable = false;
  @property({ type: String }) gridSize: GridSize = 'normal';

  /** Track how many items existed before the latest batch for stagger offset */
  private _prevCount = 0;

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('assets')) {
      const oldAssets = changed.get('assets') as Asset[] | undefined;
      if (oldAssets && this.assets.length > oldAssets.length) {
        // Appending — stagger new cards from 0
        this._prevCount = oldAssets.length;
      } else {
        // Fresh load or fewer items
        this._prevCount = 0;
      }
    }
  }

  render() {
    const minCol = this.gridSize === 'large' ? '280px' : '220px';
    return html`
      <div class="grid" role="list" aria-label="Assets" style="--ap-grid-min-col: ${minCol}">
        ${this.folders.map(
          (folder, i) => html`
            <ap-folder-card
              .folder=${folder}
              .previews=${this.folderPreviews[folder.uuid] || []}
              .selectable=${this.folderSelectable}
              ?selected=${this.selectedFolderIds.includes(folder.uuid)}
              .index=${i}
              data-folder-uuid=${folder.uuid}
              @folder-open=${(e: CustomEvent) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent('folder-open', { detail: e.detail, bubbles: true, composed: true })); }}
              @folder-select=${(e: CustomEvent) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent('folder-select', { detail: e.detail, bubbles: true, composed: true })); }}
            ></ap-folder-card>
          `
        )}
        ${this.assets.map(
          (asset, i) => {
            // For appended assets, stagger relative to the batch start
            const staggerIndex = i >= this._prevCount
              ? Math.min(i - this._prevCount, 20)
              : Math.min(i, 20);
            return html`
              <ap-asset-card
                .asset=${asset}
                .index=${this.folderSelectable ? this.folders.length + i : i}
                ?selected=${this.selectedIds.includes(asset.uuid)}
                .multiSelect=${this.multiSelect}
                style="--ap-stagger-index: ${staggerIndex}"
                data-asset-uuid=${asset.uuid}
                @asset-select=${(e: CustomEvent) =>
                  this.dispatchEvent(new CustomEvent('asset-select', { detail: e.detail, bubbles: true, composed: true }))}
                @asset-preview=${(e: CustomEvent) =>
                  this.dispatchEvent(new CustomEvent('asset-preview', { detail: e.detail, bubbles: true, composed: true }))}
                @asset-quick-select=${(e: CustomEvent) =>
                  this.dispatchEvent(new CustomEvent('asset-quick-select', { detail: e.detail, bubbles: true, composed: true }))}
              ></ap-asset-card>
            `;
          }
        )}
        ${this.isLoading
          ? Array.from({ length: LOAD_MORE_SKELETON_COUNT }, () =>
              html`<div class="ghost-card"></div>`)
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-grid-view': ApGridView;
  }
}
