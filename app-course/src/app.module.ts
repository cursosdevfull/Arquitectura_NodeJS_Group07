import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CourseModule } from './modules/course/adapters/presentation/course.module';
import { ScheduleModule } from './modules/schedule/infrastructure/presentation/schedule.module';

const modules = [
  CourseModule,
  ScheduleModule,
  ConfigModule.forRoot({ isGlobal: true, envFilePath: '../env.txt' }),
];

@Module({
  imports: [...modules],
})
export class AppModule {}
