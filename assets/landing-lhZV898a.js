import{b as f}from"./index-BqysEWZn.js";import{r as m}from"./code-block-Bk3NnwHF.js";const l={render(){return`
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-badge">@scaleflex/asset-picker</div>
          <h1><span class="gradient-text">Asset Picker</span></h1>
          <p>A framework-agnostic Web Component for browsing and selecting digital assets from Scaleflex DAM. Integrate into any project with a single HTML tag.</p>
          <div class="hero-actions">
            <a href="#/docs/getting-started" class="btn-primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="https://github.com/scaleflex/asset-picker" target="_blank" rel="noopener" class="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.npmjs.com/package/@scaleflex/asset-picker" target="_blank" rel="noopener" class="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor"><path d="M0 256V0h256v256H0zm41-41h59.2v-133H141v133h33.4V41H41v174z"/></svg>
              npm
            </a>
          </div>
          <div class="hero-meta">
            <span>Web Component</span>
            <span>Lit 3</span>
            <span>~24 KB gzipped</span>
            <span>React wrapper</span>
            <span>TypeScript</span>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <div class="section-inner">
          <div class="section-header">
            <div class="section-label">Live demo</div>
            <h2>Try it right here</h2>
            <p>Browse real assets from the Scaleflex DAM. No setup required.</p>
          </div>
          <div class="demo-picker-container">
            <sfx-asset-picker id="demo-inline-picker"></sfx-asset-picker>
          </div>
        </div>
      </section>

      <section class="quick-start-section">
        <div class="section-inner">
          <div class="section-header">
            <div class="section-label">Quick Start</div>
            <h2>Up and running in under a minute</h2>
            <p>Install from npm, import the custom element, and open the picker with a few lines of code.</p>
          </div>
          <div class="quick-start-tabs">
            <button class="quick-start-tab active" data-tab="npm">npm</button>
            <button class="quick-start-tab" data-tab="cdn">CDN</button>
          </div>
          <div class="quick-start-steps" data-tab-content="npm">
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">1</div>
                <h3>Install</h3>
              </div>
              <div class="step-code">
                <code>npm install @scaleflex/asset-picker</code>
                <button class="step-copy" data-code="npm install @scaleflex/asset-picker" aria-label="Copy to clipboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">2</div>
                <h3>Import</h3>
              </div>
              <div class="step-code">
                <code>import '@scaleflex/asset-picker/define';</code>
                <button class="step-copy" data-code="import '@scaleflex/asset-picker/define';" aria-label="Copy to clipboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">3</div>
                <h3>Use</h3>
              </div>
              <p class="step-description">Add <code>&lt;sfx-asset-picker&gt;</code> to your HTML, set config, and call <code>.open()</code>.</p>
            </div>
          </div>
          <div class="quick-start-steps" data-tab-content="cdn" style="display:none">
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">1</div>
                <h3>Add script tag</h3>
              </div>
              <div class="step-code">
                <code>&lt;script src="https://cdn.scaleflex.com/asset-picker/0.2.17/asset-picker.min.js"&gt;&lt;/script&gt;</code>
                <button class="step-copy" data-code='<script src="https://cdn.scaleflex.com/asset-picker/0.2.17/asset-picker.min.js"><\/script>' aria-label="Copy to clipboard">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="quick-start-step">
              <div class="step-header">
                <div class="step-number">2</div>
                <h3>Use</h3>
              </div>
              <p class="step-description">The script auto-registers <code>&lt;sfx-asset-picker&gt;</code>. Just add it to your HTML, set config, and call <code>.open()</code>. No bundler needed.</p>
            </div>
          </div>
          <div id="quick-start-code"></div>
        </div>
      </section>

      <section class="examples-section">
        <div class="section-inner">
          <div class="section-header">
            <div class="section-label">Examples</div>
            <h2>Explore what's possible</h2>
          </div>
          <div class="quick-start-grid">
            <a href="#/examples/basic" class="quick-start-card">
              <h3>Basic usage</h3>
              <p>Minimal setup to open the asset picker and handle selection.</p>
            </a>
            <a href="#/examples/single-select" class="quick-start-card">
              <h3>Single select</h3>
              <p>Restrict selection to a single asset at a time.</p>
            </a>
            <a href="#/examples/theming" class="quick-start-card">
              <h3>Theming</h3>
              <p>Customize the picker's appearance with brand colors.</p>
            </a>
            <a href="#/examples/custom-theming" class="quick-start-card">
              <h3>Custom theming</h3>
              <p>Full CSS custom property overrides for dark themes and beyond.</p>
            </a>
            <a href="#/examples/default-filters" class="quick-start-card">
              <h3>Default filters</h3>
              <p>Pre-apply filters that users can modify or remove.</p>
            </a>
            <a href="#/examples/forced-filters" class="quick-start-card">
              <h3>Forced filters</h3>
              <p>Lock filters that users cannot remove.</p>
            </a>
            <a href="#/examples/hidden-tabs" class="quick-start-card">
              <h3>Tabs</h3>
              <p>Control which navigation tabs are available.</p>
            </a>
            <a href="#/examples/root-folder" class="quick-start-card">
              <h3>Root folder</h3>
              <p>Scope the picker to a specific folder hierarchy.</p>
            </a>
            <a href="#/examples/events" class="quick-start-card">
              <h3>Event handling</h3>
              <p>Listen to selection, cancel, and error events.</p>
            </a>
            <a href="#/examples/inline" class="quick-start-card">
              <h3>Inline display</h3>
              <p>Embed the picker directly in the page flow without a modal.</p>
            </a>
            <a href="#/examples/react-wrapper" class="quick-start-card">
              <h3>React wrapper</h3>
              <p>First-class React component with typed props and ref.</p>
            </a>
            <a href="#/examples/transformations" class="quick-start-card">
              <h3>Transformations</h3>
              <p>Export options dialog for format, quality, and resize before selection.</p>
            </a>
          </div>
        </div>
      </section>

      <section class="demo-also" id="also-slider">
        <div class="demo-also-slides">
          <div class="demo-also-slide active">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>js-cloudimage-360-view</h2>
                <p>Interactive 360 product views with drag, zoom, autoplay and hotspots. Perfect for e-commerce product pages.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/js-cloudimage-360-view/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://github.com/scaleflex/js-cloudimage-360-view" target="_blank" rel="noopener" class="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad360" x1="0" y1="0" x2="200" y2="200"><stop offset="0%" stop-color="rgba(44,153,255,0.3)"/><stop offset="100%" stop-color="rgba(0,212,170,0.15)"/></linearGradient></defs><circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><circle cx="100" cy="100" r="60" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><ellipse cx="100" cy="100" rx="80" ry="32" stroke="url(#grad360)" stroke-width="2"/><ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(60 100 100)" stroke="rgba(0,212,170,0.2)" stroke-width="1.5"/><ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(120 100 100)" stroke="rgba(0,212,170,0.15)" stroke-width="1.5"/><circle cx="100" cy="100" r="6" fill="rgba(44,153,255,0.7)"/><circle cx="100" cy="100" r="3" fill="rgba(44,153,255,1)"/><circle cx="180" cy="100" r="4" fill="rgba(0,212,170,0.5)"/><circle cx="60" cy="69" r="3" fill="rgba(44,153,255,0.4)"/><circle cx="140" cy="131" r="3" fill="rgba(44,153,255,0.4)"/><path d="M165 55l8-3m-4-4l-4 7" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-linecap="round"/></svg>
              </div>
            </div>
          </div>
          <div class="demo-also-slide">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>js-cloudimage-before-after</h2>
                <p>Beautiful image comparison slider with responsive design, touch support, and smooth animations.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/js-cloudimage-before-after/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://github.com/scaleflex/js-cloudimage-before-after" target="_blank" rel="noopener" class="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradBA" x1="0" y1="40" x2="200" y2="160"><stop offset="0%" stop-color="rgba(44,153,255,0.15)"/><stop offset="100%" stop-color="rgba(0,212,170,0.08)"/></linearGradient></defs><rect x="20" y="40" width="160" height="120" rx="8" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" fill="rgba(255,255,255,0.02)"/><rect x="20" y="40" width="80" height="120" rx="8" fill="url(#gradBA)"/><line x1="100" y1="40" x2="100" y2="160" stroke="rgba(44,153,255,0.5)" stroke-width="2"/><circle cx="100" cy="100" r="16" stroke="rgba(44,153,255,0.6)" stroke-width="2" fill="rgba(44,153,255,0.1)"/><path d="M93 94l-5 6 5 6" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M107 94l5 6-5 6" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="55" width="40" height="5" rx="2" fill="rgba(255,255,255,0.08)"/><rect x="30" y="65" width="28" height="4" rx="2" fill="rgba(255,255,255,0.05)"/><circle cx="50" cy="110" r="12" fill="rgba(44,153,255,0.08)" stroke="rgba(44,153,255,0.2)" stroke-width="1"/><rect x="130" y="55" width="40" height="5" rx="2" fill="rgba(255,255,255,0.04)"/><rect x="130" y="65" width="28" height="4" rx="2" fill="rgba(255,255,255,0.03)"/></svg>
              </div>
            </div>
          </div>
          <div class="demo-also-slide">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>js-cloudimage-hotspot</h2>
                <p>Add interactive hotspots to images with tooltips, custom styling, and responsive positioning.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/js-cloudimage-hotspot/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://github.com/scaleflex/js-cloudimage-hotspot" target="_blank" rel="noopener" class="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="160" height="120" rx="8" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" fill="rgba(255,255,255,0.02)"/><path d="M20 120l40-30 30 20 25-15 35 25 30-20v60H20z" fill="rgba(44,153,255,0.04)"/><circle cx="65" cy="75" r="10" stroke="rgba(0,212,170,0.6)" stroke-width="2" fill="rgba(0,212,170,0.12)"/><circle cx="65" cy="75" r="3.5" fill="rgba(0,212,170,0.8)"/><line x1="65" y1="63" x2="75" y2="53" stroke="rgba(0,212,170,0.3)" stroke-width="1"/><rect x="75" y="42" width="55" height="18" rx="4" fill="rgba(0,212,170,0.08)" stroke="rgba(0,212,170,0.2)" stroke-width="1"/><rect x="80" y="47" width="35" height="3" rx="1.5" fill="rgba(0,212,170,0.3)"/><rect x="80" y="53" width="22" height="2.5" rx="1" fill="rgba(0,212,170,0.2)"/><circle cx="130" cy="110" r="10" stroke="rgba(44,153,255,0.6)" stroke-width="2" fill="rgba(44,153,255,0.12)"/><circle cx="130" cy="110" r="3.5" fill="rgba(44,153,255,0.8)"/><circle cx="90" cy="135" r="8" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" fill="rgba(255,255,255,0.04)"/><circle cx="90" cy="135" r="3" fill="rgba(255,255,255,0.2)"/></svg>
              </div>
            </div>
          </div>
          <div class="demo-also-slide">
            <div class="demo-also-inner">
              <div class="demo-also-content">
                <div class="demo-also-label">Also by Scaleflex</div>
                <h2>filerobot-image-editor</h2>
                <p>Full-featured image editor with cropping, filters, annotations, and more. Works standalone or embedded.</p>
                <div class="demo-also-actions">
                  <a href="https://scaleflex.github.io/filerobot-image-editor/" target="_blank" rel="noopener" class="btn-primary btn-sm">Live demo</a>
                  <a href="https://github.com/scaleflex/filerobot-image-editor" target="_blank" rel="noopener" class="btn-secondary btn-sm">GitHub</a>
                </div>
              </div>
              <div class="demo-also-visual">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradFIE" x1="20" y1="40" x2="180" y2="160"><stop offset="0%" stop-color="rgba(44,153,255,0.1)"/><stop offset="100%" stop-color="rgba(0,212,170,0.05)"/></linearGradient></defs><rect x="20" y="40" width="160" height="120" rx="8" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" fill="rgba(255,255,255,0.02)"/><rect x="20" y="40" width="160" height="24" rx="8" fill="rgba(255,255,255,0.03)"/><rect x="20" y="63" width="160" height="1" fill="rgba(255,255,255,0.06)"/><circle cx="33" cy="52" r="4" fill="rgba(44,153,255,0.3)"/><circle cx="47" cy="52" r="4" fill="rgba(0,212,170,0.25)"/><circle cx="61" cy="52" r="4" fill="rgba(255,255,255,0.1)"/><rect x="130" y="48" width="40" height="8" rx="4" fill="rgba(44,153,255,0.15)"/><path d="M45 130l30-40 22 22 18-18 30 36" stroke="rgba(44,153,255,0.5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M45 130l30-40 22 22 18-18 30 36z" fill="url(#gradFIE)"/><circle cx="65" cy="90" r="10" stroke="rgba(0,212,170,0.5)" stroke-width="1.5" fill="rgba(0,212,170,0.08)"/><rect x="30" y="142" width="22" height="5" rx="2" fill="rgba(255,255,255,0.06)"/><rect x="57" y="142" width="22" height="5" rx="2" fill="rgba(255,255,255,0.06)"/><rect x="84" y="142" width="22" height="5" rx="2" fill="rgba(255,255,255,0.06)"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="demo-also-dots" id="also-dots"></div>
      </section>

      <footer class="demo-footer">
        <div class="demo-footer-main">
          <div class="demo-footer-brand">
            <a href="https://www.scaleflex.com" target="_blank" rel="noopener">
              <img src="https://assets.scaleflex.com/Marketing/Logos/Scaleflex%20Logos/Logo%20Horizontal/scaleflex%20logo%20without%20tagline%20white%20text%20%28horizontal%29%20.png?vh=85bc00" alt="Scaleflex" class="demo-footer-logo" />
            </a>
            <p>Framework-agnostic Asset Picker for browsing and selecting digital assets from Scaleflex DAM.</p>
          </div>
          <div class="demo-footer-col">
            <h4>Resources</h4>
            <a href="https://www.npmjs.com/package/@scaleflex/asset-picker" target="_blank" rel="noopener">npm</a>
            <a href="#/docs/getting-started">Documentation</a>
            <a href="#/examples/react-wrapper">React Guide</a>
          </div>
          <div class="demo-footer-col">
            <h4>Examples</h4>
            <a href="#/examples/basic">Basic usage</a>
            <a href="#/examples/theming">Theming</a>
            <a href="#/examples/events">Events</a>
          </div>
          <div class="demo-footer-col">
            <h4>Scaleflex</h4>
            <a href="https://www.scaleflex.com" target="_blank" rel="noopener">Website</a>
            <a href="https://www.scaleflex.com/en/digital-asset-management" target="_blank" rel="noopener">Scaleflex DAM</a>
            <a href="https://www.cloudimage.io" target="_blank" rel="noopener">Cloudimage</a>
          </div>
        </div>
        <div class="demo-footer-bottom">
          <p>Made with care by the <a href="https://www.scaleflex.com" target="_blank" rel="noopener">Scaleflex</a> team</p>
        </div>
      </footer>
    `},init(d){const c=document.getElementById("demo-inline-picker");c.config=f({displayMode:"inline",onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),document.querySelectorAll(".quick-start-tab").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.tab;document.querySelectorAll(".quick-start-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.querySelectorAll("[data-tab-content]").forEach(t=>{t.style.display=t.dataset.tabContent===i?"":"none"})})}),document.querySelectorAll(".step-copy").forEach(e=>{e.addEventListener("click",async()=>{const i=e.dataset.code??"";try{await navigator.clipboard.writeText(i),e.classList.add("copied"),e.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'}catch{}setTimeout(()=>{e.classList.remove("copied"),e.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'},1500)})}),m("#quick-start-code",[{label:"HTML",lang:"markup",code:`
<script type="module">
  import '@scaleflex/asset-picker/define';
<\/script>

<sfx-asset-picker id="picker"></sfx-asset-picker>

<button onclick="document.getElementById('picker').open()">
  Choose asset
</button>

<script>
  const picker = document.getElementById('picker');
  picker.config = {
    auth: {
      mode: 'securityTemplate',
      securityTemplateKey: 'YOUR_KEY',
      projectToken: 'YOUR_TOKEN',
    },
    onSelect: (assets) => console.log('Selected:', assets),
  };
<\/script>`},{label:"React",lang:"tsx",code:`
import { useRef } from 'react';
import { AssetPicker, type AssetPickerRef } from '@scaleflex/asset-picker/react';

export function App() {
  const ref = useRef<AssetPickerRef>(null);

  return (
    <>
      <button onClick={() => ref.current?.open()}>Choose asset</button>
      <AssetPicker
        ref={ref}
        config={{
          auth: {
            mode: 'securityTemplate',
            securityTemplateKey: 'YOUR_KEY',
            projectToken: 'YOUR_TOKEN',
          },
          onSelect: (assets) => console.log('Selected:', assets),
        }}
      />
    </>
  );
}`}]);const o=document.querySelectorAll(".demo-also-slide"),n=document.getElementById("also-dots");if(o.length&&n){let e=function(r){if(r===t||p)return;p=!0;const s=r>t?"left":"right",a=o[t],g=o[r];a.classList.add(`slide-out-${s}`),g.classList.add(`slide-in-${s}`,"active"),g.addEventListener("animationend",()=>{a.classList.remove("active",`slide-out-${s}`),g.classList.remove(`slide-in-${s}`),v[t].classList.remove("active"),v[r].classList.add("active"),t=r,p=!1},{once:!0}),i()},i=function(){clearInterval(h),h=setInterval(()=>e((t+1)%o.length),5e3)},t=0,p=!1,h;o.forEach((r,s)=>{const a=document.createElement("button");a.className=`demo-also-dot${s===0?" active":""}`,a.setAttribute("aria-label",`Slide ${s+1}`),a.addEventListener("click",()=>e(s)),n.appendChild(a)});const v=n.querySelectorAll(".demo-also-dot");i(),l._cleanupSlider=()=>clearInterval(h)}},destroy(){var c;const d=document.getElementById("demo-inline-picker");d&&d.close(),(c=l._cleanupSlider)==null||c.call(l),delete l._cleanupSlider}};export{l as default};
