import { left, right } from '@domain/common/either';
import { UsersErrors } from '@domain/errors/user.error';
import { UserEntityMock } from '@mocks/entities/user.entity.mock';
import {
  ICreateUserMocks,
  createUserMocks,
} from '@mocks/factories/user.factory.mock';
import { UpdateUserUseCase } from '@src/usecases/user/update.usecase';

describe('update user use case -  when UpdateUserUseCase is executed', () => {
  let usedMocks: ICreateUserMocks;
  let sut: UpdateUserUseCase;
  const user = UserEntityMock.create();
  function initMocks() {
    usedMocks = createUserMocks();
  }
  function initSut() {
    sut = usedMocks.useCases.updateUserUseCase;
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
  function getPayload() {
    return {
      name: 'john doe',
    };
  }
  test('it should call the execute method from UpdateUserEntityService with correct params', async () => {
    const { spies } = usedMocks.services.findByUserEntityService;
    const { executeSpy } = usedMocks.services.findByUserEntityService.spies;
    const payload = getPayload();
    const result = await sut.execute(user.id, payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result.email).toBe('anyUserName@mail.com');
  });
  test('it Should return error if user is not founded', () => {
    const { spies } = usedMocks.services.findByUserEntityService;
    spies.executeSpy.mockResolvedValueOnce(left(UsersErrors.notFound()));

    const { executeSpy } = usedMocks.services.findByUserEntityService.spies;

    const resultPromise = sut.execute('fakeId', {
      email: 'anyUserName@mail.com',
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(resultPromise).rejects.toThrow(UsersErrors.notFound());
  });
  test('it Should return error if user email exists', () => {
    const { spies } = usedMocks.services.findByUserEntityService;
    spies.executeSpy.mockResolvedValueOnce(right(user));
    spies.executeSpy.mockResolvedValueOnce(right(user));
    const { executeSpy } = usedMocks.services.findByUserEntityService.spies;

    const resultPromise = sut.execute('fakeId', {
      email: 'anyUserName@mail.com',
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(resultPromise).rejects.toThrow(
      UsersErrors.alreadyExists('anyUserName@mail.com'),
    );
  });
});
