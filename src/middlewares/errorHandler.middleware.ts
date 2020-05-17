import { Request, Response, NextFunction } from 'express';
import { httpStatus, AppError } from '@utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): Response => {
  if (err.status === httpStatus.NOT_FOUND) {
    return res.status(httpStatus.NOT_FOUND).json({
      status: 'fail',
      message: err.message,
      data: null,
    });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: process.env.APP_ENVIROMENT === 'dev' ? err.message : 'Oops! Something went wrong',
  });
};

export default errorHandler;
