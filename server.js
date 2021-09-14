require('./lib/db');
require('dotenv').config();
const express = require('express');
logger = require('morgan');
const app = express();
const ShortURL = require('./models/url-model');
const urlRouter = require('./routes/v1/url-route');
const getUrl = require('./routes/v1/get-url');

//middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set view engine
app.set('view engine', 'ejs');



//api routes
app.use('/v1/url', urlRouter);
app.use('', getUrl);

//home route
app.get('/', async(req, res) => {
    const allData = await ShortURL.find({});
    console.log('Request Sent');
    console.log(allData);
    res.render('index', { shortUrl: allData });
});

app.get('*', (req, res) => {
    res.json({
        message: 'URL is not found or broken'
    })
});

//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });