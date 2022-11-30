const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const {parameterValidation} = require("./../validators/UserValidation")
// Create routes for auth here
router.post('/login',[parameterValidation], AuthController.login);
module.exports = router;