import { NextFunction, Request, Response } from 'express';
import userSchema from '../schemas/userSchema';

export default async (req:Request, _res: Response, next: NextFunction) => {
  try {
    const { body } = req;

    await userSchema.validateAsync(body);
    return next();
  } catch (error) {
    return next(error);
  }
};