import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { SELECTED_LABELS_LIMIT } from './filters.constants';
import type { Label } from '../../types/label.types';

@customElement('ap-filter-labels')
export class ApFilterLabels extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .search-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      margin-bottom: 8px;
      box-sizing: border-box;
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
      transition: border-color 150ms;
    }

    .search-input:focus {
      border-color: var(--ap-primary, #3b82f6);
    }

    .search-input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }

    .limit-indicator {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 8px;
      text-align: right;
    }

    .limit-indicator.at-limit {
      color: var(--ap-destructive, #ef4444);
    }

    .labels {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .label-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .label-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .label-item.disabled:hover {
      background: none;
    }

    .color-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .label-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .count {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, #71717a);
      flex-shrink: 0;
    }

    .empty-message {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-muted-foreground, #71717a);
      padding: 8px 0;
    }
  `;

  @property({ type: Array }) labels: Label[] = [];
  @property({ type: Array }) selected: string[] = [];
  @state() private _search = '';

  private get _atLimit(): boolean {
    return this.selected.length >= SELECTED_LABELS_LIMIT;
  }

  private _toggle(uuid: string) {
    const isSelected = this.selected.includes(uuid);

    if (!isSelected && this._atLimit) return;

    const newSelected = isSelected
      ? this.selected.filter((id) => id !== uuid)
      : [...this.selected, uuid];

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: FILTER_KEYS.LABELS,
          values: newSelected,
          operator: FILTER_OPERATORS.IS,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _onSearchInput(e: Event) {
    this._search = (e.target as HTMLInputElement).value;
  }

  render() {
    const filtered = this.labels.filter((l) =>
      l.name.toLowerCase().includes(this._search.toLowerCase()),
    );

    return html`
      <input
        class="search-input"
        type="text"
        placeholder="Search labels..."
        .value=${this._search}
        @input=${this._onSearchInput}
      />

      ${this.selected.length > 0
        ? html`
            <div class="limit-indicator ${this._atLimit ? 'at-limit' : ''}">
              ${this.selected.length} / ${SELECTED_LABELS_LIMIT} selected
            </div>
          `
        : ''}

      <div class="labels">
        ${filtered.length === 0
          ? html`<span class="empty-message">No labels found</span>`
          : filtered.map((label) => {
              const isSelected = this.selected.includes(label.uuid);
              const isDisabled = !isSelected && this._atLimit;
              return html`
                <div
                  class="label-item ${isDisabled ? 'disabled' : ''}"
                  @click=${() => !isDisabled && this._toggle(label.uuid)}
                >
                  <ap-checkbox ?checked=${isSelected}></ap-checkbox>
                  <div
                    class="color-dot"
                    style="background: ${label.color}"
                  ></div>
                  <span class="label-name">${label.name}</span>
                  <span class="count">${label.assetsCount}</span>
                </div>
              `;
            })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-labels': ApFilterLabels;
  }
}
