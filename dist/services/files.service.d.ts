import { ApiClient } from './api-client';
import { GetFilesParams, GetFilesResponse } from '../types/api.types';
export declare function getFiles(client: ApiClient, params: GetFilesParams): Promise<GetFilesResponse>;
export interface GetFilesStatsResponse {
    status: string;
    stats?: {
        approx_files_count?: number;
        approx_files_size?: number;
    };
    info?: {
        total_files_count?: number;
        total_files_size?: number;
    };
}
export declare function getFilesStats(client: ApiClient, params: {
    folder?: string;
    q?: string;
    search?: string;
    recursive?: number;
    with_ai?: boolean;
    ai_query?: string;
    ai_lang?: string;
    collection_uuid?: string;
    f64?: string;
}): Promise<GetFilesStatsResponse>;
//# sourceMappingURL=files.service.d.ts.map