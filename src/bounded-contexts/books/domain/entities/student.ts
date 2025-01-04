export class Student {
  readonly studentId: number;
  readonly name: string;

  constructor(studentId: number, name: string) {
    this.studentId = studentId;
    this.name = name;
  }
}
