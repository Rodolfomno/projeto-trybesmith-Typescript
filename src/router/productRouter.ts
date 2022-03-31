import { Router } from 'express';
import ProductController from '../controllers/productController';
import validateProduct from '../middlewares/validateProduct';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.getAllProducts);

productRouter.post('/', validateProduct, productController.createNewProduct);

export default productRouter;