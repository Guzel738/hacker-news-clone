import { Comment } from "./comment";

export interface Story {
  author: string;
  num_comments?: number;
  objectID?: string;
  points: number;
  title: string;
  url: string;
  text?: string;
  children?: Array<Comment>;
}