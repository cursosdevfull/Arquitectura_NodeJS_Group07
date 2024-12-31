export enum LEVEL {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  PRO = 'pro',
} //= 'beginner' | 'intermediate' | 'advanced';

type CourseRequired = {
  title: string;
};

type CourseOptional = {
  courseId: number;
  level: LEVEL;
  createdAt: Date;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
};

export type CourseProps = CourseRequired & Partial<CourseOptional>;
export type CourseUpdate = Partial<
  Pick<CourseRequired, 'title'> &
    Omit<CourseOptional, 'courseId' | 'createdAt' | 'updatedAt' | 'deletedAt'>
>;

export class Course {
  private readonly courseId: number;
  private title: string;
  private level: LEVEL;
  private readonly createdAt: Date;
  private updatedAt: Date | undefined;
  private deletedAt: Date | undefined;

  constructor(props: CourseProps) {
    this.title = props.title;

    props.courseId && (this.courseId = props.courseId);

    this.level = props.level ? props.level : ('beginner' as LEVEL);
    this.createdAt = props.createdAt ? props.createdAt : new Date();
    props.updatedAt && (this.updatedAt = props.updatedAt);
    props.deletedAt && (this.deletedAt = props.deletedAt);
  }

  properties() {
    return {
      courseId: this.courseId,
      title: this.title,
      level: this.level,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(props: CourseUpdate) {
    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.deletedAt = new Date();
  }
}
