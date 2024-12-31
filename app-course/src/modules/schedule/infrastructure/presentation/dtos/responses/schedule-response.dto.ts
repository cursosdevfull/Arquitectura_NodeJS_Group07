import { Expose, plainToInstance } from 'class-transformer';

import { Schedule } from '../../../../domain/schedule';

export class ScheduleResponse {
  @Expose()
  scheduleId: number;

  @Expose()
  courseId: number;

  @Expose()
  title: string;

  @Expose()
  scheduleDate: Date;

  @Expose()
  scheduleTime: string;

  @Expose()
  scheduleDuration: string;

  @Expose()
  slogan: string;

  @Expose()
  description: string;

  @Expose()
  requeriments: string[];

  @Expose()
  learningGoals: string[];

  @Expose()
  syllabus: string[];

  @Expose()
  price: number;

  @Expose()
  frequency: string;
}

export class ScheduleResponseDto {
  static fromDomainToResponse(schedule: Schedule): ScheduleResponse {
    return plainToInstance(ScheduleResponse, schedule.properties(), {
      excludeExtraneousValues: true,
    });
  }
}
