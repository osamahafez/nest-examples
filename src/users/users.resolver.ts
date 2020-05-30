import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User as UserModel } from './user.model';
import { PostsService } from 'src/posts/posts.service';

@Resolver(of => UserModel)
export class UsersResolver {
    
    constructor(
        private readonly usersService: UsersService, 
        private readonly postsService: PostsService
    ) {}

    @Query(() => String)
    async helloFromUsers() {
        return this.usersService.helloFromUsers();
    }

    @Query(() => [UserModel])
    async findAllUsers() {
        return this.usersService.findAll();
    }

    @Query(() => UserModel)
    async findOneUser(@Args('id') id: number) {
        return this.usersService.findOne(id);
    }

    @ResolveField()
    async posts(@Parent() user: UserModel) {
        return this.postsService.findUserPosts(user.id);
    }
}
