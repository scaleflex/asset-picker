import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  APPROVAL_FILTER_KEYS,
  EMPTY_VALUE,
  NOT_EMPTY_VALUE,
  type ApprovalFilterKey,
} from '../../types/filter.types';
import {
  APPROVAL_OPERATOR_OPTIONS,
  APPROVAL_PERSON_OPERATOR_OPTIONS,
  APPROVAL_STATUS_ONLY_OPTIONS,
  EMPTY_OPTIONS,
  WITHIN_DATE_RANGE_OPTIONS,
} from './filters.constants';
import { filterPopoverStyles } from './shared/filter-styles';
import { resetStyles } from '../../styles/shared-styles';

@customElement('ap-filter-approval')
export class ApFilterApproval extends LitElement {
  static styles = [resetStyles, filterPopoverStyles, css`
    .options-list.short {
      max-height: none;
    }
    .date-input-col {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .date-input-col input[type="date"] {
      width: 100%;
    }
    .condition-label {
      font-weight: 500;
      margin-bottom: 6px;
    }
    .mt-12 {
      margin-top: 12px;
    }
  `];

  // Status
  @property({ type: Array }) selectedStatus: string[] = [];
  @property() statusOperator: string = ':=';

  // Approver
  @property() approverValue: string = '';
  @property() approverOperator: string = '~';

  // Requester
  @property() requesterValue: string = '';
  @property() requesterOperator: string = '~';

  // Due Date
  @property() dueDatePreset: string = '';
  @property() dueDateFrom: string = '';
  @property() dueDateTo: string = '';

  // ── Computed ────────────────────────────────────────────────────────

  private get _hasAnySelection(): boolean {
    return (
      this.selectedStatus.length > 0 ||
      !!this.approverValue ||
      !!this.requesterValue ||
      !!this.dueDatePreset ||
      !!this.dueDateFrom ||
      !!this.dueDateTo
    );
  }

  private get _statusHasEmptyValue(): boolean {
    return this.selectedStatus.includes(EMPTY_VALUE) || this.selectedStatus.includes(NOT_EMPTY_VALUE);
  }

  private get _statusHasOnlyEmptyValues(): boolean {
    return this.selectedStatus.length > 0 && this.selectedStatus.every(
      (v) => v === EMPTY_VALUE || v === NOT_EMPTY_VALUE,
    );
  }

  private get _dueDateNeedsInputs(): boolean {
    return ['before', 'after', 'between', 'specific'].includes(this.dueDatePreset);
  }

  // ── Status handlers ────────────────────────────────────────────────

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

  private _clearStatus() {
    this._emitChange(APPROVAL_FILTER_KEYS.STATUS, [], this.statusOperator);
  }

  // ── Approver handlers ──────────────────────────────────────────────

