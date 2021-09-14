const Url = require("../models/url-model");
const shortId = require("shortid");
// const isValidURL = require('../lib/utils');
// const isValidURL = require('url-validation');

const urlShort = async(req, res) => {
    const { fullUrl } = req.body;
    const baseUrl = process.env.BASE_URL;
    const urlId = shortId.generate();
    // if (await isValidURL(fullUrl)) {
    try {
        let url = await Url.findOne({ fullUrl: fullUrl });
        if (url) {
            res.json({
                success: false,
                message: `URL already exist and has been shortened to ${url.shortUrl}`
            });
        } else {
            const shortUrl = `${baseUrl}/${urlId}`;
            await Url.create({
                fullUrl: fullUrl,
                shortUrl: shortUrl,
                urlId: urlId,
            }).then(data => {
                return res.status(200).json({
                    success: true,
                    data: data
                })
            }).catch(e => {
                return res.json({
                    success: false,
                    message: e
                })
            }) 
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