import IProduct from '../interfaces/IProduct';
import connection from '../models/connection';
import ProductModel from '../models/productModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const products = await this.model.getAllProducts();
    return products;
  }
}
