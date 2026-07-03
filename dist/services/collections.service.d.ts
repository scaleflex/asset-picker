import { DamClient } from '@scaleflex/dam-core';
import { GetCollectionsResponse, GetCollectionFoldersResponse } from '../types/api.types';
import { CollectionFolder } from '../types/collection.types';
export declare function getCollections(client: DamClient): Promise<GetCollectionsResponse>;
export declare function getCollectionFolders(client: DamClient, collectionUuid: string): Promise<GetCollectionFoldersResponse>;
/**
 * Recursively filter collection folders: keep only folders that have a name
 * AND either have children or have a filters string.
 * Mirrors portals-fe use-filerobot-collection-folders.ts recursive filter.
 */
export declare function filterCollectionFolders(folders: CollectionFolder[]): CollectionFolder[];
//# sourceMappingURL=collections.service.d.ts.map