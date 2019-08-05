// External Dependencies
import dotenv from 'dotenv';
import express, { Application } from 'express';
import compression from 'compression';

// Internal Dependencies
import { PageController } from './contollers';

dotenv.config();
const app: Application = express();

app.use(compression());
app.use('/', PageController);

app.listen(8080, () => console.log('ON'));
