import { ApiException } from '@app/exceptions/api.exception';
import { Either } from '@domain/common/either';
import { UserEntity } from '@domain/entities/user.entity';
import {
  IUpdateUserInput,
  IWhereUpdateUserInput,
} from '@domain/interfaces/user/update.interface';
import { IBaseService } from '../../base.service';

export type IUpdateUserEntityServiceInput = {
  where: IWhereUpdateUserInput;
  params: IUpdateUserInput;
};
export type IUpdateUserEntityServiceOutput = Either<ApiException, UserEntity>;

export type IUpdateUserEntityService = IBaseService<
  IUpdateUserEntityServiceInput,
  IUpdateUserEntityServiceOutput
>;
