import { IPaginationInput } from '../common/pagination.interface';

export interface IFindAllAddressInput extends Partial<IPaginationInput> {
  zipCode?: string;
  street?: string;
}
