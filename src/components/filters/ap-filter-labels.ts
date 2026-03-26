import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
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
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .label-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .label-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .label-item.disabled:hover {
      background: none;
    }

    .label-icon {
      flex-shrink: 0;
      line-height: 0;
    }

    .label-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .count {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      flex-shrink: 0;
    }

    .chip-icon {
      flex-shrink: 0;
      line-height: 0;
    }
  `];

  @property({ type: Array }) labels: Label[] = [];
  @property({ type: Array }) selected: string[] = [];
  @query('.search-input') private _searchInput?: HTMLInputElement;
  @state() private _search = '';

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => this._searchInput?.focus());
  }

  private get _atLimit(): boolean {
    return this.selected.length >= SELECTED_LABELS_LIMIT;
  }

  private get _isSearching(): boolean {
    return this._search.trim().length > 0;
  }

  private _toggle(sid: string) {
    const isSelected = this.selected.includes(sid);

    if (!isSelected && this._atLimit) return;

    const newSelected = isSelected
      ? this.selected.filter((id) => id !== sid)
      : [...this.selected, sid];

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

  private _remove(sid: string) {
    const newSelected = this.selected.filter((id) => id !== sid);

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

  private _getLabelBySid(sid: string): Label | undefined {
    return this.labels.find((l) => l.sid === sid);
  }

  private _renderLabelItem(label: Label) {
    const isSelected = this.selected.includes(label.sid);
    const isDisabled = !isSelected && this._atLimit;

    return html`
      <div
        class="label-item ${isDisabled ? 'disabled' : ''}"
        title=${isDisabled ? `You can select up to ${SELECTED_LABELS_LIMIT} labels` : nothing}
        @click=${() => !isDisabled && this._toggle(label.sid)}
      >
        <ap-checkbox ?checked=${isSelected}></ap-checkbox>
        <span class="label-icon" style="color: ${label.color}">
          <ap-icon name="tag" .size=${16}></ap-icon>
        </span>
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
        <!-- Search input -->
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="search-input"
            type="text"
            placeholder="Search labels"
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
                  ${this.selected.map((sid) => {
                    const label = this._getLabelBySid(sid);
                    if (!label) return nothing;
                    return html`
                      <div class="chip">
                        <span class="chip-icon" style="color: ${label.color}">
                          <ap-icon name="tag" .size=${12}></ap-icon>
                        </span>
                        <span class="chip-label">${label.name}</span>
                        <button class="chip-remove" @click=${() => this._remove(sid)}>
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
          <div class="section-header">
            <span class="section-label">All labels</span>
            <button
              class="clear-btn"
              ?disabled=${this.selected.length === 0}
              @click=${this._clearAll}
            >Clear all</button>
          </div>
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
