import { Router,Request, Response } from "express";

import {CreateUserController} from './controller/user/CreateUserController';
import { LoginUserController } from "./controller/user/LoginUserController";
import {DetailUserController} from "./controller/user/DetailUserController";
import { Authenticated } from "./middlewares/authenticated";
import {CreateCategoryController} from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { CreateProductController } from "./controller/products/CreateProductController";

const router = Router();
//Rota User
router.post('/users',new CreateUserController().handle);

router.post('/session', new LoginUserController().handle);

router.get('/detail',Authenticated, new DetailUserController().handle);

//Rota Categorias

router.post('/category', Authenticated, new CreateCategoryController().handle);
router.get('/category', Authenticated, new ListCategoryController().handle);


//Rota Produto
router.post('/product', Authenticated, new CreateProductController().handle);


export { router};