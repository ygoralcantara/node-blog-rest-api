import * as express from 'express';

import { validate } from '@middleware';
import { asyncWrapper } from '@utils';
import { PostController, PostValidate } from '.';

const postRoutes: express.Router = express.Router();

// url: /api/posts
postRoutes
  .post('/', validate(PostValidate.newPost), asyncWrapper(PostController.createPost))
  .get('/', PostController.getAllPosts)
  .get('/:postid', PostController.getPostById)
  .put('/:postid', validate(PostValidate.editPost), PostController.updatePost)
  .delete('/:postid', PostController.deletePostById);

export default postRoutes;
