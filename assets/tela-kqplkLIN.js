import{_ as e,c as t,d as n,m as r}from"./erro-Bc0C-0ww.js";import{n as i}from"./idioma-CVgIQtmc.js";import{t as a}from"./notificar-BeOZKYlx.js";import{S as o,b as s,y as c}from"./index-CCl639Mp.js";import{t as l}from"./carga-N4u32e31.js";import{t as u}from"./dados-CAIyjVFG.js";import{t as d}from"./dados-9wsuHbxQ.js";import{f}from"./regras-D9ek7SGP.js";import{a as p,c as m,d as h,i as g,l as _,m as v,n as y,p as b,r as x,s as S,t as C,u as w}from"./dados-Dv-2S1p7.js";var T=[],E=[],D=[],O=g,k=`designacao`,A=null,j=``;async function M(){[T,E,D]=await Promise.all([C(),d(),u()])}var N=new l(`Designações`,M);n(`designacoes`,()=>{N.esquecer(),A=null,O=g});function P(e){return i.tiposDeDesignacao[e]}function F(e){return w(e,P)}function I(e){return e===null?``:E.find(t=>t.id===e)?.nome??``}function L(e){return e===null?``:D.find(t=>t.id===e)?.nome??``}function R(e){A!==null&&(A={...A,...e})}function z(e){A={...e},j=``,t()}function B(){let e=O.congregacao!==null&&O.congregacao>0?O.congregacao:null,t=D.length===1?D[0]?.id??null:null;z(S(e??t))}function V(){A=null,j=``,t()}async function H(e){if(v(e)===`sem_descricao`)j=i.designacoes.semDescricao,t();else{try{await x(e)}catch(e){console.error(`Designações: a gravação falhou.`,e),a(i.designacoes.naoSalva,`danger`);return}A=null,a(i.designacoes.salva),await M(),t()}}async function U(e){if(await c({titulo:i.designacoes.excluirTitulo,texto:i.designacoes.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})){try{await y(e)}catch(e){console.error(`Designações: a exclusão falhou.`,e),a(i.designacoes.naoExcluida,`danger`);return}A=null,a(i.designacoes.excluida),await M(),t()}}function W(e){return e.target.value}function G(e){let t=Number(W(e));return Number.isInteger(t)&&t>0?t:null}function K(t){let n=t.ativo===0?i.pautas.inativo(t.nome):t.nome;return e`<kk-option value=${String(t.id??0)}>${n}</kk-option>`}function q(t,n,r,a,o,s){return e`
    <kk-select
      name=${t}
      label=${n}
      help-text=${r}
      .value=${String(o??0)}
      @kk-change=${e=>s(G(e))}
    >
      <kk-option value="0">${i.designacoes.ninguem}</kk-option>
      ${a.map(K)}
    </kk-select>
  `}function J(n){let a=f(E,[`servo_ministerial`,`anciao`],n.congregacao_id,n.pessoa_id),c=f(E,null,n.congregacao_id,n.ajudante_id).filter(e=>e.id!==n.pessoa_id),l=a.length===0;return e`
    <kk-dialog
      open
      class="designacao-form"
      label=${n.id===void 0?i.designacoes.nova:i.designacoes.editar}
      @kk-request-close=${o}
      @kk-initial-focus=${s}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&V()}}
    >
      <div class="formulario">
        <kk-select
          name="tipo"
          label=${i.designacoes.tipo}
          .value=${n.tipo}
          @kk-change=${e=>{let n=W(e);m(n)&&R({tipo:n}),t()}}
        >
          ${p.map(t=>e`<kk-option value=${t}>${P(t)}</kk-option>`)}
        </kk-select>

        <kk-input
          name="descricao"
          label=${n.tipo===`outra`?i.designacoes.descricaoOutra:i.designacoes.descricao}
          help-text=${n.tipo===`outra`?``:i.designacoes.descricaoAjuda}
          ?required=${n.tipo===`outra`}
          .value=${n.descricao}
          @kk-input=${e=>R({descricao:W(e)})}
        ></kk-input>

        ${D.length===0?r:e`
              <kk-select
                name="congregacao"
                label=${i.designacoes.congregacao}
                .value=${String(n.congregacao_id??0)}
                @kk-change=${e=>{R({congregacao_id:G(e)}),t()}}
              >
                <kk-option value="0">${i.designacoes.congregacaoNenhuma}</kk-option>
                ${D.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
              </kk-select>
            `}

        ${q(`pessoa`,i.designacoes.pessoa,l?i.designacoes.semEscolhiveis:i.designacoes.pessoaAjuda,a,n.pessoa_id,e=>{R({pessoa_id:e,...e!==null&&A?.ajudante_id===e?{ajudante_id:null}:{}}),t()})}
        ${q(`ajudante`,i.designacoes.ajudante,i.designacoes.ajudanteAjuda,c,n.ajudante_id,e=>R({ajudante_id:e}))}

        ${j===``?r:e`<p class="erro" role="alert">${j}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?r:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&U(A.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${i.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${V}>${i.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&H(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Y(t,n){let a=t.pessoa_id===null,o=[n??I(t.pessoa_id),t.ajudante_id===null||n!==void 0?``:i.designacoes.comAjudante(I(t.ajudante_id)),D.length>1?L(t.congregacao_id):``].filter(e=>e!==``);return e`
    <button
      class="linha"
      data-designacao=${t.id??0}
      ?data-sem-ninguem=${a}
      @click=${()=>z(t)}
    >
      <kk-icon class="linha__icone" name="clipboard-list"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${F(t)}</span>
        <span class="linha__sub">${o.join(` · `)}</span>
      </span>
      ${a?e`<span class="linha__selo">${i.designacoes.semNinguem}</span>`:r}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function X(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        label=${i.designacoes.buscar}
        clearable
        .value=${O.termo}
        @kk-input=${e=>{O={...O,termo:W(e)},t()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        name="vista"
        label=${i.designacoes.vista}
        .value=${k}
        @kk-change=${e=>{k=W(e)===`pessoa`?`pessoa`:`designacao`,t()}}
      >
        <kk-option value="designacao">${i.designacoes.porDesignacao}</kk-option>
        <kk-option value="pessoa">${i.designacoes.porPessoa}</kk-option>
      </kk-select>

      ${D.length<2?r:e`
            <kk-select
              name="filtro-congregacao"
              label=${i.designacoes.filtroCongregacao}
              .value=${O.congregacao===null?`todas`:String(O.congregacao)}
              @kk-change=${e=>{let n=W(e);O={...O,congregacao:n===`todas`?null:Number(n)},t()}}
            >
              <kk-option value="todas">${i.designacoes.filtroTodas}</kk-option>
              <kk-option value="0">${i.designacoes.filtroSemCongregacao}</kk-option>
              ${D.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
            </kk-select>
          `}
    </div>
  `}function Z(t){let n=b(t,E),a=t.filter(e=>e.pessoa_id===null);return e`
    ${n.map(t=>e`
        <h3 class="secao" data-pessoa=${t.pessoa.id??0}>${t.pessoa.nome}</h3>
        <div class="lista">
          ${t.cuida.map(e=>Y(e,i.designacoes.cuida))}
          ${t.ajuda.map(e=>Y(e,i.designacoes.ajuda))}
        </div>
      `)}
    ${a.length===0?r:e`
          <h3 class="secao">${i.designacoes.semNinguem}</h3>
          <div class="lista">${a.map(e=>Y(e))}</div>
        `}
  `}function Q(){if(T.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <strong>${i.designacoes.vazio}</strong>
        <p>${i.designacoes.vazioTexto}</p>
        <kk-button variant="primary" @click=${B}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${i.designacoes.nova}
        </kk-button>
      </div>
    `;let t=h(_(T,O,F,I),P),n=t.filter(e=>e.pessoa_id===null).length,r=[i.designacoes.contagem(t.length),n===0?``:i.designacoes.semNinguemContagem(n)].filter(e=>e!==``);return e`
    ${X()}
    <p class="contagem" aria-live="polite">${r.join(` · `)}</p>
    ${t.length===0?e`<p class="vazio">${i.designacoes.nenhumaAchada}</p>`:k===`pessoa`?Z(t):e`<div class="lista">${t.map(e=>Y(e))}</div>`}
  `}var $={aoVoltar(){return A!==null&&(V(),!0)},acoes(){if(N.terminou)return e`
      <kk-icon-button name="plus" label=${i.designacoes.nova} @click=${B}></kk-icon-button>
    `},conteudo(){let t=N.espera();return t===null?e`${Q()} ${A===null?r:J(A)}`:t}};export{$ as telaDesignacoes};