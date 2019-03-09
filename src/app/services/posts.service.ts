import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  createNewPost(post: Post){
    this.posts.push(post);
    this.emitPosts();  
  }

  removePost(post: Post){
    this.posts.splice(this.posts.findIndex(
      postE1 => postE1 === post
    ),1);
  }

  incrementLove(post: Post){
    post.loveIts++;
    this.emitPosts();
  }

  decrementLove(post: Post){
    post.loveIts--;
    this.emitPosts();
  }

  emitPosts(){
    this.postsSubject.next(this.posts)
  }
}