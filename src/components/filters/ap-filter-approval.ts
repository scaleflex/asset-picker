import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  APPROVAL_FILTER_KEYS,
  type ApprovalFilterKey,
} from '../../types/filter.types';
import {
  APPROVAL_STATUS_OPTIONS,
  APPROVAL_OPERATOR_OPTIONS,
  WITHIN_DATE_RANGE_OPTIONS,
  EMPTY_OPTIONS,
} from './filters.constants';

@customElement('ap-filter-approval')
export class ApFilterApproval extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .section {
      margin-bottom: 16px;
    }
    .section:last-child {
      margin-bottom: 0;
    }
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .section-title {
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--ap-foreground, #09090b);
    }
    .options {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .text-input {
      width: 100%;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      outline: none;
      box-sizing: border-box;
    }
    .text-input:focus {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
      box-shadow: 0 0 0 2px var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
    }
    .operator-row {
      margin-bottom: 6px;
    }
    .date-options {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .date-option {
      display: flex;
      align-items: center;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      cursor: pointer;
      transition: all 150ms;
    }
    .date-option:hover {
      background: var(--ap-muted, #f4f4f5);
    }
    .date-option.selected {
      background: var(--ap-primary-10, oklch(0.65 0.19 258 / 0.1));
      border-color: var(--ap-primary-20, oklch(0.65 0.19 258 / 0.25));
      color: var(--ap-primary, oklch(0.65 0.19 258));
    }
    .date-input-row {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
    .date-input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid var(--ap-border, #e4e4e7);
      border-radius: var(--ap-radius-sm, 6px);
      font-size: 0.8125rem;
      background: var(--ap-background, #fff);
      color: var(--ap-foreground, #09090b);
      outline: none;
    }
    .date-input:focus {
      border-color: var(--ap-primary, oklch(0.65 0.19 258));
    }
  `;

  // Selected values for each sub-filter
  @property({ type: Array }) selectedStatus: string[] = [];
  @property() statusOperator: string = ':=';
  @property() approverValue: string = '';
  @property() approverOperator: string = ':';
  @property() requesterValue: string = '';
  @property() requesterOperator: string = ':';
  @property() dueDatePreset: string = '';
  @property() dueDateFrom: string = '';
  @property() dueDateTo: string = '';

  @state() private _expandedSection: ApprovalFilterKey | null = null;

  private _toggleSection(key: ApprovalFilterKey) {
    this._expandedSection = this._expandedSection === key ? null : key;
  }

  private _toggleStatus(value: string) {
    const newSelected = this.selectedStatus.includes(value)
      ? this.selectedStatus.filter((v) => v !== value)
      : [...this.selectedStatus, value];
    this._emitChange(APPROVAL_FILTER_KEYS.STATUS, newSelected, this.statusOperator);
  }

  private _handleStatusOperator(e: CustomEvent) {
    const operator = e.detail.value;
    this._emitChange(APPROVAL_FILTER_KEYS.STATUS, this.selectedStatus, operator);
  }

  private _handleApproverInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this._emitChange(APPROVAL_FILTER_KEYS.APPROVER, value ? [value] : [], this.approverOperator);
  }

  private _handleApproverOperator(e: CustomEvent) {
    const operator = e.detail.value;
    this._emitChange(APPROVAL_FILTER_KEYS.APPROVER, this.approverValue ? [this.approverValue] : [], operator);
  }

  private _handleRequesterInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this._emitChange(APPROVAL_FILTER_KEYS.REQUESTOR, value ? [value] : [], this.requesterOperator);
  }

  private _handleRequesterOperator(e: CustomEvent) {
    const operator = e.detail.value;
    this._emitChange(APPROVAL_FILTER_KEYS.REQUESTOR, this.requesterValue ? [this.requesterValue] : [], operator);
  }

  private _handleDueDatePreset(preset: string) {
    const newPreset = this.dueDatePreset === preset ? '' : preset;
    this._emitChange(APPROVAL_FILTER_KEYS.DUE_DATE, newPreset ? [newPreset] : [], ':');
  }

  private _handleDueDateFrom(e: Event) {
    const from = (e.target as HTMLInputElement).value;
    this._emitDateChange(from, this.dueDateTo);
  }

  private _handleDueDateTo(e: Event) {
    const to = (e.target as HTMLInputElement).value;
    this._emitDateChange(this.dueDateFrom, to);
  }

  private _emitDateChange(from: string, to: string) {
    const values: string[] = [];
    if (from) values.push(from);
    if (to) values.push(to);
    this.dispatchEvent(new CustomEvent('filter-change', {
      detail: {
        key: APPROVAL_FILTER_KEYS.DUE_DATE,
        values,
        operator: from && to ? '..' : (from ? '>=' : '<='),
      },
      bubbles: true,
      composed: true,
    }));
  }

  private _emitChange(key: ApprovalFilterKey, values: string[], operator: string) {
    this.dispatchEvent(new CustomEvent('filter-change', {
      detail: { key, values, operator },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <!-- Approval Status -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Status</span>
        </div>
        <div class="operator-row">
          <ap-dropdown
            variant="borderless"
            .value=${this.statusOperator}
            .options=${APPROVAL_OPERATOR_OPTIONS}
            @ap-change=${this._handleStatusOperator}
          ></ap-dropdown>
        </div>
        <div class="options">
          ${APPROVAL_STATUS_OPTIONS.map(
            (opt) => html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(opt.value)}
                @ap-toggle=${() => this._toggleStatus(opt.value)}
              >${opt.label}</ap-checkbox>
            `
          )}
        </div>
      </div>

      <!-- Task Approver -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Approver</span>
        </div>
        <div class="operator-row">
          <ap-dropdown
            variant="borderless"
            .value=${this.approverOperator}
            .options=${APPROVAL_OPERATOR_OPTIONS}
            @ap-change=${this._handleApproverOperator}
          ></ap-dropdown>
        </div>
        <input
          class="text-input"
          type="text"
          placeholder="Enter approver name..."
          .value=${this.approverValue}
          @input=${this._handleApproverInput}
        />
      </div>

      <!-- Task Requester -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Requester</span>
        </div>
        <div class="operator-row">
          <ap-dropdown
            variant="borderless"
            .value=${this.requesterOperator}
            .options=${APPROVAL_OPERATOR_OPTIONS}
            @ap-change=${this._handleRequesterOperator}
          ></ap-dropdown>
        </div>
        <input
          class="text-input"
          type="text"
          placeholder="Enter requester name..."
          .value=${this.requesterValue}
          @input=${this._handleRequesterInput}
        />
      </div>

      <!-- Task Due Date -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Due date</span>
        </div>
        <div class="date-options">
          ${EMPTY_OPTIONS.map(
            (opt) => html`
              <button
                class="date-option ${this.dueDatePreset === opt.value ? 'selected' : ''}"
                @click=${() => this._handleDueDatePreset(opt.value)}
              >${opt.label}</button>
            `
          )}
          ${WITHIN_DATE_RANGE_OPTIONS.map(
            (opt) => html`
              <button
                class="date-option ${this.dueDatePreset === opt.value ? 'selected' : ''}"
                @click=${() => this._handleDueDatePreset(opt.value)}
              >${opt.label}</button>
            `
          )}
        </div>
        ${this.dueDatePreset === 'before' || this.dueDatePreset === 'after' || this.dueDatePreset === 'between' || this.dueDatePreset === 'specific'
          ? html`
            <div class="date-input-row">
              ${this.dueDatePreset !== 'before'
                ? html`<input class="date-input" type="date" .value=${this.dueDateFrom} @change=${this._handleDueDateFrom} />`
                : nothing}
              ${this.dueDatePreset !== 'after' && this.dueDatePreset !== 'specific'
                ? html`<input class="date-input" type="date" .value=${this.dueDateTo} @change=${this._handleDueDateTo} />`
                : nothing}
            </div>
          `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-approval': ApFilterApproval;
  }
}
