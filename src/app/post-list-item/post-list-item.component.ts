import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
  }

  add(){
    this.postsService.incrementLove(this.post);    
  }

  substract(){
    this.postsService.decrementLove(this.post);    
  }

  remove(){
   this.postsService.removePost(this.post);
  }

}
