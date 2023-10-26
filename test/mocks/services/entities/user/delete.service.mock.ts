import { right } from '@domain/common/either';
import { IUserRepositoryDatabase } from '@domain/repositories/user.repository';
import { IDeleteAddressEntityServiceOutput } from '@domain/services/entities/address/delete.service';
import { IDeleteUserEntityService } from '@domain/services/entities/user/delete.service';

export class DeleteUserEntityServiceMock implements IDeleteUserEntityService {
  constructor(private readonly userRepository: IUserRepositoryDatabase) {}

  async execute(id: string): Promise<IDeleteAddressEntityServiceOutput> {
    await this.userRepository.delete(id);

    return right(null);
  }
  static getSpies(service: DeleteUserEntityServiceMock) {
    return {
      executeSpy: jest.spyOn(service, 'execute'),
    };
  }
}
