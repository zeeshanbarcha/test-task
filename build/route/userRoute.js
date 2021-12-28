"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.post('/users', userController_1.UserController.createUser);
router.get('/users', userController_1.UserController.getUser);
router.delete('/users', userController_1.UserController.deleteUser);
router.patch('/users', userController_1.UserController.updateUser);
exports.default = router;