import Knex, { SchemaBuilder } from 'knex';

export function up(knex: Knex):SchemaBuilder {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').unsigned().primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export function down(knex: Knex):SchemaBuilder {
  return knex.schema.dropTableIfExists('items');
}
