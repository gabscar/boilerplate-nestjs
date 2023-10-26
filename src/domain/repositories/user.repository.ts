import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IFindByUserInput } from '@domain/interfaces/user/findBy.interface';
import {
  IUpdateUserInput,
  IWhereUpdateUserInput,
} from '@domain/interfaces/user/update.interface';
import { IUserUseCaseOptions, UserEntity } from '../entities/user.entity';
import { ICreateUserInput } from '../interfaces/user/create.interface';

export interface IUserRepositoryDatabase {
  create(params: ICreateUserInput): Promise<UserEntity>;
  delete(id: string): Promise<void>;
  findAll(params: IUserUseCaseOptions): Promise<IPaginationOutput<UserEntity>>;
  findBy(params: IFindByUserInput): Promise<UserEntity>;
  update(
    where: IWhereUpdateUserInput,
    params: IUpdateUserInput,
  ): Promise<UserEntity>;
}
