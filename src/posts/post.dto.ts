import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PostDTO {

  @Field(type => String)
  title: string;

  @Field(type => String)
  description: string;

  @Field(type => Int)
  userId: number;
}