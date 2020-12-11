const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(express.json());

const pug = require('pug');
app.set('view engine', 'pug');

app.post('/jsondata', function (req, res) {
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

// psotman PSOT method
// http://localhost:3000/jsondata

/*
{
    "firstName" : "Test",
    "lastName" : "Testovich",
    "email" : "test123@pjwstk.edu.pl"
}
*/
