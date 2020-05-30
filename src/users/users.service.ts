import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService { 

    helloGraphql(): string {
        return 'hello graphql from service';
    }
}