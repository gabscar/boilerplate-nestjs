import { DATE_REGEX } from '@domain/constants/regex.constant';

export class CommonUtils {
  static isDatetime(value: string) {
    if (!value || typeof value !== 'string' || !value.match(DATE_REGEX)) {
      return false;
    }

    const date = new Date(value);

    return date instanceof Date && !isNaN(date.getTime());
  }
}
