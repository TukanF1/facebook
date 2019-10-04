import {Component, Input, OnInit} from '@angular/core';

import fakePosts from '../../../../fakes/fake-posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts = null;

  constructor() {
  }

  ngOnInit() {
  }

  addPost(post) {
    this.posts.unshift(post);
  }

}
