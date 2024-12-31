import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class SchedulePageDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  page: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  pageSize: number;
}
