/**
 * Backend serialization utilities.
 * Converts filter state to search notation strings for the Filerobot API.
 */

import {
  FILTER_KEYS,
  FILTER_OPERATORS,
  FILTER_LOGIC,
  APPROVAL_FILTER_KEYS,
  METADATA_FIELD_TYPES,
  METADATA_PREFIXES,
  DATE_KINDS,
  type AnyFilter,
  type StringFilter,
  type DateFilter,
  type Filters,
  type MetadataFilters,
} from '../types/filter.types';

import { resolvePresetToRange } from './filter-date';
import { validateFilter } from './filter-validate';

import {
  IMAGE_FILTER_KEY_INDEX,
  DEFAULT_FILTER_OPERATOR,
} from '../components/filters/filters.constants';

// ── Public API ──────────────────────────────────────────────────────

export function serializeFilters(
  filters: Filters,
  metadataFilters: MetadataFilters = {},
): string[] {
  const result: string[] = [];

  for (const [key, filter] of Object.entries(filters)) {
    if (!filter) continue;
    if (!validateFilter(key, filter)) continue;
    const serialized = serializeSingleFilter(key, filter);
    result.push(...serialized);
  }

  for (const [key, filter] of Object.entries(metadataFilters)) {
    if (!filter) continue;
    if (!validateFilter(key, filter)) continue;
    const serialized = serializeMetadataFilter(key, filter);
    result.push(...serialized);
  }

  return result;
}

// ── Single Filter Serialization ─────────────────────────────────────

function serializeSingleFilter(key: string, filter: AnyFilter): string[] {
  if (filter.type === 'date') {
    return serializeDateFilter(key, filter);
  }

  const stringFilter = filter as StringFilter;
  const { operator = DEFAULT_FILTER_OPERATOR, values = [], logic } = stringFilter;

  if (values.length === 0) return [];

  switch (key) {
    case FILTER_KEYS.SIZE:
      return serializeRange(key, values, '..');

    case FILTER_KEYS.FACES:
      return serializeSimple(key, operator, values, ',', logic);

    case FILTER_KEYS.TAGS:
      return serializeSimple(key, operator, stripHashes(values), ',', logic);

    case FILTER_KEYS.LABELS:
      return serializeSimple(key, operator, stripHashes(values), ',', logic);

    case FILTER_KEYS.COLOR:
      return serializeColor(operator, values, logic);

    case FILTER_KEYS.TYPE:
      return serializeTypeMime(key, filters_get_type_values(values), operator, logic);

    case FILTER_KEYS.MIME_TYPE:
      return serializeTypeMime(key, values, operator, logic);

    case FILTER_KEYS.IMAGE:
      return serializeImageFilter(stringFilter.values ?? values);

    case FILTER_KEYS.PRODUCT_REF:
      return serializeSimple(key, '=%', values, ',', logic);

    default:
      return serializeSimple(key, operator, values, ',', logic);
  }
}

// ── Date Serialization ──────────────────────────────────────────────

function serializeDateFilter(key: string, filter: DateFilter): string[] {
  const field = filter.field || 'created';

  if (filter.kind === DATE_KINDS.PRESET && filter.preset) {
    const range = resolvePresetToRange(filter.preset);
    if (!range) return [];
    return [`${field}:"${range.from}..${range.to}"`];
  }

  if (filter.kind === DATE_KINDS.AFTER && filter.from) {
    return [`${field}:>"${filter.from}"`];
  }

  if (filter.kind === DATE_KINDS.BEFORE && filter.to) {
    return [`${field}:<"${filter.to}"`];
  }

  if (filter.kind === DATE_KINDS.BETWEEN && filter.from && filter.to) {
    return [`${field}:"${filter.from}..${filter.to}"`];
  }

  if (filter.kind === DATE_KINDS.SPECIFIC && filter.from) {
    return [`${field}:"${filter.from}"`];
  }

  return [];
}

// ── Specialized Serializers ─────────────────────────────────────────

function serializeRange(key: string, values: string[], separator: string): string[] {
  if (values.length === 0) return [];
  return [`${key}:"${values.join(separator)}"`];
}

