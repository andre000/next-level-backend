import { resolve } from 'path';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

routes.use('/assets', express.static(resolve(__dirname, '../assets/')));
export default routes;
