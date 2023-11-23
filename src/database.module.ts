import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/olx-api')],
  exports: [MongooseModule],
})
export class DatabaseModule {}
