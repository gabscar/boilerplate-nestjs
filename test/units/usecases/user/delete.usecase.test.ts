import { left, right } from '@domain/common/either';
import { UsersErrors } from '@domain/errors/user.error';
import { UserEntityMock } from '@mocks/entities/user.entity.mock';
import {
  ICreateUserMocks,
  createUserMocks,
} from '@mocks/factories/user.factory.mock';
import { DeleteUserUseCase } from '@src/usecases/user/delete.usecase';

describe('delete user use case -  when DeleteUserUseCase is executed', () => {
  let usedMocks: ICreateUserMocks;
  let sut: DeleteUserUseCase;
  const user = UserEntityMock.create();
  function initMocks() {
    usedMocks = createUserMocks();
  }
  function initSut() {
    sut = usedMocks.useCases.deleteUserUseCase;
  }
  function initSetUpMocks() {
    const { spies } = usedMocks.services.findByUserEntityService;
    spies.executeSpy.mockResolvedValue(right(user));
  }

  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
  });

  test('it should call the execute method from FindByUserEntityService with correct params', async () => {
    const { executeSpy } = usedMocks.services.findByUserEntityService.spies;
    const result = await sut.execute(user.id);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result).toBeFalsy();
  });
  test('it Should return error if user is not founded', () => {
    const { spies } = usedMocks.services.findByUserEntityService;
    spies.executeSpy.mockResolvedValueOnce(left(UsersErrors.notFound()));

    const { executeSpy } = usedMocks.services.findByUserEntityService.spies;

    const resultPromise = sut.execute(user.id);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(resultPromise).rejects.toThrow(UsersErrors.notFound());
  });
});
