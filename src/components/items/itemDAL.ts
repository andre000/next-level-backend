import db from '../../database/connection';

const table = 'items';

export default {
  select():Promise<Item[]> {
    return db<Item>(table).select();
  },

  insert(items: Item[]): Promise<Item[]> {
    return db<Item>(table)
      .insert(items)
      .returning('*');
  },
};
