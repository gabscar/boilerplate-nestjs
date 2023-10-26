import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { IUserUseCaseOptions, UserEntity } from '@domain/entities/user.entity';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IBaseService } from '@domain/services/base.service';

export type IFindAllUserEntityServiceInput = IUserUseCaseOptions;
export type IFindAllUserEntityServiceOutput = Either<
  ApiException,
  IPaginationOutput<UserEntity>
>;

export type IFindAllUserEntityService = IBaseService<
  IFindAllUserEntityServiceInput,
  IFindAllUserEntityServiceOutput
>;
