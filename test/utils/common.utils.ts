export function instantiateAndGetSpies<
  T extends {
    new (...args: Array<any>): InstanceType<T>;
    getSpies: (instance: InstanceType<T>) => ReturnType<T['getSpies']>;
  },
>(classMock: T, ...params: ConstructorParameters<T>) {
  const instance = new classMock(...params);
  return {
    instance,
    spies: classMock.getSpies(instance),
  };
}
