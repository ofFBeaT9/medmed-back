import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index
} from 'typeorm';

@Entity('vital_signs')
@Index(['patientId', 'recordedAt'])
export class VitalSigns {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  patientId: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  systolicBP: number; // mmHg

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  diastolicBP: number; // mmHg

  @Column('int', { nullable: true })
  heartRate: number; // bpm

  @Column('decimal', { precision: 4, scale: 1, nullable: true })
  temperature: number; // Celsius

  @Column('int', { nullable: true })
  respiratoryRate: number; // breaths per minute

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  oxygenSaturation: number; // %

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  height: number; // cm

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  weight: number; // kg

  @Column('decimal', { precision: 4, scale: 2, nullable: true })
  bmi: number;

  @Column('varchar', { length: 50, nullable: true })
  painScale: string; // 0-10 or descriptive

  @Column('text', { nullable: true })
  notes: string;

  @Column('varchar', { length: 100 })
  recordedBy: string; // User ID or name

  @Column('timestamp')
  recordedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  // Relationships
  @ManyToOne('Patient', 'vitalSigns', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })
  patient: any;
}
