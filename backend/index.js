const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require('morgan');
const usersRoutes = require("/routes");
const path = require('path');

const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'build')));
app.use("/routes", usersRoutes(db));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.get('/home', (req, res) => {
  res.json({ username: 'Flavio' })
})

app.listen(3000)