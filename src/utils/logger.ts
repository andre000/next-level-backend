import * as winston from 'winston';

const isDev: boolean = process.env.NODE_ENV === 'development';

const consoleTransports = [
  new winston.transports.Console({
    level: 'debug',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.timestamp(),
    ),
  }),
];

const fileTransports = [
  new winston.transports.File({
    filename: 'log/error.log',
    level: 'error',
    format: winston.format.combine(
      winston.format.simple(),
      winston.format.timestamp(),
    ),
  }),
];

const logger: winston.Logger = winston.createLogger({
  level: isDev ? 'debug' : 'error',
  format: winston.format.simple(),
  transports: isDev ? consoleTransports : fileTransports,
});

export default logger;