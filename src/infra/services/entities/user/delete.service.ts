import { left, right } from '@domain/common/either';
import { INJECTION_REPOSITORY_USER } from '@domain/constants/injections/user.constant';
import { UsersErrors } from '@domain/errors/user.error';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import {
  IDeleteUserEntityService,
  IDeleteUserEntityServiceOutput,
} from '@domain/services/entities/user/delete.service';
import { Inject } from '@nestjs/common';

export class DeleteUserEntityService implements IDeleteUserEntityService {
  constructor(
    @Inject(INJECTION_REPOSITORY_USER)
    private readonly userRepository: IUserRepositoryDatabase,
  ) {}

  async execute(id: string): Promise<IDeleteUserEntityServiceOutput> {
    try {
      await this.userRepository.delete(id);

      return right(null);
    } catch (err) {
      console.log(err);
      return left(UsersErrors.deleteEntity());
    }
  }
}
