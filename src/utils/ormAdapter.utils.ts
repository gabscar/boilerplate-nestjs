import { IUseCaseOptions } from '@domain/interfaces/common/useCaseOptions.interface';

export class OrmAdapterUtils {
  static validate<Entity, FilterColumns, Relations>(
    useCaseOptions: IUseCaseOptions<Entity, FilterColumns, Relations>,
  ) {
    this.validatePagination(useCaseOptions?.pagination);
  }

  private static validatePagination<Entity, FilterColumns, Relations>(
    pagination: IUseCaseOptions<Entity, FilterColumns, Relations>['pagination'],
  ) {
    if (!pagination) return;

    if (pagination.page < 1 || pagination.take < 1) {
      throw new Error(
        `Invalid pagination. Expect "page" and "take" to be greater than 0 but got "${JSON.stringify(
          pagination,
          null,
          2,
        )}".`,
      );
    }
  }
}
