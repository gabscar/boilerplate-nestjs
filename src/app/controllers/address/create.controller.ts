import { CreateAddressDto } from '@app/dtos/address/create.dto';
import { AddressPresenter } from '@app/presenters/address.presenter';
import { INJECTION_USECASE_CREATE_ADDRESS } from '@domain/constants/injections/address.constant';
import { ICreateAddressUseCase } from '@domain/usecases/address/create.usecase';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller('address')
export class CreateAddressController {
  constructor(
    @Inject(INJECTION_USECASE_CREATE_ADDRESS)
    private readonly createAddressUseCase: ICreateAddressUseCase,
  ) {}

  @Post()
  async create(@Body() params: CreateAddressDto) {
    const address = await this.createAddressUseCase.execute(params);
    return new AddressPresenter().present(address);
  }
}
