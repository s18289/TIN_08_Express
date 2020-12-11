const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(express.json());

const pug = require('pug');
app.set('view engine', 'pug');

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/8b.html');
});

app.post('/formdata', urlencodedParser, (req, res) => {
  res.render(__dirname + '/views/8c.pug', {
    title: '8c',
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
});

app.listen(PORT, () => {
  console.log('App is running');
});
