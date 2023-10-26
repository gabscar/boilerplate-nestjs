import { INJECTION_SERVICE_FIND_ALL_USER } from '@domain/constants/injections/user.constant';
import { UserEntity } from '@domain/entities/user.entity';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IFindAllUserInput } from '@domain/interfaces/user/findAll.interface';
import { IFindAllUserEntityService } from '@domain/services/entities/user/findAll.service';
import { IFindAllUserUseCase } from '@domain/usecases/user/findAll.usecase';
import { Inject } from '@nestjs/common';

export class FindAllUserUseCase implements IFindAllUserUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_FIND_ALL_USER)
    private readonly findAllUserEntityService: IFindAllUserEntityService,
  ) {}

  async execute(
    params: IFindAllUserInput,
  ): Promise<IPaginationOutput<UserEntity>> {
    const userList = await this.findAllUserEntityService.execute({
      filters: {
        where: {
          AND: [{ column: 'name', value: params?.name }],
          NOT: [{ column: 'email', value: 'noreply@mail.com' }],
        },
      },
      orders: [{ column: 'name', order: 'ASC' }],
      relations: [
        {
          table: 'address',
          columns: ['id', 'number'],
        },
      ],
      pagination: {
        page: params.page,
        take: params.take,
      },
    });

    if (userList.isLeft()) {
      throw userList.value;
    }

    return userList.value;
  }
}
