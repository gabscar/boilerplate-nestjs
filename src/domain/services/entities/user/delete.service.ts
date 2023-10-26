import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { IBaseService } from '../../base.service';

export type IDeleteUserEntityServiceOutput = Either<ApiException, void>;

export type IDeleteUserEntityService = IBaseService<
  string,
  IDeleteUserEntityServiceOutput
>;
