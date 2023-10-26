import {
  DEFAULT_MAX_LENGTH,
  DEFAULT_ZIP_CODE_LENGTH,
} from '@domain/constants/common.constant';
import { ICreateAddressInput } from '@domain/interfaces/address/create.interface';
import { IsNotEmpty, IsString, Length, MaxLength } from 'class-validator';

export class CreateAddressDto implements ICreateAddressInput {
  @IsNotEmpty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  street: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  city: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  state: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  number: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  complement: string;

  @IsNotEmpty()
  @IsString()
  @Length(DEFAULT_ZIP_CODE_LENGTH, DEFAULT_ZIP_CODE_LENGTH)
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  userId: string;
}
