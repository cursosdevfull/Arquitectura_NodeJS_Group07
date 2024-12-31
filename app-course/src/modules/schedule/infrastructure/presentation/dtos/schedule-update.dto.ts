import {
  ArrayMinSize,
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class ScheduleUpdateDto {
  @IsOptional()
  @IsNumber({}, { message: 'Invalid course id' })
  courseId: number;

  @IsOptional()
  @IsString({ message: 'Invalid title' })
  title: string;

  @IsOptional()
  @IsDate({
    message: 'Invalid date',
  })
  scheduleDate: Date;

  @IsOptional()
  @IsString({ message: 'Invalid time' })
  scheduleTime: string;

  @IsOptional()
  @IsNumber({}, { message: 'Invalid duration' })
  scheduleDuration: number;

  @IsOptional()
  @IsString({ message: 'Invalid slogan' })
  slogan: string;

  @IsOptional()
  @IsString({ message: 'Invalid description' })
  description: string;

  @IsOptional()
  @IsArray({ message: 'Invalid requeriments' })
  @ArrayMinSize(1, { message: 'Requeriments must have at least 1 item' })
  requeriments: string[];

  @IsOptional()
  @IsArray({ message: 'Invalid learning goals' })
  @ArrayMinSize(1, { message: 'Learning goals must have at least 1 item' })
  learningGoals: string[];

  @IsOptional()
  @IsArray({ message: 'Invalid syllabus' })
  @ArrayMinSize(1, { message: 'Syllabus must have at least 1 item' })
  syllabus: string[];

  @IsOptional()
  @IsNumber({}, { message: 'Invalid price' })
  @Min(0, { message: 'Price must be greater than or equal to 0' })
  price: number;

  @IsOptional()
  @IsString({ message: 'Invalid frequency' })
  frequency: string;
}
