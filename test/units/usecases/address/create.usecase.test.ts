import { right } from '@domain/common/either';
import {
  ICreateAddressMocks,
  createAddressMocks,
} from '@mocks/factories/address.factory.mock';
import { CreateAddressUseCase } from '@src/usecases/address/create.usecase';

describe('create address use case - when CreateAddressUseCase is executed', () => {
  let addressMocks: ICreateAddressMocks;
  let sut: CreateAddressUseCase;

  function initMocks() {
    addressMocks = createAddressMocks();
  }

  function initSut() {
    sut = addressMocks.useCases.createAddressUseCase;
  }

  beforeEach(() => {
    initMocks();
    initSut();
  });

  function getPayload() {
    return {
      city: 'anyCity',
      number: 'anyNumber',
      state: 'anyState',
      street: 'anyStreet',
      zipCode: 'anyZipCode',
      complement: 'anyComplement',
      neighborhood: 'anyNeighborhood',
      userId: 'anyUserId',
    };
  }

  test('it should call the execute method from CreateAddressEntityService with correct params', async () => {
    const { executeSpy } =
      addressMocks.services.createAddressEntityService.spies;

    const payload = getPayload();

    await sut.execute(payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(executeSpy).toHaveBeenCalledWith(payload);
  });

  test('it should return the created address', async () => {
    const payload = getPayload();

    const address = addressMocks.entity.create(payload);
    const { executeSpy } =
      addressMocks.services.createAddressEntityService.spies;
    executeSpy.mockResolvedValueOnce(right(address));

    const result = await sut.execute(payload);

    expect(result?.id).toBeTruthy();
    expect(result.city).toBe(payload.city);
    expect(result.state).toBe(payload.state);
  });
});
