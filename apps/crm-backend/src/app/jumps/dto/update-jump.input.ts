import { CreateJumpInput } from './create-jump.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJumpInput extends PartialType(CreateJumpInput) {
  @Field(() => Int)
  id: number;
}
