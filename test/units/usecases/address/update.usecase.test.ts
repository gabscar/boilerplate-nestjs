import { left, right } from '@domain/common/either';
import { AddressErrors } from '@domain/errors/address.error';
import { AddressEntityMock } from '@mocks/entities/address.entity.mock';
import {
  ICreateAddressMocks,
  createAddressMocks,
} from '@mocks/factories/address.factory.mock';
import { UpdateAddressUseCase } from '@src/usecases/address/update.usecase';

describe('update address use case - when UpdateAddressUseCase is executed', () => {
  let addressMocks: ICreateAddressMocks;
  let sut: UpdateAddressUseCase;
  const address = AddressEntityMock.create();

  function initMocks() {
    addressMocks = createAddressMocks();
  }

  function initSut() {
    sut = addressMocks.useCases.updateAddressUseCase;
  }
  function initSetUpMocks() {
    const { spies } = addressMocks.services.updateAddressEntityService;
    spies.executeSpy.mockResolvedValue(right(address));
  }
  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
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

  test('it should update address if all params is correctly', async () => {
    const { executeSpy } =
      addressMocks.services.updateAddressEntityService.spies;

    const payload = getPayload();

    const result = await sut.execute(address.id, payload);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result.city).toBe(payload.city);
    expect(result.state).toBe(payload.state);
  });

  test('it should return error if update address service has error', () => {
    const payload = getPayload();

    const { executeSpy } =
      addressMocks.services.updateAddressEntityService.spies;
    executeSpy.mockResolvedValueOnce(left(AddressErrors.updateEntity()));

    const resultPromise = sut.execute(address.id, payload);

    expect(resultPromise).rejects.toThrow(AddressErrors.updateEntity());
  });
});
