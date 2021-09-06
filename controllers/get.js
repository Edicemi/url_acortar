const Url = require("../models/url-model");

require("dotenv").config();
const getUrl = async(req, res) => {
    try {
        const { urlId } = req.params;
        // console.
        const url = await Url.findOne({ urlId });
        if (url) {
            url.clicks++;
            url.save();
            return res.redirect(url.fullUrl);
        } else res.status(404).json("Not Found");
    } catch (err) {
        console.log(err);
        res.status(500).json("Server error z");
    }
};

module.exports = getUrl;