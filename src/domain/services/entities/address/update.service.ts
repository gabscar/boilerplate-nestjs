import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { AddressEntity } from '@domain/entities/address.entity';
import { IUpdateAddressInput } from '@domain/interfaces/address/update.interface';
import { IBaseService } from '../../base.service';

export type IUpdateAddressEntityServiceInput = {
  id: string;
  params: IUpdateAddressInput;
};
export type IUpdateAddressEntityServiceOutput = Either<
  ApiException,
  AddressEntity
>;

export type IUpdateAddressEntityService = IBaseService<
  IUpdateAddressEntityServiceInput,
  IUpdateAddressEntityServiceOutput
>;
