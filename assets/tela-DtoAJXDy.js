import{a as e,i as t,o as n,r,t as i}from"./backup-evYdF2gC.js";import{i as a,t as o}from"./lit-CL39YOSA.js";import{m as s,n as c,o as l}from"./idioma-Dwpp7Zfu.js";import{t as u}from"./texto-CuPUCLMw.js";import{c as d,f,i as p}from"./erro-FHfTMgeP.js";import{t as m}from"./notificar-BeOZKYlx.js";import{D as h,E as g,L as _,O as v,R as y,T as b,_ as x,g as S,v as C,z as ee}from"./index-BTSbEGH1.js";import{t as te}from"./carga-D_DL_FuH.js";import{d as ne,n as re}from"./regras-4jjqjfyv.js";import{t as ie}from"./dados-DpvHxc9k.js";import{c as ae,g as oe,p as se,t as ce}from"./dados-B8yFq1N-.js";import{_ as le,c as ue,v as de}from"./regras-D9ek7SGP.js";import{f as fe,o as pe,t as me}from"./dados-B9XICcH8.js";import{n as he,t as ge}from"./dados-DdHySe-M.js";import{_ as _e,n as ve,v as ye,y as be}from"./dados--CoVPZdv.js";import{i as xe,m as Se,p as Ce,v as we,y as Te}from"./regras-A0vqlhpU.js";import{i as Ee,n as De,r as Oe}from"./dados-CcF8M2Hp.js";import{b as w,n as T,u as ke,x as Ae}from"./dados-CW3qYJTz.js";var E=()=>({congregacoes:0,pessoas:0,grupos:0,designacoes:0,oradores:0,pontos:0,turnos:0,territorios:0});function D(e,t){let n=e[t];return Array.isArray(n)?n.filter(e=>typeof e==`object`&&!!e):[]}var O=(e,t)=>u(e.trim())===u(t.trim()),k=(e,t)=>`${e}:${-t}`,je={congregacao_id:`congregacoes`,grupo_id:`grupos`,ponto_id:`testemunho_pontos`,turno_id:`testemunho_turnos`};function Me(e,t){let n=[],r=E(),i=E(),a=0,o=-1,s=new Map,c=new Map,l=new Map,u=new Map,d=new Map,f=(e,t,n,r)=>{let i={},a={...t};delete a.id;for(let e of r){let t=a[e];typeof t==`number`&&t<0&&(i[e]=k(je[e]??`pessoas`,t),a[e]=null)}return{store:e,registro:a,chave:k(e,n),...Object.keys(i).length>0?{referencias:i}:{}}},p=(e,t)=>t===null?null:e.get(t)??null,m=[...t.congregacoes];for(let t of D(e,`congregacoes`)){let e=re(t);if(e.id===void 0)continue;let a=m.find(t=>e.numero!==null&&t.numero!==null?e.numero===t.numero:O(e.nome,t.nome));if(a?.id!==void 0){s.set(e.id,a.id),a.id>0&&(i.congregacoes+=1);continue}let c=o--;s.set(e.id,c),m.push({...e,id:c}),n.push(f(`congregacoes`,{...ne(e)},c,[])),r.congregacoes+=1}let h=[...t.pessoas];for(let t of D(e,`pessoas`)){let e=de(t);if(e.id===void 0)continue;let l=p(s,e.congregacao_id),u=h.find(t=>(t.congregacao_id??null)===l&&O(t.nome,e.nome));if(u?.id!==void 0){c.set(e.id,u.id),u.id>0&&(i.pessoas+=1);continue}let d=o--,m=le({...e,id:d,congregacao_id:l}),g=ue(m,h).map(({cargo:e})=>e);a+=g.length;let _={...m,cargos:m.cargos.filter(e=>!g.includes(e))};c.set(e.id,d),h.push(_),n.push(f(`pessoas`,{..._},d,[`congregacao_id`])),r.pessoas+=1}let g=[...t.grupos];for(let t of D(e,`grupos`)){let e=ae(t);if(e.id===void 0)continue;let a=p(s,e.congregacao_id),u=g.find(t=>(t.congregacao_id??null)===a&&O(t.nome,e.nome));if(u?.id!==void 0){l.set(e.id,u.id),u.id>0&&(i.grupos+=1);continue}let d=o--,m=oe({...e,congregacao_id:a,superintendente_id:p(c,e.superintendente_id),ajudante_id:p(c,e.ajudante_id)});l.set(e.id,d),g.push({...m,id:d}),n.push(f(`grupos`,{...m},d,[`congregacao_id`,`superintendente_id`,`ajudante_id`])),r.grupos+=1}let _=new Set(t.membros.map(e=>e.pessoa_id));for(let t of D(e,`grupos_membros`)){let e=se(t);if(e===null)continue;let r=p(c,e.pessoa_id),i=p(l,e.grupo_id);r===null||i===null||_.has(r)||(_.add(r),n.push(f(`grupos_membros`,{grupo_id:i,pessoa_id:r},o--,[`grupo_id`,`pessoa_id`])))}let v=[...t.designacoes];for(let t of D(e,`designacoes`)){let e=pe(t),a=p(s,e.congregacao_id),l=v.find(t=>t.tipo===e.tipo&&(t.congregacao_id??null)===a&&O(t.descricao,e.descricao));if(l!==void 0){(l.id??0)>0&&(i.designacoes+=1);continue}let u=o--,d=fe({...e,congregacao_id:a,pessoa_id:p(c,e.pessoa_id),ajudante_id:p(c,e.ajudante_id)});v.push({...d,id:u}),n.push(f(`designacoes`,{...d},u,[`congregacao_id`,`pessoa_id`,`ajudante_id`])),r.designacoes+=1}let y=[...t.oradores];for(let t of D(e,`oradores`)){let e=ye(t);if(e.nome.trim()===``)continue;let a=y.find(t=>_e(t,e));if(a!==void 0){(a.id??0)>0&&(i.oradores+=1);continue}let s=o--,c=be(e);y.push({...c,id:s}),n.push(f(`oradores`,{...c},s,[])),r.oradores+=1}let b=[...t.pontos];for(let t of D(e,`testemunho_pontos`)){let e=Ce(t),a=p(s,e.congregacao_id);if(e.id===void 0||a===null||e.nome.trim()===``)continue;let c=b.find(t=>t.congregacao_id===a&&O(t.nome,e.nome));if(c?.id!==void 0){u.set(e.id,c.id),c.id>0&&(i.pontos+=1);continue}let l=o--,d=Se({...e,congregacao_id:a});u.set(e.id,l),b.push({...d,id:l}),n.push(f(`testemunho_pontos`,{...d},l,[`congregacao_id`])),r.pontos+=1}let x=[...t.turnos];for(let t of D(e,`testemunho_turnos`)){let e=we(t),a=p(u,e.ponto_id);if(e.id===void 0||a===null||e.inicio===``)continue;let s=x.find(t=>t.ponto_id===a&&t.dia_semana===e.dia_semana&&t.inicio===e.inicio);if(s?.id!==void 0){d.set(e.id,s.id),s.id>0&&(i.turnos+=1);continue}let c=o--,l=Te({...e,ponto_id:a});d.set(e.id,c),x.push({...l,id:c}),n.push(f(`testemunho_turnos`,{...l},c,[`ponto_id`])),r.turnos+=1}let S=new Set(t.disponiveis.map(e=>`${e.turno_id}:${e.pessoa_id}`));for(let t of D(e,`testemunho_disponiveis`)){let e=xe(t);if(e===null)continue;let r=p(d,e.turno_id),i=p(c,e.pessoa_id);r===null||i===null||S.has(`${r}:${i}`)||(S.add(`${r}:${i}`),n.push(f(`testemunho_disponiveis`,{turno_id:r,pessoa_id:i},o--,[`turno_id`,`pessoa_id`])))}let C=[...t.territorios];for(let t of D(e,`territorios`)){let e=w(t),a=p(s,e.congregacao_id);if(a===null||e.numero.trim()===``)continue;let c=C.find(t=>t.congregacao_id===a&&ke(t.numero,e.numero));if(c!==void 0){(c.id??0)>0&&(i.territorios+=1);continue}let l=o--,u=Ae({...e,congregacao_id:a});C.push({...u,id:l}),n.push(f(`territorios`,{...u},l,[`congregacao_id`])),r.territorios+=1}return{itens:n,novos:r,juntados:i,cargosDeixados:a}}var A={projetos:{bioma:{versao:`1.0.0`,build:`2026-10-09T00:32:34.649Z`},admin:{versao:`1.0.188`,build:`2026-10-09T00:32:34.649Z`},note:{versao:`1.1.294`,build:`2026-10-08T20:15:12.289Z`},ui:{versao:`1.0.144`,build:`2026-10-08T20:14:28.625Z`},dev:{versao:`1.1.146`,build:`2026-10-08T20:54:08.577Z`},flow:{versao:`0.0.128`,build:`2026-10-08T20:18:16.285Z`},org:{versao:`1.1.28`,build:`2026-10-08T20:55:32.345Z`},sql:{versao:`3.53.4`,build:`2026-10-06T12:33:35.968Z`}},componentesUi:92,pacotes:[{nome:`@kobi/admin`,versao:`1.0.188`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.146`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.128`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`1.1.294`,caminho:`apps/note`},{nome:`@kobi/org`,versao:`1.1.28`,caminho:`apps/org`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/idiomas`,versao:`0.1.0`,caminho:`packages/idiomas`},{nome:`@kobi/kit`,versao:`1.0.144`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:645,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1337,not_personagens:50,not_poesias:273,not_principios:112,not_receitas:4},codigo:{admin:{arquivos:52,linhas:14885,testes:9},note:{arquivos:250,linhas:93504,testes:32},org:{arquivos:124,linhas:50395,testes:31},flow:{arquivos:143,linhas:61047,testes:46},dev:{arquivos:49,linhas:13756,testes:21},ui:{arquivos:387,linhas:49247,testes:105},bioma:{arquivos:137,linhas:47678,testes:66}},atividade:{admin:[0,0,0,0,0,0,2,14,2,14,32,25],note:[0,0,0,0,0,0,3,18,15,14,48,45],org:[0,0,0,0,0,0,0,0,0,0,0,67],flow:[0,0,0,0,0,0,1,11,2,20,20,20],dev:[0,0,0,0,0,0,1,13,3,5,21,20],ui:[0,0,0,0,0,0,1,4,17,12,20,35],bioma:[0,0,0,0,0,0,3,28,8,18,40,67]}}.projetos.org?.versao??``,j=null,M=null,N=!1,P=!1,F=!1,I=``,L=!1;function R(){L||(L=!0,addEventListener(`hashchange`,()=>{location.hash.replace(/^#\/?/,``)===`sobre/backup`&&(j=null,M=null,I=``,z.esquecer(),z.garantir())}))}var z=new te(`Backup`,async()=>{j=await r(A)});async function Ne(){N=!0,d();try{let e=await t(A);I=c.backup.baixado(e.arquivo)}catch(e){console.error(`Backup: a geração falhou.`,e),m(c.backup.falhou,`danger`)}finally{N=!1,d()}}async function Pe(t){let n=t.files?.[0];if(M=null,I=``,t.value=``,n===void 0)d();else{P=!0,d();try{M=e(await n.text()),M.desconhecidos.length>0&&(I=c.backup.desconhecidos(M.desconhecidos.join(`, `)))}catch(e){console.error(`Backup: o arquivo não foi lido.`,e),m(e instanceof i?c.backup.maisNovo:c.backup.invalido,`danger`)}finally{P=!1,d()}}}function B(){location.reload()}async function Fe(){if(M!==null&&await v({titulo:c.backup.confirmarTitulo,texto:c.backup.confirmarTexto(M.registros,l(M.arquivo.gerado_em)),rotuloConfirmar:c.backup.restaurar,variante:`danger`})){F=!0,d();try{let e=await n(M);m(c.backup.restaurado(e)),B()}catch(e){console.error(`Backup: a restauração falhou.`,e),m(c.backup.restauracaoFalhou,`danger`),F=!1,d()}}}async function Ie(){if(M!==null){F=!0,d();try{let[e,t,n,r,i,a,o,s,l,u]=await Promise.all([ie(),ce(),ge(),he(),me(),ve(),Oe(),Ee(),De(),T()]),f=Me(M.arquivo.stores,{congregacoes:e,pessoas:t,grupos:n,membros:r,designacoes:i,oradores:a,pontos:o,turnos:s,disponiveis:l,territorios:u});if(f.itens.length===0){m(c.backup.nadaAJuntar,`neutral`),F=!1,d();return}if(!await v({titulo:c.backup.juntarTitulo,texto:c.backup.juntarTexto(f.novos,f.juntados,f.cargosDeixados),rotuloConfirmar:c.backup.juntar})){F=!1,d();return}await _(f.itens),m(c.backup.juntado(f.itens.length)),B()}catch(e){console.error(`Backup: a junção dos cadastros falhou.`,e),m(c.backup.restauracaoFalhou,`danger`),F=!1,d()}}}function Le(e){let t=c.backup.stores;return a`
    <section class="backup__cartao">
      <h3 class="secao">${c.backup.resumo}</h3>

      <div class="backup__placar">
        <div class="backup__numero">
          <strong>${e.registros}</strong>
          <span>${c.backup.registros}</span>
        </div>
        <div class="backup__numero">
          <strong>${s(e.bytes)}</strong>
          <span>${c.backup.tamanho}</span>
        </div>
        <div class="backup__numero">
          <strong>${e.chaves}</strong>
          <span>${c.backup.chaves}</span>
        </div>
      </div>

      <div class="backup__detalhe">
        ${e.porStore.filter(e=>e.total>0).map(e=>a`
              <span class="backup__linha">
                <span>${t[e.id]??e.id}</span>
                <strong>${e.total}</strong>
              </span>
            `)}
      </div>

      <kk-button variant="primary" name="baixar" ?loading=${N} @click=${()=>void Ne()}>
        <kk-icon slot="prefix" name="download"></kk-icon>
        ${N?c.backup.gerando:c.backup.baixar}
      </kk-button>
    </section>
  `}function Re(){return a`
    <section class="backup__cartao">
      <h3 class="secao">${c.backup.restaurarTitulo}</h3>
      <p class="backup__explicacao">${c.backup.restaurarExplicacao}</p>

      <label class="escolher-arquivo">
        <kk-icon name="folder-open"></kk-icon>
        ${M===null?c.backup.escolher:c.backup.escolhido}
        <input
          type="file"
          accept="application/json,.json"
          @change=${e=>void Pe(e.target)}
        />
      </label>

      ${M===null?o:a`
            <div class="backup__previa">
              <span>${c.backup.quando}</span>
              <strong>${l(M.arquivo.gerado_em)}</strong>
              <span>${c.backup.registros}</span>
              <strong>${M.registros}</strong>
            </div>
          `}

      <kk-button
        name="juntar"
        variant="primary"
        ?disabled=${M===null}
        ?loading=${P||F}
        @click=${()=>void Ie()}
      >
        <kk-icon slot="prefix" name="users-plus"></kk-icon>
        ${c.backup.juntar}
      </kk-button>
      <p class="backup__explicacao">${c.backup.juntarExplicacao}</p>

      <kk-button
        name="restaurar"
        variant="danger"
        outline
        ?disabled=${M===null}
        ?loading=${P||F}
        @click=${()=>void Fe()}
      >
        <kk-icon slot="prefix" name="upload"></kk-icon>
        ${P?c.backup.lendo:c.backup.restaurar}
      </kk-button>
      <p class="backup__explicacao">${c.backup.restaurarTudoExplicacao}</p>
    </section>
  `}function ze(){R();let e=z.espera();return e===null?j===null?p():a`
    <div class="backup">
      <p class="backup__explicacao">${c.backup.explicacao}</p>
      ${I===``?o:a`<kk-alert variant="success" open>${I}</kk-alert>`}
      ${Le(j)} ${Re()}
    </div>
  `:e}function V(e){return{tipo:`paragrafo`,partes:[{texto:e}]}}function H(...e){return{tipo:`paragrafo`,partes:e.map((e,t)=>({texto:e,forte:t%2==1})).filter(e=>e.texto!==``)}}function U(e){return{tipo:`titulo`,texto:e}}function W(...e){return{tipo:`lista`,itens:e.map(e=>[{texto:e}])}}var G=[{id:`termos`,titulo:`Termos de Uso`,icone:`file-text`,subtitulo:`Última atualização: outubro de 2026`,blocos:[U(`1. Aceitação dos termos`),V(`Ao instalar, acessar ou utilizar o aplicativo Kobi Org, você concorda com estes Termos de Uso. Se não concordar com qualquer parte deles, não utilize o aplicativo.`),U(`2. Descrição do serviço`),V(`O Kobi Org é um aplicativo de uso offline para organizar as reuniões e as designações de uma congregação: o cadastro de congregações, pessoas e grupos de campo, as escalas, os programas das reuniões, a reunião pública, o testemunho público, os territórios, as pautas, as designações, as anotações e o calendário. Ele opera integralmente no aparelho de quem o usa, sem dependência de servidores externos em tempo de uso.`),U(`3. Propriedade dos dados`),V(`Todos os dados inseridos no Kobi Org são armazenados localmente no aparelho. O desenvolvedor não acessa, não coleta, não transmite e não armazena qualquer informação em servidores externos. O tratamento de dados é detalhado na Política de Privacidade.`),U(`4. Dados de outras pessoas`),H(`O aplicativo guarda dados de terceiros que você mesmo cadastra — nomes, telefones, e-mails e papéis de outras pessoas. `,`Cadastre apenas o necessário`,` para organizar as reuniões e as designações, mantenha o aparelho protegido e não compartilhe o arquivo de backup com quem não deve ter esses dados.`),U(`5. Responsabilidade pelos dados`),H(`Como os dados são exclusivamente locais e o aplicativo `,`não oferece backup em nuvem`,`, a preservação das informações é de inteira responsabilidade de quem o usa. A desinstalação do aplicativo, a limpeza do armazenamento pelo navegador ou sistema, ou a perda do aparelho resultará em `,`perda definitiva e irrecuperável`,` de todos os dados que não tenham sido guardados em um arquivo de backup (Sobre → Backup e restauração). O mesmo vale para a senha esquecida: ela é a única chave do banco, e não há como recuperá-la.`),U(`6. Uso permitido`),V(`O aplicativo destina-se ao uso pessoal e não comercial. É vedado:`),W(`Realizar engenharia reversa, descompilar ou desmontar o aplicativo além do permitido em lei;`,`Utilizar o aplicativo para fins ilegais ou que violem direitos de terceiros;`,`Tentar contornar mecanismos de segurança do aplicativo;`,`Redistribuir ou comercializar o aplicativo como se fosse de sua autoria.`),U(`7. Limitação de responsabilidade`),H(`O Kobi Org é fornecido `,`"no estado em que se encontra" (as is)`,`, sem garantias expressas ou implícitas. O desenvolvedor não se responsabiliza por:`),W(`Perda de dados decorrente de falha de hardware, desinstalação ou limpeza de armazenamento;`,`Decisões tomadas com base no conteúdo registrado no aplicativo;`,`Danos indiretos ou consequentes relacionados ao uso do aplicativo.`),U(`8. Propriedade intelectual`),V(`O aplicativo Kobi Org — código-fonte, design, logotipos e recursos originais — é de propriedade do desenvolvedor e protegido pelas leis de direitos autorais. O conteúdo que você insere permanece de sua propriedade.`),H(`Textos bíblicos e publicações referenciados no aplicativo pertencem aos seus respectivos titulares e são citados apenas como referência, com o link para a fonte oficial. O Kobi Org é um `,`projeto independente`,`, sem afiliação com, patrocínio de ou endosso por tais organizações.`),U(`9. Alterações nos termos`),V(`Estes termos podem ser atualizados periodicamente. O uso continuado do aplicativo após a publicação de alterações constitui aceitação dos novos termos.`),U(`10. Lei aplicável`),V(`Estes termos são regidos pela legislação brasileira, em especial a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e o Código de Defesa do Consumidor (Lei nº 8.078/1990).`),U(`11. Contato`),V(`Para questões relacionadas a estes termos, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`privacidade`,`licenca`]}]},{id:`privacidade`,titulo:`Política de Privacidade`,icone:`shield-lock`,subtitulo:`Última atualização: outubro de 2026`,blocos:[U(`1. Filosofia local-first`),H(`O Kobi Org foi concebido sob o princípio de Privacy by Design. Tudo o que você registra — congregações, pessoas, escalas, programas, pautas, territórios, designações, anotações e eventos — é armazenado `,`exclusivamente no banco de dados local do seu aparelho`,`. Nenhuma informação é transmitida para servidores externos, nem para o desenvolvedor.`),U(`2. Dados que coletamos`),H(``,`Nenhum.`,` O desenvolvedor não coleta, não recebe e não armazena qualquer dado. Tudo o que você registra permanece somente no seu aparelho, sob seu controle.`),U(`3. Dados de terceiros que você cadastra`),H(`O centro deste aplicativo são dados de `,`outras pessoas`,`: o nome, o telefone, o e-mail, se é irmão ou irmã, os papéis, o grupo de campo e as designações dos irmãos que você cadastra, as ausências (com o período e, se você escrever, o motivo), as partes e as escalas de cada um e com quem está cada território. Eles ficam somente no seu aparelho, e o aplicativo só os envia para fora quando você manda — ao compartilhar um PDF, ao abrir o WhatsApp ou o e-mail com um texto, ou ao gerar um arquivo de backup. Cabe a quem usa o aplicativo:`),W(`Cadastrar apenas o necessário para organizar as reuniões e as designações;`,`Manter os dados corretos, corrigindo ou removendo o que não se aplica mais;`,`Enviar pautas, escalas, programas e backups apenas a quem deve recebê-los;`,`No motivo da ausência, escrever só o que a escala precisa saber ("viagem"), e nada de saúde ou de assunto pessoal;`,`Proteger o aparelho e o arquivo de backup, que contêm os dados de todos os cadastrados.`),U(`4. Transmissão de dados`),H(`O aplicativo `,`não transmite nada por conta própria`,`. O que sai do aparelho sai porque você tocou para enviar — e vai pelo aplicativo que você escolheu (WhatsApp, e-mail ou outro), sob as regras dele.`),U(`5. Telemetria e logs`),H(`O Kobi Org `,`não envia telemetria a servidores externos`,`. Eventuais registros técnicos de depuração existem apenas em memória durante o uso e são descartados ao encerrar o aplicativo.`),U(`6. Segurança dos dados`),H(`O banco de dados local é gravado cifrado, com uma chave que só existe neste aparelho — e que `,`só abre com a sua senha`,`: ela fica guardada cifrada por uma chave derivada da senha (PBKDF2 e AES-256-GCM). Sem a senha, o banco não abre, nem para o desenvolvedor, que não tem acesso a nenhuma das duas. Por isso a senha esquecida não tem recuperação: só um arquivo de backup traz os dados de volta. Recomendamos:`),W(`Escolher uma senha que só você saiba, e não anotá-la junto do aparelho;`,`Utilizar bloqueio de tela no aparelho;`,`Manter o sistema operacional e o navegador atualizados;`,`Guardar o arquivo de backup em lugar protegido, porque ele não é cifrado.`),U(`7. Direitos dos titulares (LGPD)`),H(`Não há tratamento de dados em servidores próprios — não existe um controlador externo retendo informações. Os dados estão no seu aparelho, e é `,`você`,` quem atende quem pedir acesso, correção ou exclusão dos próprios dados:`),{tipo:`lista`,itens:[[{texto:`Acesso: `,forte:!0},{texto:`todos os dados ficam visíveis na própria interface do app;`}],[{texto:`Correção: `,forte:!0},{texto:`edite qualquer cadastro diretamente nas telas do aplicativo;`}],[{texto:`Exclusão: `,forte:!0},{texto:`exclua a pessoa — ou, se ela aparece em pautas, programas ou territórios antigos, deixe-a inativa — ou apague os dados locais conforme a seção 8;`}],[{texto:`Portabilidade: `,forte:!0},{texto:`em Sobre → Backup e restauração você gera um arquivo legível, restaurável em outro aparelho.`}]]},U(`8. Exclusão de dados`),H(`Para apagar permanentemente os dados, use `,`"Apagar todos os dados deste aparelho"`,`, na tela Sobre — ou limpe o armazenamento do aplicativo no seu aparelho. Os dois destroem de forma definitiva o banco de dados local, a chave que o cifra e todas as preferências. `,`A operação é irreversível: só um arquivo de backup guardado antes traz os dados de volta.`),U(`9. Alterações nesta política`),V(`Esta política pode ser atualizada periodicamente. Recomendamos revisitar este documento a cada atualização do aplicativo. O uso continuado após alterações constitui aceitação da nova versão.`),U(`10. Contato`),V(`Para relatar problemas de privacidade, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`termos`,`licenca`]}]},{id:`terceiros`,titulo:`Direitos de Terceiros`,icone:`users`,subtitulo:`Última atualização: outubro de 2026`,blocos:[V(`O Kobi Org respeita a propriedade intelectual de terceiros. Esta página reconhece os materiais e softwares de terceiros utilizados ou referenciados no aplicativo.`),U(`1. Textos e publicações referenciados`),H(`O aplicativo cita, como referência de itens de pauta e no relatório, textos da `,`Tradução do Novo Mundo das Escrituras Sagradas`,` e publicações dos sites jw.org e wol.jw.org, sempre com o link para a fonte oficial — o texto aberto é sempre o do site, nunca uma cópia.`),H(`Esses textos e publicações são de `,`propriedade e direitos autorais de Watch Tower Bible and Tract Society of Pennsylvania`,` e das entidades associadas às Testemunhas de Jeová. O Kobi Org é um `,`projeto independente`,`, `,`sem qualquer afiliação, patrocínio, autorização ou endosso oficial`,` dessas organizações.`),V(`Se você é titular de direitos e identificar uso indevido, utilize o contato indicado na tela "Sobre" para solicitarmos a correção ou remoção.`),U(`2. Software de código aberto`),V(`O Kobi Org é construído sobre bibliotecas de código aberto, cada uma sob sua própria licença, às quais agradecemos:`),{tipo:`tabela`,colunas:[`Biblioteca`,`Licença`],linhas:[[`Lit`,`BSD-3-Clause`],[`Shoelace (base dos componentes de interface)`,`MIT`],[`SQLite (o motor do banco, compilado para WebAssembly)`,`Domínio público`],[`SQLite3 Multiple Ciphers (a cifra do banco)`,`MIT`],[`sqlean (funções do banco)`,`MIT`],[`Zod (validação de formulários)`,`MIT`],[`Vite (ferramenta de build)`,`MIT`],[`Workbox (service worker)`,`MIT`]]},V(`Shoelace, SQLite, SQLite3 Multiple Ciphers, sqlean e Zod foram adaptados e são mantidos dentro do projeto, com os avisos de copyright originais preservados. Os textos completos das licenças estão disponíveis nos repositórios oficiais de cada projeto.`),U(`3. Ícones e fontes`),H(`Os ícones de interface são do conjunto `,`Tabler Icons`,` (MIT, © Paweł Kuna). A tipografia é a `,`Noto Sans`,` (SIL Open Font License 1.1, © The Noto Project Authors; nas letras do japonês, do chinês e do coreano, © Adobe), servida pelo próprio aplicativo — o Kobi Org não busca fontes, scripts ou imagens de nenhum servidor externo em tempo de uso.`),{tipo:`veja`,documentos:[`licenca`,`termos`]}]},{id:`licenca`,titulo:`Licença`,icone:`copyright`,subtitulo:`© 2026 Luiz Marin. Todos os direitos reservados.`,blocos:[H(`O aplicativo `,`Kobi Org`,` — incluindo seu código-fonte, design, identidade visual, logotipos, textos originais e demais recursos autorais — é `,`software proprietário`,`, de titularidade exclusiva de Luiz Marin.`),U(`1. Uso permitido`),H(`É concedida ao usuário final uma licença `,`pessoal, intransferível e não comercial`,` para instalar e utilizar o aplicativo, nos termos dos Termos de Uso. Nenhuma licença de código aberto é concedida.`),U(`2. Restrições`),V(`Salvo autorização expressa e por escrito do titular, é vedado:`),W(`Copiar, reproduzir ou redistribuir o aplicativo ou partes dele;`,`Vender, sublicenciar, alugar ou comercializar o aplicativo;`,`Modificar, adaptar ou criar obras derivadas;`,`Remover ou alterar avisos de direitos autorais e de titularidade.`),U(`3. Conteúdo do usuário`),H(`Os dados que você registra no aplicativo permanecem de `,`sua responsabilidade`,` e não são abrangidos por esta licença.`),U(`4. Materiais de terceiros`),V(`Bibliotecas de código aberto e conteúdos referenciados de terceiros possuem seus próprios direitos e licenças, descritos em Direitos de Terceiros.`),U(`5. Isenção de garantias`),H(`O aplicativo é fornecido `,`"no estado em que se encontra"`,`, sem garantias de qualquer natureza. O titular não se responsabiliza por danos decorrentes do uso, conforme os Termos de Uso.`),U(`6. Contato`),V(`Para solicitar autorizações ou esclarecer dúvidas sobre esta licença, utilize o contato indicado na tela "Sobre" do aplicativo.`),{tipo:`veja`,documentos:[`terceiros`,`termos`]}]}],Be=new Map(G.map(e=>[e.id,e]));function K(e){return Be.get(e)}var q=`backup`,J={projetos:{bioma:{versao:`1.0.0`,build:`2026-10-09T00:32:34.649Z`},admin:{versao:`1.0.188`,build:`2026-10-09T00:32:34.649Z`},note:{versao:`1.1.294`,build:`2026-10-08T20:15:12.289Z`},ui:{versao:`1.0.144`,build:`2026-10-08T20:14:28.625Z`},dev:{versao:`1.1.146`,build:`2026-10-08T20:54:08.577Z`},flow:{versao:`0.0.128`,build:`2026-10-08T20:18:16.285Z`},org:{versao:`1.1.28`,build:`2026-10-08T20:55:32.345Z`},sql:{versao:`3.53.4`,build:`2026-10-06T12:33:35.968Z`}},componentesUi:92,pacotes:[{nome:`@kobi/admin`,versao:`1.0.188`,caminho:`apps/admin`},{nome:`kobi-dev`,versao:`1.1.146`,caminho:`apps/dev`},{nome:`@kobi/flow`,versao:`0.0.128`,caminho:`apps/flow`},{nome:`@kobi/note`,versao:`1.1.294`,caminho:`apps/note`},{nome:`@kobi/org`,versao:`1.1.28`,caminho:`apps/org`},{nome:`@bioma/core`,versao:`0.1.0`,caminho:`packages/core`},{nome:`@kobi/idiomas`,versao:`0.1.0`,caminho:`packages/idiomas`},{nome:`@kobi/kit`,versao:`1.0.144`,caminho:`packages/kit`},{nome:`@bioma/sabores`,versao:`0.4.0`,caminho:`packages/sabores`},{nome:`@bioma/sql`,versao:`3.53.4`,caminho:`packages/sql`},{nome:`@bioma/wasm`,versao:`1.0.0`,caminho:`packages/wasm`}],sementes:{flw_respostas_rapidas:8,not_anotacao_modelos:7,not_calendario_tipos:6,not_categorias_financeiro:17,not_conexoes_grupos:39,not_criacao_modulos:63,not_cronologia_eventos:645,not_estoque_alimentos:32,not_faq:63,not_guias:15,not_imite_cartoes:89,not_itens_checklist:96,not_kits_checklist:6,not_perguntas:1337,not_personagens:50,not_poesias:273,not_principios:112,not_receitas:4},codigo:{admin:{arquivos:52,linhas:14885,testes:9},note:{arquivos:250,linhas:93504,testes:32},org:{arquivos:124,linhas:50395,testes:31},flow:{arquivos:143,linhas:61047,testes:46},dev:{arquivos:49,linhas:13756,testes:21},ui:{arquivos:387,linhas:49247,testes:105},bioma:{arquivos:137,linhas:47678,testes:66}},atividade:{admin:[0,0,0,0,0,0,2,14,2,14,32,25],note:[0,0,0,0,0,0,3,18,15,14,48,45],org:[0,0,0,0,0,0,0,0,0,0,0,67],flow:[0,0,0,0,0,0,1,11,2,20,20,20],dev:[0,0,0,0,0,0,1,13,3,5,21,20],ui:[0,0,0,0,0,0,1,4,17,12,20,35],bioma:[0,0,0,0,0,0,3,28,8,18,40,67]}}.projetos.org?.versao??``;function Y(e){return a`${e.map(e=>e.forte===!0?a`<strong>${e.texto}</strong>`:a`${e.texto}`)}`}function X(e){return a`
    <button class="linha" data-documento=${e.id} @click=${()=>f(`sobre/${e.id}`)}>
      <kk-icon class="linha__icone" name=${e.icone}></kk-icon>
      <span class="linha__rotulo">${e.titulo}</span>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>
  `}function Ve(e){switch(e.tipo){case`titulo`:return a`<h3 class="doc__titulo">${e.texto}</h3>`;case`paragrafo`:return a`<p>${Y(e.partes)}</p>`;case`lista`:return a`<ul class="doc__lista">
        ${e.itens.map(e=>a`<li>${Y(e)}</li>`)}
      </ul>`;case`definicoes`:return a`<dl class="doc__definicoes">
        ${e.itens.map(e=>a`
            <div class="doc__definicao">
              <dt>${e.nome}</dt>
              <dd>${e.texto}</dd>
            </div>
          `)}
      </dl>`;case`tabela`:return a`
        <div class="doc__rolagem">
          <table class="doc__tabela">
            <thead>
              <tr>
                <th>${e.colunas[0]}</th>
                <th>${e.colunas[1]}</th>
              </tr>
            </thead>
            <tbody>
              ${e.linhas.map(e=>a`<tr><td>${e[0]}</td><td>${e[1]}</td></tr>`)}
            </tbody>
          </table>
        </div>
      `;case`veja`:return a`
        <nav class="doc__veja" aria-label=${c.sobre.vejaTambem}>
          <h3 class="doc__titulo">${c.sobre.vejaTambem}</h3>
          <div class="lista">
            ${e.documentos.map(e=>{let t=K(e);return t===void 0?o:X(t)})}
          </div>
        </nav>
      `}}function He(e){return a`
    <article class="doc">
      <p class="doc__sub">${e.subtitulo}</p>
      ${e.blocos.map(e=>Ve(e))}
    </article>
  `}function Ue(){return h(c.instalacao.instalarIos,void 0,e=>a`
      <p>${c.instalacao.textoIos}</p>
      <kk-button slot="footer" variant="primary" @click=${()=>e(void 0)}>
        ${c.acoes.fechar}
      </kk-button>
    `)}function We(){let e=``,t=!1;return h(c.senha.trocar,void 0,(n,r,i)=>{let s=e=>r.querySelector(`kk-input[name="${e}"]`)?.value??``,l=async()=>{if(t)return;let r=s(`nova`);if(e=r.length<6?c.senha.curta(6):r===s(`confirmar`)?``:c.senha.naoConfere,e!==``)i();else{t=!0,i();try{await ee(s(`atual`),r),m(c.senha.trocada),n(void 0)}catch(n){n instanceof y||console.error(`Sobre: a senha não foi trocada.`,n),e=n instanceof y?c.senha.errada:c.senha.naoTrocada,t=!1,i()}}};return a`
        <div class="formulario">
          <kk-input
            name="atual"
            type="password"
            password-toggle
            autocomplete="current-password"
            label=${c.senha.atual}
          ></kk-input>
          <kk-input
            id="senha-trocada"
            name="nova"
            type="password"
            password-toggle
            autocomplete="new-password"
            label=${c.senha.nova}
            help-text=${c.senha.regra(6)}
          ></kk-input>
          <kk-password-strength for="senha-trocada" min-length=${6}></kk-password-strength>
          <kk-input
            name="confirmar"
            type="password"
            password-toggle
            autocomplete="new-password"
            label=${c.senha.confirmar}
          ></kk-input>
          ${e===``?o:a`<p class="erro" role="alert">${e}</p>`}
        </div>
        <kk-button slot="footer" @click=${()=>n(void 0)}>${c.acoes.cancelar}</kk-button>
        <kk-button slot="footer" variant="primary" ?loading=${t} @click=${()=>void l()}>
          <kk-icon slot="prefix" name="lock"></kk-icon>${c.senha.trocar}
        </kk-button>
      `},{formulario:!0})}function Z(e,t){return a`<span class="selo"><kk-icon name=${e}></kk-icon>${t}</span>`}function Q(e,t,n,r){return a`
    <div class="recurso" style="--cor: ${t}">
      <kk-icon class="recurso__icone" name=${e}></kk-icon>
      <span class="recurso__titulo">${n}</span>
      <span class="recurso__texto">${r}</span>
    </div>
  `}function $(){return a`
    <section class="sobre__capa">
      <img class="sobre__logo" src="./icons/kobi-org.svg" alt="" width="96" height="96" />
      <h3 class="sobre__nome">${c.app.nome}</h3>
      ${J===``?o:a`<kk-badge variant="primary" pill>${c.sobre.versao(J)}</kk-badge>`}
      <p class="sobre__lema">${c.home.sub}</p>
    </section>

    <div class="selos">
      ${Z(`wifi-off`,c.sobre.seloOffline)} ${Z(`shield-lock`,c.sobre.seloPrivado)}
      ${Z(`eye-off`,c.sobre.seloSemRastreio)} ${Z(`accessible`,c.sobre.seloAcessivel)}
    </div>

    <h3 class="secao">${c.sobre.oQueFaz}</h3>
    <div class="recursos">
      ${Q(`list-check`,`#7048e8`,c.sobre.recPautas,c.sobre.recPautasTexto)}
      ${Q(`calendar-user`,`#f08c00`,c.sobre.recReunioes,c.sobre.recReunioesTexto)}
      ${Q(`map-2`,`#2b8a3e`,c.sobre.recCampo,c.sobre.recCampoTexto)}
      ${Q(`clipboard-list`,`#e8590c`,c.sobre.recDesignacoes,c.sobre.recDesignacoesTexto)}
      ${Q(`users`,`#2f9e44`,c.sobre.recCadastro,c.sobre.recCadastroTexto)}
      ${Q(`calendar`,`#0dcaf0`,c.sobre.recDia,c.sobre.recDiaTexto)}
    </div>

    <div class="sobre__aviso">
      <kk-icon class="sobre__aviso-icone" name="shield-lock"></kk-icon>
      <div>
        <strong>${c.sobre.privacidadeTitulo}</strong>
        <p>${c.sobre.privacidadeTexto}</p>
      </div>
    </div>

    <button class="sobre__aviso" @click=${()=>f(`perfil/acessibilidade`)}>
      <kk-icon class="sobre__aviso-icone" name="accessible"></kk-icon>
      <div>
        <strong>${c.sobre.acessibilidadeTitulo}</strong>
        <p>${c.sobre.acessibilidadeTexto}</p>
      </div>
      <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
    </button>

    <div class="lista sobre__acoes">
      ${S()?a`
            <button class="linha" data-acao="instalar-ios" @click=${()=>void Ue()}>
              <kk-icon class="linha__icone" name="brand-apple"></kk-icon>
              <span class="linha__rotulo">${c.instalacao.instalarIos}</span>
              <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
            </button>
          `:o}
      ${C()?a`
            <button class="linha" data-acao="instalar" @click=${()=>void x()}>
              <kk-icon class="linha__icone" name="download"></kk-icon>
              <span class="linha__rotulo">${c.instalacao.instalar}</span>
              <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
            </button>
          `:o}
      <button class="linha" data-acao="boasvindas" @click=${()=>void b()}>
        <kk-icon class="linha__icone" name="sparkles"></kk-icon>
        <span class="linha__rotulo">${c.boasVindas.rever}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>

      <button class="linha" data-acao="senha" @click=${()=>void We()}>
        <kk-icon class="linha__icone" name="lock"></kk-icon>
        <span class="linha__rotulo">${c.senha.trocar}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>

      <button class="linha" data-acao="backup" @click=${()=>f(`sobre/${q}`)}>
        <kk-icon class="linha__icone" name="database-export"></kk-icon>
        <span class="linha__rotulo">${c.backup.titulo}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>

      <button class="linha linha--perigo" @click=${()=>void g()}>
        <kk-icon class="linha__icone" name="trash"></kk-icon>
        <span class="linha__rotulo">${c.armazenamento.apagarTudo}</span>
        <kk-icon class="linha__seta" name="chevron-right"></kk-icon>
      </button>
    </div>

    <h3 class="secao">${c.sobre.documentos}</h3>
    <div class="lista">${G.map(e=>X(e))}</div>

    <p class="sobre__contato">
      <kk-icon name="mail"></kk-icon>
      ${c.sobre.contato}
      <a href="mailto:${c.sobre.email}">${c.sobre.email}</a>
    </p>
  `}var Ge={voltarPara(e){return e.args.length===0?`home`:`sobre`},titulo(e){let[t]=e.args;return t===q?c.backup.titulo:t===void 0?void 0:K(t)?.titulo},conteudo(e){let[t]=e.args;if(t===void 0)return $();if(t===q)return ze();let n=K(t);return n===void 0?$():He(n)}};export{Ge as telaSobre};