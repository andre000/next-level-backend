import db from '../../database/connection';

const table = 'items';

export default {
  select():Promise<Item[]> {
    return db<Item>(table).select();
  },

  // update() {},
  // delete() {},
  // insert() {},
};
