import { AddressEntityMock } from '@mocks/entities/address.entity.mock';
import { AddressRepositoryMock } from '@mocks/repositories/address.repository.mock';
import { CreateAddressEntityServiceMock } from '@mocks/services/entities/address/create.service.mock';
import { DeleteAddressEntityServiceMock } from '@mocks/services/entities/address/delete.service.mock';
import { FindByAddressEntityServiceMock } from '@mocks/services/entities/address/findBy.service.mock';
import { UpdateAddressEntityServiceMock } from '@mocks/services/entities/address/update.service.mock';
import { CreateAddressUseCase } from '@src/usecases/address/create.usecase';
import { DeleteAddressUseCase } from '@src/usecases/address/delete.usecase';
import { FindByAddressUseCase } from '@src/usecases/address/findBy.usecase';
import { UpdateAddressUseCase } from '@src/usecases/address/update.usecase';
import { instantiateAndGetSpies } from 'test/utils/common.utils';

export function createAddressMocks() {
  const entity = AddressEntityMock;

  const repository = instantiateAndGetSpies(AddressRepositoryMock);

  const services = {
    findByAddressEntityService: instantiateAndGetSpies(
      FindByAddressEntityServiceMock,
      repository.instance,
    ),
    updateAddressEntityService: instantiateAndGetSpies(
      UpdateAddressEntityServiceMock,
      repository.instance,
    ),
    deleteAddressEntityService: instantiateAndGetSpies(
      DeleteAddressEntityServiceMock,
      repository.instance,
    ),
    createAddressEntityService: instantiateAndGetSpies(
      CreateAddressEntityServiceMock,
      repository.instance,
    ),
  };

  const useCases = {
    findByAddressUseCase: new FindByAddressUseCase(
      services.findByAddressEntityService.instance,
    ),
    deleteAddressUseCase: new DeleteAddressUseCase(
      services.deleteAddressEntityService.instance,
    ),
    updateAddressUseCase: new UpdateAddressUseCase(
      services.updateAddressEntityService.instance,
    ),
    createAddressUseCase: new CreateAddressUseCase(
      services.createAddressEntityService.instance,
    ),
  };

  return {
    entity,
    repository,
    services,
    useCases,
  };
}

export type ICreateAddressMocks = ReturnType<typeof createAddressMocks>;
