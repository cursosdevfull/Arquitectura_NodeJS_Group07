import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ScheduleIdDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  scheduleId: number;
}
