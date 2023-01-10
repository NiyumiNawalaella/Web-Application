var express = require('express');

const router = express.Router();
var userController = require('../src/user/userController');

router.route('/user/getAll').get(userController.getDataControllerfn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserController);

module.exports = router;