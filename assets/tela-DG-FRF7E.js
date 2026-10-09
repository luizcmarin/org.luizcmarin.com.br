import{a as e,i as t,r as n,t as r}from"./lit-CL39YOSA.js";import{i,n as a,o}from"./idioma-Dwpp7Zfu.js";import{n as s}from"./texto-CuPUCLMw.js";import{t as c}from"./defineProperty-BbfpZ9Tg.js";import{a as l,c as u,d,f,i as p,p as m}from"./erro-FHfTMgeP.js";import{t as h}from"./notificar-BeOZKYlx.js";import{A as g,F as _,O as v,c as y,l as b,n as x,r as ee,u as te}from"./index-MmKFhWbr.js";import{n as ne}from"./carga-D_DL_FuH.js";import{t as re}from"./chave-DivMTCUc.js";var ie={"&nbsp;":` `,"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&apos;":`'`,"&#39;":`'`,"&ldquo;":`“`,"&rdquo;":`”`,"&lsquo;":`‘`,"&rsquo;":`’`,"&hellip;":`...`,"&mdash;":`—`,"&ndash;":`–`},ae=/[​﻿­]/g,oe=/ /g,se=/<(?:br|hr)\b[^>]*>|<\/(?:p|div|h[1-6]|blockquote|tr|section|article|figcaption|ul|ol)\b[^>]*>/gi,ce=/<li\b[^>]*>/gi,le=/<[^>]*>/g;function ue(e){return e.replace(/&[a-z]+;|&#\d+;/gi,e=>{let t=ie[e.toLowerCase()];if(t!==void 0)return t;let n=/^&#(\d+);$/.exec(e);return n?.[1]===void 0?e:String.fromCodePoint(Number(n[1]))})}function de(e){return e.replace(ae,``).replace(oe,` `).replace(/\s+/g,` `).trim()}function S(e){return de(ue((e||``).replace(ce,` `).replace(se,` `).replace(le,``)))}var C={dust:{duracao:1100,origem:`start`,grao:.9,acaso:.3,deriva:[120,-150],espalho:60,vida:.6,desfoque:0},scatter:{duracao:1200,origem:`start`,grao:.35,acaso:.5,deriva:[0,-40],espalho:220,vida:.5,desfoque:0},vapor:{duracao:1e3,origem:`top`,grao:.6,acaso:.85,deriva:[0,-190],espalho:50,vida:.7,desfoque:2.5},wind:{duracao:2e3,origem:`start`,grao:.8,acaso:.25,deriva:[330,-20],espalho:70,vida:.55,desfoque:0}},fe=`http://www.w3.org/2000/svg`,pe=0;function w(e,t,n=[]){let r=document.createElementNS(fe,e);for(let[e,n]of Object.entries(t))r.setAttribute(e,String(n));return r.append(...n),r}function me(e,t){let n=e===`start`?t?`end`:`start`:e===`end`?t?`start`:`end`:e,r=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' preserveAspectRatio='none'>${n===`center`?`<radialGradient id='g'><stop offset='0' stop-color='black'/><stop offset='1' stop-color='white'/></radialGradient>`:`<linearGradient id='g' ${{start:`x1='0' y1='0' x2='1' y2='0'`,end:`x1='1' y1='0' x2='0' y2='0'`,top:`x1='0' y1='0' x2='0' y2='1'`,bottom:`x1='0' y1='1' x2='0' y2='0'`,random:`x1='0' y1='0' x2='1' y2='0'`}[n]}><stop offset='0' stop-color='black'/><stop offset='1' stop-color='white'/></linearGradient>`}<rect width='1' height='1' fill='url(#g)'/></svg>`;return`data:image/svg+xml,${encodeURIComponent(r)}`}function he(e,t,n){let r=`kk-desintegrar-${++pe}`,{width:i,height:a}=e.getBoundingClientRect(),o=Math.max(Math.abs(t.deriva[0]),Math.abs(t.deriva[1]))+t.espalho,s=2*o,c=o+t.desfoque*3,l=1.1+t.vida,u=1/t.vida,d=Math.floor(Math.random()*1e3),f=n===`random`?1:t.acaso,p=-t.deriva[0]/s,m=-t.deriva[1]/s,h=t.espalho/o,g=w(`feColorMatrix`,{in:`campo`,type:`matrix`,result:`solto`,values:``}),_=w(`feColorMatrix`,{in:`campo`,type:`matrix`,result:`idade`,values:``}),v=w(`feImage`,{x:0,y:0,width:i,height:a,preserveAspectRatio:`none`,result:`varredura`}),y=me(n,getComputedStyle(e).direction===`rtl`);v.setAttribute(`href`,y),v.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,y);let b=[w(`feTurbulence`,{type:`fractalNoise`,baseFrequency:t.grao,numOctaves:1,seed:d,result:`ruido`}),w(`feColorMatrix`,{in:`ruido`,type:`matrix`,values:`1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1`,result:`grao`}),v,w(`feComposite`,{in:`grao`,in2:`varredura`,operator:`arithmetic`,k1:0,k2:f,k3:1-f,k4:0,result:`campo`}),g,_,w(`feComposite`,{in:`SourceGraphic`,in2:`solto`,operator:`out`,result:`ficou`}),w(`feComposite`,{in:`SourceGraphic`,in2:`solto`,operator:`in`,result:`soltou`}),w(`feColorMatrix`,{in:`idade`,type:`matrix`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1.25 0 0 0 1.25`,result:`vivo`}),w(`feComposite`,{in:`soltou`,in2:`vivo`,operator:`in`,result:`esmaecido`}),w(`feTurbulence`,{type:`fractalNoise`,baseFrequency:t.grao*.6,numOctaves:2,seed:d+7,result:`sopro`}),w(`feColorMatrix`,{in:`sopro`,type:`matrix`,values:`${h} 0 0 0 ${p+.5-h/2} 0 ${h} 0 0 ${m+.5-h/2} 0 0 0 0 0.5 0 0 0 0 1`,result:`rumo`}),w(`feComposite`,{in:`rumo`,in2:`idade`,operator:`arithmetic`,k1:1,k2:0,k3:-.5,k4:.5,result:`mapa`}),w(`feDisplacementMap`,{in:`esmaecido`,in2:`mapa`,scale:s,xChannelSelector:`R`,yChannelSelector:`G`,result:`voo`}),w(`feGaussianBlur`,{in:`voo`,stdDeviation:t.desfoque,result:`nuvem`}),w(`feMerge`,{},[w(`feMergeNode`,{in:`ficou`}),w(`feMergeNode`,{in:`nuvem`})])],x=w(`svg`,{width:0,height:0,"aria-hidden":`true`,focusable:`false`},[w(`defs`,{},[w(`filter`,{id:r,filterUnits:`userSpaceOnUse`,primitiveUnits:`userSpaceOnUse`,x:-c,y:-c,width:i+c*2,height:a+c*2,"color-interpolation-filters":`sRGB`},b)])]);return x.style.position=`absolute`,x.style.pointerEvents=`none`,{svg:x,id:r,em(e){let t=Math.max(0,Math.min(1,e))*l;g.setAttribute(`values`,`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -40 0 0 0 ${40*t}`);let n=u;_.setAttribute(`values`,`${-n} 0 0 0 ${n*t} ${-n} 0 0 0 ${n*t} ${-n} 0 0 0 ${n*t} 0 0 0 0 1`)}}}function ge(e,t,n){let r=C[t.estilo??`dust`]??C.dust,i=t.duracao??r.duracao,a=t.origem??r.origem,o=t.aoTerminar??`esconder`,s=()=>{o===`remover`?e.remove():o===`esconder`&&(e.style.visibility=`hidden`)};if(n===`voltar`&&e.style.removeProperty(`visibility`),ee()||i<=0||!e.isConnected)return n===`sair`&&s(),{finished:Promise.resolve(),cancel:()=>{}};let c=he(e,r,a),l=e.getRootNode();(l instanceof Document?l.body:l).append(c.svg);let u=e.style.filter,d=e.style.pointerEvents;c.em(n===`sair`?0:1),e.style.filter=`url(#${c.id})`,e.style.pointerEvents=`none`;let f=0,p=()=>{},m=new Promise(e=>{p=e}),h=()=>{cancelAnimationFrame(f),e.style.filter=u,e.style.pointerEvents=d,c.svg.remove()},g=performance.now(),_=e=>{let t=Math.min(1,(e-g)/i);c.em(n===`sair`?t:1-t),t<1?f=requestAnimationFrame(_):(n===`sair`&&s(),h(),p())};return f=requestAnimationFrame(_),{finished:m,cancel(){h(),p()}}}function _e(e,t={}){return ge(e,t,`sair`)}var ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ye=e=>(...t)=>({_$litDirective$:e,values:t}),T=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},E=class extends T{constructor(e){if(super(e),this.it=r,e.type!==ve.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===r||e==null)return this._t=void 0,this.it=e;if(e===n)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};E.directiveName=`unsafeHTML`,E.resultType=1;var be=ye(E);function xe(e){let t=document.querySelector(`kk-editor`);t!==null&&(t.value=e)}var{I:Se}=e,Ce=e=>e.strings===void 0,D=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),D(e,t);return!0},O=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},k=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ee(t)}};function we(e){this._$AN===void 0?this._$AM=e:(O(this),this._$AM=e,k(this))}function Te(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)D(r[e],!1),O(r[e]);else r!=null&&(D(r,!1),O(r))}else D(this,e)}}var Ee=e=>{e.type==ve.CHILD&&(e._$AP??=Te,e._$AQ??=we)},De=class extends T{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),k(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(D(this,e),O(this))}setValue(e){if(Ce(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},A=new WeakMap,Oe=ye(class extends De{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=A.get(t);n===void 0&&(n=new WeakMap,A.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?A.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function ke(e){if(!(e instanceof HTMLElement))return;let t=e;Promise.resolve(t.updateComplete).then(()=>e.focus())}var Ae=Oe(ke),j=[.3,.6,1.2];function je(e){return j[e-1]??j[1]}function Me(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:o}=t();i&&(a||(e.scrollTop+=je(o)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function M(){return typeof speechSynthesis<`u`}function Ne(e,t){if(!M()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=i(),n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function Pe(){M()&&speechSynthesis.pause()}function Fe(){M()&&speechSynthesis.resume()}function Ie(){M()&&speechSynthesis.cancel()}var N=new WeakMap,Le=class{constructor(){c(this,`apresentando`,!1),c(this,`pausada`,!1),c(this,`nivel`,2),c(this,`falando`,!1),c(this,`falaPausada`,!1),te(this,N,void 0)}abrir(){this.apresentando=!0,this.pausada=!1,u();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&b(N,this,Me(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel})))}fechar(){this.apresentando=!1,this.pausada=!1,y(N,this)?.call(this),b(N,this,void 0),this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),u()}alternarPausa(){this.pausada=!this.pausada,u()}calar(){Ie(),this.falando=!1,this.falaPausada=!1}alternarFala(e){this.falando?this.falaPausada?(Fe(),this.falaPausada=!1):(Pe(),this.falaPausada=!0):(Ne(S(e),()=>{this.falando=!1,this.falaPausada=!1,u()}),this.falando=!0,this.falaPausada=!1),u()}botaoFala(e){if(!M())return r;let n=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,i=this.falando?this.falaPausada?a.leitura.retomarLeitura:a.leitura.pausarLeitura:a.leitura.ler;return t`
      <kk-icon-button
        name=${n}
        label=${i}
        @click=${()=>this.alternarFala(e())}
      ></kk-icon-button>
    `}botaoApresentar(){return t`
      <kk-icon-button
        name="presentation"
        label=${a.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></kk-icon-button>
    `}overlay(e,n){return this.apresentando?t`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${e}</div>
        ${this.controles(n)}
      </div>
    `:r}controles(e){return t`
      <div class="apresentacao__controles">
        <kk-icon-button
          name="minus"
          label=${a.leitura.maisDevagar}
          ?disabled=${this.nivel<=1}
          @click=${()=>this.ajustar(-1)}
        ></kk-icon-button>
        <span class="apresentacao__velocidade">${a.leitura.velocidade(this.nivel)}</span>
        <kk-icon-button
          name="plus"
          label=${a.leitura.maisRapido}
          ?disabled=${this.nivel>=3}
          @click=${()=>this.ajustar(1)}
        ></kk-icon-button>
        <kk-icon-button
          name=${this.pausada?`player-play`:`player-pause`}
          label=${this.pausada?a.leitura.continuar:a.leitura.pausar}
          @click=${()=>this.alternarPausa()}
        ></kk-icon-button>
        ${this.botaoFala(e)}
        <kk-icon-button
          name="x"
          label=${a.acoes.fechar}
          @click=${()=>{this.fechar(),u()}}
        ></kk-icon-button>
      </div>
    `}},P=_(`anotacoes`),F=_(`pastas`);function I(e){return{...typeof e.id==`number`?{id:e.id}:{},titulo:String(e.titulo??``),conteudo:String(e.conteudo??``),pasta_id:re(e.pasta_id),esta_fixada:+(Number(e.esta_fixada??0)===1),esta_arquivada:+(Number(e.esta_arquivada??0)===1),data_criacao:Number(e.data_criacao??0),data_modificacao:Number(e.data_modificacao??0)}}function Re(e){return{...typeof e.id==`number`?{id:e.id}:{},nome:String(e.nome??``),data_criacao:Number(e.data_criacao??0)}}var ze={arquivadas:!1,pastaId:null,busca:``};function Be(e,t){return e.filter(e=>e.esta_arquivada===1!==t.arquivadas||t.pastaId!==null&&e.pasta_id!==t.pastaId?!1:s(t.busca,e.titulo,S(e.conteudo)))}function Ve(e){return[...e].sort((e,t)=>e.esta_fixada===t.esta_fixada?t.data_modificacao-e.data_modificacao:t.esta_fixada-e.esta_fixada)}function He(e,t=150){let n=S(e);return n.length>t?`${n.slice(0,t)}...`:n}async function Ue(e){return Ve(Be((await P.todos()).map(I),e))}async function We(e){let t=await P.obter(e);return t===void 0?void 0:I(t)}async function L(){return(await F.todos()).map(Re)}function Ge(e){return P.salvar({...e})}function Ke(e){return P.excluir(e)}async function qe(e){await F.salvar({nome:e,data_criacao:Date.now()})}async function Je(e,t){await F.salvar({...e,nome:t})}async function Ye(e){await F.excluir(e)}var Xe=400,Ze=1200,R=[],z=[],B=ze,V=null,H,U,W=new Le;async function G(){z=await Ue(B),u()}async function K(e){if(W.fechar(),e===null)V={id:null,titulo:``,conteudo:``,pastaId:B.pastaId,fixada:!1,arquivada:!1,status:``};else{let t=await We(e);if(t===void 0){f(`anotacoes`);return}V={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}u(),xe(V.conteudo)}var q=new ne(`Anotações`,async e=>{await Z(),R=await L();let t=e.args[0];t===void 0?(V=null,await G()):t===`nova`?await K(null):await K(Number.parseInt(t,10))});d(`anotacoes`,()=>{Z(),q.esquecer(),W.fechar()}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Z()});function Qe(e){B={...B,busca:e},clearTimeout(H),H=setTimeout(()=>void G(),Xe)}function J(e){B={...B,...e},G()}async function Y(){let e=await g({titulo:a.pasta.nova,texto:a.pasta.novaTexto,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.criar,erroVazio:a.pasta.erroVazio});if(e!==null){try{await qe(e),R=await L()}catch(e){console.error(`Anotações: a pasta não foi criada.`,e),h(a.pasta.naoSalva,`danger`)}u()}}async function $e(e){let t=await g({titulo:a.pasta.renomear,valor:e.nome,placeholder:a.pasta.placeholder,rotuloConfirmar:a.acoes.renomear,erroVazio:a.pasta.erroVazio});if(t!==null&&t!==e.nome){try{await Je(e,t),R=await L()}catch(e){console.error(`Anotações: a pasta não foi renomeada.`,e),h(a.pasta.naoSalva,`danger`)}u()}}async function et(e){if(await v({titulo:a.pasta.excluir,texto:a.pasta.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})){try{await Ye(e),R=await L()}catch(e){console.error(`Anotações: a pasta não foi excluída.`,e),h(a.pasta.naoExcluida,`danger`);return}B.pastaId===e&&(B={...B,pastaId:null}),await G()}}function tt(e){let n=He(e.conteudo);return t`
    <button
      class="cartao"
      data-anotacao=${e.id??0}
      ?data-fixada=${e.esta_fixada===1}
      @click=${()=>f(`anotacoes/${e.id??``}`)}
    >
      <span class="cartao__topo">
        ${e.esta_fixada===1?t`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:r}
        <span class="cartao__titulo">${e.titulo||a.anotacoes.semTitulo}</span>
      </span>
      ${n===``?r:t`<span class="cartao__previa">${n}</span>`}
      <span class="cartao__data">${o(e.data_modificacao)}</span>
    </button>
  `}function nt(){let e=R.find(e=>e.id===B.pastaId);return t`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        label=${a.anotacoes.buscar}
        .value=${B.busca}
        @kk-input=${e=>Qe(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${B.pastaId===null&&!B.arquivadas}
        @click=${()=>J({pastaId:null,arquivadas:!1})}
      >
        ${a.anotacoes.todas}
      </button>

      ${R.map(e=>t`
          <button
            class="chip"
            data-pasta=${e.id??0}
            ?data-ativo=${B.pastaId===e.id}
            @click=${()=>J({pastaId:e.id??null,arquivadas:!1})}
          >
            ${e.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${B.arquivadas}
        @click=${()=>J({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${a.anotacoes.arquivadas}
      </button>

      <button
        class="chip"
        aria-label=${a.pasta.nova}
        title=${a.pasta.nova}
        @click=${()=>void Y()}
      >
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${e===void 0?r:t`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome"><kk-icon name="folder"></kk-icon>${e.nome}</span>
            <kk-button size="small" @click=${()=>void $e(e)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${a.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void et(e.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${a.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${z.length===0?t`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${B.arquivadas?a.anotacoes.semArquivadas:a.anotacoes.semAnotacoes}</p>
          </div>
        `:t`<div class="cartoes">${z.map(e=>tt(e))}</div>`}
  `}function X(){V!==null&&(V={...V,status:a.anotacoes.salvando},u(),clearTimeout(U),U=setTimeout(()=>{U=void 0,Q()},Ze))}async function Z(){U!==void 0&&(clearTimeout(U),U=void 0,await Q())}async function Q(){if(V===null)return;if(V.titulo.trim()===``){V={...V,status:a.anotacoes.informeTitulo},u();return}let e=Date.now(),t={titulo:V.titulo,conteudo:V.conteudo,pasta_id:V.pastaId,esta_fixada:+!!V.fixada,esta_arquivada:+!!V.arquivada,data_modificacao:e,...V.id===null?{data_criacao:e}:{id:V.id}},n;try{n=await Ge(t)}catch(e){console.error(`Anotações: a gravação falhou.`,e),V!==null&&(V={...V,status:l(e)}),u();return}if(V!==null){if(V.id===null){V={...V,id:n};let e=m();e.modulo===`anotacoes`&&e.args[0]===`nova`&&history.replaceState(null,``,`#/anotacoes/${n}`)}V={...V,status:a.anotacoes.salvoAs(o(e))},u()}}async function $(e){V!==null&&(V=e===`fixada`?{...V,fixada:!V.fixada}:{...V,arquivada:!V.arquivada},u(),V.id!==null&&await Q())}async function rt(){let e=V?.id;if(e==null||!await v({titulo:a.anotacoes.excluir,texto:a.anotacoes.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`}))return;clearTimeout(U),U=void 0;try{await Ke(e)}catch(e){console.error(`Anotações: a exclusão falhou.`,e),h(a.anotacoes.naoExcluida,`danger`);return}let t=document.querySelector(`.editor--cheio`);t&&await _e(t).finished,h(a.anotacoes.excluida),f(`anotacoes`)}function it(e){return t`
    <div class="editor editor--cheio">
      <kk-input
        ${e.id===null?Ae:r}
        class="editor__titulo"
        name="titulo"
        label=${a.anotacoes.titulo}
        placeholder=${a.anotacoes.tituloPlaceholder}
        .value=${e.titulo}
        @kk-input=${t=>{V={...e,titulo:t.target.value},X()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${e.pastaId===null}
          @click=${()=>{V={...e,pastaId:null},X()}}
        >
          ${a.anotacoes.semPasta}
        </button>

        ${R.map(n=>t`
            <button
              class="chip"
              ?data-ativo=${e.pastaId===n.id}
              @click=${()=>{V={...e,pastaId:n.id??null},X()}}
            >
              ${n.nome}
            </button>
          `)}

        <button
          class="chip"
          aria-label=${a.pasta.nova}
          title=${a.pasta.nova}
          @click=${()=>void Y()}
        >
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <p class="editor__status" aria-live="polite">${e.status}</p>

      <kk-editor
        @kk-input=${t=>{V={...e,conteudo:t.detail.value},X()}}
      ></kk-editor>
    </div>

    ${W.overlay(t`
        <h1>${e.titulo||a.anotacoes.semTitulo}</h1>
        <div class="prosa">${be(x(e.conteudo))}</div>
      `,()=>`${e.titulo}. ${e.conteudo}`)}
  `}function at(e){if(e.id!==null)return t`
    <kk-icon-button
      name="pin"
      variant=${e.fixada?`filled`:`outline`}
      label=${e.fixada?a.anotacoes.desafixar:a.anotacoes.fixar}
      @click=${()=>void $(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${e.arquivada?`filled`:`outline`}
      label=${e.arquivada?a.anotacoes.restaurar:a.anotacoes.arquivar}
      @click=${()=>void $(`arquivada`)}
    ></kk-icon-button>
    ${W.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${a.anotacoes.excluir}
      @click=${()=>void rt()}
    ></kk-icon-button>
  `}var ot={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=V?.titulo.trim()??``;return t===``?a.anotacoes.nova:t},acoes(e){return e.args.length===0?t`
        <kk-icon-button
          name="plus"
          label=${a.anotacoes.nova}
          @click=${()=>f(`anotacoes/nova`)}
        ></kk-icon-button>
      `:V===null?void 0:at(V)},conteudo(e){let t=q.falhou(e);return t===null?e.args.length===0?nt():V===null?p():it(V):t}};export{ot as telaAnotacoes};