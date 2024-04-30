import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateJumpInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
