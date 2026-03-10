import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  RESOLUTION_OPTIONS,
  ORIENTATION_OPTIONS,
  FACES_OPTIONS,
} from './filters.constants';

@customElement('ap-filter-image')
export class ApFilterImage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .section {
      margin-bottom: 12px;
    }

    .section:last-child {
      margin-bottom: 0;
    }

    .section-label {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--ap-muted-foreground, #71717a);
      margin-bottom: 6px;
      font-family: var(--ap-font-family, system-ui, sans-serif);
    }

    .options {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .option {
      padding: 4px 12px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      background: none;
      font-size: var(--ap-font-size-sm, 0.875rem);
      cursor: pointer;
      color: var(--ap-foreground, #09090b);
      font-family: var(--ap-font-family, system-ui, sans-serif);
      transition: background 150ms, border-color 150ms, color 150ms;
    }

    .option:hover {
      background: var(--ap-muted, #f4f4f5);
    }

    .option.selected {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `;

  @property({ type: Array }) selectedResolution: string[] = [];
  @property({ type: Array }) selectedOrientation: string[] = [];
  @property({ type: Array }) selectedFaces: string[] = [];

  private _toggle(list: string[], value: string): string[] {
    return list.includes(value)
      ? list.filter((v) => v !== value)
      : [...list, value];
  }

  private _toggleResolution(value: string) {
    this.selectedResolution = this._toggle(this.selectedResolution, value);
    this._dispatchChange();
  }

  private _toggleOrientation(value: string) {
    this.selectedOrientation = this._toggle(this.selectedOrientation, value);
    this._dispatchChange();
  }

  private _toggleFaces(value: string) {
    this.selectedFaces = this._toggle(this.selectedFaces, value);
    this._dispatchChange();
  }

  private _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          key: 'image',
          values: {
            resolution: this.selectedResolution,
            orientation: this.selectedOrientation,
            faces: this.selectedFaces,
          },
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _renderSection(
    label: string,
    options: { value: string; label: string }[],
    selected: string[],
    toggleFn: (value: string) => void,
  ) {
    return html`
      <div class="section">
        <div class="section-label">${label}</div>
        <div class="options">
          ${options.map(
            (opt) => html`
              <button
                class="option ${selected.includes(opt.value) ? 'selected' : ''}"
                @click=${() => toggleFn(opt.value)}
              >
                ${opt.label}
              </button>
            `,
          )}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      ${this._renderSection(
        'Resolution',
        RESOLUTION_OPTIONS,
        this.selectedResolution,
        (v) => this._toggleResolution(v),
      )}
      ${this._renderSection(
        'Orientation',
        ORIENTATION_OPTIONS,
        this.selectedOrientation,
        (v) => this._toggleOrientation(v),
      )}
      ${this._renderSection(
        'Faces',
        FACES_OPTIONS,
        this.selectedFaces,
        (v) => this._toggleFaces(v),
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-image': ApFilterImage;
  }
}
