const express = require('express');
const router = express.Router();

const createdAd = require('../controllers/ads.created')

router.post('/ads', createdAd);

module.exports = router;
