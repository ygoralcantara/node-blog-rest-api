import * as express from 'express';

import validate from '../../middlewares/validate.middleware';
import newPost from './post.validate';
import { createPost, getAllPosts, getPostById } from './post.controller';

const postRoutes: express.Router = express.Router();

// url: POST | GET /api/posts
postRoutes.route('/').post(validate(newPost), createPost).get(getAllPosts);

// url: GET /api/posts/:postId
postRoutes.route('/:postId').get(getPostById);

export default postRoutes;
