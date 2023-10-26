import { AddressPresenter } from '@app/presenters/address.presenter';
import { INJECTION_USECASE_FIND_BY_ADDRESS } from '@domain/constants/injections/address.constant';
import { IFindByAddressUseCase } from '@domain/usecases/address/findBy.usecase';
import { Controller, Get, Inject, Param } from '@nestjs/common';

@Controller('address')
export class FindByIdAddressController {
  constructor(
    @Inject(INJECTION_USECASE_FIND_BY_ADDRESS)
    private readonly findByAddressUseCase: IFindByAddressUseCase,
  ) {}

  @Get('/find/id/:id')
  async findById(@Param('id') id: string) {
    const address = await this.findByAddressUseCase.execute({
      where: {
        AND: [
          {
            column: 'id',
            value: id,
          },
        ],
      },
    });
    return new AddressPresenter().present(address);
  }
}
