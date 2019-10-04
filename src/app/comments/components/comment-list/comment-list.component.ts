import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';
import {IComment} from '../../../shared/interfaces/comment.interface';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments: ICommentList = null;

  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    console.log('COMMENT', comment);
    this.comments.push(comment);
  }

  removeCommentWithConfirmation(comment: IComment) {
    this.dialog.show();
    this.dialog.__commentToRemove = comment;
  }

  removeCommentWithCloseConfirmation() {
    this.removeComment();
    this.dialog.hide();
  }

  private removeComment() {
    const index = this.comments.indexOf(this.dialog.__commentToRemove);
    if (index > -1) {
      this.comments.splice(index, 1);
    }
  }

}
