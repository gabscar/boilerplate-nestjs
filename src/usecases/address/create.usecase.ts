import { INJECTION_SERVICE_CREATE_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressEntity } from '@domain/entities/address.entity';
import { ICreateAddressInput } from '@domain/interfaces/address/create.interface';
import { ICreateAddressEntityService } from '@domain/services/entities/address/create.service';
import { ICreateAddressUseCase } from '@domain/usecases/address/create.usecase';
import { Inject } from '@nestjs/common';

export class CreateAddressUseCase implements ICreateAddressUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_CREATE_ADDRESS)
    private readonly createAddressEntityService: ICreateAddressEntityService,
  ) {}

  async execute(params: ICreateAddressInput): Promise<AddressEntity> {
    const address = await this.createAddressEntityService.execute(params);

    if (address.isLeft()) {
      throw address.value;
    }

    return address.value;
  }
}
