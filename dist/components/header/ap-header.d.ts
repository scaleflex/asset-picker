import { LitElement } from 'lit';
import { ViewMode, TabKey } from '../../types/config.types';
import { RegionalVariantGroup, RegionalFilters } from '../../types/filter.types';
export declare class ApHeader extends LitElement {
    static styles: import('lit').CSSResult[];
    activeTab: TabKey;
    tabs: TabKey[];
    isInsideLabel: boolean;
    isInsideCollection: boolean;
    isInsideCollectionLeaf: boolean;
    viewMode: ViewMode;
    searchQuery: string;
    regionalGroups: RegionalVariantGroup[];
    regionalFilters: RegionalFilters;
    hideClose: boolean;
    enableAISearch: boolean;
    isAISearchActive: boolean;
    private _localSearch;
    private _debouncedSearch;
    disconnectedCallback(): void;
    willUpdate(changed: Map<string, unknown>): void;
    private _handleInput;
    private _clearSearch;
    private _toggleView;
    private _handleTabChange;
    private _handleRegionalChange;
    private _toggleAISearch;
    private _handleClose;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-header': ApHeader;
    }
}
//# sourceMappingURL=ap-header.d.ts.map