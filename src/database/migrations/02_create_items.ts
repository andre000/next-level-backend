import Knex from 'knex';

export function up(knex: Knex):void {
  knex.schema.createTable('items', (table) => {
    table.increments('id').unsigned().primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export function down(knex: Knex):void {
  knex.schema.dropTableIfExists('items');
}
