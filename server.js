require('./lib/db');
require('dotenv').config();
const express = require('express');
logger = require('morgan');
const app = express();
const ShortUrl = require('./models/url-model');
const urlRouter = require('./routes/v1/url-route');


//api routes
app.use('/v1/url', urlRouter);

//set view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

//home routes
app.get('/', async(req, res) => {
    const allData = await ShortUrl.find()
    res.render('index', { shortUrls: allData })
});

app.get('/:shortid', async(req, res) => {
    // grab the :shortid param
    const shortid = req.params.shortid

    // perform the mongoose call to find the long URL
    const rec = await ShortURL.findOne({ short: shortid })

    // if null, set status to 404 (res.sendStatus(404))
    if (!rec) return res.sendStatus(404)

    // if not null, increment the click count in database
    rec.clicks++
        await rec.save()

    // redirect the user to original link
    res.redirect(rec.full)
})

//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });