import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolver {
    
    constructor(private readonly usersService: UsersService) {}

    @Query(() => String)
    async helloGraphql() {
        return this.usersService.helloGraphql();
    }
}
