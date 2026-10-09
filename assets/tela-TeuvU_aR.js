import{i as e,t}from"./lit-CL39YOSA.js";import{c as n,f as r,n as i}from"./idioma-Dwpp7Zfu.js";import{c as a,u as o}from"./data-DpsiKWt9.js";import{c as s,d as c,f as l}from"./erro-FHfTMgeP.js";import{t as u}from"./notificar-BeOZKYlx.js";import{M as d,b as f,x as p}from"./index-B6HOd0Ya.js";import{t as m}from"./carga-D_DL_FuH.js";import{t as h}from"./compartilhar-CutlseMs.js";import{t as g}from"./papel-D3zAazLP.js";import{r as _}from"./relatorio-BQlu9PJf.js";import{carregarQuadro as v,congregacaoInicial as y,rotulosDoQuadro as b}from"./dados-5BFxdnlt.js";import{SECOES_DO_QUADRO as x,blocosDoQuadro as S,limitesDoMes as C}from"./regras-CKHt-3cf.js";var w=null,T=null,E=a(),D=new Set(x);async function O(){w=await v(),(T===null||!w.congregacoes.some(e=>e.id===T))&&(T=y(w)?.id??null)}var k=new m(`Quadro de anúncios`,O);c(`quadro`,()=>{k.esquecer()});function A(){return w?.congregacoes.find(e=>e.id===T)}function j(){let[e=0,t=1]=E.split(`-`).map(Number);return r(e,t)}function M(){let e=A();if(w===null||e===void 0)return[];let{inicio:t,fim:n}=C(E);return S(t,n,e,w.fontes,D,b(w))}async function N(){let e=i.quadro.titulo(j()),t=A()?.nome??``,r=M(),a=i.quadro.rodape(n(Date.now()),w?.quemMontou??``),o=JSON.stringify([e,t,r,a]),s=p(o)??await f(o);if(s===void 0)return;let c=g(e,t,r,a,s);try{let t=await h(c,i.quadro.arquivo(E),`application/pdf`,e);t===`compartilhado`&&u(i.quadro.compartilhado),t===`baixado`&&u(i.quadro.baixado)}catch(e){console.error(`Quadro: a entrega do PDF falhou.`,e),u(i.quadro.naoCompartilhado,`danger`)}}function P(){return w===null||w.congregacoes.length<2?t:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${i.quadro.congregacao}
        .value=${String(T??0)}
        @kk-change=${e=>{let t=Number(e.target.value);T=Number.isInteger(t)&&t>0?t:T,s()}}
      >
        ${w.congregacoes.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function F(){return e`
    <fieldset class="caixas" data-grupo="secoes-do-quadro">
      <legend class="caixas__titulo">${i.quadro.oQueLeva}</legend>
      ${x.map(t=>e`
          <kk-checkbox
            value=${t}
            ?checked=${D.has(t)}
            @kk-change=${e=>{e.target.checked?D.add(t):D.delete(t),s()}}
          >
            ${i.quadro.secoes[t]}
          </kk-checkbox>
        `)}
    </fieldset>
  `}var I={conteudo(){let n=k.espera();if(n!==null)return n;if(w===null||w.congregacoes.length===0)return e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${i.quadro.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>l(`congregacoes`)}>
            ${i.quadro.irParaCongregacoes}
          </kk-button>
        </div>
      `;let r=M(),a=[i.quadro.titulo(j()),A()?.nome??``].filter(e=>e!==``).join(` — `);return e`
      ${P()}
      <div class="quadro__mes">
        <kk-icon-button
          name="chevron-left"
          label=${i.quadro.mesAnterior}
          @click=${()=>{E=o(E,-1),s()}}
        ></kk-icon-button>
        <h2 class="quadro__nome-do-mes" aria-live="polite">${j()}</h2>
        <kk-icon-button
          name="chevron-right"
          label=${i.quadro.mesSeguinte}
          @click=${()=>{E=o(E,1),s()}}
        ></kk-icon-button>
      </div>

      ${F()}

      <div class="quadro__acoes">
        <kk-button variant="primary" name="pdf" ?disabled=${r.length===0} @click=${()=>void N()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${i.quadro.pdf}
        </kk-button>
        <kk-button
          name="whatsapp"
          ?disabled=${r.length===0}
          href=${r.length===0?t:`https://wa.me/?text=${encodeURIComponent(_(a,r))}`}
          target="_blank"
        >
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${i.quadro.whatsapp}
        </kk-button>
      </div>
      <p class="caixas__ajuda">${i.quadro.ajuda}</p>

      ${r.length===0?e`<p class="vazio">${i.quadro.nadaNoMes}</p>`:d(r)}
    `}};export{I as telaQuadro};