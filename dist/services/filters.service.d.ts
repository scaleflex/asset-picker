import { ApiClient } from './api-client';
import { MetadataModelField, FilterFileType, RegionalVariantGroup, RegionalFilters } from '../types/filter.types';
export declare function getFilterValues(client: ApiClient, filterBy: string): Promise<string[]>;
export declare function getFileTypes(client: ApiClient): Promise<FilterFileType[]>;
export interface MetadataSettingsResult {
    fields: MetadataModelField[];
    regionalVariantGroups: RegionalVariantGroup[];
    regionalFilters: RegionalFilters;
    brandColor?: string;
}
export declare function getMetadataFields(client: ApiClient): Promise<MetadataModelField[]>;
export declare function getMetadataSettings(client: ApiClient): Promise<MetadataSettingsResult>;
//# sourceMappingURL=filters.service.d.ts.map