import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserDTO {

  @Field(type => String)
  firstName: string;

  @Field(type => String)
  lastName: string;

  @Field(type => Boolean)
  isActive: boolean;
}