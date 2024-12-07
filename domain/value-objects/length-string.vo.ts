import { LengthStringTooShort } from '../exceptions';

export class LengthStringVO {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  static create(
    fieldName: string,
    field: string | undefined,
    length: number
  ): LengthStringVO {
    if (!field || field.length < length) {
      throw new LengthStringTooShort(
        `${fieldName} must have ${length} characters at least`
      );
    }

    return new LengthStringVO(field);
  }

  get value(): string {
    return this._value;
  }
}
