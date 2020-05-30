import { Resolver, Query, Args} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User as UserModel } from './user.model';

@Resolver('Users')
export class UsersResolver {
    
    constructor(private readonly usersService: UsersService) {}

    @Query(() => String)
    async helloGraphql() {
        return this.usersService.helloGraphql();
    }

    @Query(() => [UserModel])
    async findAllUsers() {
        return this.usersService.findAll();
    }

    @Query(() => UserModel)
    async findOneUser(@Args('id') id: number) {
        return this.usersService.findOne(id);
    }
}
