import { resolve } from 'path';
import express, { Router } from 'express';
import { api as itemsAPI } from './components/items';
import { api as pointAPI } from './components/points';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

routes.use(itemsAPI);
routes.use(pointAPI);
routes.use('/assets', express.static(resolve(__dirname, '../assets/')));

export default routes;
