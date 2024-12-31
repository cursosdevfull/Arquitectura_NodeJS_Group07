import { DataSource } from 'typeorm';

import { CourseEntity } from '../entities/course.entity';

export const courseProviders = [
  {
    provide: 'CourseRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CourseEntity),
    inject: ['DATABASE_RW'],
  },
];
