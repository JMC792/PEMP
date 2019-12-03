import { Injectable } from '@angular/core';
import {Post} from './post.model'
import { zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];

  constructor() { }

  getPost () {
    return [...this.posts];
  }

  onAddPost (firstName: String, LastName: String, dateOfBirth: String, address: String, city: String, State: String, zip: bigint, email: String ) {
    const post: Post = {
      firstName: firstName, 
      LastName: LastName ,
      dateOfBirth: dateOfBirth,
      address: address,
      city: city,
      state: State,
      zip: zip,
      email: email
    }
    this.posts.push(post) ;
  }
}
