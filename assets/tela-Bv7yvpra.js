import{_ as e,c as t,d as n,f as r,m as i}from"./erro-D2swQJCY.js";import{d as a,f as o,m as s,n as c,p as l,u}from"./idioma-DWx-F1Qy.js";import{c as d,r as ee,u as te}from"./data-DpsiKWt9.js";import{i as ne}from"./ordem-Dku36xny.js";import{t as f}from"./notificar-BeOZKYlx.js";import{t as re}from"./contato-Dy5fPzpa.js";import{S as p,b as ie,d as ae,f as oe,v as m,y as h}from"./index-DlNqF4dE.js";import{t as se}from"./carga-K0T2aEed.js";import{t as ce}from"./dados-CLDIGIer.js";import{t as le}from"./dados-CSqH5xEE.js";import{r as ue}from"./regras-D9ek7SGP.js";import{t as de}from"./compartilhar-CutlseMs.js";import{t as fe}from"./dados-DKz64GDZ.js";import{n as pe}from"./dados-CzPr7lOE.js";import{a as me,i as he}from"./regras-DnFPo7QE.js";import{n as ge,t as _e}from"./dados-CP202Yub.js";import{d as ve,f as ye,m as be,r as xe,t as Se}from"./dados-Dnr4l9Zh.js";import{C as Ce,E as we,S as Te,T as Ee,_ as De,a as g,b as Oe,d as ke,g as Ae,h as je,l as Me,o as Ne,s as Pe,v as Fe,w as Ie,x as Le}from"./regras-De2a5D-E.js";import{a as Re,c as ze,d as Be,f as Ve,i as He,l as Ue,n as We,o as Ge,r as Ke,s as qe,t as Je,u as Ye}from"./dados-DyX7PiMd.js";import{t as Xe}from"./papel-Do5yzFDu.js";import{n as Ze,r as Qe,t as $e}from"./relatorio-pDw8OXjy.js";var _=[],v=[],y=[],et=[],b=[],x=[],S=[],C=[],w=new Set,T=new Set,tt=``,E=null,D=d(),O=null,k=new Set,A=null,j=``;async function M(){let e;[_,v,y,et,b,x,S,C,e]=await Promise.all([ce(),le(),fe(),Re(),Je(),We(),He(),Ke(),pe()]),tt=e.nome.trim();let[t,n,r,i]=await Promise.all([ge(),_e(),xe(),Se()]),a=e=>_.find(t=>t.id===e);w=new Set([...he(t,n,e=>{let t=a(e.congregacao_id);return t===void 0?null:me(e.semana,t,S)}),...ve(r,e=>{let t=a(e.congregacao_id);return t===void 0?null:ye(e.semana,t,S)})]),T=be(i),(E===null||!_.some(e=>e.id===E))&&(E=(_.find(t=>t.id===e.congregacao_id)??_[0])?.id??null)}var N=new se(`Escalas`,M);n(`escalas`,()=>{N.esquecer(),O=null,A=null,Q=null});function P(e){return e.target.value}function F(e){return e.target.checked}function I(){return _.find(e=>e.id===E)}function L(){return Le(et.filter(e=>e.congregacao_id===E))}function R(){let e=new Set(L().map(e=>e.id));return C.filter(t=>e.has(t.funcao_id))}function z(e){return e===null?``:v.find(t=>t.id===e)?.nome??``}function B(e){return e===null?``:y.find(t=>t.id===e)?.nome??``}function V(e){return`${c.diasCurtos[ne(e)]??``} ${l(e)}`}function H(){return{dia:V,reuniao:e=>c.congregacoes.reunioes[e],ocupante:e=>z(e.pessoa_id)||B(e.grupo_id),vaga:c.escalas.vaga}}function U(){let[e=0,t=1]=D.split(`-`).map(Number);return s(e,t)}function W(){let e=I();return e===void 0?{reunioes:[],canceladas:[]}:Ee(D,e,S)}function G(e){let t=new Set(e.map(e=>`${e.data}|${e.reuniao}`));return R().filter(e=>t.has(`${e.data}|${e.reuniao}`))}async function nt(){let{reunioes:e}=W(),n=G(e),r=e[0]?.data??`${D}-01`;if(n.some(e=>e.travada===0&&(e.pessoa_id!==null||e.grupo_id!==null))&&!await h({titulo:c.escalas.gerarTitulo,texto:c.escalas.gerarTexto,rotuloConfirmar:c.escalas.gerarDeNovo}))return;let i=Ae({reunioes:e,funcoes:L(),candidatos:e=>Pe(e,v,y,b),ausente:(e,t)=>Ne(e,t,x)||w.has(`${e}|${t}`)||T.has(`${e}|${t}`),anteriores:R().filter(e=>e.data<r),atuais:n});try{await ze(Fe(i,n))}catch(e){console.error(`Escalas: a geração falhou.`,e),f(c.escalas.naoGerado,`danger`);return}let a=i.filter(e=>e.pessoa_id===null&&e.grupo_id===null).length;f(a===0?c.escalas.gerado:`${c.escalas.gerado} ${c.escalas.vagasVazias(a)}.`),await M(),t()}function rt(e,t,n,r){let i=`${e.tipo===`grupo`?`g`:`p`}:${e.id}`,o=t.get(i)??``;return[e.nome,`—`,o===``?c.escalas.nunca:c.escalas.ultimaVez(a(o)),e.tipo===`pessoa`&&Ne(e.id,n,x)?`· ${c.escalas.ausente}`:``,e.tipo===`pessoa`&&w.has(`${e.id}|${n}`)?`· ${c.escalas.temParte}`:``,e.tipo===`pessoa`&&T.has(`${e.id}|${n}`)?`· ${c.escalas.foraNoDia}`:``,r.has(i)?`· ${c.escalas.jaNoDia}`:``].filter(e=>e!==``).join(` `)}function it(n,r){let i=Pe(n,v,y,b),a=we(n.id??0,R(),r.data),o=new Set(R().filter(e=>e.data===r.data&&e.id!==r.id).flatMap(e=>e.pessoa_id===null?e.grupo_id===null?[]:[`g:${e.grupo_id}`]:[`p:${e.pessoa_id}`])),s=r.pessoa_id??r.grupo_id,l=s===null||i.some(e=>e.id===s)?i:[{tipo:n.gira,id:s,nome:z(r.pessoa_id)||B(r.grupo_id)},...i],u=s??0,d=!0;m(c.escalas.escolherTitulo(n.nome,V(r.data)),!1,(t,n,i)=>e`
      <div class="formulario escala-escolha">
        <kk-select
          name="ocupante"
          label=${c.escalas.quem}
          .value=${String(u)}
          @kk-change=${e=>{u=Number(P(e))||0,i()}}
        >
          <kk-option value="0">${c.escalas.vagaVazia}</kk-option>
          ${l.map(t=>e`
              <kk-option value=${String(t.id)}>
                ${rt(t,a,r.data,o)}
              </kk-option>
            `)}
        </kk-select>
        <kk-switch
          name="travada"
          help-text=${c.escalas.travadaAjuda}
          ?checked=${d}
          @kk-change=${e=>{d=F(e)}}
        >
          ${c.escalas.travada}
        </kk-switch>
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${()=>t(!1)}>${c.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>t(!0)}>
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    `,{formulario:!0,classe:`escala-escolha-dialogo`}).then(async e=>{if(!e)return;let n=l.find(e=>e.id===u)??null;try{await Ye(Me(r,n,+!!d))}catch(e){console.error(`Escalas: a célula não foi gravada.`,e),f(c.escalas.celulaNaoSalva,`danger`);return}f(c.escalas.celulaSalva),await M(),t()})}function at(n,r){let a=S.find(e=>e.congregacao_id===E&&e.data===n&&e.reuniao===r),s=a===void 0?`normal`:a.nova_data===``?`nao`:`outro`,l=a?.nova_data??``,u=``;m(c.escalas.excecaoTitulo(c.congregacoes.reunioes[r],V(n)),!1,(t,r,a)=>e`
      <div class="formulario">
        <kk-select
          name="modo"
          label=${c.escalas.excecaoQuando}
          .value=${s}
          @kk-change=${e=>{let t=P(e);s=t===`outro`||t===`nao`?t:`normal`,a()}}
        >
          <kk-option value="normal">${c.escalas.excecaoNormal(V(n))}</kk-option>
          <kk-option value="outro">${c.escalas.excecaoOutroDia}</kk-option>
          <kk-option value="nao">${c.escalas.excecaoNaoHa}</kk-option>
        </kk-select>
        ${s===`outro`?e`
              <kk-date-picker
                .valueFormatter=${o}
                name="nova_data"
                label=${c.escalas.excecaoData}
                .value=${l}
                @kk-change=${e=>{l=P(e)}}
              ></kk-date-picker>
            `:i}
        <p class="caixas__ajuda">${c.escalas.excecaoAjuda}</p>
        ${u===``?i:e`<p class="erro" role="alert">${u}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${()=>t(!1)}>${c.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{s===`outro`&&!/^\d{4}-\d{2}-\d{2}$/.test(l)?(u=c.escalas.excecaoSemData,a()):t(!0)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    `,{formulario:!0}).then(async e=>{if(!e||E===null)return;let i=s===`normal`?n:s===`nao`?``:l;try{await ze(De(E,n,r,i,S,R()))}catch(e){console.error(`Escalas: a exceção não foi gravada.`,e),f(c.escalas.excecaoNaoSalva,`danger`);return}f(c.escalas.excecaoSalva),await M(),t()})}async function ot(){let{reunioes:e}=W(),t=c.escalas.titulo(U()),n=$e(e,L(),G(e),H()),r=I()?.nome??``,i=c.escalas.rodape(u(Date.now()),tt),a=JSON.stringify([t,r,n,i]),o=oe(a)??await ae(a);if(o===void 0)return;let s=Xe(t,r,n,i,o);try{let e=await de(s,c.escalas.arquivo(D),`application/pdf`,t);e===`compartilhado`&&f(c.escalas.compartilhado),e===`baixado`&&f(c.escalas.baixado)}catch(e){console.error(`Escalas: a entrega do PDF falhou.`,e),f(c.escalas.naoCompartilhado,`danger`)}}function st(){let{reunioes:t}=W(),n=G(t),r=[c.escalas.titulo(U()),I()?.nome??``].filter(e=>e!==``).join(` — `),a=Qe(r,$e(t,L(),n,H())),o=Ze(t,L(),n,y,H()),s=v.filter(e=>e.id!==void 0&&o.has(e.id));m(c.escalas.enviar,null,()=>e`
      <div class="formulario escala-envio">
        <kk-button variant="primary" name="pdf" @click=${()=>void ot()}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${c.escalas.pdf}
        </kk-button>
        <p class="caixas__ajuda">${c.escalas.pdfAjuda}</p>

        <kk-button
          name="whatsapp"
          href=${`https://wa.me/?text=${encodeURIComponent(a)}`}
          target="_blank"
        >
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${c.escalas.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${c.escalas.whatsappAjuda}</p>

        <h3 class="secao">${c.escalas.lembretes}</h3>
        <p class="caixas__ajuda">${c.escalas.lembretesAjuda}</p>
        ${s.length===0?e`<p class="vazio">${c.escalas.semLembretes}</p>`:e`
              <div class="escala-envio__lembretes">
                ${s.map(t=>{let n=re(t.telefone),r=c.escalas.lembrete(t.nome,U(),o.get(t.id??0)??[]);return e`
                    <kk-button
                      size="small"
                      data-lembrete=${t.id??0}
                      href=${n===``?i:`https://wa.me/${n}?text=${encodeURIComponent(r)}`}
                      target="_blank"
                      ?disabled=${n===``}
                    >
                      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
                      ${n===``?`${t.nome} (${c.escalas.semTelefone})`:t.nome}
                    </kk-button>
                  `})}
              </div>
            `}
      </div>
    `,{classe:`escala-envio-dialogo`})}function ct(t,n){let r=z(n.pessoa_id)||B(n.grupo_id);return e`
    <button
      type="button"
      class="escala__vaga"
      data-vaga=${`${n.funcao_id}-${n.vaga}`}
      ?data-vazia=${r===``}
      @click=${()=>it(t,n)}
    >
      ${n.travada===1?e`<kk-icon name="lock" label=${c.escalas.travada}></kk-icon>`:i}
      ${r===``?c.escalas.vaga:r}
    </button>
  `}function lt(t,n){let r=[V(t.data),c.congregacoes.reunioes[t.reuniao],t.hora].filter(e=>e!==``).join(` · `);return e`
    <section class="escala__reuniao" data-data=${t.data} data-reuniao=${t.reuniao}>
      <header class="escala__cabecalho">
        <h3 class="escala__titulo">
          ${r}
          ${t.movida?e`<span class="escala__movida">${c.escalas.movida(V(t.original))}</span>`:i}
        </h3>
        <kk-icon-button
          name="calendar-event"
          label=${c.escalas.mudar}
          @click=${()=>at(t.original,t.reuniao)}
        ></kk-icon-button>
      </header>
      ${L().filter(e=>ke(e,t.reuniao)).map(r=>{let i=Array.from({length:r.vagas},(e,i)=>{let a=i+1;return n.find(e=>e.funcao_id===r.id&&e.data===t.data&&e.reuniao===t.reuniao&&e.vaga===a)??{funcao_id:r.id??0,data:t.data,reuniao:t.reuniao,vaga:a,pessoa_id:null,grupo_id:null,travada:0}});return e`
            <div class="escala__linha">
              <span class="escala__funcao">${r.nome}</span>
              <span class="escala__vagas">${i.map(e=>ct(r,e))}</span>
            </div>
          `})}
    </section>
  `}function ut(){let n=I();if(n===void 0)return i;if(n.dia_meio_de_semana===null&&n.dia_fim_de_semana===null)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar-event"></kk-icon>
        <p>${c.escalas.semDias}</p>
        <kk-button variant="primary" @click=${()=>r(`congregacoes`)}>
          ${c.escalas.irParaCongregacoes}
        </kk-button>
      </div>
    `;if(L().length===0)return e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar-user"></kk-icon>
        <p>${c.escalas.semFuncoes}</p>
        <kk-button variant="primary" @click=${()=>$(`funcoes`)}>
          ${c.escalas.irParaFuncoes}
        </kk-button>
      </div>
    `;let{reunioes:a,canceladas:o}=W(),s=G(a);return e`
    <div class="escala__mes">
      <kk-icon-button
        name="chevron-left"
        label=${c.escalas.mesAnterior}
        @click=${()=>{D=te(D,-1),t()}}
      ></kk-icon-button>
      <h2 class="escala__nome-do-mes" aria-live="polite">${U()}</h2>
      <kk-icon-button
        name="chevron-right"
        label=${c.escalas.mesSeguinte}
        @click=${()=>{D=te(D,1),t()}}
      ></kk-icon-button>
    </div>

    <div class="escala__acoes">
      <kk-button variant="primary" name="gerar" ?disabled=${a.length===0} @click=${()=>void nt()}>
        <kk-icon slot="prefix" name="arrows-shuffle"></kk-icon>${c.escalas.gerar}
      </kk-button>
      <kk-button name="enviar" ?disabled=${s.length===0} @click=${st}>
        <kk-icon slot="prefix" name="send"></kk-icon>${c.escalas.enviar}
      </kk-button>
    </div>

    ${a.length===0?e`<p class="vazio">${c.escalas.semReunioes}</p>`:a.map(e=>lt(e,s))}

    ${o.length===0?i:e`
          <h3 class="secao">${c.escalas.canceladas}</h3>
          <div class="lista">
            ${o.map(t=>e`
                <button
                  class="linha"
                  data-cancelada=${t.original}
                  @click=${()=>at(t.original,t.reuniao)}
                >
                  <kk-icon class="linha__icone" name="calendar-off"></kk-icon>
                  <span class="linha__texto">
                    <span class="linha__rotulo">
                      ${V(t.original)} · ${c.congregacoes.reunioes[t.reuniao]}
                    </span>
                    <span class="linha__sub">${c.escalas.voltarAoNormal}</span>
                  </span>
                  <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                </button>
              `)}
          </div>
        `}
  `}function dt(e){O={...e,papeis:[...e.papeis]},k=new Set(b.filter(t=>t.funcao_id===e.id).map(e=>e.pessoa_id)),j=``,t()}function ft(){if(E===null)return;let e=L().at(-1);dt({...je(E),ordem:(e?.ordem??0)+1})}function K(e){O!==null&&(O={...O,...e})}function q(){O=null,A=null,j=``,t()}async function pt(e){let n=Ie(e);if(n!==null)j=n===`sem_nome`?c.escalas.funcaoSemNome:c.escalas.funcaoSemReuniao,t();else{try{await Be(e,k,b)}catch(e){console.error(`Escalas: a função não foi gravada.`,e),f(c.escalas.funcaoNaoSalva,`danger`);return}O=null,f(c.escalas.funcaoSalva),await M(),t()}}async function mt(e){if(await h({titulo:c.escalas.excluirFuncaoTitulo,texto:c.escalas.excluirFuncaoTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await qe(e)}catch(e){console.error(`Escalas: a função não foi excluída.`,e),f(c.escalas.funcaoNaoExcluida,`danger`);return}O=null,f(c.escalas.funcaoExcluida),await M(),t()}}async function ht(e,n){let r=L(),i=r.indexOf(e),a=r[i+n];if(a===void 0)return;let o=e.ordem===a.ordem?{...e,ordem:i}:e,s=e.ordem===a.ordem?{...a,ordem:i+n}:a;try{await Ve(o,s)}catch(e){console.error(`Escalas: a ordem não foi gravada.`,e),f(c.app.acaoFalhou,`danger`);return}await M(),t()}function gt(e){let t=e.meio_de_semana===1&&e.fim_de_semana===1?c.escalas.resumoReunioes.as_duas:e.meio_de_semana===1?c.escalas.resumoReunioes.meio_de_semana:c.escalas.resumoReunioes.fim_de_semana,n=b.filter(t=>t.funcao_id===e.id).length;return[c.escalas.resumoVagas(e.vagas),t,e.gira===`grupo`?c.escalas.resumoGrupo:``,e.por_semana===1?c.escalas.resumoSemana:``,e.sexo===`masculino`?c.escalas.sexoMasculino:``,e.sexo===`feminino`?c.escalas.sexoFeminino:``,...e.papeis.map(e=>c.papeis[e]),e.so_escolhidos===1?c.escalas.resumoEscolhidos(n):``].filter(e=>e!==``).join(` · `)}function _t(n){let r=n.gira===`pessoa`,a=v.filter(e=>e.id!==void 0&&(e.ativo===1&&(e.congregacao_id===null||e.congregacao_id===n.congregacao_id)&&Te(n,e)||k.has(e.id)));return e`
    <kk-dialog
      open
      class="funcao-form"
      label=${n.id===void 0?c.escalas.novaFuncao:c.escalas.editarFuncao}
      @kk-request-close=${p}
      @kk-initial-focus=${ie}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-input
          name="nome"
          label=${c.escalas.funcaoNome}
          placeholder=${c.escalas.funcaoNomePlaceholder}
          required
          .value=${n.nome}
          @kk-input=${e=>K({nome:P(e)})}
        ></kk-input>

        <kk-input
          name="vagas"
          type="number"
          min="1"
          max=${20}
          label=${c.escalas.vagas}
          help-text=${c.escalas.vagasAjuda}
          .value=${String(n.vagas)}
          @kk-input=${e=>K({vagas:Number(P(e))})}
        ></kk-input>

        <fieldset class="caixas" data-grupo="reunioes">
          <legend class="caixas__titulo">${c.escalas.emQuais}</legend>
          <kk-checkbox
            value="meio_de_semana"
            ?checked=${n.meio_de_semana===1}
            @kk-change=${e=>K({meio_de_semana:+!!F(e)})}
          >
            ${c.congregacoes.reunioes.meio_de_semana}
          </kk-checkbox>
          <kk-checkbox
            value="fim_de_semana"
            ?checked=${n.fim_de_semana===1}
            @kk-change=${e=>K({fim_de_semana:+!!F(e)})}
          >
            ${c.congregacoes.reunioes.fim_de_semana}
          </kk-checkbox>
        </fieldset>

        <kk-select
          name="gira"
          label=${c.escalas.gira}
          .value=${n.gira}
          @kk-change=${e=>{K({gira:P(e)===`grupo`?`grupo`:`pessoa`}),t()}}
        >
          <kk-option value="pessoa">${c.escalas.giraPessoa}</kk-option>
          <kk-option value="grupo">${c.escalas.giraGrupo}</kk-option>
        </kk-select>

        <kk-switch
          name="por_semana"
          help-text=${c.escalas.porSemanaAjuda}
          ?checked=${n.por_semana===1}
          @kk-change=${e=>K({por_semana:+!!F(e)})}
        >
          ${c.escalas.porSemana}
        </kk-switch>

        ${r?e`
              <kk-select
                name="sexo"
                label=${c.escalas.sexo}
                .value=${n.sexo===``?`qualquer`:n.sexo}
                @kk-change=${e=>{let n=P(e);K({sexo:n===`masculino`||n===`feminino`?n:``}),t()}}
              >
                <kk-option value="qualquer">${c.escalas.sexoQualquer}</kk-option>
                <kk-option value="masculino">${c.escalas.sexoMasculino}</kk-option>
                <kk-option value="feminino">${c.escalas.sexoFeminino}</kk-option>
              </kk-select>

              <fieldset class="caixas" data-grupo="papeis">
                <legend class="caixas__titulo">${c.escalas.papeis}</legend>
                ${ue.map(r=>e`
                    <kk-checkbox
                      value=${r}
                      ?checked=${n.papeis.includes(r)}
                      @kk-change=${e=>{if(O===null)return;let n=F(e)?[...O.papeis,r]:O.papeis.filter(e=>e!==r);K({papeis:ue.filter(e=>n.includes(e))}),t()}}
                    >
                      ${c.papeis[r]}
                    </kk-checkbox>
                  `)}
                <p class="caixas__ajuda">${c.escalas.papeisAjuda}</p>
              </fieldset>

              <kk-switch
                name="so_escolhidos"
                help-text=${c.escalas.soEscolhidosAjuda}
                ?checked=${n.so_escolhidos===1}
                @kk-change=${e=>{K({so_escolhidos:+!!F(e)}),t()}}
              >
                ${c.escalas.soEscolhidos}
              </kk-switch>

              ${n.so_escolhidos===1?e`
                    <fieldset class="caixas" data-grupo="escolhidos">
                      <legend class="caixas__titulo">${c.escalas.escolhidos}</legend>
                      ${a.map(t=>e`
                          <kk-checkbox
                            value=${String(t.id)}
                            ?checked=${k.has(t.id??0)}
                            @kk-change=${e=>{F(e)?k.add(t.id??0):k.delete(t.id??0)}}
                          >
                            ${t.nome}
                          </kk-checkbox>
                        `)}
                      ${a.length===0?e`<p class="caixas__ajuda">${c.escalas.escolhidosVazio}</p>`:i}
                    </fieldset>
                  `:i}
            `:i}

        ${j===``?i:e`<p class="erro" role="alert">${j}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{O?.id!==void 0&&mt(O.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${c.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${c.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{O!==null&&pt(O)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function vt(){let t=L();return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar-user"></kk-icon>
        <p>${c.escalas.semFuncoes}</p>
        <kk-button variant="primary" @click=${ft}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${c.escalas.novaFuncao}
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
              label=${c.escalas.subir}
              ?disabled=${r===0}
              @click=${()=>void ht(n,-1)}
            ></kk-icon-button>
            <kk-icon-button
              name="arrow-down"
              label=${c.escalas.descer}
              ?disabled=${r===t.length-1}
              @click=${()=>void ht(n,1)}
            ></kk-icon-button>
          </div>
        `)}
    </div>
  `}function J(e){A={...e},j=``,t()}function Y(e){A!==null&&(A={...A,...e})}async function yt(e){let n=Ce(e);if(n!==null)j=n===`sem_pessoa`?c.escalas.ausenciaSemPessoa:n===`sem_inicio`?c.escalas.ausenciaSemInicio:c.escalas.ausenciaFimAntes,t();else{try{await Ue(e)}catch(e){console.error(`Escalas: a ausência não foi gravada.`,e),f(c.escalas.ausenciaNaoSalva,`danger`);return}A=null,f(c.escalas.ausenciaSalva),await M(),t()}}async function bt(e){if(await h({titulo:c.escalas.excluirAusenciaTitulo,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await Ge(e)}catch(e){console.error(`Escalas: a ausência não foi excluída.`,e),f(c.escalas.ausenciaNaoExcluida,`danger`);return}A=null,f(c.escalas.ausenciaExcluida),await M(),t()}}function xt(e){return v.filter(t=>t.id===e||t.ativo===1&&(t.congregacao_id===null||t.congregacao_id===E))}function St(t){return e`
    <kk-dialog
      open
      class="ausencia-form"
      label=${t.id===void 0?c.escalas.novaAusencia:c.escalas.editarAusencia}
      @kk-request-close=${p}
      @kk-initial-focus=${ie}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-select
          name="pessoa"
          label=${c.escalas.pessoa}
          .value=${String(t.pessoa_id??0)}
          @kk-change=${e=>{let t=Number(P(e));Y({pessoa_id:Number.isInteger(t)&&t>0?t:null})}}
        >
          <kk-option value="0">${c.escalas.pessoaNenhuma}</kk-option>
          ${xt(t.pessoa_id).map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
        </kk-select>
        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${o}
            name="inicio"
            label=${c.escalas.inicio}
            .value=${t.inicio}
            @kk-change=${e=>Y({inicio:P(e)})}
          ></kk-date-picker>
          <kk-date-picker
            .valueFormatter=${o}
            name="fim"
            label=${c.escalas.fim}
            help-text=${c.escalas.fimAjuda}
            clearable
            .value=${t.fim}
            @kk-change=${e=>Y({fim:P(e)})}
          ></kk-date-picker>
        </div>
        <kk-input
          name="motivo"
          label=${c.escalas.motivo}
          help-text=${c.escalas.motivoAjuda}
          .value=${t.motivo}
          @kk-input=${e=>Y({motivo:P(e)})}
        ></kk-input>
        ${j===``?i:e`<p class="erro" role="alert">${j}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${t.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{A?.id!==void 0&&bt(A.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${c.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${q}>${c.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{A!==null&&yt(A)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Ct(){let t=new Set(xt(null).map(e=>e.id)),n=ee(),r=Oe(x.filter(e=>e.pessoa_id!==null&&t.has(e.pessoa_id)),n);return r.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="plane-departure"></kk-icon>
        <p>${c.escalas.semAusencias}</p>
        <kk-button variant="primary" @click=${()=>J(g())}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${c.escalas.novaAusencia}
        </kk-button>
      </div>
    `:e`
    <div class="lista">
      ${r.map(t=>{let r=(t.fim===``?t.inicio:t.fim)<n,o=c.escalas.periodo(a(t.inicio),a(t.fim));return e`
          <button
            class="linha"
            data-ausencia=${t.id??0}
            ?data-passada=${r}
            @click=${()=>J(t)}
          >
            <kk-icon class="linha__icone" name="plane-departure"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">${z(t.pessoa_id)}</span>
              <span class="linha__sub">
                ${[o,t.motivo].filter(e=>e!==``).join(` · `)}
              </span>
            </span>
            ${r?e`<span class="linha__selo">${c.escalas.passada}</span>`:i}
            <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
          </button>
        `})}
    </div>
  `}var X=[`escala`,`funcoes`,`ausencias`],wt={escala:`#/escalas`,funcoes:`#/escalas/funcoes`,ausencias:`#/escalas/ausencias`},Tt={escala:`calendar-user`,funcoes:`list-details`,ausencias:`plane-departure`};function Et(e){return e===`funcoes`?c.escalas.abaFuncoes:e===`ausencias`?c.escalas.abaAusencias:c.escalas.abaEscala}var Z=`escala`,Q=null;function $(e,n=!1){Z=e,history.replaceState(history.state,``,wt[e]),t(),n&&document.querySelector(`#escalas-aba-${e}`)?.focus()}function Dt(e){let t=X.indexOf(Z),n=e.key===`ArrowRight`?X[(t+1)%X.length]:e.key===`ArrowLeft`?X[(t-1+X.length)%X.length]:e.key===`Home`?X[0]:e.key===`End`?X[X.length-1]:void 0;n!==void 0&&(e.preventDefault(),$(n,!0))}function Ot(){return e`
    <div class="chips" role="tablist" aria-label=${c.escalas.abas}>
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
  `}function kt(){return _.length<2?i:e`
    <div class="filtros">
      <kk-select
        name="congregacao"
        label=${c.escalas.congregacao}
        .value=${String(E??0)}
        @kk-change=${e=>{let n=Number(P(e));E=Number.isInteger(n)&&n>0?n:E,t()}}
      >
        ${_.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>
    </div>
  `}function At(){return Z===`funcoes`?vt():Z===`ausencias`?Ct():ut()}var jt={aoVoltar(){return O===null&&A===null?!1:(q(),!0)},acoes(){if(N.terminou&&E!==null){if(Z===`funcoes`)return e`
        <kk-icon-button name="plus" label=${c.escalas.novaFuncao} @click=${ft}></kk-icon-button>
      `;if(Z===`ausencias`)return e`
        <kk-icon-button
          name="plus"
          label=${c.escalas.novaAusencia}
          @click=${()=>J(g())}
        ></kk-icon-button>
      `}},conteudo(t){let n=t.args.join(`/`);if(n!==Q){let e=t.args[0];Z=e===`funcoes`||e===`ausencias`?e:`escala`,Q=n}let a=N.espera();return a===null?_.length===0?e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${c.escalas.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>r(`congregacoes`)}>
            ${c.escalas.irParaCongregacoes}
          </kk-button>
        </div>
      `:e`
      ${kt()} ${Ot()}
      <div id="escalas-painel" role="tabpanel" aria-labelledby=${`escalas-aba-${Z}`}>
        ${At()}
      </div>
      ${O===null?i:_t(O)}
      ${A===null?i:St(A)}
    `:a}};export{jt as telaEscalas};