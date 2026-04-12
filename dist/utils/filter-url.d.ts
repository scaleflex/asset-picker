import { AnyFilter, Filters, MetadataFilters } from '../types/filter.types';
export declare function getFiltersFromUrl(url?: URL): {
    filters: Filters;
    metadataFields: MetadataFilters;
};
export declare function prepareFilterForUrl(key: string, filter: AnyFilter): string;
export declare function setFiltersToUrl(filters: Filters, metadataFilters: MetadataFilters, url?: URL): URL;
//# sourceMappingURL=filter-url.d.ts.map