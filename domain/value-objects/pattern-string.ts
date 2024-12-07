import { StringPatternMismatch } from '../exceptions';
import { BaseVO } from './base.vo';

export class PatternStringVO extends BaseVO<string> {
  private constructor(value: string) {
    super(value);
  }

  static create(
    fieldName: string,
    field: string | undefined,
    pattern: RegExp
  ): PatternStringVO {
    if (!field || !field.match(pattern)) {
      throw new StringPatternMismatch(
        `${fieldName} must meet with pattern ${pattern}`
      );
    }

    return new PatternStringVO(field);
  }

  get value(): string {
    return this._value;
  }
}
