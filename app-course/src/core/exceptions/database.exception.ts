import { BaseException } from './base.exception';
import { ErrorMessage } from './message.exception';

export class CourseListDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.COURSE_LIST_DATABASE_EXCEPTION;
    this.status = 500;
  }
}

export class CourseGetOneDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.COURSE_GET_ONE_DATABASE_EXCEPTION;
    this.status = 500;
  }
}

export class CourseListByPageDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.COURSE_LIST_BY_PAGE_DATABASE_EXCEPTION;
    this.status = 500;
  }
}

export class CourseSaveDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.COURSE_SAVE_DATABASE_EXCEPTION;
    this.status = 500;
  }
}

export class ScheduleListDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.SCHEDULE_LIST_DATABASE_EXCEPTION;
    this.status = 500;
  }
}

export class ScheduleGetOneDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.SCHEDULE_GET_ONE_DATABASE_EXCEPTION;
    this.status = 500;
  }
}

export class ScheduleListByPageDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.SCHEDULE_LIST_BY_PAGE_DATABASE_EXCEPTION;
    this.status = 500;
  }
}

export class ScheduleSaveDatabaseException extends BaseException {
  constructor(message: string, stack?: string) {
    super(message, stack);
    this.name = ErrorMessage.SCHEDULE_SAVE_DATABASE_EXCEPTION;
    this.status = 500;
  }
}
