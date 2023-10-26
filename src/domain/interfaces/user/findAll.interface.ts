import { IPaginationInput } from '../common/pagination.interface';

export interface IFindAllUserInput extends Partial<IPaginationInput> {
  name?: string;
  email?: string;
}
