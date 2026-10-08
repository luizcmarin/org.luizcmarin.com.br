import{_ as e,c as t,d as n,f as r,m as i}from"./erro-Bc0C-0ww.js";import{d as a,m as o,n as s,p as ee,u as c}from"./idioma-CVgIQtmc.js";import{c as te,u as l}from"./data-DpsiKWt9.js";import{i as u,t as d}from"./ordem-Dku36xny.js";import{t as f}from"./notificar-BeOZKYlx.js";import{t as p}from"./contato-Dy5fPzpa.js";import{S as m,b as h,d as ne,f as re,v as g,y as _}from"./index-CCl639Mp.js";import{t as ie}from"./carga-N4u32e31.js";import{t as ae}from"./dados-CAIyjVFG.js";import{t as oe}from"./dados-9wsuHbxQ.js";import{t as se}from"./compartilhar-CutlseMs.js";import{n as ce}from"./dados-gu31gVbW.js";import{o as le}from"./regras-De2a5D-E.js";import{n as ue}from"./dados-Bm_DqIIt.js";import{t as de}from"./papel-kXKxXeCB.js";import{r as fe}from"./relatorio-pDw8OXjy.js";import{S as pe,_ as me,a as he,b as ge,c as _e,d as ve,f as ye,g as be,h as xe,l as Se,n as v,o as Ce,s as we,x as Te}from"./regras-YSePeBWG.js";import{a as Ee,c as De,i as Oe,l as ke,n as Ae,o as je,r as Me,s as Ne,t as Pe,u as Fe}from"./dados-Do9N1s7X.js";import{n as Ie,r as y,t as b}from"./relatorio-BM8ZdKvd.js";var x=[],S=[],C=[],w=[],T=[],E=[],D=[],Le=``,O=null,k=te(),A=null,j=null,M=new Set,N=``;async function P(){let e;[x,S,C,w,T,E,D,e]=await Promise.all([ae(),oe(),Me(),Oe(),Ae(),Pe(),ue(),ce()]),Le=e.nome.trim(),(O===null||!x.some(e=>e.id===O))&&(O=(x.find(t=>t.id===e.congregacao_id)??x[0])?.id??null)}var F=new ie(`Testemunho público`,P);n(`testemunho`,()=>{F.esquecer(),A=null,j=null,Q=null});function I(e){return e.target.value}function L(e){return e.target.checked}function Re(){return x.find(e=>e.id===O)}function ze(e){return e===null?``:S.find(t=>t.id===e)?.nome??``}function R(e){return`${s.diasCurtos[u(e)]??``} ${ee(e)}`}function z(){return{dia:R,pessoa:ze,vaga:s.testemunho.vaga}}function B(){let[e=0,t=1]=k.split(`-`).map(Number);return o(e,t)}function V(){return ve(C.filter(e=>e.congregacao_id===O))}function H(){let e=new Set(V().map(e=>e.id));return w.filter(t=>e.has(t.ponto_id))}function U(){let e=new Set(H().map(e=>e.id));return E.filter(t=>e.has(t.turno_id))}function W(){return _e(k,H(),V())}function G(){return U().filter(e=>e.data.slice(0,7)===k)}function K(){A=null,j=null,N=``,t()}async function Be(){let e=W(),n=G(),r=`${k}-01`;if(n.some(e=>e.travada===0&&e.pessoa_id!==null)&&!await _({titulo:s.testemunho.gerarTitulo,texto:s.testemunho.gerarTexto,rotuloConfirmar:s.testemunho.gerarDeNovo}))return;let i=he({horarios:e,candidatos:e=>v(e,S,T),ausente:(e,t)=>le(e,t,D),sexoDe:e=>S.find(t=>t.id===e)?.sexo??``,anteriores:U().filter(e=>e.data<r),atuais:n});try{await Ne(Se(i,n))}catch(e){console.error(`Testemunho: a geração falhou.`,e),f(s.testemunho.naoGerado,`danger`);return}let a=i.filter(e=>e.pessoa_id===null&&e.travada===0).length;f(a===0?s.testemunho.gerado:`${s.testemunho.gerado} ${s.testemunho.vagasVazias(a)}.`),await P(),t()}function Ve(n,r){let i=v(n.turno,S,T),o=new Set(i.map(e=>e.id)),ee=S.filter(e=>e.id!==void 0&&!o.has(e.id)&&(e.ativo===1||e.id===r.pessoa_id)&&(e.congregacao_id===null||e.congregacao_id===O)).sort((e,t)=>d(e.nome,t.nome)),c=Te(U(),r.data),te=new Set(U().filter(e=>e.data===r.data&&(e.turno_id!==r.turno_id||e.vaga!==r.vaga)&&e.pessoa_id!==null).map(e=>e.pessoa_id)),l=r.pessoa_id??0,u=!0,p=e=>{let t=c.get(e.id??0)??``;return[e.ativo===0?s.pautas.inativo(e.nome):e.nome,`—`,t===``?s.testemunho.nunca:s.testemunho.ultimaVez(a(t)),le(e.id??0,r.data,D)?`· ${s.testemunho.ausente}`:``,te.has(e.id??0)?`· ${s.testemunho.jaNoDia}`:``].filter(e=>e!==``).join(` `)};g(s.testemunho.escolherTitulo(y(n,C),R(r.data)),!1,(t,n,r)=>e`
      <div class="formulario">
        <kk-select
          name="ocupante"
          label=${s.testemunho.quem}
          help-text=${i.length===0?s.testemunho.ninguemDisponivel:``}
          .value=${String(l)}
          @kk-change=${e=>{l=Number(I(e))||0,r()}}
        >
          <kk-option value="0">${s.testemunho.vagaVazia}</kk-option>
          ${i.map(t=>e`<kk-option value=${String(t.id)}>${p(t)}</kk-option>`)}
          ${ee.map(t=>e`
              <kk-option value=${String(t.id)}>${p(t)} · ${s.testemunho.naoSeDispos}</kk-option>
            `)}
        </kk-select>
        <kk-switch
          name="travada"
          help-text=${s.testemunho.travadaAjuda}
          ?checked=${u}
          @kk-change=${e=>{u=L(e)}}
        >
          ${s.testemunho.travada}
        </kk-switch>
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${()=>t(!1)}>${s.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>t(!0)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    `,{formulario:!0,classe:`testemunho-escolha-dialogo`}).then(async e=>{if(e){try{await De({...r,pessoa_id:l===0?null:l,travada:+!!u})}catch(e){console.error(`Testemunho: a vaga não foi gravada.`,e),f(s.testemunho.celulaNaoSalva,`danger`);return}f(s.testemunho.celulaSalva),await P(),t()}})}async function He(){let e=s.testemunho.titulo(B()),t=Re()?.nome??``,n=b(W(),C,G(),z()),r=s.testemunho.rodape(c(Date.now()),Le),i=JSON.stringify([e,t,n,r]),a=re(i)??await ne(i);if(a===void 0)return;let o=de(e,t,n,r,a);try{let t=await se(o,s.testemunho.arquivo(k),`application/pdf`,e);t===`compartilhado`&&f(s.testemunho.compartilhado),t===`baixado`&&f(s.testemunho.baixado)}catch(e){console.error(`Testemunho: a entrega do PDF falhou.`,e),f(s.testemunho.naoCompartilhado,`danger`)}}function Ue(){let t=W(),n=[s.testemunho.titulo(B()),Re()?.nome??``].filter(e=>e!==``).join(` — `),r=fe(n,b(t,C,G(),z())),a=Ie(t,C,G(),z()),o=S.filter(e=>e.id!==void 0&&a.has(e.id)).sort((e,t)=>d(e.nome,t.nome));g(s.testemunho.enviar,null,()=>e`
      <div class="formulario testemunho-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void He()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${s.testemunho.pdf}
        </kk-button>
        <p class="caixas__ajuda">${s.testemunho.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(r)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${s.testemunho.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${s.testemunho.whatsappAjuda}</p>

        <h3 class="secao">${s.testemunho.lembretes}</h3>
        <p class="caixas__ajuda">${s.testemunho.lembretesAjuda}</p>
        ${o.length===0?e`<p class="vazio">${s.testemunho.semLembretes}</p>`:e`
              <div class="testemunho-envio__lembretes">
                ${o.map(t=>{let n=p(t.telefone),r=s.testemunho.lembrete(t.nome,B(),a.get(t.id??0)??[]);return e`
                    <kk-button
                      size="small"
                      data-lembrete=${t.id??0}
                      href=${n===``?i:`https://wa.me/${n}?text=${encodeURIComponent(r)}`}
                      target="_blank"
                      ?disabled=${n===``}
                    >
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
                      ${n===``?`${t.nome} (${s.testemunho.semTelefone})`:t.nome}
                    </kk-button>
                  `})}
              </div>
            `}
      </div>
    `,{classe:`testemunho-envio-dialogo`})}function We(t,n){let r=ze(n.pessoa_id);return e`
    <button
      type="button"
      class="testemunho__vaga"
      data-celula=${`${n.turno_id}-${n.vaga}`}
      ?data-vazia=${r===``}
      @click=${()=>Ve(t,n)}
    >
      ${n.travada===1?e`<kk-icon name="lock" label=${s.testemunho.travada}></kk-icon>`:i}
      ${r===``?s.testemunho.vaga:r}
    </button>
  `}function Ge(t,n){let r=G();return e`
    <section class="testemunho__dia" data-data=${t}>
      <h3 class="testemunho__titulo">${R(t)}</h3>
      ${n.map(t=>{let n=pe(t,r),a=we(n.map(e=>S.find(t=>t.id===e.pessoa_id)));return e`
          <div class="testemunho__linha" data-turno=${t.turno.id??0}>
            <span class="testemunho__horario">
              ${y(t,C)}
              ${a?e`<span class="testemunho__aviso">${s.testemunho.misto}</span>`:i}
            </span>
            <span class="testemunho__vagas">${n.map(e=>We(t,e))}</span>
          </div>
        `})}
    </section>
  `}function Ke(){if(H().length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="map-pin"></kk-icon>
        <p>${s.testemunho.semHorarios}</p>
        <kk-button variant="primary" @click=${()=>$(`pontos`)}>
          ${s.testemunho.irParaPontos}
        </kk-button>
      </div>
    `;let n=W(),r=[...new Set(n.map(e=>e.data))];return e`
    <div class="testemunho__mes">
      <kk-icon-button
        name="chevron-left"
        label=${s.testemunho.mesAnterior}
        @click=${()=>{k=l(k,-1),t()}}
      ></kk-icon-button>
      <h2 class="testemunho__nome-do-mes" aria-live="polite">${B()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${s.testemunho.mesSeguinte}
        @click=${()=>{k=l(k,1),t()}}
      ></kk-icon-button>
    </div>

    <div class="testemunho__acoes">
      <kk-button variant="primary" name="gerar" ?disabled=${n.length===0} @click=${()=>void Be()}>
        <kk-icon slot="prefix" name="arrows-shuffle"></kk-icon>${s.testemunho.gerar}
      </kk-button>
      <kk-button name="enviar" ?disabled=${G().length===0} @click=${Ue}>
        <kk-icon slot="prefix" name="send"></kk-icon>${s.testemunho.enviar}
      </kk-button>
    </div>
    <p class="caixas__ajuda">${s.testemunho.escalaAjuda}</p>

    ${r.length===0?e`<p class="vazio">${s.testemunho.semHorariosNoMes}</p>`:r.map(e=>Ge(e,n.filter(t=>t.data===e)))}
  `}function qe(e){A={...e},N=``,t()}function Je(){O!==null&&qe(xe(O))}function q(e){A!==null&&(A={...A,...e})}async function Ye(){if(A!==null){if(be(A)!==null)N=s.testemunho.pontoSemNome,t();else{try{await ke(A)}catch(e){console.error(`Testemunho: o ponto não foi gravado.`,e),f(s.testemunho.pontoNaoSalvo,`danger`);return}A=null,N=``,f(s.testemunho.pontoSalvo),await P(),t()}}}async function Xe(e){if(await _({titulo:s.testemunho.excluirPontoTitulo,texto:s.testemunho.excluirPontoTexto(w.filter(t=>t.ponto_id===e.id).length),rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await Ee(e.id)}catch(e){console.error(`Testemunho: o ponto não foi excluído.`,e),f(s.testemunho.pontoNaoExcluido,`danger`);return}A=null,await P(),t()}}function Ze(t){return e`
    <kk-dialog
      open
      class="ponto-form"
      label=${t.id===void 0?s.testemunho.novoPonto:s.testemunho.editarPonto}
      @kk-request-close=${m}
      @kk-initial-focus=${h}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&K()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${s.testemunho.nomeDoPonto}
          placeholder=${s.testemunho.nomeDoPontoExemplo}
          required
          .value=${t.nome}
          @kk-input=${e=>q({nome:I(e)})}
        ></kk-input>
        <kk-input
          name="observacao"
          label=${s.testemunho.observacao}
          help-text=${s.testemunho.observacaoAjuda}
          .value=${t.observacao}
          @kk-input=${e=>q({observacao:I(e)})}
        ></kk-input>
        <kk-switch
          name="ativo"
          help-text=${s.testemunho.ativoAjuda}
          ?checked=${t.ativo===1}
          @kk-change=${e=>q({ativo:+!!L(e)})}
        >
          ${s.testemunho.ativo}
        </kk-switch>
        ${N===``?i:e`<p class="erro" role="alert">${N}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${t.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&Xe(A)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${s.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${K}>${s.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void Ye()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function J(e){j={...e},M=new Set(T.filter(t=>t.turno_id===e.id).map(e=>e.pessoa_id)),N=``,t()}function Y(e){j!==null&&(j={...j,...e})}var Qe={sem_inicio:()=>s.testemunho.turnoSemInicio,fim_antes:()=>s.testemunho.turnoFimAntes};async function $e(){if(j===null)return;let e=me(j);if(e!==null)N=Qe[e](),t();else{try{await Fe(j,M,T)}catch(e){console.error(`Testemunho: o horário não foi gravado.`,e),f(s.testemunho.turnoNaoSalvo,`danger`);return}j=null,N=``,f(s.testemunho.turnoSalvo),await P(),t()}}async function et(e){if(await _({titulo:s.testemunho.excluirTurnoTitulo,texto:s.testemunho.excluirTurnoTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await je(e)}catch(e){console.error(`Testemunho: o horário não foi excluído.`,e),f(s.testemunho.turnoNaoExcluido,`danger`);return}j=null,await P(),t()}}var tt=[1,2,3,4,5,6,0];function nt(t){let n=S.filter(e=>e.id!==void 0&&(e.ativo===1||M.has(e.id))&&(e.congregacao_id===null||e.congregacao_id===O)).sort((e,t)=>d(e.nome,t.nome)),r=C.find(e=>e.id===t.ponto_id);return e`
    <kk-dialog
      open
      class="turno-form"
      label=${[t.id===void 0?s.testemunho.novoTurno:s.testemunho.editarTurno,r?.nome??``].filter(e=>e!==``).join(` — `)}
      @kk-request-close=${m}
      @kk-initial-focus=${h}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&K()}}
    >
      <div class="formulario">
        <kk-select
          name="dia_semana"
          label=${s.testemunho.diaDaSemana}
          .value=${String(t.dia_semana)}
          @kk-change=${e=>Y({dia_semana:Number(I(e))})}
        >
          ${tt.map(t=>e`<kk-option value=${String(t)}>${s.diasDaSemana[t]}</kk-option>`)}
        </kk-select>
        <div class="formulario__par">
          <kk-input
            name="inicio"
            type="time"
            label=${s.testemunho.inicio}
            .value=${t.inicio}
            @kk-change=${e=>Y({inicio:I(e)})}
          ></kk-input>
          <kk-input
            name="fim"
            type="time"
            label=${s.testemunho.fim}
            .value=${t.fim}
            @kk-change=${e=>Y({fim:I(e)})}
          ></kk-input>
        </div>
        <kk-input
          name="vagas"
          type="number"
          min="1"
          max=${`6`}
          inputmode="numeric"
          label=${s.testemunho.vagas}
          help-text=${s.testemunho.vagasAjuda}
          .value=${String(t.vagas)}
          @kk-input=${e=>Y({vagas:Number(I(e))||1})}
        ></kk-input>
        <fieldset class="caixas" data-grupo="disponiveis">
          <legend class="caixas__titulo">${s.testemunho.disponiveis}</legend>
          ${n.map(t=>e`
              <kk-checkbox
                value=${String(t.id)}
                ?checked=${M.has(t.id??0)}
                @kk-change=${e=>{L(e)?M.add(t.id??0):M.delete(t.id??0)}}
              >
                ${t.ativo===0?s.pautas.inativo(t.nome):t.nome}
              </kk-checkbox>
            `)}
          <p class="caixas__ajuda">
            ${n.length===0?s.testemunho.semPessoas:s.testemunho.disponiveisAjuda}
          </p>
        </fieldset>
        ${N===``?i:e`<p class="erro" role="alert">${N}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${t.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{j?.id!==void 0&&et(j.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${s.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${K}>${s.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void $e()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function rt(){let t=V();return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="map-pin"></kk-icon>
        <p>${s.testemunho.semPontos}</p>
        <kk-button variant="primary" @click=${Je}>${s.testemunho.novoPonto}</kk-button>
      </div>
    `:e`
    <p class="caixas__ajuda">${s.testemunho.pontosAjuda}</p>
    ${t.map(t=>{let n=ye(w.filter(e=>e.ponto_id===t.id));return e`
        <section class="testemunho__ponto" data-ponto=${t.id??0}>
          <button class="linha" data-editar-ponto @click=${()=>qe(t)}>
            <kk-icon class="linha__icone" name="map-pin"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">${t.nome}</span>
              <span class="linha__sub">${t.observacao}</span>
            </span>
            ${t.ativo===0?e`<span class="linha__selo">${s.testemunho.inativo}</span>`:i}
            <kk-icon class="linha__seta" name="pencil"></kk-icon>
          </button>
          <div class="lista testemunho__turnos">
            ${n.map(t=>{let n=v(t,S,T).length;return e`
                <button class="linha" data-turno=${t.id??0} @click=${()=>J(t)}>
                  <kk-icon class="linha__icone" name="clock"></kk-icon>
                  <span class="linha__texto">
                    <span class="linha__rotulo">
                      ${s.diasDaSemana[t.dia_semana]} · ${Ce(t)}
                    </span>
                    <span class="linha__sub">
                      ${s.testemunho.resumoDoTurno(t.vagas,n)}
                    </span>
                  </span>
                  ${n<t.vagas?e`<span class="linha__selo">${s.testemunho.poucos}</span>`:i}
                  <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                </button>
              `})}
          </div>
          <kk-button
            size="small"
            name="novo-horario"
            @click=${()=>J(ge(t.id??0))}
          >
            <kk-icon slot="prefix" name="plus"></kk-icon>${s.testemunho.novoTurno}
          </kk-button>
        </section>
      `})}
  `}var X=[`escala`,`pontos`],it={escala:`#/testemunho`,pontos:`#/testemunho/pontos`},at={escala:`calendar-user`,pontos:`map-pin`},Z=`escala`,Q=null;function $(e,n=!1){Z=e,history.replaceState(history.state,``,it[e]),t(),n&&document.querySelector(`#testemunho-aba-${e}`)?.focus()}function ot(e){let t=X.indexOf(Z),n=e.key===`ArrowRight`?X[(t+1)%X.length]:e.key===`ArrowLeft`?X[(t-1+X.length)%X.length]:e.key===`Home`?X[0]:e.key===`End`?X[X.length-1]:void 0;n!==void 0&&(e.preventDefault(),$(n,!0))}function st(){return e`
    <div class="chips" role="tablist" aria-label=${s.testemunho.abas}>
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
            ${t===`pontos`?s.testemunho.abaPontos:s.testemunho.abaEscala}
          </button>
        `)}
    </div>
  `}function ct(){return x.length<2?i:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${s.testemunho.congregacao}
        .value=${String(O??0)}
        @kk-change=${e=>{let n=Number(I(e));O=Number.isInteger(n)&&n>0?n:O,t()}}
      >
        ${x.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}var lt={aoVoltar(){return A===null&&j===null?!1:(K(),!0)},acoes(){if(F.terminou&&O!==null&&Z===`pontos`)return e`
      <kk-icon-button name="plus" label=${s.testemunho.novoPonto} @click=${Je}></kk-icon-button>
    `},conteudo(t){let n=t.args.join(`/`);n!==Q&&(Z=t.args[0]===`pontos`?`pontos`:`escala`,Q=n);let a=F.espera();return a===null?x.length===0?e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${s.testemunho.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>r(`congregacoes`)}>
            ${s.testemunho.irParaCongregacoes}
          </kk-button>
        </div>
      `:e`
      ${ct()} ${st()}
      <div id="testemunho-painel" role="tabpanel" aria-labelledby=${`testemunho-aba-${Z}`}>
        ${Z===`pontos`?rt():Ke()}
      </div>
      ${A===null?i:Ze(A)}
      ${j===null?i:nt(j)}
    `:a}};export{lt as telaTestemunho};