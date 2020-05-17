import { Request, Response, NextFunction } from 'express';
import { AppError, jsend, httpStatus } from '@utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): Response => {
  const message = process.env.APP_ENVIROMENT === 'dev' ? err.message : 'Oops! Something went wrong';

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(jsend.error(message));
};

export default errorHandler;
