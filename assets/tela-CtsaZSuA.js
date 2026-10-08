import{i as e,t}from"./lit-CL39YOSA.js";import{n}from"./idioma-Dwpp7Zfu.js";import{c as r,d as i}from"./erro-FHfTMgeP.js";import{t as a}from"./notificar-BeOZKYlx.js";import{O as o,j as s,k as c}from"./index-Dg_pauX5.js";import{t as l}from"./carga-D_DL_FuH.js";import{a as u,i as d,l as f,o as p,r as m,u as h}from"./regras-4jjqjfyv.js";import{a as g,i as _,n as v,r as y,t as b}from"./dados-BsCkASV3.js";var x=[],S=new Map,C=new Map,w=``,T=null,E=``;async function D(){[x,S,C]=await Promise.all([b(),y(),_()])}var O=new l(`Congregações`,D);i(`congregacoes`,()=>{O.esquecer(),T=null,w=``});function k(e){T!==null&&(T={...T,...e})}function A(e){T={id:e.id,nome:e.nome,numero:e.numero===null?``:String(e.numero),cidade:e.cidade,uf:e.uf,dia_meio_de_semana:e.dia_meio_de_semana,hora_meio_de_semana:e.hora_meio_de_semana,dia_fim_de_semana:e.dia_fim_de_semana,hora_fim_de_semana:e.hora_fim_de_semana},E=``,r()}function j(){T=null,E=``,r()}async function M(e){let t=h(e.numero);if(e.nome.trim()===``)E=n.congregacoes.semNome;else if(t===void 0)E=n.congregacoes.numeroInvalido;else{let r=u(t,e.id,x);E=r===void 0?``:n.congregacoes.numeroEmUso(r.nome)}if(E!==``||t===void 0)r();else{try{await g({...e.id===void 0?{}:{id:e.id},nome:e.nome,numero:t,cidade:e.cidade,uf:e.uf,dia_meio_de_semana:e.dia_meio_de_semana,hora_meio_de_semana:e.hora_meio_de_semana,dia_fim_de_semana:e.dia_fim_de_semana,hora_fim_de_semana:e.hora_fim_de_semana})}catch(e){console.error(`Congregações: a gravação falhou.`,e),a(n.congregacoes.naoSalva,`danger`);return}T=null,a(n.congregacoes.salva),await D(),r()}}async function N(e){let t=S.get(e)??0;if(t>0){E=n.congregacoes.emUso(t),r();return}let i=C.get(e)??0;if(i>0)E=n.congregacoes.emUsoPorRegistros(i),r();else if(await o({titulo:n.congregacoes.excluirTitulo,texto:n.congregacoes.excluirTexto,rotuloConfirmar:n.acoes.excluir,variante:`danger`})){try{await v(e)}catch(e){console.error(`Congregações: a exclusão falhou.`,e),a(n.congregacoes.naoExcluida,`danger`);return}T=null,a(n.congregacoes.excluida),await D(),r()}}function P(e){return e.target.value}function F(t,r){let i=r===`meio_de_semana`?`dia_meio_de_semana`:`dia_fim_de_semana`,a=r===`meio_de_semana`?`hora_meio_de_semana`:`hora_fim_de_semana`,o=t[i];return e`
    <div class="formulario__par">
      <kk-select
        name=${i}
        label=${n.congregacoes.reunioes[r]}
        .value=${o===null?`nenhum`:String(o)}
        @kk-change=${e=>k({[i]:d(P(e))})}
      >
        <kk-option value="nenhum">${n.congregacoes.diaNenhum}</kk-option>
        ${n.diasDaSemana.map((t,n)=>e`<kk-option value=${String(n)}>${t}</kk-option>`)}
      </kk-select>
      <kk-input
        name=${a}
        type="time"
        label=${n.congregacoes.hora}
        .value=${t[a]}
        @kk-change=${e=>k({[a]:P(e)})}
      ></kk-input>
    </div>
  `}function I(r){return e`
    <kk-dialog
      open
      class="congregacao-form"
      label=${r.id===void 0?n.congregacoes.nova:n.congregacoes.editar}
      @kk-request-close=${s}
      @kk-initial-focus=${c}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&j()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${n.congregacoes.nome}
          placeholder=${n.congregacoes.nomePlaceholder}
          required
          .value=${r.nome}
          @kk-input=${e=>k({nome:P(e)})}
        ></kk-input>

        <kk-input
          name="numero"
          label=${n.congregacoes.numero}
          inputmode="numeric"
          help-text=${n.congregacoes.numeroAjuda}
          .value=${r.numero}
          @kk-input=${e=>k({numero:P(e)})}
        ></kk-input>

        <div class="formulario__par">
          <kk-input
            name="cidade"
            label=${n.congregacoes.cidade}
            .value=${r.cidade}
            @kk-input=${e=>k({cidade:P(e)})}
          ></kk-input>

          <kk-input
            name="uf"
            label=${n.congregacoes.uf}
            placeholder=${n.congregacoes.ufPlaceholder}
            .value=${r.uf}
            @kk-input=${e=>k({uf:P(e)})}
          ></kk-input>
        </div>

        <fieldset class="caixas" data-grupo="reunioes">
          <legend class="caixas__titulo">${n.congregacoes.reunioesTitulo}</legend>
          ${F(r,`meio_de_semana`)} ${F(r,`fim_de_semana`)}
          <p class="caixas__ajuda">${n.congregacoes.reunioesAjuda}</p>
        </fieldset>

        ${E===``?t:e`<p class="erro" role="alert">${E}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${r.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{T?.id!==void 0&&N(T.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${n.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${j}>${n.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{T!==null&&M(T)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${n.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function L(t){let r=t.id??0,i=[f(t),t.numero===null?``:n.congregacoes.numeroCurto(t.numero),n.congregacoes.pessoas(S.get(r)??0)].filter(e=>e!==``);return e`
    <button class="linha" data-congregacao=${r} @click=${()=>A(t)}>
      <kk-icon class="linha__icone" name="home-heart"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${t.nome}</span>
        <span class="linha__sub">${i.join(` · `)}</span>
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function R(){if(x.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
        <strong>${n.congregacoes.vazio}</strong>
        <p>${n.congregacoes.vazioTexto}</p>
        <kk-button variant="primary" @click=${()=>A(m())}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${n.congregacoes.nova}
        </kk-button>
      </div>
    `;let t=p(x,w);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        label=${n.congregacoes.buscar}
        clearable
        .value=${w}
        @kk-input=${e=>{w=P(e),r()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${t.length===0?e`<p class="vazio">${n.congregacoes.nenhumaAchada}</p>`:e`<div class="lista">${t.map(L)}</div>`}
  `}var z={aoVoltar(){return T!==null&&(j(),!0)},acoes(){if(O.terminou)return e`
      <kk-icon-button
        name="plus"
        label=${n.congregacoes.nova}
        @click=${()=>A(m())}
      ></kk-icon-button>
    `},conteudo(){let n=O.espera();return n===null?e`${R()} ${T===null?t:I(T)}`:n}};export{z as telaCongregacoes};