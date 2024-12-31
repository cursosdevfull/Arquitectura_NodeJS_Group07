import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';

import { CourseApplication } from '../../application/course.application';
import { CourseAdapter } from '../course.adapter';
import { courseProviders } from '../providers/course.provider';
import { CourseController } from './course.controller';

const controllers = [CourseController];

@Module({
  controllers: [...controllers],
  imports: [DatabaseModule],
  providers: [CourseAdapter, CourseApplication, ...courseProviders],
})
export class CourseModule {}
