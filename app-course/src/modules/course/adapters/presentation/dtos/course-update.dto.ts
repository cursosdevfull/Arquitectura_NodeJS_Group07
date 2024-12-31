import { IsEnum, IsOptional, IsString } from 'class-validator';
import { LEVEL } from 'src/modules/course/application/course';

export class CourseUpdateDto {
  @IsOptional()
  @IsString({ message: 'Invalid title' })
  title: string;

  @IsOptional()
  @IsEnum(LEVEL, {
    message: 'Invalid level',
  })
  level: string;
}
