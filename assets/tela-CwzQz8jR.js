import{i as e,t}from"./lit-CL39YOSA.js";import{c as n,d as r,f as i,l as a,n as o,u as s}from"./idioma-Dwpp7Zfu.js";import{c,r as l,u}from"./data-DpsiKWt9.js";import{o as d}from"./ordem-DhzYZk-u.js";import{n as ee}from"./texto-CuPUCLMw.js";import{c as f,d as te,f as ne}from"./erro-FHfTMgeP.js";import{t as p}from"./notificar-BeOZKYlx.js";import{r as re,t as ie}from"./contato-Dy5fPzpa.js";import{D as ae,O as m,b as oe,j as h,k as g,x as se}from"./index-BTSbEGH1.js";import{t as ce}from"./carga-D_DL_FuH.js";import{t as le}from"./dados-DpvHxc9k.js";import{t as ue}from"./dados-B8yFq1N-.js";import{t as de}from"./compartilhar-CutlseMs.js";import{n as fe}from"./dados-BmiN3zt1.js";import{T as pe,_ as me}from"./regras-B0kA1dQ6.js";import{A as he,C as ge,D as _e,E as ve,M as ye,O as be,S as xe,T as Se,a as Ce,b as _,c as we,d as Te,f as Ee,g as De,h as Oe,i as ke,j as Ae,k as je,l as Me,m as Ne,n as Pe,o as Fe,p as Ie,r as Le,s as Re,t as ze,u as Be,w as Ve,x as He}from"./dados--CoVPZdv.js";import{i as Ue}from"./dados-DMtTZehl.js";import{t as We}from"./papel-CHK5F6i_.js";import{r as Ge}from"./relatorio-BQlu9PJf.js";import{a as Ke,i as qe,n as Je,r as Ye,t as Xe}from"./relatorio-BxgcReBC.js";var v=[],y=[],b=[],x=[],S=[],C=[],Ze=``,w=null,T=c(),E=null,D=`casa`,O=_(),k=``,A=null,j=null,M=``,N=!1,P=``;async function F(){let e;[v,y,b,x,S,C,e]=await Promise.all([le(),Ue(),ue(),Pe(),Le(),ze(),fe()]),Ze=e.nome.trim(),(w===null||!v.some(e=>e.id===w))&&(w=(v.find(t=>t.id===e.congregacao_id)??v[0])?.id??null)}var I=new ce(`Reunião pública`,F);te(`publica`,()=>{I.esquecer(),E=null,A=null,j=null,$=null});function L(e){return e.target.value}function R(e){let t=Number(L(e));return Number.isInteger(t)&&t>0?t:null}function Qe(e){let t=Number(L(e));return Number.isInteger(t)&&t>0?t:null}function z(){return v.find(e=>e.id===w)}function B(e){return e===null?``:b.find(t=>t.id===e)?.nome??``}function $e(e){let t=e===null?void 0:x.find(t=>t.id===e);return t===void 0?``:t.congregacao===``?t.nome:`${t.nome} (${t.congregacao})`}function V(e){return`${o.diasCurtos[d(e)]??``} ${r(e)}`}function H(e){let t=v.find(t=>t.id===e.congregacao_id);return t===void 0?null:Ee(e.semana,t,y)}function U(){return{dia:V,semana:e=>o.publica.semanaDe(r(e)),semReuniao:o.publica.semReuniao,discurso:(e,t)=>o.publica.discurso(e,t),discursoSemTema:o.publica.discursoSemTema,presidente:o.publica.presidente,leitor:o.publica.leitor,hospitalidade:o.publica.hospitalidade,observacao:o.publica.observacao,pessoa:B,visitante:$e,vago:o.publica.vago,enviados:o.publica.abaEnviados,destino:(e,t)=>t===``?e:`${e}, ${t}`}}function W(){let[e=0,t=1]=T.split(`-`).map(Number);return i(e,t)}function et(){return S.filter(e=>e.congregacao_id===w)}function tt(e){return et().find(t=>t.semana===e)}function nt(){let e=z();return e===void 0?[]:je(T,e)}function G(){return nt().map(e=>tt(e)).filter(e=>e!==void 0).map(e=>({reuniao:e,dia:H(e)}))}function rt(){return C.filter(e=>e.congregacao_id===w)}function K(){return rt().filter(e=>e.data.slice(0,7)===T)}function q(){E=null,A=null,j=null,M=``,f()}function it(t){let n=Ve(t.lugar,b,t.congregacaoId),r=t.atual===null||n.some(e=>e.id===t.atual)?n:[...b.filter(e=>e.id===t.atual),...n],i=Oe(S,C),s=me(r,i,[t.lugar],t.antesDe);return e`
    <kk-select
      name=${t.nome}
      label=${t.rotulo}
      help-text=${t.ajuda??``}
      .value=${String(t.atual??0)}
      @kk-change=${e=>t.aoEscolher(R(e))}
    >
      <kk-option value="0">${o.publica.ninguem}</kk-option>
      ${s.map(n=>{let r=pe(i.get(n.id??0),[t.lugar],t.antesDe),s=t.contra(n.id??0),c=[n.ativo===0?o.pautas.inativo(n.nome):n.nome,`—`,r===``?o.publica.nunca:o.publica.ultimaVez(a(r)),s===``?``:`· ${s}`].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(n.id)}>${c}</kk-option>`})}
    </kk-select>
  `}function at(e){E={...e},D=e.visitante_id===null?`casa`:`fora`,O=_(),k=``,N=!1,M=``,f()}function J(e){E!==null&&(E={...E,...e})}function ot(e){if(E===null)return;let t={numero:e};(E.tema===``||E.tema===k)&&(k=he(e,S,C),t.tema=k),J(t),f()}async function st(){if(E===null)return;let e=E,t=null;if(D===`casa`&&(e={...e,visitante_id:null}),D===`fora`&&(e={...e,orador_id:null}),D===`novo`){if(ve(O)!==null){M=o.publica.oradorSemNome,f();return}t=O,e={...e,orador_id:null,visitante_id:null}}try{await Me(e,t)}catch(e){console.error(`Reunião pública: a reunião não foi gravada.`,e),p(o.publica.naoSalva,`danger`);return}E=null,M=``,p(o.publica.salva),await F(),f()}async function ct(e){if(await m({titulo:o.publica.excluirTitulo,texto:o.publica.excluirTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await Fe(e)}catch(e){console.error(`Reunião pública: a reunião não foi excluída.`,e),p(o.publica.naoExcluida,`danger`);return}E=null,await F(),f()}}function lt(e,t){return new Set([`orador_id`,`presidente_id`,`leitor_id`].filter(e=>e!==t).map(t=>e[t]).filter(e=>e!==null))}function ut(){return e`
    <kk-select
      name="origem"
      label=${o.publica.origem}
      .value=${D}
      @kk-change=${e=>{let t=L(e);D=t===`fora`||t===`novo`?t:`casa`,M=``,f()}}
    >
      <kk-option value="casa">${o.publica.origens.casa}</kk-option>
      <kk-option value="fora">${o.publica.origens.fora}</kk-option>
      <kk-option value="novo">${o.publica.origens.novo}</kk-option>
    </kk-select>
  `}function dt(t){let n=ye(x,t.visitante_id),r=Ae(S);return e`
    <kk-select
      name="visitante"
      label=${o.publica.oradorDeFora}
      help-text=${n.length===0?o.publica.semOradoresDeFora:``}
      .value=${String(t.visitante_id??0)}
      @kk-change=${e=>{J({visitante_id:R(e)}),f()}}
    >
      <kk-option value="0">${o.publica.ninguem}</kk-option>
      ${n.map(n=>{let i=(r.get(n.id??0)??[]).find(e=>e<t.semana)??``,s=[n.ativo===0?o.pautas.inativo(n.nome):n.nome,n.congregacao===``?``:`(${n.congregacao})`,`—`,i===``?o.publica.nuncaAqui:o.publica.ultimaVezAqui(a(i))].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(n.id)}>${s}</kk-option>`})}
    </kk-select>
  `}function ft(){let t=N&&O.telefone.trim()!==``&&!re(O.telefone);return e`
    <fieldset class="publica-novo">
      <legend>${o.publica.origens.novo}</legend>
      <kk-input
        name="novo_nome"
        label=${o.publica.nome}
        required
        .value=${O.nome}
        @kk-input=${e=>{O={...O,nome:L(e)}}}
      ></kk-input>
      <kk-input
        name="novo_congregacao"
        label=${o.publica.congregacaoDeOrigem}
        .value=${O.congregacao}
        @kk-input=${e=>{O={...O,congregacao:L(e)}}}
      ></kk-input>
      <kk-input
        name="novo_telefone"
        type="tel"
        inputmode="tel"
        label=${o.publica.telefone}
        help-text=${t?o.publica.telefoneDuvidoso:o.publica.telefoneAjuda}
        .value=${O.telefone}
        @kk-input=${e=>{O={...O,telefone:L(e)}}}
        @kk-blur=${()=>{N=!0,f()}}
      ></kk-input>
    </fieldset>
  `}function pt(n){let i=H(n),s=i===null?o.publica.semanaDe(r(n.semana)):V(i),c=Ne(C),l=(e,t)=>i!==null&&c.has(`${e}|${i}`)?o.publica.foraNoDia:lt(n,t).has(e)?o.publica.jaNaReuniao:``,u=ge(n,S),d=(e,t,r)=>it({nome:e.replace(`_id`,``),rotulo:r,lugar:t,congregacaoId:n.congregacao_id,antesDe:n.semana,atual:n[e],contra:t=>l(t,e),aoEscolher:t=>{J({[e]:t}),f()}});return e`
    <kk-dialog
      open
      class="publica-form"
      label=${o.publica.reuniaoDe(s)}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <div class="formulario__par">
          <kk-input
            name="numero"
            type="number"
            min="1"
            max="999"
            inputmode="numeric"
            label=${o.publica.numero}
            .value=${n.numero===null?``:String(n.numero)}
            @kk-input=${e=>ot(Qe(e))}
          ></kk-input>
          <kk-input
            name="tema"
            label=${o.publica.tema}
            help-text=${u.length===0?``:o.publica.temaRepetido(u.slice(0,3).map(e=>a(e)))}
            .value=${n.tema}
            @kk-input=${e=>J({tema:L(e)})}
          ></kk-input>
        </div>

        ${ut()}
        ${D===`casa`?d(`orador_id`,`orador`,o.publica.oradorDaCasa):D===`fora`?dt(n):ft()}
        ${d(`presidente_id`,`presidente`,o.publica.presidente)}
        ${d(`leitor_id`,`leitor`,o.publica.leitor)}
        ${D===`casa`?t:it({nome:`hospitalidade`,rotulo:o.publica.hospitalidade,ajuda:o.publica.hospitalidadeAjuda,lugar:`hospitalidade`,congregacaoId:n.congregacao_id,antesDe:n.semana,atual:n.hospitalidade_id,contra:()=>``,aoEscolher:e=>J({hospitalidade_id:e})})}
        <kk-input
          name="observacao"
          label=${o.publica.observacao}
          help-text=${o.publica.observacaoAjuda}
          .value=${n.observacao}
          @kk-input=${e=>J({observacao:L(e)})}
        ></kk-input>
        ${M===``?t:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{E?.id!==void 0&&ct(E.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${o.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void st()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function mt(){let e=G().map(({reuniao:e,dia:t})=>Ke(e,t,U())),t=Ye(K(),U());return t===null?e:[...e,t]}async function ht(){let e=o.publica.titulo(W()),t=z()?.nome??``,r=mt(),i=o.publica.rodape(n(Date.now()),Ze),a=JSON.stringify([e,t,r,i]),s=se(a)??await oe(a);if(s===void 0)return;let c=We(e,t,r,i,s);try{let t=await de(c,o.publica.arquivo(T),`application/pdf`,e);t===`compartilhado`&&p(o.publica.compartilhado),t===`baixado`&&p(o.publica.baixado)}catch(e){console.error(`Reunião pública: a entrega do PDF falhou.`,e),p(o.publica.naoCompartilhado,`danger`)}}function gt(n,r,i,a,s){let c=ie(a);return e`
    <kk-button
      size="small"
      data-aviso=${`${n}${r}`}
      href=${c===``?t:`https://wa.me/${c}?text=${encodeURIComponent(s)}`}
      target="_blank"
      ?disabled=${c===``}
    >
      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
      ${c===``?`${i} (${o.publica.semTelefone})`:i}
    </kk-button>
  `}function _t(){let t=G(),n=[o.publica.titulo(W()),z()?.nome??``].filter(e=>e!==``).join(` — `),r=Ge(n,mt()),i=Xe(t,K(),U()),a=Je(t,z()?.hora_fim_de_semana??``,U()),s=b.filter(e=>e.id!==void 0&&i.has(e.id)),c=xe(x.filter(e=>e.id!==void 0&&a.has(e.id)));ae(o.publica.enviar,null,()=>e`
      <div class="formulario publica-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void ht()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${o.publica.pdf}
        </kk-button>
        <p class="caixas__ajuda">${o.publica.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(r)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${o.publica.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${o.publica.whatsappAjuda}</p>

        <h3 class="secao">${o.publica.avisos}</h3>
        <p class="caixas__ajuda">${o.publica.avisosAjuda}</p>
        ${s.length===0?e`<p class="vazio">${o.publica.semAvisos}</p>`:e`
              <div class="publica-envio__avisos">
                ${s.map(e=>gt(`p`,e.id??0,e.nome,e.telefone,o.publica.aviso(e.nome,W(),i.get(e.id??0)??[])))}
              </div>
            `}

        <h3 class="secao">${o.publica.convites}</h3>
        <p class="caixas__ajuda">${o.publica.convitesAjuda}</p>
        ${c.length===0?e`<p class="vazio">${o.publica.semConvites}</p>`:e`
              <div class="publica-envio__avisos">
                ${c.map(e=>gt(`v`,e.id??0,e.nome,e.telefone,o.publica.convite(e.nome,z()?.nome??``,a.get(e.id??0)??[])))}
              </div>
            `}
      </div>
    `,{classe:`publica-envio-dialogo`})}function vt(e){let t=qe(e,U());return[t===``?o.publica.semOrador:t,e.presidente_id===null?``:`${o.publica.presidente}: ${B(e.presidente_id)}`,e.leitor_id===null?``:`${o.publica.leitor}: ${B(e.leitor_id)}`].filter(e=>e!==``).join(` · `)}function yt(n){let i=z();if(i===void 0||w===null)return e``;let a=tt(n),s=Ee(n,i,y),c=s===null?`${o.publica.semanaDe(r(n))} · ${o.publica.semReuniao}`:V(s);if(a===void 0||_e(a)){let t=a??be(w,n);return e`
      <button class="linha" data-semana=${n} data-por-marcar="" @click=${()=>at(t)}>
        <kk-icon class="linha__icone" name="calendar-plus"></kk-icon>
        <span class="linha__texto">
          <span class="linha__rotulo">${c}</span>
          <span class="linha__sub">${o.publica.porMarcar}</span>
        </span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>
    `}let l=o.publica.discurso(a.numero,a.tema),u=a.orador_id===null&&a.visitante_id===null;return e`
    <button
      class="linha"
      data-semana=${n}
      data-reuniao=${a.id??0}
      ?data-sem-orador=${u}
      @click=${()=>at(a)}
    >
      <kk-icon class="linha__icone" name=${a.visitante_id===null?`microphone-2`:`user-share`}></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${[c,l].filter(e=>e!==``).join(` · `)}</span>
        <span class="linha__sub">${vt(a)}</span>
      </span>
      ${u?e`<span class="linha__selo">${o.publica.semOradorSelo}</span>`:t}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function bt(){let n=z(),r=n!==void 0&&n.dia_fim_de_semana===null,i=G().length+K().length;return e`
    <div class="publica-mes">
      <kk-icon-button
        name="chevron-left"
        label=${o.publica.mesAnterior}
        @click=${()=>{T=u(T,-1),f()}}
      ></kk-icon-button>
      <h2 class="publica-mes__nome" aria-live="polite">${W()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${o.publica.mesSeguinte}
        @click=${()=>{T=u(T,1),f()}}
      ></kk-icon-button>
    </div>

    ${r?e`<p class="caixas__ajuda">${o.publica.semDia}</p>`:t}

    <div class="lista">${nt().map(yt)}</div>

    <div class="publica-acoes">
      <kk-button name="enviar" ?disabled=${i===0} @click=${_t}>
        <kk-icon slot="prefix" name="send"></kk-icon>${o.publica.enviar}
      </kk-button>
    </div>
  `}function xt(e){j={...e},k=``,M=``,f()}function Y(e){j!==null&&(j={...j,...e})}var St={sem_pessoa:()=>o.publica.enviadoSemPessoa,sem_data:()=>o.publica.enviadoSemData,sem_destino:()=>o.publica.enviadoSemDestino};async function Ct(){if(j===null)return;let e=Se(j);if(e!==null)M=St[e](),f();else{try{await Re(j)}catch(e){console.error(`Reunião pública: o envio não foi gravado.`,e),p(o.publica.enviadoNaoSalvo,`danger`);return}j=null,M=``,p(o.publica.enviadoSalvo),await F(),f()}}async function wt(e){if(await m({titulo:o.publica.excluirEnviadoTitulo,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await ke(e)}catch(e){console.error(`Reunião pública: o envio não foi excluído.`,e),p(o.publica.enviadoNaoExcluido,`danger`);return}j=null,await F(),f()}}function Tt(n){let r=Te(et(),H),i=n.pessoa_id!==null&&r.has(`${n.pessoa_id}|${n.data}`);return e`
    <kk-dialog
      open
      class="enviado-form"
      label=${n.id===void 0?o.publica.novoEnviado:o.publica.editarEnviado}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        ${it({nome:`pessoa`,rotulo:o.publica.quemVai,...i?{ajuda:o.publica.temLugarAqui}:{},lugar:`orador`,congregacaoId:n.congregacao_id,antesDe:n.data===``?l():n.data,atual:n.pessoa_id,contra:e=>n.data!==``&&r.has(`${e}|${n.data}`)?o.publica.temLugarNoDia:``,aoEscolher:e=>{Y({pessoa_id:e}),f()}})}
        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${s}
            name="data"
            label=${o.publica.data}
            .value=${n.data}
            @kk-change=${e=>{Y({data:L(e)}),f()}}
          ></kk-date-picker>
          <kk-input
            name="hora"
            type="time"
            label=${o.publica.hora}
            .value=${n.hora}
            @kk-change=${e=>Y({hora:L(e)})}
          ></kk-input>
        </div>
        <kk-input
          name="destino"
          label=${o.publica.destino}
          required
          .value=${n.destino}
          @kk-input=${e=>Y({destino:L(e)})}
        ></kk-input>
        <div class="formulario__par">
          <kk-input
            name="numero"
            type="number"
            min="1"
            max="999"
            inputmode="numeric"
            label=${o.publica.numero}
            .value=${n.numero===null?``:String(n.numero)}
            @kk-input=${e=>{let t=j?.tema??``,n=Qe(e),r={numero:n};(t===``||t===k)&&(k=he(n,S,C),r.tema=k),Y(r),f()}}
          ></kk-input>
          <kk-input
            name="tema"
            label=${o.publica.tema}
            .value=${n.tema}
            @kk-input=${e=>Y({tema:L(e)})}
          ></kk-input>
        </div>
        ${M===``?t:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{j?.id!==void 0&&wt(j.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${o.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void Ct()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Et(){w!==null&&xt(Ie(w))}function Dt(){let n=l(),r=He(rt(),n);return r.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="user-share"></kk-icon>
        <p>${o.publica.semEnviados}</p>
        <kk-button variant="primary" @click=${Et}>${o.publica.novoEnviado}</kk-button>
      </div>
    `:e`
    <p class="caixas__ajuda">${o.publica.enviadosAjuda}</p>
    <div class="lista">
      ${r.map(r=>{let i=r.data<n,a=o.publica.discurso(r.numero,r.tema);return e`
          <button
            class="linha"
            data-enviado=${r.id??0}
            ?data-passou=${i}
            @click=${()=>xt(r)}
          >
            <kk-icon class="linha__icone" name="user-share"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">
                ${[r.data===``?``:V(r.data),B(r.pessoa_id)].filter(e=>e!==``).join(` · `)}
              </span>
              <span class="linha__sub">
                ${[U().destino(r.destino,r.hora),a].filter(e=>e!==``).join(` · `)}
              </span>
            </span>
            ${i?e`<span class="linha__selo">${o.publica.passou}</span>`:t}
            <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
          </button>
        `})}
    </div>
  `}function Ot(e){A={...e},N=!1,M=``,f()}function X(e){A!==null&&(A={...A,...e})}async function kt(e,t=o.publica.oradorSalvo){if(ve(e)!==null)M=o.publica.oradorSemNome,f();else{try{await we(e)}catch(e){console.error(`Reunião pública: o orador não foi gravado.`,e),p(o.publica.oradorNaoSalvo,`danger`);return}A=null,M=``,p(t),await F(),f()}}async function At(e){let t=await Be(e.id);if(t>0){if(e.ativo===0){M=o.publica.oradorEmUsoInativo,f();return}await m({titulo:o.publica.oradorEmUsoTitulo,texto:o.publica.oradorEmUso(t),rotuloConfirmar:o.publica.inativar})&&await kt({...e,ativo:0},o.publica.oradorInativado)}else if(await m({titulo:o.publica.excluirOradorTitulo,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await Ce(e.id)}catch(e){console.error(`Reunião pública: o orador não foi excluído.`,e),p(o.publica.oradorNaoExcluido,`danger`);return}A=null,await F(),f()}}function jt(n){let r=N&&n.telefone.trim()!==``&&!re(n.telefone);return e`
    <kk-dialog
      open
      class="orador-form"
      label=${n.id===void 0?o.publica.novoOrador:o.publica.editarOrador}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${o.publica.nome}
          required
          .value=${n.nome}
          @kk-input=${e=>X({nome:L(e)})}
        ></kk-input>
        <kk-input
          name="congregacao"
          label=${o.publica.congregacaoDeOrigem}
          .value=${n.congregacao}
          @kk-input=${e=>X({congregacao:L(e)})}
        ></kk-input>
        <kk-input
          name="telefone"
          type="tel"
          inputmode="tel"
          label=${o.publica.telefone}
          help-text=${r?o.publica.telefoneDuvidoso:o.publica.telefoneAjuda}
          .value=${n.telefone}
          @kk-input=${e=>X({telefone:L(e)})}
          @kk-blur=${()=>{N=!0,f()}}
        ></kk-input>
        <kk-switch
          name="ativo"
          help-text=${o.publica.ativoAjuda}
          ?checked=${n.ativo===1}
          @kk-change=${e=>{X({ativo:+!!e.target.checked}),f()}}
        >
          ${o.publica.ativo}
        </kk-switch>
        ${M===``?t:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&At(A)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${o.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&kt(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Mt(){if(x.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="address-book"></kk-icon>
        <p>${o.publica.semOradores}</p>
        <kk-button variant="primary" @click=${()=>Ot(_())}>
          ${o.publica.novoOrador}
        </kk-button>
      </div>
    `;let n=Ae(S),r=[...xe(x)].sort((e,t)=>t.ativo-e.ativo);return e`
    <p class="caixas__ajuda">${o.publica.oradoresAjuda}</p>
    <div class="lista">
      ${r.map(r=>{let i=n.get(r.id??0)??[];return e`
          <button class="linha" data-orador=${r.id??0} @click=${()=>Ot(r)}>
            <kk-icon class="linha__icone" name="address-book"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">${r.nome}</span>
              <span class="linha__sub">
                ${[r.congregacao,r.telefone,i.length===0?o.publica.nuncaAqui:o.publica.vezesAqui(i.length,a(i[0]??``))].filter(e=>e!==``).join(` · `)}
              </span>
            </span>
            ${r.ativo===0?e`<span class="linha__selo">${o.publica.inativo}</span>`:t}
            <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
          </button>
        `})}
    </div>
  `}function Nt(){if(w===null)return e``;let t=De(S,w);if(t.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="list-numbers"></kk-icon>
        <p>${o.publica.semTemas}</p>
      </div>
    `;let n=t.filter(e=>P.trim()===``||ee(`${e.numero} ${e.tema}`,P));return e`
    <div class="filtros">
      <kk-input
        name="busca"
        type="search"
        label=${o.publica.buscarTema}
        .value=${P}
        @kk-input=${e=>{P=L(e),f()}}
      ></kk-input>
    </div>
    <p class="caixas__ajuda">${o.publica.temasAjuda}</p>
    <div class="lista">
      ${n.length===0?e`<p class="vazio">${o.publica.nenhumTema}</p>`:n.map(t=>e`
                <div class="linha publica-tema" data-tema=${t.numero}>
                  <span class="publica-tema__numero">${t.numero}</span>
                  <span class="linha__texto">
                    <span class="linha__rotulo">${t.tema||o.publica.vago}</span>
                    <span class="linha__sub">
                      ${o.publica.vezes(t.reunioes.length)} ·
                      ${t.reunioes.slice(0,4).map(e=>{let t=qe(e,U()),n=a(H(e)??e.semana);return t===``?n:`${n} (${t})`}).join(`, `)}
                    </span>
                  </span>
                </div>
              `)}
    </div>
  `}var Z=[`reunioes`,`enviados`,`oradores`,`temas`],Pt={reunioes:`#/publica`,enviados:`#/publica/enviados`,oradores:`#/publica/oradores`,temas:`#/publica/temas`},Ft={reunioes:`microphone-2`,enviados:`user-share`,oradores:`address-book`,temas:`list-numbers`};function It(e){return e===`enviados`?o.publica.abaEnviados:e===`oradores`?o.publica.abaOradores:e===`temas`?o.publica.abaTemas:o.publica.abaReunioes}var Q=`reunioes`,$=null;function Lt(e,t=!1){Q=e,history.replaceState(history.state,``,Pt[e]),f(),t&&document.querySelector(`#publica-aba-${e}`)?.focus()}function Rt(e){let t=Z.indexOf(Q),n=e.key===`ArrowRight`?Z[(t+1)%Z.length]:e.key===`ArrowLeft`?Z[(t-1+Z.length)%Z.length]:e.key===`Home`?Z[0]:e.key===`End`?Z[Z.length-1]:void 0;n!==void 0&&(e.preventDefault(),Lt(n,!0))}function zt(){return e`
    <div class="chips" role="tablist" aria-label=${o.publica.abas}>
      ${Z.map(t=>e`
          <button
            type="button"
            class="chip"
            role="tab"
            id=${`publica-aba-${t}`}
            aria-controls="publica-painel"
            aria-selected=${Q===t}
            tabindex=${Q===t?0:-1}
            ?data-ativo=${Q===t}
            @click=${()=>Lt(t)}
            @keydown=${Rt}
          >
            <kk-icon name=${Ft[t]}></kk-icon>
            ${It(t)}
          </button>
        `)}
    </div>
  `}function Bt(){return v.length<2||Q===`oradores`?t:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${o.publica.congregacao}
        .value=${String(w??0)}
        @kk-change=${e=>{w=R(e)??w,f()}}
      >
        ${v.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function Vt(){return Q===`enviados`?Dt():Q===`oradores`?Mt():Q===`temas`?Nt():bt()}var Ht={aoVoltar(){return E===null&&A===null&&j===null?!1:(q(),!0)},acoes(){if(I.terminou&&w!==null){if(Q===`enviados`)return e`
        <kk-icon-button name="plus" label=${o.publica.novoEnviado} @click=${Et}></kk-icon-button>
      `;if(Q===`oradores`)return e`
        <kk-icon-button
          name="plus"
          label=${o.publica.novoOrador}
          @click=${()=>Ot(_())}
        ></kk-icon-button>
      `}},conteudo(n){let r=n.args.join(`/`);if(r!==$){let e=n.args[0];Q=e===`enviados`||e===`oradores`||e===`temas`?e:`reunioes`,$=r}let i=I.espera();return i===null?v.length===0?e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${o.publica.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>ne(`congregacoes`)}>
            ${o.publica.irParaCongregacoes}
          </kk-button>
        </div>
      `:e`
      ${Bt()} ${zt()}
      <div id="publica-painel" role="tabpanel" aria-labelledby=${`publica-aba-${Q}`}>
        ${Vt()}
      </div>
      ${E===null?t:pt(E)}
      ${j===null?t:Tt(j)}
      ${A===null?t:jt(A)}
    `:i}};export{Ht as telaPublica};