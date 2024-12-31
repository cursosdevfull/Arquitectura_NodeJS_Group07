import { Inject } from '@nestjs/common';
import { CourseAdapter } from 'src/modules/course/adapters/course.adapter';

import { CoursePort } from '../../../../dist/modules/course/ports/course.port';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/schedule';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

export class ScheduleApplication {
  constructor(
    @Inject(ScheduleInfrastructure)
    private readonly repository: ScheduleRepository,
    @Inject(CourseAdapter)
    private readonly coursePort: CoursePort,
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
