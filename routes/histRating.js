const express = require('express');
const RatingController = require('../database/controllers/RatingController');
const router = express.Router();


router.get('/', RatingController.index)
router.post('/', RatingController.store)

module.exports = router;
