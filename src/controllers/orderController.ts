import { Request, Response } from 'express';
import OrderService from '../service/orderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrders = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    res.status(200).json(orders);
  };
}