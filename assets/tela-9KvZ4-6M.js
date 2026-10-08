import{_ as e,c as t,d as n,f as r,m as i}from"./erro-Bc0C-0ww.js";import{m as a,n as o,u as s}from"./idioma-CVgIQtmc.js";import{c,u as l}from"./data-DpsiKWt9.js";import{t as u}from"./notificar-BeOZKYlx.js";import{C as d,d as f,f as p}from"./index-CCl639Mp.js";import{t as m}from"./carga-N4u32e31.js";import{t as h}from"./compartilhar-CutlseMs.js";import{t as g}from"./papel-CtsfYfoX.js";import{r as _}from"./relatorio-Bj5TZrV2.js";import{carregarQuadro as v,congregacaoInicial as y,rotulosDoQuadro as b}from"./dados-DIf8NoYf.js";import{SECOES_DO_QUADRO as x,blocosDoQuadro as S,limitesDoMes as C}from"./regras-BlWTnWE9.js";var w=null,T=null,E=c(),D=new Set(x);async function O(){w=await v(),(T===null||!w.congregacoes.some(e=>e.id===T))&&(T=y(w)?.id??null)}var k=new m(`Quadro de anúncios`,O);n(`quadro`,()=>{k.esquecer()});function A(){return w?.congregacoes.find(e=>e.id===T)}function j(){let[e=0,t=1]=E.split(`-`).map(Number);return a(e,t)}function M(){let e=A();if(w===null||e===void 0)return[];let{inicio:t,fim:n}=C(E);return S(t,n,e,w.fontes,D,b(w))}async function N(){let e=o.quadro.titulo(j()),t=A()?.nome??``,n=M(),r=o.quadro.rodape(s(Date.now()),w?.quemMontou??``),i=JSON.stringify([e,t,n,r]),a=p(i)??await f(i);if(a===void 0)return;let c=g(e,t,n,r,a);try{let t=await h(c,o.quadro.arquivo(E),`application/pdf`,e);t===`compartilhado`&&u(o.quadro.compartilhado),t===`baixado`&&u(o.quadro.baixado)}catch(e){console.error(`Quadro: a entrega do PDF falhou.`,e),u(o.quadro.naoCompartilhado,`danger`)}}function P(){return w===null||w.congregacoes.length<2?i:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${o.quadro.congregacao}
        .value=${String(T??0)}
        @kk-change=${e=>{let n=Number(e.target.value);T=Number.isInteger(n)&&n>0?n:T,t()}}
      >
        ${w.congregacoes.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function F(){return e`
    <fieldset class="caixas" data-grupo="secoes-do-quadro">
      <legend class="caixas__titulo">${o.quadro.oQueLeva}</legend>
      ${x.map(n=>e`
          <kk-checkbox
            value=${n}
            ?checked=${D.has(n)}
            @kk-change=${e=>{e.target.checked?D.add(n):D.delete(n),t()}}
          >
            ${o.quadro.secoes[n]}
          </kk-checkbox>
        `)}
    </fieldset>
  `}var I={conteudo(){let n=k.espera();if(n!==null)return n;if(w===null||w.congregacoes.length===0)return e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${o.quadro.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>r(`congregacoes`)}>
            ${o.quadro.irParaCongregacoes}
          </kk-button>
        </div>
      `;let a=M(),s=[o.quadro.titulo(j()),A()?.nome??``].filter(e=>e!==``).join(` — `);return e`
      ${P()}
      <div class="quadro__mes">
        <kk-icon-button
          name="chevron-left"
          label=${o.quadro.mesAnterior}
          @click=${()=>{E=l(E,-1),t()}}
        ></kk-icon-button>
        <h2 class="quadro__nome-do-mes" aria-live="polite">${j()}</h2>
        <kk-icon-button
          name="chevron-right"
          label=${o.quadro.mesSeguinte}
          @click=${()=>{E=l(E,1),t()}}
        ></kk-icon-button>
      </div>

      ${F()}

      <div class="quadro__acoes">
        <kk-button variant="primary" name="pdf" ?disabled=${a.length===0} @click=${()=>void N()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${o.quadro.pdf}
        </kk-button>
        <kk-button
          name="whatsapp"
          ?disabled=${a.length===0}
          href=${a.length===0?i:`https://wa.me/?text=${encodeURIComponent(_(s,a))}`}
          target="_blank"
        >
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${o.quadro.whatsapp}
        </kk-button>
      </div>
      <p class="caixas__ajuda">${o.quadro.ajuda}</p>

      ${a.length===0?e`<p class="vazio">${o.quadro.nadaNoMes}</p>`:d(a)}
    `}};export{I as telaQuadro};