export interface IBaseUseCase<P extends Array<any>, R> {
  execute(...args: P): Promise<R>;
}
