const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(express.json());

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/8b.html');
});

app.post('/formdata', urlencodedParser, (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log('App is running');
});
