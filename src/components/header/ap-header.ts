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
      border-bottom: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .header-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .search-wrapper {
      flex: 1;
      min-width: 0;
      max-width: 548px;
      position: relative;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      pointer-events: none;
    }
    input {
      width: 100%;
      height: 36px;
      box-sizing: border-box;
      padding: 0 32px 0 38px;
      border: 1px solid var(--ap-input, oklch(0.871 0.016 241.798));
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-background, oklch(1 0 0));
      outline: none;
    }
    input:hover {
      border-color: var(--ap-secondary-foreground-50, oklch(53.03% 0.039 249.89 / 0.5));
    }
    input:focus {
      border-color: var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.1));
    }
    input:focus-visible {
      outline: none; /* already has focus ring via border-color + box-shadow */
    }
    input::placeholder {
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      font-weight: 400;
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
      color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));
      cursor: pointer;
      padding: 0;
    }
    .clear-btn:hover {
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
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
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .icon-btn:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .icon-btn:focus-visible {
      outline: 2px solid var(--ap-ring, oklch(0.578 0.198 268.129 / 0.7));
      outline-offset: -2px;
    }
    .tab-label {
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-weight: 500;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      padding: 0 4px;
      white-space: nowrap;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: auto;
    }
    .divider {
      width: 1px;
      height: 24px;
      background: var(--ap-border, oklch(92.86% 0.009 247.92));
    }
  `];

  @property() activeTab: TabKey = 'assets';
  @property({ type: Array }) tabs: TabKey[] = ['assets', 'folders'];
  @property() viewMode: ViewMode = 'grid';
  @property() searchQuery = '';
  @property({ type: Array }) regionalGroups: RegionalVariantGroup[] = [];
  @property({ type: Object }) regionalFilters: RegionalFilters = {};
  @property({ type: Boolean }) hideClose = false;
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
    const visibleTabs = TAB_OPTIONS.filter((t) => this.tabs.includes(t.value));
    const activeLabel = visibleTabs.find((t) => t.value === this.activeTab)?.label ?? visibleTabs[0]?.label ?? 'Assets';
    return html`
      <div class="header-row">
        ${visibleTabs.length > 1
          ? html`<ap-dropdown
              .value=${this.activeTab}
              .options=${visibleTabs}
              @ap-change=${this._handleTabChange}
            ></ap-dropdown>`
          : nothing
        }
        <div class="search-wrapper">
          <ap-icon class="search-icon" name="search" .size=${16}></ap-icon>
          <input
            type="text"
            placeholder=${this.activeTab === 'folders' ? 'Search folders and assets' : 'Search assets'}
            .value=${this.searchQuery}
            @input=${this._handleInput}
          />
          ${this._localSearch ? html`
            <button class="clear-btn" @click=${this._clearSearch} aria-label="Clear search">
              <ap-icon name="close" .size=${14}></ap-icon>
            </button>
          ` : ''}
        </div>
        <div class="actions">
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
            <ap-icon name=${this.viewMode === 'grid' ? 'list' : 'layout-grid'} .size=${18}></ap-icon>
          </button>
          ${this.hideClose ? nothing : html`
            <div class="divider"></div>
            <button class="icon-btn" style="color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82))" @click=${this._handleClose} aria-label="Close">
              <ap-icon name="close" .size=${18}></ap-icon>
            </button>
          `}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-header': ApHeader;
  }
}
