import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post as PostEntity } from './post.entity';
import { User as UserEntity } from 'src/users/user.entity';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(PostEntity)
        private postsRepository: Repository<PostEntity>,
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}

    helloFromPosts(): string {
        return 'hello from posts service';
    }

    findAll(): Promise<PostEntity[]> {
        return this.postsRepository.find();
    }

    findUserPosts(userId: number): Promise<PostEntity[]> {
        return this.postsRepository.find({
            where: {user: userId}
        });
    }

}
