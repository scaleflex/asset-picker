import type { ApiClient } from './api-client';
import type { GetFoldersResponse } from '../types/api.types';
import type { Folder } from '../types/folder.types';

export interface GetFoldersParams {
  folderPath?: string;
  recursive?: number;
  limit?: number;
  offset?: number;
  q?: string;
  sort_by?: string;
  sort_direction?: string;
}

export async function getFolders(client: ApiClient, params?: GetFoldersParams): Promise<GetFoldersResponse> {
  const apiParams: Record<string, unknown> = {
    recursive: params?.recursive ?? 0,
    folder: params?.folderPath ?? '/',
    limit: params?.limit ?? 1000,
    offset: params?.offset ?? 0,
  };
  if (params?.q) apiParams.q = params.q;

  // Sort: API uses `sort=field:direction` format
  const sortField = params?.sort_by ?? 'created_at';
  const sortDir = params?.sort_direction ?? 'asc';
  const sortMap: Record<string, string> = {
    created_at: 'created_at',
    modified_at: 'modified_at',
    name: 'name',
  };
  apiParams.sort = `${sortMap[sortField] || sortField}:${sortDir}`;

  const response = await client.request<GetFoldersResponse>('/folders', apiParams);
  return response;
}

export async function getFolder(client: ApiClient, uuid: string): Promise<Folder> {
  const response = await client.request<{ folder: Folder }>(`/folders/${uuid}`);
  return response.folder;
}

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

export async function getFoldersPreviews(
  client: ApiClient,
  folderUuids: string[],
): Promise<Record<string, FolderPreview[]>> {
  if (folderUuids.length === 0) return {};
  const response = await client.post<FolderPreviewsResponse>(
    '/folders/previews',
    { folders: folderUuids },
  );
  return response.folders || {};
}
