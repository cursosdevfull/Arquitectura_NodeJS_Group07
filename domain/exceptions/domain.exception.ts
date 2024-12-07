export enum DomainExceptionCode {
  AddressesIsEmptyException = "ADDRESSES_IS_EMPTY",
  AddressIsEmptyException = "ADDRESS_IS_EMPTY",
  GenderNotIncludedException = "GENDER_NOT_INCLUDED",
  LengthStringTooShortException = "LENGTH_STRING_TOO_SHORT",
  InvalidPhoneNumberException = "INVALID_PHONE_NUMBER",
  NumberOutOfRangeException = "NUMBER_OUT_OF_RANGE",
  StringNotIncludedException = "STRING_NOT_INCLUDED",
  StringPatternMismatchException = "STRING_PATTERN_MISMATCH",
}

export abstract class DomainException extends Error {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, DomainException.prototype);

    this.name = DomainException.name;
  }
}
