import tailwindStyles from './tailwind.css?inline';

let _sheet: CSSStyleSheet | undefined;

export function getSharedStyles(): CSSStyleSheet {
  if (!_sheet) {
    _sheet = new CSSStyleSheet();
    _sheet.replaceSync(tailwindStyles);
  }
  return _sheet;
}
