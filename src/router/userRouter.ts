import { Router } from 'express';
import UserController from '../controllers/userController';
import validateUser from '../middlewares/validateUser';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', validateUser, userController.createUser);

export default userRouter;