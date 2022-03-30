import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';

export default function errorHandler(
  err: ValidationError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.log(err);
  if (err.details) {
    const [error] = err.details;
    const { message, type } = error;
    if (type === 'any.required') {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: message });
    }
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error: message });
  }
}