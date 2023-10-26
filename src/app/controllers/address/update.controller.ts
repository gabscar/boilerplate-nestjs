import { UpdateAddressDto } from '@app/dtos/address/update.dto';
import { AddressPresenter } from '@app/presenters/address.presenter';
import { INJECTION_USECASE_UPDATE_ADDRESS } from '@domain/constants/injections/address.constant';
import { IUpdateAddressUseCase } from '@domain/usecases/address/update.usecase';
import { Body, Controller, Inject, Param, Put } from '@nestjs/common';

@Controller('address')
export class UpdateAddressController {
  constructor(
    @Inject(INJECTION_USECASE_UPDATE_ADDRESS)
    private readonly updateAddressUseCase: IUpdateAddressUseCase,
  ) {}

  @Put(':id')
  async update(@Param('id') id: string, @Body() params: UpdateAddressDto) {
    const address = await this.updateAddressUseCase.execute(id, params);
    return new AddressPresenter().present(address);
  }
}
