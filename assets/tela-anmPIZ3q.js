import{_ as e,a as t,c as n,d as r,m as i}from"./erro-D2swQJCY.js";import{c as a,i as o,n as s,r as c,t as l}from"./idioma-DWx-F1Qy.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./notificar-BeOZKYlx.js";import{T as g,u as _,w as v}from"./index-DlNqF4dE.js";import{t as y}from"./carga-K0T2aEed.js";import{t as b}from"./dados-CLDIGIer.js";import{n as x,r as S,t as C}from"./dados-CzPr7lOE.js";import{t as w}from"./esquema-K3l3qcnX.js";function T(e){d(e),n()}function E(t,n,r){return e`
    <kk-switch
      class="a11y__opcao"
      name=${t}
      help-text=${r}
      ?checked=${m()[t]}
      @kk-change=${e=>{T({[t]:e.target.checked})}}
    >
      ${n}
    </kk-switch>
  `}function D(){let t=m().texto;return e`
    <div class="a11y__opcao">
      <span class="a11y__rotulo" id="a11y-texto">${s.acessibilidade.texto}</span>
      <div class="a11y__graus" role="radiogroup" aria-labelledby="a11y-texto">
        ${p.map(n=>e`
            <button
              type="button"
              class="chip a11y__grau"
              role="radio"
              aria-checked=${n===t}
              ?data-ativo=${n===t}
              data-grau=${n}
              style="font-size: ${n/100}em"
              @click=${()=>T({texto:n})}
            >
              ${s.acessibilidade.grau(n)}
            </button>
          `)}
      </div>
      <p class="a11y__ajuda">${s.acessibilidade.textoAjuda}</p>
    </div>
  `}function O(){return e`
    <kk-switch
      class="a11y__opcao"
      help-text=${s.acessibilidade.temaAjuda}
      ?checked=${g()===`escuro`}
      @kk-change=${e=>{v(e.target.checked?`escuro`:`claro`),n()}}
    >
      ${s.acessibilidade.tema}
    </kk-switch>
  `}function k(t,n,r){return e`
    <div class="a11y__sistema">
      <kk-icon name=${t}></kk-icon>
      <div>
        <strong>${n}</strong>
        <p>${r}</p>
      </div>
    </div>
  `}function A(){let t=matchMedia(`(prefers-reduced-motion: reduce)`).matches;return e`
    <div class="a11y">
      <p class="a11y__intro">${s.acessibilidade.intro}</p>

      <h3 class="secao"><kk-icon name="eye"></kk-icon>${s.acessibilidade.visao}</h3>
      ${D()} ${O()}
      ${E(`contraste`,s.acessibilidade.contraste,s.acessibilidade.contrasteAjuda)}
      ${E(`sublinhar`,s.acessibilidade.sublinhar,s.acessibilidade.sublinharAjuda)}
      ${E(`espacamento`,s.acessibilidade.espacamento,s.acessibilidade.espacamentoAjuda)}

      <h3 class="secao"><kk-icon name="player-pause"></kk-icon>${s.acessibilidade.movimentoSecao}</h3>
      ${E(`movimento`,s.acessibilidade.movimento,s.acessibilidade.movimentoAjuda)}
      ${t?e`<p class="a11y__nota">${s.acessibilidade.movimentoSistema}</p>`:i}

      <h3 class="secao"><kk-icon name="hand-finger"></kk-icon>${s.acessibilidade.toqueSecao}</h3>
      ${E(`alvos`,s.acessibilidade.alvos,s.acessibilidade.alvosAjuda)}
      ${E(`foco`,s.acessibilidade.foco,s.acessibilidade.focoAjuda)}

      <h3 class="secao"><kk-icon name="ear"></kk-icon>${s.acessibilidade.avisosSecao}</h3>
      ${u()?E(`vibrar`,s.acessibilidade.vibrar,s.acessibilidade.vibrarAjuda):e`<p class="a11y__nota">${s.acessibilidade.semVibracao}</p>`}

      <h3 class="secao"><kk-icon name="device-mobile"></kk-icon>${s.acessibilidade.sistemaSecao}</h3>
      ${k(`speakerphone`,s.acessibilidade.leitorTitulo,s.acessibilidade.leitorTexto)}
      ${k(`typography`,s.acessibilidade.fonteTitulo,s.acessibilidade.fonteTexto)}
      ${k(`zoom-in`,s.acessibilidade.zoomTitulo,s.acessibilidade.zoomTexto)}

      <div class="a11y__normas">
        <kk-icon name="accessible"></kk-icon>
        <p>${s.acessibilidade.normas}</p>
      </div>

      <kk-button
        class="a11y__restaurar"
        variant="neutral"
        outline
        @click=${()=>{T(f),h(s.acessibilidade.restaurado,`neutral`)}}
      >
        <kk-icon slot="prefix" name="refresh"></kk-icon>
        ${s.acessibilidade.restaurar}
      </kk-button>
    </div>
  `}var j=800,M=C,N=[],P=``,F,I=new Set,L=new y(`Perfil`,async()=>{[M,N]=await Promise.all([x(),b()])});r(`perfil`,()=>{L.esquecer(),X=null});async function R(){try{await S(M),P=s.perfil.salvoAs(a(Date.now()))}catch(e){console.error(`Perfil: a gravação falhou.`,e),P=t(e)}n()}function z(e){M={...M,...e},P=s.perfil.salvando,n(),clearTimeout(F),F=setTimeout(()=>void R(),j)}function B(e){return e===`telefone_duvidoso`?s.pessoas.telefoneDuvidoso:e===`email_duvidoso`?s.pessoas.emailDuvidoso:``}function V(e){return e.target.value}function H(t,r){let i=I.has(t)?w(t,M[t]):void 0;return e`
    <kk-input
      name=${t}
      type=${r}
      label=${t===`telefone`?s.perfil.telefone:s.perfil.email}
      autocomplete=${t===`telefone`?`tel`:`email`}
      help-text=${B(i)}
      .value=${M[t]}
      @kk-input=${e=>{I.delete(t),z({[t]:V(e)})}}
      @kk-blur=${()=>{I.has(t)||(I.add(t),n())}}
    ></kk-input>
  `}function U(){return l.length<2?i:e`
    <h2 class="secao">${s.perfil.idiomaSecao}</h2>
    <kk-select
      name="idioma"
      label=${s.perfil.idioma}
      help-text=${s.perfil.idiomaAjuda}
      .value=${o()}
      @kk-change=${e=>{let t=V(e);t!==o()&&c(t).then(()=>{n(),_()})}}
    >
      ${l.map(({tag:t,nome:n})=>e`<kk-option value=${t} lang=${t}>${n}</kk-option>`)}
    </kk-select>
  `}function W(){return e`
    <div class="formulario">
      <p class="perfil__status" aria-live="polite">${P}</p>
      <p class="perfil__intro">${s.perfil.intro}</p>

      <kk-input
        name="nome"
        label=${s.perfil.nome}
        autocomplete="name"
        autocapitalize="words"
        .value=${M.nome}
        @kk-input=${e=>z({nome:V(e)})}
      ></kk-input>

      <div class="formulario__par">${H(`telefone`,`tel`)} ${H(`email`,`email`)}</div>

      <kk-select
        name="congregacao"
        label=${s.perfil.congregacao}
        help-text=${N.length===0?s.perfil.congregacaoVazia:``}
        .value=${String(M.congregacao_id??0)}
        @kk-change=${e=>{let t=Number(V(e));z({congregacao_id:Number.isInteger(t)&&t>0?t:null})}}
      >
        <kk-option value="0">${s.perfil.congregacaoNenhuma}</kk-option>
        ${N.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>

      ${U()}
    </div>
  `}var G=[`sobre`,`acessibilidade`],K={sobre:`#/perfil`,acessibilidade:`#/perfil/acessibilidade`},q={sobre:`user`,acessibilidade:`accessible`};function J(e){return e===`acessibilidade`?s.perfil.abaAcessibilidade:s.perfil.abaSobre}var Y=`sobre`,X=null;function Z(e,t=!1){Y=e,history.replaceState(history.state,``,K[e]),n(),t&&document.querySelector(`#perfil-aba-${e}`)?.focus()}function Q(e){let t=G.indexOf(Y),n=e.key===`ArrowRight`?G[(t+1)%G.length]:e.key===`ArrowLeft`?G[(t-1+G.length)%G.length]:e.key===`Home`?G[0]:e.key===`End`?G[G.length-1]:void 0;n!==void 0&&(e.preventDefault(),Z(n,!0))}function $(){return e`
    <div class="chips perfil__abas" role="tablist" aria-label=${s.perfil.abas}>
      ${G.map(t=>e`
          <button
            type="button"
            class="chip"
            role="tab"
            id=${`perfil-aba-${t}`}
            aria-controls="perfil-painel"
            aria-selected=${Y===t}
            tabindex=${Y===t?0:-1}
            ?data-ativo=${Y===t}
            @click=${()=>Z(t)}
            @keydown=${Q}
          >
            <kk-icon name=${q[t]}></kk-icon>
            ${J(t)}
          </button>
        `)}
    </div>
  `}var ee={conteudo(t){let n=t.args.join(`/`);n!==X&&(Y=t.args[0]===`acessibilidade`?`acessibilidade`:`sobre`,X=n);let r=Y===`sobre`?L.espera():null;return e`
      ${$()}
      <div id="perfil-painel" role="tabpanel" aria-labelledby=${`perfil-aba-${Y}`}>
        ${r??(Y===`acessibilidade`?A():W())}
      </div>
    `}};export{ee as telaPerfil};