import{_ as e,c as t,d as n,m as r}from"./erro-D2swQJCY.js";import{n as i}from"./idioma-DWx-F1Qy.js";import{t as a}from"./notificar-BeOZKYlx.js";import{S as o,b as s,y as c}from"./index-DlNqF4dE.js";import{t as l}from"./carga-K0T2aEed.js";import{t as u}from"./dados-CLDIGIer.js";import{_ as d,h as f,l as p,m,o as h,s as g,t as _,u as v,v as y}from"./dados-CSqH5xEE.js";import{f as b}from"./regras-D9ek7SGP.js";import{i as x,n as S,r as C,t as w}from"./dados-DKz64GDZ.js";var T=[],E=[],D=[],O=[],k=null,A=null,j=new Set,M=``;async function N(){[T,E,D,O]=await Promise.all([w(),S(),_(),u()])}var P=new l(`Grupos`,N);n(`grupos`,()=>{P.esquecer(),A=null,k=null});function F(e){return e===null?``:D.find(t=>t.id===e)?.nome??``}function I(e){return e===null?``:O.find(t=>t.id===e)?.nome??``}function L(e){A!==null&&(A={...A,...e})}function R(e){A={...e},j=new Set(e.id===void 0?[]:m(e.id,E,D).map(e=>e.id??0)),M=``,t()}function z(){let e=k!==null&&k>0?k:null,t=O.length===1?O[0]?.id??null:null;R(v(e??t))}function B(){A=null,M=``,t()}async function V(e){if(d(e)===`sem_nome`)M=i.grupos.semNome,t();else{try{await x(e,j,E)}catch(e){console.error(`Grupos: a gravação falhou.`,e),a(i.grupos.naoSalvo,`danger`);return}A=null,a(i.grupos.salvo),await N(),t()}}async function H(e){if(await c({titulo:i.grupos.excluirTitulo,texto:i.grupos.excluirTexto(E.filter(t=>t.grupo_id===e).length),rotuloConfirmar:i.acoes.excluir,variante:`danger`})){try{await C(e)}catch(e){console.error(`Grupos: a exclusão falhou.`,e),a(i.grupos.naoExcluido,`danger`);return}A=null,a(i.grupos.excluido),await N(),t()}}function U(e){return e.target.value}function W(e){let t=Number(U(e));return Number.isInteger(t)&&t>0?t:null}function G(t){let n=t.ativo===0?i.pautas.inativo(t.nome):t.nome;return e`<kk-option value=${String(t.id??0)}>${n}</kk-option>`}function K(t,n,r,a,o,s){return e`
    <kk-select
      name=${t}
      label=${n}
      help-text=${r}
      .value=${String(o??0)}
      @kk-change=${e=>s(W(e))}
    >
      <kk-option value="0">${i.grupos.ninguem}</kk-option>
      ${a.map(G)}
    </kk-select>
  `}function q(t){let n=h(t,[]),r=p(E),a=D.filter(e=>e.id!==void 0&&(j.has(e.id)||n.has(e.id)||b([e],null,t.congregacao_id).length>0));return e`
    <fieldset class="caixas" data-grupo="membros">
      <legend class="caixas__titulo">${i.grupos.membros}</legend>
      ${a.map(a=>{let o=a.id??0,s=r.get(o),c=s!==void 0&&s!==t.id?T.find(e=>e.id===s)?.nome??``:``,l=[a.ativo===0?i.pautas.inativo(a.nome):a.nome,c===``?``:i.grupos.emOutro(c)].filter(e=>e!==``).join(` `);return e`
          <kk-checkbox
            value=${String(o)}
            ?checked=${j.has(o)||n.has(o)}
            ?disabled=${n.has(o)}
            @kk-change=${e=>{e.target.checked?j.add(o):j.delete(o)}}
          >
            ${l}
          </kk-checkbox>
        `})}
      <p class="caixas__ajuda">
        ${a.length===0?i.grupos.semPessoas:i.grupos.membrosAjuda}
      </p>
    </fieldset>
  `}function J(n){let a=b(D,[`anciao`,`servo_ministerial`],n.congregacao_id,n.superintendente_id),c=b(D,[`anciao`,`servo_ministerial`],n.congregacao_id,n.ajudante_id).filter(e=>e.id!==n.superintendente_id);return e`
    <kk-dialog
      open
      class="grupo-form"
      label=${n.id===void 0?i.grupos.novo:i.grupos.editar}
      @kk-request-close=${o}
      @kk-initial-focus=${s}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&B()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${i.grupos.nome}
          placeholder=${i.grupos.nomePlaceholder}
          required
          .value=${n.nome}
          @kk-input=${e=>L({nome:U(e)})}
        ></kk-input>

        ${O.length===0?r:e`
              <kk-select
                name="congregacao"
                label=${i.grupos.congregacao}
                .value=${String(n.congregacao_id??0)}
                @kk-change=${e=>{L({congregacao_id:W(e)}),t()}}
              >
                <kk-option value="0">${i.grupos.congregacaoNenhuma}</kk-option>
                ${O.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
              </kk-select>
            `}

        ${K(`superintendente`,i.grupos.superintendente,a.length===0?i.grupos.semEscolhiveis:i.grupos.superintendenteAjuda,a,n.superintendente_id,e=>{L({superintendente_id:e,...e!==null&&A?.ajudante_id===e?{ajudante_id:null}:{}}),t()})}
        ${K(`ajudante`,i.grupos.ajudante,i.grupos.ajudanteAjuda,c,n.ajudante_id,e=>{L({ajudante_id:e}),t()})}

        ${q(n)}

        ${M===``?r:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?r:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&H(A.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${i.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${B}>${i.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&V(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Y(t){let n=t.superintendente_id===null,a=t.id===void 0?0:m(t.id,E,D).length,o=[n?``:i.grupos.dirigidoPor(F(t.superintendente_id)),t.ajudante_id===null?``:i.grupos.comAjudante(F(t.ajudante_id)),i.grupos.pessoas(a),O.length>1?I(t.congregacao_id):``].filter(e=>e!==``);return e`
    <button
      class="linha"
      data-grupo-de-campo=${t.id??0}
      ?data-sem-ninguem=${n}
      @click=${()=>R(t)}
    >
      <kk-icon class="linha__icone" name="users-group"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${t.nome}</span>
        <span class="linha__sub">${o.join(` · `)}</span>
      </span>
      ${n?e`<span class="linha__selo">${i.grupos.semQuemDirija}</span>`:r}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function X(){return O.length<2?r:e`
    <div class="filtros">
      <kk-select
        name="filtro-congregacao"
        label=${i.grupos.filtroCongregacao}
        .value=${k===null?`todas`:String(k)}
        @kk-change=${e=>{let n=U(e);k=n===`todas`?null:Number(n),t()}}
      >
        <kk-option value="todas">${i.grupos.filtroTodas}</kk-option>
        <kk-option value="0">${i.grupos.filtroSemCongregacao}</kk-option>
        ${O.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function Z(){let t=y(D,E,k);return t.length===0?r:e`
    <h3 class="secao">${i.grupos.semGrupo}</h3>
    <p class="grupos__fora" data-sem-grupo=${t.length}>
      ${i.grupos.semGrupoTexto(t.length)} ${t.map(e=>e.nome).join(`, `)}.
    </p>
  `}function Q(){if(T.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="users-group"></kk-icon>
        <strong>${i.grupos.vazio}</strong>
        <p>${i.grupos.vazioTexto}</p>
        <kk-button variant="primary" @click=${z}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${i.grupos.novo}
        </kk-button>
      </div>
    `;let t=f(g(T,k)),n=t.filter(e=>e.superintendente_id===null).length,r=[i.grupos.contagem(t.length),n===0?``:i.grupos.semQuemDirijaContagem(n)].filter(e=>e!==``);return e`
    ${X()}
    <p class="contagem" aria-live="polite">${r.join(` · `)}</p>
    ${t.length===0?e`<p class="vazio">${i.grupos.nenhumAchado}</p>`:e`<div class="lista">${t.map(Y)}</div>`}
    ${Z()}
  `}var $={aoVoltar(){return A!==null&&(B(),!0)},acoes(){if(P.terminou)return e`
      <kk-icon-button name="plus" label=${i.grupos.novo} @click=${z}></kk-icon-button>
    `},conteudo(){let t=P.espera();return t===null?e`${Q()} ${A===null?r:J(A)}`:t}};export{$ as telaGrupos};