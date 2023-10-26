import { Module } from '@nestjs/common';
import { AddressModule } from './address/address.module';
import { UserModule } from './user/user.module';

const modules = [UserModule, AddressModule];

@Module({
  imports: [...modules],
  providers: [...modules],
})
export class ControllerModule {}
