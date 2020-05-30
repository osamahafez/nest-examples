import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../posts/post.model';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  firstName?: string;

  @Field(type => String)
  lastName?: string;

  @Field(type => Boolean)
  isActive?: boolean;

  @Field(type => [Post])
  posts: Post[];
}