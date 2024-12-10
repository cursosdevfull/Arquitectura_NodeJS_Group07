import { Medic } from '../domain';
import { MedicRepository } from '../domain/repositories/medic.repository';

export class MedicInsertUseCase {
  constructor(private readonly medicRepository: MedicRepository) {}

  execute(medic: Medic) {
    return this.medicRepository.insert(medic);
  }
}
