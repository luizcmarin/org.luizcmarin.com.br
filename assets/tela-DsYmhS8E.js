import{i as e,t}from"./lit-CL39YOSA.js";import{c as n,d as r,f as i,l as a,n as o,u as s}from"./idioma-Dwpp7Zfu.js";import{c,r as l,u}from"./data-DpsiKWt9.js";import{o as ee}from"./ordem-DhzYZk-u.js";import{c as d,d as te,f as ne}from"./erro-FHfTMgeP.js";import{t as f}from"./notificar-BeOZKYlx.js";import{t as re}from"./contato-Dy5fPzpa.js";import{D as p,O as m,b as ie,j as ae,k as oe,x as se}from"./index-BTSbEGH1.js";import{t as ce}from"./carga-D_DL_FuH.js";import{t as le}from"./dados-DpvHxc9k.js";import{t as ue}from"./dados-B8yFq1N-.js";import{r as de}from"./regras-D9ek7SGP.js";import{t as fe}from"./compartilhar-CutlseMs.js";import{t as pe}from"./dados-DdHySe-M.js";import{n as me}from"./dados-BmiN3zt1.js";import{a as he,i as ge}from"./regras-B0kA1dQ6.js";import{n as _e,t as ve}from"./dados-C28NrQkz.js";import{d as ye,f as be,m as xe,r as Se,t as Ce}from"./dados--CoVPZdv.js";import{C as we,E as Te,S as Ee,T as De,_ as Oe,a as h,b as ke,d as Ae,g as je,h as Me,l as Ne,o as Pe,s as Fe,v as Ie,w as Le,x as Re}from"./regras-B1GEoheD.js";import{a as ze,c as Be,d as Ve,f as He,i as Ue,l as We,n as Ge,o as Ke,r as qe,s as Je,t as Ye,u as Xe}from"./dados-DMtTZehl.js";import{t as Ze}from"./papel-sil4h6dg.js";import{n as Qe,r as $e,t as et}from"./relatorio-C0vfa6yu.js";var g=[],_=[],v=[],tt=[],y=[],b=[],x=[],S=[],C=new Set,w=new Set,T=``,E=null,D=c(),O=null,k=new Set,A=null,j=``;async function M(){let e;[g,_,v,tt,y,b,x,S,e]=await Promise.all([le(),ue(),pe(),ze(),Ye(),Ge(),Ue(),qe(),me()]),T=e.nome.trim();let[t,n,r,i]=await Promise.all([_e(),ve(),Se(),Ce()]),a=e=>g.find(t=>t.id===e);C=new Set([...ge(t,n,e=>{let t=a(e.congregacao_id);return t===void 0?null:he(e.semana,t,x)}),...ye(r,e=>{let t=a(e.congregacao_id);return t===void 0?null:be(e.semana,t,x)})]),w=xe(i),(E===null||!g.some(e=>e.id===E))&&(E=(g.find(t=>t.id===e.congregacao_id)??g[0])?.id??null)}var N=new ce(`Escalas`,M);te(`escalas`,()=>{N.esquecer(),O=null,A=null,Q=null});function P(e){return e.target.value}function F(e){return e.target.checked}function I(){return g.find(e=>e.id===E)}function L(){return Re(tt.filter(e=>e.congregacao_id===E))}function R(){let e=new Set(L().map(e=>e.id));return S.filter(t=>e.has(t.funcao_id))}function z(e){return e===null?``:_.find(t=>t.id===e)?.nome??``}function B(e){return e===null?``:v.find(t=>t.id===e)?.nome??``}function V(e){return`${o.diasCurtos[ee(e)]??``} ${r(e)}`}function H(){return{dia:V,reuniao:e=>o.congregacoes.reunioes[e],ocupante:e=>z(e.pessoa_id)||B(e.grupo_id),vaga:o.escalas.vaga}}function U(){let[e=0,t=1]=D.split(`-`).map(Number);return i(e,t)}function W(){let e=I();return e===void 0?{reunioes:[],canceladas:[]}:De(D,e,x)}function G(e){let t=new Set(e.map(e=>`${e.data}|${e.reuniao}`));return R().filter(e=>t.has(`${e.data}|${e.reuniao}`))}async function nt(){let{reunioes:e}=W(),t=G(e),n=e[0]?.data??`${D}-01`;if(t.some(e=>e.travada===0&&(e.pessoa_id!==null||e.grupo_id!==null))&&!await m({titulo:o.escalas.gerarTitulo,texto:o.escalas.gerarTexto,rotuloConfirmar:o.escalas.gerarDeNovo}))return;let r=je({reunioes:e,funcoes:L(),candidatos:e=>Fe(e,_,v,y),ausente:(e,t)=>Pe(e,t,b)||C.has(`${e}|${t}`)||w.has(`${e}|${t}`),anteriores:R().filter(e=>e.data<n),atuais:t});try{await Be(Ie(r,t))}catch(e){console.error(`Escalas: a geração falhou.`,e),f(o.escalas.naoGerado,`danger`);return}let i=r.filter(e=>e.pessoa_id===null&&e.grupo_id===null).length;f(i===0?o.escalas.gerado:`${o.escalas.gerado} ${o.escalas.vagasVazias(i)}.`),await M(),d()}function rt(e,t,n,r){let i=`${e.tipo===`grupo`?`g`:`p`}:${e.id}`,s=t.get(i)??``;return[e.nome,`—`,s===``?o.escalas.nunca:o.escalas.ultimaVez(a(s)),e.tipo===`pessoa`&&Pe(e.id,n,b)?`· ${o.escalas.ausente}`:``,e.tipo===`pessoa`&&C.has(`${e.id}|${n}`)?`· ${o.escalas.temParte}`:``,e.tipo===`pessoa`&&w.has(`${e.id}|${n}`)?`· ${o.escalas.foraNoDia}`:``,r.has(i)?`· ${o.escalas.jaNoDia}`:``].filter(e=>e!==``).join(` `)}function it(t,n){let r=Fe(t,_,v,y),i=Te(t.id??0,R(),n.data),a=new Set(R().filter(e=>e.data===n.data&&e.id!==n.id).flatMap(e=>e.pessoa_id===null?e.grupo_id===null?[]:[`g:${e.grupo_id}`]:[`p:${e.pessoa_id}`])),s=n.pessoa_id??n.grupo_id,c=s===null||r.some(e=>e.id===s)?r:[{tipo:t.gira,id:s,nome:z(n.pessoa_id)||B(n.grupo_id)},...r],l=s??0,u=!0;p(o.escalas.escolherTitulo(t.nome,V(n.data)),!1,(t,r,s)=>e`
      <div class="formulario escala-escolha">
        <kk-select
          name="ocupante"
          label=${o.escalas.quem}
          .value=${String(l)}
          @kk-change=${e=>{l=Number(P(e))||0,s()}}
        >
          <kk-option value="0">${o.escalas.vagaVazia}</kk-option>
          ${c.map(t=>e`
              <kk-option value=${String(t.id)}>
                ${rt(t,i,n.data,a)}
              </kk-option>
            `)}
        </kk-select>
        <kk-switch
          name="travada"
          help-text=${o.escalas.travadaAjuda}
          ?checked=${u}
          @kk-change=${e=>{u=F(e)}}
        >
          ${o.escalas.travada}
        </kk-switch>
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${()=>t(!1)}>${o.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>t(!0)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    `,{formulario:!0,classe:`escala-escolha-dialogo`}).then(async e=>{if(!e)return;let t=c.find(e=>e.id===l)??null;try{await Xe(Ne(n,t,+!!u))}catch(e){console.error(`Escalas: a célula não foi gravada.`,e),f(o.escalas.celulaNaoSalva,`danger`);return}f(o.escalas.celulaSalva),await M(),d()})}function at(n,r){let i=x.find(e=>e.congregacao_id===E&&e.data===n&&e.reuniao===r),a=i===void 0?`normal`:i.nova_data===``?`nao`:`outro`,c=i?.nova_data??``,l=``;p(o.escalas.excecaoTitulo(o.congregacoes.reunioes[r],V(n)),!1,(r,i,u)=>e`
      <div class="formulario">
        <kk-select
          name="modo"
          label=${o.escalas.excecaoQuando}
          .value=${a}
          @kk-change=${e=>{let t=P(e);a=t===`outro`||t===`nao`?t:`normal`,u()}}
        >
          <kk-option value="normal">${o.escalas.excecaoNormal(V(n))}</kk-option>
          <kk-option value="outro">${o.escalas.excecaoOutroDia}</kk-option>
          <kk-option value="nao">${o.escalas.excecaoNaoHa}</kk-option>
        </kk-select>
        ${a===`outro`?e`
              <kk-date-picker
                .valueFormatter=${s}
                name="nova_data"
                label=${o.escalas.excecaoData}
                .value=${c}
                @kk-change=${e=>{c=P(e)}}
              ></kk-date-picker>
            `:t}
        <p class="caixas__ajuda">${o.escalas.excecaoAjuda}</p>
        ${l===``?t:e`<p class="erro" role="alert">${l}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${()=>r(!1)}>${o.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{a===`outro`&&!/^\d{4}-\d{2}-\d{2}$/.test(c)?(l=o.escalas.excecaoSemData,u()):r(!0)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    `,{formulario:!0}).then(async e=>{if(!e||E===null)return;let t=a===`normal`?n:a===`nao`?``:c;try{await Be(Oe(E,n,r,t,x,R()))}catch(e){console.error(`Escalas: a exceção não foi gravada.`,e),f(o.escalas.excecaoNaoSalva,`danger`);return}f(o.escalas.excecaoSalva),await M(),d()})}async function ot(){let{reunioes:e}=W(),t=o.escalas.titulo(U()),r=et(e,L(),G(e),H()),i=I()?.nome??``,a=o.escalas.rodape(n(Date.now()),T),s=JSON.stringify([t,i,r,a]),c=se(s)??await ie(s);if(c===void 0)return;let l=Ze(t,i,r,a,c);try{let e=await fe(l,o.escalas.arquivo(D),`application/pdf`,t);e===`compartilhado`&&f(o.escalas.compartilhado),e===`baixado`&&f(o.escalas.baixado)}catch(e){console.error(`Escalas: a entrega do PDF falhou.`,e),f(o.escalas.naoCompartilhado,`danger`)}}function st(){let{reunioes:n}=W(),r=G(n),i=[o.escalas.titulo(U()),I()?.nome??``].filter(e=>e!==``).join(` — `),a=$e(i,et(n,L(),r,H())),s=Qe(n,L(),r,v,H()),c=_.filter(e=>e.id!==void 0&&s.has(e.id));p(o.escalas.enviar,null,()=>e`
      <div class="formulario escala-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void ot()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${o.escalas.pdf}
        </kk-button>
        <p class="caixas__ajuda">${o.escalas.pdfAjuda}</p>

        <kk-button
          name="whatsapp"
          href=${`https://wa.me/?text=${encodeURIComponent(a)}`}
          target="_blank"
        >
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${o.escalas.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${o.escalas.whatsappAjuda}</p>

        <h3 class="secao">${o.escalas.lembretes}</h3>
        <p class="caixas__ajuda">${o.escalas.lembretesAjuda}</p>
        ${c.length===0?e`<p class="vazio">${o.escalas.semLembretes}</p>`:e`
              <div class="escala-envio__lembretes">
                ${c.map(n=>{let r=re(n.telefone),i=o.escalas.lembrete(n.nome,U(),s.get(n.id??0)??[]);return e`
                    <kk-button
                      size="small"
                      data-lembrete=${n.id??0}
                      href=${r===``?t:`https://wa.me/${r}?text=${encodeURIComponent(i)}`}
                      target="_blank"
                      ?disabled=${r===``}
                    >
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
                      ${r===``?`${n.nome} (${o.escalas.semTelefone})`:n.nome}
                    </kk-button>
                  `})}
              </div>
            `}
      </div>
    `,{classe:`escala-envio-dialogo`})}function ct(n,r){let i=z(r.pessoa_id)||B(r.grupo_id);return e`
    <button
      type="button"
      class="escala__vaga"
      data-vaga=${`${r.funcao_id}-${r.vaga}`}
      ?data-vazia=${i===``}
      @click=${()=>it(n,r)}
    >
      ${r.travada===1?e`<kk-icon name="lock" label=${o.escalas.travada}></kk-icon>`:t}
      ${i===``?o.escalas.vaga:i}
    </button>
  `}function lt(n,r){let i=[V(n.data),o.congregacoes.reunioes[n.reuniao],n.hora].filter(e=>e!==``).join(` · `);return e`
    <section class="escala__reuniao" data-data=${n.data} data-reuniao=${n.reuniao}>
      <header class="escala__cabecalho">
        <h3 class="escala__titulo">
          ${i}
          ${n.movida?e`<span class="escala__movida">${o.escalas.movida(V(n.original))}</span>`:t}
        </h3>
        <kk-icon-button
          name="calendar-event"
          label=${o.escalas.mudar}
          @click=${()=>at(n.original,n.reuniao)}
        ></kk-icon-button>
      </header>
      ${L().filter(e=>Ae(e,n.reuniao)).map(t=>{let i=Array.from({length:t.vagas},(e,i)=>{let a=i+1;return r.find(e=>e.funcao_id===t.id&&e.data===n.data&&e.reuniao===n.reuniao&&e.vaga===a)??{funcao_id:t.id??0,data:n.data,reuniao:n.reuniao,vaga:a,pessoa_id:null,grupo_id:null,travada:0}});return e`
            <div class="escala__linha">
              <span class="escala__funcao">${t.nome}</span>
              <span class="escala__vagas">${i.map(e=>ct(t,e))}</span>
            </div>
          `})}
    </section>
  `}function ut(){let n=I();if(n===void 0)return t;if(n.dia_meio_de_semana===null&&n.dia_fim_de_semana===null)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar-event"></kk-icon>
        <p>${o.escalas.semDias}</p>
        <kk-button variant="primary" @click=${()=>ne(`congregacoes`)}>
          ${o.escalas.irParaCongregacoes}
        </kk-button>
      </div>
    `;if(L().length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar-user"></kk-icon>
        <p>${o.escalas.semFuncoes}</p>
        <kk-button variant="primary" @click=${()=>$(`funcoes`)}>
          ${o.escalas.irParaFuncoes}
        </kk-button>
      </div>
    `;let{reunioes:r,canceladas:i}=W(),a=G(r);return e`
    <div class="escala__mes">
      <kk-icon-button
        name="chevron-left"
        label=${o.escalas.mesAnterior}
        @click=${()=>{D=u(D,-1),d()}}
      ></kk-icon-button>
      <h2 class="escala__nome-do-mes" aria-live="polite">${U()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${o.escalas.mesSeguinte}
        @click=${()=>{D=u(D,1),d()}}
      ></kk-icon-button>
    </div>

    <div class="escala__acoes">
      <kk-button variant="primary" name="gerar" ?disabled=${r.length===0} @click=${()=>void nt()}>
        <kk-icon slot="prefix" name="arrows-shuffle"></kk-icon>${o.escalas.gerar}
      </kk-button>
      <kk-button name="enviar" ?disabled=${a.length===0} @click=${st}>
        <kk-icon slot="prefix" name="send"></kk-icon>${o.escalas.enviar}
      </kk-button>
    </div>

    ${r.length===0?e`<p class="vazio">${o.escalas.semReunioes}</p>`:r.map(e=>lt(e,a))}

    ${i.length===0?t:e`
          <h3 class="secao">${o.escalas.canceladas}</h3>
          <div class="lista">
            ${i.map(t=>e`
                <button
                  class="linha"
                  data-cancelada=${t.original}
                  @click=${()=>at(t.original,t.reuniao)}
                >
                  <kk-icon class="linha__icone" name="calendar-off"></kk-icon>
                  <span class="linha__texto">
                    <span class="linha__rotulo">
                      ${V(t.original)} · ${o.congregacoes.reunioes[t.reuniao]}
                    </span>
                    <span class="linha__sub">${o.escalas.voltarAoNormal}</span>
                  </span>
                  <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                </button>
              `)}
          </div>
        `}
  `}function dt(e){O={...e,papeis:[...e.papeis]},k=new Set(y.filter(t=>t.funcao_id===e.id).map(e=>e.pessoa_id)),j=``,d()}function ft(){if(E===null)return;let e=L().at(-1);dt({...Me(E),ordem:(e?.ordem??0)+1})}function K(e){O!==null&&(O={...O,...e})}function q(){O=null,A=null,j=``,d()}async function pt(e){let t=Le(e);if(t!==null)j=t===`sem_nome`?o.escalas.funcaoSemNome:o.escalas.funcaoSemReuniao,d();else{try{await Ve(e,k,y)}catch(e){console.error(`Escalas: a função não foi gravada.`,e),f(o.escalas.funcaoNaoSalva,`danger`);return}O=null,f(o.escalas.funcaoSalva),await M(),d()}}async function mt(e){if(await m({titulo:o.escalas.excluirFuncaoTitulo,texto:o.escalas.excluirFuncaoTexto,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await Je(e)}catch(e){console.error(`Escalas: a função não foi excluída.`,e),f(o.escalas.funcaoNaoExcluida,`danger`);return}O=null,f(o.escalas.funcaoExcluida),await M(),d()}}async function ht(e,t){let n=L(),r=n.indexOf(e),i=n[r+t];if(i===void 0)return;let a=e.ordem===i.ordem?{...e,ordem:r}:e,s=e.ordem===i.ordem?{...i,ordem:r+t}:i;try{await He(a,s)}catch(e){console.error(`Escalas: a ordem não foi gravada.`,e),f(o.app.acaoFalhou,`danger`);return}await M(),d()}function gt(e){let t=e.meio_de_semana===1&&e.fim_de_semana===1?o.escalas.resumoReunioes.as_duas:e.meio_de_semana===1?o.escalas.resumoReunioes.meio_de_semana:o.escalas.resumoReunioes.fim_de_semana,n=y.filter(t=>t.funcao_id===e.id).length;return[o.escalas.resumoVagas(e.vagas),t,e.gira===`grupo`?o.escalas.resumoGrupo:``,e.por_semana===1?o.escalas.resumoSemana:``,e.sexo===`masculino`?o.escalas.sexoMasculino:``,e.sexo===`feminino`?o.escalas.sexoFeminino:``,...e.papeis.map(e=>o.papeis[e]),e.so_escolhidos===1?o.escalas.resumoEscolhidos(n):``].filter(e=>e!==``).join(` · `)}function _t(n){let r=n.gira===`pessoa`,i=_.filter(e=>e.id!==void 0&&(e.ativo===1&&(e.congregacao_id===null||e.congregacao_id===n.congregacao_id)&&Ee(n,e)||k.has(e.id)));return e`
    <kk-dialog
      open
      class="funcao-form"
      label=${n.id===void 0?o.escalas.novaFuncao:o.escalas.editarFuncao}
      @kk-request-close=${ae}
      @kk-initial-focus=${oe}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${o.escalas.funcaoNome}
          placeholder=${o.escalas.funcaoNomePlaceholder}
          required
          .value=${n.nome}
          @kk-input=${e=>K({nome:P(e)})}
        ></kk-input>

        <kk-input
          name="vagas"
          type="number"
          min="1"
          max=${20}
          label=${o.escalas.vagas}
          help-text=${o.escalas.vagasAjuda}
          .value=${String(n.vagas)}
          @kk-input=${e=>K({vagas:Number(P(e))})}
        ></kk-input>

        <fieldset class="caixas" data-grupo="reunioes">
          <legend class="caixas__titulo">${o.escalas.emQuais}</legend>
          <kk-checkbox
            value="meio_de_semana"
            ?checked=${n.meio_de_semana===1}
            @kk-change=${e=>K({meio_de_semana:+!!F(e)})}
          >
            ${o.congregacoes.reunioes.meio_de_semana}
          </kk-checkbox>
          <kk-checkbox
            value="fim_de_semana"
            ?checked=${n.fim_de_semana===1}
            @kk-change=${e=>K({fim_de_semana:+!!F(e)})}
          >
            ${o.congregacoes.reunioes.fim_de_semana}
          </kk-checkbox>
        </fieldset>

        <kk-select
          name="gira"
          label=${o.escalas.gira}
          .value=${n.gira}
          @kk-change=${e=>{K({gira:P(e)===`grupo`?`grupo`:`pessoa`}),d()}}
        >
          <kk-option value="pessoa">${o.escalas.giraPessoa}</kk-option>
          <kk-option value="grupo">${o.escalas.giraGrupo}</kk-option>
        </kk-select>

        <kk-switch
          name="por_semana"
          help-text=${o.escalas.porSemanaAjuda}
          ?checked=${n.por_semana===1}
          @kk-change=${e=>K({por_semana:+!!F(e)})}
        >
          ${o.escalas.porSemana}
        </kk-switch>

        ${r?e`
              <kk-select
                name="sexo"
                label=${o.escalas.sexo}
                .value=${n.sexo===``?`qualquer`:n.sexo}
                @kk-change=${e=>{let t=P(e);K({sexo:t===`masculino`||t===`feminino`?t:``}),d()}}
              >
                <kk-option value="qualquer">${o.escalas.sexoQualquer}</kk-option>
                <kk-option value="masculino">${o.escalas.sexoMasculino}</kk-option>
                <kk-option value="feminino">${o.escalas.sexoFeminino}</kk-option>
              </kk-select>

              <fieldset class="caixas" data-grupo="papeis">
                <legend class="caixas__titulo">${o.escalas.papeis}</legend>
                ${de.map(t=>e`
                    <kk-checkbox
                      value=${t}
                      ?checked=${n.papeis.includes(t)}
                      @kk-change=${e=>{if(O===null)return;let n=F(e)?[...O.papeis,t]:O.papeis.filter(e=>e!==t);K({papeis:de.filter(e=>n.includes(e))}),d()}}
                    >
                      ${o.papeis[t]}
                    </kk-checkbox>
                  `)}
                <p class="caixas__ajuda">${o.escalas.papeisAjuda}</p>
              </fieldset>

              <kk-switch
                name="so_escolhidos"
                help-text=${o.escalas.soEscolhidosAjuda}
                ?checked=${n.so_escolhidos===1}
                @kk-change=${e=>{K({so_escolhidos:+!!F(e)}),d()}}
              >
                ${o.escalas.soEscolhidos}
              </kk-switch>

              ${n.so_escolhidos===1?e`
                    <fieldset class="caixas" data-grupo="escolhidos">
                      <legend class="caixas__titulo">${o.escalas.escolhidos}</legend>
                      ${i.map(t=>e`
                          <kk-checkbox
                            value=${String(t.id)}
                            ?checked=${k.has(t.id??0)}
                            @kk-change=${e=>{F(e)?k.add(t.id??0):k.delete(t.id??0)}}
                          >
                            ${t.nome}
                          </kk-checkbox>
                        `)}
                      ${i.length===0?e`<p class="caixas__ajuda">${o.escalas.escolhidosVazio}</p>`:t}
                    </fieldset>
                  `:t}
            `:t}

        ${j===``?t:e`<p class="erro" role="alert">${j}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{O?.id!==void 0&&mt(O.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${o.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{O!==null&&pt(O)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function vt(){let t=L();return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar-user"></kk-icon>
        <p>${o.escalas.semFuncoes}</p>
        <kk-button variant="primary" @click=${ft}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${o.escalas.novaFuncao}
        </kk-button>
      </div>
    `:e`
    <div class="lista">
      ${t.map((n,r)=>e`
          <div class="escala__funcao-linha">
            <button class="linha" data-funcao=${n.id??0} @click=${()=>dt(n)}>
              <kk-icon class="linha__icone" name=${n.gira===`grupo`?`users-group`:`user`}></kk-icon>
              <span class="linha__texto">
                <span class="linha__rotulo">${n.nome}</span>
                <span class="linha__sub">${gt(n)}</span>
              </span>
            </button>
            <kk-icon-button
              name="arrow-up"
              label=${o.escalas.subir}
              ?disabled=${r===0}
              @click=${()=>void ht(n,-1)}
            ></kk-icon-button>
            <kk-icon-button
              name="arrow-down"
              label=${o.escalas.descer}
              ?disabled=${r===t.length-1}
              @click=${()=>void ht(n,1)}
            ></kk-icon-button>
          </div>
        `)}
    </div>
  `}function J(e){A={...e},j=``,d()}function Y(e){A!==null&&(A={...A,...e})}async function yt(e){let t=we(e);if(t!==null)j=t===`sem_pessoa`?o.escalas.ausenciaSemPessoa:t===`sem_inicio`?o.escalas.ausenciaSemInicio:o.escalas.ausenciaFimAntes,d();else{try{await We(e)}catch(e){console.error(`Escalas: a ausência não foi gravada.`,e),f(o.escalas.ausenciaNaoSalva,`danger`);return}A=null,f(o.escalas.ausenciaSalva),await M(),d()}}async function bt(e){if(await m({titulo:o.escalas.excluirAusenciaTitulo,rotuloConfirmar:o.acoes.excluir,variante:`danger`})){try{await Ke(e)}catch(e){console.error(`Escalas: a ausência não foi excluída.`,e),f(o.escalas.ausenciaNaoExcluida,`danger`);return}A=null,f(o.escalas.ausenciaExcluida),await M(),d()}}function xt(e){return _.filter(t=>t.id===e||t.ativo===1&&(t.congregacao_id===null||t.congregacao_id===E))}function St(n){return e`
    <kk-dialog
      open
      class="ausencia-form"
      label=${n.id===void 0?o.escalas.novaAusencia:o.escalas.editarAusencia}
      @kk-request-close=${ae}
      @kk-initial-focus=${oe}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-select
          name="pessoa"
          label=${o.escalas.pessoa}
          .value=${String(n.pessoa_id??0)}
          @kk-change=${e=>{let t=Number(P(e));Y({pessoa_id:Number.isInteger(t)&&t>0?t:null})}}
        >
          <kk-option value="0">${o.escalas.pessoaNenhuma}</kk-option>
          ${xt(n.pessoa_id).map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
        </kk-select>
        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${s}
            name="inicio"
            label=${o.escalas.inicio}
            .value=${n.inicio}
            @kk-change=${e=>Y({inicio:P(e)})}
          ></kk-date-picker>
          <kk-date-picker
            .valueFormatter=${s}
            name="fim"
            label=${o.escalas.fim}
            help-text=${o.escalas.fimAjuda}
            clearable
            .value=${n.fim}
            @kk-change=${e=>Y({fim:P(e)})}
          ></kk-date-picker>
        </div>
        <kk-input
          name="motivo"
          label=${o.escalas.motivo}
          help-text=${o.escalas.motivoAjuda}
          .value=${n.motivo}
          @kk-input=${e=>Y({motivo:P(e)})}
        ></kk-input>
        ${j===``?t:e`<p class="erro" role="alert">${j}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&bt(A.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${o.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${o.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&yt(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${o.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Ct(){let n=new Set(xt(null).map(e=>e.id)),r=l(),i=ke(b.filter(e=>e.pessoa_id!==null&&n.has(e.pessoa_id)),r);return i.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="plane-departure"></kk-icon>
        <p>${o.escalas.semAusencias}</p>
        <kk-button variant="primary" @click=${()=>J(h())}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${o.escalas.novaAusencia}
        </kk-button>
      </div>
    `:e`
    <div class="lista">
      ${i.map(n=>{let i=(n.fim===``?n.inicio:n.fim)<r,s=o.escalas.periodo(a(n.inicio),a(n.fim));return e`
          <button
            class="linha"
            data-ausencia=${n.id??0}
            ?data-passada=${i}
            @click=${()=>J(n)}
          >
            <kk-icon class="linha__icone" name="plane-departure"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">${z(n.pessoa_id)}</span>
              <span class="linha__sub">
                ${[s,n.motivo].filter(e=>e!==``).join(` · `)}
              </span>
            </span>
            ${i?e`<span class="linha__selo">${o.escalas.passada}</span>`:t}
            <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
          </button>
        `})}
    </div>
  `}var X=[`escala`,`funcoes`,`ausencias`],wt={escala:`#/escalas`,funcoes:`#/escalas/funcoes`,ausencias:`#/escalas/ausencias`},Tt={escala:`calendar-user`,funcoes:`list-details`,ausencias:`plane-departure`};function Et(e){return e===`funcoes`?o.escalas.abaFuncoes:e===`ausencias`?o.escalas.abaAusencias:o.escalas.abaEscala}var Z=`escala`,Q=null;function $(e,t=!1){Z=e,history.replaceState(history.state,``,wt[e]),d(),t&&document.querySelector(`#escalas-aba-${e}`)?.focus()}function Dt(e){let t=X.indexOf(Z),n=e.key===`ArrowRight`?X[(t+1)%X.length]:e.key===`ArrowLeft`?X[(t-1+X.length)%X.length]:e.key===`Home`?X[0]:e.key===`End`?X[X.length-1]:void 0;n!==void 0&&(e.preventDefault(),$(n,!0))}function Ot(){return e`
    <div class="chips" role="tablist" aria-label=${o.escalas.abas}>
      ${X.map(t=>e`
          <button
            type="button"
            class="chip"
            role="tab"
            id=${`escalas-aba-${t}`}
            aria-controls="escalas-painel"
            aria-selected=${Z===t}
            tabindex=${Z===t?0:-1}
            ?data-ativo=${Z===t}
            @click=${()=>$(t)}
            @keydown=${Dt}
          >
            <kk-icon name=${Tt[t]}></kk-icon>
            ${Et(t)}
          </button>
        `)}
    </div>
  `}function kt(){return g.length<2?t:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${o.escalas.congregacao}
        .value=${String(E??0)}
        @kk-change=${e=>{let t=Number(P(e));E=Number.isInteger(t)&&t>0?t:E,d()}}
      >
        ${g.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function At(){return Z===`funcoes`?vt():Z===`ausencias`?Ct():ut()}var jt={aoVoltar(){return O===null&&A===null?!1:(q(),!0)},acoes(){if(N.terminou&&E!==null){if(Z===`funcoes`)return e`
        <kk-icon-button name="plus" label=${o.escalas.novaFuncao} @click=${ft}></kk-icon-button>
      `;if(Z===`ausencias`)return e`
        <kk-icon-button
          name="plus"
          label=${o.escalas.novaAusencia}
          @click=${()=>J(h())}
        ></kk-icon-button>
      `}},conteudo(n){let r=n.args.join(`/`);if(r!==Q){let e=n.args[0];Z=e===`funcoes`||e===`ausencias`?e:`escala`,Q=r}let i=N.espera();return i===null?g.length===0?e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${o.escalas.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>ne(`congregacoes`)}>
            ${o.escalas.irParaCongregacoes}
          </kk-button>
        </div>
      `:e`
      ${kt()} ${Ot()}
      <div id="escalas-painel" role="tabpanel" aria-labelledby=${`escalas-aba-${Z}`}>
        ${At()}
      </div>
      ${O===null?t:_t(O)}
      ${A===null?t:St(A)}
    `:i}};export{jt as telaEscalas};