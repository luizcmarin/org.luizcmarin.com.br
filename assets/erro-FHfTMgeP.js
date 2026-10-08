import{i as e}from"./lit-CL39YOSA.js";import{n as t}from"./idioma-Dwpp7Zfu.js";function n(){let[e=``,t=``]=location.hash.replace(/^#\/?/,``).split(`?`),n=e.split(`/`).filter(e=>e!==``);return{modulo:n[0]??`home`,args:n.slice(1),query:new URLSearchParams(t)}}function r(e){location.hash=e.startsWith(`#`)?e:`#/${e.replace(/^\//,``)}`}function i(e){addEventListener(`hashchange`,()=>e(n())),e(n())}var a=new Set;function o(e,t){a.has(e)||(a.add(e),addEventListener(`hashchange`,()=>{n().modulo!==e&&t()}))}var s=()=>{};function c(e){s=e}function l(){s()}function u(n){return e`
    <div class="aviso">
      <kk-icon
        class="aviso__icone"
        style="color: color-mix(in oklab, ${n.cor} 70%, var(--kk-color-neutral-1000))"
        name=${n.icone}
      ></kk-icon>
      <h2>${t.emBreve.titulo}</h2>
      <p>${t.emBreve.texto(n.rotulo)}</p>
      <kk-button variant="primary" @click=${()=>r(`home`)}>
        ${t.emBreve.voltar}
      </kk-button>
    </div>
  `}function d(){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="map-question"></kk-icon>
      <h2>${t.erro.naoEncontrado}</h2>
      <p>${t.erro.naoEncontradoTexto}</p>
      <kk-button variant="primary" @click=${()=>r(`home`)}>
        ${t.emBreve.voltar}
      </kk-button>
    </div>
  `}function f(){return e`
    <div class="carregando">
      <kk-spinner></kk-spinner>
      <p>${t.app.carregando}</p>
    </div>
  `}function p(n){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="cloud-off"></kk-icon>
      <h2>${t.erro.telaNaoVeio}</h2>
      <p>${t.erro.telaNaoVeioTexto}</p>
      <pre class="detalhe">${n}</pre>
      <kk-button variant="primary" @click=${()=>location.reload()}>
        ${t.erro.telaNaoVeioRecarregar}
      </kk-button>
    </div>
  `}function m(){return e`<div class="carregando"><kk-spinner></kk-spinner></div>`}function h(n,r){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${t.erro.cargaFalhou}</h2>
      <p>${t.erro.cargaFalhouTexto}</p>
      <pre class="detalhe">${n}</pre>
      <kk-button variant="primary" @click=${r}>
        <kk-icon slot="prefix" name="refresh"></kk-icon>${t.erro.cargaTentarDeNovo}
      </kk-button>
    </div>
  `}function g(e){return e instanceof Error?e.message:String(e)}export{g as a,l as c,o as d,r as f,m as i,c as l,f as n,d as o,n as p,u as r,p as s,h as t,i as u};