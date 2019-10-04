import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IComment} from '../../../shared/interfaces/comment.interface';
import uuid from 'uuid';
import faker from 'faker';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.css']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    },
    body: null
  } as IComment;

  @Output() addComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(addForm: NgForm) {
    console.log('HALO', this.comment);
    const comment = Object.assign({}, this.comment);
    comment.id = uuid.v4();
    comment.createdTime = new Date().toString();
    comment.author.id = uuid.v4();
    comment.author.name = faker.fake('{{name.firstName}} {{name.lastName}}');
    comment.author.avatarUrl = 'http://placeskull.com/50/50/3d6f36';
    this.addComment.emit(comment);
    addForm.reset();
  }

}
