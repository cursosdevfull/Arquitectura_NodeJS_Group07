import { Expose, plainToInstance } from 'class-transformer';

import { Course } from '../../../../application/course';

export class CourseResponse {
  @Expose({ groups: ['admin'] })
  courseId: number;

  @Expose({ groups: ['admin', 'user'] })
  title: string;

  @Expose({ groups: ['admin'] })
  level: string;
}

export class CourseResponseDto {
  static fromDomainToResponse(course: Course): CourseResponse {
    return plainToInstance(CourseResponse, course.properties(), {
      excludeExtraneousValues: true,
      groups: ['admin'],
    });
    //const { courseId, title, level } = course.properties();

    //return plainToInstance(CourseResponse, { courseId, title, level });

    /*     const courseResponse = new CourseResponse();
    courseResponse.courseId = courseId;
    courseResponse.title = title;
    courseResponse.level = level;

    return courseResponse; */
  }
}
