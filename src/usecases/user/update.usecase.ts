import {
  INJECTION_SERVICE_FIND_BY_USER,
  INJECTION_SERVICE_UPDATE_USER,
} from '@domain/constants/injections/user.constant';
import { UserEntity } from '@domain/entities/user.entity';
import { UsersErrors } from '@domain/errors/user.error';
import { IUpdateUserInput } from '@domain/interfaces/user/update.interface';
import { IFindByUserEntityService } from '@domain/services/entities/user/findBy.service';
import { IUpdateUserEntityService } from '@domain/services/entities/user/update.service';
import { IUpdateUserUseCase } from '@domain/usecases/user/update.usecase';
import { Inject } from '@nestjs/common';

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_USER)
    private readonly findByUserEntityService: IFindByUserEntityService,
    @Inject(INJECTION_SERVICE_UPDATE_USER)
    private readonly updateUserEntityService: IUpdateUserEntityService,
  ) {}

  async execute(id: string, params: IUpdateUserInput): Promise<UserEntity> {
    await this.validate(id, params);

    const user = await this.updateUserEntityService.execute({
      where: { column: 'id', value: id },
      params,
    });

    if (user.isLeft()) {
      throw user.value;
    }

    return user.value;
  }

  private async validate(id: string, params: IUpdateUserInput): Promise<void> {
    await this.validateId(id);
    await this.validateEmail(id, params.email);
  }

  private async validateId(id: string) {
    const userExists = await this.findByUserEntityService.execute({
      where: { AND: [{ column: 'id', value: id }] },
    });

    if (userExists.isLeft()) {
      throw userExists.value;
    }
  }

  private async validateEmail(id: string, email: string): Promise<void> {
    if (!email) return;

    const emailExists = await this.findByUserEntityService.execute({
      where: {
        NOT: [{ column: 'id', value: id }],
        AND: [{ column: 'email', value: email }],
      },
    });

    if (emailExists.isRight()) {
      throw UsersErrors.alreadyExists(email);
    }
  }
}
