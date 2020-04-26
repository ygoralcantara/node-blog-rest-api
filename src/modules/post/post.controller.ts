import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { PostInterface } from './post.interface';
import post from './post.model';
import httpStatus from '../../utils/httpStatus';

export async function createPost(req: Request, res: Response): Promise<void> {
  const result: PostInterface = await post.create(req.body);

  res.status(httpStatus.CREATED).json({
    status: 'success',
    data: {
      post: {
        _id: result._id,
        title: result.title,
        body: result.body,
        date: result.date,
        hidden: result.hidden,
      },
    },
  });
}

export async function getAllPosts(req: Request, res: Response): Promise<void> {
  const result: PostInterface[] = await post.find({ hidden: false }).select('-__v').exec();

  res.status(httpStatus.OK).json({
    status: 'success',
    data: {
      posts: result,
    },
  });
}

export async function getPostById(req: Request, res: Response): Promise<void | Response> {
  if (!mongoose.isValidObjectId(req.params.postId)) {
    return res.status(httpStatus.BAD_REQUEST).json({
      status: 'fail',
      message: 'postId invalid',
    });
  }

  const result: PostInterface = await post.findById(req.params.postId).select('-__v').exec();

  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json({
      status: 'fail',
      data: null,
    });
  }

  return res.status(httpStatus.OK).json({
    status: 'success',
    data: {
      post: result,
    },
  });
}
