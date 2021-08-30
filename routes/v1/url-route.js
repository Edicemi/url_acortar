const express = require('express');
router = express.Router();
const { urlShort, getUrl } = require('../../controllers/url');

router.post('/short', urlShort);
router.get('/:urlId', getUrl);


module.exports = router;