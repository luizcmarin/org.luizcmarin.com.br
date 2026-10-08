import{_ as e,c as t,d as n,m as r}from"./erro-D2swQJCY.js";import{n as i}from"./idioma-DWx-F1Qy.js";import{t as a}from"./notificar-BeOZKYlx.js";import{S as o,b as s,y as c}from"./index-DlNqF4dE.js";import{t as l}from"./carga-K0T2aEed.js";import{a as u,i as d,l as f,o as p,r as m,u as h}from"./regras-x-K4nJ6z.js";import{a as g,i as _,n as v,r as y,t as b}from"./dados-CLDIGIer.js";var x=[],S=new Map,C=new Map,w=``,T=null,E=``;async function D(){[x,S,C]=await Promise.all([b(),y(),_()])}var O=new l(`Congregações`,D);n(`congregacoes`,()=>{O.esquecer(),T=null,w=``});function k(e){T!==null&&(T={...T,...e})}function A(e){T={id:e.id,nome:e.nome,numero:e.numero===null?``:String(e.numero),cidade:e.cidade,uf:e.uf,dia_meio_de_semana:e.dia_meio_de_semana,hora_meio_de_semana:e.hora_meio_de_semana,dia_fim_de_semana:e.dia_fim_de_semana,hora_fim_de_semana:e.hora_fim_de_semana},E=``,t()}function j(){T=null,E=``,t()}async function M(e){let n=h(e.numero);if(e.nome.trim()===``)E=i.congregacoes.semNome;else if(n===void 0)E=i.congregacoes.numeroInvalido;else{let t=u(n,e.id,x);E=t===void 0?``:i.congregacoes.numeroEmUso(t.nome)}if(E!==``||n===void 0)t();else{try{await g({...e.id===void 0?{}:{id:e.id},nome:e.nome,numero:n,cidade:e.cidade,uf:e.uf,dia_meio_de_semana:e.dia_meio_de_semana,hora_meio_de_semana:e.hora_meio_de_semana,dia_fim_de_semana:e.dia_fim_de_semana,hora_fim_de_semana:e.hora_fim_de_semana})}catch(e){console.error(`Congregações: a gravação falhou.`,e),a(i.congregacoes.naoSalva,`danger`);return}T=null,a(i.congregacoes.salva),await D(),t()}}async function N(e){let n=S.get(e)??0;if(n>0){E=i.congregacoes.emUso(n),t();return}let r=C.get(e)??0;if(r>0)E=i.congregacoes.emUsoPorRegistros(r),t();else if(await c({titulo:i.congregacoes.excluirTitulo,texto:i.congregacoes.excluirTexto,rotuloConfirmar:i.acoes.excluir,variante:`danger`})){try{await v(e)}catch(e){console.error(`Congregações: a exclusão falhou.`,e),a(i.congregacoes.naoExcluida,`danger`);return}T=null,a(i.congregacoes.excluida),await D(),t()}}function P(e){return e.target.value}function F(t,n){let r=n===`meio_de_semana`?`dia_meio_de_semana`:`dia_fim_de_semana`,a=n===`meio_de_semana`?`hora_meio_de_semana`:`hora_fim_de_semana`,o=t[r];return e`
    <div class="formulario__par">
      <kk-select
        name=${r}
        label=${i.congregacoes.reunioes[n]}
        .value=${o===null?`nenhum`:String(o)}
        @kk-change=${e=>k({[r]:d(P(e))})}
      >
        <kk-option value="nenhum">${i.congregacoes.diaNenhum}</kk-option>
        ${i.diasDaSemana.map((t,n)=>e`<kk-option value=${String(n)}>${t}</kk-option>`)}
      </kk-select>
      <kk-input
        name=${a}
        type="time"
        label=${i.congregacoes.hora}
        .value=${t[a]}
        @kk-change=${e=>k({[a]:P(e)})}
      ></kk-input>
    </div>
  `}function I(t){return e`
    <kk-dialog
      open
      class="congregacao-form"
      label=${t.id===void 0?i.congregacoes.nova:i.congregacoes.editar}
      @kk-request-close=${o}
      @kk-initial-focus=${s}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&j()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${i.congregacoes.nome}
          placeholder=${i.congregacoes.nomePlaceholder}
          required
          .value=${t.nome}
          @kk-input=${e=>k({nome:P(e)})}
        ></kk-input>

        <kk-input
          name="numero"
          label=${i.congregacoes.numero}
          inputmode="numeric"
          help-text=${i.congregacoes.numeroAjuda}
          .value=${t.numero}
          @kk-input=${e=>k({numero:P(e)})}
        ></kk-input>

        <div class="formulario__par">
          <kk-input
            name="cidade"
            label=${i.congregacoes.cidade}
            .value=${t.cidade}
            @kk-input=${e=>k({cidade:P(e)})}
          ></kk-input>

          <kk-input
            name="uf"
            label=${i.congregacoes.uf}
            placeholder=${i.congregacoes.ufPlaceholder}
            .value=${t.uf}
            @kk-input=${e=>k({uf:P(e)})}
          ></kk-input>
        </div>

        <fieldset class="caixas" data-grupo="reunioes">
          <legend class="caixas__titulo">${i.congregacoes.reunioesTitulo}</legend>
          ${F(t,`meio_de_semana`)} ${F(t,`fim_de_semana`)}
          <p class="caixas__ajuda">${i.congregacoes.reunioesAjuda}</p>
        </fieldset>

        ${E===``?r:e`<p class="erro" role="alert">${E}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${t.id===void 0?r:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{T?.id!==void 0&&N(T.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${i.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${j}>${i.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{T!==null&&M(T)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function L(t){let n=t.id??0,r=[f(t),t.numero===null?``:i.congregacoes.numeroCurto(t.numero),i.congregacoes.pessoas(S.get(n)??0)].filter(e=>e!==``);return e`
    <button class="linha" data-congregacao=${n} @click=${()=>A(t)}>
      <kk-icon class="linha__icone" name="home-heart"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${t.nome}</span>
        <span class="linha__sub">${r.join(` · `)}</span>
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function R(){if(x.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
        <strong>${i.congregacoes.vazio}</strong>
        <p>${i.congregacoes.vazioTexto}</p>
        <kk-button variant="primary" @click=${()=>A(m())}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${i.congregacoes.nova}
        </kk-button>
      </div>
    `;let n=p(x,w);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        label=${i.congregacoes.buscar}
        clearable
        .value=${w}
        @kk-input=${e=>{w=P(e),t()}}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    ${n.length===0?e`<p class="vazio">${i.congregacoes.nenhumaAchada}</p>`:e`<div class="lista">${n.map(L)}</div>`}
  `}var z={aoVoltar(){return T!==null&&(j(),!0)},acoes(){if(O.terminou)return e`
      <kk-icon-button
        name="plus"
        label=${i.congregacoes.nova}
        @click=${()=>A(m())}
      ></kk-icon-button>
    `},conteudo(){let t=O.espera();return t===null?e`${R()} ${T===null?r:I(T)}`:t}};export{z as telaCongregacoes};