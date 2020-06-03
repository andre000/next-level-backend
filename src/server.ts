import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { logger } from './utils';

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT)
  .on('listening', () => {
    logger.info(`Server rodando na porta ${process.env.PORT}`);
    logger.info(`Acesse no endereço: http://localhost:${process.env.PORT}`);
  })
  .on('error', (err) => {
    logger.error(`Erro ao iniciar o servidor. ${err}`);
  });
