import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index
} from 'typeorm';

@Entity('users')
@Index(['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 100 })
  firstName: string;

  @Column('varchar', { length: 100 })
  lastName: string;

  @Column('varchar', { length: 255, unique: true })
  email: string;

  @Column('varchar', { length: 255 })
  password: string; // Will be hashed

  @Column('varchar', { length: 50, default: 'doctor' })
  role: string; // doctor, nurse, admin, patient

  @Column('varchar', { length: 20, nullable: true })
  phone: string;

  @Column('varchar', { length: 100, nullable: true })
  department: string;

  @Column('varchar', { length: 100, nullable: true })
  specialization: string;

  @Column('varchar', { length: 100, nullable: true })
  licenseNumber: string;

  @Column('boolean', { default: true })
  isActive: boolean;

  @Column('timestamp', { nullable: true })
  lastLogin: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
