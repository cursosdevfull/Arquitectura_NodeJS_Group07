import {
  ScheduleGetAllResult,
  ScheduleGetByPageResult,
  ScheduleGetOneResult,
  ScheduleSaveResult,
} from '../../infrastructure/schedule.infrastructure';
import { Schedule } from '../schedule';

export type ScheduleRepository = {
  save(schedule: Schedule): ScheduleSaveResult;
  findAll(): ScheduleGetAllResult;
  findById(scheduleId: number): ScheduleGetOneResult;
  getByPage(page: number, perPage: number): ScheduleGetByPageResult;
};
