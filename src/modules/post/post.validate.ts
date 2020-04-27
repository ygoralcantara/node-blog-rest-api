import * as joi from '@hapi/joi';

export const newPost = joi.object({
  title: joi.string().trim().max(100).required(),
  body: joi.string().trim().required(),
  hidden: joi.boolean(),
});

export const editPost = joi.object({
  title: joi.string().trim().max(100),
  body: joi.string().trim(),
  hidden: joi.boolean(),
});
