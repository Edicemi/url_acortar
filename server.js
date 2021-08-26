require('./lib/db');
require('dotenv').config();
const express = require('express');
logger = require('morgan');
const app = express();
const urlRouter = require('./routes/v1/url-route');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//api routes
app.use('/v1/url', urlRouter);


//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });