const express = require('express');
const router = express.Router();
const { getActivities } = require('../controllers/recentactivityController');

router.get('/', getActivities);
module.exports = router;