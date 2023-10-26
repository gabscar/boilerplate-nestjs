import { AddressEntity } from '@domain/entities/address.entity';
import { IFindByAddressInput } from '@domain/interfaces/address/findBy.interface';
import { IBaseUseCase } from '../base.usecase';

export type IFindByAddressUseCase = IBaseUseCase<
  [IFindByAddressInput],
  AddressEntity
>;
