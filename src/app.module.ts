import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule],
})
export class AppModule {}
