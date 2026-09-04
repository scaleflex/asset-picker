import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=null,r=[];function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function a(e,t){if(!n)return;let r=new Date().toLocaleTimeString(),a=document.createElement(`div`),o=t?` <span class="log-data">${i(JSON.stringify(t,null,0))}</span>`:``;a.innerHTML=`<span class="log-time">${i(r)}</span> <span class="log-event">${i(e)}</span>${o}`,n.appendChild(a),n.scrollTop=n.scrollHeight}var o={render(){return`
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
    `},init(i){n=document.getElementById(`event-log`),t(`#code-callbacks`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
  onSelect: (assets) => {
    console.log('Selected assets:', assets);
  },
  onCancel: () => {
    console.log('Picker was cancelled');
  },
};`}]),t(`#code-events`,[{label:`JavaScript`,lang:`javascript`,code:`
// DOM custom events (alternative to callback props)
picker.addEventListener('ap-select', (e) => {
  console.log('Selected:', e.detail.assets);
});

picker.addEventListener('ap-cancel', () => {
  console.log('Cancelled');
});

picker.addEventListener('ap-error', (e) => {
  console.error(e.detail.context, e.detail.error);
});`}]);let o=(e=>{a(`ap-select`,{count:e.detail.assets.length,assets:e.detail.assets.map(e=>({uuid:e.uuid,name:e.name}))})}),s=(()=>{a(`ap-cancel`)}),c=(e=>{a(`ap-error`,{context:e.detail.context,message:e.detail.error?.message})});i.addEventListener(`ap-select`,o),i.addEventListener(`ap-cancel`,s),i.addEventListener(`ap-error`,c),r.push([`ap-select`,o],[`ap-cancel`,s],[`ap-error`,c]),document.getElementById(`clear-log`).addEventListener(`click`,()=>{n&&(n.innerHTML=`<div><span class="log-time">--:--:--</span> Log cleared.</div>`)}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{a(`open`),i.config=e({onSelect:e=>a(`onSelect callback`,{count:e.length}),onCancel:()=>a(`onCancel callback`)}),i.open()})},destroy(){let e=document.getElementById(`picker`);e&&r.forEach(([t,n])=>e.removeEventListener(t,n)),r.length=0,n=null}};export{o as default};