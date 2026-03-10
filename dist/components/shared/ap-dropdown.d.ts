import { LitElement } from 'lit';
export interface DropdownOption {
    value: string;
    label: string;
    icon?: string;
}
export declare class ApDropdown extends LitElement {
    static styles: import('lit').CSSResult[];
    value: string;
    label: string;
    variant: 'default' | 'borderless';
    options: DropdownOption[];
    open: boolean;
    close(): void;
    render(): import('lit-html').TemplateResult<1>;
    private _toggle;
    private _select;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleOutsideClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'ap-dropdown': ApDropdown;
    }
}
//# sourceMappingURL=ap-dropdown.d.ts.map