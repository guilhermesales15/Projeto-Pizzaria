import { Router,Request, Response } from "express";

import {CreateUserController} from './controller/user/CreateUserController';

const router = Router();
//Rota User
router.post('/users',new CreateUserController().handle);

export { router};