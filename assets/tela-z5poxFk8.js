import{i as e,t}from"./lit-CL39YOSA.js";import{c as n,d as r,f as i,l as a,n as o}from"./idioma-Dwpp7Zfu.js";import{c as s,u as c}from"./data-DpsiKWt9.js";import{o as ee}from"./ordem-DhzYZk-u.js";import{c as l,d as u,f as d}from"./erro-FHfTMgeP.js";import{t as f}from"./notificar-BeOZKYlx.js";import{t as p}from"./contato-Dy5fPzpa.js";import{D as te,O as m,b as ne,j as h,k as g,x as re}from"./index-Dg_pauX5.js";import{t as ie}from"./carga-D_DL_FuH.js";import{f as _}from"./regras-4jjqjfyv.js";import{t as ae}from"./dados-BsCkASV3.js";import{t as oe}from"./dados-NtMCJpE9.js";import{t as se}from"./compartilhar-CutlseMs.js";import{n as ce}from"./dados-CbaTAptQ.js";import{o as le}from"./regras-B1GEoheD.js";import{n as ue}from"./dados-Df9NjXT4.js";import{t as de}from"./papel-Cka94Pxk.js";import{r as fe}from"./relatorio-C0vfa6yu.js";import{S as pe,_ as me,a as he,b as ge,c as _e,d as ve,f as ye,g as be,h as xe,l as Se,n as v,o as Ce,s as we,x as Te}from"./regras-A0vqlhpU.js";import{a as Ee,c as De,i as Oe,l as ke,n as Ae,o as je,r as Me,s as Ne,t as Pe,u as Fe}from"./dados-DL9hNcoX.js";import{n as Ie,r as y,t as b}from"./relatorio-DjnzxJnw.js";var x=[],S=[],C=[],w=[],T=[],E=[],D=[],Le=``,O=null,k=s(),A=null,j=null,M=new Set,N=``;async function P(){let e;[x,S,C,w,T,E,D,e]=await Promise.all([ae(),oe(),Me(),Oe(),Ae(),Pe(),ue(),ce()]),Le=e.nome.trim(),(O===null||!x.some(e=>e.id===O))&&(O=(x.find(t=>t.id===e.congregacao_id)??x[0])?.id??null)}var F=new ie(`Testemunho público`,P);u(`testemunho`,()=>{F.esquecer(),A=null,j=null,Q=null});function I(e){return e.target.value}function L(e){return e.target.checked}function Re(){return x.find(e=>e.id===O)}function ze(e){return e===null?``:S.find(t=>t.id===e)?.nome??``}function R(e){return`${o.diasCurtos[ee(e)]??``} ${r(e)}`}function z(){return{dia:R,pessoa:ze,vaga:o.testemunho.vaga}}function B(){let[e=0,t=1]=k.split(`-`).map(Number);return i(e,t)}function V(){return ve(C.filter(e=>e.congregacao_id===O))}function H(){let e=new Set(V().map(e=>e.id));return w.filter(t=>e.has(t.ponto_id))}function U(){let e=new Set(H().map(e=>e.id));return E.filter(t=>e.has(t.turno_id))}function W(){return _e(k,H(),V())}function G(){return U().filter(e=>e.data.slice(0,7)===k)}function K(){A=null,j=null,N=``,l()}async function Be(){let e=W(),t=G(),n=`${k}-01`;if(t.some(e=>e.travada===0&&e.pessoa_id!==null)&&!await m({titulo:o.testemunho.gerarTitulo,texto:o.testemunho.gerarTexto,rotuloConfirmar:o.testemunho.gerarDeNovo}))return;let r=he({horarios:e,candidatos:e=>v(e,S,T),ausente:(e,t)=>le(e,t,D),sexoDe:e=>S.find(t=>t.id===e)?.sexo??``,anteriores:U().filter(e=>e.data<n),atuais:t});try{await Ne(Se(r,t))}catch(e){console.error(`Testemunho: a geração falhou.`,e),f(o.testemunho.naoGerado,`danger`);return}let i=r.filter(e=>e.pessoa_id===null&&e.travada===0).length;f(i===0?o.testemunho.gerado:`${o.testemunho.gerado} ${o.testemunho.vagasVazias(i)}.`),await P(),l()}function Ve(t,n){let r=v(t.turno,S,T),i=new Set(r.map(e=>e.id)),s=S.filter(e=>e.id!==void 0&&!i.has(e.id)&&(e.ativo===1||e.id===n.pessoa_id)&&(e.congregacao_id===null||e.congregacao_id===O)).sort((e,t)=>_(e.nome,t.nome)),c=Te(U(),n.data),ee=new Set(U().filter(e=>e.data===n.data&&(e.turno_id!==n.turno_id||e.vaga!==n.vaga)&&e.pessoa_id!==null).map(e=>e.pessoa_id)),u=n.pessoa_id??0,d=!0,p=e=>{let t=c.get(e.id??0)??``;return[e.ativo===0?o.pautas.inativo(e.nome):e.nome,`—`,t===``?o.testemunho.nunca:o.testemunho.ultimaVez(a(t)),le(e.id??0,n.data,D)?`· ${o.testemunho.ausente}`:``,ee.has(e.id??0)?`· ${o.testemunho.jaNoDia}`:``].filter(e=>e!==``).join(` `)};te(o.testemunho.escolherTitulo(y(t,C),R(n.data)),!1,(t,n,i)=>e`
      <div class="formulario">
        <kk-select
          name="ocupante"
          label=${o.testemunho.quem}
          help-text=${r.length===0?o.testemunho.ninguemDisponivel:``}
          .value=${String(u)}
          @kk-change=${e=>{u=Number(I(e))||0,i()}}
        >
          <kk-option value="0">${o.testemunho.vagaVazia}</kk-option>
          ${r.map(t=>e`<kk-option value=${String(t.id)}>${p(t)}</kk-option>`)}
          ${s.map(t=>e`
              <kk-option value=${String(t.id)}>${p(t)} · ${o.testemunho.naoSeDispos}</kk-option>
            `)}
        </kk-select>
        <kk-switch
          name="travada"
          help-text=${o.testemunho.travadaAjuda}
          ?checked=${d}
          @kk-change=${e=>{d=L(e)}}
        >
          ${o.testemunho.travada}
        </kk-switch>
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${()=>t(!1)}>${o.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>t(!0)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    `,{formulario:!0,classe:`testemunho-escolha-dialogo`}).then(async e=>{if(e){try{await De({...n,pessoa_id:u===0?null:u,travada:+!!d})}catch(e){console.error(`Testemunho: a vaga não foi gravada.`,e),f(o.testemunho.celulaNaoSalva,`danger`);return}f(o.testemunho.celulaSalva),await P(),l()}})}async function He(){let e=o.testemunho.titulo(B()),t=Re()?.nome??``,r=b(W(),C,G(),z()),i=o.testemunho.rodape(n(Date.now()),Le),a=JSON.stringify([e,t,r,i]),s=re(a)??await ne(a);if(s===void 0)return;let c=de(e,t,r,i,s);try{let t=await se(c,o.testemunho.arquivo(k),`application/pdf`,e);t===`compartilhado`&&f(o.testemunho.compartilhado),t===`baixado`&&f(o.testemunho.baixado)}catch(e){console.error(`Testemunho: a entrega do PDF falhou.`,e),f(o.testemunho.naoCompartilhado,`danger`)}}function Ue(){let n=W(),r=[o.testemunho.titulo(B()),Re()?.nome??``].filter(e=>e!==``).join(` — `),i=fe(r,b(n,C,G(),z())),a=Ie(n,C,G(),z()),s=S.filter(e=>e.id!==void 0&&a.has(e.id)).sort((e,t)=>_(e.nome,t.nome));te(o.testemunho.enviar,null,()=>e`
      <div class="formulario testemunho-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void He()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${o.testemunho.pdf}
        </kk-button>
        <p class="caixas__ajuda">${o.testemunho.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(i)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${o.testemunho.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${o.testemunho.whatsappAjuda}</p>

        <h3 class="secao">${o.testemunho.lembretes}</h3>
        <p class="caixas__ajuda">${o.testemunho.lembretesAjuda}</p>
        ${s.length===0?e`<p class="vazio">${o.testemunho.semLembretes}</p>`:e`
              <div class="testemunho-envio__lembretes">
                ${s.map(n=>{let r=p(n.telefone),i=o.testemunho.lembrete(n.nome,B(),a.get(n.id??0)??[]);return e`
                    <kk-button
                      size="small"
                      data-lembrete=${n.id??0}
                      href=${r===``?t:`https://wa.me/${r}?text=${encodeURIComponent(i)}`}
                      target="_blank"
                      ?disabled=${r===``}
                    >
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
                      ${r===``?`${n.nome} (${o.testemunho.semTelefone})`:n.nome}
                    </kk-button>
                  `})}
              </div>
            `}
      </div>
    `,{classe:`testemunho-envio-dialogo`})}function We(n,r){let i=ze(r.pessoa_id);return e`
    <button
      type="button"
      class="testemunho__vaga"
      data-celula=${`${r.turno_id}-${r.vaga}`}
      ?data-vazia=${i===``}
      @click=${()=>Ve(n,r)}
    >
      ${r.travada===1?e`<kk-icon name="lock" label=${o.testemunho.travada}></kk-icon>`:t}
      ${i===``?o.testemunho.vaga:i}
    </button>
  `}function Ge(n,r){let i=G();return e`
    <section class="testemunho__dia" data-data=${n}>
      <h3 class="testemunho__titulo">${R(n)}</h3>
      ${r.map(n=>{let r=pe(n,i),a=we(r.map(e=>S.find(t=>t.id===e.pessoa_id)));return e`
          <div class="testemunho__linha" data-turno=${n.turno.id??0}>
            <span class="testemunho__horario">
              ${y(n,C)}
              ${a?e`<span class="testemunho__aviso">${o.testemunho.misto}</span>`:t}
            </span>
            <span class="testemunho__vagas">${r.map(e=>We(n,e))}</span>
          </div>
        `})}
    </section>
  `}function Ke(){if(H().length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="map-pin"></kk-icon>
        <p>${o.testemunho.semHorarios}</p>
        <kk-button variant="primary" @click=${()=>$(`pontos`)}>
          ${o.testemunho.irParaPontos}
        </kk-button>
      </div>
    `;let t=W(),n=[...new Set(t.map(e=>e.data))];return e`
    <div class="testemunho__mes">
      <kk-icon-button
        name="chevron-left"
        label=${o.testemunho.mesAnterior}
        @click=${()=>{k=c(k,-1),l()}}
      ></kk-icon-button>
      <h2 class="testemunho__nome-do-mes" aria-live="polite">${B()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${o.testemunho.mesSeguinte}
        @click=${()=>{k=c(k,1),l()}}
      ></kk-icon-button>
    </div>

    <div class="testemunho__acoes">
      <kk-button variant="primary" name="gerar" ?disabled=${t.length===0} @click=${()=>void Be()}>
        <kk-icon slot="prefix" name="arrows-shuffle"></kk-icon>${o.testemunho.gerar}
      </kk-button>
      <kk-button name="enviar" ?disabled=${G().length===0} @click=${Ue}>
        <kk-icon slot="prefix" name="send"></kk-icon>${o.testemunho.enviar}
      </kk-button>
    </div>
    <p class="caixas__ajuda">${o.testemunho.escalaAjuda}</p>

    ${n.length===0?e`<p class="vazio">${o.testemunho.semHorariosNoMes}</p>`:n.map(e=>Ge(e,t.filter(t=>t.data===e)))}
  `}function qe(e){A={...e},N=``,l()}function Je(){O!==null&&qe(xe(O))}function q(e){A!==null&&(A={...A,...e})}async function Ye(){if(A!==null){if(be(A)!==null)N=o.testemunho.pontoSemNome,l();else{try{await ke(A)}catch(e){console.error(`Testemunho: o ponto não foi gravado.`,e),f(o.testemunho.pontoNaoSalvo,`danger`);return}A=null,N=``,f(o.testemunho.pontoSalvo),await P(),l()}}}async function Xe(e){if(await m({titulo:o.testemunho.excluirPontoTitulo,texto:o.testemunho.excluirPontoTexto(w.filter(t=>t.ponto_id===e.id).length),rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await Ee(e.id)}catch(e){console.error(`Testemunho: o ponto não foi excluído.`,e),f(o.testemunho.pontoNaoExcluido,`danger`);return}A=null,await P(),l()}}function Ze(n){return e`
    <kk-dialog
      open
      class="ponto-form"
      label=${n.id===void 0?o.testemunho.novoPonto:o.testemunho.editarPonto}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&K()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${o.testemunho.nomeDoPonto}
          placeholder=${o.testemunho.nomeDoPontoExemplo}
          required
          .value=${n.nome}
          @kk-input=${e=>q({nome:I(e)})}
        ></kk-input>
        <kk-input
          name="observacao"
          label=${o.testemunho.observacao}
          help-text=${o.testemunho.observacaoAjuda}
          .value=${n.observacao}
          @kk-input=${e=>q({observacao:I(e)})}
        ></kk-input>
        <kk-switch
          name="ativo"
          help-text=${o.testemunho.ativoAjuda}
          ?checked=${n.ativo===1}
          @kk-change=${e=>q({ativo:+!!L(e)})}
        >
          ${o.testemunho.ativo}
        </kk-switch>
        ${N===``?t:e`<p class="erro" role="alert">${N}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&Xe(A)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${K}>${o.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void Ye()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function J(e){j={...e},M=new Set(T.filter(t=>t.turno_id===e.id).map(e=>e.pessoa_id)),N=``,l()}function Y(e){j!==null&&(j={...j,...e})}var Qe={sem_inicio:()=>o.testemunho.turnoSemInicio,fim_antes:()=>o.testemunho.turnoFimAntes};async function $e(){if(j===null)return;let e=me(j);if(e!==null)N=Qe[e](),l();else{try{await Fe(j,M,T)}catch(e){console.error(`Testemunho: o horário não foi gravado.`,e),f(o.testemunho.turnoNaoSalvo,`danger`);return}j=null,N=``,f(o.testemunho.turnoSalvo),await P(),l()}}async function et(e){if(await m({titulo:o.testemunho.excluirTurnoTitulo,texto:o.testemunho.excluirTurnoTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await je(e)}catch(e){console.error(`Testemunho: o horário não foi excluído.`,e),f(o.testemunho.turnoNaoExcluido,`danger`);return}j=null,await P(),l()}}var tt=[1,2,3,4,5,6,0];function nt(n){let r=S.filter(e=>e.id!==void 0&&(e.ativo===1||M.has(e.id))&&(e.congregacao_id===null||e.congregacao_id===O)).sort((e,t)=>_(e.nome,t.nome)),i=C.find(e=>e.id===n.ponto_id);return e`
    <kk-dialog
      open
      class="turno-form"
      label=${[n.id===void 0?o.testemunho.novoTurno:o.testemunho.editarTurno,i?.nome??``].filter(e=>e!==``).join(` — `)}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&K()}}
    >
      <div class="formulario">
        <kk-select
          name="dia_semana"
          label=${o.testemunho.diaDaSemana}
          .value=${String(n.dia_semana)}
          @kk-change=${e=>Y({dia_semana:Number(I(e))})}
        >
          ${tt.map(t=>e`<kk-option value=${String(t)}>${o.diasDaSemana[t]}</kk-option>`)}
        </kk-select>
        <div class="formulario__par">
          <kk-input
            name="inicio"
            type="time"
            label=${o.testemunho.inicio}
            .value=${n.inicio}
            @kk-change=${e=>Y({inicio:I(e)})}
          ></kk-input>
          <kk-input
            name="fim"
            type="time"
            label=${o.testemunho.fim}
            .value=${n.fim}
            @kk-change=${e=>Y({fim:I(e)})}
          ></kk-input>
        </div>
        <kk-input
          name="vagas"
          type="number"
          min="1"
          max=${`6`}
          inputmode="numeric"
          label=${o.testemunho.vagas}
          help-text=${o.testemunho.vagasAjuda}
          .value=${String(n.vagas)}
          @kk-input=${e=>Y({vagas:Number(I(e))||1})}
        ></kk-input>
        <fieldset class="caixas" data-grupo="disponiveis">
          <legend class="caixas__titulo">${o.testemunho.disponiveis}</legend>
          ${r.map(t=>e`
              <kk-checkbox
                value=${String(t.id)}
                ?checked=${M.has(t.id??0)}
                @kk-change=${e=>{L(e)?M.add(t.id??0):M.delete(t.id??0)}}
              >
                ${t.ativo===0?o.pautas.inativo(t.nome):t.nome}
              </kk-checkbox>
            `)}
          <p class="caixas__ajuda">
            ${r.length===0?o.testemunho.semPessoas:o.testemunho.disponiveisAjuda}
          </p>
        </fieldset>
        ${N===``?t:e`<p class="erro" role="alert">${N}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{j?.id!==void 0&&et(j.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${K}>${o.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void $e()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function rt(){let n=V();return n.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="map-pin"></kk-icon>
        <p>${o.testemunho.semPontos}</p>
        <kk-button variant="primary" @click=${Je}>${o.testemunho.novoPonto}</kk-button>
      </div>
    `:e`
    <p class="caixas__ajuda">${o.testemunho.pontosAjuda}</p>
    ${n.map(n=>{let r=ye(w.filter(e=>e.ponto_id===n.id));return e`
        <section class="testemunho__ponto" data-ponto=${n.id??0}>
          <button class="linha" data-editar-ponto @click=${()=>qe(n)}>
            <kk-icon class="linha__icone" name="map-pin"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">${n.nome}</span>
              <span class="linha__sub">${n.observacao}</span>
            </span>
            ${n.ativo===0?e`<span class="linha__selo">${o.testemunho.inativo}</span>`:t}
            <kk-icon class="linha__seta" name="pencil"></kk-icon>
          </button>
          <div class="lista testemunho__turnos">
            ${r.map(n=>{let r=v(n,S,T).length;return e`
                <button class="linha" data-turno=${n.id??0} @click=${()=>J(n)}>
                  <kk-icon class="linha__icone" name="clock"></kk-icon>
                  <span class="linha__texto">
                    <span class="linha__rotulo">
                      ${o.diasDaSemana[n.dia_semana]} · ${Ce(n)}
                    </span>
                    <span class="linha__sub">
                      ${o.testemunho.resumoDoTurno(n.vagas,r)}
                    </span>
                  </span>
                  ${r<n.vagas?e`<span class="linha__selo">${o.testemunho.poucos}</span>`:t}
                  <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                </button>
              `})}
          </div>
          <kk-button
            size="small"
            name="novo-horario"
            @click=${()=>J(ge(n.id??0))}
          >
            <kk-icon slot="prefix" name="plus"></kk-icon>${o.testemunho.novoTurno}
          </kk-button>
        </section>
      `})}
  `}var X=[`escala`,`pontos`],it={escala:`#/testemunho`,pontos:`#/testemunho/pontos`},at={escala:`calendar-user`,pontos:`map-pin`},Z=`escala`,Q=null;function $(e,t=!1){Z=e,history.replaceState(history.state,``,it[e]),l(),t&&document.querySelector(`#testemunho-aba-${e}`)?.focus()}function ot(e){let t=X.indexOf(Z),n=e.key===`ArrowRight`?X[(t+1)%X.length]:e.key===`ArrowLeft`?X[(t-1+X.length)%X.length]:e.key===`Home`?X[0]:e.key===`End`?X[X.length-1]:void 0;n!==void 0&&(e.preventDefault(),$(n,!0))}function st(){return e`
    <div class="chips" role="tablist" aria-label=${o.testemunho.abas}>
      ${X.map(t=>e`
          <button
            type="button"
            class="chip"
            role="tab"
            id=${`testemunho-aba-${t}`}
            aria-controls="testemunho-painel"
            aria-selected=${Z===t}
            tabindex=${Z===t?0:-1}
            ?data-ativo=${Z===t}
            @click=${()=>$(t)}
            @keydown=${ot}
          >
            <kk-icon name=${at[t]}></kk-icon>
            ${t===`pontos`?o.testemunho.abaPontos:o.testemunho.abaEscala}
          </button>
        `)}
    </div>
  `}function ct(){return x.length<2?t:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${o.testemunho.congregacao}
        .value=${String(O??0)}
        @kk-change=${e=>{let t=Number(I(e));O=Number.isInteger(t)&&t>0?t:O,l()}}
      >
        ${x.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}var lt={aoVoltar(){return A===null&&j===null?!1:(K(),!0)},acoes(){if(F.terminou&&O!==null&&Z===`pontos`)return e`
      <kk-icon-button name="plus" label=${o.testemunho.novoPonto} @click=${Je}></kk-icon-button>
    `},conteudo(n){let r=n.args.join(`/`);r!==Q&&(Z=n.args[0]===`pontos`?`pontos`:`escala`,Q=r);let i=F.espera();return i===null?x.length===0?e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${o.testemunho.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>d(`congregacoes`)}>
            ${o.testemunho.irParaCongregacoes}
          </kk-button>
        </div>
      `:e`
      ${ct()} ${st()}
      <div id="testemunho-painel" role="tabpanel" aria-labelledby=${`testemunho-aba-${Z}`}>
        ${Z===`pontos`?rt():Ke()}
      </div>
      ${A===null?t:Ze(A)}
      ${j===null?t:nt(j)}
    `:i}};export{lt as telaTestemunho};