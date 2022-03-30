import express from 'express';
import 'dotenv/config';
import productRouter from './router/productRouter';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use(errorHandler);

export default app;
