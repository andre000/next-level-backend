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
  const { query } = req;
  const selectedPoints = await pointDAL.selectWithQuery(query);

  return res.json(selectedPoints);
}
