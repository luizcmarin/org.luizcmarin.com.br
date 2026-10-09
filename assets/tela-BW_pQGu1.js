import{i as e,t}from"./lit-CL39YOSA.js";import{c as n,l as r,n as i,u as a}from"./idioma-Dwpp7Zfu.js";import{r as o}from"./data-DpsiKWt9.js";import{n as s}from"./texto-CuPUCLMw.js";import{c,d as l,f as u}from"./erro-FHfTMgeP.js";import{t as d}from"./notificar-BeOZKYlx.js";import{t as f}from"./contato-Dy5fPzpa.js";import{D as p,O as m,b as ee,j as h,k as g,x as te}from"./index-sr-LlQKi.js";import{t as _}from"./carga-D_DL_FuH.js";import{f as v}from"./regras-4jjqjfyv.js";import{t as ne}from"./dados-DStJu64q.js";import{t as re}from"./dados-CSKvXkXq.js";import{t as ie}from"./compartilhar-CutlseMs.js";import{n as ae}from"./dados-ClOHCwKW.js";import{t as oe}from"./papel-CuwZqRDH.js";import{r as y}from"./relatorio-C0vfa6yu.js";import{S as b,_ as x,a as S,c as C,d as w,f as se,g as ce,h as le,i as ue,l as T,m as de,n as fe,o as pe,p as E,r as me,s as he,t as ge,v as _e,y as D}from"./dados-BVnufOJ3.js";function ve(e,t,n,r){let i=_e(t,n);return[...e].sort(E).map(e=>{let t=i.filter(t=>t.territorio_id===e.id);return{titulo:w(e),linhas:t.length===0?[{funcao:r.naoSaiu,nomes:``}]:t.map(e=>({funcao:r.pessoa(e.pessoa_id),nomes:r.periodo(e.saida,e.volta)}))}})}function ye(e,t,n,r){return{titulo:e,linhas:[...t].sort(E).map(e=>{let{aberta:t}=D(e,n);return{funcao:w(e),nomes:t===null?r.disponivel:`${r.pessoa(t.pessoa_id)} (${r.desde(r.data(t.saida))})`}})}}var O=[],k=[],A=[],j=[],M=``,N=null,P=`todos`,F=``,I=null,L=null,R=``;async function z(){let e;[O,k,A,j,e]=await Promise.all([ne(),re(),fe(),ge(),ae()]),M=e.nome.trim(),(N===null||!O.some(e=>e.id===N))&&(N=(O.find(t=>t.id===e.congregacao_id)??O[0])?.id??null)}var B=new _(`Territórios`,z);l(`territorios`,()=>{B.esquecer(),I=null,L=null});function V(e){return e.target.value}function H(){return O.find(e=>e.id===N)}function U(e){return e===null?``:k.find(t=>t.id===e)?.nome??``}function W(){return A.filter(e=>e.congregacao_id===N)}function G(){let e=new Set(W().map(e=>e.id));return j.filter(t=>e.has(t.territorio_id))}function K(e){let t=Number(e.args[0]),n=A.find(e=>e.id===t);return n?.id===void 0?void 0:n}function q(){return{pessoa:U,data:r,periodo:(e,t)=>t===``?i.territorios.periodoAberto(r(e)):i.territorios.periodo(r(e),r(t)),naoSaiu:i.territorios.naoSaiu,disponivel:i.territorios.disponivel,desde:e=>i.territorios.desde(e)}}function J(e){let{aberta:t,ultimaVolta:n}=D(e,j),a=o();return t===null?n===``?i.territorios.nuncaSaiu:i.territorios.disponivelDesde(r(n),T(n,a)):i.territorios.comAlguem(U(t.pessoa_id),r(t.saida),T(t.saida,a))}function Y(){I=null,L=null,R=``,c()}function X(e){I!==null&&(I={...I,...e})}async function be(){if(I===null)return;let e=le(I,A);if(e!==null){R=e.motivo===`repetido`?i.territorios.repetido(w(e.de)):e.motivo===`sem_numero`?i.territorios.semNumero:i.territorios.mapaTorto,c();return}let t=I.id===void 0,n;try{n=await pe(I)}catch(e){console.error(`Territórios: o cartão não foi gravado.`,e),d(i.territorios.naoSalvo,`danger`);return}I=null,R=``,d(i.territorios.salvo),await z(),t&&n>0?u(`territorios/${n}`):c()}async function xe(e){if(await m({titulo:i.territorios.excluirTitulo,texto:i.territorios.excluirTexto(x(e.id,j).length),rotuloConfirmar:i.acoes.excluir,variante:`danger`})){try{await ue(e.id)}catch(e){console.error(`Territórios: o cartão não foi excluído.`,e),d(i.territorios.naoExcluido,`danger`);return}await z(),u(`territorios`)}}function Z(n){return e`
    <kk-dialog
      open
      class="territorio-form"
      label=${n.id===void 0?i.territorios.novo:i.territorios.editar}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&Y()}}
    >
      <div class="formulario">
        <div class="formulario__par">
          <kk-input
            name="numero"
            label=${i.territorios.numero}
            required
            .value=${n.numero}
            @kk-input=${e=>X({numero:V(e)})}
          ></kk-input>
          <kk-input
            name="nome"
            label=${i.territorios.nome}
            placeholder=${i.territorios.nomeExemplo}
            .value=${n.nome}
            @kk-input=${e=>X({nome:V(e)})}
          ></kk-input>
        </div>
        <kk-input
          name="mapa"
          type="url"
          inputmode="url"
          label=${i.territorios.mapa}
          help-text=${i.territorios.mapaAjuda}
          .value=${n.mapa}
          @kk-input=${e=>X({mapa:V(e)})}
        ></kk-input>
        <kk-textarea
          name="observacao"
          label=${i.territorios.observacao}
          rows="3"
          .value=${n.observacao}
          @kk-input=${e=>X({observacao:V(e)})}
        ></kk-textarea>
        ${R===``?t:e`<p class="erro" role="alert">${R}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${Y}>${i.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void be()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function Q(e){L!==null&&(L={...L,...e})}var Se={sem_pessoa:()=>i.territorios.saidaSemPessoa,sem_saida:()=>i.territorios.saidaSemData,volta_antes:()=>i.territorios.voltaAntes,ja_aberta:()=>i.territorios.jaAberta};async function Ce(){if(L===null)return;let e=de(L,j);if(e!==null)R=Se[e](),c();else{try{await S(L)}catch(e){console.error(`Territórios: a saída não foi gravada.`,e),d(i.territorios.saidaNaoSalva,`danger`);return}L=null,R=``,d(i.territorios.saidaSalva),await z(),c()}}async function we(e){if(await m({titulo:i.territorios.excluirSaidaTitulo,rotuloConfirmar:i.acoes.excluir,variante:`danger`})){try{await me(e)}catch(e){console.error(`Territórios: a saída não foi excluída.`,e),d(i.territorios.saidaNaoExcluida,`danger`);return}L=null,await z(),c()}}function Te(n){let r=he(j),o=k.filter(e=>e.id!==void 0&&(e.ativo===1||e.id===n.pessoa_id)&&(e.congregacao_id===null||e.congregacao_id===N)).sort((e,t)=>v(e.nome,t.nome)),s=e=>(r.get(e.id??0)??0)-+(n.id!==void 0&&n.volta===``&&n.pessoa_id===e.id);return e`
    <kk-dialog
      open
      class="saida-form"
      label=${n.id===void 0?i.territorios.designar:i.territorios.editarSaida}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&Y()}}
    >
      <div class="formulario">
        <kk-select
          name="pessoa"
          label=${i.territorios.comQuem}
          .value=${String(n.pessoa_id??0)}
          @kk-change=${e=>{let t=Number(V(e));Q({pessoa_id:Number.isInteger(t)&&t>0?t:null})}}
        >
          <kk-option value="0">${i.territorios.ninguem}</kk-option>
          ${o.map(t=>{let n=s(t),r=[t.ativo===0?i.pautas.inativo(t.nome):t.nome,n>0?`· ${i.territorios.jaTem(n)}`:``].filter(e=>e!==``).join(` `);return e`<kk-option value=${String(t.id)}>${r}</kk-option>`})}
        </kk-select>
        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${a}
            name="saida"
            label=${i.territorios.saida}
            .value=${n.saida}
            @kk-change=${e=>Q({saida:V(e)})}
          ></kk-date-picker>
          <kk-date-picker
            .valueFormatter=${a}
            name="volta"
            label=${i.territorios.volta}
            help-text=${i.territorios.voltaAjuda}
            clearable
            .value=${n.volta}
            @kk-change=${e=>Q({volta:V(e)})}
          ></kk-date-picker>
        </div>
        <kk-input
          name="observacao"
          label=${i.territorios.observacao}
          help-text=${i.territorios.observacaoDaSaidaAjuda}
          .value=${n.observacao}
          @kk-input=${e=>Q({observacao:V(e)})}
        ></kk-input>
        ${R===``?t:e`<p class="erro" role="alert">${R}</p>`}
      </div>
      <div slot="footer" class="dialogo__acoes">
        ${n.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{L?.id!==void 0&&we(L.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${i.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${Y}>${i.acoes.cancelar}</kk-button>
        <kk-button variant="primary" @click=${()=>void Ce()}>
          <kk-icon slot="prefix" name="check"></kk-icon>${i.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function Ee(e){let t=i.territorios.tituloDoRegistro(e),r=H()?.nome??``,a=ve(W(),G(),e,q()),o=i.territorios.rodape(n(Date.now()),M),s=JSON.stringify([t,r,a,o]),c=te(s)??await ee(s);if(c===void 0)return;let l=oe(t,r,a,o,c);try{let n=await ie(l,i.territorios.arquivo(e),`application/pdf`,t);n===`compartilhado`&&d(i.territorios.compartilhado),n===`baixado`&&d(i.territorios.baixado)}catch(e){console.error(`Territórios: a entrega do PDF falhou.`,e),d(i.territorios.naoCompartilhado,`danger`)}}function De(){let t=o(),n=[...new Set([C(t),...G().map(e=>C(e.saida))])].sort((e,t)=>t-e),a=n[0]??C(t),s=[i.territorios.situacaoTitulo(r(t)),H()?.nome??``].filter(e=>e!==``).join(` — `),c=y(s,[ye(i.territorios.situacao,W(),G(),q())]);p(i.territorios.enviar,null,()=>e`
      <div class="formulario territorios-envio">
        <kk-select
          name="ano"
          label=${i.territorios.anoDeServico}
          .value=${String(a)}
          @kk-change=${e=>{a=Number(V(e))||a}}
        >
          ${n.map(t=>e`<kk-option value=${String(t)}>${i.territorios.ano(t)}</kk-option>`)}
        </kk-select>
        <kk-button variant="primary" name="pdf" @click=${()=>void Ee(a)}>
          <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${i.territorios.pdf}
        </kk-button>
        <p class="caixas__ajuda">${i.territorios.pdfAjuda}</p>

        <kk-button name="whatsapp" href=${`https://wa.me/?text=${encodeURIComponent(c)}`} target="_blank">
          <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${i.territorios.whatsapp}
        </kk-button>
        <p class="caixas__ajuda">${i.territorios.whatsappAjuda}</p>
      </div>
    `,{classe:`territorios-envio-dialogo`})}var Oe=[`todos`,`disponiveis`,`com_alguem`];function $(){N!==null&&(I=b(N),R=``,c())}function ke(){let n=W(),r=n.filter(e=>D(e,j).aberta!==null).length,a=O.length<2?t:e`
        <kk-select
          name="congregacao"
          label=${i.territorios.congregacao}
          .value=${String(N??0)}
          @kk-change=${e=>{let t=Number(V(e));N=Number.isInteger(t)&&t>0?t:N,c()}}
        >
          ${O.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
        </kk-select>
      `;if(n.length===0)return e`
      <div class="filtros">${a}</div>
      <div class="vazio">
        <kk-icon class="vazio__icone" name="map-2"></kk-icon>
        <p>${i.territorios.vazio}</p>
        <kk-button variant="primary" @click=${$}>${i.territorios.novo}</kk-button>
      </div>
      ${I===null?t:Z(I)}
    `;let o=se(n,j,P).filter(e=>{if(F.trim()===``)return!0;let t=D(e,j).aberta;return s([e.numero,e.nome,U(t?.pessoa_id??null)].join(` `),F)});return e`
    <div class="filtros">
      ${a}
      <kk-input
        name="busca"
        type="search"
        label=${i.territorios.buscar}
        .value=${F}
        @kk-input=${e=>{F=V(e),c()}}
      ></kk-input>
    </div>
    <div class="chips" role="group" aria-label=${i.territorios.filtro}>
      ${Oe.map(t=>e`
          <button
            type="button"
            class="chip"
            data-filtro=${t}
            aria-pressed=${P===t}
            ?data-ativo=${P===t}
            @click=${()=>{P=t,c()}}
          >
            ${i.territorios.filtros[t]}
          </button>
        `)}
    </div>
    <p class="caixas__ajuda">
      ${i.territorios.contagem(n.length,r)}
      ${P===`disponiveis`?` ${i.territorios.ordemDisponiveis}`:``}
    </p>

    <div class="lista">
      ${o.length===0?e`<p class="vazio">${i.territorios.nenhum}</p>`:o.map(t=>e`
                <button
                  class="linha"
                  data-territorio=${t.id??0}
                  ?data-com-alguem=${D(t,j).aberta!==null}
                  @click=${()=>u(`territorios/${t.id}`)}
                >
                  <kk-icon class="linha__icone" name="map-2"></kk-icon>
                  <span class="linha__texto">
                    <span class="linha__rotulo">${w(t)}</span>
                    <span class="linha__sub">${J(t)}</span>
                  </span>
                  <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                </button>
              `)}
    </div>

    <div class="territorios-acoes">
      <kk-button name="enviar" @click=${De}>
        <kk-icon slot="prefix" name="send"></kk-icon>${i.territorios.enviar}
      </kk-button>
    </div>
    ${I===null?t:Z(I)}
  `}function Ae(n,a){let o=k.find(e=>e.id===a.pessoa_id),s=f(o?.telefone??``),c=i.territorios.lembrete(o?.nome??``,w(n),r(a.saida));return e`
    <kk-button
      name="lembrete"
      href=${s===``?t:`https://wa.me/${s}?text=${encodeURIComponent(c)}`}
      target="_blank"
      ?disabled=${s===``}
    >
      <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>
      ${s===``?`${i.territorios.lembreteBotao} (${i.territorios.semTelefone})`:i.territorios.lembreteBotao}
    </kk-button>
  `}function je(n){let{aberta:r}=D(n,j),a=x(n.id,j),s=o();return e`
    <section class="territorio-cartao">
      <dl class="territorio-dados">
        <div class="territorio-dados__par">
          <dt>${i.territorios.numero}</dt>
          <dd>${n.numero}</dd>
        </div>
        <div class="territorio-dados__par">
          <dt>${i.territorios.nome}</dt>
          <dd>${n.nome||i.territorios.vago}</dd>
        </div>
        ${n.observacao===``?t:e`
              <div class="territorio-dados__par">
                <dt>${i.territorios.observacao}</dt>
                <dd>${n.observacao}</dd>
              </div>
            `}
      </dl>
      <div class="territorios-acoes">
        <kk-button size="small" name="editar" @click=${()=>{I={...n},R=``,c()}}>
          <kk-icon slot="prefix" name="pencil"></kk-icon>${i.territorios.editar}
        </kk-button>
        ${n.mapa===``?t:e`
              <kk-button size="small" name="mapa" href=${n.mapa} target="_blank">
                <kk-icon slot="prefix" name="external-link"></kk-icon>${i.territorios.abrirMapa}
              </kk-button>
            `}
      </div>
    </section>

    <section class="territorio-situacao" ?data-com-alguem=${r!==null}>
      <h3 class="secao">${i.territorios.situacao}</h3>
      <p class="territorio-situacao__texto">${J(n)}</p>
      <div class="territorios-acoes">
        ${r===null?e`
              <kk-button variant="primary" name="designar" @click=${()=>{L=ce(n.id,s),R=``,c()}}>
                <kk-icon slot="prefix" name="user-check"></kk-icon>${i.territorios.designar}
              </kk-button>
            `:e`
              <kk-button variant="primary" name="volta" @click=${()=>{L={...r,volta:s},R=``,c()}}>
                <kk-icon slot="prefix" name="arrow-back-up"></kk-icon>${i.territorios.registrarVolta}
              </kk-button>
              ${Ae(n,r)}
            `}
      </div>
    </section>

    <section class="territorio-historico">
      <h3 class="secao">${i.territorios.historico}</h3>
      ${a.length===0?e`<p class="vazio">${i.territorios.semHistorico}</p>`:e`
            <div class="lista">
              ${a.map(t=>e`
                  <button class="linha" data-saida=${t.id??0} @click=${()=>{L={...t},R=``,c()}}>
                    <kk-icon class="linha__icone" name="user"></kk-icon>
                    <span class="linha__texto">
                      <span class="linha__rotulo">${U(t.pessoa_id)}</span>
                      <span class="linha__sub">
                        ${[q().periodo(t.saida,t.volta),t.observacao].filter(e=>e!==``).join(` · `)}
                      </span>
                    </span>
                    <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
                  </button>
                `)}
            </div>
          `}
    </section>

    <div class="territorios-acoes">
      <kk-button class="dialogo__excluir" variant="danger" outline @click=${()=>void xe(n)}>
        <kk-icon slot="prefix" name="trash"></kk-icon>${i.territorios.excluir}
      </kk-button>
    </div>
    ${I===null?t:Z(I)}
    ${L===null?t:Te(L)}
  `}function Me(){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${i.territorios.naoEncontrado}</h2>
      <kk-button @click=${()=>u(`territorios`)}>${i.territorios.voltarALista}</kk-button>
    </div>
  `}var Ne={titulo(e){if(e.args.length===0||!B.terminou)return;let t=K(e);return t===void 0?void 0:i.territorios.tituloDo(w(t))},voltarPara(e){return e.args.length===0?`home`:`territorios`},aoVoltar(){return I===null&&L===null?!1:(Y(),!0)},acoes(t){if(!(!B.terminou||N===null||t.args.length>0))return e`
      <kk-icon-button name="plus" label=${i.territorios.novo} @click=${$}></kk-icon-button>
    `},conteudo(t){let n=B.espera();if(n!==null)return n;if(O.length===0)return e`
        <div class="vazio">
          <kk-icon class="vazio__icone" name="home-heart"></kk-icon>
          <p>${i.territorios.semCongregacao}</p>
          <kk-button variant="primary" @click=${()=>u(`congregacoes`)}>
            ${i.territorios.irParaCongregacoes}
          </kk-button>
        </div>
      `;if(t.args.length===0)return ke();let r=K(t);return r===void 0?Me():je(r)}};export{Ne as telaTerritorios};