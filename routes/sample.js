const express = require('express');
const router = express.Router();

// Access the controller
const sampleController = require('../controllers/sample_controller');

router.get('/', sampleController.sample);

module.exports = router;