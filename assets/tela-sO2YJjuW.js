import{_ as e,f as t,m as n}from"./erro-D2swQJCY.js";import{i as r,n as i,s as a}from"./idioma-DWx-F1Qy.js";import{M as o,j as s}from"./index-DlNqF4dE.js";import{t as c}from"./carga-K0T2aEed.js";var l={"pt-BR":()=>a(()=>import(`./pt-BR-9aO4-Wci.js`),[],import.meta.url),en:()=>a(()=>import(`./en-BA2CzWrZ.js`),[],import.meta.url),"es-ES":()=>a(()=>import(`./es-ES-Br05VVTb.js`),[],import.meta.url),pl:()=>a(()=>import(`./pl-C2LNCBXl.js`),[],import.meta.url),uk:()=>a(()=>import(`./uk-DblfjZD0.js`),[],import.meta.url),ja:()=>a(()=>import(`./ja-HVkbYK81.js`),[],import.meta.url),"zh-CN":()=>a(()=>import(`./zh-CN-D8kosh0v.js`),[],import.meta.url),ko:()=>a(()=>import(`./ko-DjLmYO1J.js`),[],import.meta.url),ar:()=>a(()=>import(`./ar-CvoKztRN.js`),[],import.meta.url),ht:()=>a(()=>import(`./ht-8jDRWzNe.js`),[],import.meta.url)};Object.keys(l);function u(e){let t=l[e]??l[`pt-BR`];if(t===void 0)throw Error(`tutorial: falta o português`);return t()}var d={GERAIS:[],DOS_MODULOS:[]},f=``,p=new c(`Tutorial`,async()=>{let e=r();d=await u(e),f=e});function m(){return p.terminou&&f!==r()&&p.esquecer(),p.espera()}function h(){let e=s().map(e=>e.id),t=t=>{let n=e.indexOf(t.modulo??``);return n===-1?e.length:n};return[...d.DOS_MODULOS].sort((e,n)=>t(e)-t(n))}function g(){return[...d.GERAIS,...h()]}function _(e){return g().find(t=>t.id===e)}function v(t){return t.split(`**`).map((t,n)=>n%2==1?e`<strong>${t}</strong>`:t)}function y(t){return typeof t==`string`?e`<p>${v(t)}</p>`:`titulo`in t?e`<h3 class="tutorial__subtitulo">${t.titulo}</h3>`:`passos`in t?e`
      <ol class="tutorial__passos">
        ${t.passos.map(t=>e`<li>${v(t)}</li>`)}
      </ol>
    `:`lista`in t?e`
      <ul class="tutorial__lista">
        ${t.lista.map(t=>e`<li>${v(t)}</li>`)}
      </ul>
    `:e`
    <aside class="tutorial__dica">
      <kk-icon name="bulb"></kk-icon>
      <p>${v(t.dica)}</p>
    </aside>
  `}function b(n){let r=n.modulo===void 0?void 0:o(n.modulo);return e`
    <button
      class="linha"
      data-topico=${n.id}
      style=${r===void 0?``:`--cor:${r.cor}`}
      @click=${()=>t(`tutorial/${n.id}`)}
    >
      <kk-icon class="linha__icone" name=${r?.icone??n.icone??`help-circle`}></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${n.titulo}</span>
        <span class="linha__sub">${n.resumo}</span>
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function x(){return e`
    <p class="intro">${i.tutorial.intro}</p>

    <h2 class="secao">${i.tutorial.paraComecar}</h2>
    <div class="lista">${d.GERAIS.map(b)}</div>

    <h2 class="secao">${i.tutorial.modulos}</h2>
    <div class="lista">${h().map(b)}</div>
  `}function S(r){let a=g(),s=a[a.indexOf(r)+1],c=r.modulo===void 0?void 0:o(r.modulo);return e`
    <article class="tutorial">
      <p class="intro">${r.resumo}</p>
      ${r.blocos.map(y)}

      <div class="tutorial__acoes">
        ${c===void 0?n:e`
              <kk-button variant="primary" name="abrir" @click=${()=>t(c.id)}>
                <kk-icon slot="prefix" name=${c.icone}></kk-icon>${i.tutorial.abrir(c.rotulo)}
              </kk-button>
            `}
        <kk-button name="indice" @click=${()=>t(`tutorial`)}>
          <kk-icon slot="prefix" name="list"></kk-icon>${i.tutorial.todos}
        </kk-button>
      </div>

      ${s===void 0?n:e`
            <h2 class="secao">${i.tutorial.proximo}</h2>
            <div class="lista">${b(s)}</div>
          `}
    </article>
  `}var C={voltarPara(e){return e.args.length===0?`home`:`tutorial`},titulo(e){let[t]=e.args;return t===void 0?void 0:_(t)?.titulo},conteudo(e){let t=m();if(t!==null)return t;let[n]=e.args;if(n===void 0)return x();let r=_(n);return r===void 0?x():S(r)}};export{C as telaTutorial};