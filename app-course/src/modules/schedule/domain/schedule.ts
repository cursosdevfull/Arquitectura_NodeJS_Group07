type ScheduleRequired = {
  courseId: number;
  title: string;
  scheduleDate: Date;
  scheduleTime: string;
  scheduleDuration: number;
  slogan: string;
  description: string;
  requeriments: string[];
  learningGoals: string[];
  syllabus: string[];
  price: number;
  frequency: string;
};

type ScheduleOptional = {
  scheduleId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type ScheduleProps = ScheduleRequired & Partial<ScheduleOptional>;
export type ScheduleUpdate = Partial<ScheduleRequired>;

export class Schedule {
  private readonly scheduleId: number;
  private courseId: number;
  private title: string;
  private scheduleDate: Date;
  private scheduleTime: string;
  private scheduleDuration: number;
  private slogan: string;
  private description: string;
  private requeriments: string[];
  private learningGoals: string[];
  private syllabus: string[];
  private price: number;
  private frequency: string;
  private createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: ScheduleProps) {
    if (props.title.length < 3)
      throw new Error('Title must have at least 3 characters');
    if (props.scheduleDuration < 1)
      throw new Error('Schedule duration must be greater than 0');
    if (props.price < 0)
      throw new Error('Price must be greater than or equal to 0');
    if (
      props.frequency !== 'daily' &&
      props.frequency !== 'weekly' &&
      props.frequency !== 'monthly'
    )
      throw new Error('Frequency must be daily, weekly or monthly');
    if (props.slogan.length < 3)
      throw new Error('Slogan must have at least 3 characters');
    if (props.description.length < 30)
      throw new Error('Description must have at least 30 characters');
    if (props.scheduleDate < new Date())
      throw new Error('Schedule date must be greater than or equal to today');
    if (props.requeriments.length < 1)
      throw new Error('Requeriments must have at least 1 item');
    if (props.learningGoals.length < 1)
      throw new Error('Learning goals must have at least 1 item');
    if (props.syllabus.length < 1)
      throw new Error('Syllabus must have at least 1 item');

    Object.assign(this, props);

    !props.createdAt && (this.createdAt = new Date());
  }

  properties() {
    return {
      scheduleId: this.scheduleId,
      courseId: this.courseId,
      title: this.title,
      scheduleDate: this.scheduleDate,
      scheduleTime: this.scheduleTime,
      scheduleDuration: this.scheduleDuration,
      slogan: this.slogan,
      description: this.description,
      requeriments: this.requeriments,
      learningGoals: this.learningGoals,
      syllabus: this.syllabus,
      price: this.price,
      frequency: this.frequency,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(props: ScheduleUpdate) {
    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.deletedAt = new Date();
  }

  clone() {
    const clone = Object.create(this);
    Object.assign(clone, this);
    delete clone.scheduleId;

    return clone;
  }
}
