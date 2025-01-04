export class Classes {
  readonly name: string;
  readonly frequency: string;
  readonly schedule: string;

  constructor(name: string, frequency: string, schedule: string) {
    this.name = name;
    this.frequency = frequency;
    this.schedule = schedule;
  }
}
