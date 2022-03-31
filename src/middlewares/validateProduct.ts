import { NextFunction, Request, Response } from 'express';
import ProductSchema from '../schemas/productSchema';

export default async (req:Request, _res: Response, next: NextFunction) => {
  try {
    const { body } = req;

    await ProductSchema.validateAsync(body);
    return next();
  } catch (error) {
    return next(error);
  }
};