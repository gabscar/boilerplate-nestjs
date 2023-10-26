import { right } from '@domain/common/either';
import { ICreateAddressInput } from '@domain/interfaces/address/create.interface';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  ICreateAddressEntityService,
  ICreateAddressEntityServiceOutput,
} from '@domain/services/entities/address/create.service';

export class CreateAddressEntityServiceMock
  implements ICreateAddressEntityService
{
  constructor(private readonly addressRepository: IAddressRepositoryDatabase) {}

  async execute(
    params: ICreateAddressInput,
  ): Promise<ICreateAddressEntityServiceOutput> {
    const address = await this.addressRepository.create(params);
    return right(address);
  }

  static getSpies(service: CreateAddressEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
