import { MedicRepository } from '../domain/repositories/medic.repository';

export class MedicGetOneUseCase {
  constructor(private readonly medicRepository: MedicRepository) {}

  execute(id: number) {
    return this.medicRepository.getOne(id);
  }
}
