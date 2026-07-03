import { LitElement } from 'lit';
import { TFunction } from '../../store/store.types';
import { ApprovalUser } from '../../types/config.types';
import { DateKind } from '../../types/filter.types';
export declare class ApFilterApproval extends LitElement {
    static styles: import('lit').CSSResult[];
    t: TFunction;
    selectedStatus: string[];
    statusOperator: string;
    approverValues: string[];
    approverOperator: string;
    approverUsers: ApprovalUser[];
    requesterValues: string[];
    requesterOperator: string;
    requesterUsers: ApprovalUser[];
    dueDateKind: DateKind | null;
    dueDatePreset: string;
    dueDateFrom: string;
    dueDateTo: string;
    private _approverSearch;
    private _requesterSearch;
    private get _statusHasOnlyEmptyValues();
    private get _dueDateNeedsInputs();
    private get _showApproverSection();
    private get _showRequesterSection();
    private _toggleStatus;
    private _handleStatusOperator;
    private _clearStatus;
    private _toggleApprover;
    private _handleApproverOperator;
    private _clearApprover;
    private _onApproverSearchInput;
    private _clearApproverSearch;
    private _toggleRequester;
    private _handleRequesterOperator;
    private _clearRequester;
    private _onRequesterSearchInput;
    private _clearRequesterSearch;
    /** Map a radio value to its DateKind. Manual-input options keep their value as kind. */
    private _kindFromDuedateValue;
    private _handleDueDatePreset;
    private _handleDueDateFrom;
    private _handleDueDateTo;
    private _clearDueDate;
    private _emitDuedate;
    /** Emit a StringFilter-shaped change (status / approver / requester sub-keys). */
    private _emitChange;
    private _filterUsers;
    private _getInitials;
    private _renderStatusSection;
    private _renderUserItem;
    private _renderUserSelectedChips;
    private _renderUserPickerSection;
    private _renderApproverSection;
    private _renderRequesterSection;
    private _renderDueDateSection;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-approval': ApFilterApproval;
    }
}
//# sourceMappingURL=ap-filter-approval.d.ts.map