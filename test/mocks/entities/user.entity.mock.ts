import { UserEntity } from '@domain/entities/user.entity';

export class UserEntityMock {
  static create(userProps?: Partial<UserEntity>) {
    return new UserEntity({
      id: 'anyUserId',
      name: 'Any User Name',
      email: 'anyUserName@mail.com',
      password: 'anyUserPassword',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      address: null,
      ...userProps,
    });
  }
}
