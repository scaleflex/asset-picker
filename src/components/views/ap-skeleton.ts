import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ap-skeleton')
export class ApSkeleton extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px 20px;
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
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px 24px;
    }
    .card-skel {
      aspect-ratio: 6/4;
      border-radius: var(--ap-radius, 8px);
    }
    .row-skel {
      height: 56px;
      margin-bottom: 1px;
      border-radius: 4px;
    }
    @media (prefers-reduced-motion: reduce) {
      .skeleton { animation: none; }
    }
  `;

  @property() variant: 'grid' | 'list' = 'grid';

  render() {
    if (this.variant === 'grid') {
      return html`
        <div class="grid-skeleton">
          ${Array.from({ length: 18 }, () => html`<div class="skeleton card-skel"></div>`)}
        </div>
      `;
    }
    return html`
      ${Array.from({ length: 7 }, () => html`<div class="skeleton row-skel"></div>`)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-skeleton': ApSkeleton;
  }
}
