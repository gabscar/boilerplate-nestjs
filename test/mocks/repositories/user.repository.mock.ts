import { IUserUseCaseOptions, UserEntity } from '@domain/entities/user.entity';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { ICreateUserInput } from '@domain/interfaces/user/create.interface';
import { IFindByUserInput } from '@domain/interfaces/user/findBy.interface';
import { IWhereUpdateUserInput } from '@domain/interfaces/user/update.interface';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import { UserEntityMock } from '@mocks/entities/user.entity.mock';
import { UseCaseOptionsUtils } from 'test/utils/useCaseOptions.utils';

export class UserRepositoryMock implements IUserRepositoryDatabase {
  create(params: ICreateUserInput): Promise<UserEntity> {
    return Promise.resolve(UserEntityMock.create(params));
  }

  delete(_id: string): Promise<void> {
    return Promise.resolve();
  }

  findAll(params: IUserUseCaseOptions): Promise<IPaginationOutput<UserEntity>> {
    const users = [UserEntityMock.create()];
    return Promise.resolve({
      data: users,
      meta: {
        taken: users.length,
        page: params?.pagination.page || 1,
        max: users.length,
      },
    });
  }

  findBy(params: IFindByUserInput): Promise<UserEntity> {
    const filterProps = UseCaseOptionsUtils.getEntityFilterProps(params);
    return Promise.resolve(UserEntityMock.create(filterProps));
  }

  update(
    where: IWhereUpdateUserInput,
    params: Partial<ICreateUserInput>,
  ): Promise<UserEntity> {
    return Promise.resolve(
      UserEntityMock.create({ id: String(where.value), ...params }),
    );
  }

  static getSpies(repository: UserRepositoryMock) {
    return {
      createSpy: jest.spyOn(repository, 'create'),
      deleteSpy: jest.spyOn(repository, 'delete'),
      findAllSpy: jest.spyOn(repository, 'findAll'),
      findBySpy: jest.spyOn(repository, 'findBy'),
      updateSpy: jest.spyOn(repository, 'update'),
    };
  }
}
