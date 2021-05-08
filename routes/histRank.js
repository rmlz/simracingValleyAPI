const express = require('express');
const RankController = require('../database/controllers/RankController');
const router = express.Router();


router.get('/', RankController.index)
router.post('/', RankController.store)

module.exports = router;
