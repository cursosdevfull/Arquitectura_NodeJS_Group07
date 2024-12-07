import { InvalidPhoneNumber } from '../exceptions';
import { BaseVO } from './base.vo';

export class PhoneNumberVO extends BaseVO<string> {
  private constructor(value: string) {
    super(value);
  }

  static create(
    fieldName: string,
    phone: string | undefined,
    pattern: RegExp = /^9[0-9]{8,8}$/
  ): PhoneNumberVO | null {
    if (phone && !phone.match(pattern)) {
      throw new InvalidPhoneNumber(
        `${fieldName} must meet with pattern ${pattern}`
      );
    }

    if (!phone) return null;

    return new PhoneNumberVO(phone);
  }
}
