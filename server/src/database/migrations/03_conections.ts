import Knex from 'knex'
//Para saber mais de Migratins: Site do Knex, Migrations API
/**
 * Deploy
 * @param knex 
 */
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable;
  })
}


/**
 * Rollback
 * @param knex 
 */
export async function down(knex: Knex) {
  knex.schema.dropTable('connections');
}