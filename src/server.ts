import express from 'express';
import { logger } from './utils';

const app = express();

app.get('/users', (req, res) => {
  logger.debug('Listagem de Usuário');
  res.json([
    'Teste 1',
    'Teste 2',
    'Teste 3',
    'Teste 4',
    'Teste 5',
    'Teste 6',
  ]);
});

app.listen(process.env.PORT)
  .on('listening', () => {
    logger.info(`Server rodando na porta ${process.env.PORT}`);
    logger.info(`Acesse no endereço: http://localhost:${process.env.PORT}`);
  })
  .on('error', (err) => {
    logger.error(`Erro ao iniciar o servidor. ${err}`);
  });
