import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User as UserModel } from './user.model';
import { User as UserEntity } from './user.entity';

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
}
