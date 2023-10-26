import { INJECTION_SERVICE_FIND_ALL_ADDRESS } from '@domain/constants/injections/address.constant';
import { AddressEntity } from '@domain/entities/address.entity';
import { IFindAllAddressInput } from '@domain/interfaces/address/findAll.interface';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IFindAllAddressEntityService } from '@domain/services/entities/address/findAll.service';
import { IFindAllAddressUseCase } from '@domain/usecases/address/findAll.usecase';
import { Inject } from '@nestjs/common';

export class FindAllAddressUseCase implements IFindAllAddressUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_FIND_ALL_ADDRESS)
    private readonly findAllAddressEntityService: IFindAllAddressEntityService,
  ) {}

  async execute(
    params: IFindAllAddressInput,
  ): Promise<IPaginationOutput<AddressEntity>> {
    const addressList = await this.findAllAddressEntityService.execute({
      filters: {
        where: { AND: [{ column: 'zipCode', contains: params?.zipCode }] },
      },
      orders: [{ column: 'updatedAt', order: 'ASC' }],
      relations: [{ table: 'user', columns: ['name', 'email'] }],
      pagination: {
        page: params.page,
        take: params.take,
      },
    });

    if (addressList.isLeft()) {
      throw addressList.value;
    }

    return addressList.value;
  }
}
