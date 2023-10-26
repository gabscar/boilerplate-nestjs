import { AddressEntity } from '@domain/entities/address.entity';
import { IFindAllAddressInput } from '@domain/interfaces/address/findAll.interface';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IBaseUseCase } from '../base.usecase';

export type IFindAllAddressUseCase = IBaseUseCase<
  [IFindAllAddressInput],
  IPaginationOutput<AddressEntity>
>;
