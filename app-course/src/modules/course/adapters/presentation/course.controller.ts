import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CourseListDatabaseException } from 'src/core/exceptions/database.exception';

import { CourseSaveDatabaseException } from '../../../../core/exceptions/database.exception';
import { Course, LEVEL } from '../../application/course';
import { CourseApplication } from '../../application/course.application';
import { CourseCreateDto } from './dtos/course-create.dto';
import { CourseIdDto } from './dtos/course-id.dto';
import { CoursePageDto } from './dtos/course-page.dto';
import { CourseUpdateDto } from './dtos/course-update.dto';
import { CourseResponseDto } from './dtos/responses/course-response.dto';

@Controller('course')
export class CourseController {
  logger = new Logger('CourseController');

  constructor(private readonly application: CourseApplication) {}

  @Get()
  async getAll() {
    const result = await this.application.getAll();

    if (result.isErr()) {
      if (result.error instanceof CourseListDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      return result.value.map((course: Course) =>
        CourseResponseDto.fromDomainToResponse(course),
      );
    }
  }

  @Post()
  async create(@Body() body: CourseCreateDto) {
    const { title, level } = body;
    const course = new Course({ title, level: level as LEVEL });
    const result = await this.application.save(course);

    if (result.isErr()) {
      if (result.error instanceof CourseSaveDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      return '';
    }
  }

  @Put('/:courseId')
  async update(@Body() body: CourseUpdateDto, @Param() param: CourseIdDto) {
    const { title, level } = body;
    const { courseId } = param;

    const result = await this.application.getOne(courseId);

    if (result.isErr()) {
      if (result.error instanceof CourseListDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      const course = result.value;
      if (!course) return null;
      this.logger.debug(JSON.stringify(course));
      course.update({ title, level: level as LEVEL });
      return this.application.save(course);
    }
  }

  @Get('/:courseId')
  async getOne(@Param() param: CourseIdDto) {
    const { courseId } = param;

    const result = await this.application.getOne(courseId);

    if (result.isErr()) {
      if (result.error instanceof CourseListDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      return result.value;
    }
  }

  @Delete('/:courseId')
  async remove(@Param() param: CourseIdDto) {
    const { courseId } = param;

    const result = await this.application.getOne(courseId);

    if (result.isErr()) {
      if (result.error instanceof CourseListDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      const course = result.value;
      if (!course) return null;

      course.delete();

      return this.application.save(course);
    }
  }

  @Get('/page/:page/size/:pageSize')
  async getByPage(@Param() param: CoursePageDto) {
    const { page, pageSize } = param;

    const result = await this.application.getByPage(page, pageSize);

    if (result.isErr()) {
      if (result.error instanceof CourseListDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      const course = result.value;
      if (!course) return null;

      return result.value;
    }
  }
}
