import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Users')
export class UsersResolver {
    
    @Query(() => String)
    async helloGraphql() {
        return 'hello graphQL';
    }
}
