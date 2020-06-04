import { Request, Response } from 'express';
import itemDAL from './itemDAL';

export async function index(req: Request, res: Response): Promise<Response> {
  const items = await itemDAL.select();
  const serializedItems = items.map((i) => ({
    title: i.title,
    image: `http://localhost:3333/assets/${i.image}`,
  }));

  return res.json(serializedItems);
}
