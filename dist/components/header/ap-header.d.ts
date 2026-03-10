import { LitElement } from 'lit';
import { ViewMode, TabKey } from '../../types/config.types';
import { RegionalVariantGroup, RegionalFilters } from '../../types/filter.types';
export declare class ApHeader extends LitElement {
    static styles: import('lit').CSSResult;
    activeTab: TabKey;
    hiddenTabs: TabKey[];
    viewMode: ViewMode;
    searchQuery: string;
    regionalGroups: RegionalVariantGroup[];
    regionalFilters: RegionalFilters;
    private _localSearch;
    private _debouncedSearch;
    disconnectedCallback(): void;
    willUpdate(changed: Map<string, unknown>): void;
    private _handleInput;
    private _clearSearch;
    private _toggleView;
    private _handleTabChange;
    private _handleRegionalChange;
    private _handleClose;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-header': ApHeader;
    }
}
//# sourceMappingURL=ap-header.d.ts.map