import { FindAllAddressDto } from '@app/dtos/address/findAll.dto';
import { AddressPresenter } from '@app/presenters/address.presenter';
import { INJECTION_USECASE_FIND_ALL_ADDRESS } from '@domain/constants/injections/address.constant';
import { IFindAllAddressUseCase } from '@domain/usecases/address/findAll.usecase';
import { Controller, Get, Inject, Query } from '@nestjs/common';

@Controller('address')
export class FindAllAddressController {
  constructor(
    @Inject(INJECTION_USECASE_FIND_ALL_ADDRESS)
    private readonly findAllAddressUseCase: IFindAllAddressUseCase,
  ) {}

  @Get('/find/all')
  async findAll(@Query() params: FindAllAddressDto) {
    const addressList = await this.findAllAddressUseCase.execute(params);
    return new AddressPresenter().list(addressList);
  }
}
