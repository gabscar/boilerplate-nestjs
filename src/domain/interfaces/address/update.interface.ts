import { IWhereParams } from '../common/where.interface';
import { ICreateAddressInput } from './create.interface';

export type IUpdateAddressInput = Partial<ICreateAddressInput>;
export type IWhereUpdateAddressInput = IWhereParams<'id'>;
