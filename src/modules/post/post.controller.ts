import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { httpStatus, jsend } from '@utils';
import { IPost as I, Post } from '.';

export async function createPost(req: Request, res: Response): Promise<void> {
  const result: I.Post = await Post.create(req.body);

  const data = {
    post: {
      _id: result._id,
      title: result.title,
      body: result.body,
      date: result.date,
      hidden: result.hidden,
    },
  };

  res.status(httpStatus.CREATED).json(jsend.success(data));
}

export async function getAllPosts(req: Request, res: Response): Promise<void> {
  const result: I.Post[] = await Post.find({ hidden: false }).select('-__v').exec();

  res.status(httpStatus.OK).json(jsend.success({ posts: result }));
}

export async function getPostById(req: Request, res: Response): Promise<Response> {
  if (!mongoose.isValidObjectId(req.params.postid)) {
    return res.status(httpStatus.BAD_REQUEST).json({
      status: 'fail',
      message: 'postid is invalid',
    });
  }

  const result: I.Post = await Post.findById(req.params.postid).select('-__v').exec();

  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json(jsend.fail());
  }

  return res.status(httpStatus.OK).json(jsend.success({ post: result }));
}

export async function deletePostById(req: Request, res: Response): Promise<Response> {
  if (!mongoose.isValidObjectId(req.params.postid)) {
    return res.status(httpStatus.BAD_REQUEST).json({
      status: 'fail',
      message: 'postid is invalid',
    });
  }

  await Post.findByIdAndDelete(req.params.postid).exec();

  return res.status(httpStatus.OK).json(jsend.success());
}

export async function updatePost(req: Request, res: Response): Promise<Response> {
  const { postid } = req.params;

  if (!mongoose.isValidObjectId(postid)) {
    return res.status(httpStatus.BAD_REQUEST).json({
      status: 'fail',
      message: 'postid is invalid',
    });
  }

  const result: I.Post = await Post.findByIdAndUpdate(postid, req.body, { new: true });

  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json(jsend.fail());
  }

  const data = {
    post: {
      _id: result._id,
      title: result.title,
      body: result.body,
      date: result.date,
      hidden: result.hidden,
    },
  };

  return res.status(httpStatus.OK).json(jsend.success(data));
}
