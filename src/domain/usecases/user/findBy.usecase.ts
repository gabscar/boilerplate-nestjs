import { IFindByUserInput } from '@domain/interfaces/user/findBy.interface';
import { UserEntity } from '../../entities/user.entity';
import { IBaseUseCase } from '../base.usecase';

export type IFindByUserUseCase = IBaseUseCase<[IFindByUserInput], UserEntity>;
