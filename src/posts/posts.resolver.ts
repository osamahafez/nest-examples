import { Resolver, Query, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';

@Resolver(of => PostModel)
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
