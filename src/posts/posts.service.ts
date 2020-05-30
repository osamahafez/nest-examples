import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
    ) {}

    helloFromPosts(): string {
        return 'hello from posts service';
    }

    findAll(): Promise<Post[]> {
        return this.postsRepository.find();
    }

    findAllPostsOfOneUser(userId: number): Promise<Post[]> {
        return this.postsRepository.find({
            where: {user: userId}
        });
    }

}
