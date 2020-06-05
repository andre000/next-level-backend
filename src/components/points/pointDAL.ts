import db from '~/database/connection';
import { logger } from '~/utils';
import simpleQueryBuilder from '~/utils/simpleQueryBuilder';

const table = 'points';

export default {
  async selectByID(id: number): Promise<Point> {
    const points = await db<Point>(table)
      .select('*')
      .where('id', id)
      .first();

    const items = await db<Item>('items')
      .select('items.*')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', points.id);

    return { ...points, items };
  },

  async selectWithQuery(query: Record<string, unknown>): Promise<Point[]> {
    const points = await db<Point>(table)
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .select('points.*')
      .where((builder) => {
        simpleQueryBuilder(query, builder);
        return builder;
      })
      .distinct();

    return points;
  },

  async insertOne(point: Point): Promise<Point|ComponentErrorMessage> {
    const { items, ...columns }: Point = point;
    const trx = await db.transaction();

    try {
      const insert = await trx<Point>(table)
        .insert(columns)
        .returning('*');

      const relationship: PointItems[] = items.map((i) => ({ point_id: insert[0].id, item_id: i }));
      await trx<PointItems>('point_items').insert(relationship);
      await trx.commit();
      return insert[0];
    } catch (err) {
      trx.rollback();
      logger.error(err.message, { date: new Date(), component: 'point', action: 'savePoint' });
      return { status: err.level || 'ERROR', message: err.message };
    }
  },
};
