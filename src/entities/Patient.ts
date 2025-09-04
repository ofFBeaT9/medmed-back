import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index
} from 'typeorm';

@Entity('patients')
@Index(['email'])
@Index(['phone'])
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100 })
  firstName: string;

  @Column('varchar', { length: 100 })
  lastName: string;

  @Column('date')
  dateOfBirth: Date;

  @Column('varchar', { length: 10 })
  gender: string; // M, F, Other

  @Column('varchar', { length: 255, unique: true })
  email: string;

  @Column('varchar', { length: 20 })
  phone: string;

  @Column('text', { nullable: true })
  address: string;

  @Column('varchar', { length: 100, nullable: true })
  emergencyContact: string;

  @Column('varchar', { length: 20, nullable: true })
  emergencyPhone: string;

  @Column('varchar', { length: 50, nullable: true })
  bloodType: string;

  @Column('simple-array', { nullable: true })
  allergies: string[];

  @Column('simple-array', { nullable: true })
  medicalHistory: string[];

  @Column('text', { nullable: true })
  notes: string;

  @Column('varchar', { length: 50, default: 'active' })
  status: string; // active, inactive, discharged

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relationships - use lazy loading to avoid circular dependencies
  @OneToMany('VitalSigns', 'patient')
  vitalSigns: any[];

  @OneToMany('MedicalRecord', 'patient')
  medicalRecords: any[];

  @OneToMany('LabResult', 'patient')
  labResults: any[];

  @OneToMany('Medication', 'patient')
  medications: any[];
}
