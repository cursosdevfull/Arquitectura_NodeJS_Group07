import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ScheduleEntity } from '../../../schedule/infrastructure/entities/schedule.entity';
import { LEVEL } from '../../application/course';

@Entity({ name: 'course' })
export class CourseEntity {
  @PrimaryGeneratedColumn()
  courseId: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({
    type: 'enum',
    enum: LEVEL, //['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  })
  level: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.course)
  schedules: ScheduleEntity[];
}
