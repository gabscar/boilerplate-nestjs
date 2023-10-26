import { UserEntity } from '../../entities/user.entity';
import { ICreateUserInput } from '../../interfaces/user/create.interface';
import { IBaseUseCase } from '../base.usecase';

export type ICreateUserUseCase = IBaseUseCase<[ICreateUserInput], UserEntity>;
