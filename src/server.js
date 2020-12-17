import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res, next) {
  console.log('route / called');
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('app is running');
});