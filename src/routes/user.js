const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller');
const {parameterValidation} = require('../validators/UserValidation')
// Create routes for user here
router.post("/register",[parameterValidation], UserController.registerUser);

module.exports = router;