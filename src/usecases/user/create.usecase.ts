import {
  INJECTION_SERVICE_CREATE_USER,
  INJECTION_SERVICE_FIND_BY_USER,
} from '@domain/constants/injections/user.constant';
import { UserEntity } from '@domain/entities/user.entity';
import { UsersErrors } from '@domain/errors/user.error';
import { ICreateUserInput } from '@domain/interfaces/user/create.interface';
import { ICreateUserEntityService } from '@domain/services/entities/user/create.service';
import { IFindByUserEntityService } from '@domain/services/entities/user/findBy.service';
import { ICreateUserUseCase } from '@domain/usecases/user/create.usecase';
import { Inject } from '@nestjs/common';

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_USER)
    private readonly findByUserEntityService: IFindByUserEntityService,
    @Inject(INJECTION_SERVICE_CREATE_USER)
    private readonly createUserEntityService: ICreateUserEntityService,
  ) {}

  async execute(params: ICreateUserInput): Promise<UserEntity> {
    const userExists = await this.findByUserEntityService.execute({
      where: { AND: [{ column: 'email', value: params.email }] },
    });

    if (userExists.isRight()) {
      throw UsersErrors.alreadyExists(params.email);
    }

    const user = await this.createUserEntityService.execute(params);

    if (user.isLeft()) {
      throw user.value;
    }

    return user.value;
  }
}
