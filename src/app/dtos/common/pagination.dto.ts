import { TransformInNumber } from '@app/transformers/common.transform';
import { RequiredTakeIfPage } from '@app/validators/common.validator';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @RequiredTakeIfPage()
  @Transform(TransformInNumber)
  page?: number;

  @IsOptional()
  @IsNumber()
  @Transform(TransformInNumber)
  take?: number;
}
