import{_ as e,c as t,d as n,f as r,m as i}from"./erro-Bc0C-0ww.js";import{d as a,m as o,n as s,p as c,u as l}from"./idioma-CVgIQtmc.js";import{c as u,u as d}from"./data-DpsiKWt9.js";import{i as f}from"./ordem-Dku36xny.js";import{t as p}from"./notificar-BeOZKYlx.js";import{t as m}from"./contato-Dy5fPzpa.js";import{S as h,b as g,d as ee,f as te,v as ne,y as _}from"./index-CCl639Mp.js";import{t as re}from"./carga-N4u32e31.js";import{t as ie}from"./dados-CAIyjVFG.js";import{t as ae}from"./dados-9wsuHbxQ.js";import{t as oe}from"./compartilhar-CutlseMs.js";import{n as se}from"./dados-gu31gVbW.js";import{C as v,T as ce,_ as le,a as ue,b as de,c as fe,h as pe,l as y,m as b,n as me,p as he,r as ge,t as _e,u as x,w as ve,x as ye}from"./regras-DnFPo7QE.js";import{a as be,c as xe,i as Se,n as Ce,o as we,r as Te,s as Ee,t as De}from"./dados-DAFMQxTe.js";import{i as Oe}from"./dados-Bm_DqIIt.js";import{t as ke}from"./papel-CtsfYfoX.js";import{n as S,r as Ae,t as je}from"./relatorio-Bj5TZrV2.js";var C=[],w=[],T=[],E=[],D=[],O=``,k=null,A=u(),j=null,M=null;async function N(){let e;[C,w,T,E,D,e]=await Promise.all([ie(),Oe(),ae(),Ce(),De(),se()]),O=e.nome.trim(),(k===null||!C.some(e=>e.id===k))&&(k=(C.find(t=>t.id===e.congregacao_id)??C[0])?.id??null)}var P=new re(`Programa`,N);n(`programa`,()=>{P.esquecer(),j=null,M=null});function F(e){return e.target.value}function I(e){let t=Number(F(e));return Number.isInteger(t)&&t>0?t:null}function L(){return C.find(e=>e.id===k)}function R(e){return e===null?``:T.find(t=>t.id===e)?.nome??``}function z(e){return`${s.diasCurtos[f(e)]??``} ${c(e)}`}function B(e){let t=C.find(t=>t.id===e.congregacao_id);return t===void 0?null:ue(e.semana,t,w)}function V(){return{dia:z,semana:e=>s.programa.semanaDe(c(e)),semReuniao:s.programa.semReuniao,secao:e=>s.programa.secoes[e],lugar:e=>s.programa.lugares[e],pessoa:R,cantico:e=>s.programa.cantico(e),oracao:s.programa.oracao,minutos:e=>s.programa.minutos(e),vago:s.programa.vago}}function H(){let[e=0,t=1]=A.split(`-`).map(Number);return o(e,t)}function Me(){return E.filter(e=>e.congregacao_id===k)}function U(e){return Me().find(t=>t.semana===e)}function W(e){let t=Number(e.args[0]),n=E.find(e=>e.id===t);return n?.id===void 0?void 0:n}function G(e){return D.filter(t=>t.programa_id===e.id)}function K(){return v(A).map(e=>U(e)).filter(e=>e!==void 0).map(e=>({programa:e,dia:B(e)}))}async function Ne(e){if(k===null)return;let t=e=>e===``?``:s.programa.titulosFixos[e];try{let n=await Te(de(k,e),pe(null,t));await N(),r(`programa/${n}`)}catch(e){console.error(`Programa: a semana não foi criada.`,e),p(s.programa.naoCriada,`danger`)}}async function Pe(){let e=s.programa.titulo(H()),t=K().map(({programa:e,dia:t})=>S(e,D,t,V())),n=L()?.nome??``,r=s.programa.rodape(l(Date.now()),O),i=JSON.stringify([e,n,t,r]),a=te(i)??await ee(i);if(a===void 0)return;let o=ke(e,n,t,r,a);try{let t=await oe(o,s.programa.arquivo(A),`application/pdf`,e);t===`compartilhado`&&p(s.programa.compartilhado),t===`baixado`&&p(s.programa.baixado)}catch(e){console.error(`Programa: a entrega do PDF falhou.`,e),p(s.programa.naoCompartilhado,`danger`)}}function Fe(){let t=K(),n=[s.programa.titulo(H()),L()?.nome??``].filter(e=>e!==``).join(` — `),r=Ae(n,t.map(({programa:e,dia:t})=>S(e,D,t,V()))),a=je(t,D,V()),o=T.filter(e=>e.id!==void 0&&a.has(e.id));ne(s.programa.enviar,null,()=>e`
      <div class="formulario programa-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void Pe()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${s.programa.pdf}
        </kk-button>
        <p class="caixas__ajuda">${s.programa.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(r)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${s.programa.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${s.programa.whatsappAjuda}</p>

        <h3 class="secao">${s.programa.avisos}</h3>
        <p class="caixas__ajuda">${s.programa.avisosAjuda}</p>
        ${o.length===0?e`<p class="vazio">${s.programa.semAvisos}</p>`:e`
              <div class="programa-envio__avisos">
                ${o.map(t=>{let n=m(t.telefone),r=s.programa.aviso(t.nome,H(),a.get(t.id??0)??[]);return e`
                    <kk-button
                      size="small"
                      data-aviso=${t.id??0}
                      href=${n===``?i:`https://wa.me/${n}?text=${encodeURIComponent(r)}`}
                      target="_blank"
                      ?disabled=${n===``}
                    >
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
                      ${n===``?`${t.nome} (${s.programa.semTelefone})`:t.nome}
                    </kk-button>
                  `})}
              </div>
            `}
      </div>
    `,{classe:`programa-envio-dialogo`})}function Ie(e){let t=G(e),n=+(e.presidente_id===null)+t.reduce((e,t)=>e+ +(t.pessoa_id===null)+(ve(t.tipo)&&t.ajudante_id===null?1:0),0);return[e.presidente_id===null?``:s.programa.presidePor(R(e.presidente_id)),s.programa.partes(t.length),n===0?``:s.programa.vagos(n)].filter(e=>e!==``).join(` · `)}function Le(t){let n=U(t),i=c(t);if(n===void 0)return e`
      <button class="linha" data-semana=${t} data-nova="" @click=${()=>void Ne(t)}>
        <kk-icon class="linha__icone" name="calendar-plus"></kk-icon>
        <span class="linha__texto">
          <span class="linha__rotulo">${s.programa.semanaDe(i)}</span>
          <span class="linha__sub">${s.programa.montar}</span>
        </span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>
    `;let a=B(n),o=[a===null?`${s.programa.semanaDe(i)} · ${s.programa.semReuniao}`:z(a),n.leitura].filter(e=>e!==``).join(` · `);return e`
    <button
      class="linha"
      data-semana=${t}
      data-programa=${n.id??0}
      @click=${()=>r(`programa/${n.id}`)}
    >
      <kk-icon class="linha__icone" name="book-2"></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${o}</span>
        <span class="linha__sub">${Ie(n)}</span>
      </span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function Re(){if(C.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
        <p>${s.programa.semCongregacao}</p>
        <kk-button variant="primary" @click=${()=>r(`congregacoes`)}>
          ${s.programa.irParaCongregacoes}
        </kk-button>
      </div>
    `;let n=L(),a=n!==void 0&&n.dia_meio_de_semana===null,o=K().length;return e`
    ${C.length<2?i:e`
          <div class="filtros">
            <kk-select
              name="congregacao"
              label=${s.programa.congregacao}
              .value=${String(k??0)}
              @kk-change=${e=>{k=I(e)??k,t()}}
            >
              ${C.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
            </kk-select>
          </div>
        `}

    <div class="programa-mes">
      <kk-icon-button
        name="chevron-left"
        label=${s.programa.mesAnterior}
        @click=${()=>{A=d(A,-1),t()}}
      ></kk-icon-button>
      <h2 class="programa-mes__nome" aria-live="polite">${H()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${s.programa.mesSeguinte}
        @click=${()=>{A=d(A,1),t()}}
      ></kk-icon-button>
    </div>

    ${a?e`<p class="caixas__ajuda">${s.programa.semDia}</p>`:i}

    <div class="lista">${v(A).map(Le)}</div>

    <div class="programa-acoes">
      <kk-button name="enviar" ?disabled=${o===0} @click=${Fe}>
        <kk-icon slot="prefix" name="send"></kk-icon>${s.programa.enviar}
      </kk-button>
    </div>
  `}function ze(e){return e===`estudante`||e===`ajudante`||e===`leitura`?[`estudante`,`ajudante`,`leitura`]:[e]}function q(e,t){let n=new Set,r=e=>{e!==null&&n.add(e)};t.campo!==`presidente_id`&&r(e.presidente_id),t.campo!==`oracao_inicial_id`&&r(e.oracao_inicial_id),t.campo!==`oracao_final_id`&&r(e.oracao_final_id);for(let n of G(e))n.id!==t.parte&&(r(n.pessoa_id),r(n.ajudante_id));return n}function J(t){let n=ye(t.lugar,T,t.programa.congregacao_id),r=t.atual===null||n.some(e=>e.id===t.atual)?n:[...T.filter(e=>e.id===t.atual),...n],i=ze(t.lugar),o=le(r,t.hist,i,t.programa.semana);return e`
    <kk-select
      name=${t.nome}
      label=${t.rotulo}
      help-text=${t.ajuda??``}
      .value=${String(t.atual??0)}
      @kk-change=${e=>t.aoEscolher(I(e))}
    >
      <kk-option value="0">${s.programa.ninguem}</kk-option>
      ${o.map(n=>{let r=ce(t.hist.get(n.id??0),i,t.programa.semana),o=[n.ativo===0?s.pautas.inativo(n.nome):n.nome,`—`,r===``?s.programa.nunca:s.programa.ultimaVez(a(r)),t.ocupados.has(n.id??0)?`· ${s.programa.jaNaSemana}`:``].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(n.id)}>${o}</kk-option>`})}
    </kk-select>
  `}function Y(e){j!==null&&(j={...j,...e})}function X(){j=null,M=null,t()}async function Be(e){try{await xe(e)}catch(e){console.error(`Programa: o cabeçalho não foi gravado.`,e),p(s.programa.naoSalvo,`danger`);return}j=null,p(s.programa.salvo),await N(),t()}function Z(t,n,r){return e`
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
      label=${s.programa.editarCabecalho}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&X()}}
    >
      <div class="formulario">
        <kk-input
          name="leitura"
          label=${s.programa.leitura}
          placeholder=${s.programa.leituraPlaceholder}
          .value=${t.leitura}
          @kk-input=${e=>Y({leitura:F(e)})}
        ></kk-input>
        ${r(`presidente_id`,s.programa.lugares.presidente,`presidente`)}
        <div class="formulario__par">
          ${Z(`cantico_inicial`,s.programa.canticoInicial,t)}
          ${r(`oracao_inicial_id`,s.programa.oracaoInicial,`oracao`)}
        </div>
        ${Z(`cantico_meio`,s.programa.canticoMeio,t)}
        <div class="formulario__par">
          ${Z(`cantico_final`,s.programa.canticoFinal,t)}
          ${r(`oracao_final_id`,s.programa.oracaoFinal,`oracao`)}
        </div>
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${X}>${s.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{j!==null&&Be(j)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Q(e){M!==null&&(M={...M,...e})}async function He(e){try{await Ee(e)}catch(e){console.error(`Programa: a parte não foi gravada.`,e),p(s.programa.parteNaoSalva,`danger`);return}M=null,p(s.programa.parteSalva),await N(),t()}async function Ue(e){if(await _({titulo:s.programa.excluirParteTitulo,rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await Se(e)}catch(e){console.error(`Programa: a parte não foi excluída.`,e),p(s.programa.parteNaoExcluida,`danger`);return}M=null,await N(),t()}}function We(n,r){let a=y(E,D),o=q(r,n.id===void 0?{}:{parte:n.id}),{primeiro:c,segundo:l}=x(n.tipo),u=T.find(e=>e.id===n.pessoa_id),d=T.find(e=>e.id===n.ajudante_id),f=n.tipo===`estudante`&&ge(u,d);return e`
    <kk-dialog
      open
      class="parte-form"
      label=${n.id===void 0?s.programa.novaParte:s.programa.editarParte}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&X()}}
    >
      <div class="formulario">
        <kk-input
          name="titulo"
          label=${s.programa.tituloDaParte}
          .value=${n.titulo}
          @kk-input=${e=>Q({titulo:F(e)})}
        ></kk-input>
        <div class="formulario__par">
          <kk-select
            name="tipo"
            label=${s.programa.tipo}
            .value=${n.tipo}
            @kk-change=${e=>{let n=F(e);fe(n)&&Q({tipo:n}),t()}}
          >
            ${me.map(t=>e`<kk-option value=${t}>${s.programa.tipos[t]}</kk-option>`)}
          </kk-select>
          <kk-input
            name="duracao"
            type="number"
            min="0"
            max="120"
            inputmode="numeric"
            label=${s.programa.duracao}
            .value=${n.duracao_min===0?``:String(n.duracao_min)}
            @kk-input=${e=>Q({duracao_min:Number(F(e))||0})}
          ></kk-input>
        </div>
        ${J({nome:`pessoa`,rotulo:s.programa.lugares[c],lugar:c,programa:r,atual:n.pessoa_id,ocupados:o,hist:a,aoEscolher:e=>{Q({pessoa_id:e}),t()}})}
        ${l===null?i:J({nome:`ajudante`,rotulo:s.programa.lugares[l],...f?{ajuda:s.programa.outroSexo}:{},lugar:l,programa:r,atual:n.ajudante_id,ocupados:o,hist:a,aoEscolher:e=>{Q({ajudante_id:e}),t()}})}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{M?.id!==void 0&&Ue(M.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${s.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${X}>${s.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{M!==null&&He(M)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function $(e,n,r,i){let a=b(G(e),n),o=a.findIndex(e=>e.id===r),c=a[o+i],l=a[o];if(c!==void 0&&l!==void 0){a[o]=c,a[o+i]=l;try{await we(a)}catch(e){console.error(`Programa: a ordem não foi gravada.`,e),p(s.app.acaoFalhou,`danger`);return}await N(),t()}}async function Ge(e){if(await _({titulo:s.programa.excluirTitulo,texto:s.programa.excluirTexto,rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await be(e.id)}catch(e){console.error(`Programa: a semana não foi excluída.`,e),p(s.programa.naoExcluida,`danger`);return}await N(),r(`programa`)}}function Ke(n){let r=[[s.programa.leitura,n.leitura],[s.programa.lugares.presidente,R(n.presidente_id)],[s.programa.oracaoInicial,R(n.oracao_inicial_id)],[s.programa.oracaoFinal,R(n.oracao_final_id)],[s.programa.canticos,[n.cantico_inicial,n.cantico_meio,n.cantico_final].filter(e=>e!==null).join(` · `)]];return e`
    <section class="programa-cabecalho">
      <dl class="programa-dados">
        ${r.map(([t,n])=>e`
            <div class="programa-dados__par">
              <dt>${t}</dt>
              <dd>${n||s.programa.vago}</dd>
            </div>
          `)}
      </dl>
      <kk-button size="small" name="cabecalho" @click=${()=>{j={...n},t()}}>
        <kk-icon slot="prefix" name="pencil"></kk-icon>${s.programa.editarCabecalho}
      </kk-button>
    </section>
  `}function qe(n,r,i){let a=b(G(n),r);return e`
    <section class="programa-secao" data-secao=${r}>
      <h3 class="secao">${s.programa.secoes[r]}</h3>
      <div class="lista">
        ${a.map((o,c)=>{let{primeiro:l,segundo:u}=x(o.tipo),d=[`${s.programa.lugares[l]}: ${R(o.pessoa_id)||s.programa.vago}`,u===null?``:`${s.programa.lugares[u]}: ${R(o.ajudante_id)||s.programa.vago}`,o.duracao_min>0?s.programa.minutos(o.duracao_min):``].filter(e=>e!==``),f=o.pessoa_id===null||u!==null&&o.ajudante_id===null;return e`
            <div class="programa-parte" data-parte=${o.id??0} ?data-vaga=${f}>
              <span class="programa-parte__numero">${i+c}</span>
              <button class="programa-parte__corpo" @click=${()=>{M={...o},t()}}>
                <span class="programa-parte__titulo">${o.titulo||s.programa.semTitulo}</span>
                <span class="programa-parte__sub">${d.join(` · `)}</span>
              </button>
              <kk-icon-button
                name="arrow-up"
                label=${s.programa.subir}
                ?disabled=${c===0}
                @click=${()=>void $(n,r,o.id??0,-1)}
              ></kk-icon-button>
              <kk-icon-button
                name="arrow-down"
                label=${s.programa.descer}
                ?disabled=${c===a.length-1}
                @click=${()=>void $(n,r,o.id??0,1)}
              ></kk-icon-button>
            </div>
          `})}
      </div>
      <kk-button size="small" name=${`nova-${r}`} @click=${()=>{M=he(n.id,r,(a.at(-1)?.sequencia??0)+1),t()}}>
        <kk-icon slot="prefix" name="plus"></kk-icon>${s.programa.adicionarParte}
      </kk-button>
    </section>
  `}function Je(t){let n=1,r=_e.map(e=>{let r=qe(t,e,n);return n+=b(G(t),e).length,r});return e`
    ${Ke(t)} ${r}
    <div class="programa-acoes">
      <kk-button class="dialogo__excluir" variant="danger" outline @click=${()=>void Ge(t)}>
        <kk-icon slot="prefix" name="trash"></kk-icon>${s.programa.excluir}
      </kk-button>
    </div>
    ${j===null?i:Ve(j)}
    ${M===null?i:We(M,t)}
  `}function Ye(){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${s.programa.naoEncontrada}</h2>
      <kk-button @click=${()=>r(`programa`)}>${s.programa.voltarALista}</kk-button>
    </div>
  `}var Xe={titulo(e){if(e.args.length===0||!P.terminou)return;let t=W(e);if(t===void 0)return;let n=B(t);return n===null?s.programa.semanaDe(c(t.semana)):s.programa.reuniaoDe(z(n))},voltarPara(e){return e.args.length===0?`home`:`programa`},aoVoltar(){return j===null&&M===null?!1:(X(),!0)},conteudo(e){let t=P.espera();if(t!==null)return t;if(e.args.length===0)return Re();let n=W(e);return n===void 0?Ye():Je(n)}};export{Xe as telaPrograma};