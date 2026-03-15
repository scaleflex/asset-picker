import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { SELECTED_TAGS_LIMIT } from './filters.constants';
import { filterPopoverStyles } from './shared/filter-styles';
import type { TagWithLabel } from '../../types/tag.types';

@customElement('ap-filter-tags')
export class ApFilterTags extends LitElement {
  static styles = [filterPopoverStyles, css`
    .tag-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .tag-item:hover:not(.disabled) {
      background: var(--ap-muted, #f4f4f5);
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
      color: var(--ap-foreground, #09090b);
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .hint-message {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
      padding: 8px 0;
    }

    /* Let the popover handle scrolling — no inner scroll */
    .options-list {
      max-height: none;
      overflow-y: visible;
    }
  `];

  @property({ type: Array }) tags: TagWithLabel[] = [];
  @property({ type: Array }) selected: string[] = [];
  @property() filterKey: string = FILTER_KEYS.TAGS;
  @state() private _search = '';

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
            placeholder="Search tags..."
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
              <span class="section-label">Suggested tags</span>
              <div class="options-list short">
                ${filteredSuggested.map((tag) => this._renderTagItem(tag))}
              </div>
            </div>
          `
        : nothing}

      ${filteredOther.length > 0
        ? html`
            <div class="filter-section">
              <span class="section-label">All tags</span>
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
      ${suggestedTags.length > 0
        ? html`
            <div class="filter-section">
              <span class="section-label">Suggested tags</span>
              <div class="options-list short">
                ${suggestedTags.map((tag) => this._renderTagItem(tag))}
              </div>
            </div>

            <div class="separator"></div>
          `
        : nothing}

      <div class="hint-message">Find more tags by using search</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-tags': ApFilterTags;
  }
}
