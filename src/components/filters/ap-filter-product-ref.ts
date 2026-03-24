import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query as queryDecorator } from 'lit/decorators.js';
import { FILTER_KEYS, FILTER_OPERATORS } from '../../types/filter.types';
import { filterPopoverStyles } from './shared/filter-styles';
import { resetStyles } from '../../styles/shared-styles';
import type { ApiClient } from '../../services/api-client';

const MAX_PRODUCTS = 10;
const DEBOUNCE_MS = 300;

interface Product {
  ref: string;
}

/**
 * Removes redundant specific values when a wildcard covers them.
 * E.g., if both "SKU*" and "SKU_001" are selected, "SKU_001" is removed
 * because "SKU*" already covers it.
 */
function cleanFilters(values: string[]): string[] {
  return values.filter(
    (value) =>
      value.toLowerCase().includes('*') ||
      !values.some(
        (v) =>
          v.toLowerCase().includes('*') &&
          value.toLowerCase().startsWith(v.slice(0, -1).toLowerCase()),
      ),
  );
}

@customElement('ap-filter-product-ref')
export class ApFilterProductRef extends LitElement {
  static styles = [resetStyles, filterPopoverStyles, css`
    .product-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 8px;
      border-radius: var(--ap-radius-sm, 6px);
      cursor: pointer;
      transition: background 150ms;
    }

    .product-item:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .product-name {
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Sticky search within popover scroll */
    .filter-header {
      position: sticky;
      top: -10px;
      z-index: 2;
      background: var(--ap-card, oklch(1 0 0));
      margin: -10px -8px 10px;
    }

    .product-search {
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: transparent;
      outline: none;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .product-search::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .search-clear {
      top: 10px;
      right: 8px;
    }

    .options-list {
      max-height: none;
      overflow-y: visible;
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 16px 8px 20px;
      gap: 4px;
    }

    .placeholder-title {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .placeholder-text {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .add-list-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      padding: 6px 14px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      background: none;
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      cursor: pointer;
      transition: background 150ms;
    }

    .add-list-btn:hover {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
    }

    /* Add list dialog overlay */
    .dialog-overlay {
      position: fixed;
      inset: 0;
      z-index: 1360;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .dialog {
      background: var(--ap-card, oklch(1 0 0));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1);
      width: 420px;
      max-width: 90vw;
      padding: 0;
    }

    .dialog-header {
      padding: 16px 20px;
      font-size: 1rem;
      font-weight: 600;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .dialog-body {
      padding: 16px 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .dialog-body .info-alert {
      margin-bottom: 6px;
    }

    .dialog-textarea {
      width: 100%;
      min-height: 150px;
      max-height: 300px;
      padding: 8px 10px;
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      resize: vertical;
      outline: none;
    }

    .dialog-textarea:focus {
      border-color: var(--ap-primary, oklch(0.578 0.198 268.129));
    }

    .dialog-textarea::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
    }

    .dialog-footer {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 20px;
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }

    .dialog-btn {
      padding: 8px 16px;
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      cursor: pointer;
      transition: background 150ms;
    }

    .dialog-btn-cancel {
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      background: var(--ap-background, oklch(1 0 0));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }

    .dialog-btn-cancel:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }

    .dialog-btn-primary {
      border: none;
      background: var(--ap-primary, oklch(0.578 0.198 268.129));
      color: var(--ap-primary-foreground, oklch(1 0 0));
    }

    .dialog-btn-primary:hover {
      opacity: 0.9;
    }

    .loading-skeleton {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
    }

    .skeleton-item {
      height: 32px;
      border-radius: var(--ap-radius-sm, 6px);
      background: linear-gradient(90deg, var(--ap-muted, oklch(0.974 0.006 239.819)) 25%, #e8e8ea 50%, var(--ap-muted, oklch(0.974 0.006 239.819)) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    @media (prefers-reduced-motion: reduce) {
      .skeleton-item { animation: none; }
    }

    .wildcard-tooltip {
      font-size: 0.75rem;
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      margin-left: 4px;
    }
  `];

  @property({ type: Array }) selected: string[] = [];
  @property({ attribute: false }) apiClient?: ApiClient;
  @queryDecorator('.product-search') private _searchInput?: HTMLInputElement;
  @state() private _search = '';
  @state() private _debouncedSearch = '';
  @state() private _products: Product[] = [];
  @state() private _isLoading = false;
  @state() private _showAddList = false;
  @state() private _addListText = '';

