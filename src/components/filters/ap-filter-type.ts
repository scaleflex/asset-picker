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
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
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
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .option-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    ap-icon {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }

    .option.selected ap-icon {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
