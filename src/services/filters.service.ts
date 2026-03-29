import type { ApiClient } from './api-client';
import type { GetFiltersResponse } from '../types/api.types';
import type { MetadataModelField, MetadataPossibleValue, FilterFileType, RegionalVariantGroup, RegionalFilters } from '../types/filter.types';
import { METADATA_MODEL_INDEX } from '../components/filters/filters.constants';

export async function getFilterValues(client: ApiClient, filterBy: string): Promise<string[]> {
  const response = await client.request<GetFiltersResponse>('/filters', {
    filter_by: filterBy,
    format: 'list',
    limit: 200,
  });
  const filter = response.filters.find((f) => f.key === filterBy);
  return filter?.values ?? [];
}

interface FileTypesApiResponse {
  status: string;
  filters: {
    file_types?: Array<{
      name: string;
      value: string;
      count: number;
      category?: string;
      label?: string;
    }>;
  };
}

export async function getFileTypes(client: ApiClient): Promise<FilterFileType[]> {
  const response = await client.request<FileTypesApiResponse>('/filters', {
    filter_by: 'filetype',
    format: 'list',
    limit: 200,
  });
  const raw = response.filters?.file_types ?? [];
  return raw.map(ft => ({
    name: ft.name,
    value: ft.value,
    count: ft.count,
    category: ft.category ?? ft.value.split('_')[0],
    label: extractExtensionLabel(ft.name),
  }));
}

/** Extract clean extension label from API name (e.g. "image › jpeg" → "JPEG") */
function extractExtensionLabel(name: string): string {
  const sep = name.indexOf('›');
  const raw = sep !== -1 ? name.slice(sep + 1).trim() : name;
  return raw.toUpperCase();
}

export interface MetadataSettingsResult {
  fields: MetadataModelField[];
  regionalVariantGroups: RegionalVariantGroup[];
  regionalFilters: RegionalFilters;
  brandColor?: string;
}

export async function getMetadataFields(client: ApiClient): Promise<MetadataModelField[]> {
  const result = await getMetadataSettings(client);
  return result.fields;
}

export async function getMetadataSettings(client: ApiClient): Promise<MetadataSettingsResult> {
  // Use /settings (not /public/settings) to get full settings including regional variants.
  const response = await client.request<Record<string, unknown>>('/settings');

  // The response may nest data under "settings" key or directly at root level.
  const settings = (response.settings ?? response) as Record<string, unknown>;
  const metadata = (settings?.metadata ?? response.metadata) as Record<string, unknown> | undefined;
  const model = (metadata?.model as Array<Record<string, unknown>> | undefined) ?? [];
  const filesModel = model[METADATA_MODEL_INDEX];

  // Extract regional variant groups from metadata.store
  const store = metadata?.store as Record<string, unknown> | undefined;
  const rawGroups = (store?.regional_variants_groups as Array<Record<string, unknown>> | undefined) ?? [];
  const regionalVariantGroups: RegionalVariantGroup[] = rawGroups
    .map((g) => ({
      uuid: g.uuid as string,
      label: (g.label ?? g.name ?? '') as string,
      variants: ((g.variants as Array<Record<string, unknown>>) ?? []).map((v) => ({
        api_value: (v.api_value ?? v.value ?? '') as string,
        internal_unique_value: (v.internal_unique_value ?? v.api_value ?? '') as string,
        label: (v.label ?? v.name ?? '') as string,
      })),
    }))
    .filter((g) => g.variants.length > 1); // Only show groups with multiple variants

  // Initialize default regional filters (first variant per group)
  const regionalFilters: RegionalFilters = {};
  for (const group of regionalVariantGroups) {
    regionalFilters[group.uuid] = group.variants[0]?.api_value ?? '';
  }

  // Extract brand color (may be under settings or root)
  const projectBranding = (settings?.project_branding ?? (response.settings as Record<string, unknown> | undefined)?.project_branding) as Record<string, unknown> | undefined;
  const brandColor = projectBranding?.brandColor as string | undefined;

  if (!filesModel) return { fields: [], regionalVariantGroups, regionalFilters, brandColor };

  // The model has groups, each containing fields
  const groups = (filesModel.groups as Array<{ name?: string; fields?: Array<Record<string, unknown>> }>) ?? [];
  const fields: MetadataModelField[] = [];


  for (const group of groups) {
    const groupName = group.name || 'Root fields';
    for (const field of group.fields ?? []) {
      // Parse possible_values: API returns array of objects with api_value, internal_unique_value, label
      const rawPossible = field.possible_values as Array<Record<string, unknown>> | undefined;
      const possibleValues: MetadataPossibleValue[] | undefined = rawPossible?.map((pv) => ({
        api_value: (pv.api_value ?? pv.value ?? '') as string,
        internal_unique_value: (pv.internal_unique_value ?? pv.api_value ?? '') as string,
        label: (pv.label ?? pv.name ?? pv.api_value ?? '') as string,
      }));

      fields.push({
        // Use field.key (not ckey) — this is what a.meta uses as keys
        key: (field.key ?? field.ckey) as string,
        label: (field.title ?? field.label ?? field.key ?? '') as string,
        type: (field.type as MetadataModelField['type']) ?? 'text',
        slug: field.slug as string | undefined,
        ckey: field.ckey as string | undefined,
        possible_values: possibleValues,
        group: groupName,
        regionalVariantsGroupUuid: field.regional_variants_group_uuid as string | undefined,
      });
    }
  }

  return { fields, regionalVariantGroups, regionalFilters, brandColor };
}