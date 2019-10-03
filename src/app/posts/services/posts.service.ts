import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPostList} from '../../shared/interfaces/post-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  async getPosts() {
    const url = 'assets/fake-posts.json';
    const response = await this.http.get<IPostList>(url).toPromise();
    // const copyResponse = response.slice();
    const copyResponse = [...response];
    return copyResponse.sort((a, b) => {
      return new Date(a.createdTime) > new Date(b.createdTime) ? -1 : 1;
    });
  }
}
