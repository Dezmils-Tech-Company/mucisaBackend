const express = require('express');
const router = express.Router();
const { getActivities } = require('../controllers/recentActivityController');

router.get('/', getActivities);
module.exports = router;