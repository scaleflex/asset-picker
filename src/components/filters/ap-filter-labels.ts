import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { SELECTED_LABELS_LIMIT } from './filters.constants';
import { filterPopoverStyles } from './shared/filter-styles';
import type { Label } from '../../types/label.types';

@customElement('ap-filter-labels')
export class ApFilterLabels extends LitElement {
  static styles = [filterPopoverStyles, css`
    .label-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover:not(.disabled) {
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

    .color-dot.small {
      width: 8px;
      height: 8px;
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

    .chip-color-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  `];

  @property({ type: Array }) labels: Label[] = [];
  @property({ type: Array }) selected: string[] = [];
  @state() private _search = '';

  private get _atLimit(): boolean {
    return this.selected.length >= SELECTED_LABELS_LIMIT;
  }

  private get _isSearching(): boolean {
    return this._search.trim().length > 0;
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

  private _remove(uuid: string) {
    const newSelected = this.selected.filter((id) => id !== uuid);

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

  private _clearAll() {
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: FILTER_KEYS.LABELS,
          values: [],
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

  private _clearSearch() {
    this._search = '';
  }

  private _getLabelByUuid(uuid: string): Label | undefined {
    return this.labels.find((l) => l.uuid === uuid);
  }

  private _renderLabelItem(label: Label) {
    const isSelected = this.selected.includes(label.uuid);
    const isDisabled = !isSelected && this._atLimit;

    return html`
      <div
        class="label-item ${isDisabled ? 'disabled' : ''}"
        title=${isDisabled ? `You can select up to ${SELECTED_LABELS_LIMIT} labels` : nothing}
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
  }

  render() {
    const query = this._search.toLowerCase().trim();
    const filtered = this.labels.filter((l) =>
      l.name.toLowerCase().includes(query),
    );

    return html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${this.selected.length === 0}
          @click=${this._clearAll}
        >Clear all</button>

        <!-- Search input -->
        <div class="search-wrapper">
          <input
            class="search-input"
            type="text"
            placeholder="Search labels..."
            .value=${this._search}
            @input=${this._onSearchInput}
          />
          ${this._search
            ? html`
                <button class="search-clear" @click=${this._clearSearch}>
                  <ap-icon name="close" .size=${12}></ap-icon>
                </button>
              `
            : nothing}
        </div>

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching && this.selected.length > 0
          ? html`
              <div class="filter-section">
                <div class="chips-wrap">
                  ${this.selected.map((uuid) => {
                    const label = this._getLabelByUuid(uuid);
                    if (!label) return nothing;
                    return html`
                      <div class="chip">
                        <div
                          class="chip-color-dot"
                          style="background: ${label.color}"
                        ></div>
                        <span class="chip-label">${label.name}</span>
                        <button class="chip-remove" @click=${() => this._remove(uuid)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `;
                  })}
                </div>
              </div>
            `
          : nothing}

        <!-- Labels list -->
        <div class="filter-section">
          <span class="section-label">All labels</span>
          <div class="options-list">
            ${filtered.length === 0
              ? html`<div class="no-results">No labels found</div>`
              : filtered.map((label) => this._renderLabelItem(label))}
          </div>
        </div>

        <!-- Limit warning -->
        ${this._atLimit
          ? html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${SELECTED_LABELS_LIMIT} labels.</span>
              </div>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-labels': ApFilterLabels;
  }
}