  private _handleApproverInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this._emitChange(APPROVAL_FILTER_KEYS.APPROVER, value ? [value] : [], this.approverOperator);
  }

  private _handleApproverOperator(e: CustomEvent) {
    const operator = e.detail.value;
    this._emitChange(APPROVAL_FILTER_KEYS.APPROVER, this.approverValue ? [this.approverValue] : [], operator);
  }

  private _clearApprover() {
    this._emitChange(APPROVAL_FILTER_KEYS.APPROVER, [], this.approverOperator);
  }

  // ── Requester handlers ─────────────────────────────────────────────

  private _handleRequesterInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this._emitChange(APPROVAL_FILTER_KEYS.REQUESTOR, value ? [value] : [], this.requesterOperator);
  }

  private _handleRequesterOperator(e: CustomEvent) {
    const operator = e.detail.value;
    this._emitChange(APPROVAL_FILTER_KEYS.REQUESTOR, this.requesterValue ? [this.requesterValue] : [], operator);
  }

  private _clearRequester() {
    this._emitChange(APPROVAL_FILTER_KEYS.REQUESTOR, [], this.requesterOperator);
  }

  // ── Due Date handlers ──────────────────────────────────────────────

  private _handleDueDatePreset(e: CustomEvent) {
    const preset = e.detail.value;
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

  private _clearDueDate() {
    this.dispatchEvent(new CustomEvent('filter-change', {
      detail: {
        key: APPROVAL_FILTER_KEYS.DUE_DATE,
        values: [],
        operator: ':',
      },
      bubbles: true,
      composed: true,
    }));
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

  // ── Shared emit ────────────────────────────────────────────────────

  private _emitChange(key: ApprovalFilterKey, values: string[], operator: string) {
    this.dispatchEvent(new CustomEvent('filter-change', {
      detail: { key, values, operator },
      bubbles: true,
      composed: true,
    }));
  }

  // ── Render ─────────────────────────────────────────────────────────

  private _renderStatusSection() {
    const hasStatus = this.selectedStatus.length > 0;

    return html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!hasStatus}
          @click=${this._clearStatus}
        >Clear all</button>

        <span class="section-label">Status</span>

        <!-- Condition -->
        <span class="section-label condition-label">Condition</span>
        <ap-radio-group
          direction="horizontal"
          .options=${APPROVAL_OPERATOR_OPTIONS}
          .value=${this.statusOperator}
          ?disabled=${this._statusHasOnlyEmptyValues}
          @ap-change=${this._handleStatusOperator}
        ></ap-radio-group>

        <!-- Empty / Not empty checkboxes -->
        <div class="options-list short mt-12">
          ${EMPTY_OPTIONS.map(
            (opt) => html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(opt.value)}
                @ap-toggle=${() => this._toggleStatus(opt.value)}
              >${opt.label}</ap-checkbox>
            `,
          )}
        </div>

        <div class="separator"></div>

        <!-- Status options -->
        <div class="options-list short">
          ${APPROVAL_STATUS_ONLY_OPTIONS.map(
            (opt) => html`
              <ap-checkbox
                ?checked=${this.selectedStatus.includes(opt.value)}
                @ap-toggle=${() => this._toggleStatus(opt.value)}
              >
                <span style="display:inline-flex;align-items:center;gap:6px">
                  <ap-icon name=${opt.icon} .size=${16} style="color:${opt.iconColor}"></ap-icon>
                  ${opt.label}
                </span>
              </ap-checkbox>
            `,
          )}
        </div>
      </div>
    `;
  }

  private _renderApproverSection() {
    const hasApprover = !!this.approverValue;

    return html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!hasApprover}
          @click=${this._clearApprover}
        >Clear all</button>

        <span class="section-label">Approver</span>

        <!-- Condition -->
        <span class="section-label condition-label">Condition</span>
        <ap-radio-group
          direction="horizontal"
          .options=${APPROVAL_PERSON_OPERATOR_OPTIONS}
          .value=${this.approverOperator}
          @ap-change=${this._handleApproverOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter approver name..."
          .value=${this.approverValue}
          @input=${this._handleApproverInput}
        />
      </div>
    `;
  }

  private _renderRequesterSection() {
    const hasRequester = !!this.requesterValue;

    return html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!hasRequester}
          @click=${this._clearRequester}
        >Clear all</button>

        <span class="section-label">Requester</span>

        <!-- Condition -->
        <span class="section-label condition-label">Condition</span>
        <ap-radio-group
          direction="horizontal"
          .options=${APPROVAL_PERSON_OPERATOR_OPTIONS}
          .value=${this.requesterOperator}
          @ap-change=${this._handleRequesterOperator}
        ></ap-radio-group>

        <input
          class="filter-input mt-12"
          type="text"
          placeholder="Enter requester name..."
          .value=${this.requesterValue}
          @input=${this._handleRequesterInput}
        />
      </div>
    `;
  }

  private _renderDueDateSection() {
    const hasDueDate = !!this.dueDatePreset || !!this.dueDateFrom || !!this.dueDateTo;

    return html`
      <div class="filter-section">
        <button
          class="clear-btn"
          ?disabled=${!hasDueDate}
          @click=${this._clearDueDate}
        >Clear all</button>

        <span class="section-label">Due date</span>

        <!-- Empty / Not empty radio buttons -->
        <ap-radio-group
          .options=${EMPTY_OPTIONS}
          .value=${this.dueDatePreset === EMPTY_VALUE || this.dueDatePreset === NOT_EMPTY_VALUE
            ? this.dueDatePreset
            : ''}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <div class="separator"></div>

        <!-- Date range options -->
        <ap-radio-group
          columns="2"
          .options=${WITHIN_DATE_RANGE_OPTIONS}
          .value=${this.dueDatePreset !== EMPTY_VALUE && this.dueDatePreset !== NOT_EMPTY_VALUE
            ? this.dueDatePreset
            : ''}
          @ap-change=${this._handleDueDatePreset}
        ></ap-radio-group>

        <!-- Date inputs -->
        ${this._dueDateNeedsInputs
          ? html`
            <div class="grid-2 mt-12">
              ${this.dueDatePreset !== 'before'
                ? html`
                  <div class="date-input-col">
                    <span class="input-label">Start date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateFrom}
                      @change=${this._handleDueDateFrom}
                    />
                  </div>
                `
                : nothing}
              ${this.dueDatePreset !== 'after' && this.dueDatePreset !== 'specific'
                ? html`
                  <div class="date-input-col">
                    <span class="input-label">End date</span>
                    <input
                      class="filter-input"
                      type="date"
                      .value=${this.dueDateTo}
                      @change=${this._handleDueDateTo}
                    />
                  </div>
                `
                : nothing}
            </div>
          `
          : nothing}
      </div>
    `;
  }

  render() {
    return html`
      <div class="filter-content">
        ${this._renderStatusSection()}
        <div class="separator"></div>
        ${this._renderApproverSection()}
        <div class="separator"></div>
        ${this._renderRequesterSection()}
        <div class="separator"></div>
        ${this._renderDueDateSection()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-filter-approval': ApFilterApproval;
  }
}
