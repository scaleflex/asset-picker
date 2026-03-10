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
      grid-template-columns: 48px 1fr 100px 200px 120px 60px;
      gap: 12px;
      padding: 8px 12px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--ap-muted-foreground, #71717a);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid var(--ap-border, #e4e4e7);
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
      .ghost-row { animation: none; }
    }
  `;

  @property({ type: Array }) assets: Asset[] = [];
  @property({ type: Array }) folders: Folder[] = [];
  @property({ type: Array }) selectedIds: string[] = [];
  @property({ type: Boolean }) isLoading = false;

  render() {
    return html`
      <div class="list-header" role="row" aria-label="Column headers">
        <span></span>
        <span>Name</span>
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
