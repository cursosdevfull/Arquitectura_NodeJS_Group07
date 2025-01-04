import { VO } from "./vo";

export class ArrayVO extends VO<any[]> {
  static create(value: any[], min: number, field: string) {
    if (value.length < min) {
      throw new Error(`${field} must be at least ${min} items long`);
    }
    return new ArrayVO(value);
  }
}
