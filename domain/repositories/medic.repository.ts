import { Medic } from '../medic';

export type MedicRepository = {
  delete(id: number): Promise<void>;
  getAll(): Promise<Medic[]>;
  getOne(id: number): Promise<Medic>;
  insert(medic: Medic): Promise<void>;
  update(medic: Medic): Promise<void>;
};
