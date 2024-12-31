import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { LEVEL } from 'src/modules/course/application/course';

export class CourseCreateDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Invalid title' })
  title: string;

  @IsNotEmpty({ message: 'Level is required' })
  @IsEnum(LEVEL, {
    message: 'Invalid level',
  })
  level: string;
}
