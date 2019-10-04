import {IAuthor} from './author.interface';
import {ICommentList} from './comment-list.interface';

export interface IComment {
  id: string;
  createdTime: string;
  author: IAuthor;
  body: string;
  images: string[];
  comments?: ICommentList;
}
