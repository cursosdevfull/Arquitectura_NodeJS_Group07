import { MedicRepository } from '../domain/repositories/medic.repository';

export class MedicDeleteUseCase {
  constructor(private readonly medicRepository: MedicRepository) {}

  execute(id: number) {
    return this.medicRepository.delete(id);
  }
}
