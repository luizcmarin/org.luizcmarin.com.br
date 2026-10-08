import{_ as e,c as t,d as n,f as r,m as i}from"./erro-Bc0C-0ww.js";import{d as a,f as o,n as s,u as c}from"./idioma-CVgIQtmc.js";import{r as l}from"./data-DpsiKWt9.js";import{t as u}from"./ordem-Dku36xny.js";import{n as d}from"./texto-CuPUCLMw.js";import{t as f}from"./notificar-BeOZKYlx.js";import{t as ee}from"./contato-Dy5fPzpa.js";import{S as p,b as m,d as te,f as ne,v as h,y as g}from"./index-CCl639Mp.js";import{t as re}from"./carga-N4u32e31.js";import{t as ie}from"./dados-CAIyjVFG.js";import{t as ae}from"./dados-9wsuHbxQ.js";import{t as oe}from"./compartilhar-CutlseMs.js";import{n as se}from"./dados-gu31gVbW.js";import{t as _}from"./papel-kXKxXeCB.js";import{r as v}from"./relatorio-pDw8OXjy.js";import{S as y,_ as b,a as x,c as S,d as C,f as ce,g as le,h as ue,i as de,l as w,m as fe,n as pe,o as me,p as T,r as he,s as ge,t as _e,v as ve,y as E}from"./dados-C23Cbrqe.js";function ye(e,t,n,r){let i=ve(t,n);return[...e].sort(T).map(e=>{let t=i.filter(t=>t.territorio_id===e.id);return{titulo:C(e),linhas:t.length===0?[{funcao:r.naoSaiu,nomes:``}]:t.map(e=>({funcao:r.pessoa(e.pessoa_id),nomes:r.periodo(e.saida,e.volta)}))}})}function be(e,t,n,r){return{titulo:e,linhas:[...t].sort(T).map(e=>{let{aberta:t}=E(e,n);return{funcao:C(e),nomes:t===null?r.disponivel:`${r.pessoa(t.pessoa_id)} (${r.desde(r.data(t.saida))})`}})}}var D=[],O=[],k=[],A=[],j=``,M=null,N=`todos`,P=``,F=null,I=null,L=``;async function R(){let e;[D,O,k,A,e]=await Promise.all([ie(),ae(),pe(),_e(),se()]),j=e.nome.trim(),(M===null||!D.some(e=>e.id===M))&&(M=(D.find(t=>t.id===e.congregacao_id)??D[0])?.id??null)}var z=new re(`Territórios`,R);n(`territorios`,()=>{z.esquecer(),F=null,I=null});function B(e){return e.target.value}function V(){return D.find(e=>e.id===M)}function H(e){return e===null?``:O.find(t=>t.id===e)?.nome??``}function U(){return k.filter(e=>e.congregacao_id===M)}function W(){let e=new Set(U().map(e=>e.id));return A.filter(t=>e.has(t.territorio_id))}function G(e){let t=Number(e.args[0]),n=k.find(e=>e.id===t);return n?.id===void 0?void 0:n}function K(){return{pessoa:H,data:a,periodo:(e,t)=>t===``?s.territorios.periodoAberto(a(e)):s.territorios.periodo(a(e),a(t)),naoSaiu:s.territorios.naoSaiu,disponivel:s.territorios.disponivel,desde:e=>s.territorios.desde(e)}}function q(e){let{aberta:t,ultimaVolta:n}=E(e,A),r=l();return t===null?n===``?s.territorios.nuncaSaiu:s.territorios.disponivelDesde(a(n),w(n,r)):s.territorios.comAlguem(H(t.pessoa_id),a(t.saida),w(t.saida,r))}function J(){F=null,I=null,L=``,t()}function Y(e){F!==null&&(F={...F,...e})}async function xe(){if(F===null)return;let e=ue(F,k);if(e!==null){L=e.motivo===`repetido`?s.territorios.repetido(C(e.de)):e.motivo===`sem_numero`?s.territorios.semNumero:s.territorios.mapaTorto,t();return}let n=F.id===void 0,i;try{i=await me(F)}catch(e){console.error(`Territórios: o cartão não foi gravado.`,e),f(s.territorios.naoSalvo,`danger`);return}F=null,L=``,f(s.territorios.salvo),await R(),n&&i>0?r(`territorios/${i}`):t()}async function Se(e){if(await g({titulo:s.territorios.excluirTitulo,texto:s.territorios.excluirTexto(b(e.id,A).length),rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await de(e.id)}catch(e){console.error(`Territórios: o cartão não foi excluído.`,e),f(s.territorios.naoExcluido,`danger`);return}await R(),r(`territorios`)}}function X(t){return e`
    <kk-dialog
      open
      class="territorio-form"
      label=${t.id===void 0?s.territorios.novo:s.territorios.editar}
      @kk-request-close=${p}
      @kk-initial-focus=${m}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&J()}}
    >
      <div class="formulario">
        <div class="formulario__par">
          <kk-input
            name="numero"
            label=${s.territorios.numero}
            required
            .value=${t.numero}
            @kk-input=${e=>Y({numero:B(e)})}
          ></kk-input>
          <kk-input
            name="nome"
            label=${s.territorios.nome}
            placeholder=${s.territorios.nomeExemplo}
            .value=${t.nome}
            @kk-input=${e=>Y({nome:B(e)})}
          ></kk-input>
        </div>
        <kk-input
          name="mapa"
          type="url"
          inputmode="url"
          label=${s.territorios.mapa}
          help-text=${s.territorios.mapaAjuda}
          .value=${t.mapa}
          @kk-input=${e=>Y({mapa:B(e)})}
        ></kk-input>
        <kk-textarea
          name="observacao"
          label=${s.territorios.observacao}
          rows="3"
          .value=${t.observacao}
          @kk-input=${e=>Y({observacao:B(e)})}
        ></kk-textarea>
        ${L===``?i:e`<p class="erro" role="alert">${L}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${J}>${s.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void xe()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Z(e){I!==null&&(I={...I,...e})}var Ce={sem_pessoa:()=>s.territorios.saidaSemPessoa,sem_saida:()=>s.territorios.saidaSemData,volta_antes:()=>s.territorios.voltaAntes,ja_aberta:()=>s.territorios.jaAberta};async function we(){if(I===null)return;let e=fe(I,A);if(e!==null)L=Ce[e](),t();else{try{await x(I)}catch(e){console.error(`Territórios: a saída não foi gravada.`,e),f(s.territorios.saidaNaoSalva,`danger`);return}I=null,L=``,f(s.territorios.saidaSalva),await R(),t()}}async function Te(e){if(await g({titulo:s.territorios.excluirSaidaTitulo,rotuloConfirmar:s.acoes.excluir,variante:`danger`})){try{await he(e)}catch(e){console.error(`Territórios: a saída não foi excluída.`,e),f(s.territorios.saidaNaoExcluida,`danger`);return}I=null,await R(),t()}}function Ee(t){let n=ge(A),r=O.filter(e=>e.id!==void 0&&(e.ativo===1||e.id===t.pessoa_id)&&(e.congregacao_id===null||e.congregacao_id===M)).sort((e,t)=>u(e.nome,t.nome)),a=e=>(n.get(e.id??0)??0)-+(t.id!==void 0&&t.volta===``&&t.pessoa_id===e.id);return e`
    <kk-dialog
      open
      class="saida-form"
      label=${t.id===void 0?s.territorios.designar:s.territorios.editarSaida}
      @kk-request-close=${p}
      @kk-initial-focus=${m}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&J()}}
    >
      <div class="formulario">
        <kk-select
          name="pessoa"
          label=${s.territorios.comQuem}
          .value=${String(t.pessoa_id??0)}
          @kk-change=${e=>{let t=Number(B(e));Z({pessoa_id:Number.isInteger(t)&&t>0?t:null})}}
        >
          <kk-option value="0">${s.territorios.ninguem}</kk-option>
          ${r.map(t=>{let n=a(t),r=[t.ativo===0?s.pautas.inativo(t.nome):t.nome,n>0?`· ${s.territorios.jaTem(n)}`:``].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(t.id)}>${r}</kk-option>`})}
        </kk-select>
        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${o}
            name="saida"
            label=${s.territorios.saida}
            .value=${t.saida}
            @kk-change=${e=>Z({saida:B(e)})}
          ></kk-date-picker>
          <kk-date-picker
            .valueFormatter=${o}
            name="volta"
            label=${s.territorios.volta}
            help-text=${s.territorios.voltaAjuda}
            clearable
            .value=${t.volta}
            @kk-change=${e=>Z({volta:B(e)})}
          ></kk-date-picker>
        </div>
        <kk-input
          name="observacao"
          label=${s.territorios.observacao}
          help-text=${s.territorios.observacaoDaSaidaAjuda}
          .value=${t.observacao}
          @kk-input=${e=>Z({observacao:B(e)})}
        ></kk-input>
        ${L===``?i:e`<p class="erro" role="alert">${L}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${t.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{I?.id!==void 0&&Te(I.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${s.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${J}>${s.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void we()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${s.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function De(e){let t=s.territorios.tituloDoRegistro(e),n=V()?.nome??``,r=ye(U(),W(),e,K()),i=s.territorios.rodape(c(Date.now()),j),a=JSON.stringify([t,n,r,i]),o=ne(a)??await te(a);if(o===void 0)return;let l=_(t,n,r,i,o);try{let n=await oe(l,s.territorios.arquivo(e),`application/pdf`,t);n===`compartilhado`&&f(s.territorios.compartilhado),n===`baixado`&&f(s.territorios.baixado)}catch(e){console.error(`Territórios: a entrega do PDF falhou.`,e),f(s.territorios.naoCompartilhado,`danger`)}}function Oe(){let t=l(),n=[...new Set([S(t),...W().map(e=>S(e.saida))])].sort((e,t)=>t-e),r=n[0]??S(t),i=[s.territorios.situacaoTitulo(a(t)),V()?.nome??``].filter(e=>e!==``).join(` — `),o=v(i,[be(s.territorios.situacao,U(),W(),K())]);h(s.territorios.enviar,null,()=>e`
      <div class="formulario territorios-envio">
        <kk-select
          name="ano"
          label=${s.territorios.anoDeServico}
          .value=${String(r)}
          @kk-change=${e=>{r=Number(B(e))||r}}
        >
          ${n.map(t=>e`<kk-option value=${String(t)}>${s.territorios.ano(t)}</kk-option>`)}
        </kk-select>
        <kk-button variant="primary" name="pdf" @click=${()=>void De(r)}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${s.territorios.pdf}
        </kk-button>
        <p class="caixas__ajuda">${s.territorios.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(o)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${s.territorios.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${s.territorios.whatsappAjuda}</p>
      </div>
    `,{classe:`territorios-envio-dialogo`})}var ke=[`todos`,`disponiveis`,`com_alguem`];function Q(){M!==null&&(F=y(M),L=``,t())}function $(){let n=U(),a=n.filter(e=>E(e,A).aberta!==null).length,o=D.length<2?i:e`
        <kk-select
          name="congregacao"
          label=${s.territorios.congregacao}
          .value=${String(M??0)}
          @kk-change=${e=>{let n=Number(B(e));M=Number.isInteger(n)&&n>0?n:M,t()}}
        >
          ${D.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
        </kk-select>
      `;if(n.length===0)return e`
      <div class="filtros">${o}</div>
      <div class="vazio">
        <kk-icon class="vazio__icone" name="map-2"></kk-icon>
        <p>${s.territorios.vazio}</p>
        <kk-button variant="primary" @click=${Q}>${s.territorios.novo}</kk-button>
      </div>
      ${F===null?i:X(F)}
    `;let c=ce(n,A,N).filter(e=>{if(P.trim()===``)return!0;let t=E(e,A).aberta;return d([e.numero,e.nome,H(t?.pessoa_id??null)].join(` `),P)});return e`
    <div class="filtros">
      ${o}
      <kk-input
        name="busca"
        type="search"
        label=${s.territorios.buscar}
        .value=${P}
        @kk-input=${e=>{P=B(e),t()}}
      ></kk-input>
    </div>
    <div class="chips" role="group" aria-label=${s.territorios.filtro}>
      ${ke.map(n=>e`
          <button
            type="button"
            class="chip"
            data-filtro=${n}
            aria-pressed=${N===n}
            ?data-ativo=${N===n}
            @click=${()=>{N=n,t()}}
          >
            ${s.territorios.filtros[n]}
          </button>
        `)}
    </div>
    <p class="caixas__ajuda">
      ${s.territorios.contagem(n.length,a)}
      ${N===`disponiveis`?` ${s.territorios.ordemDisponiveis}`:``}
    </p>

    <div class="lista">
      ${c.length===0?e`<p class="vazio">${s.territorios.nenhum}</p>`:c.map(t=>e`
                <button
                  class="linha"
                  data-territorio=${t.id??0}
                  ?data-com-alguem=${E(t,A).aberta!==null}
                  @click=${()=>r(`territorios/${t.id}`)}
                >
                  <kk-icon class="linha__icone" name="map-2"></kk-icon>
                  <span class="linha__texto">
                    <span class="linha__rotulo">${C(t)}</span>
                    <span class="linha__sub">${q(t)}</span>
                  </span>
                  <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                </button>
              `)}
    </div>

    <div class="territorios-acoes">
      <kk-button name="enviar" @click=${Oe}>
        <kk-icon slot="prefix" name="send"></kk-icon>${s.territorios.enviar}
      </kk-button>
    </div>
    ${F===null?i:X(F)}
  `}function Ae(t,n){let r=O.find(e=>e.id===n.pessoa_id),o=ee(r?.telefone??``),c=s.territorios.lembrete(r?.nome??``,C(t),a(n.saida));return e`
    <kk-button
      name="lembrete"
      href=${o===``?i:`https://wa.me/${o}?text=${encodeURIComponent(c)}`}
      target="_blank"
      ?disabled=${o===``}
    >
      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
      ${o===``?`${s.territorios.lembreteBotao} (${s.territorios.semTelefone})`:s.territorios.lembreteBotao}
    </kk-button>
  `}function je(n){let{aberta:r}=E(n,A),a=b(n.id,A),o=l();return e`
    <section class="territorio-cartao">
      <dl class="territorio-dados">
        <div class="territorio-dados__par">
          <dt>${s.territorios.numero}</dt>
          <dd>${n.numero}</dd>
        </div>
        <div class="territorio-dados__par">
          <dt>${s.territorios.nome}</dt>
          <dd>${n.nome||s.territorios.vago}</dd>
        </div>
        ${n.observacao===``?i:e`
              <div class="territorio-dados__par">
                <dt>${s.territorios.observacao}</dt>
                <dd>${n.observacao}</dd>
              </div>
            `}
      </dl>
      <div class="territorios-acoes">
        <kk-button size="small" name="editar" @click=${()=>{F={...n},L=``,t()}}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${s.territorios.editar}
        </kk-button>
        ${n.mapa===``?i:e`
              <kk-button size="small" name="mapa" href=${n.mapa} target="_blank">
                <kk-icon slot="prefix" name="external-link"></kk-icon>${s.territorios.abrirMapa}
              </kk-button>
            `}
      </div>
    </section>

    <section class="territorio-situacao" ?data-com-alguem=${r!==null}>
      <h3 class="secao">${s.territorios.situacao}</h3>
      <p class="territorio-situacao__texto">${q(n)}</p>
      <div class="territorios-acoes">
        ${r===null?e`
              <kk-button variant="primary" name="designar" @click=${()=>{I=le(n.id,o),L=``,t()}}>
                <kk-icon slot="prefix" name="user-check"></kk-icon>${s.territorios.designar}
              </kk-button>
            `:e`
              <kk-button variant="primary" name="volta" @click=${()=>{I={...r,volta:o},L=``,t()}}>
                <kk-icon slot="prefix" name="arrow-back-up"></kk-icon>${s.territorios.registrarVolta}
              </kk-button>
              ${Ae(n,r)}
            `}
      </div>
    </section>

    <section class="territorio-historico">
      <h3 class="secao">${s.territorios.historico}</h3>
      ${a.length===0?e`<p class="vazio">${s.territorios.semHistorico}</p>`:e`
            <div class="lista">
              ${a.map(n=>e`
                  <button class="linha" data-saida=${n.id??0} @click=${()=>{I={...n},L=``,t()}}>
                    <kk-icon class="linha__icone" name="user"></kk-icon>
                    <span class="linha__texto">
                      <span class="linha__rotulo">${H(n.pessoa_id)}</span>
                      <span class="linha__sub">
                        ${[K().periodo(n.saida,n.volta),n.observacao].filter(e=>e!==``).join(` · `)}
                      </span>
                    </span>
                    <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                  </button>
                `)}
            </div>
          `}
    </section>

    <div class="territorios-acoes">
      <kk-button class="dialogo__excluir" variant="danger" outline @click=${()=>void Se(n)}>
        <kk-icon slot="prefix" name="trash"></kk-icon>${s.territorios.excluir}
      </kk-button>
    </div>
    ${F===null?i:X(F)}
    ${I===null?i:Ee(I)}
  `}function Me(){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${s.territorios.naoEncontrado}</h2>
      <kk-button @click=${()=>r(`territorios`)}>${s.territorios.voltarALista}</kk-button>
    </div>
  `}var Ne={titulo(e){if(e.args.length===0||!z.terminou)return;let t=G(e);return t===void 0?void 0:s.territorios.tituloDo(C(t))},voltarPara(e){return e.args.length===0?`home`:`territorios`},aoVoltar(){return F===null&&I===null?!1:(J(),!0)},acoes(t){if(!(!z.terminou||M===null||t.args.length>0))return e`
      <kk-icon-button name="plus" label=${s.territorios.novo} @click=${Q}></kk-icon-button>
    `},conteudo(t){let n=z.espera();if(n!==null)return n;if(D.length===0)return e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${s.territorios.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>r(`congregacoes`)}>
            ${s.territorios.irParaCongregacoes}
          </kk-button>
        </div>
      `;if(t.args.length===0)return $();let i=G(t);return i===void 0?Me():je(i)}};export{Ne as telaTerritorios};