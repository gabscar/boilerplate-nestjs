import { right } from '@domain/common/either';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import {
  IFindByUserEntityService,
  IFindByUserEntityServiceInput,
  IFindByUserEntityServiceOutput,
} from '@domain/services/entities/user/findBy.service';

export class FindByUserEntityServiceMock implements IFindByUserEntityService {
  constructor(private readonly userRepository: IUserRepositoryDatabase) {}

  async execute(
    params: IFindByUserEntityServiceInput,
  ): Promise<IFindByUserEntityServiceOutput> {
    const user = await this.userRepository.findBy(params);
    return right(user);
  }

  static getSpies(service: FindByUserEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
