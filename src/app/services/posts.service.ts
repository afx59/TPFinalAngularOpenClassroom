import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
   }
  
  getPosts(){
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val()? data.val():[];
        this.emitPosts();
      }
    );
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  createNewPost(post: Post){
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();  
  }

  removePost(post: Post){
    this.posts.splice(this.posts.findIndex(
      postE1 => postE1 === post
    ),1);
    this.savePosts();
    this.emitPosts();
  }

  incrementLove(post: Post){
    post.loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  decrementLove(post: Post){
    post.loveIts--;
    this.savePosts();
    this.emitPosts();
  }

  emitPosts(){
    this.postsSubject.next(this.posts)
  }
}