/* Adaptador */
class Database implements OperationDatabase {
  insert(medic: Medic): void {
    console.log("Medic inserted");
  }
}

/* Puerto */
interface OperationDatabase {
  insert(medic: Medic): void;
}

/* Lógica de negocio */
class MedicInsert {
  operation!: OperationDatabase;

  execute(medic: Medic) {
    this.operation.insert(medic);
  }
}

class Medic {
  medicId!: number;
  firstname!: string;
  lastname!: string;
  age!: number;
  cmp!: string;
  specialtyId!: number;
  subSpecialityId!: number;
}

/*class Medic {
    constructor(public medicId: number, public firstname: string, public lastname: string, 
        public age: number, public cmp: string, public specialtyId: number, public subSpecialtyId: number) {
    }
}*/

/*class Medic {
    medicId: number
    firstname: string
    lastname: string
    age: number
    cmp: string
    specialtyId: number
    subSpecialityId: number

    constructor(medicId: number, firstname: string, lastname: string, age: number, cmp: string, specialtyId: number, subSpecialtyId: number) {
        this.medicId = medicId
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.cmp = cmp
        this.specialtyId = specialtyId
        this.subSpecialityId = subSpecialtyId
    }
}*/
