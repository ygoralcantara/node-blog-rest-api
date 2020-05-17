import * as mongoose from 'mongoose';

import { IPost } from '.';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
});

const post = mongoose.model<IPost.Post>('Post', PostSchema);

export default post;
