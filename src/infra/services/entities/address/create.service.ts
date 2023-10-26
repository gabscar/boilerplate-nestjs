import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressErrors } from '@domain/errors/address.error';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  ICreateAddressEntityService,
  ICreateAddressEntityServiceInput,
  ICreateAddressEntityServiceOutput,
} from '@domain/services/entities/address/create.service';
import { Inject } from '@nestjs/common';

export class CreateAddressEntityService implements ICreateAddressEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_ADDRESS)
    private readonly addressRepository: IAddressRepositoryDatabase,
  ) {}

  async execute(
    params: ICreateAddressEntityServiceInput,
  ): Promise<ICreateAddressEntityServiceOutput> {
    try {
      const address = await this.addressRepository.create(params);

      return right(address);
    } catch (err) {
      console.log(err);
      return left(AddressErrors.createEntity());
    }
  }
}
