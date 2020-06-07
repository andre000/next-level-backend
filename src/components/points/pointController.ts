import { Request, Response } from 'express';
import pointDAL from './pointDAL';

export async function create(req: Request, res: Response): Promise<Response> {
  const points: Point = {
    ...req.body,
    image: req.file.filename,
    items: req.body.items
      .split(',')
      .map((i) => Number(i.trim())),
  };

  const insertedPoint = await pointDAL.insertOne(points);
  return res.json(insertedPoint);
}

export async function show(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const selectedPoint = await pointDAL.selectByID(Number(id));

  if (!selectedPoint) {
    return res
      .status(404)
      .json(<ComponentErrorMessage>{ message: 'Ponto não encontrado!', status: 'ERROR' });
  }

  const serializedPoint = {
    ...selectedPoint,
    image: selectedPoint.image.match(/^http/) ? selectedPoint.image : `http://192.168.0.105:3333/uploads/${selectedPoint.image}`,
  };

  return res.json(serializedPoint);
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
    return res
      .status(400)
      .json(<ComponentErrorMessage>{ message: 'Invalid search parameters', status: 'ERROR' });
  }

  const selectedPoints = await pointDAL.selectWithQuery(parsedQuery);
  const serializedPoint = selectedPoints.map((p) => ({
    ...p,
    image: p.image.match(/^http/) ? p.image : `http://192.168.0.105:3333/uploads/${p.image}`,
  }));

  return res.json(serializedPoint);
}
