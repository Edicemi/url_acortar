const express = require('express');
router = express.Router();
const Url = require('../../controllers/url');

router.post('/shorturl', Url);

module.exports = router;