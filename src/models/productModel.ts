import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';

export default class ProductModel { 
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    return result as IProduct[];
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = result;
    return { id: insertId, ...product };
  }
}