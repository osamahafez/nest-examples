import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), forwardRef(() => UsersModule)],
  providers: [PostsService, PostsResolver],
  exports: [PostsService]
})
export class PostsModule {}
