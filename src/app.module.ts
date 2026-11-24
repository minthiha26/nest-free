import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PostsModule } from './posts/posts.module.js';
import { UsersModule } from './users/users.module.js';


// module => service

@Module({
  imports: [PostsModule, UsersModule],
  exports: [AppService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
