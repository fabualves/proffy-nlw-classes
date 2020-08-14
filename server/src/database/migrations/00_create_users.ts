import Knex from 'knex'
//Para saber mais de Migratins: Site do Knex, Migrations API
/**
 * Deploy
 * @param knex 
 */
export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  })
}


/**
 * Rollback
 * @param knex 
 */
export async function down(knex: Knex) {
  knex.schema.dropTable('users');
}