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

@Entity('medications')
@Index(['patientId', 'status'])
@Index(['startDate', 'endDate'])
export class Medication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  patientId: string;

  @Column('varchar', { length: 255 })
  medicationName: string;

  @Column('varchar', { length: 100, nullable: true })
  genericName: string;

  @Column('varchar', { length: 100 })
  dosage: string; // e.g., "500mg", "10ml"

  @Column('varchar', { length: 100 })
  frequency: string; // e.g., "twice daily", "every 6 hours"

  @Column('varchar', { length: 50 })
  route: string; // oral, IV, IM, topical, etc.

  @Column('varchar', { length: 100, nullable: true })
  form: string; // tablet, capsule, liquid, injection

  @Column('text', { nullable: true })
  instructions: string; // Special instructions for taking

  @Column('varchar', { length: 255 })
  prescribedBy: string; // Doctor name or ID

  @Column('timestamp')
  startDate: Date;

  @Column('timestamp', { nullable: true })
  endDate: Date;

  @Column('varchar', { length: 50, default: 'active' })
  status: string; // active, completed, discontinued, paused

  @Column('text', { nullable: true })
  reason: string; // Reason for prescription

  @Column('text', { nullable: true })
  sideEffects: string; // Observed side effects

  @Column('text', { nullable: true })
  notes: string;

  @Column('int', { nullable: true })
  refillsRemaining: number;

  @Column('timestamp', { nullable: true })
  lastRefillDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relationships
  @ManyToOne('Patient', 'medications', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'patientId' })
  patient: any;
}
