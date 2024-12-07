import { TAddresses } from '../entities/address';
import { AddressesIsEmpty, AddressIsEmpty } from '../exceptions';
import { BaseVO } from './base.vo';

export class AddressArrayVO extends BaseVO<TAddresses> {
  private constructor(value: TAddresses) {
    super(value);
  }

  static create(
    fieldName: string,
    field: TAddresses | undefined
  ): AddressArrayVO | null {
    if (!field) return null;
    if (field && field.length === 0) {
      throw new AddressesIsEmpty(`${fieldName} must have at least one address`);
    }

    for (const address of field) {
      if (address.address.length < 3) {
        throw new AddressIsEmpty(
          `Each address in ${fieldName} must have at least 3 characters`
        );
      }
    }

    return new AddressArrayVO(field);
  }
}
