import { AddressEntity } from '@domain/entities/address.entity';
import { ICreateAddressInput } from '@domain/interfaces/address/create.interface';
import { IBaseUseCase } from '../base.usecase';

export type ICreateAddressUseCase = IBaseUseCase<
  [ICreateAddressInput],
  AddressEntity
>;
