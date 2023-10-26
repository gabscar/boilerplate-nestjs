import {
  AddressEntity,
  AddressRelations,
  IAddressFiltersOptions,
} from '@domain/entities/address.entity';
import { IUseCaseOptions } from '../common/useCaseOptions.interface';

export type IAddressUseCaseOptions = IUseCaseOptions<
  AddressEntity,
  IAddressFiltersOptions,
  AddressRelations
>;
