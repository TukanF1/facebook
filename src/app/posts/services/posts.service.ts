import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPostList} from '../../shared/interfaces/post-list.interface';
import {sortByOperator} from '../../shared/helpers/sorter.helper';
import {environment} from '../../../environments/environment';
import {IPost} from '../../shared/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  async getPosts(): Promise<IPostList> {
    const url = environment.postUrl;
    return this.http.get<IPostList>(url)
      .pipe(
        sortByOperator('createdTime')
      )
      .toPromise();
  }

  async getPostById(postId: string): Promise<IPost> {
    const url = environment.postUrl;
    const posts = await this.http.get<IPostList>(url)
      .toPromise();
    return posts.find((post) => {
      return post.id === postId;
    });
  }
}
