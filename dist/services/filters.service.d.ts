import { DamClient } from '@scaleflex/dam-core';
import { MetadataModelField, FilterFileType, RegionalVariantGroup, RegionalFilters } from '../types/filter.types';
export declare function getFilterValues(client: DamClient, filterBy: string): Promise<string[]>;
export declare function getFileTypes(client: DamClient): Promise<FilterFileType[]>;
export interface MetadataSettingsResult {
    fields: MetadataModelField[];
    regionalVariantGroups: RegionalVariantGroup[];
    regionalFilters: RegionalFilters;
    brandColor?: string;
}
export declare function getMetadataFields(client: DamClient): Promise<MetadataModelField[]>;
export declare function getMetadataSettings(client: DamClient): Promise<MetadataSettingsResult>;
//# sourceMappingURL=filters.service.d.ts.map