import { DataSource } from 'typeorm';

import { ScheduleEntity } from '../entities/schedule.entity';

export const scheduleProviders = [
  {
    provide: 'ScheduleRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ScheduleEntity),
    inject: ['DATABASE_RW'],
  },
];
