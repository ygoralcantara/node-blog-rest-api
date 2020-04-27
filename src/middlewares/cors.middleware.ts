import { Request, Response, NextFunction } from 'express';
import httpStatus from '../utils/httpStatus';

const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.status(httpStatus.OK).json({});
  } else {
    next();
  }
};

export default cors;
