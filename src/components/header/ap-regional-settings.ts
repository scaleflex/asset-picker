import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { RegionalVariantGroup, RegionalFilters } from '../../types/filter.types';

@customElement('ap-regional-settings')
export class ApRegionalSettings extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }
    .trigger {
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
    .trigger:hover {
      background: var(--ap-muted, #f4f4f5);
      color: var(--ap-foreground, #09090b);
    }
    .trigger.active {
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .popover {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      right: 0;
      z-index: 50;
      min-width: 220px;
      max-height: 320px;
      overflow-y: auto;
      background: var(--ap-card, #fff);
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
      padding: 8px 0;
    }
    .popover.open {
      display: block;
    }
    .popover-title {
      padding: 8px 12px 4px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--ap-muted-foreground, #71717a);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .group {
      padding: 4px 0;
    }
    .group + .group {
      border-top: 1px solid var(--ap-border, #e4e4e7);
    }
    .group-label {
      padding: 6px 12px 2px;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ap-muted-foreground, #71717a);
    }
    .variant-option {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 6px 12px;
      border: none;
      background: none;
      color: var(--ap-foreground, #09090b);
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-option:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .variant-option[data-selected] {
      color: var(--ap-primary, oklch(0.65 0.19 258));
      font-weight: 500;
    }
    .check-mark {
      width: 16px;
      flex-shrink: 0;
    }
  `;

  @property({ type: Array }) groups: RegionalVariantGroup[] = [];
  @property({ type: Object }) selectedFilters: RegionalFilters = {};
  @state() private _open = false;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: Event) => {
    if (this._open && !e.composedPath().includes(this)) {
      this._open = false;
    }
  };

  private _selectVariant(groupUuid: string, apiValue: string) {
    this.dispatchEvent(new CustomEvent('regional-change', {
      detail: { groupUuid, value: apiValue },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const hasGroups = this.groups.length > 0;

    return html`
      <button
        class="trigger ${this._open ? 'active' : ''}"
        @click=${() => (this._open = !this._open)}
        aria-label="Regional settings"
        title="Regional settings"
      >
        <ap-icon name="globe" .size=${18}></ap-icon>
      </button>
      <div class="popover ${this._open ? 'open' : ''}">
        <div class="popover-title">Regional settings</div>
        ${!hasGroups ? html`
          <div style="padding: 12px 12px; font-size: 0.8125rem; color: var(--ap-muted-foreground, #71717a);">
            No regional settings configured
          </div>
        ` : nothing}
        ${this.groups.map((group) => html`
          <div class="group">
            <div class="group-label">${group.label}</div>
            ${group.variants.map((variant) => {
              const isSelected = this.selectedFilters[group.uuid] === variant.api_value;
              return html`
                <button
                  class="variant-option"
                  ?data-selected=${isSelected}
                  @click=${() => this._selectVariant(group.uuid, variant.api_value)}
                >
                  <span class="check-mark">${isSelected ? html`<ap-icon name="check" .size=${14}></ap-icon>` : ''}</span>
                  ${variant.label}
                </button>
              `;
            })}
          </div>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-regional-settings': ApRegionalSettings;
  }
}
