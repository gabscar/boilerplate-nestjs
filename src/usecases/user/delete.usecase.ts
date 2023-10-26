import {
  INJECTION_SERVICE_DELETE_USER,
  INJECTION_SERVICE_FIND_BY_USER,
} from '@domain/constants/injections/user.constant';
import { IDeleteUserEntityService } from '@domain/services/entities/user/delete.service';
import { IFindByUserEntityService } from '@domain/services/entities/user/findBy.service';
import { IDeleteUserUseCase } from '@domain/usecases/user/delete.usecase';
import { Inject } from '@nestjs/common';

export class DeleteUserUseCase implements IDeleteUserUseCase {
  constructor(
    @Inject(INJECTION_SERVICE_FIND_BY_USER)
    private readonly findByUserEntityService: IFindByUserEntityService,
    @Inject(INJECTION_SERVICE_DELETE_USER)
    private readonly deleteUserEntityService: IDeleteUserEntityService,
  ) {}

  async execute(id: string): Promise<void> {
    const userExists = await this.findByUserEntityService.execute({
      where: { AND: [{ column: 'id', value: id }] },
    });

    if (userExists.isLeft()) {
      throw userExists.value;
    }

    const response = await this.deleteUserEntityService.execute(id);

    if (response.isLeft()) {
      throw response.value;
    }
  }
}
