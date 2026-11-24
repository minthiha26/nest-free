import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service.js';

@Injectable()
// business logic
// function
export class PostsService {
  private posts = [
    { id: 1, title: 'Post1', desc: 'This is post 1' },
    { id: 2, title: 'Post2', desc: 'This is post 2' },
  ];

  getPosts(title?: string) {
    if (title) {
      return this.posts.find((post) =>
        post.title.toLowerCase().includes(title.toLowerCase()),
      );
    }
    return this.posts;
  }

  getPostById(id: number) {
    const post = this.posts.find((post) => post.id === id);
    return post;
  }
}
