import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { ASSET_TYPE_OPTIONS } from './filters.constants';

@customElement('ap-filter-type')
export class ApFilterType extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .section-label {
      display: block;
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 600;
      color: var(--ap-foreground, #09090b);
      margin-bottom: 8px;
      cursor: default;
    }

    .options {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .option:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .option-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
    }

    ap-icon {
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    .option.selected ap-icon {
      color: var(--ap-primary, #3b82f6);
    }
  `;

  @property({ type: Array }) selected: string[] = [];

  private _toggle(value: string) {
    const newSelected = this.selected.includes(value)
      ? this.selected.filter((v) => v !== value)
      : [...this.selected, value];

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: FILTER_KEYS.TYPE,
          values: newSelected,
          operator: FILTER_OPERATORS.IS,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="options">
        <span class="section-label">Formats</span>
        ${ASSET_TYPE_OPTIONS.map(
          (opt) => html`
            <div
              class="option ${this.selected.includes(opt.value) ? 'selected' : ''}"
              @click=${() => this._toggle(opt.value)}
            >
              <ap-checkbox
                ?checked=${this.selected.includes(opt.value)}
              ></ap-checkbox>
              <ap-icon name=${opt.icon} size="16"></ap-icon>
              <span class="option-label">${opt.label}</span>
            </div>
          `,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-type': ApFilterType;
  }
}
