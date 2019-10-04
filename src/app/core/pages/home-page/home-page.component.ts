import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../../posts/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts = null;
  error = null;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.setupPosts();
  }

  private async setupPosts() {
    try {
      console.log('a');
      this.posts = await this.postsService.getPosts();
      console.log('b');
    } catch (err) {
      console.log('c');
      this.error = err;
      console.log('d');
    }
  }

}
