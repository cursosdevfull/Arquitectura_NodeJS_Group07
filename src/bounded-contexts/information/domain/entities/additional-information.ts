export class AdditionalInformation {
  readonly address: string;
  readonly phones: string[];
  readonly email: string;

  constructor(address: string, phones: string[], email: string) {
    if (address.length < 5)
      throw new Error("Address must be at least 5 characters long");
    if (phones.length === 0)
      throw new Error("At least one phone must be provided");
    if (email.length === 0) throw new Error("Email must be provided");
    if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/))
      throw new Error("Invalid email");

    this.address = address;
    this.phones = phones;
    this.email = email;
  }
}
