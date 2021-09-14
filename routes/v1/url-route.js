const express = require('express');
router = express.Router();
const urlShort = require('../../controllers/url');

router.post('/short', urlShort);


module.exports = router;