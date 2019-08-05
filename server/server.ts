import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', '/client/index.html'))
);

app.listen(8080, () => console.log('ON'));
