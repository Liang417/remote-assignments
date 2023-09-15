const express = require('express');
const { getData } = require('../controllers/dataController');
const router = express.Router();

// Get data
router.get('/', getData);

module.exports = router;
