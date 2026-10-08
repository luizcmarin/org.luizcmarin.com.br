import{_ as e,a as t,c as n,d as r,f as i,g as a,i as o,m as s,p as c,v as l}from"./erro-Bc0C-0ww.js";import{c as u,i as d,n as f}from"./idioma-CVgIQtmc.js";import{n as p}from"./texto-CuPUCLMw.js";import{t as m}from"./defineProperty-BbfpZ9Tg.js";import{t as h}from"./notificar-BeOZKYlx.js";import{E as g,a as _,i as v,n as y,r as b,t as x,x as S,y as C}from"./index-CCl639Mp.js";import{n as ee}from"./carga-N4u32e31.js";import{t as te}from"./chave-DivMTCUc.js";var ne={"&nbsp;":` `,"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&apos;":`'`,"&#39;":`'`,"&ldquo;":`“`,"&rdquo;":`”`,"&lsquo;":`‘`,"&rsquo;":`’`,"&hellip;":`...`,"&mdash;":`—`,"&ndash;":`–`},re=/[​﻿­]/g,ie=/ /g,ae=/<(?:br|hr)\b[^>]*>|<\/(?:p|div|h[1-6]|blockquote|tr|section|article|figcaption|ul|ol)\b[^>]*>/gi,oe=/<li\b[^>]*>/gi,se=/<[^>]*>/g;function ce(e){return e.replace(/&[a-z]+;|&#\d+;/gi,e=>{let t=ne[e.toLowerCase()];if(t!==void 0)return t;let n=/^&#(\d+);$/.exec(e);return n?.[1]===void 0?e:String.fromCodePoint(Number(n[1]))})}function le(e){return e.replace(re,``).replace(ie,` `).replace(/\s+/g,` `).trim()}function w(e){return le(ce((e||``).replace(oe,` `).replace(ae,` `).replace(se,``)))}var T={dust:{duracao:1100,origem:`start`,grao:.9,acaso:.3,deriva:[120,-150],espalho:60,vida:.6,desfoque:0},scatter:{duracao:1200,origem:`start`,grao:.35,acaso:.5,deriva:[0,-40],espalho:220,vida:.5,desfoque:0},vapor:{duracao:1e3,origem:`top`,grao:.6,acaso:.85,deriva:[0,-190],espalho:50,vida:.7,desfoque:2.5},wind:{duracao:2e3,origem:`start`,grao:.8,acaso:.25,deriva:[330,-20],espalho:70,vida:.55,desfoque:0}},ue=`http://www.w3.org/2000/svg`,de=0;function E(e,t,n=[]){let r=document.createElementNS(ue,e);for(let[e,n]of Object.entries(t))r.setAttribute(e,String(n));return r.append(...n),r}function fe(e,t){let n=e===`start`?t?`end`:`start`:e===`end`?t?`start`:`end`:e,r=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' preserveAspectRatio='none'>${n===`center`?`<radialGradient id='g'><stop offset='0' stop-color='black'/><stop offset='1' stop-color='white'/></radialGradient>`:`<linearGradient id='g' ${{start:`x1='0' y1='0' x2='1' y2='0'`,end:`x1='1' y1='0' x2='0' y2='0'`,top:`x1='0' y1='0' x2='0' y2='1'`,bottom:`x1='0' y1='1' x2='0' y2='0'`,random:`x1='0' y1='0' x2='1' y2='0'`}[n]}><stop offset='0' stop-color='black'/><stop offset='1' stop-color='white'/></linearGradient>`}<rect width='1' height='1' fill='url(#g)'/></svg>`;return`data:image/svg+xml,${encodeURIComponent(r)}`}function pe(e,t,n){let r=`kk-desintegrar-${++de}`,{width:i,height:a}=e.getBoundingClientRect(),o=Math.max(Math.abs(t.deriva[0]),Math.abs(t.deriva[1]))+t.espalho,s=2*o,c=o+t.desfoque*3,l=1.1+t.vida,u=1/t.vida,d=Math.floor(Math.random()*1e3),f=n===`random`?1:t.acaso,p=-t.deriva[0]/s,m=-t.deriva[1]/s,h=t.espalho/o,g=E(`feColorMatrix`,{in:`campo`,type:`matrix`,result:`solto`,values:``}),_=E(`feColorMatrix`,{in:`campo`,type:`matrix`,result:`idade`,values:``}),v=E(`feImage`,{x:0,y:0,width:i,height:a,preserveAspectRatio:`none`,result:`varredura`}),y=fe(n,getComputedStyle(e).direction===`rtl`);v.setAttribute(`href`,y),v.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,y);let b=[E(`feTurbulence`,{type:`fractalNoise`,baseFrequency:t.grao,numOctaves:1,seed:d,result:`ruido`}),E(`feColorMatrix`,{in:`ruido`,type:`matrix`,values:`1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 1`,result:`grao`}),v,E(`feComposite`,{in:`grao`,in2:`varredura`,operator:`arithmetic`,k1:0,k2:f,k3:1-f,k4:0,result:`campo`}),g,_,E(`feComposite`,{in:`SourceGraphic`,in2:`solto`,operator:`out`,result:`ficou`}),E(`feComposite`,{in:`SourceGraphic`,in2:`solto`,operator:`in`,result:`soltou`}),E(`feColorMatrix`,{in:`idade`,type:`matrix`,values:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1.25 0 0 0 1.25`,result:`vivo`}),E(`feComposite`,{in:`soltou`,in2:`vivo`,operator:`in`,result:`esmaecido`}),E(`feTurbulence`,{type:`fractalNoise`,baseFrequency:t.grao*.6,numOctaves:2,seed:d+7,result:`sopro`}),E(`feColorMatrix`,{in:`sopro`,type:`matrix`,values:`${h} 0 0 0 ${p+.5-h/2} 0 ${h} 0 0 ${m+.5-h/2} 0 0 0 0 0.5 0 0 0 0 1`,result:`rumo`}),E(`feComposite`,{in:`rumo`,in2:`idade`,operator:`arithmetic`,k1:1,k2:0,k3:-.5,k4:.5,result:`mapa`}),E(`feDisplacementMap`,{in:`esmaecido`,in2:`mapa`,scale:s,xChannelSelector:`R`,yChannelSelector:`G`,result:`voo`}),E(`feGaussianBlur`,{in:`voo`,stdDeviation:t.desfoque,result:`nuvem`}),E(`feMerge`,{},[E(`feMergeNode`,{in:`ficou`}),E(`feMergeNode`,{in:`nuvem`})])],x=E(`svg`,{width:0,height:0,"aria-hidden":`true`,focusable:`false`},[E(`defs`,{},[E(`filter`,{id:r,filterUnits:`userSpaceOnUse`,primitiveUnits:`userSpaceOnUse`,x:-c,y:-c,width:i+c*2,height:a+c*2,"color-interpolation-filters":`sRGB`},b)])]);return x.style.position=`absolute`,x.style.pointerEvents=`none`,{svg:x,id:r,em(e){let t=Math.max(0,Math.min(1,e))*l;g.setAttribute(`values`,`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -40 0 0 0 ${40*t}`);let n=u;_.setAttribute(`values`,`${-n} 0 0 0 ${n*t} ${-n} 0 0 0 ${n*t} ${-n} 0 0 0 ${n*t} 0 0 0 0 1`)}}}function me(e,t,n){let r=T[t.estilo??`dust`]??T.dust,i=t.duracao??r.duracao,a=t.origem??r.origem,o=t.aoTerminar??`esconder`,s=()=>{o===`remover`?e.remove():o===`esconder`&&(e.style.visibility=`hidden`)};if(n===`voltar`&&e.style.removeProperty(`visibility`),y()||i<=0||!e.isConnected)return n===`sair`&&s(),{finished:Promise.resolve(),cancel:()=>{}};let c=pe(e,r,a),l=e.getRootNode();(l instanceof Document?l.body:l).append(c.svg);let u=e.style.filter,d=e.style.pointerEvents;c.em(n===`sair`?0:1),e.style.filter=`url(#${c.id})`,e.style.pointerEvents=`none`;let f=0,p=()=>{},m=new Promise(e=>{p=e}),h=()=>{cancelAnimationFrame(f),e.style.filter=u,e.style.pointerEvents=d,c.svg.remove()},g=performance.now(),_=e=>{let t=Math.min(1,(e-g)/i);c.em(n===`sair`?t:1-t),t<1?f=requestAnimationFrame(_):(n===`sair`&&s(),h(),p())};return f=requestAnimationFrame(_),{finished:m,cancel(){h(),p()}}}function he(e,t={}){return me(e,t,`sair`)}var ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D=e=>(...t)=>({_$litDirective$:e,values:t}),O=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},k=class extends O{constructor(e){if(super(e),this.it=s,e.type!==ge.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===s||e==null)return this._t=void 0,this.it=e;if(e===a)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};k.directiveName=`unsafeHTML`,k.resultType=1;var _e=D(k);function ve(e){let t=document.querySelector(`kk-editor`);t!==null&&(t.value=e)}var{I:ye}=l,be=e=>e.strings===void 0,A=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),A(e,t);return!0},j=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},M=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ce(t)}};function xe(e){this._$AN===void 0?this._$AM=e:(j(this),this._$AM=e,M(this))}function Se(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)A(r[e],!1),j(r[e]);else r!=null&&(A(r,!1),j(r))}else A(this,e)}}var Ce=e=>{e.type==ge.CHILD&&(e._$AP??=Se,e._$AQ??=xe)},we=class extends O{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),M(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(A(this,e),j(this))}setValue(e){if(be(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},N=new WeakMap,Te=D(class extends we{render(e){return s}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),s}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=N.get(t);n===void 0&&(n=new WeakMap,N.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?N.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function Ee(e){if(!(e instanceof HTMLElement))return;let t=e;Promise.resolve(t.updateComplete).then(()=>e.focus())}var De=Te(Ee),P=[.3,.6,1.2];function Oe(e){return P[e-1]??P[1]}function ke(e,t){let n=requestAnimationFrame(function r(){let{ativo:i,pausado:a,nivel:o}=t();i&&(a||(e.scrollTop+=Oe(o)),n=requestAnimationFrame(r))});return()=>cancelAnimationFrame(n)}function F(){return typeof speechSynthesis<`u`}function Ae(e,t){if(!F()){t?.();return}let n=new SpeechSynthesisUtterance(e);n.lang=d(),n.rate=.9,n.onend=()=>t?.(),n.onerror=()=>t?.(),speechSynthesis.cancel(),speechSynthesis.speak(n)}function je(){F()&&speechSynthesis.pause()}function Me(){F()&&speechSynthesis.resume()}function Ne(){F()&&speechSynthesis.cancel()}var I=new WeakMap,Pe=class{constructor(){m(this,`apresentando`,!1),m(this,`pausada`,!1),m(this,`nivel`,2),m(this,`falando`,!1),m(this,`falaPausada`,!1),_(this,I,void 0)}abrir(){this.apresentando=!0,this.pausada=!1,n();let e=document.querySelector(`.apresentacao__rolagem`);e!==null&&v(I,this,ke(e,()=>({ativo:this.apresentando,pausado:this.pausada,nivel:this.nivel})))}fechar(){this.apresentando=!1,this.pausada=!1,b(I,this)?.call(this),v(I,this,void 0),this.calar()}ajustar(e){this.nivel=Math.min(3,Math.max(1,this.nivel+e)),n()}alternarPausa(){this.pausada=!this.pausada,n()}calar(){Ne(),this.falando=!1,this.falaPausada=!1}alternarFala(e){this.falando?this.falaPausada?(Me(),this.falaPausada=!1):(je(),this.falaPausada=!0):(Ae(w(e),()=>{this.falando=!1,this.falaPausada=!1,n()}),this.falando=!0,this.falaPausada=!1),n()}botaoFala(t){if(!F())return s;let n=this.falando?this.falaPausada?`player-play`:`player-pause`:`volume`,r=this.falando?this.falaPausada?f.leitura.retomarLeitura:f.leitura.pausarLeitura:f.leitura.ler;return e`
      <kk-icon-button
        name=${n}
        label=${r}
        @click=${()=>this.alternarFala(t())}
      ></kk-icon-button>
    `}botaoApresentar(){return e`
      <kk-icon-button
        name="presentation"
        label=${f.leitura.apresentar}
        @click=${()=>this.abrir()}
      ></kk-icon-button>
    `}overlay(t,n){return this.apresentando?e`
      <div class="apresentacao">
        <div class="apresentacao__rolagem">${t}</div>
        ${this.controles(n)}
      </div>
    `:s}controles(t){return e`
      <div class="apresentacao__controles">
        <kk-icon-button
          name="minus"
          label=${f.leitura.maisDevagar}
          ?disabled=${this.nivel<=1}
          @click=${()=>this.ajustar(-1)}
        ></kk-icon-button>
        <span class="apresentacao__velocidade">${f.leitura.velocidade(this.nivel)}</span>
        <kk-icon-button
          name="plus"
          label=${f.leitura.maisRapido}
          ?disabled=${this.nivel>=3}
          @click=${()=>this.ajustar(1)}
        ></kk-icon-button>
        <kk-icon-button
          name=${this.pausada?`player-play`:`player-pause`}
          label=${this.pausada?f.leitura.continuar:f.leitura.pausar}
          @click=${()=>this.alternarPausa()}
        ></kk-icon-button>
        ${this.botaoFala(t)}
        <kk-icon-button
          name="x"
          label=${f.acoes.fechar}
          @click=${()=>{this.fechar(),n()}}
        ></kk-icon-button>
      </div>
    `}},L=g(`anotacoes`),R=g(`pastas`);function z(e){return{...typeof e.id==`number`?{id:e.id}:{},titulo:String(e.titulo??``),conteudo:String(e.conteudo??``),pasta_id:te(e.pasta_id),esta_fixada:+(Number(e.esta_fixada??0)===1),esta_arquivada:+(Number(e.esta_arquivada??0)===1),data_criacao:Number(e.data_criacao??0),data_modificacao:Number(e.data_modificacao??0)}}function Fe(e){return{...typeof e.id==`number`?{id:e.id}:{},nome:String(e.nome??``),data_criacao:Number(e.data_criacao??0)}}var Ie={arquivadas:!1,pastaId:null,busca:``};function Le(e,t){return e.filter(e=>e.esta_arquivada===1!==t.arquivadas||t.pastaId!==null&&e.pasta_id!==t.pastaId?!1:p(t.busca,e.titulo,w(e.conteudo)))}function Re(e){return[...e].sort((e,t)=>e.esta_fixada===t.esta_fixada?t.data_modificacao-e.data_modificacao:t.esta_fixada-e.esta_fixada)}function ze(e,t=150){let n=w(e);return n.length>t?`${n.slice(0,t)}...`:n}async function Be(e){return Re(Le((await L.todos()).map(z),e))}async function Ve(e){let t=await L.obter(e);return t===void 0?void 0:z(t)}async function B(){return(await R.todos()).map(Fe)}function He(e){return L.salvar({...e})}function Ue(e){return L.excluir(e)}async function We(e){await R.salvar({nome:e,data_criacao:Date.now()})}async function Ge(e,t){await R.salvar({...e,nome:t})}async function Ke(e){await R.excluir(e)}var qe=400,Je=1200,V=[],H=[],U=Ie,W=null,G,K,q=new Pe;async function J(){H=await Be(U),n()}async function Y(e){if(q.fechar(),e===null)W={id:null,titulo:``,conteudo:``,pastaId:U.pastaId,fixada:!1,arquivada:!1,status:``};else{let t=await Ve(e);if(t===void 0){i(`anotacoes`);return}W={id:t.id??null,titulo:t.titulo,conteudo:t.conteudo,pastaId:t.pasta_id,fixada:t.esta_fixada===1,arquivada:t.esta_arquivada===1,status:``}}n(),ve(W.conteudo)}var Ye=new ee(`Anotações`,async e=>{await Q(),V=await B();let t=e.args[0];t===void 0?(W=null,await J()):t===`nova`?await Y(null):await Y(Number.parseInt(t,10))});r(`anotacoes`,()=>{Q(),Ye.esquecer(),q.fechar()}),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Q()});function Xe(e){U={...U,busca:e},clearTimeout(G),G=setTimeout(()=>void J(),qe)}function X(e){U={...U,...e},J()}async function Ze(){let e=await S({titulo:f.pasta.nova,texto:f.pasta.novaTexto,placeholder:f.pasta.placeholder,rotuloConfirmar:f.acoes.criar,erroVazio:f.pasta.erroVazio});if(e!==null){try{await We(e),V=await B()}catch(e){console.error(`Anotações: a pasta não foi criada.`,e),h(f.pasta.naoSalva,`danger`)}n()}}async function Qe(e){let t=await S({titulo:f.pasta.renomear,valor:e.nome,placeholder:f.pasta.placeholder,rotuloConfirmar:f.acoes.renomear,erroVazio:f.pasta.erroVazio});if(t!==null&&t!==e.nome){try{await Ge(e,t),V=await B()}catch(e){console.error(`Anotações: a pasta não foi renomeada.`,e),h(f.pasta.naoSalva,`danger`)}n()}}async function $e(e){if(await C({titulo:f.pasta.excluir,texto:f.pasta.excluirTexto,rotuloConfirmar:f.acoes.excluir,variante:`danger`})){try{await Ke(e),V=await B()}catch(e){console.error(`Anotações: a pasta não foi excluída.`,e),h(f.pasta.naoExcluida,`danger`);return}U.pastaId===e&&(U={...U,pastaId:null}),await J()}}function et(t){let n=ze(t.conteudo);return e`
    <button
      class="cartao"
      data-anotacao=${t.id??0}
      ?data-fixada=${t.esta_fixada===1}
      @click=${()=>i(`anotacoes/${t.id??``}`)}
    >
      <span class="cartao__topo">
        ${t.esta_fixada===1?e`<kk-icon class="cartao__pino" name="pin" variant="filled"></kk-icon>`:s}
        <span class="cartao__titulo">${t.titulo||f.anotacoes.semTitulo}</span>
      </span>
      ${n===``?s:e`<span class="cartao__previa">${n}</span>`}
      <span class="cartao__data">${u(t.data_modificacao)}</span>
    </button>
  `}function tt(){let t=V.find(e=>e.id===U.pastaId);return e`
    <div class="filtros">
      <kk-input
        class="filtros__busca"
        type="search"
        clearable
        label=${f.anotacoes.buscar}
        .value=${U.busca}
        @kk-input=${e=>Xe(e.target.value)}
      >
        <kk-icon slot="prefix" name="search"></kk-icon>
      </kk-input>
    </div>

    <div class="chips">
      <button
        class="chip"
        ?data-ativo=${U.pastaId===null&&!U.arquivadas}
        @click=${()=>X({pastaId:null,arquivadas:!1})}
      >
        ${f.anotacoes.todas}
      </button>

      ${V.map(t=>e`
          <button
            class="chip"
            data-pasta=${t.id??0}
            ?data-ativo=${U.pastaId===t.id}
            @click=${()=>X({pastaId:t.id??null,arquivadas:!1})}
          >
            ${t.nome}
          </button>
        `)}

      <button
        class="chip"
        ?data-ativo=${U.arquivadas}
        @click=${()=>X({arquivadas:!0,pastaId:null})}
      >
        <kk-icon name="archive"></kk-icon>${f.anotacoes.arquivadas}
      </button>

      <button
        class="chip"
        aria-label=${f.pasta.nova}
        title=${f.pasta.nova}
        @click=${()=>void Ze()}
      >
        <kk-icon name="folder-plus"></kk-icon>
      </button>
    </div>

    ${t===void 0?s:e`
          <div class="pasta-acoes">
            <span class="pasta-acoes__nome"><kk-icon name="folder"></kk-icon>${t.nome}</span>
            <kk-button size="small" @click=${()=>void Qe(t)}>
              <kk-icon slot="prefix" name="pencil"></kk-icon>${f.acoes.renomear}
            </kk-button>
            <kk-button
              size="small"
              variant="danger"
              outline
              @click=${()=>void $e(t.id??0)}
            >
              <kk-icon slot="prefix" name="trash"></kk-icon>${f.acoes.excluir}
            </kk-button>
          </div>
        `}

    ${H.length===0?e`
          <div class="vazio">
            <kk-icon class="vazio__icone" name="notes"></kk-icon>
            <p>${U.arquivadas?f.anotacoes.semArquivadas:f.anotacoes.semAnotacoes}</p>
          </div>
        `:e`<div class="cartoes">${H.map(e=>et(e))}</div>`}
  `}function Z(){W!==null&&(W={...W,status:f.anotacoes.salvando},n(),clearTimeout(K),K=setTimeout(()=>{K=void 0,$()},Je))}async function Q(){K!==void 0&&(clearTimeout(K),K=void 0,await $())}async function $(){if(W===null)return;if(W.titulo.trim()===``){W={...W,status:f.anotacoes.informeTitulo},n();return}let e=Date.now(),r={titulo:W.titulo,conteudo:W.conteudo,pasta_id:W.pastaId,esta_fixada:+!!W.fixada,esta_arquivada:+!!W.arquivada,data_modificacao:e,...W.id===null?{data_criacao:e}:{id:W.id}},i;try{i=await He(r)}catch(e){console.error(`Anotações: a gravação falhou.`,e),W!==null&&(W={...W,status:t(e)}),n();return}if(W!==null){if(W.id===null){W={...W,id:i};let e=c();e.modulo===`anotacoes`&&e.args[0]===`nova`&&history.replaceState(null,``,`#/anotacoes/${i}`)}W={...W,status:f.anotacoes.salvoAs(u(e))},n()}}async function nt(e){W!==null&&(W=e===`fixada`?{...W,fixada:!W.fixada}:{...W,arquivada:!W.arquivada},n(),W.id!==null&&await $())}async function rt(){let e=W?.id;if(e==null||!await C({titulo:f.anotacoes.excluir,texto:f.anotacoes.excluirTexto,rotuloConfirmar:f.acoes.excluir,variante:`danger`}))return;clearTimeout(K),K=void 0;try{await Ue(e)}catch(e){console.error(`Anotações: a exclusão falhou.`,e),h(f.anotacoes.naoExcluida,`danger`);return}let t=document.querySelector(`.editor--cheio`);t&&await he(t).finished,h(f.anotacoes.excluida),i(`anotacoes`)}function it(t){return e`
    <div class="editor editor--cheio">
      <kk-input
        ${t.id===null?De:s}
        class="editor__titulo"
        name="titulo"
        label=${f.anotacoes.titulo}
        placeholder=${f.anotacoes.tituloPlaceholder}
        .value=${t.titulo}
        @kk-input=${e=>{W={...t,titulo:e.target.value},Z()}}
      ></kk-input>

      <div class="chips">
        <button
          class="chip"
          ?data-ativo=${t.pastaId===null}
          @click=${()=>{W={...t,pastaId:null},Z()}}
        >
          ${f.anotacoes.semPasta}
        </button>

        ${V.map(n=>e`
            <button
              class="chip"
              ?data-ativo=${t.pastaId===n.id}
              @click=${()=>{W={...t,pastaId:n.id??null},Z()}}
            >
              ${n.nome}
            </button>
          `)}

        <button
          class="chip"
          aria-label=${f.pasta.nova}
          title=${f.pasta.nova}
          @click=${()=>void Ze()}
        >
          <kk-icon name="folder-plus"></kk-icon>
        </button>
      </div>

      <p class="editor__status" aria-live="polite">${t.status}</p>

      <kk-editor
        @kk-input=${e=>{W={...t,conteudo:e.detail.value},Z()}}
      ></kk-editor>
    </div>

    ${q.overlay(e`
        <h1>${t.titulo||f.anotacoes.semTitulo}</h1>
        <div class="prosa">${_e(x(t.conteudo))}</div>
      `,()=>`${t.titulo}. ${t.conteudo}`)}
  `}function at(t){if(t.id!==null)return e`
    <kk-icon-button
      name="pin"
      variant=${t.fixada?`filled`:`outline`}
      label=${t.fixada?f.anotacoes.desafixar:f.anotacoes.fixar}
      @click=${()=>void nt(`fixada`)}
    ></kk-icon-button>
    <kk-icon-button
      name="archive"
      variant=${t.arquivada?`filled`:`outline`}
      label=${t.arquivada?f.anotacoes.restaurar:f.anotacoes.arquivar}
      @click=${()=>void nt(`arquivada`)}
    ></kk-icon-button>
    ${q.botaoApresentar()}
    <kk-icon-button
      name="trash"
      label=${f.anotacoes.excluir}
      @click=${()=>void rt()}
    ></kk-icon-button>
  `}var ot={voltarPara(e){return e.args.length===0?`home`:`anotacoes`},titulo(e){if(e.args.length===0)return;let t=W?.titulo.trim()??``;return t===``?f.anotacoes.nova:t},acoes(t){return t.args.length===0?e`
        <kk-icon-button
          name="plus"
          label=${f.anotacoes.nova}
          @click=${()=>i(`anotacoes/nova`)}
        ></kk-icon-button>
      `:W===null?void 0:at(W)},conteudo(e){let t=Ye.falhou(e);return t===null?e.args.length===0?tt():W===null?o():it(W):t}};export{ot as telaAnotacoes};