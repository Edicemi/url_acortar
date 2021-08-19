require('./lib/db');
require('dotenv').config();
const express = require('express');
logger = require('morgan');
const app = express();

//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });