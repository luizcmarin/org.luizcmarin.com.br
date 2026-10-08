import{_ as e,c as t,d as n,f as r,m as i}from"./erro-Bc0C-0ww.js";import{A as a,C as o,D as s,E as c,O as l,S as u,T as d,_ as f,b as ee,h as te,k as ne,l as re,n as p,v as ie,w as m,x as ae,y as oe}from"./idioma-CVgIQtmc.js";import{c as se,n as h,r as g,s as _}from"./data-DpsiKWt9.js";import{t as v}from"./notificar-BeOZKYlx.js";import{S as ce,b as le,y}from"./index-CCl639Mp.js";import{t as ue}from"./carga-N4u32e31.js";import{CORES as b,ICONES as de,ULTIMO_MINUTO as fe,agendaDosDias as x,carregar as pe,comoHora as S,corDoTipo as C,deHora as me,diaFinal as he,diaInicial as w,excluirEvento as ge,excluirTipo as _e,iconeDoTipo as ve,proximaOrdem as ye,salvarEvento as T,salvarTipo as be,tipoEmUso as xe,tipoPadrao as Se,tipoPorId as Ce}from"./dados-Brf5f_LR.js";import{carregarItens as we,carregarPautas as Te,salvarPauta as Ee}from"./dados-CeBP-mRV.js";function De(e){let t=e.replace(`#`,``);return[Number.parseInt(t.slice(0,2),16),Number.parseInt(t.slice(2,4),16),Number.parseInt(t.slice(4,6),16)]}function Oe(e){let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function E(e){let[t,n,r]=De(e).map(Oe);return .2126*t+.7152*n+.0722*r}function D(e,t){let[n,r]=[E(e),E(t)].sort((e,t)=>t-e);return(n+.05)/(r+.05)}function O(e){return D(e,`#ffffff`)>=D(e,`#121212`)?`#ffffff`:`#121212`}var k=[],A=[],j=`semana`,M=new Date,N=null,P=!1,F=null;async function I(){let e=await pe();k=e.tipos,A=e.eventos,t()}var L=new ue(`Calendário`,async()=>{await I()}),R=5;function ke(){let e=new Date().getFullYear(),t=new Set;for(let n=e-R;n<=e+R;n+=1)t.add(n);return t.add(M.getFullYear()),[...t].sort((e,t)=>e-t)}function z(e,n){M=new Date(e,n,1),t()}function Ae(){return e`
    <div class="chips" role="group" aria-label=${p.calendario.vista}>
      ${f.map(n=>e`
          <button
            class="chip"
            ?data-ativo=${j===n}
            @click=${()=>{j=n,t()}}
          >
            ${p.calendario.vistas[n]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${p.calendario.mes}
        size="small"
        .value=${String(M.getMonth())}
        @kk-change=${e=>z(M.getFullYear(),Number(e.target.value))}
      >
        ${p.calendario.meses.map((t,n)=>e`<kk-option value=${n}>${t}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${p.calendario.ano}
        size="small"
        .value=${String(M.getFullYear())}
        @kk-change=${e=>z(Number(e.target.value),M.getMonth())}
      >
        ${ke().map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${p.calendario.anterior}
        @click=${()=>{M=l(j,M,-1),t()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{M=new Date,t()}}
      >
        ${p.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${p.calendario.proximo}
        @click=${()=>{M=l(j,M,1),t()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${te(j,M)}</span>
    </div>
  `}function B(e){e.pauta_id===null?je(e):r(`pautas/${e.pauta_id}`)}function je(e){N={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:w(e),horaInicio:S(e.hora_inicio_min),dataFim:he(e),horaFim:S(e.hora_fim_min),descricao:e.descricao},t()}function V(e){return e.dia_inteiro===1?`${p.calendario.diaInteiro} — ${e.titulo}`:`${S(e.hora_inicio_min)} – ${S(e.hora_fim_min)} — ${e.titulo}`}function H(t){let n=C(k,t.tipo_id);return e`
    <button
      class="pastilha"
      data-pauta=${t.pauta_id??i}
      style=${`--cor-evento:${n};--cor-evento-texto:${O(n)}`}
      title=${V(t)}
      @click=${()=>B(t)}
    >
      ${t.dia_inteiro===1?i:e`<span class="pastilha__hora">${S(t.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${t.titulo}</span>
    </button>
  `}function Me(t){let n=C(k,t.tipo_id),r=Ce(k,t.tipo_id);return e`
    <button
      class="evento"
      data-pauta=${t.pauta_id??i}
      style=${`--cor-evento:${n}`}
      @click=${()=>B(t)}
    >
      <span class="evento__quando">
        ${t.dia_inteiro===1?p.calendario.diaInteiro:`${S(t.hora_inicio_min)} – ${S(t.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${ve(k,t.tipo_id)}></kk-icon>${t.titulo}
      </span>
      ${r===void 0?i:e`<span class="evento__tipo">${r.nome}</span>`}
      ${t.descricao===``?i:e`<span class="evento__descricao">${t.descricao}</span>`}
    </button>
  `}function U(e,n){let r=n??480;N={id:0,titulo:``,tipoId:Se(k),diaInteiro:n===void 0,dataInicio:e,horaInicio:S(r),horaFim:S(Math.min(r+60,fe)),dataFim:e,descricao:``},t()}function W(e){return e.id!==void 0&&e.dia_inteiro===0&&w(e)===he(e)}function G(e){return W(e)&&e.pauta_id===null}var K=null,Ne,Pe=4,Fe=8,Ie=350;function q(e,t,n){let r=_(t);return{...e,data_inicio_epoch:r,data_fim_epoch:r,hora_inicio_min:n.inicioMin,hora_fim_min:n.fimMin}}function J(e){return{inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min}}function Y(e,t){return e.data_inicio_epoch===t.data_inicio_epoch&&e.hora_inicio_min===t.hora_inicio_min&&e.hora_fim_min===t.hora_fim_min}function Le(){if(K===null||!K.ativo)return A;let{previa:e}=K;return A.map(t=>t.id===e.id?e:t)}function Re(e,n){if(K!==null||!n.isPrimary||n.button!==0||!W(e))return;let r=n.currentTarget,i=r.closest(`.grade__coluna`),a=r.closest(`.grade`);if(i===null||a===null)return;let o=[...a.querySelectorAll(`.grade__coluna`)].map(e=>{let t=e.getBoundingClientRect();return{dia:e.dataset.dia??``,esquerda:t.left,direita:t.right}});K={evento:e,modo:n.target.closest(`.grade__evento-alca`)===null||!G(e)?`mover`:`redimensionar`,ponteiro:n.pointerId,toque:n.pointerType===`touch`,x:n.clientX,y:n.pageY,alturaDaColuna:i.getBoundingClientRect().height,colunas:o,ativo:!1,desfeito:!1,previa:e},addEventListener(`pointermove`,ze),addEventListener(`pointerup`,Be),addEventListener(`pointercancel`,Ve),addEventListener(`keydown`,He),K.toque&&(Ne=setTimeout(()=>{K!==null&&(K.ativo=!0,t())},Ie))}function ze(e){if(K===null||e.pointerId!==K.ponteiro||K.desfeito)return;let n=e.clientX-K.x,r=e.pageY-K.y,i=!1;if(!K.ativo){if(K.toque){Math.hypot(n,r)>Fe&&X();return}if(Math.hypot(n,r)<Pe)return;K.ativo=!0,i=!0}e.preventDefault();let{evento:a}=K,o=s(r,K.alturaDaColuna),c;c=K.modo===`redimensionar`?q(a,w(a),d(J(a),o)):q(a,K.colunas[ee(K.colunas,e.clientX)]?.dia||w(a),m(J(a),o)),(i||!Y(c,K.previa))&&(K.previa=c,t())}function Be(e){if(K===null||e.pointerId!==K.ponteiro)return;let{ativo:n,evento:r,previa:i}=K;X(),n&&(Ue(),Y(i,r)?t():Je(i,!1))}function Ve(e){if(K===null||e.pointerId!==K.ponteiro)return;let n=K.ativo;X(),n&&t()}function He(e){e.key===`Escape`&&K!==null&&K.ativo&&(e.preventDefault(),K.desfeito=!0,K.previa=K.evento,t())}function X(){clearTimeout(Ne),removeEventListener(`pointermove`,ze),removeEventListener(`pointerup`,Be),removeEventListener(`pointercancel`,Ve),removeEventListener(`keydown`,He),K=null}function Ue(){let e=e=>{e.stopPropagation(),e.preventDefault()};addEventListener(`click`,e,{capture:!0,once:!0}),setTimeout(()=>removeEventListener(`click`,e,{capture:!0}),0)}var We={handleEvent(e){K?.ativo===!0&&e.preventDefault()},passive:!1};function Ge(e){K?.toque===!0&&e.preventDefault()}function Ke(e,t){if(!t.altKey||K!==null||!W(e)||t.key!==`ArrowUp`&&t.key!==`ArrowDown`||t.shiftKey&&!G(e))return;t.preventDefault();let n=t.key===`ArrowUp`?-15:15,r=t.shiftKey?d(J(e),n):m(J(e),n),i=q(e,w(e),r);Y(i,e)||Je(i,!0)}function qe(e){e!==void 0&&queueMicrotask(()=>{document.querySelector(`.grade__evento[data-id="${e}"]`)?.focus()})}async function Je(e,n){A=A.map(t=>t.id===e.id?e:t),t(),n&&qe(e.id);try{e.pauta_id===null?await T({...e.id===void 0?{}:{id:e.id},titulo:e.titulo,tipo_id:e.tipo_id,data_inicio_epoch:e.data_inicio_epoch,hora_inicio_min:e.hora_inicio_min,data_fim_epoch:e.data_fim_epoch,hora_fim_min:e.hora_fim_min,dia_inteiro:e.dia_inteiro,descricao:e.descricao,pauta_id:null}):await Ye(e)}catch(e){console.error(`Calendário: a gravação do novo horário falhou.`,e),v(p.calendario.eventoNaoMovido,`danger`)}try{await I(),n&&qe(e.id)}catch(e){console.error(`Calendário: a releitura depois de mover o evento falhou.`,e)}}async function Ye(e){let[t,n]=await Promise.all([Te(),we()]),r=t.find(t=>t.id===e.pauta_id);if(r===void 0)throw Error(`a pauta ${e.pauta_id} não existe mais`);let i={...r,data:w(e),hora:e.dia_inteiro===1?r.hora:S(e.hora_inicio_min)};await Ee(i,[],{itens:n.filter(e=>e.pauta_id===r.id),tipos:k,existente:A.find(t=>t.id===e.id)})}function Xe(t,n,r){let i=r.get(t.dia)??[];return e`
    <div class="mes__celula" ?data-fora=${!t.doMes} ?data-hoje=${t.dia===n}>
      <button
        class="mes__numero"
        aria-label=${p.calendario.novoEm(t.dia)}
        @click=${()=>U(t.dia)}
      >
        ${t.numero}
      </button>
      <div class="mes__eventos">${i.map(e=>H(e))}</div>
    </div>
  `}function Ze(){let t=g(),n=oe(se(M)),r=x(A,n.map(e=>e.dia));return e`
    <div class="mes">
      ${p.calendario.semana.map(t=>e`<span class="mes__cabecalho">${t}</span>`)}
      ${n.map(e=>Xe(e,t,r))}
    </div>
  `}var Z=null;n(`calendario`,()=>{Z=null});function Qe(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function $e(e){let t=`${j}:${e.map(e=>e.dia).join(`,`)}`;if(Z===t)return;Z=t;let n=g();if(!e.some(e=>e.dia===n))return;let r=a();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-Qe()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function et(t){let n=c(),r=g(),s=x(Le(),t.map(e=>e.dia)),l=a(),u=K?.ativo===!0?K.evento.id:void 0;return $e(t),e`
    <div
      class="grade"
      style=${`--colunas:${t.length}`}
      ?data-arrastando=${u!==void 0}
    >
      <span class="grade__canto"></span>
      ${t.map(t=>e`
          <span class="grade__dia" ?data-hoje=${t.dia===r}>
            ${p.calendario.semana[t.semana]} ${t.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${n.map(t=>e`<span class="grade__hora">${S(t*60)}</span>`)}
      </div>

      ${t.map(t=>{let a=s.get(t.dia)??[],c=a.filter(e=>e.dia_inteiro===1),d=a.filter(e=>e.dia_inteiro===0),f=o(d.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return e`
          <div class="grade__coluna" data-dia=${t.dia}>
            ${l===null||t.dia!==r?i:e`<span class="grade__agora" style=${`top:${l*100}%`}></span>`}

            ${n.map(n=>e`
                <button
                  class="grade__vaga"
                  aria-label=${p.calendario.novoAs(p.calendario.semana[t.semana]??``,S(n*60))}
                  @click=${()=>U(t.dia,n*60)}
                ></button>
              `)}

            ${c.length===0?i:e`
                  <div class="grade__inteiros">
                    ${c.map(e=>H(e))}
                  </div>
                `}

            ${d.map((t,n)=>{let r=f[n];if(r===void 0)return i;let a=100/r.colunas,o=W(t);return e`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${C(k,t.tipo_id)};--cor-evento-texto:${O(C(k,t.tipo_id))};top:${r.topo*100}%;height:${r.altura*100}%;inset-inline-start:calc(${r.coluna*a}% + 1px);width:calc(${a}% - 2px)`}
                  data-id=${t.id??i}
                  data-pauta=${t.pauta_id??i}
                  ?data-movel=${o}
                  ?data-arrastando=${u!==void 0&&t.id===u}
                  title=${o?`${V(t)}\n${p.calendario.dicaDoArraste}`:V(t)}
                  aria-keyshortcuts=${o?`Alt+ArrowUp Alt+ArrowDown Alt+Shift+ArrowUp Alt+Shift+ArrowDown`:i}
                  @click=${()=>B(t)}
                  @pointerdown=${e=>Re(t,e)}
                  @keydown=${e=>Ke(t,e)}
                  @touchmove=${We}
                  @contextmenu=${Ge}
                >
                  <span class="grade__evento-hora">${S(t.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${t.titulo}</span>
                  ${G(t)?e`<span class="grade__evento-alca" aria-hidden="true"></span>`:i}
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function tt(){let e=g(M);return et(ae(M).filter(t=>t.dia===e))}function nt(){return et(ae(M))}function rt(){let n=g(),r=ie(M.getFullYear()),i=x(A,r.flatMap(e=>e.celulas.map(e=>e.dia)));return e`
    <div class="ano">
      ${r.map((r,a)=>e`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{M=new Date(_(`${r.mes}-01`)),j=`mes`,t()}}
            >
              ${p.calendario.meses[a]}
            </button>

            <div class="ano__grade">
              ${p.calendario.semanaInicial.map(t=>e`<span class="ano__cabecalho">${t}</span>`)}
              ${r.celulas.map(r=>{let a=(i.get(r.dia)??[]).length;return e`
                  <button
                    class="ano__dia"
                    ?data-fora=${!r.doMes}
                    ?data-hoje=${r.dia===n}
                    ?data-com-evento=${a>0}
                    title=${a===0?``:p.calendario.eventos(a)}
                    @click=${()=>{M=new Date(_(r.dia)),j=`dia`,t()}}
                  >
                    ${r.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function it(){let t=[...x(A,u(ne(`agenda`,M))).entries()].filter(([,e])=>e.length>0);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${p.calendario.semEventos}</p>
      </div>
    `:e`
    <div class="calendario-agenda">
      ${t.map(([t,n])=>e`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${re(t)}</span>
            ${n.map(e=>Me(e))}
          </div>
        `)}
    </div>
  `}function at(){return j===`dia`?tt():j===`semana`?nt():j===`mes`?Ze():j===`ano`?rt():it()}function Q(e){N!==null&&(N={...N,...e})}function $(e){F!==null&&(F={...F,...e})}async function ot(e){if(!h(e.dataInicio)){v(p.calendario.dataInvalida,`warning`);return}let t=!h(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,n=+!!e.diaInteiro,r=me(e.horaInicio),i=me(e.horaFim),a=t===e.dataInicio&&i<r?r:i;try{await T({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?p.calendario.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??Se(k),data_inicio_epoch:_(e.dataInicio),hora_inicio_min:n===1?0:r,data_fim_epoch:_(t),hora_fim_min:n===1?fe:a,dia_inteiro:n,descricao:e.descricao.trim(),pauta_id:null})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),v(p.calendario.eventoNaoSalvo,`danger`);return}N=null,v(p.calendario.eventoSalvo),await I()}async function st(e){if(await y({titulo:p.calendario.excluirEvento,texto:p.calendario.excluirTexto,rotuloConfirmar:p.acoes.excluir,variante:`danger`})){try{await ge(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),v(p.calendario.eventoNaoExcluido,`danger`);return}N=null,v(p.calendario.eventoExcluido),await I()}}function ct(n){return e`
    <kk-dialog
      open
      label=${n.id>0?p.calendario.editarEvento:p.calendario.novoEvento}
      @kk-request-close=${ce}
      @kk-initial-focus=${le}
      @kk-after-hide=${()=>{N=null,t()}}
    >
      <div class="formulario">
        <kk-input
          label=${p.calendario.titulo}
          placeholder=${p.calendario.tituloPlaceholder}
          .value=${n.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${p.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${k.map(r=>e`
                <button
                  class="tipo-chip"
                  ?data-ativo=${n.tipoId===r.id}
                  @click=${()=>{Q({tipoId:r.id??null}),t()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${b[r.cor_chave]??``}`}
                  ></span>
                  ${r.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${n.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),t()}}
        >
          ${p.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${p.calendario.dataInicio}
            .value=${n.dataInicio}
            @kk-change=${e=>{let r=e.target.value,i=N?.dataFim??n.dataFim;Q({dataInicio:r,dataFim:i<r?r:i}),t()}}
          ></kk-input>
          ${n.diaInteiro?i:e`
                <kk-input
                  type="time"
                  label=${p.calendario.horaInicio}
                  .value=${n.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${p.calendario.dataFim}
            min=${n.dataInicio}
            .value=${n.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${n.diaInteiro?i:e`
                <kk-input
                  type="time"
                  label=${p.calendario.horaFim}
                  .value=${n.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${p.calendario.descricao}
          placeholder=${p.calendario.descricaoPlaceholder}
          .value=${n.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id>0?e`
              <kk-button variant="danger" outline @click=${()=>void st(n)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${p.acoes.excluir}
              </kk-button>
            `:i}
        <kk-button
          @click=${()=>{N=null,t()}}
        >
          ${p.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{N!==null&&ot(N)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${p.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function lt(e){let t=e.nome.trim()===``?p.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?Ce(k,e.id):void 0;try{await be({...n??{ordem:ye(k),chave:``},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),v(p.calendario.tipoNaoSalvo,`danger`);return}F=null,await I()}async function ut(e){if(e.id!==void 0){if(xe(A,e.id))await y({titulo:p.calendario.tipoEmUsoTitulo,texto:p.calendario.tipoEmUsoTexto,rotuloConfirmar:p.acoes.fechar});else if(await y({titulo:p.calendario.excluirTipo,texto:p.calendario.excluirTexto,rotuloConfirmar:p.acoes.excluir,variante:`danger`})){try{await _e(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),v(p.calendario.tipoNaoExcluido,`danger`);return}await I()}}}function dt(n){return e`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${p.calendario.tipoNome}
        .value=${n.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${p.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(b).map(([r,i])=>e`
              <button
                class="cor-chip"
                ?data-ativo=${n.cor===r}
                style=${`background:${i}`}
                aria-label=${r}
                @click=${()=>{$({cor:r}),t()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${p.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(de).map(([r,i])=>e`
              <button
                class="tipo-chip"
                ?data-ativo=${n.icone===r}
                aria-label=${r}
                @click=${()=>{$({icone:r}),t()}}
              >
                <kk-icon name=${i}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{F!==null&&lt(F)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${p.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{F=null,t()}}
        >
          ${p.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ft(){return e`
    <kk-dialog
      open
      label=${p.calendario.tipos}
      @kk-request-close=${F===null?i:ce}
      @kk-after-hide=${()=>{P=!1,F=null,t()}}
    >
      ${F===null?e`
            <div class="tipos-lista">
              ${k.map(n=>e`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${b[n.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${de[n.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${n.nome}</span>
                    <kk-icon-button
                      name="pencil"
                      label=${p.acoes.editar}
                      @click=${()=>{F={id:n.id??0,nome:n.nome,cor:n.cor_chave,icone:n.icone},t()}}
                    ></kk-icon-button>
                    ${n.chave===``?e`
                          <kk-icon-button
                            name="trash"
                            label=${p.calendario.excluirTipo}
                            @click=${()=>void ut(n)}
                          ></kk-icon-button>
                        `:e`
                          <kk-icon
                            class="tipo-linha__fixo"
                            name="lock"
                            label=${p.calendario.tipoDaReuniao}
                          ></kk-icon>
                        `}
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{F={id:0,nome:``,cor:`primary`,icone:`evento`},t()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${p.calendario.novoTipo}
            </kk-button>
          `:dt(F)}
    </kk-dialog>
  `}var pt={aoVoltar(){return N===null?P?(F===null?P=!1:F=null,t(),!0):!1:(N=null,t(),!0)},acoes(){if(L.terminou)return e`
      <kk-icon-button
        name="tags"
        label=${p.calendario.tipos}
        @click=${()=>{P=!0,F=null,t()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${p.calendario.novoEvento}
        @click=${()=>U(g())}
      ></kk-icon-button>
    `},conteudo(){let t=L.espera();return t===null?e`
      ${Ae()}
      ${at()}
      ${N===null?i:ct(N)}
      ${P?ft():i}
    `:t}};export{pt as telaCalendario};