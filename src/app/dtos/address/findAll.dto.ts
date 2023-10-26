import {
  DEFAULT_MAX_LENGTH,
  DEFAULT_ZIP_CODE_LENGTH,
} from '@domain/constants/common.constant';
import { IFindAllAddressInput } from '@domain/interfaces/address/findAll.interface';
import { IsOptional, IsString, Length, MaxLength } from 'class-validator';
import { PaginationDto } from '../common/pagination.dto';

export class FindAllAddressDto
  extends PaginationDto
  implements IFindAllAddressInput
{
  @IsOptional()
  @IsString()
  @Length(DEFAULT_ZIP_CODE_LENGTH, DEFAULT_ZIP_CODE_LENGTH)
  zipCode?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  street?: string;
}
