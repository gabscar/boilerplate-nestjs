import { right } from '@domain/common/either';
import { ICreateUserInput } from '@domain/interfaces/user/create.interface';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import {
  ICreateUserEntityService,
  ICreateUserEntityServiceOutput,
} from '@domain/services/entities/user/create.service';

export class CreateUserEntityServiceMock implements ICreateUserEntityService {
  constructor(private readonly userRepository: IUserRepositoryDatabase) {}

  async execute(
    params: ICreateUserInput,
  ): Promise<ICreateUserEntityServiceOutput> {
    const user = await this.userRepository.create(params);
    return right(user);
  }

  static getSpies(service: CreateUserEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
