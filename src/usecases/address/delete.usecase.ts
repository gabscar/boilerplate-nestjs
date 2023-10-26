import { INJECTION_SERVICE_DELETE_ADDRESS } from '@domain/constants/injections/address.constant';
import { IDeleteAddressEntityService } from '@domain/services/entities/address/delete.service';
import { IDeleteAddressUseCase } from '@domain/usecases/address/delete.usecase';
import { Inject } from '@nestjs/common';

export class DeleteAddressUseCase implements IDeleteAddressUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_DELETE_ADDRESS)
    private readonly deleteAddressEntityService: IDeleteAddressEntityService,
  ) {}

  async execute(id: string): Promise<void> {
    const address = await this.deleteAddressEntityService.execute(id);

    if (address.isLeft()) {
      throw address.value;
    }
  }
}
