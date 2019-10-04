import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit, OnChanges {

  @Input() post = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.post && change.post.firstChange) {
      this.post.comments = [];
    }
  }

  getPostUrl() {
    return `/posts/${this.post.id}`;
    // return this.post ? `/posts/${this.post.id}` : '';
  }

}
