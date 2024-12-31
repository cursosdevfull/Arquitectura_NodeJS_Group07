import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  InternalServerErrorException,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import {
  ScheduleGetOneDatabaseException,
  ScheduleListDatabaseException,
  ScheduleSaveDatabaseException,
} from '../../../../core/exceptions/database.exception';
import { ScheduleApplication } from '../../application/schedule.application';
import { Schedule } from '../../domain/schedule';
import { ScheduleResponseDto } from './dtos/responses/schedule-response.dto';
import { ScheduleCreateDto } from './dtos/schedule-create.dto';
import { ScheduleIdDto } from './dtos/schedule-id.dto';
import { SchedulePageDto } from './dtos/schedule-page.dto';
import { ScheduleUpdateDto } from './dtos/schedule-update.dto';

@Controller('schedule')
export class ScheduleController {
  logger = new Logger('ScheduleController');

  constructor(
    @Inject(ScheduleApplication)
    private readonly application: ScheduleApplication,
  ) {}

  @Post()
  async create(@Body() body: ScheduleCreateDto) {
    const {
      courseId,
      title,
      scheduleDate,
      scheduleTime,
      scheduleDuration,
      slogan,
      description,
      requeriments,
      learningGoals,
      syllabus,
      price,
      frequency,
    } = body;
    const schedule = new Schedule({
      courseId,
      title,
      scheduleDate,
      scheduleTime,
      scheduleDuration,
      slogan,
      description,
      requeriments,
      learningGoals,
      syllabus,
      price,
      frequency,
    });
    const result = await this.application.save(schedule);

    if (result.isErr()) {
      if (result.error instanceof ScheduleSaveDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      return '';
    }
  }

  @Get()
  async getAll() {
    const result = await this.application.findAll();

    if (result.isErr()) {
      if (result.error instanceof ScheduleListDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      return result.value.map((schedule: Schedule) =>
        ScheduleResponseDto.fromDomainToResponse(schedule),
      );
    }
  }

  @Put('/:scheduleId')
  async update(@Body() body: ScheduleUpdateDto, @Param() param: ScheduleIdDto) {
    const {
      courseId,
      title,
      scheduleDate,
      scheduleTime,
      scheduleDuration,
      slogan,
      description,
      requeriments,
      learningGoals,
      syllabus,
      price,
      frequency,
    } = body;
    const { scheduleId } = param;

    const result = await this.application.findById(scheduleId);

    if (result.isErr()) {
      if (result.error instanceof ScheduleListDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      const schedule = result.value;
      if (!schedule) return null;
      this.logger.debug(JSON.stringify(schedule));
      schedule.update({
        courseId,
        title,
        scheduleDate,
        scheduleTime,
        scheduleDuration,
        slogan,
        description,
        requeriments,
        learningGoals,
        syllabus,
        price,
        frequency,
      });
      return this.application.save(schedule);
    }
  }

  @Get('/:courseId')
  async getOne(@Param() param: ScheduleIdDto) {
    const { scheduleId } = param;

    const result = await this.application.findById(scheduleId);

    if (result.isErr()) {
      if (result.error instanceof ScheduleGetOneDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      return result.value;
    }
  }

  @Delete('/:scheduleId')
  async remove(@Param() param: ScheduleIdDto) {
    const { scheduleId } = param;

    const result = await this.application.findById(scheduleId);

    if (result.isErr()) {
      if (result.error instanceof ScheduleSaveDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      const schedule = result.value;
      if (!schedule) return null;

      schedule.delete();

      return this.application.save(schedule);
    }
  }

  @Get('/page/:page/size/:pageSize')
  async getByPage(@Param() param: SchedulePageDto) {
    const { page, pageSize } = param;

    const result = await this.application.getByPage(page, pageSize);

    if (result.isErr()) {
      if (result.error instanceof ScheduleSaveDatabaseException) {
        throw new InternalServerErrorException(result.error.message, {
          cause: result,
          description: result.error.stack,
        });
      }
    } else {
      const schedule = result.value;
      if (!schedule) return null;

      return result.value;
    }
  }
}
