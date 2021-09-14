const express = require('express');
router = express.Router();
const getUrl = require('../../controllers/get');

router.get('/:urlId', getUrl);

module.exports = router;