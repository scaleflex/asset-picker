import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { BreadcrumbItem } from '../../store/store.types';

@customElement('ap-breadcrumb')
export class ApBreadcrumb extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 8px 20px;
    }
    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button {
      border: none;
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
      font-size: var(--ap-font-size-sm, 0.875rem);
    }
    button:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .current {
      color: var(--ap-foreground, #09090b);
      font-weight: 500;
      padding: 4px 6px;
    }
    ap-icon {
      color: var(--ap-muted-foreground, #71717a);
    }
  `;

  @property({ type: Array }) items: BreadcrumbItem[] = [];

  private _navigate(uuid: string) {
    this.dispatchEvent(new CustomEvent('breadcrumb-navigate', { detail: { uuid }, bubbles: true, composed: true }));
  }

  render() {
    if (this.items.length === 0) return html``;
    return html`
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <button @click=${() => this._navigate('')}>Root</button>
        ${this.items.map(
          (item, i) => html`
            <ap-icon name="chevron-right" .size=${14}></ap-icon>
            ${i < this.items.length - 1
              ? html`<button @click=${() => this._navigate(item.uuid)}>${item.name}</button>`
              : html`<span class="current">${item.name}</span>`}
          `
        )}
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-breadcrumb': ApBreadcrumb;
  }
}
