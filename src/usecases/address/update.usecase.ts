import { INJECTION_SERVICE_UPDATE_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressEntity } from '@domain/entities/address.entity';
import { IUpdateAddressInput } from '@domain/interfaces/address/update.interface';
import { IUpdateAddressEntityService } from '@domain/services/entities/address/update.service';
import { IUpdateAddressUseCase } from '@domain/usecases/address/update.usecase';
import { Inject } from '@nestjs/common';

export class UpdateAddressUseCase implements IUpdateAddressUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_UPDATE_ADDRESS)
    private readonly updateAddressEntityService: IUpdateAddressEntityService,
  ) {}

  async execute(
    id: string,
    params: IUpdateAddressInput,
  ): Promise<AddressEntity> {
    const address = await this.updateAddressEntityService.execute({
      id,
      params,
    });

    if (address.isLeft()) {
      throw address.value;
    }

    return address.value;
  }
}
