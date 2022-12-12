export interface Comment {
  author: string;
  text: string;
  children?: Array<Comment>;
}