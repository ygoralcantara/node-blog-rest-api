import { Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  body: string;
  hidden: boolean;
  date: Date;
}
