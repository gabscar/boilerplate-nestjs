import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressErrors } from '@domain/errors/address.error';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  IFindByAddressEntityService,
  IFindByAddressEntityServiceInput,
  IFindByAddressEntityServiceOutput,
} from '@domain/services/entities/address/findBy.service';
import { Inject } from '@nestjs/common';

export class FindByAddressEntityService implements IFindByAddressEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_ADDRESS)
    private readonly addressRepository: IAddressRepositoryDatabase,
  ) {}

  async execute(
    params: IFindByAddressEntityServiceInput,
  ): Promise<IFindByAddressEntityServiceOutput> {
    try {
      const address = await this.addressRepository.findBy(params);

      if (!address) {
        return left(AddressErrors.notFound());
      }

      return right(address);
    } catch (err) {
      console.log(err);
      return left(AddressErrors.readEntity());
    }
  }
}
