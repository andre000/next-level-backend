import { Router } from 'express';
import itemController from './itemController';

const routes = Router();

routes.get('/items', async (req, res) => {
  const items = await itemController.select();
  const serializedItems = items.map((i) => ({
    title: i.title,
    image: `http://localhost:3333/assets/${i.image}`,
  }));

  return res.json(serializedItems);
});

export default routes;
