import { ApiClient } from './api-client';
import { GetFoldersResponse } from '../types/api.types';
import { Folder } from '../types/folder.types';
export interface GetFoldersParams {
    folderPath?: string;
    recursive?: number;
    limit?: number;
    offset?: number;
    q?: string;
    sort_by?: string;
    sort_direction?: string;
}
export declare function getFolders(client: ApiClient, params?: GetFoldersParams): Promise<GetFoldersResponse>;
export declare function getFolder(client: ApiClient, uuid: string): Promise<Folder>;
export interface FolderPreview {
    file_uuid: string;
    file_uri_cdn: string;
    file_type: string;
    preview_origin: string;
}
export interface FolderPreviewsResponse {
    status: string;
    folders: Record<string, FolderPreview[]>;
}
export declare function getFoldersPreviews(client: ApiClient, folderUuids: string[]): Promise<Record<string, FolderPreview[]>>;
//# sourceMappingURL=folders.service.d.ts.map