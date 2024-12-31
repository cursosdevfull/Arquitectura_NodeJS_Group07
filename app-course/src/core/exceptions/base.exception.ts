export abstract class BaseException extends Error {
  status: number;
  stack?: string;

  constructor(message: string, stack?: string) {
    super(message);
    this.name = this.constructor.name;
    if (stack) {
      this.stack = stack;
    }
  }
}
