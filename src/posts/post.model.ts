import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.model';

@ObjectType()
export class Post {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  title?: string;

  @Field(type => String)
  description?: string;

  @Field(type => User)
  user: User;
}