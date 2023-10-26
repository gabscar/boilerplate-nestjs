import { IUseCaseOptions } from '@domain/interfaces/common/useCaseOptions.interface';
import { AddressEntity } from './address.entity';
export abstract class UserRelations {
  address?: AddressEntity;
}
export class UserEntity extends UserRelations {
  id: string;
  name: string;
  email: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  constructor(userProps: UserEntity) {
    super();
    Object.assign(this, userProps);
  }
}

export type IUserFiltersOptions = keyof Pick<
  UserEntity,
  'id' | 'name' | 'email' | 'createdAt' | 'updatedAt'
>;

export type IUserUseCaseOptions = IUseCaseOptions<
  UserEntity,
  IUserFiltersOptions,
  UserRelations
>;
