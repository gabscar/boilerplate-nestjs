export interface IBaseService<I, O> {
  execute(props: I, ...args: unknown[]): Promise<O>;
}
