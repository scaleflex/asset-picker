import{t as e}from"./index-DEo6o-Qa.js";import{t}from"./code-block-Dan-Xu_Q.js";var n=[{uuid:`2b7d1f04-9c3a-4a1e-8f52-6d0b7c9e4a11`,name:`Amara Osei`,email:`amara.osei@example.com`},{uuid:`9e41c8a7-52bd-4f60-b3c1-84ff20d7e5a2`,name:`Jonas Lindqvist`,email:`jonas.lindqvist@example.com`},{uuid:`c05a3d92-71e4-4b8f-9a20-1de6f8c34b77`,name:`Priya Raman`,email:`priya.raman@example.com`}],r=[{uuid:`4f8b2c60-3ad9-41e7-95c8-7b02e1a6d340`,name:`Marta Kowalski`,email:`marta.kowalski@example.com`},{uuid:`7a1e9db3-64c2-4f05-8e73-2c9f5b81aa46`,name:`Tomás Ferreira`,email:`tomas.ferreira@example.com`}],i=!0,a=!0,o=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`);function s(e){return e.map(e=>`<div class="picked-item"><span class="picked-name">${o(e.name)} &middot; ${o(e.email)}</span><code class="picked-uuid">${o(e.uuid)}</code></div>`).join(``)}function c(e,t){return`[\n${e.map(e=>`${t}  { uuid: '${e.uuid}', name: '${e.name}', email: '${e.email}' },`).join(`
`)}\n${t}]`}function l(e){let t=[];return i&&t.push(`${e}approverUsers: ${c(n,e)},`),a&&t.push(`${e}requesterUsers: ${c(r,e)},`),t.length===0&&t.push(`${e}// Neither list passed — the Approval filter shows Status and Due date only`),t.join(`
`)}function u(){let e=document.getElementById(`code-container`);e&&(e.innerHTML=``,t(`#code-container`,[{label:`JavaScript`,lang:`javascript`,code:`
picker.config = {
  auth: { /* ... */ },
${l(`  `)}
};`},{label:`React`,lang:`tsx`,code:`
<AssetPicker
  config={{
    auth: { /* ... */ },
${l(`    `)}
  }}
/>`}]))}var d={render(){return`
      <div class="page-header">
        <h1>Approval users</h1>
        <p><strong>Filters &rarr; Approval</strong> opens four independent filters — <strong>Approval status</strong>, <strong>Approver</strong>, <strong>Requester</strong> and <strong>Due date</strong> — each with its own chip and popover. Approver and Requester are listed only once you pass <code>approverUsers</code> / <code>requesterUsers</code>: the picker authenticates with a security template against the Files API, which exposes no company directory, so the list of people has to come from the host application.</p>
      </div>

      <section class="page-section">
        <div class="config-controls">
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-approvers">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-approvers" checked />
                <span class="toggle-track"></span>
              </span>
              Pass <code>approverUsers</code>
            </label>
          </div>
          <div class="form-group toggle-group">
            <label class="toggle-label" for="toggle-requesters">
              <span class="toggle-switch">
                <input type="checkbox" id="toggle-requesters" checked />
                <span class="toggle-track"></span>
              </span>
              Pass <code>requesterUsers</code>
            </label>
          </div>
        </div>

        <p class="form-hint">Open the picker, then <strong>Filters &rarr; Approval</strong>. Toggle either option off and reopen to watch that filter drop out of the list.</p>

        <div class="au-lists">
          <div class="control-group">
            <span class="control-group-title">Approvers passed</span>
            <div id="approver-list">${s(n)}</div>
          </div>
          <div class="control-group">
            <span class="control-group-title">Requesters passed</span>
            <div id="requester-list">${s(r)}</div>
          </div>
        </div>

        <p class="form-hint">Each <code>uuid</code> is what reaches the API — picking a person queries <code>task_approver:"&lt;uuid&gt;"</code> (or <code>task_requester</code>), so it must be the uuid the DAM stored on the asset. <code>name</code> is what the user sees; <code>email</code> and <code>avatarUrl</code> are optional. The uuids above are placeholders and match no asset on the demo project, so selecting one returns nothing — that is expected here, not a bug.</p>

        <button class="btn-primary open-btn-spacing" id="open-btn">Open picker</button>
      </section>

      <section class="page-section">
        <h2>Code</h2>
        <div id="code-container"></div>
      </section>
    `},init(t){i=!0,a=!0,u();let o=document.getElementById(`toggle-approvers`),s=document.getElementById(`toggle-requesters`);o.addEventListener(`change`,()=>{i=o.checked,u()}),s.addEventListener(`change`,()=>{a=s.checked,u()}),document.getElementById(`open-btn`).addEventListener(`click`,()=>{t.config=e({...i?{approverUsers:n}:{},...a?{requesterUsers:r}:{},onSelect:e=>alert(`Selected ${e.length} asset(s)`)}),t.open()})}};export{d as default};