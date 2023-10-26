export interface IWhereFilter<Column> {
  AND?: IWhereParams<Column>[];
  OR?: IWhereParams<Column>[];
  NOT?: IWhereParams<Column>[];
}

export type IWhereParams<
  Column,
  Value = string | number | boolean | Date | null,
> = {
  column: Column;
  value?: Value;
  contains?: Value;
} & ({ value: Value } | { contains: Value });
