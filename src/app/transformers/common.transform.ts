import { ONLY_NON_NUMBERS_REGEX } from '@domain/constants/regex.constant';
import { TransformFnParams } from 'class-transformer';

export function TransformInNumber({ value }: TransformFnParams) {
  if (!value) return;

  if (typeof value === 'number') return value;

  const stringNumber = value.replace(ONLY_NON_NUMBERS_REGEX, '');

  return Number(stringNumber);
}
