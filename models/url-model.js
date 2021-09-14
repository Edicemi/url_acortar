const mongoose = require('mongoose');


const shortUrlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true
    },
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
<<<<<<< HEAD
}, {
    timestamps: true
=======
    date: {
        type: String,
        default: Date.now
    }
>>>>>>> 64a924dec918f7cd0cd7fc00af3e0dd0b42045b9
})
module.exports = mongoose.model('ShortUrl', shortUrlSchema);