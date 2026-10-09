import{i as e,t}from"./lit-CL39YOSA.js";import{i as n,n as r,o as i,r as a,t as o}from"./idioma-Dwpp7Zfu.js";import{a as s,c,d as l}from"./erro-FHfTMgeP.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./notificar-BeOZKYlx.js";import{N as g,P as _,y as v}from"./index-B6HOd0Ya.js";import{t as y}from"./carga-D_DL_FuH.js";import{t as b}from"./dados-7yb3DXJX.js";import{n as x,r as S,t as C}from"./dados-Cg6P-frD.js";import{t as w}from"./esquema-K3l3qcnX.js";function T(e){d(e),c()}function E(t,n,r){return e`
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
      <span class="a11y__rotulo" id="a11y-texto">${r.acessibilidade.texto}</span>
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
              ${r.acessibilidade.grau(n)}
            </button>
          `)}
      </div>
      <p class="a11y__ajuda">${r.acessibilidade.textoAjuda}</p>
    </div>
  `}function O(){return e`
    <kk-switch
      class="a11y__opcao"
      help-text=${r.acessibilidade.temaAjuda}
      ?checked=${_()===`escuro`}
      @kk-change=${e=>{g(e.target.checked?`escuro`:`claro`),c()}}
    >
      ${r.acessibilidade.tema}
    </kk-switch>
  `}function k(t,n,r){return e`
    <div class="a11y__sistema">
      <kk-icon name=${t}></kk-icon>
      <div>
        <strong>${n}</strong>
        <p>${r}</p>
      </div>
    </div>
  `}function A(){let n=matchMedia(`(prefers-reduced-motion: reduce)`).matches;return e`
    <div class="a11y">
      <p class="a11y__intro">${r.acessibilidade.intro}</p>

      <h3 class="secao"><kk-icon name="eye"></kk-icon>${r.acessibilidade.visao}</h3>
      ${D()} ${O()}
      ${E(`contraste`,r.acessibilidade.contraste,r.acessibilidade.contrasteAjuda)}
      ${E(`sublinhar`,r.acessibilidade.sublinhar,r.acessibilidade.sublinharAjuda)}
      ${E(`espacamento`,r.acessibilidade.espacamento,r.acessibilidade.espacamentoAjuda)}

      <h3 class="secao"><kk-icon name="player-pause"></kk-icon>${r.acessibilidade.movimentoSecao}</h3>
      ${E(`movimento`,r.acessibilidade.movimento,r.acessibilidade.movimentoAjuda)}
      ${n?e`<p class="a11y__nota">${r.acessibilidade.movimentoSistema}</p>`:t}

      <h3 class="secao"><kk-icon name="hand-finger"></kk-icon>${r.acessibilidade.toqueSecao}</h3>
      ${E(`alvos`,r.acessibilidade.alvos,r.acessibilidade.alvosAjuda)}
      ${E(`foco`,r.acessibilidade.foco,r.acessibilidade.focoAjuda)}

      <h3 class="secao"><kk-icon name="ear"></kk-icon>${r.acessibilidade.avisosSecao}</h3>
      ${u()?E(`vibrar`,r.acessibilidade.vibrar,r.acessibilidade.vibrarAjuda):e`<p class="a11y__nota">${r.acessibilidade.semVibracao}</p>`}

      <h3 class="secao"><kk-icon name="device-mobile"></kk-icon>${r.acessibilidade.sistemaSecao}</h3>
      ${k(`speakerphone`,r.acessibilidade.leitorTitulo,r.acessibilidade.leitorTexto)}
      ${k(`typography`,r.acessibilidade.fonteTitulo,r.acessibilidade.fonteTexto)}
      ${k(`zoom-in`,r.acessibilidade.zoomTitulo,r.acessibilidade.zoomTexto)}

      <div class="a11y__normas">
        <kk-icon name="accessible"></kk-icon>
        <p>${r.acessibilidade.normas}</p>
      </div>

      <kk-button
        class="a11y__restaurar"
        variant="neutral"
        outline
        @click=${()=>{T(f),h(r.acessibilidade.restaurado,`neutral`)}}
      >
        <kk-icon slot="prefix" name="refresh"></kk-icon>
        ${r.acessibilidade.restaurar}
      </kk-button>
    </div>
  `}var j=800,M=C,N=[],P=``,F,I=new Set,L=new y(`Perfil`,async()=>{[M,N]=await Promise.all([x(),b()])});l(`perfil`,()=>{L.esquecer(),X=null});async function R(){try{await S(M),P=r.perfil.salvoAs(i(Date.now()))}catch(e){console.error(`Perfil: a gravação falhou.`,e),P=s(e)}c()}function z(e){M={...M,...e},P=r.perfil.salvando,c(),clearTimeout(F),F=setTimeout(()=>void R(),j)}function B(e){return e===`telefone_duvidoso`?r.pessoas.telefoneDuvidoso:e===`email_duvidoso`?r.pessoas.emailDuvidoso:``}function V(e){return e.target.value}function H(t,n){let i=I.has(t)?w(t,M[t]):void 0;return e`
    <kk-input
      name=${t}
      type=${n}
      label=${t===`telefone`?r.perfil.telefone:r.perfil.email}
      autocomplete=${t===`telefone`?`tel`:`email`}
      help-text=${B(i)}
      .value=${M[t]}
      @kk-input=${e=>{I.delete(t),z({[t]:V(e)})}}
      @kk-blur=${()=>{I.has(t)||(I.add(t),c())}}
    ></kk-input>
  `}function U(){return o.length<2?t:e`
    <h2 class="secao">${r.perfil.idiomaSecao}</h2>
    <kk-select
      name="idioma"
      label=${r.perfil.idioma}
      help-text=${r.perfil.idiomaAjuda}
      .value=${n()}
      @kk-change=${e=>{let t=V(e);t!==n()&&a(t).then(()=>{c(),v()})}}
    >
      ${o.map(({tag:t,nome:n})=>e`<kk-option value=${t} lang=${t}>${n}</kk-option>`)}
    </kk-select>
  `}function W(){return e`
    <div class="formulario">
      <p class="perfil__status" aria-live="polite">${P}</p>
      <p class="perfil__intro">${r.perfil.intro}</p>

      <kk-input
        name="nome"
        label=${r.perfil.nome}
        autocomplete="name"
        autocapitalize="words"
        .value=${M.nome}
        @kk-input=${e=>z({nome:V(e)})}
      ></kk-input>

      <div class="formulario__par">${H(`telefone`,`tel`)} ${H(`email`,`email`)}</div>

      <kk-select
        name="congregacao"
        label=${r.perfil.congregacao}
        help-text=${N.length===0?r.perfil.congregacaoVazia:``}
        .value=${String(M.congregacao_id??0)}
        @kk-change=${e=>{let t=Number(V(e));z({congregacao_id:Number.isInteger(t)&&t>0?t:null})}}
      >
        <kk-option value="0">${r.perfil.congregacaoNenhuma}</kk-option>
        ${N.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
      </kk-select>

      ${U()}
    </div>
  `}var G=[`sobre`,`acessibilidade`],K={sobre:`#/perfil`,acessibilidade:`#/perfil/acessibilidade`},q={sobre:`user`,acessibilidade:`accessible`};function J(e){return e===`acessibilidade`?r.perfil.abaAcessibilidade:r.perfil.abaSobre}var Y=`sobre`,X=null;function Z(e,t=!1){Y=e,history.replaceState(history.state,``,K[e]),c(),t&&document.querySelector(`#perfil-aba-${e}`)?.focus()}function Q(e){let t=G.indexOf(Y),n=e.key===`ArrowRight`?G[(t+1)%G.length]:e.key===`ArrowLeft`?G[(t-1+G.length)%G.length]:e.key===`Home`?G[0]:e.key===`End`?G[G.length-1]:void 0;n!==void 0&&(e.preventDefault(),Z(n,!0))}function $(){return e`
    <div class="chips perfil__abas" role="tablist" aria-label=${r.perfil.abas}>
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