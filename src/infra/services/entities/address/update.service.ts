import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressErrors } from '@domain/errors/address.error';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  IUpdateAddressEntityService,
  IUpdateAddressEntityServiceInput,
  IUpdateAddressEntityServiceOutput,
} from '@domain/services/entities/address/update.service';
import { Inject } from '@nestjs/common';

export class UpdateAddressEntityService implements IUpdateAddressEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_ADDRESS)
    private readonly addressRepository: IAddressRepositoryDatabase,
  ) {}

  async execute({
    id,
    params,
  }: IUpdateAddressEntityServiceInput): Promise<IUpdateAddressEntityServiceOutput> {
    try {
      const address = await this.addressRepository.update(
        { column: 'id', value: id },
        params,
      );

      return right(address);
    } catch (err) {
      console.log(err);
      return left(AddressErrors.updateEntity());
    }
  }
}
