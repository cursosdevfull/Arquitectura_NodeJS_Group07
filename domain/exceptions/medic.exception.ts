import { DomainException, DomainExceptionCode } from './domain.exception';

export class AddressesIsEmpty extends DomainException {
  constructor(message?: string) {
    super(message ? message : AddressesIsEmpty.getMessage());
    Object.setPrototypeOf(this, AddressesIsEmpty.prototype);

    this.name = DomainExceptionCode.AddressesIsEmptyException;
  }

  static getMessage(): string {
    return "Addresses is empty";
  }
}

export class AddressIsEmpty extends DomainException {
  constructor(message?: string) {
    super(message ? message : AddressIsEmpty.getMessage());
    Object.setPrototypeOf(this, AddressIsEmpty.prototype);

    this.name = DomainExceptionCode.AddressIsEmptyException;
  }

  static getMessage(): string {
    return "Address is empty";
  }
}

export class GenderNotIncluded extends DomainException {
  constructor(message?: string) {
    super(message ? message : GenderNotIncluded.getMessage());
    Object.setPrototypeOf(this, GenderNotIncluded.prototype);

    this.name = DomainExceptionCode.GenderNotIncludedException;
  }

  static getMessage(): string {
    return "Addresses is empty";
  }
}

export class LengthStringTooShort extends DomainException {
  constructor(message?: string) {
    super(message ? message : LengthStringTooShort.getMessage());
    Object.setPrototypeOf(this, LengthStringTooShort.prototype);

    this.name = DomainExceptionCode.LengthStringTooShortException;
  }

  static getMessage(): string {
    return "String length is too short";
  }
}

export class InvalidPhoneNumber extends DomainException {
  constructor(message?: string) {
    super(message ? message : InvalidPhoneNumber.getMessage());
    Object.setPrototypeOf(this, InvalidPhoneNumber.prototype);

    this.name = DomainExceptionCode.InvalidPhoneNumberException;
  }

  static getMessage(): string {
    return "Phone number is invalid";
  }
}

export class NumberOutOfRange extends DomainException {
  constructor(message?: string) {
    super(message ? message : NumberOutOfRange.getMessage());
    Object.setPrototypeOf(this, NumberOutOfRange.prototype);

    this.name = DomainExceptionCode.NumberOutOfRangeException;
  }

  static getMessage(): string {
    return "Number is out of range";
  }
}

export class StringNotIncluded extends DomainException {
  constructor(message?: string) {
    super(message ? message : StringNotIncluded.getMessage());
    Object.setPrototypeOf(this, StringNotIncluded.prototype);

    this.name = DomainExceptionCode.StringNotIncludedException;
  }

  static getMessage(): string {
    return "String is not included in the allowed values";
  }
}

export class StringPatternMismatch extends DomainException {
  constructor(message?: string) {
    super(message ? message : StringPatternMismatch.getMessage());
    Object.setPrototypeOf(this, StringPatternMismatch.prototype);

    this.name = DomainExceptionCode.StringPatternMismatchException;
  }

  static getMessage(): string {
    return "String does not match the required pattern";
  }
}
