import {Module} from '@nestjs/common';

import {UsersModule} from './users/users.module';
import {JumpsModule} from './jumps/jumps.module';
import {CoreModule} from './core/core.module';

@Module({
  imports: [
    CoreModule,
    UsersModule,
    JumpsModule,
  ],
})
export class AppModule {
}
