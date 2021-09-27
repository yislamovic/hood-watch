const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('/home', (req, res) => {
  res.json({ username: 'Flavio' })
})

app.listen(3000)