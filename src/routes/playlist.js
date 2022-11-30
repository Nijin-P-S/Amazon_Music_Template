const express = require("express");
const router = express.Router();
const PlaylistController = require('../controllers/playlist.controller');
const jwtTokenValidation = require('./../validators/authValidator');
// Create playlist for auth here
router.post('/create', [jwtTokenValidation], PlaylistController.createPlaylist);
router.delete('/delete', [jwtTokenValidation], PlaylistController.deletePlaylist);
module.exports = router;