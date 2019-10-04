import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from '../../../shared/interfaces/comment.interface';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: IComment = null;

  @Output() removeComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getCommentAuthorAvatarUrl() {
    if (this.comment && this.comment.author && this.comment.author.avatarUrl) {
      return this.comment.author.avatarUrl;
    }
    return 'http://placeskull.com/50/50/e34f12';
  }

  onRemoveHandler() {
    this.removeComment.emit(this.comment);
  }

}
