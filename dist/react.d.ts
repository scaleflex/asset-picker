import { CSSProperties } from 'react';
import { AssetPickerConfig } from './types/config.types';
import { Asset } from './types/asset.types';
export interface AssetPickerRef {
    open(): void;
    close(): void;
}
export interface AssetPickerProps {
    config: AssetPickerConfig;
    open?: boolean;
    onSelect?: (assets: Asset[]) => void;
    onCancel?: () => void;
    className?: string;
    style?: CSSProperties;
}
export declare const AssetPicker: import('react').ForwardRefExoticComponent<AssetPickerProps & import('react').RefAttributes<AssetPickerRef>>;
//# sourceMappingURL=react.d.ts.map