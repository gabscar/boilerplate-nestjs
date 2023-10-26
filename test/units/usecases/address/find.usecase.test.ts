import { left, right } from '@domain/common/either';
import { AddressErrors } from '@domain/errors/address.error';
import { AddressEntityMock } from '@mocks/entities/address.entity.mock';
import {
  ICreateAddressMocks,
  createAddressMocks,
} from '@mocks/factories/address.factory.mock';
import { FindByAddressUseCase } from '@src/usecases/address/findBy.usecase';

describe('find address use case - when FindAddressUseCase is executed', () => {
  let addressMocks: ICreateAddressMocks;
  let sut: FindByAddressUseCase;
  const address = AddressEntityMock.create();

  function initMocks() {
    addressMocks = createAddressMocks();
  }

  function initSut() {
    sut = addressMocks.useCases.findByAddressUseCase;
  }

  function initSetUpMocks() {
    const { spies } = addressMocks.services.findByAddressEntityService;
    spies.executeSpy.mockResolvedValue(right(address));
  }

  beforeEach(() => {
    initMocks();
    initSut();
    initSetUpMocks();
  });

  test('it should find address ', async () => {
    const { executeSpy } =
      addressMocks.services.findByAddressEntityService.spies;

    const result = await sut.execute({
      where: { AND: [{ column: 'id', value: 'any-value' }] },
    });

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result.city).toBe(result.city);
  });

  test('it should return error if address not exists the created address', () => {
    const { executeSpy } =
      addressMocks.services.findByAddressEntityService.spies;
    executeSpy.mockResolvedValueOnce(left(AddressErrors.notFound()));

    const resultPromise = sut.execute({
      where: { AND: [{ column: 'id', value: 'any-value' }] },
    });

    expect(resultPromise).rejects.toThrow(AddressErrors.notFound());
  });
});
