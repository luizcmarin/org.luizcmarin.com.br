import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./idioma-Dwpp7Zfu.js";import{c as r,d as i}from"./erro-FHfTMgeP.js";import{t as a}from"./notificar-BeOZKYlx.js";import{O as o,j as s,k as c}from"./index-Dg_pauX5.js";import{t as ee}from"./carga-D_DL_FuH.js";import{t as te}from"./dados-BsCkASV3.js";import{f as l,h as u,i as d,l as ne,n as re,r as f,t as p}from"./dados-NtMCJpE9.js";import{S as m,_ as h,a as g,b as _,c as v,d as y,g as b,i as x,l as S,m as C,n as w,o as T,p as E,r as D,t as O,u as k,x as A,y as j}from"./regras-D9ek7SGP.js";import{n as M,t as N}from"./dados-DUR8Ze6E.js";import{t as P}from"./esquema-K3l3qcnX.js";var F=[],I=[],L=[],R=[],z=w,B=null,V=null,H=``,U=new Set;async function W(){[F,I,L,R]=await Promise.all([p(),te(),N(),M()])}var G=new ee(`Pessoas`,W);i(`pessoas`,()=>{G.esquecer(),B=null,z=w});function K(e){B!==null&&(B={...B,...e})}function q(e){B={...e},V=e.id===void 0?null:ne(R).get(e.id)??null,H=``,U.clear(),r()}function J(){let e=z.congregacao!==null&&z.congregacao>0?z.congregacao:null,t=I.length===1?I[0]?.id??null:null;q(j(e??t))}function Y(){B=null,H=``,r()}function X(e){return e===null?``:I.find(t=>t.id===e)?.nome??``}function ie(e){return u(L.filter(t=>t.id===V||t.congregacao_id===null||t.congregacao_id===e))}function ae(e){if(e.ativo===0||V===null)return null;let t=L.find(e=>e.id===V);return t===void 0?null:t.congregacao_id===null||t.congregacao_id===e.congregacao_id?V:null}async function oe(e){if(e.nome.trim()===``){H=n.pessoas.semNome,r();return}let t=h(e),i=v(t,F);if(i.length>0&&!await o({titulo:n.pessoas.passarCargoTitulo,texto:[...i.map(({cargo:e,com:t})=>n.pessoas.passarCargo(n.cargos[e],t.nome)),n.pessoas.passarCargoTexto].join(` `),rotuloConfirmar:n.pessoas.passarCargoConfirmar}))return;let s=[...new Set(i.map(({com:e})=>e))].map(e=>_(e,i.filter(t=>t.com===e).map(({cargo:e})=>e)));try{await f(t,s,{grupoId:ae(t),membros:R})}catch(e){console.error(`Pessoas: a gravação falhou.`,e),a(n.pessoas.naoSalva,`danger`);return}B=null,a(n.pessoas.salva),await W(),r()}async function se(e,t){if(e.ativo===0)H=n.pessoas.emUsoInativa,r();else if(await o({titulo:n.pessoas.emUsoTitulo,texto:n.pessoas.emUso(t),rotuloConfirmar:n.pessoas.inativar})){try{await f(h({...e,ativo:0}),[],{grupoId:null,membros:R})}catch(e){console.error(`Pessoas: a inativação falhou.`,e),a(n.pessoas.naoSalva,`danger`);return}B=null,a(n.pessoas.inativada),await W(),r()}}async function ce(e){let t=e.id,i=await d(t);if(i>0)await se(e,i);else if(await o({titulo:n.pessoas.excluirTitulo,texto:n.pessoas.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await re(t)}catch(e){console.error(`Pessoas: a exclusão falhou.`,e),a(n.pessoas.naoExcluida,`danger`);return}B=null,a(n.pessoas.excluida),await W(),r()}}function Z(e){return e.target.value}function le(e){return e===`telefone_duvidoso`?n.pessoas.telefoneDuvidoso:e===`email_duvidoso`?n.pessoas.emailDuvidoso:``}function Q(t,i,a){let o=U.has(i)?P(i,t[i]):void 0;return e`
    <kk-input
      name=${i}
      type=${a}
      label=${i===`telefone`?n.pessoas.telefone:n.pessoas.email}
      help-text=${le(o)}
      .value=${t[i]}
      @kk-input=${e=>{U.delete(i),K({[i]:Z(e)})}}
      @kk-blur=${()=>{U.has(i)||(U.add(i),r())}}
    ></kk-input>
  `}function ue(t){return e`
    <fieldset class="caixas" data-grupo="papeis">
      <legend class="caixas__titulo">${n.pessoas.papeis}</legend>
      ${D.map(i=>e`
          <kk-checkbox
            value=${i}
            ?checked=${t.papeis.includes(i)}
            ?disabled=${m(t.papeis,i)}
            @kk-change=${e=>{if(B===null)return;let t=T(B.papeis,i,e.target.checked);K({papeis:t,cargos:C(B.cargos,t),sexo:b(B.sexo,t)}),r()}}
          >
            ${n.papeis[i]}
          </kk-checkbox>
        `)}
      <p class="caixas__ajuda">${n.pessoas.papeisAjuda}</p>
    </fieldset>
  `}function de(i){let a=i.papeis.includes(`anciao`),o=i.ativo===0?n.pessoas.cargosInativo:a?n.pessoas.cargosAjuda:n.pessoas.cargosSoAnciao;return e`
    <fieldset class="caixas" data-grupo="cargos">
      <legend class="caixas__titulo">${n.pessoas.cargos}</legend>
      ${a&&i.ativo===1?O.map(t=>e`
                <kk-checkbox
                  value=${t}
                  ?checked=${i.cargos.includes(t)}
                  @kk-change=${e=>{B!==null&&(K({cargos:g(B.cargos,t,e.target.checked,B.papeis)}),r())}}
                >
                  ${n.cargos[t]}
                </kk-checkbox>
              `):t}
      <p class="caixas__ajuda">${o}</p>
    </fieldset>
  `}function fe(t){let r=A(t.papeis);return e`
    <kk-select
      name="sexo"
      label=${n.pessoas.sexo}
      help-text=${r?n.pessoas.sexoTravado:n.pessoas.sexoAjuda}
      ?disabled=${r}
      .value=${t.sexo===``?`nenhum`:t.sexo}
      @kk-change=${e=>{let t=Z(e);K({sexo:y(t)?t:``})}}
    >
      <kk-option value="nenhum">${n.pessoas.sexoNenhum}</kk-option>
      ${x.map(t=>e`<kk-option value=${t}>${n.sexos[t]}</kk-option>`)}
    </kk-select>
  `}function pe(t){let r=ie(t.congregacao_id);return e`
    <kk-select
      name="grupo"
      label=${n.pessoas.grupo}
      help-text=${r.length===0?n.pessoas.semGrupos:n.pessoas.grupoAjuda}
      ?disabled=${t.ativo===0}
      .value=${String(t.ativo===0?0:V??0)}
      @kk-change=${e=>{let t=Number(Z(e));V=Number.isInteger(t)&&t>0?t:null}}
    >
      <kk-option value="0">${n.pessoas.grupoNenhum}</kk-option>
      ${r.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
    </kk-select>
  `}function me(i){return e`
    <kk-dialog
      open
      class="pessoa-form"
      label=${i.id===void 0?n.pessoas.nova:n.pessoas.editar}
      @kk-request-close=${s}
      @kk-initial-focus=${c}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&Y()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${n.pessoas.nome}
          placeholder=${n.pessoas.nomePlaceholder}
          autocapitalize="words"
          required
          .value=${i.nome}
          @kk-input=${e=>K({nome:Z(e)})}
        ></kk-input>

        <div class="formulario__par">
          ${Q(i,`telefone`,`tel`)} ${Q(i,`email`,`email`)}
        </div>

        <kk-select
          name="congregacao"
          label=${n.pessoas.congregacao}
          .value=${String(i.congregacao_id??0)}
          @kk-change=${e=>{let t=Number(Z(e));K({congregacao_id:t>0?t:null}),r()}}
        >
          <kk-option value="0">${n.pessoas.congregacaoNenhuma}</kk-option>
          ${I.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
        </kk-select>

        <div class="formulario__par">${fe(i)} ${pe(i)}</div>

        ${ue(i)} ${de(i)}

        <kk-switch
          name="ativo"
          help-text=${n.pessoas.ativoAjuda}
          ?checked=${i.ativo===1}
          @kk-change=${e=>{K({ativo:+!!e.target.checked}),r()}}
        >
          ${n.pessoas.ativo}
        </kk-switch>

        ${H===``?t:e`<p class="erro" role="alert">${H}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${i.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{B?.id!==void 0&&ce({...B,id:B.id})}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${Y}>${n.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{B!==null&&oe(B)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function he(e){let t=l(e,L,R);return t===null?``:n.pessoas.noGrupo[t.como](t.grupo.nome)}function ge(e){return[...e.papeis.length===0?[n.pessoas.semPapel]:e.papeis.filter(t=>t!==`publicador`||e.papeis.length===1).map(e=>n.papeis[e]),...e.cargos.map(e=>n.cargos[e]),he(e),X(e.congregacao_id)].filter(e=>e!==``).join(` · `)}function $(r){return e`
    <button
      class="linha"
      data-pessoa=${r.id??0}
      ?data-inativa=${r.ativo===0}
      @click=${()=>q(r)}
    >
      <kk-icon class="linha__icone" name=${r.papeis.includes(`anciao`)?`user-star`:`user`}></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${r.nome}</span>
        <span class="linha__sub">${ge(r)}</span>
      </span>
      ${r.ativo===0?e`<span class="linha__selo">${n.pessoas.inativo}</span>`:t}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function _e(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        label=${n.pessoas.buscar}
        clearable
        .value=${z.termo}
        @kk-input=${e=>{z={...z,termo:Z(e)},r()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        name="filtro-papel"
        label=${n.pessoas.filtroPapel}
        .value=${z.papel===``?`todos`:z.papel}
        @kk-change=${e=>{let t=Z(e);z={...z,papel:k(t)?t:``},r()}}
      >
        <kk-option value="todos">${n.pessoas.filtroTodos}</kk-option>
        ${D.map(t=>e`<kk-option value=${t}>${n.papeis[t]}</kk-option>`)}
      </kk-select>

      <kk-select
        name="filtro-cargo"
        label=${n.pessoas.filtroCargo}
        .value=${z.cargo===``?`todos`:z.cargo}
        @kk-change=${e=>{let t=Z(e);z={...z,cargo:S(t)?t:``},r()}}
      >
        <kk-option value="todos">${n.pessoas.filtroTodos}</kk-option>
        ${O.map(t=>e`<kk-option value=${t}>${n.cargos[t]}</kk-option>`)}
      </kk-select>

      ${I.length===0?t:e`
            <kk-select
              name="filtro-congregacao"
              label=${n.pessoas.filtroCongregacao}
              .value=${z.congregacao===null?`todas`:String(z.congregacao)}
              @kk-change=${e=>{let t=Z(e);z={...z,congregacao:t===`todas`?null:Number(t)},r()}}
            >
              <kk-option value="todas">${n.pessoas.filtroTodas}</kk-option>
              <kk-option value="0">${n.pessoas.filtroSemCongregacao}</kk-option>
              ${I.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
            </kk-select>
          `}

      <kk-switch
        name="filtro-inativos"
        ?checked=${z.inativos}
        @kk-change=${e=>{z={...z,inativos:e.target.checked},r()}}
      >
        ${n.pessoas.mostrarInativos}
      </kk-switch>
    </div>
  `}function ve(){if(F.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="users"></kk-icon>
        <strong>${n.pessoas.vazio}</strong>
        <p>${n.pessoas.vazioTexto}</p>
        <kk-button variant="primary" @click=${J}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${n.pessoas.nova}
        </kk-button>
      </div>
    `;let t=E(F,z);return e`
    ${_e()}
    <p class="contagem" aria-live="polite">${n.pessoas.contagem(t.length)}</p>
    ${t.length===0?e`<p class="vazio">${n.pessoas.nenhumaAchada}</p>`:e`<div class="lista">${t.map($)}</div>`}
  `}var ye={aoVoltar(){return B!==null&&(Y(),!0)},acoes(){if(G.terminou)return e`
      <kk-icon-button name="plus" label=${n.pessoas.nova} @click=${J}></kk-icon-button>
    `},conteudo(){let n=G.espera();return n===null?e`${ve()} ${B===null?t:me(B)}`:n}};export{ye as telaPessoas};