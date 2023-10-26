import { left, right } from '@domain/common/either';
import { AddressErrors } from '@domain/errors/address.error';
import { AddressEntityMock } from '@mocks/entities/address.entity.mock';
import {
  ICreateAddressMocks,
  createAddressMocks,
} from '@mocks/factories/address.factory.mock';
import { DeleteAddressUseCase } from '@src/usecases/address/delete.usecase';
import { UpdateAddressUseCase } from '@src/usecases/address/update.usecase';

describe('delete address use case - when DeleteAddressUseCase is executed', () => {
  let addressMocks: ICreateAddressMocks;
  let sut: DeleteAddressUseCase;
  const address = AddressEntityMock.create();

  function initMocks() {
    addressMocks = createAddressMocks();
  }

  function initSut() {
    sut = addressMocks.useCases.deleteAddressUseCase;
  }

  beforeEach(() => {
    initMocks();
    initSut();
  });

  test('it should delete address if all params is correctly', async () => {
    const { executeSpy } =
      addressMocks.services.deleteAddressEntityService.spies;

    const result = await sut.execute(address.id);

    expect(executeSpy).toHaveBeenCalledTimes(1);
    expect(result).toBeFalsy();
  });

  test('it should return error if delete address service has error', () => {
    const { executeSpy } =
      addressMocks.services.deleteAddressEntityService.spies;
    executeSpy.mockResolvedValueOnce(left(AddressErrors.deleteEntity()));

    const resultPromise = sut.execute(address.id);

    expect(resultPromise).rejects.toThrow(AddressErrors.deleteEntity());
  });
});
