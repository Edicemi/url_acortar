require('./lib/db');
require('dotenv').config();
const express = require('express');
logger = require('morgan');
const app = express();
const ShortURL = require('./models/url-model');
const urlRouter = require('./routes/v1/url-route');

//middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set view engine
app.set('view engine', 'ejs');



//api routes
app.use('/', urlRouter);

//home route
app.get('/', async(req, res) => {
    console.log('Request Sent')
    const allData = await ShortURL.find()
    res.render('index', { shortUrl: false })
});

//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });