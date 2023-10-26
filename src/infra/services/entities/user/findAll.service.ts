import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_USER } from '@domain/constants/injections/user.constant';
import { UsersErrors } from '@domain/errors/user.error';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import {
  IFindAllUserEntityService,
  IFindAllUserEntityServiceInput,
  IFindAllUserEntityServiceOutput,
} from '@domain/services/entities/user/findAll.service';
import { Inject } from '@nestjs/common';

export class FindAllUserEntityService implements IFindAllUserEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_USER)
    private readonly userRepository: IUserRepositoryDatabase,
  ) {}

  async execute(
    params: IFindAllUserEntityServiceInput,
  ): Promise<IFindAllUserEntityServiceOutput> {
    try {
      const userList = await this.userRepository.findAll(params);
      return right(userList);
    } catch (err) {
      console.log(err);
      return left(UsersErrors.list());
    }
  }
}
