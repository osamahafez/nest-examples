import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PostsModule } from 'src/posts/posts.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]), PostsModule],
    providers: [UsersService, UsersResolver]
})
export class UsersModule {}
