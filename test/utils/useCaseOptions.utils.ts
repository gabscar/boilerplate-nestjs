import { IUseCaseOptions } from '@domain/interfaces/common/useCaseOptions.interface';

export class UseCaseOptionsUtils {
  static getEntityFilterProps(
    filterProps: IUseCaseOptions<any, any, any>['filters'],
  ) {
    return {
      ...this.loopThroughFilterArrays(filterProps.where.AND),
      ...this.loopThroughFilterArrays(filterProps.where.OR),
      ...this.loopThroughFilterArrays(filterProps.where.NOT),
      ...this.loopThroughFilterArrays(filterProps.where.CONTAINS),
    };
  }

  private static loopThroughFilterArrays(array = []) {
    const props = {};

    array.forEach(({ column, value }) => {
      props[column] = value;
    });

    return props;
  }
}
