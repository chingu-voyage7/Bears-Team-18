const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../../config/passport')(passport);
const router = express.Router();
const registerCtrl = require('../controllers/auth_controller').register;
const loginCtrl = require('../controllers/auth_controller').login;

router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

module.exports = router;
