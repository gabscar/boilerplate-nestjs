import { AddressEntity } from '@domain/entities/address.entity';
import { UserEntityMock } from './user.entity.mock';

export class AddressEntityMock {
  static create(addressProps?: Partial<AddressEntity>) {
    const user = UserEntityMock.create();

    return new AddressEntity({
      id: 'anyAddressId',
      city: 'anyCity',
      number: 'anyNumber',
      state: 'anyState',
      street: 'anyStreet',
      zipCode: 'anyZipCode',
      complement: 'anyComplement',
      neighborhood: 'anyNeighborhood',
      user,
      userId: user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      ...addressProps,
    });
  }
}
