import{_ as e,c as t,d as n,f as r,m as i}from"./erro-Bc0C-0ww.js";import{d as a,f as o,i as s,n as c,u as l}from"./idioma-CVgIQtmc.js";import{t as u}from"./notificar-BeOZKYlx.js";import{t as ee}from"./contato-Dy5fPzpa.js";import{S as d,b as f,d as te,f as ne,h as p,m as re,p as m,v as h,y as g}from"./index-CCl639Mp.js";import{t as ie}from"./carga-N4u32e31.js";import{carregarEventos as ae,carregarTipos as oe}from"./dados-Brf5f_LR.js";import{_ as se,c as ce,d as le,f as ue,g as de,i as fe,l as _,m as pe,n as me,r as v,s as he,t as ge,u as _e,v as y}from"./regras-CCy9eCHk.js";import{carregarItens as ve,carregarPautas as ye,excluirItem as be,excluirPauta as xe,salvarItens as Se,salvarPauta as Ce}from"./dados-CeBP-mRV.js";import{t as we}from"./dados-CAIyjVFG.js";import{t as Te}from"./dados-9wsuHbxQ.js";import{f as b,s as x}from"./regras-D9ek7SGP.js";import{t as Ee,u as De}from"./dados-Dv-2S1p7.js";import{t as Oe}from"./compartilhar-CutlseMs.js";import{n as ke}from"./dados-gu31gVbW.js";var S=42,C=595-S,w=C-S,T=772,Ae=9,je=11,Me=5,Ne={sequencia:24,duracao:44,sugerido:86,responsavel:86},Pe={assunto:.58,referencia:.42};function Fe(e){let t=w-e.reduce((e,t)=>e+(Ne[t.chave]??0),0),n=S;return e.map(e=>{let r=Ne[e.chave]??t*(Pe[e.chave]??0),i={x:n,largura:r};return n+=r,i})}function Ie(e,t,n){e.texto(t,595/2,56,{tamanho:15,fonte:`negrito`,alinhamento:`centro`});let r=74;if(n!==``)for(let t of e.tipos.quebrar(n,w,9.5))e.texto(t,595/2,r,{tamanho:9.5,cor:m,alinhamento:`centro`}),r+=12;return e.linha(S,r,C,r,1),r+18}function Le(e,t,n){let r=w/3,i=t;return n.forEach(([t,n],a)=>{let o=S+a%3*r;e.texto(t.toUpperCase(),o,i,{tamanho:7.5,cor:m}),n===``?e.linha(o,i+15,o+r-16,i+15,.5,m):e.texto(e.tipos.cortar(n,r-12,10.5),o,i+13,{tamanho:10.5}),a%3==2&&(i+=30)}),(n.length%3==0?i:i+30)+4}function Re(e,t,n,r){let i=n.colunas.map((t,n)=>e.tipos.quebrar(t.rotulo,(r[n]?.largura??0)-6,7.5,`negrito`)),a=Math.max(...i.map(e=>e.length))*9+9;return e.retangulo(S,t,w,a,[.95,.96,.97]),i.forEach((n,i)=>{let a=r[i];a!==void 0&&n.forEach((n,r)=>{e.texto(n,a.x+3,t+11+r*9,{tamanho:7.5,fonte:`negrito`,cor:m})})}),t+a+Me}function ze(e,t,n,r){let i=842-S;e.linha(S,i-16,C,i-16,.5,p),e.texto(t,S,i,{tamanho:8,cor:m}),r>1&&e.texto(`${n+1}/${r}`,C,i,{tamanho:8,cor:m,alinhamento:`fim`})}function Be(e,t,n){let r=e.novaPagina(),i=Ie(r,t.titulo,n);i=Le(r,i,t.cabecalho);let a=Fe(t.colunas);i=Re(r,i+6,t,a);for(let n of t.linhas){let o=n.celulas.map((t,n)=>e.tipos.quebrar(t,(a[n]?.largura??0)-6,Ae)),s=Math.max(...o.map(e=>e.length))*je+Me;i+s>T&&(r=e.novaPagina(),i=Re(r,S,t,a)),o.forEach((e,t)=>{let n=a[t];n!==void 0&&e.forEach((e,t)=>{r.texto(e,n.x+3,i+8+t*je,{tamanho:Ae})})}),i+=s,r.linha(S,i-2,C,i-2,.5,p),i+=2}return t.total!==``&&(i+20>T&&(r=e.novaPagina(),i=S),r.texto(t.total,C,i+12,{tamanho:10,fonte:`negrito`,alinhamento:`fim`}),i+=20),{pagina:r,y:i}}function Ve(e,t,n){let r=new re(n),i;if(e.partes.forEach((t,n)=>{i=Be(r,t,n===0?e.versiculo:``)}),i!==void 0&&e.observacao!==``){let{pagina:t,y:n}=i,a=r.tipos.quebrar(e.observacao,w,9.5);n+24+a.length*12>T&&(t=r.novaPagina(),n=S),t.texto(e.rotuloDaObservacao.toUpperCase(),S,n+14,{tamanho:7.5,cor:m}),a.forEach((e,r)=>{t.texto(e,S,n+28+r*12,{tamanho:9.5})})}return r.paginas.forEach((e,n,r)=>{ze(e,t,n,r.length)}),r.bytes()}var He=[{texto:`1 Timóteo 3:1-7`,assunto:`As qualificações dos anciãos`,link:`https://wol.jw.org/pt/wol/b/r5/lp-t/nwtsty/54/3`},{texto:`Tito 1:5-9`,assunto:`As qualificações dos anciãos`,link:`https://wol.jw.org/pt/wol/b/r5/lp-t/nwtsty/56/1`},{texto:`1 Timóteo 3:8-13`,assunto:`As qualificações dos servos ministeriais`,link:`https://wol.jw.org/pt/wol/b/r5/lp-t/nwtsty/54/3`},{texto:`Organizados para Fazer a Vontade de Jeová, capítulo 5`,assunto:`Superintendentes para pastorear o rebanho`,link:`https://wol.jw.org/pt/wol/d/r5/lp-t/1102014935`},{texto:`Organizados para Fazer a Vontade de Jeová, capítulo 6`,assunto:`Servos ministeriais prestam serviços valiosos`,link:`https://wol.jw.org/pt/wol/d/r5/lp-t/1102014936`},{texto:`A Sentinela, novembro de 2024, “Você está se esforçando para ser servo ministerial?”`,assunto:`A recomendação de servos ministeriais`,link:`https://wol.jw.org/pt/wol/d/r5/lp-t/2024642`}],E={"pt-BR":He,en:[{texto:`1 Timothy 3:1-7`,assunto:`The qualifications of elders`,link:`https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/54/3`},{texto:`Titus 1:5-9`,assunto:`The qualifications of elders`,link:`https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/56/1`},{texto:`1 Timothy 3:8-13`,assunto:`The qualifications of ministerial servants`,link:`https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/54/3`},{texto:`Organized to Do Jehovah’s Will, chapter 5`,assunto:`Overseers to Shepherd the Flock`,link:`https://wol.jw.org/en/wol/d/r1/lp-e/1102014935`},{texto:`Organized to Do Jehovah’s Will, chapter 6`,assunto:`Ministerial Servants Render Valuable Service`,link:`https://wol.jw.org/en/wol/d/r1/lp-e/1102014936`},{texto:`The Watchtower, November 2024, “Brothers—Are You Reaching Out to Be a Ministerial Servant?”`,assunto:`Recommending ministerial servants`,link:`https://wol.jw.org/en/wol/d/r1/lp-e/2024642`}],"es-ES":[{texto:`1 Timoteo 3:1-7`,assunto:`Los requisitos de los ancianos`,link:`https://wol.jw.org/es/wol/b/r4/lp-s/nwtsty/54/3`},{texto:`Tito 1:5-9`,assunto:`Los requisitos de los ancianos`,link:`https://wol.jw.org/es/wol/b/r4/lp-s/nwtsty/56/1`},{texto:`1 Timoteo 3:8-13`,assunto:`Los requisitos de los siervos ministeriales`,link:`https://wol.jw.org/es/wol/b/r4/lp-s/nwtsty/54/3`},{texto:`Organizados para hacer la voluntad de Jehová, capítulo 5`,assunto:`Superintendentes que pastorean el rebaño`,link:`https://wol.jw.org/es/wol/d/r4/lp-s/1102014935`},{texto:`Organizados para hacer la voluntad de Jehová, capítulo 6`,assunto:`Los siervos ministeriales prestan servicios valiosos`,link:`https://wol.jw.org/es/wol/d/r4/lp-s/1102014936`},{texto:`La Atalaya, noviembre de 2024, “¿Tiene la meta de ser siervo ministerial?”`,assunto:`La recomendación de siervos ministeriales`,link:`https://wol.jw.org/es/wol/d/r4/lp-s/2024642`}],pl:[{texto:`1 Tymoteusza 3:1-7`,assunto:`Wymagania stawiane starszym`,link:`https://wol.jw.org/pl/wol/b/r12/lp-p/nwtsty/54/3`},{texto:`Tytusa 1:5-9`,assunto:`Wymagania stawiane starszym`,link:`https://wol.jw.org/pl/wol/b/r12/lp-p/nwtsty/56/1`},{texto:`1 Tymoteusza 3:8-13`,assunto:`Wymagania stawiane sługom pomocniczym`,link:`https://wol.jw.org/pl/wol/b/r12/lp-p/nwtsty/54/3`},{texto:`Zorganizowani do spełniania woli Jehowy, rozdział 5`,assunto:`Nadzorcy, którzy ‛pasą trzodę Bożą’`,link:`https://wol.jw.org/pl/wol/d/r12/lp-p/1102014935`},{texto:`Zorganizowani do spełniania woli Jehowy, rozdział 6`,assunto:`Słudzy pomocniczy wykonują cenną pracę`,link:`https://wol.jw.org/pl/wol/d/r12/lp-p/1102014936`},{texto:`Strażnica, listopad 2024, „Bracia — czy ubiegacie się o to, żeby zostać sługami pomocniczymi?”`,assunto:`Polecanie sług pomocniczych`,link:`https://wol.jw.org/pl/wol/d/r12/lp-p/2024642`}],uk:[{texto:`1 Тимофія 3:1—7`,assunto:`Вимоги до старійшин`,link:`https://wol.jw.org/uk/wol/b/r15/lp-k/nwtsty/54/3`},{texto:`Тита 1:5—9`,assunto:`Вимоги до старійшин`,link:`https://wol.jw.org/uk/wol/b/r15/lp-k/nwtsty/56/1`},{texto:`1 Тимофія 3:8—13`,assunto:`Вимоги до служителів збору`,link:`https://wol.jw.org/uk/wol/b/r15/lp-k/nwtsty/54/3`},{texto:`«Організовані, щоб виконувати волю Єгови», розділ 5`,assunto:`Наглядачі, призначені пасти отару`,link:`https://wol.jw.org/uk/wol/d/r15/lp-k/1102014935`},{texto:`«Організовані, щоб виконувати волю Єгови», розділ 6`,assunto:`Важлива праця служителів збору`,link:`https://wol.jw.org/uk/wol/d/r15/lp-k/1102014936`},{texto:`«Вартова башта», листопад 2024 року, «Брати, чи ви прагнете бути служителями збору?»`,assunto:`Рекомендування служителів збору`,link:`https://wol.jw.org/uk/wol/d/r15/lp-k/2024642`}],ja:[{texto:`テモテ第一 3章1-7節`,assunto:`長老の資格`,link:`https://wol.jw.org/ja/wol/b/r7/lp-j/nwtsty/54/3`},{texto:`テトス 1章5-9節`,assunto:`長老の資格`,link:`https://wol.jw.org/ja/wol/b/r7/lp-j/nwtsty/56/1`},{texto:`テモテ第一 3章8-13節`,assunto:`援助奉仕者の資格`,link:`https://wol.jw.org/ja/wol/b/r7/lp-j/nwtsty/54/3`},{texto:`「エホバの望まれることを行う組織」第5章`,assunto:`群れを世話する監督たち`,link:`https://wol.jw.org/ja/wol/d/r7/lp-j/1102014935`},{texto:`「エホバの望まれることを行う組織」第6章`,assunto:`大事な働きをする援助奉仕者たち`,link:`https://wol.jw.org/ja/wol/d/r7/lp-j/1102014936`},{texto:`「ものみの塔」2024年11月号 “援助奉仕者として奉仕することを目標にできますか”`,assunto:`援助奉仕者の推薦`,link:`https://wol.jw.org/ja/wol/d/r7/lp-j/2024642`}],"zh-CN":[{texto:`提摩太前书3:1-7`,assunto:`长老要符合的资格`,link:`https://wol.jw.org/cmn-Hans/wol/b/r23/lp-chs/nwtsty/54/3`},{texto:`提多书1:5-9`,assunto:`长老要符合的资格`,link:`https://wol.jw.org/cmn-Hans/wol/b/r23/lp-chs/nwtsty/56/1`},{texto:`提摩太前书3:8-13`,assunto:`助理仆人要符合的资格`,link:`https://wol.jw.org/cmn-Hans/wol/b/r23/lp-chs/nwtsty/54/3`},{texto:`《组织起来遵行耶和华的旨意》第5章`,assunto:`监督牧养羊群`,link:`https://wol.jw.org/cmn-Hans/wol/d/r23/lp-chs/1102014935`},{texto:`《组织起来遵行耶和华的旨意》第6章`,assunto:`助理仆人执行重要职务`,link:`https://wol.jw.org/cmn-Hans/wol/d/r23/lp-chs/1102014936`},{texto:`《守望台》2024年11月刊〈弟兄们，你有没有竭力符合资格做助理仆人？〉`,assunto:`推荐助理仆人`,link:`https://wol.jw.org/cmn-Hans/wol/d/r23/lp-chs/2024642`}],ko:[{texto:`디모데 전서 3:1-7`,assunto:`장로의 자격`,link:`https://wol.jw.org/ko/wol/b/r8/lp-ko/nwtsty/54/3`},{texto:`디도서 1:5-9`,assunto:`장로의 자격`,link:`https://wol.jw.org/ko/wol/b/r8/lp-ko/nwtsty/56/1`},{texto:`디모데 전서 3:8-13`,assunto:`봉사의 종의 자격`,link:`https://wol.jw.org/ko/wol/b/r8/lp-ko/nwtsty/54/3`},{texto:`「여호와의 뜻을 행하는 조직」 제5장`,assunto:`양 떼를 돌보는 감독자들`,link:`https://wol.jw.org/ko/wol/d/r8/lp-ko/1102014935`},{texto:`「여호와의 뜻을 행하는 조직」 제6장`,assunto:`가치 있는 봉사를 수행하는 봉사의 종들`,link:`https://wol.jw.org/ko/wol/d/r8/lp-ko/1102014936`},{texto:`「파수대」 2024년 11월호 “형제 여러분, 봉사의 종으로 섬기기 위해 힘써 노력하고 있습니까?”`,assunto:`봉사의 종 추천`,link:`https://wol.jw.org/ko/wol/d/r8/lp-ko/2024642`}],ar:[{texto:`١ تيموثاوس ٣:‏١-‏٧`,assunto:`مؤهِّلات الشيوخ`,link:`https://wol.jw.org/ar/wol/b/r39/lp-a/nwt/54/3`},{texto:`تيطس ١:‏٥-‏٩`,assunto:`مؤهِّلات الشيوخ`,link:`https://wol.jw.org/ar/wol/b/r39/lp-a/nwt/56/1`},{texto:`١ تيموثاوس ٣:‏٨-‏١٣`,assunto:`مؤهِّلات الخدام المساعدين`,link:`https://wol.jw.org/ar/wol/b/r39/lp-a/nwt/54/3`},{texto:`«شعب منظَّم لفعل مشيئة يهوه»، الفصل ٥`,assunto:`نظار معيَّنون ليرعوا الرعية`,link:`https://wol.jw.org/ar/wol/d/r39/lp-a/1102014935`},{texto:`«شعب منظَّم لفعل مشيئة يهوه»، الفصل ٦`,assunto:`دور الخدام المساعدين المهم في الجماعة`,link:`https://wol.jw.org/ar/wol/d/r39/lp-a/1102014936`},{texto:`برج المراقبة، تشرين الثاني (‏نوفمبر)‏ ٢٠٢٤، «أيها الإخوة،‏ هل تسعون لتصيروا خدامًا مساعدين؟‏»`,assunto:`التوصية بخدام مساعدين`,link:`https://wol.jw.org/ar/wol/d/r39/lp-a/2024642`}],ht:[{texto:`1 Timote 3:1-7`,assunto:`Kondisyon ansyen yo dwe ranpli`,link:`https://wol.jw.org/ht/wol/b/r60/lp-cr/nwt/54/3`},{texto:`Tit 1:5-9`,assunto:`Kondisyon ansyen yo dwe ranpli`,link:`https://wol.jw.org/ht/wol/b/r60/lp-cr/nwt/56/1`},{texto:`1 Timote 3:8-13`,assunto:`Kondisyon sèvitè ministeryèl yo dwe ranpli`,link:`https://wol.jw.org/ht/wol/b/r60/lp-cr/nwt/54/3`},{texto:`Nou òganize pou nou fè volonte Jewova, chapit 5`,assunto:`Siveyan ki la pou pran swen twoupo a`,link:`https://wol.jw.org/ht/wol/d/r60/lp-cr/1102014935`},{texto:`Nou òganize pou nou fè volonte Jewova, chapit 6`,assunto:`Sèvitè ministeryèl yo akonpli yon sèvis ki gen anpil valè`,link:`https://wol.jw.org/ht/wol/d/r60/lp-cr/1102014936`},{texto:`Toudegad, novanm 2024, “Frè n yo, èske n ap chèche vin sèvitè ministeryèl?”`,assunto:`Rekòmandasyon sèvitè ministeryèl yo`,link:`https://wol.jw.org/ht/wol/d/r60/lp-cr/2024642`}]};function Ue(e){return E[e]??He}Object.keys(E);function D(e){return c.pautas.titulos[e]}function We(e,t){return D(e===`conjunta`?t===`servos`?`servos`:`anciaos`:e)}function Ge(e,t,n){let r=[[c.pautas.data,a(e.data)],[c.pautas.hora,e.hora]],i=n.congregacao(e.congregacao_id);return i!==``&&r.push([c.pautas.congregacao,i]),r.push([c.pautas.preside,n.pessoa(e.preside_id)]),y(e.tipo)&&t===`anciaos`&&r.push([c.pautas.oracaoInicial,n.pessoa(e.oracao_inicial_id)],[c.pautas.oracaoFinal,n.pessoa(e.oracao_final_id)]),r}function Ke(e){let t=[{chave:`sequencia`,rotulo:c.pautas.colunas.sequencia},{chave:`duracao`,rotulo:c.pautas.colunas.duracao},{chave:`assunto`,rotulo:c.pautas.colunas.assunto},{chave:`referencia`,rotulo:c.pautas.colunas.referencia}];return e===`anciaos`&&t.push({chave:`sugerido`,rotulo:c.pautas.colunas.sugerido}),t.push({chave:`responsavel`,rotulo:c.pautas.colunas.responsavel}),t}function O(e){return e>0?c.pautas.minutos(e):``}function qe(e,t,n,r){let i={sequencia:String(t),duracao:O(e.duracao_min),assunto:e.assunto,referencia:e.referencia,sugerido:r.pessoa(e.sugerido_por_id),responsavel:r.pessoa(e.responsavel_id)};return{celulas:n.map(e=>i[e.chave]),link:e.referencia_link}}function k(e,t,n){let r=pe(e.tipo).map(r=>{let i=_(t,r),a=Ke(r),o=v(i);return{parte:r,titulo:We(e.tipo,r),cabecalho:Ge(e,r,n),colunas:a,linhas:i.map((e,t)=>qe(e,t+1,a,n)),total:o>0?c.pautas.total(O(o)):``}});return{titulo:D(e.tipo),versiculo:c.pautas.versiculo,partes:r,observacao:e.observacao,rotuloDaObservacao:c.pautas.observacao,arquivo:`pauta-${e.tipo}${e.data===``?``:`-${e.data}`}.pdf`}}function Je(e){let t=[];for(let n of e.partes){let r=[n.titulo];n===e.partes[0]&&r.push(e.versiculo),r.push(``);for(let[e,t]of n.cabecalho)t!==``&&r.push(`${e}: ${t}`);r.push(``),n.linhas.length===0&&r.push(c.pautas.semItens);for(let e of n.linhas){let t=t=>{let r=n.colunas.findIndex(e=>e.chave===t);return r<0?``:e.celulas[r]??``},i=t(`duracao`);r.push(`${t(`sequencia`)}. ${t(`assunto`)||c.pautas.semAssunto}${i===``?``:` (${i})`}`);let a=[t(`referencia`),e.link].filter(e=>e!==``);a.length>0&&r.push(`   ${c.pautas.colunas.referencia}: ${a.join(` — `)}`);let o=[[c.pautas.colunas.sugerido,t(`sugerido`)],[c.pautas.colunas.responsavel,t(`responsavel`)]].filter(([,e])=>e!==``).map(([e,t])=>`${e}: ${t}`);o.length>0&&r.push(`   ${o.join(` · `)}`)}n.total!==``&&r.push(``,n.total),t.push(r.join(`
`))}return e.observacao!==``&&t.push(`${e.rotuloDaObservacao}: ${e.observacao}`),t.join(`

`)}var A=[],j=[],M=[],N=[],P=[],Ye=[],Xe=[],Ze=``,F=null,I=``,L=null,R=``;async function z(){let e;[A,j,M,N,P,e,Ye,Xe]=await Promise.all([ye(),ve(),Te(),we(),Ee(),ke(),oe(),ae()]),Ze=e.nome.trim()}var B=new ie(`Pautas`,z);n(`pautas`,()=>{B.esquecer(),F=null,L=null});function V(e){return e===null?``:M.find(t=>t.id===e)?.nome??``}function H(e){return e===null?``:N.find(t=>t.id===e)?.nome??``}var U={pessoa:V,congregacao:H};function Qe(e){return De(e,e=>c.tiposDeDesignacao[e])}function W(e){let t=Number(e.args[0]);return A.find(e=>e.id===t)}function G(e){return j.filter(t=>t.pauta_id===e.id)}function $e(){let e=N.length===1?N[0]?.id??null:null,n=x(M,`coordenador`,e);F=de(e,n?.id??null),I=``,t()}function et(e){F={...e},I=``,t()}function K(e){F!==null&&(F={...F,...e})}function q(){F=null,I=``,t()}function J(e,t){return{itens:t,tipos:Ye,existente:e.id===void 0?void 0:Xe.find(t=>t.pauta_id===e.id)}}function tt(e,t){return[...G(e).filter(e=>!t.some(t=>t.id===e.id)),...t]}async function nt(e){let n=e.id===void 0?[]:ce(G(e),e.tipo),i;try{i=await Ce(e,n,J(e,tt(e,n)))}catch(e){console.error(`Pautas: a gravação do cabeçalho falhou.`,e),u(c.pautas.naoSalva,`danger`);return}let a=e.id===void 0;F=null,u(c.pautas.salva),await z(),a&&r(`pautas/${i}`),t()}async function rt(e){if(await g({titulo:c.pautas.excluirTitulo,texto:c.pautas.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{await xe(e.id)}catch(e){console.error(`Pautas: a exclusão falhou.`,e),u(c.pautas.naoExcluida,`danger`);return}u(c.pautas.excluida),await z(),r(`pautas`)}}function Y(e){return e.target.value}function X(e){let t=Number(Y(e));return Number.isInteger(t)&&t>0?t:null}function Z(t){let n=b(M,t.papeis,t.congregacao,t.atual);return e`
    <kk-select
      name=${t.nome}
      label=${t.rotulo}
      help-text=${n.length===0?t.vazio:``}
      .value=${String(t.atual??0)}
      @kk-change=${e=>t.aoEscolher(X(e))}
    >
      <kk-option value="0">${c.pautas.ninguem}</kk-option>
      ${n.map(t=>e`
          <kk-option value=${String(t.id??0)}>
            ${t.ativo===0?c.pautas.inativo(t.nome):t.nome}
          </kk-option>
        `)}
    </kk-select>
  `}function it(n){let r=(e,t,r)=>Z({nome:e,rotulo:t,papeis:[`anciao`],congregacao:n.congregacao_id,atual:n[r],vazio:c.pautas.semAnciaos,aoEscolher:e=>K({[r]:e})});return e`
    <kk-dialog
      open
      class="pauta-form"
      label=${n.id===void 0?c.pautas.nova:c.pautas.editarCabecalho}
      @kk-request-close=${d}
      @kk-initial-focus=${f}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&q()}}
    >
      <div class="formulario">
        <kk-select
          name="tipo"
          label=${c.pautas.tipo}
          help-text=${n.id===void 0?``:c.pautas.tipoAjuda}
          .value=${n.tipo}
          @kk-change=${e=>{let n=Y(e);fe(n)&&K({tipo:n}),t()}}
        >
          ${ge.map(t=>e`<kk-option value=${t}>${c.pautas.tipos[t]}</kk-option>`)}
        </kk-select>

        ${N.length===0?i:e`
              <kk-select
                name="congregacao"
                label=${c.pautas.congregacao}
                .value=${String(n.congregacao_id??0)}
                @kk-change=${e=>{let n=X(e);K({congregacao_id:n,...F?.id===void 0?{preside_id:x(M,`coordenador`,n)?.id??null}:{}}),t()}}
              >
                <kk-option value="0">${c.pautas.congregacaoNenhuma}</kk-option>
                ${N.map(t=>e`<kk-option value=${String(t.id)}>${t.nome}</kk-option>`)}
              </kk-select>
            `}

        <div class="formulario__par">
          <kk-date-picker
            .valueFormatter=${o}
            name="data"
            label=${c.pautas.data}
            clearable
            .value=${n.data}
            @kk-change=${e=>K({data:Y(e)})}
          ></kk-date-picker>
          <kk-input
            name="hora"
            type="time"
            label=${c.pautas.hora}
            .value=${n.hora}
            @kk-change=${e=>K({hora:Y(e)})}
          ></kk-input>
        </div>

        ${r(`preside`,c.pautas.preside,`preside_id`)}
        ${y(n.tipo)?e`
              <div class="formulario__par">
                ${r(`oracao-inicial`,c.pautas.oracaoInicial,`oracao_inicial_id`)}
                ${r(`oracao-final`,c.pautas.oracaoFinal,`oracao_final_id`)}
              </div>
            `:i}

        <kk-textarea
          name="observacao"
          label=${c.pautas.observacao}
          rows="2"
          .value=${n.observacao}
          @kk-input=${e=>K({observacao:Y(e)})}
        ></kk-textarea>

        ${I===``?i:e`<p class="erro" role="alert">${I}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        <kk-button @click=${q}>${c.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{F!==null&&nt(F)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function at(e){L={item:{...e},duracao:e.duracao_min>0?String(e.duracao_min):``,link:e.referencia_link},R=``,t()}function ot(e,t){at(he(e.id,t,se(G(e),t)))}function Q(e,t={}){L!==null&&(L={...L,...t,item:{...L.item,...e}})}function $(){L=null,R=``,t()}async function st(e){let n=me(e.duracao),r=_e(e.link),i=e.item.assunto.trim()===``?c.pautas.item.semAssunto:n===null?c.pautas.item.duracaoInvalida:r===null?c.pautas.item.linkInvalido:``;if(i!==``||n===null||r===null)R=i,t();else{try{let t={...e.item,duracao_min:n,referencia_link:r},i=A.find(e=>e.id===t.pauta_id);await Se([t],i,i===void 0?void 0:J(i,tt(i,[t])))}catch(e){console.error(`Pautas: a gravação do item falhou.`,e),u(c.pautas.item.naoSalvo,`danger`);return}L=null,u(c.pautas.item.salvo),await z(),t()}}async function ct(e){if(await g({titulo:c.pautas.item.excluirTitulo,texto:c.pautas.item.excluirTexto,rotuloConfirmar:c.acoes.excluir,variante:`danger`})){try{let t=A.find(t=>G(t).some(t=>t.id===e));if(t===void 0)throw Error(`o item ${e} não é de nenhuma pauta`);await be(e,t,J(t,G(t).filter(t=>t.id!==e)))}catch(e){console.error(`Pautas: a exclusão do item falhou.`,e),u(c.pautas.item.naoExcluido,`danger`);return}L=null,u(c.pautas.item.excluido),await z(),t()}}async function lt(e,n,r){let i=le(G(e),n,r);if(i.length!==0){try{await Se(i)}catch(e){console.error(`Pautas: a reordenação falhou.`,e),u(c.pautas.item.naoMovido,`danger`);return}await z(),t()}}function ut(){return h(c.pautas.item.sugeridas,null,t=>e`
      <p class="pauta-sugeridas__ajuda">${c.pautas.item.sugeridasTexto}</p>
      <div class="lista">
        ${Ue(s()).map(n=>e`
            <button class="linha" @click=${()=>t(n)}>
              <kk-icon class="linha__icone" name="book-2"></kk-icon>
              <span class="linha__texto">
                <span class="linha__rotulo">${n.texto}</span>
                <span class="linha__sub">${n.assunto}</span>
              </span>
            </button>
          `)}
      </div>
    `,{classe:`pauta-sugeridas`})}function dt(n,r){let a=n.item,o=a.parte===`servos`,s=P.filter(e=>e.id===a.designacao_id||e.congregacao_id===null||e.congregacao_id===r.congregacao_id),l=o&&s.length>0;return e`
    <kk-dialog
      open
      class="item-form"
      label=${a.id===void 0?c.pautas.item.novo:c.pautas.item.editar}
      @kk-request-close=${d}
      @kk-initial-focus=${f}
      @kk-after-hide=${e=>{e.target===e.currentTarget&&$()}}
    >
      <div class="formulario">
        ${l?e`
              <kk-select
                name="designacao"
                label=${c.pautas.item.designacao}
                help-text=${c.pautas.item.designacaoAjuda}
                .value=${String(a.designacao_id??0)}
                @kk-change=${e=>{let n=X(e),r=P.find(e=>e.id===n);Q(r===void 0?{designacao_id:null}:{designacao_id:n,assunto:Qe(r),responsavel_id:r.pessoa_id}),t()}}
              >
                <kk-option value="0">${c.pautas.item.designacaoNenhuma}</kk-option>
                ${s.map(t=>e`<kk-option value=${String(t.id)}>${Qe(t)}</kk-option>`)}
              </kk-select>
            `:i}

        <kk-input
          name="assunto"
          label=${c.pautas.item.assunto}
          placeholder=${c.pautas.item.assuntoPlaceholder}
          required
          .value=${a.assunto}
          @kk-input=${e=>Q({assunto:Y(e)})}
        ></kk-input>

        <kk-input
          name="duracao"
          type="number"
          inputmode="numeric"
          min="0"
          max="600"
          label=${c.pautas.item.duracao}
          .value=${n.duracao}
          @kk-input=${e=>Q({},{duracao:Y(e)})}
        ></kk-input>

        <div class="pauta-referencia">
          <kk-input
            class="pauta-referencia__campo"
            name="referencia"
            label=${c.pautas.item.referencia}
            placeholder=${c.pautas.item.referenciaPlaceholder}
            .value=${a.referencia}
            @kk-input=${e=>Q({referencia:Y(e)})}
          ></kk-input>
          <kk-button
            class="pauta-referencia__sugeridas"
            @click=${async()=>{let e=await ut();e!==null&&(Q({referencia:e.texto},{link:e.link}),t())}}
          >
            <kk-icon slot="prefix" name="book-2"></kk-icon>${c.pautas.item.sugeridas}
          </kk-button>
        </div>

        <kk-input
          name="link"
          type="url"
          inputmode="url"
          label=${c.pautas.item.link}
          help-text=${c.pautas.item.linkAjuda}
          .value=${n.link}
          @kk-input=${e=>Q({},{link:Y(e)})}
        ></kk-input>

        ${o?i:Z({nome:`sugerido`,rotulo:c.pautas.item.sugerido,papeis:[`anciao`],congregacao:r.congregacao_id,atual:a.sugerido_por_id,vazio:c.pautas.semAnciaos,aoEscolher:e=>Q({sugerido_por_id:e})})}
        ${Z({nome:`responsavel`,rotulo:c.pautas.item.responsavel,papeis:o?[`anciao`,`servo_ministerial`]:[`anciao`],congregacao:r.congregacao_id,atual:a.responsavel_id,vazio:o?c.pautas.semAnciaosNemServos:c.pautas.semAnciaos,aoEscolher:e=>Q({responsavel_id:e})})}

        ${R===``?i:e`<p class="erro" role="alert">${R}</p>`}
      </div>

      <div slot="footer" class="dialogo__acoes">
        ${a.id===void 0?i:e`
              <kk-button
                class="dialogo__excluir"
                variant="danger"
                outline
                @click=${()=>{L?.item.id!==void 0&&ct(L.item.id)}}
              >
                <kk-icon slot="prefix" name="trash"></kk-icon>${c.acoes.excluir}
              </kk-button>
            `}
        <kk-button @click=${$}>${c.acoes.cancelar}</kk-button>
        <kk-button
          variant="primary"
          @click=${()=>{L!==null&&st(L)}}
        >
          <kk-icon slot="prefix" name="check"></kk-icon>${c.acoes.salvar}
        </kk-button>
      </div>
    </kk-dialog>
  `}function ft(e){let t=x(M,`secretario`,e.congregacao_id),n=b(M,[`anciao`,`servo_ministerial`],e.congregacao_id).filter(e=>e.telefone!==``||e.email!==``);return t!==null&&n.includes(t)?[t,...n.filter(e=>e!==t)]:n}async function pt(e){let t=k(e,G(e),U),n=c.pautas.enviar.rodape(l(Date.now()),Ze),r=JSON.stringify([t,n]),i=ne(r)??await te(r);if(i===void 0)return;let a=Ve(t,n,i);try{let e=await Oe(a,t.arquivo,`application/pdf`,t.titulo);e===`compartilhado`&&u(c.pautas.enviar.compartilhado),e===`baixado`&&u(c.pautas.enviar.baixado)}catch(e){console.error(`Pautas: a entrega do PDF falhou.`,e),u(c.pautas.enviar.naoCompartilhado,`danger`)}}function mt(t){let n=k(t,G(t),U),r=Je(n),o=[n.titulo,a(t.data)].filter(e=>e!==``).join(` — `),s=ft(t),l=s[0];h(c.pautas.enviar.titulo,null,(n,a,u)=>{let d=ee(l?.telefone??``),f=l?.email??``;return e`
        <div class="formulario pauta-envio">
          <kk-button variant="primary" @click=${()=>void pt(t)}>
            <kk-icon slot="prefix" name="file-type-pdf"></kk-icon>${c.pautas.enviar.pdf}
          </kk-button>
          <p class="pauta-envio__ajuda">${c.pautas.enviar.pdfAjuda}</p>

          <kk-select
            name="destinatario"
            label=${c.pautas.enviar.destinatario}
            help-text=${c.pautas.enviar.destinatarioAjuda}
            ?disabled=${s.length===0}
            placeholder=${s.length===0?c.pautas.enviar.semDestinatarios:``}
            .value=${String(l?.id??``)}
            @kk-change=${e=>{let t=Number(Y(e));l=s.find(e=>e.id===t),u()}}
          >
            ${s.map(t=>e`<kk-option value=${String(t.id??0)}>${t.nome}</kk-option>`)}
          </kk-select>

          <div class="pauta-envio__texto">
            <kk-button
              name="whatsapp"
              href=${d===``?i:`https://wa.me/${d}?text=${encodeURIComponent(r)}`}
              target="_blank"
              ?disabled=${d===``}
            >
              <kk-icon slot="prefix" name="brand-whatsapp"></kk-icon>${c.pautas.enviar.whatsapp}
            </kk-button>
            <kk-button
              name="email"
              href=${f===``?i:`mailto:${f}?subject=${encodeURIComponent(o)}&body=${encodeURIComponent(r)}`}
              ?disabled=${f===``}
            >
              <kk-icon slot="prefix" name="mail"></kk-icon>${c.pautas.enviar.email}
            </kk-button>
          </div>
          <p class="pauta-envio__ajuda">
            ${l!==void 0&&d===``?c.pautas.enviar.semTelefone:l!==void 0&&f===``?c.pautas.enviar.semEmail:c.pautas.enviar.textoAjuda}
          </p>
        </div>
      `},{classe:`pauta-envio-dialogo`})}function ht(e){let t=G(e),n=v(t);return[c.pautas.tipos[e.tipo],N.length>1?H(e.congregacao_id):``,c.pautas.itens(t.length),n>0?O(n):``].filter(e=>e!==``).join(` · `)}function gt(e){return e.data===``?c.pautas.semData:[a(e.data),e.hora].filter(e=>e!==``).join(` · `)}function _t(){return A.length===0?e`
      <div class="vazio">
        <kk-icon class="vazio__icone" name="list-check"></kk-icon>
        <strong>${c.pautas.vazio}</strong>
        <p>${c.pautas.vazioTexto}</p>
        <kk-button variant="primary" @click=${$e}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${c.pautas.nova}
        </kk-button>
      </div>
    `:e`
    <p class="contagem" aria-live="polite">${c.pautas.contagem(A.length)}</p>
    <div class="lista">
      ${ue(A).map(t=>e`
          <button
            class="linha"
            data-pauta=${t.id??0}
            @click=${()=>r(`pautas/${t.id}`)}
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
  `}function vt(t){let n=[[c.pautas.data,a(t.data)||c.pautas.semData],[c.pautas.hora,t.hora],[c.pautas.congregacao,H(t.congregacao_id)],[c.pautas.preside,V(t.preside_id)]];return y(t.tipo)&&n.push([c.pautas.oracaoInicial,V(t.oracao_inicial_id)],[c.pautas.oracaoFinal,V(t.oracao_final_id)]),e`
    <section class="pauta-cabecalho">
      <p class="pauta-cabecalho__versiculo">${c.pautas.versiculo}</p>
      <dl class="pauta-dados">
        ${n.filter(([,e])=>e!==``).map(([t,n])=>e`
              <div class="pauta-dados__par">
                <dt>${t}</dt>
                <dd>${n}</dd>
              </div>
            `)}
      </dl>
      ${t.observacao===``?i:e`<p class="pauta-cabecalho__observacao">${t.observacao}</p>`}
      <kk-button class="pauta-cabecalho__editar" size="small" @click=${()=>et(t)}>
        <kk-icon slot="prefix" name="pencil"></kk-icon>${c.pautas.editarCabecalho}
      </kk-button>
    </section>
  `}function yt(t,n,r,i){let a=n.id??0,o=[O(n.duracao_min),n.referencia,V(n.responsavel_id)].filter(e=>e!==``);return e`
    <div class="pauta-item" data-item=${a}>
      <span class="pauta-item__numero">${r}</span>
      <button class="pauta-item__corpo" @click=${()=>at(n)}>
        <span class="pauta-item__assunto">${n.assunto||c.pautas.semAssunto}</span>
        <span class="pauta-item__sub">${o.join(` · `)}</span>
      </button>
      <kk-icon-button
        name="arrow-up"
        label=${c.pautas.item.subir}
        ?disabled=${r===1}
        @click=${()=>void lt(t,a,-1)}
      ></kk-icon-button>
      <kk-icon-button
        name="arrow-down"
        label=${c.pautas.item.descer}
        ?disabled=${r===i}
        @click=${()=>void lt(t,a,1)}
      ></kk-icon-button>
    </div>
  `}function bt(t,n){let r=_(G(t),n),a=v(r);return e`
    <section class="pauta-parte" data-parte=${n}>
      <h3 class="secao">${c.pautas.partes[n]}</h3>
      ${r.length===0?e`<p class="pauta-parte__vazia">${c.pautas.semItens}</p>`:e`
            <div class="lista">
              ${r.map((e,n)=>yt(t,e,n+1,r.length))}
            </div>
          `}
      <div class="pauta-parte__pe">
        <kk-button size="small" @click=${()=>ot(t,n)}>
          <kk-icon slot="prefix" name="plus"></kk-icon>${c.pautas.item.adicionar}
        </kk-button>
        ${a>0?e`<strong class="pauta-parte__total">${c.pautas.total(O(a))}</strong>`:i}
      </div>
    </section>
  `}function xt(t){return e`
    ${vt(t)}
    ${pe(t.tipo).map(e=>bt(t,e))}
    <div class="pauta-acoes">
      <kk-button
        class="dialogo__excluir"
        variant="danger"
        outline
        @click=${()=>void rt(t)}
      >
        <kk-icon slot="prefix" name="trash"></kk-icon>${c.pautas.excluir}
      </kk-button>
      <kk-button variant="primary" @click=${()=>mt(t)}>
        <kk-icon slot="prefix" name="share"></kk-icon>${c.pautas.enviar.botao}
      </kk-button>
    </div>
    ${L===null?i:dt(L,t)}
  `}function St(){return e`
    <div class="aviso">
      <kk-icon class="aviso__icone" name="alert-triangle"></kk-icon>
      <h2>${c.pautas.naoEncontrada}</h2>
      <p>${c.pautas.naoEncontradaTexto}</p>
      <kk-button @click=${()=>r(`pautas`)}>${c.pautas.voltarALista}</kk-button>
    </div>
  `}function Ct(e){return e?.id===void 0?void 0:e}var wt={titulo(e){if(e.args.length===0||!B.terminou)return;let t=W(e);return t===void 0?void 0:D(t.tipo)},voltarPara(e){return e.args.length===0?`home`:`pautas`},aoVoltar(){return L===null?F!==null&&(q(),!0):($(),!0)},acoes(t){if(B.terminou){if(t.args.length>0){let n=W(t);return n===void 0?void 0:e`
          <kk-icon-button
            name="share"
            label=${c.pautas.enviar.botao}
            @click=${()=>mt(n)}
          ></kk-icon-button>
        `}return e`<kk-icon-button name="plus" label=${c.pautas.nova} @click=${$e}></kk-icon-button>`}},conteudo(t){let n=B.espera();if(n!==null)return n;let r=F===null?i:it(F);if(t.args.length===0)return e`${_t()} ${r}`;let a=Ct(W(t));return a===void 0?St():e`${xt(a)} ${r}`}};export{wt as telaPautas};