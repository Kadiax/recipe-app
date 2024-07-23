const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const recipesRouter = require('./recipes');
app.use('/recipes', recipesRouter);

module.exports = app;