  private _debounceTimer?: ReturnType<typeof setTimeout>;

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => this._searchInput?.focus());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
  }

  private get _isSearching(): boolean {
    return this._debouncedSearch.length > 0;
  }

  private _emit(values: string[]) {
    const cleaned = cleanFilters(values);
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: FILTER_KEYS.PRODUCT_REF,
          values: cleaned,
          operator: FILTER_OPERATORS.IS,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _toggle(ref: string) {
    const isSelected = this.selected.includes(ref);
    const newSelected = isSelected
      ? this.selected.filter((s) => s !== ref)
      : [...this.selected, ref];
    this._emit(newSelected);
  }

  private _remove(ref: string) {
    this._emit(this.selected.filter((s) => s !== ref));
  }

  private _clearAll() {
    this._emit([]);
    this._search = '';
    this._debouncedSearch = '';
    this._products = [];
  }

  private _onSearchInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this._search = value;

    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => {
      const trimmed = value.trim().toLowerCase();
      this._debouncedSearch = trimmed;
      if (trimmed) {
        this._fetchProducts(trimmed);
      } else {
        this._products = [];
        this._isLoading = false;
      }
    }, DEBOUNCE_MS);
  }

  private _clearSearch() {
    this._search = '';
    this._debouncedSearch = '';
    this._products = [];
    this._isLoading = false;
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
  }

  private async _fetchProducts(query: string) {
    if (!this.apiClient) return;

    this._isLoading = true;
    try {
      const response = await this.apiClient.request<{ products: Product[] }>('/products', {
        q: `reference~^${query}`,
      });
      // Only update if query is still current
      if (this._debouncedSearch === query) {
        this._products = response.products ?? [];
      }
    } catch {
      if (this._debouncedSearch === query) {
        this._products = [];
      }
    } finally {
      if (this._debouncedSearch === query) {
        this._isLoading = false;
      }
    }
  }

  // ── Add List Dialog ──

  private _openAddList() {
    this._showAddList = true;
    this._addListText = '';
  }

  private _closeAddList() {
    this._showAddList = false;
    this._addListText = '';
  }

  private _onAddListInput(e: Event) {
    this._addListText = (e.target as HTMLTextAreaElement).value;
  }

  private _onAddListKeydown(e: KeyboardEvent) {
    // Allow Enter for newlines in textarea, but stop propagation so
    // parent components (e.g., filter popover) don't handle it
    if (e.key === 'Enter' && !e.shiftKey) {
      e.stopPropagation();
    }
  }

  private _submitAddList() {
    const refs = this._addListText
      .split('\n')
      .map((ref) => ref.trim())
      .filter((ref) => ref !== '');
    if (refs.length > 0) {
      // Merge with existing selection, deduplicating
      const existing = new Set(this.selected);
      const merged = [...this.selected, ...refs.filter((r) => !existing.has(r))];
      this._emit(merged);
    }
    this._closeAddList();
  }

  private _renderProductItem(ref: string) {
    const isSelected = this.selected.includes(ref);

    return html`
      <div
        class="product-item"
        @click=${() => this._toggle(ref)}
      >
        <ap-checkbox ?checked=${isSelected}></ap-checkbox>
        <span class="product-name">${ref}</span>
      </div>
    `;
  }

  render() {
    const noSelection = this.selected.length === 0;

    return html`
      <div class="filter-content">
        <div class="filter-header">
          <input
            class="product-search"
            type="text"
            placeholder="Search product references"
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

        <!-- Clear all (when has selection) -->
        ${!noSelection
          ? html`
              <div class="section-header">
                <span class="section-label"></span>
                <button
                  class="clear-btn"
                  style="position: static"
                  @click=${this._clearAll}
                >Clear all</button>
              </div>
            `
          : nothing}

        <!-- Selected chips (when not searching) -->
        ${!this._isSearching && this.selected.length > 0
          ? html`
              <div class="filter-section">
                <span class="section-label">Selected</span>
                <div class="chips-wrap">
                  ${this.selected.map(
                    (ref) => html`
                      <div class="chip">
                        <span class="chip-label">${ref}</span>
                        <button class="chip-remove" @click=${() => this._remove(ref)}>
                          <ap-icon name="close" .size=${10}></ap-icon>
                        </button>
                      </div>
                    `,
                  )}
                </div>
              </div>
            `
          : nothing}

        <!-- Search results -->
        ${this._isSearching
          ? html`
              <div class="filter-section">
                <span class="section-label">Product references</span>
                <div class="options-list">
                  <!-- Wildcard "Select all" option when multiple results -->
                  ${this._products.length > 1
                    ? this._renderProductItem(`${this._search.trim()}*`)
                    : nothing}
                  ${this._products.map(({ ref }) => this._renderProductItem(ref))}
                </div>
              </div>
            `
          : nothing}

        <!-- Placeholder (when not searching) -->
        ${!this._isSearching
          ? html`
              <div class="placeholder">
                ${noSelection
                  ? html`<ap-icon name="box" .size=${40} style="color: var(--ap-border, oklch(92.86% 0.009 247.92)); margin-bottom: 4px;"></ap-icon>`
                  : nothing}
                <div class="placeholder-title">Find product reference</div>
                <div class="placeholder-text">By using the search or pressing the button below to import the product references list.</div>
                <button class="add-list-btn" @click=${this._openAddList}>
                  <ap-icon name="plus" .size=${14}></ap-icon>
                  Add list
                </button>
              </div>
            `
          : nothing}

        <!-- Loading skeleton -->
        ${this._isLoading
          ? html`
              <div class="loading-skeleton">
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
                <div class="skeleton-item"></div>
              </div>
            `
          : nothing}

        <!-- No results -->
        ${this._isSearching && !this._isLoading && this._products.length === 0
          ? html`<div class="no-results">No results found</div>`
          : nothing}
      </div>

      <!-- Add List Dialog -->
      ${this._showAddList
        ? html`
            <div class="dialog-overlay" @click=${(e: Event) => { if (e.target === e.currentTarget) this._closeAddList(); }}>
              <div class="dialog">
                <div class="dialog-header">Add products references list</div>
                <div class="dialog-body">
                  <div class="info-alert" style="margin-top: 0;">
                    <ap-icon name="info" .size=${14}></ap-icon>
                    <span>Use "*" to select all references starting with your text.</span>
                  </div>
                  <label class="input-label" style="margin-bottom: 0; font-weight: 400; color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));">Product references</label>
                  <textarea
                    class="dialog-textarea"
                    placeholder="Enter product references separated by new lines"
                    .value=${this._addListText}
                    @input=${this._onAddListInput}
                    @keydown=${this._onAddListKeydown}
                  ></textarea>
                </div>
                <div class="dialog-footer">
                  <button class="dialog-btn dialog-btn-cancel" @click=${this._closeAddList}>Cancel</button>
                  <button class="dialog-btn dialog-btn-primary" @click=${this._submitAddList}>Continue</button>
                </div>
              </div>
            </div>
          `
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-product-ref': ApFilterProductRef;
  }
}
