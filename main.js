const express = require('express');
const createSample = require('./js/createSample');
const csvToArray = require('./js/cvcToArray');

const csvFilePath = './csv/37KAGAWA.CSV';

const app = express();
app.use(express.json());

app.listen(8080, () => {
  console.log('サーバー起動中');
});

app.get('/', (req, res) => {
  console.log('POSTリクエストを受け取りました');
  const array = csvToArray.csvToArray(csvFilePath);
  const address = createSample.createSample(array, req.body.postcode);
  res.send(address)
  res.end();
});
