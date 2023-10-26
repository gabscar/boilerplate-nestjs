import { left, right } from '@domain/common/either';
import { UsersErrors } from '@domain/errors/user.error';
import { UserEntityMock } from '@mocks/entities/user.entity.mock';
import {
  ICreateUserMocks,
  createUserMocks,
} from '@mocks/factories/user.factory.mock';
import { FindByUserUseCase } from '@src/usecases/user/findBy.usecase';

describe('find user use case -  when FindUserUseCase is executed', () => {
  let usedMocks: ICreateUserMocks;
  let sut: FindByUserUseCase;
  function initMocks() {
    usedMocks = createUserMocks();
  }
  function initSut() {
    sut = usedMocks.useCases.findByUserUseCase;
  }
  function initSetUpMocks() {
    const { spies } = usedMocks.services.findByUserEntityService;
    spies.executeSpy.mockResolvedValue(right(UserEntityMock.create()));
  }

  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
  });

  test('it should call the execute method from FindByUserEntityService with correct params', async () => {
    const { executeSpy } = usedMocks.services.findByUserEntityService.spies;

    const result = await sut.execute({
      where: { AND: [{ column: 'email', value: 'anyUserName@mail.com' }] },
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result.email).toBe('anyUserName@mail.com');
  });
  test('it Should return error if user not founded', () => {
    const { spies } = usedMocks.services.findByUserEntityService;
    spies.executeSpy.mockResolvedValueOnce(left(UsersErrors.notFound()));

    const { executeSpy } = usedMocks.services.findByUserEntityService.spies;

    const resultPromise = sut.execute({
      where: { AND: [{ column: 'email', value: 'anyUserName@mail.com' }] },
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(resultPromise).rejects.toThrow(UsersErrors.notFound());
  });
});
