import { Injectable } from '@nestjs/common';
import { CreateJumpInput } from './dto/create-jump.input';
import { UpdateJumpInput } from './dto/update-jump.input';

@Injectable()
export class JumpsService {
  create(createJumpInput: CreateJumpInput) {
    return 'This action adds a new jump';
  }

  findAll() {
    return `This action returns all jumps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jump`;
  }

  update(id: number, updateJumpInput: UpdateJumpInput) {
    return `This action updates a #${id} jump`;
  }

  remove(id: number) {
    return `This action removes a #${id} jump`;
  }
}
