export type TAddresses = Address[];

export class Address {
  readonly city: string;
  readonly address: string;

  constructor(city: string, address: string) {
    this.city = city;
    this.address = address;
  }
}
