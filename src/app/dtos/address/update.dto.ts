import {
  DEFAULT_MAX_LENGTH,
  DEFAULT_ZIP_CODE_LENGTH,
} from '@domain/constants/common.constant';
import { IUpdateAddressInput } from '@domain/interfaces/address/update.interface';
import { IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class UpdateAddressDto implements IUpdateAddressInput {
  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  street?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  city?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  state?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  neighborhood?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  number?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  complement?: string;

  @IsOptional()
  @IsString()
  @Length(DEFAULT_ZIP_CODE_LENGTH, DEFAULT_ZIP_CODE_LENGTH)
  zipCode?: string;
}
