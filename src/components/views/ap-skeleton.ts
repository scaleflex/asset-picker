import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { GridSize } from '../../types/config.types';

@customElement('ap-skeleton')
export class ApSkeleton extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0 20px 16px;
    }
    .skeleton {
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: var(--ap-radius, 8px);
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .grid-skeleton {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--ap-grid-min-col, 220px), 1fr));
      gap: 24px;
    }
    .card-skel {
      border-radius: var(--ap-radius, 8px);
      overflow: hidden;
    }
    .card-skel-thumb {
      aspect-ratio: 6/4;
    }
    .card-skel-info {
      padding: 10px 12px;
    }
    .card-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .card-skel-meta {
      height: 12px;
      width: 50%;
      border-radius: 4px;
      margin-top: 6px;
    }
    .row-skel {
      display: grid;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .row-skel-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .row-skel-check {
      width: 22px;
      height: 22px;
      border-radius: 4px;
    }
    .row-skel-thumb {
      width: 40px;
      height: 40px;
      border-radius: 4px;
    }
    .row-skel-name {
      height: 14px;
      width: 70%;
      border-radius: 4px;
    }
    .row-skel-type {
      height: 12px;
      width: 40px;
      border-radius: 4px;
    }
    .row-skel-size {
      height: 12px;
      width: 48px;
      border-radius: 4px;
    }
    .row-skel-date {
      height: 12px;
      width: 72px;
      border-radius: 4px;
    }
    .row-skel-folder-thumb {
      width: 40px;
      height: 36px;
      position: relative;
    }
    .row-skel-folder-thumb svg {
      width: 100%;
      height: 100%;
    }
    .row-skel-folder-thumb svg path {
      fill: var(--ap-muted, oklch(0.974 0.006 239.819));
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
    .header-check-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header-check-box {
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: 4px;
      background: var(--ap-background, oklch(1 0 0));
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton { animation: none; }
    }
  `;

  @property({ reflect: true }) variant: 'grid' | 'list' = 'grid';
  @property({ type: String }) gridSize: GridSize = 'normal';
  @property({ type: Boolean }) multiSelect = true;
  @property({ type: Number }) folderCount = 0;

  render() {
    if (this.variant === 'grid') {
      const minCol = this.gridSize === 'large' ? '280px' : '220px';
      return html`
        <div class="grid-skeleton" style="--ap-grid-min-col: ${minCol}">
          ${Array.from({ length: 18 }, () => html`<div class="card-skel">
            <div class="skeleton card-skel-thumb"></div>
            <div class="card-skel-info">
              <div class="skeleton card-skel-name"></div>
              <div class="skeleton card-skel-meta"></div>
            </div>
          </div>`)}
        </div>
      `;
    }

    const cols: string[] = [];
    if (this.multiSelect) cols.push('32px');
    cols.push('48px', 'minmax(120px, 1fr)', '72px', '100px', '120px', '36px');
    const gridCols = cols.join(' ');

    const folderRow = html`
      <div class="row-skel" style="grid-template-columns: ${gridCols}">
        ${this.multiSelect ? html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>` : ''}
        <div class="row-skel-folder-thumb">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 3,0 L 30,0 L 43.5,0 Q 45,0 46.5,3 L 51,12 L 97,12 Q 100,12 100,15 L 100,97 Q 100,100 97,100 L 3,100 Q 0,100 0,97 L 0,3 Q 0,0 3,0 Z" />
          </svg>
        </div>
        <div class="skeleton row-skel-name" style="width: 55%"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `;

    const assetRow = (nameWidth: string) => html`
      <div class="row-skel" style="grid-template-columns: ${gridCols}">
        ${this.multiSelect ? html`<div class="row-skel-check-wrap"><div class="skeleton row-skel-check"></div></div>` : ''}
        <div class="skeleton row-skel-thumb"></div>
        <div class="skeleton row-skel-name" style="width: ${nameWidth}"></div>
        <div class="skeleton row-skel-type"></div>
        <div class="skeleton row-skel-size"></div>
        <div class="skeleton row-skel-date"></div>
        <div></div>
      </div>
    `;

    const nameWidths = ['70%', '55%', '80%', '45%', '65%', '50%', '75%', '60%', '85%', '40%', '72%', '58%'];
    const assetCount = 12 - this.folderCount;

    return html`
      <div class="list-header" style="grid-template-columns: ${gridCols}">
        ${this.multiSelect ? html`<div class="header-check-wrap"><div class="header-check-box"></div></div>` : ''}
        <span></span>
        <span>Name</span>
        <span>Type</span>
        <span>Size</span>
        <span>Date</span>
        <span></span>
      </div>
      ${Array.from({ length: this.folderCount }, () => folderRow)}
      ${Array.from({ length: assetCount }, (_, i) => assetRow(nameWidths[i % nameWidths.length]))}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-skeleton': ApSkeleton;
  }
}
