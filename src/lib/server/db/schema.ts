import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export * from './auth.schema';
import { user } from './auth.schema';

export const task = sqliteTable('task', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});


export const campanha = sqliteTable('campanha',{
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	criadorId: text('criador_id').references(() => user.id),
	nome: text('nome'),
	imagem: text('image_path'),
	descricao: text('description')
})

export const character = sqliteTable('character', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	user_id: text('user_id').references(() => user.id),
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
	basico: text("basico"),
	aparencia: text('aparencia'),
	pontosDeImportancia: text('pontos_de_importancia'),
	futuro: text('futuro'),
	labelValor1Esq: text("label_esq_valor_1"),
	labelValor1Dir: text("label_dir_valor_1"),
	labelValor2Esq: text("label_esq_valor_2"),
	labelValor2Dir: text("label_dir_valor_2"),
	valor1: integer('valor_1').default(50),
	valor2: integer('valor_2').default(50),
})




// Tabelas de Junção
