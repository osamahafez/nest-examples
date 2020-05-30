import { Resolver, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';

@Resolver('Posts')
export class PostsResolver {

    constructor(private readonly postsService: PostsService) {}

    @Query(() => String)
    helloFromPosts() {
        return this.postsService.helloFromPosts();
    }

    @Query(() => [PostModel])
    findAllPosts() {
        return this.postsService.findAll();
    }
}
