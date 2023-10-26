import { DEFAULT_MAX_LENGTH } from '@domain/constants/common.constant';
import { IUpdateUserInput } from '@domain/interfaces/user/update.interface';
import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto implements IUpdateUserInput {
  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  name?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @MaxLength(DEFAULT_MAX_LENGTH)
  email?: string;
}
