import { Request, Response } from 'express';
import ProductService from '../service/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAllProducts = async (req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  };
}