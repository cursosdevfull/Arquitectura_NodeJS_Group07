import { TAddresses } from './entities/address';
import { AddressArrayVO, LengthStringVO, PhoneNumberVO, RangeNumberVO } from './value-objects';

type TPhone = {
  work: string;
  personal?: string;
};

type TMedicalExpertise = {
  specialtyId: number;
  subSpecialtyId: number;
};

type TAuditTrail = {
  readonly createdAt: Date;
  updatedAt?: Date | undefined;
  deletedAt?: Date | undefined;
};

type MedicPropsRequired = {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
};

type TGENDER = "MALE" | "FEMALE";

type MedicPropsOptional = {
  gender: TGENDER;
  medicalExpertise: TMedicalExpertise;
  phones: TPhone;
  addresses: TAddresses;
  auditTrail: TAuditTrail;
};

export type MedicProps = MedicPropsRequired & Partial<MedicPropsOptional>;

export type MedicPropsToUpdate = Partial<
  Omit<MedicPropsRequired, "email"> &
    Pick<MedicPropsOptional, "medicalExpertise" | "phones" | "addresses">
>;

export class Medic {
  private readonly medicId: number;
  private firstname: string;
  private lastname: string;
  private age: number;
  private gender: TGENDER | undefined;
  private email: string;
  private medicalExpertise: TMedicalExpertise | undefined;
  private phones: TPhone | undefined;
  private addresses: TAddresses | undefined;
  private auditTrail: TAuditTrail;

  constructor(props: MedicProps) {
    this.medicId = new Date().getTime();
    this.firstname = props.firstname;
    this.lastname = props.lastname;
    this.age = props.age;
    this.email = props.email;
    if (props.gender) this.gender = props.gender;
    if (props.medicalExpertise) this.medicalExpertise = props.medicalExpertise;
    if (props.phones) this.phones = props.phones;
    if (props.addresses) this.addresses = props.addresses;

    this.auditTrail = {
      createdAt: new Date(),
    };
  }

  update(props: MedicPropsToUpdate) {
    LengthStringVO.create("Firstname", props.firstname, 3);
    LengthStringVO.create("Lastname", props.lastname, 3);
    RangeNumberVO.create("Age", props.age, 18, 90);
    RangeNumberVO.create("SpecialtyId", props.medicalExpertise?.specialtyId, 1);
    RangeNumberVO.create(
      "SubSpecialtyId",
      props.medicalExpertise?.subSpecialtyId,
      1
    );
    PhoneNumberVO.create("Phone work number", props.phones?.work);
    PhoneNumberVO.create("Phone personal number", props.phones?.personal);
    AddressArrayVO.create("Addresses", props.addresses);

    if (props.firstname) this.firstname = props.firstname;
    if (props.lastname) this.lastname = props.lastname;
    if (props.medicalExpertise) this.medicalExpertise = props.medicalExpertise;
    if (props.phones) this.phones = props.phones;
    if (props.addresses) this.addresses = props.addresses;

    this.auditTrail.updatedAt = new Date();
  }

  remove() {
    if (!this.auditTrail.deletedAt) this.auditTrail.deletedAt = new Date();
  }

  properties() {
    return {
      medicId: this.medicId,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      gender: this.gender,
      email: this.email,
      phones: this.phones,
      medicalExpertise: this.medicalExpertise,
      addresses: this.addresses,
      auditTrail: this.auditTrail,
    };
  }
}
