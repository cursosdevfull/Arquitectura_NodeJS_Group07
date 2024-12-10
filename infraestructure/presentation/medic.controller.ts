import {
    MedicDeleteUseCase,
    MedicGetAllUseCase,
    MedicGetOneUseCase,
    MedicInsertUseCase,
    MedicUpdateUseCase,
} from '../../application';
import { Medic } from '../../domain';

export class MedicController {
  constructor(
    private readonly getAllUseCase: MedicGetAllUseCase,
    private readonly getOneUseCase: MedicGetOneUseCase,
    private readonly insertUseCase: MedicInsertUseCase,
    private readonly updateUseCase: MedicUpdateUseCase,
    private readonly deleteUseCase: MedicDeleteUseCase
  ) {}

  async getAll() {
    return await this.getAllUseCase.execute();
  }

  async getOne(id: number) {
    return await this.getOneUseCase.execute(id);
  }

  async insert(medic: Medic) {
    return await this.insertUseCase.execute(medic);
  }

  async update(medic: Medic) {
    return await this.updateUseCase.execute(medic);
  }

  async delete(id: number) {
    return await this.deleteUseCase.execute(id);
  }
}
