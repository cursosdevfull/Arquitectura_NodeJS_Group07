import { Classes } from "../entities/classes";
import { Local } from "../entities/local";
import { STATUS } from "../entities/status";
import { Student } from "../entities/student";

export class Book {
  private readonly bookId: number;
  private bookDate: Date;
  private status: STATUS;
  private classes: Classes[];
  private local: Local;
  private student: Student;

  constructor(
    bookDate: Date,
    status: STATUS,
    classes: Classes[],
    local: Local,
    student: Student
  ) {
    this.bookId = new Date().getTime();
    this.bookDate = bookDate;
    this.status = status;
    this.classes = classes;
    this.local = local;
    this.student = student;
  }
}
