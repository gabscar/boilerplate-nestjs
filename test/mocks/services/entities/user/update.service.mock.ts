import { right } from '@domain/common/either';

import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';

import {
  IUpdateUserEntityService,
  IUpdateUserEntityServiceInput,
  IUpdateUserEntityServiceOutput,
} from '@domain/services/entities/user/update.service';

export class UpdateUserEntityServiceMock implements IUpdateUserEntityService {
  constructor(private readonly userRepository: IUserRepositoryDatabase) {}

  async execute({
    where,
    params,
  }: IUpdateUserEntityServiceInput): Promise<IUpdateUserEntityServiceOutput> {
    const user = await this.userRepository.update(where, params);
    return right(user);
  }

  static getSpies(service: UpdateUserEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
