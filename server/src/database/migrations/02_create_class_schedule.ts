import Knex from 'knex'
//Para saber mais de Migratins: Site do Knex, Migrations API
/**
 * Deploy
 * @param knex 
 */
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedules', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
}


/**
 * Rollback
 * @param knex 
 */
export async function down(knex: Knex) {
  knex.schema.dropTable('class_schedules');
}