const express = require('express');
const router = express.Router();

// Access the controller
const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

// Export the router
module.exports = router;
