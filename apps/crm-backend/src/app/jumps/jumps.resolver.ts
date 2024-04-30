import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JumpsService } from './jumps.service';
import { Jump } from './entities/jump.entity';
import { CreateJumpInput } from './dto/create-jump.input';
import { UpdateJumpInput } from './dto/update-jump.input';

@Resolver(() => Jump)
export class JumpsResolver {
  constructor(private readonly jumpsService: JumpsService) {}

  @Mutation(() => Jump)
  createJump(@Args('createJumpInput') createJumpInput: CreateJumpInput) {
    return this.jumpsService.create(createJumpInput);
  }

  @Query(() => [Jump], { name: 'jumps' })
  findAll() {
    return this.jumpsService.findAll();
  }

  @Query(() => Jump, { name: 'jump' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jumpsService.findOne(id);
  }

  @Mutation(() => Jump)
  updateJump(@Args('updateJumpInput') updateJumpInput: UpdateJumpInput) {
    return this.jumpsService.update(updateJumpInput.id, updateJumpInput);
  }

  @Mutation(() => Jump)
  removeJump(@Args('id', { type: () => Int }) id: number) {
    return this.jumpsService.remove(id);
  }
}
