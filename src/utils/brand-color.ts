/**
 * Parses a hex color and generates CSS custom property overrides
 * for all accent/primary variables used in the theme.
 *
 * Uses oklch color space so opacity-based tones are derived naturally.
 */

function hexToSrgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3
    ? h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
    : h;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  return [r, g, b];
}

function linearize(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function srgbToOklch(r: number, g: number, b: number): [number, number, number] {
  // sRGB -> linear RGB
  const lr = linearize(r);
  const lg = linearize(g);
  const lb = linearize(b);

  // linear RGB -> LMS (using Oklab matrix)
  const l_ = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m_ = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s_ = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;

  const l1 = Math.cbrt(l_);
  const m1 = Math.cbrt(m_);
  const s1 = Math.cbrt(s_);

  // LMS -> Oklab
  const L = 0.2104542553 * l1 + 0.7936177850 * m1 - 0.0040720468 * s1;
  const a = 1.9779984951 * l1 - 2.4285922050 * m1 + 0.4505937099 * s1;
  const bk = 0.0259040371 * l1 + 0.7827717662 * m1 - 0.8086757660 * s1;

  // Oklab -> Oklch
  const C = Math.sqrt(a * a + bk * bk);
  let h = Math.atan2(bk, a) * (180 / Math.PI);
  if (h < 0) h += 360;

  return [L, C, h];
}

/** Determine if the color is light enough to need dark foreground text */
function needsDarkForeground(L: number): boolean {
  return L > 0.7;
}

/**
 * Apply brand color CSS custom properties on an element.
 * Call with empty string to clear overrides.
 */
export function applyBrandColor(el: HTMLElement, hex: string): void {
  const props = [
    '--ap-primary',
    '--ap-primary-foreground',
    '--ap-primary-10',
    '--ap-primary-20',
    '--ap-accent',
    '--ap-accent-foreground',
    '--ap-ring',
    '--ap-selection-bg',
  ];

  if (!hex) {
    for (const prop of props) {
      el.style.removeProperty(prop);
    }
    return;
  }

  const [r, g, b] = hexToSrgb(hex);
  const [L, C, h] = srgbToOklch(r, g, b);

  const base = `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${h.toFixed(1)})`;
  const fg = needsDarkForeground(L) ? '#000' : '#fff';

  el.style.setProperty('--ap-primary', base);
  el.style.setProperty('--ap-primary-foreground', fg);
  el.style.setProperty('--ap-primary-10', `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${h.toFixed(1)} / 0.1)`);
  el.style.setProperty('--ap-primary-20', `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${h.toFixed(1)} / 0.2)`);
  el.style.setProperty('--ap-accent', `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${h.toFixed(1)} / 0.07)`);
  el.style.setProperty('--ap-accent-foreground', base);
  el.style.setProperty('--ap-ring', `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${h.toFixed(1)} / 0.7)`);
  el.style.setProperty('--ap-selection-bg', `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${h.toFixed(1)} / 0.08)`);
}
