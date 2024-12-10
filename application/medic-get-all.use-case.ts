import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicResponseDto } from './dtos/medic.dto';

export class MedicGetAllUseCase {
  constructor(private readonly medicRepository: MedicRepository) {}

  async execute() {
    const medics = await this.medicRepository.getAll();
    return MedicResponseDto.fromDomainToResponse(medics);
  }
}
