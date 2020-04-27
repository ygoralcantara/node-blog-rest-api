import * as express from 'express';

import validate from '../../middlewares/validate.middleware';
import { newPost, editPost } from './post.validate';
import { createPost, getAllPosts, getPostById, deletePostById, updatePost } from './post.controller';

const postRoutes: express.Router = express.Router();

// url: POST | GET /api/posts
postRoutes.route('/').post(validate(newPost), createPost).get(getAllPosts);

// url: GET | PUT | DELETE /api/posts/:postId
postRoutes.route('/:postId').get(getPostById).put(validate(editPost), updatePost).delete(deletePostById);

export default postRoutes;
