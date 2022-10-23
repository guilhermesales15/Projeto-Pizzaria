import { Router,Request, Response } from "express";

import {CreateUserController} from './controller/user/CreateUserController';
import { LoginUserController } from "./controller/user/LoginUserController";

const router = Router();
//Rota User
router.post('/users',new CreateUserController().handle);
router.post('/session', new LoginUserController().handle);

export { router};