// External Dependencies
import express, { Application } from 'express';

// Internal Dependencies
import { PageController } from './contollers';

const app: Application = express();

app.use('/', PageController);

app.listen(8080, () => console.log('ON'));
