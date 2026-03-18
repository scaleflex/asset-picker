import {
  FILTER_KEYS,
  APPROVAL_FILTER_KEYS,
  type AnyFilterKey,
  type AnyFilter,
  type StringFilter,
  type DateFilter,
  type FiltersInput,
  type Filters,
} from '../types/filter.types';

/** Keys that map to DateFilter; everything else is StringFilter. */
const DATE_KEYS: Set<string> = new Set([
  FILTER_KEYS.DATE,
  FILTER_KEYS.LICENSE_EXPIRY,
  APPROVAL_FILTER_KEYS.DUE_DATE,
]);

/**
 * Normalize user-facing `FiltersInput` (simplified or full) into
 * the internal `Filters` shape required by the rest of the codebase.
 */
export function normalizeFilters(input: FiltersInput | undefined): Filters {
  if (!input) return {};

  const result: Filters = {};

  for (const [key, value] of Object.entries(input)) {
    if (!value) continue;
    result[key as AnyFilterKey] = normalizeOne(key, value);
  }

  return result;
}

function normalizeOne(key: string, value: any): AnyFilter {
  // Already fully typed — pass through
  if (value.type === 'string' || value.type === 'date') {
    return value as AnyFilter;
  }

  if (DATE_KEYS.has(key)) {
    return {
      type: 'date',
      field: value.field ?? 'created',
      kind: value.kind ?? null,
      preset: value.preset ?? null,
      from: value.from ?? null,
      to: value.to ?? null,
    } as DateFilter;
  }

  return {
    type: 'string',
    values: value.values,
    ...(value.operator !== undefined && { operator: value.operator }),
    ...(value.logic !== undefined && { logic: value.logic }),
  } as StringFilter;
}
