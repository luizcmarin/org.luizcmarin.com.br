const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dados-DcqZFTkP.js","./idioma-DWx-F1Qy.js","./plural-0_xhPFb3.js","./data-DpsiKWt9.js","./ordem-Dku36xny.js","./chave-DivMTCUc.js","./dados-fsOAIDz3.js","./regras-CCy9eCHk.js","./dados-hubVDfBm.js","./dados-CLDIGIer.js","./regras-x-K4nJ6z.js","./texto-CuPUCLMw.js","./dados-CSqH5xEE.js","./regras-D9ek7SGP.js","./dados-DKz64GDZ.js","./dados-CzPr7lOE.js","./dados-CP202Yub.js","./regras-DnFPo7QE.js","./dados-Dnr4l9Zh.js","./dados-DyX7PiMd.js","./regras-De2a5D-E.js","./dados-DYTJmUfk.js","./regras-YSePeBWG.js","./regras-BlWTnWE9.js","./relatorio-pDw8OXjy.js","./relatorio-Bj5TZrV2.js","./relatorio-BwhJ_2r5.js","./relatorio-BM8ZdKvd.js","./tela-B9wqa_lX.js","./erro-D2swQJCY.js","./defineProperty-BbfpZ9Tg.js","./notificar-BeOZKYlx.js","./carga-K0T2aEed.js","./tela-DSGHiM6N.js","./tela-DlVLIiXM.js","./contato-Dy5fPzpa.js","./dados-BIEcW36l.js","./compartilhar-CutlseMs.js","./arquivo-Cyv95Ueg.js","./tela-BGrQwgBT.js","./tela-BfQgCOq2.js","./tela-Bv7yvpra.js","./papel-Do5yzFDu.js","./tela-BRr5OSEU.js","./papel-BsWqXe8o.js","./tela-CQnuKuMg.js","./tela-D_I_Mfqm.js","./tela-Djt0l-Lw.js","./dados-DHr0i559.js","./tela-DX5UENVB.js","./tela-DEc-Bmeq.js","./esquema-K3l3qcnX.js","./tela-DYo-N8Kv.js","./tela-anmPIZ3q.js","./tela-sO2YJjuW.js","./tela-mzasLXH5.js","./backup-BbLC9g8e.js"])))=>i.map(i=>d[i]);
import{_ as e,c as t,d as n,f as r,h as i,l as a,m as o,n as s,o as c,r as l,s as u,u as d}from"./erro-D2swQJCY.js";import{a as f,d as ee,i as te,l as ne,n as p,o as re,r as ie,s as m}from"./idioma-DWx-F1Qy.js";import{r as ae}from"./data-DpsiKWt9.js";import{t as h}from"./defineProperty-BbfpZ9Tg.js";import{t as oe}from"./notificar-BeOZKYlx.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function se(e){return e}var ce=se({name:`org`,displayName:`Kobi Org`,apiEndpoint:``,themeColor:`#7048e8`,targets:[`pwa`],features:{anotacoes:!0,calendario:!0,pautas:!0,designacoes:!0,grupos:!0,escalas:!0,programa:!0,publica:!0,testemunho:!0,territorios:!0,quadro:!0,pessoas:!0,congregacoes:!0,perfil:!0,tutorial:!0,sobre:!0}}),le=Symbol.for(`kobi.basePath`),ue=globalThis;function de(e){ue[le]=e}function fe(e=``){if(!ue[le]){let e=[...document.scripts],t=e.find(e=>e.hasAttribute(`data-kobi`));de(t?t.getAttribute(`data-kobi`):(e.find(e=>/\/kit(-autoloader|\.min)?\.js($|\?)/.test(e.src))?.getAttribute(`src`)??``).split(`/`).slice(0,-1).join(`/`))}return(ue[le]??``).replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var pe=Object.create,me=Object.defineProperty,he=Object.getOwnPropertyDescriptor,ge=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),_e=e=>{throw TypeError(e)},ve=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ye=(e,t)=>me(e,`name`,{value:t,configurable:!0}),be=e=>[,,,pe(e?.[ge(`metadata`)]??null)],xe=[`class`,`method`,`getter`,`setter`,`accessor`,`field`,`value`,`get`,`set`],Se=e=>e!==void 0&&typeof e!=`function`?_e(`Function expected`):e,Ce=(e,t,n,r,i)=>({kind:xe[e],name:t,metadata:r,addInitializer:e=>n._?_e(`Already initialized`):i.push(Se(e||null))}),g=(e,t)=>ve(t,ge(`metadata`),e[3]),_=(e,t,n,r)=>{for(var i=0,a=e[t>>1],o=a&&a.length;i<o;i++)t&1?a[i].call(n):r=a[i].call(n,r);return r},v=(e,t,n,r,i,a)=>{var o,s,c,l,u,d=t&7,f=!!(t&8),ee=!!(t&16),te=d>3?e.length+1:d?f?1:2:0,ne=xe[d+5],p=d>3&&(e[te-1]=[]),re=e[te]||(e[te]=[]),ie=d&&(!ee&&!f&&(i=i.prototype),d<5&&(d>3||!ee)&&he(d<4?i:{get[n](){return Ee(this,a)},set[n](e){return De(this,a,e)}},n));d?ee&&d<4&&ye(a,(d>2?`set `:d>1?`get `:``)+n):ye(i,n);for(var m=r.length-1;m>=0;m--)l=Ce(d,n,c={},e[3],re),d&&(l.static=f,l.private=ee,u=l.access={has:ee?e=>Te(i,e):e=>n in e},d^3&&(u.get=ee?e=>(d^1?Ee:Oe)(e,i,d^4?a:ie.get):e=>e[n]),d>2&&(u.set=ee?(e,t)=>De(e,i,t,d^4?a:ie.set):(e,t)=>e[n]=t)),s=(0,r[m])(d?d<4?ee?a:ie[ne]:d>4?void 0:{get:ie.get,set:ie.set}:i,l),c._=1,d^4||s===void 0?Se(s)&&(d>4?p.unshift(s):d?ee?a=s:ie[ne]=s:i=s):typeof s!=`object`||!s?_e(`Object expected`):(Se(o=s.get)&&(ie.get=o),Se(o=s.set)&&(ie.set=o),Se(o=s.init)&&p.unshift(o));return d||g(e,i),ie&&me(i,n,ie),ee?d^4?a:ie:i},y=(e,t,n)=>ve(e,typeof t==`symbol`?t:t+``,n),we=(e,t,n)=>t.has(e)||_e(`Cannot `+n),Te=(e,t)=>Object(t)===t?e.has(t):_e(`Cannot use the "in" operator on this value`),Ee=(e,t,n)=>(we(e,t,`read from private field`),n?n.call(e):t.get(e)),b=(e,t,n)=>t.has(e)?_e(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),De=(e,t,n,r)=>(we(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Oe=(e,t,n)=>(we(e,t,`access private method`),n),ke=[{id:`anotacoes`,get rotulo(){return p.modulos.anotacoes},icone:`notes`,cor:`#0d6efd`},{id:`calendario`,get rotulo(){return p.modulos.calendario},icone:`calendar`,cor:`#0dcaf0`},{id:`pautas`,get rotulo(){return p.modulos.pautas},icone:`list-check`,cor:`#7048e8`},{id:`designacoes`,get rotulo(){return p.modulos.designacoes},icone:`clipboard-list`,cor:`#e8590c`},{id:`grupos`,get rotulo(){return p.modulos.grupos},icone:`users-group`,cor:`#1098ad`},{id:`escalas`,get rotulo(){return p.modulos.escalas},icone:`calendar-user`,cor:`#f08c00`},{id:`programa`,get rotulo(){return p.modulos.programa},icone:`book-2`,cor:`#1971c2`},{id:`publica`,get rotulo(){return p.modulos.publica},icone:`microphone-2`,cor:`#5f3dc4`},{id:`testemunho`,get rotulo(){return p.modulos.testemunho},icone:`books`,cor:`#0c8599`},{id:`territorios`,get rotulo(){return p.modulos.territorios},icone:`map-2`,cor:`#2b8a3e`},{id:`quadro`,get rotulo(){return p.modulos.quadro},icone:`presentation`,cor:`#ae3ec9`},{id:`pessoas`,get rotulo(){return p.modulos.pessoas},icone:`users`,cor:`#2f9e44`},{id:`congregacoes`,get rotulo(){return p.modulos.congregacoes},icone:`home-heart`,cor:`#c2255c`},{id:`perfil`,get rotulo(){return p.modulos.perfil},icone:`id-badge-2`,cor:`#dc3545`},{id:`tutorial`,get rotulo(){return p.modulos.tutorial},icone:`help-circle`,cor:`#0ca678`},{id:`sobre`,get rotulo(){return p.modulos.sobre},icone:`info-circle`,cor:`#6c757d`}],Ae=[{id:`dia`,get titulo(){return p.secoes.dia},itens:[{tipo:`modulo`,id:`anotacoes`},{tipo:`modulo`,id:`calendario`}]},{id:`anciaos`,get titulo(){return p.secoes.anciaos},itens:[{tipo:`modulo`,id:`pautas`},{tipo:`modulo`,id:`designacoes`},{tipo:`modulo`,id:`grupos`},{tipo:`modulo`,id:`escalas`},{tipo:`modulo`,id:`programa`},{tipo:`modulo`,id:`publica`},{tipo:`modulo`,id:`testemunho`},{tipo:`modulo`,id:`territorios`},{tipo:`modulo`,id:`quadro`},{tipo:`modulo`,id:`pessoas`},{tipo:`modulo`,id:`congregacoes`}]},{id:`aplicativo`,get titulo(){return p.secoes.aplicativo},itens:[{tipo:`modulo`,id:`perfil`},{tipo:`modulo`,id:`tutorial`},{tipo:`modulo`,id:`sobre`}]}],je=new Map(ke.map(e=>[e.id,e]));function Me(e){return je.get(e)}function Ne(){return Ae.flatMap(e=>e.itens)}function Pe(e){return ce.features[e]===!0}var Fe=`false`,Ie=`false`,Le=Fe===`true`,Re=Ie===`true`;function ze(e={}){let{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:i,onRegistered:a,onRegisteredSW:o,onRegisterError:s}=e,c,l,u,d=async(e=!0)=>{await l,Le||u?.()};async function f(){if(`serviceWorker`in navigator){if(c=await m(async()=>{let{Workbox:e}=await import(`./workbox-window.prod.es5-Bd17z0YL.js`);return{Workbox:e}},[],import.meta.url).then(({Workbox:e})=>new e(`./sw.js`,{scope:`./`,type:`classic`})).catch(e=>{s?.(e)}),!c)return;if(u=()=>{c?.messageSkipWaiting()},!Re){if(Le)c.addEventListener(`activated`,e=>{(e.isUpdate||e.isExternal)&&(n?n():window.location.reload())}),c.addEventListener(`installed`,e=>{e.isUpdate||i?.()});else{let e=!1,t=()=>{e=!0,c?.addEventListener(`controlling`,e=>{e.isUpdate&&(n?n():window.location.reload())}),r?.()};c.addEventListener(`installed`,n=>{n.isUpdate===void 0?n.isExternal===void 0?!e&&i?.():n.isExternal?t():!e&&i?.():n.isUpdate||i?.()}),c.addEventListener(`waiting`,t)}}c.register({immediate:t}).then(e=>{o?o(`./sw.js`,e):a?.(e)}).catch(e=>{s?.(e)})}}return l=f(),d}function Be(){let e=ze({onNeedRefresh(){Ve(()=>{e(!0)})}})}function Ve(e){let t=Object.assign(document.createElement(`kk-alert`),{variant:`primary`,closable:!0}),n=document.createElement(`kk-icon`);n.setAttribute(`slot`,`icon`),n.setAttribute(`name`,`sparkles`);let r=document.createElement(`strong`);r.textContent=p.atualizacao.titulo;let i=document.createElement(`kk-button`);i.setAttribute(`size`,`small`),i.setAttribute(`variant`,`primary`),i.textContent=p.atualizacao.acao,i.addEventListener(`click`,e),t.append(n,r,document.createTextNode(` ${p.atualizacao.texto} `),i),document.body.append(t),t.toast()}async function He(){let{carregarEventos:e,eventosDoDia:t}=await m(async()=>{let{carregarEventos:e,eventosDoDia:t}=await import(`./dados-DcqZFTkP.js`);return{carregarEventos:e,eventosDoDia:t}},__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return t(await e(),ae()).length}async function Ue(){if(typeof navigator.setAppBadge==`function`)try{let e=await He();await(e>0?navigator.setAppBadge(e):navigator.clearAppBadge())}catch{}}var We=!1;function Ge(){Ue(),!We&&(We=!0,document.addEventListener(`visibilitychange`,()=>{Ue()}))}var Ke=`chave-do-aparelho`,qe=`bioma_carimbos`;`${qe}`,`${qe}`;var Je=`org_fallback`,Ye=`kv`,Xe;function Ze(){Xe??=new Promise((e,t)=>{let n=indexedDB.open(Je,1);n.onupgradeneeded=()=>n.result.createObjectStore(Ye),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??Error(`IndexedDB não abriu`))});let e=Xe;return e.catch(()=>{Xe===e&&(Xe=void 0)}),Xe}async function Qe(e){let t=await Ze();return new Promise((n,r)=>{let i=t.transaction(Ye,`readonly`).objectStore(Ye).get(e);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error??Error(`leitura do IndexedDB falhou`))})}async function $e(e,t){let n=await Ze();return new Promise((r,i)=>{let a=n.transaction(Ye,`readwrite`);a.objectStore(Ye).put(t,e),a.oncomplete=()=>r(),a.onerror=()=>i(a.error??Error(`gravação no IndexedDB falhou`))})}async function et(e){let t=await Ze();return new Promise((n,r)=>{let i=t.transaction(Ye,`readwrite`);i.objectStore(Ye).delete(e),i.oncomplete=()=>n(),i.onerror=()=>r(i.error??Error(`exclusão no IndexedDB falhou`))})}async function tt(){Xe!==void 0&&((await Xe.catch(()=>void 0))?.close(),Xe=void 0)}var nt=`chave-protegida`,rt=6e5,it=32,at=class extends Error{constructor(){super(`a senha não confere`),this.name=`SenhaErrada`}};function ot(e){return e instanceof Uint8Array||e instanceof ArrayBuffer?new Uint8Array(e):null}async function st(){let e=await Qe(nt);if(e==null)return null;let t=ot(e.sal),n=ot(e.iv),r=ot(e.cifrada);if(t===null||n===null||r===null||typeof e.iteracoes!=`number`)throw Error(`a chave protegida deste aparelho está ilegível`);return{versao:1,iteracoes:e.iteracoes,sal:t,iv:n,cifrada:r}}async function ct(e,t,n){let r=await crypto.subtle.importKey(`raw`,new TextEncoder().encode(e),`PBKDF2`,!1,[`deriveKey`]);return crypto.subtle.deriveKey({name:`PBKDF2`,hash:`SHA-256`,salt:t.slice(),iterations:n},r,{name:`AES-GCM`,length:256},!1,[`encrypt`,`decrypt`])}async function lt(e,t){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),i=await ct(t,n,rt);return{versao:1,iteracoes:rt,sal:n,iv:r,cifrada:new Uint8Array(await crypto.subtle.encrypt({name:`AES-GCM`,iv:r},i,e.slice()))}}async function ut(){return await st()!==null}async function dt(e){if(e.length<6)throw Error(`a senha tem menos de 6 caracteres`);if(await st()!==null)throw Error(`este aparelho já tem senha`);let t=await Qe(Ke),n=ot(t);if(t!=null&&(n===null||n.byteLength!==it))throw Error(`a chave deste aparelho não tem o tamanho certo`);let r=n??crypto.getRandomValues(new Uint8Array(it));return await $e(nt,await lt(r,e)),n!==null&&await et(Ke),r}async function ft(e){let t=await st();if(t===null)throw Error(`este aparelho ainda não tem senha`);let n=await ct(e,t.sal,t.iteracoes),r;try{r=new Uint8Array(await crypto.subtle.decrypt({name:`AES-GCM`,iv:t.iv.slice()},n,t.cifrada.slice()))}catch{throw new at}if(r.byteLength!==it)throw Error(`a chave protegida deste aparelho não tem o tamanho certo`);return r}async function pt(e,t){if(t.length<6)throw Error(`a senha tem menos de 6 caracteres`);await $e(nt,await lt(await ft(e),t))}function mt(e){return new Promise(t=>setTimeout(t,e))}var ht=10,gt=100,_t=`workbox-expiration`,vt=`cache-entries`;function yt(e,t){return t.startsWith(`${e}_`)||t.startsWith(`${e}-`)}function bt(){return new URL(`./`,location.href).href}function xt(e,t){return n=>yt(e,n)||n.endsWith(`-${t}`)}async function St(e){let t=await navigator.storage?.getDirectory?.();if(t!==void 0){for(let n=0;n<ht;n++){let n=[];for await(let r of t.keys())yt(e,r)&&n.push(r);if(n.length===0)return;let r=!1;for(let e of n)try{await t.removeEntry(e,{recursive:!0})}catch{r=!0}if(!r)return;await mt(gt)}throw Error(`o OPFS do app não saiu`)}}async function Ct(e,t){let n=await navigator.serviceWorker?.getRegistrations?.()??[];await Promise.all(n.filter(({scope:e})=>e===t).map(e=>e.unregister()));let r=xt(e,t),i=await globalThis.caches?.keys?.()??[];await Promise.all(i.filter(r).map(e=>caches.delete(e)))}function wt(e){return new Promise(t=>{let n=indexedDB.deleteDatabase(e);n.onsuccess=()=>t(!0),n.onerror=()=>t(!1),n.onblocked=()=>t(!1)})}async function Tt(e){for(let t=0;t<ht;t++){let t=(await indexedDB.databases?.()??[]).map(({name:e})=>e).filter(t=>t!==void 0&&yt(e,t));if(t.length===0||(await Promise.all(t.map(wt))).every(Boolean))return;await mt(gt)}throw Error(`o IndexedDB do app não saiu`)}function Et(e){return new Promise(t=>{let n=indexedDB.open(e);n.onupgradeneeded=()=>n.transaction?.abort(),n.onsuccess=()=>{let e=n.result;e.onversionchange=()=>e.close(),t(e)},n.onerror=()=>t(null)})}async function Dt(e){if(!(await indexedDB.databases?.()??[]).some(({name:e})=>e===_t))return 0;let t=await Et(_t);if(t===null)return 0;try{return t.objectStoreNames.contains(vt)?await new Promise((n,r)=>{let i=0,a=t.transaction(vt,`readwrite`),o=a.objectStore(vt).openCursor();o.onsuccess=()=>{let t=o.result;if(t===null)return;let{cacheName:n}=t.value;typeof n==`string`&&e(n)&&(t.delete(),i+=1),t.continue()},a.oncomplete=()=>n(i),a.onerror=()=>r(a.error??Error(`as datas do cache não saíram`)),a.onabort=()=>r(a.error??Error(`as datas do cache não saíram`))}):0}finally{t.close()}}async function Ot(e,t){let n=xt(e,t);for(let e=0;e<ht;e++){await mt(gt);let e=(await globalThis.caches?.keys?.()??[]).filter(n);await Promise.all(e.map(e=>caches.delete(e)));let t=await Dt(n);if(e.length===0&&t===0)return}}function kt(e,t){let n=[];for(let r=0;r<e.length;r+=1){let i=e.key(r);i!==null&&yt(t,i)&&n.push(i)}for(let t of n)e.removeItem(t)}async function At({app:e,fechar:t}){let n=bt(),r=[t,()=>St(e),()=>Ct(e,n),()=>Tt(e),()=>Dt(xt(e,n)),()=>kt(localStorage,e),()=>kt(sessionStorage,e),()=>Ot(e,n)],i=[];for(let e of r)try{await e()}catch(e){i.push(e)}if(i.length>0)throw AggregateError(i,`parte do ${e} ficou no aparelho`)}var jt,Mt=0,Nt=new Map,Pt,Ft=!1;function It(){if(Ft)throw Error(`o banco foi fechado`);return jt===void 0&&(jt=new Worker(new URL(new URL(`worker-BVHP7STl.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),jt.addEventListener(`error`,e=>{let t=Error(`worker do banco falhou: ${e.message}`);for(let e of Nt.values())e.rejeitar(t);Nt.clear()})),jt}var Lt=!1;function Rt(){Lt||(Lt=!0,document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&jt!==void 0&&Vt({op:`otimizar`}).catch(()=>void 0)}))}function zt(e){return Pt??=new Promise((t,n)=>{Rt();let r=It();r.addEventListener(`error`,e=>{n(Error(`o worker do banco não subiu: ${e.message||`o script não carregou`}`))},{once:!0}),r.addEventListener(`message`,e=>{let r=e.data;if(`tipo`in r){r.tipo===`pronto`?t({versaoSqlite:r.versaoSqlite,persistente:r.persistente,cifrado:r.cifrado,...r.motivo===void 0?{}:{motivo:r.motivo}}):n(Error(r.erro));return}let i=Nt.get(r.seq);i!==void 0&&(Nt.delete(r.seq),r.ok?i.resolver(r.valor):i.rejeitar(Error(r.erro)))});let i={tipo:`abrir`,chave:e};r.postMessage(i)}),Pt}function Bt(){Ft=!0,jt?.terminate(),jt=void 0,Pt=void 0;let e=Error(`o banco foi fechado`);for(let t of Nt.values())t.rejeitar(e);Nt.clear()}function Vt(e){return new Promise((t,n)=>{let r=It(),i=++Mt;Nt.set(i,{resolver:t,rejeitar:n});let a={seq:i,operacao:e};r.postMessage(a)})}function Ht(e){return{async todos(){return await Vt({op:`todos`,store:e})},async obter(t){return await Vt({op:`obter`,store:e,id:t})},async contar(){return Number(await Vt({op:`contar`,store:e}))},async salvar(t){return Number(await Vt({op:`salvar`,store:e,registro:t}))},async excluir(t){await Vt({op:`excluir`,store:e,id:t})},async substituirTudo(t){await Vt({op:`substituirTudo`,store:e,registros:t})}}}async function Ut(e){return(await Vt({op:`salvarLote`,itens:e})).map(Number)}async function Wt(e){await Vt({op:`restaurar`,stores:e})}function Gt(){return At({app:`org`,fechar:async()=>{Bt(),await tt()}})}var Kt=`org_tema`,qt=`#ffffff`,Jt=`#0f1115`;function Yt(){return document.documentElement.classList.contains(`kk-theme-dark`)?`escuro`:`claro`}function Xt(e){let t=e===`escuro`,n=document.documentElement.classList;n.toggle(`kk-theme-dark`,t),n.toggle(`kk-theme-light`,!t),document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,t?Jt:qt),localStorage.setItem(Kt,e)}function Zt(){let e=Yt()===`escuro`?`claro`:`escuro`;return Xt(e),e}var Qt={projetos:{bioma:{versao:`1.0.0`,build:`2026-10-08T18:11:09.503Z`},admin:{versao:`1.0.187`,build:`2026-10-08T18:11:09.503Z`},note:{versao:`1.1.292`,build:`2026-10-08T15:46:40.340Z`},ui:{versao:`1.0.143`,build:`2026-10-08T18:08:42.101Z`},dev:{versao:`1.1.145`,build:`2026-10-08T13:45:39.240Z`},flow:{versao:`0.0.126`,build:`2026-10-08T15:49:54.016Z`},org:{versao:`1.1.24`,build:`2026-10-08T15:50:13.420Z`},sql:{versao:`3.53.4`,build:`2026-10-06T12:33:35.968Z`}},componentesUi:92,pacotes:[{nome:`@kobi/admin`,versao:`1.0.187`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.145`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.126`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`1.1.292`,caminho:`apps/note`},{nome:`@kobi/org`,versao:`1.1.24`,caminho:`apps/org`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/idiomas`,versao:`0.1.0`,caminho:`packages/idiomas`},{nome:`@kobi/kit`,versao:`1.0.143`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:645,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1337,not_personagens:50,not_poesias:273,not_principios:112,not_receitas:4}}.projetos.org?.build.slice(0,4)??``;function $t(e){e.preventDefault(),document.querySelector(`#conteudo`)?.focus()}function en(){return e`
    <footer class="rodape">
      <p class="rodape__nota">
        ${Qt===``?o:e`<span>${p.rodape.direitos(Qt)}</span>`}
        <span>${p.rodape.feitoPara}</span>
      </p>
    </footer>
  `}function tn(t,n,i){let a=Yt()===`escuro`;return e`
    <a class="pular" href="#conteudo" @click=${$t}>${p.acoes.pularParaConteudo}</a>

    <header class="barra">
      ${t.voltarPara===void 0?e`<img class="barra__logo" src="./icons/kobi-org.svg" alt="" width="30" />`:e`
            <kk-icon-button
              name="arrow-left"
              label=${p.acoes.voltar}
              @click=${()=>{t.aoVoltar?.()!==!0&&r(t.voltarPara??`home`)}}
            ></kk-icon-button>
          `}

      <h1 class="barra__titulo">${p.app.nome}</h1>

      <div class="barra__acoes">
        ${t.acoes??o}
        <kk-icon-button
          name=${a?`sun`:`moon`}
          label=${p.acoes.tema}
          @click=${()=>{Zt(),i()}}
        ></kk-icon-button>
      </div>
    </header>

    <main class="conteudo" id="conteudo" tabindex="-1">
      ${t.titulo===p.app.nome?o:e`<h2 class="conteudo__titulo">${t.titulo}</h2>`}
      ${n}
    </main>

    ${en()}
  `}function nn(t,n=()=>!0){return e`
    <div class="quadro-blocos">
      ${t.map((t,r)=>e`
          <details class="quadro-bloco" ?open=${n(t,r)}>
            <summary class="quadro-bloco__titulo">${t.titulo}</summary>
            <ul class="quadro-bloco__linhas">
              ${t.linhas.map(t=>t.tipo===`secao`?e`<li class="quadro-bloco__secao">${t.texto}</li>`:e`
                    <li class="quadro-bloco__linha">
                      <span class="quadro-bloco__parte">${t.texto}</span>
                      <span class="quadro-bloco__nomes">${t.nomes}</span>
                    </li>
                  `)}
            </ul>
          </details>
        `)}
    </div>
  `}var rn={hoje:[],proxima:null,semana:[]},an=!1,on=!1,sn=!0,cn=!1;function ln(){cn||(cn=!0,n(`home`,()=>{sn=!0}))}async function un(){let e=ae(),[t,n,r,i]=await Promise.all([m(()=>import(`./dados-DcqZFTkP.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),m(()=>import(`./dados-fsOAIDz3.js`),__vite__mapDeps([6,1,2,3,4,7,5]),import.meta.url),m(()=>import(`./dados-hubVDfBm.js`),__vite__mapDeps([8,1,2,3,4,9,10,11,12,5,13,14,15,16,17,18,19,20,21,22]),import.meta.url),m(()=>import(`./regras-BlWTnWE9.js`),__vite__mapDeps([23,3,17,4,5,10,11,20,13,24,25,26,22,27]),import.meta.url)]),[a,o,s,c]=await Promise.all([t.carregarEventos(),n.carregarPautas(),n.carregarItens(),r.carregarQuadro()]),l=r.congregacaoInicial(c),u=l===void 0?[]:i.blocosDoQuadro(e,i.limitesDaSemana(e).fim,l,c.fontes,new Set(i.SECOES_DO_QUADRO),r.rotulosDoQuadro(c)),d=t.eventosDoDia(a,e).map(e=>({titulo:e.titulo,quando:e.dia_inteiro===1?p.painel.diaInteiro:t.comoHora(e.hora_inicio_min),pautaId:e.pauta_id})),f=o.filter(t=>t.data!==``&&t.data>=e).sort((e,t)=>`${e.data} ${e.hora}`.localeCompare(`${t.data} ${t.hora}`))[0];return{hoje:d,semana:u,proxima:f?.id===void 0?null:{id:f.id,titulo:p.pautas.evento[f.tipo],quando:[ee(f.data),f.hora].filter(e=>e!==``).join(` · `),itens:s.filter(e=>e.pauta_id===f.id).length}}}function dn(){ln(),!on&&sn&&(sn=!1,on=!0,(async()=>{try{rn=await un(),an=!0}catch(e){console.error(`Painel: a leitura do resumo falhou.`,e)}finally{on=!1,t()}})())}function fn(){if(dn(),!an)return e`<p class="intro">${p.home.sub}</p>`;let t=ne(ae());return e`
    <section class="painel">
      <header class="painel__data">${t}</header>

      ${rn.hoje.length===0?e`<p class="painel__vazio">${p.painel.semEventos}</p>`:e`
            <ul class="agenda">
              ${rn.hoje.map(t=>e`
                  <li class="agenda__linha">
                    <span class="agenda__hora">${t.quando}</span>
                    ${t.pautaId===null?e`<span class="agenda__titulo">${t.titulo}</span>`:e`
                          <button
                            class="agenda__titulo agenda__pauta"
                            @click=${()=>r(`pautas/${t.pautaId}`)}
                          >
                            ${t.titulo}
                          </button>
                        `}
                  </li>
                `)}
            </ul>
          `}

      ${rn.proxima===null?o:e`
            <button
              class="painel__proxima"
              data-pauta=${rn.proxima.id}
              @click=${()=>r(`pautas/${rn.proxima?.id??``}`)}
            >
              <kk-icon name="list-check"></kk-icon>
              <span class="painel__proxima-texto">
                <span class="painel__proxima-rotulo">${p.painel.proximaPauta}</span>
                <strong>${rn.proxima.titulo}</strong>
                <span>${rn.proxima.quando} · ${p.pautas.itens(rn.proxima.itens)}</span>
              </span>
              <kk-icon class="painel__seta" name="chevron-right"></kk-icon>
            </button>
          `}

      ${rn.semana.length===0?o:e`
            <section class="painel__semana" aria-labelledby="painel-esta-semana">
              <h3 class="painel__semana-titulo" id="painel-esta-semana">${p.painel.estaSemana}</h3>
              ${nn(rn.semana,(e,t)=>t===0)}
              <button class="painel__quadro" @click=${()=>r(`quadro`)}>
                ${p.painel.abrirQuadro}
              </button>
            </section>
          `}
    </section>
  `}function pn(t){let n=!Pe(t.id);return e`
    <button
      class="tile"
      style="--cor: ${t.cor}"
      data-modulo-tile=${t.id}
      ?data-em-breve=${n}
      @click=${()=>r(t.id)}
    >
      <kk-icon class="tile__icone" name=${t.icone}></kk-icon>
      <span class="tile__rotulo">${t.rotulo}</span>
      ${n?e`<span class="tile__selo">${p.emBreve.titulo}</span>`:o}
    </button>
  `}function mn(t,n){return e`
    ${n?o:e`<hr class="divisor" />`}
    ${t.titulo===void 0?o:e`<h2 class="secao">${t.titulo}</h2>`}
  `}function hn(){return e`
    ${fn()}
    ${Ae.map((t,n)=>{let r=t.itens.map(e=>Me(e.id)).filter(e=>e!==void 0);return r.length===0?o:e`
        ${mn(t,n===0)}
        <div class="tiles">${r.map(pn)}</div>
      `})}
  `}function gn(e){if(e.target!==e.currentTarget)return;let{source:t}=e.detail;t===`overlay`&&e.preventDefault()}function _n(e){if(e.target!==e.currentTarget)return;let t=e.currentTarget.querySelector(`kk-input, kk-select, kk-textarea`);t!==null&&(e.preventDefault(),Promise.resolve(t.updateComplete).then(()=>t.focus()))}function vn(e,t,n,r={}){let a=document.createElement(`kk-dialog`);return a.setAttribute(`label`,e),r.semCabecalho===!0&&a.setAttribute(`no-header`,``),r.classe!==void 0&&(a.className=r.classe),r.formulario===!0&&(a.addEventListener(`kk-request-close`,gn),a.addEventListener(`kk-initial-focus`,_n)),document.body.append(a),new Promise(e=>{let r=t,o=e=>{r=e,a.open=!1},s=()=>{i(n(o,a,s),a)};a.addEventListener(`kk-after-hide`,t=>{t.target===a&&(a.remove(),e(r))}),s(),a.updateComplete.then(()=>{a.open=!0})})}function yn(t){return vn(t.titulo,!1,n=>e`
      ${t.texto??``}
      <kk-button slot="footer" @click=${()=>n(!1)}>${p.acoes.cancelar}</kk-button>
      <kk-button
        slot="footer"
        variant=${t.variante??`primary`}
        @click=${()=>n(!0)}
      >
        ${t.rotuloConfirmar??p.acoes.confirmar}
      </kk-button>
    `)}function bn(t){return vn(t.titulo,null,(n,r)=>{let i=()=>{let e=r.querySelector(`kk-input`),i=e?.value.trim()??``;i===``?e!==null&&(e.helpText=t.erroVazio??p.acoes.obrigatorio,e.focus()):n(i)};return e`
        ${t.texto===void 0?``:e`<p class="dialogo__texto">${t.texto}</p>`}
        <kk-input
          name="texto"
          placeholder=${t.placeholder??``}
          .value=${t.valor??``}
          @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),i())}}
        ></kk-input>
        <kk-button slot="footer" @click=${()=>n(null)}>${p.acoes.cancelar}</kk-button>
        <kk-button slot="footer" variant="primary" @click=${i}>
          ${t.rotuloConfirmar??p.acoes.salvar}
        </kk-button>
      `},{formulario:!0})}async function xn(){if(await yn({titulo:p.armazenamento.apagarTudoTitulo,texto:p.armazenamento.apagarTudoTexto,rotuloConfirmar:p.armazenamento.apagarTudoConfirmar,variante:`danger`})){try{await Gt()}catch{oe(p.armazenamento.apagarTudoFalhou,`warning`);return}location.reload()}}var Sn=`org_boasvindas`,Cn=[{id:`bemVindo`,icone:`sparkles`,cor:`#7048e8`},{id:`pautas`,icone:`list-check`,cor:`#7048e8`},{id:`cadastro`,icone:`users`,cor:`#2f9e44`},{id:`privado`,icone:`shield-lock`,cor:`#dc3545`},{id:`acessibilidade`,icone:`accessible`,cor:`#0d6efd`}];function wn(){try{localStorage.setItem(Sn,`1`)}catch{}}function Tn(e){let t=e.querySelector(`kk-input[name="senha"]`);Promise.resolve(t?.updateComplete).then(()=>t?.focus())}function En(t,n){return e`
    <div
      class="bv__passos"
      role="progressbar"
      aria-valuemin="1"
      aria-valuemax=${n}
      aria-valuenow=${t+1}
      aria-valuetext=${p.boasVindas.passo(t+1,n)}
    >
      ${Array.from({length:n},(n,r)=>e`<span class="bv__ponto" ?data-atual=${r===t}></span>`)}
    </div>
  `}function Dn(t,n){let i=p.boasVindas.passos[t.id];return e`
    <div class="bv" style="--cor: ${t.cor}">
      <span class="bv__icone"><kk-icon name=${t.icone}></kk-icon></span>
      <h2 class="bv__titulo">${i.titulo}</h2>
      <p class="bv__texto">${i.texto}</p>
      ${t.id===`acessibilidade`&&n!==void 0?e`
            <kk-button
              class="bv__acao"
              variant="primary"
              outline
              @click=${()=>{n(),r(`perfil/acessibilidade`)}}
            >
              <kk-icon slot="prefix" name="accessible"></kk-icon>${p.boasVindas.abrirAcessibilidade}
            </kk-button>
          `:o}
    </div>
  `}function On(){let t=0;return vn(p.boasVindas.passos.bemVindo.titulo,void 0,(n,r,i)=>{let a=Cn[t]??Cn[0],s=t===Cn.length-1;return e`
        <img class="bv__logo" src="./icons/kobi-org.svg" alt=${p.app.nome} width="72" height="72" />
        ${a===void 0?o:Dn(a,()=>n(void 0))}
        ${En(t,Cn.length)}
        ${t===0?o:e`
              <kk-button slot="footer" @click=${()=>{--t,i()}}>
                <kk-icon slot="prefix" name="arrow-left"></kk-icon>${p.boasVindas.voltar}
              </kk-button>
            `}
        <kk-button
          slot="footer"
          variant="primary"
          @click=${()=>{s?n(void 0):(t+=1,i())}}
        >
          ${s?p.acoes.fechar:p.boasVindas.proximo}
          <kk-icon slot="suffix" name=${s?`check`:`arrow-right`}></kk-icon>
        </kk-button>
      `},{semCabecalho:!0,classe:`bv__dialogo`})}function kn(t){return new Promise(n=>{let r=0,a=``,s=``,c=!1,l=``,u=!1,d=Cn.length+1,f=async()=>{if(!u){if(l=a.length<6?p.senha.curta(6):a===s?c?``:p.senha.precisaCiente:p.senha.naoConfere,l!==``)te();else{u=!0,te();try{let e=await dt(a);wn(),n(e)}catch(e){console.error(`Boas-vindas: a senha não foi criada.`,e),l=p.senha.naoCriada,u=!1,te()}}}},ee=()=>e`
      <form
        class="bv bv--senha"
        style="--cor: #7048e8"
        @submit=${e=>{e.preventDefault(),f()}}
      >
        <span class="bv__icone"><kk-icon name="lock"></kk-icon></span>
        <h2 class="bv__titulo">${p.senha.criarTitulo}</h2>
        <p class="bv__texto">${p.senha.criarTexto}</p>

        <kk-input
          id="senha-nova"
          name="senha"
          type="password"
          password-toggle
          autocomplete="new-password"
          label=${p.senha.senha}
          help-text=${p.senha.regra(6)}
          .value=${a}
          @kk-input=${e=>{a=e.target.value}}
        ></kk-input>
        <kk-password-strength for="senha-nova" min-length=${6}></kk-password-strength>
        <kk-input
          name="confirmar"
          type="password"
          password-toggle
          autocomplete="new-password"
          label=${p.senha.confirmar}
          .value=${s}
          @kk-input=${e=>{s=e.target.value}}
        ></kk-input>

        <kk-checkbox
          name="ciente"
          ?checked=${c}
          @kk-change=${e=>{c=e.target.checked}}
        >
          ${p.senha.ciente}
        </kk-checkbox>

        ${l===``?o:e`<p class="erro" role="alert">${l}</p>`}

        <kk-button name="criar" variant="primary" ?loading=${u} @click=${()=>void f()}>
          <kk-icon slot="prefix" name="lock"></kk-icon>${p.senha.criar}
        </kk-button>
      </form>
    `,te=()=>{let n=r>=Cn.length,a=Cn[r];i(e`
          <main class="primeira" id="conteudo" tabindex="-1">
            <img class="bv__logo" src="./icons/kobi-org.svg" alt=${p.app.nome} width="72" height="72" />
            ${n||a===void 0?ee():Dn(a)}
            ${En(r,d)}
            ${n?o:e`
                  <div class="primeira__acoes">
                    ${r===0?o:e`
                          <kk-button
                            name="voltar"
                            @click=${()=>{--r,te()}}
                          >
                            <kk-icon slot="prefix" name="arrow-left"></kk-icon>${p.boasVindas.voltar}
                          </kk-button>
                        `}
                    <kk-button
                      name="proximo"
                      variant="primary"
                      @click=${()=>{r+=1,te(),r>=Cn.length&&Tn(t)}}
                    >
                      ${p.boasVindas.proximo}<kk-icon slot="suffix" name="arrow-right"></kk-icon>
                    </kk-button>
                  </div>
                `}
          </main>
        `,t)};t.removeAttribute(`aria-busy`),te()})}function An(t){return new Promise(n=>{let r=``,a=``,s=!1,c=async()=>{if(!s){if(r===``)a=p.senha.vazia,u();else{s=!0,a=``,u();try{n(await ft(r))}catch(e){e instanceof at||console.error(`Bloqueio: a chave não abriu.`,e),a=e instanceof at?p.senha.errada:p.senha.naoAbriu,s=!1,r=``,u(),Tn(t)}}}},l=async()=>{await yn({titulo:p.senha.esqueciTitulo,texto:p.senha.esqueciTexto,rotuloConfirmar:p.senha.esqueciApagar,variante:`danger`})&&await xn()},u=()=>{i(e`
          <main class="bloqueio" id="conteudo" tabindex="-1">
            <img class="bv__logo" src="./icons/kobi-org.svg" alt="" width="72" height="72" />
            <h1 class="bloqueio__nome">${p.app.nome}</h1>
            <form
              class="bloqueio__form"
              @submit=${e=>{e.preventDefault(),c()}}
            >
              <kk-input
                name="senha"
                type="password"
                password-toggle
                autocomplete="current-password"
                label=${p.senha.senha}
                .value=${r}
                @kk-input=${e=>{r=e.target.value}}
                @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),c())}}
              ></kk-input>
              ${a===``?o:e`<p class="erro" role="alert">${a}</p>`}
              <kk-button
                name="entrar"
                variant="primary"
                ?loading=${s}
                @click=${()=>void c()}
              >
                <kk-icon slot="prefix" name="lock-open"></kk-icon>${p.senha.entrar}
              </kk-button>
            </form>
            <kk-button class="bloqueio__esqueci" variant="text" size="small" @click=${()=>void l()}>
              ${p.senha.esqueci}
            </kk-button>
          </main>
        `,t)};t.removeAttribute(`aria-busy`),u(),Tn(t)})}function jn(){let e=null;document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?e=Date.now():(e!==null&&Date.now()-e>=3e5&&location.reload(),e=null)})}var Mn=[[1569,1],[1570,2],[1571,2],[1572,2],[1573,2],[1574,4],[1575,2],[1576,4],[1577,2],[1578,4],[1579,4],[1580,4],[1581,4],[1582,4],[1583,2],[1584,2],[1585,2],[1586,2],[1587,4],[1588,4],[1589,4],[1590,4],[1591,4],[1592,4],[1593,4],[1594,4],[1601,4],[1602,4],[1603,4],[1604,4],[1605,4],[1606,4],[1607,4],[1608,2],[1609,2],[1610,4]],Nn=(()=>{let e=new Map,t=65152;for(let[n,r]of Mn)e.set(n,Array.from({length:r},(e,n)=>t+n)),t+=r;return e})(),Pn=new Map([[1570,65269],[1571,65271],[1573,65273],[1575,65275]]),Fn=1604,In=1600,Ln=8205;function Rn(e){return e>=1552&&e<=1562||e>=1611&&e<=1631||e===1648||e>=1750&&e<=1756||e>=1759&&e<=1764||e===1767||e===1768||e>=1770&&e<=1773}function zn(e){return e===In||e===Ln||(Nn.get(e)?.length??0)>=2}function Bn(e){return e===In||e===Ln||(Nn.get(e)?.length??0)===4}function Vn(e){return/[؀-ۿݐ-ݿࢠ-ࣿ]/u.test(e)}function Hn(e){let t=[...e].map(e=>e.codePointAt(0)??0),n=(e,n)=>{let r=e+n;for(;r>=0&&r<t.length&&Rn(t[r]??0);)r+=n;return r},r=e=>e>=0&&e<t.length?t[e]:void 0,i=[];for(let e=0;e<t.length;e+=1){let a=t[e]??0,o=Nn.get(a);if(o===void 0){i.push({codigo:a,texto:String.fromCodePoint(a)});continue}let s=r(n(e,-1)),c=n(e,1),l=r(c),u=s!==void 0&&Bn(s)&&zn(a);if(a===Fn&&l!==void 0&&Pn.has(l)){let n=Pn.get(l)??0;i.push({codigo:u?n+1:n,texto:String.fromCodePoint(a,l)});for(let n=e+1;n<c;n+=1)i.push({codigo:t[n]??0,texto:String.fromCodePoint(t[n]??0)});e=c;continue}let d=l!==void 0&&Bn(a)&&zn(l),f=u&&d?3:u?1:d?2:0;i.push({codigo:o[f]??o[0]??a,texto:String.fromCodePoint(a)})}return i}function Un(e){return e>=48&&e<=57?`EN`:e>=1632&&e<=1641||e===1643||e===1644?`AN`:e>=1776&&e<=1785?`EN`:e===43||e===45||e===8722?`ES`:e===35||e===36||e===37||e===176||e>=162&&e<=165||e===8240||e>=8352&&e<=8399||e===1642?`ET`:e===44||e===46||e===47||e===58||e===160||e===1548?`CS`:e===32||e===9||e===10||e===8232?`WS`:e===8206?`L`:e===8207?`R`:e===1564?`AL`:e>=768&&e<=879||e>=1552&&e<=1562||e>=1611&&e<=1631||e===1648||e>=1750&&e<=1773&&e!==1757&&e!==1758?`NSM`:e>=1424&&e<=1535?`R`:e>=1536&&e<=1791||e>=1872&&e<=1919||e>=2208&&e<=2303||e>=64336&&e<=65023||e>=65136&&e<=65278?`AL`:e<128?e>=65&&e<=90||e>=97&&e<=122?`L`:`ON`:e>=161&&e<=191||e===215||e===247||e>=8192&&e<=11263||e>=12288&&e<=12351||e>=65040&&e<=65135||e>=65281&&e<=65295||e>=65306&&e<=65312?`ON`:`L`}var Wn=new Map([[40,41],[60,62],[91,93],[123,125],[171,187],[8249,8250],[8261,8262],[8317,8318],[8804,8805]].flatMap(([e=0,t=0])=>[[e,t],[t,e]])),Gn=e=>e===`L`||e===`R`||e===`AL`;function Kn(e,t){if(e.length===0)return[];let n=e.map(e=>Un(e.codigo));if(t===`ltr`&&!n.some(e=>e===`R`||e===`AL`||e===`AN`))return[...e];let r=t===`rtl`?`R`:`L`,i=n.length;for(let e=0;e<i;e+=1)n[e]===`NSM`&&(n[e]=e===0?r:n[e-1]??r);let a=r;for(let e=0;e<i;e+=1){let t=n[e];t===`EN`&&a===`AL`&&(n[e]=`AN`),t!==void 0&&Gn(t)&&(a=t)}for(let e=0;e<i;e+=1)n[e]===`AL`&&(n[e]=`R`);for(let e=1;e<i-1;e+=1){let t=n[e-1],r=n[e+1];n[e]===`ES`&&t===`EN`&&r===`EN`?n[e]=`EN`:n[e]===`CS`&&t===r&&(t===`EN`||t===`AN`)&&(n[e]=t)}for(let e=0;e<i;e+=1){if(n[e]!==`ET`)continue;let t=e;for(;t<i&&n[t]===`ET`;)t+=1;let r=n[e-1]===`EN`||n[t]===`EN`;for(let i=e;i<t;i+=1)n[i]=r?`EN`:`ON`;e=t-1}for(let e=0;e<i;e+=1){let t=n[e];(t===`ES`||t===`CS`||t===`ET`)&&(n[e]=`ON`)}a=r;for(let e=0;e<i;e+=1){let t=n[e];t===`EN`&&a===`L`&&(n[e]=`L`),(t===`L`||t===`R`)&&(a=t)}let o=e=>e===`L`?`L`:e===`R`||e===`EN`||e===`AN`?`R`:void 0;for(let e=0;e<i;e+=1){if(n[e]!==`ON`&&n[e]!==`WS`)continue;let t=e;for(;t<i&&(n[t]===`ON`||n[t]===`WS`);)t+=1;let a=e===0?r:o(n[e-1]),s=t===i?r:o(n[t]),c=a!==void 0&&a===s?a:r;for(let r=e;r<t;r+=1)n[r]=c;e=t-1}let s=+(t===`rtl`),c=n.map(e=>s===0?e===`R`?1:e===`EN`||e===`AN`?2:0:e===`L`||e===`EN`||e===`AN`?2:1),l=e.map((e,t)=>t),u=Math.max(...c);for(let e=u;e>=1;--e)for(let t=0;t<i;t+=1){if((c[l[t]??0]??0)<e)continue;let n=t;for(;n<i&&(c[l[n]??0]??0)>=e;)n+=1;let r=l.slice(t,n).reverse();l.splice(t,n-t,...r),t=n-1}return l.map(t=>{let n=e[t]??{codigo:32,texto:` `},r=(c[t]??0)%2==1?Wn.get(n.codigo):void 0;return r===void 0?n:{codigo:r,texto:n.texto}})}function qn(e){return e<32||e>=127&&e<160||e===173||e===1564||e>=8203&&e<=8207||e>=8234&&e<=8238||e>=8288&&e<=8303||e===65279||e>=65024&&e<=65039||e>=917760&&e<=917999}function Jn(e){return e>=11904&&e<=12255||e>=12288&&e<=12543||e>=12784&&e<=12799||e>=13312&&e<=19903||e>=19968&&e<=40959||e>=63744&&e<=64255||e>=65280&&e<=65519||e>=131072&&e<=201551}var Yn=new Set([...`、。，．・：；？！ー）」』】〕〉》〙〗〟’”ゝゞヽヾぁぃぅぇぉっゃゅょゎゕゖァィゥェォッャュョヮヵヶ々〻゠〜`,...`)]},.:;!?%`].map(e=>e.codePointAt(0)??0)),Xn=new Set([...`（「『【〔〈《〘〖〝‘“([{`].map(e=>e.codePointAt(0)??0));function Zn(e){let t=[],n=``,r=!1,i=!1,a=()=>{n!==``&&t.push({texto:n,espacoAntes:r}),n=``};for(let o of e){let e=o.codePointAt(0)??0;/\s/u.test(o)?(a(),i=t.length>0):Jn(e)?(a(),t.push({texto:o,espacoAntes:i}),i=!1):(n===``&&(r=i,i=!1),n+=o)}a();let o=[];for(let e of t){let t=o.at(-1),n=e.texto.codePointAt(0)??0,r=t===void 0?0:[...t.texto].at(-1)?.codePointAt(0)??0;t!==void 0&&!e.espacoAntes&&(Yn.has(n)||Xn.has(r))?t.texto+=e.texto:o.push({...e})}return o}var Qn=class{constructor(e){if(h(this,`fontes`,void 0),h(this,`achados`,new Map([[`normal`,new Map],[`negrito`,new Map]])),this.fontes=e,e.normal.length===0||e.negrito.length===0)throw Error(`pdf: a cadeia de fontes está vazia (ver carregadorDeFontes)`)}get direcao(){return this.fontes.direcao??`ltr`}unidades(e){return(Vn(e)?Hn(e):[...e].map(e=>({codigo:e.codePointAt(0)??0,texto:e}))).map(e=>e.codigo!==32&&/^\s$/u.test(e.texto)?{codigo:32,texto:` `}:e)}achar(e,t){let n=this.achados.get(t)??new Map,r=n.get(e);if(r!==void 0)return r;let i=t===`negrito`?this.fontes.negrito:this.fontes.normal,a;for(let t of i){let n=t.fonte.glifo(e);if(n!==0){a={face:t,glifo:n};break}}let o=a??{face:i[0],glifo:0};return n.set(e,o),o}milesimos(e,t){let n=0;for(let r of this.unidades(e)){if(qn(r.codigo))continue;let{face:e,glifo:i}=this.achar(r.codigo,t);n+=e.fonte.largura(i)}return n}largura(e,t,n=`normal`){return this.milesimos(e,n)*t/1e3}cortar(e,t,n,r=`normal`){if(this.largura(e,n,r)<=t)return e;let i=[...e],a=1,o=i.length;for(;o-a>1;){let e=a+o>>1,s=`${i.slice(0,e).join(``).trimEnd()}...`;this.largura(s,n,r)<=t?a=e:o=e}return`${i.slice(0,a).join(``).trimEnd()}...`}quebrar(e,t,n,r=`normal`){let i=[],a=``;for(let o of Zn(e)){let e=a===``?o.texto:`${a}${o.espacoAntes?` `:``}${o.texto}`;this.largura(e,n,r)<=t?a=e:(a!==``&&i.push(a),a=this.largura(o.texto,n,r)<=t?o.texto:this.cortar(o.texto,t,n,r))}return a!==``&&i.push(a),i.length===0?[``]:i}trechos(e,t=`normal`){let n=[];for(let r of Kn(this.unidades(e),this.direcao)){if(qn(r.codigo))continue;let{face:e,glifo:i}=this.achar(r.codigo,t),a=e.fonte.largura(i),o=n.at(-1);o!==void 0&&o.face===e?(o.glifos.push(i),o.textos.push(r.texto),o.largura+=a):n.push({face:e,glifos:[i],textos:[r.texto],largura:a})}return n}},$n=[0,0,0],er=[.42,.45,.5],tr=[.85,.87,.89],nr=.03;function rr(e){return(Math.round(e*1e3)/1e3).toString()}function ir(e,t){return`${rr(e[0])} ${rr(e[1])} ${rr(e[2])} ${t}\n`}function ar(e){return e.toString(16).toUpperCase().padStart(4,`0`)}function or(e){let t=``;for(let n=0;n<e.length;n+=1)t+=ar(e.charCodeAt(n));return t}var sr=class{constructor(){h(this,`usos`,new Map)}uso(e){let t=this.usos.get(e);return t===void 0&&(t={recurso:`F${this.usos.size+1}`,glifos:[0],novos:new Map([[0,0]]),textos:[``]},this.usos.set(e,t)),t}cid(e,t,n){let r=e.novos.get(t);return r===void 0?(r=e.glifos.length,e.glifos.push(t),e.novos.set(t,r),e.textos.push(n)):e.textos[r]===``&&n!==``&&(e.textos[r]=n),r}},cr=class{constructor(e,t,n,r){h(this,`largura`,void 0),h(this,`altura`,void 0),h(this,`tipos`,void 0),h(this,`registro`,void 0),h(this,`operadores`,[]),this.largura=e,this.altura=t,this.tipos=n,this.registro=r}get espelhada(){return this.tipos.direcao===`rtl`}paraPdf(e){return this.altura-e}paraX(e){return this.espelhada?this.largura-e:e}texto(e,t,n,r={}){if(e===``)return;let i=r.tamanho??10,a=r.fonte??`normal`,o=r.cor??$n,s=this.tipos.trechos(e,a);if(s.length===0)return;let c=s.reduce((e,t)=>e+t.largura,0)*i/1e3,l=r.alinhamento??`inicio`;this.espelhada&&l!==`centro`&&(l=l===`inicio`?`fim`:`inicio`);let u=this.paraX(t),d=l===`fim`?u-c:l===`centro`?u-c/2:u;this.operadores.push(`BT
`,ir(o,`rg`),`${rr(d)} ${rr(this.paraPdf(n))} Td\n`);let f=!1;for(let e of s){let t=this.registro.uso(e.face.fonte),n=e.glifos.map((n,r)=>this.registro.cid(t,n,e.textos[r]??``));this.operadores.push(`/${t.recurso} ${rr(i)} Tf\n`);let r=a===`negrito`&&e.face.negritoSintetico===!0;r&&!f?this.operadores.push(`2 Tr ${rr(i*nr)} w\n`,ir(o,`RG`)):!r&&f&&this.operadores.push(`0 Tr
`),f=r,this.operadores.push(`<${n.map(ar).join(``)}> Tj\n`)}f&&this.operadores.push(`0 Tr
`),this.operadores.push(`ET
`)}linha(e,t,n,r,i=.5,a=tr){this.operadores.push(ir(a,`RG`),`${rr(i)} w\n`,`${rr(this.paraX(e))} ${rr(this.paraPdf(t))} m ${rr(this.paraX(n))} ${rr(this.paraPdf(r))} l S\n`)}retangulo(e,t,n,r,i){let a=this.espelhada?this.largura-e-n:e;this.operadores.push(ir(i,`rg`),`${rr(a)} ${rr(this.paraPdf(t+r))} ${rr(n)} ${rr(r)} re f\n`)}conteudo(){return this.operadores.join(``)}},lr=class{constructor(e,t=595,n=842){h(this,`largura`,void 0),h(this,`altura`,void 0),h(this,`tipos`,void 0),h(this,`folhas`,[]),h(this,`registro`,new sr),this.largura=t,this.altura=n,this.tipos=e instanceof Qn?e:new Qn(e)}novaPagina(){let e=new cr(this.largura,this.altura,this.tipos,this.registro);return this.folhas.push(e),e}get paginas(){return this.folhas}bytes(){this.folhas.length===0&&this.novaPagina();let e=[],t=0,n=n=>{e.push(n),t+=n.length},r=e=>{let t=new Uint8Array(e.length);for(let n=0;n<e.length;n+=1)t[n]=e.charCodeAt(n)&255;n(t)},i=new Map,a=(e,a,o)=>{i.set(e,t),r(`${e} 0 obj\n${a}\n`),o!==void 0&&(r(`stream
`),n(o),r(`
endstream
`)),r(`endobj
`)},o=e=>{let t=new Uint8Array(e.length);for(let n=0;n<e.length;n+=1)t[n]=e.charCodeAt(n);return t};r(`%PDF-1.7
%âãÏÓ
`);let s=[...this.registro.usos.entries()],c=3+s.length*5,l=this.folhas.map((e,t)=>c+t*2);a(1,`<< /Type /Catalog /Pages 2 0 R >>`),a(2,`<< /Type /Pages /Kids [${l.map(e=>`${e} 0 R`).join(` `)}] /Count ${this.folhas.length} >>`);let u=[];s.forEach(([e,t],n)=>{let r=3+n*5,i=`KOBI${String.fromCharCode(65+Math.floor(n/26),65+n%26)}+${e.nome}`,s=1e3/e.unidadesPorEm,c=e.recortar(t.glifos),l=t.glifos.map(t=>e.largura(t)).join(` `);a(r,`<< /Type /Font /Subtype /Type0 /BaseFont /${i} /Encoding /Identity-H /DescendantFonts [${r+1} 0 R] /ToUnicode ${r+4} 0 R >>`),a(r+1,`<< /Type /Font /Subtype /CIDFontType2 /BaseFont /${i} /CIDSystemInfo << /Registry (Adobe) /Ordering (Identity) /Supplement 0 >> /FontDescriptor ${r+2} 0 R /W [0 [${l}]] /CIDToGIDMap /Identity >>`),a(r+2,`<< /Type /FontDescriptor /FontName /${i} /Flags 4 /FontBBox [${e.caixa.map(e=>Math.round(e*s)).join(` `)}] /ItalicAngle ${rr(e.anguloItalico)} /Ascent ${Math.round(e.ascendente*s)} /Descent ${Math.round(e.descendente*s)} /CapHeight ${Math.round(e.alturaDaMaiuscula*s)} /StemV 80 /FontFile2 ${r+3} 0 R >>`),a(r+3,`<< /Length ${c.length} /Length1 ${c.length} >>`,c);let d=o(ur(t.textos));a(r+4,`<< /Length ${d.length} >>`,d),u.push(`/${t.recurso} ${r} 0 R`)}),this.folhas.forEach((e,t)=>{let n=c+t*2,r=n+1,i=o(e.conteudo());a(n,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${rr(this.largura)} ${rr(this.altura)}] /Resources << /Font << ${u.join(` `)} >> >> /Contents ${r} 0 R >>`),a(r,`<< /Length ${i.length} >>`,i)});let d=c+this.folhas.length*2,f=t;r(`xref\n0 ${d}\n`),r(`0000000000 65535 f 
`);for(let e=1;e<d;e+=1)r(`${String(i.get(e)??0).padStart(10,`0`)} 00000 n \n`);r(`trailer\n<< /Size ${d} /Root 1 0 R >>\nstartxref\n${f}\n%%EOF\n`);let ee=new Uint8Array(t),te=0;for(let t of e)ee.set(t,te),te+=t.length;return ee}};function ur(e){let t=e.map((e,t)=>({cid:t,texto:e})).filter(e=>e.cid>0&&e.texto!==``),n=[];for(let e=0;e<t.length;e+=100){let r=t.slice(e,e+100);n.push(`${r.length} beginbfchar\n`+r.map(e=>`<${ar(e.cid)}> <${or(e.texto)}>`).join(`
`)+`
endbfchar
`)}return`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo << /Registry (Adobe) /Ordering (UCS) /Supplement 0 >> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000> <FFFF>
endcodespacerange
`+n.join(``)+`endcmap
CMapName currentdict /CMap defineresource pop
end
end
`}var dr=42,fr=595-dr,pr=fr-250;fr-110,pr-dr-44;var mr=1,hr=8,gr=32,_r=64,vr=128,yr=[`cvt `,`fpgm`,`glyf`,`head`,`hhea`,`hmtx`,`loca`,`maxp`,`prep`],br=class e{constructor(e){h(this,`bytes`,void 0),h(this,`nome`,void 0),h(this,`unidadesPorEm`,void 0),h(this,`ascendente`,void 0),h(this,`descendente`,void 0),h(this,`alturaDaMaiuscula`,void 0),h(this,`caixa`,void 0),h(this,`anguloItalico`,void 0),h(this,`quantosGlifos`,void 0),h(this,`dados`,void 0),h(this,`tabelas`,void 0),h(this,`avancos`,void 0),h(this,`laterais`,void 0),h(this,`locaLonga`,void 0),h(this,`grupos`,void 0),this.bytes=e,this.dados=new DataView(e.buffer,e.byteOffset,e.byteLength);let t=this.dados.getUint32(0);if(t!==65536&&t!==1953658213)throw Error(`fonte: só TrueType com contorno glyf (a assinatura não é de TrueType)`);let n=new Map,r=this.dados.getUint16(4);for(let t=0;t<r;t+=1){let r=12+t*16,i=String.fromCharCode(...e.subarray(r,r+4));n.set(i,{deslocamento:this.dados.getUint32(r+8),tamanho:this.dados.getUint32(r+12)})}this.tabelas=n;for(let e of[`head`,`hhea`,`maxp`,`hmtx`,`loca`,`glyf`])if(!n.has(e))throw Error(`fonte: falta a tabela ${e}`);let i=this.tabela(`head`).deslocamento;this.unidadesPorEm=this.dados.getUint16(i+18),this.caixa=[this.dados.getInt16(i+36),this.dados.getInt16(i+38),this.dados.getInt16(i+40),this.dados.getInt16(i+42)],this.locaLonga=this.dados.getInt16(i+50)===1;let a=this.tabela(`hhea`).deslocamento,o=this.dados.getInt16(a+4),s=this.dados.getInt16(a+6),c=Math.round(o*.7),l=n.get(`OS/2`);l!==void 0&&(o=this.dados.getInt16(l.deslocamento+68),s=this.dados.getInt16(l.deslocamento+70),this.dados.getUint16(l.deslocamento)>=2&&l.tamanho>=90&&(c=this.dados.getInt16(l.deslocamento+88))),this.ascendente=o,this.descendente=s,this.alturaDaMaiuscula=c;let u=n.get(`post`);this.anguloItalico=u===void 0?0:this.dados.getInt32(u.deslocamento+4)/65536,this.quantosGlifos=this.dados.getUint16(this.tabela(`maxp`).deslocamento+4);let d=this.dados.getUint16(a+34),f=this.tabela(`hmtx`).deslocamento;this.avancos=new Uint16Array(this.quantosGlifos),this.laterais=new Int16Array(this.quantosGlifos);let ee=0;for(let e=0;e<this.quantosGlifos;e+=1)e<d?(ee=this.dados.getUint16(f+e*4),this.avancos[e]=ee,this.laterais[e]=this.dados.getInt16(f+e*4+2)):(this.avancos[e]=ee,this.laterais[e]=this.dados.getInt16(f+d*4+(e-d)*2));this.nome=this.lerNome()??`KobiFonte`}static ler(t){return new e(t)}tabela(e){let t=this.tabelas.get(e);if(t===void 0)throw Error(`fonte: falta a tabela ${e}`);return t}lerNome(){let e=this.tabelas.get(`name`);if(e===void 0)return;let t=e.deslocamento,n=this.dados.getUint16(t+2),r=t+this.dados.getUint16(t+4),i;for(let e=0;e<n;e+=1){let n=t+6+e*12,a=this.dados.getUint16(n);if(this.dados.getUint16(n+6)!==6)continue;let o=this.dados.getUint16(n+8),s=r+this.dados.getUint16(n+10);if(a===3||a===0){let e=``;for(let t=0;t+1<o;t+=2)e+=String.fromCharCode(this.dados.getUint16(s+t));return e}a===1&&(i=String.fromCharCode(...this.bytes.subarray(s,s+o)))}return i}lerCmap(){let e=this.tabela(`cmap`).deslocamento,t=this.dados.getUint16(e+2),n,r;for(let i=0;i<t;i+=1){let t=e+4+i*8,a=this.dados.getUint16(t),o=this.dados.getUint16(t+2),s=e+this.dados.getUint32(t+4),c=this.dados.getUint16(s);(a===0||a===3&&(o===1||o===10))&&(c===12&&n===void 0&&(n=s),c===4&&r===void 0&&(r=s))}if(n!==void 0){let e=this.dados.getUint32(n+12),t=[];for(let r=0;r<e;r+=1){let e=n+16+r*12;t.push({inicio:this.dados.getUint32(e),fim:this.dados.getUint32(e+4),glifo:this.dados.getUint32(e+8)})}return t}if(r===void 0)throw Error(`fonte: sem cmap Unicode (formato 4 ou 12)`);let i=this.dados.getUint16(r+6)/2,a=r+14,o=a+i*2+2,s=o+i*2,c=s+i*2,l=[];for(let e=0;e<i;e+=1){let t=this.dados.getUint16(a+e*2),n=this.dados.getUint16(o+e*2),r=this.dados.getInt16(s+e*2),i=c+e*2,u=this.dados.getUint16(i);if(n!==65535){if(u===0)l.push({inicio:n,fim:t,glifo:n+r&65535});else for(let e=n;e<=t;e+=1){let t=i+u+(e-n)*2,a=this.dados.getUint16(t);a!==0&&l.push({inicio:e,fim:e,glifo:a+r&65535})}}}return l.sort((e,t)=>e.inicio-t.inicio)}glifo(e){this.grupos??=this.lerCmap();let t=this.grupos,n=0,r=t.length-1;for(;n<=r;){let i=n+r>>1,a=t[i];if(a===void 0)break;if(e<a.inicio)r=i-1;else if(e>a.fim)n=i+1;else return a.glifo+(e-a.inicio)}return 0}largura(e){return Math.round((this.avancos[e]??0)*1e3/this.unidadesPorEm)}glifoCru(e){let t=this.tabela(`loca`).deslocamento,n=this.tabela(`glyf`).deslocamento,r=this.locaLonga?this.dados.getUint32(t+e*4):this.dados.getUint16(t+e*2)*2,i=this.locaLonga?this.dados.getUint32(t+(e+1)*4):this.dados.getUint16(t+(e+1)*2)*2;return this.bytes.subarray(n+r,n+i)}componentes(e){if(e.length<10)return[];let t=new DataView(e.buffer,e.byteOffset,e.byteLength);if(t.getInt16(0)>=0)return[];let n=[],r=10,i=gr;for(;(i&gr)!==0&&r+4<=e.length;)i=t.getUint16(r),n.push({posicao:r+2,glifo:t.getUint16(r+2)}),r+=4+((i&mr)===0?2:4),(i&hr)===0?(i&_r)===0?(i&vr)!==0&&(r+=8):r+=4:r+=2;return n}recortar(e){if(e[0]!==0)throw Error(`fonte: o recorte começa pelo glifo 0 (.notdef)`);let t=[...e],n=new Map(t.map((e,t)=>[e,t]));for(let e=0;e<t.length;e+=1)for(let r of this.componentes(this.glifoCru(t[e]??0)))n.has(r.glifo)||(n.set(r.glifo,t.length),t.push(r.glifo));let r=[],i=new DataView(new ArrayBuffer((t.length+1)*4)),a=0;for(let[e,o]of t.entries()){i.setUint32(e*4,a);let t=this.glifoCru(o),s=new Uint8Array(t.length+(4-t.length%4)%4);s.set(t);let c=new DataView(s.buffer);for(let e of this.componentes(t))c.setUint16(e.posicao,n.get(e.glifo)??0);r.push(s),a+=s.length}i.setUint32(t.length*4,a);let o=new Uint8Array(a),s=0;for(let e of r)o.set(e,s),s+=e.length;let c=new DataView(new ArrayBuffer(t.length*4));for(let[e,n]of t.entries())c.setUint16(e*4,this.avancos[n]??0),c.setInt16(e*4+2,this.laterais[n]??0);let l=e=>{let t=this.tabela(e);return this.bytes.slice(t.deslocamento,t.deslocamento+t.tamanho)},u=l(`head`);new DataView(u.buffer).setUint32(8,0),new DataView(u.buffer).setInt16(50,1);let d=l(`hhea`);new DataView(d.buffer).setUint16(34,t.length);let f=l(`maxp`);new DataView(f.buffer).setUint16(4,t.length);let ee=new Map([[`glyf`,o],[`head`,u],[`hhea`,d],[`hmtx`,new Uint8Array(c.buffer)],[`loca`,new Uint8Array(i.buffer)],[`maxp`,f]]);for(let e of[`cvt `,`fpgm`,`prep`])this.tabelas.has(e)&&ee.set(e,l(e));return Sr(ee)}};function xr(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0;for(let r=0;r+3<e.length;r+=4)n=n+t.getUint32(r)>>>0;let r=e.length%4;if(r!==0){let t=0;for(let n=0;n<4;n+=1)t=t<<8|(n<r?e[e.length-r+n]??0:0);n=n+(t>>>0)>>>0}return n}function Sr(e){let t=[...e.keys()].filter(e=>yr.includes(e)).sort(),n=t.length,r=1,i=0;for(;r*2<=n;)r*=2,i+=1;let a=12+n*16,o=a;for(let n of t)o+=Math.ceil((e.get(n)?.length??0)/4)*4;let s=new Uint8Array(o),c=new DataView(s.buffer);c.setUint32(0,65536),c.setUint16(4,n),c.setUint16(6,r*16),c.setUint16(8,i),c.setUint16(10,n*16-r*16);let l=a,u=0;for(let[n,r]of t.entries()){let t=e.get(r)??new Uint8Array,i=12+n*16;for(let e=0;e<4;e+=1)c.setUint8(i+e,r.charCodeAt(e));c.setUint32(i+4,xr(t)),c.setUint32(i+8,l),c.setUint32(i+12,t.length),s.set(t,l),r===`head`&&(u=l),l+=Math.ceil(t.length/4)*4}return c.setUint32(u+8,2981146554-xr(s)>>>0),s}var Cr=/[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]/u,wr=/[぀-ヿㇰ-ㇿｦ-ﾟ]/u,Tr=/[ᄀ-ᇿ㄰-㆏가-힯]/u,Er=/[⺀-⿟　-〿㐀-䶿一-鿿豈-﫿＀-･\u{20000}-\u{3134f}]/u;function Dr(e){let t=e.toLowerCase().split(`-`)[0];if(t===`ar`)return`arabe`;if(t===`ja`)return`japonesa`;if(t===`zh`)return`chinesa`;if(t===`ko`)return`coreana`}function Or(e,t=`pt-BR`){let n=new Set([`latina`]),r=Dr(t);return r!==void 0&&n.add(r),Cr.test(e)&&n.add(`arabe`),wr.test(e)&&n.add(`japonesa`),Tr.test(e)&&n.add(`coreana`),Er.test(e)&&r!==`japonesa`&&r!==`chinesa`&&r!==`coreana`&&!n.has(`japonesa`)&&n.add(`chinesa`),[...n]}function kr(e,t=`pt-BR`,n=`ltr`){let r=Dr(t),i=e=>e===`latina`?0:e===r?1:e===`arabe`?2:3,a=[...e].sort((e,t)=>i(e.escrita)-i(t.escrita));return{normal:a.map(e=>({fonte:e.normal})),negrito:a.map(e=>e.negrito===void 0?{fonte:e.normal,negritoSintetico:!0}:{fonte:e.negrito}),direcao:n}}function Ar(e,t=jr){let n=new Map,r=new Map,i=e=>{let i=r.get(e);if(i!==void 0)return Promise.resolve(i);let a=n.get(e);return a===void 0&&(a=t(e).then(t=>{let n=br.ler(t);return r.set(e,n),n}),a.then(()=>n.delete(e),()=>n.delete(e)),n.set(e,a)),a},a=(t,n)=>Or(t,n).filter(t=>e[t]!==void 0),o=(t,n=`pt-BR`,i=`ltr`)=>{let o=[];for(let i of a(t,n)){let t=e[i],n=r.get(t.normal),a=t.negrito===void 0?void 0:r.get(t.negrito);if(n===void 0||t.negrito!==void 0&&a===void 0)return;o.push(a===void 0?{escrita:i,normal:n}:{escrita:i,normal:n,negrito:a})}return kr(o,n,i)},s=async(t,n=`pt-BR`,r=`ltr`)=>kr(await Promise.all(a(t,n).map(async t=>{let n=e[t],[r,a]=await Promise.all([i(n.normal),n.negrito===void 0?void 0:i(n.negrito)]);return a===void 0?{escrita:t,normal:r}:{escrita:t,normal:r,negrito:a}})),n,r);return{prontas:o,carregar:s,aquecer:(e=`pt-BR`)=>{s(``,e).catch(()=>{})}}}async function jr(e){let t=await fetch(e);if(!t.ok)throw Error(`pdf: a fonte ${e} não veio (${t.status})`);return new Uint8Array(await t.arrayBuffer())}var Mr=24,Nr=595-Mr;842-Mr-18,(Nr-Mr-16)/2;var Pr=new URL(`NotoSans-Bold-8sYD9-az.ttf`,import.meta.url).href,Fr=new URL(`NotoSans-Regular-BBzrYbzD.ttf`,import.meta.url).href,Ir=new URL(`NotoSansArabic-Bold-BjTG7b8d.ttf`,import.meta.url).href,Lr=new URL(`NotoSansArabic-Regular-CsswNCUW.ttf`,import.meta.url).href,Rr=new URL(`NotoSansJP-Regular-CcwN4lvc.ttf`,import.meta.url).href,zr=new URL(`NotoSansKR-Regular-BspGyply.ttf`,import.meta.url).href,Br=new URL(`NotoSansSC-Regular-CKHVtPTs.ttf`,import.meta.url).href,Vr=Ar({latina:{normal:Fr,negrito:Pr},arabe:{normal:Lr,negrito:Ir},japonesa:{normal:Rr},chinesa:{normal:Br},coreana:{normal:zr}});function Hr(e){let t=te();return Vr.prontas(e,t,re(t))}async function Ur(e){let t=te();try{return await Vr.carregar(e,t,re(t))}catch(e){console.error(`PDF: a fonte não desceu.`,e),oe(p.erro.fonteDoPdf,`danger`);return}}function Wr(){Vr.aquecer(te())}var Gr=null,Kr=new Set;function qr(){for(let e of[...Kr])e()}function Jr(e){e.preventDefault(),Gr=e,qr()}typeof window<`u`&&(window.addEventListener(`beforeinstallprompt`,Jr),window.addEventListener(`appinstalled`,()=>{Gr=null,qr()}));function Yr(){return typeof navigator>`u`||!(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1)?!1:!(navigator.standalone===!0||matchMedia(`(display-mode: standalone)`).matches)}function Xr(){return Gr!==null}async function Zr(){let e=Gr;if(e===null)return!1;Gr=null,qr();let{outcome:t}=await e.prompt();return t===`accepted`}function Qr(e){return Kr.add(e),()=>Kr.delete(e)}var $r=new Set,ei=new Map,ti,ni=`ltr`,ri=`en`,ii=typeof MutationObserver<`u`&&typeof document<`u`&&typeof document.documentElement<`u`;ii&&(ni=document.documentElement.dir||`ltr`,ri=document.documentElement.lang||navigator.language,new MutationObserver(()=>oi()).observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]}));function ai(...e){for(let t of e){let e=t.$code.toLowerCase(),n=ei.get(e);ei.set(e,n?{...n,...t}:t),ti??=t}oi()}function oi(){ii&&(ni=document.documentElement.dir||`ltr`,ri=document.documentElement.lang||navigator.language);for(let e of $r)e.requestUpdate()}function si(e){let t;try{t=new Intl.Locale(e.replaceAll(`_`,`-`))}catch{return{regional:void 0,idioma:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``;return{regional:r?ei.get(`${n}-${r}`):void 0,idioma:ei.get(n)}}var ci=class{constructor(e){h(this,`host`,void 0),this.host=e,this.host.addController(this)}hostConnected(){$r.add(this.host)}hostDisconnected(){$r.delete(this.host)}dir(){return`${this.host.dir||ni}`.toLowerCase()}lang(){return`${this.host.lang||ri}`.toLowerCase()}exists(e,t){let{includeFallback:n=!1,lang:r=this.lang()}=t??{},{regional:i,idioma:a}=si(r);return!!(i?.[e]??a?.[e]??(n?ti?.[e]:void 0))}term(e,...t){let{regional:n,idioma:r}=si(this.lang()),i=n?.[e]??r?.[e]??ti?.[e];return i===void 0?(console.error(`Nenhuma tradu\xE7\xE3o encontrada para: ${String(e)}`),String(e)):typeof i==`function`?i(...t):String(i)}date(e,t){return new Intl.DateTimeFormat(this.lang(),t).format(new Date(e))}number(e,t){let n=Number(e);return Number.isNaN(n)?``:new Intl.NumberFormat(this.lang(),t).format(n)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},li=`\xA0`,ui=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],di=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],fi=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],pi=[`S`,`M`,`T`,`W`,`T`,`F`,`S`],mi={$code:`en`,$name:`English`,$dir:`ltr`,actions:`Actions`,alpha:`Alpha`,browseFiles:`Browse files`,calendar:`Calendar`,calendarChooseMonth:`Choose the month`,calendarChooseYear:`Choose the year`,calendarCollapse:`Show only the week`,calendarDate:(e,t,n)=>`${t}/${e}/${n}`,calendarDateTime:(e,t,n)=>`${e}, ${t%12||12}:${n}${li}${t<12?`AM`:`PM`}`,calendarDay:(e,t,n,r)=>`${fi[e]??``}, ${ui[n-1]??``} ${t}, ${r}`,calendarExpand:`Show the whole month`,calendarMonth:e=>ui[e-1]??``,calendarMonthShort:e=>di[e-1]??``,calendarMonthYear:(e,t)=>`${ui[e-1]??``} ${t}`,calendarNextMonth:`Next month`,calendarNextWeek:`Next week`,calendarNextYear:`Next year`,calendarNextYears:`Next years`,calendarPreviousMonth:`Previous month`,calendarPreviousWeek:`Previous week`,calendarPreviousYear:`Previous year`,calendarPreviousYears:`Previous years`,calendarRangeDays:e=>e===1?`1 day`:`${e} days`,calendarRangeIncomplete:`Choose the end of the range.`,calendarTime:`Time`,calendarWeek:`Week`,calendarWeekNumber:e=>`Week ${e}`,calendarWeekday:e=>fi[e]??``,calendarWeekdayNarrow:e=>pi[e]??``,cancel:`Cancel`,carousel:`Carousel`,clearEntry:`Clear entry`,clearFilters:`Clear filters`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,deleteItem:`Delete item`,dropFiles:`Drop files here`,editItem:`Edit item`,editorAlignCenter:`Align center`,editorAlignJustify:`Justify`,editorAlignLeft:`Align left`,editorAlignRight:`Align right`,editorArea:`Editing area`,editorBackgroundColor:`Background color`,editorBlockType:`Block type`,editorBold:`Bold`,editorBulletList:`Bulleted list`,editorClearFormat:`Clear formatting`,editorColorBlue:`Blue`,editorColorCyan:`Cyan`,editorColorDefault:`Default`,editorColorGray:`Gray`,editorColorGreen:`Green`,editorColorLime:`Lime`,editorColorOrange:`Orange`,editorColorPink:`Pink`,editorColorRed:`Red`,editorColorTeal:`Teal`,editorColorViolet:`Violet`,editorColorYellow:`Yellow`,editorFootnote:`Footnote`,editorFootnotePlaceholder:`Note text`,editorFootnoteText:`The text appears at the foot of the page, numbered when read.`,editorHeading1:`Heading 1`,editorHeading2:`Heading 2`,editorHeading3:`Heading 3`,editorHeading4:`Heading 4`,editorHighlight:`Highlight`,editorHorizontalRule:`Horizontal rule`,editorImage:`Image`,editorInsert:`Insert`,editorItalic:`Italic`,editorLineBreak:`Line break`,editorLink:`Link`,editorLinkText:`Link address.`,editorNoColor:`No color`,editorNumberedList:`Numbered list`,editorParagraph:`Paragraph`,editorParagraphBordered:`Bordered`,editorParagraphColumns:`Two columns`,editorParagraphDropCap:`Drop cap`,editorParagraphEpigraph:`Epigraph`,editorParagraphEpigraphSubtitle:`Epigraph subtitle`,editorParagraphFinePrint:`Fine print`,editorParagraphFootnotes:`Footnotes`,editorParagraphIndented:`Indented`,editorParagraphSmallCaps:`Small caps`,editorParagraphSmallCapsSubtitle:`Small caps subtitle`,editorParagraphSpaced:`Spaced`,editorParagraphStyle:`Paragraph style`,editorPoetry:`Poetry block`,editorPoetryDedication:`Dedication`,editorPoetryRefrain:`Refrain`,editorPoetryScripture:`Scripture`,editorPoetrySource:`Source`,editorPoetryTheme:`Theme text`,editorPoetryVerse:`Verse`,editorQuote:`Quote`,editorRedo:`Redo`,editorSource:`Source code`,editorStrikethrough:`Strikethrough`,editorTable:`Table`,editorTableColumnAfter:`Insert column right`,editorTableColumnBefore:`Insert column left`,editorTableColumnDelete:`Delete column`,editorTableDelete:`Delete table`,editorTableHeader:`Header row`,editorTableRowAbove:`Insert row above`,editorTableRowBelow:`Insert row below`,editorTableRowDelete:`Delete row`,editorTableSize:`Table size`,editorTextColor:`Text color`,editorToolbar:`Formatting toolbar`,editorTypoDoubleQuotes:`Double quotes`,editorTypoEmDash:`Em dash`,editorTypoEnDash:`En dash`,editorTypography:`Typography`,editorTypoNbsp:`Non-breaking space`,editorTypoSingleQuotes:`Single quotes`,editorUnderline:`Underline`,editorUndo:`Undo`,error:`Error`,finish:`Finish`,firstPage:`First page`,ganttToday:`Today`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,hsv:`HSV`,hue:`Hue`,lastPage:`Last page`,loading:`Loading`,menu:`Menu`,newItem:`New item`,next:`Next`,nextPage:`Next page`,nextSlide:`Next slide`,no:`No`,noResults:`No results found`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,otpCode:`Verification code`,otpIncomplete:e=>`Fill in all ${e} characters of the code.`,page:e=>`Page ${e}`,pagination:`Pagination`,passwordFair:`Fair`,passwordGood:`Good`,passwordStrength:`Password strength`,passwordStrong:`Strong`,passwordWeak:`Weak`,previous:`Previous`,previousPage:`Previous page`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,resultsPerPage:`Results per page`,sankeyLink:(e,t,n,r)=>`${e} \u2192 ${t}: ${n} (${r} of ${e})`,save:`Save`,search:`Search`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,selectAll:`Select all`,selectRow:`Select row`,showingResults:(e,t,n)=>`Showing ${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortableCanceled:e=>`${e} is back where it was.`,sortableDropped:(e,t,n,r)=>`${e} dropped at position ${t} of ${n}${r?` in ${r}`:``}.`,sortableGrabbed:(e,t,n)=>`${e} grabbed, at position ${t} of ${n}. Use the arrow keys to move, Space to drop and Escape to cancel.`,sortableMoved:(e,t,n)=>`Position ${e} of ${t}${n?` in ${n}`:``}.`,sortablePicked:e=>`${e} picked. Tap the destination.`,sparklineSummary:(e,t,n)=>`minimum ${e}, maximum ${t}, last ${n}`,sparklineTristate:(e,t,n)=>`${e} up, ${t} down, ${n} even`,sortAscending:`Sort ascending`,sortClear:`Clear sorting`,sortDescending:`Sort descending`,stepNum:(e,t)=>`Step ${e} of ${t}`,toggleColorFormat:`Toggle color format`,valueMissing:`Please fill out this field.`,yes:`Yes`};ai(mi);var hi=(ai(mi),class extends ci{}),gi=[`janeiro`,`fevereiro`,`março`,`abril`,`maio`,`junho`,`julho`,`agosto`,`setembro`,`outubro`,`novembro`,`dezembro`],_i=[`jan.`,`fev.`,`mar.`,`abr.`,`mai.`,`jun.`,`jul.`,`ago.`,`set.`,`out.`,`nov.`,`dez.`],vi=[`domingo`,`segunda-feira`,`terça-feira`,`quarta-feira`,`quinta-feira`,`sexta-feira`,`sábado`],yi=[`D`,`S`,`T`,`Q`,`Q`,`S`,`S`];ai({$code:`pt`,$name:`Português (Brasil)`,$dir:`ltr`,actions:`Ações`,browseFiles:`Escolher arquivos`,calendar:`Calendário`,calendarChooseMonth:`Escolher o mês`,calendarChooseYear:`Escolher o ano`,calendarCollapse:`Mostrar só a semana`,calendarDate:(e,t,n)=>`${e}/${t}/${n}`,calendarDateTime:(e,t,n)=>`${e}, ${String(t).padStart(2,`0`)}:${n}`,calendarDay:(e,t,n,r)=>`${vi[e]??``}, ${t} de ${gi[n-1]??``} de ${r}`,calendarExpand:`Mostrar o mês inteiro`,calendarMonth:e=>gi[e-1]??``,calendarMonthShort:e=>_i[e-1]??``,calendarMonthYear:(e,t)=>`${gi[e-1]??``} de ${t}`,calendarNextMonth:`Próximo mês`,calendarNextWeek:`Próxima semana`,calendarNextYear:`Próximo ano`,calendarNextYears:`Próximos anos`,calendarPreviousMonth:`Mês anterior`,calendarPreviousWeek:`Semana anterior`,calendarPreviousYear:`Ano anterior`,calendarPreviousYears:`Anos anteriores`,calendarRangeDays:e=>e===1?`1 dia`:`${e} dias`,calendarRangeIncomplete:`Escolha o fim do período.`,calendarTime:`Hora`,calendarWeek:`Semana`,calendarWeekNumber:e=>`Semana ${e}`,calendarWeekday:e=>vi[e]??``,calendarWeekdayNarrow:e=>yi[e]??``,cancel:`Cancelar`,carousel:`Carrossel`,clearEntry:`Limpar entrada`,clearFilters:`Limpar filtros`,close:`Fechar`,copied:`Copiado`,copy:`Copiar`,currentValue:`Valor atual`,deleteItem:`Excluir registro`,dropFiles:`Solte os arquivos aqui`,editItem:`Editar registro`,editorAlignCenter:`Centralizar`,editorAlignJustify:`Justificar`,editorAlignLeft:`Alinhar à esquerda`,editorAlignRight:`Alinhar à direita`,editorArea:`Área de edição`,editorBackgroundColor:`Cor de fundo`,editorBlockType:`Tipo de bloco`,editorBold:`Negrito`,editorBulletList:`Lista`,editorClearFormat:`Limpar formatação`,editorColorBlue:`Azul`,editorColorCyan:`Ciano`,editorColorDefault:`Padrão`,editorColorGray:`Cinza`,editorColorGreen:`Verde`,editorColorLime:`Limão`,editorColorOrange:`Laranja`,editorColorPink:`Rosa`,editorColorRed:`Vermelho`,editorColorTeal:`Azul-petróleo`,editorColorViolet:`Violeta`,editorColorYellow:`Amarelo`,editorFootnote:`Dica`,editorFootnotePlaceholder:`Texto da nota`,editorFootnoteText:`O texto aparece no rodapé, numerado na leitura.`,editorHeading1:`Título 1`,editorHeading2:`Título 2`,editorHeading3:`Título 3`,editorHeading4:`Título 4`,editorHighlight:`Destaque`,editorHorizontalRule:`Linha horizontal`,editorImage:`Imagem`,editorInsert:`Inserir`,editorItalic:`Itálico`,editorLineBreak:`Quebra de linha`,editorLink:`Link`,editorLinkText:`Endereço do link.`,editorNoColor:`Sem cor`,editorNumberedList:`Lista numerada`,editorParagraph:`Parágrafo`,editorParagraphBordered:`Emoldurado`,editorParagraphColumns:`Duas colunas`,editorParagraphDropCap:`Capitular`,editorParagraphEpigraph:`Epígrafe`,editorParagraphEpigraphSubtitle:`Subtítulo da epígrafe`,editorParagraphFinePrint:`Letra miúda`,editorParagraphFootnotes:`Nota de rodapé`,editorParagraphIndented:`Recuado`,editorParagraphSmallCaps:`Versaletes`,editorParagraphSmallCapsSubtitle:`Subtítulo dos versaletes`,editorParagraphSpaced:`Espaçado`,editorParagraphStyle:`Estilo de parágrafo`,editorPoetry:`Bloco de poesia`,editorPoetryDedication:`Dedicatória`,editorPoetryRefrain:`Refrão`,editorPoetryScripture:`Escritura`,editorPoetrySource:`Fonte`,editorPoetryTheme:`Texto tema`,editorPoetryVerse:`Verso`,editorQuote:`Citação`,editorRedo:`Refazer`,editorSource:`Código-fonte`,editorStrikethrough:`Tachado`,editorTable:`Tabela`,editorTableColumnAfter:`Inserir coluna à direita`,editorTableColumnBefore:`Inserir coluna à esquerda`,editorTableColumnDelete:`Excluir coluna`,editorTableDelete:`Excluir tabela`,editorTableHeader:`Linha de cabeçalho`,editorTableRowAbove:`Inserir linha acima`,editorTableRowBelow:`Inserir linha abaixo`,editorTableRowDelete:`Excluir linha`,editorTableSize:`Tamanho da tabela`,editorTextColor:`Cor do texto`,editorToolbar:`Barra de formatação`,editorTypoDoubleQuotes:`Aspas duplas`,editorTypoEmDash:`Travessão`,editorTypoEnDash:`Meia-risca`,editorTypography:`Tipografia`,editorTypoNbsp:`Espaço inseparável`,editorTypoSingleQuotes:`Aspas simples`,editorUnderline:`Sublinhado`,editorUndo:`Desfazer`,error:`Erro`,finish:`Concluir`,firstPage:`Primeira página`,ganttToday:`Hoje`,goToSlide:(e,t)=>`V\xE1 para o slide ${e} de ${t}`,hidePassword:`Esconder a senha`,alpha:`Alfa`,hsv:`HSV`,hue:`Matiz`,lastPage:`Última página`,loading:`Carregando`,menu:`Menu`,newItem:`Novo registro`,next:`Avançar`,nextPage:`Próxima página`,nextSlide:`Próximo slide`,no:`Não`,noResults:`Nenhum resultado encontrado`,numOptionsSelected:e=>e===0?`Nenhuma opção selecionada`:e===1?`1 opção selecionada`:`${e} op\xE7\xF5es selecionadas`,otpCode:`Código de verificação`,otpIncomplete:e=>`Preencha as ${e} casas do c\xF3digo.`,page:e=>`P\xE1gina ${e}`,pagination:`Paginação`,passwordFair:`Razoável`,passwordGood:`Boa`,passwordStrength:`Força da senha`,passwordStrong:`Forte`,passwordWeak:`Fraca`,previous:`Voltar`,previousPage:`Página anterior`,previousSlide:`Slide anterior`,progress:`Progresso`,remove:`Remover`,resize:`Mudar o tamanho`,resultsPerPage:`Registros por página`,sankeyLink:(e,t,n,r)=>`${e} \u2192 ${t}: ${n} (${r} de ${e})`,save:`Salvar`,search:`Pesquisar`,scrollToEnd:`Rolar até o final`,scrollToStart:`Rolar até o início`,selectAColorFromTheScreen:`Selecionar uma cor da tela`,selectAll:`Selecionar tudo`,selectRow:`Selecionar a linha`,showingResults:(e,t,n)=>`Mostrando ${e}\u2013${t} de ${n}`,showPassword:`Mostrar senha`,slideNum:e=>`Slide ${e}`,sortableCanceled:e=>`${e} voltou para onde estava.`,sortableDropped:(e,t,n,r)=>`${e} solto na posi\xE7\xE3o ${t} de ${n}${r?` em ${r}`:``}.`,sortableGrabbed:(e,t,n)=>`${e} pego, na posi\xE7\xE3o ${t} de ${n}. Use as setas para mover, Espa\xE7o para soltar e Esc para cancelar.`,sortableMoved:(e,t,n)=>`Posi\xE7\xE3o ${e} de ${t}${n?` em ${n}`:``}.`,sortablePicked:e=>`${e} escolhido. Toque no destino.`,sparklineSummary:(e,t,n)=>`m\xEDnimo ${e}, m\xE1ximo ${t}, \xFAltimo ${n}`,sparklineTristate:(e,t,n)=>`${e} acima, ${t} abaixo, ${n} no zero`,sortAscending:`Ordenar em ordem crescente`,sortClear:`Remover ordenação`,sortDescending:`Ordenar em ordem decrescente`,stepNum:(e,t)=>`Etapa ${e} de ${t}`,toggleColorFormat:`Trocar o formato de cor`,valueMissing:`Preencha este campo.`,yes:`Sim`});var bi=e=>{let{activeElement:t}=document;t&&e.contains(t)&&document.activeElement?.blur()};function xi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}var Si=globalThis,Ci=Si.ShadowRoot&&(Si.ShadyCSS===void 0||Si.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,wi=Symbol(),Ti=new WeakMap,Ei=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==wi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ci&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ti.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ti.set(t,e))}return e}toString(){return this.cssText}},Di=e=>new Ei(typeof e==`string`?e:e+``,void 0,wi),x=(e,...t)=>new Ei(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,wi),Oi=(e,t)=>{if(Ci)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=Si.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ki=Ci?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Di(t)})(e):e,{is:Ai,defineProperty:ji,getOwnPropertyDescriptor:Mi,getOwnPropertyNames:Ni,getOwnPropertySymbols:Pi,getPrototypeOf:Fi}=Object,Ii=globalThis,Li=Ii.trustedTypes,Ri=Li?Li.emptyScript:``,zi=Ii.reactiveElementPolyfillSupport,Bi=(e,t)=>e,Vi={toAttribute(e,t){switch(t){case Boolean:e=e?Ri:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Hi=(e,t)=>!Ai(e,t),Ui={attribute:!0,type:String,converter:Vi,reflect:!1,useDefault:!1,hasChanged:Hi};Symbol.metadata??=Symbol(`metadata`),Ii.litPropertyMetadata??=new WeakMap;var Wi=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ui){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ji(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Mi(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ui}static _$Ei(){if(this.hasOwnProperty(Bi(`elementProperties`)))return;let e=Fi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Bi(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bi(`properties`))){let e=this.properties,t=[...Ni(e),...Pi(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ki(e))}else e!==void 0&&t.push(ki(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute===void 0?Vi:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Vi:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(r===!1&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Hi)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];e!==!0||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Wi.elementStyles=[],Wi.shadowRootOptions={mode:`open`},Wi[Bi(`elementProperties`)]=new Map,Wi[Bi(`finalized`)]=new Map,zi?.({ReactiveElement:Wi}),(Ii.reactiveElementVersions??=[]).push(`2.1.2`);var Gi=globalThis,Ki=e=>e,qi=Gi.trustedTypes,Ji=qi?qi.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Yi=`$lit$`,Xi=`lit$${Math.random().toFixed(9).slice(2)}$`,Zi=`?`+Xi,Qi=`<${Zi}>`,$i=document,ea=()=>$i.createComment(``),ta=e=>e===null||typeof e!=`object`&&typeof e!=`function`,na=Array.isArray,ra=e=>na(e)||typeof e?.[Symbol.iterator]==`function`,ia=`[ 	
\f\r]`,aa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oa=/-->/g,sa=/>/g,ca=RegExp(`>|${ia}(?:([^\\s"'>=/]+)(${ia}*=${ia}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,`g`),la=/'/g,ua=/"/g,da=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),fa=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),pa=new WeakMap,ma=$i.createTreeWalker($i,129);function ha(e,t){if(!na(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ji===void 0?t:Ji.createHTML(t)}var ga=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=aa;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===aa?c[1]===`!--`?o=oa:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ca):(da.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ca):o=sa:o===ca?c[0]===`>`?(o=i??aa,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ca:c[3]===`"`?ua:la):o===ua||o===la?o=ca:o===oa||o===sa?o=aa:(o=ca,i=void 0);let d=o===ca&&e[t+1].startsWith(`/>`)?` `:``;a+=o===aa?n+Qi:l>=0?(r.push(s),n.slice(0,l)+Yi+n.slice(l)+Xi+d):n+Xi+(l===-2?t:d)}return[ha(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},_a=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ga(t,n);if(this.el=e.createElement(l,r),ma.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ma.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Yi)){let t=u[o++],n=i.getAttribute(e).split(Xi),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Sa:r[1]===`?`?Ca:r[1]===`@`?wa:xa}),i.removeAttribute(e)}else e.startsWith(Xi)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(da.test(i.tagName)){let e=i.textContent.split(Xi),t=e.length-1;if(t>0){i.textContent=qi?qi.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ea()),ma.nextNode(),c.push({type:2,index:++a});i.append(e[t],ea())}}}else if(i.nodeType===8){if(i.data===Zi)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Xi,e+1))!==-1;)c.push({type:7,index:a}),e+=Xi.length-1}}a++}}static createElement(e,t){let n=$i.createElement(`template`);return n.innerHTML=e,n}};function va(e,t,n=e,r){if(t===fa)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ta(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=va(e,i._$AS(e,t.values),i,r)),t}var ya=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??$i).importNode(t,!0);ma.currentNode=r;let i=ma.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ba(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ta(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ma.nextNode(),a++)}return ma.currentNode=$i,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ba=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=va(this,e,t),ta(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==fa&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ra(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&ta(this._$AH)?this._$AA.nextSibling.data=e:this.T($i.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=_a.createElement(ha(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ya(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=pa.get(e.strings);return t===void 0&&pa.set(e.strings,t=new _a(e)),t}k(t){na(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ea()),this.O(ea()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Ki(e).nextSibling;Ki(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xa=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=va(this,e,t,0),a=!ta(e)||e!==this._$AH&&e!==fa,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=va(this,r[n+o],t,o),s===fa&&(s=this._$AH[o]),a||=!ta(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Sa=class extends xa{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Ca=class extends xa{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},wa=class extends xa{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=va(this,e,t,0)??C)===fa)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ta=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){va(this,e)}},Ea={M:Yi,P:Xi,A:Zi,C:1,L:ga,R:ya,D:ra,V:va,I:ba,H:xa,N:Ca,U:wa,B:Sa,F:Ta},Da=Gi.litHtmlPolyfillSupport;Da?.(_a,ba),(Gi.litHtmlVersions??=[]).push(`3.3.3`);var Oa=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ba(t.insertBefore(ea(),e),e,void 0,n??{})}return i._$AI(e),i},ka=globalThis,Aa=class extends Wi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oa(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fa}};Aa._$litElement$=!0,Aa.finalized=!0,ka.litElementHydrateSupport?.({LitElement:Aa});var ja=ka.litElementPolyfillSupport;ja?.({LitElement:Aa}),(ka.litElementVersions??=[]).push(`4.2.2`);var Ma=x`
  :host {
    display: inline-block;
    color: var(--kk-color-neutral-600);
    font-size: x-medium;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--kk-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--kk-spacing-x-small);
    cursor: pointer;
    transition: var(--kk-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--kk-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--kk-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Na=Symbol.for(``),Pa=e=>{if(e?.r===Na)return e?._$litStatic$},Fa=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Na}),Ia=new Map,La=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Pa(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ia.get(e))===void 0&&(o.raw=o,Ia.set(e,t=o)),n=s}return e(t,...n)})(S),Ra={fromAttribute:e=>e??``,toAttribute:e=>e===``?null:e},za=new WeakMap,Ba=new WeakMap,Va=new WeakMap,Ha=new WeakSet,Ua=new WeakMap,Wa=class{constructor(e,t){h(this,`host`,void 0),h(this,`form`,void 0),h(this,`options`,void 0),h(this,`handleFormData`,e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`kk-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&typeof r<`u`&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))}),h(this,`handleFormSubmit`,e=>{let t=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&za.get(this.form)?.forEach(e=>{this.setUserInteracted(e,!0)}),this.form&&!this.form.noValidate&&!t&&!n(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}),h(this,`handleFormReset`,()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ua.set(this.host,[])}),h(this,`handleInteraction`,e=>{let t=Ua.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}),h(this,`checkFormValidity`,()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0}),h(this,`reportFormValidity`,()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0}),this.host=e,e.addController(this),this.options={form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity!=`function`||e.reportValidity(),checkValidity:e=>typeof e.checkValidity!=`function`||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:[`kk-input`],...t}}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),Ua.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ua.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,za.has(this.form)?za.get(this.form).add(this.host):za.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),Ba.has(this.form)||(Ba.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Va.has(this.form)||(Va.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=za.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),Ba.has(this.form)&&(this.form.reportValidity=Ba.get(this.form),Ba.delete(this.form)),Va.has(this.form)&&(this.form.checkValidity=Va.get(this.form),Va.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Ha.add(e):Ha.delete(e),e.requestUpdate()}doAction(e,t){this.form&&Ka(this.form,e,t)}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!Ha.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}},Ga=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});function Ka(e,t,n){let r=document.createElement(`button`);r.type=t,r.style.position=`absolute`,r.style.width=`0`,r.style.height=`0`,r.style.clipPath=`inset(50%)`,r.style.overflow=`hidden`,r.style.whiteSpace=`nowrap`,n&&(r.name=n.name,r.value=n.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{n.hasAttribute(e)&&r.setAttribute(e,n.getAttribute(e))})),e.append(r),r.click(),r.remove()}var w=e=>e??C,{I:qa}=Ea,Ja=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Ya=e=>e.strings===void 0,Xa={},Za=(e,t=Xa)=>e._$AH=t,Qa={name:`default`,resolver:(e,t)=>fe(`assets/icons/${t}/${e}.svg`)},$a=[`bandeiras`,`pagamentos`,`social`].map(e=>({name:e,resolver:t=>fe(`assets/${e}/${t}.svg`)})),eo={caret:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M6 9l6 6l6 -6" /> </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M15 6l-6 6l6 6" /> </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 6l6 6l-6 6" /> </svg>
  `,calendar:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /> <path d="M16 3v4" /> <path d="M8 3v4" /> <path d="M4 11h16" /> <path d="M11 15h1" /> <path d="M12 15v3" /> </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /> <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /> </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /> </svg>
  `,"eye-off":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /> <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /> <path d="M3 3l18 18" /> </svg>
  `,"color-picker":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M11 7l6 6" /> <path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4" /> </svg>
  `,menu:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 6l16 0" /> <path d="M4 12l16 0" /> <path d="M4 18l16 0" /> </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> <path d="M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /> </svg>
  `,user:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /> <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /> </svg>
  `,"player-play":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /> </svg>
  `,"player-pause":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /> </svg>
  `,star:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /> </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 6l-12 12" /> <path d="M6 6l12 12" /> </svg>
  `,"circle-x":`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" /> </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `},to=[Qa,{name:`system`,resolver:e=>e in eo?`data:image/svg+xml,${encodeURIComponent(eo[e])}`:``},...$a],no=[];function ro(e){no.push(e)}function io(e){no=no.filter(t=>t!==e)}function ao(e){return to.find(t=>t.name===e)}var oo=x`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,so=x`
  @layer kobi.components {
    :host {
      box-sizing: border-box;
    }

    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }

    [hidden] {
      display: none !important;
    }
  }
`;function co(e,t){if(t.has(e))throw TypeError(`Cannot initialize the same private elements twice on an object`)}function lo(e,t,n){co(e,t),t.set(e,n)}function uo(e,t,n){if(typeof e==`function`?e===t:e.has(t))return arguments.length<3?t:n;throw TypeError(`Private element is not present on this object`)}function fo(e,t,n){return e.set(uo(e,t),n),n}function po(e,t){return e.get(uo(e,t))}var mo,ho,go,_o,vo={attribute:!0,type:String,converter:Vi,reflect:!1,hasChanged:Hi},yo=(e=vo,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function T(e){return(t,n)=>typeof n==`object`?yo(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function E(e){return T({...e,state:!0,attribute:!1})}var bo=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function D(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return bo(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return bo(n,r,{get(){return a(this)}})}}var xo=new WeakMap,So=(e=`value`)=>(t,n)=>{n.addInitializer(function(){let t={observada:e,destino:String(n.name)},r=xo.get(this);r?r.push(t):xo.set(this,[t])})};function Co(e,t,n){let r=xo.get(e);if(!r)return;let i=e.constructor,a=e;for(let{observada:e,destino:o}of r){let r=i.getPropertyOptions(e);if(t!==(typeof r.attribute==`string`?r.attribute:e))continue;let s=r.converter||Vi,c=(typeof s==`function`?s:s?.fromAttribute??Vi.fromAttribute)(n,r.type);a[e]!==c&&(a[o]=c)}}var wo=new WeakMap;function O(e,t){let n=Array.isArray(e)?e:[e],r=t?.waitUntilFirstUpdate??!1;return(e,t)=>{t.addInitializer(function(){let t={propriedades:n,handler:e,esperarPrimeiroRender:r},i=wo.get(this);i?i.push(t):wo.set(this,[t])})}}function To(e,t){let n=wo.get(e);if(!n)return;let r=e,i=new Set;for(let a=0;a<10;a++){let a=!1;for(let[o,{propriedades:s,handler:c,esperarPrimeiroRender:l}]of n.entries())if(!l||e.hasUpdated)for(let n of s){if(!t.has(n))continue;let s=`${o}:${n}`;if(i.has(s))continue;let l=t.get(n),u=r[n];l!==u&&(i.add(s),a=!0,c.call(e,l,u))}if(!a)return}}var Eo=[`badInput`,`customError`,`patternMismatch`,`rangeOverflow`,`rangeUnderflow`,`stepMismatch`,`tooLong`,`tooShort`,`typeMismatch`,`valueMissing`];function Do(e){return{...Object.fromEntries(Eo.map(t=>[t,e[t]===!0])),valid:!Eo.some(t=>e[t])}}var Oo=(mo=new WeakMap,ho=new WeakMap,go=new WeakMap,_o=new WeakMap,class{constructor(e){h(this,`states`,void 0),lo(this,mo,void 0),lo(this,ho,Do({})),lo(this,go,``),lo(this,_o,void 0),fo(mo,this,e)}get form(){return po(mo,this).closest(`form`)}get validity(){return po(ho,this)}get validationMessage(){return po(ho,this).valid?``:po(go,this)}setFormValue(){}setValidity(e={},t=``,n){fo(ho,this,Do(e)),fo(go,this,t),fo(_o,this,n)}checkValidity(){return po(ho,this).valid?!0:(po(mo,this).dispatchEvent(new Event(`invalid`,{cancelable:!0})),!1)}reportValidity(){if(po(ho,this).valid)return!0;let e=new Event(`invalid`,{cancelable:!0});if(po(mo,this).dispatchEvent(e)){let e=po(_o,this);typeof e?.reportValidity==`function`?e.reportValidity():e?.focus()}return!1}});function ko(e){return typeof e.attachInternals==`function`?e.attachInternals():new Oo(e)}var Ao,jo,Mo,No,Po,Fo,Io,k=class extends (Mo=Aa,jo=[T()],Ao=[T()],Mo){constructor(){super(),y(this,`_internals`),b(this,Po,_(No,8,this)),_(No,11,this),b(this,Fo,_(No,12,this)),_(No,15,this),b(this,Io,!1),y(this,`initialReflectedProperties`,new Map),this._internals=ko(this),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...t});return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v${t.version}`),`version`in r&&r.version&&(a=` v${r.version}`),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}addState(e){this._internals.states&&this._internals.states.add(e.startsWith(`--`)?e:`--${e}`)}removeState(e){this._internals.states&&this._internals.states.delete(e.startsWith(`--`)?e:`--${e}`)}toggleState(e,t){let n=e.startsWith(`--`)?e:`--${e}`;this._internals.states&&(typeof t==`boolean`?t?this._internals.states.add(n):this._internals.states.delete(n):this._internals.states.has(n)?this._internals.states.delete(n):this._internals.states.add(n))}attributeChangedCallback(e,t,n){Ee(this,Io)||(this.constructor.elementProperties.forEach((e,t)=>{let n=t;e.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),De(this,Io,!0)),Co(this,e,n),super.attributeChangedCallback(e,t,n)}update(e){To(this,e),super.update(e)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{let r=n;e.has(r)&&this[r]==null&&(this[r]=t)})}};No=be(Mo),Po=new WeakMap,Fo=new WeakMap,Io=new WeakMap,v(No,4,`dir`,jo,k,Po),v(No,4,`lang`,Ao,k,Fo),g(No,k),y(k,`version`,`0.0.0`),y(k,`dependencies`,{});var Lo=Symbol(),Ro=Symbol(),zo,Bo=new Map,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,A,Xo,Zo,Qo,$o,es,ts,ns=class extends (Yo=k,Jo=[E()],qo=[T({reflect:!0})],Ko=[T()],Go=[T()],Wo=[T({reflect:!0})],Uo=[T({reflect:!0})],Ho=[O(`label`)],Vo=[O([`name`,`src`,`library`,`variant`])],Yo){constructor(){super(...arguments),_(A,5,this),y(this,`initialRender`,!1),b(this,Xo,_(A,8,this,null)),_(A,11,this),b(this,Zo,_(A,12,this)),_(A,15,this),b(this,Qo,_(A,16,this)),_(A,19,this),b(this,$o,_(A,20,this,``)),_(A,23,this),b(this,es,_(A,24,this,`default`)),_(A,27,this),b(this,ts,_(A,28,this,`outline`)),_(A,31,this)}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=S`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Lo:Ro}catch{return Ro}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Lo;zo||=new DOMParser;let r=zo.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Lo}catch{return Lo}}connectedCallback(){super.connectedCallback(),ro(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),io(this)}getIconSource(){let e=ao(this.library);return this.name&&e?{url:e.resolver(this.name,this.variant),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?ao(this.library):void 0;if(!e){this.svg=null;return}let r=Bo.get(e);if(r||(r=this.resolveIcon(e,n),Bo.set(e,r)),!this.initialRender)return;let i=await r;if(i===Ro&&Bo.delete(e),e===this.getIconSource().url){if(Ja(i)){if(this.svg=i,n){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof n.mutator==`function`&&e&&n.mutator(e)}return}switch(i){case Ro:case Lo:this.svg=null,this.emit(`kk-error`);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg),this.emit(`kk-load`)}}}render(){return this.svg}};A=be(Yo),Xo=new WeakMap,Zo=new WeakMap,Qo=new WeakMap,$o=new WeakMap,es=new WeakMap,ts=new WeakMap,v(A,4,`svg`,Jo,ns,Xo),v(A,4,`name`,qo,ns,Zo),v(A,4,`src`,Ko,ns,Qo),v(A,4,`label`,Go,ns,$o),v(A,4,`library`,Wo,ns,es),v(A,4,`variant`,Uo,ns,ts),v(A,1,`handleLabelChange`,Ho,ns),v(A,1,`setIcon`,Vo,ns),g(A,ns),y(ns,`styles`,[so,oo]);var rs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},is=e=>(...t)=>({_$litDirective$:e,values:t}),as=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},j=is(class extends as{constructor(e){if(super(e),e.type!==rs.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return fa}}),os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,M,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns=class extends (ys=k,vs=[D(`.icon-button`)],_s=[E()],gs=[T()],hs=[T()],ms=[T()],ps=[T()],fs=[T()],ds=[T()],us=[T()],ls=[T()],cs=[T({type:Boolean,reflect:!0})],ss=[T()],os=[T({reflect:!0})],ys){constructor(){super(...arguments),b(this,bs,_(M,8,this)),_(M,11,this),b(this,xs,_(M,12,this,!1)),_(M,15,this),b(this,Ss,_(M,16,this)),_(M,19,this),b(this,Cs,_(M,20,this)),_(M,23,this),b(this,ws,_(M,24,this,`outline`)),_(M,27,this),b(this,Ts,_(M,28,this)),_(M,31,this),b(this,Es,_(M,32,this)),_(M,35,this),b(this,Ds,_(M,36,this)),_(M,39,this),b(this,Os,_(M,40,this)),_(M,43,this),b(this,ks,_(M,44,this,``)),_(M,47,this),b(this,As,_(M,48,this,!1)),_(M,51,this),b(this,js,_(M,52,this,`button`)),_(M,55,this),b(this,Ms,_(M,56,this)),_(M,59,this)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleClick(e){if(this.disabled)e.preventDefault(),e.stopPropagation();else if(this.type!==`button`){let e=this.form?this.getRootNode().querySelector(`#${this.form}`):this.closest(`form`);e&&Ka(e,this.type)}}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?Fa`a`:Fa`button`;return La`
      <${t}
        part="base"
        class=${j({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${w(e?void 0:this.disabled)}
        type=${w(e?void 0:this.type)}
        href=${w(e?this.href:void 0)}
        target=${w(e?this.target:void 0)}
        download=${w(e?this.download:void 0)}
        rel=${w(e&&this.target?`noreferrer noopener`:void 0)}
        role=${w(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <kk-icon
          class="icon-button__icon"
          name=${w(this.name)}
          library=${w(this.library)}
          variant=${this.variant}
          src=${w(this.src)}
          aria-hidden="true"
        ></kk-icon>
      </${t}>
    `}};M=be(ys),bs=new WeakMap,xs=new WeakMap,Ss=new WeakMap,Cs=new WeakMap,ws=new WeakMap,Ts=new WeakMap,Es=new WeakMap,Ds=new WeakMap,Os=new WeakMap,ks=new WeakMap,As=new WeakMap,js=new WeakMap,Ms=new WeakMap,v(M,4,`button`,vs,Ns,bs),v(M,4,`hasFocus`,_s,Ns,xs),v(M,4,`name`,gs,Ns,Ss),v(M,4,`library`,hs,Ns,Cs),v(M,4,`variant`,ms,Ns,ws),v(M,4,`src`,ps,Ns,Ts),v(M,4,`href`,fs,Ns,Es),v(M,4,`target`,ds,Ns,Ds),v(M,4,`download`,us,Ns,Os),v(M,4,`label`,ls,Ns,ks),v(M,4,`disabled`,cs,Ns,As),v(M,4,`type`,ss,Ns,js),v(M,4,`form`,os,Ns,Ms),g(M,Ns),y(Ns,`styles`,[so,Ma]),y(Ns,`dependencies`,{"kk-icon":ns});var Ps=class{constructor(e,...t){h(this,`host`,void 0),h(this,`slotNames`,[]),h(this,`handleSlotChange`,e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}),this.host=e,e.addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`kk-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}};function Fs(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}function Is(){return document.documentElement.classList.contains(`kk-a11y-movimento`)?!0:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}async function Ls(e,...t){await e.updateComplete,await Promise.allSettled(t.flatMap(e=>e.getAnimations()).map(e=>e.finished))}var Rs=x`
  :host {
    display: contents;

    /* A margem zera aqui, e a parte base a herda de quem usa. */
    margin: 0;

    /*
     * A cor da variante, e a tinta que sai dela. O padrão é o da variante padrão
     * do componente (primary): as cinco classes .alert--* trocam só esta linha, e
     * a barra, o ícone, a contagem regressiva e a tinta seguem juntos por
     * construção. Um token por peça seria uma chance a mais de eles discordarem.
     *
     * **A tinta é chapada, e a barra é lateral.** Foi o desenho pedido nas quatro
     * referências de packages/kit/referencias/: um bloco de aviso é lido de
     * relance, e um véu que desbota tira do corpo justamente a cor que diz de que
     * tipo de aviso se trata — a metade de baixo de um alerta longo ficava igual à
     * de um alerta de outra variante. A barra à esquerda corre a altura inteira e
     * responde a mesma pergunta sem depender de o topo estar visível.
     *
     * O kk-card e o kk-stat continuam com a faixa no topo e o véu que desce: lá o
     * conteúdo é painel, não aviso, e o degradê é o que separa o cabeçalho do
     * corpo. É por isso que a força da tinta ainda vem do tema — o
     * --kk-tint-strength é o mesmo dos três — e só o alcance saiu: sem degradê
     * não há até onde descer.
     */
    --kk-alert-accent-color: var(--kk-color-primary-600);
    --kk-alert-tint-strength: var(--kk-tint-strength);
  }

  .alert {
    /*
     * A mistura é com o fundo do painel, e não com transparent: chapada, ela é
     * uma cor só, e uma cor com alfa por cima de um fundo que já pode ser
     * translúcido (o alerta flutuante empilhado) mudaria de tom conforme o que
     * estivesse atrás dele.
     */
    --kk-alert-tint-color: color-mix(
      in oklab,
      var(--kk-alert-accent-color) var(--kk-alert-tint-strength),
      var(--kk-panel-background-color)
    );

    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--kk-alert-tint-color);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-inline-start-width: calc(var(--kk-panel-border-width) * 3);
    border-inline-start-color: var(--kk-alert-accent-color);
    border-radius: var(--kk-border-radius-medium);
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-normal);
    line-height: 1.6;
    color: var(--kk-color-neutral-700);
    margin: inherit;
    overflow: hidden;

    /*
     * Abrir e fechar é CSS: opacidade e escala, com o display saindo de none pelo
     * allow-discrete — ele entra no começo ao abrir e só sai no FIM ao fechar — e o
     * @starting-style dando o ponto de partida. Ele vale também para o PRIMEIRO desenho,
     * e é isso que a classe alert--transicao segura: um <kk-alert open> nasceria a 80 % e
     * cresceria à vista — e o botão de fechar andaria debaixo de quem já foi clicá-lo. Ela
     * só entra depois do primeiro desenho, na primeira troca de open. Quem espera o fim é
     * o componente, pelo getAnimations().
     */
    opacity: 1;
    scale: 1;
    transition:
      opacity var(--kk-alert-transition, var(--kk-transition-medium)) ease,
      scale var(--kk-alert-transition, var(--kk-transition-medium)) ease,
      display var(--kk-alert-transition, var(--kk-transition-medium)) allow-discrete;

    /*
     * NÃO declare container-type aqui. Como o :host é display: contents, é este .alert
     * que participa do layout do avô — e com contenção de tamanho inline ele para de
     * tirar a largura do próprio conteúdo. Em contexto de bloco ainda funcionava, mas
     * dentro de um flex o alerta encolhia para 2px e virava um risco na tela. Vale o
     * mesmo raciocínio do card.styles.ts, onde isto está explicado por extenso.
     */
  }

  .alert:not(.alert--open) {
    display: none;
    opacity: 0;
    scale: 0.8;
  }

  @starting-style {
    .alert--open.alert--transicao {
      opacity: 0;
      scale: 0.8;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .alert {
      transition: none;
    }
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-font-size-large);
    padding-inline-start: var(--kk-spacing-large);
    color: var(--kk-alert-accent-color);
  }

  .alert--has-countdown {
    border-block-end: none;
  }

  .alert--primary {
    --kk-alert-accent-color: var(--kk-color-primary-600);
  }

  .alert--success {
    --kk-alert-accent-color: var(--kk-color-success-600);
  }

  .alert--neutral {
    --kk-alert-accent-color: var(--kk-color-neutral-600);
  }

  .alert--warning {
    --kk-alert-accent-color: var(--kk-color-warning-600);
  }

  .alert--danger {
    --kk-alert-accent-color: var(--kk-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--kk-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-font-size-medium);
    margin-inline-end: var(--kk-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    width: 100%;
    height: calc(var(--kk-panel-border-width) * 3);
    background-color: var(--kk-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
    background-color: var(--kk-alert-accent-color);
  }

  .alert__timer {
    display: none;
  }
`,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,N,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc=class e extends (Xs=k,Ys=[D(`[part~="base"]`)],Js=[D(`.alert__countdown-elapsed`)],qs=[T({type:Boolean,reflect:!0})],Ks=[T({type:Boolean,reflect:!0})],Gs=[T({reflect:!0})],Ws=[T({type:Number})],Us=[T({type:String,reflect:!0})],Hs=[E()],Vs=[E()],Bs=[O(`open`,{waitUntilFirstUpdate:!0})],zs=[O(`duration`)],Xs){constructor(){super(...arguments),_(N,5,this),y(this,`autoHideTimeout`),y(this,`remainingTimeInterval`),y(this,`countdownAnimation`),y(this,`hasSlotController`,new Ps(this,`icon`,`suffix`)),y(this,`localize`,new hi(this)),b(this,Zs,_(N,8,this)),_(N,11,this),b(this,Qs,_(N,12,this)),_(N,15,this),b(this,$s,_(N,16,this,!1)),_(N,19,this),b(this,ec,_(N,20,this,!1)),_(N,23,this),b(this,tc,_(N,24,this,`primary`)),_(N,27,this),b(this,nc,_(N,28,this,1/0)),_(N,31,this),b(this,rc,_(N,32,this)),_(N,35,this),b(this,ic,_(N,36,this,this.duration)),_(N,39,this),b(this,ac,_(N,40,this,!1)),_(N,43,this)}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`kk-toast-stack`}),this.currentToastStack}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){this.countdownAnimation?.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),this.countdownAnimation?.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){this.transicao=!0,this.open?(this.emit(`kk-show`),this.duration<1/0&&this.restartAutoHide(),await Ls(this,this.base),this.emit(`kk-after-show`)):(bi(this),this.emit(`kk-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Ls(this,this.base),this.emit(`kk-after-hide`))}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,xi(this,`kk-after-show`)}async hide(){if(this.open)return this.open=!1,xi(this,`kk-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`kk-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`kk-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return S`
      <div
        part="base"
        class=${j({alert:!0,"alert--open":this.open,"alert--transicao":this.transicao,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?S`
              <kk-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></kk-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?S`
              <div
                class=${j({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};N=be(Xs),Zs=new WeakMap,Qs=new WeakMap,$s=new WeakMap,ec=new WeakMap,tc=new WeakMap,nc=new WeakMap,rc=new WeakMap,ic=new WeakMap,ac=new WeakMap,v(N,4,`base`,Ys,oc,Zs),v(N,4,`countdownElement`,Js,oc,Qs),v(N,4,`open`,qs,oc,$s),v(N,4,`closable`,Ks,oc,ec),v(N,4,`variant`,Gs,oc,tc),v(N,4,`duration`,Ws,oc,nc),v(N,4,`countdown`,Us,oc,rc),v(N,4,`remainingTime`,Hs,oc,ic),v(N,4,`transicao`,Vs,oc,ac),v(N,1,`handleOpenChange`,Bs,oc),v(N,1,`handleDurationChange`,zs,oc),g(N,oc),y(oc,`styles`,[so,Rs]),y(oc,`dependencies`,{"kk-icon-button":Ns}),y(oc,`currentToastStack`),oc.define(`kk-alert`);var sc=x`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--kk-font-weight-semibold);
    letter-spacing: var(--kk-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--kk-border-radius-small);
    border: solid 1px var(--kk-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Modificadores de variante */
  .badge--primary {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--success {
    background-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  /* Modificador pill */
  .badge--pill {
    border-radius: var(--kk-border-radius-pill);
  }

  /* Modificador pulse */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --kk-badge-pulse-color: var(--kk-color-primary-600);
  }

  .badge--pulse.badge--success {
    --kk-badge-pulse-color: var(--kk-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --kk-badge-pulse-color: var(--kk-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --kk-badge-pulse-color: var(--kk-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --kk-badge-pulse-color: var(--kk-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--kk-badge-pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,cc,lc,uc,dc,fc,pc,mc,hc,gc=class extends (dc=k,uc=[T({reflect:!0})],lc=[T({type:Boolean,reflect:!0})],cc=[T({type:Boolean,reflect:!0})],dc){constructor(){super(...arguments),b(this,pc,_(fc,8,this,`primary`)),_(fc,11,this),b(this,mc,_(fc,12,this,!1)),_(fc,15,this),b(this,hc,_(fc,16,this,!1)),_(fc,19,this)}render(){return S`
      <span
        part="base"
        class=${j({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};fc=be(dc),pc=new WeakMap,mc=new WeakMap,hc=new WeakMap,v(fc,4,`variant`,uc,gc,pc),v(fc,4,`pill`,lc,gc,mc),v(fc,4,`pulse`,cc,gc,hc),g(fc,gc),y(gc,`styles`,[so,sc]),gc.define(`kk-badge`);var _c=x`
  :host {
    --kk-spinner-track-width: 2px;
    --kk-spinner-track-color: var(--kk-color-neutral-agnostic);
    --kk-spinner-indicator-color: var(--kk-color-primary-600);
    --kk-spinner-speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--kk-spinner-track-width);
    r: calc(0.5em - var(--kk-spinner-track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--kk-spinner-track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--kk-spinner-indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--kk-spinner-speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,vc=class extends k{constructor(...e){super(...e),h(this,`localize`,new hi(this))}render(){return S`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}},yc=(h(vc,`styles`,[so,_c]),vc),bc=x`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--kk-input-border-width);
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--kk-transition-x-fast) background-color,
      var(--kk-transition-x-fast) color,
      var(--kk-transition-x-fast) border,
      var(--kk-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  :host(:state(--disabled)) .button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Desabilitado, os eventos de mouse dos filhos não sobem. */
  :host(:state(--disabled)) .button * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(kk-icon) {
    vertical-align: -2px;
  }

  /*
   * Botão padrão
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-input-border-color);
    color: var(--kk-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:hover {
    background-color: var(--kk-color-primary-50);
    border-color: var(--kk-color-primary-300);
    color: var(--kk-color-primary-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--default:active {
    background-color: var(--kk-color-primary-100);
    border-color: var(--kk-color-primary-400);
    color: var(--kk-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:hover {
    background-color: var(--kk-color-primary-500);
    border-color: var(--kk-color-primary-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--primary:active {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--kk-color-success-600);
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:hover {
    background-color: var(--kk-color-success-500);
    border-color: var(--kk-color-success-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--success:active {
    background-color: var(--kk-color-success-600);
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--kk-color-neutral-600);
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:hover {
    background-color: var(--kk-color-text-muted);
    border-color: var(--kk-color-text-muted);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--neutral:active {
    background-color: var(--kk-color-neutral-600);
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--kk-color-warning-600);
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:hover {
    background-color: var(--kk-color-warning-500);
    border-color: var(--kk-color-warning-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--warning:active {
    background-color: var(--kk-color-warning-600);
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--kk-color-danger-600);
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:hover {
    background-color: var(--kk-color-danger-500);
    border-color: var(--kk-color-danger-500);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--standard.button--danger:active {
    background-color: var(--kk-color-danger-600);
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  /*
   * Botão de contorno
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--kk-input-border-color);
    color: var(--kk-color-neutral-700);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default.button--checked {
    border-color: var(--kk-color-primary-600);
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--default:active {
    border-color: var(--kk-color-primary-700);
    background-color: var(--kk-color-primary-700);
    color: var(--kk-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--kk-color-primary-600);
    color: var(--kk-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary.button--checked {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--primary:active {
    border-color: var(--kk-color-primary-700);
    background-color: var(--kk-color-primary-700);
    color: var(--kk-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--kk-color-success-600);
    color: var(--kk-color-success-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success.button--checked {
    background-color: var(--kk-color-success-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--success:active {
    border-color: var(--kk-color-success-700);
    background-color: var(--kk-color-success-700);
    color: var(--kk-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral.button--checked {
    background-color: var(--kk-color-neutral-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--neutral:active {
    border-color: var(--kk-color-neutral-700);
    background-color: var(--kk-color-neutral-700);
    color: var(--kk-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--kk-color-warning-600);
    color: var(--kk-color-warning-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning.button--checked {
    background-color: var(--kk-color-warning-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--warning:active {
    border-color: var(--kk-color-warning-700);
    background-color: var(--kk-color-warning-700);
    color: var(--kk-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--kk-color-danger-600);
    color: var(--kk-color-danger-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger.button--checked {
    background-color: var(--kk-color-danger-600);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--outline.button--danger:active {
    border-color: var(--kk-color-danger-700);
    background-color: var(--kk-color-danger-700);
    color: var(--kk-color-neutral-0);
  }

  @media (forced-colors: active) {
    :host(:not(:state(--disabled))) .button.button--outline.button--checked {
      outline: solid 2px transparent;
    }
  }

  /*
   * Botão de texto
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-600);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:hover {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:focus-visible {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-500);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--text:active {
    background-color: transparent;
    border-color: transparent;
    color: var(--kk-color-primary-700);
  }

  /*
   * Modificadores de tamanho
   */

  .button--small {
    height: auto;
    min-height: var(--kk-input-height-small);
    font-size: var(--kk-button-font-size-small);
    line-height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--kk-input-height-medium);
    font-size: var(--kk-button-font-size-medium);
    line-height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--kk-input-height-large);
    font-size: var(--kk-button-font-size-large);
    line-height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-large);
  }

  /*
   * Modificador pill
   */

  .button--pill.button--small {
    border-radius: var(--kk-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--kk-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--kk-input-height-large);
  }

  /*
   * Modificador circle
   */

  .button--circle {
    padding-inline: 0;
  }

  .button--circle.button--small {
    width: var(--kk-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--kk-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--kk-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Modificador caret
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Modificador loading
   */

  :host(:state(--loading)) .button {
    position: relative;
    cursor: wait;
  }

  :host(:state(--loading)) .button .button__prefix,
  :host(:state(--loading)) .button .button__label,
  :host(:state(--loading)) .button .button__suffix,
  :host(:state(--loading)) .button .button__caret {
    visibility: hidden;
  }

  :host(:state(--loading)) .button kk-spinner {
    --kk-spinner-indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    inset-block-start: calc(50% - 0.5em);
    inset-inline-start: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(kk-badge) {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(kk-badge) {
    inset-inline-end: auto;
    inset-inline-start: 0;
    translate: -50% -50%;
  }

  /*
   * Espaçamento dos botões
   */

  .button--has-label.button--small .button__label {
    padding-inline: var(--kk-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding-inline: var(--kk-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding-inline: var(--kk-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--kk-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--kk-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--kk-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--kk-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--kk-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--kk-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--kk-spacing-small);
  }

  /*
   * Modificador swipe
   *
   * Placa de ícone na cor da variante encostada na borda, corpo claro, e um
   * painel da mesma cor que entra deslizando da esquerda no hover.
   *
   * swipe é FORMA, não é cor: quem escolhe a cor continua sendo o variant. Daí
   * o alias local — os seletores por variante trocam só ele, e o resto do bloco
   * não repete nada.
   *
   * Os seletores levam .button junto (.button.button--swipe) porque as regras
   * de variant lá em cima têm duas classes; sem isso o swipe perde a disputa
   * de especificidade em vez de vencer por vir depois.
   */

  .button--swipe {
    --kk-button-accent-color: var(--kk-color-primary-600);
  }

  .button--swipe.button--success {
    --kk-button-accent-color: var(--kk-color-success-600);
  }

  .button--swipe.button--neutral {
    --kk-button-accent-color: var(--kk-color-neutral-600);
  }

  .button--swipe.button--warning {
    --kk-button-accent-color: var(--kk-color-warning-600);
  }

  .button--swipe.button--danger {
    --kk-button-accent-color: var(--kk-color-danger-600);
  }

  .button.button--swipe {
    position: relative;
    overflow: hidden;
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-700);
    box-shadow: var(--kk-shadow-large);
    /*
     * A cor do rótulo acompanha o painel: no x-fast herdado o texto ficaria
     * branco no branco enquanto o painel ainda estivesse a caminho.
     */
    transition:
      var(--kk-transition-x-fast) background-color,
      var(--kk-transition-x-fast) border-color,
      var(--kk-transition-medium) color;
  }

  /* A placa encosta na borda — o respiro do prefixo é dela, não do botão. */
  .button.button--swipe.button--has-prefix {
    padding-inline-start: 0;
  }

  .button--swipe .button__decor {
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: var(--kk-button-accent-color);
    translate: -100% 0;
    transition: var(--kk-transition-medium) translate;
  }

  /* Tudo o que é conteúdo passa por cima do painel. */
  .button--swipe .button__prefix,
  .button--swipe .button__label,
  .button--swipe .button__suffix,
  .button--swipe .button__caret,
  .button--swipe kk-spinner {
    position: relative;
    z-index: 1;
  }

  .button--swipe .button__prefix {
    align-self: stretch;
    justify-content: center;
    padding-inline: var(--kk-spacing-small);
    background-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-0);
  }

  .button--swipe.button--has-label .button__label,
  .button--swipe.button--has-prefix .button__label {
    padding-inline: var(--kk-spacing-small) var(--kk-spacing-large);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:hover,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button.button--swipe:focus-visible {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-button-accent-color);
    color: var(--kk-color-neutral-0);
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:hover .button__decor,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--swipe:focus-visible .button__decor {
    translate: 0 0;
  }

  /*
   * Modificador expand
   *
   * Fechado é um círculo com o ícone do slot prefix; no hover — e no foco de
   * teclado, que o original não previa — cresce em pílula, o ícone sobe para
   * fora de vista e o rótulo ocupa o lugar. O rótulo está sempre no DOM, só
   * recortado: quem usa leitor de tela ouve o botão fechado do mesmo jeito.
   *
   * A largura não é animada — não há como transicionar até "auto". Quem cresce
   * é a coluna do rótulo (0fr → 1fr) e o botão vai atrás; o min-width segura o
   * círculo enquanto ela está fechada. É também por isso que o ícone sai do
   * fluxo: no estado fechado ele não pode ter voto na largura.
   */

  .button.button--expand {
    position: relative;
    overflow: hidden;
    padding-inline: 0;
    /* Raio de pílula numa caixa quadrada é um círculo — sem animar o raio. */
    border-radius: var(--kk-border-radius-pill);
  }

  .button--expand.button--small {
    min-width: var(--kk-input-height-small);
  }

  .button--expand.button--medium {
    min-width: var(--kk-input-height-medium);
  }

  .button--expand.button--large {
    min-width: var(--kk-input-height-large);
  }

  /* O circle fixa a largura e esconde o prefixo; com expand os dois têm de ceder. */
  .button--expand.button--circle {
    width: auto;
  }

  .button--expand .button__prefix {
    display: flex;
    position: absolute;
    inset: 0;
    justify-content: center;
    transition: var(--kk-transition-medium) translate;
  }

  .button--expand .button__reveal {
    display: grid;
    grid-template-columns: 0fr;
    padding-inline: 0;
    transition:
      var(--kk-transition-medium) grid-template-columns,
      var(--kk-transition-medium) padding-inline;
  }

  .button--expand .button__label {
    min-width: 0;
    overflow: hidden;
  }

  /* O respiro do rótulo é do invólucro, que fecha junto com a coluna. */
  .button--expand.button--has-label .button__label,
  .button--expand.button--has-prefix .button__label {
    padding-inline: 0;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__prefix,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__prefix {
    translate: 0 -200%;
  }

  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:hover .button__reveal,
  :host(:not(:state(--disabled)):not(:state(--loading))) .button--expand:focus-visible .button__reveal {
    grid-template-columns: 1fr;
    padding-inline: var(--kk-spacing-large);
  }

  /*
   * Sem movimento: os dois estados continuam existindo, o caminho entre eles é
   * que deixa de ser desenhado.
   */
  @media (prefers-reduced-motion: reduce) {
    .button--swipe .button__decor,
    .button--expand .button__prefix,
    .button--expand .button__reveal {
      transition: none;
    }
  }

  /*
   * O grupo aceita botões de todo tipo (com tooltip, gatilho de dropdown...), e por isso o botão nem
   * sempre é filho direto do grupo — o ::slotted não o alcança. O grupo põe estas classes nos
   * botões, e a folha as desenha aqui.
   */

  :host([data-kk-button-group__button--first]:not([data-kk-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-kk-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-kk-button-group__button--last]:not([data-kk-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Todos menos o primeiro. */
  :host([data-kk-button-group__button]:not([data-kk-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--kk-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-kk-button-group__button]:not(
          [data-kk-button-group__button--first],
          [data-kk-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    border-inline-start: solid 1px var(--kk-color-neutral-agnostic-strong);
    mix-blend-mode: multiply;
  }

  /* O botão sob o ponteiro, com foco ou marcado sobe, para o anel de foco não ficar cortado. */
  :host([data-kk-button-group__button--hover]) {
    z-index: 1;
  }

  /* Foco e marcado ficam sempre por cima. */
  :host([data-kk-button-group__button--focus]),
  :host([data-kk-button-group__button][checked]) {
    z-index: 2;
  }
`;function xc(e){return e.validity.valid?``:e.validationMessage===``?` `:e.validationMessage}function Sc(e,t){let n=new CustomEvent(`kk-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||n.preventDefault(),e.dispatchEvent(n)||t?.preventDefault()}var Cc=class{constructor(e,t){h(this,`host`,void 0),h(this,`interacaoEm`,void 0),h(this,`vistos`,new Set),h(this,`interagiu`,!1),h(this,`aoInvalidar`,e=>{this.conferindo||this.marcarInteragido(),Sc(this.host,e)}),h(this,`conferindo`,!1),h(this,`aoInteragir`,e=>{this.vistos.add(e.type),!(this.vistos.size<this.interacaoEm.length)&&this.marcarInteragido()}),this.host=e,this.interacaoEm=t?.interacaoEm??[`kk-blur`,`kk-input`],e.addController(this)}hostConnected(){this.host.addEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.addEventListener(e,this.aoInteragir)}hostDisconnected(){this.host.removeEventListener(`invalid`,this.aoInvalidar);for(let e of this.interacaoEm)this.host.removeEventListener(e,this.aoInteragir)}conferir(e){this.conferindo=!0;try{return e()}finally{this.conferindo=!1}}marcarInteragido(){this.interagiu||(this.interagiu=!0,this.host.updateValidity())}esquecerInteracao(){this.vistos.clear(),this.interagiu=!1}aplicar(e,t){let n=this.host.required===!0;t(`--required`,n),t(`--optional`,!n),t(`--valid`,e),t(`--invalid`,!e),t(`--user-valid`,e&&this.interagiu),t(`--user-invalid`,!e&&this.interagiu)}},wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,P,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,F=class extends ($c=k,Qc=[D(`.button`)],Zc=[E()],Xc=[E()],Yc=[T()],Jc=[T({reflect:!0})],qc=[T({reflect:!0})],Kc=[T({type:Boolean,reflect:!0})],Gc=[T({type:Boolean,reflect:!0})],Wc=[T({type:Boolean,reflect:!0})],Uc=[T({type:Boolean,reflect:!0})],Hc=[T({type:Boolean,reflect:!0})],Vc=[T({type:Boolean,reflect:!0})],Bc=[T({type:Boolean,reflect:!0})],zc=[T({type:Boolean,reflect:!0})],Rc=[T()],Lc=[T()],Ic=[T()],Fc=[T()],Pc=[T()],Nc=[T()],Mc=[T()],jc=[T()],Ac=[T({attribute:`formaction`})],kc=[T({attribute:`formenctype`})],Oc=[T({attribute:`formmethod`})],Dc=[T({attribute:`formnovalidate`,type:Boolean})],Ec=[T({attribute:`formtarget`})],Tc=[O(`disabled`,{waitUntilFirstUpdate:!0})],wc=[O(`loading`,{waitUntilFirstUpdate:!0})],$c){constructor(){super(...arguments),_(P,5,this),y(this,`formControlController`,new Wa(this,{assumeInteractionOn:[`click`]})),y(this,`hasSlotController`,new Ps(this,`[default]`,`prefix`,`suffix`)),y(this,`localize`,new hi(this)),b(this,el,_(P,8,this)),_(P,11,this),b(this,tl,_(P,12,this,!1)),_(P,15,this),b(this,nl,_(P,16,this,!1)),_(P,19,this),b(this,rl,_(P,20,this,``)),_(P,23,this),b(this,il,_(P,24,this,`default`)),_(P,27,this),b(this,al,_(P,28,this,`medium`)),_(P,31,this),b(this,ol,_(P,32,this,!1)),_(P,35,this),b(this,sl,_(P,36,this,!1)),_(P,39,this),b(this,cl,_(P,40,this,!1)),_(P,43,this),b(this,ll,_(P,44,this,!1)),_(P,47,this),b(this,ul,_(P,48,this,!1)),_(P,51,this),b(this,dl,_(P,52,this,!1)),_(P,55,this),b(this,fl,_(P,56,this,!1)),_(P,59,this),b(this,pl,_(P,60,this,!1)),_(P,63,this),b(this,ml,_(P,64,this,`button`)),_(P,67,this),b(this,hl,_(P,68,this,``)),_(P,71,this),b(this,gl,_(P,72,this,``)),_(P,75,this),b(this,_l,_(P,76,this,``)),_(P,79,this),b(this,vl,_(P,80,this)),_(P,83,this),b(this,yl,_(P,84,this,`noreferrer noopener`)),_(P,87,this),b(this,bl,_(P,88,this)),_(P,91,this),b(this,xl,_(P,92,this)),_(P,95,this),b(this,Sl,_(P,96,this)),_(P,99,this),b(this,Cl,_(P,100,this)),_(P,103,this),b(this,wl,_(P,104,this)),_(P,107,this),b(this,Tl,_(P,108,this)),_(P,111,this),b(this,El,_(P,112,this)),_(P,115,this)}get validity(){return this.isButton()?this.button.validity:Ga}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),Sc(this,e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.isButton()&&this.formControlController.updateValidity()}handleLoadingChange(){this.toggleState(`--loading`,this.loading)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?Fa`a`:Fa`button`;return La`
      <${t}
        part="base"
        class=${j({button:!0,"button--default":this.variant==="default","button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--swipe":this.swipe,"button--expand":this.expand,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${w(e?void 0:this.disabled)}
        type=${w(e?void 0:this.type)}
        title=${this.title}
        name=${w(e?void 0:this.name)}
        value=${w(e?void 0:this.value)}
        href=${w(e&&!this.disabled?this.href:void 0)}
        target=${w(e?this.target:void 0)}
        download=${w(e?this.download:void 0)}
        rel=${w(e?this.rel:void 0)}
        role=${w(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        ${this.swipe?La`<span part="decor" class="button__decor"></span>`:``}
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        ${this.expand?La`<span class="button__reveal"><slot part="label" class="button__label"></slot></span>`:La`<slot part="label" class="button__label"></slot>`}
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?La` <kk-icon part="caret" class="button__caret" library="system" name="caret"></kk-icon> `:``}
        ${this.loading?La`<kk-spinner part="spinner"></kk-spinner>`:``}
      </${t}>
    `}};P=be($c),el=new WeakMap,tl=new WeakMap,nl=new WeakMap,rl=new WeakMap,il=new WeakMap,al=new WeakMap,ol=new WeakMap,sl=new WeakMap,cl=new WeakMap,ll=new WeakMap,ul=new WeakMap,dl=new WeakMap,fl=new WeakMap,pl=new WeakMap,ml=new WeakMap,hl=new WeakMap,gl=new WeakMap,_l=new WeakMap,vl=new WeakMap,yl=new WeakMap,bl=new WeakMap,xl=new WeakMap,Sl=new WeakMap,Cl=new WeakMap,wl=new WeakMap,Tl=new WeakMap,El=new WeakMap,v(P,4,`button`,Qc,F,el),v(P,4,`hasFocus`,Zc,F,tl),v(P,4,`invalid`,Xc,F,nl),v(P,4,`title`,Yc,F,rl),v(P,4,`variant`,Jc,F,il),v(P,4,`size`,qc,F,al),v(P,4,`caret`,Kc,F,ol),v(P,4,`disabled`,Gc,F,sl),v(P,4,`loading`,Wc,F,cl),v(P,4,`outline`,Uc,F,ll),v(P,4,`pill`,Hc,F,ul),v(P,4,`circle`,Vc,F,dl),v(P,4,`swipe`,Bc,F,fl),v(P,4,`expand`,zc,F,pl),v(P,4,`type`,Rc,F,ml),v(P,4,`name`,Lc,F,hl),v(P,4,`value`,Ic,F,gl),v(P,4,`href`,Fc,F,_l),v(P,4,`target`,Pc,F,vl),v(P,4,`rel`,Nc,F,yl),v(P,4,`download`,Mc,F,bl),v(P,4,`form`,jc,F,xl),v(P,4,`formAction`,Ac,F,Sl),v(P,4,`formEnctype`,kc,F,Cl),v(P,4,`formMethod`,Oc,F,wl),v(P,4,`formNoValidate`,Dc,F,Tl),v(P,4,`formTarget`,Ec,F,El),v(P,1,`handleDisabledChange`,Tc,F),v(P,1,`handleLoadingChange`,wc,F),g(P,F),y(F,`styles`,[so,bc]),y(F,`dependencies`,{"kk-icon":ns,"kk-spinner":yc}),F.define(`kk-button`);var Dl=x`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    color: var(--kk-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --kk-checkbox-toggle-size: var(--kk-toggle-size-small);
    font-size: var(--kk-input-font-size-small);
  }

  .checkbox--medium {
    --kk-checkbox-toggle-size: var(--kk-toggle-size-medium);
    font-size: var(--kk-input-font-size-medium);
  }

  .checkbox--large {
    --kk-checkbox-toggle-size: var(--kk-toggle-size-large);
    font-size: var(--kk-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--kk-checkbox-toggle-size);
    height: var(--kk-checkbox-toggle-size);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
    border-radius: 2px;
    background-color: var(--kk-input-background-color);
    color: var(--kk-color-neutral-0);
    transition:
      var(--kk-transition-fast) border-color,
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--kk-checkbox-toggle-size);
    height: var(--kk-checkbox-toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--kk-input-border-color-hover);
    background-color: var(--kk-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Marcado/indeterminado */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--kk-color-primary-600);
    background-color: var(--kk-color-primary-600);
  }

  /* Marcado/indeterminado + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--kk-color-primary-500);
    background-color: var(--kk-color-primary-500);
  }

  /* Marcado/indeterminado + foco */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--kk-input-label-color);
    line-height: var(--kk-checkbox-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--kk-input-required-content);
    color: var(--kk-input-required-content-color);
    margin-inline-start: var(--kk-input-required-content-offset);
  }
`,Ol=is(class extends as{constructor(e){if(super(e),e.type!==rs.PROPERTY&&e.type!==rs.ATTRIBUTE&&e.type!==rs.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ya(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===fa||t===C)return t;let n=e.element,r=e.name;if(e.type===rs.PROPERTY){if(t===n[r])return fa}else if(e.type===rs.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return fa}else if(e.type===rs.ATTRIBUTE&&n.getAttribute(r)===t+``)return fa;return Za(e),t}}),kl=x`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--kk-input-label-color);
    margin-block-end: var(--kk-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--kk-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--kk-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--kk-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--kk-input-required-content);
    margin-inline-start: var(--kk-input-required-content-offset);
    color: var(--kk-input-required-content-color);
  }

  /* Texto de ajuda */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--kk-input-help-text-color);
    margin-block-start: var(--kk-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--kk-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-block-start: var(--kk-spacing-2x-small);
  }

  /* Validation */
  :host(:state(--invalid)) .form-control__label {
    color: var(--kk-color-danger-700);
  }

  :host(:state(--invalid)) .form-control__help-text {
    color: var(--kk-color-danger-700);
  }
`,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,I,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu=class extends (Gl=k,Wl=[D(`input[type="checkbox"]`)],Ul=[E()],Hl=[T()],Vl=[T()],Bl=[T()],zl=[T({reflect:!0})],Rl=[T({type:Boolean,reflect:!0})],Ll=[T({type:Boolean,reflect:!0})],Il=[T({type:Boolean,reflect:!0})],Fl=[So(`checked`)],Pl=[T({reflect:!0,converter:Ra})],Nl=[T({type:Boolean,reflect:!0})],Ml=[T({attribute:`help-text`})],jl=[O(`disabled`,{waitUntilFirstUpdate:!0})],Al=[O([`checked`,`indeterminate`,`value`],{waitUntilFirstUpdate:!0})],Gl){constructor(){super(...arguments),_(I,5,this),y(this,`validade`,new Cc(this,{interacaoEm:[`kk-input`]})),y(this,`hasSlotController`,new Ps(this,`help-text`)),b(this,Kl,_(I,8,this)),_(I,11,this),b(this,ql,_(I,12,this,!1)),_(I,15,this),b(this,Jl,_(I,16,this,``)),_(I,19,this),b(this,Yl,_(I,20,this,``)),_(I,23,this),b(this,Xl,_(I,24,this)),_(I,27,this),b(this,Zl,_(I,28,this,`medium`)),_(I,31,this),b(this,Ql,_(I,32,this,!1)),_(I,35,this),b(this,$l,_(I,36,this,!1)),_(I,39,this),b(this,eu,_(I,40,this,!1)),_(I,43,this),y(this,`defaultChecked`,_(I,56,this,!1)),_(I,59,this),b(this,tu,_(I,44,this,``)),_(I,47,this),b(this,nu,_(I,48,this,!1)),_(I,51,this),b(this,ru,_(I,52,this,``)),_(I,55,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.checked=this.defaultChecked,this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit(`kk-change`)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleInput(){this.emit(`kk-input`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}handleStateChange(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,xc(this.input),this.input)}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return S`
      <div
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${j({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${w(this.value)}
            .indeterminate=${Ol(this.indeterminate)}
            .checked=${Ol(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?S`
                  <kk-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></kk-icon>
                `:``}
            ${!this.checked&&this.indeterminate?S`
                  <kk-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></kk-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};I=be(Gl),Kl=new WeakMap,ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,v(I,4,`input`,Wl,iu,Kl),v(I,4,`hasFocus`,Ul,iu,ql),v(I,4,`title`,Hl,iu,Jl),v(I,4,`name`,Vl,iu,Yl),v(I,4,`value`,Bl,iu,Xl),v(I,4,`size`,zl,iu,Zl),v(I,4,`disabled`,Rl,iu,Ql),v(I,4,`checked`,Ll,iu,$l),v(I,4,`indeterminate`,Il,iu,eu),v(I,4,`form`,Pl,iu,tu),v(I,4,`required`,Nl,iu,nu),v(I,4,`helpText`,Ml,iu,ru),v(I,1,`handleDisabledChange`,jl,iu),v(I,1,`handleStateChange`,Al,iu),v(I,5,`defaultChecked`,Fl,iu),g(I,iu),y(iu,`styles`,[so,kl,Dl]),y(iu,`dependencies`,{"kk-icon":ns}),y(iu,`formAssociated`,!0),iu.define(`kk-checkbox`);var au=x`
  .campo {
    display: flex;
    width: 100%;
  }

  .campo .input {
    cursor: pointer;
  }

  .campo .input__control {
    cursor: inherit;
    caret-color: transparent;
  }

  .campo__icone {
    color: var(--kk-input-icon-color);
  }

  .input--small .campo__icone {
    margin-inline-end: var(--kk-input-spacing-small);
  }

  .input--medium .campo__icone {
    margin-inline-end: var(--kk-input-spacing-medium);
  }

  .input--large .campo__icone {
    margin-inline-end: var(--kk-input-spacing-large);
  }

  /* Abrir e fechar é CSS, como no kk-select: opacidade e escala no painel do popup. */
  .campo::part(popup) {
    opacity: 0;
    scale: 0.95;
    transition:
      opacity var(--kk-transition-fast) ease,
      scale var(--kk-transition-fast) ease;
  }

  .campo--aberto::part(popup) {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .campo--aberto::part(popup) {
      opacity: 0;
      scale: 0.95;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .campo::part(popup) {
      transition: none;
    }
  }

  .campo[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .campo[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* O calendário traz a moldura dele; o painel só lhe dá a sombra de quem flutua. */
  .campo__painel ::slotted(kk-calendar),
  .calendario-interno {
    border-radius: var(--kk-border-radius-large);
    box-shadow: var(--kk-shadow-large);
  }
`,ou=x`
  :host {
    --kk-calendar-day-size: var(--kk-input-height-medium);
    --kk-calendar-selected-color: var(--kk-color-primary-600);
    --kk-calendar-weekend-color: var(--kk-color-danger-700);
    --kk-calendar-holiday-color: var(--kk-color-danger-700);

    display: inline-block;
    color: var(--kk-color-neutral-900);
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-small);
  }

  .calendario {
    display: inline-flex;
    flex-direction: column;
    gap: var(--kk-spacing-x-small);
    padding: var(--kk-spacing-small);
    background-color: var(--kk-panel-background-color);
    border: var(--kk-panel-border-width) solid var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-large);
  }

  .calendario--desabilitado {
    opacity: 0.5;
  }

  .calendario__corpo {
    display: flex;
    flex-wrap: wrap;
    gap: var(--kk-spacing-large);
  }

  .calendario--deslizavel .calendario__corpo {
    touch-action: pan-y;
  }

  .calendario__mes {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-2x-small);
  }

  .calendario__cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--kk-spacing-2x-small);
  }

  .calendario__seta,
  .calendario__seta-vazia {
    flex: 0 0 auto;
    inline-size: var(--kk-calendar-day-size);
    font-size: var(--kk-font-size-large);
  }

  .calendario__titulo {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    gap: var(--kk-spacing-3x-small);
  }

  .calendario__botao-titulo,
  .calendario__rotulo {
    padding: var(--kk-spacing-3x-small) var(--kk-spacing-x-small);
    border: none;
    border-radius: var(--kk-border-radius-medium);
    background: none;
    color: inherit;
    font: inherit;
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-semibold);
    text-transform: capitalize;
  }

  .calendario__botao-titulo {
    cursor: pointer;
  }

  .calendario__botao-titulo:hover:not(:disabled) {
    background-color: var(--kk-surface-muted);
  }

  .calendario__botao-titulo:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .calendario__grade,
  .calendario__escolha {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-3x-small);
  }

  .calendario__fileira {
    display: grid;
    grid-template-columns: repeat(7, var(--kk-calendar-day-size));
    gap: var(--kk-spacing-3x-small) 0;
  }

  .calendario--com-semanas .calendario__fileira {
    grid-template-columns: repeat(8, var(--kk-calendar-day-size));
  }

  .calendario__cabeca {
    display: flex;
  }

  .calendario__dia-da-semana,
  .calendario__numero-da-semana,
  .calendario__semana-rotulo {
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: var(--kk-calendar-day-size);
    block-size: calc(var(--kk-calendar-day-size) * 0.75);
    padding: 0;
    border: none;
    background: none;
    color: var(--kk-color-text-muted);
    font: inherit;
    font-size: var(--kk-font-size-x-small);
    font-weight: var(--kk-font-weight-semibold);
    text-transform: uppercase;
  }

  .calendario__dia-da-semana,
  .calendario__numero-da-semana {
    cursor: pointer;
  }

  .calendario__numero-da-semana {
    block-size: var(--kk-calendar-day-size);
    text-transform: none;
  }

  .calendario__dia {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    inline-size: var(--kk-calendar-day-size);
    min-block-size: var(--kk-calendar-day-size);
    border-radius: var(--kk-border-radius-medium);
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    transition:
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) color;
  }

  .calendario__dia:hover:not(.calendario__dia--desabilitado):not(.calendario__dia--escolhido) {
    background-color: var(--kk-surface-muted);
  }

  .calendario__dia:focus-visible,
  .calendario__celula:focus-visible {
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
    z-index: 1;
  }

  .calendario__dia--vazio {
    cursor: default;
  }

  .calendario__dia--fim-de-semana .calendario__numero {
    color: var(--kk-calendar-weekend-color);
  }

  .calendario__dia--feriado .calendario__numero {
    color: var(--kk-calendar-holiday-color);
    font-weight: var(--kk-font-weight-bold);
  }

  .calendario__dia--fora,
  .calendario__dia--fora .calendario__numero {
    color: var(--kk-color-text-muted);
  }

  .calendario__dia--hoje {
    box-shadow: inset 0 0 0 1px var(--kk-calendar-selected-color);
  }

  .calendario__dia--hoje .calendario__numero {
    font-weight: var(--kk-font-weight-bold);
  }

  /* O meio do período é tinta do acento, e as pontas, cor cheia: a faixa se lê inteira. */
  .calendario__dia--na-faixa {
    border-radius: 0;
    background-image: linear-gradient(
      color-mix(in oklab, var(--kk-calendar-selected-color) var(--kk-tint-strength), transparent),
      color-mix(in oklab, var(--kk-calendar-selected-color) var(--kk-tint-strength), transparent)
    );
  }

  .calendario__dia--previa {
    background-image: linear-gradient(
      color-mix(in oklab, var(--kk-calendar-selected-color) var(--kk-tint-strength), transparent),
      color-mix(in oklab, var(--kk-calendar-selected-color) var(--kk-tint-strength), transparent)
    );
    outline: 1px dashed var(--kk-calendar-selected-color);
    outline-offset: -1px;
  }

  .calendario__dia--escolhido,
  .calendario__celula--escolhida {
    background-color: var(--kk-calendar-selected-color);
    color: var(--kk-color-neutral-0);
  }

  .calendario__dia--escolhido .calendario__numero {
    color: var(--kk-color-neutral-0);
  }

  .calendario__dia--inicio:not(.calendario__dia--fim) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  .calendario__dia--fim:not(.calendario__dia--inicio) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  .calendario__dia--desabilitado,
  .calendario__celula--desabilitada {
    color: var(--kk-color-text-muted);
    opacity: 0.4;
    cursor: not-allowed;
  }

  .calendario__dia--desabilitado .calendario__numero {
    text-decoration: line-through;
  }

  .calendario__marca {
    position: absolute;
    inset-block-end: var(--kk-spacing-3x-small);
    inline-size: var(--kk-spacing-2x-small);
    block-size: var(--kk-spacing-2x-small);
    border-radius: var(--kk-border-radius-circle);
    background-color: var(--kk-color-primary-600);
  }

  .calendario__marca--success {
    background-color: var(--kk-color-success-600);
  }

  .calendario__marca--warning {
    background-color: var(--kk-color-warning-600);
  }

  .calendario__marca--danger {
    background-color: var(--kk-color-danger-600);
  }

  .calendario__marca--neutral {
    background-color: var(--kk-color-neutral-600);
  }

  .calendario__dia--escolhido .calendario__marca {
    background-color: var(--kk-color-neutral-0);
  }

  .calendario__extra {
    font-size: var(--kk-font-size-2x-small);
    line-height: 1;
    color: var(--kk-color-text-muted);
  }

  .calendario__dia--escolhido .calendario__extra {
    color: var(--kk-color-neutral-0);
  }

  /* A contagem de dias do período em curso, sobre o dia em que ele terminaria. */
  .calendario__dia[data-dica]::after {
    content: attr(data-dica);
    position: absolute;
    inset-block-end: calc(100% + var(--kk-spacing-3x-small));
    inset-inline-start: 50%;
    z-index: 2;
    translate: -50% 0;
    padding: var(--kk-spacing-3x-small) var(--kk-spacing-x-small);
    border-radius: var(--kk-border-radius-medium);
    background-color: var(--kk-tooltip-background-color);
    color: var(--kk-tooltip-color);
    font-size: var(--kk-font-size-x-small);
    white-space: nowrap;
    pointer-events: none;
  }

  .calendario__fileira-de-escolha {
    display: grid;
    grid-template-columns: repeat(3, calc(var(--kk-calendar-day-size) * 7 / 3));
    gap: var(--kk-spacing-2x-small);
  }

  .calendario--com-semanas .calendario__fileira-de-escolha {
    grid-template-columns: repeat(3, calc(var(--kk-calendar-day-size) * 8 / 3));
  }

  .calendario__celula {
    display: flex;
    align-items: center;
    justify-content: center;
    min-block-size: calc(var(--kk-calendar-day-size) * 1.25);
    border-radius: var(--kk-border-radius-medium);
    text-transform: capitalize;
    cursor: pointer;
  }

  .calendario__celula:hover:not(.calendario__celula--desabilitada):not(.calendario__celula--escolhida) {
    background-color: var(--kk-surface-muted);
  }

  .calendario__celula--atual:not(.calendario__celula--escolhida) {
    box-shadow: inset 0 0 0 1px var(--kk-calendar-selected-color);
  }

  .calendario__rodape {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--kk-spacing-small);
  }

  .calendario__hora {
    flex: 1 1 auto;
  }

  .calendario__recolher {
    margin-inline-start: auto;
    transition: rotate var(--kk-transition-fast);
  }

  .calendario__recolher--aberto {
    rotate: 180deg;
  }

  @media (forced-colors: active) {
    .calendario__dia--escolhido,
    .calendario__celula--escolhida {
      background-color: Highlight;
      color: HighlightText;
    }

    .calendario__dia--hoje {
      outline: 1px solid CanvasText;
    }
  }
`;function su(e=new Date){let t=e instanceof Date?e:new Date(e),n=String(t.getMonth()+1).padStart(2,`0`),r=String(t.getDate()).padStart(2,`0`);return`${t.getFullYear()}-${n}-${r}`}function cu(e=new Date){return su(e).slice(0,7)}function lu(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;let[t=0,n=0,r=0]=e.split(`-`).map(Number),i=new Date(t,n-1,r);return i.getFullYear()===t&&i.getMonth()===n-1&&i.getDate()===r}function uu(e){return e.slice(0,7)}function du(e,t){let[n=0,r=1,i=1]=e.split(`-`).map(Number);return su(new Date(n,r-1,i+t))}function fu(e,t){let[n=0,r=1,i=1]=e.split(`-`).map(Number);return mu(cu(new Date(n,r-1+t,1)),i)}function pu(e,t){return new Date(e,t,0).getDate()}function mu(e,t){let[n=0,r=1]=e.split(`-`).map(Number),i=Math.min(Math.max(1,Math.trunc(t)),pu(n,r));return`${e}-${String(i).padStart(2,`0`)}`}function hu(e,t){return uu(fu(`${e}-01`,t))}function gu(e,t){if(e===``||t===``)return 0;let[n=0,r=1,i=1]=e.split(`-`).map(Number),[a=0,o=1,s=1]=t.split(`-`).map(Number),c=new Date(a,o-1,s).getTime()-new Date(n,r-1,i).getTime();return Math.round(c/864e5)}var _u=/[̀-ͯ]/g;function vu(e){return e.normalize(`NFD`).replace(_u,``)}function yu(e){return vu(e).toLowerCase().trim()}function bu(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}var xu=x`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    letter-spacing: var(--kk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) border,
      var(--kk-transition-fast) box-shadow,
      var(--kk-transition-fast) background-color;
  }

  /* Campo padrão */
  .input--standard {
    background-color: var(--kk-input-background-color);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
  }

  :host(:not(:state(--disabled))) .input--standard:hover {
    background-color: var(--kk-input-background-color-hover);
    border-color: var(--kk-input-border-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard {
    background-color: var(--kk-input-background-color-focus);
    border-color: var(--kk-input-border-color-focus);
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--standard .input__control {
    color: var(--kk-input-color-focus);
  }

  :host(:state(--disabled)) .input.input--standard {
    background-color: var(--kk-input-background-color-disabled);
    border-color: var(--kk-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host(:state(--disabled)) .input.input--standard .input__control {
    color: var(--kk-input-color-disabled);
  }

  :host(:state(--disabled)) .input.input--standard .input__control::placeholder {
    color: var(--kk-input-placeholder-color-disabled);
  }

  /* Validation */
  :host(:state(--invalid)) .input--standard {
    border-color: var(--kk-color-danger-600);
  }

  :host(:state(--invalid):state(--focused)) .input--standard {
    /*
     * Sem light-dark() aqui: dentro de uma folha de componente ele não passa pelo
     * rebaixamento do build do Note, e o Safari anterior ao 17.5 descartava o
     * anel inteiro. Metade do vermelho sobre o fundo serve aos dois temas.
     */
    box-shadow: 0 0 0 var(--kk-focus-ring-width) color-mix(in srgb, var(--kk-color-danger-600), transparent 50%);
  }

  /* Campo preenchido */
  .input--filled {
    border: none;
    background-color: var(--kk-input-filled-background-color);
    color: var(--kk-input-color);
  }

  :host(:not(:state(--disabled))) .input--filled:hover {
    background-color: var(--kk-input-filled-background-color-hover);
  }

  :host(:state(--focused):not(:state(--disabled))) .input--filled {
    background-color: var(--kk-input-filled-background-color-focus);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  :host(:state(--disabled)) .input.input--filled {
    background-color: var(--kk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--kk-input-color);
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--kk-input-height-large) var(--kk-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--kk-color-primary-500);
    caret-color: var(--kk-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--kk-input-height-large) var(--kk-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--kk-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:not(:state(--disabled))) .input:hover .input__control {
    color: var(--kk-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  /*
   * Sem fundo próprio: prefixo e sufixo são partes do campo, não etiquetas
   * grudadas nele. Pintá-los com um tom seu os separava do miolo — e separava
   * de um jeito que nenhum ajuste de token consertava, porque o campo tem três
   * fundos (normal, preenchido, desabilitado) e um tom fixo só podia acertar
   * um. Transparente, os três acertam sozinhos.
   */
  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
    background-color: transparent;
  }

  .input__prefix ::slotted(kk-icon),
  .input__suffix ::slotted(kk-icon) {
    color: var(--kk-input-icon-color);
  }

  /*
   * Modificadores de tamanho
   */

  .input--small {
    border-radius: var(--kk-input-border-radius-small);
    font-size: var(--kk-input-font-size-small);
    height: var(--kk-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-small);
    padding-inline-end: var(--kk-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--kk-input-border-radius-medium);
    font-size: var(--kk-input-font-size-medium);
    height: var(--kk-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-medium);
    padding-inline-end: var(--kk-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--kk-input-border-radius-large);
    font-size: var(--kk-input-font-size-large);
    height: var(--kk-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    padding: 0 var(--kk-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--kk-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-large);
    padding-inline-end: var(--kk-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-large);
  }

  /*
   * Modificador pill
   */

  .input--pill.input--small {
    border-radius: var(--kk-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--kk-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--kk-input-height-large);
  }

  /*
   * Limpar + mostrar senha
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--kk-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--kk-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--kk-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Sem o botão de senha do próprio Edge. */
  ::-ms-reveal {
    display: none;
  }

  /* Sem as setas do campo numérico do navegador. */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }

  /*
   * O alto contraste do sistema (forced-colors) apaga toda box-shadow, e o anel
   * de foco deste campo é uma: quem navega por teclado perdia de vista em que
   * campo está. Ali o foco vira contorno na cor de destaque do sistema.
   */
  @media (forced-colors: active) {
    :host(:state(--focused)) .input--standard,
    :host(:state(--focused)) .input--filled {
      outline: var(--kk-focus-ring-width) solid Highlight;
      outline-offset: var(--kk-focus-ring-offset);
    }
  }
`,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,L,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,R=class extends (ad=k,id=[D(`.input__control`)],rd=[E()],nd=[T()],td=[T({reflect:!0})],ed=[T()],$u=[T()],Qu=[So()],Zu=[T({reflect:!0})],Xu=[T({type:Boolean,reflect:!0})],Yu=[T({type:Boolean,reflect:!0})],Ju=[T()],qu=[T({attribute:`help-text`})],Ku=[T({type:Boolean})],Gu=[T({type:Boolean,reflect:!0})],Wu=[T()],Uu=[T({type:Boolean,reflect:!0})],Hu=[T({attribute:`password-toggle`,type:Boolean})],Vu=[T({attribute:`password-visible`,type:Boolean})],Bu=[T({attribute:`no-spin-buttons`,type:Boolean})],zu=[T({reflect:!0,converter:Ra})],Ru=[T({type:Boolean,reflect:!0})],Lu=[T()],Iu=[T({type:Number})],Fu=[T({type:Number})],Pu=[T()],Nu=[T()],Mu=[T()],ju=[T()],Au=[T({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],ku=[T()],Ou=[T({type:Boolean})],Du=[T()],Eu=[T({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],Tu=[T()],wu=[O(`disabled`,{waitUntilFirstUpdate:!0})],Cu=[O(`step`,{waitUntilFirstUpdate:!0})],Su=[O(`value`,{waitUntilFirstUpdate:!0})],ad){constructor(){super(...arguments),_(L,5,this),y(this,`validade`,new Cc(this,{interacaoEm:[`kk-blur`,`kk-input`]})),y(this,`hasSlotController`,new Ps(this,`help-text`,`label`)),y(this,`localize`,new hi(this)),b(this,od,_(L,8,this)),_(L,11,this),b(this,sd,_(L,12,this,!1)),_(L,15,this),b(this,cd,_(L,16,this,``)),_(L,19,this),y(this,`__numberInput`,Object.assign(document.createElement(`input`),{type:`number`})),y(this,`__dateInput`,Object.assign(document.createElement(`input`),{type:`date`})),b(this,ld,_(L,20,this,`text`)),_(L,23,this),b(this,ud,_(L,24,this,``)),_(L,27,this),b(this,dd,_(L,28,this,``)),_(L,31,this),y(this,`defaultValue`,_(L,140,this,``)),_(L,143,this),b(this,fd,_(L,32,this,`medium`)),_(L,35,this),b(this,pd,_(L,36,this,!1)),_(L,39,this),b(this,md,_(L,40,this,!1)),_(L,43,this),b(this,hd,_(L,44,this,``)),_(L,47,this),b(this,gd,_(L,48,this,``)),_(L,51,this),b(this,_d,_(L,52,this,!1)),_(L,55,this),b(this,vd,_(L,56,this,!1)),_(L,59,this),b(this,yd,_(L,60,this,``)),_(L,63,this),b(this,bd,_(L,64,this,!1)),_(L,67,this),b(this,xd,_(L,68,this,!1)),_(L,71,this),b(this,Sd,_(L,72,this,!1)),_(L,75,this),b(this,Cd,_(L,76,this,!1)),_(L,79,this),b(this,wd,_(L,80,this,``)),_(L,83,this),b(this,Td,_(L,84,this,!1)),_(L,87,this),b(this,Ed,_(L,88,this)),_(L,91,this),b(this,Dd,_(L,92,this)),_(L,95,this),b(this,Od,_(L,96,this)),_(L,99,this),b(this,kd,_(L,100,this)),_(L,103,this),b(this,Ad,_(L,104,this)),_(L,107,this),b(this,jd,_(L,108,this)),_(L,111,this),b(this,Md,_(L,112,this)),_(L,115,this),b(this,Nd,_(L,116,this,!0)),_(L,119,this),b(this,Pd,_(L,120,this)),_(L,123,this),b(this,Fd,_(L,124,this)),_(L,127,this),b(this,Id,_(L,128,this)),_(L,131,this),b(this,Ld,_(L,132,this,!0)),_(L,135,this),b(this,Rd,_(L,136,this)),_(L,139,this)}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.value),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}handleChange(){this.value=this.input.value,this.emit(`kk-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}handleInput(){this.value=this.input.value,this.updateValidity(),this.emit(`kk-input`)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{if(!e.defaultPrevented&&!e.isComposing){let e=this._internals.form;typeof e?.requestSubmit==`function`?e.requestSubmit():e?.dispatchEvent(new Event(`submit`,{bubbles:!0,cancelable:!0}))}})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.toggleState(`--disabled`,this.disabled),this.input.disabled=this.disabled,this.updateValidity()}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}async handleValueChange(){this._internals.setFormValue(this.value),await this.updateComplete,this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){let e=this.input.validity.valid;this.toggleState(`--empty`,!this.value),this.validade.aplicar(e,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,xc(this.input),this.input)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${w(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${w(this.placeholder)}
              minlength=${w(this.minlength)}
              maxlength=${w(this.maxlength)}
              min=${w(this.min)}
              max=${w(this.max)}
              step=${w(this.step)}
              .value=${Ol(this.value)}
              autocapitalize=${w(this.autocapitalize)}
              autocomplete=${w(this.autocomplete)}
              autocorrect=${this.autocorrect?`on`:`off`}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${w(this.pattern)}
              enterkeyhint=${w(this.enterkeyhint)}
              inputmode=${w(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?S`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <kk-icon name="circle-x" library="system"></kk-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?S`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?S`
                          <slot name="show-password-icon">
                            <kk-icon name="eye-off" library="system"></kk-icon>
                          </slot>
                        `:S`
                          <slot name="hide-password-icon">
                            <kk-icon name="eye" library="system"></kk-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};L=be(ad),od=new WeakMap,sd=new WeakMap,cd=new WeakMap,ld=new WeakMap,ud=new WeakMap,dd=new WeakMap,fd=new WeakMap,pd=new WeakMap,md=new WeakMap,hd=new WeakMap,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=new WeakMap,xd=new WeakMap,Sd=new WeakMap,Cd=new WeakMap,wd=new WeakMap,Td=new WeakMap,Ed=new WeakMap,Dd=new WeakMap,Od=new WeakMap,kd=new WeakMap,Ad=new WeakMap,jd=new WeakMap,Md=new WeakMap,Nd=new WeakMap,Pd=new WeakMap,Fd=new WeakMap,Id=new WeakMap,Ld=new WeakMap,Rd=new WeakMap,v(L,4,`input`,id,R,od),v(L,4,`hasFocus`,rd,R,sd),v(L,4,`title`,nd,R,cd),v(L,4,`type`,td,R,ld),v(L,4,`name`,ed,R,ud),v(L,4,`value`,$u,R,dd),v(L,4,`size`,Zu,R,fd),v(L,4,`filled`,Xu,R,pd),v(L,4,`pill`,Yu,R,md),v(L,4,`label`,Ju,R,hd),v(L,4,`helpText`,qu,R,gd),v(L,4,`clearable`,Ku,R,_d),v(L,4,`disabled`,Gu,R,vd),v(L,4,`placeholder`,Wu,R,yd),v(L,4,`readonly`,Uu,R,bd),v(L,4,`passwordToggle`,Hu,R,xd),v(L,4,`passwordVisible`,Vu,R,Sd),v(L,4,`noSpinButtons`,Bu,R,Cd),v(L,4,`form`,zu,R,wd),v(L,4,`required`,Ru,R,Td),v(L,4,`pattern`,Lu,R,Ed),v(L,4,`minlength`,Iu,R,Dd),v(L,4,`maxlength`,Fu,R,Od),v(L,4,`min`,Pu,R,kd),v(L,4,`max`,Nu,R,Ad),v(L,4,`step`,Mu,R,jd),v(L,4,`autocapitalize`,ju,R,Md),v(L,4,`autocorrect`,Au,R,Nd),v(L,4,`autocomplete`,ku,R,Pd),v(L,4,`autofocus`,Ou,R,Fd),v(L,4,`enterkeyhint`,Du,R,Id),v(L,4,`spellcheck`,Eu,R,Ld),v(L,4,`inputmode`,Tu,R,Rd),v(L,1,`handleDisabledChange`,wu,R),v(L,1,`handleStepChange`,Cu,R),v(L,1,`handleValueChange`,Su,R),v(L,5,`defaultValue`,Qu,R),g(L,R),y(R,`styles`,[so,kl,xu]),y(R,`dependencies`,{"kk-icon":ns}),y(R,`formAssociated`,!0);function zd(e){let[t=0,n=1,r=1]=e.split(`-`).map(Number);return new Date(t,n-1,r).getDay()}function Bd(e,t){return du(e,-((zd(e)-t+7)%7))}function Vd(e,t){let n=Bd(e,t);return Array.from({length:7},(e,t)=>du(n,t))}function Hd(e,t,n=`seis`){let r=Bd(`${e}-01`,t),i=n===`seis`?6:Math.ceil((gu(r,mu(e,31))+1)/7);return Array.from({length:i},(e,t)=>Array.from({length:7},(e,n)=>du(r,t*7+n)))}function Ud(e){let t=e.find(e=>zd(e)===4)??e[0]??`1970-01-01`,n=Number(t.slice(0,4));return{ano:n,semana:Math.floor(gu(`${n}-01-01`,t)/7)+1}}function Wd(e){return(e[3]??e[0]??``).slice(0,7)}function Gd(e){let[t=0,n=1]=e.split(`-`).map(Number);return Array.from({length:pu(t,n)},(t,n)=>du(`${e}-01`,n))}var Kd={dias:new Set,faixas:[]};function qd(e){let t=Array.isArray(e)?e:String(e??``).split(/[\s,]+/),n=new Set,r=[];for(let e of t){let[t=``,i]=e.trim().split(`:`);i===void 0?lu(t)&&n.add(t):lu(t)&&lu(i)&&r.push(t<=i?[t,i]:[i,t])}return{dias:n,faixas:r}}function Jd(e,t){return e.dias.has(t)||e.faixas.some(([e,n])=>t>=e&&t<=n)}function Yd(e){return e.dias.size===0&&e.faixas.length===0}function Xd(e){let t=Array.isArray(e)?e:String(e??``).split(/[\s,]+/);return[...new Set(t.map(Number).filter(e=>Number.isInteger(e)&&e>=0&&e<=6))]}function Zd(e){return e-(e%12+12)%12}function Qd(e,t){return t.min!==void 0&&t.min!==``&&e<t.min||t.max!==void 0&&t.max!==``&&e>t.max||t.passadoDesabilitado&&e<t.hoje||t.hojeDesabilitado&&e===t.hoje||t.diasDesabilitados.includes(zd(e))||!Yd(t.permitidas)&&!Jd(t.permitidas,e)?!0:Jd(t.desabilitadas,e)}function $d(e,t,n=366){let r=e;for(let i=1;i<=n;i++){let n=du(e,-i);if(Qd(n,t))break;r=n}let i=e;for(let r=1;r<=n;r++){let n=du(e,r);if(Qd(n,t))break;i=n}return[r,i]}function ef(e){let t=String(e??``).split(/\s+/).map(e=>e.slice(0,10)).filter(lu);return[...new Set(t)].sort()}function tf(e){return/T(\d{2}:\d{2})/.exec(String(e??``))?.[1]??``}function nf(e,t=``){let[n=1970,r=1,i=1]=e.split(`-`).map(Number),[a=0,o=0]=t.split(`:`).map(Number);return new Date(n,r-1,i,a,o)}function rf(e){let[t=0,n=1,r=1]=e.split(`-`).map(Number);return[t,n,r]}var af=class{constructor(e){h(this,`localize`,void 0),this.localize=e}get traduzido(){return this.localize.exists(`calendarMonth`)}mes(e){return this.traduzido?this.localize.term(`calendarMonth`,rf(e)[1]):this.localize.date(nf(e),{month:`long`})}mesCurto(e){return this.traduzido?this.localize.term(`calendarMonthShort`,rf(e)[1]):this.localize.date(nf(e),{month:`short`})}mesEAno(e){let[t,n]=rf(e);return this.traduzido?this.localize.term(`calendarMonthYear`,n,t):this.localize.date(nf(e),{month:`long`,year:`numeric`})}diaDaSemana(e){return this.traduzido?this.localize.term(`calendarWeekday`,zd(e)):this.localize.date(nf(e),{weekday:`long`})}inicial(e){return this.traduzido?this.localize.term(`calendarWeekdayNarrow`,zd(e)):this.localize.date(nf(e),{weekday:`narrow`})}porExtenso(e){let[t,n,r]=rf(e);return this.traduzido?this.localize.term(`calendarDay`,zd(e),r,n,t):this.localize.date(nf(e),{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`})}emAlgarismos(e,t=``){if(!this.traduzido){let n={day:`2-digit`,month:`2-digit`,year:`numeric`};return t!==``&&Object.assign(n,{hour:`2-digit`,minute:`2-digit`}),this.localize.date(nf(e,t),n)}let[n=``,r=``,i=``]=e.split(`-`),a=this.localize.term(`calendarDate`,i.slice(0,2),r,n);if(t===``)return a;let[o=`0`,s=`00`]=t.split(`:`);return this.localize.term(`calendarDateTime`,a,Number(o),s)}},of={fromAttribute:e=>(e??``).split(/[\s,]+/).filter(Boolean)},sf={fromAttribute:e=>Xd(e)};function cf(e){try{let t=new Intl.Locale(e),n=t.getWeekInfo?.()??t.weekInfo;return n===void 0?{}:{primeiro:n.firstDay%7,fimDeSemana:n.weekend.map(e=>e%7)}}catch{return{}}}var lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,z,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,B=class extends (Xf=k,Yf=[E()],Jf=[E()],qf=[E()],Kf=[E()],Gf=[E()],Wf=[T()],Uf=[T()],Hf=[So()],Vf=[T({reflect:!0})],Bf=[T({reflect:!0})],zf=[T({type:Number})],Rf=[T({type:Number})],Lf=[T()],If=[T()],Ff=[T()],Pf=[T({attribute:`first-day-of-week`,type:Number})],Nf=[T({attribute:`disabled-dates`,converter:of})],Mf=[T({attribute:`enabled-dates`,converter:of})],jf=[T({attribute:`disabled-weekdays`,converter:sf})],Af=[T({attribute:`disable-past`,type:Boolean})],kf=[T({attribute:`disable-today`,type:Boolean})],Of=[T({attribute:`contiguous-range`,type:Boolean})],Df=[T({attribute:`hide-outside-days`,type:Boolean})],Ef=[T({attribute:`week-numbers`,type:Boolean})],Tf=[T({converter:sf})],wf=[T({converter:of})],Cf=[T({attribute:!1})],Sf=[T({attribute:!1})],xf=[T({attribute:`no-deselect`,type:Boolean})],bf=[T({type:Boolean,reflect:!0})],yf=[T({type:Boolean})],vf=[T({type:Number})],_f=[T({attribute:`with-time`,type:Boolean})],gf=[T({attribute:`time-min`})],hf=[T({attribute:`time-max`})],mf=[T({attribute:`time-step`,type:Number})],pf=[T()],ff=[T({type:Boolean,reflect:!0})],df=[T({type:Boolean,reflect:!0})],uf=[T({type:Boolean,reflect:!0})],lf=[T({reflect:!0,converter:Ra})],Xf){constructor(){super(...arguments),y(this,`localize`,new hi(this)),y(this,`escrita`,new af(this.localize)),y(this,`validade`,new Cc(this,{interacaoEm:[`kk-change`]})),b(this,Zf,_(z,8,this,``)),_(z,11,this),b(this,Qf,_(z,12,this,`dias`)),_(z,15,this),b(this,$f,_(z,16,this,``)),_(z,19,this),b(this,ep,_(z,20,this,``)),_(z,23,this),b(this,tp,_(z,24,this,``)),_(z,27,this),y(this,`focarDepois`,!1),y(this,`direcao`,0),y(this,`trocouDeVista`,!1),y(this,`ultimoValor`,``),y(this,`toque`,null),y(this,`ignorarClique`,!1),b(this,np,_(z,28,this,``)),_(z,31,this),b(this,rp,_(z,32,this,``)),_(z,35,this),y(this,`defaultValue`,_(z,168,this,``)),_(z,171,this),b(this,ip,_(z,36,this,`day`)),_(z,39,this),b(this,ap,_(z,40,this,`single`)),_(z,43,this),b(this,op,_(z,44,this,1)),_(z,47,this),b(this,sp,_(z,48,this,1)),_(z,51,this),b(this,cp,_(z,52,this,``)),_(z,55,this),b(this,lp,_(z,56,this,``)),_(z,59,this),b(this,up,_(z,60,this,``)),_(z,63,this),b(this,dp,_(z,64,this)),_(z,67,this),b(this,fp,_(z,68,this,[])),_(z,71,this),b(this,pp,_(z,72,this,[])),_(z,75,this),b(this,mp,_(z,76,this,[])),_(z,79,this),b(this,hp,_(z,80,this,!1)),_(z,83,this),b(this,gp,_(z,84,this,!1)),_(z,87,this),b(this,_p,_(z,88,this,!1)),_(z,91,this),b(this,vp,_(z,92,this,!1)),_(z,95,this),b(this,yp,_(z,96,this,!1)),_(z,99,this),b(this,bp,_(z,100,this)),_(z,103,this),b(this,xp,_(z,104,this,[])),_(z,107,this),b(this,Sp,_(z,108,this,{})),_(z,111,this),b(this,Cp,_(z,112,this)),_(z,115,this),b(this,wp,_(z,116,this,!1)),_(z,119,this),b(this,Tp,_(z,120,this,!1)),_(z,123,this),b(this,Ep,_(z,124,this,!1)),_(z,127,this),b(this,Dp,_(z,128,this,200)),_(z,131,this),b(this,Op,_(z,132,this,!1)),_(z,135,this),b(this,kp,_(z,136,this,``)),_(z,139,this),b(this,Ap,_(z,140,this,``)),_(z,143,this),b(this,jp,_(z,144,this,1)),_(z,147,this),b(this,Mp,_(z,148,this,``)),_(z,151,this),b(this,Np,_(z,152,this,!1)),_(z,155,this),b(this,Pp,_(z,156,this,!1)),_(z,159,this),b(this,Fp,_(z,160,this,!1)),_(z,163,this),b(this,Ip,_(z,164,this,``)),_(z,167,this),y(this,`conjuntoDesabilitado`,Kd),y(this,`conjuntoPermitido`,Kd),y(this,`conjuntoDeFeriados`,Kd),y(this,`regrasDoDesenho`,null),y(this,`mensagemPropria`,``),y(this,`recolhendo`,!1),y(this,`focoVisivel`,``)}get selectedDates(){return this.type===`month`||this.type===`year`?this.value.split(/\s+/).filter(Boolean).sort():ef(this.value)}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get hoje(){return this.today||su()}get primeiroDia(){let e=this.firstDayOfWeek;return e!==void 0&&Number.isInteger(e)&&e>=0&&e<=6?e:cf(this.localize.lang()).primeiro??1}get fimDeSemana(){return this.weekends??cf(this.localize.lang()).fimDeSemana??[0,6]}get regras(){let e={min:this.min,max:this.max,hoje:this.hoje,desabilitadas:this.conjuntoDesabilitado,permitidas:this.conjuntoPermitido,diasDesabilitados:this.disabledWeekdays,passadoDesabilitado:this.disablePast,hojeDesabilitado:this.disableToday},[t,n]=this.selectedDates;if(this.selection===`range`&&this.contiguousRange&&t!==void 0&&n===void 0){let[n,r]=$d(t,e);return{...e,min:n,max:r}}return e}desabilitado(e){return this.regrasDoDesenho??=this.regras,Qd(e,this.regrasDoDesenho)}willUpdate(e){super.willUpdate(e),this.regrasDoDesenho=null,e.has(`disabledDates`)&&(this.conjuntoDesabilitado=qd(this.disabledDates)),e.has(`enabledDates`)&&(this.conjuntoPermitido=qd(this.enabledDates)),e.has(`holidays`)&&(this.conjuntoDeFeriados=qd(this.holidays)),e.has(`type`)&&(this.vista=this.type===`month`?`meses`:this.type===`year`?`anos`:`dias`);let t=e.has(`value`)&&this.value!==this.ultimoValor,n=e.has(`type`)&&!this.recolhendo;this.recolhendo=!1,(this.ancora===``||n||t)&&(this.ultimoValor=this.value,this.mostrarData(this.selectedDates[0]??this.hoje,this.ancora!==``&&!e.has(`type`)))}firstUpdated(){this.atualizarFormulario()}updated(e){super.updated(e),e.has(`disabled`)&&this.toggleState(`--disabled`,this.disabled),(e.has(`value`)||e.has(`required`)||e.has(`selection`))&&this.atualizarFormulario(),this.focarDepois&&(this.focarDepois=!1,this.shadowRoot?.querySelector(`[data-foco]`)?.focus()),(this.direcao!==0||this.trocouDeVista)&&(this.animarCorpo(),this.direcao=0,this.trocouDeVista=!1)}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.horaPendente=``}atualizarFormulario(){let e=this.selectedDates;if(this.name!==``&&e.length>1){let t=new FormData;for(let n of e)t.append(this.name,n);this._internals.setFormValue(t)}else this._internals.setFormValue(this.value===``?null:this.value);this.updateValidity()}updateValidity(){let e=this.selectedDates,t={},n=``;this.mensagemPropria===``?this.required&&e.length===0?(t={valueMissing:!0},n=this.localize.term(`valueMissing`)):this.selection===`range`&&e.length===1&&(t={tooShort:!0},n=this.localize.term(`calendarRangeIncomplete`)):(t={customError:!0},n=this.mensagemPropria),this.validade.aplicar(n===``,(e,t)=>this.toggleState(e,t));let r=this.shadowRoot?.querySelector(`[data-foco]`)??void 0;this._internals.setValidity(t,n,r)}setCustomValidity(e){this.mensagemPropria=e,this.updateValidity()}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}getForm(){return this._internals.form}showDate(e){/^\d{4}(-\d{2}(-\d{2})?)?/.test(e)&&this.mostrarData(e,!0)}focus(e){let t=this.shadowRoot?.querySelector(`[data-foco]`);t?t.focus(e):(this.focarDepois=!0,this.requestUpdate())}mostrarData(e,t){let n=/^\d{4}$/.test(e)?`${e}-01-01`:/^\d{4}-\d{2}$/.test(e)?`${e}-01`:e,r=this.limitar(n.slice(0,10));if(this.type===`week`){let e=Bd(r,this.primeiroDia);(!t||!Vd(this.ancora||e,this.primeiroDia).includes(r))&&(this.ancora=e)}else if(this.vista===`anos`)this.ancora=String(Zd(Number(r.slice(0,4))));else if(this.vista===`meses`)this.ancora=r.slice(0,4);else{let e=r.slice(0,7),n=Array.from({length:this.quantosMeses},(t,n)=>hu(this.ancora||e,n));(!t||!n.includes(e))&&(this.ancora=e)}this.foco=this.type===`month`?r.slice(0,7):this.type===`year`?r.slice(0,4):r}limitar(e){return this.min!==``&&e<this.min?this.min:this.max!==``&&e>this.max?this.max:e}get quantosMeses(){return this.type===`day`?Math.max(1,Math.min(12,Math.trunc(this.months)||1)):1}navegar(e){let t=this.ancoraVizinha(e);t!==null&&(this.direcao=e,this.ancora=t,this.foco=this.focoNaAncora(),this.anunciarNavegacao())}ancoraVizinha(e){if(this.vista===`anos`){let t=Number(this.ancora)+e*12;return this.min!==``&&t+11<Number(this.min.slice(0,4))||this.max!==``&&t>Number(this.max.slice(0,4))?null:String(t)}if(this.vista===`meses`){let t=Number(this.ancora)+e;return this.min!==``&&t<Number(this.min.slice(0,4))||this.max!==``&&t>Number(this.max.slice(0,4))?null:String(t)}if(this.type===`week`){let t=du(this.ancora,e*7);return this.min!==``&&du(t,6)<this.min||this.max!==``&&t>this.max?null:t}let t=Math.max(1,Math.trunc(this.step)||1),n=hu(this.ancora,e*t),r=hu(n,this.quantosMeses-1);return this.min!==``&&mu(r,31)<this.min||this.max!==``&&`${n}-01`>this.max?null:n}focoNaAncora(){if(this.vista===`anos`)return this.ancora;if(this.vista===`meses`)return`${this.ancora}-${(this.foco.slice(5,7)||`01`).padEnd(2,`0`)}`;if(this.type===`week`){let e=(zd(this.foco||this.ancora)-this.primeiroDia+7)%7;return this.limitar(du(this.ancora,e))}let e=Number(this.foco.slice(8,10))||1,t=this.ancora;return this.limitar(mu(t,e))}anunciarNavegacao(){let[e=0,t=1]=(this.type===`week`?Wd(Vd(this.ancora,this.primeiroDia)):this.ancora).split(`-`).map(Number);this.emit(`kk-calendar-navigate`,{detail:{year:e,month:t,type:this.type}})}abrirVista(e){if(this.disabled)return;let t=this.type===`week`?Wd(Vd(this.ancora,this.primeiroDia)):this.ancora;this.vista=e,this.trocouDeVista=!0,e===`meses`?(this.ancora=t.slice(0,4),this.foco=t.slice(0,7)):e===`anos`&&(this.ancora=String(Zd(Number(t.slice(0,4)))),this.foco=t.slice(0,4)),this.focarDepois=!0}voltarAosDias(e){this.vista=`dias`,this.trocouDeVista=!0;let t=this.limitar(`${e}-01`);this.ancora=this.type===`week`?Bd(t,this.primeiroDia):e,this.foco=t,this.focarDepois=!0,this.anunciarNavegacao()}alternarRecolhido(){if(this.recolhendo=!0,this.type===`day`){let e=this.selectedDates.filter(e=>e.startsWith(this.ancora)),t=this.hoje.startsWith(this.ancora)?this.hoje:void 0,n=e[0]??t??`${this.ancora}-01`;this.type=`week`,this.ancora=Bd(n,this.primeiroDia),this.foco=n}else{let e=Wd(Vd(this.ancora,this.primeiroDia));this.type=`day`,this.ancora=e}this.trocouDeVista=!0,this.anunciarNavegacao()}animarCorpo(){if(this.animation<=0||Is())return;let e=this.shadowRoot?.querySelector(`.calendario__corpo`);if(!e||typeof e.animate!=`function`)return;let t=this.localize.dir()===`rtl`?-1:1,n=this.direcao*t*16;e.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:`none`}],{duration:this.animation,easing:`cubic-bezier(0.4, 0, 0.2, 1)`})}gravar(e,t){let n=[...new Set(e)].sort().join(` `),r=this.horaPendente||tf(this.value);this.withTime&&this.selection===`single`&&n!==``&&r!==``&&(n=`${n}T${r}`),n!==this.value&&(this.value=n,this.ultimoValor=n,this.emit(`kk-input`),t&&this.emit(`kk-change`))}escolherDia(e){if(this.disabled||this.readonly||this.desabilitado(e))return;let t=this.selectedDates,n=t.includes(e);switch(this.selection){case`single`:n&&!this.noDeselect?this.gravar([],!0):this.gravar([e],!0);break;case`multiple`:n&&!this.noDeselect?this.gravar(t.filter(t=>t!==e),!0):n||this.gravar([...t,e],!0);break;case`range`:{let[n,r]=t;n===void 0||r!==void 0?this.gravar([e],!1):e===n?this.noDeselect||this.gravar([],!0):this.gravar([n,e],!0),this.pairando=``;break}}if(this.type===`day`&&this.vista===`dias`){let t=e.slice(0,7);Array.from({length:this.quantosMeses},(e,t)=>hu(this.ancora,t)).includes(t)||(this.direcao=t<this.ancora?-1:1,this.ancora=t<this.ancora?t:hu(t,-(this.quantosMeses-1)),this.anunciarNavegacao())}this.foco=e}escolherMes(e){if(!(this.disabled||this.mesForaDoAlcance(e))){if(this.type===`month`){if(this.readonly||this.selection===`none`)return;let t=this.value===e;this.gravarSimples(t&&!this.noDeselect?``:e),this.foco=e;return}this.voltarAosDias(e)}}escolherAno(e){if(this.disabled||this.anoForaDoAlcance(e))return;if(this.type===`year`){if(this.readonly||this.selection===`none`)return;let t=this.value===e;this.gravarSimples(t&&!this.noDeselect?``:e),this.foco=e;return}let t=`${e}-${(this.foco.slice(5,7)||`01`).padEnd(2,`0`)}`;this.type===`month`?(this.vista=`meses`,this.ancora=e,this.foco=t,this.trocouDeVista=!0,this.focarDepois=!0):this.voltarAosDias(this.mesForaDoAlcance(t)?this.limitar(`${t}-01`).slice(0,7):t)}gravarSimples(e){e!==this.value&&(this.value=e,this.ultimoValor=e,this.emit(`kk-input`),this.emit(`kk-change`))}mesForaDoAlcance(e){return this.min!==``&&e<this.min.slice(0,7)||this.max!==``&&e>this.max.slice(0,7)}anoForaDoAlcance(e){return this.min!==``&&e<this.min.slice(0,4)||this.max!==``&&e>this.max.slice(0,4)}aoEscolherHora(e){let t=e.target.value;this.horaPendente=t;let[n]=this.selectedDates;if(n===void 0||this.readonly||this.disabled)return;let r=t===``?n:`${n}T${t}`;r!==this.value&&this.gravarSimples(r)}clicarNaSemana(e){if(this.disabled)return;let{ano:t,semana:n}=Ud(e),r=new CustomEvent(`kk-calendar-week`,{bubbles:!0,composed:!0,cancelable:!0,detail:{year:t,week:n,dates:e}});if(!this.dispatchEvent(r)||this.readonly)return;let i=e.filter(e=>!this.desabilitado(e));i.length!==0&&(this.selection===`range`?this.gravar([i[0]??``,i.at(-1)??``],!0):this.selection===`multiple`&&this.gravar([...this.selectedDates,...i],!0))}clicarNoDiaDaSemana(e,t){let n=Gd(t).filter(t=>zd(t)===e);this.emit(`kk-calendar-weekday`,{detail:{weekday:e,dates:n}})}aoTeclarNosDias(e){let t=this.localize.dir()===`rtl`?-1:1,n=this.foco,r=null;switch(e.key){case`ArrowLeft`:r=du(n,-t);break;case`ArrowRight`:r=du(n,t);break;case`ArrowUp`:r=du(n,-7);break;case`ArrowDown`:r=du(n,7);break;case`Home`:r=Bd(n,this.primeiroDia);break;case`End`:r=du(Bd(n,this.primeiroDia),6);break;case`PageUp`:r=fu(n,e.shiftKey?-12:-1);break;case`PageDown`:r=fu(n,e.shiftKey?12:1);break;case`Enter`:case` `:e.preventDefault(),this.escolherDia(n);return;default:return}e.preventDefault(),this.moverFoco(this.limitar(r))}moverFoco(e){if(this.type===`week`)Vd(this.ancora,this.primeiroDia).includes(e)||(this.direcao=e<this.ancora?-1:1,this.ancora=Bd(e,this.primeiroDia),this.anunciarNavegacao());else{let t=e.slice(0,7);Array.from({length:this.quantosMeses},(e,t)=>hu(this.ancora,t)).includes(t)||(this.direcao=t<this.ancora?-1:1,this.ancora=t<this.ancora?t:hu(t,-(this.quantosMeses-1)),this.anunciarNavegacao())}this.foco=e,this.selection===`range`&&(this.pairando=e),this.focarDepois=!0}aoTeclarNaEscolha(e,t){let n=this.vista===`anos`,r=this.localize.dir()===`rtl`?-1:1,i=Number(n?this.foco:this.foco.slice(5,7)),a=0;switch(e.key){case`ArrowLeft`:a=-r;break;case`ArrowRight`:a=r;break;case`ArrowUp`:a=-t;break;case`ArrowDown`:a=t;break;case`Enter`:case` `:e.preventDefault(),n?this.escolherAno(this.foco):this.escolherMes(this.foco);return;case`Escape`:if(this.type!==`day`&&this.type!==`week`)return;e.preventDefault(),this.voltarAosDias((this.type===`week`?Wd(Vd(this.ancora,this.primeiroDia)):this.ancora).slice(0,7));return;default:return}if(e.preventDefault(),n){let e=i+a;if(this.anoForaDoAlcance(String(e)))return;let t=Zd(e);String(t)!==this.ancora&&(this.direcao=a<0?-1:1,this.ancora=String(t)),this.foco=String(e)}else{let e=hu(this.foco.slice(0,7),a);if(this.mesForaDoAlcance(e))return;e.slice(0,4)!==this.ancora&&(this.direcao=a<0?-1:1,this.ancora=e.slice(0,4)),this.foco=e}this.focarDepois=!0}aoApertar(e){!this.swipe||e.button!==0||(this.toque={x:e.clientX,y:e.clientY,id:e.pointerId})}aoSoltar(e){let t=this.toque;if(this.toque=null,!this.swipe||t===null||t.id!==e.pointerId)return;let n=e.clientX-t.x,r=e.clientY-t.y,i=e.currentTarget.clientWidth||1;if(Math.abs(n)<Math.max(40,i/4)||Math.abs(n)<Math.abs(r))return;this.ignorarClique=!0,window.setTimeout(()=>{this.ignorarClique=!1});let a=this.localize.dir()===`rtl`?-1:1;this.navegar(n*a<0?1:-1)}aoClicarNoDia(e){this.ignorarClique||this.escolherDia(e)}desenharCabecalho(e,t,n,r){let i=this.localize.dir()===`rtl`,a=this.ancoraVizinha(-1)===null,o=this.ancoraVizinha(1)===null,[s,c]=this.vista===`anos`?[`calendarPreviousYears`,`calendarNextYears`]:this.vista===`meses`?[`calendarPreviousYear`,`calendarNextYear`]:this.type===`week`?[`calendarPreviousWeek`,`calendarNextWeek`]:[`calendarPreviousMonth`,`calendarNextMonth`];return S`
      <div part="header" class="calendario__cabecalho">
        ${n?S`<kk-icon-button
              part="nav-button"
              class="calendario__seta"
              name=${i?`chevron-right`:`chevron-left`}
              library="system"
              label=${this.localize.term(s)}
              ?disabled=${a||this.disabled}
              @click=${()=>this.navegar(-1)}
            ></kk-icon-button>`:S`<span class="calendario__seta-vazia"></span>`}
        <div class="calendario__titulo" aria-live="polite">${this.desenharTitulo(e,t)}</div>
        ${r?S`<kk-icon-button
              part="nav-button"
              class="calendario__seta"
              name=${i?`chevron-left`:`chevron-right`}
              library="system"
              label=${this.localize.term(c)}
              ?disabled=${o||this.disabled}
              @click=${()=>this.navegar(1)}
            ></kk-icon-button>`:S`<span class="calendario__seta-vazia"></span>`}
      </div>
    `}desenharTitulo(e,t){if(this.vista===`anos`){let e=Number(this.ancora);return S`<span part="title" class="calendario__rotulo">${e} – ${e+11}</span>`}let n=t.slice(0,4),r=S`<button
      part="title"
      type="button"
      class="calendario__botao-titulo"
      aria-label=${`${this.localize.term(`calendarChooseYear`)}: ${n}`}
      ?disabled=${this.disabled}
      @click=${()=>this.abrirVista(`anos`)}
    >
      ${n}
    </button>`;return this.vista===`meses`?r:S`
      <button
        part="title"
        type="button"
        class="calendario__botao-titulo"
        aria-label=${`${this.localize.term(`calendarChooseMonth`)}: ${e}`}
        ?disabled=${this.disabled}
        @click=${()=>this.abrirVista(`meses`)}
      >
        ${e}
      </button>
      ${r}
    `}desenharDiasDaSemana(e){let t=Vd(`${e}-01`,this.primeiroDia);return S`
      <div class="calendario__fileira calendario__fileira--cabecalho" role="row">
        ${this.weekNumbers?S`<span
              class="calendario__semana-rotulo"
              role="columnheader"
              aria-label=${this.localize.term(`calendarWeek`)}
            >#</span>`:C}
        ${t.map(t=>S`<span class="calendario__cabeca" role="columnheader">
            <button
              part="weekday"
              type="button"
              class="calendario__dia-da-semana"
              tabindex="-1"
              aria-label=${this.escrita.diaDaSemana(t)}
              @click=${()=>this.clicarNoDiaDaSemana(zd(t),e)}
            >
              ${this.escrita.inicial(t)}
            </button>
          </span>`)}
      </div>
    `}desenharSemana(e,t){let{semana:n}=Ud(e);return S`
      <div class="calendario__fileira" role="row">
        ${this.weekNumbers?S`<span class="calendario__cabeca" role="rowheader">
              <button
                part="week-number"
                type="button"
                class="calendario__numero-da-semana"
                tabindex="-1"
                aria-label=${this.localize.term(`calendarWeekNumber`,n)}
                @click=${()=>this.clicarNaSemana(e)}
              >
                ${n}
              </button>
            </span>`:C}
        ${e.map(e=>this.desenharDia(e,t))}
      </div>
    `}desenharDia(e,t){let n=t!==null&&!e.startsWith(t);if(n&&this.hideOutsideDays)return S`<span class="calendario__dia calendario__dia--vazio" role="gridcell"></span>`;let r=this.selectedDates,[i,a]=r,o=this.selection===`range`,s=r.includes(e),c=o&&(e===i||e===a),l=o&&i!==void 0&&a===void 0&&this.pairando!==``?this.pairando:``,[u,d]=l!==``&&i!==void 0?[i,l].sort():[i,a],f=o&&u!==void 0&&d!==void 0&&e>u&&e<d,ee=f&&a===void 0,te=this.desabilitado(e),ne=this.annotations[e],p=this.fimDeSemana.includes(zd(e)),re=Jd(this.conjuntoDeFeriados,e),ie=e===this.focoVisivel&&!n,m=this.dayContent?.(e),ae=this.escrita.porExtenso(e),h=o&&e===l&&i!==void 0?this.localize.term(`calendarRangeDays`,Math.abs(gu(i,e))+1):``;return S`<div
      part="day"
      class=${j({calendario__dia:!0,"calendario__dia--fora":n,"calendario__dia--hoje":e===this.hoje,"calendario__dia--escolhido":s&&(!o||c),"calendario__dia--inicio":o&&e===(u??i),"calendario__dia--fim":o&&d!==void 0&&e===d,"calendario__dia--na-faixa":f,"calendario__dia--previa":ee,"calendario__dia--desabilitado":te,"calendario__dia--fim-de-semana":p,"calendario__dia--feriado":re})}
      role="gridcell"
      tabindex=${ie?`0`:`-1`}
      ?data-foco=${ie}
      data-data=${e}
      data-dica=${h||C}
      title=${ne?.label??C}
      aria-label=${ne?.label?`${ae}, ${ne.label}`:ae}
      aria-selected=${this.selection===`none`?C:s||f?`true`:`false`}
      aria-disabled=${te?`true`:`false`}
      aria-current=${e===this.hoje?`date`:C}
      @click=${()=>this.aoClicarNoDia(e)}
      @pointerenter=${()=>{o&&i!==void 0&&a===void 0&&(this.pairando=e)}}
      @focus=${()=>{this.foco=e}}
    >
      <span class="calendario__numero">${Number(e.slice(8,10))}</span>
      ${ne?S`<span class="calendario__marca calendario__marca--${ne.variant??`primary`}" aria-hidden="true"></span>`:C}
      ${m==null||m===``?C:S`<span class="calendario__extra">${m}</span>`}
    </div>`}desenharMes(e,t){let n=this.escrita.mes(e),r=Hd(e,this.primeiroDia);return S`
      <div part="month" class="calendario__mes">
        ${this.desenharCabecalho(n,e,t===0,t===this.quantosMeses-1)}
        <div
          class="calendario__grade"
          role="grid"
          aria-label=${this.escrita.mesEAno(e)}
          aria-multiselectable=${this.selection===`multiple`||this.selection===`range`?`true`:C}
          aria-readonly=${this.readonly||this.selection===`none`?`true`:C}
          @keydown=${this.aoTeclarNosDias}
          @pointerleave=${()=>{this.pairando=``}}
        >
          ${this.desenharDiasDaSemana(e)}
          ${r.map(t=>this.desenharSemana(t,e))}
        </div>
      </div>
    `}desenharSemanaSo(){let e=Vd(this.ancora,this.primeiroDia),t=Wd(e),n=this.escrita.mes(t);return S`
      <div part="month" class="calendario__mes">
        ${this.desenharCabecalho(n,t,!0,!0)}
        <div
          class="calendario__grade"
          role="grid"
          aria-label=${this.escrita.mesEAno(t)}
          aria-multiselectable=${this.selection===`multiple`||this.selection===`range`?`true`:C}
          @keydown=${this.aoTeclarNosDias}
          @pointerleave=${()=>{this.pairando=``}}
        >
          ${this.desenharDiasDaSemana(t)} ${this.desenharSemana(e,null)}
        </div>
      </div>
    `}desenharMeses(){let e=this.ancora,t=this.type===`month`?this.selectedDates:[];return S`
      <div part="month" class="calendario__mes">
        ${this.desenharCabecalho(``,`${e}-01`,!0,!0)}
        <div class="calendario__escolha" role="grid" aria-label=${e} @keydown=${e=>this.aoTeclarNaEscolha(e,3)}>
          ${[0,1,2,3].map(n=>S`<div class="calendario__fileira-de-escolha" role="row">
              ${[0,1,2].map(r=>{let i=`${e}-${String(n*3+r+1).padStart(2,`0`)}`,a=this.mesForaDoAlcance(i),o=t.includes(i),s=i===this.foco;return S`<div
                  part="picker-cell"
                  class=${j({calendario__celula:!0,"calendario__celula--escolhida":o,"calendario__celula--atual":this.hoje.startsWith(i),"calendario__celula--desabilitada":a})}
                  role="gridcell"
                  tabindex=${s?`0`:`-1`}
                  ?data-foco=${s}
                  aria-selected=${o?`true`:`false`}
                  aria-disabled=${a?`true`:`false`}
                  aria-label=${this.escrita.mesEAno(i)}
                  @click=${()=>this.escolherMes(i)}
                  @focus=${()=>{this.foco=i}}
                >
                  ${this.escrita.mesCurto(i)}
                </div>`})}
            </div>`)}
        </div>
      </div>
    `}desenharAnos(){let e=Number(this.ancora),t=this.type===`year`?this.selectedDates:[];return S`
      <div part="month" class="calendario__mes">
        ${this.desenharCabecalho(``,`${e}-01`,!0,!0)}
        <div
          class="calendario__escolha"
          role="grid"
          aria-label=${`${e} \u2013 ${e+11}`}
          @keydown=${e=>this.aoTeclarNaEscolha(e,3)}
        >
          ${[0,1,2,3].map(n=>S`<div class="calendario__fileira-de-escolha" role="row">
              ${[0,1,2].map(r=>{let i=String(e+n*3+r),a=this.anoForaDoAlcance(i),o=t.includes(i),s=i===this.foco;return S`<div
                  part="picker-cell"
                  class=${j({calendario__celula:!0,"calendario__celula--escolhida":o,"calendario__celula--atual":this.hoje.startsWith(i),"calendario__celula--desabilitada":a})}
                  role="gridcell"
                  tabindex=${s?`0`:`-1`}
                  ?data-foco=${s}
                  aria-selected=${o?`true`:`false`}
                  aria-disabled=${a?`true`:`false`}
                  @click=${()=>this.escolherAno(i)}
                  @focus=${()=>{this.foco=i}}
                >
                  ${i}
                </div>`})}
            </div>`)}
        </div>
      </div>
    `}desenharRodape(){let e=this.withTime&&this.selection===`single`&&(this.type===`day`||this.type===`week`),t=this.collapsible&&this.quantosMeses===1&&(this.type===`day`||this.type===`week`);if(!e&&!t)return C;let[n]=this.selectedDates,r=tf(this.value)||this.horaPendente;return S`
      <div part="footer" class="calendario__rodape">
        ${e?S`<kk-input
              part="time"
              class="calendario__hora"
              type="time"
              size="small"
              label=${this.localize.term(`calendarTime`)}
              .value=${r}
              min=${this.timeMin||C}
              max=${this.timeMax||C}
              step=${Math.max(1,Math.trunc(this.timeStep)||1)*60}
              ?disabled=${this.disabled||this.readonly||n===void 0}
              @kk-change=${this.aoEscolherHora}
            ></kk-input>`:C}
        ${t?S`<kk-icon-button
              class=${j({calendario__recolher:!0,"calendario__recolher--aberto":this.type===`day`})}
              name="chevron-down"
              library="system"
              label=${this.localize.term(this.type===`day`?`calendarCollapse`:`calendarExpand`)}
              ?disabled=${this.disabled}
              @click=${this.alternarRecolhido}
            ></kk-icon-button>`:C}
      </div>
    `}calcularFocoVisivel(){if(this.vista!==`dias`){this.focoVisivel=this.foco;return}let e=this.type===`week`?Vd(this.ancora,this.primeiroDia):Array.from({length:this.quantosMeses},(e,t)=>hu(this.ancora,t)).flatMap(Gd);this.focoVisivel=e.includes(this.foco)?this.foco:e[0]??this.foco}render(){this.calcularFocoVisivel();let e;return e=this.vista===`anos`?this.desenharAnos():this.vista===`meses`?this.desenharMeses():this.type===`week`?this.desenharSemanaSo():Array.from({length:this.quantosMeses},(e,t)=>this.desenharMes(hu(this.ancora,t),t)),S`
      <div
        part="base"
        class=${j({calendario:!0,"calendario--desabilitado":this.disabled,"calendario--varios":this.quantosMeses>1&&this.vista===`dias`,"calendario--com-semanas":this.weekNumbers,"calendario--deslizavel":this.swipe})}
        role="group"
        aria-label=${this.label||this.localize.term(`calendar`)}
        aria-disabled=${this.disabled?`true`:`false`}
      >
        <div
          class="calendario__corpo"
          @pointerdown=${this.aoApertar}
          @pointerup=${this.aoSoltar}
          @pointercancel=${()=>{this.toque=null}}
        >
          ${e}
        </div>
        ${this.desenharRodape()}
      </div>
    `}};z=be(Xf),Zf=new WeakMap,Qf=new WeakMap,$f=new WeakMap,ep=new WeakMap,tp=new WeakMap,np=new WeakMap,rp=new WeakMap,ip=new WeakMap,ap=new WeakMap,op=new WeakMap,sp=new WeakMap,cp=new WeakMap,lp=new WeakMap,up=new WeakMap,dp=new WeakMap,fp=new WeakMap,pp=new WeakMap,mp=new WeakMap,hp=new WeakMap,gp=new WeakMap,_p=new WeakMap,vp=new WeakMap,yp=new WeakMap,bp=new WeakMap,xp=new WeakMap,Sp=new WeakMap,Cp=new WeakMap,wp=new WeakMap,Tp=new WeakMap,Ep=new WeakMap,Dp=new WeakMap,Op=new WeakMap,kp=new WeakMap,Ap=new WeakMap,jp=new WeakMap,Mp=new WeakMap,Np=new WeakMap,Pp=new WeakMap,Fp=new WeakMap,Ip=new WeakMap,v(z,4,`ancora`,Yf,B,Zf),v(z,4,`vista`,Jf,B,Qf),v(z,4,`foco`,qf,B,$f),v(z,4,`pairando`,Kf,B,ep),v(z,4,`horaPendente`,Gf,B,tp),v(z,4,`name`,Wf,B,np),v(z,4,`value`,Uf,B,rp),v(z,4,`type`,Vf,B,ip),v(z,4,`selection`,Bf,B,ap),v(z,4,`months`,zf,B,op),v(z,4,`step`,Rf,B,sp),v(z,4,`min`,Lf,B,cp),v(z,4,`max`,If,B,lp),v(z,4,`today`,Ff,B,up),v(z,4,`firstDayOfWeek`,Pf,B,dp),v(z,4,`disabledDates`,Nf,B,fp),v(z,4,`enabledDates`,Mf,B,pp),v(z,4,`disabledWeekdays`,jf,B,mp),v(z,4,`disablePast`,Af,B,hp),v(z,4,`disableToday`,kf,B,gp),v(z,4,`contiguousRange`,Of,B,_p),v(z,4,`hideOutsideDays`,Df,B,vp),v(z,4,`weekNumbers`,Ef,B,yp),v(z,4,`weekends`,Tf,B,bp),v(z,4,`holidays`,wf,B,xp),v(z,4,`annotations`,Cf,B,Sp),v(z,4,`dayContent`,Sf,B,Cp),v(z,4,`noDeselect`,xf,B,wp),v(z,4,`collapsible`,bf,B,Tp),v(z,4,`swipe`,yf,B,Ep),v(z,4,`animation`,vf,B,Dp),v(z,4,`withTime`,_f,B,Op),v(z,4,`timeMin`,gf,B,kp),v(z,4,`timeMax`,hf,B,Ap),v(z,4,`timeStep`,mf,B,jp),v(z,4,`label`,pf,B,Mp),v(z,4,`disabled`,ff,B,Np),v(z,4,`readonly`,df,B,Pp),v(z,4,`required`,uf,B,Fp),v(z,4,`form`,lf,B,Ip),v(z,5,`defaultValue`,Hf,B),g(z,B),y(B,`styles`,[so,ou]),y(B,`formAssociated`,!0),y(B,`dependencies`,{"kk-icon":ns,"kk-icon-button":Ns,"kk-input":R});var Lp=x`
  :host {
    --kk-popup-arrow-color: var(--kk-color-neutral-1000);
    --kk-popup-arrow-size: 6px;

    /*
     * Estas contas descontam o tamanho da seta depois do giro de 45º. A constante 0,7071 é o
     * sen(45), que dá a diagonal do contêiner da seta depois de girado.
     */
    --kk-popup-arrow-size-diagonal: calc(var(--kk-popup-arrow-size) * 0.7071);
    --kk-popup-arrow-padding-offset: calc(var(--kk-popup-arrow-size-diagonal) - var(--kk-popup-arrow-size));

    display: contents;
  }

  /*
   * O popup e a ponte de hover moram na camada superior, pela Popover API: é o que os livra de serem
   * cortados pelo overflow de um ancestral ou presos no transform dele. Os estilos que o navegador dá a um
   * popover são de painel avulso, e por isso os dois elementos são despidos deles primeiro.
   */
  .popup,
  .popup-hover-bridge {
    margin: 0;
    border: none;
    padding: 0;
    width: auto;
    height: auto;
    overflow: visible;
    color: inherit;
    background: transparent;
  }

  .popup {
    position: fixed;
    inset: auto;
    isolation: isolate;
    max-width: var(--kk-popup-auto-size-available-width, none);
    max-height: var(--kk-popup-auto-size-available-height, none);
  }

  /* A âncora saiu de vista pela rolagem: não há mais o que apontar, e o popup sai do caminho. */
  :host([data-anchor-hidden]) .popup,
  :host([data-anchor-hidden]) .popup-hover-bridge {
    visibility: hidden;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--kk-popup-arrow-size-diagonal) * 2);
    height: calc(var(--kk-popup-arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--kk-popup-arrow-color);
    z-index: -1;
  }

  /* Ponte de hover */
  .popup-hover-bridge {
    position: fixed;
    inset: 0;
    clip-path: polygon(
      var(--kk-popup-hover-bridge-top-left-x, 0) var(--kk-popup-hover-bridge-top-left-y, 0),
      var(--kk-popup-hover-bridge-top-right-x, 0) var(--kk-popup-hover-bridge-top-right-y, 0),
      var(--kk-popup-hover-bridge-bottom-right-x, 0) var(--kk-popup-hover-bridge-bottom-right-y, 0),
      var(--kk-popup-hover-bridge-bottom-left-x, 0) var(--kk-popup-hover-bridge-bottom-left-y, 0)
    );
  }

  /*
   * O Safari sem a API de popover (antes do 17): nada esconde o [popover]
   * fechado, e não há camada do topo. O estado aberto é o atributo que o
   * internal/popover.ts escreve, e a camada é o z-index dos menus.
   */
  @supports not selector(:popover-open) {
    .popup:not([data-popover-aberto]),
    .popup-hover-bridge:not([data-popover-aberto]) {
      display: none;
    }

    .popup,
    .popup-hover-bridge {
      z-index: var(--kk-z-index-dropdown);
    }
  }
`,Rp=typeof HTMLElement<`u`&&typeof HTMLElement.prototype.showPopover==`function`,zp=`data-popover-aberto`;function Bp(e){return Rp?e.matches(`:popover-open`):e.hasAttribute(zp)}function Vp(e){Bp(e)||(Rp?e.showPopover():e.setAttribute(zp,``))}function Hp(e){Bp(e)&&(Rp?e.hidePopover():e.removeAttribute(zp))}var Up={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function Wp(e){return e.split(`-`)[0]}function Gp(e){return e.split(`-`)[1]}function Kp(e){return e===`top`||e===`bottom`}function qp(e){let t=Gp(e),n=Up[Wp(e)];return t===void 0?n:`${n}-${t}`}function Jp(e,t){let n={esquerda:0,topo:0,direita:window.innerWidth,base:window.innerHeight},r=e===void 0?[]:Array.isArray(e)?e:[e];for(let e of r){let t=e.getBoundingClientRect();n.esquerda=Math.max(n.esquerda,t.left),n.topo=Math.max(n.topo,t.top),n.direita=Math.min(n.direita,t.right),n.base=Math.min(n.base,t.bottom)}return{esquerda:n.esquerda+t,topo:n.topo+t,direita:n.direita-t,base:n.base-t}}function Yp(e,t,n,r,i,a){let o=Wp(r),s=Gp(r),c=0,l=0;return Kp(o)?(l=o===`top`?e.top-n-i:e.bottom+i,c=s===`start`?e.left:s===`end`?e.right-t:e.left+(e.width-t)/2,c+=a):(c=o===`left`?e.left-t-i:e.right+i,l=s===`start`?e.top:s===`end`?e.bottom-n:e.top+(e.height-n)/2,l+=a),{x:c,y:l}}function Xp(e,t,n,r,i){return Math.max(0,i.esquerda-e)+Math.max(0,i.topo-t)+Math.max(0,e+n-i.direita)+Math.max(0,t+r-i.base)}function Zp(e,t,n,r,i,a){switch(i){case`top`:return Math.max(0,a.topo-t);case`bottom`:return Math.max(0,t+r-a.base);case`left`:return Math.max(0,a.esquerda-e);case`right`:return Math.max(0,e+n-a.direita)}}function Qp(e,t,n,r){let i=r.direita-r.esquerda,a=r.base-r.topo;switch(t){case`top`:return{largura:i,altura:e.top-r.topo-n};case`bottom`:return{largura:i,altura:r.base-e.bottom-n};case`left`:return{largura:e.left-r.esquerda-n,altura:a};case`right`:return{largura:r.direita-e.right-n,altura:a}}}function $p(e){let t=e.contextElement??(e instanceof Element?e:void 0);if(t===void 0)return!1;let n=t.getBoundingClientRect();if(n.width===0&&n.height===0)return!0;for(let e=t.parentElement;e!==null;e=e.parentElement){let t=getComputedStyle(e);if(!/auto|scroll|hidden|clip/.test(t.overflow+t.overflowX+t.overflowY))continue;let r=e.getBoundingClientRect();if(n.bottom<=r.top||n.top>=r.bottom||n.right<=r.left||n.left>=r.right)return!0}return!1}function em(e,t,n){let r=n.distancia??0,i=n.desvio??0,a=e.getBoundingClientRect();if(n.espelhar!==void 0){let e=n.espelhar===`width`||n.espelhar===`both`,r=n.espelhar===`height`||n.espelhar===`both`;t.style.width=e?`${a.width}px`:``,t.style.height=r?`${a.height}px`:``}else t.style.width=``,t.style.height=``;let o=t.offsetWidth,s=t.offsetHeight,c=n.posicionamento,l=Jp(n.virarLimite,n.virarPreenchimento??0);if(n.virar===!0){let e=[n.posicionamento,...n.virarAlternativas??[qp(n.posicionamento)]],t=n.posicionamento,u=1/0,d=!1;for(let n of e){let{x:e,y:c}=Yp(a,o,s,n,r,i);if(Zp(e,c,o,s,Wp(n),l)===0){t=n,d=!0;break}let f=Xp(e,c,o,s,l);f<u&&(u=f,t=n)}c=d||(n.virarEstrategia??`melhor-encaixe`)===`melhor-encaixe`?t:n.posicionamento}let u=Wp(c),{x:d,y:f}=Yp(a,o,s,c,r,i);if(n.deslizar===!0){let e=Jp(n.deslizarLimite,n.deslizarPreenchimento??0);Kp(u)?d=Math.min(Math.max(d,e.esquerda),Math.max(e.esquerda,e.direita-o)):f=Math.min(Math.max(f,e.topo),Math.max(e.topo,e.base-s))}let ee=n.medirEspaco===!0?Qp(a,u,r,Jp(n.medirLimite,n.medirPreenchimento??0)):{largura:1/0,altura:1/0},te={};if(n.seta!==void 0){let e=n.setaPreenchimento??0,t=Kp(u)?n.seta.offsetWidth:n.seta.offsetHeight;if(Kp(u)){let n=a.left+a.width/2-d-t/2;te.x=Math.min(Math.max(n,e),o-t-e)}else{let n=a.top+a.height/2-f-t/2;te.y=Math.min(Math.max(n,e),s-t-e)}}return{x:Math.round(d),y:Math.round(f),posicionamento:c,espacoLivre:ee,ancoraOculta:$p(e),seta:te}}function tm(e,t,n){let r=e.contextElement??(e instanceof Element?e:void 0),i=[window];for(let e=r?.parentElement??null;e!==null;e=e.parentElement){let t=getComputedStyle(e);/auto|scroll|overlay/.test(t.overflow+t.overflowX+t.overflowY)&&i.push(e)}for(let e of i)e.addEventListener(`scroll`,n,{passive:!0,capture:!0});window.addEventListener(`resize`,n,{passive:!0});let a=new ResizeObserver(n);return r!==void 0&&a.observe(r),a.observe(t),n(),()=>{for(let e of i)e.removeEventListener(`scroll`,n,{capture:!0});window.removeEventListener(`resize`,n),a.disconnect()}}function nm(e){return(Array.isArray(e)?e:String(e).split(` `)).map(e=>e.trim()).filter(e=>e!==``)}function rm(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,V,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,H=class extends (Om=k,Dm=[D(`.popup`)],Em=[D(`.popup__arrow`)],Tm=[D(`.popup-hover-bridge`)],wm=[T()],Cm=[T({type:Boolean,reflect:!0})],Sm=[T({reflect:!0})],xm=[T({type:Number})],bm=[T({type:Number})],ym=[T({type:Boolean})],vm=[T({attribute:`arrow-placement`})],_m=[T({attribute:`arrow-padding`,type:Number})],gm=[T({type:Boolean})],hm=[T({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],mm=[T({attribute:`flip-fallback-strategy`})],pm=[T({type:Object})],fm=[T({attribute:`flip-padding`,type:Number})],dm=[T({type:Boolean})],um=[T({type:Object})],lm=[T({attribute:`shift-padding`,type:Number})],cm=[T({attribute:`auto-size`})],sm=[T()],om=[T({type:Object})],am=[T({attribute:`auto-size-padding`,type:Number})],im=[T({attribute:`hover-bridge`,type:Boolean})],Om){constructor(){super(...arguments),y(this,`anchorEl`),y(this,`cleanup`),y(this,`localize`,new hi(this)),b(this,km,_(V,8,this)),_(V,11,this),b(this,Am,_(V,12,this)),_(V,15,this),b(this,jm,_(V,16,this)),_(V,19,this),b(this,Mm,_(V,20,this)),_(V,23,this),b(this,Nm,_(V,24,this,!1)),_(V,27,this),b(this,Pm,_(V,28,this,`top`)),_(V,31,this),b(this,Fm,_(V,32,this,0)),_(V,35,this),b(this,Im,_(V,36,this,0)),_(V,39,this),b(this,Lm,_(V,40,this,!1)),_(V,43,this),b(this,Rm,_(V,44,this,`anchor`)),_(V,47,this),b(this,zm,_(V,48,this,10)),_(V,51,this),b(this,Bm,_(V,52,this,!1)),_(V,55,this),b(this,Vm,_(V,56,this,``)),_(V,59,this),b(this,Hm,_(V,60,this,`best-fit`)),_(V,63,this),b(this,Um,_(V,64,this)),_(V,67,this),b(this,Wm,_(V,68,this,0)),_(V,71,this),b(this,Gm,_(V,72,this,!1)),_(V,75,this),b(this,Km,_(V,76,this)),_(V,79,this),b(this,qm,_(V,80,this,0)),_(V,83,this),b(this,Jm,_(V,84,this)),_(V,87,this),b(this,Ym,_(V,88,this)),_(V,91,this),b(this,Xm,_(V,92,this)),_(V,95,this),b(this,Zm,_(V,96,this,0)),_(V,99,this),b(this,Qm,_(V,100,this,!1)),_(V,103,this),y(this,`updateHoverBridge`,()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--kk-popup-hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--kk-popup-hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--kk-popup-hover-bridge-bottom-right-y`,`${u}px`)}})}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),(e.has(`active`)||e.has(`hoverBridge`))&&this.syncTopLayer(),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}syncTopLayer(){if(!this.isConnected||!this.popup||!this.hoverBridgeEl)return;let e=this.active&&this.hoverBridge;e&&!Bp(this.hoverBridgeEl)&&Hp(this.popup),e?Vp(this.hoverBridgeEl):Hp(this.hoverBridgeEl),this.active?Vp(this.popup):Hp(this.popup)}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||rm(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=tm(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.removeAttribute(`data-anchor-hidden`),this.style.removeProperty(`--kk-popup-auto-size-available-width`),this.style.removeProperty(`--kk-popup-auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let{x:e,y:t,posicionamento:n,espacoLivre:r,ancoraOculta:i,seta:a}=em(this.anchorEl,this.popup,{posicionamento:this.placement,distancia:this.distance,desvio:this.skidding,virar:this.flip,...this.flipFallbackPlacements.length>0?{virarAlternativas:nm(this.flipFallbackPlacements)}:{},virarEstrategia:this.flipFallbackStrategy===`best-fit`?`melhor-encaixe`:`inicial`,virarLimite:this.flipBoundary,virarPreenchimento:this.flipPadding,deslizar:this.shift,deslizarLimite:this.shiftBoundary,deslizarPreenchimento:this.shiftPadding,medirEspaco:!!this.autoSize,medirLimite:this.autoSizeBoundary,medirPreenchimento:this.autoSizePadding,...this.sync?{espelhar:this.sync}:{},...this.arrow?{seta:this.arrowEl,setaPreenchimento:this.arrowPadding}:{}});if(this.setAttribute(`data-current-placement`,n),this.toggleAttribute(`data-anchor-hidden`,i),this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--kk-popup-auto-size-available-height`,`${r.altura}px`):this.style.removeProperty(`--kk-popup-auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--kk-popup-auto-size-available-width`,`${r.largura}px`):this.style.removeProperty(`--kk-popup-auto-size-available-width`),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=this.localize.dir()===`rtl`,t={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[n.split(`-`)[0]],r=``,i=``,o=``,s=``;if(this.arrowPlacement===`start`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``;r=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``,i=e?t:``,s=e?``:t}else if(this.arrowPlacement===`end`){let t=typeof a.x==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``;i=e?``:t,s=e?t:``,o=typeof a.y==`number`?`calc(${this.arrowPadding}px - var(--kk-popup-arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(s=typeof a.x==`number`?`calc(50% - var(--kk-popup-arrow-size-diagonal))`:``,r=typeof a.y==`number`?`calc(50% - var(--kk-popup-arrow-size-diagonal))`:``):(s=typeof a.x==`number`?`${a.x}px`:``,r=typeof a.y==`number`?`${a.y}px`:``);Object.assign(this.arrowEl.style,{top:r,right:i,bottom:o,left:s,[t]:`calc(var(--kk-popup-arrow-size-diagonal) * -1)`})}requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`kk-reposition`)}render(){return S`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span part="hover-bridge" class="popup-hover-bridge" popover="manual"></span>

      <div
        part="popup"
        popover="manual"
        class=${j({popup:!0,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?S`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};V=be(Om),km=new WeakMap,Am=new WeakMap,jm=new WeakMap,Mm=new WeakMap,Nm=new WeakMap,Pm=new WeakMap,Fm=new WeakMap,Im=new WeakMap,Lm=new WeakMap,Rm=new WeakMap,zm=new WeakMap,Bm=new WeakMap,Vm=new WeakMap,Hm=new WeakMap,Um=new WeakMap,Wm=new WeakMap,Gm=new WeakMap,Km=new WeakMap,qm=new WeakMap,Jm=new WeakMap,Ym=new WeakMap,Xm=new WeakMap,Zm=new WeakMap,Qm=new WeakMap,v(V,4,`popup`,Dm,H,km),v(V,4,`arrowEl`,Em,H,Am),v(V,4,`hoverBridgeEl`,Tm,H,jm),v(V,4,`anchor`,wm,H,Mm),v(V,4,`active`,Cm,H,Nm),v(V,4,`placement`,Sm,H,Pm),v(V,4,`distance`,xm,H,Fm),v(V,4,`skidding`,bm,H,Im),v(V,4,`arrow`,ym,H,Lm),v(V,4,`arrowPlacement`,vm,H,Rm),v(V,4,`arrowPadding`,_m,H,zm),v(V,4,`flip`,gm,H,Bm),v(V,4,`flipFallbackPlacements`,hm,H,Vm),v(V,4,`flipFallbackStrategy`,mm,H,Hm),v(V,4,`flipBoundary`,pm,H,Um),v(V,4,`flipPadding`,fm,H,Wm),v(V,4,`shift`,dm,H,Gm),v(V,4,`shiftBoundary`,um,H,Km),v(V,4,`shiftPadding`,lm,H,qm),v(V,4,`autoSize`,cm,H,Jm),v(V,4,`sync`,sm,H,Ym),v(V,4,`autoSizeBoundary`,om,H,Xm),v(V,4,`autoSizePadding`,am,H,Zm),v(V,4,`hoverBridge`,im,H,Qm),g(V,H),y(H,`styles`,[so,Lp]);var $m=100,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,U,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,W=class extends (Sh=k,xh=[D(`.campo`)],bh=[D(`.input__control`)],yh=[E()],vh=[E()],_h=[T()],gh=[T()],hh=[So()],mh=[T()],ph=[T({attribute:`help-text`})],fh=[T()],dh=[T({reflect:!0})],uh=[T({type:Boolean,reflect:!0})],lh=[T({type:Boolean,reflect:!0})],ch=[T({type:Boolean})],sh=[T({type:Boolean,reflect:!0})],oh=[T({reflect:!0})],ah=[T({type:Boolean,reflect:!0})],ih=[T({type:Boolean,reflect:!0})],rh=[T({type:Boolean,reflect:!0})],nh=[T({reflect:!0,converter:Ra})],th=[T({attribute:!1})],eh=[T({attribute:!1})],Sh){constructor(){super(...arguments),y(this,`validade`,new Cc(this,{interacaoEm:[`kk-blur`,`kk-change`]})),y(this,`hasSlotController`,new Ps(this,`help-text`,`label`)),y(this,`localize`,new hi(this)),y(this,`escrita`,new af(this.localize)),y(this,`closeWatcher`,null),y(this,`temporizador`,0),y(this,`abertoAntes`,!1),y(this,`mensagemPropria`,``),b(this,Ch,_(U,8,this)),_(U,11,this),b(this,wh,_(U,12,this)),_(U,15,this),b(this,Th,_(U,16,this,!1)),_(U,19,this),b(this,Eh,_(U,20,this,null)),_(U,23,this),b(this,Dh,_(U,24,this,``)),_(U,27,this),b(this,Oh,_(U,28,this,``)),_(U,31,this),y(this,`defaultValue`,_(U,92,this,``)),_(U,95,this),b(this,kh,_(U,32,this,``)),_(U,35,this),b(this,Ah,_(U,36,this,``)),_(U,39,this),b(this,jh,_(U,40,this,``)),_(U,43,this),b(this,Mh,_(U,44,this,`medium`)),_(U,47,this),b(this,Nh,_(U,48,this,!1)),_(U,51,this),b(this,Ph,_(U,52,this,!1)),_(U,55,this),b(this,Fh,_(U,56,this,!1)),_(U,59,this),b(this,Ih,_(U,60,this,!1)),_(U,63,this),b(this,Lh,_(U,64,this,`bottom-start`)),_(U,67,this),b(this,Rh,_(U,68,this,!1)),_(U,71,this),b(this,zh,_(U,72,this,!1)),_(U,75,this),b(this,Bh,_(U,76,this,!1)),_(U,79,this),b(this,Vh,_(U,80,this,``)),_(U,83,this),b(this,Hh,_(U,84,this)),_(U,87,this),b(this,Uh,_(U,88,this)),_(U,91,this),y(this,`aoMudarNoCalendario`,e=>{let t=e.target;!(t instanceof B)||t!==this.calendar||(e.stopImmediatePropagation(),this.value=t.value,this.emit(e.type),e.type===`kk-change`&&this.fechaSozinho(t)&&(window.clearTimeout(this.temporizador),this.temporizador=window.setTimeout(()=>{this.hide(),this.input?.focus({preventScroll:!0})},$m)))}),y(this,`aoFocarFora`,e=>{e.composedPath().includes(this)||this.hide()}),y(this,`aoApertarFora`,e=>{e.composedPath().includes(this)||this.hide()}),y(this,`aoTeclarNoDocumento`,e=>{e.key!==`Escape`||!this.open||this.closeWatcher||e.defaultPrevented||(e.preventDefault(),e.stopPropagation(),this.hide(),this.input.focus({preventScroll:!0}))})}get calendar(){return this.calendarioDoSlot??this.shadowRoot?.querySelector(`.calendario-interno`)??null}get selectedDates(){let e=this.calendar?.type??`day`;return e===`month`||e===`year`?this.value.split(/\s+/).filter(Boolean).sort():ef(this.value)}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}connectedCallback(){super.connectedCallback(),this.addEventListener(`kk-input`,this.aoMudarNoCalendario),this.addEventListener(`kk-change`,this.aoMudarNoCalendario)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`kk-input`,this.aoMudarNoCalendario),this.removeEventListener(`kk-change`,this.aoMudarNoCalendario),this.removerOuvintes(),window.clearTimeout(this.temporizador)}firstUpdated(){this.aoTrocarOSlot(),this.atualizarFormulario()}updated(e){if(super.updated(e),e.has(`disabled`)&&(this.toggleState(`--disabled`,this.disabled),this.disabled&&(this.open=!1)),e.has(`value`)){let e=this.calendar;e&&e.value!==this.value&&(e.value=this.value)}(e.has(`value`)||e.has(`required`))&&this.atualizarFormulario(),this.open!==this.abertoAntes&&(this.abertoAntes=this.open,this.aoAbrirOuFechar())}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue}atualizarFormulario(){let e=this.selectedDates;if(this.name!==``&&e.length>1){let t=new FormData;for(let n of e)t.append(this.name,n);this._internals.setFormValue(t)}else this._internals.setFormValue(this.value===``?null:this.value);this.updateValidity()}updateValidity(){let e=this.selectedDates,t={},n=``;this.mensagemPropria===``?this.required&&e.length===0?(t={valueMissing:!0},n=this.localize.term(`valueMissing`)):this.calendar?.selection===`range`&&e.length===1&&(t={tooShort:!0},n=this.localize.term(`calendarRangeIncomplete`)):(t={customError:!0},n=this.mensagemPropria),this.toggleState(`--empty`,e.length===0),this.validade.aplicar(n===``,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(t,n,this.input??void 0)}setCustomValidity(e){this.mensagemPropria=e,this.updateValidity()}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}getForm(){return this._internals.form}async show(){if(!(this.open||this.disabled||this.readonly))return this.open=!0,xi(this,`kk-after-show`)}async hide(){if(this.open)return this.open=!1,xi(this,`kk-after-hide`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}aoTrocarOSlot(){let e=this.querySelector(`:scope > kk-calendar`);this.calendarioDoSlot=e,e&&(this.value===``&&e.value!==``?this.value=e.value:e.value=this.value)}fechaSozinho(e){return e.selection===`multiple`||e.withTime&&e.selection===`single`?!1:e.value!==``}async aoAbrirOuFechar(){if(this.open&&!this.disabled){this.emit(`kk-show`),this.adicionarOuvintes(),this.popup.active=!0,await this.updateComplete;let e=this.calendar;if(e){let[t]=this.selectedDates;t!==void 0&&e.showDate(t),await e.updateComplete,e.focus({preventScroll:!0})}await Ls(this,this.popup.popup),this.emit(`kk-after-show`)}else this.emit(`kk-hide`),this.removerOuvintes(),await Ls(this,this.popup.popup),this.open||(this.popup.active=!1),this.emit(`kk-after-hide`)}adicionarOuvintes(){document.addEventListener(`focusin`,this.aoFocarFora),document.addEventListener(`keydown`,this.aoTeclarNoDocumento),document.addEventListener(`mousedown`,this.aoApertarFora),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.aoFocarFora),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.input.focus({preventScroll:!0}))})}removerOuvintes(){document.removeEventListener(`focusin`,this.aoFocarFora),document.removeEventListener(`keydown`,this.aoTeclarNoDocumento),document.removeEventListener(`mousedown`,this.aoApertarFora),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.aoFocarFora),this.closeWatcher?.destroy(),this.closeWatcher=null}aoTeclarNoCampo(e){this.disabled||this.readonly||((e.key===`Enter`||e.key===` `||e.key===`ArrowDown`)&&!this.open?(e.preventDefault(),this.open=!0):(e.key===`Backspace`||e.key===`Delete`)&&this.clearable&&this.value!==``&&(e.preventDefault(),this.limpar()))}aoApertarNoCampo(e){this.disabled||this.readonly||e.composedPath().some(e=>e instanceof HTMLElement&&e.classList.contains(`input__clear`))||(e.preventDefault(),this.input.focus({preventScroll:!0}),this.open=!this.open)}limpar(){this.value=``,this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`),this.input.focus({preventScroll:!0})}aoFocar(){this.hasFocus=!0,this.addState(`--focused`),this.emit(`kk-focus`)}aoDesfocar(){this.hasFocus=!1,this.removeState(`--focused`),this.emit(`kk-blur`)}texto(){let e=this.selectedDates;if(e.length===0)return``;if(this.valueFormatter)return this.valueFormatter(e);let t=this.calendar,n=t?.type??`day`;if(n===`year`)return e.join(`, `);if(n===`month`)return e.map(e=>this.escrita.mesEAno(e)).join(`, `);let r=tf(this.value),{format:i}=this,a=e=>i===void 0?this.escrita.emAlgarismos(e,r):this.localize.date(nf(e,r),i);return t?.selection===`range`?e.map(a).join(` – `):e.map(a).join(`, `)}render(){let e=this.label!==``||this.hasSlotController.test(`label`),t=this.helpText!==``||this.hasSlotController.test(`help-text`),n=this.texto(),r=this.clearable&&!this.disabled&&!this.readonly&&this.value!==``;return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":e,"form-control--has-help-text":t})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${e?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <kk-popup
            class=${j({campo:!0,"campo--aberto":this.open})}
            placement=${this.placement}
            flip
            shift
            distance="4"
          >
            <div
              part="base"
              slot="anchor"
              class=${j({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":n===``})}
              @mousedown=${this.aoApertarNoCampo}
            >
              <span part="prefix" class="input__prefix"><slot name="prefix"></slot></span>

              <input
                part="input"
                id="input"
                class="input__control"
                type="text"
                readonly
                role="combobox"
                aria-haspopup="dialog"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls="painel"
                aria-describedby="help-text"
                autocomplete="off"
                .value=${Ol(n)}
                placeholder=${this.placeholder||C}
                ?disabled=${this.disabled}
                @keydown=${this.aoTeclarNoCampo}
                @focus=${this.aoFocar}
                @blur=${this.aoDesfocar}
              />

              ${r?S`<button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    tabindex="-1"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.limpar}
                  >
                    <kk-icon name="circle-x" library="system"></kk-icon>
                  </button>`:C}

              <span part="suffix" class="input__suffix">
                <slot name="suffix"><kk-icon class="campo__icone" name="calendar" library="system"></kk-icon></slot>
              </span>
            </div>

            <div
              id="painel"
              part="panel"
              class="campo__painel"
              role="dialog"
              aria-labelledby=${e?`label`:C}
              aria-label=${e?C:this.localize.term(`calendar`)}
            >
              <slot @slotchange=${this.aoTrocarOSlot}></slot>
              ${this.calendarioDoSlot===null?S`<kk-calendar
                    class="calendario-interno"
                    .value=${this.value}
                    @kk-input=${this.aoMudarNoCalendario}
                    @kk-change=${this.aoMudarNoCalendario}
                  ></kk-calendar>`:C}
            </div>
          </kk-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${t?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};U=be(Sh),Ch=new WeakMap,wh=new WeakMap,Th=new WeakMap,Eh=new WeakMap,Dh=new WeakMap,Oh=new WeakMap,kh=new WeakMap,Ah=new WeakMap,jh=new WeakMap,Mh=new WeakMap,Nh=new WeakMap,Ph=new WeakMap,Fh=new WeakMap,Ih=new WeakMap,Lh=new WeakMap,Rh=new WeakMap,zh=new WeakMap,Bh=new WeakMap,Vh=new WeakMap,Hh=new WeakMap,Uh=new WeakMap,v(U,4,`popup`,xh,W,Ch),v(U,4,`input`,bh,W,wh),v(U,4,`hasFocus`,yh,W,Th),v(U,4,`calendarioDoSlot`,vh,W,Eh),v(U,4,`name`,_h,W,Dh),v(U,4,`value`,gh,W,Oh),v(U,4,`label`,mh,W,kh),v(U,4,`helpText`,ph,W,Ah),v(U,4,`placeholder`,fh,W,jh),v(U,4,`size`,dh,W,Mh),v(U,4,`filled`,uh,W,Nh),v(U,4,`pill`,lh,W,Ph),v(U,4,`clearable`,ch,W,Fh),v(U,4,`open`,sh,W,Ih),v(U,4,`placement`,oh,W,Lh),v(U,4,`disabled`,ah,W,Rh),v(U,4,`readonly`,ih,W,zh),v(U,4,`required`,rh,W,Bh),v(U,4,`form`,nh,W,Vh),v(U,4,`format`,th,W,Hh),v(U,4,`valueFormatter`,eh,W,Uh),v(U,5,`defaultValue`,hh,W),g(U,W),y(W,`styles`,[so,kl,xu,au]),y(W,`formAssociated`,!0),y(W,`dependencies`,{"kk-calendar":B,"kk-icon":ns,"kk-popup":H}),W.define(`kk-date-picker`);var Wh=x`
  :host {
    display: contents;
  }

  .dialog {
    padding: 0;
    border: none;
    background: none;
    max-width: 100vw;
    max-height: 100vh;
    overflow: visible;
  }

  .dialog::backdrop {
    background-color: var(--kk-overlay-background-color);
    transition:
      opacity var(--kk-dialog-transition, var(--kk-transition-slow)),
      display var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete,
      overlay var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete;
    opacity: 0;
  }

  /*
   * :modal, e não :show-modal — o segundo não existe em CSS, e um seletor
   * inválido derruba a regra inteira em silêncio. Era o que deixava o painel
   * parado em opacity 0 depois do showModal(): o diálogo abria de fato,
   * prendendo o foco inclusive, mas invisível.
   */
  .dialog:modal::backdrop {
    opacity: 1;
  }

  @starting-style {
    .dialog:modal::backdrop {
      opacity: 0;
    }
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--kk-dialog-width, auto);
    max-width: calc(100vw - var(--kk-spacing-2x-large));
    max-height: calc(100vh - var(--kk-spacing-2x-large));
    background-color: var(--kk-panel-background-color);
    border-radius: var(--kk-border-radius-large);
    box-shadow: var(--kk-shadow-x-large);
    overflow: hidden;

    /* Estado de partida da animação */
    opacity: 0;
    scale: 0.9;
    transition:
      opacity var(--kk-dialog-transition, var(--kk-transition-slow)),
      scale var(--kk-dialog-transition, var(--kk-transition-slow)),
      display var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete,
      overlay var(--kk-dialog-transition, var(--kk-transition-slow)) allow-discrete;
  }

  .dialog:modal .dialog__panel {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .dialog:modal .dialog__panel {
      opacity: 0;
      scale: 0.9;
    }
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--kk-spacing-large);
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: var(--kk-font-size-large);
    line-height: var(--kk-line-height-dense);
    margin: 0;
  }

  .dialog__header-actions {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-x-small);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--kk-spacing-large);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    padding: var(--kk-spacing-large);
    text-align: end;
    display: grid;
    grid-auto-flow: column;
    gap: 16px;
  }
`,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng=class extends (Xh=k,Yh=[D(`.dialog`)],Jh=[T({type:Boolean,reflect:!0})],qh=[T({reflect:!0})],Kh=[T({attribute:`no-header`,type:Boolean,reflect:!0})],Gh=[O(`open`,{waitUntilFirstUpdate:!0})],Xh){constructor(){super(...arguments),_(Zh,5,this),y(this,`hasSlotController`,new Ps(this,`footer`)),y(this,`localize`,new hi(this)),b(this,Qh,_(Zh,8,this)),_(Zh,11,this),b(this,$h,_(Zh,12,this,!1)),_(Zh,15,this),b(this,eg,_(Zh,16,this,``)),_(Zh,19,this),b(this,tg,_(Zh,20,this,!1)),_(Zh,23,this)}requestClose(e){this.emit(`kk-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented||this.hide()}firstUpdated(){this.open&&this.abrir()}abrir(){this.dialog.open||(this.dialog.showModal(),this.emit(`kk-initial-focus`,{cancelable:!0}))}fechar(){this.dialog.open&&this.dialog.close()}handleOpenChange(){this.open?(this.emit(`kk-show`),this.abrir(),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.fechar(),this.emit(`kk-after-hide`))}async show(){this.open||=!0}async hide(){this.open&&=!1}handleCancel(e){e.preventDefault(),this.requestClose(`keyboard`)}handleClose(){this.open=!1}render(){return S`
      <dialog
        part="base"
        class="dialog"
        @cancel=${this.handleCancel}
        @close=${this.handleClose}
        @click=${e=>e.target===this.dialog&&this.requestClose(`overlay`)}
      >
        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-label=${w(this.noHeader?this.label:void 0)}
          aria-labelledby=${w(this.noHeader?void 0:`title`)}
        >
          ${this.noHeader?``:S`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <kk-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></kk-icon-button>
                  </div>
                </header>
              `}
          <div part="body" class="dialog__body"><slot></slot></div>

          ${this.hasSlotController.test(`footer`)?S`
                <footer part="footer" class="dialog__footer">
                  <slot name="footer"></slot>
                </footer>
              `:``}
        </div>
      </dialog>
    `}};Zh=be(Xh),Qh=new WeakMap,$h=new WeakMap,eg=new WeakMap,tg=new WeakMap,v(Zh,4,`dialog`,Yh,ng,Qh),v(Zh,4,`open`,Jh,ng,$h),v(Zh,4,`label`,qh,ng,eg),v(Zh,4,`noHeader`,Kh,ng,tg),v(Zh,1,`handleOpenChange`,Gh,ng),g(Zh,ng),y(ng,`styles`,[so,Wh]),y(ng,`dependencies`,{"kk-icon-button":Ns}),ng.define(`kk-dialog`);var rg=x`
  :host {
    --kk-menu-item-submenu-offset: -2px;
    --kk-menu-item-check-width: 1.5em;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    line-height: var(--kk-line-height-normal);
    letter-spacing: var(--kk-letter-spacing-normal);
    color: var(--kk-color-neutral-700);
    padding: var(--kk-spacing-2x-small) var(--kk-spacing-2x-small);
    transition: var(--kk-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(kk-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading kk-spinner {
    --kk-spinner-indicator-color: currentColor;
    --kk-spinner-track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .menu-item .menu-item__label {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /*
   * A descrição é a segunda linha, menor e apagada. O item com ela deixa de
   * ser de uma linha só: o texto quebra, e o prefixo — que o menu-item já
   * centra — fica no meio das duas linhas, que é onde um ícone de destino fica.
   */
  .menu-item .menu-item__description {
    display: none;
    font-size: var(--kk-font-size-small);
    line-height: var(--kk-line-height-dense);
    color: var(--kk-color-text-muted);
  }

  .menu-item--has-description {
    white-space: normal;
  }

  .menu-item--has-description .menu-item__description {
    display: block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--kk-menu-item-prefix-size, 1em);
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--kk-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--kk-spacing-x-small);
  }

  /* Triângulo seguro */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--kk-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--kk-menu-item-safe-triangle-cursor-x, 0) var(--kk-menu-item-safe-triangle-cursor-y, 0),
      var(--kk-menu-item-safe-triangle-submenu-start-x, 0) var(--kk-menu-item-safe-triangle-submenu-start-y, 0),
      var(--kk-menu-item-safe-triangle-submenu-end-x, 0) var(--kk-menu-item-safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--kk-color-neutral-100);
    color: var(--kk-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--kk-menu-item-check-width);
    visibility: hidden;
  }

  /* O chevron do submenu não obedece à largura do visto: ele fica do outro lado. */
  .menu-item .menu-item__chevron {
    width: 1.5em;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Os submenus ganham elevação. */
  kk-popup::part(popup) {
    box-shadow: var(--kk-shadow-large);
    margin-left: var(--kk-menu-item-submenu-offset);
  }

  .menu-item--rtl kk-popup::part(popup) {
    margin-left: calc(-1 * var(--kk-menu-item-submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(kk-menu) {
    max-width: var(--kk-popup-auto-size-available-width) !important;
    max-height: var(--kk-popup-auto-size-available-height) !important;
  }
`,ig=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),ig(e,t);return!0},ag=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},og=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),lg(t)}};function sg(e){this._$AN===void 0?this._$AM=e:(ag(this),this._$AM=e,og(this))}function cg(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)ig(r[e],!1),ag(r[e]);else r!=null&&(ig(r,!1),ag(r))}else ig(this,e)}}var lg=e=>{e.type==rs.CHILD&&(e._$AP??=cg,e._$AQ??=sg)},ug=class extends as{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),og(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(ig(this,e),ag(this))}setValue(e){if(Ya(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},dg=()=>new fg,fg=class{},pg=new WeakMap,mg=is(class extends ug{render(e){return C}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),C}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=pg.get(t);n===void 0&&(n=new WeakMap,pg.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?pg.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),hg=class{constructor(e,t){h(this,`host`,void 0),h(this,`popupRef`,dg()),h(this,`enableSubmenuTimer`,-1),h(this,`isConnected`,!1),h(this,`isPopupConnected`,!1),h(this,`skidding`,0),h(this,`hasSlotController`,void 0),h(this,`submenuOpenDelay`,100),h(this,`handleMouseMove`,e=>{this.host.style.setProperty(`--kk-menu-item-safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-cursor-y`,`${e.clientY}px`)}),h(this,`handleMouseOver`,()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()}),h(this,`handleKeyDown`,e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e)}}),h(this,`handleClick`,e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`kk-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()}),h(this,`handleFocusOut`,e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()}),h(this,`handlePopupMouseover`,e=>{e.stopPropagation()}),h(this,`handlePopupReposition`,()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`kk-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--kk-menu-item-safe-triangle-submenu-end-y`,`${r+a}px`)}),this.host=e,e.addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`kk-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`kk-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`kk-menu-item, [role^='menuitem']`),n.length!==0)break;if(n&&n.length!==0){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap(),t=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0);this.skidding=t}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?S`
      <kk-popup
        ${mg(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </kk-popup>
    `:S` <slot name="submenu" hidden></slot> `}},gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,G,Dg,Og,kg,Ag,jg,Mg,Ng,Pg=class extends (Eg=k,Tg=[D(`slot:not([name])`)],wg=[D(`.menu-item`)],Cg=[T()],Sg=[T({type:Boolean,reflect:!0})],xg=[T()],bg=[T({type:Boolean,reflect:!0})],yg=[T({type:Boolean,reflect:!0})],vg=[O(`checked`)],_g=[O(`disabled`)],gg=[O(`type`)],Eg){constructor(){super(...arguments),_(G,5,this),y(this,`cachedTextLabel`),y(this,`localize`,new hi(this)),b(this,Dg,_(G,8,this)),_(G,11,this),b(this,Og,_(G,12,this)),_(G,15,this),b(this,kg,_(G,16,this,`normal`)),_(G,19,this),b(this,Ag,_(G,20,this,!1)),_(G,23,this),b(this,jg,_(G,24,this,``)),_(G,27,this),b(this,Mg,_(G,28,this,!1)),_(G,31,this),b(this,Ng,_(G,32,this,!1)),_(G,35,this),y(this,`hasSlotController`,new Ps(this,`submenu`,`description`)),y(this,`submenuController`,new hg(this,this.hasSlotController)),y(this,`handleHostClick`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),y(this,`handleMouseOver`,e=>{this.focus(),e.stopPropagation()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();typeof this.cachedTextLabel>`u`?this.cachedTextLabel=e:e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){this.checked&&this.type!==`checkbox`?(this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this)):this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return Fs(this.defaultSlot).trim()}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return S`
      <div
        id="anchor"
        part="base"
        class=${j({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t,"menu-item--has-description":this.hasSlotController.test(`description`)})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <kk-icon name="check" library="system" aria-hidden="true"></kk-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <div part="text" class="menu-item__text">
          <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>
          <slot name="description" part="description" class="menu-item__description"></slot>
        </div>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <kk-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></kk-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?S` <kk-spinner part="spinner" exportparts="base:spinner__base"></kk-spinner> `:``}
      </div>
    `}};G=be(Eg),Dg=new WeakMap,Og=new WeakMap,kg=new WeakMap,Ag=new WeakMap,jg=new WeakMap,Mg=new WeakMap,Ng=new WeakMap,v(G,4,`defaultSlot`,Tg,Pg,Dg),v(G,4,`menuItem`,wg,Pg,Og),v(G,4,`type`,Cg,Pg,kg),v(G,4,`checked`,Sg,Pg,Ag),v(G,4,`value`,xg,Pg,jg),v(G,4,`loading`,bg,Pg,Mg),v(G,4,`disabled`,yg,Pg,Ng),v(G,1,`handleCheckedChange`,vg,Pg),v(G,1,`handleDisabledChange`,_g,Pg),v(G,1,`handleTypeChange`,gg,Pg),g(G,Pg),y(Pg,`styles`,[so,rg]),y(Pg,`dependencies`,{"kk-icon":ns,"kk-popup":H,"kk-spinner":yc});var Fg=x`
  :host {
    display: block;
    position: relative;
    background: var(--kk-panel-background-color);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    padding: var(--kk-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(kk-divider) {
    --kk-divider-spacing: var(--kk-spacing-x-small);
  }
`,Ig,Lg,Rg,zg,Bg=class extends (Lg=k,Ig=[D(`slot`)],Lg){constructor(){super(...arguments),b(this,zg,_(Rg,8,this)),_(Rg,11,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>e instanceof Element&&t.includes(e.getAttribute(`role`)??``));if(!r||n.find(e=>e instanceof Element&&e.getAttribute(`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`kk-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`kk-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter(e=>!(!(e instanceof HTMLElement)||e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return S`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Rg=be(Lg),zg=new WeakMap,v(Rg,4,`defaultSlot`,Ig,Bg,zg),g(Rg,Bg),y(Bg,`styles`,[so,Fg]);var Vg=x`
  /*
   * O editor é um campo de entrada, e tem de parecer um.
   *
   * Ele nasceu sobre os tokens de painel — fundo, borda e sombra de cartão —, e
   * o resultado era um branco diferente do de todo kk-input e kk-textarea da
   * mesma tela, com direito a sombra e a um pulo de dois pixels no foco que
   * nenhum outro campo dá. Agora a moldura sai dos mesmos tokens de campo que
   * os outros usam: mesmo fundo, mesma borda, mesmo anel de foco.
   */
  /*
   * A caixa tem altura fechada, e quem rola é o conteúdo — não a página.
   *
   * Ela crescia com o texto, e a barra grudenta não salvava: o overflow: hidden
   * daqui faz do próprio kk-editor o scrollport dela, e um scrollport que não
   * rola nunca gruda coisa nenhuma. Numa nota de duas telas a barra subia junto
   * com o texto e formatar o último parágrafo pedia rolar até o começo.
   */
  kk-editor {
    display: flex;
    flex-direction: column;
    max-height: var(--kk-editor-max-height, 80vh);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
    border-radius: var(--kk-input-border-radius-medium);
    overflow: hidden !important;
    background: var(--kk-input-background-color) !important;
    transition:
      var(--kk-transition-medium) border-color,
      var(--kk-transition-medium) box-shadow !important;
  }

  /* Estado de Foco (quando o usuário clica para escrever) */
  kk-editor:focus-within {
    border-color: var(--kk-input-border-color-focus) !important;
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color) !important;
  }

  /*
   * A barra fica parada no topo da caixa, e não entra na rolagem: flex: none é
   * o que a impede de ser espremida quando o conteúdo cresce.
   *
   * O sticky continua como rede para quem soltar o teto da caixa
   * (--kk-editor-max-height: none) e deixar a página rolar o editor inteiro —
   * é aí que o deslocamento serve, para quem já tem barra própria no topo.
   */
  .kk-editor__toolbar {
    flex: none;
    position: sticky !important;
    top: 0 !important;
    z-index: 20 !important;
    inset-block-start: var(--kk-editor-toolbar-offset, 0);
    border-start-start-radius: var(--kk-border-radius-medium);
    border-start-end-radius: var(--kk-border-radius-medium);
    display: flex !important;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--kk-spacing-2x-small);
    padding: var(--kk-spacing-2x-small);
    background-color: var(--kk-input-background-color);
    border-block-end: solid var(--kk-input-border-width) var(--kk-input-border-color);
    min-height: var(--kk-input-height-medium);
    backdrop-filter: blur(8px) !important;
    /* O Safari só aceita o desfoque com prefixo até o 18. */
    -webkit-backdrop-filter: blur(8px) !important;
  }

  /*
   * Os grupos são ilhas, não pedaços de uma fita.
   *
   * A barra tem sete grupos e dezoito botões, e cabe inteira numa linha só num
   * monitor. Dentro de um diálogo estreito ela quebra — e quebrava mal: os grupos se
   * separavam por uma margem, que some justamente quando o grupo cai no começo de uma
   * fileira, então o resultado eram cinco fileiras de botões soltos, sem nada dizendo
   * quais pertencem juntos. Era o que a captura do backlog mostrava.
   *
   * Duas mudanças resolvem, e as duas valem em qualquer largura: cada grupo ganha uma
   * superfície própria (o desenho do agrupamento deixa de depender de espaço vazio e
   * sobrevive à quebra de linha), e a quebra passa a ser permitida DENTRO do grupo —
   * sem isso um grupo de quatro botões que não coubesse empurrava os quatro para a
   * fileira seguinte, e era daí que vinham os buracos.
   */
  .kk-editor__group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--kk-spacing-3x-small);
    padding: var(--kk-spacing-3x-small);
    border-radius: var(--kk-border-radius-medium);
    background-color: var(--kk-input-filled-background-color);
  }

  .kk-editor__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* 2rem é o alvo mínimo de toque que ainda deixa a barra caber num telefone. */
    min-width: 2rem;
    min-height: 2rem;
    padding: 0;
    border: none;
    border-radius: var(--kk-border-radius-small);
    background: none;
    color: var(--kk-color-neutral-700);
    font-size: var(--kk-font-size-medium);
    cursor: pointer;
    transition:
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) color;
  }

  .kk-editor__button:hover:not(:disabled) {
    background-color: var(--kk-input-background-color);
    color: var(--kk-color-neutral-900);
  }

  .kk-editor__button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .kk-editor__button[aria-pressed='true'] {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
  }

  /*
   * ── OS PAINÉIS DOS MENUS SUSPENSOS ────────────────────────────────────────
   *
   * A paleta e o seletor de tamanho da tabela não são menus: são conteúdo solto
   * dentro do painel do kk-dropdown, e o painel do kk-dropdown é só um slot — a
   * superfície de cartão quem traz é o kk-menu. Sem estas regras, a paleta
   * aparece flutuando sobre o texto, sem fundo e sem borda.
   */
  .kk-editor__panel {
    display: flex;
    flex-direction: column;
    gap: var(--kk-spacing-2x-small);
    padding: var(--kk-spacing-2x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    background-color: var(--kk-panel-background-color);
    box-shadow: var(--kk-shadow-large);
  }

  /*
   * O kk-menu que entra no painel da tabela já é um cartão, e cartão dentro de
   * cartão desenha duas molduras concêntricas a um espaço de distância. Ele
   * perde a própria superfície e fica sendo só a lista.
   */
  .kk-editor__panel kk-menu {
    --kk-panel-border-width: 0;
    --kk-panel-background-color: transparent;
  }

  .kk-editor__panel-action {
    display: flex;
    align-items: center;
    gap: var(--kk-spacing-2x-small);
    padding: var(--kk-spacing-2x-small);
    border: none;
    border-radius: var(--kk-border-radius-small);
    background: none;
    color: var(--kk-color-neutral-700);
    font: inherit;
    text-align: start;
    cursor: pointer;
  }

  .kk-editor__panel-action:hover {
    background-color: var(--kk-input-filled-background-color);
  }

  /*
   * ── AS PALETAS ────────────────────────────────────────────────────────────
   *
   * Seis colunas nas duas: a do texto tem doze amostras e a do fundo também, e
   * as duas fecham em dois retângulos do mesmo tamanho. A amostra é o próprio
   * botão — pintar um quadrado dentro dele daria à cor uma moldura que ela não
   * tem no texto.
   */
  .kk-editor__swatches {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: var(--kk-spacing-3x-small);
  }

  .kk-editor__swatch {
    width: var(--kk-spacing-large);
    height: var(--kk-spacing-large);
    padding: 0;
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-small);
    cursor: pointer;
  }

  .kk-editor__swatch[aria-pressed='true'] {
    outline: solid var(--kk-focus-ring-width) var(--kk-color-primary-600);
    outline-offset: var(--kk-spacing-3x-small);
  }

  /*
   * A faixa de cor no gatilho das duas paletas — é ela que diz, sem abrir o
   * menu, com que cor o cursor está escrevendo. Vazia, ela fica sendo a moldura
   * de um retângulo transparente, que é o desenho de "sem cor".
   */
  .kk-editor__button:has(.kk-editor__ink) {
    flex-direction: column;
    gap: var(--kk-spacing-3x-small);
  }

  .kk-editor__ink {
    width: var(--kk-spacing-large);
    height: var(--kk-spacing-3x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-small);
  }

  /*
   * ── O SELETOR DE TAMANHO DA TABELA ────────────────────────────────────────
   *
   * O número de colunas vem do componente, e não está cravado aqui: quem sabe
   * quantas células foram desenhadas é quem as desenhou, e as duas contas
   * discordarem deixaria a grade torta sem erro nenhum.
   */
  .kk-editor__grid {
    display: grid;
    grid-template-columns: repeat(var(--kk-editor-grade-colunas, 10), 1fr);
    gap: var(--kk-spacing-3x-small);
  }

  .kk-editor__grid-cell {
    width: var(--kk-spacing-medium);
    height: var(--kk-spacing-medium);
    padding: 0;
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-small);
    background-color: var(--kk-input-background-color);
    cursor: pointer;
  }

  .kk-editor__grid-cell--marcada {
    border-color: var(--kk-color-primary-600);
    background-color: var(--kk-color-primary-600);
  }

  .kk-editor__grid-label {
    text-align: center;
    font-size: var(--kk-font-size-small);
    color: var(--kk-color-neutral-600);
  }

  /*
   * O seletor de bloco é o único botão da barra com duas peças — o ícone do bloco
   * corrente e a seta do menu. Sem folga entre elas, e sem respiro nas laterais,
   * os dois desenhos se encostam dentro dos mesmos 2rem dos botões de uma peça só.
   */
  .kk-editor__button--select {
    gap: var(--kk-spacing-3x-small);
    padding-inline: var(--kk-spacing-2x-small);
  }

  /* Os ícones de dentro dos botões são desenhados. */
  .kk-editor__button kk-icon {
    display: inline-block;
    width: var(--kk-spacing-large);
    height: var(--kk-spacing-large);
  }

  /*
   * A altura pedida é a BASE do item flex, e não um min-height: com o mínimo,
   * um item flex não encolhe abaixo dele, e uma barra que quebrasse em cinco
   * fileiras num telefone empurraria o texto para fora do teto da caixa — que
   * corta, porque o host é overflow: hidden. Como base, a altura é a mesma
   * quando há espaço e cede quando não há, e o que sobra é rolagem.
   */
  .kk-editor__content,
  .kk-editor__source {
    flex: 1 1 var(--kk-editor-min-height, 45vh);
    min-height: 0;
    overflow-y: auto;
  }

  .kk-editor__content {
    padding: var(--kk-spacing-medium) var(--kk-spacing-large) !important;
    overflow-wrap: break-word;
    line-height: var(--kk-line-height-normal) !important;
    font-size: var(--kk-font-size-large) !important;
  }

  .kk-editor__content:focus {
    outline: none;
  }

  /*
   * O código-fonte ocupa exatamente o lugar da área de edição — mesma caixa,
   * mesma rolagem —, e é o único texto do editor em monoespaçada: o que se lê
   * aqui é marcação, e alinhar tag com tag é o que torna a leitura possível.
   */
  .kk-editor__source {
    padding: var(--kk-spacing-medium) var(--kk-spacing-large);
    border: none;
    background: none;
    color: inherit;
    font-family: var(--kk-font-mono);
    font-size: var(--kk-font-size-small);
    line-height: var(--kk-line-height-normal);
    resize: none;
    white-space: pre-wrap;
    tab-size: 2;
  }

  .kk-editor__source:focus {
    outline: none;
  }

  /*
   * Os destaques e a âncora de nota são a SAÍDA do editor: as classes ficam
   * gravadas no HTML e quem exibe o texto depois precisa delas pintadas. Por isso
   * moram aqui, e não no CSS de cada app — a folha é adotada no documento assim
   * que o componente é importado, e vale tanto para a edição quanto para a leitura.
   *
   * O destaque é aplicado ao BLOCO corrente (veja destacar()), e o desenho é o do
   * kk-alert À RISCA — a MESMA receita, os MESMOS valores: tinta chapada no corpo
   * (a força kk-tint-strength do tema, misturada com o fundo do painel), moldura
   * fina de painel e barra na borda de início, as duas últimas saindo do acento.
   * Um token por peça seria uma chance a mais de elas discordarem.
   *
   * O acento é o degrau 600, como as cinco variantes de alerta, e sai do tema em
   * vez de um hex: a rampa espelha no escuro, então o mesmo destaque continua
   * legível nos dois temas.
   */
  .destaque--azul,
  .destaque--verde,
  .destaque--vermelho,
  .destaque--amarelo,
  .destaque--ciano {
    --kk-editor-highlight-color: var(--kk-color-primary-600);

    padding: var(--kk-spacing-large);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-inline-start-width: calc(var(--kk-panel-border-width) * 3);
    border-inline-start-color: var(--kk-editor-highlight-color);
    border-radius: var(--kk-border-radius-medium);
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-normal);
    line-height: 1.6;
    color: var(--kk-color-neutral-700);
    background-color: color-mix(
      in oklab,
      var(--kk-editor-highlight-color) var(--kk-tint-strength),
      var(--kk-panel-background-color)
    );
  }

  .destaque--azul {
    --kk-editor-highlight-color: var(--kk-color-primary-600);
  }

  .destaque--verde {
    --kk-editor-highlight-color: var(--kk-color-success-600);
  }

  .destaque--vermelho {
    --kk-editor-highlight-color: var(--kk-color-danger-600);
  }

  .destaque--amarelo {
    --kk-editor-highlight-color: var(--kk-color-warning-600);
  }

  .destaque--ciano {
    --kk-editor-highlight-color: var(--kk-color-sky-600);
  }

  /*
   * ── OS ESTILOS DE PARÁGRAFO ───────────────────────────────────────────────
   *
   * Como os destaques, eles são SAÍDA do editor: a classe fica gravada no HTML e
   * quem exibe o texto depois precisa dela desenhada. Por isso moram aqui, na
   * folha que é adotada no documento assim que o componente é importado, e não
   * no CSS de cada app.
   *
   * Todos desenham só com token, e é o que os faz atravessar a troca de tema —
   * foi por não fazer isso que o neon do SunEditor ficou de fora.
   */
  .paragrafo--espacado {
    line-height: var(--kk-line-height-loose);
    letter-spacing: var(--kk-letter-spacing-loose);
  }

  .paragrafo--emoldurado {
    padding-block: var(--kk-spacing-small);
    border-block: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
  }

  .paragrafo--recuado {
    text-indent: var(--kk-spacing-2x-large);
  }

  /*
   * A capitular é a única medida em em da folha, e tem de ser: ela é três vezes
   * a letra do parágrafo em que cai, e um degrau fixo da escala a deixaria do
   * mesmo tamanho num título e num pé de página.
   */
  .paragrafo--capitular::first-letter {
    float: inline-start;
    padding-inline-end: var(--kk-spacing-2x-small);
    font-size: 3em;
    font-weight: var(--kk-font-weight-bold);
    line-height: 1;
    color: var(--kk-color-primary-600);
  }

  /*
   * A epígrafe é o CABEÇALHO poético que abre um texto (desde 11/09/2026 —
   * antes era uma citação miúda recuada para o fim): centrada, em serifa, com a
   * aspa grande acima e um fio curto abaixo. **O subtítulo é o bloco seguinte,
   * com a classe própria**, e não a segunda linha do mesmo bloco: não há seletor
   * de CSS para "o texto depois do <br>", e o ::first-line que tentou fazer isso
   * desenhava como subtítulo o rabo de um título que quebrava a linha. É a
   * convenção da fonte da poesia, e a mecânica é a mesma: o título perde o fio e
   * a margem quando o subtítulo vem logo abaixo, e o fio passa para ele.
   *
   * A aspa e o fio saem do texto, não da caixa: são ::before e ::after, na cor
   * primária apagada por color-mix. O fio tem largura máxima, e não fixa — numa
   * coluna estreita ele encolhe com ela.
   */
  .paragrafo--epigrafe,
  .paragrafo--epigrafe-subtitulo {
    max-width: 40rem;
    margin-inline: auto;
    font-family: var(--kk-font-serif);
    line-height: var(--kk-line-height-dense);
    text-align: center;
    text-indent: 0;
    text-wrap: balance;
  }

  .paragrafo--epigrafe {
    position: relative;
    margin-block: var(--kk-spacing-2x-large);
    padding-block-start: var(--kk-spacing-2x-large);
    font-size: var(--kk-font-size-x-large);
    font-weight: var(--kk-font-weight-normal);
    letter-spacing: var(--kk-letter-spacing-dense);
    color: var(--kk-color-neutral-900);
  }

  .paragrafo--epigrafe::before {
    content: '“';
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 50%;
    transform: translateX(-50%);
    font-size: var(--kk-font-size-4x-large);
    line-height: 1;
    color: color-mix(in srgb, var(--kk-color-primary-600) 40%, transparent);
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
  }

  .paragrafo--epigrafe-subtitulo {
    margin-block: 0 var(--kk-spacing-2x-large);
    font-size: var(--kk-font-size-medium);
    font-style: italic;
    font-weight: var(--kk-font-weight-light);
    color: var(--kk-color-text-muted);
  }

  .paragrafo--epigrafe::after,
  .paragrafo--epigrafe-subtitulo::after {
    content: '';
    display: block;
    width: 100%;
    max-width: var(--kk-spacing-7x-large);
    height: var(--kk-panel-border-width);
    margin-block-start: var(--kk-spacing-medium);
    margin-inline: auto;
    background-color: color-mix(in srgb, var(--kk-color-primary-600) 50%, transparent);
  }

  /* Com o subtítulo logo abaixo, o fio e a margem são dele. */
  .paragrafo--epigrafe:has(+ .paragrafo--epigrafe-subtitulo) {
    margin-block-end: var(--kk-spacing-x-small);
  }

  .paragrafo--epigrafe:has(+ .paragrafo--epigrafe-subtitulo)::after {
    content: none;
  }

  /*
   * Versaletes de verdade (small-caps), e não maiúsculas encolhidas: a
   * inicial maiúscula do texto continua maior que as outras, que é o que
   * distingue um nome próprio de uma sigla. O espaço entre letras é o folgado
   * da escala, que é o que versalete pede para não fechar.
   */
  .paragrafo--versaletes {
    font-variant-caps: small-caps;
    letter-spacing: var(--kk-letter-spacing-loose);
    line-height: var(--kk-line-height-dense);
  }

  /*
   * O bloco de baixo dos versaletes — a referência atrás do travessão, como a
   * fonte da poesia: menor, apagada, em itálico, sem versalete e sem o espaço
   * folgado, colada ao bloco de cima. É o par que a quebra de linha de dentro
   * do bloco desfaz (ver BLOCO_DE_BAIXO, no componente).
   */
  .paragrafo--versaletes-subtitulo {
    margin-block: calc(-1 * var(--kk-spacing-small)) var(--kk-spacing-medium);
    font-size: var(--kk-font-size-small);
    font-style: italic;
    font-variant-caps: normal;
    letter-spacing: 0.02em;
    text-indent: 0;
    color: var(--kk-color-text-muted);
  }

  /* A letra miúda de fim de página: menor e apagada, sem fio nenhum. */
  .paragrafo--miudo {
    font-size: var(--kk-font-size-small);
    line-height: var(--kk-line-height-dense);
    color: var(--kk-color-text-muted);
  }

  /*
   * Duas colunas para a lista longa e curta de linha — nomes, versículos,
   * vocabulário. É column-count, e não uma grade: o texto continua UM
   * parágrafo, e a quebra entre as colunas é do navegador, que a refaz na
   * largura de quem lê. Numa coluna estreita ele cai para uma sozinho, pelo
   * column-width, sem media query nenhuma.
   */
  .paragrafo--colunas {
    column-count: 2;
    column-width: 14rem;
    column-gap: var(--kk-spacing-large);
  }

  /*
   * O rodapé de notas: fio acima, corpo pequeno e cor apagada. É a MESMA classe
   * que o Kobi Note escreve no bloco que ele monta a partir das âncoras de nota
   * na leitura, e a receita mora aqui — e só aqui — para que um rodapé escrito à
   * mão no acervo e um montado pelo app não saiam de dois desenhos. O que é do
   * bloco montado (o título e a seta de voltar) continua no app.
   */
  .rodape-notas {
    margin-block-start: var(--kk-spacing-2x-large);
    padding-block-start: var(--kk-spacing-small);
    border-block-start: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    font-size: var(--kk-font-size-small);
    color: var(--kk-color-text-muted);
  }

  .note-nota-ref {
    font-size: 0.72em;
    font-weight: var(--kk-font-weight-bold);
    vertical-align: super;
    color: var(--kk-color-primary-600);
    text-decoration: none;
  }

  /*
   * ── OS BLOCOS DE POESIA ───────────────────────────────────────────────────
   *
   * Saída do editor como os estilos de parágrafo, e pelo mesmo motivo moram
   * aqui: quem cura no Kobi Admin precisa ver a poesia como o Kobi Note a
   * desenha, e a folha do app não chega ao editor do admin. O que é do
   * CONTÊINER — serifa, corpo, largura de coluna — continua no app; aqui está
   * o que cada bloco é.
   */

  /*
   * O texto tema: a escritura que abre a peça. Centrado, em itálico e apagado,
   * para não disputar com a primeira estrofe, e com um fio embaixo que o separa
   * do corpo. O fio desce para a fonte quando ela vem logo abaixo — é o par
   * tema + fonte que se fecha, e não o tema sozinho.
   */
  .poesia--tema {
    margin-block: 0 var(--kk-spacing-x-large);
    padding-block-end: var(--kk-spacing-medium);
    border-block-end: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    font-style: italic;
    line-height: var(--kk-line-height-normal);
    text-align: center;
    text-wrap: balance;
    color: var(--kk-color-text-muted);
  }

  .poesia--tema:has(+ .poesia--fonte) {
    margin-block-end: 0;
    padding-block-end: 0;
    border-block-end: none;
  }

  .poesia--tema + .poesia--fonte {
    margin-block-end: var(--kk-spacing-x-large);
    padding-block-end: var(--kk-spacing-medium);
    border-block-end: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    text-align: center;
  }

  /*
   * O verso: uma linha da poesia, um bloco por linha, coladas — a estrofe é o
   * bloco vazio entre elas. O recuo pendente é o que diz que a linha que não
   * coube na largura da tela é continuação, e não um verso novo.
   */
  .poesia--verso {
    margin-block: 0;
    padding-inline-start: var(--kk-spacing-large);
    text-indent: calc(-1 * var(--kk-spacing-large));
    line-height: var(--kk-line-height-dense);
  }

  /* A escritura citada no meio do corpo: o cartão que a separa do verso. */
  .poesia--escritura {
    margin-block: var(--kk-spacing-medium);
    padding: var(--kk-spacing-small) var(--kk-spacing-medium);
    border-inline-start: solid 3px var(--kk-color-gray-600);
    border-radius: 0 var(--kk-border-radius-medium) var(--kk-border-radius-medium) 0;
    background-color: var(--kk-color-gray-100);
    font-style: italic;
    text-indent: 0;
  }

  /*
   * A fonte da citação — a referência atrás do travessão, no bloco de baixo.
   * Corpo pequeno, apagada, alinhada ao fim, e colada ao bloco de cima: é dele
   * que ela fala.
   */
  .poesia--fonte {
    margin-block: calc(-1 * var(--kk-spacing-2x-small)) var(--kk-spacing-medium);
    font-size: var(--kk-font-size-small);
    font-style: normal;
    letter-spacing: 0.02em;
    text-align: end;
    text-indent: 0;
    color: var(--kk-color-text-muted);
  }

  /*
   * Colada à escritura: o cartão perde a margem de baixo, e a fonte entra logo
   * abaixo dele, alinhada ao texto de dentro (o recuo é o do cartão) — sem a
   * margem negativa, que a poria sobre a tinta.
   */
  .poesia--escritura:has(+ .poesia--fonte) {
    margin-block-end: 0;
  }

  .poesia--escritura + .poesia--fonte {
    margin-block-start: var(--kk-spacing-2x-small);
    padding-inline-end: var(--kk-spacing-medium);
  }

  /* O refrão: recuado e em itálico, como se canta. */
  .poesia--refrao {
    margin-inline-start: var(--kk-spacing-x-large);
    font-style: italic;
  }

  /* A dedicatória: pequena, em itálico, no canto do fim. */
  .poesia--dedicatoria {
    margin-block-end: var(--kk-spacing-large);
    font-size: var(--kk-font-size-small);
    font-style: italic;
    text-align: end;
    color: var(--kk-color-text-muted);
  }

  /*
   * ── AS AMOSTRAS DO MENU ───────────────────────────────────────────────────
   *
   * Cada item dos três menus de classe (estilo de parágrafo, bloco de poesia,
   * destaque) desenha o próprio rótulo COM a classe que vai aplicar — é o que
   * faz "Versaletes" aparecer em versaletes antes do clique. A amostra herda a
   * regra de verdade, e o que se desfaz aqui é só o que não cabe numa linha de
   * menu: margem, coluna, recuo de um quarto, o fio de cima. A moldura de alerta
   * do destaque vira só a tinta e a barra de início, que é o que distingue as
   * cinco de relance. A capitular fica, menor.
   */
  .kk-editor__sample {
    display: block;
    min-width: 11rem;
    margin: 0;
    padding: var(--kk-spacing-3x-small) var(--kk-spacing-2x-small);
    border-width: 0;
    border-radius: var(--kk-border-radius-small);
    column-count: auto;
    column-width: auto;
    text-indent: 0;
    line-height: var(--kk-line-height-dense);
    text-align: start;
  }

  .kk-editor__sample[class*='destaque--'],
  .kk-editor__sample.poesia--escritura {
    border-inline-start-width: 3px;
  }

  .kk-editor__sample.paragrafo--recuado {
    text-indent: var(--kk-spacing-medium);
  }

  .kk-editor__sample.paragrafo--emoldurado,
  .kk-editor__sample.rodape-notas,
  .kk-editor__sample.poesia--tema {
    padding-block: var(--kk-spacing-3x-small);
    border-block-width: var(--kk-panel-border-width);
  }

  .kk-editor__sample.poesia--refrao {
    margin-inline-start: 0;
  }

  /* No menu a epígrafe é uma linha: sem a aspa, sem o fio e no corpo do menu — e o subtítulo dos versaletes também vira uma. */
  .kk-editor__sample.paragrafo--epigrafe,
  .kk-editor__sample.paragrafo--epigrafe-subtitulo,
  .kk-editor__sample.paragrafo--versaletes-subtitulo {
    margin: 0;
    padding: 0;
    font-size: inherit;
    letter-spacing: inherit;
  }

  .kk-editor__sample.paragrafo--epigrafe::before,
  .kk-editor__sample.paragrafo--epigrafe::after,
  .kk-editor__sample.paragrafo--epigrafe-subtitulo::after {
    content: none;
  }

  .kk-editor__sample.paragrafo--capitular::first-letter {
    font-size: 1.6em;
    line-height: 0.9;
  }

  /* O caractere do menu de tipografia, no lugar do ícone. */
  .kk-editor__glyph {
    display: inline-block;
    min-width: 1.5em;
    font-size: var(--kk-font-size-large);
    text-align: center;
  }

  /*
   * A tipografia do texto rico. Vale para a área de edição e para qualquer
   * elemento marcado com a mesma classe na leitura — é o que faz o que se escreve
   * ter, no editor, a mesma forma que terá depois de gravado.
   */
  .kk-prose h1 {
    margin-block: var(--kk-spacing-large) var(--kk-spacing-small);
    font-size: var(--kk-font-size-x-large);
  }

  .kk-prose h2 {
    margin-block: var(--kk-spacing-large) var(--kk-spacing-x-small);
    font-size: var(--kk-font-size-large);
  }

  .kk-prose h3 {
    margin-block: var(--kk-spacing-medium) var(--kk-spacing-2x-small);
    font-size: var(--kk-font-size-medium);
  }

  .kk-prose h4 {
    margin-block: var(--kk-spacing-medium) var(--kk-spacing-3x-small);
    font-size: var(--kk-font-size-small);
  }

  .kk-prose p {
    margin-block: 0 var(--kk-spacing-small);
  }

  .kk-prose img {
    max-width: 100%;
    height: auto;
    border-radius: var(--kk-border-radius-medium);
  }

  .kk-prose blockquote {
    margin-inline: 0;
    padding-inline-start: var(--kk-spacing-medium);
    border-inline-start: solid 3px var(--kk-color-neutral-300);
    color: var(--kk-color-neutral-600);
  }

  .kk-prose table {
    width: 100%;
    border-collapse: collapse;
  }

  .kk-prose th,
  .kk-prose td {
    padding: var(--kk-spacing-2x-small);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
  }
`,Hg=x`
  :host {
    display: inline-block;
  }

  /*
   * Abrir e fechar é CSS: opacidade e escala no painel do popup, com o @starting-style dando
   * o ponto de partida quando ele entra no top layer. A origem da escala vem do lado que o
   * posicionador escolheu (data-current-placement), e é por isso que o componente só desativa
   * o popup depois da transição. Quem espera o fim é o componente, pelo getAnimations().
   */
  .dropdown::part(popup) {
    opacity: 0;
    scale: 0.9;
    transition:
      opacity var(--kk-dropdown-transition, var(--kk-transition-fast)) ease,
      scale var(--kk-dropdown-transition, var(--kk-transition-fast)) ease;
  }

  .dropdown--open::part(popup) {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .dropdown--open::part(popup) {
      opacity: 0;
      scale: 0.9;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dropdown::part(popup) {
      transition: none;
    }
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    box-shadow: var(--kk-shadow-large);
    border-radius: var(--kk-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* Quando um menu é passado por slot, ele precisa respeitar o auto-size do popup. */
  ::slotted(kk-menu) {
    max-width: var(--kk-popup-auto-size-available-width) !important;
    max-height: var(--kk-popup-auto-size-available-height) !important;
  }
`;function*Ug(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Ug(e.shadowRoot.activeElement)))}function Wg(){return[...Ug()].pop()}var Gg=new WeakMap;function Kg(e){let t=Gg.get(e);return t||(t=window.getComputedStyle(e,null),Gg.set(e,t)),t}function qg(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=Kg(e);return t.visibility!==`hidden`&&t.display!==`none`}function Jg(e){let{overflowY:t,overflowX:n}=Kg(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function Yg(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(Number.isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return qg(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:Jg(e):!1}function Xg(e){let t=Qg(e);return{start:t[0]??null,end:t.at(-1)??null}}function Zg(e,t){return e.getRootNode({composed:!0})?.host!==t}function Qg(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),i instanceof HTMLElement&&!n.includes(i)&&Yg(i)&&n.push(i),i instanceof HTMLSlotElement&&Zg(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var $g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,K,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_=class extends (d_=k,u_=[D(`.dropdown`)],l_=[D(`.dropdown__trigger`)],c_=[D(`.dropdown__panel`)],s_=[T({type:Boolean,reflect:!0})],o_=[T({reflect:!0})],a_=[T({type:Boolean,reflect:!0})],i_=[T({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],r_=[T({attribute:!1})],n_=[T({type:Number})],t_=[T({type:Number})],e_=[T({reflect:!0})],$g=[O(`open`,{waitUntilFirstUpdate:!0})],d_){constructor(){super(...arguments),_(K,5,this),b(this,f_,_(K,8,this)),_(K,11,this),b(this,p_,_(K,12,this)),_(K,15,this),b(this,m_,_(K,16,this)),_(K,19,this),y(this,`closeWatcher`),b(this,h_,_(K,20,this,!1)),_(K,23,this),b(this,g_,_(K,24,this,`bottom-start`)),_(K,27,this),b(this,__,_(K,28,this,!1)),_(K,31,this),b(this,v_,_(K,32,this,!1)),_(K,35,this),b(this,y_,_(K,36,this)),_(K,39,this),b(this,b_,_(K,40,this,0)),_(K,43,this),b(this,x_,_(K,44,this,0)),_(K,47,this),b(this,S_,_(K,48,this)),_(K,51,this),y(this,`handleKeyDown`,e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}),y(this,`handleDocumentKeyDown`,e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher)e.stopPropagation(),this.focusOnTrigger(),this.hide();else if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`kk-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?Wg():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}}),y(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}),y(this,`handlePanelSelect`,e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`kk-menu`&&(this.hide(),this.focusOnTrigger())})}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`kk-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems();if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){e.preventDefault(),this.open||(this.show(),await this.updateComplete);let r=e.key===`ArrowDown`||e.key===`Home`?n.at(0):n.at(-1);r&&this.updateComplete.then(()=>{t.setCurrentItem(r),r.focus()})}}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>Xg(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`kk-button`:case`kk-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,xi(this,`kk-after-show`)}painelTemFoco(){let e=this.panel?.assignedElements({flatten:!0})??[];for(let t of Ug())if(e.some(e=>e===t||e.contains(t)))return!0;return!1}async hide(){if(this.open)return this.painelTemFoco()&&this.focusOnTrigger(),this.open=!1,xi(this,`kk-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener(`kk-select`,this.handlePanelSelect),`CloseWatcher`in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener(`kk-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.closeWatcher?.destroy()}async handleOpenChange(){this.disabled?this.open=!1:(this.updateAccessibleTrigger(),this.open?(this.emit(`kk-show`),this.addOpenListeners(),this.popup.active=!0,await Ls(this,this.popup.popup),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.removeOpenListeners(),await Ls(this,this.popup.popup),this.open||(this.popup.active=!1),this.emit(`kk-after-hide`)))}render(){return S`
      <kk-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${w(this.sync?this.sync:void 0)}
        class=${j({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </kk-popup>
    `}};K=be(d_),f_=new WeakMap,p_=new WeakMap,m_=new WeakMap,h_=new WeakMap,g_=new WeakMap,__=new WeakMap,v_=new WeakMap,y_=new WeakMap,b_=new WeakMap,x_=new WeakMap,S_=new WeakMap,v(K,4,`popup`,u_,C_,f_),v(K,4,`trigger`,l_,C_,p_),v(K,4,`panel`,c_,C_,m_),v(K,4,`open`,s_,C_,h_),v(K,4,`placement`,o_,C_,g_),v(K,4,`disabled`,a_,C_,__),v(K,4,`stayOpenOnSelect`,i_,C_,v_),v(K,4,`containingElement`,r_,C_,y_),v(K,4,`distance`,n_,C_,b_),v(K,4,`skidding`,t_,C_,x_),v(K,4,`sync`,e_,C_,S_),v(K,1,`handleOpenChange`,$g,C_),g(K,C_),y(C_,`styles`,[so,Hg]),y(C_,`dependencies`,{"kk-popup":H});function w_(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}var T_=new Set(`p.br.div.span.h1.h2.h3.h4.strong.b.em.i.u.s.strike.sub.sup.mark.ul.ol.li.blockquote.hr.a.img.table.thead.tbody.tr.th.td`.split(`.`)),E_={"*":[`class`,`style`],a:[`href`,`title`,`data-nota`],img:[`src`,`alt`],td:[`colspan`,`rowspan`],th:[`colspan`,`rowspan`]},D_=new Set([`script`,`style`,`iframe`,`object`,`embed`,`template`]),O_=[{classe:`destaque--azul`,termo:`editorColorBlue`,icone:`highlight`},{classe:`destaque--verde`,termo:`editorColorGreen`,icone:`highlight`},{classe:`destaque--vermelho`,termo:`editorColorRed`,icone:`highlight`},{classe:`destaque--amarelo`,termo:`editorColorYellow`,icone:`highlight`},{classe:`destaque--ciano`,termo:`editorColorCyan`,icone:`highlight`}],k_=O_.map(e=>e.classe),A_=[{classe:`paragrafo--espacado`,termo:`editorParagraphSpaced`,icone:`line-height`},{classe:`paragrafo--emoldurado`,termo:`editorParagraphBordered`,icone:`border-horizontal`},{classe:`paragrafo--recuado`,termo:`editorParagraphIndented`,icone:`indent-increase`},{classe:`paragrafo--capitular`,termo:`editorParagraphDropCap`,icone:`letter-a`},{classe:`paragrafo--epigrafe`,termo:`editorParagraphEpigraph`,icone:`quote`},{classe:`paragrafo--epigrafe-subtitulo`,termo:`editorParagraphEpigraphSubtitle`,icone:`text-caption`},{classe:`paragrafo--versaletes`,termo:`editorParagraphSmallCaps`,icone:`letter-case-upper`},{classe:`paragrafo--versaletes-subtitulo`,termo:`editorParagraphSmallCapsSubtitle`,icone:`text-caption`},{classe:`paragrafo--miudo`,termo:`editorParagraphFinePrint`,icone:`text-decrease`},{classe:`paragrafo--colunas`,termo:`editorParagraphColumns`,icone:`columns-2`},{classe:`rodape-notas`,termo:`editorParagraphFootnotes`,icone:`notes`}],j_=A_.map(e=>e.classe),M_={"paragrafo--epigrafe":`paragrafo--epigrafe-subtitulo`,"paragrafo--versaletes":`paragrafo--versaletes-subtitulo`,"poesia--escritura":`poesia--fonte`},N_=Object.keys(M_).map(e=>`.${e}`).join(`, `);function P_(e){let t=[...e.querySelectorAll(`br`)];if(t.length===0)return null;for(let n of t){let t=document.createRange();if(t.setStartAfter(n),t.setEnd(e,e.childNodes.length),/^[\s\u00a0]*[—–]/.test(t.toString()))return n}return t[t.length-1]??null}function F_(e,t){let n=P_(e);if(n===null)return;let r=document.createRange();r.setStartAfter(n),r.setEnd(e,e.childNodes.length);let i=r.extractContents();n.remove();let a=document.createElement(`p`);a.className=t,a.append(i),I_(a),I_(e),a.textContent?.trim()!==``&&e.after(a)}function I_(e){let t=e.querySelector(`:not(br, img, hr):empty`);for(;t!==null;)t.remove(),t=e.querySelector(`:not(br, img, hr):empty`)}function L_(e){if(!Object.keys(M_).some(t=>e.includes(t)))return e;let t=document.createElement(`div`);t.innerHTML=e;for(let e of t.querySelectorAll(N_))for(let[t,n]of Object.entries(M_))e.classList.contains(t)&&F_(e,n);return t.innerHTML}var R_=[{classe:`poesia--tema`,termo:`editorPoetryTheme`,icone:`book-2`},{classe:`poesia--verso`,termo:`editorPoetryVerse`,icone:`text-wrap`},{classe:`poesia--escritura`,termo:`editorPoetryScripture`,icone:`quote`},{classe:`poesia--fonte`,termo:`editorPoetrySource`,icone:`signature`},{classe:`poesia--refrao`,termo:`editorPoetryRefrain`,icone:`repeat`},{classe:`poesia--dedicatoria`,termo:`editorPoetryDedication`,icone:`gift`}],z_=R_.map(e=>e.classe),B_=[{termo:`editorTypoEmDash`,amostra:`—`,abre:`— `},{termo:`editorTypoEnDash`,amostra:`–`,abre:`–`},{termo:`editorTypoDoubleQuotes`,amostra:`“ ”`,abre:`“`,fecha:`”`},{termo:`editorTypoSingleQuotes`,amostra:`‘ ’`,abre:`‘`,fecha:`’`},{termo:`editorTypoNbsp`,amostra:`␣`,abre:`\xA0`}],V_=new Set([...k_,...j_,...z_,`note-nota-ref`]),H_=/^var\(--kk-color-[a-z0-9-]+\)$/,U_={"text-align":/^(left|center|right|justify)$/,color:H_,"background-color":H_};function W_(e){let t=[];for(let n of e.split(`;`)){let e=n.indexOf(`:`);if(e<0)continue;let r=n.slice(0,e).trim().toLowerCase(),i=n.slice(e+1).replace(/!\s*important/i,``).toLowerCase().replace(/\s+/g,``),a=U_[r];a===void 0||!a.test(i)||t.push(`${r}: ${i}`)}return t.join(`; `)}var G_=/^data:image\/(?:png|jpeg|jpg|gif|webp|avif|bmp);base64,[A-Za-z0-9+/=]+$/,K_=[`image/png`,`image/jpeg`,`image/gif`,`image/webp`,`image/avif`,`image/bmp`],q_=`http://www.w3.org/1999/xhtml`;function J_(e){let t=new DOMParser().parseFromString(e,`text/html`),n=t.createTreeWalker(t.body,NodeFilter.SHOW_COMMENT),r=[];for(let e=n.nextNode();e!==null;e=n.nextNode())r.push(e);for(let e of r)e.remove();for(let e of[...t.body.querySelectorAll(`*`)]){if(e.namespaceURI!==q_){e.remove();continue}let t=e.tagName.toLowerCase();if(D_.has(t)){e.remove();continue}if(!T_.has(t)){e.replaceWith(...e.childNodes);continue}let n=[...E_[`*`]??[],...E_[t]??[]];for(let t of[...e.attributes])if(!n.includes(t.name))e.removeAttribute(t.name);else{if(t.name===`style`){let n=W_(t.value);n===``?e.removeAttribute(`style`):e.setAttribute(`style`,n)}if(t.name===`class`){let n=t.value.split(/\s+/).filter(e=>V_.has(e));n.length===0?e.removeAttribute(`class`):e.setAttribute(`class`,n.join(` `))}if(t.name===`href`||t.name===`src`){let n=t.value.trim();/^(https?:|mailto:|#|\/|\.)/i.test(n)||t.name===`src`&&G_.test(n)||e.removeAttribute(t.name)}}}return t.body.innerHTML}function Y_(e){let t=e??``;for(let e=0;e<3;e+=1){let e=J_(t);if(e===t)return e;t=e}return bu(new DOMParser().parseFromString(t,`text/html`).body.textContent??``)}var X_=[{rampa:`neutral`,termo:`editorColorGray`},{rampa:`red`,termo:`editorColorRed`},{rampa:`orange`,termo:`editorColorOrange`},{rampa:`yellow`,termo:`editorColorYellow`},{rampa:`lime`,termo:`editorColorLime`},{rampa:`green`,termo:`editorColorGreen`},{rampa:`teal`,termo:`editorColorTeal`},{rampa:`cyan`,termo:`editorColorCyan`},{rampa:`blue`,termo:`editorColorBlue`},{rampa:`violet`,termo:`editorColorViolet`},{rampa:`pink`,termo:`editorColorPink`}],Z_=[{valor:`var(--kk-color-neutral-900)`,termo:`editorColorDefault`},...X_.map(e=>({valor:`var(--kk-color-${e.rampa}-600)`,termo:e.termo}))],Q_=[{valor:`var(--kk-color-neutral-0)`,termo:`editorColorDefault`},...X_.map(e=>({valor:`var(--kk-color-${e.rampa}-200)`,termo:e.termo}))],$_={color:`#010203`,"background-color":`#040506`};function ev(e,t){let n=document.createElement(`span`);return n.style.setProperty(e,t),n.style.getPropertyValue(e)}var tv=`p, h1, h2, h3, h4, li, blockquote, div, td, th`,nv=8,rv=10,iv=Array.from({length:nv*rv},(e,t)=>({linha:Math.floor(t/rv)+1,coluna:t%rv+1}));function av(e){let t=document.createElement(e);return t.append(document.createElement(`br`)),t}function ov(e,t){return`<table><tbody>${`<tr>${`<td><br></td>`.repeat(t)}</tr>`.repeat(e)}</tbody></table><p><br></p>`}function sv(e,t){if(e.tagName.toLowerCase()===t)return;let n=document.createElement(t);for(let t of[...e.attributes])n.setAttribute(t.name,t.value);n.append(...e.childNodes),e.replaceWith(n)}function cv(e,t){let n=e.closest(`tr`),r=n?.parentElement;if(n===null||r==null)return;let i=document.createElement(`tr`),a=r.tagName===`THEAD`?`th`:`td`;for(let e=0;e<n.cells.length;e+=1)i.append(av(a));r.insertBefore(i,t?n.nextSibling:n)}function lv(e){let t=e.closest(`tr`),n=e.closest(`table`);if(t===null||n===null)return;if(n.rows.length<=1){n.remove();return}let r=t.parentElement;t.remove(),r!==null&&r.children.length===0&&r.remove()}function uv(e,t){let n=e.closest(`table`);if(n===null)return;let r=e.cellIndex;for(let e of[...n.rows]){let n=e.cells[r],i=av(n?.tagName===`TH`?`th`:`td`);n===void 0?e.append(i):e.insertBefore(i,t?n.nextSibling:n)}}function dv(e){let t=e.closest(`table`);if(t===null)return;let n=e.cellIndex;if(Math.max(...[...t.rows].map(e=>e.cells.length))<=1)t.remove();else for(let e of[...t.rows])e.cells[n]?.remove()}function fv(e){let t=e.closest(`table`);if(t===null)return;let n=t.tHead;if(n!==null){let e=t.tBodies[0]??t.createTBody();for(let t of[...n.rows].reverse()){for(let e of[...t.cells])sv(e,`td`);e.insertBefore(t,e.firstChild)}n.remove();return}let r=t.rows[0];if(r===void 0)return;for(let e of[...r.cells])sv(e,`th`);let i=r.parentElement;t.createTHead().append(r),i!==null&&i.children.length===0&&i.remove()}function pv(e){e.closest(`table`)?.remove()}var mv=[{termo:`editorTableRowAbove`,icone:`row-insert-top`,executar:e=>cv(e,!1)},{termo:`editorTableRowBelow`,icone:`row-insert-bottom`,executar:e=>cv(e,!0)},{termo:`editorTableRowDelete`,icone:`row-remove`,executar:lv},{termo:`editorTableColumnBefore`,icone:`column-insert-left`,executar:e=>uv(e,!1)},{termo:`editorTableColumnAfter`,icone:`column-insert-right`,executar:e=>uv(e,!0)},{termo:`editorTableColumnDelete`,icone:`column-remove`,executar:dv},{termo:`editorTableHeader`,icone:`layout-navbar`,executar:fv},{termo:`editorTableDelete`,icone:`trash`,executar:pv}],hv=[{icone:`arrow-back-up`,termo:`editorUndo`,comando:`undo`},{icone:`arrow-forward-up`,termo:`editorRedo`,comando:`redo`}],gv=[[{icone:`bold`,termo:`editorBold`,comando:`bold`,alterna:!0},{icone:`italic`,termo:`editorItalic`,comando:`italic`,alterna:!0},{icone:`underline`,termo:`editorUnderline`,comando:`underline`,alterna:!0},{icone:`strikethrough`,termo:`editorStrikethrough`,comando:`strikeThrough`,alterna:!0}],[{icone:`list`,termo:`editorBulletList`,comando:`insertUnorderedList`,alterna:!0},{icone:`list-numbers`,termo:`editorNumberedList`,comando:`insertOrderedList`,alterna:!0}],[{icone:`align-left`,termo:`editorAlignLeft`,comando:`justifyLeft`,alterna:!0},{icone:`align-center`,termo:`editorAlignCenter`,comando:`justifyCenter`,alterna:!0},{icone:`align-right`,termo:`editorAlignRight`,comando:`justifyRight`,alterna:!0},{icone:`align-justified`,termo:`editorAlignJustify`,comando:`justifyFull`,alterna:!0}],[{icone:`corner-down-left`,termo:`editorLineBreak`,comando:`insertLineBreak`},{icone:`separator-horizontal`,termo:`editorHorizontalRule`,comando:`insertHorizontalRule`}]],_v=[hv,...gv].flat().filter(e=>e.alterna===!0).map(e=>e.comando),vv={tag:`p`,termo:`editorParagraph`,icone:`pilcrow`},yv=[vv,{tag:`h1`,termo:`editorHeading1`,icone:`h-1`},{tag:`h2`,termo:`editorHeading2`,icone:`h-2`},{tag:`h3`,termo:`editorHeading3`,icone:`h-3`},{tag:`h4`,termo:`editorHeading4`,icone:`h-4`}],bv={tag:`blockquote`,termo:`editorQuote`,icone:`blockquote`};typeof document<`u`&&(Vg.styleSheet===void 0?xv(document.head):document.adoptedStyleSheets=[...document.adoptedStyleSheets,Vg.styleSheet]);function xv(e){if(e.querySelector(`:scope > style[data-kk-editor]`))return;let t=document.createElement(`style`);t.dataset.kkEditor=``,t.textContent=Vg.cssText,e.appendChild(t)}function Sv(e){let t=e.getRootNode(),n=Vg.styleSheet;if(t instanceof ShadowRoot){if(n===void 0){xv(t);return}t.adoptedStyleSheets.includes(n)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,n])}}var Cv,wv,Tv,Ev,Dv,Ov,kv,Av,jv=class e extends (Ev=k,Tv=[E()],wv=[E()],Cv=[T({type:Boolean,reflect:!0})],Ev){constructor(){super(...arguments),y(this,`localize`,new hi(this)),y(this,`area`,document.createElement(`div`)),y(this,`fonte`,document.createElement(`textarea`)),y(this,`conteudo`,``),b(this,Ov,_(Dv,8,this,!1)),_(Dv,11,this),b(this,kv,_(Dv,12,this,0)),_(Dv,15,this),y(this,`assinaturaDaBarra`,``),y(this,`ultimaFaixa`,null),y(this,`quadro`,0),b(this,Av,_(Dv,16,this,!1)),_(Dv,19,this),y(this,`handleFonteInput`,()=>{this.conteudo=this.fonte.value,this.emit(`kk-input`,{detail:{value:this.conteudo}})}),y(this,`handleInput`,()=>{this.conteudo=this.area.innerHTML,this.emit(`kk-input`,{detail:{value:this.conteudo}}),this.sincronizarBarra()}),y(this,`sincronizarBarra`,()=>{this.guardarSelecao(),this.quadro===0&&(this.quadro=requestAnimationFrame(()=>{this.quadro=0;let e=[this.tagDoBlocoCorrente(),..._v.map(e=>this.comandoLigado(e)?`1`:`0`),this.corCorrente(`color`)??``,this.corCorrente(`background-color`)??``,this.blocoCorrente()?.className??``,this.celulaCorrente()===void 0?``:`tabela`].join(`|`);e!==this.assinaturaDaBarra&&(this.assinaturaDaBarra=e,this.selecao+=1)}))}),y(this,`handlePaste`,e=>{e.preventDefault();let t=e.clipboardData;if(t===null)return;let n=t.getData(`text/html`),r=t.getData(`text/plain`);n===``?document.execCommand(`insertText`,!1,r):document.execCommand(`insertHTML`,!1,Y_(n)),this.handleInput()}),y(this,`aoApontarNaGrade`,e=>{let t=e.target.closest(`[data-linha]`);t!==null&&this.marcarGrade(Number(t.dataset.linha),Number(t.dataset.coluna))}),y(this,`aoTeclarNaGrade`,e=>{let t={ArrowUp:[-1,0],ArrowDown:[1,0],ArrowLeft:[0,-1],ArrowRight:[0,1]}[e.key],n=e.target.closest(`[data-linha]`);if(t===void 0||n===null)return;e.preventDefault();let r=w_(Number(n.dataset.linha)+t[0],1,nv),i=w_(Number(n.dataset.coluna)+t[1],1,rv);this.querySelector(`[data-linha="${r}"][data-coluna="${i}"]`)?.focus()})}get value(){return this.conteudo}set value(e){let t=L_(Y_(e??``));t===this.conteudo||t===L_(Y_(this.conteudo))||(this.conteudo=t,this.area.innerHTML=t,this.codigo&&(this.fonte.value=t))}connectedCallback(){super.connectedCallback(),Sv(this),this.area.className=`kk-editor__content kk-prose`,this.area.contentEditable=this.readonly?`false`:`true`,this.area.spellcheck=!0,this.area.setAttribute(`role`,`textbox`),this.area.setAttribute(`aria-multiline`,`true`),this.area.setAttribute(`aria-label`,this.localize.term(`editorArea`)),this.area.innerHTML=this.conteudo,document.execCommand(`styleWithCSS`,!1,`false`),this.fonte.className=`kk-editor__source`,this.fonte.spellcheck=!1,this.fonte.setAttribute(`aria-label`,this.localize.term(`editorSource`)),this.area.addEventListener(`input`,this.handleInput),this.area.addEventListener(`paste`,this.handlePaste),this.area.addEventListener(`keyup`,this.sincronizarBarra),this.area.addEventListener(`mouseup`,this.sincronizarBarra),this.area.addEventListener(`focus`,this.sincronizarBarra),this.fonte.addEventListener(`input`,this.handleFonteInput)}disconnectedCallback(){super.disconnectedCallback(),this.area.removeEventListener(`input`,this.handleInput),this.area.removeEventListener(`paste`,this.handlePaste),this.area.removeEventListener(`keyup`,this.sincronizarBarra),this.area.removeEventListener(`mouseup`,this.sincronizarBarra),this.area.removeEventListener(`focus`,this.sincronizarBarra),this.fonte.removeEventListener(`input`,this.handleFonteInput),this.quadro!==0&&(cancelAnimationFrame(this.quadro),this.quadro=0)}createRenderRoot(){return this}focus(e){(this.codigo?this.fonte:this.area).focus(e)}get travado(){return this.readonly||this.codigo}alternarCodigo(){if(this.codigo){let e=L_(Y_(this.fonte.value)),t=e!==this.conteudo;this.conteudo=e,this.area.innerHTML=e,this.codigo=!1,t&&this.emit(`kk-input`,{detail:{value:e}})}else this.conteudo=this.area.innerHTML,this.fonte.value=this.conteudo,this.fonte.readOnly=this.readonly,this.codigo=!0;this.updateComplete.then(()=>this.focus())}aplicar(e,t){this.area.focus(),this.restaurarSelecao(),document.execCommand(e,!1,t),this.handleInput()}selecaoAtual(){let e=this.getRootNode();return`getSelection`in e?e.getSelection():getSelection()}guardarSelecao(){let e=this.selecaoAtual();if(e===null||e.rangeCount===0)return;let t=e.getRangeAt(0);this.area.contains(t.commonAncestorContainer)&&(this.ultimaFaixa=t.cloneRange())}restaurarSelecao(){let e=this.ultimaFaixa,t=this.selecaoAtual();e===null||t===null||this.area.contains(e.commonAncestorContainer)&&(t.removeAllRanges(),t.addRange(e))}faixaCorrente(){let e=this.selecaoAtual();if(e!==null&&e.rangeCount>0){let t=e.getRangeAt(0);if(this.area.contains(t.commonAncestorContainer))return t}let t=this.ultimaFaixa;if(t!==null&&this.area.contains(t.commonAncestorContainer))return t}elementoCorrente(){let e=this.faixaCorrente()?.startContainer;return e===void 0?void 0:(e.nodeType===Node.ELEMENT_NODE?e:e.parentElement)??void 0}blocoCorrente(){let e=this.elementoCorrente()?.closest(tv);return e!=null&&this.area.contains(e)?e:void 0}celulaCorrente(){let e=this.elementoCorrente()?.closest(`td, th`);return e!=null&&this.area.contains(e)?e:void 0}blocosDaSelecao(){let e=this.faixaCorrente();if(e===void 0)return[];if(e.collapsed){let e=this.blocoCorrente();return e===void 0?[]:[e]}return[...this.area.querySelectorAll(tv)].filter(t=>t.querySelector(tv)===null&&e.intersectsNode(t))}marcarBlocos(e,t){this.area.focus(),this.restaurarSelecao();let n=this.blocosDaSelecao();if(n.length===0)return;let r=n[0]?.classList.contains(e)===!0;for(let i of n){i.classList.remove(...t),i.classList.toggle(e,!r),i.className===``&&i.removeAttribute(`class`);let n=M_[e];!r&&n!==void 0&&F_(i,n)}this.handleInput()}limparFormatacao(){this.area.focus(),this.restaurarSelecao(),document.execCommand(`removeFormat`),document.execCommand(`unlink`);for(let e of this.blocosDaSelecao())e.removeAttribute(`class`),e.removeAttribute(`style`);let e=this.tagDoBlocoCorrente();e!==`p`&&e!==`li`&&e!==`td`&&e!==`th`&&document.execCommand(`formatBlock`,!1,`p`),this.handleInput()}inserirTipografia(e,t){this.area.focus(),this.restaurarSelecao();let n=t===void 0?``:this.faixaCorrente()?.toString()??``;if(document.execCommand(`insertText`,!1,`${e}${n}${t??``}`),t!==void 0&&n===``){let e=this.selecaoAtual()?.getRangeAt(0);e!==void 0&&e.startContainer.nodeType===Node.TEXT_NODE&&(e.setStart(e.startContainer,e.startOffset-t.length),e.collapse(!0),this.ultimaFaixa=e.cloneRange())}this.handleInput()}corCorrente(e){let t=this.elementoCorrente();for(;t!==void 0&&t!==this.area;){let n=t.style?.getPropertyValue(e)??``;if(n!==``)return n;t=t.parentElement??void 0}}pintar(e,t){this.area.focus(),this.restaurarSelecao();let n=$_[e];document.execCommand(`styleWithCSS`,!1,`true`),document.execCommand(e===`color`?`foreColor`:`hiliteColor`,!1,n),document.execCommand(`styleWithCSS`,!1,`false`);let r=ev(e,n);for(let n of[...this.area.querySelectorAll(`[style]`)])n.style.getPropertyValue(e)===r&&(t===null?n.style.removeProperty(e):n.style.setProperty(e,t),n.getAttribute(`style`)===``&&n.removeAttribute(`style`),n.tagName===`SPAN`&&n.attributes.length===0&&n.replaceWith(...n.childNodes));this.handleInput()}pedirTexto(e){let t=document.createElement(`kk-dialog`);return t.label=e.rotulo,document.body.append(t),new Promise(n=>{let r=null,i=e=>{r=e,t.open=!1},a=()=>{let e=t.querySelector(`kk-input`),n=e?.value.trim()??``;n===``?e?.focus():i(n)};t.addEventListener(`kk-after-hide`,e=>{e.target===t&&(t.remove(),n(r))}),t.addEventListener(`kk-request-close`,e=>{e.target===t&&e.detail.source===`overlay`&&e.preventDefault()}),Oa(S`
          <p>${e.texto}</p>
          <kk-input
            autofocus
            placeholder=${e.placeholder??``}
            .value=${e.valor??``}
            @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),a())}}
          ></kk-input>
          <kk-button slot="footer" @click=${()=>i(null)}>${this.localize.term(`cancel`)}</kk-button>
          <kk-button slot="footer" variant="primary" @click=${a}>
            ${this.localize.term(`editorInsert`)}
          </kk-button>
        `,t),t.updateComplete.then(()=>{t.open=!0})})}async inserirLink(){let e=await this.pedirTexto({rotulo:this.localize.term(`editorLink`),texto:this.localize.term(`editorLinkText`),placeholder:`https://`});e!==null&&this.aplicar(`createLink`,e)}inserirImagem(){let e=document.createElement(`input`);e.type=`file`,e.accept=K_.join(`,`),e.addEventListener(`change`,()=>{let t=e.files?.[0];if(t===void 0)return;if(!K_.includes(t.type)){this.emit(`kk-error`,{detail:{file:t,reason:`type`}});return}let n=new FileReader;n.addEventListener(`load`,()=>{this.aplicar(`insertImage`,String(n.result))}),n.readAsDataURL(t)}),e.click()}async inserirNota(){let e=this.selecaoAtual()?.anchorNode,t=(e?.nodeType===Node.ELEMENT_NODE?e:e?.parentElement)?.closest(`a.note-nota-ref`),n=await this.pedirTexto({rotulo:this.localize.term(`editorFootnote`),texto:this.localize.term(`editorFootnoteText`),placeholder:this.localize.term(`editorFootnotePlaceholder`),valor:t?.getAttribute(`data-nota`)??``});if(n!==null){if(t!=null){t.setAttribute(`data-nota`,n),this.handleInput();return}this.aplicar(`insertHTML`,`<a class="note-nota-ref" data-nota="${bu(n)}">*</a>&nbsp;`)}}comandoLigado(e){try{return document.queryCommandState(e)}catch{return!1}}tagDoBlocoCorrente(){try{let e=document.queryCommandValue(`formatBlock`).toLowerCase().replace(/[<>]/g,``);return e===``?vv.tag:e}catch{return vv.tag}}inserirTabela(e,t){this.aplicar(`insertHTML`,ov(e,t))}cursorEm(e){let t=document.createRange();t.selectNodeContents(e),t.collapse(!0);let n=this.selecaoAtual();n?.removeAllRanges(),n?.addRange(t),this.ultimaFaixa=t.cloneRange()}naTabela(e){let t=this.celulaCorrente();if(t===void 0)return;let n=t.closest(`table`);if(e(t),!this.area.contains(t)){let e=n!==null&&this.area.contains(n)?n.rows[0]?.cells[0]:void 0;e!==void 0&&this.cursorEm(e)}this.handleInput()}marcarGrade(e,t){let n=this.querySelector(`.kk-editor__grid`);if(n===null)return;for(let r of[...n.children]){let n=r,i=Number(n.dataset.linha)<=e&&Number(n.dataset.coluna)<=t;n.classList.toggle(`kk-editor__grid-cell--marcada`,i)}let r=this.querySelector(`.kk-editor__grid-label`);r!==null&&(r.textContent=`${t} \xD7 ${e}`)}static fechar(e){e.currentTarget.closest(`kk-dropdown`)?.hide()}renderBotao(e){let t=this.localize.term(e.termo);return S`
      <button
        type="button"
        class="kk-editor__button"
        title=${t}
        aria-label=${t}
        aria-pressed=${w(e.alterna===!0?String(this.comandoLigado(e.comando)):void 0)}
        ?disabled=${this.travado}
        @mousedown=${e=>e.preventDefault()}
        @click=${()=>this.aplicar(e.comando)}
      >
        <kk-icon name=${e.icone}></kk-icon>
      </button>
    `}renderGrupo(e){return S`<div class="kk-editor__group">
      ${e.map(e=>this.renderBotao(e))}
    </div>`}renderSeletorDeBloco(){let e=this.tagDoBlocoCorrente(),t=[...yv,bv].find(t=>t.tag===e)??vv,n=`${this.localize.term(`editorBlockType`)}: ${this.localize.term(t.termo)}`;return S`
      <div class="kk-editor__group">
        <kk-dropdown hoist>
          <button
            slot="trigger"
            type="button"
            class="kk-editor__button kk-editor__button--select"
            title=${n}
            aria-label=${n}
            ?disabled=${this.travado}
            @mousedown=${e=>e.preventDefault()}
          >
            <kk-icon name=${t.icone}></kk-icon>
            <kk-icon name="chevron-down"></kk-icon>
          </button>
          <kk-menu>
            ${yv.map(t=>S`
                <kk-menu-item
                  type="checkbox"
                  ?checked=${t.tag===e}
                  @click=${()=>this.aplicar(`formatBlock`,t.tag)}
                >
                  <kk-icon slot="prefix" name=${t.icone}></kk-icon>
                  ${this.localize.term(t.termo)}
                </kk-menu-item>
              `)}
          </kk-menu>
        </kk-dropdown>
      </div>
    `}renderGatilho(e,t,n){return S`
      <button
        slot="trigger"
        type="button"
        class="kk-editor__button"
        title=${t}
        aria-label=${t}
        ?disabled=${this.travado}
        @mousedown=${e=>e.preventDefault()}
      >
        <kk-icon name=${e}></kk-icon>${n??``}
      </button>
    `}renderPaleta(t,n,r,i){let a=this.localize.term(i),o=this.corCorrente(t),s=S`<span
      class="kk-editor__ink"
      style="background-color: ${o??`transparent`}"
    ></span>`;return S`
      <kk-dropdown hoist>
        ${this.renderGatilho(r,a,s)}
        <div class="kk-editor__panel">
          <div class="kk-editor__swatches" role="group" aria-label=${a}>
            ${n.map(n=>{let r=this.localize.term(n.termo);return S`
                <button
                  type="button"
                  class="kk-editor__swatch"
                  title=${r}
                  aria-label=${r}
                  aria-pressed=${String(n.valor===o)}
                  style="background-color: ${n.valor}"
                  @mousedown=${e=>e.preventDefault()}
                  @click=${r=>{this.pintar(t,n.valor),e.fechar(r)}}
                ></button>
              `})}
          </div>

          <button
            type="button"
            class="kk-editor__panel-action"
            @mousedown=${e=>e.preventDefault()}
            @click=${n=>{this.pintar(t,null),e.fechar(n)}}
          >
            <kk-icon name="droplet-off"></kk-icon>
            ${this.localize.term(`editorNoColor`)}
          </button>
        </div>
      </kk-dropdown>
    `}renderMenuDeClasses(e,t,n,r,i){let a=this.blocoCorrente();return S`
      <kk-dropdown hoist>
        ${this.renderGatilho(e,this.localize.term(t))}
        <kk-menu>
          ${i??``}
          ${n.map(e=>S`
              <kk-menu-item
                type="checkbox"
                ?checked=${a?.classList.contains(e.classe)===!0}
                @click=${()=>this.marcarBlocos(e.classe,r)}
              >
                <kk-icon slot="prefix" name=${e.icone}></kk-icon>
                <span class="kk-editor__sample ${e.classe}">${this.localize.term(e.termo)}</span>
              </kk-menu-item>
            `)}
        </kk-menu>
      </kk-dropdown>
    `}renderItemDeCitacao(){let e=this.tagDoBlocoCorrente()===bv.tag;return S`
      <kk-menu-item
        type="checkbox"
        ?checked=${e}
        @click=${()=>this.aplicar(`formatBlock`,e?vv.tag:bv.tag)}
      >
        <kk-icon slot="prefix" name=${bv.icone}></kk-icon>
        ${this.localize.term(bv.termo)}
      </kk-menu-item>
    `}renderTipografia(){return S`
      <kk-dropdown hoist>
        ${this.renderGatilho(`typography`,this.localize.term(`editorTypography`))}
        <kk-menu>
          ${B_.map(e=>S`
              <kk-menu-item @click=${()=>this.inserirTipografia(e.abre,e.fecha)}>
                <span slot="prefix" class="kk-editor__glyph" aria-hidden="true">${e.amostra}</span>
                ${this.localize.term(e.termo)}
              </kk-menu-item>
            `)}
        </kk-menu>
      </kk-dropdown>
    `}renderTabela(){let t=this.localize.term(`editorTable`),n=this.celulaCorrente();return S`
      <kk-dropdown hoist @kk-show=${()=>this.marcarGrade(1,1)}>
        ${this.renderGatilho(`table`,t)}
        <div class="kk-editor__panel">
          <div
            class="kk-editor__grid"
            role="grid"
            aria-label=${this.localize.term(`editorTableSize`)}
            style="--kk-editor-grade-colunas: ${rv}"
            @mouseover=${this.aoApontarNaGrade}
            @focusin=${this.aoApontarNaGrade}
            @keydown=${this.aoTeclarNaGrade}
          >
            ${iv.map(({linha:t,coluna:n})=>S`
                <button
                  type="button"
                  role="gridcell"
                  class="kk-editor__grid-cell"
                  data-linha=${t}
                  data-coluna=${n}
                  tabindex=${t===1&&n===1?0:-1}
                  aria-label="${n} × ${t}"
                  @mousedown=${e=>e.preventDefault()}
                  @click=${r=>{this.inserirTabela(t,n),e.fechar(r)}}
                ></button>
              `)}
          </div>

          <div class="kk-editor__grid-label" aria-hidden="true">1 × 1</div>

          ${n===void 0?``:S`
                <kk-menu>
                  ${mv.map(e=>S`
                      <kk-menu-item @click=${()=>this.naTabela(e.executar)}>
                        <kk-icon slot="prefix" name=${e.icone}></kk-icon>
                        ${this.localize.term(e.termo)}
                      </kk-menu-item>
                    `)}
                </kk-menu>
              `}
        </div>
      </kk-dropdown>
    `}renderBotaoDeAcao(e,t,n){let r=this.localize.term(t);return S`
      <button
        type="button"
        class="kk-editor__button"
        title=${r}
        aria-label=${r}
        ?disabled=${this.travado}
        @mousedown=${e=>e.preventDefault()}
        @click=${n}
      >
        <kk-icon name=${e}></kk-icon>
      </button>
    `}render(){return this.selecao,S`
      <div class="kk-editor__toolbar" role="toolbar" aria-label=${this.localize.term(`editorToolbar`)}>
        ${this.renderGrupo(hv)} ${this.renderSeletorDeBloco()}
        ${gv.map(e=>this.renderGrupo(e))}

        <div class="kk-editor__group">
          ${this.renderPaleta(`color`,Z_,`text-color`,`editorTextColor`)}
          ${this.renderPaleta(`background-color`,Q_,`background`,`editorBackgroundColor`)}
          ${this.renderMenuDeClasses(`article`,`editorParagraphStyle`,A_,j_,this.renderItemDeCitacao())}
          ${this.renderMenuDeClasses(`feather`,`editorPoetry`,R_,z_)}
          ${this.renderMenuDeClasses(`highlight`,`editorHighlight`,O_,k_)}
          ${this.renderBotaoDeAcao(`clear-formatting`,`editorClearFormat`,()=>this.limparFormatacao())}
        </div>

        <div class="kk-editor__group">
          ${this.renderTipografia()}
          ${this.renderBotaoDeAcao(`link`,`editorLink`,()=>{this.inserirLink()})}
          ${this.renderBotaoDeAcao(`photo`,`editorImage`,()=>this.inserirImagem())}
          ${this.renderBotaoDeAcao(`superscript`,`editorFootnote`,()=>{this.inserirNota()})}
          ${this.renderTabela()}
        </div>

        <div class="kk-editor__group">
          <button
            type="button"
            class="kk-editor__button"
            title=${this.localize.term(`editorSource`)}
            aria-label=${this.localize.term(`editorSource`)}
            aria-pressed=${String(this.codigo)}
            @mousedown=${e=>e.preventDefault()}
            @click=${()=>this.alternarCodigo()}
          >
            <kk-icon name="code"></kk-icon>
          </button>
        </div>
      </div>

      ${this.codigo?this.fonte:this.area}
    `}};Dv=be(Ev),Ov=new WeakMap,kv=new WeakMap,Av=new WeakMap,v(Dv,4,`codigo`,Tv,jv,Ov),v(Dv,4,`selecao`,wv,jv,kv),v(Dv,4,`readonly`,Cv,jv,Av),g(Dv,jv),y(jv,`dependencies`,{"kk-button":F,"kk-dialog":ng,"kk-dropdown":C_,"kk-icon":ns,"kk-input":R,"kk-menu":Bg,"kk-menu-item":Pg}),jv.define(`kk-editor`),ns.define(`kk-icon`),Ns.define(`kk-icon-button`),R.define(`kk-input`);var Mv=x`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    line-height: var(--kk-line-height-normal);
    letter-spacing: var(--kk-letter-spacing-normal);
    color: var(--kk-color-neutral-700);
    padding: var(--kk-spacing-x-small) var(--kk-spacing-medium) var(--kk-spacing-x-small) var(--kk-spacing-x-small);
    transition: var(--kk-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--kk-color-neutral-100);
    color: var(--kk-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--kk-color-primary-600);
    color: var(--kk-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--kk-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--kk-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--kk-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--kk-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv,Vv,Hv,q,Uv,Wv,Gv,Kv,qv,Jv,Yv=class extends (Hv=k,Vv=[D(`.option__label`)],Bv=[E()],zv=[E()],Rv=[E()],Lv=[T({reflect:!0})],Iv=[T({type:Boolean,reflect:!0})],Fv=[O(`disabled`)],Pv=[O(`selected`)],Nv=[O(`value`)],Hv){constructor(){super(...arguments),_(q,5,this),y(this,`isInitialized`,!1),b(this,Uv,_(q,8,this)),_(q,11,this),b(this,Wv,_(q,12,this,!1)),_(q,15,this),b(this,Gv,_(q,16,this,!1)),_(q,19,this),b(this,Kv,_(q,20,this,!1)),_(q,23,this),b(this,qv,_(q,24,this,``)),_(q,27,this),b(this,Jv,_(q,28,this,!1)),_(q,31,this)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`kk-select`).then(()=>{let e=this.closest(`kk-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replaceAll(` `,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return S`
      <div
        part="base"
        class=${j({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <kk-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></kk-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};q=be(Hv),Uv=new WeakMap,Wv=new WeakMap,Gv=new WeakMap,Kv=new WeakMap,qv=new WeakMap,Jv=new WeakMap,v(q,4,`defaultSlot`,Vv,Yv,Uv),v(q,4,`current`,Bv,Yv,Wv),v(q,4,`selected`,zv,Yv,Gv),v(q,4,`hasHover`,Rv,Yv,Kv),v(q,4,`value`,Lv,Yv,qv),v(q,4,`disabled`,Iv,Yv,Jv),v(q,1,`handleDisabledChange`,Fv,Yv),v(q,1,`handleSelectedChange`,Pv,Yv),v(q,1,`handleValueChange`,Nv,Yv),g(q,Yv),y(Yv,`styles`,[so,Mv]),y(Yv,`dependencies`,{"kk-icon":ns}),Yv.define(`kk-option`);var Xv=x`
  :host {
    --kk-password-strength-height: var(--kk-spacing-3x-small);
    --kk-password-strength-gap: var(--kk-spacing-3x-small);
    --kk-password-strength-track-color: var(--kk-color-neutral-200);
    --kk-password-strength-weak-color: var(--kk-color-danger-600);
    --kk-password-strength-fair-color: var(--kk-color-warning-600);
    --kk-password-strength-good-color: var(--kk-color-primary-600);
    --kk-password-strength-strong-color: var(--kk-color-success-600);

    display: block;
  }

  .forca {
    --forca-cor: var(--kk-password-strength-track-color);
  }

  .forca--weak {
    --forca-cor: var(--kk-password-strength-weak-color);
  }

  .forca--fair {
    --forca-cor: var(--kk-password-strength-fair-color);
  }

  .forca--good {
    --forca-cor: var(--kk-password-strength-good-color);
  }

  .forca--strong {
    --forca-cor: var(--kk-password-strength-strong-color);
  }

  .forca__medidor {
    display: flex;
    gap: var(--kk-password-strength-gap);
  }

  .forca__segmento {
    flex: 1 1 0;
    block-size: var(--kk-password-strength-height);
    border-radius: var(--kk-border-radius-pill);
    background-color: var(--kk-password-strength-track-color);
    transition: background-color var(--kk-transition-medium);
  }

  .forca__segmento--aceso {
    background-color: var(--forca-cor);
  }

  .forca__texto {
    margin-block-start: var(--kk-spacing-3x-small);
    color: var(--kk-color-text-muted);
    font-size: var(--kk-input-help-text-font-size-medium);
  }

  /* Vazio, o texto não guarda linha — mas fica no lugar, porque é a região viva. */
  .forca__texto--vazio {
    margin: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .forca__segmento {
      transition: none;
    }
  }

  @media (forced-colors: active) {
    .forca__segmento {
      border: solid 1px CanvasText;
    }

    .forca__segmento--aceso {
      background-color: Highlight;
    }
  }
`,Zv=[`weak`,`fair`,`good`,`strong`],Qv={minLength:1,extraLength:1,longPassword:1,lowercase:1,uppercase:1,numbers:1,special:1,multipleSpecial:1};function $v(e,t=8,n={}){if(e===``)return 0;let r={...Qv,...n},i=e.match(/[^\dA-Za-z]/g)?.length??0;return[[e.length>=t,r.minLength],[e.length>=t+4,r.extraLength],[e.length>=16,r.longPassword],[/[a-z]/.test(e),r.lowercase],[/[A-Z]/.test(e),r.uppercase],[/\d/.test(e),r.numbers],[i>0,r.special],[i>1,r.multipleSpecial]].reduce((e,[t,n])=>e+(t?n:0),0)}function ey(e,t=[2,4,6]){if(e<=0)return null;let n=t.findIndex(t=>e<=t);return Zv[n===-1?Zv.length-1:n]??null}var ty,ny,ry,iy,ay,oy,sy,cy,ly,uy,dy,J,fy,py,my,hy,gy,_y,vy,yy,by,xy,Sy=class extends (dy=k,uy=[E()],ly=[T({attribute:`for`})],cy=[T({attribute:!1})],sy=[T({attribute:`min-length`,type:Number})],oy=[T({type:Number})],ay=[T({converter:{fromAttribute:e=>(e??``).split(`,`).map(e=>Number(e.trim())).filter(Number.isFinite)}})],iy=[T({attribute:!1})],ry=[T({attribute:!1})],ny=[T({attribute:!1})],ty=[T()],dy){constructor(){super(...arguments),y(this,`localize`,new hi(this)),y(this,`hasSlotController`,new Ps(this,`[default]`)),y(this,`campo`,null),b(this,fy,_(J,8,this,``)),_(J,11,this),b(this,py,_(J,12,this,``)),_(J,15,this),b(this,my,_(J,16,this,``)),_(J,19,this),b(this,hy,_(J,20,this,8)),_(J,23,this),b(this,gy,_(J,24,this,4)),_(J,27,this),b(this,_y,_(J,28,this,[2,4,6])),_(J,31,this),b(this,vy,_(J,32,this,{})),_(J,35,this),b(this,yy,_(J,36,this)),_(J,39,this),b(this,by,_(J,40,this,{})),_(J,43,this),b(this,xy,_(J,44,this,``)),_(J,47,this),y(this,`nivelAnterior`,null),y(this,`aoDigitar`,()=>{this.senhaDoCampo=String(this.campo?.value??``)})}get level(){return ey(this.score,this.thresholds)}get score(){let e=this.htmlFor?this.senhaDoCampo:this.value;return e===``?0:this.scorer?this.scorer(e):$v(e,this.minLength,this.weights)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.ligarCampo()}disconnectedCallback(){super.disconnectedCallback(),this.desligarCampo()}firstUpdated(){this.ligarCampo()}updated(e){super.updated(e),e.has(`htmlFor`)&&this.hasUpdated&&e.get(`htmlFor`)!==void 0&&this.ligarCampo();let t=this.level;t!==this.nivelAnterior&&(this.nivelAnterior=t,this.emit(`kk-strength-change`,{detail:{level:t,score:this.score}}))}ligarCampo(){if(this.desligarCampo(),!this.htmlFor)return;let e=this.getRootNode();this.campo=e.getElementById?.(this.htmlFor)??null,this.campo!==null&&(this.campo.addEventListener(`input`,this.aoDigitar),this.campo.addEventListener(`kk-input`,this.aoDigitar),this.aoDigitar())}desligarCampo(){this.campo?.removeEventListener(`input`,this.aoDigitar),this.campo?.removeEventListener(`kk-input`,this.aoDigitar),this.campo=null}textoDoNivel(e){return this.messages[e]??this.localize.term({weak:`passwordWeak`,fair:`passwordFair`,good:`passwordGood`,strong:`passwordStrong`}[e])}render(){let e=this.level,t=e===null?0:Zv.indexOf(e)+1,n=Math.max(1,Math.round(this.segments)),r=Math.ceil(t/Zv.length*n);return S`
      <div part="base" class=${j({forca:!0,[`forca--${e}`]:e!==null})}>
        <div
          part="meter"
          class="forca__medidor"
          role="meter"
          aria-label=${this.label||this.localize.term(`passwordStrength`)}
          aria-valuemin="0"
          aria-valuemax=${Zv.length}
          aria-valuenow=${t}
          aria-valuetext=${e===null?C:this.textoDoNivel(e)}
        >
          ${Array.from({length:n},(e,t)=>S`<span
              part="segment"
              class=${j({forca__segmento:!0,"forca__segmento--aceso":t<r})}
            ></span>`)}
        </div>
        <div
          part="text"
          class=${j({forca__texto:!0,"forca__texto--vazio":e===null&&!this.hasSlotController.test(`[default]`)})}
          aria-live="polite"
        >
          ${e===null?S`<slot></slot>`:this.textoDoNivel(e)}
        </div>
      </div>
    `}};J=be(dy),fy=new WeakMap,py=new WeakMap,my=new WeakMap,hy=new WeakMap,gy=new WeakMap,_y=new WeakMap,vy=new WeakMap,yy=new WeakMap,by=new WeakMap,xy=new WeakMap,v(J,4,`senhaDoCampo`,uy,Sy,fy),v(J,4,`htmlFor`,ly,Sy,py),v(J,4,`value`,cy,Sy,my),v(J,4,`minLength`,sy,Sy,hy),v(J,4,`segments`,oy,Sy,gy),v(J,4,`thresholds`,ay,Sy,_y),v(J,4,`weights`,iy,Sy,vy),v(J,4,`scorer`,ry,Sy,yy),v(J,4,`messages`,ny,Sy,by),v(J,4,`label`,ty,Sy,xy),g(J,Sy),y(Sy,`styles`,[so,Xv]),Sy.define(`kk-password-strength`);var Cy=x`
  :host {
    display: block;
  }

  /** O popup. */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  /*
   * Abrir e fechar a lista é CSS: opacidade e escala no painel do popup, com o @starting-style
   * dando o ponto de partida quando ele entra no top layer. A origem da escala vem do lado que
   * o posicionador escolheu (data-current-placement), e é por isso que o componente só desativa
   * o popup depois da transição. Quem espera o fim é o componente, pelo getAnimations().
   */
  .select::part(popup) {
    opacity: 0;
    scale: 0.9;
    transition:
      opacity var(--kk-select-transition, var(--kk-transition-fast)) ease,
      scale var(--kk-select-transition, var(--kk-transition-fast)) ease;
  }

  .select--open::part(popup) {
    opacity: 1;
    scale: 1;
  }

  @starting-style {
    .select--open::part(popup) {
      opacity: 0;
      scale: 0.9;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .select::part(popup) {
      transition: none;
    }
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    letter-spacing: var(--kk-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) border,
      var(--kk-transition-fast) box-shadow,
      var(--kk-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--kk-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--kk-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--kk-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Com multiple, o campo de exibição fica escondido da vista. */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--kk-spacing-2x-small);
  }

  .select__tags::slotted(kk-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(kk-tag) {
    cursor: not-allowed !important;
  }

  /* Select padrão */
  .select--standard .select__combobox {
    background-color: var(--kk-input-background-color);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--kk-input-background-color-disabled);
    border-color: var(--kk-input-border-color-disabled);
    color: var(--kk-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--kk-input-background-color-focus);
    border-color: var(--kk-input-border-color-focus);
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color);
  }

  /* Select preenchido */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--kk-input-filled-background-color);
    color: var(--kk-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--kk-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--kk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--kk-input-filled-background-color-focus);
    outline: var(--kk-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--kk-input-border-radius-small);
    font-size: var(--kk-input-font-size-small);
    min-height: var(--kk-input-height-small);
    padding-block: 0;
    padding-inline: var(--kk-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--kk-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--kk-input-border-radius-medium);
    font-size: var(--kk-input-font-size-medium);
    min-height: var(--kk-input-height-medium);
    padding-block: 0;
    padding-inline: var(--kk-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--kk-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--kk-input-border-radius-large);
    font-size: var(--kk-input-font-size-large);
    min-height: var(--kk-input-height-large);
    padding-block: 0;
    padding-inline: var(--kk-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--kk-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--kk-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--kk-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--kk-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--kk-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--kk-input-height-large);
  }

  /* Prefixo e sufixo. */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--kk-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--kk-spacing-small);
  }

  /* Botão de limpar */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--kk-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--kk-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--kk-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Ícone de expandir */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--kk-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--kk-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--kk-font-sans);
    font-size: var(--kk-font-size-medium);
    font-weight: var(--kk-font-weight-normal);
    box-shadow: var(--kk-shadow-large);
    background: var(--kk-panel-background-color);
    border: solid var(--kk-panel-border-width) var(--kk-panel-border-color);
    border-radius: var(--kk-border-radius-medium);
    padding-block: var(--kk-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Obedece ao tamanho automático do popup. */
    max-width: var(--kk-popup-auto-size-available-width);
    max-height: var(--kk-popup-auto-size-available-height);
  }

  .select__listbox ::slotted(kk-divider) {
    --kk-divider-spacing: var(--kk-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--kk-font-size-small);
    font-weight: var(--kk-font-weight-semibold);
    color: var(--kk-color-text-muted);
    padding-block: var(--kk-spacing-2x-small);
    padding-inline: var(--kk-spacing-x-large);
  }

  /*
   * O alto contraste do sistema (forced-colors) apaga toda box-shadow, e o anel
   * de foco deste campo é uma: quem navega por teclado perdia de vista em que
   * campo está. Ali o foco vira contorno na cor de destaque do sistema.
   */
  @media (forced-colors: active) {
    .select--focused .select__combobox,
    .select--open .select__combobox {
      outline: var(--kk-focus-ring-width) solid Highlight;
      outline-offset: var(--kk-focus-ring-offset);
    }
  }
`,wy=class extends as{constructor(e){if(super(e),this.it=C,e.type!==rs.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===fa)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};wy.directiveName=`unsafeHTML`,wy.resultType=1;var Ty=is(wy);function Ey(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function Dy(e,t,n=`vertical`,r=`smooth`){let i=Ey(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var Oy=x`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Modificadores de variante
   */

  .tag--primary {
    background-color: var(--kk-color-primary-50);
    border-color: var(--kk-color-primary-200);
    color: var(--kk-color-primary-800);
  }

  .tag--primary:active > kk-icon-button {
    color: var(--kk-color-primary-600);
  }

  .tag--success {
    background-color: var(--kk-color-success-50);
    border-color: var(--kk-color-success-200);
    color: var(--kk-color-success-800);
  }

  .tag--success:active > kk-icon-button {
    color: var(--kk-color-success-600);
  }

  .tag--neutral {
    background-color: var(--kk-color-neutral-50);
    border-color: var(--kk-color-neutral-200);
    color: var(--kk-color-neutral-800);
  }

  .tag--neutral:active > kk-icon-button {
    color: var(--kk-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--kk-color-warning-50);
    border-color: var(--kk-color-warning-200);
    color: var(--kk-color-warning-800);
  }

  .tag--warning:active > kk-icon-button {
    color: var(--kk-color-warning-600);
  }

  .tag--danger {
    background-color: var(--kk-color-danger-50);
    border-color: var(--kk-color-danger-200);
    color: var(--kk-color-danger-800);
  }

  .tag--danger:active > kk-icon-button {
    color: var(--kk-color-danger-600);
  }

  /*
   * Modificadores de tamanho
   */

  .tag--small {
    font-size: var(--kk-button-font-size-small);
    height: calc(var(--kk-input-height-small) * 0.8);
    line-height: calc(var(--kk-input-height-small) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-small);
    padding: 0 var(--kk-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--kk-button-font-size-medium);
    height: calc(var(--kk-input-height-medium) * 0.8);
    line-height: calc(var(--kk-input-height-medium) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-medium);
    padding: 0 var(--kk-spacing-small);
  }

  .tag--large {
    font-size: var(--kk-button-font-size-large);
    height: calc(var(--kk-input-height-large) * 0.8);
    line-height: calc(var(--kk-input-height-large) - var(--kk-input-border-width) * 2);
    border-radius: var(--kk-input-border-radius-large);
    padding: 0 var(--kk-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--kk-spacing-x-small);
  }

  /*
   * Modificador pill
   */

  .tag--pill {
    border-radius: var(--kk-border-radius-pill);
  }
`,ky,Ay,jy,My,Ny,Py,Fy,Iy,Ly,Ry,zy=class extends (Ny=k,My=[T({reflect:!0})],jy=[T({reflect:!0})],Ay=[T({type:Boolean,reflect:!0})],ky=[T({type:Boolean})],Ny){constructor(){super(...arguments),y(this,`localize`,new hi(this)),b(this,Fy,_(Py,8,this,`neutral`)),_(Py,11,this),b(this,Iy,_(Py,12,this,`medium`)),_(Py,15,this),b(this,Ly,_(Py,16,this,!1)),_(Py,19,this),b(this,Ry,_(Py,20,this,!1)),_(Py,23,this)}handleRemoveClick(){this.emit(`kk-remove`)}render(){return S`
      <span
        part="base"
        class=${j({tag:!0,"tag--primary":this.variant===`primary`,"tag--success":this.variant===`success`,"tag--neutral":this.variant===`neutral`,"tag--warning":this.variant===`warning`,"tag--danger":this.variant===`danger`,"tag--text":this.variant===`text`,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?S`
              <kk-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></kk-icon-button>
            `:``}
      </span>
    `}};Py=be(Ny),Fy=new WeakMap,Iy=new WeakMap,Ly=new WeakMap,Ry=new WeakMap,v(Py,4,`variant`,My,zy,Fy),v(Py,4,`size`,jy,zy,Iy),v(Py,4,`pill`,Ay,zy,Ly),v(Py,4,`removable`,ky,zy,Ry),g(Py,zy),y(zy,`styles`,[so,Oy]),y(zy,`dependencies`,{"kk-icon-button":Ns});var By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,db,fb,pb,mb,hb,gb,_b,Y,vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb,Bb,Vb,Hb,Ub,Wb,X=class extends (_b=k,gb=[D(`.select`)],hb=[D(`.select__combobox`)],mb=[D(`.select__display-input`)],pb=[D(`.select__value-input`)],fb=[D(`.select__listbox`)],db=[E()],ub=[E()],lb=[E()],cb=[E()],sb=[E()],ob=[T()],ab=[E()],ib=[T({attribute:`value`})],rb=[T({reflect:!0})],nb=[T()],tb=[T({type:Boolean,reflect:!0})],eb=[T({attribute:`max-options-visible`,type:Number})],$y=[T({type:Boolean,reflect:!0})],Qy=[T({type:Boolean})],Zy=[T({type:Boolean,reflect:!0})],Xy=[T({type:Boolean,reflect:!0})],Yy=[T({type:Boolean,reflect:!0})],Jy=[T()],qy=[T({reflect:!0})],Ky=[T({attribute:`help-text`})],Gy=[T({reflect:!0,converter:Ra})],Wy=[T({type:Boolean,reflect:!0})],Uy=[T()],Hy=[O(`disabled`,{waitUntilFirstUpdate:!0})],Vy=[O([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],By=[O(`open`,{waitUntilFirstUpdate:!0})],_b){constructor(){super(...arguments),_(Y,5,this),y(this,`validade`,new Cc(this,{interacaoEm:[`kk-blur`,`kk-input`]})),y(this,`hasSlotController`,new Ps(this,`help-text`,`label`)),y(this,`localize`,new hi(this)),y(this,`typeToSelectString`,``),y(this,`typeToSelectTimeout`),y(this,`closeWatcher`),b(this,vb,_(Y,8,this)),_(Y,11,this),b(this,yb,_(Y,12,this)),_(Y,15,this),b(this,bb,_(Y,16,this)),_(Y,19,this),b(this,xb,_(Y,20,this)),_(Y,23,this),b(this,Sb,_(Y,24,this)),_(Y,27,this),b(this,Cb,_(Y,28,this,!1)),_(Y,31,this),b(this,wb,_(Y,32,this,``)),_(Y,35,this),b(this,Tb,_(Y,36,this)),_(Y,39,this),b(this,Eb,_(Y,40,this,[])),_(Y,43,this),b(this,Db,_(Y,44,this,!1)),_(Y,47,this),b(this,Ob,_(Y,48,this,``)),_(Y,51,this),y(this,`_value`,``),b(this,kb,_(Y,52,this,``)),_(Y,55,this),b(this,Ab,_(Y,56,this,`medium`)),_(Y,59,this),b(this,jb,_(Y,60,this,``)),_(Y,63,this),b(this,Mb,_(Y,64,this,!1)),_(Y,67,this),b(this,Nb,_(Y,68,this,3)),_(Y,71,this),b(this,Pb,_(Y,72,this,!1)),_(Y,75,this),b(this,Fb,_(Y,76,this,!1)),_(Y,79,this),b(this,Ib,_(Y,80,this,!1)),_(Y,83,this),b(this,Lb,_(Y,84,this,!1)),_(Y,87,this),b(this,Rb,_(Y,88,this,!1)),_(Y,91,this),b(this,zb,_(Y,92,this,``)),_(Y,95,this),b(this,Bb,_(Y,96,this,`bottom`)),_(Y,99,this),b(this,Vb,_(Y,100,this,``)),_(Y,103,this),b(this,Hb,_(Y,104,this,``)),_(Y,107,this),b(this,Ub,_(Y,108,this,!1)),_(Y,111,this),b(this,Wb,_(Y,112,this,e=>S`
      <kk-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @kk-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </kk-tag>
    `)),_(Y,115,this),y(this,`handleDocumentFocusIn`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}),y(this,`handleDocumentKeyDown`,e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`kk-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();let n=yu(this.typeToSelectString);for(let e of t)if(yu(e.getTextLabel()).startsWith(n)){this.setCurrentOption(e);break}}}}),y(this,`handleDocumentMouseDown`,e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()})}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this.updateValidity()}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),this.closeWatcher?.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`kk-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`kk-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`kk-clear`),this.emit(`kk-input`),this.emit(`kk-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`kk-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`kk-option`)||customElements.whenDefined(`kk-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>{r.push(e.value)}),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`kk-input`),this.emit(`kk-change`)}))}getAllOptions(){return[...this.querySelectorAll(`kk-option`)]}getFirstOption(){return this.querySelector(`kk-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{e.selected=!1}),n.length&&n.forEach(e=>{e.selected=!0}),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions();this.selectedOptions=e.filter(e=>e.selected);let t=this.valueHasChanged;if(this.multiple){let e=this.selectedOptions.map(e=>e.value);this.value=e,this.displayLabel=this.placeholder&&this.value.length===0?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);let t=new FormData;e.forEach(e=>{t.append(this.name,e)}),this._internals.setFormValue(t)}else{let e=this.selectedOptions[0],t=e?.value??``;this.value=t,this.displayLabel=e?.getTextLabel?.()??``,this._internals.setFormValue(t)}this.valueHasChanged=t,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return S`<div @kk-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?Ty(n):n}
        </div>`}return t===this.maxOptionsVisible?S`<kk-tag size=${this.size}>+${this.selectedOptions.length-t}</kk-tag>`:S``})}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){this.open&&!this.disabled?(this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`kk-show`),this.addOpenListeners(),this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await Ls(this,this.popup.popup),this.currentOption&&Dy(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`kk-after-show`)):(this.emit(`kk-hide`),this.removeOpenListeners(),await Ls(this,this.popup.popup),this.open||(this.popup.active=!1),this.emit(`kk-after-hide`))}async show(){if(this.open||this.disabled)this.open=!1;else return this.open=!0,xi(this,`kk-after-show`)}async hide(){if(!this.open||this.disabled)this.open=!1;else return this.open=!1,xi(this,`kk-after-hide`)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.valueInput.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.valueInput.validity,xc(this.valueInput),this.valueInput)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <kk-popup
            class=${j({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?S`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${i?S`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <kk-icon name="circle-x" library="system"></kk-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <kk-icon library="system" name="chevron-down"></kk-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </kk-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y=be(_b),vb=new WeakMap,yb=new WeakMap,bb=new WeakMap,xb=new WeakMap,Sb=new WeakMap,Cb=new WeakMap,wb=new WeakMap,Tb=new WeakMap,Eb=new WeakMap,Db=new WeakMap,Ob=new WeakMap,kb=new WeakMap,Ab=new WeakMap,jb=new WeakMap,Mb=new WeakMap,Nb=new WeakMap,Pb=new WeakMap,Fb=new WeakMap,Ib=new WeakMap,Lb=new WeakMap,Rb=new WeakMap,zb=new WeakMap,Bb=new WeakMap,Vb=new WeakMap,Hb=new WeakMap,Ub=new WeakMap,Wb=new WeakMap,v(Y,4,`popup`,gb,X,vb),v(Y,4,`combobox`,hb,X,yb),v(Y,4,`displayInput`,mb,X,bb),v(Y,4,`valueInput`,pb,X,xb),v(Y,4,`listbox`,fb,X,Sb),v(Y,4,`hasFocus`,db,X,Cb),v(Y,4,`displayLabel`,ub,X,wb),v(Y,4,`currentOption`,lb,X,Tb),v(Y,4,`selectedOptions`,cb,X,Eb),v(Y,4,`valueHasChanged`,sb,X,Db),v(Y,4,`name`,ob,X,Ob),v(Y,3,`value`,ab,X),v(Y,4,`defaultValue`,ib,X,kb),v(Y,4,`size`,rb,X,Ab),v(Y,4,`placeholder`,nb,X,jb),v(Y,4,`multiple`,tb,X,Mb),v(Y,4,`maxOptionsVisible`,eb,X,Nb),v(Y,4,`disabled`,$y,X,Pb),v(Y,4,`clearable`,Qy,X,Fb),v(Y,4,`open`,Zy,X,Ib),v(Y,4,`filled`,Xy,X,Lb),v(Y,4,`pill`,Yy,X,Rb),v(Y,4,`label`,Jy,X,zb),v(Y,4,`placement`,qy,X,Bb),v(Y,4,`helpText`,Ky,X,Vb),v(Y,4,`form`,Gy,X,Hb),v(Y,4,`required`,Wy,X,Ub),v(Y,4,`getTag`,Uy,X,Wb),v(Y,1,`handleDisabledChange`,Hy,X),v(Y,1,`handleValueChange`,Vy,X),v(Y,1,`handleOpenChange`,By,X),g(Y,X),y(X,`styles`,[so,kl,Cy]),y(X,`dependencies`,{"kk-icon":ns,"kk-popup":H,"kk-tag":zy}),y(X,`formAssociated`,!0),X.define(`kk-select`),yc.define(`kk-spinner`);var Gb=x`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --kk-switch-height: var(--kk-toggle-size-small);
    --kk-switch-thumb-size: calc(var(--kk-toggle-size-small) + 4px);
    --kk-switch-width: calc(var(--kk-switch-height) * 2);

    font-size: var(--kk-input-font-size-small);
  }

  :host([size='medium']) {
    --kk-switch-height: var(--kk-toggle-size-medium);
    --kk-switch-thumb-size: calc(var(--kk-toggle-size-medium) + 4px);
    --kk-switch-width: calc(var(--kk-switch-height) * 2);

    font-size: var(--kk-input-font-size-medium);
  }

  :host([size='large']) {
    --kk-switch-height: var(--kk-toggle-size-large);
    --kk-switch-thumb-size: calc(var(--kk-toggle-size-large) + 4px);
    --kk-switch-width: calc(var(--kk-switch-height) * 2);

    font-size: var(--kk-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--kk-input-font-family);
    font-size: inherit;
    font-weight: var(--kk-input-font-weight);
    color: var(--kk-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--kk-switch-width);
    height: var(--kk-switch-height);
    background-color: var(--kk-color-neutral-400);
    border: solid var(--kk-input-border-width) var(--kk-color-neutral-400);
    border-radius: var(--kk-switch-height);
    transition:
      var(--kk-transition-fast) border-color,
      var(--kk-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--kk-switch-thumb-size);
    height: var(--kk-switch-thumb-size);
    background-color: var(--kk-color-neutral-0);
    border-radius: 50%;
    border: solid var(--kk-input-border-width) var(--kk-color-neutral-400);
    translate: calc((var(--kk-switch-width) - var(--kk-switch-height)) / -2);
    transition:
      var(--kk-transition-fast) translate ease,
      var(--kk-transition-fast) background-color,
      var(--kk-transition-fast) border-color,
      var(--kk-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--kk-color-neutral-400);
    border-color: var(--kk-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--kk-color-neutral-400);
    border-color: var(--kk-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
    translate: calc((var(--kk-switch-width) - var(--kk-switch-height)) / 2);
  }

  /* Marcado + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
  }

  /* Marcado + foco */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--kk-color-primary-600);
    border-color: var(--kk-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--kk-color-neutral-0);
    border-color: var(--kk-color-primary-600);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--kk-switch-height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--kk-input-required-content);
    color: var(--kk-input-required-content-color);
    margin-inline-start: var(--kk-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Kb,qb,Jb,Yb,Xb,Zb,Qb,$b,ex,tx,nx,rx,ix,ax,ox,Z,sx,cx,lx,ux,dx,fx,px,mx,hx,gx,_x,vx=class extends (ox=k,ax=[D(`input[type="checkbox"]`)],ix=[E()],rx=[T()],nx=[T()],tx=[T()],ex=[T({reflect:!0})],$b=[T({type:Boolean,reflect:!0})],Qb=[T({type:Boolean,reflect:!0})],Zb=[So(`checked`)],Xb=[T({reflect:!0,converter:Ra})],Yb=[T({type:Boolean,reflect:!0})],Jb=[T({attribute:`help-text`})],qb=[O([`checked`,`value`],{waitUntilFirstUpdate:!0})],Kb=[O(`disabled`,{waitUntilFirstUpdate:!0})],ox){constructor(){super(...arguments),_(Z,5,this),y(this,`validade`,new Cc(this,{interacaoEm:[`kk-input`]})),y(this,`hasSlotController`,new Ps(this,`help-text`)),b(this,sx,_(Z,8,this)),_(Z,11,this),b(this,cx,_(Z,12,this,!1)),_(Z,15,this),b(this,lx,_(Z,16,this,``)),_(Z,19,this),b(this,ux,_(Z,20,this,``)),_(Z,23,this),b(this,dx,_(Z,24,this)),_(Z,27,this),b(this,fx,_(Z,28,this,`medium`)),_(Z,31,this),b(this,px,_(Z,32,this,!1)),_(Z,35,this),b(this,mx,_(Z,36,this,!1)),_(Z,39,this),y(this,`defaultChecked`,_(Z,52,this,!1)),_(Z,55,this),b(this,hx,_(Z,40,this,``)),_(Z,43,this),b(this,gx,_(Z,44,this,!1)),_(Z,47,this),b(this,_x,_(Z,48,this,``)),_(Z,51,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.checked=this.defaultChecked,this._internals.setFormValue(this.checked?this.value||`on`:null),this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleInput(){this.emit(`kk-input`)}handleClick(){this.checked=!this.checked,this.emit(`kk-change`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`kk-change`),this.emit(`kk-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`kk-change`),this.emit(`kk-input`))}handleStateChange(){this._internals.setFormValue(this.checked?this.value||`on`:null),this.input.checked=this.checked,this.updateValidity()}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,xc(this.input),this.input)}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return S`
      <div
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${j({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${w(this.value)}
            .checked=${Ol(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Z=be(ox),sx=new WeakMap,cx=new WeakMap,lx=new WeakMap,ux=new WeakMap,dx=new WeakMap,fx=new WeakMap,px=new WeakMap,mx=new WeakMap,hx=new WeakMap,gx=new WeakMap,_x=new WeakMap,v(Z,4,`input`,ax,vx,sx),v(Z,4,`hasFocus`,ix,vx,cx),v(Z,4,`title`,rx,vx,lx),v(Z,4,`name`,nx,vx,ux),v(Z,4,`value`,tx,vx,dx),v(Z,4,`size`,ex,vx,fx),v(Z,4,`disabled`,$b,vx,px),v(Z,4,`checked`,Qb,vx,mx),v(Z,4,`form`,Xb,vx,hx),v(Z,4,`required`,Yb,vx,gx),v(Z,4,`helpText`,Jb,vx,_x),v(Z,1,`handleStateChange`,qb,vx),v(Z,1,`handleDisabledChange`,Kb,vx),v(Z,5,`defaultChecked`,Zb,vx),g(Z,vx),y(vx,`styles`,[so,kl,Gb]),y(vx,`formAssociated`,!0),vx.define(`kk-switch`);var yx=x`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--kk-input-font-family);
    font-weight: var(--kk-input-font-weight);
    line-height: var(--kk-line-height-normal);
    letter-spacing: var(--kk-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--kk-transition-fast) color,
      var(--kk-transition-fast) border,
      var(--kk-transition-fast) box-shadow,
      var(--kk-transition-fast) background-color;
    cursor: text;
  }

  /* Textarea padrão */
  .textarea--standard {
    background-color: var(--kk-input-background-color);
    border: solid var(--kk-input-border-width) var(--kk-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--kk-input-background-color-hover);
    border-color: var(--kk-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--kk-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--kk-input-background-color-focus);
    border-color: var(--kk-input-border-color-focus);
    color: var(--kk-input-color-focus);
    box-shadow: 0 0 0 var(--kk-focus-ring-width) var(--kk-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--kk-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--kk-input-background-color-disabled);
    border-color: var(--kk-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--kk-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--kk-input-placeholder-color-disabled);
  }

  /* Textarea preenchida */
  .textarea--filled {
    border: none;
    background-color: var(--kk-input-filled-background-color);
    color: var(--kk-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--kk-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--kk-input-filled-background-color-focus);
    outline: var(--kk-focus-ring);
    outline-offset: var(--kk-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--kk-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--kk-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--kk-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Modificadores de tamanho
   */

  .textarea--small {
    border-radius: var(--kk-input-border-radius-small);
    font-size: var(--kk-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--kk-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--kk-input-border-radius-medium);
    font-size: var(--kk-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--kk-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--kk-input-border-radius-large);
    font-size: var(--kk-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--kk-input-spacing-large);
  }

  /*
   * Tipos de redimensionamento
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  /*
   * Quem cresce com o texto é o CSS (field-sizing: content), e não um ResizeObserver
   * medindo o scrollHeight a cada tecla. Com ele o navegador ignora o atributo rows,
   * então o mínimo volta pelo lh: --rows linhas mais o padding vertical, que é 0.5em de
   * cada lado em todos os tamanhos.
   */
  .textarea--resize-auto .textarea__control {
    field-sizing: content;
    min-height: calc(var(--rows) * 1lh + 1em);
    resize: none;
  }

  /*
   * O alto contraste do sistema (forced-colors) apaga toda box-shadow, e o anel
   * de foco deste campo é uma: quem navega por teclado perdia de vista em que
   * campo está. Ali o foco vira contorno na cor de destaque do sistema.
   */
  @media (forced-colors: active) {
    .textarea--focused {
      outline: var(--kk-focus-ring-width) solid Highlight;
      outline-offset: var(--kk-focus-ring-offset);
    }
  }
`,bx=`important`,xx=` !`+bx,Sx=is(class extends as{constructor(e){if(super(e),e.type!==rs.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(xx);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?bx:``):n[e]=r}}return fa}}),Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Q,Qx,$x,eS,tS,nS,rS,iS,aS,oS,sS,cS,lS,uS,dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS,SS,$=class extends (Zx=k,Xx=[D(`.textarea__control`)],Yx=[E()],Jx=[T()],qx=[T()],Kx=[T()],Gx=[T({reflect:!0})],Wx=[T({type:Boolean,reflect:!0})],Ux=[T()],Hx=[T({attribute:`help-text`})],Vx=[T()],Bx=[T({type:Number})],zx=[T()],Rx=[T({type:Boolean,reflect:!0})],Lx=[T({type:Boolean,reflect:!0})],Ix=[T({reflect:!0,converter:Ra})],Fx=[T({type:Boolean,reflect:!0})],Px=[T({type:Number})],Nx=[T({type:Number})],Mx=[T()],jx=[T({converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],Ax=[T()],kx=[T({type:Boolean})],Ox=[T()],Dx=[T({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],Ex=[T()],Tx=[So()],wx=[O(`disabled`,{waitUntilFirstUpdate:!0})],Cx=[O(`value`,{waitUntilFirstUpdate:!0})],Zx){constructor(){super(...arguments),_(Q,5,this),y(this,`validade`,new Cc(this,{interacaoEm:[`kk-blur`,`kk-input`]})),y(this,`hasSlotController`,new Ps(this,`help-text`,`label`)),b(this,Qx,_(Q,8,this)),_(Q,11,this),b(this,$x,_(Q,12,this,!1)),_(Q,15,this),b(this,eS,_(Q,16,this,``)),_(Q,19,this),b(this,tS,_(Q,20,this,``)),_(Q,23,this),b(this,nS,_(Q,24,this,``)),_(Q,27,this),b(this,rS,_(Q,28,this,`medium`)),_(Q,31,this),b(this,iS,_(Q,32,this,!1)),_(Q,35,this),b(this,aS,_(Q,36,this,``)),_(Q,39,this),b(this,oS,_(Q,40,this,``)),_(Q,43,this),b(this,sS,_(Q,44,this,``)),_(Q,47,this),b(this,cS,_(Q,48,this,4)),_(Q,51,this),b(this,lS,_(Q,52,this,`vertical`)),_(Q,55,this),b(this,uS,_(Q,56,this,!1)),_(Q,59,this),b(this,dS,_(Q,60,this,!1)),_(Q,63,this),b(this,fS,_(Q,64,this,``)),_(Q,67,this),b(this,pS,_(Q,68,this,!1)),_(Q,71,this),b(this,mS,_(Q,72,this)),_(Q,75,this),b(this,hS,_(Q,76,this)),_(Q,79,this),b(this,gS,_(Q,80,this)),_(Q,83,this),b(this,_S,_(Q,84,this,!0)),_(Q,87,this),b(this,vS,_(Q,88,this)),_(Q,91,this),b(this,yS,_(Q,92,this)),_(Q,95,this),b(this,bS,_(Q,96,this)),_(Q,99,this),b(this,xS,_(Q,100,this,!0)),_(Q,103,this),b(this,SS,_(Q,104,this)),_(Q,107,this),y(this,`defaultValue`,_(Q,108,this,``)),_(Q,111,this)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}formResetCallback(){this.validade.esquecerInteracao(),this.value=this.defaultValue,this._internals.setFormValue(this.value),this.updateValidity()}firstUpdated(){this._internals.setFormValue(this.value),this.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`kk-blur`)}handleChange(){this.value=this.input.value,this.emit(`kk-change`)}handleFocus(){this.hasFocus=!0,this.emit(`kk-focus`)}handleInput(){this.value=this.input.value,this.emit(`kk-input`)}handleDisabledChange(){this.input.disabled=this.disabled,this.updateValidity()}handleValueChange(){this._internals.setFormValue(this.value)}updated(e){super.updated(e),e.has(`value`)&&this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e)typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);else return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.validade.conferir(()=>this._internals.checkValidity())}getForm(){return this._internals.form}reportValidity(){return this.validade.conferir(()=>this._internals.reportValidity())}setCustomValidity(e){this.input.setCustomValidity(e),this.updateValidity()}updateValidity(){this.toggleState(`--empty`,!this.value),this.validade.aplicar(this.input.validity.valid,(e,t)=>this.toggleState(e,t)),this._internals.setValidity(this.input.validity,xc(this.input),this.input)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${w(this.name)}
              .value=${Ol(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${w(this.placeholder)}
              rows=${w(this.rows)}
              style=${Sx({"--rows":String(this.rows)})}
              minlength=${w(this.minlength)}
              maxlength=${w(this.maxlength)}
              autocapitalize=${w(this.autocapitalize)}
              autocorrect=${this.autocorrect?`on`:`off`}
              ?autofocus=${this.autofocus}
              spellcheck=${w(this.spellcheck)}
              enterkeyhint=${w(this.enterkeyhint)}
              inputmode=${w(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Q=be(Zx),Qx=new WeakMap,$x=new WeakMap,eS=new WeakMap,tS=new WeakMap,nS=new WeakMap,rS=new WeakMap,iS=new WeakMap,aS=new WeakMap,oS=new WeakMap,sS=new WeakMap,cS=new WeakMap,lS=new WeakMap,uS=new WeakMap,dS=new WeakMap,fS=new WeakMap,pS=new WeakMap,mS=new WeakMap,hS=new WeakMap,gS=new WeakMap,_S=new WeakMap,vS=new WeakMap,yS=new WeakMap,bS=new WeakMap,xS=new WeakMap,SS=new WeakMap,v(Q,4,`input`,Xx,$,Qx),v(Q,4,`hasFocus`,Yx,$,$x),v(Q,4,`title`,Jx,$,eS),v(Q,4,`name`,qx,$,tS),v(Q,4,`value`,Kx,$,nS),v(Q,4,`size`,Gx,$,rS),v(Q,4,`filled`,Wx,$,iS),v(Q,4,`label`,Ux,$,aS),v(Q,4,`helpText`,Hx,$,oS),v(Q,4,`placeholder`,Vx,$,sS),v(Q,4,`rows`,Bx,$,cS),v(Q,4,`resize`,zx,$,lS),v(Q,4,`disabled`,Rx,$,uS),v(Q,4,`readonly`,Lx,$,dS),v(Q,4,`form`,Ix,$,fS),v(Q,4,`required`,Fx,$,pS),v(Q,4,`minlength`,Px,$,mS),v(Q,4,`maxlength`,Nx,$,hS),v(Q,4,`autocapitalize`,Mx,$,gS),v(Q,4,`autocorrect`,jx,$,_S),v(Q,4,`autocomplete`,Ax,$,vS),v(Q,4,`autofocus`,kx,$,yS),v(Q,4,`enterkeyhint`,Ox,$,bS),v(Q,4,`spellcheck`,Dx,$,xS),v(Q,4,`inputmode`,Ex,$,SS),v(Q,1,`handleDisabledChange`,wx,$),v(Q,1,`handleValueChange`,Cx,$),v(Q,5,`defaultValue`,Tx,$),g(Q,$),y($,`styles`,[so,kl,yx]),y($,`formAssociated`,!0),$.define(`kk-textarea`),de(`./ui`);var CS=document.querySelector(`#app`),wS={anotacoes:async()=>(await m(async()=>{let{telaAnotacoes:e}=await import(`./tela-B9wqa_lX.js`);return{telaAnotacoes:e}},__vite__mapDeps([28,29,1,2,3,4,11,30,31,32,5]),import.meta.url)).telaAnotacoes,calendario:async()=>(await m(async()=>{let{telaCalendario:e}=await import(`./tela-DSGHiM6N.js`);return{telaCalendario:e}},__vite__mapDeps([33,29,1,2,3,4,31,32,30,0,5,6,7]),import.meta.url)).telaCalendario,pautas:async()=>(await m(async()=>{let{telaPautas:e}=await import(`./tela-DlVLIiXM.js`);return{telaPautas:e}},__vite__mapDeps([34,29,1,2,3,4,31,35,32,30,0,5,7,6,9,10,11,12,13,36,37,38,15]),import.meta.url)).telaPautas,designacoes:async()=>(await m(async()=>{let{telaDesignacoes:e}=await import(`./tela-BGrQwgBT.js`);return{telaDesignacoes:e}},__vite__mapDeps([39,29,1,2,3,4,31,32,30,9,10,11,12,5,13,36]),import.meta.url)).telaDesignacoes,grupos:async()=>(await m(async()=>{let{telaGrupos:e}=await import(`./tela-BfQgCOq2.js`);return{telaGrupos:e}},__vite__mapDeps([40,29,1,2,3,4,31,32,30,9,10,11,12,5,13,14]),import.meta.url)).telaGrupos,escalas:async()=>(await m(async()=>{let{telaEscalas:e}=await import(`./tela-Bv7yvpra.js`);return{telaEscalas:e}},__vite__mapDeps([41,29,1,2,3,4,31,35,32,30,9,10,11,12,5,13,37,38,14,15,17,16,18,20,19,42,24]),import.meta.url)).telaEscalas,programa:async()=>(await m(async()=>{let{telaPrograma:e}=await import(`./tela-BRr5OSEU.js`);return{telaPrograma:e}},__vite__mapDeps([43,29,1,2,3,4,31,35,32,30,9,10,11,12,5,13,37,38,15,17,16,19,20,44,25]),import.meta.url)).telaPrograma,publica:async()=>(await m(async()=>{let{telaPublica:e}=await import(`./tela-CQnuKuMg.js`);return{telaPublica:e}},__vite__mapDeps([45,29,1,2,3,4,11,31,35,32,30,9,10,12,5,13,37,38,15,17,18,19,20,44,25,26]),import.meta.url)).telaPublica,testemunho:async()=>(await m(async()=>{let{telaTestemunho:e}=await import(`./tela-D_I_Mfqm.js`);return{telaTestemunho:e}},__vite__mapDeps([46,29,1,2,3,4,31,35,32,30,9,10,11,12,5,13,37,38,15,20,19,42,24,22,21,27]),import.meta.url)).telaTestemunho,territorios:async()=>(await m(async()=>{let{telaTerritorios:e}=await import(`./tela-Djt0l-Lw.js`);return{telaTerritorios:e}},__vite__mapDeps([47,29,1,2,3,4,11,31,35,32,30,9,10,12,5,13,37,38,15,42,24,20,48,7]),import.meta.url)).telaTerritorios,quadro:async()=>(await m(async()=>{let{telaQuadro:e}=await import(`./tela-DX5UENVB.js`);return{telaQuadro:e}},__vite__mapDeps([49,29,1,2,3,4,31,32,30,37,38,44,25,17,5,10,11,8,9,12,13,14,15,16,18,19,20,21,22,23,24,26,27]),import.meta.url)).telaQuadro,pessoas:async()=>(await m(async()=>{let{telaPessoas:e}=await import(`./tela-DEc-Bmeq.js`);return{telaPessoas:e}},__vite__mapDeps([50,29,1,2,3,4,31,32,30,9,10,11,12,5,13,14,51,35]),import.meta.url)).telaPessoas,congregacoes:async()=>(await m(async()=>{let{telaCongregacoes:e}=await import(`./tela-DYo-N8Kv.js`);return{telaCongregacoes:e}},__vite__mapDeps([52,29,1,2,3,4,31,32,30,10,11,9]),import.meta.url)).telaCongregacoes,perfil:async()=>(await m(async()=>{let{telaPerfil:e}=await import(`./tela-anmPIZ3q.js`);return{telaPerfil:e}},__vite__mapDeps([53,29,1,2,3,4,31,32,30,9,10,11,15,5,51,35]),import.meta.url)).telaPerfil,tutorial:async()=>(await m(async()=>{let{telaTutorial:e}=await import(`./tela-sO2YJjuW.js`);return{telaTutorial:e}},__vite__mapDeps([54,29,1,2,3,4,32,30]),import.meta.url)).telaTutorial,sobre:async()=>(await m(async()=>{let{telaSobre:e}=await import(`./tela-mzasLXH5.js`);return{telaSobre:e}},__vite__mapDeps([55,56,3,38,29,1,2,4,11,31,32,30,10,9,12,5,13,36,14,18,17,22,20,21,48,7]),import.meta.url)).telaSobre},TS=new Map,ES=new Set,DS=new Map;function OS(e){let t=wS[e];t===void 0||TS.has(e)||ES.has(e)||(ES.add(e),t().then(t=>{TS.set(e,t),jS()}).catch(t=>{ES.delete(e),DS.set(e,String(t)),jS()}))}function kS(e){if(e.modulo===`home`)return{cabecalho:{titulo:p.home.saudacao},conteudo:hn()};let t=Me(e.modulo);if(t===void 0)return{cabecalho:{titulo:p.erro.naoEncontrado,voltarPara:`home`},conteudo:c()};if(wS[t.id]===void 0||!Pe(t.id))return{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:l(t)};let n=DS.get(t.id);if(n!==void 0)return{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:u(n)};let r=TS.get(t.id);return r===void 0?(OS(t.id),{cabecalho:{titulo:t.rotulo,voltarPara:`home`},conteudo:s()}):{cabecalho:{titulo:r.titulo?.(e)??t.rotulo,voltarPara:r.voltarPara?.(e)??`home`,aoVoltar:()=>r.aoVoltar?.(e)??!1,acoes:r.acoes?.(e)},conteudo:r.conteudo(e)}}var AS={modulo:`home`,args:[],query:new URLSearchParams};function jS(){if(CS===null)return;let e=AS,{cabecalho:t,conteudo:n}=kS(e);document.title=e.modulo===`home`?ce.displayName:`${t.titulo} — ${ce.displayName}`,document.documentElement.dataset.modulo=e.modulo,i(tn(t,n,jS),CS)}function MS(){CS!==null&&i(e`
      <div class="carregando">
        <kk-spinner></kk-spinner>
        <p>${p.app.carregando}</p>
      </div>
    `,CS)}function NS(t){CS!==null&&i(e`
      <div class="aviso">
        <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
        <h2>${p.erro.banco}</h2>
        <pre class="detalhe">${t}</pre>
        <kk-button variant="danger" outline @click=${()=>void xn()}>
          <kk-icon slot="prefix" name="trash"></kk-icon>
          ${p.armazenamento.apagarTudo}
        </kk-button>
      </div>
    `,CS)}function PS(e){switch(e){case`instancia-dupla`:return p.armazenamento.memoriaInstanciaDupla;case`navegador-antigo`:return p.armazenamento.memoriaNavegadorAntigo;case`indisponivel`:return p.armazenamento.memoriaIndisponivel;default:return p.armazenamento.memoriaOrigemInsegura}}var FS;async function IS(){try{await ie(f())}catch(e){console.error(`Kobi Org: o dicionário não chegou; abrindo no padrão.`,e),document.documentElement.lang=te(),document.documentElement.dir=re(te())}if(CS===null)return;let e;try{e=await ut()?await An(CS):await kn(CS)}catch(e){NS(String(e));return}jn(),MS(),a(jS);try{FS=await zt(e),FS.persistente||oe(PS(FS.motivo),`warning`),navigator.storage?.persist?.().catch(()=>!1)}catch(e){NS(String(e));return}CS?.removeAttribute(`aria-busy`),addEventListener(`unhandledrejection`,e=>{e.preventDefault(),console.error(`Kobi Org: uma ação falhou.`,e.reason),oe(p.app.acaoFalhou,`danger`)}),Qr(jS);let t=!0;d(e=>{AS=e,jS(),scrollTo({top:0}),t||document.querySelector(`#conteudo`)?.focus({preventScroll:!0}),t=!1}),Be(),Ge(),Wr()}window.__org={estado:()=>FS,repositorio:Ht,apagarDados:Gt,navegacao:{MODULOS:ke,HOME:Ae},backup:()=>m(()=>import(`./backup-BbLC9g8e.js`).then(e=>e.n),__vite__mapDeps([56,3,38]),import.meta.url)},location.hash===``&&r(`home`),IS().catch(e=>{console.error(`Kobi Org: a abertura falhou.`,e),window.__falhaDaAbertura?.(e)});export{pt as A,nn as C,Wt as D,Ht as E,Me as M,Ut as O,gn as S,Yt as T,xn as _,lo as a,_n as b,Zr as c,Ur as d,Hr as f,On as g,tr as h,fo as i,Ne as j,at as k,Xr as l,lr as m,Is as n,ai as o,er as p,po as r,Yr as s,Y_ as t,Wr as u,vn as v,Xt as w,bn as x,yn as y};