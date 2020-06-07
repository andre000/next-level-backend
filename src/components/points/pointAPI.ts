import { Router } from 'express';
import { storage } from '../../utils';
import { create, show, index } from './pointController';

const routes = Router();

routes.post('/points', storage.single('image'), create);
routes.get('/points', index);
routes.get('/points/:id', show);

export default routes;
