import {Component, OnInit} from '@angular/core';
import {ICommentList} from '../../../shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments = [
    { id: 'kjgh123', body: 'Komentarz prosto z onet.pl' },
    { id: 'aso09d78', body: 'Komentarz prosto z wp.pl' },
  ] as ICommentList;

  constructor() {
  }

  ngOnInit() {
  }

  addComment(comment) {
    console.log('COMMENT', comment);
    this.comments.push(comment);
  }

}
