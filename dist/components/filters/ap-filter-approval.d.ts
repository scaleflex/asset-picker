import { LitElement } from 'lit';
export declare class ApFilterApproval extends LitElement {
    static styles: import('lit').CSSResult[];
    selectedStatus: string[];
    statusOperator: string;
    approverValue: string;
    approverOperator: string;
    requesterValue: string;
    requesterOperator: string;
    dueDatePreset: string;
    dueDateFrom: string;
    dueDateTo: string;
    private get _hasAnySelection();
    private get _statusHasEmptyValue();
    private get _statusHasOnlyEmptyValues();
    private get _dueDateNeedsInputs();
    private _toggleStatus;
    private _handleStatusOperator;
    private _clearStatus;
    private _handleApproverInput;
    private _handleApproverOperator;
    private _clearApprover;
    private _handleRequesterInput;
    private _handleRequesterOperator;
    private _clearRequester;
    private _handleDueDatePreset;
    private _handleDueDateFrom;
    private _handleDueDateTo;
    private _clearDueDate;
    private _emitDateChange;
    private _emitChange;
    private _renderStatusSection;
    private _renderApproverSection;
    private _renderRequesterSection;
    private _renderDueDateSection;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-approval': ApFilterApproval;
    }
}
//# sourceMappingURL=ap-filter-approval.d.ts.map