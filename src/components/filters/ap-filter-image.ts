import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { filterPopoverStyles } from './shared/filter-styles';
import {
  RESOLUTION_OPTIONS,
  ORIENTATION_OPTIONS,
  FACES_OPTIONS,
} from './filters.constants';

@customElement('ap-filter-image')
export class ApFilterImage extends LitElement {
  static styles = [filterPopoverStyles, css`
    .options-vertical {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `];

  @property({ type: Array }) selectedResolution: string[] = [];
  @property({ type: Array }) selectedOrientation: string[] = [];
  @property({ type: Array }) selectedFaces: string[] = [];

  private get _hasSelection(): boolean {
    return (
      this.selectedResolution.length > 0 ||
      this.selectedOrientation.length > 0 ||
      this.selectedFaces.length > 0
    );
  }

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

  private _clearAll() {
    this.selectedResolution = [];
    this.selectedOrientation = [];
    this.selectedFaces = [];
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

  render() {
    return html`
      <div class="filter-content">
        <button
          class="clear-btn"
          ?disabled=${!this._hasSelection}
          @click=${this._clearAll}
        >Clear all</button>

        <div class="filter-section">
          <span class="section-label">Resolution</span>
          <div class="grid-2">
            ${RESOLUTION_OPTIONS.map(
              (opt) => html`
                <ap-checkbox
                  ?checked=${this.selectedResolution.includes(opt.value)}
                  @ap-toggle=${() => {
                    this._toggleResolution(opt.value);
                  }}
                >${opt.label}</ap-checkbox>
              `,
            )}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">Orientation</span>
          <div class="options-vertical">
            ${ORIENTATION_OPTIONS.map(
              (opt) => html`
                <ap-checkbox
                  ?checked=${this.selectedOrientation.includes(opt.value)}
                  @ap-toggle=${() => {
                    this._toggleOrientation(opt.value);
                  }}
                >${opt.label}</ap-checkbox>
              `,
            )}
          </div>
        </div>

        <div class="filter-section">
          <span class="section-label">Faces</span>
          <div class="grid-2">
            ${FACES_OPTIONS.map(
              (opt) => html`
                <ap-checkbox
                  ?checked=${this.selectedFaces.includes(opt.value)}
                  @ap-toggle=${() => {
                    this._toggleFaces(opt.value);
                  }}
                >${opt.label}</ap-checkbox>
              `,
            )}
          </div>
        </div>

        <div class="info-alert">
          <ap-icon name="info" .size=${14}></ap-icon>
          <span>Requires image processing to be enabled.</span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-image': ApFilterImage;
  }
}
