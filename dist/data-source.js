"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Patient_1 = require("./entities/Patient");
const User_1 = require("./entities/User");
const VitalSigns_1 = require("./entities/VitalSigns");
const MedicalRecord_1 = require("./entities/MedicalRecord");
const LabResult_1 = require("./entities/LabResult");
const Medication_1 = require("./entities/Medication");
exports.AppDataSource = new typeorm_1.DataSource({
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
        Patient_1.Patient,
        User_1.User,
        VitalSigns_1.VitalSigns,
        MedicalRecord_1.MedicalRecord,
        LabResult_1.LabResult,
        Medication_1.Medication
    ],
    migrations: ['src/migrations/*.ts'],
    subscribers: ['src/subscribers/*.ts'],
});
