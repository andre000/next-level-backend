import Knex from 'knex';

export default function simpleQueryBuilder(
  query: Record<string, unknown>,
  builder: Knex.QueryBuilder,
): Knex.QueryBuilder {
  const keys = Object.keys(query);

  keys.map((col) => {
    const value = query[col];

    if (typeof value === 'string') {
      builder.where(col, 'like', `%${value}%`);
    }

    if (Array.isArray(value)) {
      builder.whereIn(col, value);
    }

    return col;
  });

  return builder;
}
