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
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
      cursor: pointer;
    }
    .trigger:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
    }
    .trigger.active {
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
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
      background: var(--ap-card, oklch(1 0 0));
      border: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
      border-radius: var(--ap-radius, 8px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
      padding: 0;
    }
    .popover.open {
      display: block;
    }
    .group {
      padding: 4px 0;
    }
    .group + .group {
      border-top: 1px solid var(--ap-border, oklch(92.86% 0.009 247.92));
    }
    .group-label {
      padding: 6px 12px 8px;
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--ap-secondary-foreground, oklch(53.03% 0.039 249.89));
    }
    .variant-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      padding: 6px 16px 6px 24px;
      border: none;
      background: none;
      color: var(--ap-foreground, oklch(0.37 0.022 248.413));
      font-size: var(--ap-font-size-sm, 0.875rem);
      font-family: inherit;
      text-align: left;
      cursor: pointer;
      border-radius: 0;
    }
    .variant-label {
      flex: 1;
    }
    .variant-option:hover {
      background: var(--ap-muted, oklch(0.974 0.006 239.819));
    }
    .variant-option[data-selected] {
      background: var(--ap-primary-10, oklch(0.578 0.198 268.129 / 0.08));
      color: var(--ap-primary, oklch(0.578 0.198 268.129));
      font-weight: 400;
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
        ${!hasGroups ? html`
          <div style="padding: 12px 12px; font-size: 0.8125rem; color: var(--ap-muted-foreground, oklch(0.685 0.033 249.82));">
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
                  <span class="variant-label">${variant.label}</span>
                  <span class="check-mark">${isSelected ? html`<ap-icon name="check" .size=${14}></ap-icon>` : ''}</span>
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
