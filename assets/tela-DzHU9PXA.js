import{_ as e,c as t,d as n,m as r}from"./erro-Bc0C-0ww.js";import{n as i}from"./idioma-CVgIQtmc.js";import{t as a}from"./notificar-BeOZKYlx.js";import{S as o,b as s,y as c}from"./index-CCl639Mp.js";import{t as ee}from"./carga-N4u32e31.js";import{t as te}from"./dados-CAIyjVFG.js";import{f as l,h as u,i as d,l as ne,n as re,r as f,t as p}from"./dados-9wsuHbxQ.js";import{S as m,_ as h,a as g,b as _,c as v,d as y,g as b,i as x,l as S,m as C,n as w,o as T,p as E,r as D,t as O,u as k,x as A,y as j}from"./regras-D9ek7SGP.js";import{n as M,t as N}from"./dados-Bo7NmTNw.js";import{t as P}from"./esquema-K3l3qcnX.js";var F=[],I=[],L=[],R=[],z=w,B=null,V=null,H=``,U=new Set;async function W(){[F,I,L,R]=await Promise.all([p(),te(),N(),M()])}var G=new ee(`Pessoas`,W);n(`pessoas`,()=>{G.esquecer(),B=null,z=w});function K(e){B!==null&&(B={...B,...e})}function q(e){B={...e},V=e.id===void 0?null:ne(R).get(e.id)??null,H=``,U.clear(),t()}function J(){let e=z.congregacao!==null&&z.congregacao>0?z.congregacao:null,t=I.length===1?I[0]?.id??null:null;q(j(e??t))}function Y(){B=null,H=``,t()}function X(e){return e===null?``:I.find(t=>t.id===e)?.nome??``}function ie(e){return u(L.filter(t=>t.id===V||t.congregacao_id===null||t.congregacao_id===e))}function ae(e){if(e.ativo===0||V===null)return null;let t=L.find(e=>e.id===V);return t===void 0?null:t.congregacao_id===null||t.congregacao_id===e.congregacao_id?V:null}async function oe(e){if(e.nome.trim()===``){H=i.pessoas.semNome,t();return}let n=h(e),r=v(n,F);if(r.length>0&&!await c({titulo:i.pessoas.passarCargoTitulo,texto:[...r.map(({cargo:e,com:t})=>i.pessoas.passarCargo(i.cargos[e],t.nome)),i.pessoas.passarCargoTexto].join(` `),rotuloConfirmar:i.pessoas.passarCargoConfirmar}))return;let o=[...new Set(r.map(({com:e})=>e))].map(e=>_(e,r.filter(t=>t.com===e).map(({cargo:e})=>e)));try{await f(n,o,{grupoId:ae(n),membros:R})}catch(e){console.error(`Pessoas: a gravação falhou.`,e),a(i.pessoas.naoSalva,`danger`);return}B=null,a(i.pessoas.salva),await W(),t()}async function se(e,n){if(e.ativo===0)H=i.pessoas.emUsoInativa,t();else if(await c({titulo:i.pessoas.emUsoTitulo,texto:i.pessoas.emUso(n),rotuloConfirmar:i.pessoas.inativar})){try{await f(h({...e,ativo:0}),[],{grupoId:null,membros:R})}catch(e){console.error(`Pessoas: a inativação falhou.`,e),a(i.pessoas.naoSalva,`danger`);return}B=null,a(i.pessoas.inativada),await W(),t()}}async function ce(e){let n=e.id,r=await d(n);if(r>0)await se(e,r);else if(await c({titulo:i.pessoas.excluirTitulo,texto:i.pessoas.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})){try{await re(n)}catch(e){console.error(`Pessoas: a exclusão falhou.`,e),a(i.pessoas.naoExcluida,`danger`);return}B=null,a(i.pessoas.excluida),await W(),t()}}function Z(e){return e.target.value}function le(e){return e===`telefone_duvidoso`?i.pessoas.telefoneDuvidoso:e===`email_duvidoso`?i.pessoas.emailDuvidoso:``}function Q(n,r,a){let o=U.has(r)?P(r,n[r]):void 0;return e`
    <kk-input
      name=${r}
      type=${a}
      label=${r===`telefone`?i.pessoas.telefone:i.pessoas.email}
      help-text=${le(o)}
      .value=${n[r]}
      @kk-input=${e=>{U.delete(r),K({[r]:Z(e)})}}
      @kk-blur=${()=>{U.has(r)||(U.add(r),t())}}
    ></kk-input>
  `}function ue(n){return e`
    <fieldset class="caixas" data-grupo="papeis">
      <legend class="caixas__titulo">${i.pessoas.papeis}</legend>
      ${D.map(r=>e`
          <kk-checkbox
            value=${r}
            ?checked=${n.papeis.includes(r)}
            ?disabled=${m(n.papeis,r)}
            @kk-change=${e=>{if(B===null)return;let n=T(B.papeis,r,e.target.checked);K({papeis:n,cargos:C(B.cargos,n),sexo:b(B.sexo,n)}),t()}}
          >
            ${i.papeis[r]}
          </kk-checkbox>
        `)}
      <p class="caixas__ajuda">${i.pessoas.papeisAjuda}</p>
    </fieldset>
  `}function de(n){let a=n.papeis.includes(`anciao`),o=n.ativo===0?i.pessoas.cargosInativo:a?i.pessoas.cargosAjuda:i.pessoas.cargosSoAnciao;return e`
    <fieldset class="caixas" data-grupo="cargos">
      <legend class="caixas__titulo">${i.pessoas.cargos}</legend>
      ${a&&n.ativo===1?O.map(r=>e`
                <kk-checkbox
                  value=${r}
                  ?checked=${n.cargos.includes(r)}
                  @kk-change=${e=>{B!==null&&(K({cargos:g(B.cargos,r,e.target.checked,B.papeis)}),t())}}
                >
                  ${i.cargos[r]}
                </kk-checkbox>
              `):r}
      <p class="caixas__ajuda">${o}</p>
    </fieldset>
  `}function fe(t){let n=A(t.papeis);return e`
    <kk-select
      name="sexo"
      label=${i.pessoas.sexo}
      help-text=${n?i.pessoas.sexoTravado:i.pessoas.sexoAjuda}
      ?disabled=${n}
      .value=${t.sexo===``?`nenhum`:t.sexo}
      @kk-change=${e=>{let t=Z(e);K({sexo:y(t)?t:``})}}
    >
      <kk-option value="nenhum">${i.pessoas.sexoNenhum}</kk-option>
      ${x.map(t=>e`<kk-option value=${t}>${i.sexos[t]}</kk-option>`)}
    </kk-select>
  `}function pe(t){let n=ie(t.congregacao_id);return e`
    <kk-select
      name="grupo"
      label=${i.pessoas.grupo}
      help-text=${n.length===0?i.pessoas.semGrupos:i.pessoas.grupoAjuda}
      ?disabled=${t.ativo===0}
      .value=${String(t.ativo===0?0:V??0)}
      @kk-change=${e=>{let t=Number(Z(e));V=Number.isInteger(t)&&t>0?t:null}}
    >
      <kk-option value="0">${i.pessoas.grupoNenhum}</kk-option>
      ${n.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
    </kk-select>
  `}function me(n){return e`
    <kk-dialog
      open
      class="pessoa-form"
      label=${n.id===void 0?i.pessoas.nova:i.pessoas.editar}
      @kk-request-close=${o}
      @kk-initial-focus=${s}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&Y()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${i.pessoas.nome}
          placeholder=${i.pessoas.nomePlaceholder}
          autocapitalize="words"
          required
          .value=${n.nome}
          @kk-input=${e=>K({nome:Z(e)})}
        ></kk-input>

        <div class="formulario__par">
          ${Q(n,`telefone`,`tel`)} ${Q(n,`email`,`email`)}
        </div>

        <kk-select
          name="congregacao"
          label=${i.pessoas.congregacao}
          .value=${String(n.congregacao_id??0)}
          @kk-change=${e=>{let n=Number(Z(e));K({congregacao_id:n>0?n:null}),t()}}
        >
          <kk-option value="0">${i.pessoas.congregacaoNenhuma}</kk-option>
          ${I.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
        </kk-select>

        <div class="formulario__par">${fe(n)} ${pe(n)}</div>

        ${ue(n)} ${de(n)}

        <kk-switch
          name="ativo"
          help-text=${i.pessoas.ativoAjuda}
          ?checked=${n.ativo===1}
          @kk-change=${e=>{K({ativo:+!!e.target.checked}),t()}}
        >
          ${i.pessoas.ativo}
        </kk-switch>

        ${H===``?r:e`<p class="erro" role="alert">${H}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?r:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{B?.id!==void 0&&ce({...B,id:B.id})}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${i.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${Y}>${i.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{B!==null&&oe(B)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function he(e){let t=l(e,L,R);return t===null?``:i.pessoas.noGrupo[t.como](t.grupo.nome)}function ge(e){return[...e.papeis.length===0?[i.pessoas.semPapel]:e.papeis.filter(t=>t!==`publicador`||e.papeis.length===1).map(e=>i.papeis[e]),...e.cargos.map(e=>i.cargos[e]),he(e),X(e.congregacao_id)].filter(e=>e!==``).join(` · `)}function $(t){return e`
    <button
      class="linha"
      data-pessoa=${t.id??0}
      ?data-inativa=${t.ativo===0}
      @click=${()=>q(t)}
    >
      <kk-icon class="linha__icone" name=${t.papeis.includes(`anciao`)?`user-star`:`user`}></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${t.nome}</span>
        <span class="linha__sub">${ge(t)}</span>
      </span>
      ${t.ativo===0?e`<span class="linha__selo">${i.pessoas.inativo}</span>`:r}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function _e(){return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        label=${i.pessoas.buscar}
        clearable
        .value=${z.termo}
        @kk-input=${e=>{z={...z,termo:Z(e)},t()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>

      <kk-select
        name="filtro-papel"
        label=${i.pessoas.filtroPapel}
        .value=${z.papel===``?`todos`:z.papel}
        @kk-change=${e=>{let n=Z(e);z={...z,papel:k(n)?n:``},t()}}
      >
        <kk-option value="todos">${i.pessoas.filtroTodos}</kk-option>
        ${D.map(t=>e`<kk-option value=${t}>${i.papeis[t]}</kk-option>`)}
      </kk-select>

      <kk-select
        name="filtro-cargo"
        label=${i.pessoas.filtroCargo}
        .value=${z.cargo===``?`todos`:z.cargo}
        @kk-change=${e=>{let n=Z(e);z={...z,cargo:S(n)?n:``},t()}}
      >
        <kk-option value="todos">${i.pessoas.filtroTodos}</kk-option>
        ${O.map(t=>e`<kk-option value=${t}>${i.cargos[t]}</kk-option>`)}
      </kk-select>

      ${I.length===0?r:e`
            <kk-select
              name="filtro-congregacao"
              label=${i.pessoas.filtroCongregacao}
              .value=${z.congregacao===null?`todas`:String(z.congregacao)}
              @kk-change=${e=>{let n=Z(e);z={...z,congregacao:n===`todas`?null:Number(n)},t()}}
            >
              <kk-option value="todas">${i.pessoas.filtroTodas}</kk-option>
              <kk-option value="0">${i.pessoas.filtroSemCongregacao}</kk-option>
              ${I.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
            </kk-select>
          `}

      <kk-switch
        name="filtro-inativos"
        ?checked=${z.inativos}
        @kk-change=${e=>{z={...z,inativos:e.target.checked},t()}}
      >
        ${i.pessoas.mostrarInativos}
      </kk-switch>
    </div>
  `}function ve(){if(F.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="users"></kk-icon>
        <strong>${i.pessoas.vazio}</strong>
        <p>${i.pessoas.vazioTexto}</p>
        <kk-button variant="primary" @click=${J}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${i.pessoas.nova}
        </kk-button>
      </div>
    `;let t=E(F,z);return e`
    ${_e()}
    <p class="contagem" aria-live="polite">${i.pessoas.contagem(t.length)}</p>
    ${t.length===0?e`<p class="vazio">${i.pessoas.nenhumaAchada}</p>`:e`<div class="lista">${t.map($)}</div>`}
  `}var ye={aoVoltar(){return B!==null&&(Y(),!0)},acoes(){if(G.terminou)return e`
      <kk-icon-button name="plus" label=${i.pessoas.nova} @click=${J}></kk-icon-button>
    `},conteudo(){let t=G.espera();return t===null?e`${ve()} ${B===null?r:me(B)}`:t}};export{ye as telaPessoas};