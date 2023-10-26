import { left, right } from '@domain/common/either';
import { UsersErrors } from '@domain/errors/user.error';
import {
  ICreateUserMocks,
  createUserMocks,
} from '@mocks/factories/user.factory.mock';
import { CreateUserUseCase } from '@usecases/user/create.usecase';

describe('create user use case - when CreateUserUseCase is executed', () => {
  let userMocks: ICreateUserMocks;
  let sut: CreateUserUseCase;

  function initMocks() {
    userMocks = createUserMocks();
  }

  function initSut() {
    sut = userMocks.useCases.createUserUseCase;
  }

  function initSetUpMocks() {
    const { spies } = userMocks.services.findByUserEntityService;
    spies.executeSpy.mockResolvedValue(left(null));
  }

  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
  });

  function getPayload() {
    return {
      name: 'john doe',
      email: 'johndoe@mail.com',
      password: 'anyPassword',
      confirmationPassword: 'anyPassword',
    };
  }

  test('it should call the execute method from FindByUserEntityService with correct params', async () => {
    const { executeSpy } = userMocks.services.findByUserEntityService.spies;

    const payload = getPayload();

    await sut.execute(payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(executeSpy).toHaveBeenCalledWith({
      where: { AND: [{ column: 'email', value: payload.email }] },
    });
  });

  test('it should throw if the email sent is already in use', () => {
    const { executeSpy } = userMocks.services.findByUserEntityService.spies;
    executeSpy.mockResolvedValue(right(userMocks.entity.create()));

    const payload = getPayload();
    payload.email = 'emailInUse@mail.com';

    const promise = sut.execute(payload);

    return expect(promise).rejects.toThrowError(
      UsersErrors.alreadyExists(payload.email),
    );
  });

  test('it should call the execute method from CreateUserEntityService with correct params', async () => {
    const { executeSpy } = userMocks.services.createUserEntityService.spies;

    const payload = getPayload();

    await sut.execute(payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(executeSpy).toHaveBeenCalledWith(payload);
  });

  test('it should return the created user', async () => {
    const payload = getPayload();

    const user = userMocks.entity.create(payload);
    const { executeSpy } = userMocks.services.createUserEntityService.spies;
    executeSpy.mockResolvedValueOnce(right(user));

    const result = await sut.execute(payload);

    expect(result?.id).toBeTruthy();
    expect(result.email).toBe(payload.email);
    expect(result.name).toBe(payload.name);
  });
});
