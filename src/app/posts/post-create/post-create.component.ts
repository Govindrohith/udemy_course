import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';



  constructor(private postsService:PostsService) {

  }
  onAddPost(form:NgForm) {
    if(form.invalid){
      return;
    }
  this.postsService.addPost( form.value.title,  form.value.content);
  }

  ngOnInit(): void {}
}
