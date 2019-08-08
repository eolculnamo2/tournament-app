// External Dependencies
import dotenv from 'dotenv';
import express, { Application } from 'express';
import compression from 'compression';
import mongoose from 'mongoose';

// Internal Dependencies
import { PageController } from './contollers';
import Authentication from './services/passport';

dotenv.config();
const app: Application = express();

app.use(compression());
app.use('/', PageController);
app.use('/authenticate', Authentication);

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });
} else {
  throw Error('process.env.MONGO_URL is undefined!');
}

mongoose.connection
  .once('open', () => {
    console.log('Connected to Mongo via Mongoose');
  })
  .on('error', err => {
    console.log('Connection Error: ', err);
  });

app.listen(8080, () => console.log('ON'));
