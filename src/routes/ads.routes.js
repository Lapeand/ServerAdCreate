const express = require('express');
const router = express.Router();

const createdAd = require('../controllers/ads.created.js')

router.post('/ads', createdAd);

module.exports = router;
