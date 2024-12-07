import { StringNotIncluded } from '../exceptions';
import { BaseVO } from './base.vo';

export class IncludeStringVO extends BaseVO<string> {
  private constructor(value: string) {
    super(value);
  }

  static create(
    fieldName: string,
    field: string | undefined,
    ...values: string[]
  ): IncludeStringVO | null {
    if (field && !values.includes(field)) {
      throw new StringNotIncluded(
        `${fieldName} must be one of ${values.join(", ")}`
      );
    }

    if (!field) return null;

    return new IncludeStringVO(field);
  }
}
