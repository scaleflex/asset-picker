import { LitElement } from 'lit';
import { DateField, DateKind } from '../../types/filter.types';
export declare class ApFilterDate extends LitElement {
    static styles: import('lit').CSSResult[];
    filterKey: string;
    field: DateField;
    kind: DateKind | null;
    preset: string;
    from: string;
    to: string;
    private get _isLicenseExpiry();
    private get _rangeOptions();
    private get _todayStr();
    private get _hasFilter();
    /** Determine the DateKind from a preset/option value */
    private _kindFromValue;
    private _selectField;
    private _selectPreset;
    private _clearAll;
    private _dispatchChange;
    private _handleDateInput;
    private _renderDateTypeSection;
    private _renderRangeSection;
    private _renderDateInputs;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-date': ApFilterDate;
    }
}
//# sourceMappingURL=ap-filter-date.d.ts.map