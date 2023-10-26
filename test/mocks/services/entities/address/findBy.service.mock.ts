import { right } from '@domain/common/either';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  IFindByAddressEntityService,
  IFindByAddressEntityServiceInput,
  IFindByAddressEntityServiceOutput,
} from '@domain/services/entities/address/findBy.service';

export class FindByAddressEntityServiceMock
  implements IFindByAddressEntityService
{
  constructor(private readonly addressRepository: IAddressRepositoryDatabase) {}

  async execute(
    params: IFindByAddressEntityServiceInput,
  ): Promise<IFindByAddressEntityServiceOutput> {
    const address = await this.addressRepository.findBy(params);
    return right(address);
  }

  static getSpies(service: FindByAddressEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
