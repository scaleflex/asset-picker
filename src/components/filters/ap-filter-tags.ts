import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { SELECTED_TAGS_LIMIT } from './filters.constants';
import { filterPopoverStyles } from './shared/filter-styles';
import { resetStyles } from '../../styles/shared-styles';
import type { TagWithLabel } from '../../types/tag.types';

@customElement('ap-filter-tags')
export class ApFilterTags extends LitElement {
  static styles = [resetStyles, filterPopoverStyles, css`
    .tag-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .tag-item:hover:not(.disabled) {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .tag-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .tag-item.disabled:hover {
      background: none;
    }

    .tag-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .hint-message {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      padding: 8px 0;
    }

    /* Sticky search within popover scroll */
    .filter-header {
      position: sticky;
      top: -10px;
      z-index: 1;
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .filter-header .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }

    .tag-search {
      width: 100%;
      padding: 8px 32px 8px 32px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .tag-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
    }

    .search-clear {
      top: 50%;
      transform: translateY(-50%);
      right: 8px;
    }

    .options-list {
      max-height: none;
      overflow-y: visible;
    }
  `];

  @property({ type: Array }) tags: TagWithLabel[] = [];
  @property({ type: Array }) selected: string[] = [];
  @property() filterKey: string = FILTER_KEYS.TAGS;
  @query('.tag-search') private _searchInput?: HTMLInputElement;
  @state() private _search = '';

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => this._searchInput?.focus());
  }

  private get _suggestedTags(): TagWithLabel[] {
    return this.tags.filter((t) => t.primary);
  }

  private get _otherTags(): TagWithLabel[] {
    return this.tags.filter((t) => !t.primary);
  }

  private get _atLimit(): boolean {
    return this.selected.length >= SELECTED_TAGS_LIMIT;
  }

  private get _isSearching(): boolean {
    return this._search.trim().length > 0;
  }

  private _toggle(sid: string) {
    const isSelected = this.selected.includes(sid);

    if (!isSelected && this._atLimit) return;

    const newSelected = isSelected
      ? this.selected.filter((s) => s !== sid)
      : [...this.selected, sid];

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: this.filterKey,
          values: newSelected,
          operator: FILTER_OPERATORS.IS,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _remove(sid: string) {
    const newSelected = this.selected.filter((s) => s !== sid);

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: this.filterKey,
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
          key: this.filterKey,
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

  private _getTagBySid(sid: string): TagWithLabel | undefined {
    return this.tags.find((t) => t.sid === sid);
  }

  private _renderTagItem(tag: TagWithLabel) {
    const isSelected = this.selected.includes(tag.sid);
    const isDisabled = !isSelected && this._atLimit;

    return html`
      <div
        class="tag-item ${isDisabled ? 'disabled' : ''}"
        title=${isDisabled ? `You can select up to ${SELECTED_TAGS_LIMIT} tags` : nothing}
        @click=${() => !isDisabled && this._toggle(tag.sid)}
      >
        <ap-checkbox ?checked=${isSelected}></ap-checkbox>
        <span class="tag-name">${tag.label}</span>
      </div>
    `;
  }

  render() {
    const query = this._search.toLowerCase().trim();

    return html`
      <div class="filter-content">
        <div class="filter-header">
          <ap-icon class="search-icon" name="search" .size=${14}></ap-icon>
          <input
            class="tag-search"
            type="text"
            placeholder="Search tags"
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
                <div class="section-header">
                  <span class="section-label">Selected</span>
                  <button
                    class="clear-btn"
                    @click=${this._clearAll}
                  >Clear all</button>
                </div>
                <div class="chips-wrap">
                  ${this.selected.map((sid) => {
                    const tag = this._getTagBySid(sid);
                    if (!tag) return nothing;
                    return html`
                      <div class="chip">
                        <span class="chip-label">${tag.label}</span>
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

        ${this._isSearching
          ? this._renderSearchResults(query)
          : this._renderSections()}

        <!-- Limit warning -->
        ${this._atLimit
          ? html`
              <div class="info-alert">
                <ap-icon name="info" .size=${14}></ap-icon>
                <span>You can select up to ${SELECTED_TAGS_LIMIT} tags.</span>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderSearchResults(query: string) {
    const match = (s: string) => s.toLowerCase().includes(query);
    const filteredSuggested = this._suggestedTags.filter((t) => match(t.label)).slice(0, 50);
    const filteredOther = this._otherTags.filter((t) => match(t.label)).slice(0, 50);

    if (filteredSuggested.length === 0 && filteredOther.length === 0) {
      return html`<div class="no-results">No tags found</div>`;
    }

    return html`
      ${filteredSuggested.length > 0
        ? html`
            <div class="filter-section">
              <div class="section-header">
                <span class="section-label">Suggested tags</span>
                <button
                  class="clear-btn"
                  ?disabled=${this.selected.length === 0}
                  @click=${this._clearAll}
                >Clear all</button>
              </div>
              <div class="options-list short">
                ${filteredSuggested.map((tag) => this._renderTagItem(tag))}
              </div>
            </div>
          `
        : nothing}

      ${filteredOther.length > 0
        ? html`
            <div class="filter-section">
              <div class="section-header">
                ${filteredSuggested.length === 0
                  ? html`<span class="section-label">All tags</span>
                    <button
                      class="clear-btn"
                      ?disabled=${this.selected.length === 0}
                      @click=${this._clearAll}
                    >Clear all</button>`
                  : html`<span class="section-label">All tags</span>`}
              </div>
              <div class="options-list">
                ${filteredOther.map((tag) => this._renderTagItem(tag))}
              </div>
            </div>
          `
        : nothing}
    `;
  }

  private _renderSections() {
    if (this.tags.length === 0) {
      return html`<div class="no-results">No tags available</div>`;
    }

    const suggestedTags = this._suggestedTags.filter(
      (t) => !this.selected.includes(t.sid),
    );

    return html`
      <div class="filter-section">
        ${suggestedTags.length > 0
          ? html`<span class="section-label">Suggested tags</span>`
          : nothing}
        ${suggestedTags.length > 0
          ? html`
              <div class="options-list short">
                ${suggestedTags.map((tag) => this._renderTagItem(tag))}
              </div>
            `
          : nothing}
      </div>

      ${suggestedTags.length > 0 ? html`<div class="separator"></div>` : nothing}

      <div class="hint-message">Find more tags by using search</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-tags': ApFilterTags;
  }
}
