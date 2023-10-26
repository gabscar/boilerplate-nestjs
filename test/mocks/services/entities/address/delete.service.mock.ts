import { right } from '@domain/common/either';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  IDeleteAddressEntityService,
  IDeleteAddressEntityServiceOutput,
} from '@domain/services/entities/address/delete.service';

export class DeleteAddressEntityServiceMock
  implements IDeleteAddressEntityService
{
  constructor(private readonly addressRepository: IAddressRepositoryDatabase) {}

  async execute(id: string): Promise<IDeleteAddressEntityServiceOutput> {
    const address = await this.addressRepository.delete(id);
    return right(address);
  }

  static getSpies(service: DeleteAddressEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
