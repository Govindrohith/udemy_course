import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit,OnDestroy {
  // posts=[
  //   {title:"first post" ,content:"i am from first post" },
  //   {title:"second post" ,content:"i am from second post" },
  //   {title:"third post" ,content:"i am from third post" }
  // ]
  posts: post[] = [];
  private postsSub : Subscription;
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSub =this.postsService.getPostUpdateListener().subscribe((posts:post[])=>{
      this.posts=posts;
    })
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe()

  }

}
