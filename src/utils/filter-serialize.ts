/**
 * Backend serialization utilities.
 * Converts filter state to search notation strings for the Scaleflex API.
 */

import {
  FILTER_KEYS,
  FILTER_OPERATORS,
  FILTER_LOGIC,
  METADATA_FIELD_TYPES,
  METADATA_PREFIXES,
  DATE_KINDS,
  DATE_PRESETS,
  EMPTY_VALUE,
  NOT_EMPTY_VALUE,
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

  // Merge type and mimetype entries if both exist
  return mergeTypeMime(result);
}

// ── Type+MIME Merge ─────────────────────────────────────────────────

function mergeTypeMime(entries: string[]): string[] {
  const typeEntries: string[] = [];
  const mimeEntries: string[] = [];
  const rest: string[] = [];

  for (const entry of entries) {
    if (entry.startsWith('type:') || entry.startsWith('type=')) {
      typeEntries.push(entry);
    } else if (entry.startsWith('mimetype:') || entry.startsWith('mimetype=')) {
      mimeEntries.push(entry);
    } else {
      rest.push(entry);
    }
  }

  if (typeEntries.length > 0 && mimeEntries.length > 0) {
    // Merge into one entry joined with ' , '
    const merged = [...typeEntries, ...mimeEntries].join(' , ');
    rest.push(merged);
  } else {
    rest.push(...typeEntries, ...mimeEntries);
  }

  return rest;
}

// ── Single Filter Serialization ─────────────────────────────────────

