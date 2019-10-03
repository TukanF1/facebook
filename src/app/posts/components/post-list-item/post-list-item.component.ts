import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post = null;

  constructor() { }

  ngOnInit() {
  }

  getPostUrl() {
    return `/posts/${this.post.id}`;
    // return this.post ? `/posts/${this.post.id}` : '';
  }

}