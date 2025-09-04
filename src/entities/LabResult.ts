import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index
} from 'typeorm';

@Entity('lab_results')
@Index(['patientId', 'testType'])
@Index(['testDate'])
export class LabResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  patientId: string;

  @Column('varchar', { length: 100 })
  testType: string; // Blood Test, Urine Test, X-Ray, etc.

  @Column('varchar', { length: 255 })
  testName: string;

  @Column('varchar', { length: 100, nullable: true })
  testCode: string; // Lab code or identifier

  @Column('text')
  result: string;

  @Column('varchar', { length: 100, nullable: true })
  unit: string; // mg/dL, mmol/L, etc.

  @Column('varchar', { length: 100, nullable: true })
  referenceRange: string; // Normal range

  @Column('varchar', { length: 50, nullable: true })
  status: string; // normal, abnormal, critical, pending

  @Column('text', { nullable: true })
  interpretation: string;

  @Column('varchar', { length: 100 })
  orderedBy: string; // Doctor name or ID

  @Column('varchar', { length: 100, nullable: true })
  performedBy: string; // Lab technician or facility

  @Column('timestamp')
  testDate: Date;

  @Column('timestamp', { nullable: true })
  reportedDate: Date;

  @Column('simple-array', { nullable: true })
  attachments: string[]; // Image files, PDFs, etc.

  @Column('text', { nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  // Relationships
  @ManyToOne('Patient', 'labResults', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })
  patient: any;
}
