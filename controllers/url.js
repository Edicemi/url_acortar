const Url = require('../models/url-model');
const shortId = require('shortid');
// const isValidURL = require('../lib/utils');
// const isValidURL = require('url-validation');
require('dotenv').config();

const urlShort = async(req, res) => {
    const { fullUrl } = req.body;
    const baseUrl = process.env.BASE_URL;
    const urlId = shortId.generate()
    console.log(fullUrl)
        // if (await isValidURL(fullUrl)) {
    try {
        let url = await Url.findOne({ fullUrl });
        if (url) {
            res.json(url);
        } else {
            const shortUrl = `${baseUrl}/${urlId}`;
            url = new Url({
                fullUrl,
                shortUrl,
                urlId,
                date: new Date(),
            });
            await url.save();
            res.json(url);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
    // } else {
    //     res.status(400).json('Invalid Original Url');
    // }
};

const getUrl = async(req, res) => {
    try {
        const { urlId } = req.params;
        const url = await Url.findOne({ urlId });
        if (url) {
            url.clicks++;
            url.save();
            return res.redirect(url.fullUrl);
        } else res.status(404).json('Not Found');
    } catch (err) {
        console.log(err);
        res.status(500).json('Server error z');
    }
}

module.exports = { urlShort, getUrl };