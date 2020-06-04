import Knex, { SchemaBuilder } from 'knex';

export function up(knex: Knex):SchemaBuilder {
  return knex.schema.createTable('point_items', (table) => {
    table.increments('id').unsigned().primary();

    table.integer('point_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('points');

    table.integer('item_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('items');
  });
}

export function down(knex: Knex):SchemaBuilder {
  return knex.schema.dropTableIfExists('point_items');
}
