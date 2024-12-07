import { NumberOutOfRange } from '../exceptions';
import { BaseVO } from './base.vo';

export class RangeNumberVO extends BaseVO<number> {
  private constructor(value: number) {
    super(value);
  }

  static create(
    fieldName: string,
    field: number | undefined,
    min: number,
    max: number | undefined = 0
  ): RangeNumberVO | null {
    if (max && field && (field <= min || field >= max)) {
      throw new NumberOutOfRange(
        `${fieldName} must be a number between ${min} and ${max}`
      );
    } else if (field && field <= min) {
      throw new NumberOutOfRange(
        `${fieldName} must be a number greater or equal than ${min}`
      );
    }

    if (!field) return null;

    return new RangeNumberVO(field);
  }
}
