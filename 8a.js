const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log('App is running');
});
