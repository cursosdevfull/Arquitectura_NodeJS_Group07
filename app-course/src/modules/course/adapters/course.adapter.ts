import { Inject } from '@nestjs/common';
import { err, ok, Result } from 'neverthrow';
import { ResultPage } from 'src/config/types/result-page';
import { IsNull, Repository } from 'typeorm';

import { BaseException } from '../../../core/exceptions/base.exception';
import {
  CourseGetOneDatabaseException,
  CourseListByPageDatabaseException,
  CourseListDatabaseException,
  CourseSaveDatabaseException,
} from '../../../core/exceptions/database.exception';
import { Course, CourseProps, LEVEL } from '../application/course';
import { CoursePort } from '../ports/course.port';
import { CourseEntity } from './entities/course.entity';

export type CourseGetAllResult = Promise<Result<Course[], BaseException>>;
export type CourseGetOneResult = Promise<Result<Course | null, BaseException>>;
export type CourseGetByPageResult = Promise<
  Result<ResultPage<Course>, BaseException>
>;
export type CourseSaveResult = Promise<Result<Course, BaseException>>;

export class CourseAdapter implements CoursePort {
  constructor(
    @Inject('CourseRepository')
    private readonly repository: Repository<CourseEntity>,
  ) {}

  async getAll(): CourseGetAllResult {
    try {
      const results = await this.repository.find({
        where: { deletedAt: IsNull() },
      });

      return ok(
        results.map((result: CourseEntity) => {
          const props: CourseProps = {
            courseId: result.courseId,
            title: result.title,
            level: result.level as LEVEL,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
            deletedAt: result.deletedAt,
          };
          return new Course(props);
        }),
      );
    } catch (error) {
      return err(new CourseListDatabaseException(error.message, error.stack));
    }
  }

  async getOne(courseId: number): CourseGetOneResult {
    try {
      const result = await this.repository.findOne({
        where: { courseId, deletedAt: IsNull() },
      });

      if (!result) return ok(null);

      const props: CourseProps = {
        courseId: result.courseId,
        title: result.title,
        level: result.level as LEVEL,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
        deletedAt: result.deletedAt,
      };

      return ok(new Course(props));
    } catch (error) {
      return err(new CourseGetOneDatabaseException(error.message, error.stack));
    }
  }

  async getByPage(page: number, pageSize: number): CourseGetByPageResult {
    try {
      const skip = (page - 1) * pageSize;
      const [records, total] = await this.repository.findAndCount({
        where: { deletedAt: IsNull() },
        take: pageSize,
        skip,
      });

      const recordsDomain = records.map((result: CourseEntity) => {
        const props: CourseProps = {
          courseId: result.courseId,
          title: result.title,
          level: result.level as LEVEL,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          deletedAt: result.deletedAt,
        };
        return new Course(props);
      });

      return ok({
        data: recordsDomain,
        page,
        pageSize,
        total,
      });
    } catch (error) {
      return err(
        new CourseListByPageDatabaseException(error.message, error.stack),
      );
    }
  }

  async save(course: Course): CourseSaveResult {
    try {
      const { courseId, title, level, createdAt, updatedAt, deletedAt } =
        course.properties();

      const entity = new CourseEntity();
      entity.courseId = courseId;
      entity.title = title;
      entity.level = level;
      entity.createdAt = createdAt;
      entity.updatedAt = updatedAt;
      entity.deletedAt = deletedAt;

      await this.repository.save(entity);
      return ok(course);
    } catch (error) {
      return err(new CourseSaveDatabaseException(error.message, error.stack));
    }
  }
}
