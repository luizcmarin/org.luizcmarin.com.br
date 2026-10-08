import{_ as e,c as t,d as n,f as r,m as i}from"./erro-D2swQJCY.js";import{d as a,f as o,m as s,n as c,p as l,u}from"./idioma-DWx-F1Qy.js";import{c as d,r as f,u as ee}from"./data-DpsiKWt9.js";import{i as te}from"./ordem-Dku36xny.js";import{n as ne}from"./texto-CuPUCLMw.js";import{t as p}from"./notificar-BeOZKYlx.js";import{r as re,t as ie}from"./contato-Dy5fPzpa.js";import{S as m,b as h,d as ae,f as oe,v as se,y as g}from"./index-DlNqF4dE.js";import{t as ce}from"./carga-K0T2aEed.js";import{t as le}from"./dados-CLDIGIer.js";import{t as ue}from"./dados-CSqH5xEE.js";import{t as de}from"./compartilhar-CutlseMs.js";import{n as fe}from"./dados-CzPr7lOE.js";import{T as pe,_ as me}from"./regras-DnFPo7QE.js";import{A as he,C as ge,D as _e,E as ve,M as ye,O as be,S as xe,T as Se,a as Ce,b as _,c as we,d as Te,f as Ee,g as De,h as Oe,i as ke,j as Ae,k as je,l as Me,m as Ne,n as Pe,o as Fe,p as Ie,r as Le,s as Re,t as ze,u as Be,w as Ve,x as He}from"./dados-Dnr4l9Zh.js";import{i as Ue}from"./dados-DyX7PiMd.js";import{t as We}from"./papel-BsWqXe8o.js";import{r as Ge}from"./relatorio-Bj5TZrV2.js";import{a as Ke,i as qe,n as Je,r as Ye,t as Xe}from"./relatorio-BwhJ_2r5.js";var v=[],y=[],b=[],x=[],S=[],C=[],Ze=``,w=null,T=d(),E=null,D=`casa`,O=_(),k=``,A=null,j=null,M=``,N=!1,P=``;async function F(){let e;[v,y,b,x,S,C,e]=await Promise.all([le(),Ue(),ue(),Pe(),Le(),ze(),fe()]),Ze=e.nome.trim(),(w===null||!v.some(e=>e.id===w))&&(w=(v.find(t=>t.id===e.congregacao_id)??v[0])?.id??null)}var I=new ce(`Reunião pública`,F);n(`publica`,()=>{I.esquecer(),E=null,A=null,j=null,$=null});function L(e){return e.target.value}function R(e){let t=Number(L(e));return Number.isInteger(t)&&t>0?t:null}function Qe(e){let t=Number(L(e));return Number.isInteger(t)&&t>0?t:null}function z(){return v.find(e=>e.id===w)}function B(e){return e===null?``:b.find(t=>t.id===e)?.nome??``}function $e(e){let t=e===null?void 0:x.find(t=>t.id===e);return t===void 0?``:t.congregacao===``?t.nome:`${t.nome} (${t.congregacao})`}function V(e){return`${c.diasCurtos[te(e)]??``} ${l(e)}`}function H(e){let t=v.find(t=>t.id===e.congregacao_id);return t===void 0?null:Ee(e.semana,t,y)}function U(){return{dia:V,semana:e=>c.publica.semanaDe(l(e)),semReuniao:c.publica.semReuniao,discurso:(e,t)=>c.publica.discurso(e,t),discursoSemTema:c.publica.discursoSemTema,presidente:c.publica.presidente,leitor:c.publica.leitor,hospitalidade:c.publica.hospitalidade,observacao:c.publica.observacao,pessoa:B,visitante:$e,vago:c.publica.vago,enviados:c.publica.abaEnviados,destino:(e,t)=>t===``?e:`${e}, ${t}`}}function W(){let[e=0,t=1]=T.split(`-`).map(Number);return s(e,t)}function et(){return S.filter(e=>e.congregacao_id===w)}function tt(e){return et().find(t=>t.semana===e)}function nt(){let e=z();return e===void 0?[]:je(T,e)}function G(){return nt().map(e=>tt(e)).filter(e=>e!==void 0).map(e=>({reuniao:e,dia:H(e)}))}function rt(){return C.filter(e=>e.congregacao_id===w)}function K(){return rt().filter(e=>e.data.slice(0,7)===T)}function q(){E=null,A=null,j=null,M=``,t()}function it(t){let n=Ve(t.lugar,b,t.congregacaoId),r=t.atual===null||n.some(e=>e.id===t.atual)?n:[...b.filter(e=>e.id===t.atual),...n],i=Oe(S,C),o=me(r,i,[t.lugar],t.antesDe);return e`
    <kk-select
      name=${t.nome}
      label=${t.rotulo}
      help-text=${t.ajuda??``}
      .value=${String(t.atual??0)}
      @kk-change=${e=>t.aoEscolher(R(e))}
    >
      <kk-option value="0">${c.publica.ninguem}</kk-option>
      ${o.map(n=>{let r=pe(i.get(n.id??0),[t.lugar],t.antesDe),o=t.contra(n.id??0),s=[n.ativo===0?c.pautas.inativo(n.nome):n.nome,`—`,r===``?c.publica.nunca:c.publica.ultimaVez(a(r)),o===``?``:`· ${o}`].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(n.id)}>${s}</kk-option>`})}
    </kk-select>
  `}function at(e){E={...e},D=e.visitante_id===null?`casa`:`fora`,O=_(),k=``,N=!1,M=``,t()}function J(e){E!==null&&(E={...E,...e})}function ot(e){if(E===null)return;let n={numero:e};(E.tema===``||E.tema===k)&&(k=he(e,S,C),n.tema=k),J(n),t()}async function st(){if(E===null)return;let e=E,n=null;if(D===`casa`&&(e={...e,visitante_id:null}),D===`fora`&&(e={...e,orador_id:null}),D===`novo`){if(ve(O)!==null){M=c.publica.oradorSemNome,t();return}n=O,e={...e,orador_id:null,visitante_id:null}}try{await Me(e,n)}catch(e){console.error(`Reunião pública: a reunião não foi gravada.`,e),p(c.publica.naoSalva,`danger`);return}E=null,M=``,p(c.publica.salva),await F(),t()}async function ct(e){if(await g({titulo:c.publica.excluirTitulo,texto:c.publica.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await Fe(e)}catch(e){console.error(`Reunião pública: a reunião não foi excluída.`,e),p(c.publica.naoExcluida,`danger`);return}E=null,await F(),t()}}function lt(e,t){return new Set([`orador_id`,`presidente_id`,`leitor_id`].filter(e=>e!==t).map(t=>e[t]).filter(e=>e!==null))}function ut(){return e`
    <kk-select
      name="origem"
      label=${c.publica.origem}
      .value=${D}
      @kk-change=${e=>{let n=L(e);D=n===`fora`||n===`novo`?n:`casa`,M=``,t()}}
    >
      <kk-option value="casa">${c.publica.origens.casa}</kk-option>
      <kk-option value="fora">${c.publica.origens.fora}</kk-option>
      <kk-option value="novo">${c.publica.origens.novo}</kk-option>
    </kk-select>
  `}function dt(n){let r=ye(x,n.visitante_id),i=Ae(S);return e`
    <kk-select
      name="visitante"
      label=${c.publica.oradorDeFora}
      help-text=${r.length===0?c.publica.semOradoresDeFora:``}
      .value=${String(n.visitante_id??0)}
      @kk-change=${e=>{J({visitante_id:R(e)}),t()}}
    >
      <kk-option value="0">${c.publica.ninguem}</kk-option>
      ${r.map(t=>{let r=(i.get(t.id??0)??[]).find(e=>e<n.semana)??``,o=[t.ativo===0?c.pautas.inativo(t.nome):t.nome,t.congregacao===``?``:`(${t.congregacao})`,`—`,r===``?c.publica.nuncaAqui:c.publica.ultimaVezAqui(a(r))].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(t.id)}>${o}</kk-option>`})}
    </kk-select>
  `}function ft(){let n=N&&O.telefone.trim()!==``&&!re(O.telefone);return e`
    <fieldset class="publica-novo">
      <legend>${c.publica.origens.novo}</legend>
      <kk-input
        name="novo_nome"
        label=${c.publica.nome}
        required
        .value=${O.nome}
        @kk-input=${e=>{O={...O,nome:L(e)}}}
      ></kk-input>
      <kk-input
        name="novo_congregacao"
        label=${c.publica.congregacaoDeOrigem}
        .value=${O.congregacao}
        @kk-input=${e=>{O={...O,congregacao:L(e)}}}
      ></kk-input>
      <kk-input
        name="novo_telefone"
        type="tel"
        inputmode="tel"
        label=${c.publica.telefone}
        help-text=${n?c.publica.telefoneDuvidoso:c.publica.telefoneAjuda}
        .value=${O.telefone}
        @kk-input=${e=>{O={...O,telefone:L(e)}}}
        @kk-blur=${()=>{N=!0,t()}}
      ></kk-input>
    </fieldset>
  `}function pt(n){let r=H(n),o=r===null?c.publica.semanaDe(l(n.semana)):V(r),s=Ne(C),u=(e,t)=>r!==null&&s.has(`${e}|${r}`)?c.publica.foraNoDia:lt(n,t).has(e)?c.publica.jaNaReuniao:``,d=ge(n,S),f=(e,r,i)=>it({nome:e.replace(`_id`,``),rotulo:i,lugar:r,congregacaoId:n.congregacao_id,antesDe:n.semana,atual:n[e],contra:t=>u(t,e),aoEscolher:n=>{J({[e]:n}),t()}});return e`
    <kk-dialog
      open
      class="publica-form"
      label=${c.publica.reuniaoDe(o)}
      @kk-request-close=${m}
      @kk-initial-focus=${h}
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
            label=${c.publica.numero}
            .value=${n.numero===null?``:String(n.numero)}
            @kk-input=${e=>ot(Qe(e))}
          ></kk-input>
          <kk-input
            name="tema"
            label=${c.publica.tema}
            help-text=${d.length===0?``:c.publica.temaRepetido(d.slice(0,3).map(e=>a(e)))}
            .value=${n.tema}
            @kk-input=${e=>J({tema:L(e)})}
          ></kk-input>
        </div>

        ${ut()}
        ${D===`casa`?f(`orador_id`,`orador`,c.publica.oradorDaCasa):D===`fora`?dt(n):ft()}
        ${f(`presidente_id`,`presidente`,c.publica.presidente)}
        ${f(`leitor_id`,`leitor`,c.publica.leitor)}
        ${D===`casa`?i:it({nome:`hospitalidade`,rotulo:c.publica.hospitalidade,ajuda:c.publica.hospitalidadeAjuda,lugar:`hospitalidade`,congregacaoId:n.congregacao_id,antesDe:n.semana,atual:n.hospitalidade_id,contra:()=>``,aoEscolher:e=>J({hospitalidade_id:e})})}
        <kk-input
          name="observacao"
          label=${c.publica.observacao}
          help-text=${c.publica.observacaoAjuda}
          .value=${n.observacao}
          @kk-input=${e=>J({observacao:L(e)})}
        ></kk-input>
        ${M===``?i:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{E?.id!==void 0&&ct(E.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${c.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${c.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void st()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function mt(){let e=G().map(({reuniao:e,dia:t})=>Ke(e,t,U())),t=Ye(K(),U());return t===null?e:[...e,t]}async function ht(){let e=c.publica.titulo(W()),t=z()?.nome??``,n=mt(),r=c.publica.rodape(u(Date.now()),Ze),i=JSON.stringify([e,t,n,r]),a=oe(i)??await ae(i);if(a===void 0)return;let o=We(e,t,n,r,a);try{let t=await de(o,c.publica.arquivo(T),`application/pdf`,e);t===`compartilhado`&&p(c.publica.compartilhado),t===`baixado`&&p(c.publica.baixado)}catch(e){console.error(`Reunião pública: a entrega do PDF falhou.`,e),p(c.publica.naoCompartilhado,`danger`)}}function gt(t,n,r,a,o){let s=ie(a);return e`
    <kk-button
      size="small"
      data-aviso=${`${t}${n}`}
      href=${s===``?i:`https://wa.me/${s}?text=${encodeURIComponent(o)}`}
      target="_blank"
      ?disabled=${s===``}
    >
      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
      ${s===``?`${r} (${c.publica.semTelefone})`:r}
    </kk-button>
  `}function _t(){let t=G(),n=[c.publica.titulo(W()),z()?.nome??``].filter(e=>e!==``).join(` — `),r=Ge(n,mt()),i=Xe(t,K(),U()),a=Je(t,z()?.hora_fim_de_semana??``,U()),o=b.filter(e=>e.id!==void 0&&i.has(e.id)),s=xe(x.filter(e=>e.id!==void 0&&a.has(e.id)));se(c.publica.enviar,null,()=>e`
      <div class="formulario publica-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void ht()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${c.publica.pdf}
        </kk-button>
        <p class="caixas__ajuda">${c.publica.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(r)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${c.publica.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${c.publica.whatsappAjuda}</p>

        <h3 class="secao">${c.publica.avisos}</h3>
        <p class="caixas__ajuda">${c.publica.avisosAjuda}</p>
        ${o.length===0?e`<p class="vazio">${c.publica.semAvisos}</p>`:e`
              <div class="publica-envio__avisos">
                ${o.map(e=>gt(`p`,e.id??0,e.nome,e.telefone,c.publica.aviso(e.nome,W(),i.get(e.id??0)??[])))}
              </div>
            `}

        <h3 class="secao">${c.publica.convites}</h3>
        <p class="caixas__ajuda">${c.publica.convitesAjuda}</p>
        ${s.length===0?e`<p class="vazio">${c.publica.semConvites}</p>`:e`
              <div class="publica-envio__avisos">
                ${s.map(e=>gt(`v`,e.id??0,e.nome,e.telefone,c.publica.convite(e.nome,z()?.nome??``,a.get(e.id??0)??[])))}
              </div>
            `}
      </div>
    `,{classe:`publica-envio-dialogo`})}function vt(e){let t=qe(e,U());return[t===``?c.publica.semOrador:t,e.presidente_id===null?``:`${c.publica.presidente}: ${B(e.presidente_id)}`,e.leitor_id===null?``:`${c.publica.leitor}: ${B(e.leitor_id)}`].filter(e=>e!==``).join(` · `)}function yt(t){let n=z();if(n===void 0||w===null)return e``;let r=tt(t),a=Ee(t,n,y),o=a===null?`${c.publica.semanaDe(l(t))} · ${c.publica.semReuniao}`:V(a);if(r===void 0||_e(r)){let n=r??be(w,t);return e`
      <button class="linha" data-semana=${t} data-por-marcar="" @click=${()=>at(n)}>
        <kk-icon class="linha__icone" name="calendar-plus"></kk-icon>
        <span class="linha__texto">
          <span class="linha__rotulo">${o}</span>
          <span class="linha__sub">${c.publica.porMarcar}</span>
        </span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>
    `}let s=c.publica.discurso(r.numero,r.tema),u=r.orador_id===null&&r.visitante_id===null;return e`
    <button
      class="linha"
      data-semana=${t}
      data-reuniao=${r.id??0}
      ?data-sem-orador=${u}
      @click=${()=>at(r)}
    >
      <kk-icon class="linha__icone" name=${r.visitante_id===null?`microphone-2`:`user-share`}></kk-icon>
      <span class="linha__texto">
        <span class="linha__rotulo">${[o,s].filter(e=>e!==``).join(` · `)}</span>
        <span class="linha__sub">${vt(r)}</span>
      </span>
      ${u?e`<span class="linha__selo">${c.publica.semOradorSelo}</span>`:i}
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function bt(){let n=z(),r=n!==void 0&&n.dia_fim_de_semana===null,a=G().length+K().length;return e`
    <div class="publica-mes">
      <kk-icon-button
        name="chevron-left"
        label=${c.publica.mesAnterior}
        @click=${()=>{T=ee(T,-1),t()}}
      ></kk-icon-button>
      <h2 class="publica-mes__nome" aria-live="polite">${W()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${c.publica.mesSeguinte}
        @click=${()=>{T=ee(T,1),t()}}
      ></kk-icon-button>
    </div>

    ${r?e`<p class="caixas__ajuda">${c.publica.semDia}</p>`:i}

    <div class="lista">${nt().map(yt)}</div>

    <div class="publica-acoes">
      <kk-button name="enviar" ?disabled=${a===0} @click=${_t}>
        <kk-icon slot="prefix" name="send"></kk-icon>${c.publica.enviar}
      </kk-button>
    </div>
  `}function xt(e){j={...e},k=``,M=``,t()}function Y(e){j!==null&&(j={...j,...e})}var St={sem_pessoa:()=>c.publica.enviadoSemPessoa,sem_data:()=>c.publica.enviadoSemData,sem_destino:()=>c.publica.enviadoSemDestino};async function Ct(){if(j===null)return;let e=Se(j);if(e!==null)M=St[e](),t();else{try{await Re(j)}catch(e){console.error(`Reunião pública: o envio não foi gravado.`,e),p(c.publica.enviadoNaoSalvo,`danger`);return}j=null,M=``,p(c.publica.enviadoSalvo),await F(),t()}}async function wt(e){if(await g({titulo:c.publica.excluirEnviadoTitulo,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await ke(e)}catch(e){console.error(`Reunião pública: o envio não foi excluído.`,e),p(c.publica.enviadoNaoExcluido,`danger`);return}j=null,await F(),t()}}function Tt(n){let r=Te(et(),H),a=n.pessoa_id!==null&&r.has(`${n.pessoa_id}|${n.data}`);return e`
    <kk-dialog
      open
      class="enviado-form"
      label=${n.id===void 0?c.publica.novoEnviado:c.publica.editarEnviado}
      @kk-request-close=${m}
      @kk-initial-focus=${h}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        ${it({nome:`pessoa`,rotulo:c.publica.quemVai,...a?{ajuda:c.publica.temLugarAqui}:{},lugar:`orador`,congregacaoId:n.congregacao_id,antesDe:n.data===``?f():n.data,atual:n.pessoa_id,contra:e=>n.data!==``&&r.has(`${e}|${n.data}`)?c.publica.temLugarNoDia:``,aoEscolher:e=>{Y({pessoa_id:e}),t()}})}
        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${o}
            name="data"
            label=${c.publica.data}
            .value=${n.data}
            @kk-change=${e=>{Y({data:L(e)}),t()}}
          ></kk-date-picker>
          <kk-input
            name="hora"
            type="time"
            label=${c.publica.hora}
            .value=${n.hora}
            @kk-change=${e=>Y({hora:L(e)})}
          ></kk-input>
        </div>
        <kk-input
          name="destino"
          label=${c.publica.destino}
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
            label=${c.publica.numero}
            .value=${n.numero===null?``:String(n.numero)}
            @kk-input=${e=>{let n=j?.tema??``,r=Qe(e),i={numero:r};(n===``||n===k)&&(k=he(r,S,C),i.tema=k),Y(i),t()}}
          ></kk-input>
          <kk-input
            name="tema"
            label=${c.publica.tema}
            .value=${n.tema}
            @kk-input=${e=>Y({tema:L(e)})}
          ></kk-input>
        </div>
        ${M===``?i:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{j?.id!==void 0&&wt(j.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${c.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${c.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void Ct()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Et(){w!==null&&xt(Ie(w))}function Dt(){let t=f(),n=He(rt(),t);return n.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="user-share"></kk-icon>
        <p>${c.publica.semEnviados}</p>
        <kk-button variant="primary" @click=${Et}>${c.publica.novoEnviado}</kk-button>
      </div>
    `:e`
    <p class="caixas__ajuda">${c.publica.enviadosAjuda}</p>
    <div class="lista">
      ${n.map(n=>{let r=n.data<t,a=c.publica.discurso(n.numero,n.tema);return e`
          <button
            class="linha"
            data-enviado=${n.id??0}
            ?data-passou=${r}
            @click=${()=>xt(n)}
          >
            <kk-icon class="linha__icone" name="user-share"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">
                ${[n.data===``?``:V(n.data),B(n.pessoa_id)].filter(e=>e!==``).join(` · `)}
              </span>
              <span class="linha__sub">
                ${[U().destino(n.destino,n.hora),a].filter(e=>e!==``).join(` · `)}
              </span>
            </span>
            ${r?e`<span class="linha__selo">${c.publica.passou}</span>`:i}
            <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
          </button>
        `})}
    </div>
  `}function Ot(e){A={...e},N=!1,M=``,t()}function X(e){A!==null&&(A={...A,...e})}async function kt(e,n=c.publica.oradorSalvo){if(ve(e)!==null)M=c.publica.oradorSemNome,t();else{try{await we(e)}catch(e){console.error(`Reunião pública: o orador não foi gravado.`,e),p(c.publica.oradorNaoSalvo,`danger`);return}A=null,M=``,p(n),await F(),t()}}async function At(e){let n=await Be(e.id);if(n>0){if(e.ativo===0){M=c.publica.oradorEmUsoInativo,t();return}await g({titulo:c.publica.oradorEmUsoTitulo,texto:c.publica.oradorEmUso(n),rotuloConfirmar:c.publica.inativar})&&await kt({...e,ativo:0},c.publica.oradorInativado)}else if(await g({titulo:c.publica.excluirOradorTitulo,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await Ce(e.id)}catch(e){console.error(`Reunião pública: o orador não foi excluído.`,e),p(c.publica.oradorNaoExcluido,`danger`);return}A=null,await F(),t()}}function jt(n){let r=N&&n.telefone.trim()!==``&&!re(n.telefone);return e`
    <kk-dialog
      open
      class="orador-form"
      label=${n.id===void 0?c.publica.novoOrador:c.publica.editarOrador}
      @kk-request-close=${m}
      @kk-initial-focus=${h}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${c.publica.nome}
          required
          .value=${n.nome}
          @kk-input=${e=>X({nome:L(e)})}
        ></kk-input>
        <kk-input
          name="congregacao"
          label=${c.publica.congregacaoDeOrigem}
          .value=${n.congregacao}
          @kk-input=${e=>X({congregacao:L(e)})}
        ></kk-input>
        <kk-input
          name="telefone"
          type="tel"
          inputmode="tel"
          label=${c.publica.telefone}
          help-text=${r?c.publica.telefoneDuvidoso:c.publica.telefoneAjuda}
          .value=${n.telefone}
          @kk-input=${e=>X({telefone:L(e)})}
          @kk-blur=${()=>{N=!0,t()}}
        ></kk-input>
        <kk-switch
          name="ativo"
          help-text=${c.publica.ativoAjuda}
          ?checked=${n.ativo===1}
          @kk-change=${e=>{X({ativo:+!!e.target.checked}),t()}}
        >
          ${c.publica.ativo}
        </kk-switch>
        ${M===``?i:e`<p class="erro" role="alert">${M}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&At(A)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${c.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${c.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&kt(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Mt(){if(x.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="address-book"></kk-icon>
        <p>${c.publica.semOradores}</p>
        <kk-button variant="primary" @click=${()=>Ot(_())}>
          ${c.publica.novoOrador}
        </kk-button>
      </div>
    `;let t=Ae(S),n=[...xe(x)].sort((e,t)=>t.ativo-e.ativo);return e`
    <p class="caixas__ajuda">${c.publica.oradoresAjuda}</p>
    <div class="lista">
      ${n.map(n=>{let r=t.get(n.id??0)??[];return e`
          <button class="linha" data-orador=${n.id??0} @click=${()=>Ot(n)}>
            <kk-icon class="linha__icone" name="address-book"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">${n.nome}</span>
              <span class="linha__sub">
                ${[n.congregacao,n.telefone,r.length===0?c.publica.nuncaAqui:c.publica.vezesAqui(r.length,a(r[0]??``))].filter(e=>e!==``).join(` · `)}
              </span>
            </span>
            ${n.ativo===0?e`<span class="linha__selo">${c.publica.inativo}</span>`:i}
            <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
          </button>
        `})}
    </div>
  `}function Nt(){if(w===null)return e``;let n=De(S,w);if(n.length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="list-numbers"></kk-icon>
        <p>${c.publica.semTemas}</p>
      </div>
    `;let r=n.filter(e=>P.trim()===``||ne(`${e.numero} ${e.tema}`,P));return e`
    <div class="filtros">
      <kk-input
        name="busca"
        type="search"
        label=${c.publica.buscarTema}
        .value=${P}
        @kk-input=${e=>{P=L(e),t()}}
      ></kk-input>
    </div>
    <p class="caixas__ajuda">${c.publica.temasAjuda}</p>
    <div class="lista">
      ${r.length===0?e`<p class="vazio">${c.publica.nenhumTema}</p>`:r.map(t=>e`
                <div class="linha publica-tema" data-tema=${t.numero}>
                  <span class="publica-tema__numero">${t.numero}</span>
                  <span class="linha__texto">
                    <span class="linha__rotulo">${t.tema||c.publica.vago}</span>
                    <span class="linha__sub">
                      ${c.publica.vezes(t.reunioes.length)} ·
                      ${t.reunioes.slice(0,4).map(e=>{let t=qe(e,U()),n=a(H(e)??e.semana);return t===``?n:`${n} (${t})`}).join(`, `)}
                    </span>
                  </span>
                </div>
              `)}
    </div>
  `}var Z=[`reunioes`,`enviados`,`oradores`,`temas`],Pt={reunioes:`#/publica`,enviados:`#/publica/enviados`,oradores:`#/publica/oradores`,temas:`#/publica/temas`},Ft={reunioes:`microphone-2`,enviados:`user-share`,oradores:`address-book`,temas:`list-numbers`};function It(e){return e===`enviados`?c.publica.abaEnviados:e===`oradores`?c.publica.abaOradores:e===`temas`?c.publica.abaTemas:c.publica.abaReunioes}var Q=`reunioes`,$=null;function Lt(e,n=!1){Q=e,history.replaceState(history.state,``,Pt[e]),t(),n&&document.querySelector(`#publica-aba-${e}`)?.focus()}function Rt(e){let t=Z.indexOf(Q),n=e.key===`ArrowRight`?Z[(t+1)%Z.length]:e.key===`ArrowLeft`?Z[(t-1+Z.length)%Z.length]:e.key===`Home`?Z[0]:e.key===`End`?Z[Z.length-1]:void 0;n!==void 0&&(e.preventDefault(),Lt(n,!0))}function zt(){return e`
    <div class="chips" role="tablist" aria-label=${c.publica.abas}>
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
  `}function Bt(){return v.length<2||Q===`oradores`?i:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${c.publica.congregacao}
        .value=${String(w??0)}
        @kk-change=${e=>{w=R(e)??w,t()}}
      >
        ${v.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function Vt(){return Q===`enviados`?Dt():Q===`oradores`?Mt():Q===`temas`?Nt():bt()}var Ht={aoVoltar(){return E===null&&A===null&&j===null?!1:(q(),!0)},acoes(){if(I.terminou&&w!==null){if(Q===`enviados`)return e`
        <kk-icon-button name="plus" label=${c.publica.novoEnviado} @click=${Et}></kk-icon-button>
      `;if(Q===`oradores`)return e`
        <kk-icon-button
          name="plus"
          label=${c.publica.novoOrador}
          @click=${()=>Ot(_())}
        ></kk-icon-button>
      `}},conteudo(t){let n=t.args.join(`/`);if(n!==$){let e=t.args[0];Q=e===`enviados`||e===`oradores`||e===`temas`?e:`reunioes`,$=n}let a=I.espera();return a===null?v.length===0?e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${c.publica.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>r(`congregacoes`)}>
            ${c.publica.irParaCongregacoes}
          </kk-button>
        </div>
      `:e`
      ${Bt()} ${zt()}
      <div id="publica-painel" role="tabpanel" aria-labelledby=${`publica-aba-${Q}`}>
        ${Vt()}
      </div>
      ${E===null?i:pt(E)}
      ${j===null?i:Tt(j)}
      ${A===null?i:jt(A)}
    `:a}};export{Ht as telaPublica};