import{i as e,t}from"./lit-CL39YOSA.js";import{i as n,n as r}from"./idioma-Dwpp7Zfu.js";import{a as i}from"./ordem-DhzYZk-u.js";import{t as a}from"./defineProperty-BbfpZ9Tg.js";import{f as o}from"./erro-FHfTMgeP.js";import{a as s,u as c}from"./chunk.BHLCFORN-DiLXyQRu.js";import{B as l,V as u,t as d}from"./index-sr-LlQKi.js";import{t as f}from"./carga-D_DL_FuH.js";function p(e,t={}){return d(e===void 0?t:{"--kk-guia-cor":e,...t})}function m(e){let{progresso:t}=e,n=t===void 0||t.total===0?0:Math.min(t.lidos/t.total,1);return s`
    <header class="kk-guia-capa" style=${p(e.cor)}>
      <span class="kk-guia-capa__selo"><kk-icon name=${e.icone}></kk-icon></span>
      <div>
        <h2 class="kk-guia-capa__titulo">${e.titulo}</h2>
        <p class="kk-guia-capa__texto">${e.texto}</p>
      </div>
      ${t===void 0?c:s`
            <div class="kk-guia-capa__progresso">
              <span>${t.rotulo}</span>
              <span
                class="kk-guia-barra"
                role="progressbar"
                aria-label=${t.rotulo}
                aria-valuemin="0"
                aria-valuemax=${t.total}
                aria-valuenow=${t.lidos}
              >
                <span
                  class="kk-guia-barra__cheio"
                  style=${d({"--kk-guia-progresso":`${Math.round(n*100)}%`})}
                ></span>
              </span>
            </div>
          `}
    </header>
  `}function h(e){return s`<h2 class="kk-guia-secao">${e}</h2>`}function g(e){let t=e.lido!==void 0;return s`
    <button
      class="kk-guia-cartao"
      style=${p(e.cor)}
      data-topico=${e.id}
      ?data-lido=${t}
      @click=${()=>e.aoTocar()}
    >
      <span class="kk-guia-cartao__icone"><kk-icon name=${e.icone}></kk-icon></span>
      <span class="kk-guia-cartao__texto">
        ${e.sobre===void 0?c:s`<span class="kk-guia-cartao__sobre">${e.sobre}</span>`}
        <span class="kk-guia-cartao__titulo">${e.titulo}</span>
        ${e.resumo===void 0||e.resumo===``?c:s`<span class="kk-guia-cartao__resumo">${e.resumo}</span>`}
      </span>
      ${t?s`<kk-icon class="kk-guia-cartao__marca" name="circle-check" label=${e.lido??``}></kk-icon>`:s`<kk-icon class="kk-guia-cartao__marca" name="chevron-right"></kk-icon>`}
    </button>
  `}function _(e){return s`
    <header class="kk-guia-cabeca">
      <span class="kk-guia-cabeca__icone"><kk-icon name=${e.icone}></kk-icon></span>
      <div>
        <p class="kk-guia-cabeca__resumo">${e.resumo}</p>
        ${e.meta===void 0||e.meta.length===0?c:s`<div class="kk-guia-cabeca__meta">${e.meta.map(e=>s`<span>${e}</span>`)}</div>`}
      </div>
    </header>
  `}function v(e){return s`
    <aside class="kk-guia-dica">
      <kk-icon name="bulb"></kk-icon>
      <p>${e}</p>
    </aside>
  `}function y(e){return p(e)}function b(e){let t=e.trim();if(t===``)return 1;let n=t.split(/\s+/).length,r=n<t.length/20?t.length/500:n/200;return Math.max(1,Math.ceil(r))}var x=class{constructor(e){a(this,`chave`,void 0),this.chave=e}ler(){try{let e=JSON.parse(localStorage.getItem(this.chave)??`[]`);return new Set(Array.isArray(e)?e.filter(e=>typeof e==`string`):[])}catch{return new Set}}tem(e){return this.ler().has(e)}quantos(e){let t=this.ler();return e.filter(e=>t.has(e)).length}marcar(e){let t=this.ler();if(t.has(e))return!1;t.add(e);try{localStorage.setItem(this.chave,JSON.stringify([...t]))}catch{}return!0}},S={"pt-BR":()=>i(()=>import(`./pt-BR-vMHBaw-6.js`),[],import.meta.url),en:()=>i(()=>import(`./en-BcULkaij.js`),[],import.meta.url),"es-ES":()=>i(()=>import(`./es-ES-CdDLxduH.js`),[],import.meta.url),pl:()=>i(()=>import(`./pl-fX3Jb2gI.js`),[],import.meta.url),uk:()=>i(()=>import(`./uk-dShAPiDH.js`),[],import.meta.url),ja:()=>i(()=>import(`./ja-BkjTo6JN.js`),[],import.meta.url),"zh-CN":()=>i(()=>import(`./zh-CN-C4lYdKwg.js`),[],import.meta.url),ko:()=>i(()=>import(`./ko-DQ0KihlZ.js`),[],import.meta.url),ar:()=>i(()=>import(`./ar-Vq3dTeAB.js`),[],import.meta.url),ht:()=>i(()=>import(`./ht-B5Mg8ZWD.js`),[],import.meta.url)};Object.keys(S);function C(e){let t=S[e]??S[`pt-BR`];if(t===void 0)throw Error(`tutorial: falta o português`);return t()}var w={GERAIS:[],DOS_MODULOS:[]},T=new x(`org_tutorial_lidos`),E=u(`tutorial`),D=``,O=new f(`Tutorial`,async()=>{let e=n();w=await C(e),D=e});function k(){return O.terminou&&D!==n()&&O.esquecer(),O.espera()}function A(){let e=l().map(e=>e.id),t=t=>{let n=e.indexOf(t.modulo??``);return n===-1?e.length:n};return[...w.DOS_MODULOS].sort((e,n)=>t(e)-t(n))}function j(){return[...w.GERAIS,...A()]}function M(e){return j().find(t=>t.id===e)}function N(t){return t.split(`**`).map((t,n)=>n%2==1?e`<strong>${t}</strong>`:t)}function P(t){return typeof t==`string`?e`<p>${N(t)}</p>`:`titulo`in t?e`<h3>${t.titulo}</h3>`:`passos`in t?e`<ol>${t.passos.map(t=>e`<li>${N(t)}</li>`)}</ol>`:`lista`in t?e`<ul>${t.lista.map(t=>e`<li>${N(t)}</li>`)}</ul>`:v(N(t.dica))}function F(e){return e.blocos.map(e=>typeof e==`string`?e:`titulo`in e?e.titulo:`passos`in e?e.passos.join(` `):`lista`in e?e.lista.join(` `):e.dica).join(` `)}function I(e){return(e.modulo===void 0?void 0:u(e.modulo))?.icone??e.icone??`help-circle`}function L(e,t){let n=e.modulo===void 0?void 0:u(e.modulo);return g({id:e.id,icone:I(e),titulo:e.titulo,resumo:e.resumo,...n===void 0?{}:{cor:n.cor},...t===void 0?{}:{sobre:t},...T.tem(e.id)?{lido:r.guia.lido}:{},aoTocar:()=>o(`tutorial/${e.id}`)})}function R(){let t=j(),n=T.quantos(t.map(e=>e.id));return e`
    ${m({titulo:r.modulos.tutorial,texto:r.tutorial.intro,icone:E?.icone??`school`,...E===void 0?{}:{cor:E.cor},progresso:{lidos:n,total:t.length,rotulo:n===t.length?r.guia.tudoLido:r.guia.lidos(n,t.length)}})}

    ${h(r.tutorial.paraComecar)}
    <div class="kk-guia-grade">${w.GERAIS.map(e=>L(e))}</div>

    ${h(r.tutorial.modulos)}
    <div class="kk-guia-grade">${A().map(e=>L(e))}</div>
  `}function z(n){let i=j(),a=i[i.indexOf(n)+1],s=n.modulo===void 0?void 0:u(n.modulo);return T.marcar(n.id),e`
    <article class="kk-guia-topico" style=${y(s?.cor??E?.cor)}>
      ${_({icone:I(n),resumo:n.resumo,meta:[r.guia.leitura(b(F(n)))]})}
      <div class="kk-guia-corpo">${n.blocos.map(P)}</div>

      <div class="kk-guia-acoes">
        ${s===void 0?t:e`
              <kk-button variant="primary" name="abrir" @click=${()=>o(s.id)}>
                <kk-icon slot="prefix" name=${s.icone}></kk-icon>${r.guia.abrir(s.rotulo)}
              </kk-button>
            `}
        <kk-button name="indice" @click=${()=>o(`tutorial`)}>
          <kk-icon slot="prefix" name="list"></kk-icon>${r.guia.todos}
        </kk-button>
      </div>

      ${a===void 0?T.quantos(i.map(e=>e.id))===i.length?e`<p class="kk-guia-fim">${r.guia.tudoLido}</p>`:t:e`<div class="kk-guia-proximo">${L(a,r.guia.proximo)}</div>`}
    </article>
  `}var B={voltarPara(e){return e.args.length===0?`home`:`tutorial`},titulo(e){let[t]=e.args;return t===void 0?void 0:M(t)?.titulo},conteudo(e){let t=k();if(t!==null)return t;let[n]=e.args;if(n===void 0)return R();let r=M(n);return r===void 0?R():z(r)}};export{B as telaTutorial};