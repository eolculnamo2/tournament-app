// External Dependencies
import dotenv from 'dotenv';
import express, { Application } from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';

// Internal Dependencies
import {
  PageController,
  JudgesTableController,
  TournamentController,
  PassportController,
} from './contollers';
import PassportService from './services/PassportService';

dotenv.config();
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('app/public'));

app.use(cookieParser(process.env.KEY));
app.use(
  session({
    secret: process.env.KEY as string | string[],
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
      secure: false,
      httpOnly: false,
    },
  })
);

PassportService.setup();
app.use(passport.initialize());
app.use(passport.session());

app.use(compression());
app.use('/', PageController);
app.use('/api', TournamentController);
app.use('/score', JudgesTableController);
app.use('/authenticate', PassportController);

mongoose.set('useCreateIndex', true);
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
