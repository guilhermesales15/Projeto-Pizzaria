import { RemoveOrderService } from "../../services/order/RemoveOrderService";
import { Response, Request, query } from "express";


class RemoveOrderController{
    async handle(req:Request, res: Response){
        const order_id= req.query.order_id as string;

        const removeOrder = new RemoveOrderService();

        const order= await removeOrder.execute({
            order_id
        });

        return res.json(order);
    }

}

export {RemoveOrderController};