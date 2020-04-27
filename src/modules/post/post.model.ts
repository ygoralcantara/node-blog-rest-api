import * as mongoose from 'mongoose';
import { PostInterface } from './post.interface';

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

const post = mongoose.model<PostInterface>('Post', PostSchema);

export default post;
