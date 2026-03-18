import { AssetPicker } from './asset-picker';

if (typeof customElements !== 'undefined' && !customElements.get('sfx-asset-picker')) {
  customElements.define('sfx-asset-picker', AssetPicker);
}
