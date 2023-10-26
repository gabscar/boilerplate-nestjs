import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function ConfirmationPasswordEqual(
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'confirmationPasswordEqual',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(confirmationPassword: any, args: ValidationArguments) {
          const { object } = args;
          return confirmationPassword === object['password'];
        },
        defaultMessage() {
          return `Passwords don't match`;
        },
      },
    });
  };
}

export function RequiredTakeIfPage(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'requiredTakeIfPage',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(page: any, args: ValidationArguments) {
          const { object } = args;
          return page && object['take'];
        },
        defaultMessage() {
          return `If 'page' is sent, 'take' is required.`;
        },
      },
    });
  };
}

export function IsPositiveNumberString(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isPositiveNumberString',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          const isStringNumber =
            typeof value === 'string' && /^\d+$/.test(value);
          const numericValue = parseInt(value, 10);
          return isStringNumber && numericValue > 0;
        },
        defaultMessage(args: ValidationArguments) {
          return `The '${args.property}' must be a positive number string.`;
        },
      },
    });
  };
}
