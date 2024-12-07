import { Medic, MedicProps } from './medic';
import {
  AddressArrayVO,
  IncludeStringVO,
  LengthStringVO,
  PatternStringVO,
  PhoneNumberVO,
  RangeNumberVO,
} from './value-objects';

export class MedicFactory {
  private constructor() {}

  static create(props: MedicProps): Medic {
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
    PatternStringVO.create(
      "Email",
      props.email,
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
    );
    IncludeStringVO.create("Gender", props.gender, "MALE", "FEMALE");

    return new Medic(props);
  }
}

const props: MedicProps = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  email: "john.doe@email.com",
  addresses: [
    {
      address: "1234 Main St",
      city: "Springfield",
    },
  ],
};

const medic = MedicFactory.create(props);
console.log(medic);
