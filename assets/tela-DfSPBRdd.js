import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./idioma-Dwpp7Zfu.js";import{c as r,d as i}from"./erro-FHfTMgeP.js";import{t as a}from"./notificar-BeOZKYlx.js";import{O as o,j as s,k as c}from"./index-B6HOd0Ya.js";import{t as l}from"./carga-D_DL_FuH.js";import{t as u}from"./dados-7yb3DXJX.js";import{_ as d,h as f,l as p,m,o as h,s as g,t as _,u as v,v as y}from"./dados-CpSu_RSV.js";import{f as b}from"./regras-D9ek7SGP.js";import{i as x,n as S,r as C,t as w}from"./dados-B-Ihf5B2.js";var T=[],E=[],D=[],O=[],k=null,A=null,j=new Set,M=``;async function N(){[T,E,D,O]=await Promise.all([w(),S(),_(),u()])}var P=new l(`Grupos`,N);i(`grupos`,()=>{P.esquecer(),A=null,k=null});function F(e){return e===null?``:D.find(t=>t.id===e)?.nome??``}function I(e){return e===null?``:O.find(t=>t.id===e)?.nome??``}function L(e){A!==null&&(A={...A,...e})}function R(e){A={...e},j=new Set(e.id===void 0?[]:m(e.id,E,D).map(e=>e.id??0)),M=``,r()}function z(){let e=k!==null&&k>0?k:null,t=O.length===1?O[0]?.id??null:null;R(v(e??t))}function B(){A=null,M=``,r()}async function V(e){if(d(e)===`sem_nome`)M=n.grupos.semNome,r();else{try{await x(e,j,E)}catch(e){console.error(`Grupos: a gravação falhou.`,e),a(n.grupos.naoSalvo,`danger`);return}A=null,a(n.grupos.salvo),await N(),r()}}async function H(e){if(await o({titulo:n.grupos.excluirTitulo,texto:n.grupos.excluirTexto(E.filter(t=>t.grupo_id===e).length),rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await C(e)}catch(e){console.error(`Grupos: a exclusão falhou.`,e),a(n.grupos.naoExcluido,`danger`);return}A=null,a(n.grupos.excluido),await N(),r()}}function U(e){return e.target.value}function W(e){let t=Number(U(e));return Number.isInteger(t)&&t>0?t:null}function G(t){let r=t.ativo===0?n.pautas.inativo(t.nome):t.nome;return e`<kk-option value=${String(t.id??0)}>${r}</kk-option>`}function K(t,r,i,a,o,s){return e`
    <kk-select
      name=${t}
      label=${r}
      help-text=${i}
      .value=${String(o??0)}
      @kk-change=${e=>s(W(e))}
    >
      <kk-option value="0">${n.grupos.ninguem}</kk-option>
      ${a.map(G)}
    </kk-select>
  `}function q(t){let r=h(t,[]),i=p(E),a=D.filter(e=>e.id!==void 0&&(j.has(e.id)||r.has(e.id)||b([e],null,t.congregacao_id).length>0));return e`
    <fieldset class="caixas" data-grupo="membros">
      <legend class="caixas__titulo">${n.grupos.membros}</legend>
      ${a.map(a=>{let o=a.id??0,s=i.get(o),c=s!==void 0&&s!==t.id?T.find(e=>e.id===s)?.nome??``:``,l=[a.ativo===0?n.pautas.inativo(a.nome):a.nome,c===``?``:n.grupos.emOutro(c)].filter(e=>e!==``).join(` `);return e`
          <kk-checkbox
            value=${String(o)}
            ?checked=${j.has(o)||r.has(o)}
            ?disabled=${r.has(o)}
            @kk-change=${e=>{e.target.checked?j.add(o):j.delete(o)}}
          >
            ${l}
          </kk-checkbox>
        `})}
      <p class="caixas__ajuda">
        ${a.length===0?n.grupos.semPessoas:n.grupos.membrosAjuda}
      </p>
    </fieldset>
  `}function J(i){let a=b(D,[`anciao`,`servo_ministerial`],i.congregacao_id,i.superintendente_id),o=b(D,[`anciao`,`servo_ministerial`],i.congregacao_id,i.ajudante_id).filter(e=>e.id!==i.superintendente_id);return e`
    <kk-dialog
      open
      class="grupo-form"
      label=${i.id===void 0?n.grupos.novo:n.grupos.editar}
      @kk-request-close=${s}
      @kk-initial-focus=${c}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&B()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${n.grupos.nome}
          placeholder=${n.grupos.nomePlaceholder}
          required
          .value=${i.nome}
          @kk-input=${e=>L({nome:U(e)})}
        ></kk-input>

        ${O.length===0?t:e`
              <kk-select
                name="congregacao"
                label=${n.grupos.congregacao}
                .value=${String(i.congregacao_id??0)}
                @kk-change=${e=>{L({congregacao_id:W(e)}),r()}}
              >
                <kk-option value="0">${n.grupos.congregacaoNenhuma}</kk-option>
                ${O.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
              </kk-select>
            `}

        ${K(`superintendente`,n.grupos.superintendente,a.length===0?n.grupos.semEscolhiveis:n.grupos.superintendenteAjuda,a,i.superintendente_id,e=>{L({superintendente_id:e,...e!==null&&A?.ajudante_id===e?{ajudante_id:null}:{}}),r()})}
        ${K(`ajudante`,n.grupos.ajudante,n.grupos.ajudanteAjuda,o,i.ajudante_id,e=>{L({ajudante_id:e}),r()})}

        ${q(i)}

        ${M===``?t:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${i.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&H(A.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${B}>${n.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&V(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Y(r){let i=r.superintendente_id===null,a=r.id===void 0?0:m(r.id,E,D).length,o=[i?``:n.grupos.dirigidoPor(F(r.superintendente_id)),r.ajudante_id===null?``:n.grupos.comAjudante(F(r.ajudante_id)),n.grupos.pessoas(a),O.length>1?I(r.congregacao_id):``].filter(e=>e!==``);return e`
    <button
      class="linha"
      data-grupo-de-campo=${r.id??0}
      ?data-sem-ninguem=${i}
      @click=${()=>R(r)}
    >
      <kk-icon class="linha__icone" name="users-group"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${r.nome}</span>
        <span class="linha__sub">${o.join(` · `)}</span>
      </span>
      ${i?e`<span class="linha__selo">${n.grupos.semQuemDirija}</span>`:t}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function X(){return O.length<2?t:e`
    <div class="filtros">
      <kk-select
        name="filtro-congregacao"
        label=${n.grupos.filtroCongregacao}
        .value=${k===null?`todas`:String(k)}
        @kk-change=${e=>{let t=U(e);k=t===`todas`?null:Number(t),r()}}
      >
        <kk-option value="todas">${n.grupos.filtroTodas}</kk-option>
        <kk-option value="0">${n.grupos.filtroSemCongregacao}</kk-option>
        ${O.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function Z(){let r=y(D,E,k);return r.length===0?t:e`
    <h3 class="secao">${n.grupos.semGrupo}</h3>
    <p class="grupos__fora" data-sem-grupo=${r.length}>
      ${n.grupos.semGrupoTexto(r.length)} ${r.map(e=>e.nome).join(`, `)}.
    </p>
  `}function Q(){if(T.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="users-group"></kk-icon>
        <strong>${n.grupos.vazio}</strong>
        <p>${n.grupos.vazioTexto}</p>
        <kk-button variant="primary" @click=${z}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${n.grupos.novo}
        </kk-button>
      </div>
    `;let t=f(g(T,k)),r=t.filter(e=>e.superintendente_id===null).length,i=[n.grupos.contagem(t.length),r===0?``:n.grupos.semQuemDirijaContagem(r)].filter(e=>e!==``);return e`
    ${X()}
    <p class="contagem" aria-live="polite">${i.join(` · `)}</p>
    ${t.length===0?e`<p class="vazio">${n.grupos.nenhumAchado}</p>`:e`<div class="lista">${t.map(Y)}</div>`}
    ${Z()}
  `}var $={aoVoltar(){return A!==null&&(B(),!0)},acoes(){if(P.terminou)return e`
      <kk-icon-button name="plus" label=${n.grupos.novo} @click=${z}></kk-icon-button>
    `},conteudo(){let n=P.espera();return n===null?e`${Q()} ${A===null?t:J(A)}`:n}};export{$ as telaGrupos};