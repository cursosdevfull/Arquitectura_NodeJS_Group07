import {
    MedicDeleteUseCase,
    MedicGetAllUseCase,
    MedicGetOneUseCase,
    MedicInsertUseCase,
    MedicUpdateUseCase,
} from '../application';
import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicController, MedicInfrastructure } from '../infraestructure';

const repository: MedicRepository = new MedicInfrastructure();

const getAllUseCase = new MedicGetAllUseCase(repository);
const getOneUseCase = new MedicGetOneUseCase(repository);
const insertUseCase = new MedicInsertUseCase(repository);
const updateUseCase = new MedicUpdateUseCase(repository);
const deleteUseCase = new MedicDeleteUseCase(repository);

const controller = new MedicController(
  getAllUseCase,
  getOneUseCase,
  insertUseCase,
  updateUseCase,
  deleteUseCase
);

controller.getAll().then(console.log);
