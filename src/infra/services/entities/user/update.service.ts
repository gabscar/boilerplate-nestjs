import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_USER } from '@domain/constants/injections/user.constant';
import { UsersErrors } from '@domain/errors/user.error';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import {
  IUpdateUserEntityService,
  IUpdateUserEntityServiceInput,
  IUpdateUserEntityServiceOutput,
} from '@domain/services/entities/user/update.service';
import { Inject } from '@nestjs/common';

export class UpdateUserEntityService implements IUpdateUserEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_USER)
    private readonly userRepository: IUserRepositoryDatabase,
  ) {}

  async execute({
    where,
    params,
  }: IUpdateUserEntityServiceInput): Promise<IUpdateUserEntityServiceOutput> {
    try {
      const user = await this.userRepository.update(where, params);

      return right(user);
    } catch (err) {
      console.log(err);
      return left(UsersErrors.updateEntity());
    }
  }
}
