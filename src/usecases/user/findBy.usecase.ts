import { INJECTION_SERVICE_FIND_BY_USER } from '@domain/constants/injections/user.constant';
import { UserEntity } from '@domain/entities/user.entity';
import { IFindByUserInput } from '@domain/interfaces/user/findBy.interface';
import { IFindByUserEntityService } from '@domain/services/entities/user/findBy.service';
import { IFindByUserUseCase } from '@domain/usecases/user/findBy.usecase';
import { Inject } from '@nestjs/common';

export class FindByUserUseCase implements IFindByUserUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_USER)
    private readonly findByUserEntityService: IFindByUserEntityService,
  ) {}

  async execute(params: IFindByUserInput): Promise<UserEntity> {
    const user = await this.findByUserEntityService.execute(params);

    if (user.isLeft()) {
      throw user.value;
    }

    return user.value;
  }
}
