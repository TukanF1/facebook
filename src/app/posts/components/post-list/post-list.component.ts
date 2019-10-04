import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IPost} from '../../../shared/interfaces/post.interface';
import {IPostList} from '../../../shared/interfaces/post-list.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: IPostList = null;

  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() {
  }

  ngOnInit() {
  }

  addPost(post) {
    this.posts.unshift(post);
  }

  removePostWithConfirmation(post: IPost) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  removePostWithCloseConfirmation() {
    this.removePost();
    this.dialog.hide();
  }

  private removePost() {
    const index = this.posts.indexOf(this.dialog.__postToRemove);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }

}
