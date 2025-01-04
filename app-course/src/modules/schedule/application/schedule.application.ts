import { Inject, Injectable } from '@nestjs/common';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/schedule';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

@Injectable()
export class ScheduleApplication {
  constructor(
    @Inject(ScheduleInfrastructure)
    private readonly repository: ScheduleRepository,
  ) {}

  async save(schedule: Schedule) {
    return this.repository.save(schedule);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(scheduleId: number) {
    return this.repository.findById(scheduleId);
  }

  async getByPage(page: number, perPage: number) {
    return this.repository.getByPage(page, perPage);
  }
}
