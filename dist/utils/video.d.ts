import { Asset } from '../types/asset.types';
/**
 * Extract HLS manifest URL from asset's playlists info.
 * The HLS URL lives at info.playlists[0].playlists[0].
 */
export declare function getHlsUrl(asset: Asset): string | null;
//# sourceMappingURL=video.d.ts.map