const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./qr-code-CEQVWAnh.js","./defineProperty-BbfpZ9Tg.js","./chunk.BHLCFORN-DiLXyQRu.js","./index-aItaWoWu.js","./src-CT6Wcaha.js","./lit-CL39YOSA.js","./lingua-DPWT7qWC.js","./idioma-Dwpp7Zfu.js","./plural-PXkQgyQ0.js","./data-DpsiKWt9.js","./ordem-DhzYZk-u.js","./erro-FHfTMgeP.js","./notificar-BeOZKYlx.js","./index-fxxbhd0z.css"])))=>i.map(i=>d[i]);
import{t as e}from"./src-CT6Wcaha.js";import{i as t}from"./lit-CL39YOSA.js";import{i as n,n as r}from"./idioma-Dwpp7Zfu.js";import{a as i}from"./ordem-DhzYZk-u.js";import{t as a}from"./notificar-BeOZKYlx.js";import{D as o}from"./index-aItaWoWu.js";var s;function c(){return s??=i(()=>import(`./qr-code-CEQVWAnh.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url).catch(e=>{throw s=void 0,e}),s}var l=`https://org.luizcmarin.com.br`;function u(e=n()){return`${l}/instalar.html#${e}`}function d(e=u()){return`${r.convite.mensagem}\n\n${e}`}function f(e){return`https://wa.me/?text=${encodeURIComponent(d(e))}`}async function p(e){try{await navigator.clipboard.writeText(d(e)),a(r.convite.copiado)}catch{a(r.convite.naoCopiou,`warning`)}}async function m(t){if(typeof navigator.share!=`function`)await p(t);else try{await navigator.share({title:e.displayName,text:r.convite.mensagem,url:t})}catch{}}function h(){let e=u();return c().catch(()=>{}),o(r.convite.titulo,void 0,n=>t`
      <div class="convite">
        <img class="convite__logo" src="./icons/kobi-org.svg" alt="" width="96" height="96" />
        <h2 class="convite__nome">${r.app.nome}</h2>
        <p class="convite__lema">${r.convite.lema}</p>

        <kk-qr-code
          class="convite__qr"
          value=${e}
          size="224"
          error-correction="M"
          label=${r.convite.qrAlt}
        ></kk-qr-code>

        <p class="convite__dica">${r.convite.dica}</p>

        <div class="convite__acoes">
          <kk-button variant="success" href=${f(e)} target="_blank">
            <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${r.convite.whatsapp}
          </kk-button>
          <kk-button variant="primary" @click=${()=>void m(e)}>
            <kk-icon slot="prefix" name="share"></kk-icon>${r.convite.compartilhar}
          </kk-button>
          <kk-button @click=${()=>void p(e)}>
            <kk-icon slot="prefix" name="copy"></kk-icon>${r.convite.copiar}
          </kk-button>
        </div>

        <kk-button class="convite__fechar" @click=${()=>n(void 0)}>
          ${r.acoes.fechar}
        </kk-button>
      </div>
    `,{semCabecalho:!0,classe:`dialogo-convite`})}export{h as abrirConvite};