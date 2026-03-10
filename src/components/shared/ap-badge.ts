import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('ap-badge')
export class ApBadge extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        padding: 2px 8px;
        font-size: 0.75rem;
        font-weight: 500;
        border-radius: 9999px;
        background: var(--ap-muted, #f4f4f5);
        color: var(--ap-muted-foreground, #71717a);
      }
      :host([variant="primary"]) .badge {
        background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
        color: var(--ap-primary, oklch(0.65 0.19 258));
      }
    `,
  ];

  @property({ reflect: true }) variant: 'default' | 'primary' = 'default';

  render() {
    return html`<span class="badge"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-badge': ApBadge;
  }
}
