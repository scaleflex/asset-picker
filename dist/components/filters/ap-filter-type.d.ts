import { LitElement } from 'lit';
import { FilterFileType } from '../../types/filter.types';
export declare class ApFilterType extends LitElement {
    static styles: import('lit').CSSResult;
    selected: string[];
    fileTypes: FilterFileType[];
    private _search;
    private _expanded;
    private _extValues;
    private _isGroupFullySelected;
    private _isGroupPartial;
    private _isExtSelected;
    private _toggleGroup;
    private _toggleExt;
    private _clearAll;
    private _emit;
    private _toggleExpand;
    private _filteredGroups;
    private _toggleCategory;
    updated(changed: Map<string, unknown>): void;
    render(): import('lit-html').TemplateResult<1>;
    private _renderGroup;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-filter-type': ApFilterType;
    }
}
//# sourceMappingURL=ap-filter-type.d.ts.map