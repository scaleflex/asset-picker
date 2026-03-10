import type { Asset } from '../types/asset.types';

/**
 * Extract HLS manifest URL from asset's playlists info.
 * The HLS URL lives at info.playlists[0].playlists[0].
 */
export function getHlsUrl(asset: Asset): string | null {
  const playlists = asset.info?.playlists;
  if (!playlists?.length) return null;
  const firstPlaylist = playlists[0]?.playlists;
  if (!firstPlaylist?.length) return null;
  const url = firstPlaylist[0];
  return url || null;
}