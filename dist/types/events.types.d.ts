import { Asset } from './asset.types';
export interface AssetPickerSelectDetail {
    assets: Asset[];
}
export interface AssetPickerCancelDetail {
    reason: 'backdrop' | 'escape' | 'button';
}
export interface AssetPickerOpenDetail {
    timestamp: number;
}
export interface AssetPickerErrorDetail {
    error: Error;
    context: string;
}
declare global {
    interface HTMLElementEventMap {
        'ap-select': CustomEvent<AssetPickerSelectDetail>;
        'ap-cancel': CustomEvent<AssetPickerCancelDetail>;
        'ap-open': CustomEvent<AssetPickerOpenDetail>;
        'ap-error': CustomEvent<AssetPickerErrorDetail>;
    }
}
//# sourceMappingURL=events.types.d.ts.map