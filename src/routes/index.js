const express = require('express');
// Import controller
const homepageController = require('../controllers/homepage.controller');

const router = express.Router();

router.route('/')
  .get(homepageController.get);

module.exports = router;
