import{b as s}from"./index-BqysEWZn.js";import{r as d}from"./code-block-Bk3NnwHF.js";const n={render(){return`
      <div class="page-header">
        <h1>Custom theming</h1>
        <p>Override CSS custom properties on the <code>&lt;sfx-asset-picker&gt;</code> element for full control over colors, radii, and fonts — including dark themes.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(a){const r=`
  --ap-primary: #a78bfa;
  --ap-primary-foreground: #1a1625;
  --ap-primary-10: rgba(167, 139, 250, 0.12);
  --ap-background: #1a1625;
  --ap-foreground: #e8e0f0;
  --ap-card: #221d30;
  --ap-border: #2e2546;
  --ap-muted: #2a2240;
  --ap-muted-foreground: #9985b8;
  --ap-ring: #a78bfa;
  --ap-selection-bg: rgba(167, 139, 250, 0.15);
  --ap-modal-backdrop: rgba(10, 5, 20, 0.7);
  --ap-modal-radius: 16px;
  --ap-radius: 10px;
  --ap-radius-sm: 8px;
  --ap-radius-lg: 16px;
  --ap-font-family: 'Inter', system-ui, sans-serif;`.trim();d("#code-container",[{label:"HTML",lang:"markup",code:`
<sfx-asset-picker id="picker" style="
  ${r}
"></sfx-asset-picker>`},{label:"React",lang:"tsx",code:`
<AssetPicker
  style={{
    '--ap-primary': '#a78bfa',
    '--ap-primary-foreground': '#1a1625',
    '--ap-primary-10': 'rgba(167, 139, 250, 0.12)',
    '--ap-background': '#1a1625',
    '--ap-foreground': '#e8e0f0',
    '--ap-card': '#221d30',
    '--ap-border': '#2e2546',
    '--ap-muted': '#2a2240',
    '--ap-muted-foreground': '#9985b8',
    '--ap-ring': '#a78bfa',
    '--ap-selection-bg': 'rgba(167, 139, 250, 0.15)',
    '--ap-modal-backdrop': 'rgba(10, 5, 20, 0.7)',
    '--ap-modal-radius': '16px',
    '--ap-radius': '10px',
    '--ap-radius-sm': '8px',
    '--ap-radius-lg': '16px',
    '--ap-font-family': "'Inter', system-ui, sans-serif",
  } as React.CSSProperties}
  config={{ /* ... */ }}
/>`}]);const e={"--ap-primary":"#a78bfa","--ap-primary-foreground":"#1a1625","--ap-primary-10":"rgba(167, 139, 250, 0.12)","--ap-background":"#1a1625","--ap-foreground":"#e8e0f0","--ap-card":"#221d30","--ap-border":"#2e2546","--ap-muted":"#2a2240","--ap-muted-foreground":"#9985b8","--ap-ring":"#a78bfa","--ap-selection-bg":"rgba(167, 139, 250, 0.15)","--ap-modal-backdrop":"rgba(10, 5, 20, 0.7)","--ap-modal-radius":"16px","--ap-radius":"10px","--ap-radius-sm":"8px","--ap-radius-lg":"16px","--ap-font-family":"'Inter', system-ui, sans-serif"};for(const[p,o]of Object.entries(e))a.style.setProperty(p,o);document.getElementById("open-btn").addEventListener("click",()=>{a.config=s({onSelect:p=>alert(`Selected ${p.length} asset(s)`)}),a.open()})},destroy(){const a=document.getElementById("picker");if(a){const r=["--ap-primary","--ap-primary-foreground","--ap-primary-10","--ap-background","--ap-foreground","--ap-card","--ap-border","--ap-muted","--ap-muted-foreground","--ap-ring","--ap-selection-bg","--ap-modal-backdrop","--ap-modal-radius","--ap-radius","--ap-radius-sm","--ap-radius-lg","--ap-font-family"];for(const e of r)a.style.removeProperty(e)}}};export{n as default};
