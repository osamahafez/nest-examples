import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./../users/user.entity";

@Entity({name: "posts"})
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string

    // @ManyToOne(type => User, user => user.posts)
    // user: User;

}