import { Router } from 'express';
import { index } from './itemController';

const routes = Router();

routes.get('/items', index);

export default routes;
