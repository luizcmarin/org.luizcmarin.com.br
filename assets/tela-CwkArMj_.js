import{i as e,t}from"./lit-CL39YOSA.js";import{C as n,D as r,E as i,O as a,S as o,T as s,_ as c,b as l,g as u,h as d,n as f,p as ee,s as te,v as ne,w as re,x as ie,y as p}from"./idioma-Dwpp7Zfu.js";import{c as ae,n as oe,r as m,s as h}from"./data-DpsiKWt9.js";import{c as g,d as se,f as ce}from"./erro-FHfTMgeP.js";import{t as _}from"./notificar-BeOZKYlx.js";import{O as v,j as y,k as le}from"./index-aItaWoWu.js";import{t as ue}from"./carga-D_DL_FuH.js";import{CORES as b,ICONES as x,ULTIMO_MINUTO as de,agendaDosDias as S,carregar as fe,comoHora as C,corDoTipo as w,deHora as pe,diaFinal as me,diaInicial as T,excluirEvento as he,excluirTipo as ge,iconeDoTipo as _e,proximaOrdem as ve,salvarEvento as E,salvarTipo as ye,tipoEmUso as be,tipoPadrao as D,tipoPorId as O}from"./dados-Dn9CE1Ib.js";import{carregarItens as xe,carregarPautas as Se,salvarPauta as Ce}from"./dados-DH04-Hrw.js";function we(e){let t=e.replace(`#`,``);return[Number.parseInt(t.slice(0,2),16),Number.parseInt(t.slice(2,4),16),Number.parseInt(t.slice(4,6),16)]}function Te(e){let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function k(e){let[t,n,r]=we(e).map(Te);return .2126*t+.7152*n+.0722*r}function A(e,t){let[n,r]=[k(e),k(t)].sort((e,t)=>t-e);return(n+.05)/(r+.05)}function j(e){return A(e,`#ffffff`)>=A(e,`#121212`)?`#ffffff`:`#121212`}var M=[],N=[],P=`semana`,F=new Date,I=null,L=!1,R=null;async function z(){let e=await fe();M=e.tipos,N=e.eventos,g()}var Ee=new ue(`Calendário`,async()=>{await z()}),De=5;function Oe(){let e=new Date().getFullYear(),t=new Set;for(let n=e-De;n<=e+De;n+=1)t.add(n);return t.add(F.getFullYear()),[...t].sort((e,t)=>e-t)}function ke(e,t){F=new Date(e,t,1),g()}function Ae(){return e`
    <div class="chips" role="group" aria-label=${f.calendario.vista}>
      ${d.map(t=>e`
          <button
            class="chip"
            ?data-ativo=${P===t}
            @click=${()=>{P=t,g()}}
          >
            ${f.calendario.vistas[t]}
          </button>
        `)}
    </div>

    <div class="calendario__salto">
      <kk-select
        label=${f.calendario.mes}
        size="small"
        .value=${String(F.getMonth())}
        @kk-change=${e=>ke(F.getFullYear(),Number(e.target.value))}
      >
        ${f.calendario.meses.map((t,n)=>e`<kk-option value=${n}>${t}</kk-option>`)}
      </kk-select>

      <kk-select
        label=${f.calendario.ano}
        size="small"
        .value=${String(F.getFullYear())}
        @kk-change=${e=>ke(Number(e.target.value),F.getMonth())}
      >
        ${Oe().map(t=>e`<kk-option value=${t}>${t}</kk-option>`)}
      </kk-select>
    </div>

    <div class="calendario__nav">
      <kk-icon-button
        name="chevron-left"
        label=${f.calendario.anterior}
        @click=${()=>{F=i(P,F,-1),g()}}
      ></kk-icon-button>
      <kk-button
        size="small"
        outline
        @click=${()=>{F=new Date,g()}}
      >
        ${f.calendario.hoje}
      </kk-button>
      <kk-icon-button
        name="chevron-right"
        label=${f.calendario.proximo}
        @click=${()=>{F=i(P,F,1),g()}}
      ></kk-icon-button>
      <span class="calendario__periodo">${ee(P,F)}</span>
    </div>
  `}function B(e){e.pauta_id===null?je(e):ce(`pautas/${e.pauta_id}`)}function je(e){I={id:e.id??0,titulo:e.titulo,tipoId:e.tipo_id,diaInteiro:e.dia_inteiro===1,dataInicio:T(e),horaInicio:C(e.hora_inicio_min),dataFim:me(e),horaFim:C(e.hora_fim_min),descricao:e.descricao},g()}function V(e){return e.dia_inteiro===1?`${f.calendario.diaInteiro} — ${e.titulo}`:`${C(e.hora_inicio_min)} – ${C(e.hora_fim_min)} — ${e.titulo}`}function H(n){let r=w(M,n.tipo_id);return e`
    <button
      class="pastilha"
      data-pauta=${n.pauta_id??t}
      style=${`--cor-evento:${r};--cor-evento-texto:${j(r)}`}
      title=${V(n)}
      @click=${()=>B(n)}
    >
      ${n.dia_inteiro===1?t:e`<span class="pastilha__hora">${C(n.hora_inicio_min)}</span>`}
      <span class="pastilha__titulo">${n.titulo}</span>
    </button>
  `}function Me(n){let r=w(M,n.tipo_id),i=O(M,n.tipo_id);return e`
    <button
      class="evento"
      data-pauta=${n.pauta_id??t}
      style=${`--cor-evento:${r}`}
      @click=${()=>B(n)}
    >
      <span class="evento__quando">
        ${n.dia_inteiro===1?f.calendario.diaInteiro:`${C(n.hora_inicio_min)} – ${C(n.hora_fim_min)}`}
      </span>
      <span class="evento__titulo">
        <kk-icon name=${_e(M,n.tipo_id)}></kk-icon>${n.titulo}
      </span>
      ${i===void 0?t:e`<span class="evento__tipo">${i.nome}</span>`}
      ${n.descricao===``?t:e`<span class="evento__descricao">${n.descricao}</span>`}
    </button>
  `}function U(e,t){let n=t??480;I={id:0,titulo:``,tipoId:D(M),diaInteiro:t===void 0,dataInicio:e,horaInicio:C(n),horaFim:C(Math.min(n+60,de)),dataFim:e,descricao:``},g()}function W(e){return e.id!==void 0&&e.dia_inteiro===0&&T(e)===me(e)}function G(e){return W(e)&&e.pauta_id===null}var K=null,Ne,Pe=4,Fe=8,Ie=350;function q(e,t,n){let r=h(t);return{...e,data_inicio_epoch:r,data_fim_epoch:r,hora_inicio_min:n.inicioMin,hora_fim_min:n.fimMin}}function J(e){return{inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min}}function Y(e,t){return e.data_inicio_epoch===t.data_inicio_epoch&&e.hora_inicio_min===t.hora_inicio_min&&e.hora_fim_min===t.hora_fim_min}function Le(){if(K===null||!K.ativo)return N;let{previa:e}=K;return N.map(t=>t.id===e.id?e:t)}function Re(e,t){if(K!==null||!t.isPrimary||t.button!==0||!W(e))return;let n=t.currentTarget,r=n.closest(`.grade__coluna`),i=n.closest(`.grade`);if(r===null||i===null)return;let a=[...i.querySelectorAll(`.grade__coluna`)].map(e=>{let t=e.getBoundingClientRect();return{dia:e.dataset.dia??``,esquerda:t.left,direita:t.right}});K={evento:e,modo:t.target.closest(`.grade__evento-alca`)===null||!G(e)?`mover`:`redimensionar`,ponteiro:t.pointerId,toque:t.pointerType===`touch`,x:t.clientX,y:t.pageY,alturaDaColuna:r.getBoundingClientRect().height,colunas:a,ativo:!1,desfeito:!1,previa:e},addEventListener(`pointermove`,ze),addEventListener(`pointerup`,Be),addEventListener(`pointercancel`,Ve),addEventListener(`keydown`,He),K.toque&&(Ne=setTimeout(()=>{K!==null&&(K.ativo=!0,g())},Ie))}function ze(e){if(K===null||e.pointerId!==K.ponteiro||K.desfeito)return;let t=e.clientX-K.x,r=e.pageY-K.y,i=!1;if(!K.ativo){if(K.toque){Math.hypot(t,r)>Fe&&X();return}if(Math.hypot(t,r)<Pe)return;K.ativo=!0,i=!0}e.preventDefault();let{evento:a}=K,c=s(r,K.alturaDaColuna),l;l=K.modo===`redimensionar`?q(a,T(a),n(J(a),c)):q(a,K.colunas[ne(K.colunas,e.clientX)]?.dia||T(a),o(J(a),c)),(i||!Y(l,K.previa))&&(K.previa=l,g())}function Be(e){if(K===null||e.pointerId!==K.ponteiro)return;let{ativo:t,evento:n,previa:r}=K;X(),t&&(Ue(),Y(r,n)?g():Je(r,!1))}function Ve(e){if(K===null||e.pointerId!==K.ponteiro)return;let t=K.ativo;X(),t&&g()}function He(e){e.key===`Escape`&&K!==null&&K.ativo&&(e.preventDefault(),K.desfeito=!0,K.previa=K.evento,g())}function X(){clearTimeout(Ne),removeEventListener(`pointermove`,ze),removeEventListener(`pointerup`,Be),removeEventListener(`pointercancel`,Ve),removeEventListener(`keydown`,He),K=null}function Ue(){let e=e=>{e.stopPropagation(),e.preventDefault()};addEventListener(`click`,e,{capture:!0,once:!0}),setTimeout(()=>removeEventListener(`click`,e,{capture:!0}),0)}var We={handleEvent(e){K?.ativo===!0&&e.preventDefault()},passive:!1};function Ge(e){K?.toque===!0&&e.preventDefault()}function Ke(e,t){if(!t.altKey||K!==null||!W(e)||t.key!==`ArrowUp`&&t.key!==`ArrowDown`||t.shiftKey&&!G(e))return;t.preventDefault();let r=t.key===`ArrowUp`?-15:15,i=t.shiftKey?n(J(e),r):o(J(e),r),a=q(e,T(e),i);Y(a,e)||Je(a,!0)}function qe(e){e!==void 0&&queueMicrotask(()=>{document.querySelector(`.grade__evento[data-id="${e}"]`)?.focus()})}async function Je(e,t){N=N.map(t=>t.id===e.id?e:t),g(),t&&qe(e.id);try{e.pauta_id===null?await E({...e.id===void 0?{}:{id:e.id},titulo:e.titulo,tipo_id:e.tipo_id,data_inicio_epoch:e.data_inicio_epoch,hora_inicio_min:e.hora_inicio_min,data_fim_epoch:e.data_fim_epoch,hora_fim_min:e.hora_fim_min,dia_inteiro:e.dia_inteiro,descricao:e.descricao,pauta_id:null}):await Ye(e)}catch(e){console.error(`Calendário: a gravação do novo horário falhou.`,e),_(f.calendario.eventoNaoMovido,`danger`)}try{await z(),t&&qe(e.id)}catch(e){console.error(`Calendário: a releitura depois de mover o evento falhou.`,e)}}async function Ye(e){let[t,n]=await Promise.all([Se(),xe()]),r=t.find(t=>t.id===e.pauta_id);if(r===void 0)throw Error(`a pauta ${e.pauta_id} não existe mais`);let i={...r,data:T(e),hora:e.dia_inteiro===1?r.hora:C(e.hora_inicio_min)};await Ce(i,[],{itens:n.filter(e=>e.pauta_id===r.id),tipos:M,existente:N.find(t=>t.id===e.id)})}function Xe(t,n,r){let i=r.get(t.dia)??[];return e`
    <div class="mes__celula" ?data-fora=${!t.doMes} ?data-hoje=${t.dia===n}>
      <button
        class="mes__numero"
        aria-label=${f.calendario.novoEm(t.dia)}
        @click=${()=>U(t.dia)}
      >
        ${t.numero}
      </button>
      <div class="mes__eventos">${i.map(e=>H(e))}</div>
    </div>
  `}function Ze(){let t=m(),n=c(ae(F)),r=S(N,n.map(e=>e.dia));return e`
    <div class="mes">
      ${f.calendario.semana.map(t=>e`<span class="mes__cabecalho">${t}</span>`)}
      ${n.map(e=>Xe(e,t,r))}
    </div>
  `}var Z=null;se(`calendario`,()=>{Z=null});function Qe(){return document.querySelector(`.barra`)?.getBoundingClientRect().height??0}function $e(e){let t=`${P}:${e.map(e=>e.dia).join(`,`)}`;if(Z===t)return;Z=t;let n=m();if(!e.some(e=>e.dia===n))return;let r=a();r!==null&&queueMicrotask(()=>{let e=document.querySelector(`.grade__coluna`);if(e===null)return;let t=e.getBoundingClientRect(),n=t.top+scrollY+t.height*r-Qe()-innerHeight/3;scrollTo({top:Math.max(n,0),behavior:`smooth`})})}function et(n){let r=re(),i=m(),o=S(Le(),n.map(e=>e.dia)),s=a(),c=K?.ativo===!0?K.evento.id:void 0;return $e(n),e`
    <div
      class="grade"
      style=${`--colunas:${n.length}`}
      ?data-arrastando=${c!==void 0}
    >
      <span class="grade__canto"></span>
      ${n.map(t=>e`
          <span class="grade__dia" ?data-hoje=${t.dia===i}>
            ${f.calendario.semana[t.semana]} ${t.numero}
          </span>
        `)}

      <div class="grade__horas">
        ${r.map(t=>e`<span class="grade__hora">${C(t*60)}</span>`)}
      </div>

      ${n.map(n=>{let a=o.get(n.dia)??[],l=a.filter(e=>e.dia_inteiro===1),u=a.filter(e=>e.dia_inteiro===0),d=ie(u.map(e=>({inicioMin:e.hora_inicio_min,fimMin:e.hora_fim_min})));return e`
          <div class="grade__coluna" data-dia=${n.dia}>
            ${s===null||n.dia!==i?t:e`<span class="grade__agora" style=${`top:${s*100}%`}></span>`}

            ${r.map(t=>e`
                <button
                  class="grade__vaga"
                  aria-label=${f.calendario.novoAs(f.calendario.semana[n.semana]??``,C(t*60))}
                  @click=${()=>U(n.dia,t*60)}
                ></button>
              `)}

            ${l.length===0?t:e`
                  <div class="grade__inteiros">
                    ${l.map(e=>H(e))}
                  </div>
                `}

            ${u.map((n,r)=>{let i=d[r];if(i===void 0)return t;let a=100/i.colunas,o=W(n);return e`
                <button
                  class="grade__evento"
                  style=${`--cor-evento:${w(M,n.tipo_id)};--cor-evento-texto:${j(w(M,n.tipo_id))};top:${i.topo*100}%;height:${i.altura*100}%;inset-inline-start:calc(${i.coluna*a}% + 1px);width:calc(${a}% - 2px)`}
                  data-id=${n.id??t}
                  data-pauta=${n.pauta_id??t}
                  ?data-movel=${o}
                  ?data-arrastando=${c!==void 0&&n.id===c}
                  title=${o?`${V(n)}\n${f.calendario.dicaDoArraste}`:V(n)}
                  aria-keyshortcuts=${o?`Alt+ArrowUp Alt+ArrowDown Alt+Shift+ArrowUp Alt+Shift+ArrowDown`:t}
                  @click=${()=>B(n)}
                  @pointerdown=${e=>Re(n,e)}
                  @keydown=${e=>Ke(n,e)}
                  @touchmove=${We}
                  @contextmenu=${Ge}
                >
                  <span class="grade__evento-hora">${C(n.hora_inicio_min)}</span>
                  <span class="grade__evento-titulo">${n.titulo}</span>
                  ${G(n)?e`<span class="grade__evento-alca" aria-hidden="true"></span>`:t}
                </button>
              `})}
          </div>
        `})}
    </div>
  `}function tt(){let e=m(F);return et(p(F).filter(t=>t.dia===e))}function nt(){return et(p(F))}function rt(){let t=m(),n=u(F.getFullYear()),r=S(N,n.flatMap(e=>e.celulas.map(e=>e.dia)));return e`
    <div class="ano">
      ${n.map((n,i)=>e`
          <div class="ano__mes">
            <button
              class="ano__titulo"
              @click=${()=>{F=new Date(h(`${n.mes}-01`)),P=`mes`,g()}}
            >
              ${f.calendario.meses[i]}
            </button>

            <div class="ano__grade">
              ${f.calendario.semanaInicial.map(t=>e`<span class="ano__cabecalho">${t}</span>`)}
              ${n.celulas.map(n=>{let i=(r.get(n.dia)??[]).length;return e`
                  <button
                    class="ano__dia"
                    ?data-fora=${!n.doMes}
                    ?data-hoje=${n.dia===t}
                    ?data-com-evento=${i>0}
                    title=${i===0?``:f.calendario.eventos(i)}
                    @click=${()=>{F=new Date(h(n.dia)),P=`dia`,g()}}
                  >
                    ${n.numero}
                  </button>
                `})}
            </div>
          </div>
        `)}
    </div>
  `}function it(){let t=[...S(N,l(r(`agenda`,F))).entries()].filter(([,e])=>e.length>0);return t.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="calendar"></kk-icon>
        <p>${f.calendario.semEventos}</p>
      </div>
    `:e`
    <div class="calendario-agenda">
      ${t.map(([t,n])=>e`
          <div class="calendario-agenda__dia">
            <span class="calendario-agenda__data">${te(t)}</span>
            ${n.map(e=>Me(e))}
          </div>
        `)}
    </div>
  `}function at(){return P===`dia`?tt():P===`semana`?nt():P===`mes`?Ze():P===`ano`?rt():it()}function Q(e){I!==null&&(I={...I,...e})}function $(e){R!==null&&(R={...R,...e})}async function ot(e){if(!oe(e.dataInicio)){_(f.calendario.dataInvalida,`warning`);return}let t=!oe(e.dataFim)||e.dataFim<e.dataInicio?e.dataInicio:e.dataFim,n=+!!e.diaInteiro,r=pe(e.horaInicio),i=pe(e.horaFim),a=t===e.dataInicio&&i<r?r:i;try{await E({...e.id>0?{id:e.id}:{},titulo:e.titulo.trim()===``?f.calendario.semTitulo:e.titulo.trim(),tipo_id:e.tipoId??D(M),data_inicio_epoch:h(e.dataInicio),hora_inicio_min:n===1?0:r,data_fim_epoch:h(t),hora_fim_min:n===1?de:a,dia_inteiro:n,descricao:e.descricao.trim(),pauta_id:null})}catch(e){console.error(`Calendário: a gravação do evento falhou.`,e),_(f.calendario.eventoNaoSalvo,`danger`);return}I=null,_(f.calendario.eventoSalvo),await z()}async function st(e){if(await v({titulo:f.calendario.excluirEvento,texto:f.calendario.excluirTexto,rotuloConfirmar:f.acoes.excluir,variante:`danger`})){try{await he(e.id)}catch(e){console.error(`Calendário: a exclusão do evento falhou.`,e),_(f.calendario.eventoNaoExcluido,`danger`);return}I=null,_(f.calendario.eventoExcluido),await z()}}function ct(n){return e`
    <kk-dialog
      open
      label=${n.id>0?f.calendario.editarEvento:f.calendario.novoEvento}
      @kk-request-close=${y}
      @kk-initial-focus=${le}
      @kk-after-hide=${()=>{I=null,g()}}
    >
      <div class="formulario">
        <kk-input
          label=${f.calendario.titulo}
          placeholder=${f.calendario.tituloPlaceholder}
          .value=${n.titulo}
          @kk-input=${e=>{Q({titulo:e.target.value})}}
        ></kk-input>

        <div>
          <span class="formulario__rotulo">${f.calendario.tipo}</span>
          <div class="tipos-escolha">
            ${M.map(t=>e`
                <button
                  class="tipo-chip"
                  ?data-ativo=${n.tipoId===t.id}
                  @click=${()=>{Q({tipoId:t.id??null}),g()}}
                >
                  <span
                    class="tipo-chip__cor"
                    style=${`background:${b[t.cor_chave]??``}`}
                  ></span>
                  ${t.nome}
                </button>
              `)}
          </div>
        </div>

        <kk-switch
          ?checked=${n.diaInteiro}
          @kk-change=${e=>{Q({diaInteiro:e.target.checked}),g()}}
        >
          ${f.calendario.diaInteiro}
        </kk-switch>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${f.calendario.dataInicio}
            .value=${n.dataInicio}
            @kk-change=${e=>{let t=e.target.value,r=I?.dataFim??n.dataFim;Q({dataInicio:t,dataFim:r<t?t:r}),g()}}
          ></kk-input>
          ${n.diaInteiro?t:e`
                <kk-input
                  type="time"
                  label=${f.calendario.horaInicio}
                  .value=${n.horaInicio}
                  @kk-change=${e=>{Q({horaInicio:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <div class="formulario__par">
          <kk-input
            type="date"
            label=${f.calendario.dataFim}
            min=${n.dataInicio}
            .value=${n.dataFim}
            @kk-change=${e=>{Q({dataFim:e.target.value})}}
          ></kk-input>
          ${n.diaInteiro?t:e`
                <kk-input
                  type="time"
                  label=${f.calendario.horaFim}
                  .value=${n.horaFim}
                  @kk-change=${e=>{Q({horaFim:e.target.value})}}
                ></kk-input>
              `}
        </div>

        <kk-textarea
          rows="2"
          label=${f.calendario.descricao}
          placeholder=${f.calendario.descricaoPlaceholder}
          .value=${n.descricao}
          @kk-input=${e=>{Q({descricao:e.target.value})}}
        ></kk-textarea>
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${n.id>0?e`
              <kk-button variant="danger" outline @click=${()=>void st(n)}>
                <kk-icon slot="prefix" name="trash"></kk-icon>${f.acoes.excluir}
              </kk-button>
            `:t}
        <kk-button
          @click=${()=>{I=null,g()}}
        >
          ${f.acoes.cancelar}
        </kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{I!==null&&ot(I)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${f.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}async function lt(e){let t=e.nome.trim()===``?f.calendario.tipoSemNome:e.nome.trim(),n=e.id>0?O(M,e.id):void 0;try{await ye({...n??{ordem:ve(M),chave:``},...e.id>0?{id:e.id}:{},nome:t,cor_chave:e.cor,icone:e.icone})}catch(e){console.error(`Calendário: a gravação do tipo falhou.`,e),_(f.calendario.tipoNaoSalvo,`danger`);return}R=null,await z()}async function ut(e){if(e.id!==void 0){if(be(N,e.id))await v({titulo:f.calendario.tipoEmUsoTitulo,texto:f.calendario.tipoEmUsoTexto,rotuloConfirmar:f.acoes.fechar});else if(await v({titulo:f.calendario.excluirTipo,texto:f.calendario.excluirTexto,rotuloConfirmar:f.acoes.excluir,variante:`danger`})){try{await ge(e.id)}catch(e){console.error(`Calendário: a exclusão do tipo falhou.`,e),_(f.calendario.tipoNaoExcluido,`danger`);return}await z()}}}function dt(t){return e`
    <div class="formulario formulario--cartao">
      <kk-input
        label=${f.calendario.tipoNome}
        .value=${t.nome}
        @kk-input=${e=>{$({nome:e.target.value})}}
      ></kk-input>

      <div>
        <span class="formulario__rotulo">${f.calendario.cor}</span>
        <div class="tipos-escolha">
          ${Object.entries(b).map(([n,r])=>e`
              <button
                class="cor-chip"
                ?data-ativo=${t.cor===n}
                style=${`background:${r}`}
                aria-label=${n}
                @click=${()=>{$({cor:n}),g()}}
              ></button>
            `)}
        </div>
      </div>

      <div>
        <span class="formulario__rotulo">${f.calendario.icone}</span>
        <div class="tipos-escolha">
          ${Object.entries(x).map(([n,r])=>e`
              <button
                class="tipo-chip"
                ?data-ativo=${t.icone===n}
                aria-label=${n}
                @click=${()=>{$({icone:n}),g()}}
              >
                <kk-icon name=${r}></kk-icon>
              </button>
            `)}
        </div>
      </div>

      <div class="editor__acoes">
        <kk-button
          variant="primary"
          @click=${()=>{R!==null&&lt(R)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${f.acoes.salvar}
        </kk-button>
        <kk-button
          @click=${()=>{R=null,g()}}
        >
          ${f.acoes.cancelar}
        </kk-button>
      </div>
    </div>
  `}function ft(){return e`
    <kk-dialog
      open
      label=${f.calendario.tipos}
      @kk-request-close=${R===null?t:y}
      @kk-after-hide=${()=>{L=!1,R=null,g()}}
    >
      ${R===null?e`
            <div class="tipos-lista">
              ${M.map(t=>e`
                  <div class="tipo-linha">
                    <span
                      class="tipo-chip__cor"
                      style=${`background:${b[t.cor_chave]??``}`}
                    ></span>
                    <kk-icon name=${x[t.icone]??`calendar-event`}></kk-icon>
                    <span class="tipo-linha__nome">${t.nome}</span>
                    <kk-icon-button
                      name="pencil"
                      label=${f.acoes.editar}
                      @click=${()=>{R={id:t.id??0,nome:t.nome,cor:t.cor_chave,icone:t.icone},g()}}
                    ></kk-icon-button>
                    ${t.chave===``?e`
                          <kk-icon-button
                            name="trash"
                            label=${f.calendario.excluirTipo}
                            @click=${()=>void ut(t)}
                          ></kk-icon-button>
                        `:e`
                          <kk-icon
                            class="tipo-linha__fixo"
                            name="lock"
                            label=${f.calendario.tipoDaReuniao}
                          ></kk-icon>
                        `}
                  </div>
                `)}
            </div>

            <kk-button
              slot="footer"
              variant="primary"
              outline
              @click=${()=>{R={id:0,nome:``,cor:`primary`,icone:`evento`},g()}}
            >
              <kk-icon slot="prefix" name="plus"></kk-icon>${f.calendario.novoTipo}
            </kk-button>
          `:dt(R)}
    </kk-dialog>
  `}var pt={aoVoltar(){return I===null?L?(R===null?L=!1:R=null,g(),!0):!1:(I=null,g(),!0)},acoes(){if(Ee.terminou)return e`
      <kk-icon-button
        name="tags"
        label=${f.calendario.tipos}
        @click=${()=>{L=!0,R=null,g()}}
      ></kk-icon-button>
      <kk-icon-button
        name="plus"
        label=${f.calendario.novoEvento}
        @click=${()=>U(m())}
      ></kk-icon-button>
    `},conteudo(){let n=Ee.espera();return n===null?e`
      ${Ae()}
      ${at()}
      ${I===null?t:ct(I)}
      ${L?ft():t}
    `:n}};export{pt as telaCalendario};