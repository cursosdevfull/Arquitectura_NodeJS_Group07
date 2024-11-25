/* Adaptador */
class Database implements OperationDatabase {
  insert(medic: Medic): void {
    console.log("Medic inserted");
  }

  update(medic: Medic) {
    console.log("Medic updated");
  }
}

/* Puerto */
interface OperationDatabase {
  insert(medic: Medic): void;
  update(medic: Medic): void;
}

/* Lógica de negocio */
class MedicInsert {
  operation: OperationDatabase = new Database();

  execute(medic: Medic) {
    this.operation.insert(medic);
  }
}

class MedicUpdate {
  operation: OperationDatabase = new Database();

  execute(medic: Medic) {
    this.operation.update(medic);
  }
}

class Medic {
  private readonly medicId: number;
  private firstname: string;
  private lastname: string;
  private age: number;
  private cmp: string;
  private specialtyId: number;
  private subSpecialityId: number;

  constructor(
    medicId: number,
    firstname: string,
    lastname: string,
    age: number,
    cmp: string,
    specialtyId: number,
    subSpecialtyId: number
  ) {
    if (age < 18) throw "Medic's age must be greater than 18";
    if (cmp.length < 5) throw "Medic's cmp must be longer or equal than 5";
    if (!cmp.match(/^[A-Za-z]{2,2}[0-9]{3,3}$/g))
      throw "CMP must meet with the pattern /^[A-Za-z]{2,2}[0-9]{3,3}$/g";

    this.medicId = medicId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.cmp = cmp;
    this.specialtyId = specialtyId;
    this.subSpecialityId = subSpecialtyId;
  }

  properties() {
    return {
      medicId: this.medicId,
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      cmp: this.cmp,
      specialtyId: this.specialtyId,
      subSpecialtyId: this.subSpecialityId,
    };
  }

  update(cmp: string) {
    if (cmp.length < 5) throw "Medic's cmp must be longer or equal than 5";
    if (!cmp.match(/^[A-Za-z]{2,2}[0-9]{3,3}$/g))
      throw "CMP must meet with the pattern /^[A-Za-z]{2,2}[0-9]{3,3}$/g";

    this.cmp = cmp;
  }
}
