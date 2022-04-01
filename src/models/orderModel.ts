import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/IOrder';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT Orders.id as id, 
      Orders.userId as userId, 
      Products.id as products FROM Trybesmith.Orders
      Inner Join 
      Trybesmith.Products ON Trybesmith.Orders.id = Trybesmith.Products.OrderId;`,
    );
    console.log(result);
    return result as IOrder[];
  }
}