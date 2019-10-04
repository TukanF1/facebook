import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../../shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.css']
})
export class CommentListItemComponent implements OnInit {

  @Input() comment: IComment = null;

  constructor() { }

  ngOnInit() {
  }

  getCommentAuthorAvatarUrl() {
    if (this.comment && this.comment.author && this.comment.author.avatarUrl) {
      return this.comment.author.avatarUrl;
    }
    return 'http://placeskull.com/50/50/e34f12';
  }

}
