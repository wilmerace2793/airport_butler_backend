import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: process.env.DB_TYPE as 'mssql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  extra: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    enableArithAbort: process.env.DB_ARITH_ABORT === 'true',
    requestTimeout: Number(process.env.DB_REQUEST_TIMEOUT),
  },
}));