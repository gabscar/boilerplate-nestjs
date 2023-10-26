// at least 8 characters with at least one uppercase letter,
// one lowercase letter, one number, and one special character.
export const REGEX_USER_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.:;<>\-_])[A-Za-z\d@$!%*#?&.:;<>\-_]{8,}$/;

export const DATE_REGEX =
  /^(?:\d{4}[/-](?:0?[1-9]|1[0-2])[/-](?:0?[1-9]|[12]\d|3[01]))$/gi;

export const ONLY_NON_NUMBERS_REGEX = /\D/g;
