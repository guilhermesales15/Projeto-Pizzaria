import { Router,Request, Response } from "express";
import multer from 'multer';

import {CreateUserController} from './controller/user/CreateUserController';
import { LoginUserController } from "./controller/user/LoginUserController";
import {DetailUserController} from "./controller/user/DetailUserController";
import { Authenticated } from "./middlewares/authenticated";
import {CreateCategoryController} from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { CreateProductController } from "./controller/products/CreateProductController";
import uploadConfig from './config/Multer';
import { ListByCategoryController } from "./controller/products/ListByCategoryController";


const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));
//Rota User
router.post('/users',new CreateUserController().handle);

router.post('/session', new LoginUserController().handle);

router.get('/detail',Authenticated, new DetailUserController().handle);

//Rota Categorias

router.post('/category', Authenticated, new CreateCategoryController().handle);
router.get('/category', Authenticated, new ListCategoryController().handle);


//Rota Produto
router.post('/product', Authenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product',Authenticated, new ListByCategoryController().handle);

export { router};