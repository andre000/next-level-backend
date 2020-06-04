import * as path from 'path';
import { config } from 'dotenv';

config();

const {
  PGHOST,
  PGUSER,
  PGDATABASE,
  PGPASSWORD,
  PGPORT,
} = process.env;

module.exports = {
  client: 'pg',
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src/database/migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src/database/seeds'),
  },
};
