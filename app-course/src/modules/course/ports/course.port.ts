import {
  CourseGetAllResult,
  CourseGetByPageResult,
  CourseGetOneResult,
  CourseSaveResult,
} from '../adapters/course.adapter';
import { Course } from '../application/course';

export type CoursePort = {
  getAll(): CourseGetAllResult;

  getOne(courseId: number): CourseGetOneResult;

  getByPage(page: number, pageSize: number): CourseGetByPageResult;

  save(course: Course): CourseSaveResult;
};
