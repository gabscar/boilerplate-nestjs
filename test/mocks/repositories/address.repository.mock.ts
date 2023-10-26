import {
  AddressEntity,
  IAddressUseCaseOptions,
} from '@domain/entities/address.entity';
import { ICreateAddressInput } from '@domain/interfaces/address/create.interface';
import { IFindByAddressInput } from '@domain/interfaces/address/findBy.interface';
import {
  IUpdateAddressInput,
  IWhereUpdateAddressInput,
} from '@domain/interfaces/address/update.interface';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IAddressRepositoryDatabase } from '@domain/repositories/address.repository';
import { AddressEntityMock } from '@mocks/entities/address.entity.mock';
import { UseCaseOptionsUtils } from 'test/utils/useCaseOptions.utils';

export class AddressRepositoryMock implements IAddressRepositoryDatabase {
  create(params: ICreateAddressInput): Promise<AddressEntity> {
    return Promise.resolve(AddressEntityMock.create(params));
  }

  delete(id: string): Promise<void> {
    return Promise.resolve();
  }

  findBy(params: IFindByAddressInput): Promise<AddressEntity> {
    const filterProps = UseCaseOptionsUtils.getEntityFilterProps(params);
    return Promise.resolve(AddressEntityMock.create(filterProps));
  }
  update(
    where: IWhereUpdateAddressInput,
    params: IUpdateAddressInput,
  ): Promise<AddressEntity> {
    return Promise.resolve(
      AddressEntityMock.create({ id: String(where.value), ...params }),
    );
  }
  findAll(
    params: IAddressUseCaseOptions,
  ): Promise<IPaginationOutput<AddressEntity>> {
    const addresses = [AddressEntityMock.create()];
    return Promise.resolve({
      data: addresses,
      meta: {
        taken: addresses.length,
        page: params?.pagination.page || 1,
        max: addresses.length,
      },
    });
  }

  static getSpies(repository: AddressRepositoryMock) {
    return {
      createSpy: jest.spyOn(repository, 'create'),
      deleteSpy: jest.spyOn(repository, 'delete'),
      findAllSpy: jest.spyOn(repository, 'findAll'),
      findBySpy: jest.spyOn(repository, 'findBy'),
      updateSpy: jest.spyOn(repository, 'update'),
    };
  }
}
