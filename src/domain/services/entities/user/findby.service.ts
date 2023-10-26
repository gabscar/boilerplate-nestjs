import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { UserEntity } from '@domain/entities/user.entity';
import { IFindByUserInput } from '@domain/interfaces/user/findBy.interface';
import { IBaseService } from '../../base.service';

export type IFindByUserEntityServiceInput = IFindByUserInput;
export type IFindByUserEntityServiceOutput = Either<ApiException, UserEntity>;

export type IFindByUserEntityService = IBaseService<
  IFindByUserEntityServiceInput,
  IFindByUserEntityServiceOutput
>;
