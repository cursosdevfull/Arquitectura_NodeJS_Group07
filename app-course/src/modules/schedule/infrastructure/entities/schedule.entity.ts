import { CourseEntity } from 'src/modules/course/adapters/entities/course.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'schedule' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  scheduleId: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'timestamp' })
  scheduleDate: Date;

  @Column({ type: 'varchar', length: 20 })
  scheduleTime: string;

  @Column({ type: 'int' })
  scheduleDuration: number;

  @Column({ type: 'varchar', length: 200 })
  slogan: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'json' })
  requeriments: string[];

  @Column({ type: 'json' })
  learningGoals: string[];

  @Column({ type: 'json' })
  syllabus: string[];

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar', length: 50 })
  frequency: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => CourseEntity, (course) => course.schedules)
  course: CourseEntity[];
}