function serializeSimple(
  key: string,
  operator: string,
  values: string[],
  separator: string,
  logic?: string,
): string[] {
  if (values.length === 0) return [];

  if (logic === FILTER_LOGIC.AND) {
    // AND logic: repeat the key for each value
    return values.map((v) => `${key}${operator}"${v}"`);
  }

  // OR logic: join values with separator
  const joined = values.map((v) => `"${v}"`).join(separator);
  return [`${key}${operator}${joined}`];
}

function serializeColor(operator: string, values: string[], logic?: string): string[] {
  const result: string[] = [];
  const colorValues = serializeSimple('color_search', operator, values, ',', logic);
  result.push(...colorValues);
  result.push('color_operator:"AND"');
  return result;
}

function serializeTypeMime(
  key: string,
  values: string[],
  operator: string,
  logic?: string,
): string[] {
  if (values.length === 0) return [];

  // TYPE and MIME_TYPE are merged with OR using '","' separator
  const joined = values.map((v) => `"${v}"`).join(',');
  return [`${key}${operator}${joined}`];
}

function serializeImageFilter(values: unknown): string[] {
  const result: string[] = [];

  // Handle object format: { resolution: string[], orientation: string[], faces: string[] }
  if (typeof values === 'object' && values !== null && !Array.isArray(values)) {
    const obj = values as Record<string, string[]>;
    const resolution = obj.resolution;
    const orientation = obj.orientation;
    const faces = obj.faces;

    if (resolution?.length) {
      result.push(...resolution.map((v) => `resolution:"${v}"`));
    }
    if (orientation?.length) {
      result.push(...orientation.map((v) => `orientation:"${v}"`));
    }
    if (faces?.length) {
      result.push(...faces.map((v) => `faces:"${v}"`));
    }
    return result;
  }

  // Legacy indexed array format
  const arr = values as string[];
  const resolution = arr[IMAGE_FILTER_KEY_INDEX.RESOLUTION];
  const orientation = arr[IMAGE_FILTER_KEY_INDEX.ORIENTATION];
  const faces = arr[IMAGE_FILTER_KEY_INDEX.FACES];

  if (resolution) result.push(`resolution:"${resolution}"`);
  if (orientation) result.push(`orientation:"${orientation}"`);
  if (faces) result.push(`faces:"${faces}"`);

  return result;
}

// ── Metadata Serialization ──────────────────────────────────────────

function serializeMetadataFilter(rawKey: string, filter: AnyFilter): string[] {
  // Strip the type prefix (e.g., text_description -> description)
  const fieldName = stripMetadataPrefix(rawKey);

  if (filter.type === 'date') {
    return serializeDateFilter(fieldName, filter);
  }

  const stringFilter = filter as StringFilter;
  const { operator = DEFAULT_FILTER_OPERATOR, values = [], logic, metadataType } = stringFilter;

  if (values.length === 0) return [];

  // Numeric/Decimal2 range: remap '..' operator to ':' and join values with '..'
  if (
    (metadataType === METADATA_FIELD_TYPES.NUMERIC ||
      metadataType === METADATA_FIELD_TYPES.DECIMAL2) &&
    operator === FILTER_OPERATORS.RANGE
  ) {
    return [`${fieldName}${FILTER_OPERATORS.IS}"${values.join('..')}"`];
  }

  // GeoPoint: append '~' to operator
  if (metadataType === METADATA_FIELD_TYPES.GEO_POINT) {
    return serializeSimple(fieldName, operator + '~', values, ',', logic);
  }

  return serializeSimple(fieldName, operator, values, ',', logic);
}

function stripMetadataPrefix(key: string): string {
  for (const prefix of METADATA_PREFIXES) {
    if (key.startsWith(prefix)) {
      return key.slice(prefix.length);
    }
  }
  return key;
}

// ── Helpers ─────────────────────────────────────────────────────────

function stripHashes(values: string[]): string[] {
  return values.map((v) => v.replace(/^#/, ''));
}

function filters_get_type_values(values: string[]): string[] {
  return values;
}
