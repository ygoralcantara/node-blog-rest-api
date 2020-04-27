import * as joi from '@hapi/joi';

import { Request, Response, NextFunction } from 'express';

import httpStatus from '../utils/httpStatus';

const validate = (schema: joi.ObjectSchema) => {
  return function (req: Request, res: Response, next: NextFunction): void | Response {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error === undefined) {
      return next();
    }

    return res.status(httpStatus.BAD_REQUEST).json({
      status: 'fail',
      message: error.message,
      data: error.details,
    });
  };
};

export default validate;
