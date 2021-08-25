const validUrl = require('valid-url');
const shortid = require('short-id');
const Url = require('../models/url-model');
const Error = require('../lib/error');
const baseUrl = 'http:localhost:1111'

const urlShortner = async(req, res) => {
    const { longUrl } = req.body;
    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        throw Error('Invalid base url', 401)
    }
    // if valid, we create the url code
    const urlCode = shortid.generate()

    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({
                longUrl
            })
            if (url) {
                res.json(url)
            } else {
                const shortUrl = baseUrl + '/' + urlCode
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        } catch (error) {
            console.log(error)
            return res.status(error.code).json({
                message: error.message,
                code: error.code,
            })
        }
    } else {
        throw Error('Invalid long url', 401)
    }
}

module.exports = urlShortner;