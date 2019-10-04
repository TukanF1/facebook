import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPostList} from '../../shared/interfaces/post-list.interface';
import {sortBy, sortByOperator} from '../../shared/helpers/sorter.helper';
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
    // return this.http.get<IPostList>(url)
    //   .pipe(
    //     sortByOperator('createdTime')
    //   )
    //   .toPromise();
    const response = await this.http.get<IPostList>(url).toPromise();
    return sortBy(response, (post: IPost) => new Date(post.createdTime));
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
