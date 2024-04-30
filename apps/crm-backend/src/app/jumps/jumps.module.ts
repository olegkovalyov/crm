import {Module} from '@nestjs/common';
import {JumpsService} from './jumps.service';
import {JumpsResolver} from './jumps.resolver';

@Module({
  providers: [
    JumpsResolver,
    JumpsService,
  ],
})
export class JumpsModule {
}
