import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { debounce } from '../../utils/debounce';
import { resetStyles } from '../../styles/shared-styles';
import type { ViewMode, TabKey } from '../../types/config.types';
import type { RegionalVariantGroup, RegionalFilters } from '../../types/filter.types';
import './ap-regional-settings';

const TAB_OPTIONS: { value: TabKey; label: string; icon: string }[] = [
  { value: 'assets', label: 'Assets', icon: 'gallery-vertical-end' },
  { value: 'folders', label: 'Folders', icon: 'folder-open' },
];

@customElement('ap-header')
export class ApHeader extends LitElement {
  static styles = [resetStyles, css`
    :host {
      display: block;
      padding: 16px 20px;
    }
    .header-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .search-wrapper {
      flex: 1;
      position: relative;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, #71717a);
      pointer-events: none;
    }
    input {
      width: 100%;
      padding: 8px 32px 8px 38px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, #09090b);
      background: var(--ap-background, #fff);
      outline: none;
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }
    input:focus-visible {
      outline: none; /* already has focus ring via border-color + box-shadow */
    }
    input::placeholder {
      color: var(--ap-muted-foreground, #71717a);
    }
    .clear-btn {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: none;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
      padding: 0;
    }
    .clear-btn:hover {
      color: var(--ap-foreground, #09090b);
      background: var(--ap-muted, #f4f4f5);
    }
    .icon-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      color: var(--ap-muted-foreground, #71717a);
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.65 0.19 258));
      outline-offset: -2px;
    }
    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, #e4e4e7);
    }
  `];

  @property() activeTab: TabKey = 'assets';
  @property({ type: Array }) hiddenTabs: TabKey[] = [];
  @property() viewMode: ViewMode = 'grid';
  @property() searchQuery = '';
  @property({ type: Array }) regionalGroups: RegionalVariantGroup[] = [];
  @property({ type: Object }) regionalFilters: RegionalFilters = {};
  @state() private _localSearch = '';

  private _debouncedSearch = debounce((value: string) => {
    if (value.length === 0 || value.length >= 3) {
      this.dispatchEvent(new CustomEvent('search-change', { detail: { value }, bubbles: true, composed: true }));
    }
  }, 300);

  disconnectedCallback() {
    super.disconnectedCallback();
    this._debouncedSearch.cancel();
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('searchQuery')) {
      this._localSearch = this.searchQuery;
    }
  }

  private _handleInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this._localSearch = value;
    this._debouncedSearch(value);
  }

  private _clearSearch() {
    this._localSearch = '';
    this._debouncedSearch.cancel();
    this.dispatchEvent(new CustomEvent('search-change', { detail: { value: '' }, bubbles: true, composed: true }));
  }

  private _toggleView() {
    const mode = this.viewMode === 'grid' ? 'list' : 'grid';
    this.dispatchEvent(new CustomEvent('view-change', { detail: { mode }, bubbles: true, composed: true }));
  }

  private _handleTabChange(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('tab-change', { detail: { tab: e.detail.value }, bubbles: true, composed: true }));
  }

  private _handleRegionalChange(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('regional-change', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('ap-close', { bubbles: true, composed: true }));
  }

  render() {
    const visibleTabs = TAB_OPTIONS.filter((t) => !this.hiddenTabs.includes(t.value));
    return html`
      <div class="header-row">
        <ap-dropdown
          .value=${this.activeTab}
          .options=${visibleTabs}
          @ap-change=${this._handleTabChange}
        ></ap-dropdown>
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder="Search assets..."
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          ${this._localSearch ? html`
            <button class="clear-btn" @click=${this._clearSearch} aria-label="Clear search">
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          ` : ''}
        </div>
        <ap-regional-settings
          .groups=${this.regionalGroups}
          .selectedFilters=${this.regionalFilters}
          @regional-change=${this._handleRegionalChange}
        ></ap-regional-settings>
        <button
          class="icon-btn"
          @click=${this._toggleView}
          aria-label=${this.viewMode === 'grid' ? 'Switch to list view' : 'Switch to grid view'}
          title=${this.viewMode === 'grid' ? 'List view' : 'Grid view'}
        >
          <ap-icon name=${this.viewMode === 'grid' ? 'list' : 'grid'} .size=${18}></ap-icon>
        </button>
        <div class="divider"></div>
        <button class="icon-btn" @click=${this._handleClose} aria-label="Close">
          <ap-icon name="close" .size=${18}></ap-icon>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-header': ApHeader;
  }
}
