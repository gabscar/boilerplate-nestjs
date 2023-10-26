import { AddressEntity } from '@domain/entities/address.entity';
import { IPaginationOutput } from '@domain/interfaces/common/pagination.interface';
import { IPresenter } from '@domain/interfaces/common/presenter.interface';

export class AddressPresenter implements IPresenter<AddressEntity> {
  present(address: AddressEntity): AddressEntity {
    return address;
  }

  list(
    addressList: IPaginationOutput<AddressEntity>,
  ): IPaginationOutput<AddressEntity> {
    const { data, meta } = addressList;

    return {
      data: data.map((address) => this.present(address)),
      meta,
    };
  }
}
