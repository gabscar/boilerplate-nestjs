import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_USER } from '@domain/constants/injections/user.constant';
import { UsersErrors } from '@domain/errors/user.error';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import {
  ICreateUserEntityService,
  ICreateUserEntityServiceInput,
  ICreateUserEntityServiceOutput,
} from '@domain/services/entities/user/create.service';
import { Inject } from '@nestjs/common';

export class CreateUserEntityService implements ICreateUserEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_USER)
    private readonly userRepository: IUserRepositoryDatabase,
  ) {}

  async execute(
    params: ICreateUserEntityServiceInput,
  ): Promise<ICreateUserEntityServiceOutput> {
    try {
      const user = await this.userRepository.create(params);

      return right(user);
    } catch (err) {
      console.log(err);
      return left(UsersErrors.createEntity());
    }
  }
}
