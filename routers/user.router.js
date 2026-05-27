const router = require('express').Router(); 
const UserController = require('../controller/user.controller');

// Registration API 
router.post('/registration', UserController.register);

// Login API
router.post('/login', UserController.login);


module.exports = router; 