import { Controller, Get, Param, Query } from '@nestjs/common';
import { PostsService } from './posts.service.js';

// localhost://3000/posts
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // localhost://3000/posts
  @Get()
  getPosts() {
    return this.postsService.getPosts();
  }

  // localhost://3000/posts/1
  //   param
  @Get('post/:id')
  getPostById(@Param('id') id: number) {
    return this.postsService.getPostById(+id);
  }

  // localhost://3000/posts/search?title=post1
  @Get('search')
  filterPost(@Query('title') title: string) {
    return this.postsService.getPosts(title);
  }
}
