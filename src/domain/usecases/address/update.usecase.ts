import { AddressEntity } from '@domain/entities/address.entity';
import { IUpdateAddressInput } from '@domain/interfaces/address/update.interface';
import { IBaseUseCase } from '../base.usecase';

export type IUpdateAddressUseCase = IBaseUseCase<
  [string, IUpdateAddressInput],
  AddressEntity
>;
