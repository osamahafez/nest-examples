import { Injectable } from '@nestjs/common';
import { User as UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService { 

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}


    helloGraphql(): string {
        return 'hello graphql from service';
    }

    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne(id);
    }
    
    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}