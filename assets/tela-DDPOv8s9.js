import{i as e,t}from"./lit-CL39YOSA.js";import{c as n,i as r,l as i,n as a,u as o}from"./idioma-Dwpp7Zfu.js";import{c as s,d as c,f as l}from"./erro-FHfTMgeP.js";import{t as u}from"./notificar-BeOZKYlx.js";import{t as ee}from"./contato-Dy5fPzpa.js";import{C as d,D as f,O as p,S as m,b as te,j as h,k as g,w as ne,x as re}from"./index-sr-LlQKi.js";import{t as ie}from"./carga-D_DL_FuH.js";import{carregarEventos as ae,carregarTipos as oe}from"./dados-BSOk2Wbp.js";import{_ as se,c as ce,d as le,f as ue,g as de,i as fe,l as _,m as pe,n as me,r as v,s as he,t as ge,u as _e,v as y}from"./regras-dax1xzzB.js";import{carregarItens as ve,carregarPautas as ye,excluirItem as be,excluirPauta as xe,salvarItens as Se,salvarPauta as Ce}from"./dados-ajA6sfBr.js";import{t as we}from"./dados-DStJu64q.js";import{t as Te}from"./dados-CSKvXkXq.js";import{f as Ee,s as b}from"./regras-D9ek7SGP.js";import{t as De,u as Oe}from"./dados-DYcZWomU.js";import{t as ke}from"./compartilhar-CutlseMs.js";import{n as Ae}from"./dados-ClOHCwKW.js";var x=42,S=595-x,C=S-x,w=772,T=9,je=11,Me=5,Ne={sequencia:24,duracao:44,sugerido:86,responsavel:86},Pe={assunto:.58,referencia:.42};function Fe(e){let t=C-e.reduce((e,t)=>e+(Ne[t.chave]??0),0),n=x;return e.map(e=>{let r=Ne[e.chave]??t*(Pe[e.chave]??0),i={x:n,largura:r};return n+=r,i})}function E(e,t,n){e.texto(t,595/2,56,{tamanho:15,fonte:`negrito`,alinhamento:`centro`});let r=74;if(n!==``)for(let t of e.tipos.quebrar(n,C,9.5))e.texto(t,595/2,r,{tamanho:9.5,cor:m,alinhamento:`centro`}),r+=12;return e.linha(x,r,S,r,1),r+18}function Ie(e,t,n){let r=C/3,i=t;return n.forEach(([t,n],a)=>{let o=x+a%3*r;e.texto(t.toUpperCase(),o,i,{tamanho:7.5,cor:m}),n===``?e.linha(o,i+15,o+r-16,i+15,.5,m):e.texto(e.tipos.cortar(n,r-12,10.5),o,i+13,{tamanho:10.5}),a%3==2&&(i+=30)}),(n.length%3==0?i:i+30)+4}function Le(e,t,n,r){let i=n.colunas.map((t,n)=>e.tipos.quebrar(t.rotulo,(r[n]?.largura??0)-6,7.5,`negrito`)),a=Math.max(...i.map(e=>e.length))*9+9;return e.retangulo(x,t,C,a,[.95,.96,.97]),i.forEach((n,i)=>{let a=r[i];a!==void 0&&n.forEach((n,r)=>{e.texto(n,a.x+3,t+11+r*9,{tamanho:7.5,fonte:`negrito`,cor:m})})}),t+a+Me}function Re(e,t,n,r){let i=842-x;e.linha(x,i-16,S,i-16,.5,ne),e.texto(t,x,i,{tamanho:8,cor:m}),r>1&&e.texto(`${n+1}/${r}`,S,i,{tamanho:8,cor:m,alinhamento:`fim`})}function ze(e,t,n){let r=e.novaPagina(),i=E(r,t.titulo,n);i=Ie(r,i,t.cabecalho);let a=Fe(t.colunas);i=Le(r,i+6,t,a);for(let n of t.linhas){let o=n.celulas.map((t,n)=>e.tipos.quebrar(t,(a[n]?.largura??0)-6,T)),s=Math.max(...o.map(e=>e.length))*je+Me;i+s>w&&(r=e.novaPagina(),i=Le(r,E(r,t.titulo,``),t,a)),o.forEach((e,t)=>{let n=a[t];n!==void 0&&e.forEach((e,t)=>{r.texto(e,n.x+3,i+8+t*je,{tamanho:T})})}),i+=s,r.linha(x,i-2,S,i-2,.5,ne),i+=2}return t.total!==``&&(i+20>w&&(r=e.novaPagina(),i=E(r,t.titulo,``)),r.texto(t.total,S,i+12,{tamanho:10,fonte:`negrito`,alinhamento:`fim`}),i+=20),{pagina:r,y:i}}function Be(e,t,n){let r=new d(n),i;if(e.partes.forEach((t,n)=>{i=ze(r,t,n===0?e.versiculo:``)}),i!==void 0&&e.observacao!==``){let{pagina:t,y:n}=i,a=r.tipos.quebrar(e.observacao,C,9.5);n+24+a.length*12>w&&(t=r.novaPagina(),n=E(t,e.partes.at(-1)?.titulo??``,``)),t.texto(e.rotuloDaObservacao.toUpperCase(),x,n+14,{tamanho:7.5,cor:m}),a.forEach((e,r)=>{t.texto(e,x,n+28+r*12,{tamanho:9.5})})}return r.paginas.forEach((e,n,r)=>{Re(e,t,n,r.length)}),r.bytes()}var D=[{texto:`1 Timóteo 3:1-7`,assunto:`As qualificações dos anciãos`,link:`https://wol.jw.org/pt/wol/b/r5/lp-t/nwtsty/54/3`},{texto:`Tito 1:5-9`,assunto:`As qualificações dos anciãos`,link:`https://wol.jw.org/pt/wol/b/r5/lp-t/nwtsty/56/1`},{texto:`1 Timóteo 3:8-13`,assunto:`As qualificações dos servos ministeriais`,link:`https://wol.jw.org/pt/wol/b/r5/lp-t/nwtsty/54/3`},{texto:`Organizados para Fazer a Vontade de Jeová, capítulo 5`,assunto:`Superintendentes para pastorear o rebanho`,link:`https://wol.jw.org/pt/wol/d/r5/lp-t/1102014935`},{texto:`Organizados para Fazer a Vontade de Jeová, capítulo 6`,assunto:`Servos ministeriais prestam serviços valiosos`,link:`https://wol.jw.org/pt/wol/d/r5/lp-t/1102014936`},{texto:`A Sentinela, novembro de 2024, “Você está se esforçando para ser servo ministerial?”`,assunto:`A recomendação de servos ministeriais`,link:`https://wol.jw.org/pt/wol/d/r5/lp-t/2024642`}],O={"pt-BR":D,en:[{texto:`1 Timothy 3:1-7`,assunto:`The qualifications of elders`,link:`https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/54/3`},{texto:`Titus 1:5-9`,assunto:`The qualifications of elders`,link:`https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/56/1`},{texto:`1 Timothy 3:8-13`,assunto:`The qualifications of ministerial servants`,link:`https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/54/3`},{texto:`Organized to Do Jehovah’s Will, chapter 5`,assunto:`Overseers to Shepherd the Flock`,link:`https://wol.jw.org/en/wol/d/r1/lp-e/1102014935`},{texto:`Organized to Do Jehovah’s Will, chapter 6`,assunto:`Ministerial Servants Render Valuable Service`,link:`https://wol.jw.org/en/wol/d/r1/lp-e/1102014936`},{texto:`The Watchtower, November 2024, “Brothers—Are You Reaching Out to Be a Ministerial Servant?”`,assunto:`Recommending ministerial servants`,link:`https://wol.jw.org/en/wol/d/r1/lp-e/2024642`}],"es-ES":[{texto:`1 Timoteo 3:1-7`,assunto:`Los requisitos de los ancianos`,link:`https://wol.jw.org/es/wol/b/r4/lp-s/nwtsty/54/3`},{texto:`Tito 1:5-9`,assunto:`Los requisitos de los ancianos`,link:`https://wol.jw.org/es/wol/b/r4/lp-s/nwtsty/56/1`},{texto:`1 Timoteo 3:8-13`,assunto:`Los requisitos de los siervos ministeriales`,link:`https://wol.jw.org/es/wol/b/r4/lp-s/nwtsty/54/3`},{texto:`Organizados para hacer la voluntad de Jehová, capítulo 5`,assunto:`Superintendentes que pastorean el rebaño`,link:`https://wol.jw.org/es/wol/d/r4/lp-s/1102014935`},{texto:`Organizados para hacer la voluntad de Jehová, capítulo 6`,assunto:`Los siervos ministeriales prestan servicios valiosos`,link:`https://wol.jw.org/es/wol/d/r4/lp-s/1102014936`},{texto:`La Atalaya, noviembre de 2024, “¿Tiene la meta de ser siervo ministerial?”`,assunto:`La recomendación de siervos ministeriales`,link:`https://wol.jw.org/es/wol/d/r4/lp-s/2024642`}],pl:[{texto:`1 Tymoteusza 3:1-7`,assunto:`Wymagania stawiane starszym`,link:`https://wol.jw.org/pl/wol/b/r12/lp-p/nwtsty/54/3`},{texto:`Tytusa 1:5-9`,assunto:`Wymagania stawiane starszym`,link:`https://wol.jw.org/pl/wol/b/r12/lp-p/nwtsty/56/1`},{texto:`1 Tymoteusza 3:8-13`,assunto:`Wymagania stawiane sługom pomocniczym`,link:`https://wol.jw.org/pl/wol/b/r12/lp-p/nwtsty/54/3`},{texto:`Zorganizowani do spełniania woli Jehowy, rozdział 5`,assunto:`Nadzorcy, którzy ‛pasą trzodę Bożą’`,link:`https://wol.jw.org/pl/wol/d/r12/lp-p/1102014935`},{texto:`Zorganizowani do spełniania woli Jehowy, rozdział 6`,assunto:`Słudzy pomocniczy wykonują cenną pracę`,link:`https://wol.jw.org/pl/wol/d/r12/lp-p/1102014936`},{texto:`Strażnica, listopad 2024, „Bracia — czy ubiegacie się o to, żeby zostać sługami pomocniczymi?”`,assunto:`Polecanie sług pomocniczych`,link:`https://wol.jw.org/pl/wol/d/r12/lp-p/2024642`}],uk:[{texto:`1 Тимофія 3:1—7`,assunto:`Вимоги до старійшин`,link:`https://wol.jw.org/uk/wol/b/r15/lp-k/nwtsty/54/3`},{texto:`Тита 1:5—9`,assunto:`Вимоги до старійшин`,link:`https://wol.jw.org/uk/wol/b/r15/lp-k/nwtsty/56/1`},{texto:`1 Тимофія 3:8—13`,assunto:`Вимоги до служителів збору`,link:`https://wol.jw.org/uk/wol/b/r15/lp-k/nwtsty/54/3`},{texto:`«Організовані, щоб виконувати волю Єгови», розділ 5`,assunto:`Наглядачі, призначені пасти отару`,link:`https://wol.jw.org/uk/wol/d/r15/lp-k/1102014935`},{texto:`«Організовані, щоб виконувати волю Єгови», розділ 6`,assunto:`Важлива праця служителів збору`,link:`https://wol.jw.org/uk/wol/d/r15/lp-k/1102014936`},{texto:`«Вартова башта», листопад 2024 року, «Брати, чи ви прагнете бути служителями збору?»`,assunto:`Рекомендування служителів збору`,link:`https://wol.jw.org/uk/wol/d/r15/lp-k/2024642`}],ja:[{texto:`テモテ第一 3章1-7節`,assunto:`長老の資格`,link:`https://wol.jw.org/ja/wol/b/r7/lp-j/nwtsty/54/3`},{texto:`テトス 1章5-9節`,assunto:`長老の資格`,link:`https://wol.jw.org/ja/wol/b/r7/lp-j/nwtsty/56/1`},{texto:`テモテ第一 3章8-13節`,assunto:`援助奉仕者の資格`,link:`https://wol.jw.org/ja/wol/b/r7/lp-j/nwtsty/54/3`},{texto:`「エホバの望まれることを行う組織」第5章`,assunto:`群れを世話する監督たち`,link:`https://wol.jw.org/ja/wol/d/r7/lp-j/1102014935`},{texto:`「エホバの望まれることを行う組織」第6章`,assunto:`大事な働きをする援助奉仕者たち`,link:`https://wol.jw.org/ja/wol/d/r7/lp-j/1102014936`},{texto:`「ものみの塔」2024年11月号 “援助奉仕者として奉仕することを目標にできますか”`,assunto:`援助奉仕者の推薦`,link:`https://wol.jw.org/ja/wol/d/r7/lp-j/2024642`}],"zh-CN":[{texto:`提摩太前书3:1-7`,assunto:`长老要符合的资格`,link:`https://wol.jw.org/cmn-Hans/wol/b/r23/lp-chs/nwtsty/54/3`},{texto:`提多书1:5-9`,assunto:`长老要符合的资格`,link:`https://wol.jw.org/cmn-Hans/wol/b/r23/lp-chs/nwtsty/56/1`},{texto:`提摩太前书3:8-13`,assunto:`助理仆人要符合的资格`,link:`https://wol.jw.org/cmn-Hans/wol/b/r23/lp-chs/nwtsty/54/3`},{texto:`《组织起来遵行耶和华的旨意》第5章`,assunto:`监督牧养羊群`,link:`https://wol.jw.org/cmn-Hans/wol/d/r23/lp-chs/1102014935`},{texto:`《组织起来遵行耶和华的旨意》第6章`,assunto:`助理仆人执行重要职务`,link:`https://wol.jw.org/cmn-Hans/wol/d/r23/lp-chs/1102014936`},{texto:`《守望台》2024年11月刊〈弟兄们，你有没有竭力符合资格做助理仆人？〉`,assunto:`推荐助理仆人`,link:`https://wol.jw.org/cmn-Hans/wol/d/r23/lp-chs/2024642`}],ko:[{texto:`디모데 전서 3:1-7`,assunto:`장로의 자격`,link:`https://wol.jw.org/ko/wol/b/r8/lp-ko/nwtsty/54/3`},{texto:`디도서 1:5-9`,assunto:`장로의 자격`,link:`https://wol.jw.org/ko/wol/b/r8/lp-ko/nwtsty/56/1`},{texto:`디모데 전서 3:8-13`,assunto:`봉사의 종의 자격`,link:`https://wol.jw.org/ko/wol/b/r8/lp-ko/nwtsty/54/3`},{texto:`「여호와의 뜻을 행하는 조직」 제5장`,assunto:`양 떼를 돌보는 감독자들`,link:`https://wol.jw.org/ko/wol/d/r8/lp-ko/1102014935`},{texto:`「여호와의 뜻을 행하는 조직」 제6장`,assunto:`가치 있는 봉사를 수행하는 봉사의 종들`,link:`https://wol.jw.org/ko/wol/d/r8/lp-ko/1102014936`},{texto:`「파수대」 2024년 11월호 “형제 여러분, 봉사의 종으로 섬기기 위해 힘써 노력하고 있습니까?”`,assunto:`봉사의 종 추천`,link:`https://wol.jw.org/ko/wol/d/r8/lp-ko/2024642`}],ar:[{texto:`١ تيموثاوس ٣:‏١-‏٧`,assunto:`مؤهِّلات الشيوخ`,link:`https://wol.jw.org/ar/wol/b/r39/lp-a/nwt/54/3`},{texto:`تيطس ١:‏٥-‏٩`,assunto:`مؤهِّلات الشيوخ`,link:`https://wol.jw.org/ar/wol/b/r39/lp-a/nwt/56/1`},{texto:`١ تيموثاوس ٣:‏٨-‏١٣`,assunto:`مؤهِّلات الخدام المساعدين`,link:`https://wol.jw.org/ar/wol/b/r39/lp-a/nwt/54/3`},{texto:`«شعب منظَّم لفعل مشيئة يهوه»، الفصل ٥`,assunto:`نظار معيَّنون ليرعوا الرعية`,link:`https://wol.jw.org/ar/wol/d/r39/lp-a/1102014935`},{texto:`«شعب منظَّم لفعل مشيئة يهوه»، الفصل ٦`,assunto:`دور الخدام المساعدين المهم في الجماعة`,link:`https://wol.jw.org/ar/wol/d/r39/lp-a/1102014936`},{texto:`برج المراقبة، تشرين الثاني (‏نوفمبر)‏ ٢٠٢٤، «أيها الإخوة،‏ هل تسعون لتصيروا خدامًا مساعدين؟‏»`,assunto:`التوصية بخدام مساعدين`,link:`https://wol.jw.org/ar/wol/d/r39/lp-a/2024642`}],ht:[{texto:`1 Timote 3:1-7`,assunto:`Kondisyon ansyen yo dwe ranpli`,link:`https://wol.jw.org/ht/wol/b/r60/lp-cr/nwt/54/3`},{texto:`Tit 1:5-9`,assunto:`Kondisyon ansyen yo dwe ranpli`,link:`https://wol.jw.org/ht/wol/b/r60/lp-cr/nwt/56/1`},{texto:`1 Timote 3:8-13`,assunto:`Kondisyon sèvitè ministeryèl yo dwe ranpli`,link:`https://wol.jw.org/ht/wol/b/r60/lp-cr/nwt/54/3`},{texto:`Nou òganize pou nou fè volonte Jewova, chapit 5`,assunto:`Siveyan ki la pou pran swen twoupo a`,link:`https://wol.jw.org/ht/wol/d/r60/lp-cr/1102014935`},{texto:`Nou òganize pou nou fè volonte Jewova, chapit 6`,assunto:`Sèvitè ministeryèl yo akonpli yon sèvis ki gen anpil valè`,link:`https://wol.jw.org/ht/wol/d/r60/lp-cr/1102014936`},{texto:`Toudegad, novanm 2024, “Frè n yo, èske n ap chèche vin sèvitè ministeryèl?”`,assunto:`Rekòmandasyon sèvitè ministeryèl yo`,link:`https://wol.jw.org/ht/wol/d/r60/lp-cr/2024642`}]};function Ve(e){return O[e]??D}Object.keys(O);function k(e){return a.pautas.titulos[e]}function He(e,t){return k(e===`conjunta`?t===`servos`?`servos`:`anciaos`:e)}function Ue(e,t,n){let r=[[a.pautas.data,i(e.data)],[a.pautas.hora,e.hora]],o=n.congregacao(e.congregacao_id);return o!==``&&r.push([a.pautas.congregacao,o]),r.push([a.pautas.preside,n.pessoa(e.preside_id)]),y(e.tipo)&&t===`anciaos`&&r.push([a.pautas.oracaoInicial,n.pessoa(e.oracao_inicial_id)],[a.pautas.oracaoFinal,n.pessoa(e.oracao_final_id)]),r}function We(e){let t=[{chave:`sequencia`,rotulo:a.pautas.colunas.sequencia},{chave:`duracao`,rotulo:a.pautas.colunas.duracao},{chave:`assunto`,rotulo:a.pautas.colunas.assunto},{chave:`referencia`,rotulo:a.pautas.colunas.referencia}];return e===`anciaos`&&t.push({chave:`sugerido`,rotulo:a.pautas.colunas.sugerido}),t.push({chave:`responsavel`,rotulo:a.pautas.colunas.responsavel}),t}function A(e){return e>0?a.pautas.minutos(e):``}function Ge(e,t,n,r){let i={sequencia:String(t),duracao:A(e.duracao_min),assunto:e.assunto,referencia:e.referencia,sugerido:r.pessoa(e.sugerido_por_id),responsavel:r.pessoa(e.responsavel_id)};return{celulas:n.map(e=>i[e.chave]),link:e.referencia_link}}function Ke(e,t,n){let r=pe(e.tipo).map(r=>{let i=_(t,r),o=We(r),s=v(i);return{parte:r,titulo:He(e.tipo,r),cabecalho:Ue(e,r,n),colunas:o,linhas:i.map((e,t)=>Ge(e,t+1,o,n)),total:s>0?a.pautas.total(A(s)):``}});return{titulo:k(e.tipo),versiculo:a.pautas.versiculo,partes:r,observacao:e.observacao,rotuloDaObservacao:a.pautas.observacao,arquivo:`pauta-${e.tipo}${e.data===``?``:`-${e.data}`}.pdf`}}function qe(e){let t=[];for(let n of e.partes){let r=[n.titulo];n===e.partes[0]&&r.push(e.versiculo),r.push(``);for(let[e,t]of n.cabecalho)t!==``&&r.push(`${e}: ${t}`);r.push(``),n.linhas.length===0&&r.push(a.pautas.semItens);for(let e of n.linhas){let t=t=>{let r=n.colunas.findIndex(e=>e.chave===t);return r<0?``:e.celulas[r]??``},i=t(`duracao`);r.push(`${t(`sequencia`)}. ${t(`assunto`)||a.pautas.semAssunto}${i===``?``:` (${i})`}`);let o=[t(`referencia`),e.link].filter(e=>e!==``);o.length>0&&r.push(`   ${a.pautas.colunas.referencia}: ${o.join(` — `)}`);let s=[[a.pautas.colunas.sugerido,t(`sugerido`)],[a.pautas.colunas.responsavel,t(`responsavel`)]].filter(([,e])=>e!==``).map(([e,t])=>`${e}: ${t}`);s.length>0&&r.push(`   ${s.join(` · `)}`)}n.total!==``&&r.push(``,n.total),t.push(r.join(`
`))}return e.observacao!==``&&t.push(`${e.rotuloDaObservacao}: ${e.observacao}`),t.join(`

`)}var j=[],M=[],N=[],P=[],F=[],Je=[],Ye=[],Xe=``,I=null,L=``,R=null,z=``;async function B(){let e;[j,M,N,P,F,e,Je,Ye]=await Promise.all([ye(),ve(),Te(),we(),De(),Ae(),oe(),ae()]),Xe=e.nome.trim()}var V=new ie(`Pautas`,B);c(`pautas`,()=>{V.esquecer(),I=null,R=null});function H(e){return e===null?``:N.find(t=>t.id===e)?.nome??``}function U(e){return e===null?``:P.find(t=>t.id===e)?.nome??``}var Ze={pessoa:H,congregacao:U};function Qe(e){return Oe(e,e=>a.tiposDeDesignacao[e])}function W(e){let t=Number(e.args[0]);return j.find(e=>e.id===t)}function G(e){return M.filter(t=>t.pauta_id===e.id)}function $e(){let e=P.length===1?P[0]?.id??null:null,t=b(N,`coordenador`,e);I=de(e,t?.id??null),L=``,s()}function et(e){I={...e},L=``,s()}function K(e){I!==null&&(I={...I,...e})}function q(){I=null,L=``,s()}function J(e,t){return{itens:t,tipos:Je,existente:e.id===void 0?void 0:Ye.find(t=>t.pauta_id===e.id)}}function tt(e,t){return[...G(e).filter(e=>!t.some(t=>t.id===e.id)),...t]}async function nt(e){let t=e.id===void 0?[]:ce(G(e),e.tipo),n;try{n=await Ce(e,t,J(e,tt(e,t)))}catch(e){console.error(`Pautas: a gravação do cabeçalho falhou.`,e),u(a.pautas.naoSalva,`danger`);return}let r=e.id===void 0;I=null,u(a.pautas.salva),await B(),r&&l(`pautas/${n}`),s()}async function rt(e){if(await p({titulo:a.pautas.excluirTitulo,texto:a.pautas.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})){try{await xe(e.id)}catch(e){console.error(`Pautas: a exclusão falhou.`,e),u(a.pautas.naoExcluida,`danger`);return}u(a.pautas.excluida),await B(),l(`pautas`)}}function Y(e){return e.target.value}function X(e){let t=Number(Y(e));return Number.isInteger(t)&&t>0?t:null}function Z(t){let n=Ee(N,t.papeis,t.congregacao,t.atual);return e`
    <kk-select
      name=${t.nome}
      label=${t.rotulo}
      help-text=${n.length===0?t.vazio:``}
      .value=${String(t.atual??0)}
      @kk-change=${e=>t.aoEscolher(X(e))}
    >
      <kk-option value="0">${a.pautas.ninguem}</kk-option>
      ${n.map(t=>e`
          <kk-option value=${String(t.id??0)}>
            ${t.ativo===0?a.pautas.inativo(t.nome):t.nome}
          </kk-option>
        `)}
    </kk-select>
  `}function it(n){let r=(e,t,r)=>Z({nome:e,rotulo:t,papeis:[`anciao`],congregacao:n.congregacao_id,atual:n[r],vazio:a.pautas.semAnciaos,aoEscolher:e=>K({[r]:e})});return e`
    <kk-dialog
      open
      class="pauta-form"
      label=${n.id===void 0?a.pautas.nova:a.pautas.editarCabecalho}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-select
          name="tipo"
          label=${a.pautas.tipo}
          help-text=${n.id===void 0?``:a.pautas.tipoAjuda}
          .value=${n.tipo}
          @kk-change=${e=>{let t=Y(e);fe(t)&&K({tipo:t}),s()}}
        >
          ${ge.map(t=>e`<kk-option value=${t}>${a.pautas.tipos[t]}</kk-option>`)}
        </kk-select>

        ${P.length===0?t:e`
              <kk-select
                name="congregacao"
                label=${a.pautas.congregacao}
                .value=${String(n.congregacao_id??0)}
                @kk-change=${e=>{let t=X(e);K({congregacao_id:t,...I?.id===void 0?{preside_id:b(N,`coordenador`,t)?.id??null}:{}}),s()}}
              >
                <kk-option value="0">${a.pautas.congregacaoNenhuma}</kk-option>
                ${P.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
              </kk-select>
            `}

        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${o}
            name="data"
            label=${a.pautas.data}
            clearable
            .value=${n.data}
            @kk-change=${e=>K({data:Y(e)})}
          ></kk-date-picker>
          <kk-input
            name="hora"
            type="time"
            label=${a.pautas.hora}
            .value=${n.hora}
            @kk-change=${e=>K({hora:Y(e)})}
          ></kk-input>
        </div>

        ${r(`preside`,a.pautas.preside,`preside_id`)}
        ${y(n.tipo)?e`
              <div class="formulario__par">
                ${r(`oracao-inicial`,a.pautas.oracaoInicial,`oracao_inicial_id`)}
                ${r(`oracao-final`,a.pautas.oracaoFinal,`oracao_final_id`)}
              </div>
            `:t}

        <kk-textarea
          name="observacao"
          label=${a.pautas.observacao}
          rows="2"
          .value=${n.observacao}
          @kk-input=${e=>K({observacao:Y(e)})}
        ></kk-textarea>

        ${L===``?t:e`<p class="erro" role="alert">${L}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${q}>${a.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{I!==null&&nt(I)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${a.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function at(e){R={item:{...e},duracao:e.duracao_min>0?String(e.duracao_min):``,link:e.referencia_link},z=``,s()}function ot(e,t){at(he(e.id,t,se(G(e),t)))}function Q(e,t={}){R!==null&&(R={...R,...t,item:{...R.item,...e}})}function $(){R=null,z=``,s()}async function st(e){let t=me(e.duracao),n=_e(e.link),r=e.item.assunto.trim()===``?a.pautas.item.semAssunto:t===null?a.pautas.item.duracaoInvalida:n===null?a.pautas.item.linkInvalido:``;if(r!==``||t===null||n===null)z=r,s();else{try{let r={...e.item,duracao_min:t,referencia_link:n},i=j.find(e=>e.id===r.pauta_id);await Se([r],i,i===void 0?void 0:J(i,tt(i,[r])))}catch(e){console.error(`Pautas: a gravação do item falhou.`,e),u(a.pautas.item.naoSalvo,`danger`);return}R=null,u(a.pautas.item.salvo),await B(),s()}}async function ct(e){if(await p({titulo:a.pautas.item.excluirTitulo,texto:a.pautas.item.excluirTexto,rotuloConfirmar:a.acoes.excluir,variante:`danger`})){try{let t=j.find(t=>G(t).some(t=>t.id===e));if(t===void 0)throw Error(`o item ${e} não é de nenhuma pauta`);await be(e,t,J(t,G(t).filter(t=>t.id!==e)))}catch(e){console.error(`Pautas: a exclusão do item falhou.`,e),u(a.pautas.item.naoExcluido,`danger`);return}R=null,u(a.pautas.item.excluido),await B(),s()}}async function lt(e,t,n){let r=le(G(e),t,n);if(r.length!==0){try{await Se(r)}catch(e){console.error(`Pautas: a reordenação falhou.`,e),u(a.pautas.item.naoMovido,`danger`);return}await B(),s()}}function ut(){return f(a.pautas.item.sugeridas,null,t=>e`
      <p class="pauta-sugeridas__ajuda">${a.pautas.item.sugeridasTexto}</p>
      <div class="lista">
        ${Ve(r()).map(n=>e`
            <button class="linha" @click=${()=>t(n)}>
              <kk-icon class="linha__icone" name="book-2"></kk-icon>
              <span class="linha__texto">
                <span class="linha__rotulo">${n.texto}</span>
                <span class="linha__sub">${n.assunto}</span>
              </span>
            </button>
          `)}
      </div>
    `,{classe:`pauta-sugeridas`})}function dt(n,r){let i=n.item,o=i.parte===`servos`,c=F.filter(e=>e.id===i.designacao_id||e.congregacao_id===null||e.congregacao_id===r.congregacao_id),l=o&&c.length>0;return e`
    <kk-dialog
      open
      class="item-form"
      label=${i.id===void 0?a.pautas.item.novo:a.pautas.item.editar}
      @kk-request-close=${h}
      @kk-initial-focus=${g}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&$()}}
    >
      <div class="formulario">
        ${l?e`
              <kk-select
                name="designacao"
                label=${a.pautas.item.designacao}
                help-text=${a.pautas.item.designacaoAjuda}
                .value=${String(i.designacao_id??0)}
                @kk-change=${e=>{let t=X(e),n=F.find(e=>e.id===t);Q(n===void 0?{designacao_id:null}:{designacao_id:t,assunto:Qe(n),responsavel_id:n.pessoa_id}),s()}}
              >
                <kk-option value="0">${a.pautas.item.designacaoNenhuma}</kk-option>
                ${c.map(t=>e`<kk-option value=${String(t.id)}>${Qe(t)}</kk-option>`)}
              </kk-select>
            `:t}

        <kk-input
          name="assunto"
          label=${a.pautas.item.assunto}
          placeholder=${a.pautas.item.assuntoPlaceholder}
          required
          .value=${i.assunto}
          @kk-input=${e=>Q({assunto:Y(e)})}
        ></kk-input>

        <kk-input
          name="duracao"
          type="number"
          inputmode="numeric"
          min="0"
          max="600"
          label=${a.pautas.item.duracao}
          .value=${n.duracao}
          @kk-input=${e=>Q({},{duracao:Y(e)})}
        ></kk-input>

        <div class="pauta-referencia">
          <kk-input
            class="pauta-referencia__campo"
            name="referencia"
            label=${a.pautas.item.referencia}
            placeholder=${a.pautas.item.referenciaPlaceholder}
            .value=${i.referencia}
            @kk-input=${e=>Q({referencia:Y(e)})}
          ></kk-input>
          <kk-button
            class="pauta-referencia__sugeridas"
            @click=${async()=>{let e=await ut();e!==null&&(Q({referencia:e.texto},{link:e.link}),s())}}
          >
            <kk-icon slot="prefix" name="book-2"></kk-icon>${a.pautas.item.sugeridas}
          </kk-button>
        </div>

        <kk-input
          name="link"
          type="url"
          inputmode="url"
          label=${a.pautas.item.link}
          help-text=${a.pautas.item.linkAjuda}
          .value=${n.link}
          @kk-input=${e=>Q({},{link:Y(e)})}
        ></kk-input>

        ${o?t:Z({nome:`sugerido`,rotulo:a.pautas.item.sugerido,papeis:[`anciao`],congregacao:r.congregacao_id,atual:i.sugerido_por_id,vazio:a.pautas.semAnciaos,aoEscolher:e=>Q({sugerido_por_id:e})})}
        ${Z({nome:`responsavel`,rotulo:a.pautas.item.responsavel,papeis:o?[`anciao`,`servo_ministerial`]:[`anciao`],congregacao:r.congregacao_id,atual:i.responsavel_id,vazio:o?a.pautas.semAnciaosNemServos:a.pautas.semAnciaos,aoEscolher:e=>Q({responsavel_id:e})})}

        ${z===``?t:e`<p class="erro" role="alert">${z}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${i.id===void 0?t:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{R?.item.id!==void 0&&ct(R.item.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${a.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${$}>${a.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{R!==null&&st(R)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${a.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function ft(e){let t=b(N,`secretario`,e.congregacao_id),n=Ee(N,[`anciao`,`servo_ministerial`],e.congregacao_id).filter(e=>e.telefone!==``||e.email!==``);return t!==null&&n.includes(t)?[t,...n.filter(e=>e!==t)]:n}async function pt(e){let t=Ke(e,G(e),Ze),r=a.pautas.enviar.rodape(n(Date.now()),Xe),i=JSON.stringify([t,r]),o=re(i)??await te(i);if(o===void 0)return;let s=Be(t,r,o);try{let e=await ke(s,t.arquivo,`application/pdf`,t.titulo);e===`compartilhado`&&u(a.pautas.enviar.compartilhado),e===`baixado`&&u(a.pautas.enviar.baixado)}catch(e){console.error(`Pautas: a entrega do PDF falhou.`,e),u(a.pautas.enviar.naoCompartilhado,`danger`)}}function mt(n){let r=Ke(n,G(n),Ze),o=qe(r),s=[r.titulo,i(n.data)].filter(e=>e!==``).join(` — `),c=ft(n),l=c[0];f(a.pautas.enviar.titulo,null,(r,i,u)=>{let d=ee(l?.telefone??``),f=l?.email??``;return e`
        <div class="formulario pauta-envio">
          <kk-button variant="primary" @click=${()=>void pt(n)}>
            <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${a.pautas.enviar.pdf}
          </kk-button>
          <p class="pauta-envio__ajuda">${a.pautas.enviar.pdfAjuda}</p>

          <kk-select
            name="destinatario"
            label=${a.pautas.enviar.destinatario}
            help-text=${a.pautas.enviar.destinatarioAjuda}
            ?disabled=${c.length===0}
            placeholder=${c.length===0?a.pautas.enviar.semDestinatarios:``}
            .value=${String(l?.id??``)}
            @kk-change=${e=>{let t=Number(Y(e));l=c.find(e=>e.id===t),u()}}
          >
            ${c.map(t=>e`<kk-option value=${String(t.id??0)}>${t.nome}</kk-option>`)}
          </kk-select>

          <div class="pauta-envio__texto">
            <kk-button
              name="whatsapp"
              href=${d===``?t:`https://wa.me/${d}?text=${encodeURIComponent(o)}`}
              target="_blank"
              ?disabled=${d===``}
            >
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${a.pautas.enviar.whatsapp}
            </kk-button>
            <kk-button
              name="email"
              href=${f===``?t:`mailto:${f}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(o)}`}
              ?disabled=${f===``}
            >
              <kk-icon slot="prefix" name="mail"></kk-icon>${a.pautas.enviar.email}
            </kk-button>
          </div>
          <p class="pauta-envio__ajuda">
            ${l!==void 0&&d===``?a.pautas.enviar.semTelefone:l!==void 0&&f===``?a.pautas.enviar.semEmail:a.pautas.enviar.textoAjuda}
          </p>
        </div>
      `},{classe:`pauta-envio-dialogo`})}function ht(e){let t=G(e),n=v(t);return[a.pautas.tipos[e.tipo],P.length>1?U(e.congregacao_id):``,a.pautas.itens(t.length),n>0?A(n):``].filter(e=>e!==``).join(` · `)}function gt(e){return e.data===``?a.pautas.semData:[i(e.data),e.hora].filter(e=>e!==``).join(` · `)}function _t(){return j.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="list-check"></kk-icon>
        <strong>${a.pautas.vazio}</strong>
        <p>${a.pautas.vazioTexto}</p>
        <kk-button variant="primary" @click=${$e}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${a.pautas.nova}
        </kk-button>
      </div>
    `:e`
    <p class="contagem" aria-live="polite">${a.pautas.contagem(j.length)}</p>
    <div class="lista">
      ${ue(j).map(t=>e`
          <button
            class="linha"
            data-pauta=${t.id??0}
            @click=${()=>l(`pautas/${t.id}`)}
          >
            <kk-icon class="linha__icone" name="list-check"></kk-icon>
            <span class="linha__texto">
              <span class="linha__rotulo">${gt(t)}</span>
              <span class="linha__sub">${ht(t)}</span>
            </span>
            <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
          </button>
        `)}
    </div>
  `}function vt(n){let r=[[a.pautas.data,i(n.data)||a.pautas.semData],[a.pautas.hora,n.hora],[a.pautas.congregacao,U(n.congregacao_id)],[a.pautas.preside,H(n.preside_id)]];return y(n.tipo)&&r.push([a.pautas.oracaoInicial,H(n.oracao_inicial_id)],[a.pautas.oracaoFinal,H(n.oracao_final_id)]),e`
    <section class="pauta-cabecalho">
      <p class="pauta-cabecalho__versiculo">${a.pautas.versiculo}</p>
      <dl class="pauta-dados">
        ${r.filter(([,e])=>e!==``).map(([t,n])=>e`
              <div class="pauta-dados__par">
                <dt>${t}</dt>
                <dd>${n}</dd>
              </div>
            `)}
      </dl>
      ${n.observacao===``?t:e`<p class="pauta-cabecalho__observacao">${n.observacao}</p>`}
      <kk-button class="pauta-cabecalho__editar" size="small" @click=${()=>et(n)}>
        <kk-icon slot="prefix" name="pencil"></kk-icon>${a.pautas.editarCabecalho}
      </kk-button>
    </section>
  `}function yt(t,n,r,i){let o=n.id??0,s=[A(n.duracao_min),n.referencia,H(n.responsavel_id)].filter(e=>e!==``);return e`
    <div class="pauta-item" data-item=${o}>
      <span class="pauta-item__numero">${r}</span>
      <button class="pauta-item__corpo" @click=${()=>at(n)}>
        <span class="pauta-item__assunto">${n.assunto||a.pautas.semAssunto}</span>
        <span class="pauta-item__sub">${s.join(` · `)}</span>
      </button>
      <kk-icon-button
        name="arrow-up"
        label=${a.pautas.item.subir}
        ?disabled=${r===1}
        @click=${()=>void lt(t,o,-1)}
      ></kk-icon-button>
      <kk-icon-button
        name="arrow-down"
        label=${a.pautas.item.descer}
        ?disabled=${r===i}
        @click=${()=>void lt(t,o,1)}
      ></kk-icon-button>
    </div>
  `}function bt(n,r){let i=_(G(n),r),o=v(i);return e`
    <section class="pauta-parte" data-parte=${r}>
      <h3 class="secao">${a.pautas.partes[r]}</h3>
      ${i.length===0?e`<p class="pauta-parte__vazia">${a.pautas.semItens}</p>`:e`
            <div class="lista">
              ${i.map((e,t)=>yt(n,e,t+1,i.length))}
            </div>
          `}
      <div class="pauta-parte__pe">
        <kk-button size="small" @click=${()=>ot(n,r)}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${a.pautas.item.adicionar}
        </kk-button>
        ${o>0?e`<strong class="pauta-parte__total">${a.pautas.total(A(o))}</strong>`:t}
      </div>
    </section>
  `}function xt(n){return e`
    ${vt(n)}
    ${pe(n.tipo).map(e=>bt(n,e))}
    <div class="pauta-acoes">
      <kk-button
        class="dialogo__excluir"
        variant="danger"
        outline
        @click=${()=>void rt(n)}
      >
        <kk-icon slot="prefix" name="trash"></kk-icon>${a.pautas.excluir}
      </kk-button>
      <kk-button variant="primary" @click=${()=>mt(n)}>
        <kk-icon slot="prefix" name="share"></kk-icon>${a.pautas.enviar.botao}
      </kk-button>
    </div>
    ${R===null?t:dt(R,n)}
  `}function St(){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${a.pautas.naoEncontrada}</h2>
      <p>${a.pautas.naoEncontradaTexto}</p>
      <kk-button @click=${()=>l(`pautas`)}>${a.pautas.voltarALista}</kk-button>
    </div>
  `}function Ct(e){return e?.id===void 0?void 0:e}var wt={titulo(e){if(e.args.length===0||!V.terminou)return;let t=W(e);return t===void 0?void 0:k(t.tipo)},voltarPara(e){return e.args.length===0?`home`:`pautas`},aoVoltar(){return R===null?I!==null&&(q(),!0):($(),!0)},acoes(t){if(V.terminou){if(t.args.length>0){let n=W(t);return n===void 0?void 0:e`
          <kk-icon-button
            name="share"
            label=${a.pautas.enviar.botao}
            @click=${()=>mt(n)}
          ></kk-icon-button>
        `}return e`<kk-icon-button name="plus" label=${a.pautas.nova} @click=${$e}></kk-icon-button>`}},conteudo(n){let r=V.espera();if(r!==null)return r;let i=I===null?t:it(I);if(n.args.length===0)return e`${_t()} ${i}`;let a=Ct(W(n));return a===void 0?St():e`${xt(a)} ${i}`}};export{wt as telaPautas};