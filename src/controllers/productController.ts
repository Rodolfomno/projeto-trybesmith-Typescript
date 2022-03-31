import { Request, Response } from 'express';
import ProductService from '../service/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAllProducts = async (req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  };

  public createNewProduct = async (req: Request, res: Response) => {
    const product = { name: req.body.name, amount: req.body.amount };
    const newProduct = await this.productService.createNewProduct(product);

    res.status(201).json({ item: newProduct });
  };
}