import{i as e,t}from"./lit-CL39YOSA.js";import{c as n,d as r,f as i,l as a,n as o}from"./idioma-Dwpp7Zfu.js";import{c as s,u as c}from"./data-DpsiKWt9.js";import{o as l}from"./ordem-DhzYZk-u.js";import{c as u,d,f}from"./erro-FHfTMgeP.js";import{t as p}from"./notificar-BeOZKYlx.js";import{t as m}from"./contato-Dy5fPzpa.js";import{D as ee,O as h,b as te,j as g,k as _,x as ne}from"./index-sr-LlQKi.js";import{t as re}from"./carga-D_DL_FuH.js";import{t as ie}from"./dados-DStJu64q.js";import{t as ae}from"./dados-CSKvXkXq.js";import{t as oe}from"./compartilhar-CutlseMs.js";import{n as se}from"./dados-ClOHCwKW.js";import{C as v,T as ce,_ as le,a as ue,b as de,c as fe,h as pe,l as y,m as b,n as me,p as he,r as ge,t as _e,u as x,w as ve,x as ye}from"./regras-B0kA1dQ6.js";import{a as be,c as xe,i as Se,n as Ce,o as we,r as Te,s as Ee,t as De}from"./dados-DqyNB6J4.js";import{i as Oe}from"./dados-Dv6wgAFE.js";import{t as ke}from"./papel-BNuVkMEW.js";import{n as S,r as Ae,t as je}from"./relatorio-BQlu9PJf.js";var C=[],w=[],T=[],E=[],D=[],O=``,k=null,A=s(),j=null,M=null;async function N(){let e;[C,w,T,E,D,e]=await Promise.all([ie(),Oe(),ae(),Ce(),De(),se()]),O=e.nome.trim(),(k===null||!C.some(e=>e.id===k))&&(k=(C.find(t=>t.id===e.congregacao_id)??C[0])?.id??null)}var P=new re(`Programa`,N);d(`programa`,()=>{P.esquecer(),j=null,M=null});function F(e){return e.target.value}function I(e){let t=Number(F(e));return Number.isInteger(t)&&t>0?t:null}function L(){return C.find(e=>e.id===k)}function R(e){return e===null?``:T.find(t=>t.id===e)?.nome??``}function z(e){return`${o.diasCurtos[l(e)]??``} ${r(e)}`}function B(e){let t=C.find(t=>t.id===e.congregacao_id);return t===void 0?null:ue(e.semana,t,w)}function V(){return{dia:z,semana:e=>o.programa.semanaDe(r(e)),semReuniao:o.programa.semReuniao,secao:e=>o.programa.secoes[e],lugar:e=>o.programa.lugares[e],pessoa:R,cantico:e=>o.programa.cantico(e),oracao:o.programa.oracao,minutos:e=>o.programa.minutos(e),vago:o.programa.vago}}function H(){let[e=0,t=1]=A.split(`-`).map(Number);return i(e,t)}function Me(){return E.filter(e=>e.congregacao_id===k)}function U(e){return Me().find(t=>t.semana===e)}function W(e){let t=Number(e.args[0]),n=E.find(e=>e.id===t);return n?.id===void 0?void 0:n}function G(e){return D.filter(t=>t.programa_id===e.id)}function K(){return v(A).map(e=>U(e)).filter(e=>e!==void 0).map(e=>({programa:e,dia:B(e)}))}async function Ne(e){if(k===null)return;let t=e=>e===``?``:o.programa.titulosFixos[e];try{let n=await Te(de(k,e),pe(null,t));await N(),f(`programa/${n}`)}catch(e){console.error(`Programa: a semana não foi criada.`,e),p(o.programa.naoCriada,`danger`)}}async function Pe(){let e=o.programa.titulo(H()),t=K().map(({programa:e,dia:t})=>S(e,D,t,V())),r=L()?.nome??``,i=o.programa.rodape(n(Date.now()),O),a=JSON.stringify([e,r,t,i]),s=ne(a)??await te(a);if(s===void 0)return;let c=ke(e,r,t,i,s);try{let t=await oe(c,o.programa.arquivo(A),`application/pdf`,e);t===`compartilhado`&&p(o.programa.compartilhado),t===`baixado`&&p(o.programa.baixado)}catch(e){console.error(`Programa: a entrega do PDF falhou.`,e),p(o.programa.naoCompartilhado,`danger`)}}function Fe(){let n=K(),r=[o.programa.titulo(H()),L()?.nome??``].filter(e=>e!==``).join(` — `),i=Ae(r,n.map(({programa:e,dia:t})=>S(e,D,t,V()))),a=je(n,D,V()),s=T.filter(e=>e.id!==void 0&&a.has(e.id));ee(o.programa.enviar,null,()=>e`
      <div class="formulario programa-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void Pe()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${o.programa.pdf}
        </kk-button>
        <p class="caixas__ajuda">${o.programa.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(i)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${o.programa.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${o.programa.whatsappAjuda}</p>

        <h3 class="secao">${o.programa.avisos}</h3>
        <p class="caixas__ajuda">${o.programa.avisosAjuda}</p>
        ${s.length===0?e`<p class="vazio">${o.programa.semAvisos}</p>`:e`
              <div class="programa-envio__avisos">
                ${s.map(n=>{let r=m(n.telefone),i=o.programa.aviso(n.nome,H(),a.get(n.id??0)??[]);return e`
                    <kk-button
                      size="small"
                      data-aviso=${n.id??0}
                      href=${r===``?t:`https://wa.me/${r}?text=${encodeURIComponent(i)}`}
                      target="_blank"
                      ?disabled=${r===``}
                    >
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
                      ${r===``?`${n.nome} (${o.programa.semTelefone})`:n.nome}
                    </kk-button>
                  `})}
              </div>
            `}
      </div>
    `,{classe:`programa-envio-dialogo`})}function Ie(e){let t=G(e),n=+(e.presidente_id===null)+t.reduce((e,t)=>e+ +(t.pessoa_id===null)+(ve(t.tipo)&&t.ajudante_id===null?1:0),0);return[e.presidente_id===null?``:o.programa.presidePor(R(e.presidente_id)),o.programa.partes(t.length),n===0?``:o.programa.vagos(n)].filter(e=>e!==``).join(` · `)}function Le(t){let n=U(t),i=r(t);if(n===void 0)return e`
      <button class="linha" data-semana=${t} data-nova="" @click=${()=>void Ne(t)}>
        <kk-icon class="linha__icone" name="calendar-plus"></kk-icon>
        <span class="linha__texto">
          <span class="linha__rotulo">${o.programa.semanaDe(i)}</span>
          <span class="linha__sub">${o.programa.montar}</span>
        </span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>
    `;let a=B(n),s=[a===null?`${o.programa.semanaDe(i)} · ${o.programa.semReuniao}`:z(a),n.leitura].filter(e=>e!==``).join(` · `);return e`
    <button
      class="linha"
      data-semana=${t}
      data-programa=${n.id??0}
      @click=${()=>f(`programa/${n.id}`)}
    >
      <kk-icon class="linha__icone" name="book-2"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${s}</span>
        <span class="linha__sub">${Ie(n)}</span>
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function Re(){if(C.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
        <p>${o.programa.semCongregacao}</p>
        <kk-button variant="primary" @click=${()=>f(`congregacoes`)}>
          ${o.programa.irParaCongregacoes}
        </kk-button>
      </div>
    `;let n=L(),r=n!==void 0&&n.dia_meio_de_semana===null,i=K().length;return e`
    ${C.length<2?t:e`
          <div class="filtros">
            <kk-select
              name="congregacao"
              label=${o.programa.congregacao}
              .value=${String(k??0)}
              @kk-change=${e=>{k=I(e)??k,u()}}
            >
              ${C.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
            </kk-select>
          </div>
        `}

    <div class="programa-mes">
      <kk-icon-button
        name="chevron-left"
        label=${o.programa.mesAnterior}
        @click=${()=>{A=c(A,-1),u()}}
      ></kk-icon-button>
      <h2 class="programa-mes__nome" aria-live="polite">${H()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${o.programa.mesSeguinte}
        @click=${()=>{A=c(A,1),u()}}
      ></kk-icon-button>
    </div>

    ${r?e`<p class="caixas__ajuda">${o.programa.semDia}</p>`:t}

    <div class="lista">${v(A).map(Le)}</div>

    <div class="programa-acoes">
      <kk-button name="enviar" ?disabled=${i===0} @click=${Fe}>
        <kk-icon slot="prefix" name="send"></kk-icon>${o.programa.enviar}
      </kk-button>
    </div>
  `}function ze(e){return e===`estudante`||e===`ajudante`||e===`leitura`?[`estudante`,`ajudante`,`leitura`]:[e]}function q(e,t){let n=new Set,r=e=>{e!==null&&n.add(e)};t.campo!==`presidente_id`&&r(e.presidente_id),t.campo!==`oracao_inicial_id`&&r(e.oracao_inicial_id),t.campo!==`oracao_final_id`&&r(e.oracao_final_id);for(let n of G(e))n.id!==t.parte&&(r(n.pessoa_id),r(n.ajudante_id));return n}function J(t){let n=ye(t.lugar,T,t.programa.congregacao_id),r=t.atual===null||n.some(e=>e.id===t.atual)?n:[...T.filter(e=>e.id===t.atual),...n],i=ze(t.lugar),s=le(r,t.hist,i,t.programa.semana);return e`
    <kk-select
      name=${t.nome}
      label=${t.rotulo}
      help-text=${t.ajuda??``}
      .value=${String(t.atual??0)}
      @kk-change=${e=>t.aoEscolher(I(e))}
    >
      <kk-option value="0">${o.programa.ninguem}</kk-option>
      ${s.map(n=>{let r=ce(t.hist.get(n.id??0),i,t.programa.semana),s=[n.ativo===0?o.pautas.inativo(n.nome):n.nome,`—`,r===``?o.programa.nunca:o.programa.ultimaVez(a(r)),t.ocupados.has(n.id??0)?`· ${o.programa.jaNaSemana}`:``].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(n.id)}>${s}</kk-option>`})}
    </kk-select>
  `}function Y(e){j!==null&&(j={...j,...e})}function X(){j=null,M=null,u()}async function Be(e){try{await xe(e)}catch(e){console.error(`Programa: o cabeçalho não foi gravado.`,e),p(o.programa.naoSalvo,`danger`);return}j=null,p(o.programa.salvo),await N(),u()}function Z(t,n,r){return e`
    <kk-input
      name=${t}
      type="number"
      min="1"
      max="999"
      inputmode="numeric"
      label=${n}
      .value=${r[t]===null?``:String(r[t])}
      @kk-input=${e=>{let n=Number(F(e));Y({[t]:Number.isInteger(n)&&n>0?n:null})}}
    ></kk-input>
  `}function Ve(t){let n=y(E,D),r=(e,r,i)=>J({nome:e,rotulo:r,lugar:i,programa:t,atual:t[e],ocupados:q(t,{campo:e}),hist:n,aoEscolher:t=>Y({[e]:t})});return e`
    <kk-dialog
      open
      class="programa-form"
      label=${o.programa.editarCabecalho}
      @kk-request-close=${g}
      @kk-initial-focus=${_}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&X()}}
    >
      <div class="formulario">
        <kk-input
          name="leitura"
          label=${o.programa.leitura}
          placeholder=${o.programa.leituraPlaceholder}
          .value=${t.leitura}
          @kk-input=${e=>Y({leitura:F(e)})}
        ></kk-input>
        ${r(`presidente_id`,o.programa.lugares.presidente,`presidente`)}
        <div class="formulario__par">
          ${Z(`cantico_inicial`,o.programa.canticoInicial,t)}
          ${r(`oracao_inicial_id`,o.programa.oracaoInicial,`oracao`)}
        </div>
        ${Z(`cantico_meio`,o.programa.canticoMeio,t)}
        <div class="formulario__par">
          ${Z(`cantico_final`,o.programa.canticoFinal,t)}
          ${r(`oracao_final_id`,o.programa.oracaoFinal,`oracao`)}
        </div>
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${X}>${o.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{j!==null&&Be(j)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Q(e){M!==null&&(M={...M,...e})}async function He(e){try{await Ee(e)}catch(e){console.error(`Programa: a parte não foi gravada.`,e),p(o.programa.parteNaoSalva,`danger`);return}M=null,p(o.programa.parteSalva),await N(),u()}async function Ue(e){if(await h({titulo:o.programa.excluirParteTitulo,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await Se(e)}catch(e){console.error(`Programa: a parte não foi excluída.`,e),p(o.programa.parteNaoExcluida,`danger`);return}M=null,await N(),u()}}function We(n,r){let i=y(E,D),a=q(r,n.id===void 0?{}:{parte:n.id}),{primeiro:s,segundo:c}=x(n.tipo),l=T.find(e=>e.id===n.pessoa_id),d=T.find(e=>e.id===n.ajudante_id),f=n.tipo===`estudante`&&ge(l,d);return e`
    <kk-dialog
      open
      class="parte-form"
      label=${n.id===void 0?o.programa.novaParte:o.programa.editarParte}
      @kk-request-close=${g}
      @kk-initial-focus=${_}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&X()}}
    >
      <div class="formulario">
        <kk-input
          name="titulo"
          label=${o.programa.tituloDaParte}
          .value=${n.titulo}
          @kk-input=${e=>Q({titulo:F(e)})}
        ></kk-input>
        <div class="formulario__par">
          <kk-select
            name="tipo"
            label=${o.programa.tipo}
            .value=${n.tipo}
            @kk-change=${e=>{let t=F(e);fe(t)&&Q({tipo:t}),u()}}
          >
            ${me.map(t=>e`<kk-option value=${t}>${o.programa.tipos[t]}</kk-option>`)}
          </kk-select>
          <kk-input
            name="duracao"
            type="number"
            min="0"
            max="120"
            inputmode="numeric"
            label=${o.programa.duracao}
            .value=${n.duracao_min===0?``:String(n.duracao_min)}
            @kk-input=${e=>Q({duracao_min:Number(F(e))||0})}
          ></kk-input>
        </div>
        ${J({nome:`pessoa`,rotulo:o.programa.lugares[s],lugar:s,programa:r,atual:n.pessoa_id,ocupados:a,hist:i,aoEscolher:e=>{Q({pessoa_id:e}),u()}})}
        ${c===null?t:J({nome:`ajudante`,rotulo:o.programa.lugares[c],...f?{ajuda:o.programa.outroSexo}:{},lugar:c,programa:r,atual:n.ajudante_id,ocupados:a,hist:i,aoEscolher:e=>{Q({ajudante_id:e}),u()}})}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{M?.id!==void 0&&Ue(M.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${X}>${o.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{M!==null&&He(M)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function $(e,t,n,r){let i=b(G(e),t),a=i.findIndex(e=>e.id===n),s=i[a+r],c=i[a];if(s!==void 0&&c!==void 0){i[a]=s,i[a+r]=c;try{await we(i)}catch(e){console.error(`Programa: a ordem não foi gravada.`,e),p(o.app.acaoFalhou,`danger`);return}await N(),u()}}async function Ge(e){if(await h({titulo:o.programa.excluirTitulo,texto:o.programa.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await be(e.id)}catch(e){console.error(`Programa: a semana não foi excluída.`,e),p(o.programa.naoExcluida,`danger`);return}await N(),f(`programa`)}}function Ke(t){let n=[[o.programa.leitura,t.leitura],[o.programa.lugares.presidente,R(t.presidente_id)],[o.programa.oracaoInicial,R(t.oracao_inicial_id)],[o.programa.oracaoFinal,R(t.oracao_final_id)],[o.programa.canticos,[t.cantico_inicial,t.cantico_meio,t.cantico_final].filter(e=>e!==null).join(` · `)]];return e`
    <section class="programa-cabecalho">
      <dl class="programa-dados">
        ${n.map(([t,n])=>e`
            <div class="programa-dados__par">
              <dt>${t}</dt>
              <dd>${n||o.programa.vago}</dd>
            </div>
          `)}
      </dl>
      <kk-button size="small" name="cabecalho" @click=${()=>{j={...t},u()}}>
        <kk-icon slot="prefix" name="pencil"></kk-icon>${o.programa.editarCabecalho}
      </kk-button>
    </section>
  `}function qe(t,n,r){let i=b(G(t),n);return e`
    <section class="programa-secao" data-secao=${n}>
      <h3 class="secao">${o.programa.secoes[n]}</h3>
      <div class="lista">
        ${i.map((a,s)=>{let{primeiro:c,segundo:l}=x(a.tipo),d=[`${o.programa.lugares[c]}: ${R(a.pessoa_id)||o.programa.vago}`,l===null?``:`${o.programa.lugares[l]}: ${R(a.ajudante_id)||o.programa.vago}`,a.duracao_min>0?o.programa.minutos(a.duracao_min):``].filter(e=>e!==``),f=a.pessoa_id===null||l!==null&&a.ajudante_id===null;return e`
            <div class="programa-parte" data-parte=${a.id??0} ?data-vaga=${f}>
              <span class="programa-parte__numero">${r+s}</span>
              <button class="programa-parte__corpo" @click=${()=>{M={...a},u()}}>
                <span class="programa-parte__titulo">${a.titulo||o.programa.semTitulo}</span>
                <span class="programa-parte__sub">${d.join(` · `)}</span>
              </button>
              <kk-icon-button
                name="arrow-up"
                label=${o.programa.subir}
                ?disabled=${s===0}
                @click=${()=>void $(t,n,a.id??0,-1)}
              ></kk-icon-button>
              <kk-icon-button
                name="arrow-down"
                label=${o.programa.descer}
                ?disabled=${s===i.length-1}
                @click=${()=>void $(t,n,a.id??0,1)}
              ></kk-icon-button>
            </div>
          `})}
      </div>
      <kk-button size="small" name=${`nova-${n}`} @click=${()=>{M=he(t.id,n,(i.at(-1)?.sequencia??0)+1),u()}}>
        <kk-icon slot="prefix" name="plus"></kk-icon>${o.programa.adicionarParte}
      </kk-button>
    </section>
  `}function Je(n){let r=1,i=_e.map(e=>{let t=qe(n,e,r);return r+=b(G(n),e).length,t});return e`
    ${Ke(n)} ${i}
    <div class="programa-acoes">
      <kk-button class="dialogo__excluir" variant="danger" outline @click=${()=>void Ge(n)}>
        <kk-icon slot="prefix" name="trash"></kk-icon>${o.programa.excluir}
      </kk-button>
    </div>
    ${j===null?t:Ve(j)}
    ${M===null?t:We(M,n)}
  `}function Ye(){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${o.programa.naoEncontrada}</h2>
      <kk-button @click=${()=>f(`programa`)}>${o.programa.voltarALista}</kk-button>
    </div>
  `}var Xe={titulo(e){if(e.args.length===0||!P.terminou)return;let t=W(e);if(t===void 0)return;let n=B(t);return n===null?o.programa.semanaDe(r(t.semana)):o.programa.reuniaoDe(z(n))},voltarPara(e){return e.args.length===0?`home`:`programa`},aoVoltar(){return j===null&&M===null?!1:(X(),!0)},conteudo(e){let t=P.espera();if(t!==null)return t;if(e.args.length===0)return Re();let n=W(e);return n===void 0?Ye():Je(n)}};export{Xe as telaPrograma};