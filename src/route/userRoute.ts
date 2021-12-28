import { Router } from "express";
import { UserController } from "../controller/userController";
const router = Router();
router.post('/users',UserController.createUser);
router.get('/users',UserController.getUser);
router.delete('/users',UserController.deleteUser);
router.patch('/users',UserController.updateUser);
export default router;