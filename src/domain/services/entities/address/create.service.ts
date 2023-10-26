import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { AddressEntity } from '@domain/entities/address.entity';
import { ICreateAddressInput } from '@domain/interfaces/address/create.interface';
import { IBaseService } from '../../base.service';

export type ICreateAddressEntityServiceInput = ICreateAddressInput;
export type ICreateAddressEntityServiceOutput = Either<
  ApiException,
  AddressEntity
>;

export type ICreateAddressEntityService = IBaseService<
  ICreateAddressInput,
  ICreateAddressEntityServiceOutput
>;
