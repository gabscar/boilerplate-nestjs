import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { AddressEntity } from '@domain/entities/address.entity';
import { IFindByAddressInput } from '@domain/interfaces/address/findBy.interface';
import { IBaseService } from '../../base.service';

export type IFindByAddressEntityServiceInput = IFindByAddressInput;
export type IFindByAddressEntityServiceOutput = Either<
  ApiException,
  AddressEntity
>;

export type IFindByAddressEntityService = IBaseService<
  IFindByAddressEntityServiceInput,
  IFindByAddressEntityServiceOutput
>;
