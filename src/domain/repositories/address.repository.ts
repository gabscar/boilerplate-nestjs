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

export interface IAddressRepositoryDatabase {
  create(params: ICreateAddressInput): Promise<AddressEntity>;
  delete(id: string): Promise<void>;
  findBy(params: IFindByAddressInput): Promise<AddressEntity>;
  findAll(
    params: IAddressUseCaseOptions,
  ): Promise<IPaginationOutput<AddressEntity>>;
  update(
    where: IWhereUpdateAddressInput,
    params: IUpdateAddressInput,
  ): Promise<AddressEntity>;
}
