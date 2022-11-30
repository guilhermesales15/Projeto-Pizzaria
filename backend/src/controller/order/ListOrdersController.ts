import { ListOrderService } from "../../services/order/ListOrderService";
import { Request, Response } from "express";

class ListOrdersController{
    	async handle(req: Request, res: Response){
            const listOrder = new ListOrderService();

            const order = await listOrder.execute();

            return res.json(order);
        }
}

export {ListOrdersController};