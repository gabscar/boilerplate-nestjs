import { right } from '@domain/common/either';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';

import {
  IUpdateAddressEntityService,
  IUpdateAddressEntityServiceInput,
  IUpdateAddressEntityServiceOutput,
} from '@domain/services/entities/address/update.service';

export class UpdateAddressEntityServiceMock
  implements IUpdateAddressEntityService
{
  constructor(private readonly addressRepository: IAddressRepositoryDatabase) {}

  async execute({
    id,
    params,
  }: IUpdateAddressEntityServiceInput): Promise<IUpdateAddressEntityServiceOutput> {
    const address = await this.addressRepository.update(
      { column: 'id', value: id },
      params,
    );
    return right(address);
  }

  static getSpies(service: UpdateAddressEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
