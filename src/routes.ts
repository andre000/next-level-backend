import { resolve } from 'path';
import express, { Router } from 'express';
import { api as itemsAPI } from './components/items';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

routes.use(itemsAPI);
routes.use('/assets', express.static(resolve(__dirname, '../assets/')));

export default routes;
