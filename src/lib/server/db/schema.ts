import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
export * from './auth.schema';
import { user } from './auth.schema';

export const campanha = sqliteTable('campanha', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	criadorId: text('criador_id').references(() => user.id), // 1 -> N com User
	nome: text('nome'),
	descricao: text('description')
});

export const mapa = sqliteTable('mapa', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	campanhaId: text('campanha_id')
		.references(() => campanha.id)
		.notNull(), // 1 - > N com Campanha
	nome: text('nome').notNull(),
	imagem: text('imagem').notNull()
});
export const lugaresMapa = sqliteTable('lugares_mapa', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	mapaId: text('mapa_id')
		.references(() => mapa.id)
		.notNull(), // 1 - > N com Mapa
	nome: text('nome').notNull(),
	posX: integer('pos_x').notNull(),
	posY: integer('pos_y').notNull()
});

export const imagensCampanha = sqliteTable('imagens_campanha', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	nome: text('nome').notNull(),
	image: text('image').notNull(),
	campanhaId: text('campanha_id')
		.references(() => campanha.id)
		.notNull() // 1 - > N com Campanha
});

export const origem = sqliteTable('origem', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	nome: text('nome').notNull(),
	descricao: text('descricao')
});
export const habilidade = sqliteTable('habilidade', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	nome: text('nome').notNull(),
	descricao: text('descricao'),
	tipo: text('tipo')
});
export const particula = sqliteTable('particula', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	nome: text('nome').notNull(),
	sigla: text('sigla').notNull(),
	defaultImage: text('default_image'),
	descricao: text('descricao'),
	tipo: text('tipo')
});
export const item = sqliteTable('item', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	nome: text('nome').notNull(),
	image: text('image'),
	descricao: text('descricao')
});

export const personagem = sqliteTable('personagem', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	user_id: text('user_id').references(() => user.id), // 1 -> N com User
	imagem: text('image_path'),
	nome: text('nome').notNull(),
	anoEscolar: integer('ano_escolar'),
	idade: integer('idade'),
	nivel: integer('nivel').default(1),
	tipo: text('tipo_de_personagem').notNull(),
	corpo: integer('corpo').default(0),
	alma: integer('alma').default(0),
	mente: integer('mente').default(0),
	ferimentosMaximos: integer('limite_de_ferimentos').default(4),
	ferimentosAtuais: integer('ferimentos_atuais').default(0),
	estresseMaximo: integer('limite_de_estresse').default(4),
	estresseAtual: integer('estresse_atual').default(0),
	complexidadeMax: integer('complexidade_maxima').default(0),
	marcoFisico: integer('marco_fisico').default(0),
	marcoEmocional: integer('marco_emocional').default(0),
	marcoMental: integer('marco_mental').default(0),
	basico: text('basico'),
	aparencia: text('aparencia'),
	pontosDeImportancia: text('pontos_de_importancia'),
	futuro: text('futuro'),
	labelValor1Esq: text('label_esq_valor_1'),
	labelValor1Dir: text('label_dir_valor_1'),
	labelValor2Esq: text('label_esq_valor_2'),
	labelValor2Dir: text('label_dir_valor_2'),
	valor1: integer('valor_1').default(50),
	valor2: integer('valor_2').default(50)
});

// Tabelas de Junção

export const personagemHabilidades = sqliteTable(
	'personagem_habilidades',
	{
		personagemId: integer('personagem_id')
			.notNull()
			.references(() => personagem.id),
		habilidadeId: integer('habilidade_id')
			.notNull()
			.references(() => habilidade.id)
	},
	(t) => [primaryKey({ columns: [t.personagemId, t.habilidadeId] })]
);
export const personagemOrigens = sqliteTable(
	'personagem_origem',
	{
		personagemId: integer('personagem_id')
			.notNull()
			.references(() => personagem.id),
		origemId: integer('origem_id')
			.notNull()
			.references(() => origem.id)
	},
	(t) => [primaryKey({ columns: [t.personagemId, t.origemId] })]
);
export const npcCampanhas = sqliteTable(
	'npc_campanhas',
	{
		npcId: integer('personagem_id')
			.notNull()
			.references(() => personagem.id),
		campanhaId: integer('campanha_id')
			.notNull()
			.references(() => campanha.id)
	},
	(t) => [primaryKey({ columns: [t.npcId, t.campanhaId] })]
);
export const userCampanhas = sqliteTable(
	'user_campanhas',
	{
		userId: integer('user_id')
			.notNull()
			.references(() => user.id),
		campanhaId: integer('campanha_id')
			.notNull()
			.references(() => campanha.id)
	},
	(t) => [primaryKey({ columns: [t.userId, t.campanhaId] })]
);
export const personagemParticulas = sqliteTable(
	'personagem_particula',
	{
		personagemId: integer('personagem_id')
			.notNull()
			.references(() => personagem.id),
		particulaId: integer('particula_id')
			.notNull()
			.references(() => particula.id)
	},
	(t) => [primaryKey({ columns: [t.personagemId, t.particulaId] })]
);
export const personagemItens = sqliteTable(
	'personagem_item',
	{
		personagemId: integer('personagem_id')
			.notNull()
			.references(() => personagem.id),
		itemId: integer('item_id')
			.notNull()
			.references(() => item.id)
	},
	(t) => [primaryKey({ columns: [t.personagemId, t.itemId] })]
);
