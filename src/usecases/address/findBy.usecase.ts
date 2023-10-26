import { INJECTION_SERVICE_FIND_BY_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressEntity } from '@domain/entities/address.entity';
import { IFindByAddressInput } from '@domain/interfaces/address/findBy.interface';
import { IFindByAddressEntityService } from '@domain/services/entities/address/findBy.service';
import { IFindByAddressUseCase } from '@domain/usecases/address/findBy.usecase';
import { Inject } from '@nestjs/common';

export class FindByAddressUseCase implements IFindByAddressUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_ADDRESS)
    private readonly findByAddressEntityService: IFindByAddressEntityService,
  ) {}

  async execute(params: IFindByAddressInput): Promise<AddressEntity> {
    const address = await this.findByAddressEntityService.execute(params);

    if (address.isLeft()) {
      throw address.value;
    }

    return address.value;
  }
}
