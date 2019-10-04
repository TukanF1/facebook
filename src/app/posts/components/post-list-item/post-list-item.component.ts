import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit, OnChanges {

  @Input() post = null;

  @Output() removePost = new EventEmitter();

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

  onRemoveHandler() {
    this.removePost.emit(this.post);
  }

}
