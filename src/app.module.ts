import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControllerModule } from './app/controllers/controller.module';

@Module({
  imports: [ConfigModule.forRoot(), ControllerModule],
  providers: [],
})
export class AppModule {}
