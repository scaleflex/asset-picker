import { LitElement, html, css, svg, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type SvgElement = { tag: string; attrs: Record<string, string> };
type IconDef = string | SvgElement[];

// All icons sourced from Lucide (https://lucide.dev) — ISC License
const ICONS: Record<string, IconDef> = {
  // ── Navigation & Actions ────────────────────────────────────────────
  search: [
    { tag: 'circle', attrs: { cx: '11', cy: '11', r: '8' } },
    { tag: 'path', attrs: { d: 'm21 21-4.3-4.3' } },
  ],
  check: 'M20 6 9 17l-5-5',
  close: [
    { tag: 'path', attrs: { d: 'M18 6 6 18' } },
    { tag: 'path', attrs: { d: 'm6 6 12 12' } },
  ],
  'chevron-left': 'm15 18-6-6 6-6',
  'chevron-right': 'm9 18 6-6-6-6',
  'chevron-down': 'm6 9 6 6 6-6',
  download: [
    { tag: 'path', attrs: { d: 'M12 15V3' } },
    { tag: 'path', attrs: { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' } },
    { tag: 'path', attrs: { d: 'm7 10 5 5 5-5' } },
  ],
  upload: [
    { tag: 'path', attrs: { d: 'M12 3v12' } },
    { tag: 'path', attrs: { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' } },
    { tag: 'path', attrs: { d: 'm17 8-5-5-5 5' } },
  ],
  fullscreen: [
    { tag: 'path', attrs: { d: 'M8 3H5a2 2 0 0 0-2 2v3' } },
    { tag: 'path', attrs: { d: 'M21 8V5a2 2 0 0 0-2-2h-3' } },
    { tag: 'path', attrs: { d: 'M3 16v3a2 2 0 0 0 2 2h3' } },
    { tag: 'path', attrs: { d: 'M16 21h3a2 2 0 0 0 2-2v-3' } },
  ],
  trash: [
    { tag: 'path', attrs: { d: 'M10 11v6' } },
    { tag: 'path', attrs: { d: 'M14 11v6' } },
    { tag: 'path', attrs: { d: 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6' } },
    { tag: 'path', attrs: { d: 'M3 6h18' } },
    { tag: 'path', attrs: { d: 'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' } },
  ],
  more: [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '1' } },
    { tag: 'circle', attrs: { cx: '19', cy: '12', r: '1' } },
    { tag: 'circle', attrs: { cx: '5', cy: '12', r: '1' } },
  ],

  // ── View Modes ──────────────────────────────────────────────────────
  grid: [
    { tag: 'rect', attrs: { x: '3', y: '3', width: '18', height: '18', rx: '2' } },
    { tag: 'path', attrs: { d: 'M12 3v18' } },
    { tag: 'path', attrs: { d: 'M3 12h18' } },
  ],
  list: [
    { tag: 'path', attrs: { d: 'M3 5h.01' } },
    { tag: 'path', attrs: { d: 'M3 12h.01' } },
    { tag: 'path', attrs: { d: 'M3 19h.01' } },
    { tag: 'path', attrs: { d: 'M8 5h13' } },
    { tag: 'path', attrs: { d: 'M8 12h13' } },
    { tag: 'path', attrs: { d: 'M8 19h13' } },
  ],
  preview: [
    { tag: 'path', attrs: { d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0' } },
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '3' } },
  ],
  select: [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '10' } },
    { tag: 'path', attrs: { d: 'm9 12 2 2 4-4' } },
  ],
  'gallery-vertical-end': [
    { tag: 'path', attrs: { d: 'M7 2h10' } },
    { tag: 'path', attrs: { d: 'M5 6h14' } },
    { tag: 'rect', attrs: { width: '18', height: '12', x: '3', y: '10', rx: '2' } },
  ],

  // ── Filtering & Sorting ─────────────────────────────────────────────
  filter: [
    { tag: 'path', attrs: { d: 'M2 5h20' } },
    { tag: 'path', attrs: { d: 'M6 12h12' } },
    { tag: 'path', attrs: { d: 'M9 19h6' } },
  ],
  sort: [
    { tag: 'path', attrs: { d: 'm21 16-4 4-4-4' } },
    { tag: 'path', attrs: { d: 'M17 20V4' } },
    { tag: 'path', attrs: { d: 'm3 8 4-4 4 4' } },
    { tag: 'path', attrs: { d: 'M7 4v16' } },
  ],
  'sort-asc': [
    { tag: 'path', attrs: { d: 'm3 8 4-4 4 4' } },
    { tag: 'path', attrs: { d: 'M7 4v16' } },
    { tag: 'path', attrs: { d: 'M11 12h4' } },
    { tag: 'path', attrs: { d: 'M11 16h7' } },
    { tag: 'path', attrs: { d: 'M11 20h10' } },
  ],
  'sort-desc': [
    { tag: 'path', attrs: { d: 'm3 16 4 4 4-4' } },
    { tag: 'path', attrs: { d: 'M7 20V4' } },
    { tag: 'path', attrs: { d: 'M11 4h4' } },
    { tag: 'path', attrs: { d: 'M11 8h7' } },
    { tag: 'path', attrs: { d: 'M11 12h10' } },
  ],

  // ── File Types ──────────────────────────────────────────────────────
  image: [
    { tag: 'rect', attrs: { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' } },
    { tag: 'circle', attrs: { cx: '9', cy: '9', r: '2' } },
    { tag: 'path', attrs: { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' } },
  ],
  video: [
    { tag: 'path', attrs: { d: 'm16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5' } },
    { tag: 'rect', attrs: { x: '2', y: '6', width: '14', height: '12', rx: '2' } },
  ],
  audio: [
    { tag: 'path', attrs: { d: 'M9 18V5l12-2v13' } },
    { tag: 'circle', attrs: { cx: '6', cy: '18', r: '3' } },
    { tag: 'circle', attrs: { cx: '18', cy: '16', r: '3' } },
  ],
  music: [
    { tag: 'path', attrs: { d: 'M9 18V5l12-2v13' } },
    { tag: 'circle', attrs: { cx: '6', cy: '18', r: '3' } },
    { tag: 'circle', attrs: { cx: '18', cy: '16', r: '3' } },
  ],
  document: [
    { tag: 'path', attrs: { d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z' } },
    { tag: 'path', attrs: { d: 'M14 2v5a1 1 0 0 0 1 1h5' } },
    { tag: 'path', attrs: { d: 'M10 9H8' } },
    { tag: 'path', attrs: { d: 'M16 13H8' } },
    { tag: 'path', attrs: { d: 'M16 17H8' } },
  ],
  'file-text': [
    { tag: 'path', attrs: { d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z' } },
    { tag: 'path', attrs: { d: 'M14 2v5a1 1 0 0 0 1 1h5' } },
    { tag: 'path', attrs: { d: 'M10 9H8' } },
    { tag: 'path', attrs: { d: 'M16 13H8' } },
    { tag: 'path', attrs: { d: 'M16 17H8' } },
  ],
  file: [
    { tag: 'path', attrs: { d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z' } },
    { tag: 'path', attrs: { d: 'M14 2v5a1 1 0 0 0 1 1h5' } },
  ],
  archive: [
    { tag: 'rect', attrs: { width: '20', height: '5', x: '2', y: '3', rx: '1' } },
    { tag: 'path', attrs: { d: 'M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8' } },
    { tag: 'path', attrs: { d: 'M10 12h4' } },
  ],
  font: [
    { tag: 'path', attrs: { d: 'M12 4v16' } },
    { tag: 'path', attrs: { d: 'M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2' } },
    { tag: 'path', attrs: { d: 'M9 20h6' } },
  ],
  text: [
    { tag: 'path', attrs: { d: 'M12 4v16' } },
    { tag: 'path', attrs: { d: 'M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2' } },
    { tag: 'path', attrs: { d: 'M9 20h6' } },
  ],
  clapperboard: [
    { tag: 'path', attrs: { d: 'm12.296 3.464 3.02 3.956' } },
    { tag: 'path', attrs: { d: 'M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z' } },
    { tag: 'path', attrs: { d: 'M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' } },
    { tag: 'path', attrs: { d: 'm6.18 5.276 3.1 3.899' } },
  ],

  // ── Folders ─────────────────────────────────────────────────────────
  folder: 'M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z',
  'folder-open': 'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',

  // ── Labels & Tags ──────────────────────────────────────────────────
  tags: [
    { tag: 'path', attrs: { d: 'M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z' } },
    { tag: 'path', attrs: { d: 'M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193' } },
    { tag: 'circle', attrs: { cx: '10.5', cy: '6.5', r: '.5', fill: 'currentColor' } },
  ],
  tag: [
    { tag: 'path', attrs: { d: 'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z' } },
    { tag: 'circle', attrs: { cx: '7.5', cy: '7.5', r: '.5', fill: 'currentColor' } },
  ],
  hash: [
    { tag: 'path', attrs: { d: 'M4 9h16' } },
    { tag: 'path', attrs: { d: 'M4 15h16' } },
    { tag: 'path', attrs: { d: 'M10 3 8 21' } },
    { tag: 'path', attrs: { d: 'M14 3 16 21' } },
  ],

  // ── Filters ─────────────────────────────────────────────────────────
  'calendar-days': [
    { tag: 'rect', attrs: { width: '18', height: '18', x: '3', y: '4', rx: '2' } },
    { tag: 'path', attrs: { d: 'M16 2v4' } },
    { tag: 'path', attrs: { d: 'M8 2v4' } },
    { tag: 'path', attrs: { d: 'M3 10h18' } },
    { tag: 'path', attrs: { d: 'M8 14h.01' } },
    { tag: 'path', attrs: { d: 'M12 14h.01' } },
    { tag: 'path', attrs: { d: 'M16 14h.01' } },
    { tag: 'path', attrs: { d: 'M8 18h.01' } },
    { tag: 'path', attrs: { d: 'M12 18h.01' } },
    { tag: 'path', attrs: { d: 'M16 18h.01' } },
  ],
  'file-type': [
    { tag: 'path', attrs: { d: 'M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4' } },
    { tag: 'path', attrs: { d: 'M14 2v4a2 2 0 0 0 2 2h4' } },
    { tag: 'path', attrs: { d: 'M2 13v-1h6v1' } },
    { tag: 'path', attrs: { d: 'M5 12v6' } },
    { tag: 'path', attrs: { d: 'M4 18h2' } },
  ],
  scaling: [
    { tag: 'path', attrs: { d: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' } },
    { tag: 'path', attrs: { d: 'M14 15H9v-5' } },
    { tag: 'path', attrs: { d: 'M20 9V4h-5' } },
    { tag: 'path', attrs: { d: 'M20 4l-6 6' } },
  ],
  history: [
    { tag: 'path', attrs: { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' } },
    { tag: 'path', attrs: { d: 'M3 3v5h5' } },
    { tag: 'path', attrs: { d: 'M12 7v5l4 2' } },
  ],
  'swatch-book': [
    { tag: 'path', attrs: { d: 'M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z' } },
    { tag: 'path', attrs: { d: 'M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7' } },
    { tag: 'path', attrs: { d: 'M7 17h.01' } },
    { tag: 'path', attrs: { d: 'm11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8' } },
  ],
  'badge-check': [
    { tag: 'path', attrs: { d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z' } },
    { tag: 'path', attrs: { d: 'm9 12 2 2 4-4' } },
  ],
  box: [
    { tag: 'path', attrs: { d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' } },
    { tag: 'path', attrs: { d: 'm3.3 7 8.7 5 8.7-5' } },
    { tag: 'path', attrs: { d: 'M12 22V12' } },
  ],
  'layout-grid': [
    { tag: 'rect', attrs: { width: '7', height: '7', x: '3', y: '3', rx: '1' } },
    { tag: 'rect', attrs: { width: '7', height: '7', x: '14', y: '3', rx: '1' } },
    { tag: 'rect', attrs: { width: '7', height: '7', x: '14', y: '14', rx: '1' } },
    { tag: 'rect', attrs: { width: '7', height: '7', x: '3', y: '14', rx: '1' } },
  ],
  'layout-template': [
    { tag: 'rect', attrs: { width: '18', height: '7', x: '3', y: '3', rx: '1' } },
    { tag: 'rect', attrs: { width: '9', height: '7', x: '3', y: '14', rx: '1' } },
    { tag: 'rect', attrs: { width: '5', height: '7', x: '16', y: '14', rx: '1' } },
  ],

  // ── Pins ────────────────────────────────────────────────────────────
  pin: [
    { tag: 'path', attrs: { d: 'M12 17v5' } },
    { tag: 'path', attrs: { d: 'M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1z' } },
  ],
  'pin-off': [
    { tag: 'path', attrs: { d: 'M12 17v5' } },
    { tag: 'path', attrs: { d: 'M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 2-2H6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v2.34' } },
    { tag: 'path', attrs: { d: 'M2 2l20 20' } },
    { tag: 'path', attrs: { d: 'M9 12a2 2 0 0 1-1.11 1.79l-1.78.9' } },
    { tag: 'path', attrs: { d: 'M17 17H5' } },
  ],

  lock: [
    { tag: 'rect', attrs: { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2' } },
    { tag: 'path', attrs: { d: 'M7 11V7a5 5 0 0 1 10 0v4' } },
  ],
  globe: [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '10' } },
    { tag: 'path', attrs: { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' } },
    { tag: 'path', attrs: { d: 'M2 12h20' } },
  ],

  // ── Approval Status ────────────────────────────────────────────────
  'circle-check-big': [
    { tag: 'path', attrs: { d: 'M21.801 10A10 10 0 1 1 17 3.335' } },
    { tag: 'path', attrs: { d: 'm9 11 3 3L22 4' } },
  ],
  'x-circle': [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '10' } },
    { tag: 'path', attrs: { d: 'm15 9-6 6' } },
    { tag: 'path', attrs: { d: 'm9 9 6 6' } },
  ],
  ban: [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '10' } },
    { tag: 'path', attrs: { d: 'm4.9 4.9 14.2 14.2' } },
  ],
  clock: [
    { tag: 'circle', attrs: { cx: '12', cy: '12', r: '10' } },
    { tag: 'path', attrs: { d: 'M12 6v6l4 2' } },
  ],

  // ── Misc ────────────────────────────────────────────────────────────
  component: [
    { tag: 'path', attrs: { d: 'M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z' } },
    { tag: 'path', attrs: { d: 'M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z' } },
    { tag: 'path', attrs: { d: 'M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z' } },
    { tag: 'path', attrs: { d: 'M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z' } },
  ],
};

@customElement('ap-icon')
export class ApIcon extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        width: var(--icon-size, 20px);
        height: var(--icon-size, 20px);
      }
    `,
  ];

  @property() name = '';
  @property({ type: Number }) size = 20;

  render() {
    const icon = ICONS[this.name];
    if (!icon) return nothing;

    const elements = typeof icon === 'string'
      ? svg`<path d=${icon}></path>`
      : icon.map((el) => {
          const { tag, attrs } = el;
          if (tag === 'circle') return svg`<circle cx=${attrs.cx} cy=${attrs.cy} r=${attrs.r} fill=${attrs.fill ?? 'none'}></circle>`;
          if (tag === 'rect') return svg`<rect width=${attrs.width} height=${attrs.height} x=${attrs.x} y=${attrs.y} rx=${attrs.rx ?? '0'} ry=${attrs.ry ?? '0'}></rect>`;
          return svg`<path d=${attrs.d}></path>`;
        });

    return html`
      <svg
        style="--icon-size: ${this.size}px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        ${elements}
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ap-icon': ApIcon;
  }
}
