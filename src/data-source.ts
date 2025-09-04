import { DataSource } from 'typeorm';
import { Patient } from './entities/Patient';
import { User } from './entities/User';
import { VitalSigns } from './entities/VitalSigns';
import { MedicalRecord } from './entities/MedicalRecord';
import { LabResult } from './entities/LabResult';
import { Medication } from './entities/Medication';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // Railway provides this
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'medmed_dev',
  synchronize: process.env.NODE_ENV === 'development', // Only for development
  logging: process.env.NODE_ENV === 'development',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  entities: [
    Patient,
    User,
    VitalSigns,
    MedicalRecord,
    LabResult,
    Medication
  ],
  migrations: ['src/migrations/*.ts'],
  subscribers: ['src/subscribers/*.ts'],
});
