import { Router } from 'express';
import { create, show, index } from './pointController';

const routes = Router();

routes.post('/points', create);
routes.get('/points', index);
routes.get('/points/:id', show);

export default routes;
