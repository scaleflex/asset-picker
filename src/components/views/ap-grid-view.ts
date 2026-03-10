import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Asset } from '../../types/asset.types';
import type { Folder } from '../../types/folder.types';

const LOAD_MORE_SKELETON_COUNT = 6;

@customElement('ap-grid-view')
export class ApGridView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 12px 20px 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px 24px;
    }
    .ghost-card {
      aspect-ratio: 6/4;
      border-radius: var(--ap-radius, 8px);
      background: linear-gradient(
        90deg,
        var(--ap-muted, #f4f4f5) 25%,
        #e8e8ea 50%,
        var(--ap-muted, #f4f4f5) 75%
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
  @property({ type: Boolean }) isLoading = false;

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
    return html`
      <div class="grid" role="list" aria-label="Assets">
        ${this.folders.map(
          (folder) => html`
            <ap-folder-card
              .folder=${folder}
              .previews=${this.folderPreviews[folder.uuid] || []}
              @folder-open=${(e: CustomEvent) => { e.stopPropagation(); this.dispatchEvent(new CustomEvent('folder-open', { detail: e.detail, bubbles: true, composed: true })); }}
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
                .index=${i}
                ?selected=${this.selectedIds.includes(asset.uuid)}
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
