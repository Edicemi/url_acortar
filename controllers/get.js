const Url = require("../models/url-model");

const getUrl = async(req, res) => {
    try {
        const { urlId } = req.params;
        const url = await Url.findOne({ urlId: urlId });
        if (url) {
            url.clicks++;
            url.save();
            return res.redirect(url.fullUrl);
        } else {
            //you can render a 404 page here
            res.status(404).json({
                message: 'URL is not found or broken'
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
};

module.exports = getUrl;