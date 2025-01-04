export class AdditionalInformation {
  readonly phones: string[];
  readonly email: string;

  constructor(phones: string[], email: string) {
    this.phones = phones;
    this.email = email;
  }
}
