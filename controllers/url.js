const Url = require("../models/url-model");
const shortId = require("shortid");
// const isValidURL = require('../lib/utils');
// const isValidURL = require('url-validation');
require("dotenv").config();

const urlShort = async(req, res) => {
    const { fullUrl } = req.body;
    const baseUrl = process.env.BASE_URL;
    const urlId = shortId.generate();
    console.log(fullUrl);
    // if (await isValidURL(fullUrl)) {
    try {
        let url = await Url.findOne({ fullUrl });
        if (!url) {
            res.json("Enter a url");
        } else {
            const shortUrl = `${baseUrl}/${urlId}`;
            url = new Url({
                fullUrl,
                shortUrl,
                urlId,
                date: new Date(),
            });
            await url.save();
            console.log(url)
            return res.render("index", {
                shortUrl: url,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
    // } else {
    //     res.status(400).json('Invalid Original Url');
    // }
};



module.exports = urlShort;