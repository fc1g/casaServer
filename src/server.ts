import connectDB from './config/db';
import config from './utils/config';

import app from './app';

const mongoURI: string =
  process.env.DATABASE?.replace('<USERNAME>', process.env.USERNAME!).replace('<PASSWORD>', process.env.PASSWORD!) ||
  process.env.DATABASE_LOCAL!;

connectDB(mongoURI);

const port = process.env.PORT || config.PORT;

app.listen(port, (): void => console.log(`Server is running on port: ${port}`));
