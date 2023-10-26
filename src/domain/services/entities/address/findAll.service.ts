import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import {
  AddressEntity,
  IAddressUseCaseOptions,
} from '@domain/entities/address.entity';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IBaseService } from '@domain/services/base.service';

export type IFindAllAddressEntityServiceInput = IAddressUseCaseOptions;
export type IFindAllAddressEntityServiceOutput = Either<
  ApiException,
  IPaginationOutput<AddressEntity>
>;

export type IFindAllAddressEntityService = IBaseService<
  IFindAllAddressEntityServiceInput,
  IFindAllAddressEntityServiceOutput
>;
