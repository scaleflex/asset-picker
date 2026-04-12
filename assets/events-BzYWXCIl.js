import{b as p}from"./index-DeQhaZNH.js";import{r as d}from"./code-block-Bk3NnwHF.js";let t=null;const i=[];function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function l(e,a){if(!t)return;const s=new Date().toLocaleTimeString(),c=document.createElement("div"),n=a?` <span class="log-data">${r(JSON.stringify(a,null,0))}</span>`:"";c.innerHTML=`<span class="log-time">${r(s)}</span> <span class="log-event">${r(e)}</span>${n}`,t.appendChild(c),t.scrollTop=t.scrollHeight}const m={render(){return`
      <div class="page-header">
        <h1>Event handling</h1>
        <p>The asset picker fires events for selection, cancellation, and errors. Use callback props or DOM event listeners.</p>
      </div>

      <section class="page-section">
        <button class="btn-primary" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Event log</h2>
        <div class="event-log" id="event-log">
          <div><span class="log-time">--:--:--</span> Waiting for events...</div>
        </div>
        <button class="btn-outline btn-sm" id="clear-log">Clear log</button>
      </section>

      <section class="page-section">
        <h2>Callback props</h2>
        <div id="code-callbacks"></div>
      </section>

      <section class="page-section">
        <h2>DOM events</h2>
        <div id="code-events"></div>
      </section>
    `},init(e){t=document.getElementById("event-log"),d("#code-callbacks",[{label:"JavaScript",lang:"javascript",code:`
picker.config = {
  auth: { /* ... */ },
  onSelect: (assets) => {
    console.log('Selected assets:', assets);
  },
  onCancel: () => {
    console.log('Picker was cancelled');
  },
};`}]),d("#code-events",[{label:"JavaScript",lang:"javascript",code:`
// DOM custom events (alternative to callback props)
picker.addEventListener('ap-select', (e) => {
  console.log('Selected:', e.detail.assets);
});

picker.addEventListener('ap-cancel', () => {
  console.log('Cancelled');
});

picker.addEventListener('ap-error', (e) => {
  console.error(e.detail.context, e.detail.error);
});`}]);const a=(n=>{l("ap-select",{count:n.detail.assets.length,assets:n.detail.assets.map(o=>({uuid:o.uuid,name:o.name}))})}),s=(()=>{l("ap-cancel")}),c=(n=>{var o;l("ap-error",{context:n.detail.context,message:(o=n.detail.error)==null?void 0:o.message})});e.addEventListener("ap-select",a),e.addEventListener("ap-cancel",s),e.addEventListener("ap-error",c),i.push(["ap-select",a],["ap-cancel",s],["ap-error",c]),document.getElementById("clear-log").addEventListener("click",()=>{t&&(t.innerHTML='<div><span class="log-time">--:--:--</span> Log cleared.</div>')}),document.getElementById("open-btn").addEventListener("click",()=>{l("open"),e.config=p({onSelect:n=>l("onSelect callback",{count:n.length}),onCancel:()=>l("onCancel callback")}),e.open()})},destroy(){const e=document.getElementById("picker");e&&i.forEach(([a,s])=>e.removeEventListener(a,s)),i.length=0,t=null}};export{m as default};
