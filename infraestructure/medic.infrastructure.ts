import { Medic } from '../domain/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';

export class MedicInfrastructure implements MedicRepository {
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Medic[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          new Medic({
            firstname: "John",
            lastname: "Doe",
            age: 25,
            email: "john.doe@email.com",
          }),
          new Medic({
            firstname: "Jane",
            lastname: "Doe",
            age: 30,
            email: "jane.doe@email.com",
          }),
          new Medic({
            firstname: "Alice",
            lastname: "Doe",
            age: 35,
            email: "alicia.doe@email.com",
          }),
        ]);
      }, 1200);
    });
  }
  getOne(id: number): Promise<Medic> {
    throw new Error("Method not implemented.");
  }
  insert(medic: Medic): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(medic: Medic): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
