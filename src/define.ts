import { AssetPicker } from './asset-picker';

if (typeof customElements !== 'undefined' && !customElements.get('asset-picker')) {
  customElements.define('asset-picker', AssetPicker);
}
