import { UserEntity } from '@domain/entities/user.entity';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IFindAllUserInput } from '@domain/interfaces/user/findAll.interface';
import { IBaseUseCase } from '../base.usecase';

export type IFindAllUserUseCase = IBaseUseCase<
  [IFindAllUserInput],
  IPaginationOutput<UserEntity>
>;
