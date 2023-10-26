import { ApiException } from '@app/exceptions/api.exception';
import { HttpStatus } from '@nestjs/common';

export class AddressErrors extends ApiException {
  static createEntity(): ApiException {
    return new AddressErrors(
      {
        code: 'ADE-001',
        message:
          'An error occurred while trying to create address, please try again later',
        shortMessage: 'createEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static readEntity(): ApiException {
    return new AddressErrors(
      {
        code: 'ADE-002',
        message:
          'An error occurred while trying to read address, please try again later',
        shortMessage: 'readEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static updateEntity(): ApiException {
    return new AddressErrors(
      {
        code: 'ADE-003',
        message:
          'An error occurred while trying to update address, please try again later',
        shortMessage: 'updateEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static deleteEntity(): ApiException {
    return new AddressErrors(
      {
        code: 'ADE-004',
        message:
          'An error occurred while trying to delete address, please try again later',
        shortMessage: 'deleteEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  static notFound(): ApiException {
    return new AddressErrors(
      {
        code: 'ADE-005',
        message: 'The address was not found',
        shortMessage: 'addressNotFound',
      },
      HttpStatus.NOT_FOUND,
    );
  }

  static list(): ApiException {
    return new AddressErrors(
      {
        code: 'ADE-006',
        message:
          'An error occurred while trying to list addresses, please try again later',
        shortMessage: 'listEntityFailed',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
