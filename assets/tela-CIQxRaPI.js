import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./idioma-Dwpp7Zfu.js";import{c as r,d as i}from"./erro-FHfTMgeP.js";import{t as a}from"./notificar-BeOZKYlx.js";import{O as o,j as s,k as c}from"./index-BTSbEGH1.js";import{t as l}from"./carga-D_DL_FuH.js";import{t as u}from"./dados-DpvHxc9k.js";import{t as d}from"./dados-B8yFq1N-.js";import{f}from"./regras-D9ek7SGP.js";import{a as p,c as m,d as h,i as g,l as _,m as v,n as y,p as b,r as x,s as S,t as C,u as w}from"./dados-B9XICcH8.js";var T=[],E=[],D=[],O=g,k=`designacao`,A=null,j=``;async function M(){[T,E,D]=await Promise.all([C(),d(),u()])}var N=new l(`Designações`,M);i(`designacoes`,()=>{N.esquecer(),A=null,O=g});function P(e){return n.tiposDeDesignacao[e]}function F(e){return w(e,P)}function I(e){return e===null?``:E.find(t=>t.id===e)?.nome??``}function L(e){return e===null?``:D.find(t=>t.id===e)?.nome??``}function R(e){A!==null&&(A={...A,...e})}function z(e){A={...e},j=``,r()}function B(){let e=O.congregacao!==null&&O.congregacao>0?O.congregacao:null,t=D.length===1?D[0]?.id??null:null;z(S(e??t))}function V(){A=null,j=``,r()}async function H(e){if(v(e)===`sem_descricao`)j=n.designacoes.semDescricao,r();else{try{await x(e)}catch(e){console.error(`Designações: a gravação falhou.`,e),a(n.designacoes.naoSalva,`danger`);return}A=null,a(n.designacoes.salva),await M(),r()}}async function U(e){if(await o({titulo:n.designacoes.excluirTitulo,texto:n.designacoes.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await y(e)}catch(e){console.error(`Designações: a exclusão falhou.`,e),a(n.designacoes.naoExcluida,`danger`);return}A=null,a(n.designacoes.excluida),await M(),r()}}function W(e){return e.target.value}function G(e){let t=Number(W(e));return Number.isInteger(t)&&t>0?t:null}function K(t){let r=t.ativo===0?n.pautas.inativo(t.nome):t.nome;return e`<kk-option value=${String(t.id??0)}>${r}</kk-option>`}function q(t,r,i,a,o,s){return e`
    <kk-select
      name=${t}
      label=${r}
      help-text=${i}
      .value=${String(o??0)}
      @kk-change=${e=>s(G(e))}
    >
      <kk-option value="0">${n.designacoes.ninguem}</kk-option>
      ${a.map(K)}
    </kk-select>
  `}function J(i){let a=f(E,[`servo_ministerial`,`anciao`],i.congregacao_id,i.pessoa_id),o=f(E,null,i.congregacao_id,i.ajudante_id).filter(e=>e.id!==i.pessoa_id),l=a.length===0;return e`
    <kk-dialog
      open
      class="designacao-form"
      label=${i.id===void 0?n.designacoes.nova:n.designacoes.editar}
      @kk-request-close=${s}
      @kk-initial-focus=${c}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&V()}}
    >
      <div class="formulario">
        <kk-select
          name="tipo"
          label=${n.designacoes.tipo}
          .value=${i.tipo}
          @kk-change=${e=>{let t=W(e);m(t)&&R({tipo:t}),r()}}
        >
          ${p.map(t=>e`<kk-option value=${t}>${P(t)}</kk-option>`)}
        </kk-select>

        <kk-input
          name="descricao"
          label=${i.tipo===`outra`?n.designacoes.descricaoOutra:n.designacoes.descricao}
          help-text=${i.tipo===`outra`?``:n.designacoes.descricaoAjuda}
          ?required=${i.tipo===`outra`}
          .value=${i.descricao}
          @kk-input=${e=>R({descricao:W(e)})}
        ></kk-input>

        ${D.length===0?t:e`
              <kk-select
                name="congregacao"
                label=${n.designacoes.congregacao}
                .value=${String(i.congregacao_id??0)}
                @kk-change=${e=>{R({congregacao_id:G(e)}),r()}}
              >
                <kk-option value="0">${n.designacoes.congregacaoNenhuma}</kk-option>
                ${D.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
              </kk-select>
            `}

        ${q(`pessoa`,n.designacoes.pessoa,l?n.designacoes.semEscolhiveis:n.designacoes.pessoaAjuda,a,i.pessoa_id,e=>{R({pessoa_id:e,...e!==null&&A?.ajudante_id===e?{ajudante_id:null}:{}}),r()})}
        ${q(`ajudante`,n.designacoes.ajudante,n.designacoes.ajudanteAjuda,o,i.ajudante_id,e=>R({ajudante_id:e}))}

        ${j===``?t:e`<p class="erro" role="alert">${j}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${i.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&U(A.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${V}>${n.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&H(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Y(r,i){let a=r.pessoa_id===null,o=[i??I(r.pessoa_id),r.ajudante_id===null||i!==void 0?``:n.designacoes.comAjudante(I(r.ajudante_id)),D.length>1?L(r.congregacao_id):``].filter(e=>e!==``);return e`
    <button
      class="linha"
      data-designacao=${r.id??0}
      ?data-sem-ninguem=${a}
      @click=${()=>z(r)}
    >
      <kk-icon class="linha__icone" name="clipboard-list"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${F(r)}</span>
        <span class="linha__sub">${o.join(` · `)}</span>
      </span>
      ${a?e`<span class="linha__selo">${n.designacoes.semNinguem}</span>`:t}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function X(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        label=${n.designacoes.buscar}
        clearable
        .value=${O.termo}
        @kk-input=${e=>{O={...O,termo:W(e)},r()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        name="vista"
        label=${n.designacoes.vista}
        .value=${k}
        @kk-change=${e=>{k=W(e)===`pessoa`?`pessoa`:`designacao`,r()}}
      >
        <kk-option value="designacao">${n.designacoes.porDesignacao}</kk-option>
        <kk-option value="pessoa">${n.designacoes.porPessoa}</kk-option>
      </kk-select>

      ${D.length<2?t:e`
            <kk-select
              name="filtro-congregacao"
              label=${n.designacoes.filtroCongregacao}
              .value=${O.congregacao===null?`todas`:String(O.congregacao)}
              @kk-change=${e=>{let t=W(e);O={...O,congregacao:t===`todas`?null:Number(t)},r()}}
            >
              <kk-option value="todas">${n.designacoes.filtroTodas}</kk-option>
              <kk-option value="0">${n.designacoes.filtroSemCongregacao}</kk-option>
              ${D.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
            </kk-select>
          `}
    </div>
  `}function Z(r){let i=b(r,E),a=r.filter(e=>e.pessoa_id===null);return e`
    ${i.map(t=>e`
        <h3 class="secao" data-pessoa=${t.pessoa.id??0}>${t.pessoa.nome}</h3>
        <div class="lista">
          ${t.cuida.map(e=>Y(e,n.designacoes.cuida))}
          ${t.ajuda.map(e=>Y(e,n.designacoes.ajuda))}
        </div>
      `)}
    ${a.length===0?t:e`
          <h3 class="secao">${n.designacoes.semNinguem}</h3>
          <div class="lista">${a.map(e=>Y(e))}</div>
        `}
  `}function Q(){if(T.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="clipboard-list"></kk-icon>
        <strong>${n.designacoes.vazio}</strong>
        <p>${n.designacoes.vazioTexto}</p>
        <kk-button variant="primary" @click=${B}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${n.designacoes.nova}
        </kk-button>
      </div>
    `;let t=h(_(T,O,F,I),P),r=t.filter(e=>e.pessoa_id===null).length,i=[n.designacoes.contagem(t.length),r===0?``:n.designacoes.semNinguemContagem(r)].filter(e=>e!==``);return e`
    ${X()}
    <p class="contagem" aria-live="polite">${i.join(` · `)}</p>
    ${t.length===0?e`<p class="vazio">${n.designacoes.nenhumaAchada}</p>`:k===`pessoa`?Z(t):e`<div class="lista">${t.map(e=>Y(e))}</div>`}
  `}var $={aoVoltar(){return A!==null&&(V(),!0)},acoes(){if(N.terminou)return e`
      <kk-icon-button name="plus" label=${n.designacoes.nova} @click=${B}></kk-icon-button>
    `},conteudo(){let n=N.espera();return n===null?e`${Q()} ${A===null?t:J(A)}`:n}};export{$ as telaDesignacoes};