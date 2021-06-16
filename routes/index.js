const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

// To check if the router is loaded or not
console.log('router loaded');

// Accessing the home-Controller
router.get('/', homeController.home);

// Acessing the user-Controller
router.use('/users', require('./users'));

// Accessing the sample-Controller
router.use('/sample', require('./sample'));

// Exporting the router to be available to other files
module.exports = router;