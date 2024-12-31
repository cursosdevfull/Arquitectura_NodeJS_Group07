import { Inject } from '@nestjs/common';

import { CourseAdapter } from '../adapters/course.adapter';
import { CoursePort } from '../ports/course.port';
import { Course } from './course';

export class CourseApplication {
  constructor(@Inject(CourseAdapter) private readonly port: CoursePort) {}

  async getAll() {
    return this.port.getAll();
  }

  async save(course: Course) {
    return this.port.save(course);
  }

  async getOne(courseId: number) {
    return this.port.getOne(courseId);
  }

  async getByPage(page: number, pageSize: number) {
    return this.port.getByPage(page, pageSize);
  }
}
