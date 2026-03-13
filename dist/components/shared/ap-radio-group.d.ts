import { LitElement } from 'lit';
export interface RadioOption {
    value: string;
    label: string;
    icon?: string;
    disabled?: boolean;
}
/**
 * Radio button group matching js-admin FiltersCheckboxGroup pattern.
 * Supports vertical list and horizontal/grid layouts via CSS on the host.
 */
export declare class ApRadioGroup extends LitElement {
    static styles: import('lit').CSSResult[];
    value: string;
    options: RadioOption[];
    disabled: boolean;
    direction: 'vertical' | 'horizontal';
    columns?: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKeydown;
    render(): import('lit-html').TemplateResult<1>;
    private _select;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-radio-group': ApRadioGroup;
    }
}
//# sourceMappingURL=ap-radio-group.d.ts.map