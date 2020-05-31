import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post as PostModel } from './post.model';
import { PostDTO } from './post.dto';

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

    @Mutation(() => PostModel)
    createPost(@Args('postInput') postInput: PostDTO) {
        return this.postsService.create(postInput);
    }

}
