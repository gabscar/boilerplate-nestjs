import { INJECTION_USECASE_DELETE_ADDRESS } from '@domain/constants/injections/address.constant';
import { IDeleteAddressUseCase } from '@domain/usecases/address/delete.usecase';
import { Controller, Delete, Inject, Param } from '@nestjs/common';

@Controller('address')
export class DeleteAddressController {
  constructor(
    @Inject(INJECTION_USECASE_DELETE_ADDRESS)
    private readonly deleteAddressUseCase: IDeleteAddressUseCase,
  ) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteAddressUseCase.execute(id);
  }
}
