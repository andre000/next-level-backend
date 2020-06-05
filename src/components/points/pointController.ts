import { Request, Response } from 'express';
import pointDAL from './pointDAL';

export async function create(req: Request, res: Response): Promise<Response> {
  const points: Point = req.body;

  const insertedPoint = await pointDAL.insertOne(points);
  return res.json(insertedPoint);
}

export async function show(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const selectedPoint = await pointDAL.selectByID(Number(id));

  return res.json(selectedPoint);
}

export async function index(req: Request, res: Response): Promise<Response> {
  const { items, uf, city } = req.query;
  const parsedItems = items && `${items}`.split(',').map((i) => `${Number(i)}`);

  const parsedQuery = {
    ...(uf && { uf }),
    ...(city && { city }),
    ...(parsedItems && { item_id: parsedItems }),
  };

  if (Object.keys(parsedQuery).length === 0) {
    return res.status(400).json({ error: 'Invalid search parameters' });
  }

  const selectedPoints = await pointDAL.selectWithQuery(parsedQuery);

  return res.json(selectedPoints);
}
