import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinDate,
  MinLength,
} from 'class-validator';

export class ScheduleCreateDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  courseId: number;

  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @MinDate(new Date())
  scheduleDate: Date;

  @IsNotEmpty()
  @IsString()
  scheduleTime: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  scheduleDuration: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  slogan: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  description: string;

  @IsNotEmpty()
  @MinLength(3)
  @IsArray({ each: true })
  requeriments: string[];

  @IsNotEmpty()
  @MinLength(3)
  @IsArray({ each: true })
  learningGoals: string[];

  @IsNotEmpty()
  @MinLength(3)
  @IsArray({ each: true })
  syllabus: string[];

  @IsNotEmpty()
  @Min(1)
  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  frequency: string;
}
