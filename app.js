require('dotenv').config();
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./src/models/Blog');
const blogRouter = require('./src/controllers/blogs');
require('./src/database/db');

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})