require('dotenv').config();
const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
const blogRouter = require('./src/controllers/blogs');
require('./src/database/db');

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

module.exports = app;