function serializeSingleFilter(key: string, filter: AnyFilter): string[] {
  if (filter.type === 'date') {
    return serializeDateFilter(key, filter);
  }

  // Image filter is stored as a raw object { resolution, orientation, faces },
  // not as a StringFilter — handle it before the StringFilter destructuring.
  if (key === FILTER_KEYS.IMAGE) {
    return serializeImageFilter(filter);
  }

  const stringFilter = filter as StringFilter;
  const { operator = DEFAULT_FILTER_OPERATOR, values = [], logic } = stringFilter;

  if (values.length === 0) return [];

  switch (key) {
    case FILTER_KEYS.SIZE:
      return serializeRange(key, values, '..');

    case FILTER_KEYS.FACES:
      return serializeFaces(key, operator, values);

    case FILTER_KEYS.TAGS:
      return serializeSimple(key, operator, stripHashes(values), ',', logic);

    case FILTER_KEYS.LABELS:
      return serializeSimple(key, operator, stripHashes(values), ',', logic);

    case FILTER_KEYS.COLOR:
      return serializeColor(operator, values, logic);

    case FILTER_KEYS.TYPE:
      return serializeTypeMime(key, values, operator, logic);

    case FILTER_KEYS.MIME_TYPE:
      return serializeTypeMime(key, values, operator, logic);

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
    // Handle empty/non-empty presets
    if (filter.preset === DATE_PRESETS.EMPTY) {
      return [`${field}:"empty"`];
    }
    if (filter.preset === DATE_PRESETS.NOT_EMPTY) {
      return [`${field}:"non-empty"`];
    }

    const range = resolvePresetToRange(filter.preset);
    if (!range) return [];

    if (range.to === null) {
      // last_* and today presets: serialize as greater-than
      return [`${field}>"${range.from}"`];
    }

    // within_* presets: serialize as range
    return [`${field}:"${range.from}..${range.to}"`];
  }

  if (filter.kind === DATE_KINDS.AFTER && filter.from) {
    return [`${field}:>"${filter.from}"`];
  }

  if (filter.kind === DATE_KINDS.BEFORE && filter.to) {
    return [`${field}:<"${filter.to}"`];
  }

  if (filter.kind === DATE_KINDS.BETWEEN) {
    if (filter.from && filter.to) {
      return [`${field}:"${filter.from}..${filter.to}"`];
    }
    // Partial "between": treat as after/before when only one date is filled
    if (filter.from && !filter.to) {
      return [`${field}:>"${filter.from}"`];
    }
    if (!filter.from && filter.to) {
      return [`${field}:<"${filter.to}"`];
    }
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

function serializeFaces(key: string, operator: string, values: string[]): string[] {
  if (values.length === 0) return [];
  // Join values inside single quote pair: faces:"1,2"
  return [`${key}${operator}"${values.join(',')}"`];
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
      // Join multiple values with comma inside quotes: resolution:"small,medium"
      result.push(`resolution:"${resolution.join(',')}"`);
    }
    if (orientation?.length) {
      result.push(`orientation:"${orientation.join(',')}"`);
    }
    if (faces?.length) {
      // Join values inside single quote pair: faces:"1,2"
      result.push(`faces:"${faces.join(',')}"`);
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
  const isDateType = isMetadataDateKey(rawKey);

  if (filter.type === 'date') {
    return serializeMetadataDateFilter(fieldName, filter, isDateType);
  }

  const stringFilter = filter as StringFilter;
  const { operator = DEFAULT_FILTER_OPERATOR, values = [], logic, metadataType } = stringFilter;

  if (values.length === 0) return [];

  // Empty/non-empty: always use ':' operator regardless of stored operator
  // GeoPoint needs ':~' operator even for empty/non-empty
  if (values.length === 1 && (values[0] === EMPTY_VALUE || values[0] === NOT_EMPTY_VALUE)) {
    const op = metadataType === METADATA_FIELD_TYPES.GEO_POINT
      ? FILTER_OPERATORS.IS + '~'
      : FILTER_OPERATORS.IS;
    return [`${fieldName}${op}"${values[0]}"`];
  }

  // Numeric/Decimal2 range: remap '..' operator to ':' and join values with ','
  if (
    (metadataType === METADATA_FIELD_TYPES.NUMERIC ||
      metadataType === METADATA_FIELD_TYPES.DECIMAL2) &&
    operator === FILTER_OPERATORS.RANGE
  ) {
    return [`${fieldName}${FILTER_OPERATORS.IS}"${values.join('","')}"`];
  }

  // GeoPoint: append '~' to operator, wrap coordinates in parentheses
  // Input value format: "lat,lng..radius" -> output: fieldName:~"(lat,lng)..radius"
  if (metadataType === METADATA_FIELD_TYPES.GEO_POINT) {
    const wrapped = values.map((v) => {
      const dotIdx = v.indexOf('..');
      if (dotIdx === -1) return `(${v})`;
      const coords = v.slice(0, dotIdx);
      const radius = v.slice(dotIdx);
      return `(${coords})${radius}`;
    });
    return serializeSimple(fieldName, operator + '~', wrapped, ',', logic);
  }

  return serializeSimple(fieldName, operator, values, ',', logic);
}

function serializeMetadataDateFilter(
  fieldName: string,
  filter: DateFilter,
  wrapQuoted: boolean,
): string[] {
  // First serialize as normal date filter
  const entries = serializeDateFilter(fieldName, filter);
  if (!wrapQuoted || entries.length === 0) return entries;

  // For metadata date fields, wrap entire expression in quotes: "fieldName:value"
  return entries.map((entry) => {
    // Entry format is like: fieldName:"value" or fieldName>:"value"
    // Wrap the whole thing in quotes: "fieldName:value" (remove inner quotes, wrap outer)
    // Find the operator position (first non-alphanumeric, non-underscore char)
    const opIdx = entry.search(/[^a-zA-Z0-9_]/);
    if (opIdx === -1) return `"${entry}"`;

    const name = entry.slice(0, opIdx);
    const rest = entry.slice(opIdx);
    // rest starts with operator, then has quoted value(s)
    // Strip quotes from inner value and wrap the whole thing
    const unquoted = rest.replace(/"/g, '');
    return `"${name}${unquoted}"`;
  });
}

function isMetadataDateKey(rawKey: string): boolean {
  return rawKey.startsWith('date_');
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
  return values.map((v) => v.replace(/#/g, ''));
}

function filters_get_type_values(values: string[]): string[] {
  return values;
}
