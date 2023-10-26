import { UserEntity } from '@domain/entities/user.entity';
import { IWhereParams } from '../common/where.interface';
import { ICreateUserInput } from './create.interface';

export type IWhereUpdateUserInput = IWhereParams<keyof UserEntity>;
export type IUpdateUserInput = Partial<ICreateUserInput>;
