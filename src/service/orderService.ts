import connection from '../models/connection';
import OrderModel from '../models/orderModel';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders() {
    const orders = await this.model.getAllOrders();
    const ordersModified = orders.map((order) => ({ ...order, products: [order.products] }));
    return ordersModified;
  }
}
