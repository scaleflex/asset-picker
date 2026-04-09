import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Label } from '../../types/label.types';

@customElement('ap-label-row')
export class ApLabelRow extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .row {
      display: grid;
      grid-template-columns: 40px minmax(120px, 1fr) 100px;
      gap: 12px;
      padding: 8px 12px;
      align-items: center;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      cursor: pointer;
      transition: background 100ms;
    }
    .row:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .icon-wrapper {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 400;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.8125rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      white-space: nowrap;
      text-align: right;
    }
  `;

  @property({ type: Object }) label!: Label;
  @property({ type: Number }) index = 0;

  private _handleClick() {
    this.dispatchEvent(new CustomEvent('label-open', {
      detail: { label: this.label },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const l = this.label;
    if (!l) return html``;
    const count = l.assets_count ?? 0;
    const color = l.color || '#94a3b8';
    return html`
      <div class="row" @click=${this._handleClick}>
        <div class="icon-wrapper" style="background: color-mix(in srgb, ${color} 10%, transparent)">
          <ap-icon name="tag" .size=${16} style="color: ${color}"></ap-icon>
        </div>
        <div class="name" title=${l.name}>${l.name}</div>
        <div class="count">${count} asset${count !== 1 ? 's' : ''}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-label-row': ApLabelRow;
  }
}
