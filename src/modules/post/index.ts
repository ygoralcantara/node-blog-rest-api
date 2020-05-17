import * as PostValidate from './post.validate';
import * as PostController from './post.controller';

export { default as Post } from './post.model';
export { default as PostRoutes } from './post.routes';

export * as IPost from './post.interface';

export { PostValidate, PostController };
