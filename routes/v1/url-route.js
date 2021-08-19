const express = require('express');
router = express.Router();
const Url = require('../../controllers/url');

router.post('/url', Url);

module.exports = router;