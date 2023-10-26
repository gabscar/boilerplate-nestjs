import {
  IUserFiltersOptions,
  UserEntity,
  UserRelations,
} from '@domain/entities/user.entity';
import { IUseCaseOptions } from '../common/useCaseOptions.interface';

export type IUserUseCaseOptions = IUseCaseOptions<
  UserEntity,
  IUserFiltersOptions,
  UserRelations
>;
