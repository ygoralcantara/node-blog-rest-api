import * as joi from '@hapi/joi';

const newPost = joi.object({
  title: joi.string().trim().max(100).required(),
  body: joi.string().trim().required(),
  hidden: joi.boolean(),
});

export default newPost;
