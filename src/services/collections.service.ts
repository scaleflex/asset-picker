import type { ApiClient } from './api-client';
import type { GetCollectionsResponse, GetCollectionFoldersResponse } from '../types/api.types';
import type { CollectionFolder } from '../types/collection.types';

export async function getCollections(client: ApiClient): Promise<GetCollectionsResponse> {
  return client.request<GetCollectionsResponse>('/collections');
}

export async function getCollectionFolders(client: ApiClient, collectionUuid: string): Promise<GetCollectionFoldersResponse> {
  return client.request<GetCollectionFoldersResponse>(`/collections/${collectionUuid}/folders`);
}

/**
 * Recursively filter collection folders: keep only folders that have a name
 * AND either have children or have a filters string.
 * Mirrors portals-fe use-filerobot-collection-folders.ts recursive filter.
 */
export function filterCollectionFolders(folders: CollectionFolder[]): CollectionFolder[] {
  return folders
    .filter((f) => Boolean(f.name))
    .map((f) => ({ ...f, children: filterCollectionFolders(f.children ?? []) }))
    .filter((f) => !((f.children?.length ?? 0) < 1 && !Boolean(f.filters)));
}
