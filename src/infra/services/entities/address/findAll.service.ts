import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressErrors } from '@domain/errors/address.error';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  IFindAllAddressEntityService,
  IFindAllAddressEntityServiceInput,
  IFindAllAddressEntityServiceOutput,
} from '@domain/services/entities/address/findAll.service';
import { Inject } from '@nestjs/common';

export class FindAllAddressEntityService
  implements IFindAllAddressEntityService
{
  constructor(
    @Inject(INJECTION_REPOSITORY_ADDRESS)
    private readonly addressRepository: IAddressRepositoryDatabase,
  ) {}

  async execute(
    params: IFindAllAddressEntityServiceInput,
  ): Promise<IFindAllAddressEntityServiceOutput> {
    try {
      const addressList = await this.addressRepository.findAll(params);
      return right(addressList);
    } catch (err) {
      console.log(err);
      return left(AddressErrors.list());
    }
  }
}
