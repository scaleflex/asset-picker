import { Asset } from './asset.types';
import { Folder } from './folder.types';
import { Label } from './label.types';
import { Collection, CollectionFolder } from './collection.types';
import { SortBy, SortDirection } from './config.types';
export interface ApiBaseResponse {
    status: string;
    msg: string;
}
export interface GetFilesParams {
    folder?: string;
    offset?: number;
    limit?: number;
    sort_by?: SortBy;
    sort_direction?: SortDirection;
    search?: string;
    q?: string;
    recursive?: number;
    with_ai?: boolean;
    ai_query?: string;
    ai_lang?: string;
    collection_uuid?: string;
    f64?: string;
}
export interface GetFilesResponse extends ApiBaseResponse {
    files: Asset[];
    folders: Folder[];
    base?: {
        count?: {
            files_direct?: number;
            files_recursive?: number;
        };
    };
    info?: {
        total_files_count?: number;
        total_files_size?: number;
    };
    limit: number;
    offset: number;
}
export interface GetFoldersResponse extends ApiBaseResponse {
    folders: Folder[];
    total: number;
}
export interface GetLabelsResponse extends ApiBaseResponse {
    labels: Label[];
}
export interface GetCollectionsResponse extends ApiBaseResponse {
    collections: Collection[];
}
export interface GetCollectionFoldersResponse extends ApiBaseResponse {
    folders: CollectionFolder[];
}
export interface GetSettingsResponse extends ApiBaseResponse {
    settings: {
        project_branding?: {
            brandColor?: string;
        };
        [key: string]: unknown;
    };
}
export interface SassKeyResponse extends ApiBaseResponse {
    key: string;
}
export interface GetFiltersResponse extends ApiBaseResponse {
    filters: {
        key: string;
        values: string[];
    }[];
}
export interface GetMetadataFieldsResponse extends ApiBaseResponse {
    metadata_model: {
        fields: Array<{
            key: string;
            label: string;
            type: string;
            slug?: string;
            possible_values?: string[];
        }>;
    }[];
}
export interface GetTagsResponse extends ApiBaseResponse {
    tags: import('./tag.types').Tag[];
}
export interface GetFilterConfigResponse extends ApiBaseResponse {
    file_types: Array<{
        name: string;
        value: string;
        count: number;
        category?: string;
        label?: string;
    }>;
}
//# sourceMappingURL=api.types.d.ts.map