import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { PostsModule } from '../posts/posts.module.js';

@Module({
  imports: [PostsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
