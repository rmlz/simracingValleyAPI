const express = require('express');
const RaceResultController = require('../database/controllers/RaceResultsController');
const router = express.Router();


router.get('/', RaceResultController.index)
router.post('/', RaceResultController.store)

module.exports = router;
