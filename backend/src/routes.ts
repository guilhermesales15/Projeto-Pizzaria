import { Router,Request, Response } from "express";

import {CreateUserController} from './controller/user/CreateUserController';
import { LoginUserController } from "./controller/user/LoginUserController";
import {DetailUserController} from "./controller/user/DetailUserController";
import { Authenticated } from "./middlewares/authenticated";

const router = Router();
//Rota User
router.post('/users',new CreateUserController().handle);
router.post('/session', new LoginUserController().handle);

router.get('/detail',Authenticated, new DetailUserController().handle);


export { router};