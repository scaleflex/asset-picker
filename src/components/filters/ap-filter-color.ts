import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  COLOR_PALETTE,
  COLOR_DIFFERENCE_OPTIONS,
  DEFAULT_COLOR_COVERAGE,
  DEFAULT_COLOR_TOLERANCE,
} from './filters.constants';

@customElement('ap-filter-color')
export class ApFilterColor extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .section {
      margin-bottom: 12px;
    }

    .section-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 6px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .palette {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 8px;
      justify-items: center;
    }

    .swatch {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: transform 100ms;
      padding: 0;
    }

    .swatch:hover {
      transform: scale(1.15);
    }

    .swatch.selected {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }

    .tolerance-options {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .tolerance-btn {
      padding: 4px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: 9999px;
      background: none;
      font-size: 0.8125rem;
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: background 150ms, border-color 150ms, color 150ms;
    }

    .tolerance-btn:hover,
    .tolerance-btn.active {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }

    .coverage-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .coverage-input {
      width: 64px;
      padding: 6px 8px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: var(--ap-font-size-sm, 0.875rem);
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      background: var(--ap-background, #fff);
    }

    .coverage-input:focus {
      outline: 2px solid var(--ap-primary, oklch(0.65 0.19 258));
      outline-offset: -1px;
    }

    .coverage-unit {
      font-size: 0.8125rem;
      color: var(--ap-muted-foreground, #71717a);
    }
  `;

  @property() selected = '';
  @property() tolerance: string = DEFAULT_COLOR_TOLERANCE;
  @property() coverage: string = DEFAULT_COLOR_COVERAGE;

  private _selectColor(color: string) {
    this.selected = this.selected === color ? '' : color;
    this._dispatchChange();
  }

  private _selectTolerance(value: string) {
    this.tolerance = value;
    this._dispatchChange();
  }

  private _handleCoverageInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 0 && num <= 100) {
      this.coverage = String(num);
      this._dispatchChange();
    }
  }

  private _dispatchChange() {
    if (!this.selected) {
      this.dispatchEvent(
        new CustomEvent('filter-change', {
          detail: { key: 'color', values: '', operator: ':' },
          bubbles: true,
          composed: true,
        }),
      );
      return;
    }

    const value = `${this.selected} ${this.tolerance} ${this.tolerance} ${this.coverage}`;
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: { key: 'color', values: value, operator: ':' },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="section">
        <div class="palette">
          ${COLOR_PALETTE.map(
            (color) => html`
              <button
                class="swatch ${this.selected === color ? 'selected' : ''}"
                style="background:${color};${color === '#ffffff' ? ' border: 1px solid #e4e4e7;' : ''}"
                @click=${() => this._selectColor(color)}
                title=${color}
              ></button>
            `,
          )}
        </div>
      </div>

      <div class="section">
        <div class="section-label">Tolerance</div>
        <div class="tolerance-options">
          ${COLOR_DIFFERENCE_OPTIONS.map(
            (opt) => html`
              <button
                class="tolerance-btn ${this.tolerance === opt.value ? 'active' : ''}"
                @click=${() => this._selectTolerance(opt.value)}
              >
                ${opt.label}
              </button>
            `,
          )}
        </div>
      </div>

      <div class="section">
        <div class="section-label">Coverage</div>
        <div class="coverage-row">
          <input
            type="number"
            class="coverage-input"
            min="0"
            max="100"
            .value=${this.coverage}
            @change=${this._handleCoverageInput}
          />
          <span class="coverage-unit">%</span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-color': ApFilterColor;
  }
}
