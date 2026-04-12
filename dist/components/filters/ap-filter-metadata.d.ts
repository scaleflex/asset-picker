import { LitElement, nothing } from 'lit';
import { ApiClient } from '../../services/api-client';
import { MetadataModelField } from '../../types/filter.types';
interface MetadataFilterValue {
    operator?: string;
    values?: string[];
    metadataType?: string;
}
export declare class ApFilterMetadata extends LitElement {
    static styles: import('lit').CSSResult[];
    fields: MetadataModelField[];
    appliedFilters: Record<string, MetadataFilterValue>;
    visibleFields: string[];
    mode: 'full' | 'selector' | 'field';
    activeFieldKey: string;
    pinnedFields: string[];
    appliedMetadata: Record<string, MetadataFilterValue>;
    apiClient?: ApiClient;
    private _showFieldSelection;
    private _fieldSearch;
    private _collapsedFields;
    private _tagInputs;
    private _tagSuggestions;
    private _tagLoading;
    private _datePresets;
    private _dateFroms;
    private _dateTos;
    private _specificModeFields;
    private _selectSearches;
    private _tagDebounceTimers;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _focusSearch;
    private get _atFieldLimit();
    private _getField;
    private _getUIType;
    private _getApplied;
    private _isSpecialValue;
    /** Get the "content" mode for a field: 'empty', 'not-empty', or 'specific' */
    private _getContentMode;
    private _emitFilterChange;
    private _emitFieldToggle;
    private _emitFieldSelect;
    private _emitPin;
    private _openFieldSelection;
    private _closeFieldSelection;
    private _addField;
    private _removeField;
    private _toggleCollapse;
    private _onOperatorChange;
    private _onContentModeChange;
    private _clearFieldFilter;
    private _onTextInput;
    private _onNumberInput;
    private _onBooleanSelect;
    private _onSelectOneToggle;
    private _onMultiSelectToggle;
    private _onTagKeydown;
    private _onTagInput;
    private _selectTagSuggestion;
    private _fetchTagSuggestions;
    private _commitTagInput;
    private _removeTag;
    private _onTagOperatorChange;
    private _onDatePreset;
    private _onDateInput;
    private _onGeoLocationInput;
    private _onGeoRadiusInput;
    private _onEmptyOption;
    private _getGroupedFields;
    private _renderFieldSelection;
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
    private _renderSelectorMode;
    private _renderFieldMode;
    render(): import('lit-html').TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-metadata': ApFilterMetadata;
    }
}
export {};
//# sourceMappingURL=ap-filter-metadata.d.ts.map