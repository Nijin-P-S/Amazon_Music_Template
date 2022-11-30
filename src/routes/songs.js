const express = require("express");
const router = express.Router();
const SongsController = require('../controllers/songs.controller');
const fieldValidation = require('../validators/songValidation')
// Create routes for user here
router.post('/addSong', [fieldValidation], SongsController.addSong);
router.delete('/removeSong', [fieldValidation], SongsController.removeSong);
router.get('/searchSongByName', [fieldValidation], SongsController.searchSongByName);
router.get('/searchSongByGenre', [fieldValidation], SongsController.searchSongByGenre);
module.exports = router;