const express = require('express');
const { getName } = require('../controllers/myNameController');
const router = express.Router();

router.get('/', getName);

module.exports = router;
