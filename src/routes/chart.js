const express = require("express");
const router = express.Router();
const ChartController = require('../controllers/chart.controller');

// Create routes for chart here
router.get('/getMostPopularSongs', ChartController.getMostPopularSongs);
router.get('/getRecentlyAddedSongs', ChartController.getRecentlyAddedSongs);

module.exports = router;