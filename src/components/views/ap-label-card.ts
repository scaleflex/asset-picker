import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles } from '../../styles/shared-styles';
import type { Label } from '../../types/label.types';

@customElement('ap-label-card')
export class ApLabelCard extends LitElement {
  static styles = [resetStyles, css`
    :host {
      display: block;
    }
    .card {
      position: relative;
      cursor: pointer;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: box-shadow 150ms, border-color 150ms, background 150ms;
      background: var(--ap-card, oklch(1 0 0));
      overflow: hidden;
    }
    .card:hover {
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.08);
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    .icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .info {
      min-width: 0;
      flex: 1;
    }
    .name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .count {
      font-size: 0.75rem;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      margin-top: 2px;
    }
  `];

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
      <div class="card" @click=${this._handleClick}>
        <div class="icon-wrapper" style="background: color-mix(in srgb, ${color} 10%, transparent)">
          <ap-icon name="tag" .size=${18} style="color: ${color}"></ap-icon>
        </div>
        <div class="info">
          <div class="name" title=${l.name}>${l.name}</div>
          <div class="count">${count} asset${count !== 1 ? 's' : ''}</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-label-card': ApLabelCard;
  }
}
