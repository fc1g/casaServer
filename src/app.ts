import uploadRoutes from './routes/uploadRoutes';
import vicinityRoutes from './routes/vicinityPlaceRoutes';
import bookedDateRoutes from './routes/bookedDateRoutes';

import config from './utils/config';

import express, { Application, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';

const app: Application = express();

if (process.env.NODE_ENV === config.DEV) app.use(morgan('dev'));

app.use(json());
app.use(
  cors({
    origin: '*',
  }),
);
app.use(helmet());

app.get('/', (_, res) => res.send('Hello! Welcome to our backend server.'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v1/uploads', uploadRoutes);
app.use('/api/v1/vicinity/', vicinityRoutes);
app.use('/api/v1/bookedDates/', bookedDateRoutes);

export default app;
