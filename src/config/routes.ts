import * as express from 'express';
import postRoutes from '../modules/post/post.routes';

const router: express.Router = express.Router();

router.use('/posts', postRoutes);

export default router;
