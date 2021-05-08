const express = require('express');
const DriverController = require('../database/controllers/DriverController');
const router = express.Router();


router.get('/', DriverController.index)
router.post('/', DriverController.store)

module.exports = router;
