import express from 'express';
import 'dotenv/config';
import productRouter from './router/productRouter';
import errorHandler from './middlewares/errorHandler';
import userRouter from './router/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use(errorHandler);

export default app;
