import { DEFAULT_MAX_LENGTH } from '@domain/constants/common.constant';
import { IFindAllUserInput } from '@domain/interfaces/user/findAll.interface';
import { IsOptional, IsString, MaxLength } from 'class-validator';
import { PaginationDto } from '../common/pagination.dto';

export class FindAllUserDto extends PaginationDto implements IFindAllUserInput {
  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(DEFAULT_MAX_LENGTH)
  email?: string;
}
