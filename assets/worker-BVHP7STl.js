function e(e){let t=``,n=0;for(;n<e.length;){let r=e.charAt(n),i=e.charAt(n+1);if(r===`-`&&i===`-`){for(;n<e.length&&e.charAt(n)!==`
`;)n++;t+=` `}else if(r===`/`&&i===`*`){for(n+=2;n<e.length&&(e.charAt(n)!==`*`||e.charAt(n+1)!==`/`);)n++;n+=2,t+=` `}else if(r===`'`||r===`"`||r==="`"){for(n++;n<e.length;){if(e.charAt(n)===r){if(e.charAt(n+1)===r){n+=2;continue}n++;break}n++}t+=` `}else if(r===`[`){for(;n<e.length&&e.charAt(n)!==`]`;)n++;n++,t+=` `}else t+=r,n++}return t}function t(t){let n=[],r=0,i=0,a=0,o=i=>{let o=t.slice(r,i),s=o.trim();if(s!==``&&e(s).trim()!==``){let e=o.length-o.trimStart().length;n.push({sql:s,inicio:r+e,fim:r+e+s.length})}r=i+1,a=0};for(;i<t.length;){let e=t.charAt(i),n=t.charAt(i+1);if(e===`-`&&n===`-`){for(;i<t.length&&t.charAt(i)!==`
`;)i++;continue}if(e===`/`&&n===`*`){for(i+=2;i<t.length&&(t.charAt(i)!==`*`||t.charAt(i+1)!==`/`);)i++;i+=2;continue}if(e===`'`||e===`"`||e==="`"){for(i++;i<t.length;){if(t.charAt(i)===e){if(t.charAt(i+1)===e){i+=2;continue}i++;break}i++}continue}if(e===`[`){for(;i<t.length&&t.charAt(i)!==`]`;)i++;i++;continue}if(e===`;`){if(a===0){o(i),i++;continue}i++;continue}let s=/^[A-Za-z_][A-Za-z_0-9]*/.exec(t.slice(i))?.[0];if(s!==void 0){let e=s.toUpperCase();(e===`BEGIN`&&t.slice(r,i).trim()!==``||e===`CASE`)&&a++,e===`END`&&a>0&&a--,i+=s.length}else i++}return o(t.length),n}const n=/* @__PURE__ */ new Map;function r(e,t){n.set(e,t)}function i(e){let t=n.get(e);if(t===void 0)throw Error(`o esquema de ${e} não foi carregado: importe @bioma/core/esquema/${e} (ou @bioma/core/esquema, que traz os quatro)`);return t}const a=/^CREATE\s+(?:UNIQUE\s+)?(TABLE|INDEX|VIEW)(?:\s+IF\s+NOT\s+EXISTS)?\s+([A-Za-z_][A-Za-z_0-9]*)/i,o={TABLE:`tabela`,INDEX:`indice`,VIEW:`vista`},s=/^\s{2,}([a-z_][a-z_0-9]*)\s+\S/;function c(e){let t=0;for(;t<e.length;){let n=e.charAt(t);if(n===`'`||n===`"`){for(t++;t<e.length&&e.charAt(t)!==n;)t++;t++}else{if(n===`-`&&e.charAt(t+1)===`-`)return e.slice(t+2).trim();t++}}}function l(e){let t=e.split(`
`),n=0;for(;n<t.length&&!/^\s*CREATE\b/i.test(t[n]??``);)n++;let r=[];for(let e=n-1;e>=0;e--){let n=(t[e]??``).trim();if(!n.startsWith(`--`))break;r.unshift(n.replace(/^--\s?/,``))}return{nota:r.join(`
`).trim(),comando:t.slice(n).join(`
`).trim()}}function u(e){let n=[];for(let r of t(e)){let{nota:e,comando:t}=l(r.sql),i=a.exec(t);if(i===null)throw Error(`o esquema canônico só descreve tabela e índice: ${t.slice(0,60)}`);let u={},d=[];for(let e of t.split(`
`)){let t=s.exec(e)?.[1];if(t===void 0)continue;d.push(t);let n=c(e);n!==void 0&&n!==``&&(u[t]=n)}n.push({nome:i[2]??``,tipo:o[(i[1]??``).toUpperCase()]??`indice`,sql:t,nota:e,colunas:u,campos:d})}return n}const d=/* @__PURE__ */ new Map;function f(e){let t=d.get(e);return t===void 0&&(t=u(i(e)),d.set(e,t)),t}function p(e){return f(e).map(e=>e.sql)}const m=`bioma_carimbos`,ee=[`id`,`id_global`],te=`CREATE INDEX IF NOT EXISTS idx_bioma_carimbos_hlc
  ON ${m} (hlc);`;function h(e,t){return`hlc_${e}_${t}`}function ne(e,t,n){return`('${e}', ${n}.id_global, '${t}', bio_hlc(), ${n}.${t})`}const g=`ON CONFLICT (tabela, id_global, campo)
    DO UPDATE SET hlc = excluded.hlc, valor = excluded.valor`;function re(e){let t=e.nome,n=e.campos.filter(e=>!ee.includes(e)),r=n.map(e=>`    ${ne(t,e,`new`)}`).join(`,
`),i=n.map(e=>`  INSERT INTO ${m} (tabela, id_global, campo, hlc, valor)\n    SELECT '${t}', new.id_global, '${e}', bio_hlc(), new.${e}\n     WHERE new.${e} IS NOT old.${e}\n  ${g};`).join(`
`);return[`CREATE TRIGGER IF NOT EXISTS ${h(t,`ins`)} AFTER INSERT ON ${t} BEGIN
  INSERT INTO ${m} (tabela, id_global, campo, hlc, valor) VALUES
${r}
  ${g};
END;`,`CREATE TRIGGER IF NOT EXISTS ${h(t,`upd`)} AFTER UPDATE ON ${t} BEGIN
${i}
END;`,`CREATE TRIGGER IF NOT EXISTS ${h(t,`del`)} AFTER DELETE ON ${t} BEGIN
  DELETE FROM ${m} WHERE tabela = '${t}' AND id_global = old.id_global;
  INSERT INTO ${m} (tabela, id_global, campo, hlc, valor)
    VALUES ('${t}', old.id_global, '', bio_hlc(), NULL)
  ${g};
END;`]}function ie(e){return[`ins`,`upd`,`del`].map(t=>`DROP TRIGGER IF EXISTS ${h(e,t)}`)}function ae(e){let t=f(e).filter(e=>e.tipo===`tabela`&&e.campos.includes(`id_global`)).flatMap(re);return[`CREATE TABLE IF NOT EXISTS bioma_carimbos (
  tabela    TEXT    NOT NULL, -- a tabela da linha carimbada
  id_global BLOB    NOT NULL, -- a linha, pelo id que não colide entre aparelhos
  campo     TEXT    NOT NULL, -- a coluna que mudou — vazio é a lápide de uma linha apagada
  hlc       INTEGER NOT NULL, -- o carimbo do relógio lógico híbrido — leia-o com bio_hlc_ms()
  valor     ANY,              -- o que foi escrito, no tipo em que foi escrito
  PRIMARY KEY (tabela, id_global, campo)
) STRICT, WITHOUT ROWID;`,te,...t]}const oe=`SELECT bio_hlc_visto(hlc) FROM ${m}
  ORDER BY hlc DESC LIMIT 1`;r(`org`,`-- O esquema do banco do Kobi Org — o \`org.sqlite\` que o PWA
-- guarda no OPFS, cifrado por aparelho, como o do Kobi Note.
--
-- **Cada tabela entra com a tela que a lê**, e por isso o esqueleto (etapa 1)
-- nasceu sem tabela nenhuma: ele provou o
-- caminho inteiro — o worker, a cifra, o OPFS, a migração e os carimbos — antes
-- de existir um cadastro. Uma tabela criada antes da tela ficaria de pé no
-- aparelho com a forma do dia em que nasceu, e o \`CREATE TABLE IF NOT EXISTS\`
-- não leva coluna nova a tabela que já existe.
--
-- **As regras do Note valem aqui, todas.** Prefixo \`org_\`, \`STRICT\`, e a
-- família privada inteira (não há acervo curado neste app) com
-- \`INTEGER PRIMARY KEY AUTOINCREMENT\` e um \`id_global\` sobre \`uuid7()\` —
-- \`BLOB NOT NULL DEFAULT (uuid_blob(uuid7())) CHECK (length(id_global) = 16)\`,
-- que é o que faz a tabela ganhar os gatilhos de carimbo da Fase 10. Coluna
-- nova numa tabela que já existe pede um passo em
-- \`apps/org/src/db/migracoes.ts\`, e vai para o FIM da tabela, que é onde
-- o \`ALTER TABLE ADD COLUMN\` a põe.
--
-- Nada de fora alcança este banco: OPFS é rigorosamente por origem, e nem o
-- Kobi Admin (\`bioma.local\`) nem o Kobi Note (\`note.local\`) escrevem no
-- \`org.local\`.

-- ── Os cadastros (etapa 2) ───────────────────────────────────────────────────

-- As congregações. O número é o da filial, inteiro, e ÚNICO quando informado —
-- o "não sei" é \`NULL\`, nunca \`0\`, e por isso a unicidade é um índice parcial.
-- O estado é texto livre (o estado, a província ou a região, como foi
-- escrito): o Org fala nove idiomas, e a lista das 27 UF era só do Brasil.
CREATE TABLE IF NOT EXISTS org_congregacoes (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global           BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome                TEXT    NOT NULL DEFAULT '',
  numero              INTEGER,                    -- o número da congregação; NULL quando não informado
  cidade              TEXT    NOT NULL DEFAULT '',
  uf                  TEXT    NOT NULL DEFAULT '', -- o estado ou a região, ou vazio
  dia_meio_de_semana  INTEGER CHECK (dia_meio_de_semana BETWEEN 0 AND 6), -- 0 é domingo; NULL é "não marcado"; migração 2
  hora_meio_de_semana TEXT    NOT NULL DEFAULT '', -- HH:MM, ou vazio; migração 2
  dia_fim_de_semana   INTEGER CHECK (dia_fim_de_semana BETWEEN 0 AND 6),  -- 0 é domingo; NULL é "não marcado"; migração 2
  hora_fim_de_semana  TEXT    NOT NULL DEFAULT '', -- HH:MM, ou vazio; migração 2
  CHECK (length(id_global) = 16)
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_congregacoes_numero ON org_congregacoes (numero) WHERE numero IS NOT NULL;

-- As pessoas: quem a pauta cita, quem preside, quem ora, quem recebe.
--
-- \`papeis\` e \`cargos\` são vetores JSON NA ORDEM FIXA do catálogo
-- (\`modulos/pessoas/regras.ts\`): dois caminhos que marcassem os mesmos papéis em
-- ordem diferente gravariam dois textos para a mesma pessoa. As regras entre
-- eles (ancião e servo se excluem, cargo só com ancião, um coordenador por
-- congregação) são da tela e de \`regras.ts\`, que têm teste; o banco guarda o
-- resultado.
--
-- \`RESTRICT\` na congregação: a tela recusa apagar a congregação que tem
-- pessoas, e a regra aqui diz o mesmo. Pessoa sem congregação é \`NULL\`.
CREATE TABLE IF NOT EXISTS org_pessoas (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome           TEXT    NOT NULL DEFAULT '',
  telefone       TEXT    NOT NULL DEFAULT '',
  email          TEXT    NOT NULL DEFAULT '',
  congregacao_id INTEGER,                      -- a congregação; NULL quando não informada
  papeis         TEXT    NOT NULL DEFAULT '[]', -- vetor JSON, na ordem de PAPEIS
  cargos         TEXT    NOT NULL DEFAULT '[]', -- vetor JSON, na ordem de CARGOS; só com o papel de ancião
  ativo          INTEGER NOT NULL DEFAULT 1,    -- booleano 0 | 1; o inativo some dos seletores
  sexo           TEXT    NOT NULL DEFAULT '' CHECK (sexo IN ('', 'masculino', 'feminino')), -- vazio é "não informado"; migração 1
  CHECK (length(id_global) = 16),
  CHECK (ativo IN (0, 1)),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

-- A chave estrangeira sem índice faz cada exclusão de congregação varrer as
-- pessoas inteiras para conferir o \`RESTRICT\`.
CREATE INDEX IF NOT EXISTS idx_org_pessoas_congregacao ON org_pessoas (congregacao_id);

-- ── Os grupos de campo (a base das escalas) ──────────────────────────────────

-- Os grupos de serviço de campo (*Organizados*, caps. 5 e 7). Quem dirige é
-- um ancião ou, na falta, um servo ministerial habilitado — o "servo de grupo"
-- —, e ele tem um ajudante. Os dois são referência (\`RESTRICT\`): a pessoa que
-- dirige um grupo não se exclui, ela se inativa.
--
-- Os membros moram em tabela própria, e não numa coluna \`grupo_id\` da pessoa:
-- a pessoa apontaria para o grupo e o grupo para a pessoa, e a restauração do
-- backup, que enche um store de cada vez, não teria por onde começar.
CREATE TABLE IF NOT EXISTS org_grupos (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global          BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id     INTEGER,                    -- a congregação; NULL quando não informada
  nome               TEXT    NOT NULL DEFAULT '',
  superintendente_id INTEGER,                    -- quem dirige; NULL quando ninguém
  ajudante_id        INTEGER,                    -- o ajudante; NULL quando não há
  CHECK (length(id_global) = 16),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (superintendente_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (ajudante_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_grupos_congregacao ON org_grupos (congregacao_id);
CREATE INDEX IF NOT EXISTS idx_org_grupos_superintendente ON org_grupos (superintendente_id);
CREATE INDEX IF NOT EXISTS idx_org_grupos_ajudante ON org_grupos (ajudante_id);

-- Quem é de cada grupo. Uma pessoa, um grupo: o índice único na pessoa. A
-- linha é filha dos dois lados (\`CASCADE\`): excluir o grupo solta os membros,
-- e excluir a pessoa a tira do grupo. Mudar de grupo é ATUALIZAR a linha, e não
-- apagar e criar outra.
CREATE TABLE IF NOT EXISTS org_grupos_membros (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  grupo_id  INTEGER NOT NULL,
  pessoa_id INTEGER NOT NULL,
  CHECK (length(id_global) = 16),
  FOREIGN KEY (grupo_id) REFERENCES org_grupos (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_grupos_membros_pessoa ON org_grupos_membros (pessoa_id);
CREATE INDEX IF NOT EXISTS idx_org_grupos_membros_grupo ON org_grupos_membros (grupo_id);

-- ── As escalas ───────────────────────────────────────────────────────────────

-- As funções de uma escala: indicador, microfone volante, som, limpeza... São
-- CADASTRO da congregação, e não catálogo em código, porque mudam com a
-- congregação e com o momento (decisão do usuário, 05/10/2026). Cada uma diz
-- quantas vagas tem por reunião, em quais das duas reuniões entra, o que gira
-- (\`pessoa\` ou \`grupo\` de campo), se a mesma escolha vale a semana inteira, e
-- quem pode: o sexo e os papéis (vazio é qualquer um), ou só os escolhidos
-- (\`org_escalas_aptos\`). A escala precisa dos dias das reuniões, que são da
-- congregação — por isso a congregação é obrigatória aqui.
CREATE TABLE IF NOT EXISTS org_escalas_funcoes (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id INTEGER NOT NULL,
  nome           TEXT    NOT NULL DEFAULT '',
  vagas          INTEGER NOT NULL DEFAULT 1,         -- quantas pessoas (ou grupos) por reunião
  meio_de_semana INTEGER NOT NULL DEFAULT 1,         -- booleano 0 | 1: entra na reunião do meio de semana
  fim_de_semana  INTEGER NOT NULL DEFAULT 1,         -- booleano 0 | 1: entra na reunião do fim de semana
  gira           TEXT    NOT NULL DEFAULT 'pessoa',  -- \`pessoa\` | \`grupo\`
  por_semana     INTEGER NOT NULL DEFAULT 0,         -- booleano 0 | 1: a mesma escolha vale as reuniões da semana
  sexo           TEXT    NOT NULL DEFAULT '',        -- quem pode: \`masculino\`, \`feminino\`, ou vazio (qualquer)
  papeis         TEXT    NOT NULL DEFAULT '[]',      -- vetor JSON, na ordem de PAPEIS; vazio é qualquer papel
  so_escolhidos  INTEGER NOT NULL DEFAULT 0,         -- booleano 0 | 1: só quem está em \`org_escalas_aptos\`
  ordem          INTEGER NOT NULL DEFAULT 0,
  CHECK (length(id_global) = 16),
  CHECK (vagas BETWEEN 1 AND 20),
  CHECK (meio_de_semana IN (0, 1)),
  CHECK (fim_de_semana IN (0, 1)),
  CHECK (gira IN ('pessoa', 'grupo')),
  CHECK (por_semana IN (0, 1)),
  CHECK (sexo IN ('', 'masculino', 'feminino')),
  CHECK (so_escolhidos IN (0, 1)),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_escalas_funcoes_congregacao ON org_escalas_funcoes (congregacao_id, ordem);

-- Quem pode uma função marcada "só os escolhidos" (o som, que pede treino). A
-- linha é filha dos dois lados.
CREATE TABLE IF NOT EXISTS org_escalas_aptos (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  funcao_id INTEGER NOT NULL,
  pessoa_id INTEGER NOT NULL,
  CHECK (length(id_global) = 16),
  FOREIGN KEY (funcao_id) REFERENCES org_escalas_funcoes (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_escalas_aptos_par ON org_escalas_aptos (funcao_id, pessoa_id);
CREATE INDEX IF NOT EXISTS idx_org_escalas_aptos_pessoa ON org_escalas_aptos (pessoa_id);

-- Quando uma pessoa não está (viagem, doença): o gerador da escala não a
-- escolhe nesses dias. \`AAAA-MM-DD\` dos dois lados, inclusive; o fim vazio é
-- "só o dia do início".
CREATE TABLE IF NOT EXISTS org_ausencias (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  pessoa_id INTEGER NOT NULL,
  inicio    TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD
  fim       TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD, ou vazio
  motivo    TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_ausencias_pessoa ON org_ausencias (pessoa_id);

-- As reuniões que fogem do dia de sempre: a visita do superintendente de
-- circuito que muda o dia, a assembleia que tira a reunião. A \`data\` é a do
-- dia de sempre; a \`nova_data\` vazia é "não há reunião".
CREATE TABLE IF NOT EXISTS org_escalas_excecoes (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id INTEGER NOT NULL,
  data           TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD, o dia de sempre
  reuniao        TEXT    NOT NULL DEFAULT 'meio_de_semana',
  nova_data      TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD, ou vazio: não há reunião
  CHECK (length(id_global) = 16),
  CHECK (reuniao IN ('meio_de_semana', 'fim_de_semana')),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_escalas_excecoes_reuniao ON org_escalas_excecoes (congregacao_id, data, reuniao);

-- Uma célula da escala: a vaga \`vaga\` da função na reunião do dia \`data\` (o
-- dia em que ela acontece, já com a exceção — e por isso a reunião entra na
-- chave: a exceção pode pôr as duas no mesmo dia). Quem está nela é pessoa ou
-- grupo, conforme a função gira. A escala é PLANO, e não registro de reunião
-- como a pauta: excluir a pessoa ou o grupo só esvazia a célula (\`SET NULL\`),
-- e a tela a mostra como vaga. A célula \`travada\` não muda quando o mês é
-- gerado de novo — e toda escolha feita à mão trava.
CREATE TABLE IF NOT EXISTS org_escalas (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  funcao_id INTEGER NOT NULL,
  data      TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD
  reuniao   TEXT    NOT NULL DEFAULT 'meio_de_semana',
  vaga      INTEGER NOT NULL DEFAULT 1,
  pessoa_id INTEGER,                    -- quem está; NULL quando a função gira por grupo, ou vaga
  grupo_id  INTEGER,                    -- o grupo; NULL quando a função gira por pessoa, ou vaga
  travada   INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  CHECK (length(id_global) = 16),
  CHECK (reuniao IN ('meio_de_semana', 'fim_de_semana')),
  CHECK (vaga >= 1),
  CHECK (travada IN (0, 1)),
  FOREIGN KEY (funcao_id) REFERENCES org_escalas_funcoes (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE SET NULL,
  FOREIGN KEY (grupo_id) REFERENCES org_grupos (id) ON UPDATE NO ACTION ON DELETE SET NULL
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_escalas_celula ON org_escalas (funcao_id, data, reuniao, vaga);
CREATE INDEX IF NOT EXISTS idx_org_escalas_data ON org_escalas (data);
CREATE INDEX IF NOT EXISTS idx_org_escalas_pessoa ON org_escalas (pessoa_id);
CREATE INDEX IF NOT EXISTS idx_org_escalas_grupo ON org_escalas (grupo_id);

-- ── O programa da reunião do meio de semana ──────────────────────────────────

-- Uma semana do programa, de uma congregação. A \`semana\` é a SEGUNDA-FEIRA
-- dela (\`AAAA-MM-DD\`), como a apostila marca as semanas; o dia da reunião sai
-- dos dias da congregação e das exceções da escala. Os títulos das partes são
-- digitados por quem monta: o Org não tem acervo curado. O cântico é o número,
-- e \`NULL\` é "não informado". O programa é registro da reunião, como a pauta:
-- quem preside e quem ora são \`RESTRICT\`.
CREATE TABLE IF NOT EXISTS org_programas (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id    INTEGER NOT NULL,
  semana            TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD, a segunda-feira
  leitura           TEXT    NOT NULL DEFAULT '', -- a leitura da Bíblia da semana
  presidente_id     INTEGER,
  oracao_inicial_id INTEGER,
  oracao_final_id   INTEGER,
  cantico_inicial   INTEGER,                    -- o número; NULL quando não informado
  cantico_meio      INTEGER,
  cantico_final     INTEGER,
  CHECK (length(id_global) = 16),
  CHECK (cantico_inicial BETWEEN 1 AND 999),
  CHECK (cantico_meio BETWEEN 1 AND 999),
  CHECK (cantico_final BETWEEN 1 AND 999),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (presidente_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (oracao_inicial_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (oracao_final_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_programas_semana ON org_programas (congregacao_id, semana);
CREATE INDEX IF NOT EXISTS idx_org_programas_presidente ON org_programas (presidente_id);
CREATE INDEX IF NOT EXISTS idx_org_programas_oracao_inicial ON org_programas (oracao_inicial_id);
CREATE INDEX IF NOT EXISTS idx_org_programas_oracao_final ON org_programas (oracao_final_id);

-- As partes de uma semana, nas três seções da apostila. O \`tipo\` diz quem a
-- parte leva: \`orador\` (uma pessoa), \`leitura\` (o estudante da leitura da
-- Bíblia), \`estudante\` (o estudante e o ajudante) e \`estudo\` (o dirigente e o
-- leitor). \`pessoa_id\` é o primeiro dos dois; \`ajudante_id\`, o segundo.
-- A parte é filha (\`CASCADE\`); a pessoa é referência (\`RESTRICT\`).
CREATE TABLE IF NOT EXISTS org_programas_partes (
  id          INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global   BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  programa_id INTEGER NOT NULL,
  secao       TEXT    NOT NULL DEFAULT 'tesouros',
  sequencia   INTEGER NOT NULL DEFAULT 0,
  tipo        TEXT    NOT NULL DEFAULT 'orador',
  duracao_min INTEGER NOT NULL DEFAULT 0, -- em minutos; 0 é "não informada"
  titulo      TEXT    NOT NULL DEFAULT '',
  pessoa_id   INTEGER,                   -- o orador, o estudante ou o dirigente
  ajudante_id INTEGER,                   -- o ajudante, ou o leitor do estudo
  CHECK (length(id_global) = 16),
  CHECK (secao IN ('tesouros', 'ministerio', 'vida_crista')),
  CHECK (tipo IN ('orador', 'leitura', 'estudante', 'estudo')),
  CHECK (duracao_min >= 0),
  FOREIGN KEY (programa_id) REFERENCES org_programas (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (ajudante_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_programas_partes_programa ON org_programas_partes (programa_id, secao, sequencia);
CREATE INDEX IF NOT EXISTS idx_org_programas_partes_pessoa ON org_programas_partes (pessoa_id);
CREATE INDEX IF NOT EXISTS idx_org_programas_partes_ajudante ON org_programas_partes (ajudante_id);

-- ── A reunião pública e os oradores (etapa 4) ────────────────────────────────

-- Os oradores DE FORA: quem vem de outra congregação fazer o discurso público.
-- Não são pessoas do cadastro (\`org_pessoas\`) de propósito — a congregação
-- deles não é uma das nossas, e cadastrá-la em \`org_congregacoes\` a poria no
-- seletor de cada módulo. A congregação de origem é texto, por extenso. Quem
-- já fez discurso aqui não se exclui (\`RESTRICT\`): se inativa.
CREATE TABLE IF NOT EXISTS org_oradores (
  id          INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global   BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome        TEXT    NOT NULL DEFAULT '',
  telefone    TEXT    NOT NULL DEFAULT '',
  congregacao TEXT    NOT NULL DEFAULT '', -- a congregação de origem, por extenso
  ativo       INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1; o inativo some do seletor
  CHECK (length(id_global) = 16),
  CHECK (ativo IN (0, 1))
) STRICT;

-- A reunião pública de uma semana, de uma congregação. A \`semana\` é a
-- SEGUNDA-FEIRA dela, como no programa; o dia sai dos dias da congregação e
-- das exceções da escala. O orador é da casa (\`orador_id\`, uma pessoa) ou de
-- fora (\`visitante_id\`), nunca os dois. O número e o tema do discurso são
-- digitados (o Org não tem acervo curado); o tema de um número já feito vem do
-- histórico. A reunião é registro, como a pauta: as pessoas são \`RESTRICT\`.
CREATE TABLE IF NOT EXISTS org_reunioes_publicas (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id   INTEGER NOT NULL,
  semana           TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD, a segunda-feira
  numero           INTEGER,                    -- o número do discurso; NULL quando não informado
  tema             TEXT    NOT NULL DEFAULT '',
  orador_id        INTEGER,                    -- o orador da casa
  visitante_id     INTEGER,                    -- o orador de fora
  presidente_id    INTEGER,
  leitor_id        INTEGER,                    -- o leitor de A Sentinela
  hospitalidade_id INTEGER,                    -- quem recebe o orador de fora; só com ele
  observacao       TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  CHECK (numero BETWEEN 1 AND 999),
  CHECK (orador_id IS NULL OR visitante_id IS NULL),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (orador_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (visitante_id) REFERENCES org_oradores (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (presidente_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (leitor_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (hospitalidade_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_reunioes_publicas_semana ON org_reunioes_publicas (congregacao_id, semana);
CREATE INDEX IF NOT EXISTS idx_org_reunioes_publicas_orador ON org_reunioes_publicas (orador_id);
CREATE INDEX IF NOT EXISTS idx_org_reunioes_publicas_visitante ON org_reunioes_publicas (visitante_id);
CREATE INDEX IF NOT EXISTS idx_org_reunioes_publicas_presidente ON org_reunioes_publicas (presidente_id);
CREATE INDEX IF NOT EXISTS idx_org_reunioes_publicas_leitor ON org_reunioes_publicas (leitor_id);
CREATE INDEX IF NOT EXISTS idx_org_reunioes_publicas_hospitalidade ON org_reunioes_publicas (hospitalidade_id);

-- Os oradores da casa ENVIADOS a outra congregação: quem vai, em que dia, para
-- onde, e qual discurso. O destino é texto, como a origem do orador de fora.
-- Quem vai fica fora da escala daquele dia. Registro: a pessoa é \`RESTRICT\`.
CREATE TABLE IF NOT EXISTS org_oradores_enviados (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id INTEGER NOT NULL,              -- a congregação de onde ele sai
  pessoa_id      INTEGER NOT NULL,
  data           TEXT    NOT NULL DEFAULT '',   -- AAAA-MM-DD
  hora           TEXT    NOT NULL DEFAULT '',   -- HH:MM, ou vazio
  destino        TEXT    NOT NULL DEFAULT '',   -- a congregação que o recebe, por extenso
  numero         INTEGER,                       -- o número do discurso; NULL quando não informado
  tema           TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  CHECK (numero BETWEEN 1 AND 999),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_oradores_enviados_congregacao ON org_oradores_enviados (congregacao_id, data);
CREATE INDEX IF NOT EXISTS idx_org_oradores_enviados_pessoa ON org_oradores_enviados (pessoa_id);

-- ── O testemunho público (etapa 5) ───────────────────────────────────────────

-- Os pontos do testemunho público (a praça, a rodoviária, o hospital): onde o
-- carrinho fica. O ponto inativo sai do mês que se gera, e os horários dele
-- ficam guardados para quando voltar.
CREATE TABLE IF NOT EXISTS org_testemunho_pontos (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id INTEGER NOT NULL,
  nome           TEXT    NOT NULL DEFAULT '',
  observacao     TEXT    NOT NULL DEFAULT '', -- o endereço, onde o carrinho fica guardado
  ativo          INTEGER NOT NULL DEFAULT 1,  -- booleano 0 | 1
  CHECK (length(id_global) = 16),
  CHECK (ativo IN (0, 1)),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_testemunho_pontos_congregacao ON org_testemunho_pontos (congregacao_id);

-- Os horários de um ponto: o dia da semana (0 é domingo, como no \`Date\`), o
-- começo e o fim, e quantas pessoas cada vez. Filho do ponto (\`CASCADE\`).
CREATE TABLE IF NOT EXISTS org_testemunho_turnos (
  id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global  BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  ponto_id   INTEGER NOT NULL,
  dia_semana INTEGER NOT NULL DEFAULT 1,
  inicio     TEXT    NOT NULL DEFAULT '', -- HH:MM
  fim        TEXT    NOT NULL DEFAULT '', -- HH:MM, ou vazio
  vagas      INTEGER NOT NULL DEFAULT 2,
  CHECK (length(id_global) = 16),
  CHECK (dia_semana BETWEEN 0 AND 6),
  CHECK (vagas BETWEEN 1 AND 6),
  FOREIGN KEY (ponto_id) REFERENCES org_testemunho_pontos (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_testemunho_turnos_ponto ON org_testemunho_turnos (ponto_id);

-- Quem pode estar em cada horário: o testemunho público é de quem se dispôs
-- a ele, e cada um no horário que tem. Filha dos dois lados, uma por par.
CREATE TABLE IF NOT EXISTS org_testemunho_disponiveis (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  turno_id  INTEGER NOT NULL,
  pessoa_id INTEGER NOT NULL,
  CHECK (length(id_global) = 16),
  FOREIGN KEY (turno_id) REFERENCES org_testemunho_turnos (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_testemunho_disponiveis_par ON org_testemunho_disponiveis (turno_id, pessoa_id);
CREATE INDEX IF NOT EXISTS idx_org_testemunho_disponiveis_pessoa ON org_testemunho_disponiveis (pessoa_id);

-- Uma célula da escala do testemunho: a vaga \`vaga\` do horário no dia \`data\`.
-- PLANO, como a escala das reuniões: excluir a pessoa esvazia a célula
-- (\`SET NULL\`), e a travada não muda quando o mês é gerado de novo — a vaga
-- travada vazia é o dia em que aquele horário não acontece.
CREATE TABLE IF NOT EXISTS org_testemunho_escala (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  turno_id  INTEGER NOT NULL,
  data      TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD
  vaga      INTEGER NOT NULL DEFAULT 1,
  pessoa_id INTEGER,
  travada   INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  CHECK (length(id_global) = 16),
  CHECK (vaga >= 1),
  CHECK (travada IN (0, 1)),
  FOREIGN KEY (turno_id) REFERENCES org_testemunho_turnos (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE SET NULL
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_testemunho_escala_celula ON org_testemunho_escala (turno_id, data, vaga);
CREATE INDEX IF NOT EXISTS idx_org_testemunho_escala_data ON org_testemunho_escala (data);
CREATE INDEX IF NOT EXISTS idx_org_testemunho_escala_pessoa ON org_testemunho_escala (pessoa_id);

-- ── Os territórios (etapa 5) ─────────────────────────────────────────────────

-- Os cartões de território. O número é texto ("12", "12-A") e é obrigatório e
-- único na congregação. O mapa é um link (o do aplicativo de mapas, ou a foto
-- do cartão).
CREATE TABLE IF NOT EXISTS org_territorios (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id INTEGER NOT NULL,
  numero         TEXT    NOT NULL DEFAULT '',
  nome           TEXT    NOT NULL DEFAULT '', -- o bairro, a localidade
  mapa           TEXT    NOT NULL DEFAULT '', -- o link do mapa, ou vazio
  observacao     TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_territorios_numero ON org_territorios (congregacao_id, numero);

-- Cada vez que um território saiu: com quem, quando saiu e quando voltou. A
-- volta vazia é "ainda está com ele" — e só uma saída por território fica
-- aberta, pelo índice único parcial. Registro, como a pauta: a pessoa é
-- \`RESTRICT\`; a saída é filha do território (\`CASCADE\`).
CREATE TABLE IF NOT EXISTS org_territorios_saidas (
  id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global     BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  territorio_id INTEGER NOT NULL,
  pessoa_id     INTEGER NOT NULL,
  saida         TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD
  volta         TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD, ou vazio: ainda com a pessoa
  observacao    TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  CHECK (volta = '' OR volta >= saida),
  FOREIGN KEY (territorio_id) REFERENCES org_territorios (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_territorios_saidas_aberta ON org_territorios_saidas (territorio_id) WHERE volta = '';
CREATE INDEX IF NOT EXISTS idx_org_territorios_saidas_territorio ON org_territorios_saidas (territorio_id, saida);
CREATE INDEX IF NOT EXISTS idx_org_territorios_saidas_pessoa ON org_territorios_saidas (pessoa_id);

-- ── As pautas e as designações (etapa 3) ─────────────────────────────────────

-- O que cada servo ministerial cuida (cap. 6 do *Organizados*). O tipo é a
-- chave de um catálogo fixo em código (\`modulos/designacoes/regras.ts\`), e a
-- \`descricao\` é o complemento — obrigatória só no tipo \`outra\`, que é texto
-- livre. Quem cuida e o ajudante são referência: a pessoa citada aqui não se
-- exclui (\`RESTRICT\`), ela se inativa. A designação sem ninguém é \`NULL\`, e é
-- a que a tela mostra em destaque.
CREATE TABLE IF NOT EXISTS org_designacoes (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  congregacao_id INTEGER,                    -- a congregação; NULL quando não informada
  tipo           TEXT    NOT NULL DEFAULT '', -- a chave de TIPOS_DE_DESIGNACAO
  descricao      TEXT    NOT NULL DEFAULT '', -- o complemento; o nome inteiro no tipo \`outra\`
  pessoa_id      INTEGER,                    -- quem cuida; NULL quando ninguém
  ajudante_id    INTEGER,                    -- o ajudante; NULL quando não há
  CHECK (length(id_global) = 16),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (pessoa_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (ajudante_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_designacoes_congregacao ON org_designacoes (congregacao_id);
CREATE INDEX IF NOT EXISTS idx_org_designacoes_pessoa ON org_designacoes (pessoa_id);
CREATE INDEX IF NOT EXISTS idx_org_designacoes_ajudante ON org_designacoes (ajudante_id);

-- A pauta de uma reunião. O tipo muda o título e os campos (\`anciaos\`,
-- \`servos\`, \`conjunta\`, \`circuito\`). A data é \`AAAA-MM-DD\` e a hora \`HH:MM\`, e
-- o vazio é "ainda não marcada" — texto, e não número, porque é assim que o
-- campo do formulário as entrega e o relatório as lê.
--
-- A pauta não copia a pessoa: aponta para ela, e o nome sai do cadastro na
-- hora de desenhar. Por isso quem preside e quem ora são \`RESTRICT\`.
CREATE TABLE IF NOT EXISTS org_pautas (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  tipo              TEXT    NOT NULL DEFAULT 'anciaos',
  data              TEXT    NOT NULL DEFAULT '', -- AAAA-MM-DD, ou vazio
  hora              TEXT    NOT NULL DEFAULT '', -- HH:MM, ou vazio
  congregacao_id    INTEGER,                    -- NULL quando não informada
  preside_id        INTEGER,                    -- NULL quando ninguém
  oracao_inicial_id INTEGER,                    -- NULL quando ninguém; a pauta dos servos não tem
  oracao_final_id   INTEGER,                    -- NULL quando ninguém; a pauta dos servos não tem
  observacao        TEXT    NOT NULL DEFAULT '',
  CHECK (length(id_global) = 16),
  CHECK (tipo IN ('anciaos', 'servos', 'conjunta', 'circuito')),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (preside_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (oracao_inicial_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (oracao_final_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_pautas_congregacao ON org_pautas (congregacao_id);
CREATE INDEX IF NOT EXISTS idx_org_pautas_preside ON org_pautas (preside_id);
CREATE INDEX IF NOT EXISTS idx_org_pautas_oracao_inicial ON org_pautas (oracao_inicial_id);
CREATE INDEX IF NOT EXISTS idx_org_pautas_oracao_final ON org_pautas (oracao_final_id);

-- Os itens de uma pauta. Item é filho: sai com a pauta (\`CASCADE\`). A \`parte\`
-- só tem dois valores na pauta conjunta; nas outras é a única que o tipo tem.
-- A \`sequencia\` ordena dentro da parte, e o número que o relatório escreve é a
-- posição, e não ela — excluir um item não pede renumerar os outros.
--
-- O item da parte dos servos pode citar uma designação: escolhê-la COPIA o nome
-- dela para o assunto e o servo dela para o responsável, porque a pauta é o
-- registro de uma reunião, e a troca de servo amanhã não pode reescrever quem
-- respondeu ontem. Por isso a designação é \`SET NULL\`, e não \`RESTRICT\`: o item
-- já tem o texto, e perder o elo não perde nada. A pessoa é \`RESTRICT\`.
CREATE TABLE IF NOT EXISTS org_pautas_itens (
  id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global       BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  pauta_id        INTEGER NOT NULL,
  parte           TEXT    NOT NULL DEFAULT 'anciaos',
  sequencia       INTEGER NOT NULL DEFAULT 0,
  duracao_min     INTEGER NOT NULL DEFAULT 0,  -- em minutos; 0 é "não informada"
  assunto         TEXT    NOT NULL DEFAULT '',
  referencia      TEXT    NOT NULL DEFAULT '',
  referencia_link TEXT    NOT NULL DEFAULT '', -- o endereço da referência, ou vazio
  designacao_id   INTEGER,                    -- a designação citada; só na parte dos servos
  sugerido_por_id INTEGER,                    -- quem sugeriu; só na parte dos anciãos
  responsavel_id  INTEGER,                    -- o responsável designado
  CHECK (length(id_global) = 16),
  CHECK (parte IN ('anciaos', 'servos')),
  CHECK (duracao_min >= 0),
  FOREIGN KEY (pauta_id) REFERENCES org_pautas (id) ON UPDATE NO ACTION ON DELETE CASCADE,
  FOREIGN KEY (designacao_id) REFERENCES org_designacoes (id) ON UPDATE NO ACTION ON DELETE SET NULL,
  FOREIGN KEY (sugerido_por_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (responsavel_id) REFERENCES org_pessoas (id) ON UPDATE NO ACTION ON DELETE RESTRICT
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_pautas_itens_pauta ON org_pautas_itens (pauta_id, parte, sequencia);
CREATE INDEX IF NOT EXISTS idx_org_pautas_itens_designacao ON org_pautas_itens (designacao_id);
CREATE INDEX IF NOT EXISTS idx_org_pautas_itens_sugerido ON org_pautas_itens (sugerido_por_id);
CREATE INDEX IF NOT EXISTS idx_org_pautas_itens_responsavel ON org_pautas_itens (responsavel_id);

-- ── A moldura (etapa 4) ──────────────────────────────────────────────────────

-- Quem usa o aparelho: uma linha só (id 1). Sem ICE — o objetivo do app é
-- outro (\`docs/org/index.md\`, as decisões). A congregação aponta para o
-- cadastro, e é \`SET NULL\`: excluir a congregação não pode esbarrar no perfil,
-- que não é registro de ninguém.
CREATE TABLE IF NOT EXISTS org_perfil (
  id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global      BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome           TEXT    NOT NULL DEFAULT '',
  telefone       TEXT    NOT NULL DEFAULT '',
  email          TEXT    NOT NULL DEFAULT '',
  congregacao_id INTEGER,                    -- NULL quando não informada
  CHECK (length(id_global) = 16),
  FOREIGN KEY (congregacao_id) REFERENCES org_congregacoes (id) ON UPDATE NO ACTION ON DELETE SET NULL
) STRICT;

-- As pastas das anotações.
CREATE TABLE IF NOT EXISTS org_pastas (
  id           INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global    BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome         TEXT    NOT NULL DEFAULT '',
  data_criacao INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  CHECK (length(id_global) = 16)
) STRICT;

-- As anotações: o módulo do Note sem os modelos curados, que são acervo do
-- Kobi Admin e este app não tem. Excluir a pasta solta as anotações dela
-- (\`SET NULL\`) — perder a pasta não pode significar perder o que havia dentro.
CREATE TABLE IF NOT EXISTS org_anotacoes (
  id               INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global        BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo           TEXT    NOT NULL DEFAULT '',
  conteudo         TEXT    NOT NULL DEFAULT '', -- HTML rico do \`kk-editor\`
  pasta_id         INTEGER,                     -- NULL é "sem pasta", o estado da maioria
  esta_fixada      INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  esta_arquivada   INTEGER NOT NULL DEFAULT 0,  -- booleano 0 | 1
  data_criacao     INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  data_modificacao INTEGER NOT NULL DEFAULT 0,  -- epoch em milissegundos
  CHECK (length(id_global) = 16),
  CHECK (esta_fixada IN (0, 1)),
  CHECK (esta_arquivada IN (0, 1)),
  FOREIGN KEY (pasta_id) REFERENCES org_pastas (id) ON UPDATE NO ACTION ON DELETE SET NULL
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_anotacoes_pasta ON org_anotacoes (pasta_id);

-- Os tipos de evento do Calendário. Nascem do \`TIPOS_PADRAO\` embutido, sem
-- semeadura pela rede. A \`chave\` marca os três tipos das REUNIÕES, que a pauta
-- usa no evento dela (\`reuniao_anciaos\`, \`reuniao_servos\`, \`visita_circuito\`):
-- o nome e a cor são do usuário, mas o tipo com chave não se exclui, e o que
-- sumir volta na abertura. Os tipos do usuário têm a chave vazia.
CREATE TABLE IF NOT EXISTS org_calendario_tipos (
  id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  nome      TEXT    NOT NULL DEFAULT '',
  cor_chave TEXT    NOT NULL DEFAULT 'primary', -- a chave da cor, e não o hexadecimal
  icone     TEXT    NOT NULL DEFAULT '',
  ordem     INTEGER NOT NULL DEFAULT 0,
  chave     TEXT    NOT NULL DEFAULT '',        -- o tipo de uma reunião da pauta, ou vazio
  CHECK (length(id_global) = 16)
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_org_calendario_tipos_chave ON org_calendario_tipos (chave) WHERE chave <> '';

-- Os eventos. Datas como no Note: o epoch do DIA à meia-noite local, mais os
-- minutos desde a meia-noite — um compromisso do calendário, e não um instante.
--
-- **A pauta com data É um evento** (\`docs/org/index.md\`, §3), e quem manda é a
-- pauta: salvar a pauta cria ou move o evento dela, e apagá-la o apaga
-- (\`CASCADE\`). Um evento por pauta, pelo índice único parcial. O evento de
-- pauta abre a pauta, e mover o evento no Calendário muda a data DELA.
CREATE TABLE IF NOT EXISTS org_calendario_eventos (
  id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_global         BLOB    NOT NULL DEFAULT (uuid_blob(uuid7())),
  titulo            TEXT    NOT NULL DEFAULT '',
  tipo_id           INTEGER,                    -- o tipo; a tela recusa apagar um tipo em uso
  data_inicio_epoch INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos do DIA, à meia-noite local
  hora_inicio_min   INTEGER NOT NULL DEFAULT 0, -- minutos desde a meia-noite
  data_fim_epoch    INTEGER NOT NULL DEFAULT 0, -- epoch em milissegundos
  hora_fim_min      INTEGER NOT NULL DEFAULT 0, -- minutos desde a meia-noite
  dia_inteiro       INTEGER NOT NULL DEFAULT 0, -- booleano 0 | 1
  descricao         TEXT    NOT NULL DEFAULT '',
  pauta_id          INTEGER,                    -- a pauta de que o evento é a data; NULL no evento comum
  CHECK (length(id_global) = 16),
  CHECK (dia_inteiro IN (0, 1)),
  FOREIGN KEY (tipo_id) REFERENCES org_calendario_tipos (id) ON UPDATE NO ACTION ON DELETE RESTRICT,
  FOREIGN KEY (pauta_id) REFERENCES org_pautas (id) ON UPDATE NO ACTION ON DELETE CASCADE
) STRICT;

CREATE INDEX IF NOT EXISTS idx_org_calendario_eventos_periodo ON org_calendario_eventos (data_inicio_epoch, data_fim_epoch);
CREATE INDEX IF NOT EXISTS idx_org_calendario_eventos_tipo ON org_calendario_eventos (tipo_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_org_calendario_eventos_pauta ON org_calendario_eventos (pauta_id) WHERE pauta_id IS NOT NULL;
`);function _(e){return`"${e.replace(/"/g,`""`)}"`}function se(e){return e.map(e=>({nome:String(e.name),tipo:String(e.type).toUpperCase(),notNulo:Number(e.notnull)===1,chave:Number(e.pk)>0,temPadrao:e.dflt_value!==null&&e.dflt_value!==void 0}))}function v(e,t){if(t==null)return null;if(e.tipo===`TEXT`)return typeof t==`string`?t:String(t);if(e.tipo===`BLOB`)return t instanceof Uint8Array?t:null;if(typeof t==`boolean`)return+!!t;let n=typeof t==`number`?t:Number(t);return Number.isFinite(n)?n:null}function y(e,t,n){let r=t.filter(e=>n[e.nome]!==void 0);if(r.length===0)return{sql:`INSERT INTO ${_(e)} DEFAULT VALUES`,parametros:[]};let i=r.map(e=>_(e.nome)).join(`, `),a=r.map(()=>`?`).join(`, `);return{sql:`INSERT INTO ${_(e)} (${i}) VALUES (${a})`,parametros:r.map(e=>v(e,n[e.nome]))}}function b(e,t,n){let r=t.filter(e=>n[e.nome]!==void 0),i=t.filter(e=>e.chave).map(e=>e.nome),a=r.filter(e=>!i.includes(e.nome)&&e.nome!==`id_global`),o=r.map(e=>_(e.nome)).join(`, `),s=r.map(()=>`?`).join(`, `),c=i.map(_).join(`, `),l=a.length===0?`DO NOTHING`:`DO UPDATE SET ${a.map(e=>`${_(e.nome)} = excluded.${_(e.nome)}`).join(`, `)}`;return{sql:`INSERT INTO ${_(e)} (${o}) VALUES (${s}) ON CONFLICT(${c}) ${l}`,parametros:r.map(e=>v(e,n[e.nome]))}}function x(e){"@babel/helpers - typeof";return x=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},x(e)}function ce(e,t){if(x(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(x(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function le(e){var t=ce(e,`string`);return x(t)==`symbol`?t:t+``}function S(e,t,n){return(t=le(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return e===null||e.byteLength===0?`novo`:new TextDecoder(`latin1`).decode(e.subarray(0,16))===`SQLite format 3\0`?`em-claro`:`cifrado`}function ue(e,t){return e.consultar(`SELECT name FROM pragma_table_info(?)`,[t]).map(e=>String(e.name))}function w(e,t,n){let r=ue(e,t);if(r.length===0)return!1;let i=n.filter(([e])=>!r.includes(e));if(i.length===0)return!1;for(let[n,r]of i)e.executar(`ALTER TABLE ${t} ADD COLUMN ${n} ${r}`);for(let n of ie(t))e.executar(n);return!0}var de=class{constructor(e,t){S(this,`bd`,void 0),S(this,`catalogo`,void 0),S(this,`colunas`,/* @__PURE__ */ new Map),S(this,`avisadas`,/* @__PURE__ */ new Set),S(this,`profundidade`,0),this.bd=e,this.catalogo=t}emTransacao(e){return this.naTransacao(e)}naTransacao(e){if(this.profundidade>0)return e();this.profundidade+=1;try{return this.bd.emTransacao(e)}finally{--this.profundidade}}stores(){return Object.keys(this.catalogo)}storesDa(e){return this.stores().filter(t=>this.catalogo[t]?.familia===e)}storeDe(e){let t=this.catalogo[e];if(t===void 0)throw Error(`store desconhecido: ${e}`);return t}lerEsquemaAplicado(){this.colunas.clear();for(let e of this.stores()){let t=this.storeDe(e);for(let e of[t.tabela,...(t.filhos??[]).map(e=>e.tabela)])this.colunas.has(e)||this.colunas.set(e,se(this.bd.consultar(`PRAGMA table_info(${_(e)})`)))}}tabelas(){return[...this.colunas.keys()]}colunasDa(e){let t=this.colunas.get(e);if(t===void 0||t.length===0)throw Error(`tabela ausente no banco: ${e}`);return t}todos(e){let t=this.storeDe(e);return this.comFilhos(t,this.bd.consultar(`SELECT * FROM ${_(t.tabela)} ORDER BY id`))}obter(e,t){let n=this.storeDe(e),r=this.bd.consultar(`SELECT * FROM ${_(n.tabela)} WHERE id = ?`,[Number(t)]);return this.comFilhos(n,r)[0]}contar(e){return Number(this.bd.escalar(`SELECT COUNT(*) FROM ${_(this.storeDe(e).tabela)}`)??0)}salvar(e,t){let n=this.storeDe(e),r=T(n,t),i=E(n,D(n,r));this.avisarCamposIgnorados(n.tabela,i);let a=0;return this.naTransacao(()=>{let e=r.id;if(e==null){let e=y(n.tabela,this.colunasDa(n.tabela),i);this.bd.executar(e.sql,e.parametros),a=Number(this.bd.escalar(`SELECT MAX(id) FROM ${_(n.tabela)}`)??0)}else{a=Number(e);let t=b(n.tabela,this.colunasDa(n.tabela),{...i,id:a});this.bd.executar(t.sql,t.parametros)}this.trocarFilhos(n,a,r)}),a}excluir(e,t){let n=this.storeDe(e);this.bd.executar(`DELETE FROM ${_(n.tabela)} WHERE id = ?`,[Number(t)])}substituirTudo(e,t){let n=this.storeDe(e);this.naTransacao(()=>{this.bd.executar(`DELETE FROM ${_(n.tabela)}`);let e=this.colunasDa(n.tabela),r=0;for(let i of t){let t=Number(i.id);Number.isFinite(t)?t>r&&(r=t):t=++r;let a=T(n,{...i,id:t}),o=E(n,D(n,a));this.avisarCamposIgnorados(n.tabela,o);let s=y(n.tabela,e,o);this.bd.executar(s.sql,s.parametros),this.trocarFilhos(n,t,a)}})}comFilhos(e,t){let n=e.filhos??[],r=t.map(t=>fe(e,t));if(n.length===0||r.length===0)return r;let i=r.map(e=>Number(e.id)),a=i.map(()=>`?`).join(`, `),o=r;for(let e of n){let t=this.bd.consultar(`SELECT * FROM ${_(e.tabela)} WHERE ${_(e.chave)} IN (${a}) ORDER BY id`,i),n=/* @__PURE__ */ new Map;for(let r of t){let t=Number(r[e.chave]),i=n.get(t);i===void 0?n.set(t,[r]):i.push(r)}o=o.map(t=>({...t,[e.campo]:n.get(Number(t.id))??[]}))}return o}trocarFilhos(e,t,n){for(let r of e.filhos??[]){let e=n[r.campo];if(!Array.isArray(e))continue;this.bd.executar(`DELETE FROM ${_(r.tabela)} WHERE ${_(r.chave)} = ?`,[t]);let i=this.colunasDa(r.tabela),a=e[0];a!==void 0&&this.avisarCamposIgnorados(r.tabela,{...a,[r.chave]:t});let o=0;for(let n of e){let e=Number(n.id);Number.isFinite(e)?e>o&&(o=e):e=++o;let a=y(r.tabela,i,{...n,id:e,[r.chave]:t});this.bd.executar(a.sql,a.parametros)}}}avisarCamposIgnorados(e,t){if(this.avisadas.has(e))return;let n=new Set(this.colunasDa(e).map(e=>e.nome)),r=Object.keys(t).filter(e=>!n.has(e));r.length!==0&&(this.avisadas.add(e),console.warn(`${e}: campo(s) que a tabela não tem, descartado(s) na gravação: ${r.join(`, `)}.`))}};function T(e,t){let n=e.apelidos;if(n===void 0)return t;let r={...t},i=!1;for(let[e,t]of Object.entries(n))e in r&&(r[t]===void 0&&(r[t]=r[e]),delete r[e],i=!0);return i?r:t}function E(e,t){let n=e.json;if(n===void 0)return t;let r={...t};for(let e of n){let t=r[e];t!=null&&typeof t!=`string`&&(r[e]=JSON.stringify(t))}return r}function fe(e,t){let n=e.json;if(n===void 0)return t;let r={...t};for(let e of n){let t=r[e];if(typeof t==`string`)try{r[e]=JSON.parse(t===``?`null`:t)}catch{r[e]=t.trimStart().startsWith(`{`)?{}:[]}}return r}function D(e,t){let n=e.filhos??[];if(n.length===0)return t;let r={...t};for(let e of n)delete r[e.campo];return r}var pe=class{constructor(){S(this,`bytes`,void 0),S(this,`usados`,0),this.bytes=/* @__PURE__ */ new Uint8Array(65536)}ler(e,t){if(t>=this.usados)return 0;let n=Math.min(e.length,this.usados-t);return e.set(this.bytes.subarray(t,t+n)),n}escrever(e,t){return this.reservar(t+e.length),this.bytes.set(e,t),this.usados=Math.max(this.usados,t+e.length),e.length}tamanho(){return this.usados}truncar(e){this.reservar(e),e<this.usados&&this.bytes.fill(0,e,this.usados),this.usados=e}sincronizar(){}fechar(){}reservar(e){if(e<=this.bytes.length)return;let t=this.bytes.length;for(;t<e;)t*=2;let n=new Uint8Array(t);n.set(this.bytes.subarray(0,this.usados)),this.bytes=n}},me=class{constructor(){S(this,`arquivos`,/* @__PURE__ */ new Map),S(this,`pastas`,/* @__PURE__ */ new Set([`/`]))}abrir(e,t){let n=this.arquivos.get(e);if(n!==void 0)return t.exclusivo?null:(t.truncar&&n.truncar(0),n);if(!t.criar)return null;let r=new pe;return this.arquivos.set(e,r),r}existe(e){return this.arquivos.has(e)||this.pastas.has(e)}ehPasta(e){return this.pastas.has(e)}tamanhoDe(e){return this.arquivos.get(e)?.tamanho()??null}apagar(e){return this.arquivos.delete(e)}criarPasta(e){return!this.pastas.has(e)&&(this.pastas.add(e),!0)}apagarPasta(e){return this.pastas.delete(e)}};const O={OK:0,BADF:8,EXIST:20,INVAL:28,ISDIR:31,NOENT:44,NOSYS:52,NOTDIR:54,NOTEMPTY:55},k={DIRETORIO:3,ARQUIVO:4,CARACTERE:2},A={CRIAR:1,PASTA:2,EXCLUSIVO:4,TRUNCAR:8},j={INICIO:0,ATUAL:1,FIM:2},M={FDSTAT:24,FILESTAT:64,PRESTAT:8};var he=class{constructor(e){S(this,`arquivos`,void 0),S(this,`memoria`,null),S(this,`descritores`,/* @__PURE__ */ new Map),S(this,`proximo`,4),S(this,`fd_close`,e=>{let t=this.descritores.get(e);return t===void 0?O.BADF:(t.arquivo.fechar(),this.descritores.delete(e),O.OK)}),S(this,`fd_read`,(e,t,n,r)=>{let i=this.descritores.get(e);if(i===void 0)return O.BADF;let a=0;for(let e=0;e<n;e++){let n=this.vista.getUint32(t+e*8,!0),r=this.vista.getUint32(t+e*8+4,!0);if(r===0)continue;let o=new Uint8Array(r),s=i.arquivo.ler(o,i.posicao);if(this.bytes.set(o.subarray(0,s),n),i.posicao+=s,a+=s,s<r)break}return this.vista.setUint32(r,a,!0),O.OK}),S(this,`fd_write`,(e,t,n,r)=>{let i=0;for(let r=0;r<n;r++){let n=this.vista.getUint32(t+r*8,!0),a=this.vista.getUint32(t+r*8+4,!0),o=this.bytes.subarray(n,n+a);if(e===1||e===2){let t=new TextDecoder().decode(o).trimEnd();t!==``&&console[e===2?`error`:`log`](`[Bioma SQL] ${t}`),i+=a;continue}let s=this.descritores.get(e);if(s===void 0)return O.BADF;let c=s.arquivo.escrever(o.slice(),s.posicao);s.posicao+=c,i+=c}return this.vista.setUint32(r,i,!0),O.OK}),S(this,`fd_seek`,(e,t,n,r)=>{let i=this.descritores.get(e);if(i===void 0)return O.BADF;let a=(n===j.INICIO?0:n===j.ATUAL?i.posicao:i.arquivo.tamanho())+Number(t);return a<0?O.INVAL:(i.posicao=a,this.vista.setBigUint64(r,BigInt(a),!0),O.OK)}),S(this,`fd_sync`,e=>{let t=this.descritores.get(e);return t===void 0?O.BADF:(t.arquivo.sincronizar(),O.OK)}),S(this,`fd_fdstat_get`,(e,t)=>{let n=e===3?k.DIRETORIO:e<=2?k.CARACTERE:this.descritores.has(e)?k.ARQUIVO:null;return n===null?O.BADF:(this.bytes.fill(0,t,t+M.FDSTAT),this.vista.setUint8(t,n),this.vista.setBigUint64(t+8,18446744073709551615n,!0),this.vista.setBigUint64(t+16,18446744073709551615n,!0),O.OK)}),S(this,`fd_filestat_get`,(e,t)=>{let n=this.descritores.get(e);return n===void 0?e===3?this.escreverStat(t,k.DIRETORIO,0):O.BADF:this.escreverStat(t,k.ARQUIVO,n.arquivo.tamanho())}),S(this,`fd_filestat_set_size`,(e,t)=>{let n=this.descritores.get(e);return n===void 0?O.BADF:(n.arquivo.truncar(Number(t)),O.OK)}),S(this,`fd_prestat_get`,(e,t)=>e===3?(this.vista.setUint8(t,0),this.vista.setUint32(t+4,1,!0),O.OK):O.BADF),S(this,`fd_prestat_dir_name`,(e,t,n)=>e===3?(this.bytes.set(new TextEncoder().encode(`/`).subarray(0,n),t),O.OK):O.BADF),S(this,`path_open`,(e,t,n,r,i,a,o,s,c)=>{let l=this.caminhoEm(n,r);if((i&A.PASTA)!==0)return this.arquivos.ehPasta(l)?O.OK:O.NOTDIR;if(this.arquivos.ehPasta(l))return O.ISDIR;let u=(i&A.CRIAR)!==0,d=(i&A.EXCLUSIVO)!==0,f=this.arquivos.existe(l);if(d&&f)return O.EXIST;if(!u&&!f)return O.NOENT;let p=this.arquivos.abrir(l,{criar:u,truncar:(i&A.TRUNCAR)!==0,exclusivo:d});if(p===null)return f?O.EXIST:O.NOENT;let m=this.proximo++;return this.descritores.set(m,{arquivo:p,caminho:l,posicao:0}),this.vista.setUint32(c,m,!0),O.OK}),S(this,`path_create_directory`,(e,t,n)=>this.arquivos.criarPasta(this.caminhoEm(t,n))?O.OK:O.EXIST),S(this,`path_remove_directory`,(e,t,n)=>this.arquivos.apagarPasta(this.caminhoEm(t,n))?O.OK:O.NOENT),S(this,`path_filestat_get`,(e,t,n,r,i)=>{let a=this.caminhoEm(n,r);if(this.arquivos.ehPasta(a))return this.escreverStat(i,k.DIRETORIO,0);let o=this.arquivos.tamanhoDe(a);return o===null?O.NOENT:this.escreverStat(i,k.ARQUIVO,o)}),S(this,`path_unlink_file`,(e,t,n)=>this.arquivos.apagar(this.caminhoEm(t,n))?O.OK:O.NOENT),S(this,`environ_sizes_get`,(e,t)=>(this.vista.setUint32(e,0,!0),this.vista.setUint32(t,0,!0),O.OK)),S(this,`clock_time_get`,(e,t,n)=>(this.vista.setBigUint64(n,BigInt(Date.now())*1000000n,!0),O.OK)),S(this,`random_get`,(e,t)=>{let n=this.bytes.subarray(e,e+t);for(let e=0;e<t;e+=65536)crypto.getRandomValues(n.subarray(e,Math.min(e+65536,t)));return O.OK}),this.arquivos=e}ligar(e){this.memoria=e}get vista(){if(this.memoria===null)throw Error("hospedeiro WASI usado antes de `ligar()`");return new DataView(this.memoria.buffer)}get bytes(){if(this.memoria===null)throw Error("hospedeiro WASI usado antes de `ligar()`");return new Uint8Array(this.memoria.buffer)}caminhoEm(e,t){let n=new TextDecoder().decode(this.bytes.subarray(e,e+t));return n.startsWith(`/`)?n:`/${n}`}get importacoes(){return{fd_close:this.fd_close,fd_read:this.fd_read,fd_write:this.fd_write,fd_seek:this.fd_seek,fd_sync:this.fd_sync,fd_fdstat_get:this.fd_fdstat_get,fd_fdstat_set_flags:()=>O.OK,fd_filestat_get:this.fd_filestat_get,fd_filestat_set_size:this.fd_filestat_set_size,fd_prestat_get:this.fd_prestat_get,fd_prestat_dir_name:this.fd_prestat_dir_name,path_open:this.path_open,path_create_directory:this.path_create_directory,path_remove_directory:this.path_remove_directory,path_filestat_get:this.path_filestat_get,path_filestat_set_times:()=>O.OK,path_unlink_file:this.path_unlink_file,path_readlink:()=>O.INVAL,environ_get:()=>O.OK,environ_sizes_get:this.environ_sizes_get,clock_time_get:this.clock_time_get,random_get:this.random_get,poll_oneoff:()=>O.NOSYS,proc_exit:e=>{throw Error(`o motor chamou proc_exit(${e}) — isto é defeito, não fluxo`)}}}escreverStat(e,t,n){return this.bytes.fill(0,e,e+M.FILESTAT),this.vista.setUint8(e+16,t),this.vista.setBigUint64(e+24,1n,!0),this.vista.setBigUint64(e+32,BigInt(n),!0),O.OK}};const N=new TextEncoder,P={OK:0,NAO_E_BANCO:26,LINHA:100,FIM:101},F={INTEIRO:1,REAL:2,TEXTO:3,BLOB:4,NULO:5},ge={9:`DELETE`,18:`INSERT`,23:`UPDATE`};var _e=class{constructor(){S(this,`atendentes`,null),S(this,`importacoes`,{rastro:(e,t,n)=>{this.atendentes?.rastro(t,n)},mudanca:(e,t,n,r,i,a)=>{this.atendentes?.mudanca(t,n,r,i,a)},progresso:e=>this.atendentes?.progresso()??0})}ligar(e){this.atendentes=e}};async function ve(e){let t=new he(e.arquivos??new me),n=new _e,r=(await ye(e.modulo,t,n)).exports;return t.ligar(r.memory),r._initialize(),new be(r,n,e.caminho??`/bioma.sqlite`,e.chave)}async function ye(e,t,n){let r={wasi_snapshot_preview1:t.importacoes,bioma:n.importacoes};if(e instanceof WebAssembly.Module)return WebAssembly.instantiate(e,r);if(e instanceof Response||e instanceof Promise)try{let{instance:t}=await WebAssembly.instantiateStreaming(e,r);return t}catch{let t=await e,{instance:n}=await WebAssembly.instantiate(await t.clone().arrayBuffer(),r);return n}return WebAssembly.instantiate(await WebAssembly.compile(e),r)}var be=class{constructor(e,t,n,r){if(S(this,`motor`,void 0),S(this,`indice`,void 0),S(this,`celula`,void 0),S(this,`fechado`,!1),S(this,`ouvinteDoRastro`,null),S(this,`ouvinteDaMudanca`,null),S(this,`decidir`,null),S(this,`falhaNoGancho`,null),S(this,`interrompido`,!1),this.motor=e,this.celula=e.biomasql_wasm_alocar(4),this.celula===0)throw Error(`Bioma SQL: o motor não alocou nem quatro bytes`);let i=r===void 0?/* @__PURE__ */ new Uint8Array:typeof r==`string`?N.encode(r):r,a=this.escreverTexto(n),o=i.byteLength===0?0:this.escreverBytes(i);try{let t=e.biomasql_wasm_abrir(a,1,o,i.byteLength);if(t<0)throw Error(-t===P.NAO_E_BANCO?`Bioma SQL: ${n} não abriu — a chave não confere, ou o arquivo não é um banco`:`Bioma SQL não abriu ${n} (código ${-t})`);this.indice=t}finally{e.biomasql_wasm_liberar(a),o!==0&&(new Uint8Array(e.memory.buffer).fill(0,o,o+i.byteLength),e.biomasql_wasm_liberar(o))}t.ligar({rastro:(e,t)=>this.aoRastro(e,t),mudanca:(e,t,n,r,i)=>this.aoMudar(e,t,n,r,i),progresso:()=>this.aoProgredir()})}get versao(){return this.lerTexto(this.motor.biomasql_wasm_versao())}executar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_passo(n);return t!==P.FIM&&t!==P.LINHA&&this.lancar(e),this.motor.biomasql_wasm_alteracoes(this.indice)}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}executarRoteiro(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=this.escreverTexto(e),n;try{n=this.motor.biomasql_wasm_roteiro(this.indice,t)}finally{this.motor.biomasql_wasm_liberar(t)}n!==P.OK&&this.lancar(e),this.conferirGanchos()}consultar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_colunas(n),r=[];for(let e=0;e<t;e++)r.push(this.lerTexto(this.motor.biomasql_wasm_nome_coluna(n,e)));let i=[],a=this.motor.biomasql_wasm_passo(n);for(;a===P.LINHA;){let e={};for(let i=0;i<t;i++)e[r[i]]=this.lerColuna(n,i);i.push(e),a=this.motor.biomasql_wasm_passo(n)}return a!==P.FIM&&this.lancar(e),i}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}escalar(e,t){let n=this.preparar(e,t);try{let t=this.motor.biomasql_wasm_passo(n);return t!==P.LINHA&&t!==P.FIM&&this.lancar(e),t===P.LINHA?this.lerColuna(n,0):null}finally{this.motor.biomasql_wasm_finalizar(n),this.conferirGanchos()}}emTransacao(e){this.executar(`BEGIN`);try{let t=e();return this.executar(`COMMIT`),t}catch(e){throw this.executar(`ROLLBACK`),e}}integridadeIncremental(e=`main`){return this.consultar(`SELECT objeto, mensagem FROM bio_intck(?)`,[e]).map(e=>({objeto:e.objeto===null?null:String(e.objeto),mensagem:String(e.mensagem)}))}recuperar(e={}){return this.consultar(`SELECT sql FROM bio_recover(?, ?)`,[e.esquema??`main`,e.perdidos??null]).map(e=>String(e.sql))}recomendarIndices(e,t){return(t===void 0?this.consultar(`SELECT * FROM bio_expert(?)`,[e]):this.consultar(`SELECT * FROM bio_expert(?, ?)`,[e,t])).map(e=>({consulta:String(e.consulta??``),indices:e.indices===null?null:String(e.indices).trim(),plano:e.plano===null?null:String(e.plano).trim(),candidatos:e.candidatos===null?null:String(e.candidatos).trim()}))}rastrear(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.ouvinteDoRastro=e,this.motor.biomasql_wasm_rastrear(this.indice,e===null?0:1)}observar(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.ouvinteDaMudanca=e,this.motor.biomasql_wasm_observar(this.indice,e===null?0:1)}vigiar(e,t){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let n=t!==null&&e>0;this.decidir=n?t:null,this.motor.biomasql_wasm_vigiar(this.indice,n?e:0)}interromper(){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);this.motor.biomasql_wasm_interromper(this.indice)}serializar(){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let e=this.motor.biomasql_wasm_serializar(this.indice,this.celula);if(e===0)throw Error(`Bioma SQL: o motor não serializou o banco`);try{return new Uint8Array(this.motor.memory.buffer,e,this.lerCelula()).slice()}finally{this.motor.biomasql_wasm_liberar(e)}}desserializar(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=this.motor.biomasql_wasm_alocar(e.byteLength);if(t===0)throw Error(`Bioma SQL: não coube o banco de ${e.byteLength} bytes na memória`);new Uint8Array(this.motor.memory.buffer).set(e,t);let n=this.motor.biomasql_wasm_desserializar(this.indice,t,e.byteLength);if(n!==P.OK)throw Error(`Bioma SQL: o conteúdo não foi aceito como banco (código ${n})`)}rechavear(e){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let t=e===void 0?/* @__PURE__ */ new Uint8Array:typeof e==`string`?N.encode(e):e,n=t.byteLength===0?0:this.escreverBytes(t);try{let e=this.motor.biomasql_wasm_rechavear(this.indice,n,t.byteLength);if(e!==P.OK)throw Error(`Bioma SQL: a troca de chave falhou (código ${e})`)}finally{n!==0&&this.motor.biomasql_wasm_liberar(n)}}fechar(){this.fechado||(this.fechado=!0,this.motor.biomasql_wasm_fechar(this.indice),this.motor.biomasql_wasm_liberar(this.celula))}preparar(e,t){if(this.fechado)throw Error(`Bioma SQL: o banco já foi fechado`);let n=this.escreverTexto(e),r;try{r=this.motor.biomasql_wasm_preparar(this.indice,n,this.celula)}finally{this.motor.biomasql_wasm_liberar(n)}if(r<0&&this.lancar(e),this.lerCelula()!==0)throw this.motor.biomasql_wasm_finalizar(r),Error(`Bioma SQL: o SQL traz mais de um comando; use executarRoteiro\n  SQL: ${e}`);try{this.ligar(r,t)}catch(e){throw this.motor.biomasql_wasm_finalizar(r),e}return r}ligar(e,t){if(t!==void 0){if(Array.isArray(t))for(let n=0;n<t.length;n++)this.ligarEm(e,n+1,t[n]);else for(let[n,r]of Object.entries(t)){let t=/^[:@$]/.test(n)?n:`:${n}`,i=this.escreverTexto(t),a;try{a=this.motor.biomasql_wasm_indice_parametro(e,i)}finally{this.motor.biomasql_wasm_liberar(i)}if(a===0)throw Error(`Bioma SQL: o SQL não declara o parâmetro ${t}`);this.ligarEm(e,a,r)}}}ligarEm(e,t,n){if(n===null){this.motor.biomasql_wasm_ligar_nulo(e,t);return}if(typeof n==`bigint`){this.motor.biomasql_wasm_ligar_inteiro(e,t,n);return}if(typeof n==`number`){Number.isInteger(n)?this.motor.biomasql_wasm_ligar_inteiro(e,t,BigInt(n)):this.motor.biomasql_wasm_ligar_real(e,t,n);return}if(n instanceof Uint8Array){let r=this.escreverBytes(n);try{this.motor.biomasql_wasm_ligar_blob(e,t,r,n.byteLength)}finally{this.motor.biomasql_wasm_liberar(r)}return}let r=new TextEncoder().encode(n),i=this.motor.biomasql_wasm_alocar(r.length+1);if(i===0)throw Error(`Bioma SQL: o motor não alocou o valor a ligar`);try{new Uint8Array(this.motor.memory.buffer).set(r,i),this.motor.biomasql_wasm_ligar_texto(e,t,i,r.length)}finally{this.motor.biomasql_wasm_liberar(i)}}lerColuna(e,t){switch(this.motor.biomasql_wasm_tipo_coluna(e,t)){case F.NULO:return null;case F.INTEIRO:{let n=this.motor.biomasql_wasm_inteiro(e,t);return n>=-9007199254740991n&&n<=9007199254740991n?Number(n):n}case F.REAL:return this.motor.biomasql_wasm_real(e,t);case F.BLOB:{let n=this.motor.biomasql_wasm_blob(e,t),r=this.motor.biomasql_wasm_bytes(e,t);return n===0||r===0?/* @__PURE__ */ new Uint8Array:new Uint8Array(this.motor.memory.buffer,n,r).slice()}default:{let n=this.motor.biomasql_wasm_texto(e,t),r=this.motor.biomasql_wasm_bytes(e,t);return new TextDecoder().decode(new Uint8Array(this.motor.memory.buffer,n,r).slice())}}}aoRastro(e,t){let n=this.ouvinteDoRastro;if(n!==null)try{n({sql:this.lerTexto(e),ms:Number(t)/1e6})}catch(e){this.guardarFalha(e)}}aoMudar(e,t,n,r,i){let a=this.ouvinteDaMudanca;if(a!==null)try{let o=ge[e];if(o===void 0)return;a({operacao:o,esquema:this.lerTexto(t),tabela:this.lerTexto(n),chaveAntiga:o===`INSERT`?null:r,chaveNova:o===`DELETE`?null:i,antiga:o===`INSERT`?null:this.linhaPre(1),nova:o===`DELETE`?null:this.linhaPre(0)})}catch(e){this.guardarFalha(e)}}aoProgredir(){let e=this.decidir;if(e===null)return 0;try{return e()?0:(this.interrompido=!0,1)}catch(e){return this.guardarFalha(e),1}}linhaPre(e){let t=this.motor.biomasql_wasm_pre_contagem(this.indice),n=[];for(let r=0;r<t;r++)n.push(this.lerValorPre(r,e));return n}lerValorPre(e,t){switch(this.motor.biomasql_wasm_pre_tipo(this.indice,e,t)){case F.NULO:return null;case F.INTEIRO:{let n=this.motor.biomasql_wasm_pre_inteiro(this.indice,e,t);return n>=-9007199254740991n&&n<=9007199254740991n?Number(n):n}case F.REAL:return this.motor.biomasql_wasm_pre_real(this.indice,e,t);case F.BLOB:{let n=this.motor.biomasql_wasm_pre_blob(this.indice,e,t),r=this.motor.biomasql_wasm_pre_bytes(this.indice,e,t);return n===0||r===0?/* @__PURE__ */ new Uint8Array:new Uint8Array(this.motor.memory.buffer,n,r).slice()}default:{let n=this.motor.biomasql_wasm_pre_texto(this.indice,e,t),r=this.motor.biomasql_wasm_pre_bytes(this.indice,e,t);return n===0?``:new TextDecoder().decode(new Uint8Array(this.motor.memory.buffer,n,r).slice())}}}guardarFalha(e){this.falhaNoGancho??=e instanceof Error?e:Error(String(e))}conferirGanchos(){let e=this.falhaNoGancho;if(this.falhaNoGancho=null,e!==null)throw e}escreverBytes(e){let t=this.motor.biomasql_wasm_alocar(e.byteLength+1);if(t===0)throw Error(`Bioma SQL: o motor não alocou o bloco pedido`);return new Uint8Array(this.motor.memory.buffer).set(e,t),t}escreverTexto(e){let t=new TextEncoder().encode(e),n=this.motor.biomasql_wasm_alocar(t.length+1),r=new Uint8Array(this.motor.memory.buffer);return r.set(t,n),r[n+t.length]=0,n}lerCelula(){return new Int32Array(this.motor.memory.buffer,this.celula,1)[0]}lerTexto(e){if(e===0)return``;let t=new Uint8Array(this.motor.memory.buffer),n=e;for(;t[n]!==0;)n++;return new TextDecoder().decode(t.subarray(e,n))}lancar(e){if(this.conferirGanchos(),this.interrompido)throw this.interrompido=!1,Error(`Bioma SQL: consulta interrompida pelo vigia\n  SQL: ${e}`);let t=this.lerTexto(this.motor.biomasql_wasm_erro(this.indice));throw Error(`Bioma SQL: ${t}\n  SQL: ${e}`)}},xe=new URL(`biomasql-AnjN2DnP.wasm`,import.meta.url).href,Se=class{constructor(e){S(this,`vaga`,void 0),this.vaga=e}ler(e,t){return this.vaga.punho.read(e,{at:t})}escrever(e,t){return this.vaga.punho.write(e,{at:t})}tamanho(){return this.vaga.punho.getSize()}truncar(e){this.vaga.punho.truncate(e)}sincronizar(){this.vaga.punho.flush()}fechar(){}},I=class extends Error{constructor(...e){super(...e),S(this,`name`,`OpfsSemPunhoSincrono`)}},Ce=class e{constructor(e,t){S(this,`vagas`,void 0),S(this,`caminhoDoBanco`,void 0),S(this,`pastas`,/* @__PURE__ */ new Set([`/`,`/.`])),this.vagas=e,this.caminhoDoBanco=t}static async preparar(t){let n=await(await navigator.storage.getDirectory()).getDirectoryHandle(t.pasta,{create:!0}),r=/* @__PURE__ */ new Map;for(let e of[``,`-journal`,`-wal`]){let i=`${t.banco}${e}`,a=await n.getFileHandle(i,{create:!0});if(typeof a.createSyncAccessHandle!=`function`){for(let e of r.values())e.punho.close();throw new I(`OPFS: este navegador não tem o punho síncrono.`)}let o=await a.createSyncAccessHandle(),s=o.getSize();if(typeof s!=`number`){for(let e of r.values())e.punho.close();throw o.close(),new I(`OPFS: o punho síncrono deste navegador não é síncrono.`)}r.set(`/${i}`,{punho:o,existe:e===``&&s>0})}return new e(r,`/${t.banco}`)}abrir(e,t){let n=this.vagas.get(e);return n===void 0||t.exclusivo&&n.existe||!n.existe&&!t.criar?null:(t.truncar&&n.punho.truncate(0),n.existe=!0,new Se(n))}existe(e){return this.vagas.get(e)?.existe??this.pastas.has(e)}ehPasta(e){return this.pastas.has(e)}tamanhoDe(e){let t=this.vagas.get(e);return t?.existe?t.punho.getSize():null}apagar(e){let t=this.vagas.get(e);return t===void 0||!t.existe?!1:(t.punho.truncate(0),t.punho.flush(),t.existe=!1,!0)}criarPasta(e){return!this.pastas.has(e)&&(this.pastas.add(e),!0)}apagarPasta(e){return this.pastas.delete(e)}encerrar(){for(let e of this.vagas.values())e.punho.close();this.vagas.clear()}};let L;function R(){L??=new Promise((e,t)=>{let n=indexedDB.open(`org_fallback`,1);n.onupgradeneeded=()=>n.result.createObjectStore(`kv`),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??/* @__PURE__ */ Error(`IndexedDB não abriu`))});let e=L;return e.catch(()=>{L===e&&(L=void 0)}),L}async function we(e){let t=await R();return new Promise((n,r)=>{let i=t.transaction(`kv`,`readonly`).objectStore(`kv`).get(e);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error??/* @__PURE__ */ Error(`leitura do IndexedDB falhou`))})}async function Te(e,t){let n=await R();return new Promise((r,i)=>{let a=n.transaction(`kv`,`readwrite`);a.objectStore(`kv`).put(t,e),a.oncomplete=()=>r(),a.onerror=()=>i(a.error??/* @__PURE__ */ Error(`gravação no IndexedDB falhou`))})}const z=[{versao:1,oQue:`o sexo na pessoa, e o superintendente de grupo deixa de ser cargo: quem dirige é o grupo que diz`,aplicar:e=>{w(e,`org_pessoas`,[[`sexo`,`TEXT NOT NULL DEFAULT '' CHECK (sexo IN ('', 'masculino', 'feminino'))`]]),e.executar(`UPDATE org_pessoas
            SET cargos = (SELECT json_group_array(value) FROM json_each(org_pessoas.cargos)
                           WHERE value <> 'superintendente_grupo')
          WHERE EXISTS (SELECT 1 FROM json_each(org_pessoas.cargos)
                         WHERE value = 'superintendente_grupo')`)}},{versao:2,oQue:`os dias e as horas das duas reuniões na congregação, que a escala lê`,aplicar:e=>{w(e,`org_congregacoes`,[[`dia_meio_de_semana`,`INTEGER CHECK (dia_meio_de_semana BETWEEN 0 AND 6)`],[`hora_meio_de_semana`,`TEXT NOT NULL DEFAULT ''`],[`dia_fim_de_semana`,`INTEGER CHECK (dia_fim_de_semana BETWEEN 0 AND 6)`],[`hora_fim_de_semana`,`TEXT NOT NULL DEFAULT ''`]])}}],Ee=Math.max(0,...z.map(e=>e.versao));function De(e){let t=Number(e.escalar(`PRAGMA user_version`)??0),n=z.filter(e=>e.versao>t);n.length!==0&&e.emTransacao(()=>{for(let t of n)t.aplicar(e);e.executar(`PRAGMA user_version = ${Ee}`)})}const Oe={congregacoes:{tabela:`org_congregacoes`,familia:`privado`},pessoas:{tabela:`org_pessoas`,familia:`privado`,json:[`papeis`,`cargos`]},grupos:{tabela:`org_grupos`,familia:`privado`},grupos_membros:{tabela:`org_grupos_membros`,familia:`privado`},escalas_funcoes:{tabela:`org_escalas_funcoes`,familia:`privado`,json:[`papeis`]},escalas_aptos:{tabela:`org_escalas_aptos`,familia:`privado`},ausencias:{tabela:`org_ausencias`,familia:`privado`},escalas_excecoes:{tabela:`org_escalas_excecoes`,familia:`privado`},escalas:{tabela:`org_escalas`,familia:`privado`},programas:{tabela:`org_programas`,familia:`privado`},programas_partes:{tabela:`org_programas_partes`,familia:`privado`},oradores:{tabela:`org_oradores`,familia:`privado`},reunioes_publicas:{tabela:`org_reunioes_publicas`,familia:`privado`},oradores_enviados:{tabela:`org_oradores_enviados`,familia:`privado`},testemunho_pontos:{tabela:`org_testemunho_pontos`,familia:`privado`},testemunho_turnos:{tabela:`org_testemunho_turnos`,familia:`privado`},testemunho_disponiveis:{tabela:`org_testemunho_disponiveis`,familia:`privado`},testemunho_escala:{tabela:`org_testemunho_escala`,familia:`privado`},territorios:{tabela:`org_territorios`,familia:`privado`},territorios_saidas:{tabela:`org_territorios_saidas`,familia:`privado`},designacoes:{tabela:`org_designacoes`,familia:`privado`},pautas:{tabela:`org_pautas`,familia:`privado`},pautas_itens:{tabela:`org_pautas_itens`,familia:`privado`},perfil:{tabela:`org_perfil`,familia:`privado`},pastas:{tabela:`org_pastas`,familia:`privado`},anotacoes:{tabela:`org_anotacoes`,familia:`privado`},calendario_tipos:{tabela:`org_calendario_tipos`,familia:`privado`},calendario_eventos:{tabela:`org_calendario_eventos`,familia:`privado`}};let B;function V(){if(B===void 0)throw Error(`o repositório ainda não foi montado`);return B}function ke(e){B=new de(e,Oe),B.lerEsquemaAplicado()}function H(){return V().tabelas()}function Ae(e,t,n){let r=b(t,V().colunasDa(t),n);e.executar(r.sql,r.parametros)}function je(e,t,n,r){switch(t.op){case`otimizar`:return n&&(e.executar(`PRAGMA optimize`),e.executar(`PRAGMA incremental_vacuum(64)`)),n;case`todos`:return V().todos(t.store);case`obter`:return V().obter(t.store,t.id);case`contar`:return V().contar(t.store);case`salvar`:{let e=V().salvar(t.store,t.registro);return r(),e}case`salvarLote`:{let e=V().emTransacao(()=>Me(t.itens));return r(),e}case`restaurar`:return Ne(t.stores),r(),null;case`excluir`:return V().excluir(t.store,t.id),r(),null;case`substituirTudo`:return V().substituirTudo(t.store,t.registros),r(),null}}function Me(e){let t=/* @__PURE__ */ new Map;return e.map(e=>{if(e.excluir===!0){let t=Number(e.registro.id);return V().excluir(e.store,t),t}let n={...e.registro};for(let[r,i]of Object.entries(e.referencias??{})){let e=t.get(i);if(e===void 0)throw Error(`o lote cita "${i}" antes de gravá-la`);n[r]=e}let r=V().salvar(e.store,n);return e.chave!==void 0&&t.set(e.chave,r),r})}function Ne(e){let t=V().stores().filter(t=>Array.isArray(e[t]));V().emTransacao(()=>{for(let e of[...t].reverse())V().substituirTudo(e,[]);for(let n of t)V().substituirTudo(n,e[n]??[])})}const U=`org.sqlite`,W=`dump`;let G,K=!1,q=!1,J;function Y(){if(G===void 0)throw Error(`banco ainda não abriu`);return G}function X(e){if(e===void 0||(e.tamanhoDe(e.caminhoDoBanco)??0)===0)return null;let t=e.abrir(e.caminhoDoBanco,{criar:!1,truncar:!1,exclusivo:!1});if(t===null)return null;let n=/* @__PURE__ */ new Uint8Array(16);return t.ler(n,0),n}async function Pe(){let e;try{e=await we(W)}catch{return}if(e===void 0||e.versao!==1)return;let t=new Set(H());Y().emTransacao(()=>{for(let[n,r]of Object.entries(e.tabelas))if(t.has(n))for(let e of r)Ae(Y(),n,e)})}let Z;function Fe(){K||Z!==void 0||(Z=setTimeout(()=>{Z=void 0;let e={};for(let t of H())e[t]=Y().consultar(`SELECT * FROM ${_(t)}`);Te(W,{versao:1,tabelas:e}).catch(e=>{console.warn(`persistência de fallback falhou`,e)})},200))}function Ie(e){return self.isSecureContext?e instanceof DOMException&&e.name===`NoModificationAllowedError`?`instancia-dupla`:e instanceof I?`navegador-antigo`:`indisponivel`:`origem-insegura`}function Le(){let e=Y().escalar(`SELECT count(*) FROM sqlite_master WHERE name = 'sqlite_stat1'`);Number(e??0)===0&&Y().executar(`ANALYZE`)}function Re(){Y().executarRoteiro(ae(`org`).join(`
`)),Y().executar(oe)}async function ze(e){if(e.byteLength!==32)throw Error(`a chave do banco tem ${e.byteLength} bytes, e não 32`);let t;try{t=await Ce.preparar({pasta:`org-opfs`,banco:U}),K=!0}catch(e){J=Ie(e),console.warn(`OPFS indisponível (${J}); Bioma SQL em memória com despejo no IndexedDB.`,e)}let n=C(X(t)),r=t===void 0?void 0:e;G=await ve({modulo:fetch(xe),caminho:t?.caminhoDoBanco??`/${U}`,...t===void 0?{}:{arquivos:t},...r===void 0||n===`em-claro`?{}:{chave:r}}),n===`em-claro`&&r!==void 0&&(console.info(`Kobi Org: cifrando o banco deste aparelho pela primeira vez.`),Y().rechavear(r)),Y().executar(`PRAGMA auto_vacuum = INCREMENTAL`),Y().executarRoteiro(p(`org`).join(`;
`)),De(Y()),ke(Y()),K||await Pe(),Re(),Le(),q=t!==void 0&&C(X(t))===`cifrado`;let i={tipo:`pronto`,versaoSqlite:Y().versao,persistente:K,cifrado:q,...J===void 0?{}:{motivo:J}};self.postMessage(i)}let Q=()=>{};const $=new Promise(e=>{Q=e}).then(ze);self.addEventListener(`message`,e=>{let t=e.data;if(`tipo`in t){Q(t.chave);return}let n=t;$.then(()=>{let e={seq:n.seq,ok:!0,valor:je(Y(),n.operacao,K,Fe)};self.postMessage(e)}).catch(e=>{let t={seq:n.seq,ok:!1,erro:String(e)};self.postMessage(t)})}),$.catch(e=>{let t={tipo:`falha`,erro:String(e)};self.postMessage(t)});