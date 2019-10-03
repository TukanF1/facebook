import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {IPost} from '../../../shared/interfaces/post.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.css']
})
export class PostProfilePageComponent implements OnInit {

  post: IPost = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.setupPost(this.route.snapshot.params.postId);
  }

  private async setupPost(id) {
    this.post = await this.postsService.getPostById(id);
    if (!this.post) {
      this.router.navigateByUrl('/not_found');
    }
  }

  getPostUrl() {
    return `/posts/${this.post.id}`;
  }

}
