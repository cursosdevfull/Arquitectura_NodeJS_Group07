import { Medic } from '../domain';
import { MedicRepository } from '../domain/repositories/medic.repository';

export class MedicUpdateUseCase {
  constructor(private readonly medicRepository: MedicRepository) {}

  execute(medic: Medic) {
    return this.medicRepository.update(medic);
  }
}
