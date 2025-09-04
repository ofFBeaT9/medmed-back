import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Index
} from 'typeorm';

@Entity('medical_records')
@Index(['patientId', 'recordType'])
@Index(['recordDate'])
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  patientId: string;

  @Column('varchar', { length: 50 })
  recordType: string; // consultation, procedure, diagnosis, treatment, discharge

  @Column('varchar', { length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column('text', { nullable: true })
  diagnosis: string;

  @Column('text', { nullable: true })
  treatment: string;

  @Column('text', { nullable: true })
  medications: string;

  @Column('text', { nullable: true })
  followUpInstructions: string;

  @Column('varchar', { length: 100 })
  recordedBy: string; // Doctor/Provider name or ID

  @Column('varchar', { length: 100, nullable: true })
  department: string;

  @Column('timestamp')
  recordDate: Date;

  @Column('simple-array', { nullable: true })
  attachments: string[]; // File URLs or paths

  @Column('varchar', { length: 50, default: 'active' })
  status: string; // active, archived, deleted

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relationships
  @ManyToOne('Patient', 'medicalRecords', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })
  patient: any;
}
