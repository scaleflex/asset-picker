import { LitElement } from 'lit';
import { RegionalVariantGroup, RegionalFilters } from '../../types/filter.types';
import { TFunction } from '../../store/store.types';
export declare class ApRegionalSettings extends LitElement {
    static styles: import('lit').CSSResult;
    groups: RegionalVariantGroup[];
    selectedFilters: RegionalFilters;
    t: TFunction;
    private _open;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleOutsideClick;
    private _selectVariant;
    render(): import('lit').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-regional-settings': ApRegionalSettings;
    }
}
//# sourceMappingURL=ap-regional-settings.d.ts.map