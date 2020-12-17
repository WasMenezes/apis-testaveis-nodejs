import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  res.send('Hello World!');
});

export default app;