import * as joi from '@hapi/joi';

import { Request, Response, NextFunction } from 'express';

import { jsend, httpStatus } from 'utils';

const validate = (schema: joi.ObjectSchema) => {
  return function (req: Request, res: Response, next: NextFunction): void | Response {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error === undefined) {
      return next();
    }

    const details = {};

    error.details.forEach((item) => {
      details[item.path[0]] = item.message.replace(/"/g, '');
    });

    return res.status(httpStatus.BAD_REQUEST).json(jsend.fail(details));
  };
};

export default validate;
