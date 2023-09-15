const express = require('express');
const { trackName } = require('../controllers/trackName');
const router = express.Router();

router.get('/', trackName);

module.exports = router;
