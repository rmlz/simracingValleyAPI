const express = require('express');
const RaceRecordController = require('../database/controllers/RaceRecordsController');
const router = express.Router();


router.get('/', RaceRecordController.index)
router.post('/', RaceRecordController.store)

module.exports = router;
