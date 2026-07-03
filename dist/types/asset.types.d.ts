import { FilerobotAsset } from '@scaleflex/dam-core';
import { TransformationResult } from './transformation.types';
export type { AssetType, AssetInfo, AssetMeta, AssetSize } from '@scaleflex/dam-core';
/**
 * A Filerobot asset as asset-picker uses it: the raw wire object ({@link FilerobotAsset}) plus
 * the optional `transformation` the transformation UI attaches client-side (not a wire field).
 */
export interface Asset extends FilerobotAsset {
    transformation?: TransformationResult;
}
//# sourceMappingURL=asset.types.d.ts.map