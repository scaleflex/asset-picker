import { LitElement } from 'lit';
export declare class ApFilterApproval extends LitElement {
    static styles: import('lit').CSSResult;
    selectedStatus: string[];
    statusOperator: string;
    approverValue: string;
    approverOperator: string;
    requesterValue: string;
    requesterOperator: string;
    dueDatePreset: string;
    dueDateFrom: string;
    dueDateTo: string;
    private _expandedSection;
    private _toggleSection;
    private _toggleStatus;
    private _handleStatusOperator;
    private _handleApproverInput;
    private _handleApproverOperator;
    private _handleRequesterInput;
    private _handleRequesterOperator;
    private _handleDueDatePreset;
    private _handleDueDateFrom;
    private _handleDueDateTo;
    private _emitDateChange;
    private _emitChange;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-approval': ApFilterApproval;
    }
}
//# sourceMappingURL=ap-filter-approval.d.ts.map