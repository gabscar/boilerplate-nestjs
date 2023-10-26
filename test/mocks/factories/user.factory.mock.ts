import { UserEntityMock } from '@mocks/entities/user.entity.mock';
import { UserRepositoryMock } from '@mocks/repositories/user.repository.mock';
import { CreateUserEntityServiceMock } from '@mocks/services/entities/user/create.service.mock';
import { DeleteUserEntityServiceMock } from '@mocks/services/entities/user/delete.service.mock';
import { FindByUserEntityServiceMock } from '@mocks/services/entities/user/findBy.service.mock';
import { UpdateUserEntityServiceMock } from '@mocks/services/entities/user/update.service.mock';
import { CreateUserUseCase } from '@src/usecases/user/create.usecase';
import { DeleteUserUseCase } from '@src/usecases/user/delete.usecase';
import { FindByUserUseCase } from '@src/usecases/user/findBy.usecase';
import { UpdateUserUseCase } from '@src/usecases/user/update.usecase';
import { instantiateAndGetSpies } from 'test/utils/common.utils';

export function createUserMocks() {
  const entity = UserEntityMock;

  const repository = instantiateAndGetSpies(UserRepositoryMock);

  const services = {
    findByUserEntityService: instantiateAndGetSpies(
      FindByUserEntityServiceMock,
      repository.instance,
    ),
    updateUserEntityService: instantiateAndGetSpies(
      UpdateUserEntityServiceMock,
      repository.instance,
    ),
    deleteUserEntityService: instantiateAndGetSpies(
      DeleteUserEntityServiceMock,
      repository.instance,
    ),
    createUserEntityService: instantiateAndGetSpies(
      CreateUserEntityServiceMock,
      repository.instance,
    ),
  };

  const useCases = {
    findByUserUseCase: new FindByUserUseCase(
      services.findByUserEntityService.instance,
    ),
    updateUserUseCase: new UpdateUserUseCase(
      services.findByUserEntityService.instance,
      services.updateUserEntityService.instance,
    ),
    deleteUserUseCase: new DeleteUserUseCase(
      services.findByUserEntityService.instance,
      services.deleteUserEntityService.instance,
    ),
    createUserUseCase: new CreateUserUseCase(
      services.findByUserEntityService.instance,
      services.createUserEntityService.instance,
    ),
  };

  return {
    entity,
    repository,
    services,
    useCases,
  };
}

export type ICreateUserMocks = ReturnType<typeof createUserMocks>;
