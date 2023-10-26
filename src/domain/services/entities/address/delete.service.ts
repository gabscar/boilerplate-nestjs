import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { IBaseService } from '../../base.service';

export type IDeleteAddressEntityServiceOutput = Either<ApiException, void>;

export type IDeleteAddressEntityService = IBaseService<
  string,
  IDeleteAddressEntityServiceOutput
>;
