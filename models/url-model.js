const mongoose = require('mongoose');


const UrlSchema = new mongoose.Schema({

    urlCode: String, // a string property that will store the unique ID related to each URL
    longUrl: String, // the default URL which we need to shorten
    shortUrl: String, // the actual short URL that will be generated
    date: {
        type: String,
        default: Date.now
    }
});
module.exports = mongoose.model('Url', UrlSchema);