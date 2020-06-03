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

console.log(`postgresql://${PGUSER}:${PGPASSWORD}${PGHOST}:${PGPORT}/${PGDATABASE}`);

module.exports = {
  client: 'pg',
  connection: `postgresql://${PGUSER}:${PGPASSWORD}${PGHOST}:${PGPORT}/${PGDATABASE}`,
  migrations: {
    directory: path.resolve(__dirname, 'src/database/migrations'),
  },
};
