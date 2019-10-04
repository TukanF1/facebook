import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';
import {IComment} from '../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    console.log('COMMENT', comment);
    this.comments.push(comment);
  }

  removeComment(comment: IComment) {
    console.log(comment);
    const index = this.comments.indexOf(comment);
    if (index > -1) {
      this.comments.splice(index, 1);
    }
  }

}
