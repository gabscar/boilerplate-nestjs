import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressErrors } from '@domain/errors/address.error';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import {
  IDeleteAddressEntityService,
  IDeleteAddressEntityServiceOutput,
} from '@domain/services/entities/address/delete.service';
import { Inject } from '@nestjs/common';

export class DeleteAddressEntityService implements IDeleteAddressEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_ADDRESS)
    private readonly addressRepository: IAddressRepositoryDatabase,
  ) {}

  async execute(id: string): Promise<IDeleteAddressEntityServiceOutput> {
    try {
      await this.addressRepository.delete(id);

      return right(null);
    } catch (err) {
      console.log(err);
      return left(AddressErrors.deleteEntity());
    }
  }
}
