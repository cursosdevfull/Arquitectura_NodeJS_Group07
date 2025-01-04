import { Inject, Injectable } from '@nestjs/common';
import { err, ok, Result } from 'neverthrow';
import { ResultPage } from 'src/config/types/result-page';
import { ScheduleListDatabaseException } from 'src/core/exceptions/database.exception';
import { IsNull, Repository } from 'typeorm';

import { BaseException } from '../../../core/exceptions/base.exception';
import {
  ScheduleGetOneDatabaseException,
  ScheduleListByPageDatabaseException,
  ScheduleSaveDatabaseException,
} from '../../../core/exceptions/database.exception';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule, ScheduleProps } from '../domain/schedule';
import { ScheduleEntity } from './entities/schedule.entity';

export type ScheduleGetAllResult = Promise<Result<Schedule[], BaseException>>;
export type ScheduleGetOneResult = Promise<
  Result<Schedule | null, BaseException>
>;
export type ScheduleGetByPageResult = Promise<
  Result<ResultPage<Schedule>, BaseException>
>;
export type ScheduleSaveResult = Promise<Result<Schedule, BaseException>>;

@Injectable()
export class ScheduleInfrastructure implements ScheduleRepository {
  constructor(
    @Inject('ScheduleRepository')
    private readonly repository: Repository<ScheduleEntity>,
  ) {}

  async save(schedule: Schedule): ScheduleSaveResult {
    try {
      const {
        scheduleId,
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
        createdAt,
        updatedAt,
        deletedAt,
      } = schedule.properties();

      const entity = new ScheduleEntity();
      entity.scheduleId = scheduleId;
      //entity.course = courseId;
      entity.title = title;
      entity.scheduleDate = scheduleDate;
      entity.scheduleTime = scheduleTime;
      entity.scheduleDuration = scheduleDuration;
      entity.slogan = slogan;
      entity.description = description;
      entity.requeriments = requeriments;
      entity.learningGoals = learningGoals;
      entity.syllabus = syllabus;
      entity.price = price;
      entity.frequency = frequency;
      entity.createdAt = createdAt;
      entity.updatedAt = updatedAt;
      entity.deletedAt = deletedAt;

      await this.repository.save(entity);
      return ok(schedule);
    } catch (error) {
      return err(new ScheduleSaveDatabaseException(error.message, error.stack));
    }
  }

  async findAll(): ScheduleGetAllResult {
    try {
      const results = await this.repository.find({
        where: { deletedAt: IsNull() },
      });

      return ok(
        results.map((result: ScheduleEntity) => {
          const props: ScheduleProps = {
            scheduleId: result.scheduleId,
            courseId: 0, //result.courseId,
            title: result.title,
            scheduleDate: result.scheduleDate,
            scheduleTime: result.scheduleTime,
            scheduleDuration: result.scheduleDuration,
            slogan: result.slogan,
            description: result.description,
            requeriments: result.requeriments,
            learningGoals: result.learningGoals,
            syllabus: result.syllabus,
            price: result.price,
            frequency: result.frequency,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
            deletedAt: result.deletedAt,
          };
          return new Schedule(props);
        }),
      );
    } catch (error) {
      return err(new ScheduleListDatabaseException(error.message, error.stack));
    }
  }

  async findById(scheduleId: number): ScheduleGetOneResult {
    try {
      const result = await this.repository.findOne({
        where: { scheduleId, deletedAt: IsNull() },
      });

      if (!result) return ok(null);

      const props: ScheduleProps = {
        scheduleId: result.scheduleId,
        courseId: 1, //result.courseId,
        title: result.title,
        scheduleDate: result.scheduleDate,
        scheduleTime: result.scheduleTime,
        scheduleDuration: result.scheduleDuration,
        slogan: result.slogan,
        description: result.description,
        requeriments: result.requeriments,
        learningGoals: result.learningGoals,
        syllabus: result.syllabus,
        price: result.price,
        frequency: result.frequency,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
        deletedAt: result.deletedAt,
      };

      return ok(new Schedule(props));
    } catch (error) {
      return err(
        new ScheduleGetOneDatabaseException(error.message, error.stack),
      );
    }
  }

  async getByPage(page: number, pageSize: number): ScheduleGetByPageResult {
    try {
      const skip = (page - 1) * pageSize;
      const [records, total] = await this.repository.findAndCount({
        where: { deletedAt: IsNull() },
        take: pageSize,
        skip,
      });

      const recordsDomain = records.map((result: ScheduleEntity) => {
        const props: ScheduleProps = {
          scheduleId: result.scheduleId,
          courseId: 1, //result.courseId,
          title: result.title,
          scheduleDate: result.scheduleDate,
          scheduleTime: result.scheduleTime,
          scheduleDuration: result.scheduleDuration,
          slogan: result.slogan,
          description: result.description,
          requeriments: result.requeriments,
          learningGoals: result.learningGoals,
          syllabus: result.syllabus,
          price: result.price,
          frequency: result.frequency,
          createdAt: result.createdAt,
          updatedAt: result.updatedAt,
          deletedAt: result.deletedAt,
        };
        return new Schedule(props);
      });

      return ok({
        data: recordsDomain,
        page,
        pageSize,
        total,
      });
    } catch (error) {
      return err(
        new ScheduleListByPageDatabaseException(error.message, error.stack),
      );
    }
  }
}
