import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';

import { ScheduleApplication } from '../../application/schedule.application';
import { scheduleProviders } from '../providers/schedule.provider';
import { ScheduleInfrastructure } from '../schedule.infrastructure';
import { ScheduleController } from './schedule.controller';

@Module({
  controllers: [ScheduleController],
  imports: [DatabaseModule],
  providers: [
    ScheduleInfrastructure,
    ScheduleApplication,
    ...scheduleProviders,
  ],
})
export class ScheduleModule {}
