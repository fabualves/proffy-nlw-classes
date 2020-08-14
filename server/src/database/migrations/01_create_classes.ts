import Knex from 'knex'
//Para saber mais de Migratins: Site do Knex, Migrations API
/**
 * Deploy
 * @param knex 
 */
export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
}


/**
 * Rollback
 * @param knex 
 */
export async function down(knex: Knex) {
  knex.schema.dropTable('classes');
}