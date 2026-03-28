import type { Asset } from './asset.types';
import type { Folder } from './folder.types';

export interface AssetPickerSelectDetail {
  assets: Asset[];
  folders?: Folder[];
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

export interface FolderSelectDetail {
  folder: Folder;
  index: number;
  event: MouseEvent;
}

declare global {
  interface HTMLElementEventMap {
    'ap-select': CustomEvent<AssetPickerSelectDetail>;
    'ap-cancel': CustomEvent<AssetPickerCancelDetail>;
    'ap-open': CustomEvent<AssetPickerOpenDetail>;
    'ap-error': CustomEvent<AssetPickerErrorDetail>;
  }
}
