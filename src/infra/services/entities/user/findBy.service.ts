import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_USER } from '@domain/constants/injections/user.constant';
import { UsersErrors } from '@domain/errors/user.error';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import {
  IFindByUserEntityService,
  IFindByUserEntityServiceInput,
  IFindByUserEntityServiceOutput,
} from '@domain/services/entities/user/findBy.service';
import { Inject } from '@nestjs/common';

export class FindByUserEntityService implements IFindByUserEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_USER)
    private readonly userRepository: IUserRepositoryDatabase,
  ) {}

  async execute(
    params: IFindByUserEntityServiceInput,
  ): Promise<IFindByUserEntityServiceOutput> {
    try {
      const user = await this.userRepository.findBy(params);

      if (!user) {
        return left(UsersErrors.notFound());
      }

      return right(user);
    } catch (err) {
      console.log(err);
      return left(UsersErrors.readEntity());
    }
  }
}
