import { Request, Response } from 'express';
import itemDAL from './itemDAL';

export async function index(req: Request, res: Response): Promise<Response> {
  const items = await itemDAL.select();
  const serializedItems = items.map((i) => ({
    id: i.id,
    title: i.title,
    image: `http://192.168.0.105:3333/assets/${i.image}`,
  }));

  return res.json(serializedItems);
}
