import { Injectable } from '@nestjs/common';
import { User as UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService { 

    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}


    helloFromUsers(): string {
        return 'hello graphql from service';
    }

    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne(id);
    }

    create(userInput: UserDTO): UserEntity {
        
        const newUser = this.usersRepository.create({
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            isActive: userInput.isActive
        });
        this.usersRepository.save(newUser);        
        return newUser;
    }

    async remove(id: number): Promise<UserEntity> {
        const user = this.usersRepository.findOne(id);
        await this.usersRepository.delete(id);
        return user;
    }
}