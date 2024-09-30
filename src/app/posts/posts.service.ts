import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: post[] = [];
  private postsUpdated = new Subject<post[]>();

  constructor() {}
getPostUpdateListener(){
  return this.postsUpdated.asObservable();
}
  getPosts() {
    return [...this.posts];
  }
  addPost(title: string, content: string) {
    const post: post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
