import { css } from 'lit';
import tailwindStyles from './tailwind.css?inline';

/** Global reset — spread into every component's `static styles` array. */
export const resetStyles = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

let _sheet: CSSStyleSheet | undefined;

export function getSharedStyles(): CSSStyleSheet {
  if (!_sheet) {
    _sheet = new CSSStyleSheet();
    _sheet.replaceSync(tailwindStyles);
  }
  return _sheet;
}
