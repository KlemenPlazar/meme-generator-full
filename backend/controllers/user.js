const express = require('express');
const userService = require('../services/user')

const userController = express.Router();

userController.get('/:token', userService.getUser);
userController.get('/:token/getAll', userService.getUserAllData);
userController.post('/login', userService.login);
userController.post('/register', userService.register);

module.exports = userController;