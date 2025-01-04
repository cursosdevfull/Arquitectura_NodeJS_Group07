export abstract class VO<T> {
  readonly value: T;

  protected constructor(value: T) {
    this.value = value;
  }
}
