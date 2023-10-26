import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { UserEntity } from '@domain/entities/user.entity';
import { ICreateUserInput } from '@domain/interfaces/user/create.interface';
import { IBaseService } from '../../base.service';

export type ICreateUserEntityServiceInput = ICreateUserInput;
export type ICreateUserEntityServiceOutput = Either<ApiException, UserEntity>;

export type ICreateUserEntityService = IBaseService<
  ICreateUserInput,
  ICreateUserEntityServiceOutput
>;
