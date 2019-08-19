const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const route = require('./src/routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('upload', express.static(path.join(__dirname, 'upload')));

app.use('/', route);

mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  user: process.env.MONGODB_ATLAS_USER,
  pass: process.env.MONGODB_ATLAS_PASS,
  dbName: process.env.MONGODB_ATLAS_DBNAME,
}, () => {
  console.log('Connect to MongoDB successful');
});


module.exports = app;
