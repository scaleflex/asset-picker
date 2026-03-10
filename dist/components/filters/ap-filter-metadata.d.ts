import { LitElement } from 'lit';
import { MetadataModelField } from '../../types/filter.types';
interface MetadataFilterValue {
    operator?: string;
    values?: string[];
    metadataType?: string;
}
export declare class ApFilterMetadata extends LitElement {
    static styles: import('lit').CSSResult;
    fields: MetadataModelField[];
    appliedFilters: Record<string, MetadataFilterValue>;
    visibleFields: string[];
    private _showFieldSelection;
    private _fieldSearch;
    private _collapsedFields;
    private _tagInputs;
    private _datePresets;
    private _dateFroms;
    private _dateTos;
    private _specificModeFields;
    private get _atFieldLimit();
    private _getField;
    private _getUIType;
    private _getApplied;
    private _isSpecialValue;
    private _emitFilterChange;
    private _emitFieldToggle;
    private _openFieldSelection;
    private _closeFieldSelection;
    private _addField;
    private _removeField;
    private _toggleCollapse;
    private _onOperatorChange;
    private _onTextInput;
    private _onNumberInput;
    private _onBooleanSelect;
    private _onSelectOneChange;
    private _onMultiSelectToggle;
    private _onTagKeydown;
    private _onTagInput;
    private _commitTagInput;
    private _removeTag;
    private _onDatePreset;
    private _onDateInput;
    private _onGeoInput;
    private _onEmptyOption;
    private _renderFieldSelection;
    private _renderOperator;
    private _renderEmptyOptions;
    private _renderTextFilter;
    private _renderNumberFilter;
    private _renderBooleanFilter;
    private _renderSelectOneFilter;
    private _renderMultiSelectFilter;
    private _renderTagsFilter;
    private _renderDateFilter;
    private _renderGeoFilter;
    private _renderAttachmentFilter;
    private _renderFaceMatcherFilter;
    private _renderFieldControl;
    private _renderFieldSection;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-metadata': ApFilterMetadata;
    }
}
export {};
//# sourceMappingURL=ap-filter-metadata.d.ts.map