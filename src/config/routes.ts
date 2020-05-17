import * as express from 'express';
import { PostRoutes } from '@modules/post';

const router: express.Router = express.Router();

router.use('/posts', PostRoutes);

export default router;
