import { Request, Response, NextFunction } from 'express';

export const asyncWrapper = (fn: Function) => (req: Request, res: Response, next: NextFunction): Promise<any> =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncWrapper;
