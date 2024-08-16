import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

import uploadRoutes from './routes/uploadRoutes';
import vicinityRoutes from './routes/vicinityPlaceRoutes';
import bookedDateRoutes from './routes/bookedDateRoutes';

import config from './utils/config';

dotenv.config();
const app: Application = express();

if (process.env.NODE_ENV === config.DEV) app.use(morgan('dev'));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
  }),
);
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.get('/', (_, res) => res.send('Hello! Welcome to our backend server.'));

app.use('/uploads', uploadRoutes);
app.use('/api/v1/vicinity/', vicinityRoutes);
app.use('/api/v1/bookedDates/', bookedDateRoutes);

export default app;
