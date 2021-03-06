const mongoose = require('mongoose');

const mongoUrl = process.env.NODE_ENV === 'test' 
    ? process.env.DB_URI_TEST
    : process.env.DB_URI;

mongoose.connect(mongoUrl)
    .then(res => {
        console.log('Connected to the database!');
    })
    .catch(err => {
        console.log('Error connecting to the database:', err.message);
    });